import { Button } from "@/components/ui/button"
import {
  Dialog,

  DialogClose,

  DialogContent,
  DialogDescription,

  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"
import { Star, X } from "lucide-react"
import { useState } from "react"


function priceFormat(price) {
  const nigeriaCurrency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(price);

  return nigeriaCurrency
}




export function DialogModal({ data, setOpen, open }) {
  const [order, setOrder] = useState(false)
  return <div className="z-99">
    <Dialog open={open} onOpenChange={setOpen} className="z-99">
      <DialogContent className="lg:max-w-200! h-auto lg:h-110! mx-auto! overflow-hidden">
        <DialogHeader>
          <DialogTitle>Product Details</DialogTitle>
          <DialogDescription>
            <div className="flex lg:flex-row flex-col justify-between items-start gap-10 mt-5">
              <div className="lg:w-80 h-80 flex justify-center items-center overflow-hidden rounded-2xl">
                <img src={data?.image} alt="" />
              </div>
              <div className="flex flex-col justify-start items-start flex-1">
                <span>{data?.title}</span>
                <h1 className="text-2xl font-bold text-black">{data?.title}</h1>
                <p>{data?.description}</p>
                <span className="font-bold text-lg text-black">{priceFormat(data?.price)}</span>
                <div className="flex gap-2 mt-3">
                  {
                    [1, 2, 3, 4, 5].map((index) => (
                      <Star key={index} />
                    ))
                  }
                </div>
                <Button onClick={() => {
                  setOrder(true)
                  setOpen(false)
                }} className={'mt-10 w-full cursor-pointer'}>Buy Now</Button>
              </div>
            </div>



          </DialogDescription>
        </DialogHeader>



      </DialogContent>
    </Dialog>
    {
      order && <Dialog open={order} onOpenChange={setOrder}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='text-lg font-bold'>Connect with us at PreciousCake</DialogTitle>
            <DialogDescription>

              <div>
                <span className="text-md font-semibold text-black">Direct payment please call: <p className="uppercase">CEO: Mrs Ayomide Precious  +234 705 9876 286</p></span>
                <h1 className="mt-5 text-[20px] text-black font-bold">{data?.title}</h1>
                <h1 className="font-bold text-md text-black">{priceFormat(data?.price)}</h1>
                <Button onClick={() => {
                  setOrder(false)
                  setOpen(false)
                }} className={'mt-10 w-full cursor-pointer'}>Place Order Now</Button>
              </div>
            </DialogDescription>

          </DialogHeader>



        </DialogContent>
      </Dialog>
    }
  </div>
}