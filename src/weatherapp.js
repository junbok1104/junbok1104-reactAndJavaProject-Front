import { useState } from "react";
import React from "react";

function Weatherapp() {
    
    const [temp, setTemp] = useState('');
    const [desc, setDesc] = useState('');
    const [icon, setIcon] = useState('');
    const [isReady, setIsReady] = useState(false);

    React.useEffect(() => {fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=b67bfd617314105ca415479bebf56464&units=metric')
        .then(result => result.json()) // json으로 변환
        .then(jsonresult => {
            setTemp(jsonresult.main.temp); // 변환된 json값에서 데이터 얻어오기
            setDesc(jsonresult.weather[0].main); // 변환된 json값에서 데이터 얻어오기
            setIcon(jsonresult.weather[0].icon); // 변환된 json값에서 데이터 얻어오기
            setIsReady(true); // 변환된 json값에서 데이터 얻어오기
        })
        .catch(err => console.error(err))
    }, []) // 실행후 한번만 실행
    

    if(isReady) {
        return (
            <div className="App">
                <p>Temperature: {temp} ˚C</p>
                <p>Description: {desc}</p>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon"/>
            </div>
        );
    }else {
        return(
            <div>Loading....</div>
        );
    }
}

export default Weatherapp;