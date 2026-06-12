import { useEffect } from "react";
import { useLocation } from "react-router-dom";

async function loadFlyonUI() {
  return import("flyonui/flyonui");
}

const FlyonInit = () => {
  const location = useLocation();

  useEffect(() => {
    const initFlyonUI = async () => {
      await loadFlyonUI();
    };

    initFlyonUI();
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === "function"
      ) {
        window.HSStaticMethods.autoInit();
      }
    }, 100);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname]);

  return null;
};

export default FlyonInit;