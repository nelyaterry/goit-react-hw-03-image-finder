import { Btn } from "./Button.styled";

const Button = ({ onClick, children }) => {
  return (
    <Btn type="button" onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;
