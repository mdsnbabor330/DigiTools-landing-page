import { Trash2 } from 'lucide-react';
import React from 'react';

const CartCard = ({cart}) => {
    console.log(cart);
    return (
        <div className='p-3 shadow-xs border border-base-200 hover:scale-101 hover:shadow-xl rounded-xl flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <div></div>
                <div className='space-y-2'>
                    <h4 className='text-[18px] font-bold'>{cart.name}</h4>
                    <p className='text-gray-500'>${cart.price}</p>
                </div>
            </div>
            <button className='btn btn-soft btn-error h-13 w-13 rounded-full'>
                <Trash2/>
            </button>
        </div>
    );
};

export default CartCard;