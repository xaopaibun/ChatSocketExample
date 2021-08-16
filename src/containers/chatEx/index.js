import './main.css';
import socketIOClient from "socket.io-client";
import React, { useState, useRef } from "react";
import { HandleTime } from "utils/until";
import { useSelector } from 'react-redux';
import { findUser } from "services/api";

const ChatEx = () => {
    const socketRef = React.useRef();
    const [mess, setMess] = useState([]);
    const [message, setMessage] = useState('');
    const [id, setId] = useState();
    const [temp, settemp] = useState();
    const [listuser, setListuser] = useState([]);
    const [key, setKey] = useState();
    const [show, setShow] = useState(false);
    // const [name, setName] = useState('');
    const [typing, setTyping] = useState('');
    // const image = useSelector(state => state.AuthenReducer.image)
    const name = useSelector(state => state.AuthenReducer.name)
    React.useEffect(() => {
        socketRef.current = socketIOClient.connect('http://localhost:5000')

        socketRef.current.emit('sendUser', name)

        socketRef.current.on('sendId', data => {
            setId(data)
        })

        socketRef.current.on('OnTyping', data => {
            //console.log('typing',data)
            setTyping(data)
        })

        socketRef.current.on('OffTyping', data => {
            setTyping(data)
        })

        socketRef.current.on('sendDataServer', dataGot => {
            setMess(dataGot)
        })

        socketRef.current.on('sever_send_newuser', user => {
            settemp(user)
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 3000);
        })

        return () => {
            socketRef.current.disconnect();
        };
    }, []);



    const send = () => {
        if (message !== null) {
            const msg = {
                name: name,
                content: message,
                socketID : id
            }
            socketRef.current.emit('sendDataClient', msg)
            setMessage('')
        }
    }

    const onFindUser = () => {
        findUser({ username: key }).then(res => console.log(res.data.data))
    }

    const onTyping = () => {
        socketRef.current.emit('UserOnTyping', name)
    }

    const offTyping = () => {
        socketRef.current.emit('UserOffTyping')
        console.log('Triggered because this input lost focus')
    }

    return (
        <div>
            
            <section className="msger">
                <header className="msger-header">
                    <div className="msger-header-title">
                        <h1><i className="fas fa-comment-alt" /> D13CNPM6</h1>
                    </div>
                    <div className="msger-header-options">
                        <span><i className="fas fa-cog" /></span>
                    </div>
                </header>
                {/* <iframe src="https://www.nhaccuatui.com/mh/background/t7bN6OwSwl8G" width={1} height={1} frameBorder={0} allowFullScreen allow="autoplay" /> */}
            <iframe src="https://www.nhaccuatui.com/mh/auto/t7bN6OwSwl8G" width={1} height={1} frameBorder={0} allowFullScreen allow="autoplay" />
                <main className="msger-chat">
                    {
                        mess?.map((val, index) => {
                            return (
                                <div key={index.toString()} className={id !== val.socketID ? "msg left-msg" :"msg right-msg"}>
                                    <div className="msg-img" >
                                        <h1>{val?.name?.slice(0, 1)}</h1>
                                    </div>
                                    <div className="msg-bubble">
                                        <div className="msg-info">
                                            <div className="msg-info-name">{val.name}</div>
                                            <div className="msg-info-time">{HandleTime(val.createAt)}</div>
                                        </div>
                                        <div className="msg-text">
                                        {val.content}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    {
                    typing ? <div className="typing-demo">
                        {typing} dang chat !!!
                    </div> : <div />
                }
                </main>
                <div className="msger-inputarea">
                    {/* <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nhap room" />
                        <button className="btn btn-success" type="button" id="button-addon2">Tao Room</button>
                    </div> */}
                    <div className="input-group mb-3">
                    <input  onBlur={() => offTyping()} onFocus={() => onTyping()} type="text" value={message} onChange={(val) => setMessage(val.target.value)}  className="msger-input" placeholder="Enter your message..." />
                        <button className="msger-send-btn"  type="button" onClick={() => send()} id="button-addon2">Send</button>
                    </div>

                </div>
            </section>
           
        </div >
    );
}
export default ChatEx;