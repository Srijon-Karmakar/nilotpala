// import React, { useState } from "react";
// import Loader from "./components/Loader";
// import Hero from "./components/Hero";

// export default function App() {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <div className="w-full min-h-screen">
//       {!loaded && <Loader onComplete={() => setLoaded(true)} />}
//       {loaded && <Hero />}
//     </div>
//   );
// }






import React, { useState } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Product from "./components/Product"; 
import Categories from "./components/categories"
import Trending from "./components/Trending"
import Testimonial from "./components/Testimonial"

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full min-h-screen">
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <>
          <Hero />
          <Product /> 
          <Categories/>
          <Trending/>
          <Testimonial/>
        </>
      )}
    </div>
  );
}

