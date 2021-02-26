import { createContext, ReactNode, useState } from "react";


interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
};

interface ChallengesProviderProps {
  children: ReactNode;
};

const ChallengesContext = createContext({} as ChallengesContextData);

const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const startNewChallenge = () => {
    console.log('new challenge');
  };

  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      levelUp,
      startNewChallenge
    }}>
      {children}
    </ChallengesContext.Provider>
  );
};

export {
  ChallengesContext,
  ChallengesProvider
}