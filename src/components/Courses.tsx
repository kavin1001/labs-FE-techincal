import { useContext, useEffect, useState } from 'react';
import courses from '../data/courses.json'
import { AppContext } from './AppRoot';
import Course from './Course';
import FilterButton from './FilterButton';

export default function Courses({searchString}:{searchString: string}) {

  //Stores all functionality for the the list of all courses, .i.e the course grid

  //Initially, show all courses
  useEffect(() => {
    filteredCourses = courses;
  }, [])
  
  const {tags} = useContext(AppContext);

  //Filter results based on search bar
  const displayedCourses = courses.filter((c) => c.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 || 
    c.number.toString().indexOf(searchString) !== -1 ||
    c.description.indexOf(searchString) !== -1
  )

  //Filter results based on prereq selected
  const filteredCoursesByPrereq = courses.filter((c) => {
    if (tags.length === 0) {
      return true;
    }
    for (let i = 0; i < tags.length; i++) {
      if (c.prereqs !== undefined) {
        if (c.prereqs.includes(tags[i])) {
          return true;
        }
      }
    }
    return false
  })

  //Display only the ones that show up in both
  let filteredCourses = displayedCourses.filter(value => filteredCoursesByPrereq.includes(value));

  return (
    <div>
      <FilterButton/>
      <div className='mx-auto my-12 h-full w-5/6 items-center justify-between'>
        <div className='grid gap-4 grid-cols-2'>
          {filteredCourses.map((c) => (
            <Course 
              key={`${c.dept}-${c.number}`}
              dept={c.dept}
              number={c.number}
              title={c.title}
              description={c.description}
              // prereqs={c.prereqs}
            />
          ))}
        </div>
      </div>
    </div>
  )
}