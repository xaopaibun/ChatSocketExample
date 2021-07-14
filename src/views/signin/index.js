import React, { useState } from "react";
import {
    Link
} from "react-router-dom";
import './style.css';
import Welcome from "../../components/welcome";

import GoogleSvg from "../../assets/svg/googlesvg";
import FbSvg from "../../assets/svg/facebooksvg";
import MailSvg from "../../assets/svg/mailsvg";
import LockSvg from "../../assets/svg/locksvg";
import EgeSvg from "../../assets/svg/eyesvg";
import EgeActiveSvg from "../../assets/svg/eyeactivesvg";




const SignIn = () => {
    const [isshow, setisshow] = useState(false);
    // const responseFacebook = (response) => {
    //     console.log(response);
    // }
    return (
        <div>
            <div className="row">
                <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="input-from">
                        <div className="input-form-row">
                            <h1 className="bold size30"> Sign In</h1>
                            <div className='div_box' />
                            <p style={{ color: '#72849a' }}>Don't have an account yet? <Link to="/signup">Sign Up</Link></p>
                            <div className='div_box20' />
                            <div className='div_box20' />
                            <div className="form-group" >
                                <label className="label_input" >Email</label><div className='div_box5' />
                                <div className='div_input'>
                                    <input type="text" id="login-form_email" className="ant-input" defaultValue="user1@themenate.net" />
                                    <span className='text-primary'>
                                        <MailSvg />
                                    </span>
                                </div>
                            </div>
                            <div className='div_box20' />
                            <div className="form-group" >
                                <label className="label_input" >Password</label><div className='div_box5' />
                                <div className='div_input'>
                                    <input type={isshow ? "text" : "password"} id="login-form_email" className="ant-input" defaultValue="vanquy" />
                                    <span className='text-primary'>
                                        <LockSvg/>
                                    </span>
                                    <svg onClick={() => setisshow(!isshow)} viewBox="64 64 896 896" className='icon_password' focusable="false" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        {!isshow ? <EgeSvg />
                                            : <EgeActiveSvg />}
                                    </svg>
                                </div>

                            </div>
                            <div className='div_box20' />
                            <button type="submit" className="ant-btn ant-btn-primary ant-btn-block">
                                <span id="btntext">Sign In</span>
                            </button>
                            <div className='div_box20' />
                            <div className='div_box20' />

                            <div className="box_connect">
                                <div class="row text-center">
                                    <div class="col-xl-4 netdut">
                                        <div className='netdut1' />
                                    </div>
                                    <div class="col-xl-4">
                                        <p className="content">or connect with</p>
                                    </div>
                                    <div class="col-xl-4 netdut">
                                        <div className='netdut2' />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
                                <button type="button" className="ant-btn mr-2">
                                    <span role="img" className="anticon"> <GoogleSvg /> </span>
                                    <span className='ggfb'>Google</span></button>
                                <button type="button" className="ant-btn">
                                    <span role="img" className="anticon"><FbSvg /></span>
                                    <span className='ggfb'>Facebook</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 IMGBG">
                    <Welcome img='https://emilus.themenate.net/img/others/img-18.png' />
                </div>
            </div>
        </div>
    );
}
export default SignIn;