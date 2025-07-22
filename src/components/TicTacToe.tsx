import { useEffect, useState } from 'react';
import { initialArray, winningComboss } from './../constants';

const TicTacToe = () => {
    const [squares, setSquares] = useState(initialArray);
    const [isX, setIsX] = useState(false);
    const [winner, setWinner] = useState<null | "X" | "O">(null);
    const [[xWins, oWins, draw], setPlayerWins] = useState([0, 0, 0]);

    useEffect(() => {
        computeWin();
    }, [squares]);

    useEffect(() => {
        if (winner === 'X') {
            setPlayerWins([xWins + 1, oWins, draw]);
        } else if (winner === 'O') {
            setPlayerWins([xWins, oWins + 1, draw]);
        } else if (winner === null && squares.every(sq => sq !== null)) {
            setPlayerWins([xWins, oWins, draw + 1]);
        }
    }, [winner, squares]);

    const computeWin = () => {
        setIsX(prev => !prev);
        for (const combo of winningComboss) {
            const [a, b, c] = combo;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a]);
                return;
            }
        }
    };

    const onEnter = (iTh: number) => {
        if (squares[iTh] === null && winner === null) {
            setSquares((prev: any) => {
                const copy = [...prev];
                copy[iTh] = isX ? 'X' : 'O';
                return copy;
            });
        }
    };

    const rematch = () => {
        setSquares(initialArray);
        setWinner(null);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Tic Tac Toe</h2>

            <div style={styles.statusText}>
                {winner ? `🎉 Winner: ${winner}` : 'Turn: ' + (isX ? 'X' : 'O')}
            </div>

            <div style={styles.board}>
                {squares.map((square, i) => (
                    <Square key={i} value={square} onEntry={() => onEnter(i)} />
                ))}
            </div>

            <div style={styles.scoreboard}>
                <div style={styles.score}>X Wins: {xWins}</div>
                <div style={styles.score}>O Wins: {oWins}</div>
                <div style={styles.score}>Draws: {draw}</div>
            </div>

            <button style={styles.rematchBtn} onClick={rematch}>
                🔄 Rematch
            </button>
        </div>
    );
};

const Square = ({ value, onEntry }) => {
    return (
        <div style={styles.square} onClick={onEntry}>
            <span style={styles.squareText}>{value}</span>
        </div>
    );
};

// 🧾 Style Object
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        gap: '20px',
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    board: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 80px)',
        gridTemplateRows: 'repeat(3, 80px)',
        gap: '5px',
    },
    square: {
        width: '80px',
        height: '80px',
        backgroundColor: '#f2f2f2',
        border: '2px solid #999',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '28px',
        fontWeight: 'bold',
        cursor: 'pointer',
        userSelect: 'none',
    },
    squareText: {
        color: '#333',
    },
    statusText: {
        fontSize: '18px',
        fontWeight: '600',
    },
    scoreboard: {
        display: 'flex',
        gap: '20px',
        fontSize: '16px',
        fontWeight: '500',
    },
    score: {
        backgroundColor: '#eee',
        padding: '10px',
        borderRadius: '8px',
    },
    rematchBtn: {
        marginTop: '10px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default TicTacToe;
