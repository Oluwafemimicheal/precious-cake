import { navbarLinks } from '@/cake/data/data'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Cake, Menu } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import useScroll from '@/cake/hooks/useScroll'

const Navbar = () => {
    const { isScrolled } = useScroll({ threshold: 100 })

    return (
        <nav className={`transition-all duration-300 z-99 ${isScrolled ? 'bg-white text-purple-900 shadow-lg backdrop-blur-sm py-3 sticky top-0 z-10' : 'bg-transparent fixed top-0 w-full py-5'}`}>
            <div className='px-5 lg:px-0 lg:w-300 mx-auto flex items-center justify-between'>
                <h1 className={`text-2xl font-bold flex items-end justify-center ${isScrolled ? 'text-purple-900' : ' text-white'}`}><Cake size={40} />PreciousCake</h1>

                <ul className='hidden lg:flex justify-center items-center gap-8'>
                    {
                        navbarLinks.map((link, index) => (
                            <li onClick={()=> window.scrollTo(0, 0)} key={index}><NavLink to={link.link} className={({ isActive }) => isActive ? "text-purple-900! px-0 py-1.5 rounded-md" : "bg-transparent"
                            } ><Button variant='ghost' className={isScrolled ? 'text-purple-900' : 'text-white'}>{link.title}</Button></NavLink></li>
                        ))
                    }

                    <li className='inline-flex items-center'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className={isScrolled ? 'text-purple-900' : 'text-white'}>Categories</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>Special Cakes</DropdownMenuItem>
                                    <DropdownMenuItem>Parfaits</DropdownMenuItem>
                                    <DropdownMenuItem>Chi-chi</DropdownMenuItem>
                                    <DropdownMenuItem>Small chops</DropdownMenuItem>
                                    <DropdownMenuItem>Pastry items</DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                </ul>


                <Sheet className="lg:hidden">
                    <SheetTrigger asChild >
                        <Button variant="outline" className={`lg:hidden ${isScrolled ? 'text-white border-white' : ''}`}><Menu /></Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader className={'border-b'}>
                            <SheetTitle className={'text-2xl font-bold'}>PreciousCake</SheetTitle>
                            <SheetDescription className={'text-sm'}>
                                Experience the tasty that calls for more
                            </SheetDescription>
                        </SheetHeader>
                        <div className='px-5 h-full'>
                            <ul className='flex flex-col h-full text-black gap-8'>
                                <li>Home</li>
                                <li>Shop</li>
                                <li className='inline-flex items-center'>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline">Open</Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuGroup>
                                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>Team</DropdownMenuItem>
                                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <SheetFooter className={'flex flex-col flex-wrap gap-2 mb-10'}>
                            <div className='text-center mb-4'>
                                <h2 className='font-semibold'>Connect with us on social media:</h2>
                            </div>
                            <div className='flex flex-row! flex-wrap gap-3 justify-center'>
                                <Button size='xs'>Facebook</Button>
                                <Button size='xs'>Instagram</Button>
                                <Button size='xs'>Tiktok</Button>
                                <Button size='xs'>Twitter</Button>
                            </div>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export default Navbar
