import { Router, Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import { AllProjects } from "./AllProjects"
import { Inicio } from "./Inicio"



export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
