import React from "react"
import { BrowserRouter } from "react-router-dom"

import Application from "./application.tsx"


const App = () => {
    return(
        <>
            <React.StrictMode>
                <BrowserRouter>
                    <Application />
                </BrowserRouter>
            </React.StrictMode>
        </>
    )
}
export default App