import { useLocation } from 'react-router-dom'
import CheckoutTile from './CheckoutTile';

export default function Reciept() {

  //The checkout page that gets displayed at the /checkout endpoint

  //Using hooks to navigate away from this page, useLocation helps me pass data between pages at different routes
  const location = useLocation();
  const courses = location.state['cart'];

  return (
    <div className='flex flex-col justify-center'>
      <div className=''>
        <h1 className='text-center font-bold text-3xl py-12'>Thank you!</h1>
        <p className='text-center font-bold'>Here are the courses you have signed up for:</p>
      </div>
      <div className=' p-12 mx-auto'>{courses.map((c:any) => {
        return <CheckoutTile course={c}/>
      })}</div>
        <a
            href="/"
            className="w-96 mx-auto flex items-center justify-center rounded-full border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
            Back to Penn Course Cart
         </a>
    </div>
    
  )
}
