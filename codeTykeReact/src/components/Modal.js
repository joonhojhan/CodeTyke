import React from 'react';


const Modal = (props) => {

  const [showModal, setShowModal] = React.useState(props.showModal);


  const hideModal = function(){
    props.setShowModal(false);
  }

  return (
    <div class="modal" style={{display: props.showModal ? "block" : "none"}}>
      <div class="close-modal" onClick={hideModal}>X</div>
      <div class="title"> Rules </div>
      <div class="content">
        {props.content}
      </div>
    </div>
  )
}



export default Modal;
