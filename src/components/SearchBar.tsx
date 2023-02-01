import React from 'react'

export default function Search({updateSearchQuery}:{updateSearchQuery: (newSearchString:string) => any}) {

    //Represents search/filter area, Handles searchbar functionality
    //NOT responsible for filtering results, Courses.tsx does that

    function handleChange(event: React.FormEvent<HTMLInputElement>) {
        updateSearchQuery(event.currentTarget.value)
    }

    return (
        <div className='py-6 px-2'>
            <div className=''>
                <input className='w-36 md:w-96 p-2 rounded-full border-black border-2' type='text' id='search-bar' placeholder='Search for a course title, number, or description' onChange={handleChange}/>
            </div>
        </div>
    )
}