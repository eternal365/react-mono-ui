import { createContext, FC, ReactNode } from 'react';

import 'styles/index.scss';

type ContextValue = {
  //
};

type ProviderProps = {
  children: ReactNode;
};

const Context = createContext<ContextValue>({});

const Provider: FC<ProviderProps> = ({ children }) => (
  <Context.Provider value={{}}>
    {children}
  </Context.Provider>
);

const Ui = {
  Context,
  Provider,
};

export default Ui;
