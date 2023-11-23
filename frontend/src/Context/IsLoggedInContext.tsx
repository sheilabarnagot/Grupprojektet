import { Dispatch, SetStateAction } from 'react';
import { useOutletContext } from 'react-router-dom';

export interface ContextType {
  isLoggedIn: boolean;
  setIsLoggedInContext: Dispatch<SetStateAction<boolean>>;
}

export function isUserLoggedIn() {
  return useOutletContext<ContextType>();
}
