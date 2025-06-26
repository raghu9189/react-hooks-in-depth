import { createContext, useState, useContext } from "react";

export const GlobalStateContext = createContext(null);

export const AppUseContext = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <GlobalStateContext.Provider value={{ isToggle, setIsToggle }}>
      <div>
        <h1>Parent Component</h1>
        <ChildToggle />
        <ChildDisplay />
      </div>
    </GlobalStateContext.Provider>
  );
};

const ChildToggle = () => {
  const { setIsToggle } = useContext(GlobalStateContext);
  return (
    <div>
      <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
    </div>
  );
};

// Child Component to Display State
const ChildDisplay = () => {
  const { isToggle } = useContext(GlobalStateContext);

  return (
    <div>
      <p>Current State: {isToggle ? "ON" : "OFF"}</p>
    </div>
  );
};