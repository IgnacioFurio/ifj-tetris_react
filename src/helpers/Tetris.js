import { pieceRotations, tetrisPieces } from "./TetrisPieces";

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

export const pieceFinder = (newPiece) => {
    let pieceStyle = newPiece[0][0][1]
    if(pieceStyle !== "_"){return pieceStyle};
};

export const newPiece = (board) => {
    let newPiece = [];
    let newBoard = [];
    let pieceStyle = ""

    newPiece.push(pieceSelector());    
    newBoard = injectPiece(board, newPiece[0]);
    pieceStyle = pieceFinder(newPiece);

    let data = {newBoard: newBoard, pieceStyle: pieceStyle};

    return data;
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

export const pieceMovement = (direction, board, rotationState, pieceDesign) => {
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
    let rotation = [];
    //hardcoding the rotation piece, need to write a function that detect the piece so it's rotation can be applied
    switch (pieceDesign) {
        case "colDesign JDesign":
                rotation = pieceRotations.pieceJRotations[0];
            break;
        case "colDesign LDesign":
                rotation = pieceRotations.pieceLRotations[0];
            break;
        case "colDesign ODesign":
                rotation = pieceRotations.pieceORotations[0];
            break;
        case "colDesign TDesign":
                rotation = pieceRotations.pieceTRotations[0];
            break;
        case "colDesign ZDesign":
                rotation = pieceRotations.pieceZRotations[0];
            break;
        case "colDesign SDesign":
                rotation = pieceRotations.pieceSRotations[0];
            break;
    
        default:
            break;
    }
    console.log(rotation);

    //resetter for rotationState
    if(direction === "ArrowUp" && rotationState < 3){
        rotationState++
    } else if (direction === "ArrowUp" && rotationState === 3){
        rotationState = 0
    }

    for(let i = 0 ; i < board.length ; i++){
        for(let j = 0 ; j < board[i].length ; j++){
            let newRowIndex = 0;
            let newColIndex = 0;
            //loocking for a piece int he board
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
    console.log(rotation[rotationState][rotationIndex]);

                        newColIndex = j + rotation[rotationState][rotationIndex][1];
                        
                        if(rotationIndex < rotation[0].length){
                            rotationIndex++
                        } else if (rotationIndex === rotation[0].length){
                            rotationIndex = 0
                        }

                        break

                    default:
                        return data = {newBoard: board, rotationState: rotationState}
                };
            };
            // checking if it's fitting inside the board
            if(newRowIndex > 9 ||  newColIndex > 8 || newColIndex < 0){
                if(direction === "ArrowUp"){return data = {newBoard: board, rotationState: rotationState - 1}};
                return data = {newBoard: board, rotationState: rotationState};
            } else {
                newBoard[newRowIndex][newColIndex] = board[i][j]
            };
        };
    };

    return data = {newBoard: newBoard, rotationState: rotationState};
};



