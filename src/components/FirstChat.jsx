import { useState } from "@hookstate/core";
import ChatBox from "react-custom-chat";
import store from "../store";

const FirstChat = () => {
  const { firstChatMessageList, secondChatMessageList } = useState(store);

  const sendMessage = (newMessage) => {
    firstChatMessageList.merge([{ text: newMessage, person: "primary" }]);
    setTimeout(() => {
      secondChatMessageList.merge([{ text: newMessage, person: "secondary" }]);
    }, 5000);
  };
  
  return (
    <div>
      <ChatBox
        settings={{
          position: "left",
          navColor: "purple",
          navText: "Code Sammy",
          isOpen: true,
        }}
        messageList={firstChatMessageList.get()}
        onSendMessage={sendMessage}
      />
    </div>
  );
};

export default FirstChat;
