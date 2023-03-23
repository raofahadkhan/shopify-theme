import { useContext } from "react"
import { CartContext } from "@/components/shared/CartContext";
import { useState } from "react"
import { ProductDataType } from "@/components/typesandArrays/AllMensData";

export default function IncrementButtons({ item }: { item: ProductDataType }) {
    const { updatePrice, removeFromCart }: any = useContext(CartContext);
    const [numberOfItems, setNumberOfItems] = useState(1);
    function decrementPerform() {
        if (numberOfItems > 1) {
            setNumberOfItems(numberOfItems - 1)
        } else {
            removeFromCart(item);
        }
        updatePrice("substraction", item.price);
    }
    function incrementPerform() {
        setNumberOfItems(numberOfItems + 1);
        updatePrice("addition", item.price);
    }
    return (
        <div className="border-2 flex justify-center">
            <button className="py-1 px-3 hover:bg-gray-200 text-center" onClick={decrementPerform}>-</button>
            <div className="py-1 px-3 text-center">{numberOfItems}</div>
            <button onClick={incrementPerform} className="py-1 px-3 hover:bg-gray-200 text-center">+</button>
        </div>
    )
}