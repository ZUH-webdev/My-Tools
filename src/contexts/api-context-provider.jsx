import React, {useState, useMemo} from 'react'
import { ApiContext } from './api-context';
import data from '../../data.json';
import { Layers, Clipboard, Code, Image, ChartLine, Briefcase, Wallet, Bot, Waypoints, PersonStanding } from 'lucide-react'


const ApiContextProvider = ({ children }) => {
   const [errors, _] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("All");
   const [selectedTag, setSelectedTag] = useState("");

   const categories =  [
    { name: "All", icon: Layers },
    { name: "Productivity", icon: Clipboard },
    { name: "Development", icon: Code },
    { name: "Design", icon: Image },
    { name: "Marketing", icon: ChartLine },
    { name: "Business", icon: Briefcase },
    { name: "Finance", icon: Wallet },
    { name: "AI", icon: Bot },
    { name: "Social Media", icon: Waypoints },
    { name: "Lifestyle", icon: PersonStanding },
  ];

   const tags = useMemo(()=>{
    if(!data) return ["All"];
    const allTags = data.pageProps?.products?.flatMap(item => item.tags);
    // console.log("All Tags:", allTags);
    const uniqueTags = Array.from(new Set(allTags));
    return [{name:"All", slug:"all"}, ...uniqueTags];
   },[])
   
   // Filter by both category and tag together
   const filteredData = useMemo(() => {
     return data.pageProps?.products?.filter((item) => {
       // Check category match
       const matchesCategory =
         selectedCategory === "All" ||
         item.categories.some((cat) => cat.name === selectedCategory);

       // Check tag match
       const matchesTag =
         !selectedTag || !selectedTag.slug || selectedTag.slug === "all" ||
         item.tags.some((tag) => tag.slug === selectedTag.slug);

       // Return true only if both conditions are met
       return matchesCategory && matchesTag;
     });
   }, [selectedCategory, selectedTag, data]);

  return (
    <ApiContext.Provider value={{data, filteredData, errors, categories, selectedCategory, setSelectedCategory, selectedTag, setSelectedTag, tags}}>
      {children}
    </ApiContext.Provider>
  )
}

export default ApiContextProvider;