const BASE_URL = "https://dummyjson.com";

export async function getAllProducts  () {
  try {
    const response = await fetch(`${BASE_URL}/products`);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCategories() {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function searchProducts(query) {
  try {
    const response = await fetch(
      `${BASE_URL}/products/search?q=${query}`
    );

    if (!response.ok) {
      throw new Error("Search failed");
    }

    const data = await response.json();

    return data.products;
  } catch (error) {
    console.error(error);
    throw error;
  }
}