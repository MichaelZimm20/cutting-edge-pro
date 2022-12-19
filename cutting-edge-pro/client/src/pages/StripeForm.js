import React, { useState } from "react";
import StripeContainer from "../components/StripeContainer/StripeContainer";
import ImageUpload from "../components/ImageUpload";

function Upload() {
    const [showItem, setShowItem] = useState(false)
  return (
    <div>
        {showItem ? <StripeContainer/> : <><h3>$10.00</h3> <Image style={{width: 200}} cloudName="dt1ejaaxy" publicId={imageLink} />
        <button onClick={() => setShowItem(true)}>Purchase Order</button></>}   
    </div>
  );
}

export default Upload;