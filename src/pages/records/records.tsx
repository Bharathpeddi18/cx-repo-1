import React from "react"
import { Link } from "react-router-dom"

const Records = () => {
    return(
        <>
            <Link to={'/home'} className="cx-color-primary">Home</Link>
            <Link to={'/create'} className="cx-color-primary">Create</Link>
            <Link to={'/records'} className="cx-color-primary">Records</Link>
            <Link to={'/details'} className="cx-color-primary">Details</Link>
            <Link to={'/settings'} className="cx-color-primary">Settings</Link>
        </>
    )
}
export default Records