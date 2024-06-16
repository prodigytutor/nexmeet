"use client"
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
type Props = {}


const SideBar = (props: Props) => {
    const pathname = usePathname();
    return (
        <section className='sticky left-0 top-0 flex h-screen flex-col justify-between bg-dark-1 p-6 pt-20 text-white max-sm:hidden lg:x-[264px]'>
            <div className='flex flex- flex-col gap-6'>
                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={cn(
                                'flex gap-4 items-center p-4 rounded-lg justify-start',
                                {
                                    'bg-blue-1': isActive,
                                }
                            )}
                        >
                            <Image
                                src={item.imgUrl}
                                alt={item.label}
                                width={24}
                                height={24}
                            />
                            <p className="text-lg font-semibold max-lg:hidden">
                                {item.label}
                            </p>
                        </Link>


                    )
                })}
            </div>
        </section>
    )
}

export default SideBar