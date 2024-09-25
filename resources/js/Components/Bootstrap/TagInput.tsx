import { TagProps } from '@/types/types'
import React, { useState } from 'react'

interface TagInputProps{
    onTagsChange: (tags: TagProps[]) => void;
}

function TagInput({onTagsChange}: TagInputProps) {
    
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState<TagProps[]>([]);
    const [selectedTags, setSelectedTags] = useState<TagProps[]>([]);

    return (
    <div>TagInput</div>
  )
}

export default TagInput;

