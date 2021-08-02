import FbSvg from '../../assets/svg/facebooksvg'
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { LOGIN_FACEBOOK } from 'redux/actions/authenAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
const LoginFB = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const responseFacebook = (response) => {
    dispatch(LOGIN_FACEBOOK({name : response.name, image: response.picture.data.url}))
    history.push('/chat')
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