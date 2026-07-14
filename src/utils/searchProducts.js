// src/utils/searchProducts.js

/**
 * Performs a case-insensitive search.
 * Matches:
 * - title
 * - brand
 * - category
 */

function normalize(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase();
}

export default function searchProducts(products = [], query = "") {
  const search = normalize(query);

  if (!search) return [];

  return products.filter((product) => {
    return (
      normalize(product.title).includes(search) ||
      normalize(product.brand).includes(search) ||
      normalize(product.category).includes(search)
    );
  });
}
