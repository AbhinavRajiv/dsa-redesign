import { Autocomplete } from "@mantine/core";
import { useState, useEffect } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { getTermSuggestions } from "@/utils/api-calls";
import { useRouter } from "next/router";
import SuggestedCategories from "./SuggestedCategories";
import FiltersAndSorts from "./Filters";

export default function SearchInput({ initialValue }) {
   const router = useRouter();
   const [searchText, setSearchText] = useState(initialValue || "");
   const [debouncedSearchText, setDebouncedSearchText] = useDebouncedValue(
      searchText,
      500
   );
   const [suggestions, setSuggestions] = useState([]);

   function handleSearchSubmit(searchText) {
      router.push(`/search?s=${searchText}`);
   }

   async function handleAutoCompleteSuggestions(searchText) {
      let res = await getTermSuggestions(searchText);
      setSuggestions(res);
   }

   function handleChange(value) {
      setSearchText(value);
      if (value.length < 3) setSuggestions([]);
      if (value.length > 2) handleAutoCompleteSuggestions(value);
   }

   useEffect(() => {
      if (debouncedSearchText.length > 2)
         handleSearchSubmit(debouncedSearchText);
   }, [debouncedSearchText]);

   return (
      <div className="">
         <Autocomplete
            autoFocus
            variant="filled"
            size="lg"
            placeholder="Search for category, region, company or more"
            styles={{
               input: {
                  fontFamily: "Montserrat",
                  borderRadius: "2px",
                  fontSize: "16px",
                  lineHeight: "19.5px",
                  border: "none",
               },
               wrapper: {
                  border: "1px solid #C8C8C8",
                  borderRadius: "2px",
                  overflow: "hidden",
               },
               item: {
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  padding: "5px 10px",
                  color: "gray",
                  borderRadius: "0",
               },
               dropdown: {
                  borderRadius: "0",
               },
            }}
            value={searchText}
            data={suggestions}
            onChange={handleChange}
            rightSection={<img src="/icons/search.svg" className="mr-[15px]" />}
            onKeyDownCapture={(e) => {
               if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearchSubmit(searchText);
               }
            }}
            onSubmit={() => handleSearchSubmit(searchText)}
            onItemSubmit={(value) => handleSearchSubmit(value.value)}
         />
         {debouncedSearchText.length <= 2 ? (
            <SuggestedCategories />
         ) : (
            <FiltersAndSorts />
         )}
      </div>
   );
}
