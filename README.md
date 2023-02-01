# Frontend Challenge Spring '23

## General usage points

- Click on the course name to see more information
- Pressing the "Add To Cart" button will trigger a 1.5 second timer for which the cart will be shown. Cart wil close afterwards.
- Clicking anywhere off of the Cart or the Information Popup will close it. You can also use the designated buttons to close them as well.
- Filter by semester feature allows users to see queried data (difficulty, course quality, work required) from the chosen semester by changing the API route
- Searching after filtering by course level only shows courses that satisfy both criteria
- Cart will not allow users to check out with 0 or more than 7 courses
- Cart panel will be scrollable in the case that more courses are added
- Nav bar is sticky, so it remains even when scrolling

## Main Highlights / Cool Features

1. Slide Out Cart
2. Labs API usage + Semester Filter
3. Fade In/Out Popup Modal Design
4. Tile Highlight Upon Hover
5. Search based on title, number, or description


## File Structure

Note: Used TailwindCSS for styling. All other changes were made to the components folder.

#### AppRoot.tsx
This is what the user sees when they load the home page. This file contains all of the states such as the visual states: openCart, openPopup and data states: cart, selectedCourse, etc. The file also includes functions that are needed to edit these states mentioned above.

#### Cart.tsx
This is the file that contains all the code for rendering the slide out panel.

#### CheckoutTile.tsx
This is the tile that is displayed with the course name and number upon checking out. The only difference from this and CourseTile is that this does not have a remove button.

#### CourseTile.tsx
Has remove button because we need to be able to remove a course once we have added it to the cart. These are the tiles that appear when you add a course to your cart.

#### Course.tsx
The actual course card. This file displays the course information on the tile.

#### Courses.tsx
This is the grid of all course. This file essentially creates a Course object using the file above, and creates a grid with 3 columns. This file also houses the search filtering and difficulty filtering functionality.

#### DifficultyFilter.tsx
Same as semSelector. Essentially just the code to rende the dropdown menu. Updates the corresponding difficulty state in AppRoot.tsx

#### InfoTable.tsx
This is where the API call is happening in a UseEffect hook that is called every time the global course state is changed. Also is the code to render what shows up inside the popup.

#### Nav.tsx
The navigation bar that houses the cart button and the search bar. 

#### Popup.tsx
The code to render the popup itself, not the information inside - this is done in InfoTable

#### Reciept.tsx
The page the user gets redirected to when they have submitted their cart

#### SearchBar.tsx
Code that renders the search bar. The actual search filtering happens in Courses.js.

#### SemSelector.tsx
UI to render the selector, as well as functionality to update the corresponding state globally so other components are refreshed properly.

#### ShowCartButton.tsx
The UI for the button that opens the cart.


