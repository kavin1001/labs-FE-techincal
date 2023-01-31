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
    const {chooseCourse, addItemToCart, cart} = useContext(AppContext);
    const [inCart, setInCart] = useState(false);

    // TODO: Change this comment - Changes the setInCart boolean when the cart changes to check how to color the button
    useEffect(() => {
        setInCart(cart.find((c:any) => c.number === number))
    }, [cart])

    let coursePrereqs: string[] = []

    //Gets the course prereqs - I realized that course names are about 7-11 in length
    if (prereqs !== undefined) {
        coursePrereqs = prereqs.filter((str) => str.length <= 12)
    }

    return (
        <div className='drop-shadow-2xl border-2 p-5 w-full'>
            <div className=''>
                <span className='font-bold text-slate-400'>{dept + ' ' + number}</span>
                <h3>{title}</h3>
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
            <div className=''>{description}</div>
            {/* <div className='w-full mb-5 flex justify-center items-center mt-3'>
                <button className='btn btn-yellow' onClick={() => chooseCourse(number)}>Know More</button>
                <button className={inCart ? 'btn-greyed' : 'btn btn-add'} onClick={()=>{
                    addItemToCart(number)
                    setInCart(true)
                    window.scrollTo(0, 0)
                }}>{inCart ? 'In Cart' :' Add to Cart'}</button>
            </div> */}
        </div>
    )
}
