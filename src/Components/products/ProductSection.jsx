import React, { use } from 'react';
import Products from './Products';

const ProductSection = ({productPromise}) => {
     const products = use(productPromise);
    return (
        <div className='py-25'>
            <div className='py-10 mx-auto text-center flex flex-col items-center justify-center gap-4 max-w-135'>
            <h2 className='font-extrabold text-[48px]'>Premium Digital Tools</h2>
            <p className='text-gray-600'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p> 
            <div className='flex items-center overflow-hidden rounded-full border-[#d6c9e0] border'>
                <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-none border-0 text-white'>
                    Products
                </button>
                <button className='btn rounded-none border-0'>
                    Cart (0)
                </button>
            </div>
            </div>
            <Products products={products}></Products>
        </div>
    );
};

export default ProductSection;