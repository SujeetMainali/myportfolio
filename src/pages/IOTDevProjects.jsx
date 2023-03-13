import NavBar from "../components/NavBar"
import { useState } from "react"

const IOTProjects = () => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div className={darkMode ? "dark" : ""}>
       <main className=' bg-gray-200 px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
          <section className=' min-h-screen'>
            <NavBar darkMode={darkMode} setDarkMode = {setDarkMode} />
         
            <h1>this is IOT dev page</h1>
          </section>

        </main>
        </div>

        

    )
}

export default IOTProjects