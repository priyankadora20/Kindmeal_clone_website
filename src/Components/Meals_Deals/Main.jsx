import React from "react";
import Nutritious from "./Nutritious";
import Paginationmealdeal from "./Paginationmealdeal";

function Main(props) {
  return (
    <>
      <div id="mainimageimage">
        <img
          id="mainimage"
          src="https://www.kindmeal.my/images/ads/banner_janegoodall_message.jpg"
          alt=""
        />
      </div>

      <Paginationmealdeal />

      <div id="nutritious">

        <Nutritious />
        
      </div>
    </>
  );
}
export default Main;
