import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import "./App.css"

// Components
import { Welcome } from "./pages/Welcome/Welcome"
import { Skills } from "./pages/Skills/Skills"
import { Work } from "./pages/Work/Work"
import { ContactMe } from "./pages/ContactMe/ContactMe"
function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<ContactMe />} />
        </Routes>
    )
}

export default App
