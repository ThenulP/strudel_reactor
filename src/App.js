import React from "react";
import "./App.css";
import StrudelDemo from "./components/StrudelDemo";

function App() {
    return (
        <div className="App">
            <header className="py-3 text-center bg-light border-bottom">
                <h1>Strudel Playground</h1>
            </header>
            <section className="p-3">
                <StrudelDemo />
            </section>
        </div>
    );
}

export default App;