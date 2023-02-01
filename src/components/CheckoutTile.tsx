import React, { useContext } from 'react'
import { AppContext } from './AppRoot';

export default function CourseTile({course}: {course: any}) {

    //Component to display a course in the cart
    const {title, number, dept} = course

    return (
    <div className='text-sm py-4'>
        <h2>{dept + ' ' + number}</h2>
        <h1 className='font-bold text-xl mb-2'>{title}</h1>
    </div>
  )
}