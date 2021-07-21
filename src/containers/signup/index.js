import React, { useState, useRef } from "react";
import {
    Link
} from "react-router-dom";
import EgeActiveSvg from "../../assets/svg/eyeactivesvg";
import EgeSvg from "../../assets/svg/eyesvg";
import LockSvg from "../../assets/svg/locksvg";
import MailSvg from "../../assets/svg/mailsvg";
import { useFormik } from 'formik';
import * as Yup from "yup";

import Welcome from "../../components/welcome"

const SignUp = () => {
    const [isshow, setisshow] = useState(false);
    const [isshowConfirm, setisshowConfirm] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmpassword: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email("Please enter a validate email!")
            .required("Please input your email address"),
            password: Yup.string()
                .min(6, "Minimum 6 characters")
                .required("Please input your password"),
            confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
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
                    <div className="container input-from">
                        <div className="input-form-row">
                            <div>
                                <h1 className="bold size30">Sign Up</h1>
                                <div className='div_box5' />
                                <p style={{ color: '#72849a' }}>Already have an account ? <Link to="/signin">Sign In</Link></p>
                                <div className='div_box20' />
                                <div className='div_box20' />
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="form-group" >

                                        <label className="label_input" >Email</label><div className='div_box5' />
                                        <div className='div_input'>
                                            <input
                                                type="email"
                                                name='email'
                                                className={!formik.errors.email ? "ant-input" : "ant-input error"}
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.errors.email && (
                                                <p className='colorErr'>{formik.errors.email}</p>
                                            )}
                                            {/* <i className="far fa-envelope text-primary icon-input"></i> */}
                                            <MailSvg />
                                        </div>
                                    </div>
                                    <div className='div_box20' />

                                    <div className="form-group" >
                                        <label className="label_input" >Password</label><div className='div_box5' />
                                        <div className='div_input'>
                                            <input
                                                name='password'
                                                type={isshow ? "text" : "password"}
                                                className={!formik.errors.password  ? "ant-input" : "ant-input error"}
                                                value={formik.values.password}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.errors.password && (
                                                <p className='colorErr'>{formik.errors.password}</p>
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

                                    <div className="form-group">
                                        <label className="label_input" >ConfirmPassword</label><div className='div_box5' />
                                        <div className="div_input" >
                                            <input
                                                name='onfirmpassword'
                                                type={isshowConfirm ? "text" : "password"}
                                                className="ant-input"
                                                value={formik.values.confirmpassword}
                                                onChange={formik.handleChange}
                                            />
                                            {formik.errors.confirmpassword && (
                                                <p className='colorErr'>{formik.errors.confirmpassword }</p>
                                            )}
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
                                </form>
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