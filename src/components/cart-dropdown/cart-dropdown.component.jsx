import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';

import { 
    CartDropwdownContainer,
    CartItems,
    EmptyMessage,
} from './cart-dropdown.styles.jsx';

const CartDropwdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    }

    return (
        <CartDropwdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map(item => (
                        <CartItem key={item.id} cartItem={item} />
                    ))) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </CartDropwdownContainer>
    );
}

export default CartDropwdown;