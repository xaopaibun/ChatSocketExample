import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    Avatar,
    ConversationHeader,
    VoiceCallButton,
    InfoButton,
    VideoCallButton,
    Search,
    ConversationList,
    Sidebar,
    Conversation
} from "@chatscope/chat-ui-kit-react";
import socketIOClient from "socket.io-client";
import React, { useState, useRef } from "react";
import { HandleTime } from "utils/until";
import { useSelector } from 'react-redux';
import { Alert , Button } from "react-bootstrap";
const io = require("socket.io-client");
const Chat = () => {
    const socketRef = React.useRef();
    const [mess, setMess] = useState([]);
    const [message, setMessage] = useState('');
    const [id, setId] = useState();
    const [temp, settemp] = useState();
    const [show, setShow] = useState(false);
    const name = useSelector(state => state.AuthenReducer.name)
    const image = useSelector(state => state.AuthenReducer.image)
    React.useEffect(() => {
        socketRef.current = socketIOClient.connect('http://localhost:5000')

        socketRef.current.emit('sendUser', name)
        
        socketRef.current.on('sendId', data => {
            setId(data)
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
    const videoRef = useRef();
    // const openMediaDevices = async (constraints) => {
    //     return await navigator.mediaDevices.getUserMedia(constraints);
    // }
    // const videoRef = useRef();
    // try {
    //     const stream = openMediaDevices({'video':true,'audio':true});
    //     videoRef.current.srcObject = stream;
    //     videoRef.current.onloadedmetadata = function(){
    //         videoRef.current.play();
    //     }
    //     //console.log(videoRef.current.srcObject = stream)
    //    console.log(videoRef.current.play());
    // } catch(error) {
    //     console.error('Error accessing media devices.', error);
    // }


    const send = () => {
        if (message !== null) {
            const msg = {
                name: name,
                content: message,
                createAt: Date.now(),
                image: image
            }
            socketRef.current.emit('sendDataClient', msg)
            setMessage('')
        }
    }

    return (
        <div>
            <div className='container'>
                {show && name  && name!== temp ?
                    <Alert variant="success">
                        <Alert.Heading>Welcome {temp} join group</Alert.Heading>
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Close
                            </Button>
                        </div>
                    </Alert> : <div />}
                <div style={{ position: "relative", height: "600px" }}>
               
                    <MainContainer>
                    <Sidebar position="left" scrollable={false}>
                  <Search placeholder="Search..." />
                  <ConversationList>                                                     
                    <Conversation name="Pham Jin" info="Hello">
                      <Avatar src={image} name="Pham Jin" status="available" />
                    </Conversation>
                    
                    
                                                                             
                  </ConversationList>
                </Sidebar>
                        <ChatContainer>
                            <ConversationHeader>
                                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&usqp=CAU' name="image" />
                                <ConversationHeader.Content userName="Chat React JS" info="Active 10 mins ago" />
                                <ConversationHeader.Actions>
                                    <VoiceCallButton />
                                    <VideoCallButton />
                                    <InfoButton />
                                </ConversationHeader.Actions>
                            </ConversationHeader>
                            <MessageList>
                                {
                                    mess.map((val, index) => {
                                        return (
                                            <Message model={{
                                                message: val.content,
                                                sentTime: "just now",
                                                sender: "Joe",
                                                direction: val.id === id ? "outgoing" : "incoming",
                                                position: "single",

                                            }} >
                                                <Avatar src={val.image} name="Pham Jin" />
                                                <Message.Header sender={val.name} sentTime={HandleTime(val.createAt)} />
                                            </Message>
                                        )
                                    })
                                }

                            </MessageList>
                            <MessageInput onChange={(val) => setMessage(val)} placeholder="Type message here" onSend={() => send()} />
                        </ChatContainer>
                    </MainContainer>
                    {/* <video id="localVideo" ref={videoRef} autoplay playsinline controls="false"/> */}

                </div>

            </div>
        </div >
    );
}
export default Chat;