// write you code here
import {Component} from 'react'
import ProductCard from '../ProductCard'
import './index.css'
import Navbar from '../Navbar'

class Products extends Component {
    state = {dataFromApi: [], category: "", sort: "", filteredItems: []}

    componentDidMount(){
        this.fetchDataFromApi()
    }

    fetchDataFromApi = async () => {
        const url = "https://fakestoreapi.com/products"
        const response = await fetch(url)
        if (response.ok === true) {
            const fetchedData = await response.json()
            this.setState({dataFromApi: fetchedData, filteredItems: fetchedData})
        }
    }

    onClickCategory = (cat) => {
        const {dataFromApi} = this.state
        const data = dataFromApi.filter(each => (each.category === cat))
        this.setState({category: cat, filteredItems: data})
    }

    renderFilterCard = () => {
        const {category} = this.state

    return(
        <ul className='category-card'>
            <li>
                <input type="radio" id="men" className='radioBtn' onChange={() => this.onClickCategory("men's clothing")} checked={category === "men's clothing"}/>
                <label>Men's Clothing</label>
            </li>
            <li>
                <input type="radio" id="women" className='radioBtn' onChange={() => this.onClickCategory("women's clothing")} checked={category === "women's clothing"} />
                <label>Women's Clothing</label>
            </li>
            <li>
                <input type="radio" id="jewelery" className='radioBtn' onChange={() => this.onClickCategory("jewelery")} checked={category === "jewelery"} />
                <label>Jewelery</label>
            </li>
            <li>
                <input type="radio" id="electronics" className='radioBtn' onChange={() => this.onClickCategory("electronics")} checked={category === "electronics"} />
                <label>Electronics</label>
            </li>
        </ul>
    )
    }

    onClickSortItems = s => {
        this.setState({sort: s})
    }

    renderSortBy = () => {
        const {sort} = this.state

    return(
        <ul className='sortby-ul'>
            <li>
                <input type='radio' id="descending" defaultChecked={sort === "desc"} onChange={() => this.onClickSortItems("desc")} />
                <label htmlFor='descending'>High To Low</label>
            </li>
            <li>
                <input type='radio' id="ascending" defaultChecked={sort === "asc"} onChange={() => this.onClickSortItems("asc")} />
                <label htmlFor='ascending'>Low To High</label>
            </li>
        </ul>
    )
    }


    render(){
        const {filteredItems} = this.state

        return(
            <div>
                <Navbar />
            <div className='all-products-container'>
                <div className='search-card'>
                <h2>All Products</h2>
                <div className="navbar-search">
                    <input type="text" placeholder="Search..." />
                    <button type="submit">Search</button>
                </div>
                </div>
            <div className='container'>
                <div className='search-category-card'>
                    <div>
                        <h3>Categories</h3>
                        {this.renderFilterCard()}
                    </div>
                    <div>
                        <h3>Sort By</h3>
                        {this.renderSortBy()}
                    </div>
                </div>
                
                <ul className='ul'>
                {filteredItems.map(each => (
                    <ProductCard key={each.id} productDetails={each} />
                ))}
                </ul>
            </div>
            </div>
            </div>
        )
    }
}

export default Products