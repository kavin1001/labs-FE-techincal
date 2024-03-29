import React, {useState} from 'react';
import Cart from './Cart';
import Courses from './Courses';
import Nav from './Nav';
import courses from '../data/courses.json'
import Popup from './Popup';


export const AppContext = React.createContext<null|any>(null);

export default function AppRoot() {

    // State variables to keep track of the app state globally
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [cart, setCart] = useState<any[]>([]);
    const [openCart, setOpenCart] = useState<boolean>(false);
    const [openPopup, setOpenPopup] = useState<boolean>(false);
    const [course, setCourse] = useState<number>();
    const [year, setYear] = useState<string>('2020');
    const [semester, setSemester] = useState<string>('C');
    const [difficulty, setDifficulty] = useState<number>(100);

    const selectedCourse = courses.find(c => c.number === course)

    // Functions to update the states

    // Removes a course from the cart
    function removeItemFromCart(id: number) {
        setCart(cart.filter(item => item.number !== id));
    }

    // Adds a course to the cart
    function addItemToCart(id: number) {
        const newCourse = courses.find(c => c.number === id)
        if (!cart.includes(newCourse)) {
            setCart([...cart, newCourse])
        }
    }

    // Shows or hides the cart
    function showCart(state: boolean) {
        setOpenCart(state);
    }

    // Sets the course to the state
    function chooseCourse(course: number) {
        setCourse(course);
    }

    // Shows or hides the popup
    function showPopup(state: boolean) {
        setOpenPopup(state);
    }

    // Everytime the search query changes, this function will be called
    function updateSearchQuery(query: string) {
        setSearchQuery(query);
    }

    // Since the API needs A,B, or C instead of the actual semester
    function updateSemester(sem: string) {
        if(sem === "Spring") {
            setSemester("A");
        } else {
            setSemester("C");
        }
    }


    const appContextValue = {
        cart,
        showCart,
        showPopup,
        chooseCourse,
        updateSearchQuery,
        removeItemFromCart,
        addItemToCart,
        openCart,
        openPopup,
        setCourse,
        selectedCourse,
        updateSemester,
        semester,
        year,
        setYear,
        setDifficulty,
        difficulty
    
    }
    
    return (
        <AppContext.Provider value={appContextValue}>
            <Nav updateSearchQuery={updateSearchQuery} />
            <Cart courses={cart} />
            <Courses searchString={searchQuery}/>
            {selectedCourse && <Popup course={selectedCourse}/>}
        </AppContext.Provider>
    );
}