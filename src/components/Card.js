import star from '../images/star.png';
export default function Card(props) {

    let badgeText;
    if (props.openSpots === 0) badgeText = 'SOLD OUT';
    else if (props.location === "Online") badgeText = "ONLINE";

    return (
        <div className="card-container">
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={require(`../images/${props.coverImg}`)} alt="katie-zaferes" className='card-thumbnail' />
            <div className="rating">
                <img src={star} alt="star" className='star' />
                <span className='rating-point' >{props.stats.rating}</span>
                <span className='rating-people'>{props.stats.reviewCount} • </span>
                <span className='rating-country'>{props.location}</span>
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