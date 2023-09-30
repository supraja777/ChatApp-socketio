import {ChatState} from "../context/ChatProvider"
import {Box} from "@chakra-ui/react"
import SideDrawer from "../miscellaneous/SideDrawer"
import ChatBox from "../miscellaneous/ChatBox"
import MyChats from "../miscellaneous/MyChats"
import { useState } from "react"


const ChatPage = () => {
  const {user} = ChatState()
  const [fetchAgain, setFetchAgain] = useState(false)
  return (
  <div style={{width: "100%"}}>
      {user && <SideDrawer/>}
      <Box 
      display="flex"
      justifyContent="space-around"
      w="100%"
      h="91.5vh"
      p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />} 
        {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
      </Box>
  </div>
  )
}

export default ChatPage
