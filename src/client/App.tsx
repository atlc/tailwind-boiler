import * as React from "react";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <main className="mt-5">
                <h1 className="text-center text-5xl text-blue-700 dark:text-blue-300">Hello world!</h1>

                <div className="flex justify-center">
                    <button className="p-2 m-3 shadow-xl rounded-md bg-green-600 text-green-200 hover:bg-green-500 hover:text-green-100 dark:bg-green-800 dark:text-green-500 dark:hover:bg-green-700 dark:hover:text-green-400">
                        Inline classes
                    </button>

                    <button className="btn btn-success">Classes with @apply directives</button>
                </div>
            </main>
        </>
    );
};

export default App;
