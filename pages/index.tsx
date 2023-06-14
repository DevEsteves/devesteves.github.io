import Footer from '../components/footer'
import Projects from '../components/projects'
import About from '../components/about'
import Education from '../components/education'
import TechnologySkills from '../components/technologyskills'
import MyImage from '../images/unopar.png'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import CookieManagement from '../utils/cookieManagement'
import Analytics from '../utils/analytics'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Education img={MyImage} height={110} width={110}/>
      <Projects name='Button' description='React button component'/>
      <TechnologySkills progLangs={["Javascript","Java","Python","C","Typescript"]} 
      frameworks={["React.js","Django","Quarkus","Spring boot","Angularjs"]}
      others={["Node.js","SQL","CSS","Git","Redux","React-hooks","Docker",
      "AWS","Cpanel","Ubuntu","Json","Maven","SASS","GraphQL"]}/>
      <Footer year={2023}/>
      <CookieManagement/>
      <Analytics/>
    </>
  )
}
