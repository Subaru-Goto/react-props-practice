import Navbar from './components/Navbar';
import Cards from './components/Cards';
import data from './data/data'

export default function App() {
  const cards = data.map(data => {
    return(
      <Cards 
        key={data.id}
        {...data}/>
    )
  })

  return(
    <>
      <Navbar />
      {cards}
    </>
  )
}