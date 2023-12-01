export const printBoard = (board) => {
    for(let i = 0 ; i < board.length ; i++){
        for(let j = 0 ; j < board[i].length ; j++){
            if(board[i][j] !== "_"){
                return board[i][j];
            }
        };
    };
};

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
            console.log(board);
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

                    // case "ArrowUp":
                    //     newRowIndex = i 
                    //     newColIndex = j + 1
                    //     break

                    default:
                        return board
                };
            };
            // y esta dentro del tablero
            if(newRowIndex > 9 ||  newColIndex > 9 || newColIndex < 0){
                return board;
            } else {
                // asi que la movemos al nuevo tablero
                newBoard[newRowIndex][newColIndex] = board[i][j]
            };
        };
    };
    console.log(newBoard);
    return newBoard;
};

