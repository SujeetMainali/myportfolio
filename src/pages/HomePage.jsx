
import { useState } from "react"
import NavBar from "../components/NavBar"
import Links from "../components/Links"
import ProfilePic from "../Assets/ProfilePic.png"
import projectDetails from "../projectDetails"
import Projects from "../components/Projects"
import Footer from "../components/Footer"

const HomePage = () => {
    const [darkMode, setDarkMode] = useState(false)
    return(
        <div className={darkMode ? "dark" : ""}>

        <main className=' bg-gray-200 px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
          <section className=' min-h-screen'>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

            <div className=' text-center p-10 '>
              <h2 className='  text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Sujeet Mainali</h2>
              <h3 className=' text-2xl py-2 md:text-3xl'>Mobile Applications and Web Developer</h3>
              <p className=' text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>

                Greetings everyone, I am <span className='text-teal-600 font-bold'>Sujeet Mainali</span> i currently studying at Islington College, Kamalpokhari Kathmandu. I have good knowledge on Flutter for Mobile application development and Django for web development.
                Currently I am learning MERN (MongoDb, Express, React Js, Node Js) for large scale web applications development. I also have knowledge of UI/UX designing and Cloud Computing with AWS (Amazon Web Services).
              </p>

            </div>

            <Links />




            <div className='  mx-auto my-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-0 overflow-hidden'>
              <img src={ProfilePic} alt="" style={{ height: '300px' }} />
            </div>
          </section>

          <section>
            <div className=' text-center'>
              <h3 className=' text-3xl py-3 dark: text-teal-600 '>Services I Offer</h3>
              <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>I offer web development services using the <span className=' text-teal-600 font-bold'>MERN</span> stack and mobile application development services using Flutter. With MERN, I can create dynamic and responsive web applications that are both scalable and efficient. Additionally, with <span className=' text-teal-600 font-bold'>Flutter</span>, I can create beautiful and functional mobile applications for both Android and iOS platforms. Whether you need a simple web or mobile application or a complex solution, I am here to help you every step of the way.</p>
            </div>

            <div className='lg:flex gap-10'>

              {projectDetails.map((project, index) => {
                return (
                  <Projects
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                  />
                )
              })

              }
            </div>
          </section>
          <section>
            <Footer />
          </section>
        </main>
      </div>
    )
}

export default HomePage;