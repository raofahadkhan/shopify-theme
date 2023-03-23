import { ProductDataType } from "../AllMensData";

export interface contextType {
    cart: Array<ProductDataType>,
    addToCart: (item: ProductDataType) => void,
    removeFromCart: (item: ProductDataType) => void,
    price: number,
    updatePrice: (action: string, updatedPrice: string) => void;
}
