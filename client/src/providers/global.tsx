import {
  createContext,
  Dispatch,
  ReactChild,
  useEffect,
  useState,
} from "react";

import config from "../utils/config";

export const GlobalContext = createContext<{
  loading: boolean;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
}>({ loading: false, setLoading: () => false });

export default function GlobalProvider({
  children,
}: {
  children: ReactChild;
}): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    document.title = config.app.title;
  }, []);

  return (
    <GlobalContext.Provider value={{ loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
}
