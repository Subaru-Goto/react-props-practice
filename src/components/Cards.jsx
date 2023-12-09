import Images from '../images/Images';

export default function Cards(props) {
  return (
    <section className='cards'>
      <div className='card--item'>
        <img 
          className="card--img"
          src={props.imageUrl}
          alt="Location image" />
        <div className='card--location'>
          <img
          className="location--img"
           src={Images.locationIcon}
           alt="Location icon" />
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className="card--title">
          <h2>{props.title}</h2>
        </div>
        <div className="card--date">
          <p>{props.startDate} - {props.endDate}</p>
        </div>
        <div className="card--info">
          <p>{props.description}</p>
        </div>
      </div>

    </section>
  )
}
