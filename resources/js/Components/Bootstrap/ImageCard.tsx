import { ImageProps } from '@/types/types'
import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import ToastMessage from './ToastMessage';

type Props = {
    image: ImageProps;
    canDelete?: boolean;
    handleDelete?: (id: number) => void;
}

function ImageCard({ image, canDelete = false, handleDelete }: Props) {
    
    const[showToast, setShowToast] = useState(false);
    const handleHideToast = () => setShowToast(false);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setShowToast(true);
        } catch (error) {
            alert('Error: ' + error);
        }
    }
    
    return (
        <>
            <Card style={{ width: '14rem'}}>
                <Card.Img style={{ height: '10rem'}} variant="top" src={image.url}/>
                <Card.Body className='d-flex flex-column'>
                    <Card.Text style={{fontSize: 12 }}>
                        <b>Link: </b>{image.url}
                    </Card.Text>
                    <div className='d-grid gap-2 mt-auto'>
                        <Button variant="primary" size='sm' onClick={() => copyToClipboard(image.url)}>Copiar link</Button>
                        { canDelete &&  <Button variant="danger" size='sm' onClick={() => handleDelete?(image.id): Function}>Eliminar</Button> }
                    </div>          
                </Card.Body>
            </Card>
            <ToastMessage title='Copiado!' showToast={showToast} onClose={handleHideToast}>
                Copiado al portapapes.
            </ToastMessage>
        </>
    )
}

export default ImageCard