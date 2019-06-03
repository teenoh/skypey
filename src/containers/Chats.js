import React, { Component } from 'react';
import store from '../store'
import { setTypingValue, deleteMessage } from '../actions'
import './Chats.css'

const Chat = ({ message, user }) => {
    const { text, is_user_msg, number } = message;
    const { user_id } = user;

    const handleEditMessage = (e) => {
        if (is_user_msg){
            store.dispatch(
              setTypingValue({
                number,
                value: text,
                userId: user_id
              })
            );
        }
    };

    const handleDeleteMessage = (e) => {
        e.stopPropagation();

        if(is_user_msg){
            store.dispatch(
                deleteMessage({ userId: user_id, number })
            )
        }

    }

    return (
      <span onClick={handleEditMessage} className={`Chat  ${is_user_msg ? "is-user-msg" : ""}`}>
        {is_user_msg ? <span onClick={handleDeleteMessage} className='Chat__close'>&times;</span> : ''}
        {text}
      </span>
    );
}

class Chats extends Component {

    constructor(props){
        super(props)

        this.chatsRef = React.createRef()
    }

    componentDidMount(){
        this.scrollToBottom()
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight
    }

    render(){
        const { user } = this.props;
        return (
            <div className='Chats' ref={this.chatsRef}>
                {
                    this.props.messages.map(message => (
                        <Chat user={user} message={message} key={message.number} />
                    ))
                }
            </div>
        )
    }
}

export default Chats;