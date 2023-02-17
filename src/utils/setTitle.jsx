import { useEffect } from 'react'

const setTitle = (title) => {
    useEffect(() => {
        document.title = title
    }, [title])
}

export default setTitle
