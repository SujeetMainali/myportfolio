import { Link } from 'react-router-dom'
const Projects = ({ title, image, description, technologies }) => {
    const [firstWord, ...restOfDescription] = description.split(' ')
    return (
        <div className=' text-center  shadow-lg p-10 rounded-xl my-10  dark:shadow-md dark:shadow-teal-600'>
            <img src={image} alt="" style={{ height: '100px' }} className=' mx-auto' />
            <Link to={title+"_Projects"}><h3 className=' font-bold text-2xl  text-teal-600 pt-8 pb-2 dark:text-teal-600'>{title}</h3></Link>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
                <span className=' font-bold text-lg text-teal-600'>{firstWord}</span> {restOfDescription.join(' ')}
            </p>
            <h4 className=' py-4  text-teal-600 '>Technologies I use</h4>
            <div className='flex flex-col justify-center'>
                {technologies && technologies.map((tech, index) => (
                        <span key={index} className=' text-gray-800 py-1 px-3 m-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white'>{tech}</span>
                    
                ))}
                
            </div>

        </div>
    )
}

export default Projects;