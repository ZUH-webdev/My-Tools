import { useContext, createContext } from "react";


export const ApiContext = createContext({
  data: null,
  setData: () => { },
  filteredData: null,
  errors: "",
  categories: [],
  selectedCategory: "All",
  setSelectedCategory: () => { },
  tags: [],
  selectedTag: "",
  setSelectedTag: () => { },
});


export const useApiContext = () => {
  return useContext(ApiContext);
};
