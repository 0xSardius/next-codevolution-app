import { Metadata } from "next";

type props = { params: Promise<{ productId: string }> };

export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default async function ProductDetails({ params }: props) {
  const productId = (await params).productId;

  return <div>ProductDetails {productId}</div>;
}
