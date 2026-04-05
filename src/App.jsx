import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/banner/Banner';
import Navbar from './Components/navbar/Navbar';
import Products from './Components/products/Products';
import { Loader } from 'lucide-react';
import ProductSection from './Components/products/ProductSection';

const fetchProductData = async ()=>{
  const res = await fetch('/productData.json');
  return res.json();
}


function App() {
  const productPromise =fetchProductData();
  console.log(productPromise);

  const [cartCard,setCartCard]=useState([]);

  return (
    <>
      <Navbar cartCard={cartCard}></Navbar>
      <Banner></Banner>
      <Suspense fallback={"loading.."}>
        <ProductSection productPromise={productPromise}
        cartCard={cartCard} setCartCard={setCartCard}></ProductSection>
      </Suspense>
    </>
  )
}

export default App
