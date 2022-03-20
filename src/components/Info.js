import axios from 'axios';
import React, { useEffect, useState } from 'react'

import '../styles/info.css';

import Arrow from '../assets/arrow.png';

const Info = () => {
    const [colombo, setColombo] = useState({ 
        name : "" ,
        country : "", 
        weather : "", 
        temp : 0, 
        maxTemp : 0, 
        minTemp : 0,
        pressure : 0,
        hum : 0,
        vis : 0,
        wdig : 0,
        wSpd : 0,
        sunR : 0,
        sunS : 0
    });
    const [tokyo,setTokyo] = useState({
        name : "" ,
        country : "", 
        weather : "", 
        temp : 0, 
        maxTemp : 0, 
        minTemp : 0,
        pressure : 0,
        hum : 0,
        vis : 0,
        wdig : 0,
        wSpd : 0,
        sunR : 0,
        sunS : 0
    });
    const [liverpool,setLiverpool] = useState({
        name : "" ,
        country : "", 
        weather : "", 
        temp : 0, 
        maxTemp : 0, 
        minTemp : 0,
        pressure : 0,
        hum : 0,
        vis : 0,
        wdig : 0,
        wSpd : 0,
        sunR : 0,
        sunS : 0
    });
    const [paris,setParis] = useState({
        name : "" ,
        country : "", 
        weather : "", 
        temp : 0, 
        maxTemp : 0, 
        minTemp : 0,
        pressure : 0,
        hum : 0,
        vis : 0,
        wdig : 0,
        wSpd : 0,
        sunR : 0,
        sunS : 0
    });
    const [sydney,setSydney] = useState({
        name : "" ,
        country : "", 
        weather : "", 
        temp : 0, 
        maxTemp : 0, 
        minTemp : 0,
        pressure : 0,
        hum : 0,
        vis : 0,
        wdig : 0,
        wSpd : 0,
        sunR : 0,
        sunS : 0
    });
    const [boston,setBoston] = useState({
        name : "" ,
        country : "", 
        weather : "", 
        temp : 0, 
        maxTemp : 0, 
        minTemp : 0,
        pressure : 0,
        hum : 0,
        vis : 0,
        wdig : 0,
        wSpd : 0,
        sunR : 0,
        sunS : 0
    });
    const [shanghai,setShanghai] = useState({
        name : "" ,
        country : "", 
        weather : "", 
        temp : 0, 
        maxTemp : 0, 
        minTemp : 0,
        pressure : 0,
        hum : 0,
        vis : 0,
        wdig : 0,
        wSpd : 0,
        sunR : 0,
        sunS : 0
    });
    const [oslo,setOslo] = useState({
        name : "" ,
        country : "", 
        weather : "", 
        temp : 0, 
        maxTemp : 0, 
        minTemp : 0,
        pressure : 0,
        hum : 0,
        vis : 0,
        wdig : 0,
        wSpd : 0,
        sunR : 0,
        sunS : 0
    });

    const apiKey = "93cf748ca16779457156bb4b64ea50c5";
    const uri = `http://api.openweathermap.org/data/2.5/group?id=1248991,1850147,2644210,2988507,2147714,4930956,1796236,3143244&units=metric&appid=${apiKey}`;

    const current = new Date();

    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const time = `${current.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })}`;

    useEffect(() => {
        getData();
    },[]);

    const getData = async () => {
        await axios.get(uri)
        .then((response) => {
            localStorage.setItem("Weather",response);
            setColombo({
                name : response.data.list[0].name,
                country : response.data.list[0].sys.country,
                weather : response.data.list[0].weather[0].description,
                temp : response.data.list[0].main.temp,
                maxTemp : response.data.list[0].main.temp_max,
                minTemp : response.data.list[0].main.temp_min,
                pressure : response.data.list[0].main.pressure,
                hum : response.data.list[0].main.humidity,
                vis : response.data.list[0].visibility,
                wdig : response.data.list[0].wind.deg,
                wSpd : response.data.list[0].wind.speed,
                sunR : response.data.list[0].sys.sunrise,
                sunS : response.data.list[0].sys.sunset
                
            })
            setTokyo({
                name : response.data.list[1].name,
                country : response.data.list[1].sys.country,
                weather : response.data.list[1].weather[0].description,
                temp : response.data.list[1].main.temp,
                maxTemp : response.data.list[1].main.temp_max,
                minTemp : response.data.list[1].main.temp_min,
                pressure : response.data.list[1].main.pressure,
                hum : response.data.list[1].main.humidity,
                vis : response.data.list[1].visibility,
                wdig : response.data.list[1].wind.deg,
                wSpd : response.data.list[1].wind.speed,
                sunR : response.data.list[1].sys.sunrise,
                sunS : response.data.list[1].sys.sunset
            })
            setLiverpool({
                name : response.data.list[2].name,
                country : response.data.list[2].sys.country,
                weather : response.data.list[2].weather[0].description,
                temp : response.data.list[2].main.temp,
                maxTemp : response.data.list[2].main.temp_max,
                minTemp : response.data.list[2].main.temp_min,
                pressure : response.data.list[2].main.pressure,
                hum : response.data.list[2].main.humidity,
                vis : response.data.list[2].visibility,
                wdig : response.data.list[2].wind.deg,
                wSpd : response.data.list[2].wind.speed,
                sunR : response.data.list[2].sys.sunrise,
                sunS : response.data.list[2].sys.sunset
            })
            setParis({
                name : response.data.list[3].name,
                country : response.data.list[3].sys.country,
                weather : response.data.list[3].weather[0].description,
                temp : response.data.list[3].main.temp,
                maxTemp : response.data.list[3].main.temp_max,
                minTemp : response.data.list[3].main.temp_min,
                pressure : response.data.list[3].main.pressure,
                hum : response.data.list[3].main.humidity,
                vis : response.data.list[3].visibility,
                wdig : response.data.list[3].wind.deg,
                wSpd : response.data.list[3].wind.speed,
                sunR : response.data.list[3].sys.sunrise,
                sunS : response.data.list[3].sys.sunset
            })
            setSydney({
                name : response.data.list[4].name,
                country : response.data.list[4].sys.country,
                weather : response.data.list[4].weather[0].description,
                temp : response.data.list[4].main.temp,
                maxTemp : response.data.list[4].main.temp_max,
                minTemp : response.data.list[4].main.temp_min,
                pressure : response.data.list[4].main.pressure,
                hum : response.data.list[4].main.humidity,
                vis : response.data.list[4].visibility,
                wdig : response.data.list[4].wind.deg,
                wSpd : response.data.list[4].wind.speed,
                sunR : response.data.list[4].sys.sunrise,
                sunS : response.data.list[4].sys.sunset
            })
            setBoston({
                name : response.data.list[5].name,
                country : response.data.list[5].sys.country,
                weather : response.data.list[5].weather[0].description,
                temp : response.data.list[5].main.temp,
                maxTemp : response.data.list[5].main.temp_max,
                minTemp : response.data.list[5].main.temp_min,
                pressure : response.data.list[5].main.pressure,
                hum : response.data.list[5].main.humidity,
                vis : response.data.list[5].visibility,
                wdig : response.data.list[5].wind.deg,
                wSpd : response.data.list[5].wind.speed,
                sunR : response.data.list[5].sys.sunrise,
                sunS : response.data.list[5].sys.sunset
            })
            setShanghai({
                name : response.data.list[6].name,
                country : response.data.list[6].sys.country,
                weather : response.data.list[6].weather[0].description,
                temp : response.data.list[6].main.temp,
                maxTemp : response.data.list[6].main.temp_max,
                minTemp : response.data.list[6].main.temp_min,
                pressure : response.data.list[6].main.pressure,
                hum : response.data.list[6].main.humidity,
                vis : response.data.list[6].visibility,
                wdig : response.data.list[6].wind.deg,
                wSpd : response.data.list[6].wind.speed,
                sunR : response.data.list[6].sys.sunrise,
                sunS : response.data.list[6].sys.sunset
            })
            setOslo({
                name : response.data.list[7].name,
                country : response.data.list[7].sys.country,
                weather : response.data.list[7].weather[0].description,
                temp : response.data.list[7].main.temp,
                maxTemp : response.data.list[7].main.temp_max,
                minTemp : response.data.list[7].main.temp_min,
                pressure : response.data.list[7].main.pressure,
                hum : response.data.list[7].main.humidity,
                vis : response.data.list[7].visibility,
                wdig : response.data.list[7].wind.deg,
                wSpd : response.data.list[7].wind.speed,
                sunR : response.data.list[7].sys.sunrise,
                sunS : response.data.list[7].sys.sunset
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

  return (
    <div className='container info'>
        <div className='row'>
            <div className='col-xl-6'>
                <a className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-xl-6'>
                                <h3>{colombo.name}, {colombo.country}</h3>
                                <small>{time}, {date}</small>
                                <br/>
                                <small className='text-capitalize'>{colombo.weather}</small>
                            </div>
                            <div className='col-xl-6'>
                                <h1>{Math.round(colombo.temp)}<span>&#176;</span>c</h1>
                                <hr/>
                                <small>Temp Min : {Math.round(colombo.minTemp)}<span>&#176;</span>c</small>
                                <br/>
                                <small>Temp Max : {Math.round(colombo.maxTemp)}<span>&#176;</span>c</small>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col subCardOne'>
                                <small>Pressure : {colombo.pressure}hPa</small>
                                <br/>
                                <small>Humidity : {colombo.hum}%</small>
                                <br/>
                                <small>Visibility : {colombo.vis/1000}km</small>
                            </div>
                            <div className='col'>
                                <img alt="arrowSign" src={Arrow} className="arrowSign"/>
                                <br/>
                                <small>{colombo.wSpd}m/s {colombo.wdig} Degree</small>
                            </div>
                            <div className='col subCardTwo'>
                                <small>Sunrise : {new Date(colombo.sunR).toLocaleTimeString("en-US")}</small>
                                <br/>
                                <small>Suset : {new Date(colombo.sunS).toLocaleTimeString("en-US")}</small>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-xl-6'>
                <a className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-xl-6'>
                                <h3>{tokyo.name}, {tokyo.country}</h3>
                                <small>{time}, {date}</small>
                                <br/>
                                <small className='text-capitalize'>{tokyo.weather}</small>
                            </div>
                            <div className='col-xl-6'>
                                <h1>{Math.round(tokyo.temp)}<span>&#176;</span>c</h1>
                                <hr/>
                                <small>Temp Min : {Math.round(tokyo.minTemp)}<span>&#176;</span>c</small>
                                <br/>
                                <small>Temp Max : {Math.round(tokyo.maxTemp)}<span>&#176;</span>c</small>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col subCardOne'>
                                <small>Pressure : {tokyo.pressure}hPa</small>
                                <br/>
                                <small>Humidity : {tokyo.hum}%</small>
                                <br/>
                                <small>Visibility : {tokyo.vis/1000}km</small>
                            </div>
                            <div className='col'>
                                <img alt="arrowSign" src={Arrow} className="arrowSign"/>
                                <br/>
                                <small>{tokyo.wSpd}m/s {tokyo.wdig} Degree</small>
                            </div>
                            <div className='col subCardTwo'>
                                <small>Sunrise : {new Date(tokyo.sunR).toLocaleTimeString("en-US")}</small>
                                <br/>
                                <small>Suset : {new Date(tokyo.sunS).toLocaleTimeString("en-US")}</small>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className='row'>
            <div className='col-xl-6'>
                <a className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-xl-6'>
                                <h3>{liverpool.name}, {liverpool.country}</h3>
                                <small>{time}, {date}</small>
                                <br/>
                                <small className='text-capitalize'>{liverpool.weather}</small>
                            </div>
                            <div className='col-xl-6'>
                                <h1>{Math.round(liverpool.temp)}<span>&#176;</span>c</h1>
                                <hr/>
                                <small>Temp Min : {Math.round(liverpool.minTemp)}<span>&#176;</span>c</small>
                                <br/>
                                <small>Temp Max : {Math.round(liverpool.maxTemp)}<span>&#176;</span>c</small>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col subCardOne'>
                                <small>Pressure : {liverpool.pressure}hPa</small>
                                <br/>
                                <small>Humidity : {liverpool.hum}%</small>
                                <br/>
                                <small>Visibility : {liverpool.vis/1000}km</small>
                            </div>
                            <div className='col'>
                                <img alt="arrowSign" src={Arrow} className="arrowSign"/>
                                <br/>
                                <small>{liverpool.wSpd}m/s {liverpool.wdig} Degree</small>
                            </div>
                            <div className='col subCardTwo'>
                                <small>Sunrise : {new Date(liverpool.sunR).toLocaleTimeString("en-US")}</small>
                                <br/>
                                <small>Suset : {new Date(liverpool.sunS).toLocaleTimeString("en-US")}</small>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-xl-6'>
                <a className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-xl-6'>
                                <h3>{paris.name}, {paris.country}</h3>
                                <small>{time}, {date}</small>
                                <br/>
                                <small className='text-capitalize'>{paris.weather}</small>
                            </div>
                            <div className='col-xl-6'>
                                <h1>{Math.round(paris.temp)}<span>&#176;</span>c</h1>
                                <hr/>
                                <small>Temp Min : {Math.round(paris.minTemp)}<span>&#176;</span>c</small>
                                <br/>
                                <small>Temp Max : {Math.round(paris.maxTemp)}<span>&#176;</span>c</small>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col subCardOne'>
                                <small>Pressure : {paris.pressure}hPa</small>
                                <br/>
                                <small>Humidity : {paris.hum}%</small>
                                <br/>
                                <small>Visibility : {paris.vis/1000}km</small>
                            </div>
                            <div className='col'>
                                <img alt="arrowSign" src={Arrow} className="arrowSign"/>
                                <br/>
                                <small>{paris.wSpd}m/s {paris.wdig} Degree</small>
                            </div>
                            <div className='col subCardTwo'>
                                <small>Sunrise : {new Date(paris.sunR).toLocaleTimeString("en-US")}</small>
                                <br/>
                                <small>Suset : {new Date(paris.sunS).toLocaleTimeString("en-US")}</small>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className='row'>
            <div className='col-xl-6'>
                <a className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-xl-6'>
                                <h3>{sydney.name}, {sydney.country}</h3>
                                <small>{time}, {date}</small>
                                <br/>
                                <small className='text-capitalize'>{sydney.weather}</small>
                            </div>
                            <div className='col-xl-6'>
                                <h1>{Math.round(sydney.temp)}<span>&#176;</span>c</h1>
                                <hr/>
                                <small>Temp Min : {Math.round(sydney.minTemp)}<span>&#176;</span>c</small>
                                <br/>
                                <small>Temp Max : {Math.round(sydney.maxTemp)}<span>&#176;</span>c</small>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col subCardOne'>
                                <small>Pressure : {sydney.pressure}hPa</small>
                                <br/>
                                <small>Humidity : {sydney.hum}%</small>
                                <br/>
                                <small>Visibility : {sydney.vis/1000}km</small>
                            </div>
                            <div className='col'>
                                <img alt="arrowSign" src={Arrow} className="arrowSign"/>
                                <br/>
                                <small>{sydney.wSpd}m/s {sydney.wdig} Degree</small>
                            </div>
                            <div className='col subCardTwo'>
                                <small>Sunrise : {new Date(sydney.sunR).toLocaleTimeString("en-US")}</small>
                                <br/>
                                <small>Suset : {new Date(sydney.sunS).toLocaleTimeString("en-US")}</small>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-xl-6'>
                <a className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-xl-6'>
                                <h3>{boston.name}, {boston.country}</h3>
                                <small>{time}, {date}</small>
                                <br/>
                                <small className='text-capitalize'>{boston.weather}</small>
                            </div>
                            <div className='col-xl-6'>
                                <h1>{Math.round(boston.temp)}<span>&#176;</span>c</h1>
                                <hr/>
                                <small>Temp Min : {Math.round(boston.minTemp)}<span>&#176;</span>c</small>
                                <br/>
                                <small>Temp Max : {Math.round(boston.maxTemp)}<span>&#176;</span>c</small>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col subCardOne'>
                                <small>Pressure : {boston.pressure}hPa</small>
                                <br/>
                                <small>Humidity : {boston.hum}%</small>
                                <br/>
                                <small>Visibility : {boston.vis/1000}km</small>
                            </div>
                            <div className='col'>
                                <img alt="arrowSign" src={Arrow} className="arrowSign"/>
                                <br/>
                                <small>{boston.wSpd}m/s {boston.wdig} Degree</small>
                            </div>
                            <div className='col subCardTwo'>
                                <small>Sunrise : {new Date(boston.sunR).toLocaleTimeString("en-US")}</small>
                                <br/>
                                <small>Suset : {new Date(boston.sunS).toLocaleTimeString("en-US")}</small>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className='row'>
            <div className='col-xl-6'>
                <a className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-xl-6'>
                                <h3>{shanghai.name}, {shanghai.country}</h3>
                                <small>{time}, {date}</small>
                                <br/>
                                <small className='text-capitalize'>{shanghai.weather}</small>
                            </div>
                            <div className='col-xl-6'>
                                <h1>{Math.round(shanghai.temp)}<span>&#176;</span>c</h1>
                                <hr/>
                                <small>Temp Min : {Math.round(shanghai.minTemp)}<span>&#176;</span>c</small>
                                <br/>
                                <small>Temp Max : {Math.round(shanghai.maxTemp)}<span>&#176;</span>c</small>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col subCardOne'>
                                <small>Pressure : {shanghai.pressure}hPa</small>
                                <br/>
                                <small>Humidity : {shanghai.hum}%</small>
                                <br/>
                                <small>Visibility : {shanghai.vis/1000}km</small>
                            </div>
                            <div className='col'>
                                <img alt="arrowSign" src={Arrow} className="arrowSign"/>
                                <br/>
                                <small>{shanghai.wSpd}m/s {shanghai.wdig} Degree</small>
                            </div>
                            <div className='col subCardTwo'>
                                <small>Sunrise : {new Date(shanghai.sunR).toLocaleTimeString("en-US")}</small>
                                <br/>
                                <small>Suset : {new Date(shanghai.sunS).toLocaleTimeString("en-US")}</small>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className='col-xl-6'>
                <a className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-xl-6'>
                                <h3>{oslo.name}, {oslo.country}</h3>
                                <small>{time}, {date}</small>
                                <br/>
                                <small className='text-capitalize'>{oslo.weather}</small>
                            </div>
                            <div className='col-xl-6'>
                                <h1>{Math.round(oslo.temp)}<span>&#176;</span>c</h1>
                                <hr/>
                                <small>Temp Min : {Math.round(oslo.minTemp)}<span>&#176;</span>c</small>
                                <br/>
                                <small>Temp Max : {Math.round(oslo.maxTemp)}<span>&#176;</span>c</small>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col subCardOne'>
                                <small>Pressure : {oslo.pressure}hPa</small>
                                <br/>
                                <small>Humidity : {oslo.hum}%</small>
                                <br/>
                                <small>Visibility : {oslo.vis/1000}km</small>
                            </div>
                            <div className='col'>
                                <img alt="arrowSign" src={Arrow} className="arrowSign"/>
                                <br/>
                                <small>{oslo.wSpd}m/s {oslo.wdig} Degree</small>
                            </div>
                            <div className='col subCardTwo'>
                                <small>Sunrise : {new Date(oslo.sunR).toLocaleTimeString("en-US")}</small>
                                <br/>
                                <small>Suset : {new Date(oslo.sunS).toLocaleTimeString("en-US")}</small>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Info