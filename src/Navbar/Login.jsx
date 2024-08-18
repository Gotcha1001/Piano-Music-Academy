import React, { useEffect, useState } from "react";
import {
    auth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "../Firebaseconfig/firebase";
import { useNavigate, Link } from "react-router-dom";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const db = getFirestore();

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const userDoc = doc(db, "users", currentUser.uid);
                const docSnap = await getDoc(userDoc);

                if (docSnap.exists()) {
                    // User exists in Firestore
                    const userData = docSnap.data();
                    console.log("User data:", userData);
                } else {
                    // User doesn't exist in Firestore
                    console.log("No such user in Firestore!");
                }
                navigate("/");
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            alert("Please enter both email and password");
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Bypass email verification for admin@example.com
            if (email !== "admin@example.com" && !user.emailVerified) {
                await signOut(auth);
                alert("Please verify your email before trying to log in.");
                return;
            }

            // Redirect to home page after successful login
            navigate("/");
        } catch (error) {
            if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
                alert("Incorrect email or password. Please try again or register.");
            } else {
                alert("Error logging in user: Please check your password");
            }
        }
    };

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            console.log("Google Sign-In successful:", user);

            // Retrieve or save user info in Firestore
            const userDoc = doc(db, "users", user.uid);
            const docSnap = await getDoc(userDoc);

            if (!docSnap.exists()) {
                // Create a new user document in Firestore
                await setDoc(userDoc, {
                    firstName: user.displayName.split(" ")[0] || "",
                    lastName: user.displayName.split(" ")[1] || "",
                    uid: user.uid
                });
            }

            navigate("/");
        } catch (error) {
            console.error("Error during Google sign-in:", error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setEmail(""); // Clear email field
            setPassword(""); // Clear password field
            setErrorMessage(""); // Clear error message
            setUser(null); // Reset user state
            navigate("/"); // Redirect to home page after logout
        } catch (error) {
            console.error(error);
        }
    };

    // Function to capitalize each word in the user's name
    const capitalizeName = (name) => {
        if (!name) return "";
        return name
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
    };

    return (

        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="login-form w-full max-w-md rounded-lg bg-black p-8 text-center shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-white">Login</h2>
                {errorMessage && (
                    <p className="mb-4 text-sm text-red-500">{errorMessage}</p>
                )}
                <form onSubmit={handleLogin} autoComplete="off">
                    <div className="mb-4 text-left">
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full rounded-md border border-gray-300 p-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 text-left">
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full rounded-md border border-gray-300 p-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full cursor-pointer rounded-md bg-gray-800 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-gray-900"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4">
                    <button
                        className="cursor-pointer rounded-md bg-teal-600 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-teal-700"
                        onClick={signInWithGoogle}
                    >
                        Login with Google
                    </button>
                </div>
                <div className="mt-4">
                    <Link
                        to="/reset-password"
                        className="text-sm text-teal-500 transition duration-300 ease-in-out hover:text-yellow-500"
                    >
                        Forgot Password?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
