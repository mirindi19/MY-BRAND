import "./style.css"
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArticleIcon from '@mui/icons-material/Article';
import InventoryIcon from '@mui/icons-material/Inventory';
import PublishIcon from '@mui/icons-material/Publish';
const loading = () => {
  return (
    <div>
        <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbtn">
        <MenuIcon/>
        </label>
        <label class="logo">MIRINDI</label>
        <ul>
            <li><a class="active" href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><button onclick="logout()">logout</button></li>
        </ul>
        </nav>
        
        <div class="loading">
        <img src="../pictures/saidi.png" width="400px" height="500px"/>
            

        <div class="header-text">   
               <p class="this"><b>THIS IS ME</b></p><br/>
               <h1 class="H1Name">MIRINDI SAIDI</h1><br/>
               <p>I am a software engineer based<br/> in Kigali Rwanda. I created to make life enjoble.</p>
               <br/><br/>
               <button class="btnDiscover">Discover Now</button>
        </div>   
        </div>

        <div class="about">
        <div class="about-H">
            <h4 class="AmYs">ABOUT MYSELF</h4><br/>
            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
            <br/>
            <div class="allDonation">

                <div class="donation">
                <ArticleIcon style={{color:'#004080'}}/>
                    <br/>
                    <b>12</b>
                    <br/>
                    <p>Total Project</p>
                </div>
                <div class="donation">
                <PublishIcon style={{color:'#004080'}}/>
                    <br/>
                    <b>20</b>
                    <br/>
                    <p>Total Project</p>
                </div>
                <div class="donation">
                <InventoryIcon  style={{color:'#004080'}}/>
                    <br/>
                    <b>$2.5M</b>
                    <br/>
                    <p>Total donation</p>
                </div>
            </div>  
        </div>
        
        <div class="skill">
            <h4>Skills</h4>
            <br/>
            <p>Html 89%</p>
            <div class="d1">
                <div class="d11"></div>
            </div>
            <br/>
            <p>Figma 79%</p>
            <div class="d1">
                <div class="d12"></div>
            </div>
            <br/>
            <p>Css 79%</p>
            <div class="d1">
                <div class="d13"></div>
            </div>
            <br/>
        
            <p>JavaScript 59%</p>
            <div class="d1">
                <div class="d14"></div>
            </div><br/>
            <p>React 69%</p>
            <div class="d1">
                <div class="d15"></div>
            </div>
        </div> 
    </div>

    <div class="contact">
    <h2>CONTACT US</h2>
    <br/>
    <p>If you are looking at blank cassettes on the web, you may be <br/>very confused at the difference in price. You may see some for as low as $.17 each.</p>
<br/>
<p class="imgmap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.956360598342!2d30.084552219098484!3d-1.9578905318920299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca65f818d7abb%3A0x3365ea4646012e41!2sRugando%2C%20Kigali!5e0!3m2!1sen!2srw!4v1673422467889!5m2!1sen!2srw" style={{border:0,allowfullscreen:'',loading:'lazy',referrerpolicy:'no-referrer-when-downgrade'}}></iframe></p>

</div>

    <div class="Blog">
    <h2 style={{textAlign:'center'}}>LATEST POSTS FROM BLOG</h2>
    <br/>
    <p style={{textAlign:'center'}}>If you are looking at blank cassettes on the web, you may be <br/>very confused at the difference in price. You may see some for as low as $.17 each.</p>

<br/><br/>
<div class="blog1" id="box">
<div class="blog11" >
<img src="../pictures/pi5.jpeg" width="250px" height="200px"/>
<p class="p1">25 October, 2017 | By Mark Wiens</p><br/>
<p class="p2"><b>GAMBLING BECOMES A PROBLEM</b></p><br/>
<p class="p3">Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes.</p>
</div>
<div class="blog11" >
<img src="../pictures/pi2.jpeg" width="250px" height="200px"/>
<p class="p1">25 October, 2017 | By Mark Wiens</p><br/>
<p class="p2"><b>GAMBLING BECOMES A PROBLEM</b></p><br/>
<p class="p3">Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes.</p>
</div>
<div class="blog11" >
<img src="../pictures/pi3.jpeg" width="250px" height="200px"/>
<p class="p1">25 October, 2017 | By Mark Wiens</p><br/>
<p class="p2"><b>GAMBLING BECOMES A PROBLEM</b></p><br/>
<p class="p3">Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes.</p>
</div>
<div class="blog11" >
<img src="../pictures/pi4.jpeg" width="250px" height="200px"/>
<p class="p1">25 October, 2017 | By Mark Wiens</p><br/>
<p class="p2"><b>GAMBLING BECOMES A PROBLEM</b></p><br/>
<p class="p3">Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes.</p>
</div>

</div>

</div>
    <div class="footer">
    <div class="footerAbout">
    <b class="footerBold">ABOUT ME</b>
    <p style={{color:'white', paddingTop:10, fontSize:12}}>Do you want to be even more successful? Learn to love learning<br/>  and growth.
     The more effort you put into improving your skills,</p>
     <p style={{color:'white', paddingTop:10, fontSize:12}}>Copyright ©2022 All rights reserved | This template is made with by 
   <br/><b style={{color:'#234EE8'}}>Saidi</b></p>
    </div>
    <div class="new">
    <b class="footerBold">NEWSLETTER</b>
    <p style={{color:'white', paddingTop:10, fontSize:12}}>Stay updated with our latest trends</p><br/>
   <div className="tryForm"><input type="text" style={{height:30,color:'#434141',paddingLeft:20,}} placeholder='Enter email Address'/><button style={{height:30,backgroundColor:'#234EE8', borderRadius:0, border:'#234EE8'}}><ArrowForwardIcon style={{color:'white'}}/></button></div>
</div> 
<div class="follow">
    <b class="footerBold">FOLLOW ME</b>
    <p style={{color:'white', paddingTop:10, fontSize:12}}>Let us be social</p><br/>
    <div class="sicon">
        <FacebookIcon style={{color:'blue'}}/>
        <TwitterIcon style={{color:'blue'}}/>
        <InstagramIcon style={{color:'red'}}/>
    </div>
</div>
    </div>



    
    </div>
  )
}

export default loading