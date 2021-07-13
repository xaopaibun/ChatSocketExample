import React from "react";
import {
    Link
} from "react-router-dom";

import Welcome from "../../components/welcome"

const SignUp = () => {
    const [isshow, setisshow] = React.useState(false);
    const [isshowConfirm, setisshowConfirm] = React.useState(false);
    return (
        <div>
            <div className="row">
                <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="container input-from">
                        <div className="input-form-row">
                            <div>
                                <h1 className="bold">Sign Up</h1>
                                <div style={{ height: '10px' }}>
                                </div>
                                <p style={{ color: '#72849a' }}>Already have an account ? <Link to="/signin">Sign In</Link></p>
                                <div style={{ height: '50px' }}>
                                </div>
                                <div className="form-group" style={{ position: 'relative' }}>
                                    <label className="nhan" >Email</label>
                                    <input type="text" id="login-form_email" className="ant-input" />
                                    <span className='text-primary'>
                                        <svg viewBox="64 64 896 896" focusable="false" className='icon-input' data-icon="mail" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>
                                    </span>
                                </div>
                                <div style={{ height: '10px' }} />
                                
                                <div className="form-group" style={{ position: 'relative' }}>
                                    <label className="nhan" >Password</label>
                                    <input type={isshow ? "text" : "password"} id="login-form_email" className="ant-input" />
                                    <svg onClick={() => setisshow(!isshow)} viewBox="64 64 896 896" className='icon_password' focusable="false" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        {!isshow ? <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                                            : <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>}
                                    </svg>
                                    <span className='text-primary'>
                                        <svg viewBox="64 64 896 896" focusable="false" className='icon-input' data-icon="lock" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                            <path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z" />
                                        </svg>
                                    </span>
                                </div>
                                <div style={{ height: '10px' }} />
                               
                                <div className="form-group" style={{ position: 'relative' }}>
                                    <label className="nhan" >ConfirmPassword</label>
                                    <input type={isshowConfirm ? "text" : "password"} id="login-form_email" className="ant-input" />
                                    <span className='text-primary'>
                                        <svg viewBox="64 64 896 896" focusable="false" className='icon-input' data-icon="lock" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z" /></svg>
                                    </span>
                                    <svg onClick={() => setisshowConfirm(!isshowConfirm)} viewBox="64 64 896 896" className='icon_password' focusable="false" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        {!isshowConfirm ? <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                                            : <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>}
                                    </svg>
                                </div>
                                <div style={{ height: '10px' }} />
                                
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