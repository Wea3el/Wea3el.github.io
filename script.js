const servers = ["Game Hub", "Dev Room", "Study Group"];
const channels = ["#general", "#voice-chat", "#memes"];
let selectedServer = servers[0];
let selectedChannel = channels[0];

const serversEl = document.getElementById("servers");
const channelsEl = document.getElementById("channels");
const chatHeaderEl = document.getElementById("chat-header");
const chatMessagesEl = document.getElementById("chat-messages");

function renderServers() {
  serversEl.innerHTML = "";
  servers.forEach(server => {
    const btn = document.createElement("button");
    btn.className = "server-btn";
    btn.textContent = server[0];
    btn.onclick = () => {
      selectedServer = server;
      renderChannels();
      renderChat();
    };
    serversEl.appendChild(btn);
  });
}

function renderChannels() {
  channelsEl.innerHTML = `<h3 style="margin: 0 0 10px 10px;">${selectedServer}</h3>`;
  channels.forEach(channel => {
    const btn = document.createElement("button");
    btn.className = "channel-btn";
    btn.textContent = channel;
    btn.onclick = () => {
      selectedChannel = channel;
      renderChat();
    };
    channelsEl.appendChild(btn);
  });
}

function renderChat() {
  chatHeaderEl.textContent = selectedChannel;
  chatMessagesEl.innerHTML = `
    <div class="chat-message">
      <div class="chat-message-user">@Alex</div>
      <div>Hey, anyone down for a game later?</div>
    </div>
    <div class="chat-message">
      <div class="chat-message-user">@Jamie</div>
      <div>Sure! Let’s go at 9.</div>
    </div>
  `;
}

renderServers();
renderChannels();
renderChat();
