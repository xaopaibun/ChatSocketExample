import LoginFB from "components/loginFB";
import LoginGoogle from "components/loginGoogle";
import { useFormik } from "formik";
import React, { useCallback } from "react";
import {
    Link, useHistory
} from "react-router-dom";
import MailSvg from "../../assets/svg/mailsvg";

import './style.css';
import * as Yup from "yup";
import { LOGIN_LOCAL } from "redux/actions/authenAction";
import { useDispatch } from "react-redux";
const Forgot = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Please input your full name??"),
        }),
        onSubmit: (valuesinput) => {
            //console.log(valuesinput.name)
            dispatch(LOGIN_LOCAL(valuesinput.name))
            history.push('/chat')
        }
    });
    return (
        <div>
            <div className='view_box'>
                <div className='box' >
                    <div className='container' style={{ paddingLeft: 50, paddingRight: 50 }}>
                        <div className='div_box20' />
                        <div className="form-group" >
                            <div style={{ textAlign: 'center' }}>
                                <img src='https://emilus.themenate.net/img/logo.png' height={70} width={100} />

                                <h3 style={{ fontWeight: '700', fontSize: '20px' }}>Enter your Full Name ?</h3>
                                <div className='div_box5' />

                                {/* <p className='color_text'>Enter your Full Name</p> */}
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className='div_input'>
                                    <input className='color_input' name='name' type="text"
                                        value={formik.values.name}
                                        onChange={formik.handleChange} id="login-form_email" placeholder='Full Name' className="ant-input" />
                                    <span className='text-primary'>
                                        <MailSvg />
                                    </span>
                                </div>
                                <div className='div_box5' />
                                <div className='div_box20' >
                                    {formik.errors.name && (
                                        <span className='colorErr' >{formik.errors.name}</span>
                                    )}
                                </div>
                                <div className='div_box5' />
                                <button type="submit" className="ant-btn ant-btn-primary ant-btn-block">
                                    <span id="btntext">Send</span>
                                </button>
                            </form>
                            <div className='div_box5' />
                            <div className="box_connect">
                                <div class="row text-center">
                                    <div class="col-xl-4 netdut">
                                        <div className='netdut1' />
                                    </div>
                                    <div class="col-xl-4">
                                        <p className="content">or</p>
                                    </div>
                                    <div class="col-xl-4 netdut">
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

            </div>

        </div>

    );
}
export default Forgot;