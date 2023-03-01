import "./landing.css"
import MenuIcon from '@mui/icons-material/Menu';
import ArticleIcon from '@mui/icons-material/Article';
import InventoryIcon from '@mui/icons-material/Inventory';
import PublishIcon from '@mui/icons-material/Publish';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
const landing = () => {
  return (
    <div>
    <nav className="navlanding">
    <input type="checkbox" className="check"/>
    <label className="checkbtn">
    <MenuIcon/>
    </label>
    <label className="logo">MIRINDI</label>
    <ul>
        <li><a className="active" href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <Link to="/login-form">
        <li><a>logout</a></li>
        </Link>
    </ul>
    </nav>
    <div className="loading">
    <img src="../pictures/saidi.png" width="400px" height="500px"/>
        

    <div className="header-text">   
           <p className="this"><b>THIS IS ME</b></p><br/>
           <h1 className="H1Name">MIRINDI SAIDI</h1><br/>
           <p>I am a software engineer based<br/> in Kigali Rwanda. I created to make life enjoble.</p>
           <br/><br/>
           <button className="btnDiscover">Discover Now</button>
    </div>   
    </div>

    <div className="about">
    <div className="about-H">
        <h4 className="AmYs">ABOUT MYSELF</h4><br/>
        <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
        <br/>
        <div className="allDonation">

            <div className="donation">
            <ArticleIcon style={{color:'#004080'}}/>
                <br/>
                <b>12</b>
                <br/>
                <p>Total Project</p>
            </div>
            <div className="donation">
            <PublishIcon style={{color:'#004080'}}/>
                <br/>
                <b>20</b>
                <br/>
                <p>Total Project</p>
            </div>
            <div className="donation">
            <InventoryIcon  style={{color:'#004080'}}/>
                <br/>
                <b>$2.5M</b>
                <br/>
                <p>Total donation</p>
            </div>
        </div>  
    </div>
    
    <div className="skill">
        <h4>Skills</h4>
        <br/>
        <p>Html 89%</p>
        <div className="d1">
            <div className="d11"></div>
        </div>
        <br/>
        <p>Figma 79%</p>
        <div className="d1">
            <div className="d12"></div>
        </div>
        <br/>
        <p>Css 79%</p>
        <div className="d1">
            <div className="d13"></div>
        </div>
        <br/>
    
        <p>JavaScript 59%</p>
        <div className="d1">
            <div className="d14"></div>
        </div><br/>
        <p>React 69%</p>
        <div className="d1">
            <div className="d15"></div>
        </div>
    </div> 
</div>
<div className="contact">
<h2>CONTACT US</h2>
<br/>
<p>If you are looking at blank cassettes on the web, you may be <br/>very confused at the difference in price. You may see some for as low as $.17 each.</p>
<br/>
<p className="imgmap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.956360598342!2d30.084552219098484!3d-1.9578905318920299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca65f818d7abb%3A0x3365ea4646012e41!2sRugando%2C%20Kigali!5e0!3m2!1sen!2srw!4v1673422467889!5m2!1sen!2srw" style={{border:0,allowfullscreen:'',loading:'lazy',referrerpolicy:'no-referrer-when-downgrade'}}></iframe></p>

</div>

<div className="Blog">
<h2 style={{textAlign:'center'}}>LATEST POSTS FROM BLOG</h2>
<br/>
<p style={{textAlign:'center'}}>If you are looking at blank cassettes on the web, you may be <br/>very confused at the difference in price. You may see some for as low as $.17 each.</p>

<br/><br/>
<div className="blog1" id="box">
<div className="blog11" >
<img src="../pictures/pi5.jpeg" width="250px" height="200px"/>
<p className="p1">25 October, 2017 | By Mark Wiens</p><br/>
<p className="p2"><b>GAMBLING BECOMES A PROBLEM</b></p><br/>
<p className="p3">Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes.</p>
</div>
<div className="blog11" >
<img src="../pictures/pi5.jpeg" width="250px" height="200px"/>
<p className="p1">25 October, 2017 | By Mark Wiens</p><br/>
<p className="p2"><b>GAMBLING BECOMES A PROBLEM</b></p><br/>
<p className="p3">Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes.</p>
</div>
<div className="blog11" >
<img src="../pictures/pi5.jpeg" width="250px" height="200px"/>
<p className="p1">25 October, 2017 | By Mark Wiens</p><br/>
<p className="p2"><b>GAMBLING BECOMES A PROBLEM</b></p><br/>
<p className="p3">Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes.</p>
</div>
<div className="blog11" >
<img src="../pictures/pi5.jpeg" width="250px" height="200px"/>
<p className="p1">25 October, 2017 | By Mark Wiens</p><br/>
<p className="p2"><b>GAMBLING BECOMES A PROBLEM</b></p><br/>
<p className="p3">Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes.</p>
</div>

</div>

</div>

<div className="footer">
    <div className="footerAbout">
    <b className="footerBold">ABOUT ME</b>
    <p style={{color:'white', paddingTop:10, fontSize:12}}>Do you want to be even more successful? Learn to love learning<br/>  and growth.
     The more effort you put into improving your skills,</p>
     <p style={{color:'white', paddingTop:10, fontSize:12}}>Copyright ©2022 All rights reserved | This template is made with by 
   <br/><b style={{color:'#234EE8'}}>Saidi</b></p>
    </div>
    <div className="new">
    <b className="footerBold">NEWSLETTER</b>
    <p style={{color:'white', paddingTop:10, fontSize:12}}>Stay updated with our latest trends</p><br/>
   <div className="tryFormLanding"><input type="text" style={{height:30,color:'#434141',paddingLeft:20,}} placeholder='Enter email Address'/></div>
</div> 
<div className="follow">
    <b className="footerBold">FOLLOW ME</b>
    <p style={{color:'white', paddingTop:10, fontSize:12}}>Let us be social</p><br/>
    <div className="sicon">
        <FacebookIcon style={{color:'blue'}}/>
        <TwitterIcon style={{color:'blue'}}/>
        <InstagramIcon style={{color:'red'}}/>
    </div>
</div>
    </div>
    </div>
  )
}

export default landing