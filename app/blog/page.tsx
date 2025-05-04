import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
}
