import React from "react";
import "./App.css";
import VisaCard from "./components/VisaCard";
import Tabs from "./components/Tabs";
import Expenses from "./components/Expenses";

function App() {
    return (
        <main>
            <div className="container px-5 py-5">
                <h2>Urban Bank</h2>
                <div className="row g-3">
                    <VisaCard />
                    <Tabs />
                    <Expenses />
                </div>
            </div>
        </main>
    );
}

export default App;
