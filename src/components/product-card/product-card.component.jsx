import { useDispatch, useSelector } from 'react-redux';


import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import {
    ProductCardContainer,
    Image,
    Footer,
    Name,
    Price
} from './product-card.styles.jsx';



import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardContainer>
            <Image src={imageUrl} alt={`${name}`}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to Cart</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;