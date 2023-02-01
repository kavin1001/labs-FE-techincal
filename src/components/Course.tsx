import React, { useContext, useEffect, useState } from 'react'
// import '../css/style.css'
import {AppContext} from './AppRoot'



// Interface for a course
export interface CourseType {
    dept: string;
    number: number;
    title: string;
    description: string;
    prereqs?: string[];
    "cross-listed"?: [];
}

export default function Course(props: CourseType) {

    //Handles all functionality of a single course component

    // Passing in the course information as props into the component
    const {dept, number, title, description, prereqs} = props;

    // const {chooseCourse, addItemToCart, cart, allCoursePrereqs} = useContext(AppContext);
    const {chooseCourse, addItemToCart, cart, showCart, showPopup, setCourse} = useContext(AppContext);
    const [inCart, setInCart] = useState(false);

    // TODO: Change this comment - Changes the setInCart boolean when the cart changes to check how to color the button
    useEffect(() => {
        setInCart(cart.find((c:any) => c.number === number))
    }, [cart])

    function showCourseInfo() {
        setCourse(number) 
        showPopup(true)
        console.log('showing course info')
    }

    let coursePrereqs: string[] = []

    //Gets the course prereqs - I realized that course names are about 7-11 in length
    if (prereqs !== undefined) {
        coursePrereqs = prereqs.filter((str) => str.length <= 12)
    }

    return (
        <div className='mx-auto w-5/6'>
            <div className='shadow-sm hover:shadow-2xl rounded-xl border-2 p-5 w-full h-full'>
                <div className='flex flex-col'>
                    <span className='font-bold text-slate-400'>{dept + ' ' + number}</span>
                    <button className='w-fit h-6 text-xl font-bold text-green-600 text-ellipsis overflow-hidden mb-6 hover:underline' 
                    onClick={showCourseInfo}>{title}</button>
                    {/* <div className='course-prereq-row'>
                        {coursePrereqs.length !== 0 && <span className='span-bold'>Prereqs : &nbsp;</span>}
                        {prereqs && coursePrereqs.map((str:string) => {
                            let color = 'grey';
                            if(allCoursePrereqs[str] !== undefined) {
                                color=allCoursePrereqs[str]
                            }
                            return <span className='course-prereq-span' style={{backgroundColor: color}}>{str}</span>
                        })}
                    </div> */}
                </div>
                <div className='h-24 text-ellipsis overflow-hidden ...'>
                    <p className='text-md italic h-fit'>{description}</p>
                </div>
                <div className='w-full mb-5 flex self-end justify-center items-center mt-3'>
                    <button className={inCart ? 'inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md cursor-not-allowed' : 'inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'} 
                    onClick={()=>{
                        console.log('add to cart')
                        addItemToCart(number)
                        setInCart(true)
                        showCart(true);
                        console.log(cart)
                        // Timeout to change the color back to blue
                        setTimeout(() => {
                                showCart(false);
                            }, 2500);
                        }}>
                        {inCart ? 'In Cart' :' Add to Cart'}</button>
                </div>
            </div>
        </div>
    )
}
