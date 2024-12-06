import React from 'react'
import Sales from './components/sales'
import Button from './components/button'
import Categories from './components/categories'
import Products from './components/products'
import Arrival from './components/arrival'
import Customer from './components/customer'
import Footer from './components/footer'
import OurProduct from './components/ourproducts'

const Page = () => {
  return (
    <div>
        <Sales/>
      <Button/>
      <Categories/>
      <Products/>
      <OurProduct/>
      <Arrival/>
      <Customer/>
      
    </div>
  )
}

export default Page