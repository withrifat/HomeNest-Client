export const formatPropertyPrice = (property) => {
  if (property.priceDisplay) {
    return property.priceDisplay;
  }

  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  }).format(property.price);
};

export const matchesPriceRange = (price, priceRange) => {
  switch (priceRange) {
    case "Under BDT 80 Lakh":
      return price < 8000000;
    case "BDT 80 Lakh - 1.5 Crore":
      return price >= 8000000 && price <= 15000000;
    case "Above BDT 1.5 Crore":
      return price > 15000000;
    default:
      return true;
  }
};

export const filterProperties = (properties, filters) => {
  const locationQuery = filters.location.trim().toLowerCase();
  const selectedCategory = filters.propertyType.toLowerCase();

  return properties.filter((property) => {
    const matchesLocation =
      !locationQuery ||
      property.location.toLowerCase().includes(locationQuery) ||
      property.title.toLowerCase().includes(locationQuery);

    const matchesCategory =
      selectedCategory === "any type" ||
      property.category.toLowerCase() === selectedCategory;

    return (
      matchesLocation &&
      matchesCategory &&
      matchesPriceRange(property.price, filters.priceRange)
    );
  });
};
