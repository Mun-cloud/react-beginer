import propTypes from "prop-types";

const Button = ({ text }) => {
  return <button>{text}</button>;
};

Button.propTypes = {
  text: propTypes.string.isRequired,
};

export default Button;
