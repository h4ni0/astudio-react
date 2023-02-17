import { useUsers } from './contexts/UsersContext'
import setTitle from './utils/setTitle'
import Table from './Components/Table'
import MiniMap from './Components/MiniMap'

const Users = () => {
    setTitle('Users')
    const { data, page, setPage, setLimit, filter, setFilter } = useUsers()
    const filtersOption = {
        firstName: 'firstName',
        email: 'email',
        birthDate: 'birthDate',
        gender: 'gender',
    }
    return (
        <div>
            <MiniMap link="Users" />
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

export default Users
