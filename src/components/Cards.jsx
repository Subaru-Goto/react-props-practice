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
        <h2 className="card--title">{props.title}</h2>
        <p className="card--date">{props.startDate} - {props.endDate}</p>
        <p className="card--info">{props.description}</p>
      </div>

    </section>
  )
}
