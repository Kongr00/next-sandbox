'use client'


import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
export default function Layout({ children }) {

    const pathname = usePathname();


    return (
        <div className={'flex flex-col text-xs'}>
            <div className={'h-10 bg-amber-500 text-amber-950 flex gap-10 justify-center'}>
                <Link href={'/articles/favorite'}
                  className={`${pathname === '/articles/favorite' ? 'text-cyan-500' : '' } text-black`}
                replace={true}>
                    Favorite
                </Link>
                <Link href={'/articles/create'}
                  className={`${pathname === '/articles/create' ? 'text-cyan-500' : '' } text-black`}
                replace={true}>
                    Create
                </Link>
                <h2>Current pathname : {pathname}</h2>
            </div>

            <div>
                {children}
            </div>
        </div>
    )
}
