import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ItemsList } from '../components/ItemsList';
import {CartPage} from '../components/CartPage'

function AllRoute({shopList, setShopList}) {
  const addItems = (name, price, image)=>{
    setShopList([...shopList, {name, price, image}])
  }
  console.log(shopList)

  return (
    <Routes>
      <Route path='/' element={<ItemsList  onChange={addItems} />} />
      <Route path='/cart' element={<CartPage shopList={shopList}/>} />
    </Routes>
  );
}

export default AllRoute;