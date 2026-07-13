import "./SearchBar.css";

import { useEffect, useMemo, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { useProducts } from "../../context/ProductContext";
import { useSearch } from "../../context/SearchContext/SearchContext";
import useDebounce from "../../hooks/useDebounce";
import searchProducts from "../../utils/searchProducts";

const MAX_SUGGESTIONS = 8;

function SearchBar() {
  const navigate = useNavigate();
  const { products } = useProducts();

  const {
    searchTerm,
    setSearchTerm,
    isDropdownOpen,
    selectedIndex,
    setSelectedIndex,
    openDropdown,
    closeDropdown,
  } = useSearch();

  const [inputValue, setInputValue] = useState(searchTerm);
  const searchRef = useRef(null);
  const debouncedQuery = useDebounce(inputValue, 300);

  const suggestions = useMemo(
    () => searchProducts(products, debouncedQuery).slice(0, MAX_SUGGESTIONS),
    [products, debouncedQuery],
  );

  useEffect(() => {
    setSearchTerm(debouncedQuery);
    setSelectedIndex(-1);
  }, [debouncedQuery, setSearchTerm, setSelectedIndex]);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      openDropdown();
      return;
    }

    closeDropdown();
  }, [debouncedQuery, openDropdown, closeDropdown]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!searchRef.current?.contains(event.target)) {
        closeDropdown();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [closeDropdown]);

  function submitSearch(event) {
    event.preventDefault();

    const query = inputValue.trim();

    if (!query) {
      closeDropdown();
      return;
    }

    setSearchTerm(query);
    closeDropdown();
    navigate("/shop");
  }

  function handleSuggestionClick(product) {
    setInputValue(product.title);
    setSearchTerm(product.title);
    setSelectedIndex(-1);
    closeDropdown();
    navigate("/shop");
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      closeDropdown();
      return;
    }

    if (event.key === "ArrowDown" && suggestions.length) {
      event.preventDefault();
      openDropdown();

      setSelectedIndex((index) =>
        index >= suggestions.length - 1 ? 0 : index + 1,
      );

      return;
    }

    if (event.key === "ArrowUp" && suggestions.length) {
      event.preventDefault();
      openDropdown();

      setSelectedIndex((index) =>
        index <= 0 ? suggestions.length - 1 : index - 1,
      );

      return;
    }

    if (event.key === "Enter" && selectedIndex >= 0) {
      event.preventDefault();
      handleSuggestionClick(suggestions[selectedIndex]);
    }
  }

  return (
    <div className="header-search" ref={searchRef}>
      <form
        className="header-search-form"
        onSubmit={submitSearch}
        role="search"
      >
        <input
          aria-autocomplete="list"
          aria-controls="search-suggestions"
          aria-expanded={isDropdownOpen && suggestions.length > 0}
          aria-label="Search products"
          autoComplete="off"
          className="header-search-input"
          onChange={(event) => setInputValue(event.target.value)}
          onFocus={() => {
            if (inputValue.trim()) {
              openDropdown();
            }
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search products..."
          type="search"
          value={inputValue}
        />

        <button
          aria-label="Search"
          className="header-search-btn"
          type="submit"
        >
          <IoSearchOutline aria-hidden="true" />
        </button>
      </form>

      {isDropdownOpen && suggestions.length > 0 && (
        <ul
          className="header-search-dropdown"
          id="search-suggestions"
          role="listbox"
        >
          {suggestions.map((product, index) => (
            <li
              key={product.id}
              role="option"
              aria-selected={selectedIndex === index}
            >
              <button
                className={`header-search-item${
                  selectedIndex === index ? " active" : ""
                }`}
                onClick={() => handleSuggestionClick(product)}
                onMouseEnter={() => setSelectedIndex(index)}
                type="button"
              >
                {product.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;