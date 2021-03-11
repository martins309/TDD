const MessageList = ({ messages }) => (
    <div>
        <ul>
            {messages.map((message, index) => (
                <li key={index}>{message}</li>
            ))}
        </ul>
    </div>
)

export default MessageList;