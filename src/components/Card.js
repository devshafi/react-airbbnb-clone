import star from '../images/star.png';
export default function Card(props) {

    console.log('props.item', props.item);

    console.log(props.item.openSpots)
    console.log(props.item.location)


    let badgeText;
    if (props.item.openSpots === 0) badgeText = 'SOLD OUT';
    else if (props.item.location === "Online") badgeText = "ONLINE";

    return (
        <div className="card-container">
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={require(`../images/${props.item.coverImg}`)} alt="katie-zaferes" className='card-thumbnail' />
            <div className="rating">
                <img src={star} alt="star" className='star' />
                <span className='rating-point' >{props.item.stats.rating}</span>
                <span className='rating-people'>{props.item.stats.reviewCount} • </span>
                <span className='rating-country'>{props.item.location}</span>
            </div>
            <p className='card-title'>{props.item.title}</p>
            <div className='card-fee'>
                <p className='fee'>From ${props.item.price}</p>
                <p className='fee-slash'>/</p>
                <p>person</p>
            </div>
        </div>
    )
}