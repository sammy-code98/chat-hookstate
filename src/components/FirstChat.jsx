import ChatBox from 'react-custom-chat'
const FirstChat = () =>{
return(
<div>
    <ChatBox
    settings={{
        position:'left',
        navColor:'purple',
        navText:'Code Sammy',
        isOpen:true
    }}/>
</div>
)
}

export default FirstChat