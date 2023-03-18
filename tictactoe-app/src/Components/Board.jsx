export default function Board({ board, cellClick }) {
    const boardCells = board.map(
        (row, rowIndex) => {
            return row.map(
                (cell, cellIndex) => {
                    return <button key={Math.floor(Math.random()*10000)} onClick={() => cellClick(rowIndex, cellIndex)}>{cell}</button>;
                }
            );
        }
    );

    return (
        <div id="tictactoe-board">
            {boardCells}
        </div>
    );
}
