import { tetrisPieces } from "./TetrisPieces";

export const pieceSelector = () => {
    switch(Math.floor(Math.random() * 6)) {
        case 0:
            return tetrisPieces.pieceJ
            break;
        case 1:
            return tetrisPieces.pieceL
            break;
        case 2:
            return tetrisPieces.pieceO
            break;
        case 3:
            return tetrisPieces.pieceS
            break;
        case 4:
            return tetrisPieces.pieceT
            break;
        case 5:
            return tetrisPieces.pieceZ
            break;
        default:
            console.log("404: Piece not found");
    };
    
};

export const pieceFinder = (board) => {
    if(board[0][3] !== "_"){return board[0][3]}
};
export const injectPiece = (board, piece) => {
    let newBoard = board;
    //we search the board from collumn 3 to 5 and rows 0 to 2
    for(let i = 0 ; i < 3 ; i++){
        for(let j = 3 ; j < 6 ; j ++){
            //setting the piece in the middle of the board
            newBoard[i][j] = piece[i][j - 3];
        };
    };

    return newBoard;
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
                        newRowIndex = i + rotation[rotationState][rotationIndex][0];
                        newColIndex = j + rotation[rotationState][rotationIndex][1];
                        
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
                if(direction === "ArrowUp"){return data = {newBoard: board, rotationState: rotationState - 1}};
                return data = {newBoard: board, rotationState: rotationState};
            } else {
                // asi que la movemos al nuevo tablero
                newBoard[newRowIndex][newColIndex] = board[i][j]
            };
        };
    };

    return data = {newBoard: newBoard, rotationState: rotationState};
};



