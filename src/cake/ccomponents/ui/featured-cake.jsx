import { featuredData } from "@/cake/data/data";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CakeCard, Card } from "../common/card";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogModal } from "../common/dialog";
import { priceFormat } from "@/cake/utils/currencyFormat";

export function FeaturedCake() {
    const [showDialog, setShowDialog] = useState(null)
    const [open, setOpen] = useState(false);

    const data = featuredData
    return <div className="py-10 h-auto">

        {/* banner */}
        <div className="px-5 lg:px-0 bg-purple-600 flex flex-col gap-2 justify-center items-center text-center h-50 text-white ">
            <h2 className="lg:text-2xl font-semibold uppercase">Get 20% Off on Every 2 Orders</h2>
            <p className="text-black text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            <Button>Order Now</Button>
        </div>


        <div className="px-5 lg:px-0 lg:w-300 mx-auto mt-20">
            <ul className="w-full grid lg:grid-cols-5 md:grid-cols-2 gap-5 my-10">
             
                {
                    data.map((cake, index) => (
                        <CakeCard key={index}>
                            <div className="h-full flex flex-col justify-between items-center">
                                <div className="flex flex-col justify-center items-center text-center gap-2">
                                    <div className="w-30 h-30 bg-gray-200 rounded-full overflow-hidden flex justify-center items-center">
                                        <img src={cake.image} alt="" />
                                    </div>
                                    <h1 className="lg:text-lg font-bold leading-tight">{cake.title}</h1>

                                    <span className="mb-5 font-bold text-lg">{priceFormat(cake?.price)}</span>
                                </div>

                                <Button size="sm" onClick={() => {
                                    setShowDialog(cake);
                                    setOpen(true);
                                }}>Order Now</Button>
                            </div>
                        </CakeCard>
                    ))
                }
            </ul >


            <DialogModal data={showDialog} setOpen={setOpen} open={open} />



            {/* Pagination */}
            {/* <div className="flex items-center justify-end gap-2">
                <Button variant="ghost"><ChevronLeft /></Button>

                <div>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                </div>
                <Button variant="ghost"><ChevronRight /></Button>
            </div> */}

        </div >
    </div >
}