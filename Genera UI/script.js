const chatHistory = documentgetElementById('chat-history');
const userMessageInput = documentgetElementById('user-message');
const sendButton = documentgetElementById('send-btn');

// Handle user messages and display them in the chat history
sendButton.addEventListener('click', () => {
  const userMessage = userMessageInput.value.trim();

  if (userMessage) {
    // Clear any previous error messages
    clearErrorMessage();

    // Create a message element for the user
    const userMessageElement = createMessageElement('user', userMessage);
    chatHistory.appendChild(userMessageElement);

    // Clear the input field
    userMessageInput.value = '';

    // Simulate bot response (replace with your chatbot logic)
    simulateBotResponse(userMessage)
      .then(botMessage => {
        const botMessageElement = createMessageElement('bot', botMessage);
        chatHistory.appendChild(botMessageElement);
        scrollToBottom();
      })
      .catch(error => {
        displayErrorMessage(error);
      });
  } else {
    // Display an error message if the user enters an empty message
    displayErrorMessage('Please enter a message.');
  }
});

// Function to create a message element with user or bot class
function createMessageElement(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message', sender);
  const messageParagraph = document.createElement('p');
  messageParagraph.textContent = message;
  messageElement.appendChild(messageParagraph);
  return messageElement;
}

// Function to simulate bot response (replace with your actual chatbot logic)
function simulateBotResponse(userMessage) {
  return new Promise((resolve, reject) => {
    // Simulate a delay for a more natural conversation flow
    setTimeout(() => {
      const botMessage = 'Thanks for your message! I am still under development, but I am learning.';
      resolve(botMessage);
    }, 1000); // Adjust delay as needed
  });
}

// Function to clear any previous error messages
function clearErrorMessage() {
  const errorMessage = document.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.parentNode.removeChild(errorMessage);
  }
}

// Function to display an error message (can be customized)
function displayErrorMessage(message) {
  const errorMessageElement = document.createElement('div');
  errorMessageElement.classList.add('error-message');
  errorMessageElement.textContent = message;
  chatHistory.parentNode.insertBefore(errorMessageElement, chatHistory);
}

// Function to scroll the chat history to the bottom
function scrollToBottom() {
  chatHistory.scrollTop = chatHistory.scrollHeight;
}
