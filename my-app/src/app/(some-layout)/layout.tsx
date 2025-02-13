'use client'

import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

export default function Layout({ children }) {

    const pathname = usePathname();

    return (
        <div>
            <div className={'flex flex-col'}>
                <div className={'h-10 bg-amber-500 text-amber-950 flex gap-10 justify-center'}>
                    <Link href={'/articles'}
                        className={`${pathname === '/articles' ? 'text-cyan-500' : '' } text-black`}>
                    Articles
                    </Link>
                    <Link href={'/profile/settings'}
                        className={`${pathname === '/profile/settings' ? 'text-cyan-500' : '' } text-black`}>
                    Settings
                    </Link>
                    <Link href={'/profile/security'}
                        className={`${pathname === '/profile/security' ? 'text-cyan-500' : '' } text-black`}>
                    Security
                    </Link>
                    <h2>Current pathname : {pathname}</h2>
            </div>


            </div>
            <main>
                {children}
            </main>
        </div>
    )
}