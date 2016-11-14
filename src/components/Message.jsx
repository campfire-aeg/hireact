import React from 'react';
import mui from 'material-ui';
var {ListItem,Avatar}=mui;
class Message extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           
            <ListItem
            leftAvatar ={<Avatar src=
                "https://a.disquscdn.com/next/embed/assets/img/noavatar92.7b2fde640943965cc88df0cdee365907.png" />}
            >{this.props.message} </ListItem>
        );
    }
}

export default Message;