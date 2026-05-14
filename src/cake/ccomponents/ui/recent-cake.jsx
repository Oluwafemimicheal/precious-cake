import { Cake, CakeSlice } from "lucide-react";

export function RecentCake(){
    return <div>
        <div className="px-5 lg:px-0 lg:w-300 mx-auto py-20">
            
            <div className="flex flex-col items-center justify-center text-center ">
                <Cake size={25}/>
                <h2 className=""> <span className="text-2xl font-semibold">Pick your Favorites</span></h2>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </div>

            <ul className="w-full grid lg:grid-cols-6 md:grid-cols-2 gap-5 h-40 mt-10">
                <li className="w-full h-full border rounded-2xl flex justify-center items-center">Wedding Cake</li>
                <li className="w-full h-full border rounded-2xl flex justify-center items-center">Birthday Cake</li>
                <li className="w-full h-full border rounded-2xl flex justify-center items-center">Occasional Cake</li>
                <li className="w-full h-full border rounded-2xl flex justify-center items-center">Celebration Cake</li>
                <li className="w-full h-full border rounded-2xl flex justify-center items-center">Party Cake</li>
                <li className="w-full h-full border rounded-2xl flex justify-center items-center">Party Cake</li>
                
            </ul>
        </div>
    </div>
}