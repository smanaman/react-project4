

import './App.css'
import Card from './component/card'

function App() {
  const carddata=[
    {
      name:" India Gate",
      pic:"/place-1.jpg",
      dis:'The India Gate is a war memorial located near the Rajpath',
      status : true
    },
    {
      name:" Taj Mahal",
      pic:"/place-2.webp",
      dis:'The Taj Mahal is an ivory-white marble mausoleum ',
      status : true
    },
    {
      name:" Indonesia",
      pic:"/place-3.jpg",
      dis:'Indonesia is the worlds largest archipelagic state',
      status : true
    },
    {
      name:" eiffel tower",
      pic:"/place-4.jpg",
      dis:'The tower is 330 metres (1,083 ft) tall',
      status : true
    },
    {
      name:" Petra",
      pic:"/place-5.webp",
      dis:'Petra is a symbol of Jordans.Jordans most-visited tourist attraction',
      status : true
    },
    {
      name:" The Colosseum",
      pic:"/place-6.avif",
      dis:'The Colosseum is an elliptical amphitheatre in the centre of the city of Rome',
      status : true
    },
    {
      name:"Great Pyramid",
      pic:"/place-7.jpg",
      dis:'The Great Pyramid of Giza is the largest Egyptian pyramid',
      status : true
    },
    {
      name:"Christ the Redeemer",
      pic:"/place-8.avif",
      dis:'a monumental statue of Jesus Christ in Rio de Janeiro, Brazil',
      status : true
    }
  ]

  return (
    <>
    <div className="card-sec">

    {
  carddata.map((val)=>{
    return(
      <Card name={val.name} pic={val.pic} dis={val.dis} status={val.status}/>
    )
  })
}
    </div>

    </>
  )
}

export default App
