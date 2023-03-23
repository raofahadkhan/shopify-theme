import { AllCatogryData } from "@/components/typesandArrays/AllMensData"
import { CartContext } from "@/components/shared/CartContext"
import { useContext } from 'react'

export default function Addtocart() {
  const { addToCart, updatePrice }: any = useContext(CartContext);

  return (
    <div className="flex flex-wrap pt-40 w-full h-auto bg-red-600 absolute inset-0 -z-50">
      {AllCatogryData[0].productData?.map((item: any, index: number) => (
        <div key={index+232} className="flex-shrink-0 w-60 text-center py-10 bg-blue-600 mx-4 my-4">
          <p>
            {item.name}
          </p>
          <button onClick={() => { addToCart(item); updatePrice("addition", item.price) }} className="bg-red-500">Add to cart</button>
        </div>
      ))}
    </div>
  )
}