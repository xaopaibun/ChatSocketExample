import GoogleSvg from '../../assets/svg/googlesvg'

const LoginGoogle = () =>{
    return(
        <button type="button" className="ant-btn mr-2">
                                    <span role="img" className="anticon"> <GoogleSvg /> </span>
                                    <span className='ggfb'>Google</span></button>
    );
}
export default LoginGoogle;