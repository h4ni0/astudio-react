import { useProducts } from './contexts/ProductsContext'
import setTitle from './utils/setTitle'
import Table from './Components/Table'
import MiniMap from './Components/MiniMap'

const Products = () => {
    setTitle('Products')
    const { data, page, setPage, setLimit, filter, setFilter } = useProducts()
    const filtersOption = {
        title: 'title',
        brand: 'brand',
        category: 'category',
    }
    return (
        <div>
            <MiniMap link="Products" />
            <Table
                data={data}
                page={page}
                setPage={setPage}
                setLimit={setLimit}
                filter={filter}
                setFilter={setFilter}
                filtersOption={filtersOption}
            />
        </div>
    )
}

export default Products
