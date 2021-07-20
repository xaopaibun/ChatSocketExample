import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
} from "@chatscope/chat-ui-kit-react";
import socketIOClient from "socket.io-client";
import React from "react";

const Chat = () => {
    const socketRef = React.useRef();

    React.useEffect(() => {
        socketRef.current = socketIOClient.connect('http://localhost:5000')

        return () => {
            socketRef.current.disconnect();
        };

    }, []);
    return (
        <div>
            <div className='container'>
                <div style={{ position: "relative", height: "500px" }}>
                    <MainContainer>
                        <ChatContainer>
                            <MessageList>
                                <Message
                                    model={{
                                        message: "Hello my friend",
                                        sentTime: "just now",
                                        sender: "Joe",
                                    }}
                                />
                            </MessageList>

                            <MessageInput placeholder="Type message here" />
                        </ChatContainer>
                    </MainContainer>
                </div>

            </div>
        </div >
    );
}
export default Chat;