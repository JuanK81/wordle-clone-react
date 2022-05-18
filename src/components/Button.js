const Button = (props) => {
  return (
    <button className={`button-big ${props.cssClass}`} disabled={props.disabled} onClick={props.onClick}>{props.text}</button>
  );
};

export default Button;
