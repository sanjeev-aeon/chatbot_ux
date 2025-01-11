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
    const node = createBotmsgCell(botResponse);
    replaceThinkingCell(node);
    // chatPrompt.appendChild(node);
    document.getElementById('botResponse').value = '';
}


function sendMessage() {
    const chatPrompt = document.getElementById('chatPrompt');
    const humanResponse = document.getElementById('chatInput').value;
    // const humanMessage = document.createElement('div');
    // humanMessage.textContent = `You: ${humanResponse}`;
    const cell = createHumanMsgCell(humanResponse);
    chatPrompt.appendChild(cell);
    document.getElementById('chatInput').value = '';
    // thinking status
    const thinkingCell = createThinkingCell('Agentforce is responding...');
    chatPrompt.append(thinkingCell);
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
 * @returns cell
 */
function createBotmsgCell(msg) {
    const template = document.getElementById("botResCell");
    const clone = template.content.cloneNode(true);
    //set msg
    const msgContainer = clone.querySelectorAll('.chat-bot-msg')[0];
    msgContainer.textContent = msg;
    //set timestamp
    const tsContainer = clone.querySelectorAll('.chat-bot-msg-timestamp-time')[0];
    const dt = new Date()

    tsContainer.textContent = dt.toLocaleTimeString();

    return clone;
}
/**
 * create template cell for human response
 * @param {*} msg 
 * @returns cell
 */
function createHumanMsgCell(msg) {
    const template = document.getElementById("humanResCell");
    const clone = template.content.cloneNode(true);
    //set msg
    const msgContainer = clone.querySelectorAll('.chat-human-msg')[0];
    msgContainer.textContent = msg;
    //set timestamp
    const tsContainer = clone.querySelectorAll('.chat-human-msg-timestamp-time')[0];
    const dt = new Date()

    tsContainer.textContent = dt.toLocaleTimeString();

    return clone;
}
/**
 * create template cell for thinking
 * @param {*} msg 
 * @returns cell
 */
function createThinkingCell(msg) {
    const template = document.getElementById("thinkingResCell");
    const clone = template.content.cloneNode(true);
    //set msg
    // const msgContainer = clone.querySelectorAll('.chat-thinking-msg')[0];
    // msgContainer.textContent = msg;
    return clone;
}
/**
 * create template cell for botJoined msg
 * @returns cell
 */
function botJoinedCell() {
    const template = document.getElementById("botJoinedCell");
    const clone = template.content.cloneNode(true);
    //set timestamp
    const tsContainer = clone.querySelectorAll('.chat-bot-msg-timestamp-time')[0];
    const dt = new Date()
    tsContainer.textContent = dt.toLocaleTimeString();

    return clone;
}

function initPrompt() {
    const botjoinedMsgCell = botJoinedCell();
    const chatPrompt = document.getElementById('chatPrompt');
    chatPrompt.appendChild(botjoinedMsgCell);
}

/**
 * Replace thinking node
 * @param {*} node 
 */
function replaceThinkingCell(node) {
    const chatPrompt = document.getElementById('chatPrompt');
    const thinkingCell = chatPrompt.querySelectorAll('.chat-thinking-msg-cell')[0];
    if (thinkingCell) {
        thinkingCell.replaceWith(node);
    }else{
        chatPrompt.appendChild(node)
    }
}

// init

document.addEventListener('DOMContentLoaded',
    (e) => {
        console.log(e);
        initPrompt();
        enter();

    });