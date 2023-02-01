import React, { useContext, useState } from 'react'
import { AppContext } from './AppRoot';

export default function DropdownElement(props:{name:string, style: {}, isSelected: boolean}) {

    //Manages dropdown element in the Filter by Prerequisites section

    const {name, style, isSelected} = props;
    const [selected, setSelected] = useState(isSelected)
    const {handleTagSelect, handleTagUnselect, tags} = useContext(AppContext);

    //Handles click on the element, and add/removes tag from the list of tags
    function handleClick() {
        console.log(tags)
        if (tags.includes(name)) {
            handleTagUnselect(name);
            setSelected(false);
        } else {
            handleTagSelect(name);
            setSelected(true);
        }
    }
  return (
    <div className='dropdown-element' style={{backgroundColor: selected ? 'rgb(192, 192, 192)': 'white'}} onClick={handleClick}>
        <span className='course-prereq-span' style={style} >{name}</span>
    </div>
  )
}