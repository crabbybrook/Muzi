import Appbar from '@/components/Appbar';
import Link from 'next/link';

export default function Notound() {
    return (
        <div className="bg-linear-to-br from-gray-900 via-purple-900 to-gray-950 p-5">
            <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
                <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-white mb-2">Page Not Found</h2>
                <p className="text-white mb-6">Sorry, we couldn't find the page you're looking for.</p>
                <Link
                    href="/"
                    className="px-6 py-3 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}
