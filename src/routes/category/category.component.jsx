import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import { 
    CategoryTitle,
    CategoryContainer
} from './category.styles.jsx';

import { selectCategoriesMap } from '../../store/categories/category.selector.js';

import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
    const { category } = useParams();
    console.log('render/re-rendering category component');
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        console.log('effect fired calling setProducts');
        setProducts(categoriesMap[category]);
    },[category, categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
            {
                products 
                    && products.map(product => <ProductCard key={product.id} product={product}/>)
            }
            </CategoryContainer>
        </Fragment>
    )
}

export default Category;