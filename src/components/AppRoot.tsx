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
    const [tags, setTags] = useState<string[]>([]);

    const selectedCourse = courses.find(c => c.number === course)


    interface JSONObject {
        [x: string]: string;
    }

    //json file to color the courses
    const allCoursePrereqs : JSONObject = {
        'CIS 120': '#34568b',
        'CIS 160': '#ff6f61',
        'CIS 240': '#6b5b95',
        'CIS 110': '#926aa6',
        'ESE 112': '#45b8ac',
        'CIS 262': '#d2386c',
        'CIS 320': '#efc050',
        'MATH 312/314': '#5b5ea6',
        'CIS 400': '#9b2335',
        'ESE 301': '#45b8ac',
        'MATH 104': '#98b4d4',
        'CIS 121': '#ffa500',
        'PHYS 151': '#dc793e'
    }


    // Functions to update the states

    function chooseCourse(course: number) {
        setCourse(course);
    }

    // Everytime the search query changes, this function will be called
    function updateSearchQuery(query: string) {
        setSearchQuery(query);
    }

    // Removes a course from the cart
    function removeItemFromCart(id: number) {
        setCart(cart.filter(item => item.number !== id));
    }

    function addItemToCart(id: number) {
        const newCourse = courses.find(c => c.number === id)
        if (!cart.includes(newCourse)) {
            setCart([...cart, newCourse])
        }
    }

    function showCart(state: boolean) {
        setOpenCart(state);
    }

    function showPopup(state: boolean) {
        setOpenPopup(state);
    }



    const appContextValue = {
        cart,
        showCart,
        showPopup,
        chooseCourse,
        updateSearchQuery,
        removeItemFromCart,
        addItemToCart,
        tags,
        openCart,
        openPopup,
        setCourse,
        selectedCourse,
        allCoursePrereqs
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