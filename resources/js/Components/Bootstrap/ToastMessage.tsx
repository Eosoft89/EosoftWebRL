import React, { ReactNode } from 'react'
import { Toast, ToastContainer, ToastContainerProps } from 'react-bootstrap'

type Props = {
    title: string;
    children: ReactNode;
    showToast: boolean;
    onClose: () => void;
    delay?: number;
    variant?: 'success' | 'danger' | 'warning';
    

     
}

function ToastMessage({ title, children, showToast, onClose, delay = 2000, variant = 'success', }: Props) {
    return (
        <ToastContainer className='p-3 position-fixed' position='bottom-end' style={{zIndex: 1}}>
          <Toast onClose={onClose} show={showToast} delay={delay} bg={variant} autohide>
            <Toast.Header>
              <strong className="me-auto"><i className="bi bi-check-all fs-5"/> {title}</strong>
            </Toast.Header>
            <Toast.Body className='text-white'>{children}</Toast.Body>
          </Toast>
        </ToastContainer>  
    )
}

export default ToastMessage;