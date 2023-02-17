import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Users from './Users'
import Products from './Products'
import Home from './Home'

function App() {
    return (
        <div className="container mx-auto px-4 py-10">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/users" element={<Users />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
