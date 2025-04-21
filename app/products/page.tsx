import Link from "next/link";

export default function ProductList() {
  const productId = 3;
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <ul>
        <li>
          <Link href="/products/1">Product 1</Link>
        </li>
        <li>
          <Link href="/products/2">Product 2</Link>
        </li>
        <li>
          <Link href={`/products/${productId}`}>Product 3</Link>
        </li>
      </ul>
    </div>
  );
}
