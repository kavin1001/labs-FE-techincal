import React, {useState} from 'react';
import Cart from './Cart';
import Example from './Cart';
import Courses from './Courses';
import Nav from './Nav';
import courses from '../data/courses.json'


export const AppContext = React.createContext<null|any>(null);

export default function AppRoot() {

    // State variables to keep track of the app state globally
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [cart, setCart] = useState<any[]>([]);
    const [openCart, setOpenCart] = useState<boolean>(false);
    const [course, setCourse] = useState<number>();
    const [tags, setTags] = useState<string[]>([]);




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



    const appContextValue = {
        cart,
        showCart,
        chooseCourse,
        updateSearchQuery,
        removeItemFromCart,
        addItemToCart,
        tags,
        openCart,
    }
    
    return (
        <AppContext.Provider value={appContextValue}>
            <Nav updateSearchQuery={updateSearchQuery} />
            <Cart courses={cart} />
            <Courses searchString={searchQuery}/>
        </AppContext.Provider>
    );
}