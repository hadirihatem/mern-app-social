import "./message.css"
import {format} from "timeago.js"



const Message = ({message, own }) => {
    return (
        <div className={own ? "message own" : "message" }>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://img1.freepng.fr/20180320/kdq/kisspng-computer-icons-message-sms-icon-png-message-5ab0eb82d6bca2.3608087515215440668796.jpg"
                    alt="" />
                <p className="messageText"> {message.text}</p>
            </div>
            <div className="messageBottom"> {format(message.createdAt)} </div>
        </div>
    )
}

export default Message