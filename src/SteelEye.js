import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

//What Simple List component does ?
// 1. It takes an array of objects as a prop.
// 2. It renders a list of items from the array.

// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <>
      <li
        style={{ backgroundColor: isSelected ? "green" : "red" }}
        onClick={() => onClickHandler(index)} //change from onClick = {onClickHandler(index)}
      >
        {text}
      </li>
      <br />
    </>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number.isRequired,  //change isRequired 
  isSelected: PropTypes.bool.isRequired,  //change isRequired 
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);  //null changes to -1 or [setSelectedIndex,selectedIndex] because second arguement shoud be a function 

  useEffect(() => {
    setSelectedIndex(-1); //change null to -1
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {items.map((item, index) => (
        <SingleListItem
          key={index}   // add a key to improve application performance (identify a element as fast as possible)
          onClickHandler={handleClick} //change
          text={item.text}
          index={index}
          isSelected={index === selectedIndex} //make boolean 
        />
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string.isRequired })  //array to arrayOf  and shapeOf to shape
  ),
};

WrappedListComponent.defaultProps = {
  items: []  //simple put []
};

const List = memo(WrappedListComponent);

export default List;

