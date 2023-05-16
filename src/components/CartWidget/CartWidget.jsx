import React, { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import "./CartWidget.css";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { calcularCantidad } = useContext(CartContext);

  return (
    <div className="position-relative">
      <span className="material-symbols-outlined Cart--Size">
        shopping_cart
      </span>
      <Badge
        pill
        bg="danger"
        className="position-absolute top-50 start-50 ms-3 translate-middle"
      >
        {calcularCantidad()}
      </Badge>
    </div>
  );
};
