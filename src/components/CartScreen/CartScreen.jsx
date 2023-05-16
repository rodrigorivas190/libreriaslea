import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartEmpty } from "../CartEmpty";
// import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { Card } from "react-bootstrap";

import "./CartScreen.css";

export const CartScreen = () => {
  const { precioTotal, removerItem, carrito, vaciarCarrito } =
    useContext(CartContext);

  const navigete = useNavigate();
  const volverHaciaAtras = () => {
    navigete(-2);
  };

  return (
    <div className="cartscreen">
      {carrito.length === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <h3>Resumen de compra</h3>
          <hr />
          <div className="cartscreen-global">
            <div className="cartscreen-content">
              {carrito.map((product) => (
                <>
                  <Card className="cartscreen-card" style={{ width: "14rem" }}>
                    <Card.Img variant="top" src={product.imagen} />
                    <Card.Text className="cartscreen-text-description">
                      {product.titulo}
                    </Card.Text>
                    <Card.Text className="cartscreen-text-description">
                      {product.descripcion}
                    </Card.Text>
                    <Card.Title className="text-muted">
                      {" "}
                      $ {product.precio}
                    </Card.Title>
                    <Card.Text className="cartscreen-text-counter">
                      Cantidad {product.counter}
                    </Card.Text>
                    <Button
                      className="btn-danger"
                      onClick={() => removerItem(product.id)}
                    >
                      Eliminar producto
                    </Button>
                  </Card>
                </>
              ))}
            </div>
            <div>
              <h3>Precio total ${precioTotal()}</h3>
              <hr />
              <Button onClick={volverHaciaAtras} variant="primary">
                Volver a Inicio
              </Button>
              <Link to="/checkout">
                <Button className="btn btn-success">Terminar compra</Button>
              </Link>
              <Button
                className="btn btn-danger"
                onClick={vaciarCarrito}
                variant="primary"
              >
                Vaciar carrito
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
