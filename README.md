# Chatbot

A chatbot that I made using HTML, CSS, and Javascript.

Features:

  - Automatically scroll to the most recent message
  - Responsive layout through using flexbox
  - Emoticon buttons for quick addition to chat
  - Decision tree (top-down AI) to respond to likely messages
  - Aesthetic CSS styling
  
  <img src = "https://github.com/bobyang9/Chatbot/blob/master/chat.png" alt = "Image of chat with chatbot" width = 500px>

Version 2 Features:

  - More flexible decision tree that allows for multiple replies
    - i.e. responds in 2 chats to message "What's your favorite food and what's your favorite color?"
  - Fixed bug through change in parsing implementation
    - removed all uses of method includes() to prevent "this" from being interpreted as "hi"
    - Parse input by words (removed punctuation) and "understand" input by checking them against dictionary
