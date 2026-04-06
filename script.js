let players = [];

function addPlayer() {
  const input = document.getElementById("playerName");
  const name = input.value;

  if (name === "") return;

  players.push(name);
  input.value = "";
  renderPlayers();
}

function renderPlayers() {
  const list = document.getElementById("playerList");
  list.innerHTML = "";

  players.forEach(player => {
    const li = document.createElement("li");
    li.textContent = player;
    list.appendChild(li);
  });
}