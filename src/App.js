import "./styles.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Axios from "./axios";
import Gallery from "./components/Gallery";
import Error from "./components/Error";
export default function App() {
  const [imageData, setImageData] = useState([]);
  const [total, setTotal] = useState(1);
  const [noSearchTermError , setNoSearchTermError ]  = useState(false)
const timerFunction = ()=>{
  setNoSearchTermError(true)
  setTimeout(() => {
    setNoSearchTermError(false)
  }, 4000);
  
  
}
  const getSearchTerm = (searchTerm) => {
    searchTerm !== ""
      ? Axios.get(
          `/search/photos/?client_id=bx_LI5Ljxn6UJJxVJBJQQk1M8unGP1-faY1hH_NDc2A&query=${searchTerm}&per_page=50`
        )
          .then((res) => {
            console.log(res);
            setImageData(res.data.results);
            setTotal(res.data.total);
          })
          .catch((e) => console.log("Error:", e))
      : timerFunction()
  };
  return (
    <div>
      <Title clickFunction={getSearchTerm} />
      {noSearchTermError &&  <ul> <Error text="Oops! Looks like you didnt type any keywords."/></ul> } 
      <Gallery datas={imageData} total={total} />
     
    </div>
  );
}
