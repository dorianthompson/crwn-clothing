import { FC, memo } from 'react';
import { CartItemContainer, ItemDetails, Name, Image } from './cart-item.styles';

import { CartItem as CheckoutCartItem } from '../../store/cart/cart.types.js';

export type CartItemProps = {
    cartItem: CheckoutCartItem
}

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <Image src={imageUrl} alt={name}/>
            <ItemDetails>
                <Name>{name}</Name>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
});

export default CartItem;