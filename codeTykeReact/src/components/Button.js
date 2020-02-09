import React from 'react';

const Button = (props) => {

  let label = props.label;
  let className = `submitButton ${props.type}`;
  let icon = props.icon;

  const loaderImg = <div className="submitLoader" style={{display: props.loading ? "block" : "none"}}><img src='loadingLogo.png' /></div>;

  return (
    <div className={className} onClick={props.handleSubmit} >
      {loaderImg} {label} {icon}
    </div>
  )
}

Button.defaultProps = {
  label: "Submit",
  type: "disabled"
};

export default Button;
