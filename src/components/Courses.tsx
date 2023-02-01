import { useContext, useEffect, useState } from 'react';
import courses from '../data/courses.json'
import { AppContext } from './AppRoot';
import Course from './Course';
import DifficultyFilter from './DifficultFilter';
import SemSelector from './SemSelector';

export default function Courses({searchString}:{searchString: string}) {

  //Stores all functionality for the the list of all courses, .i.e the course grid
  const {difficulty} = useContext(AppContext);

  //Initially, show all courses
  useEffect(() => {
    filteredCourses = courses;
  }, [])


  //Filter results based on search bar
  const displayedCourses = courses.filter((c) => c.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 || 
    c.number.toString().indexOf(searchString) !== -1 ||
    c.description.indexOf(searchString) !== -1
  )

  //Filter results based on prereq selected
  const filteredCoursesByDiff = courses.filter((c) => {
      if (c.number >= difficulty) {
        return true;
      }
    return false
  })

  //Display only the ones that show up in both
  let filteredCourses = displayedCourses.filter(value => filteredCoursesByDiff.includes(value));

  return (
    <div>
      <div className='mx-auto mb-12 h-full w-5/6 items-center justify-between'>
        <div className='flex flex-row justify-between'>
          <div>
            <SemSelector />
          </div>
          <div>
            <DifficultyFilter />
          </div>
        </div>
        <div className='grid gap-4 grid-cols-3'>
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