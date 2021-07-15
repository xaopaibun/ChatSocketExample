import React, { useState, useRef } from "react";
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
import { useFormik } from 'formik';
import * as Yup from "yup";




const SignIn = () => {
    const [isshow, setisshow] = useState(false);
    // const responseFacebook = (response) => {
    //     console.log(response);
    // }
    const refEmail = useRef('input1');
    const refPassword = useRef('input2');
    // const  submitLogin = () =>{
    //     console.log({Email : refEmail.current.value, Password : refPassword.current.value})
    // }

    const formik = useFormik({
        initialValues: {
            email: "user1@themenate.net",
            password: "vanquy01",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Please enter a validate email!")
                .required("Please input your email address"),
            password: Yup.string()
                .min(6, "Minimum 6 characters")
                .required("Please input your password"),

        }),
        onSubmit: values => {
            console.log(values)

        }
    });

    return (
        <div>
            <div className="row">
                <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="input-from">
                        <div className="input-form-row">
                            <h1 className="bold size30"> Sign In</h1>
                            <div className='div_box5' />
                            <p style={{ color: '#72849a' }}>Don't have an account yet? <Link to="/signup">Sign Up</Link></p>
                            <div className='div_box20' />
                            <div className='div_box20' />
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group" >
                        
                                    <label className="label_input" >Email</label><div className='div_box5' />
                                    <div className='div_input'>
                                        <input
                                            ref={refEmail}
                                            type="email"
                                            name='email'
                                            className={!formik.errors.email ? "ant-input" : "ant-input error"}
                                           
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                        />
                                         {formik.errors.email  && (
                                    <p className='colorErr' >{formik.errors.email}</p>
                                )}
                                        <span className='text-primary'>
                                            <MailSvg />
                                        </span>
                                    </div>
                                </div>
                                <div className='div_box20' />
                                <div className="form-group" >
                               
                                    <label className="label_input" >Password</label><div className='div_box5' />
                                    <div className='div_input'>
                                        <input
                                            ref={refPassword}
                                            name='password'
                                            type={isshow ? "text" : "password"}
                                            className={!formik.errors.password  ? "ant-input" : "ant-input error"}
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                        />
                                         {formik.errors.password && (
                                    <p className='colorErr' >{formik.errors.password}</p>
                                )}
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
                                {/* onClick={() => submitLogin()}  */}
                                <button type="submit" className="ant-btn ant-btn-primary ant-btn-block">
                                    <span id="btntext">Sign In</span>
                                </button>
                            </form>

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