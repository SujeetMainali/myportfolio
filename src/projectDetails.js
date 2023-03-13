import MobileAppDev from './Assets/MobileAppDev.png'
import WebDev from './Assets/WebDev.jpg'
import IOT from './Assets/IOT.jpg'
const projectDetails = [
    {
      title: 'Web App Development',
      description: 'MERN is a popular web development stack that consists of MongoDB, Express.js, React, and Node.js. It allows for building web apps using a single language, JavaScript, and enables a high level of flexibility and scalability. In MERN, MongoDB is used as the database, Express.js provides a REST API, React builds the frontend, and Node.js runs the backend server.',
      image: WebDev,
      technologies: ['React Js', 'Node Js', 'Mongo DB']
    },
    {
      title: 'Mobile App Development',
      description: 'Flutter is a free and open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. The first version of Flutter was known as codename "Sky" and ran on the Android operating system.',
      image: MobileAppDev,
      technologies: ['Flutter', 'Dart', 'Firebase']
    },
    {
      title: 'IOT (Internet of Things)',
      description: 'IOT is a system of interrelated computing devices, mechanical and digital machines, objects, animals or people that are provided with unique identifiers (UIDs) and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.',
      image: IOT,
      technologies: ['Arduino', 'Raspberry Pi', 'ESP32']
    }
  ]

export default projectDetails