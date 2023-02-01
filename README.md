# Frontend Challenge Spring '23

### General usage points

- Click on the course name to see more information
- Pressing the "Add To Cart" button will trigger a 1.5 second timer for which the cart will be shown. Cart wil close afterwards.
- Clicking anywhere off of the Cart or the Information Popup will close it. You can also use the designated buttons to close them as well.
- Filter by semester feature allows users to see queried data (difficulty, course quality, work required) from the chosen semester by changing the API route
- Searching after filtering by course level only shows courses that satisfy both criteria
- Cart will not allow users to check out with 0 or more than 7 courses
- Cart panel will be scrollable in the case that more courses are added
- Nav bar is sticky, so it remains even when scrolling

### Main Highlights / Cool Features

1. Slide Out Cart
2. Labs API usage + Semester Filter
3. Fade In/Out Popup Modal Design
4. Tile Highlight Upon Hover
5. Search based on title, number, or description


### File Structure

Note: Used TailwindCSS for styling. All other changes were made to the components folder.

###### AppRoot.tsx

###### Cart.tsx

###### CheckoutTile.tsx

###### CourseTile.tsx

###### Course.tsx

###### Courses.tsx

###### DifficultyFilter.tsx

###### InfoTable.tsx

###### Nav.tsx

###### Popup.tsx

###### Reciept.tsx

###### SearchBar.tsx

###### SemSelector.tsx

###### ShowCartButton.tsx


