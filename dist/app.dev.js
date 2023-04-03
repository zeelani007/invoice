"use strict";

var chatButton = document.querySelector('.chatbox__button');
var chatContent = document.querySelector('.chatbox__support');
var icons = {
  isClicked: '<img src="./images/icons/chatbox.png" />',
  isNotClicked: '<img src="./images/icons/chatbox.png" />'
};
var chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);
//# sourceMappingURL=app.dev.js.map
