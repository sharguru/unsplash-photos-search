import React from "react";
import Image from "./Image";
import Error from "./Error"


export default function Gallery({datas ,total}) {
  return (
    <div className="results">
      
      <ul>
        {datas.length !== 0  
          ? datas.map((data) => <Image src={data.urls.regular} alt={data.alt_description} key={data.id}/>)
          : total === 0 && <Error text="Enter Correct spelling for best results"/>
        }
      </ul>
    </div>
  );
}
