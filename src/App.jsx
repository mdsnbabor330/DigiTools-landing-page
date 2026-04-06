import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/banner/Banner";
import Navbar from "./Components/navbar/Navbar";
import Products from "./Components/products/Products";
import { Loader } from "lucide-react";
import ProductSection from "./Components/products/ProductSection";
import Steps from "./Components/steps/Steps";
import Pricing from "./Components/pricing/Pricing";
import Workflow from "./Components/workflow/Workflow";
import Footer from "./Components/footer/Footer";

const fetchProductData = async () => {
  const res = await fetch("/productData.json");
  return res.json();
};
const fetchStepsData = async () => {
  const res = await fetch("/stepsData.json");
  return res.json();
};
const fetchPricingData = async ()=>{
  const res = await fetch('/pricingData.json');
  return res.json();
}


function App() {
  const productPromise = fetchProductData();
  const stepsPromise = fetchStepsData();
  const pricingPromise = fetchPricingData()
  const [cartCard, setCartCard] = useState([]);

  return (
    <>
      <Navbar cartCard={cartCard}></Navbar>
      <Banner></Banner>
      <Suspense fallback={"loading..."}>
        <ProductSection
          productPromise={productPromise}
          cartCard={cartCard}
          setCartCard={setCartCard}
        ></ProductSection>
      </Suspense>
      <Suspense fallback={"loading..."}>
        <Steps stepsPromise={stepsPromise}></Steps>
      </Suspense>
      <Suspense fallback={"Loading..."}>
        <Pricing pricingPromise={pricingPromise}></Pricing>
      </Suspense>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  );
}

export default App;
