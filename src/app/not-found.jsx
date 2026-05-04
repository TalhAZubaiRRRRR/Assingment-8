import { Button } from "@heroui/react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>

            <h2 className="text-2xl font-semibold mb-2">
                Page Not Found
            </h2>

            <p className="text-gray-500 mb-6 max-w-md">
                Sorry, the page you are looking for doesnot exist or has been moved.
            </p>

            <Link href="/">
                <Button className="px-6 py-3 hover:bg-blue-700">
                    Go Home
                </Button>
            </Link>
        </div>
    );
};

export default NotFound;