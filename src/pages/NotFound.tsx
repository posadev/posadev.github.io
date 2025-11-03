import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Gradient from "@/components/Gradient.tsx";
import Tree from "@/components/icons/Tree.tsx";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Gradient className="min-h-screen flex flex-col gap-4 items-center justify-center text-center">
        <Tree/>
        <h1 className="text-4xl text-primary-600 font-bold mb-4">404</h1>
        <p className="text-xl text-primary-600 mb-4">Oops! Pagina no encontrada</p>
        <a href="/" className="text-alternative-700 hover:text-alternative-500 underline">
          Return to Home
        </a>
    </Gradient>
  );
};

export default NotFound;
