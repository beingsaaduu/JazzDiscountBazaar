import React, { useState, ReactNode } from 'react';

interface CityProviderProps {
  children: ReactNode;
}

interface CityContextProps {
  currentCity: string;
  setCurrentCity: React.Dispatch<React.SetStateAction<string>>;
}

const CityContext = React.createContext<CityContextProps>({
  currentCity: 'Islamabad',
  setCurrentCity: () => {},
});

const CityProvider: React.FC<CityProviderProps> = ({ children }) => {
  const [currentCity, setCurrentCity] = useState<string>('Islamabad');

  return (
    <CityContext.Provider value={{ currentCity, setCurrentCity }}>
      {children}
    </CityContext.Provider>
  );
};

export { CityContext, CityProvider };
