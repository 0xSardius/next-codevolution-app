"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl mb-6">
          {productId && reviewId
            ? `The review ${reviewId} for product ${productId} doesn&apos;t exist or has been moved.`
            : productId
            ? `The product ${productId} doesn&apos;t exist or has been moved.`
            : "The page you are looking for doesn&apos;t exist or has been moved."}
        </p>
        <div className="mb-8">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
        <div className="text-gray-500">
          <p>If you believe this is an error, please contact support.</p>
        </div>
      </div>
    </div>
  );
}
