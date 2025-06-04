const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector("#send-btn");
const chatbox = document.querySelector(".chatbox");

const createChatLi = (message, className) => {
    const li = document.createElement("li");
    li.classList.add("chat", className);
    li.innerHTML = className === "outgoing"
        ? `<p>${message}</p>`
        : `<span class="material-symbols-outlined">message</span><p>${message}</p>`;
    return li;
};

const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Append user message
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = "";

    // Append thinking message
    const thinking = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(thinking);

    fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
    })
    .then(res => res.json())
    .then(data => {
        thinking.querySelector("p").textContent = data.reply || "Something went wrong.";
    })
    .catch(err => {
        thinking.querySelector("p").textContent = "Error: " + err.message;
    });
};

sendChatBtn.addEventListener("click", handleChat);