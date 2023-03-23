import Image from "next/image";
import { CartContext } from "@/components/shared/CartContext";
import { useContext } from 'react'
import IncrementButtons from "./IncrementButtons";


export default function CartSectoin() {
    const { cart, removeFromCart }: any = useContext(CartContext);

    return (
        <div className="h-[63%] w-full overflow-y-auto py-6 space-y-4">
            {cart.map((item: any , index:number) =>
                <div key={index+66332344} className="max-w-xs flex w-full">
                    <Image width={90} height={50} src={item.imageUrl} alt="Product img" />
                    <div className="pt-2 space-y-4 px-2 flex-1 flex flex-col ">
                        <h4>{item.name}</h4>
                        <h4>M</h4>
                        <div className="w-full flex justify-between">
                            <IncrementButtons item={item} />
                            <h4>${item.price}</h4>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}