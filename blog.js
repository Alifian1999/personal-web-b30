
 let blogs=[]

 function addBlog(e){
     e.preventDefault()
    
     let title = document.getElementById('input-blog-title').value
     let content= document.getElementById('input-blog-content').value
     let image= document.getElementById('input-blog-image').files

     image= URL.createObjectURL(image[0])

     let blog={
         title:title,
         content:content,
         image:image,
         author: 'Alifian Alfirazi',
         postAt: new Date(),
     }

     blogs.push(blog)
     console.log(blogs);
     
     renderBlog()
 }

 function renderBlog(){
   let contentContainer = document.getElementById('contents')

   contentContainer.innerHTML= ''

   for(let i=0;i<blogs.length;i++){
    contentContainer.innerHTML+=
    `<div class="blog-list-item">
    <div class="blog-image">
      <img src="${blogs[i].image}" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank"
          >${blogs[i].title}
        >
      </h1>
      <div class="detail-blog-content">
        ${getFullTime(new Date())} | ${blogs[i].author}
      </div>
      <p>
        ${blogs[i].content}
      </p>

      <div style='text-align: right;>
        <span style= 'font-size: 13px; color: grey'>
        ${getDistanceTime(blogs[i].postAt)}
        </span>
      </div>

    </div>
  </div>`
  }
 }


 let month= ['january','february','march','april','may','june','july','august','september','october','november','december']
    
 function getFullTime(time){
     let date = time.getDate()
     let monthIndex= time.getMonth()
     let year = time.getFullYear()
     let hours= time.getHours()
     let minutes= time.getMinutes()
     let fullTime= (`${date} ${month[monthIndex]} ${year} ${hours}: ${minutes} WIB`)
     return fullTime
     }
     getFullTime(month)
     
   function getDistanceTime(time){
     let timePost= new Date ('Wed jan 05 2022 15:30:25 GMT+0700 (western Indonesia Time')
     let timeNow= new Date()
 
     let distance = timeNow - timePost
 
     let milisecond= 1000
     let secondInHours= 3600
     let hoursInDay=23
     let minutes= 60
     let seconds= 60
 
 
     let distanceDay=Math.floor( distance / (milisecond * secondInHours * hoursInDay))
     let distanceHours= Math.floor(distance/ (milisecond * minutes * seconds))
     let distanceMinutes= Math.floor(distance/(milisecond * seconds))
     let distanceSeconds= Math.floor(distance/ (milisecond))
 
 
 
     if(distanceDay>=1){
         console.log(`${distanceDay} day ago`);
     }else{
         if(distanceHours >=1){
             console.log(`${distanceHours} hours ago`);
         }else{
             if(distanceMinutes >=1){
                 console.log(`${distanceMinutes} minutes ago`);
             }else{
                 console.log(`${distanceSeconds} seconds ago`);
             }
         }
     }
 }

 setInterval(()=>{
   renderBlog()
 },3000)