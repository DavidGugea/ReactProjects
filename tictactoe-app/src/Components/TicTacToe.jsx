import { useState } from "react";
import Board from "./Board";

export default function TicTacToe() {
    const [board, setBoard] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);

    const [user, setUser] = useState(true); // true means that user 1 has to make then next move, false means that user2 is next.
    const [winner, setWinner] = useState('Not known yet.');

    const getWinnerString = winnerBool => {
        if (winnerBool) {
            return "Player 1 wins ";
        } else {
            return "Player 2 wins ";
        }
    };

    const resetGame = () => {
        setBoard([
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]);
        setWinner('Not known yet.');
        setUser(true);
    };

    const checkWhoWon = (currentBoard, currentUser, emptyCells) => {
        // Check each row and column
        for (let i = 0; i < 3; ++i) {
            if (currentBoard[i][0] !== '' && currentBoard[i][0] === currentBoard[i][1] && currentBoard[i][1] === currentBoard[i][2]) {
                setWinner(getWinnerString(currentUser) + "on a row.");
            }

            if (currentBoard[0][i] !== '' && currentBoard[0][i] === currentBoard[1][i] && currentBoard[1][i] === currentBoard[2][i]) {
                setWinner(getWinnerString(currentUser) + "on a column.");
            }
        }

        // Check diagonal
        if (currentBoard[0][0] !== '' && currentBoard[0][0] === currentBoard[1][1] && currentBoard[1][1] === currentBoard[2][2]) {
            setWinner(getWinnerString(currentUser) + "on the diagonal.");
        }

        // Check anti-diagonal
        if (currentBoard[0][2] !== '' && currentBoard[0][2] === currentBoard[1][1] && currentBoard[2][0]) {
            setWinner(getWinnerString(currentUser) + "on the anti-diagonal.");
        }

        if (emptyCells === 0 && winner === 'Not known yet.') {
            setWinner("Draw.");
        }
    };

    const cellClick = (i, j) => {
        if (winner !== 'Not known yet.') {
            // There is a winner.
            return;
        }

        let cellNotEmpty = false;
        let emptyCells = 0;

        let cellText = 'X'; // user 1 -- > true

        if (!user) {
            // user 2 -- > false
            cellText = 'O';
        }

        const newBoard = board.map(
            (row, ri) => {
                return row.map(
                    (cell, ci) => {
                        if (ri === i && ci === j) {
                            if (cell === '') {
                                // Only change the cell's text if it's empty.
                                // If it's not empty that means that a user has already placed an X or an O inside of it
                                // By the rules of the game, you can't replace other users' X's and O's.
                                return cellText;
                            } else {
                                cellNotEmpty = true;
                            }
                        }

                        if (cell === '') {
                            emptyCells++;
                        }

                        return cell;
                    }
                );
            }
        );

        if (!cellNotEmpty) {
            setBoard(newBoard);
            setUser(!user);
            checkWhoWon(newBoard, user, emptyCells);
        }
    };

    return (
        <div>
            <Board board={board} cellClick={cellClick} />
            <div>
                <p>Player 1: X</p>
                <p>Player 2: O</p>
                <p>Winner: {winner}</p>
            </div>
            <button onClick={resetGame}>Reset game</button>
        </div>
    );
}
