import { TagProps } from '@/types/types'
import { useForm } from '@inertiajs/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Badge, Button, Form, ListGroup } from 'react-bootstrap';
import { useDebouncedCallback } from 'use-debounce';

interface TagInputProps{
    onTagsChange: (tags: TagProps[]) => void;
}

function TagInput({onTagsChange}: TagInputProps) {
    
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState<TagProps[]>([]);
    const [selectedTags, setSelectedTags] = useState<TagProps[]>([]);

    const debouncedSearch = useDebouncedCallback((query) => {
        if (query.trim()) {
            axios.get(route('tags.search'), {
                params: {query},
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                setSuggestions(response.data)
            }).catch((error) => {
                console.error('Error obteniendo los tags: ', error);
                setSuggestions([]);
            });
        }
        else {
            setSuggestions([]);
        }
    }, 300);

    useEffect(() => {
        debouncedSearch(input);
    }, [input]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleTagSelect = (tag: TagProps) => {
        if (!selectedTags.some(t => t.id == tag.id)) {
            const newTags = [...selectedTags, tag];
            setSelectedTags(newTags);
            onTagsChange(newTags);
        }
        setInput('');
        setSuggestions([]);
    }

    const handleCreateTag = () => {
        axios.post(route('tags.store'), { name: input}, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
            }
        })
        .then((response) => {
            const newTag = response.data;
            handleTagSelect(newTag);
            setInput('');
        })
        .catch((error) => {
            console.error('Error al crear el tag: ', error);
        });
    };
    
    const handleRemoveTag = (tagId: number) => {
        const newTags = selectedTags.filter(tag => tag.id !== tagId);
        setSelectedTags(newTags);
        onTagsChange(newTags);
    };

    return (
        <div>
            <div className="mb-2">
                {selectedTags.map(tag => (
                <Badge 
                    key={tag.id} 
                    bg="primary" 
                    className="me-1 mb-1"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleRemoveTag(tag.id)}
                >
                    {tag.name} &times;
                </Badge>
                ))}
            </div>
            <Form.Group className="mb-3">
                <Form.Control
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type to search or create tags"
                />
            </Form.Group>
            {suggestions.length > 0 && (
            <ListGroup className="mb-3">
                {suggestions.map(tag => (
                    <ListGroup.Item 
                    key={tag.id} 
                    action 
                    onClick={() => handleTagSelect(tag)}
                    >
                    {tag.name}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            )}
        {input && !suggestions.some(tag => tag.name.toLowerCase() === input.toLowerCase()) && (
            <Button variant="success" onClick={handleCreateTag}>
            Create "{input}"
            </Button>
        )}
    </div>
    );
}

export default TagInput;

