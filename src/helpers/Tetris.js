export const printBoard = (board) => {
    for(let i = 0 ; i < board.length ; i++){
        for(let j = 0 ; j < board[i].length ; j++){
            if(board[i][j] !== "_"){
                return board[i][j];
            }
        };
    };
};

export const pieceMovement = (direction, board, rotationState) => {
    let data
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
    
    let rotationIndex = 0
    let rotation =[
        [[0 , 0],[-1 , 1],[-2 , 2],[-1 , -1]], //comprobar la ultima rotacion, esta es la cero pero no tenemos acceso
        [[0 , 1],[1 , 0],[2 , -1],[-1 , 0]],
        [[0 , 2],[1 , 1],[0 , 0],[-1 , -1]],
        [[0 , -2],[0 , 0],[1 , -1],[1 , -1]],
    ];

    //probando filtros para la rotacion
    if(direction === "ArrowUp" && rotationState < 3){
        rotationState++
    } else if (direction === "ArrowUp" && rotationState === 3){
        rotationState = 0
    }

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

                    case "ArrowUp":
                        console.log("ArrowUp");
                        console.log("rotation state = " + rotationState);
                        newRowIndex = i + rotation[rotationState][rotationIndex][0];
                        console.log("row index = " + newRowIndex);
                        newColIndex = j + rotation[rotationState][rotationIndex][1];
                        console.log("col index = " + newColIndex);
                        console.log("rotation index = " + rotationIndex);
                        
                        if(rotationIndex < 3){
                            rotationIndex++
                        } else if (rotationIndex === 3){
                            rotationIndex = 0
                        }

                        break

                    default:
                        return data = {newBoard: board, rotationState: rotationState}
                };
            };
            // y esta dentro del tablero
            if(newRowIndex > 9 ||  newColIndex > 9 || newColIndex < 0){
                return data = {newBoard: board, rotationState: rotationState - 1};
            } else {
                // asi que la movemos al nuevo tablero
                newBoard[newRowIndex][newColIndex] = board[i][j]
            };
        };
    };

    return data = {newBoard: newBoard, rotationState: rotationState};
};

