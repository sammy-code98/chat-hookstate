import { useState } from "@hookstate/core";
import ChatBox from "react-custom-chat";
import store from "../store";

const FirstChat = () => {
  const firstChatMessageList = useState(store);
  return (
    <div>
      <ChatBox
        settings={{
          position: "left",
          navColor: "purple",
          navText: "Code Sammy",
          isOpen: true,
        }}
        firstChatMessageList={firstChatMessageList.get()}
      />
    </div>
  );
};

export default FirstChat;
