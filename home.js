
const playerName = document.getElementById('name').value;
const playerNickname = document.getElementById('nickname').value;
const player = {
  name: playerName,
  nickname: playerNickname,
  score: 0,
};
localStorage.setItem('player', JSON.stringify(player));



