import React from 'react';


export function CartPage({ shopList }) {
  const renderItems = shopList.map((obj) => {
    return <div className='border border-gray-200 p-2 flex flex-wrap gap-1 justify-between  items-center '>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={obj.image}
          alt="kjsf"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className='text-base font-medium text-gray-900'>
        <span>{obj.name}</span>
      </h3>
      <p className="ml-4">{obj.price}</p>
      <button type="button" class="text-white text-lg bg-gradient-to-r from-red-400 via-red-500 to-red-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">remove</button>
    </div>
  })
  return (
    <main>
      <div className='py-10 gap-7 flex flex-wrap flex-col '>
        <h2 className='text-center text-xl font-bold'>Cart Items: {shopList.length}</h2>
        {renderItems}
      </div>
    </main>
  );
}

