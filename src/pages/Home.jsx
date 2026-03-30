import React from 'react'
import Navbar from '../components/Navbar'
 import Banner from '../components/Banner'
 import OurSuccess from '../components/Stats'
import JobReady from '../components/JobReady'
// import AboutUs from '../components/AboutUs'
import SE from '../components/SE'
import Partners from '../components/Partners'
import WhyStudent from '../components/WhyStudent'
import Videos from '../components/Videos'
import PlacementPage from '../components/PlacementPage'
import Headlines from '../components/headlines'
import Footer from '../components/Footer'
import Team from '../components/Team'
import Gallery from '../components/Gallery'
import Alumni from '../components/Alumni'
import Courses from '../components/Courses'
import Stats from '../components/Stats'
import EdgeSection from '../components/EdgeSection'
//import VectorAnimation from '../components/VectorAnimation'

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Stats></Stats>

    <JobReady></JobReady>
    
    <Courses></Courses>
    <Team></Team>
    <SE></SE> 
    <EdgeSection></EdgeSection>
    <Alumni></Alumni>
    {/* <AboutUs></AboutUs> */}
    
    <Partners></Partners>
    {/* <VectorAnimation></VectorAnimation> */}
    <WhyStudent></WhyStudent>
    <Videos></Videos>
    <PlacementPage></PlacementPage>
    <Gallery></Gallery>
    {/* <Headlines></Headlines> */}
    <Footer></Footer>
</>


  )
}

export default Home