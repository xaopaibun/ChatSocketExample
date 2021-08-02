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
    VideoCallButton
} from "@chatscope/chat-ui-kit-react";
import socketIOClient from "socket.io-client";
import React, { useState } from "react";
import { HandleTime } from "utils/until";
import { useSelector } from 'react-redux';

const Chat = () => {
    const socketRef = React.useRef();
    const [mess, setMess] = useState([]);
    const [message, setMessage] = useState('');
    const [id, setId] = useState();
    const name = useSelector(state => state.AuthenReducer.name)
    const image = useSelector(state => state.AuthenReducer.image)
    React.useEffect(() => {
        socketRef.current = socketIOClient.connect('https://serverchatexample.herokuapp.com')
        socketRef.current.on('sendId', data => {
            setId(data)
        })
        socketRef.current.on('sendDataServer', dataGot => {
            setMess(dataGot)
        })
        
        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    const send = () => {
        if (message !== null) {
            const msg = {
                name : name,
                content: message,
                createAt : Date.now(),
                image : image
            }
            socketRef.current.emit('sendDataClient', msg)
            setMessage('')
        }
    }

    return (
        <div>
            <div className='container'>

                <div style={{ position: "relative", height: "500px" }}>
                <iframe src="https://www.nhaccuatui.com/mh/auto/ep1L5xbe9lLG" width={1} height={1} frameBorder={0} allowFullScreen allow="autoplay" />
                    <MainContainer>
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
                </div>

            </div>
        </div >
    );
}
export default Chat;