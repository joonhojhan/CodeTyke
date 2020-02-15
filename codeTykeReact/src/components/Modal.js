import React from 'react';

const Modal = (props) => {

  const [showModal, setShowModal] = React.useState(props.showModal);

  const hideModal = function() {
    props.setShowModal(!props.showModal);
  }

  return (
    <>
      <div className="modal" style={{display: props.showModal ? "block" : "none"}}>
        <span className="icon icon-cross" onClick={hideModal}></span>
        <div className="title"> Rules </div>
        <div className="content">
          {props.content}
        </div>
      </div>
    </>
  )
}

export default Modal;
