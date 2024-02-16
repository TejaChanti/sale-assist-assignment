import { FaStar } from "react-icons/fa"
import './index.css'

const ProductCard = props => {
    const {productDetails} = props
    const {image, price, rating, title} = productDetails

    return(
        <li className="li">
            <img src={image} alt={title} className='product-image' />
            <div className='rating-count-card'>
                <div className="rating-card">
                    <p>{rating.rate}</p>
                    <FaStar className="rating-icon" />
                </div>
                <span>|</span>
                <p>{rating.count}</p>
            </div>
            <p className="title">{title.slice(0, 20)}</p>
            <p className="price">Rs. {price}</p>
        </li>
    )
}

export default ProductCard