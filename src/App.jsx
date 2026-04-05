import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/banner/Banner";
import Navbar from "./Components/navbar/Navbar";
import Products from "./Components/products/Products";
import { Loader } from "lucide-react";
import ProductSection from "./Components/products/ProductSection";
import Steps from "./Components/steps/Steps";

const fetchProductData = async () => {
  const res = await fetch("/productData.json");
  return res.json();
};
const fetchStepsData = async () => {
  const res = await fetch("/stepsData.json");
  return res.json();
};


function App() {
  const productPromise = fetchProductData();
  const stepsPromise = fetchStepsData();
  const [cartCard, setCartCard] = useState([]);

  return (
    <>
      <Navbar cartCard={cartCard}></Navbar>
      <Banner></Banner>
      <Suspense fallback={"loading.."}>
        <ProductSection
          productPromise={productPromise}
          cartCard={cartCard}
          setCartCard={setCartCard}
        ></ProductSection>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <Steps stepsPromise={stepsPromise}></Steps>
      </Suspense>
    </>
  );
}

export default App;
