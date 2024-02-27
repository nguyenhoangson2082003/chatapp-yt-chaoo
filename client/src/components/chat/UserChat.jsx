import { Stack } from "react-bootstrap";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import avarter from "../../assets/avarter.svg"
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";

const UserChat = ({ chat,user }) => {

    const {recipientUser} = useFetchRecipientUser(chat,user)
    const {onlineUsers} = useContext(ChatContext)
    const isOnline = onlineUsers?.some((user) => user?.userId === recipientUser?._id);
    return (
        <Stack
            direction="horizontal"
            gap={3}
            className="user-card align-items-center p-2 justify-content-between" role="button"
        >
            <div className="d-flex">
            <div className="me-2">
                <img src={avarter} alt="" height="35px" />
            </div>
            <div className="text-content">
                <div className="name">{recipientUser?.name}</div>
                <div className="text">Text message</div>
            </div>
            </div>
            <div className="d-flex flex-column align-items-end">
                <div className="date">
                    1-1-2024
                </div>
                <div className="this-user-notifications">2</div>
                <span className= {isOnline ? "user-online" : ""}></span>
            </div>
        </Stack>
    );
}

export default UserChat;

