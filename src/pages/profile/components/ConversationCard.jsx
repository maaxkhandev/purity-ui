import React from "react";
import { Flex, Avatar, Button } from "antd";
import cAvatar1 from "@assets/c1.png";
import cAvatar2 from "@assets/c2.png";
import cAvatar3 from "@assets/c3.png";
import cAvatar4 from "@assets/c4.png";

const conversationData = [
  {
    id: 1,
    avatar: cAvatar1,
    name: "Esthera Jackson",
    lastMessage: "Hi! I need more informations...",
  },
  {
    id: 2,
    avatar: cAvatar2,
    name: "Esthera Jackson",
    lastMessage: "Awesome work, can you change...",
  },
  {
    id: 3,
    avatar: cAvatar3,
    name: "Esthera Jackson",
    lastMessage: "Have a great afternoon...",
  },
  {
    id: 3,
    avatar: cAvatar3,
    name: "Esthera Jackson",
    lastMessage: "About files I can...",
  },
];

const ConversationCard = () => {
  return (
    <div className="conversations-card">
      <h4>Conversations</h4>
      {conversationData.map((e) => (
        <div className="conversation-user-profile">
          <Flex justify="space-between">
            <Flex gap={8}>
              <Avatar shape="square" size={50} icon={<img src={e.avatar} />} />
              <Flex vertical="vertical" gap={3} justify="center">
                <p className="title-large">{e.name}</p>
                <p className="grey-text">{e.lastMessage}</p>
              </Flex>
            </Flex>
            <Button type="text">REPLY</Button>
          </Flex>
        </div>
      ))}
    </div>
  );
};

export default ConversationCard;
