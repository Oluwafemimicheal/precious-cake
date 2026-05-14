import { Card } from "../common/card"
import {categoriesData} from '../../data/data'




export function Categories() {
    return <div>
        <div className="px-5 lg:px-0 lg:w-300 mx-auto flex flex-col gap-10 items-center justify-center py-10">
            {/* card */}
            <div  className="w-full">
                <h2 className="text-left font-semibold text-2xl">Cake Categories section</h2>
            </div>

            <ul className="w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 h-auto lg:h-40">
                {
                    categoriesData.map((category, index) => (
                        <Card key={index} h={40} sh={20} image={category.image}>
                            <p className="p-2 bg-white/90 text-black rounded-2xl font-semibold">{category.title}</p>
                        </Card>
                    ))
                }
            </ul>

        </div>
    </div>
}