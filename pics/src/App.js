import React, { useState } from "react";
import searchImages from './api'
import ImageList from "./components/ImageList";
import SearchBox from "./components/SearchBox";


const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async(term) => {
    const results = await searchImages(term);
    console.log(results,"------results-----")
    setImages(results)
  };


  return (
    <div>
      <SearchBox onSubmit={handleSubmit} />
      <ImageList images = {images}/>
    </div>
  );
};

export default App;
