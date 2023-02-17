
let arr =JSON.parse(localStorage.getItem("users") || "[]") 

function signup(){
    // console.log("working");

    var fname= document.getElementById('fname').value;
    var age= document.getElementById('age').value;
    var email= document.getElementById('email').value;
    var pswd= document.getElementById('pswd').value;

   
    var ag = document.validation.age;
    var namef = document.validation.fname;
    var emailv = document.validation.email;
    var password= document.validation.pswd;
    
if(namef.value==""){
       namef.nextElementSibling.style.display="block";
        namef.style.border="1px solid #ff00ff";
        return false;   
        

}
    else if(ag.value==""){
            ag.nextElementSibling.style.display="block";
            ag.style.border="1px solid #ff00ff";
            return false; 
    }
    else if(emailv.value==""){
        emailv.nextElementSibling.style.display="block";
        emailv.style.border="1px solid #ff00ff";
        return false; 
}    
else if(password.value==""){
    password.nextElementSibling.style.display="block";
    password.style.border="1px solid #ff00ff";
    return false; 
}         
        else{
            ag.nextElementSibling.style.display="none";
            ag.style.border="1px solid trasparent";
            namef.nextElementSibling.style.display="none";
            namef.style.border="1px solid trasparent";
            emailv.nextElementSibling.style.display="none";
            emailv.style.border="1px solid trasparent";
            password.nextElementSibling.style.display="none";
            password.style.border="1px solid trasparent";
         var user={
            fname: fname,
            age: age,
            email: email,
            pswd: pswd,
        };
        arr.push(user)
        // var json= JSON.stringify(arr);
        
        localStorage.setItem("users", JSON.stringify(arr));
    
        alert("Successfull Sign Up")
        window.location.href="./index.html"
        }

    }










function login(){
    var email = document.getElementById('email').value;
    var pswd = document.getElementById('pswd').value;

    let user =JSON.parse(window.localStorage.getItem("users"))
    // console.log(user[1].fname)
    // console.log("seee",user);
    var emailv = document.validation.email;
    var password= document.validation.pswd;
 if(emailv.value==""){
        emailv.nextElementSibling.style.display="block";
        emailv.style.border="1px solid #ff00ff";
        return false; 
}    
else if(password.value==""){
    password.nextElementSibling.style.display="block";
    password.style.border="1px solid #ff00ff";
    return false; 
}         
        else{
            emailv.nextElementSibling.style.display="none";
            emailv.style.border="1px solid trasparent";
            password.nextElementSibling.style.display="none";
            password.style.border="1px solid trasparent";


    for(let i=0; i < user.length; i++){
        if(email=="mirindisaidi@gmail.com" && pswd=="12"){
            location.href="./SignUpView.html"
        }else{
            if(email===user[i].email && pswd===user[i].pswd){
              const data={
                name:user[i].fname,
                email:user[i].email,
                pswd:user[i].pswd,
              }
              localStorage.setItem("loginuser",JSON.stringify(data))


               location.href="./loading.html"

        } 
        }
       
    }

}
}

function display(){
    let user =JSON.parse(window.localStorage.getItem("users"))
    var table =document.getElementById("storeList");
    console.log(user.length)
    for(let i=0; i < user.length; i++){


        let name = document.createTextNode(user[i].fname);
        let age = document.createTextNode(user[i].age);
        let email = document.createTextNode(user[i].email);
        var newRow = table.insertRow(-1);
        cell0 =newRow.insertCell(0).appendChild(name);
        cell0.innerHtml=user[i].fname;

        cell1 =newRow.insertCell(1).appendChild(age);
        cell1.innerHtml=user[i].age;

        cell2 =newRow.insertCell(2).appendChild(email);
        cell2.innerHtml=user[i].email;

    }

}
let Contactarr =JSON.parse(localStorage.getItem("contactInfo") || "[]") 
function contact(){
    var name= document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var address= document.getElementById('address').value;
    var message= document.getElementById('message').value;



    var namef = document.validation.name;
    var emailv = document.validation.email;
    var addressv = document.validation.address;
    var password= document.validation.pswd;

    if(namef.value==""){
        namef.nextElementSibling.style.display="block";
         namef.style.border="1px solid #ff00ff";
         return false;   
         
 
 }
 else if(emailv.value==""){
    emailv.nextElementSibling.style.display="block";
    emailv.style.border="1px solid #ff00ff";
    return false; 
}    
else if(password.value==""){
password.nextElementSibling.style.display="block";
password.style.border="1px solid #ff00ff";
return false; 
} else if(addressv.value==""){
        addressv.nextElementSibling.style.display="block";
        addressv.style.border="1px solid #ff00ff";
             return false; 
     }
     else{

        addressv.nextElementSibling.style.display="none";
        addressv.style.border="1px solid trasparent";
        namef.nextElementSibling.style.display="none";
        namef.style.border="1px solid trasparent";
        emailv.nextElementSibling.style.display="none";
        emailv.style.border="1px solid trasparent";
        password.nextElementSibling.style.display="none";
        password.style.border="1px solid trasparent";

        var contactuser={
            name: name,
            email: email,
            address: address,
            message:message,
        };
        Contactarr.push(contactuser)
        // var json= JSON.stringify(arr);
        
        localStorage.setItem("contactInfo", JSON.stringify(Contactarr));
    
        alert("Successfull contast")
        window.location.href="./index.html"

     }
}
function displayContact(){
    let user =JSON.parse(window.localStorage.getItem("contactInfo"))
    var table =document.getElementById("storeList");
    console.log(user.length)
    for(let i=0; i < user.length; i++){


        let name = document.createTextNode(user[i].name);
        let email = document.createTextNode(user[i].email);
        let address= document.createTextNode(user[i].address);
        let message= document.createTextNode(user[i].message);

        var newRow = table.insertRow(-1);
        cell0 =newRow.insertCell(0).appendChild(name);
        cell0.innerHtml=user[i].name;

        cell1 =newRow.insertCell(1).appendChild(address);
        cell1.innerHtml=user[i].address;

        cell2 =newRow.insertCell(2).appendChild(email);
        cell2.innerHtml=user[i].email;

        cell2 =newRow.insertCell(3).appendChild(message);
        cell2.innerHtml=user[i].message;

    }

}


function addBlogAdmin(){
    let Blogarr =JSON.parse(localStorage.getItem("blogs") || "[]") 
    var title= document.getElementById('title').value;
    // var date= document.getElementById('date').value;
    let dateToday=document.getElementById("date");

    let today=new Date();
    let day=`${today.getDate() < 10 ? "0" : ""} ${today.getDate()}`;
    let month=`${(today.getMonth() + 1) < 10 ? "0" : "" }${today.getMonth() + 1}`;
    let year=today.getFullYear();
    dateToday=`${day}/${month}/${year}`;

    var pic = document.getElementById('picture');   
    var pictures = pic.files[0].name;
    var messages= document.getElementById('message').value;



    var titl = document.validation.titl;
    // var dat = document.validation.dat;
    var p = document.validation.pictur;
    var msg= document.validation.messag;

    if(titl.value===""){
        titl.nextElementSibling.style.display="block";
         titl.style.border="1px solid #ff00ff";
         return false;   
         
 
 }
//  else if(dat.value==""){
//     dat.nextElementSibling.style.display="block";
//     dat.style.border="1px solid #ff00ff";
//     return false; 
// }    
else if(p.files[0].name==""){
p.nextElementSibling.style.display="block";
p.style.border="1px solid #ff00ff";
return false; 
} 

else if(msg.value==""){
        msg.nextElementSibling.style.display="block";
        msg.style.border="1px solid #ff00ff";
             return false; 
     }
     else{

        titl.nextElementSibling.style.display="none";
        titl.style.border="1px solid trasparent";
        // dat.nextElementSibling.style.display="none";
        // dat.style.border="1px solid trasparent";
        p.nextElementSibling.style.display="none";
        p.style.border="1px solid trasparent";
        msg.nextElementSibling.style.display="none";
        msg.style.border="1px solid trasparent";
    var blog={
        title:title,
        date:dateToday,
        picture:pictures,
        message:messages,
        likecount: 0,
        liked: [],
        commentcount:0,
        comments:[],
    }; 
    Blogarr.push(blog)
    // var json= JSON.stringify(arr);
    
    localStorage.setItem("blogs", JSON.stringify(Blogarr));

    alert("Blog added")
    window.location.href="./AdminBlog.html"
}
// onEdit();
// resertForm();

}


//////////////////////////////////Comment//////////////////////
function comment(x){
  let blogs= JSON.parse(localStorage.getItem("blogs")); 
  
    var message = document.getElementById('comment-message').value;
    let user = JSON.parse(localStorage.getItem("loginuser"));
    console.log("login name",user.fname)
    var commentData = {
        message: message,
        username: user.name,
        // conditions: conditions.value,
    };
      blogs[x].comments.push(commentData)
      localStorage.setItem("blogs",JSON.stringify(blogs))
      location.reload();
  }

function Like(x) { 

    if (x > -1) {
      let Blogsl = JSON.parse(localStorage.getItem("blogs"));
      let id = JSON.parse(localStorage.getItem("loginuser")).email
      let likes = Blogsl[x].likecount;
      
        if (Blogsl[x].liked.length === 0) { 
          likes++
          Blogsl[x].likecount = likes
          Blogsl[x].liked.push(id)
          localStorage.setItem('blogs', JSON.stringify(Blogsl));
          location.reload()
        }
        else {

            if ( Blogsl[x].liked.some(item => item == id) ) { 
              function removeItemAll(arr, value) {
                var i = 0;
                while (i < arr.length) {
                  if (arr[i] === value) {
                    arr.splice(i, 1);
                  } else {
                    ++i;
                  }
                }
                return arr;
              }
              likes--
              Blogsl[x].likecount = likes
              const arr = removeItemAll(Blogsl[x].liked, id)
              localStorage.setItem('blogs', JSON.stringify(Blogsl));
              location.reload()
            }
            else if ( Blogsl[x].liked.some(item => item != id)  ) { 
              likes = likes + 1
              Blogsl[x].likecount = likes
              Blogsl[x].liked.push(id)
              localStorage.setItem('blogs', JSON.stringify(Blogsl));
              location.reload()
            }
        }
    }

}








function displayBlogAdim(){
    let user =JSON.parse(window.localStorage.getItem("blogs"))
    var table =document.getElementById("storeList");
    console.log(user.length)
    for(let i=0; i < user.length; i++){


        let title = document.createTextNode(user[i].title);
        let date = document.createTextNode(user[i].date);
        let pic= document.createElement("img");
        const picture = "./pictures/" + user[i].picture 
        pic.src=picture;
        let message= document.createTextNode(user[i].message);
        let countlike =document.createTextNode(user[i].likecount);
     
        var newRow = table.insertRow(-1);
        cell0 =newRow.insertCell(0).appendChild(title);
        cell0.innerHtml=user[i].title;

        cell1 =newRow.insertCell(1).appendChild(date);
        cell1.innerHtml=user[i].date;

        cell2 =newRow.insertCell(2).appendChild(pic);
        cell2.innerHtml=user[i].picture;

        cell2 =newRow.insertCell(3).appendChild(message);
        cell2.innerHtml=user[i].message;

        cell2 =newRow.insertCell(4).appendChild(countlike);
        cell2.innerHtml=user[i].likecount;

       
        cell3 =newRow.insertCell(5);
        cell3.innerHTML =`<button onClick='formUpdate(${i})'>update</button><button onClick='onDelete("${user[i].title}")'>Delete</button>`


    }

}

function blogList() {
   
    const List = document.querySelector('#box');
    let email=JSON.parse(localStorage.getItem("loginuser")).email;
    let blogs = JSON.parse(localStorage.getItem("blogs"));
    List.innerHTML = `${blogs.map((id, index)=>`    <div class="blog11" >
    <img src="./pictures/${id['picture']}" width="250px" height="200px"/>
    <p class="p1">${id['date']}</p><br>
    <p class="p2"><b>${id['title']}</b></p><br>
    <p class="p3">${id['message']}</p>
    <br>
    <div class="containerlike">
    <div class="like">
    <button onclick="Like(${index})"><i class='bx bx-like' style='color:#004080; width: 20%;'></i></button>  
    </div>
    <div class="value">
    <p>${id['likecount']}</p>
    </div>
    </div>
    <div class="comment" id="${index}">
    <button id="myBtn"><i class='bx bx-comment' style='color:#004080'></i></button>
    </div>
</div> `).sort().join("")}`

blogs.forEach((blog, index) => {
  let addbtn= document.getElementById(`${index}`);
  // console.log(addbtn);
  
    addbtn.addEventListener('click', ()=>{  
      let blogContainer = document.getElementById("result")
      let data = ''
          data += `
      <img src="./pictures/${blog.picture}" width="250px" height="200px"/>
            <p class="p1">${blog.date}</p><br>
            <p class="p2">${blog.title}</b></p><br>
            <p class="p3">${blog.message}</p>
            <br>
            <div class="containerlike">
                <div class="like">
                <button><i class='bx bx-like' style='color:#004080; width: 20%;'></i></button>  
                </div>
                <div class="value">
                <p>${blog.likecount}</p>
                </div>
                </div> 
                ${blog.comments.map((element, index)=>` <p>${element.message} </p><p>${element.username} </p>`)}
              
              
              
             
                <br>
                <form onsubmit=" event.preventDefault(); comment(${index})">
                <textarea placeholder="Enter the comment here..." id="comment-message"></textarea><br>
                <button>Comment</button>
            </form>    
      `
    blogContainer.innerHTML = data
        console.log("this blog",blog)



    });
});

    // let addbtn= document.querySelector('#add');
    // let dty =document.querySelector('#qtyBox');

    // addbtn.addEventListener('click', ()=>{
    //     dty.value=parseInt(dty.value) + 1;
    // });



    // const btnlike =document.getElementById('btnlike');
    // const qty =document.getElementById('qty');

    // loadDate();
    // btnlike.addEventListener('click',(e)=>{
    //     btnlike.classList.toggle('color');
    //     if(btnlike.classList.contains('color')){
    //         qty.value=parseInt(qty.value) + 1;
    //     }else{
    //         qty.value=parseInt(qty.value) - 1;
    //     }

    //     let qtyValue=qty.value;
    //     saveData('likecounter',qtyValue);
    // })

    }

    // function saveData(key, data){
    //     localStorage.setItem(key,JSON.stringify(data));
    // }

    // function loadDate(){
    //     let localData=JSON.parse(localStorage.getItem
    //     ('likecounter'));
    //     let data=parseInt(localData);
    //     qty.value=data;
    // }




    function onDelete(id){
        if(confirm('Do you want to delete?')){
            const blogs = JSON.parse(window.localStorage.getItem("blogs"))
  for(var i = 0; i <= blogs.length - 1; i++){
    console.log("id",id);
    console.log("blogs",blogs[i].title);

    if(blogs[i].title == id){
        blogs.splice(i,1);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        // document.getElementById('storeList').deleteRow(row.rowIndex);
        location.reload()
    }
  }
         
            
           
           console.log("id",id);         

                   
          
              
            // localStorage.removeItem(row.rowIndex);
        }
        resertForm();  
    }

    function resertForm(){
        document.getElementById('title').value= '';
        document.getElementById('picture').value= '';
        document.getElementById('date').value= '';
        document.getElementById('message').value= '';
       
    }

 
    /////// Update ///////////

    function addBlog(id) {
        let Bloge = JSON.parse(window.localStorage.getItem("blogs"))
        const title = document.getElementById('title').value
        const pictur = document.getElementById('picture').files[0].name

        // var pic = document.getElementById('picture');   
        //  var picture = pic.files[0].name;

        const msg = document.getElementById('msg').value
        const dt = document.getElementById('date').value

        const picture =Bloge[id].picture
        const message = Bloge[id].message
        const date =Bloge[id].date
        const titl =Bloge[id].title
        
        console.log(Bloge[id].picture)
        if (title === titl && msg === message && date == dt && pictur === picture ) {
          alert("Nothing To Edit")
        } else {
          if (title.length > 500) {
            alert(" Title too Long ")
          } else {
            const blogData = {
              title: title,
              picture: pictur,
              message: msg,
              date: dt,
            }
            if (id > -1) { 
              Bloge.splice(id, 1);
              window.localStorage.setItem("blogs", JSON.stringify(Bloge));
            }
            Bloge.push(blogData);
            localStorage.setItem('blogs', JSON.stringify(Bloge));
            var element = document.getElementById("frm")
            element.reset()
            alert("Blog Edited")
            location.href = "./AdminBlog.html"
          } 
        }
      }







    /////////////////////////////End///////////////////////////
      
    



    function updateRecord(formDate){
        seletectRow.cells[0].innerHTML=formDate.title;
        seletectRow.cells[1].innerHTML=formDate.date;
        seletectRow.cells[2].innerHTML=formDate.picture;
        seletectRow.cells[3].innerHTML=formDate.message;
    }


    function formUpdate(id){
        window.location.href="./UpdateBlog.html?id=" + id;
    }

    function logout(){
      localStorage.removeItem("loginuser")
      location.href="./index.html";

    }


  