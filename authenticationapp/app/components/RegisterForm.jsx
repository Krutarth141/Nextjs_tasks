"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError("Please fill all fields");
            return;
        }
        try {
            const resUserExists = await fetch("/api/register/userExists", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            const {user} = await resUserExists.json();

            if (user) {
                setError("User already exists");
                return;
            }

            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });
            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/");
            } else {
                console.log("Error registering user");
            }


        } catch (error) {
            console.log("Error registering user");
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 border-t-4 border-green-400 w-80">
                <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Register</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                    />
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
                        Register
                    </button>
                    {
                        error && (<div className="flex items-center space-x-2">
                            <div className="bg-red-500 text-white text-xs py-1 px-2 rounded-md">
                                {error}
                            </div>
                        </div>)
                    }


                    <div className="text-center">
                        <Link href="/" className="text-sm text-gray-600 hover:text-green-600 transition">
                            Already have an account? <span className="underline">Login</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
