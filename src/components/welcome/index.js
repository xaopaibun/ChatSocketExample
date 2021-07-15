import './style.css';
const Welcome = (props) => {
    
    return (
        <div>
            <div >
            <div className="container" >
                <div className="img-right">
                    <img width="100px" src="https://emilus.themenate.net/img/logo-white.png" alt="" />
                </div>
                <div className="content_top">
                    <img className="imgfluid" src={props.img} alt="" />
                </div>
                <div className="content_bottom">
                    <h1 className="text-white title bold size30">Welcome to emilus</h1>
                    <p className="text-white" style={{ lineHeight: '1.8' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper
                        nisl erat, vel convallis elit fermentum pellentesque.</p>
                </div>
                <div className="content_footer">
                    <a className="text-white" href="/#">Term &amp; Conditions</a>
                    <span className="mx-2 text-white"> | </span>
                    <a className="text-white" href="/#">Privacy &amp; Policy</a>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Welcome;