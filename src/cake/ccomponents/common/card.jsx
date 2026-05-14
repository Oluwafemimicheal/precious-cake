export function Card({h, image, children}){

    const bg = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };


    return <div style={bg} className={`w-full h-${h} p-5 rounded-md border flex justify-center items-center hover:shadow-lg transition-all`}>
        {children}
    </div>
}

export function CakeCard({children}){
    return <div className={`w-full min-h-60  p-5 rounded-md border flex justify-center items-center hover:shadow-lg shadow-blue-200 transition-all`}>
        {children}
    </div>
}