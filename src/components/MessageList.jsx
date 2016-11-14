import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';

var {Card, List} = mui;

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ['MonMon, how are you', 'I am fine, and daddy ?']
        };
    }

    render() {
        var messageNodes = this
            .state
            .message
            .map((message) => {
                return (<Message message={message}/>);
            });
        return (
            <Card style={{
                flexGrow: 2
            }}>
                <List>
                    {messageNodes}
                </List>
            </Card>
        );
    }
}

export default MessageList;