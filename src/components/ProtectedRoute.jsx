import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function ProtectedRoute() {
    const [checking, setChecking] = useState(true);
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setAuthed(!!user);
            setChecking(false);
        });
        return () => unsub();
    }, []);

    if (checking) return <div>Loading...</div>;
    return authed ? <Outlet /> : <Navigate to="/" replace />;
}
