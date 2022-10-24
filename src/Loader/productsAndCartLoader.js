import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  //get Products
  const productsData = await fetch(
    "https://pla-in-ema-jhon-server-afianasrin1.vercel.app/allProducts"
  );
  const products = await productsData.json();
  //get cart
  const savedCart = getStoredCart();

  //   console.log(savedCart);
  const initialCart = [];
  //   console.log(products);
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
      //   console.log(initialCart);
    }
  }
  return { products: products, initialCart: initialCart };
};
