import React from 'react'
import _ from 'lodash';
import Header from '../components/Header';
import Chats from './Chats'
import MessageInput from './MessageInput'
import store from '../store'
import './ChatWindow.css'

const ChatWindow = ({ activeUserId }) => {
    const state  = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMsgs = state.messages[activeUserId];
    const { typing } = state;
    
    return (
      <div className="ChatWindow">
        <Header user={activeUser} />
        <Chats user={activeUser} messages={_.values(activeMsgs)} />
        <MessageInput user={activeUser} message={typing} />
      </div>
    );
}

export default ChatWindow;