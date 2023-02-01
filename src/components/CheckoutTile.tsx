export default function CourseTile({course}: {course: any}) {

    // The course tile that we see in the checkout page
    const {title, number, dept} = course

    return (
    <div className='text-sm py-4'>
        <h2>{dept + ' ' + number}</h2>
        <h1 className='font-bold text-xl mb-2'>{title}</h1>
    </div>
  )
}