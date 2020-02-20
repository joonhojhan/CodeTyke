import React from 'react';

const SelectionBox = (props) => {

  const statusStyles = {
    selected: {
      border: 'solid 1px #4CB9F5',
      backgroundColor: '#4CB9F5',
      color: 'white'
    },
    affirmative : {
      backgroundColor: '#68CE72'
    },
    incorrect : {
      backgroundColor: '#EE8995'
    }
  }

  return(
    <div
      className="selectionBox" style={statusStyles[props.boxStatus]}
      onClick={()=>props.onSelected(props.id)}
      id={"selectionBox" + props.id}
    >
      <img className="selectionBox--image" alt={props.answer.imageAlt} src={props.answer.image} />
      <input checked={ props.selected ? "checked" : "" } className="selectionBox--checkbox" type="checkbox" />
      <span className="selectionBox--text">{props.answer.text}</span>
    </div>
   )
}

SelectionBox.defaultProps = {
  answer : {
    image: "http://placehold.it/150x100",
    imageAlt: "placeholder",
    text: "String",
    selected: false,
  },
  boxStatus: '',
  onSelected: () => {}

}

export default SelectionBox;
