import React, { useState } from "react";
import {
    Link
} from "react-router-dom";
import EgeActiveSvg from "../../assets/svg/eyeactivesvg";
import EgeSvg from "../../assets/svg/eyesvg";
import LockSvg from "../../assets/svg/locksvg";
import MailSvg from "../../assets/svg/mailsvg";


import Welcome from "../../components/welcome"

const SignUp = () => {
    const [isshow, setisshow] = useState(false);
    const [isshowConfirm, setisshowConfirm] = useState(false);
    return (
        <div>
            <div className="row">
                <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="container input-from">
                        <div className="input-form-row">
                            <div>
                                <h1 className="bold size30">Sign Up</h1>
                                <div className='div_box' />

                                <p style={{ color: '#72849a' }}>Already have an account ? <Link to="/signin">Sign In</Link></p>

                                <div className='div_box20' />
                                <div className='div_box20' />
                                <div className="form-group" >
                                    <label className="label_input" >Email</label><div className='div_box5' />
                                    <div className='div_input'>
                                        <input type="text" id="login-form_email" className="ant-input" />
                                        {/* <i className="far fa-envelope text-primary icon-input"></i> */}
                                        <MailSvg />
                                    </div>
                                </div>
                                <div className='div_box20' />

                                <div className="form-group" >
                                    <label className="label_input" >Password</label><div className='div_box5' />
                                    <div className='div_input'>
                                        <input type={isshow ? "text" : "password"} id="login-form_email" className="ant-input" />
                                        <span className='text-primary'>
                                            <LockSvg />
                                        </span>
                                        <svg onClick={() => setisshow(!isshow)} viewBox="64 64 896 896" className='icon_password' focusable="false" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            {!isshow ? <EgeSvg />
                                                : <EgeActiveSvg />}
                                        </svg>
                                    </div>
                                </div>
                                <div className='div_box20' />

                                <div className="form-group">
                                    <label className="label_input" >ConfirmPassword</label><div className='div_box5' />
                                    <div className="div_input" >
                                        <input type={isshowConfirm ? "text" : "password"} id="login-form_email" className="ant-input" />
                                        <span className='text-primary'>
                                            <LockSvg />
                                        </span>
                                        <svg onClick={() => setisshowConfirm(!isshowConfirm)} viewBox="64 64 896 896" className='icon_password' focusable="false" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            {!isshowConfirm ? <EgeSvg />
                                                : <EgeActiveSvg />}

                                        </svg>
                                    </div>
                                </div>
                                <div className='div_box20' />

                                <button type="submit" className="ant-btn ant-btn-primary ant-btn-block">
                                    <span id="btntext"> Sign Up </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 IMGBG">
                    <Welcome img='https://emilus.themenate.net/img/others/img-19.png' />
                </div>
            </div>

        </div>
    );
}
export default SignUp;