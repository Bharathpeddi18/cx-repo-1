import React from "react"
import '../src/assets/css/variables.css'
import '../src/assets/css/config-form.css'
import '../src/assets/css/reset.css'
import '../src/assets/css/global.css'

import AppHeader from "./layout/app-header/app-header.tsx"
import AppNavigation from "./layout/app-navigation/app-navigation.tsx"
import AppWrapper from "./layout/app-wrapper/app-wrapper.tsx"
import AppFooter from "./layout/app-footer/app-footer.tsx"

const Application = () => {
    return(
        <>
            <div className="ax-resolution-lg" style={{height: '100vh'}}>
                <AppNavigation />
                <AppHeader/>
                <AppWrapper />
                <AppFooter/>
            </div>
        </>
    )
}
export default Application