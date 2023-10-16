import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const PizzaItem = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState({});

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://62f600ee612c13062b4441c2.mockapi.io/sneakers/pizzas/${id}`,
      );
      setPizza(res.data);
    })();
  }, [id]);

  if (!pizza) {
    return <div> ...Loading </div>;
  }
  return (
    <div>
      <h3>{pizza.title}</h3>
      <img src={pizza.imageUrl} alt={pizza.title} />
      <p>{pizza.price} грн </p>
    </div>
  );
};
