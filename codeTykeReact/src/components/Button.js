import React from 'react';

const Button = (props) => {

  let label = props.label;
  let icon = props.icon;

  const statusStyles = {
    disabled : {
      backgroundColor: '#CECECE'
    },
    affirmative : {
      backgroundColor: '#68CE72'
    },
    incorrect : {
      backgroundColor: '#EE8995'
    }
  }

  return (
    <div className={"submitButton"} style={statusStyles[props.status]} onClick={props.handleSubmit} >
      <div className="submitLoader" style={{display: props.loading ? "inline" : "none"}}><img src='/assets/loadingLogo.png' /></div>
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
