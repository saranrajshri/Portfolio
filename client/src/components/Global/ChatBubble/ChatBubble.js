import React, { useState } from "react";
import "./ChatBubble.scss";
import { motion } from "framer-motion";

import BotImage from "../../../images/bot.png";

const ChatBubble = () => {
  const [isChatMessagesVisible, setChatMessagesVisible] = useState(false);

  const handleChatMessage = (value) => {
    setChatMessagesVisible(value);
  };
  return (
    <div className="chatBubble__container">
      <motion.div
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: isChatMessagesVisible ? 0 : 500 }}
        transition={{ duration: 1 }}
      >
        <div className="chatBubble__chatBox">
          <div
            className="chatBubble__chatBoxHeader"
            onClick={() => handleChatMessage(false)}
          >
            <p>Saran Raj's Bot</p>
          </div>
          <div className="chatBubble__chatBoxMessages">
            <div className="chatBubble__messageLeft">
              <p>
                {" "}
                This is a text message. This is a text message. This is a text
                message.This is a text message.
              </p>
            </div>
            <div className="chatBubble__messageRight">
              <p>Hello</p>
            </div>{" "}
          </div>
          <div className="chatBubble__input">
            <input type="text" placeholder="Ask a question here.." />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{
          opacity: 1,
          x: isChatMessagesVisible ? 200 : 0,
        }}
        transition={{ duration: isChatMessagesVisible ? 1 : 2 }}
      >
        <motion.div whileHover={{ scale: 1.0 }}>
          <div className="chatBubble__wrapper">
            <div
              className="chatBubble__circle"
              onClick={() => handleChatMessage(true)}
            >
              <img src={BotImage} alt="bot" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChatBubble;
