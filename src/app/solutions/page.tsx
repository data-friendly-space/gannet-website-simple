import Link from 'next/link';

export default function SolutionsPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Solutions
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Comprehensive solutions for modern businesses. Our cutting-edge platform offers a range of powerful solutions to address your business challenges.
          </p>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600">This page is under construction.</p>
          <Link href="/" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 