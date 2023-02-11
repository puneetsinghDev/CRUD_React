import axios, { Axios } from 'axios';    
import { useState } from 'react';
import './min.css';
                
function App() {
      
  const APIkey="21c0842b71d2cc43fe5d47ab7b7aeeaa";
 let cytyp="delhi";
 const [temporory, set_temporory]=useState("");
const [tempdata, set_temp]=useState("0");                       
const [cityname, setcityname]=useState("-");                             
const geteweather=(cityname) =>{                                        
   if(!cityname) return         
  const apiurl="https://api.openweathermap.org/data/2.5/weather?q="+temporory+"&appid="+APIkey;
  axios.get(apiurl).then((response) => {   
    console.log(response);  
    set_temp(((response?.data.main.temp)-273).toFixed(2))
    setcityname(response.data.name);     
  },   (error) => {
    set_temp("-")     
    setcityname("-");     
    alert("wrong city Name")                                      
  });   
}
           

const handclk=()=>{    
 console.log("finding")           
 geteweather(cityname)
}       

const handlefrom=(e)=>{      
   
  set_temporory(e.target.value)       
  console.log(cityname)
  // console.log(tempdata)
}
        
// useState(() =>{
//   geteweather("delhi")
  
// },[]);
  return (
    <div className="col-md-12">
      <div className="weather_bg">
        <h2 className="heading"> Weather App</h2>
        <div className="d-grid gap-3  col-4 mt-4">
          <input type='text' className='form-control' onChange={handlefrom} />
          <button className='btn btn-primary' onClick={handclk}>submit</button>
        </div>
      </div>

      <div className="col-md-12 text-center mt-5">
        <div className='shadow rounder WeatherResultbox'>
          <img className='imgdata' src='https://image.winudf.com/v2/image1/Y29tLmV4b3ZvaWQud2VhdGhlci5hcHBfaWNvbl8xNTcxNzcxMjM0XzA1Nw/icon.png?w=&fakeurl=1' />
        <h5 className='city'> {cityname} </h5>
        <h5 className='temp'>  {tempdata+"°c"} </h5>

        {/* uugu   {((tempdata?.main.temp)-273).toFixed(2)}    {tempdata.name}*/}
        </div>

      </div>
    </div>

  );
}

export default App;