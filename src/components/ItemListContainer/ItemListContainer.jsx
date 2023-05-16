import React, { useEffect, useState } from "react";
import { getFirestore } from "../../firebase/config";

import { ItemList } from "../ItemList/ItemList";
import "./itenlistcontainer.css";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const productos = categoryId
      ? db.collection("productos").where("genero", "==", categoryId)
      : db.collection("productos");
    productos
      .get()
      .then((res) => {
        const newItem = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.table(newItem);
        setItems(newItem);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId, setLoading]);

  return (
    <>
      {loading ? (
        <div className="spinner">
          <Loader />
        </div>
      ) : (
        <ItemList productos={items} />
      )}
    </>
  );
};
