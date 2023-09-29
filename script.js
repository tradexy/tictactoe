let currentPlayer = '❌';
const board = Array.from(Array(9).keys());

document.querySelectorAll('.box').forEach(box => box.addEventListener('click', boxClicked));
document.getElementById('reset').addEventListener('click', resetGame);

// Auto-start the game
resetGame();

function boxClicked(e) {
  const id = e.target.id;
  if (!board[id]) {
    board[id] = currentPlayer;
    document.getElementById(id).innerText = currentPlayer;
    const winningCombination = checkWin();
    if (winningCombination) {
      alert(`${currentPlayer} wins!`);
      // Play the winning sound here (uncomment the next line)
      // winningSound.play();
      winningCombination.forEach(index => {
        document.getElementById(index).style.backgroundColor = 'red';
      });
      resetGame();
    } else if (board.every(cell => cell)) {
      alert('Draw!');
      resetGame();
    }
    currentPlayer = currentPlayer === '❌' ? '⭕' : '❌';
  }
}

function checkWin() {
  const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let combination of winCombination) {
    if (combination.every(index => board[index] === currentPlayer)) {
      return combination;
    }
  }
  return null;
}

function resetGame() {
  board.fill(null);
  document.querySelectorAll('.box').forEach(box => {
    box.innerText = '';
    box.style.backgroundColor = '';
  });
}
