import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getFirestore } from "../../firebase/config";
import firebase from "firebase";
import "firebase/firestore";
import Form from "react-bootstrap/Form";
import "./Checkout.css";

export const Checkout = () => {
  const navigete = useNavigate();

  const volverHaciaAtras = () => {
    navigete(-3);
  };

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const [email, setEmail] = useState("");

  const [nombre, setNombre] = useState("");

  const [apellido, setApellido] = useState("");

  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Teléfono:", telefono);

    const orden = {
      buyer: {
        email,
        nombre,
        apellido,
        telefono,
      },
      item: carrito,
      total_precio: precioTotal(),
      data: firebase.firestore.Timestamp.fromDate(new Date()),
    };
    console.log(orden);

   
    const db = getFirestore();

    const ordenes = db.collection("ordenes");

    ordenes
      .add(orden)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Su compra fue realizada con éxitos",
          text: `Guarde su numero de compra: ${res.id}`,
          willClose: () => {
            vaciarCarrito();
            volverHaciaAtras();
          },
        });
      })
      .finally(() => {
        console.log("Operacion realizada con exito");
      });

    carrito.forEach((item) => {
      const docRef = db.collection("productos").doc(item.id);

      docRef.get().then((doc) => {
        docRef.update({
          stock: doc.data().stock - item.counter,
        });
      });
    });
  };

  return (
    <div>
      <h3>Terminar compra</h3>
      <hr />
      <div className="d-flex flex-row justify-content-center my-4 fade-in ">
        <div border="light" className="form--container w-100">
          <h1 className="fs-3 m-0 fw-bold text-dark text-center">
            INGRESE SUS DATOS DE CONTACTO
          </h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Ingrese su nombre"
                className="mb-3"
                required
                onChange={(e) => setNombre(e.target.value)}
              />
              <Form.Label>Apellido:</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Ingrese su apellido"
                className="mb-3"
                required
                onChange={(e) => setApellido(e.target.value)}
              />
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="mb-3"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Label>Telefono:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese su telefono"
                className="mb-3"
                required
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Form.Group>
            <button type="submit" className="btn btn-success">
              Finalizar compra
            </button>
            <Link to="/cart" className="btn btn-info">
              Volver al carrito
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};
