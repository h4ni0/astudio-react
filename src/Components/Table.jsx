import { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import SearchIcon from '@mui/icons-material/Search'

const Table = ({
    data,
    filter = {},
    setFilter,
    page,
    setPage,
    setLimit,
    filtersOption,
}) => {
    const [searchVisible, setSearchVisible] = useState(false)
    const [search, setSearch] = useState('')

    // retrieve items from data
    const items = data.users ? data.users : data.products ? data.products : []
    // retrieve fields from items
    const fields = items?.length ? Object.keys(items[0]) : []
    return (
        <>
            {/* -- Filters -- */}
            <div className="flex justify-start items-center mb-3 divide-x-2">
                {/* Entries Number */}
                <div className="flex items-center mr-4">
                    <select
                        onChange={(e) => {
                            setLimit(e.target.value)
                        }}
                        defaultValue={5}
                    >
                        {[5, 10, 20, 50].map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>{' '}
                    <div className="ml-4">Entries</div>
                </div>
                {/* Search Button */}
                <div className="flex items-center px-4">
                    {/* search icon */}
                    <SearchIcon
                        className="color-grey"
                        onClick={() => setSearchVisible(!searchVisible)}
                    />
                    {searchVisible && (
                        <input
                            className="border-b border-gray-300 mx-2 focus:outline-none"
                            type="text"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    )}
                </div>
                {/* Filters Options */}
                <div className="flex items-center px-4">
                    <select
                        className="mr-4"
                        onChange={(e) => {
                            setFilter({
                                ...filter,
                                key: e.target.value,
                            })
                        }}
                        value={filter.key ? filter.key : ''}
                    >
                        <option value="">Filter By</option>
                        {Object.keys(filtersOption).map((option) => (
                            <option key={option} value={option}>
                                {option.toUpperCase()}
                            </option>
                        ))}
                    </select>
                    {filter.key && (
                        <input
                            className="border-b border-gray-300 mx-2 focus:outline-none"
                            type="text"
                            onChange={(e) =>
                                setFilter({ ...filter, value: e.target.value })
                            }
                        />
                    )}

                    {Object.keys(filter).length !== 0 && (
                        <button
                            className="ml-4 bg-grey rounded px-2 py-1 text-sm"
                            onClick={() => {
                                setFilter({})
                            }}
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>

            {/* Table */}
            {items.length === 0 && Object.keys(filter).length === 0 && (
                <div className="flex justify-center items-center my-10">
                    <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray"></div>
                </div>
            )}
            <table className="table-auto w-full">
                <thead>
                    <tr className="uppercase bg-blue border-collapse text-left">
                        {fields
                            .filter((field) => field != 'id')
                            .map((field) => (
                                <th key={field}>{field}</th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {items.length === 0 && Object.keys(filter).length !== 0 ? (
                        <tr className="flex justify-center items-center my-10">
                            <td className="text-2xl border-none">No Results</td>
                        </tr>
                    ) : (
                        items
                            .filter(
                                (user) =>
                                    JSON.stringify(user)
                                        .toLowerCase()
                                        .indexOf(search.toLowerCase()) !== -1
                            )
                            .map((user, index) => (
                                <tr key={index}>
                                    {fields
                                        .filter((field) => field != 'id')
                                        .map((field) => (
                                            <td key={field}>{user[field]}</td>
                                        ))}
                                </tr>
                            ))
                    )}
                </tbody>
            </table>

            <div className="my-10 flex justify-center">
                <Pagination
                    count={data.total ? Math.ceil(data.total / data.limit) : 0}
                    page={page}
                    onChange={(event, val) => setPage(val)}
                />
            </div>
        </>
    )
}

export default Table
