import FbSvg from '../../assets/svg/facebooksvg'
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
const LoginFB = () => {
  const responseFacebook = (response) => {
    console.log(response);
    axios.post('http://localhost:5000/loginFb', {
      FB: response,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (

    <FacebookLogin
      appId="219847566579112"
      autoLoad={false}
      fields="name,email,picture"
      cssClass="ant-btn"
      icon={<FbSvg />}
      textButton='Facebook'
      callback={responseFacebook} />

  )
}
export default LoginFB;