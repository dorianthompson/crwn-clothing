import { AnyAction } from "redux";

import { setCartItems, setIsCartOpen } from "./cart.action";

import { CartItem } from "./cart.types";

export type CartState = {
    readonly isCartOpen: Boolean;
    readonly cartItems: CartItem[];
}

const INITIAL_STATE: CartState = {
    cartItems: [],
    isCartOpen: false
};

export const cartReducer = (state = INITIAL_STATE, action: AnyAction ): CartState => {
    if(setIsCartOpen.match(action)){
        return{ ...state, isCartOpen: action.payload};
    }

    if(setCartItems.match(action)){
        return{ ...state, cartItems: action.payload};
    }

    return state;
}