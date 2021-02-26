import { createContext, useState } from "react";


const ChallengesContext = createContext({});

const ChallengesProvider = ({ children }) => {
  const [level, setLevel] = useState(1);

  const levelUp = () => {
    setLevel(level + 1);
  };

  return (
    <ChallengesContext.Provider value={{
      level,
      levelUp
    }}>
      {children}
    </ChallengesContext.Provider>
  );
};

export default ChallengesProvider;