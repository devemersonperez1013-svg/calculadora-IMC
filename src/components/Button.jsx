import "./css/Button.css";
const Button = ({id, text, action}) => {
  const handleButton = (e) => {
    action(e);
  };
  return (
    <button id={id} onClick={handleButton}>
      {text}
    </button>
  );
};

export default Button;
