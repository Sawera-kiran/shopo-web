import { createContext, useContext, useMemo, useState } from "react";

const SearchContext = createContext(null);

function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const value = useMemo(
    () => ({
      searchTerm,
      setSearchTerm,
      isDropdownOpen,
      setIsDropdownOpen,
      selectedIndex,
      setSelectedIndex,
      openDropdown: () => setIsDropdownOpen(true),
      closeDropdown: () => {
        setIsDropdownOpen(false);
        setSelectedIndex(-1);
      },
      clearSearch: () => {
        setSearchTerm("");
        setIsDropdownOpen(false);
        setSelectedIndex(-1);
      },
    }),
    [isDropdownOpen, searchTerm, selectedIndex],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider.");
  }

  return context;
}

export { SearchProvider, useSearch };
