import React, { createContext, useContext, useState } from 'react';

interface RiskContextType {
  riskLevel: string;
  setRiskLevel: (level: string) => void;
}

const RiskContext = createContext<RiskContextType | undefined>(undefined);

export const RiskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [riskLevel, setRiskLevel] = useState<string>('low-risk'); // Default value

  return (
    <RiskContext.Provider value={{ riskLevel, setRiskLevel }}>
      {children}
    </RiskContext.Provider>
  );
};

export const useRisk = () => {
  const context = useContext(RiskContext);
  if (!context) {
    throw new Error('useRisk must be used within a RiskProvider');
  }
  return context;
};
