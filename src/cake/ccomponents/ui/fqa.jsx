import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function FQA() {
    return <section className='py-8 lg:py-30'>
        <div className='px-5 lg:px-0 lg:w-200 mx-auto'>
            <div className='mb-16 text-center'>
                <h1 className='text-2xl font-semibold '>Frequently Ask Questions </h1>
                <p>Get some help about us here</p>
            </div>
            <Accordion
                type="single"
                collapsible
                defaultValue="shipping"
                className="w-full"
            >
                <AccordionItem value="shipping">
                    <AccordionTrigger className={"font-semibold text-lg"}>Do you make special cakes?</AccordionTrigger>
                    <AccordionContent>
                        Yes we do make special cake for our clients, who wish to have something more unique and delight
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns">
                    <AccordionTrigger className={"font-semibold text-lg"}>What locations are you currently delivery to?</AccordionTrigger>
                    <AccordionContent>
                        We are currently in 5 states around nigeria.
                        Here are out delivery states are: <br />
                        <ul className='flex gap-2'>
                            <li>Lagos,</li>
                            <li>Ogun,</li>
                            <li>Ilorin,</li>
                            <li>Osun,</li>
                            <li>Ondo</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="support">
                    <AccordionTrigger className={"font-semibold text-lg"}>How can I contact customer support?</AccordionTrigger>
                    <AccordionContent>
                        Reach us via email, live chat, or phone. We respond within 24 hours
                        during business days.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </section>
}