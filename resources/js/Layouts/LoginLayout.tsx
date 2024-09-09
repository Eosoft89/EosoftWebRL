import React, { PropsWithChildren } from 'react'
import { Link } from '@inertiajs/react'

function LoginLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center pt-6 bg-light dark:bg-dark">
            <div>
                <Link href='#'>
                    <img src="storage/images/eosoft_logo.png" width={300} alt="" />
                </Link>
            </div>
            
            <div className="w-100 max-w-md mt-6 p-4 bg-white shadow-md overflow-hidden rounded-lg">
                {children}
            </div>
        </div>
    );
}

export default LoginLayout