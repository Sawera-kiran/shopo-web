export default function searchProducts(products = [], query = "") {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  return products.filter((product) => {
    const title = String(product.title ?? "").toLowerCase();
    const brand = String(product.brand ?? "").toLowerCase();
    const category = String(product.category ?? "").toLowerCase();

    return (
      title.includes(normalizedQuery) ||
      brand.includes(normalizedQuery) ||
      category.includes(normalizedQuery)
    );
  });
}