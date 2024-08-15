const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");
let userMessage;

const responses = {
    1: "Here are the steps to find a student's results:\n1️⃣ Log in to the website with your username and password.\n2️⃣ Select the province where the school is located.\n3️⃣ Choose the relevant district.\n4️⃣ Select the specific school.\n5️⃣ Choose the exam year.\n6️⃣ Enter your exam number or NIC number in the search bar.\n📊 Your results should be displayed.",
    2: "Welcome to our website! 🌐\nThis platform helps you manage student information, track academic progress, and facilitate communication between students, parents, and educators. It offers features like grade tracking, attendance monitoring, and much more.\n📚 Explore and make the most of our features!",
    3: "Ready to join us? Here's how to sign up:\n1️⃣ Click on the 'Sign Up' button on the homepage.\n2️⃣ Fill in your details: name, email, and create a password.\n3️⃣ Verify your email through the link we send you.\n4️⃣ Log in with your new credentials.\n🎉 You're all set to explore our website!"
};

const createChatli = (message, className) => {
    const chatli = document.createElement("li");
    chatli.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatli.innerHTML = chatContent;
    chatli.querySelector("p").textContent = message;
    return chatli;
}   

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.value = "";

    chatbox.appendChild(createChatli(userMessage, "outgoing"));
    setTimeout(() => {
        const response = responses[userMessage] || "Sorry, I didn't understand that. Please enter a number from 1 to 3.";
        chatbox.appendChild(createChatli(response, "incoming"));
    }, 600);
}

sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
