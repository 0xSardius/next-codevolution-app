import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>gm</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
      <Link href="/articles/breaking-news-123?lang=es">Read in Spanish</Link>
    </div>
  );
}
