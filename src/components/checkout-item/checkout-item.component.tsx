import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import { CartItem as CheckoutCartItem } from '../../store/cart/cart.types';

import { 
    clearItemFromCart,
    addItemToCart,
    removeItemFromCart
 } from '../../store/cart/cart.action';

import { 
    Arrow, 
    CheckoutItemContainer, 
    ImageContainer, 
    Quantity, 
    Image, 
    Value, 
    Price, 
    RemoveButton, 
    Name 
} from './checkout-item.styles';

type CheckoutItemProps = {
    cartItem: CheckoutCartItem
}


const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const clearItem = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItem = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItem = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItem}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItem}>
                    &#10095;
                </Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;