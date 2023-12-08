import Images from '../images/Images';

export default function Navbar(){
  return(
    <nav>
      <img
      id='nav--logo'
       src={Images.flightIcon}
       alt="Airplane icon" />
      <h1>My travel journal</h1>
    </nav>
  )
}
