import React from "react";

let date = new Date()
const hour = date.getHours()

export default function Content(props) {
    return (
        <div className={props.mode}>
            <div className="gets--home">
                <div className="content--background"></div>

                <video src="login--vid.mp4" autoPlay loop muted  width="100%"></video>


                <div className="login--content">
                    <img src="logo.png" alt="logo" width="300px" className="login--logo"></img>
                    <h1 className="login--title1">DOWNLOAD</h1>
                    <h4 className="login--p1">Our mobile app</h4>

                    <div>
                        <img src="appstore.png" alt="appStore--icon" width="40px" className="store--logo"></img>
                            <img src="playstore.png" alt="playStore--icon" width="20px" className="store--logo"></img>
                    </div>
                    <p className="mobile--content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eius recusandae.</p>

                    <div><button className="button--gs">DOWNLOAD</button></div>
                </div>


                <div className="devider"></div>

                <div className="right--align2">
                    <div className="right--align">
                    
                        <div className="gets--content">
                            
                            <img src="logo.p" alt="" width="300px" className="gets--logo"></img>
                            <p className="gets--p">LOG IN</p>

                            <div className="gets--buttons">

                                <div className="login--input">
                                    <div>User Name</div>
                                    <input className="login--user" placeholder="Username">
                                    </input>
                                </div>

                                <div className="login--input">
                                    <div>Password</div>
                                    <input className="login--pass" placeholder="Password" type="password">
                                    </input>
                                </div>
                                
                            </div>
                            <div className="gets--buttons">
                                <a href="#">
                                    <button className="button--si"><img src="lock--icon.png" alt="icon" width="12px" className="lock--icon"></img> LOG IN</button>
                                </a> 

                                <a href="#">
                                    <button className="button--fogotpass"> Fogot Password?</button>
                                </a> 
                            </div>

                            
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )  
}