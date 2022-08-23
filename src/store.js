import { createState } from "@hookstate/core";

// create global state
const store = createState({
    firstChatMessageList: ["hello"],

});

export default store;
