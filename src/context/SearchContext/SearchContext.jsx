import { createContext, useContext, useMemo, useState } from "react";

const SearchContext = createContext(null);

function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const clearSearch = () => {
    setSearchTerm("");
    setIsDropdownOpen(false);
    setSelectedIndex(-1);
  };

  const value = useMemo(
    () => ({
      searchTerm,
      setSearchTerm,

      isDropdownOpen,
      setIsDropdownOpen,

      selectedIndex,
      setSelectedIndex,

      clearSearch,
    }),
    [
      searchTerm,
      isDropdownOpen,
      selectedIndex,
    ]
  );

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(
      "useSearch must be used within SearchProvider."
    );
  }

  return context;
}

export { SearchProvider, useSearch };