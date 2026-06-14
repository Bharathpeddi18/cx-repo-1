import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return(
        <>
            <div className="ax-grid">
                <Link to={'/home'} className="cx-color-primary ax-col-sm-3">Home</Link>
                <Link to={'/create'} className="cx-color-primary ax-col-md-3">Create</Link>
                <Link to={'/records'} className="cx-color-primary ax-col-lg-3">Records</Link>
                <Link to={'/details'} className="cx-color-primary ax-col-xl-3">Details</Link>
                <Link to={'/settings'} className="cx-color-primary ax-col-xxl-3">Settings</Link>
            </div>
        </>
    )
}
export default Home