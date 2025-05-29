import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'
import { checkUser } from '../lib/checkuser'

const Header = async () => {
    await checkUser()
    return (
        <header className='fixed top-0 w-full bg-white-800 backdrop-blur-md z-50 border-b'>
            <nav className='container mx-auto py-4 flex items-center justify-between'>
                <Link href="/">
                    <Image
                        src={"/logo.png"}
                        alt="brand logo"
                        height={60}
                        width={200}
                        className='h-12 w-auto object-contain' />
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <SignedOut>
                        <a href="#features" className="text-gray-600 hover:text-blue-600">
                            Features
                        </a>
                        <a
                            href="#testimonials"
                            className="text-gray-600 hover:text-blue-600"
                        >
                            Testimonials
                        </a>
                    </SignedOut>
                </div>
                <div className='flex flex-row'>
                    <div className='flex items-center space-x-4'>
                        <SignedIn>
                            <Link href={'/dashboard'} className='text-gray-600 hover:text-blue-600 flex items-center gap-2'>
                                <Button variant='outline'>
                                    <LayoutDashboard size={18} />
                                    <span className='hidden md:inline' >Dashboard</span>
                                </Button>
                            </Link>
                            <Link href='/transaction/create'>
                                <Button className='flex items-center gap-2'>
                                    <PenBox size={18} />
                                    <span className='hidden md:inline' >Add Transaction</span>
                                </Button>

                            </Link>
                        </SignedIn>
                    </div>
                    <SignedOut>
                        <div className='space-x-3'>
                            <SignInButton forceRedirectUrl="/dashboard">
                                <Button variant="outline"> Login</Button>
                            </SignInButton>
                            <SignUpButton />
                        </div>
                    </SignedOut>
                    <SignedIn>
                        <UserButton appearance={{
                            elements: {
                                avatarBox: "w-10 h-10",
                            }
                        }} />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default Header
