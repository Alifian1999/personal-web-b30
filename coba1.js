
function getDistanceTime(time){

    `<div class="detail-blog-content">
    12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
  </div>
  <p>
    Ketimpangan sumber daya manusia (SDM) di sektor digital masih
    menjadi isu yang belum terpecahkan. Berdasarkan penelitian
    ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
    meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
    dolor sit amet consectetur adipisicing elit. Quam, molestiae
    numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
    eligendi debitis?
  </p>
  <div>getDistanceTime()</div>`


    let timePost= new Date ('Wed jan 05 2022 18:38:25 GMT+0700 (western Indonesia Time')
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

getDistanceTime()


${getFullTime(blogs[i].postAt)} | ${blogs[i].author}