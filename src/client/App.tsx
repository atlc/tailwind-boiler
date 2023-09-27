import * as React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

interface Dookie {
    id: number;
    strang: string;
}

const App = () => {
    const [garbage, setGarbage] = useState<Dookie[]>([]);

    useEffect(() => {
        fetch("/api/dookie")
            .then((res) => res.json())
            .then((data) => setGarbage(data));
    }, []);

    return (
        <>
            <Navbar />
            <main className="mt-5">
                <h1 className="text-5xl text-center text-blue-700 dark:text-blue-300">Hello world!</h1>

                <div className="flex justify-center">
                    <button className="p-2 m-3 text-green-200 bg-green-600 rounded-md shadow-xl hover:bg-green-500 hover:text-green-100 dark:bg-green-800 dark:text-green-500 dark:hover:bg-green-700 dark:hover:text-green-400">
                        Inline classes
                    </button>

                    <p>Garbage data from database deployment demo: {JSON.stringify(garbage)}</p>

                    <button className="btn btn-success">Classes with @apply directives</button>
                </div>
            </main>
        </>
    );
};

export default App;
