import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
const Links = () => {
    return (
        <div className='text-5xl flex flex-wrap justify-center items-center py-3 text-gray-600 max-w-xl mx-auto lg:flex-row lg:justify-center lg:gap-20 md:gap-16 sm:gap-14 gap-4 dark:text-teal-600'>
        <a href="https://www.facebook.com/sujeet.mainali" target={'blank'}><AiFillFacebook /></a>
        <a href="https://www.instagram.com/mainalisujeet" target={'blank'}><AiFillInstagram /></a>
        <a href="https://twitter.com/MainaliSujeet" target={'blank'}><AiFillTwitterCircle /></a>
        <a href="https://www.linkedin.com/in/sujeet-mainali-a72902225/" target={'blank'}><AiFillLinkedin /></a>
        <a href="https://www.github.com/SujeetMainali" target={'blank'}><AiFillGithub /></a>
      </div>
    );
    }

export default Links;