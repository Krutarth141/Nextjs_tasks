"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        // This hook will ensure that any client-only code runs only on the client side
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false, // Prevent automatic redirect to debug the issue
            });
    
            if (res.error) {
                setError("Invalid credentials");
                return;
            }
    
            // Redirect manually to the dashboard after successful sign-in
            router.push("/dashboard");
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 border-t-4 border-green-400 w-80">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition duration-200"
                    >
                        Login
                    </button>
                    {error && (
                        <div className="flex items-center space-x-2">
                            <div className="bg-red-500 text-white text-xs py-1 px-2 rounded-md">
                                {error}
                            </div>
                        </div>
                    )}
                    <div className="text-center">
                        <Link href="/register" className="text-sm text-gray-600 hover:text-green-600 transition">
                            Don't have an account? <span className="underline">Register</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
