import { Link } from 'react-router-dom'
import Temp from '../assets/images/pagenotfound.png'
import Button from '../components/Button'
export const PageNotFound = () => {
  return (
    <main>
      <section className="text-2xl py-7 flex flex-col  items-center">
        <p className='text-6xl text-gray-800 text-bold dark:text-white text-center '>404, Oops!</p>
        <div className='max-w-lg py-10'>
          <img src={Temp} alt="notFound" />
        </div>
        <Link to="/">
          <Button>Back To Cinemate</Button>
        </Link>
      </section>
    </main>
  )
}
