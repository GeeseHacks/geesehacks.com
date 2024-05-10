import Image from 'next/image';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4">
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Welcome to the Home Page
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            Get started by editing <code className="font-mono">pages/page.tsx</code>
          </p>
        </section>
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Additional content sections or cards can be added here */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Section 1</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Detailed information about section 1 can go here.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Section 2</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Detailed information about section 2 can go here.
              </p>
            </div>
            {/* Repeat for other sections as necessary */}
          </div>
        </section>
      </main>
    </div>
  );
}
