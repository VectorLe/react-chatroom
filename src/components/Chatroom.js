import React from 'react';
import Message from './Message';
import messageList from './messageList';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chatHist: messageList
        };

        this.submitMsg = this.submitMsg.bind(this);
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        this.refs.chatHist.scrollTop = this.refs.chatHist.scrollHeight;
    }

    submitMsg(e) {
        e.preventDefault(); // prevents submitting the form

        // updates the state to append new message to 'chatHist' property and resets input to blank
        this.setState({
            chatHist: this.state.chatHist.concat([{
                username: "Vector",
                content: <p>{this.refs.msg.value}</p>,
                img: "/img/me.png",
            }])
        }, () => {
            this.refs.msg.value = "";
        });
    }

    render() {
        const {chatHist} = this.state;

        return (
            <div className="chatroom">
                <h3>Chatroom</h3>
                <ul className="chatHist" ref="chatHist">
                    {
                        chatHist.map(msg =>
                            <Message msg={msg} user="Vector" />
                        )
                    }
                </ul>
                <form className="input" onSubmit={e => this.submitMsg(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom;

