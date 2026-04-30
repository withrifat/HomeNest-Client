import { useEffect, useState } from "react";
import { featuredProperties } from "../data/homeData";

const useProperties = (limit = null) => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      const sortedProperties = [...featuredProperties].sort(
        (firstProperty, secondProperty) =>
          new Date(secondProperty.listedAt) - new Date(firstProperty.listedAt)
      );

      setProperties(limit ? sortedProperties.slice(0, limit) : sortedProperties);
      setIsLoading(false);
    }, 850);

    return () => window.clearTimeout(timerId);
  }, [limit]);

  return { properties, isLoading };
};

export default useProperties;
