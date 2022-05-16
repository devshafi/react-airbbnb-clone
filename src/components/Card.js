import katieImage from '../images/katie-zaferes.png'
import star from '../images/star.png';

export default function Card(props) {
    console.log(props)
    return (
        <div className="card-container">

            <img src={katieImage} alt="katie-zaferes" className='card-thumbnail'/>
            <div className="rating">
                <img src={star} alt="star" className='star' />
                <span className='rating-point' >{props.rating}</span> 
                <span className='rating-people'>{props.reviewCount} • </span>
                <span className='rating-country'>{props.country}</span>
            </div>
            <p className='card-title'>{props.title}</p>
            <div className='card-fee'>
                <p className='fee'>From ${props.price}</p>
                <p className='fee-slash'>/</p>
                <p>person</p>
            </div>
        </div>
    )
}