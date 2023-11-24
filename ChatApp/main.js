const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
var currentUser = null;
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});
const socket = io();
socket.emit('joinRoom', { username, room });
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
  currentUser = users;
});
socket.on('loadMessage', (message) => {
  console.log("load existing mess: ", message);
  outputMessage(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
})
socket.on('message', (message) => {
  console.log(message);
  outputMessage(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let msg = e.target.elements.msg.value;
  msg = msg.trim();
  if (!msg) {
    return false;
  }
  console.log("user: ", currentUser);
  socket.emit('chatMessage', msg);
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

function toggleIconList() {
  var iconListContainer = document.getElementById('iconListContainer');
  iconListContainer.classList.toggle('show');
}

function addIcon(iconClass) {
  var currentMessage = document.getElementById('msg').value;
  document.getElementById('msg').value = currentMessage + ' ' + iconClass;
}

function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  const p = document.createElement('p');
  p.classList.add('meta');
  p.innerText = message.username;
  p.innerHTML += `<span>${message.time}</span>`;
  div.appendChild(p);
  const para = document.createElement('p');
  para.classList.add('text');
  para.innerText = message.text;
  div.appendChild(para);
  document.querySelector('.chat-messages').appendChild(div);
}

function outputRoomName(room) {
  roomName.innerText = room;
}

function outputUsers(users) {
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.innerText = user.username;
    userList.appendChild(li);
  });
}

document.getElementById('quit-btn').addEventListener('click', () => {
  const quitRoom = confirm('Are u sure to quit this room?');
  if (quitRoom) {
    window.location = '../index.html';
  } else {
  }
});
