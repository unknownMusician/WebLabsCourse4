import Image1 from '../assets/images/1.webp'
import Image2 from '../assets/images/2.webp'
import Image3 from '../assets/images/3.webp'
import Image4 from '../assets/images/4.webp'
import Image5 from '../assets/images/5.webp'
import Image6 from '../assets/images/6.webp'
import { GoodsCard } from './GoodsCard'

const goods = [
  {
    image: Image1,
    price: 68,
    name: 'Talisman',
  },
  {
    image: Image2,
    price: 49,
    name: 'Topgun',
  },
  {
    image: Image3,
    price: 77,
    name: 'Crisby',
  },
  {
    image: Image4,
    price: 58,
    name: 'Faraoh',
  },
  {
    image: Image5,
    price: 92,
    name: 'Arashan',
  },
  {
    image: Image6,
    price: 43,
    name: 'Ledi',
  },
]

export const Gallery = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      {goods.map((g) => (
        <GoodsCard name={g.name} price={g.price} image={g.image} key={g.name} />
      ))}
    </div>
  )
}
