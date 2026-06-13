import { useEffect } from "react";
import { useLocation } from "react-router-dom";

async function loadFlyonUI() {
  return import("flyonui/flyonui");
}

const FlyonInit = () => {
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;

    const initFlyonUI = async () => {
      await loadFlyonUI();

      if (!isMounted) return;

      window.HSStaticMethods?.autoInit?.();
    };

    initFlyonUI();

    return () => {
      isMounted = false;
    };
  }, [location.pathname]);

  return null;
};

export default FlyonInit;
