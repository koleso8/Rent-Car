import CatalogList from '../components/catalog/CatalogList';
import Filter from '../Filter/Filter';
import LoadMoreButton from '../components/LoadMoreButton';

const CatalogPage = () => {
  return (
    <div className="max-w-[1184px] mx-auto">
      <Filter />
      <CatalogList />
      <LoadMoreButton />
    </div>
  );
};

export default CatalogPage;
