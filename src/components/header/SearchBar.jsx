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
  const wrapperRef = useRef(null);

  const { products } = useProducts();

  const {
    searchTerm,
    setSearchTerm,
    isDropdownOpen,
    setIsDropdownOpen,
    selectedIndex,
    setSelectedIndex,
  } = useSearch();

  const [inputValue, setInputValue] = useState(searchTerm);

  const debouncedQuery = useDebounce(inputValue, 300);

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const suggestions = useMemo(() => {
    return searchProducts(products, debouncedQuery).slice(
      0,
      MAX_SUGGESTIONS
    );
  }, [products, debouncedQuery]);

  useEffect(() => {
    setSearchTerm(debouncedQuery);

    if (debouncedQuery.trim()) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
      setSelectedIndex(-1);
    }
  }, [
    debouncedQuery,
    setSearchTerm,
    setIsDropdownOpen,
    setSelectedIndex,
  ]);

  useEffect(() => {
    function handleDocumentClick(event) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        setSelectedIndex(-1);
      }
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener(
        "click",
        handleDocumentClick
      );
    };
  }, [setIsDropdownOpen, setSelectedIndex]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSuggestionSelect(product) {
    setInputValue(product.title);
    setSearchTerm(product.title);
    setIsDropdownOpen(false);
    setSelectedIndex(-1);
  }

  function performSearch() {
    const query = inputValue.trim();

    if (!query) return;

    const exactProduct = products.find(
      (product) =>
        product.title.trim().toLowerCase() ===
        query.toLowerCase()
    );

    setSearchTerm(query);
    setIsDropdownOpen(false);
    setSelectedIndex(-1);

    if (exactProduct) {
      navigate(`/product/${exactProduct.id}`);
    } else {
      navigate("/shop");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    performSearch();
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      setIsDropdownOpen(false);
      setSelectedIndex(-1);
      return;
    }

    if (!suggestions.length) {
      if (e.key === "Enter") {
        e.preventDefault();
        performSearch();
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      setIsDropdownOpen(true);

      setSelectedIndex((prev) =>
        prev >= suggestions.length - 1 ? 0 : prev + 1
      );

      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      setSelectedIndex((prev) =>
        prev <= 0 ? suggestions.length - 1 : prev - 1
      );

      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();

      if (selectedIndex >= 0) {
        handleSuggestionSelect(
          suggestions[selectedIndex]
        );
      } else {
        performSearch();
      }
    }
  }

  return (
    <div
      className="header-search"
      ref={wrapperRef}
    >
      <form
        className="header-search-form"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          className="header-search-input"
          placeholder="Search products..."
          autoComplete="off"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (inputValue.trim() && suggestions.length) {
              setIsDropdownOpen(true);
            }
          }}
        />

        <button
          type="submit"
          className="header-search-btn"
          aria-label="Search"
        >
          <IoSearchOutline />
        </button>
      </form>

      {isDropdownOpen &&
        suggestions.length > 0 && (
          <ul className="header-search-dropdown">
            {suggestions.map(
              (product, index) => (
                <li
                  key={product.id}
                  className={`header-search-item ${
                    selectedIndex === index
                      ? "active"
                      : ""
                  }`}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    handleSuggestionSelect(product);
                  }}
                  onMouseEnter={() =>
                    setSelectedIndex(index)
                  }
                >
                  {product.title}
                </li>
              )
            )}
          </ul>
        )}
    </div>
  );
}

export default SearchBar;