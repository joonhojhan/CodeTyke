import React from 'react';

const Button = (props) => {

  let label = props.label;
  let className = `submitButton ${props.type}`;
  let icon = props.icon;

  return (
    <div className={className} onClick={props.handleSubmit} >
      <div className="submitLoader" style={{display: props.loading ? "inline" : "none"}}><img src='loadingLogo.png' /></div>
      {label}
      {icon}
    </div>
  )
}

Button.defaultProps = {
  label: "Submit",
  type: "disabled"
};

export default Button;
