import ChatBox from "react-custom-chat";
import { useState } from "@hookstate/core";
import store from "../store";

const SecondChat = () => {
  const { firstChatMessageList, secondChatMessageList } = useState(store);

  const sendMessage = (newMessage) => {
    secondChatMessageList.merge([{ text: newMessage, person: "primary" }]);
    setTimeout(() => {
      firstChatMessageList.merge([{ text: newMessage, person: "secondary" }]);
    }, 5000);
  };

  return (
    <div>
      <ChatBox
        settings={{
          navColor: "green",
          navText: "John Doe",
        }}
        messageList={secondChatMessageList.get()}
        onSendMessage={sendMessage}
      />
    </div>
  );
};

export default SecondChat;
