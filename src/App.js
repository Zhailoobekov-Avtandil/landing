import { Card } from "./components/Card"
import { Card2 } from "./components/Card2"
import './App.css'
import { Helpcard } from "./Helpcard"
import { Cardhelp } from './components/Cardhelp'
import pic from './Images/pic.png'

const data = [
  {
    title: 'Physical Health',
    color: '#22356F'
  },
  {
    title: 'Mental Health',
    color: '#0052C1'
  },
  {
    title: 'Nutrition',
    color: null,
    img: pic
  },
  {
    title: 'Gymnastics',
    color: '#62D0DF'
  },
  {
    title: 'Crossfit',
    color: '#DEE1FF'
  },
  {
    title: 'Aerobics',
    color: '#8F00FF'
  },
]

const cardData = [
  {
    title: 'Weight Lifting',
    bg: '#FFE2DE'
  },
  {
    title: 'Running & Spinning',
    bg: '#C4E769'
  },
  {
    title: 'Pumping Iron',
    bg: '#62D0DF'
  },
  {
    title: 'Pumping Iron',
    bg: '#0052C1'
  },
]

export const App = () => {
  return (
    <div className='App'>
    <Card/>
    <Card2 />
    <div className="helpcard">
    {
      data.map((el, id) => {
        return <Helpcard data={el} key={id}/>
      })
    }
    </div>

    <div className='cardhelp'>
     {
       cardData.map((el, id) => {
         return <Cardhelp data={el} key={id}/>
       })
     }
    </div>
    </div>
  )
}

  