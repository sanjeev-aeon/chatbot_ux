
function addBotResponse() {
    const chatPrompt = document.getElementById('chatPrompt');
    const botResponse = document.getElementById('botResponse').value;
    const botMessage = document.createElement('div');
    botMessage.textContent = `Agentforce: ${botResponse}`;
    chatPrompt.appendChild(botMessage);
    document.getElementById('botResponse').value = '';
}
function addBotResponseCell() {
    const chatPrompt = document.getElementById('chatPrompt');
    const botResponse = document.getElementById('botResponse').value;
    //const botMessage = document.createElement('div');
    //botMessage.textContent = `Bot: ${botResponse}`;
    const node=createBotmsgCell(botResponse);
    chatPrompt.appendChild(node);
    document.getElementById('botResponse').value = '';
}


function sendMessage() {
    const chatPrompt = document.getElementById('chatPrompt');
    const humanResponse = document.getElementById('chatInput').value;
    const humanMessage = document.createElement('div');
    humanMessage.textContent = `You: ${humanResponse}`;
    chatPrompt.appendChild(humanMessage);
    document.getElementById('chatInput').value = '';
}

function enter() {
    document.getElementById("chatInput").addEventListener("keypress", e => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();

        }
    });
}

/**
 * create template cell for bot's response
 * @param {*} msg 
 * @param {*} time 
 * @param {*} icon 
 * @returns cell
 */
function createBotmsgCell(msg, time, icon) {
     const template= document.getElementById("botResCell");
     const clone = template.content.cloneNode(true);
     //set msg
     const msgContainer=clone.querySelectorAll('.chat-bot-msg')[0];
     msgContainer.textContent=msg;
     //set timestamp
     const tsContainer=clone.querySelectorAll('.chat-bot-msg-timestamp-time')[0];
     const dt=new Date()
     
     tsContainer.textContent=dt.toLocaleTimeString();

     return clone;
}

// init

document.addEventListener('DOMContentLoaded',
           (e)=>{console.log(e);
            enter();

           });
