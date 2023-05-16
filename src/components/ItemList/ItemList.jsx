import React from "react";
import "./itemlist.css";
import { Item } from "../Item/Item";

export const ItemList = ({ productos = [] }) => {
  return (
    <div className="container">
      <h1>Bienvenidos a Librerias Lea</h1>
      <h2>Nuestros productos</h2>
      <hr />
      <div className="fila">
        {productos.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
