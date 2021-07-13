import React from "react";
import {
    Link
} from "react-router-dom";

import Welcome from "../../components/welcome";
import FacebookLogin from 'react-facebook-login';



const SignIn = () => {
    const [isshow, setisshow] = React.useState(false);
    // const responseFacebook = (response) => {
    //     console.log(response);
    // }
    return (
        <div>
            <div className="row">
                <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8">
                    <div className="container input-from">
                        <div className="input-form-row">
                            <h1 className="bold"> Sign In</h1>
                            <div style={{ height: '10px' }}>
                            </div>
                            <p style={{ color: '#72849a' }}>Don't have an account yet? <Link to="/signup">Sign Up</Link></p>
                            <div style={{ height: '50px' }}>
                            </div>

                            <div className="form-group" style={{ position: 'relative' }}>
                                <label className="nhan" >Email</label>
                                <input type="text" id="login-form_email" className="ant-input" defaultValue="user1@themenate.net" />
                                <span className='text-primary'>
                                    <svg viewBox="64 64 896 896" focusable="false" className='icon-input' data-icon="mail" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>
                                </span>
                            </div>
                            <div style={{ height: '10px' }}>
                            </div>
                            <div className="form-group" style={{ position: 'relative' }}>
                                <label className="nhan" >Password</label>
                                <input type={isshow ? "text" : "password"} id="login-form_email" className="ant-input" defaultValue="vanquy" />
                                <span className='text-primary'>
                                    <svg viewBox="64 64 896 896" focusable="false" className='icon-input' data-icon="lock" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z" /></svg>
                                </span>
                                <svg onClick={() => setisshow(!isshow)} viewBox="64 64 896 896" className='icon_password' focusable="false" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    {!isshow ? <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                                        : <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>}
                                </svg>
                            </div>

                            <button type="submit" className="ant-btn ant-btn-primary ant-btn-block">
                                <span id="btntext">Sign In</span>
                            </button>

                            <div style={{ height: '30px' }}>
                                {/* <FacebookLogin
                                    appId="1456503322104710"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                
                                    callback={responseFacebook} />, */}
                            </div>

                            <div className="row">
                                <div className="col-xl-4 netdut1">
                                </div>
                                <div className="col-xl-4 text-center">
                                    <p className="content">or connect with</p>
                                </div>
                                <div className="col-xl-4 netdut2">
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="ant-btn mr-2">
                                    <span role="img" className="anticon">
                                        <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor"><g>
                                            <path fill="#59C36A" d="M827.301,875.968c-84.521,71.388-194.169,116.693-313.528,116.693c-177.609,0-333.52-97.848-418.041-240.62
                  l31.646-145.858l140.255-26.039c32.553,105.078,130.779,182.178,246.141,182.178c55.964,0,107.937-17.703,150.767-49.112
                  l134.777,20.558L827.301,875.968z" />
                                            <path fill="#00A66C" d="M827.301,875.968l-27.984-142.201l-134.777-20.558c-42.83,31.409-94.803,49.112-150.767,49.112v230.34
                  C633.132,992.661,742.779,947.355,827.301,875.968z" />
                                            <g id="Connected_Home_1_"><g><g><g><path fill="#FFDA2D" d="M256.781,505.331c0,26.267,3.998,51.396,10.851,74.813l-171.9,171.897
                  c-42.83-71.957-69.29-156.48-69.29-246.71c0-90.233,26.46-174.754,69.29-246.711l137.965,23.743l33.936,148.154
                  C260.779,453.932,256.781,479.06,256.781,505.331L256.781,505.331z" /></g></g></g></g><path fill="#4086F4" d="M1001.103,505.331c0,148.48-68.719,281.547-173.802,370.637L664.539,713.209
                  c33.121-23.988,61.107-55.971,79.384-93.66h-230.15c-15.993,0-28.556-12.567-28.556-28.554V419.666
                  c0-15.99,12.563-28.554,28.556-28.554h450.78c13.707,0,25.698,9.708,27.983,23.412
                  C998.247,444.225,1001.103,475.063,1001.103,505.331L1001.103,505.331z" /><path fill="#4175DF" d="M743.924,619.549c-18.275,37.689-46.264,69.672-79.382,93.66l162.759,162.759
                  c105.083-89.09,173.802-222.153,173.802-370.637c0-30.269-2.855-61.106-8.567-90.807c-2.284-13.704-14.278-23.412-27.984-23.412
                  H513.772v228.437H743.924z" /><path fill="#FF641A" d="M835.297,154.107c0.571,7.996-2.855,15.422-7.996,21.131L705.086,296.881
                  c-9.704,10.278-25.694,11.421-37.118,2.855c-45.119-33.693-98.231-51.396-154.195-51.396
                  c-115.361,0-213.588,77.095-246.141,182.178L95.731,258.62C180.253,115.848,336.163,18,513.772,18
                  c113.647,0,224.439,41.88,311.244,114.978C831.298,138.119,834.723,146.112,835.297,154.107L835.297,154.107z" /><path fill="#F03800" d="M667.966,299.736c11.422,8.567,27.411,7.423,37.119-2.855l122.214-121.643
                  c5.143-5.709,8.569-13.133,7.996-21.131c-0.575-7.997-3.999-15.988-10.279-21.13C738.212,59.88,627.42,18,513.772,18v230.34
                  C569.736,248.34,622.849,266.043,667.966,299.736z" /></g></svg></span><span>Google</span></button><button type="button" className="ant-btn"><span role="img" className="anticon"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor"><g><path fill="#4A7AFF" d="M1015.363,506.525c0,279.749-226.775,506.524-506.525,506.524c-279.749,0-506.524-226.775-506.524-506.524
                  C2.313,226.775,229.089,0,508.838,0C788.588,0,1015.363,226.775,1015.363,506.525z" /><path fill="#FFFFFF" d="M663.688,149.015v114.697c0,0-131.686-19.113-131.686,65.843v84.957h118.941L636.08,544.072H532.002v337.709
                  H400.316V544.072l-112.572-2.126V414.512H398.19V316.81c0,0-7.288-145.343,135.938-172.038
                  C593.602,133.68,663.688,149.015,663.688,149.015z" /><path fill="#DCE1EB" d="M663.688,263.712V149.015c0,0-70.086-15.335-129.56-4.243c-9.291,1.73-17.932,3.973-25.993,6.623v730.387
                  h23.867V544.072h104.07l14.871-129.561H532.002c0,0,0,0,0-84.957C532.002,244.599,663.688,263.712,663.688,263.712z" /></g></svg></span><span>Facebook</span></button></div>
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