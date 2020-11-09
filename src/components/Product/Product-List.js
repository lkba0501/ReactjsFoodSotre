import React from 'react';
import { Component } from 'react';
import '../Product/Product-List.css';

class Product extends Component {
  render() {
    const foods = [
      {
        id: 1,
        name: 'Pizza',
        image: require('../../assets/images/pizza.jpg'),
        description: 'pizza'
      },
      {
        id: 2,
        name: 'Spaghetti',
        image: require('../../assets/images/spaghetti.jpg'),
        description: 'spaghetti'
      },
      // {
      //   id: 3,
      //   name: 'Beefsteak',
      //   image: require('../../assets/images/beefsteak.jpg'),
      //   description: 'beefsteak'
      // },
      // {
      //   id: 4,
      //   name: 'Cake',
      //   image: require('../../assets/images/cake.jpg'),
      //   description: 'cake'
      // },
      // {
      //   id: 5,
      //   name: 'Salad',
      //   image: require('../../assets/images/salad.jpg'),
      //   description: 'salad'
      // },
      {
        id: 6,
        name: 'Wine',
        image: require('../../assets/images/wine.jpg'),
        description: 'wine'
      },
      {
        id: 7,
        name: 'Rice',
        image: require('../../assets/images/rice.jpg'),
        description: 'salad'
      },
      // {
      //   id: 8,
      //   name: 'Salad',
      //   image: require('../../assets/images/salad-2.jpg'),
      //   description: 'wine'
      // }
    ];

    const productList = foods.map(food => {
      return <div className="product-item"><img key={food.id} src={food.image} alt={food.description} className="food-image" /></div>
    });
    return (
      <div className="product-container">
        <div className="product-detail">
          {productList}
        </div>

      </div>
    );
  }
};

export default Product;