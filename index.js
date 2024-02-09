// api:https://api.openweathermap.org/data/2.5/weather?q=germany&appid=6882f2d9f6ba35b9fe2349cba3580e69

const api="6882f2d9f6ba35b9fe2349cba3580e69";
const url="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const condition=document.querySelector(".wheather-icon");


async function checkWeather(city){
    try{
     const response = await fetch(url+city+`&appid=${api}`);
     var data=await response.json();
     document.querySelector(".city").innerHTML=data.name;
     document.querySelector(".temp").innerHTML=data.main.temp+"°C";
     document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
     document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
     if(data.weather[0].main=="Haze")
     {
        condition.src="images/humidity.png";
     }
     else{
      condition.src=`images/${data.weather[0].main}.png`;
     }
     console.log(data);
    }
    catch(error){

        document.querySelector(".wheather").style.display="none";
        console.log(error);
    }
}


searchbtn.addEventListener("click",()=>(
    checkWeather(searchBox.value)))
