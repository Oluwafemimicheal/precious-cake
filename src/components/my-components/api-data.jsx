import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import errorSVG from '../../assets/undraw_server-down_lxs9.svg'

const productData = async () => {
    const response = await axios.get('https://dummyjson.com/produc')
    return response.data.products
}

function ApiData() {
    const { data, isLoading, isError, error} = useQuery(
        { queryKey: ['products'], queryFn: productData }
    )

   if (isError) {
    return <div className="fixed top-0 w-full h-screen flex  flex-col justify-center items-center z-10 bg-amber-700/30">
        <img src={errorSVG} alt="error" width={300}/>
        <h2>{error.message}</h2>
    </div>
   }

    return (
        <div>
            {isLoading && 'Loading'}
            {
                data?.map(product => (
                    <div key={product.id}>
                        {product.title}
                    </div>
                ))
            }
        </div>
    )
}

export default ApiData