import { useEffect, useState } from "react";
const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const onChangeEvent = () => setCurrentPath(window.location.pathname);
  useEffect(() => {
    window.addEventListener("popstate", onChangeEvent);
    return () => window.removeEventListener("popstate", onChangeEvent);
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
