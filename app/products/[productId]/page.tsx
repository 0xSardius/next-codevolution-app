export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const productId = params.productId;

  return <div>ProductDetails {productId}</div>;
}
