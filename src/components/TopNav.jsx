import { useState } from 'react'

// icons
import { AiOutlineMenu, AiOutlineHistory, AiOutlineClose } from 'react-icons/ai'
import { ImStarFull } from 'react-icons/im'
import { BiLogOut } from 'react-icons/bi'
import { IoLanguageOutline } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'

function TopNav() {
  const [sideMenu, setSideMinu] = useState(false)

  return (
    <nav className='top-nav'>
        <div className="nav-item" onClick={() => setSideMinu(true)}>
            <AiOutlineMenu />
        </div>
        <div className="nav-item star">
            <span>0</span>
            <ImStarFull />
        </div>
        <div className={`side-menu ${sideMenu ? 'side-menu-open' : ''}`}>
          <div className="close-section">
            <div className="close" onClick={() => setSideMinu(false)}>
              <AiOutlineClose />
              </div>
          </div>
          <div className="items">
            <div><AiOutlineHistory /> history</div>
            <div><MdLocationOn /> nearby machine</div>
            <div><IoLanguageOutline /> language</div>
            <div><BiLogOut /> logout</div>
          </div>
        </div>
    </nav>
  )
}

export default TopNav