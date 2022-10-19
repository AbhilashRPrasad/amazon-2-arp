import React from 'react'
import Product from './Product'
export default function ProductFeed({ products }) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>

      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) =>
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        )}
      <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />

      <div className='md:col-span-2'>
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) =>
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          )}
      </div>

      
      {products
      .slice(5,products.length)
      .map(({ id, title, price, description, category, image}) =>
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      )} 
      


    </div>
  )
}
//{"id","title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}
