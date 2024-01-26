import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemDetailComponent/ItemListContainer';
import { useGetProductsByCategory } from '../hooks/useCategoryFilter';

const Category = () => {
    const { category } = useParams(); // Ajusta el nombre del parámetro a 'category'

    const { productsData } = useGetProductsByCategory(category); // Ajusta el nombre del parámetro a 'category'

    return <ItemListContainer productsData={productsData} />;
};

export default Category;
