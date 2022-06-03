import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import {
    DirectoryItemBodyContainer,
    BackgroundImage,
    DirectoryItemContainer
}
from  './directory-item.styles';

import { DirectoryCategory } from '../directory/directory.component';

type CategoryItemProps = { category: DirectoryCategory };

const DirectoryItem: FC<CategoryItemProps> = ({ category }) => {
    const {imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return(
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl}/>
            <DirectoryItemBodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryItemBodyContainer>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;