import './ChatComponent.scss';
export default function ChatComponent() {
    return (
        <div className="chat">
            <div className="chat__box">
                <div className="chat__messages">
                    <div className="chat__message chat__message--bot">
                        <span className="chat__name">User</span>
                        This is a message
                        <span className="chat__timestamp">timestamp</span>
                    </div>
                    
                    <div className="chat__message chat__message--user">
                        <span className="chat__name">User</span>
                        This is a message
                        <span className="chat__timestamp">timestamp</span>
                    </div>
                </div>
                <div className="chat__form">
                    <input type="text" placeholder="Type a message" />
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}