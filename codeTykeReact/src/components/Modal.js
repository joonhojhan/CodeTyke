import React from 'react';

const Modal = (props) => {

  const [showModal, setShowModal] = React.useState(props.showModal);

  const hideModal = function() {
    props.setShowModal(!props.showModal);
  }

  return (
    <>
      <div class="modal" style={{display: props.showModal ? "block" : "none"}}>
        <span class="icon icon-cross" onClick={hideModal}></span>
        <div class="title"> Rules </div>
        <div class="content">
          {props.content}
        </div>
      </div>
    </>
  )
}

export default Modal;
