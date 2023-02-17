import MiniMap from './Components/MiniMap'

import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <MiniMap link="" />
            {/* react router with link to the products page */}
            <div className="flex justify-center divide-x-2">
                <Link to="/users">
                    {/* card */}
                    <div className="py-4 border border-grey bg-white hover:bg-blue shadow-md rounded-lg overflow-hidden w-64 m-4">
                        <div className="bg-cover bg-center flex justify-center items-center p-4">
                            <h2 className="text-black text-4xl font-bold">
                                Users
                            </h2>
                        </div>
                    </div>
                </Link>
                <Link to="/products">
                    {/* card */}
                    <div className="py-4 border border-grey bg-white hover:bg-blue shadow-md rounded-lg overflow-hidden w-64 m-4">
                        <div className="bg-cover bg-center flex justify-center items-center p-4">
                            <h2 className="text-black text-4xl font-bold">
                                Products
                            </h2>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home
