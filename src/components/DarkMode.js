import { BsFillMoonFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

export const DarkMode = (props) => {
  return (
    <div className="dark-mode-icon">
    {props.darkMode ? <BsSun onClick={props.toggleIcon}/> : <BsFillMoonFill onClick={props.toggleIcon}/> }
    </div>
  )
};
