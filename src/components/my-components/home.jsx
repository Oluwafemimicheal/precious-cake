import React from 'react'
import { Button } from '../ui/button'
import { ArrowBigDown } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import {
    Sheet,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
} from '../ui/sheet'


import { Input } from "../ui/input"
import { Label } from "../ui/label"

const Home = () => {
    return (
        <div>
            <h1>Welcome to my Homepage</h1>
            <Button variant='destructive' size='lg'>Click Me <ArrowBigDown /></Button>

            <h1 className='mt-20'>FQA</h1>
            <Accordion
                type="single"
                collapsible
                defaultValue="shipping"
                className="max-w-lg"
            >
                <AccordionItem value="shipping">
                    <AccordionTrigger className={'text-orange-400'}>How can i study react?</AccordionTrigger>
                    <AccordionContent>
                        We offer standard (5-7 days), express (2-3 days), and overnight
                        shipping. Free shipping on international orders.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns">
                    <AccordionTrigger>What is your return policy?</AccordionTrigger>
                    <AccordionContent>
                        Returns accepted within 30 days. Items must be unused and in original
                        packaging. Refunds processed within 5-7 business days.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="support">
                    <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                    <AccordionContent>
                        Reach us via email, live chat, or phone. We respond within 24 hours
                        during business days.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>


            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">Open</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you&apos;re done.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid flex-1 auto-rows-min gap-6 px-4">
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-name">Name</Label>
                            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-username">Username</Label>
                            <Input id="sheet-demo-username" defaultValue="@peduarte" />
                        </div>
                    </div>
                    <SheetFooter>
                        <Button type="submit">Save changes</Button>
                        <SheetClose asChild>
                            <Button variant="outline">Close</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Home
