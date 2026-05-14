import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { CakeCard } from '../ccomponents/common/card';
import { DialogModal } from '../ccomponents/common/dialog';
import { featuredData } from '../data/data';
import { priceFormat } from '../utils/currencyFormat';
import { ChevronLeft, ChevronRight, ShoppingBasket } from 'lucide-react';




const Shop = () => {

  const [category, setCategory] = useState('')
  const [showDialog, setShowDialog] = useState(null)
  const [open, setOpen] = useState(false);


  const data = category
    ? featuredData.filter(item => item.category === category)
    : featuredData;
  return <div className="h-auto">

    {/* banner */}
    <div className="px-5 lg:px-0 bg-linear-to-b from-purple-600 flex flex-col gap-2 justify-center items-center text-center h-100">
      <h2 className="lg:text-2xl font-semibold">Get 20% Off on Every 2 Orders</h2>
      <p className="text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
      <Button>Order Now</Button>
    </div>


    <div className="px-5 lg:px-0 lg:w-300 mx-auto mt-10">

      <div className="hidden lg:block">
        <h2 className="lg:text-2xl font-semibold">Top Trending Taste</h2>
        <div className="flex flex-wrap items-center justify-start gap-5 mt-5">
          <Button variant="outline" onClick={() => setCategory('')}>All</Button>
          <Button variant="outline" onClick={() => setCategory('cake')}>Special Cakes</Button>
          <Button variant="outline" onClick={() => setCategory('parfaits')}>Parfaits</Button>
          <Button variant="outline" onClick={() => setCategory('chi')}>Chi-chi</Button>
          <Button variant="outline" onClick={() => setCategory('chops')}>Small Chops</Button>
          <Button variant="outline" onClick={() => setCategory('pastry')}>Pastry</Button>
        </div>

      </div>

      {data.length === 0 && <div className='flex flex-col justify-center items-center h-60 w-full'><ShoppingBasket size={50} color='gray' /> <h2 className='font-semibold text-lg text-gray-500'>No Item found</h2></div>}
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
      <div className="flex items-center justify-end gap-2">
        <Button variant="ghost"><ChevronLeft /></Button>

        <div>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </div>
        <Button variant="ghost"><ChevronRight /></Button>
      </div>

    </div >
  </div >
}

export default Shop
