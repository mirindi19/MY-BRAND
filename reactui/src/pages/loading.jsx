import "./style.css"
import MenuIcon from '@mui/icons-material/Menu';
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
                <MenuIcon/>
                    <br/>
                    <b>12</b>
                    <br/>
                    <p>Total Project</p>
                </div>
                <div class="donation">
                <MenuIcon/>
                    <br/>
                    <b>20</b>
                    <br/>
                    <p>Total Project</p>
                </div>
                <div class="donation">
                <MenuIcon/>
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

    <div class="footer">
    <div class="footerAbout">
    <b class="footerBold">ABOUT ME</b>
    <p style={{color:'white'}}>Do you want to be even more successful? Learn to love learning<br/>  and growth.
     The more effort you put into improving your skills,</p>
    </div>
    </div>



    
    </div>
  )
}

export default loading