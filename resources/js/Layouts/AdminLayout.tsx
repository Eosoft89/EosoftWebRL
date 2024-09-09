import Sidebar from '@/Components/Bootstrap/Sidebar';
import { User } from '@/types';
import React, { PropsWithChildren, ReactNode, useState } from 'react'
import { Nav, Navbar, Container, Offcanvas, Button, Col } from 'react-bootstrap';

type Props = {}

function AdminLayout({user, header, children}: PropsWithChildren<{user: User, header?: ReactNode }>) {
    
    return (
        <div className='d-flex'>
            <Sidebar/>
            <div className='content p-3'>
                {children}
            </div>
        </div> 
    );
}

export default AdminLayout