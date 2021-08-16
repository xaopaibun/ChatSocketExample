import FbSvg from '../../assets/svg/facebooksvg'
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { LOGIN_FACEBOOK } from 'redux/actions/authenAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SetToken } from 'utils/until';
const LoginFB = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const responseFacebook = (response) => {
    axios.post('http://localhost:5000/loginFb', {FB :response})
      .then(function (res) {
        dispatch(LOGIN_FACEBOOK({ name: response.name, image: response.picture.data.url }))
        history.push('/chat')
        SetToken(response.accessToken);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }

  return (

    <FacebookLogin
      appId="219847566579112"
      autoLoad={false}
      fields="name,email,picture"
      cssClass="ant-btn"
      icon={<FbSvg />}
      textButton=' Facebook'
      callback={responseFacebook} />

  )
}
export default LoginFB;