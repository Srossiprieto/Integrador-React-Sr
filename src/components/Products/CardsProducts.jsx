import React from 'react'
import {products} from "../../data/products"
import { ProductContainer,ContainerProductWrapper ,ProductWrapper } from "./CardProductsStyles"
import CardProduct from "./CardProduct"


function CardsProducts() {
    return (
      <ProductContainer>
        <h1>Productos destacados</h1>
        <ContainerProductWrapper>
            <ProductWrapper>
            {products.map(prod =>(
              
              <CardProduct key={prod.id} {...prod} />
              
              ))}
        </ProductWrapper>
        </ContainerProductWrapper>
      </ProductContainer>
    );
  };

export default CardsProducts

