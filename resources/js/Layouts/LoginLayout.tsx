import React, { PropsWithChildren } from 'react';
import { Link } from '@inertiajs/react';
import logo from '@/assets/images/logo_er.jpeg';
import { Image } from 'react-bootstrap';

function LoginLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center pt-6 bg-light dark:bg-dark">

            <div className="w-100 max-w-md mt-6 p-4 bg-white shadow-md overflow-hidden rounded-lg">
                <div className='justify-content-center align-items-center d-flex mb-4'>
                    <Image src={logo} width={320} alt="" roundedCircle />
                </div>
                {children}
            </div>
        </div>
    );
}

export default LoginLayout