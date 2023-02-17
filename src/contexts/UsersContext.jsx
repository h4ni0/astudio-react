import axios from 'axios'
import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
const UsersContext = createContext()

const UsersProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(5)
    const [skip, setSkip] = useState(0)
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState({})

    useEffect(() => {
        setSkip((page - 1) * limit)
        // check if theres filters
        if (Object.keys(filter).length === 2) {
            // if there are filters, get filtered data from the server
            if (filter.value === '' || filter.value === 'none')
                setData([]) // return empty list if the value is empty
            else
                axios
                    .get(
                        `https://dummyjson.com/users/filter?key=${filter.key}&value=${filter.value}&limit=${limit}&skip=${skip}&select=firstName,lastName,maidenName,age,gender,email,username,bloodGroup,eyeColor`
                    )
                    .then((response) => setData(response.data))
        } else {
            // if there are no filters, just get the normal data
            axios
                .get(
                    `https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=firstName,lastName,maidenName,age,gender,email,username,bloodGroup,eyeColor`
                )
                .then((response) => setData(response.data))
        }
    }, [page, limit, skip, filter])

    return (
        <UsersContext.Provider
            value={{ data, page, setPage, setLimit, filter, setFilter }}
        >
            {children}
        </UsersContext.Provider>
    )
}

const useUsers = () => {
    const context = React.useContext(UsersContext)
    if (context === undefined) {
        throw new Error('useUsers must be used within a UsersProvider')
    }
    return context
}

export default UsersProvider
export { useUsers }
