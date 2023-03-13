import { BsFillMoonStarsFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'


const NavBar = ({darkMode, setDarkMode}) => {
  const handleDarkMode =  ()=>{
    setDarkMode(!darkMode)
  }

  return (
    
    <div >
      <nav className=' py-10 mb-12 flex justify-between'>
        <Link to="/"><h1 className='text-xl font-bold font-burtons dark:text-teal-600'>Sujeet Mainali</h1></Link>
        <ul className=' flex items-center'>
          <li className=' text-black dark:text-teal-600'>
            <BsFillMoonStarsFill onClick={handleDarkMode} className=' cursor-pointer text-2xl' />
          </li>
          <li><a href="#" className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;

