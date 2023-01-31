import React, {useState} from 'react';
import Courses from './Courses';
import Nav from './Nav';

export const AppContext = React.createContext<null|any>(null);

export default function AppRoot() {

    // State variables to keep track of the app state globally
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [cart, setCart] = useState<any[]>([]);
    const [course, setCourse] = useState<number>();



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
        setCart(cart.filter(item => item.id !== id));
    }

    function addItemToCart(item: any) {
        setCart([...cart, item]);
    }



    const appContextValue = {
        chooseCourse,
        updateSearchQuery,
        removeItemFromCart,
        addItemToCart
    }
    
    return (
        <AppContext.Provider value={appContextValue}>
            <Nav />
            <Courses />
        </AppContext.Provider>
    );
}