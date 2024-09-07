import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }: InertiaLinkProps & { active: boolean }) {
    return (
        <li className='nav-item'>
            <Link
                {...props}
                className={
                    'nav-link' +
                    (active
                        ? ' active'
                        : '')
                }>
                {children}
            </Link>
        </li>
    );
}
