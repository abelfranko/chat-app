import {ChatEngine} from 'react-chat-engine'
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'
import './App.css'

const App = () => {

if(!localStorage.getItem('username')) return <LoginForm />


return (
<ChatEngine 
height="100vh"
projectID="123e7c8d-89af-4fcf-b187-4d79216811fc"
userName={localStorage.getItem('username')}
userSecret={localStorage.getItem('password')}
renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
/>
)
}

export default App