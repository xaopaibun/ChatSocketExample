import React, { useState, useRef } from "react";
import {
    Link, useHistory
} from "react-router-dom";
import './style.css';
import Welcome from "components/welcome";

import MailSvg from "assets/svg/mailsvg";
import LockSvg from "assets/svg/locksvg";
import EgeSvg from "assets/svg/eyesvg";
import EgeActiveSvg from "assets/svg/eyeactivesvg";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import LoginFB from "components/loginFB";
import LoginGoogle from "components/loginGoogle";

import { LOGIN_ADMIN, LOGIN_ERROR, LOGIN_REQUEST_ADMIN, SET_TOKEN } from "redux/actions/authenAction";
import { accessToken } from 'utils/until';
import { loginAdmin, loginUser } from "services/api";
import { SetToken } from '../../utils/until';


const SignIn = () => {


    const [isshow, setisshow] = useState(false);

    const token = useSelector(state => state?.AuthenReducer?.token)
    const error = useSelector(state => state?.AuthenReducer?.errorlogin)
    const refEmail = useRef('input1');
    const refPassword = useRef('input2');

    const history = useHistory();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            gmail: "",
            password: "",
        },
        validationSchema: Yup.object({
            gmail: Yup.string()
                .email("Please enter a validate email!")
                .required("Please input your email address"),
            password: Yup.string()
                .min(6, "Minimum 6 characters")
                .required("Please input your password"),

        }),
        onSubmit: async (valuesinput) => {
            loginUser(valuesinput).then(res =>{
                if(res.status == 200){
                    alert('Login thanh cong')
                    SetToken(res.data.accessToken)
                    history.push('/chat')
                }
                else if(res.status == 201){
                    alert('Tai khoan chua duoc kich hoat')
                }
                else{
                    alert('Sai tai khoan hoac mat khau ')
                }
               
            }).catch(e=>{
                alert('Call api that bai')
                LOGIN_ERROR(e);
            })
        }
    });

   
    return (
        <div style={{ height: '100vh', overflow: 'hidden', color: '#455560' }}>
            <div>
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
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
                                                name='gmail'
                                                className={!formik.errors.gmail ? "ant-input" : "ant-input error"}

                                                value={formik.values.gmail}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.errors.gmail && (
                                                <p className='colorErr' >{formik.errors.gmail}</p>
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
                                                className={!formik.errors.password ? "ant-input" : "ant-input error"}
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
                                    <div className="row text-center">
                                        <div className="col-3 col-sm-4 col-md-4 col-lg-4 col-xl-4 netdut">
                                            <div className='netdut1' />
                                        </div>
                                        <div className="col-5 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                            <p className="content">or connect with</p>
                                        </div>
                                        <div className="col-3 col-sm-4 col-md-4 col-lg-4 col-xl-4 netdut">
                                            <div className='netdut2' />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <LoginGoogle />
                                    <LoginFB />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-0 col-sm-4 col-md-4 col-lg-4 col-xl-4 IMGBG">
                        <Welcome img='https://emilus.themenate.net/img/others/img-18.png' />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignIn;