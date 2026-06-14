import { useState } from 'react';
import { Link } from 'react-router-dom';
import './app-navigation.css'

import ApplicationLogo from '../../assets/images/application-logo.png'
import AXButton from '../../components/ax-button/ax-button.tsx';

const AppNavigation = (props?:any) => {

  const [ navToggle, setNavToggle ] = useState<boolean>(true)

  const runToggleAppNav = () => {setNavToggle(!navToggle)}

  return (
    <>
      <nav className={`ax-app-nav ${navToggle ? 'ax-app-nav-expanded' : 'ax-app-nav-collapsed'}`}  aria-label="Main Navigation">

        <div className="ax-app-nav-app-brand">
          <Link to='/' className="ax-app-nav-app-brand-link" title='AstraX'>
            <img src={ApplicationLogo} alt='Rhybus' height={50} width={150}/>
          </Link>
          <AXButton
            id='btn-app-nav-toggle'
            label='O'
            className='ax-app-nav-toggle'
            onClick={runToggleAppNav}
          />
        </div>

        <ul className='ax-menu-list'>

        </ul>
      </nav>
    </>
  )
}
export default AppNavigation