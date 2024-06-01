/* eslint-disable */
import { memo, useEffect, useMemo, useState } from 'react';

import { Avatar, Box, Divider, Image, Text } from '@chakra-ui/react';
import { GoDotFill } from 'react-icons/go';
import { IoCall, IoVideocam } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { InputMessage } from './input-message';
import { io } from 'socket.io-client';
import { useChatScroll } from '@/hooks/use-custom-ref';

type Props = {
  userInfo: any;
  loadingMessage: boolean;
  membersOfRoom: any[];
  idRoom: string;
  allMessage: any[];
}



const ContactDetail = ({userInfo, loadingMessage, membersOfRoom, idRoom, allMessage}: Props) => {

  const [messages, setMessages] = useState<any[]>([]);

  const messageRef = useChatScroll(messages)

  const socket = io(`http://localhost:8080`, {
    autoConnect: true,
    auth: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

    socket.on('recMessage', (message: { content: string; type: string }) => {
    let arr: any[] = messages;
    if (message) {
      arr = [...arr, message];
    }
    setMessages([...arr]);
  });
  
  useEffect(() => {
    if(allMessage) {
      setMessages(allMessage)
    }
  }, [allMessage])

  const contact = useMemo(() => {
    if(membersOfRoom) {
      return membersOfRoom.filter(
        (member: any) => member.id !== userInfo.id,
      );
    }
    return []
  }, [membersOfRoom])


  return (
    <Box className="flex">
      <Box className="p-4 relative h-[93vh] w-8/12 border">
        <Box className="flex justify-between items-center">
          <Box className="flex justify-center items-center gap-2">
            {contact?.map((member: any) => (
              <Avatar src={member.avatar} key={member.id} />
            ))}
            <>
              {contact?.map((member:any) => (
                <Text className="font-bold" key={member.id}>
                  {member.fullname}
                </Text>
              ))}
              <Box className="flex gap-1 items-center">
                <GoDotFill className="!text-green-700" />
                <Text className="text-[#707070]">Online</Text>
              </Box>
            </>
          </Box>
          <Box className="flex gap-4 justify-center items-center text-2xl">
            <IoCall className="cursor-pointer !text-[#0084FF]" />
            <IoVideocam className="cursor-pointer !text-[#0084FF]" />
          </Box>
        </Box>
        <Divider className="my-2 !w-full" />
        <Box ref={messageRef} className="flex flex-col gap-4 h-[76vh] overflow-y-scroll no-scrollbar">
          {
            loadingMessage && <Text className="text-xl text-center font-bold">Loading...</Text>
          }
          {!loadingMessage && messages.map((message) => (
            <div key={message.id}>
              <Message message={message} userInfo={userInfo} />
            </div>
          ))}
        </Box>
        <InputMessage
          className="absolute bottom-0 w-11/12"
          idRoom={idRoom}
          socket={socket}
          userInfo={userInfo}
        />
      </Box>
      <Box className="w-4/12 p-4">
        <Text className="text-2xl font-bold">Directory</Text>
        <Divider className="mt-6" />
        <Text className="font-bold my-4">Members</Text>
        <Box className="ml-4 h-[30vh] overflow-y-scroll no-scrollbar">
          {membersOfRoom?.map((member) => (
            <Link key={member.id} to={`/profile/${member.id}`}>
              <Box className="flex gap-2 items-center my-2 cursor-pointer">
                <Image src={member.avatar} className="w-14 h-14 rounded-2xl" />
                <Text className="font-bold">{member.fullname}</Text>
              </Box>
            </Link>
          ))}
        </Box>
        <Divider />
        <Text className="font-bold my-4">Files</Text>
      </Box>
    </Box>
  );
};

type PropsMessage = {
  message: any;
  userInfo: any;
}

const Message = ({message, userInfo}: PropsMessage) => {
  return (
    <Box
      className={`flex gap-2 ${message.author.id === userInfo.id ? 'justify-end' : ''}`}
      key={message.id}
  >
    {userInfo.id !== message.author.id && (
      <Avatar src={message.author.avatar} />
    )}
    <Text
      className={`text-xl p-2 rounded-3xl  ${userInfo.id === message.author.id ? 'bg-[#625EF1] text-white' : 'bg-[#d8d8d8] text-black'}`}
    >
      {message.content}
    </Text>
    {userInfo.id === message.author.id && (
      <Avatar src={message.author.avatar} />
    )}
  </Box>
  )
}

export default memo(ContactDetail);