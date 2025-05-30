function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  // Append user message
  appendMessage(message, "user-message");

  // Auto-reply (for demo)
  setTimeout(() => {
    const reply = "Thanks for reaching out! We'll get back to you soon.";
    appendMessage(reply, "bot-message");
  }, 800);

  input.value = "";
}

function appendMessage(message, className) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.className = `chat-message ${className}`;
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
