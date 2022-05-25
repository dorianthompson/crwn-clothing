import './checkout-item.styles.jsx';

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { Arrow, CheckoutItemContainer, ImageContainer, Quantity, Image, Value, Price, RemoveButton, Name } from './checkout-item.styles.jsx';


const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const clearItem = () => clearItemFromCart(cartItem);
    const addItem = () => addItemToCart(cartItem);
    const removeItem = () => removeItemFromCart(cartItem);

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