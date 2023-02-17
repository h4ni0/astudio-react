import { Link } from 'react-router-dom'

const MiniMap = ({ link }) => (
    <div className="mb-8">
        <Link to="/">Home</Link> /{' '}
        <mark className="font-bold bg-yellow h-1/2">{link}</mark>
    </div>
)

export default MiniMap
