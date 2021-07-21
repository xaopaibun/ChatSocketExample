import React from "react";
import {
    Link
} from "react-router-dom";
import MailSvg from "../../assets/svg/mailsvg";

import './style.css';

const Forgot = () => {
    return (
        <div>
            <div className='view_box'>
                <div className='box' >
                    <div className='container' style={{paddingLeft: 50, paddingRight: 50}}>
                        <div className='div_box20' />
                        <div className="form-group" >
                          <div style={{textAlign:'center'}}>
                              <img src='https://emilus.themenate.net/img/logo.png' height={70} width={100} />
                              <div className='div_box20' />
                              <h3 style={{fontWeight:'700', fontSize: '20px'}}>Forgot Password?</h3>
                              <div className='div_box5' />
                              <p className='color_text'>Enter your Email to reset password</p>
                          </div>
                          <div className='div_box20' />
                            <div className='div_input'>
                                <input className='color_input' type="text" id="login-form_email" placeholder='Email Address' className="ant-input"/>
                                <span className='text-primary'>
                                    <MailSvg />
                                </span>
                            </div>
                            <div className='div_box20' />
                            <button type="submit" className="ant-btn ant-btn-primary ant-btn-block">
                                <span id="btntext">Send</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}
export default Forgot;