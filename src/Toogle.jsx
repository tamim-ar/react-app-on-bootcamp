import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const ToggleContext = createContext();

const Toggle = ({ children }) => {
   const [isActive, setIsActive] = useState(false);

   const toggle = () => {
      setIsActive(!isActive);
   };

   return <ToggleContext.Provider value={{ isActive, toggle }}>{children}</ToggleContext.Provider>;
};

const ToggleButton = () => {
   const { toggle } = useContext(ToggleContext);

   return <button onClick={toggle}>Toggle</button>;
};

const Active = ({ children }) => {
   const { isActive } = useContext(ToggleContext);

   return isActive ? <>{children}</> : null;
};

const Inactive = ({ children }) => {
   const { isActive } = useContext(ToggleContext);

   return !isActive ? <>{children}</> : null;
};

Toggle.Active = Active;
Toggle.Inactive = Inactive;
Toggle.ToggleButton = ToggleButton;

Toggle.propTypes = {
   children: PropTypes.node.isRequired,
};
Active.propTypes = {
   children: PropTypes.node.isRequired,
};
Inactive.propTypes = {
   children: PropTypes.node.isRequired,
};
ToggleButton.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Toggle;