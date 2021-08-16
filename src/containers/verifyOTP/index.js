import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { VerifyOTP_API } from 'services/api';
import { GetTokenVerifyOTP } from 'utils/until';


const VerifyOTP = () => {
    const [OTP, setOTP] = useState(0)
    const history = useHistory();
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ height: '200px', width: '340px' }}>
                <h1 style={{ textAlign: 'center' }}>Ma xac thuc OTP duoc gui vao gmail cua ban</h1>
                <OtpInput
                    value={OTP}
                    onChange={(val) => setOTP(val)}
                    numInputs={6} containerStyle={{ justifyContent: 'space-around', alignItems: 'center' }}
                    inputStyle={{ width: '40px', height: '40px' }}
                    separator={<span> </span>}
                />
                <div style={{ height: '40px' }}></div>
                <div style={{ width: '50%', margin: 'auto' }}>
                    <button type="button" onClick={() =>
                        VerifyOTP_API({OTP : parseInt(OTP), tokenOTP : GetTokenVerifyOTP()})
                        .then(res => {
                            if(res.status == 200){
                                alert(res.data.message)
                                history.push('/login');
                            }
                            else if(res.status == 201){
                                alert(res.data.message);
                            }
                        })
                        .catch(err => console.log(err))
                    } className="btn btn-primary btn-lg">Enter Verify OTP</button>
                </div>

            </div>
        </div>
    );
}
export default VerifyOTP;