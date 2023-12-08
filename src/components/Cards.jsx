export default function Cards() {
  return (
    <section className='cards'>
      <div className='card--item'>
        <img 
          className="card--img"
          src="https://source.unsplash.com/WLxQvbMyfas"
          alt="Location image" />
        <div className='card--location'>
          <p>Japan</p>
          <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on Google Maps</a>
        </div>
        <div className="card--title">
          <h2>"Mount Fuji"</h2>
        </div>
        <div className="card--date">
          <p>12 Jan, 2021 - 24 Jan, 2021</p>
        </div>
        <div className="card--info">
          <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
      </div>

    </section>
  )
}
