import { createState } from "@hookstate/core";

// create global state
const store = createState({
    firstChatMessageList: [],
    secondChatMessageList: [],


});

export default store;
