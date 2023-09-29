let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';

document.addEventListener('DOMContentLoaded', () => {
    const innerCells = document.querySelectorAll('.inner-cell');
    innerCells.forEach((cell, index) => {
        cell.addEventListener('click', function() {
            const row = Math.floor(index / 3);
            const col = index % 3;

            if (board[row][col] === '') {
                board[row][col] = currentPlayer;
                this.textContent = currentPlayer;

                if (checkWin(row, col)) {
                    alert(`${currentPlayer} wins!`);
                    resetBoard(innerCells);
                } else if (board.flat().every(cell => cell !== '')) {
                    alert("It's a draw!");
                    resetBoard(innerCells);
                }

                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });

    document.querySelector('#reset-button').addEventListener('click', () => {
        resetBoard(innerCells);
    });
});

function checkWin(row, col) {
    if (board[row].every(cell => cell === currentPlayer)) return true;
    if (board.map(r => r[col]).every(cell => cell === currentPlayer)) return true;
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) return true;
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) return true;

    return false;
}

function resetBoard(cells) {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
}
