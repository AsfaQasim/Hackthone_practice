import React, { useState } from "react";
import Button from "./Button";
import OurProduct from "./OurProduct";

const App = () => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="w-full">
      {/* Button to show products */}
      {!showProducts && (
        <Button onClick={() => setShowProducts(true)} /> // Pass handler to the Button
      )}

      {/* Conditionally render the OurProduct component */}
      {showProducts && <OurProduct />}
    </div>
  );
};

export default App;
