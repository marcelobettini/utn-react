import { error } from 'console';
import { useEffect, useState } from 'react';

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   async function getData(endpoint) {
  //     try {
  //       const res = await fetch(endpoint);
  //       const data = await res.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   }
  //   getData('https://fakestoreapi.com/products');
  // }, []);
  useEffect(() => {
    function getData(endpoint) {
      fetch(endpoint)
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.error(error.message));
    }
    getData('https://fakestoreapi.com/products');
  }, []);
  return (
    <section>
      {products && products.map(prod => <li key={prod.id}>{prod.title}</li>)}
    </section>
  );
}
