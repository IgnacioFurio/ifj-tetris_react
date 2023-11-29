export const pieceMovement = (direction, board) => {
    let newBoard = [
        ["_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
        ["_","_","_","_","_","_","_","_","_","_"],
    ];
    
    for(let i = 0 ; i < board.length ; i++){
        for(let j = 0 ; j < board[i].length ; j++){
            let newRowIndex = 0;
            let newColIndex = 0;

            //si algun pixel no es "_" significa que es una parte de una pieza,
            if(board[i][j] !== "_"){
                switch(direction) {
                    case "ArrowDown":
                        newRowIndex = i + 1
                        newColIndex = j
                        break
                        
                    case "ArrowRight":
                        newRowIndex = i
                        newColIndex = j + 1
                        break

                    case "ArrowLeft":
                        newRowIndex = i 
                        newColIndex = j - 1
                        break

                    default:
                    };
            // asi que la movemos al nuevo tablero
            newBoard[newRowIndex][newColIndex] = board[i][j]
            };
        };
    };

    return newBoard;
};