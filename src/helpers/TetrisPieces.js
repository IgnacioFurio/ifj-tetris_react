const pieceL = [
    ["LDesign","LDesign","LDesign"],
    ["LDesign","_","_"],
    ["_","_","_"],
];

const pieceLRotations = [
    [
        [[0 , 0],[-1 , 1],[-2 , 2],[-1 , -1]],
        [[0 , 1],[1 , 0],[2 , -1],[-1 , 0]],
        [[0 , 2],[1 , 1],[0 , 0],[-1 , -1]],
        [[0 , -2],[0 , 0],[1 , -1],[1 , -1]],
    ]
];

const pieceJ = [
    ["JDesign","JDesign","JDesign"],
    ["_","_","JDesign"],
    ["_","_","_"],
];

const pieceJRotations = [
    [
        [[0 , 0],[-1 , 1],[-2 , 2],[-1 , -1]],
        [[0 , 1],[1 , 0],[2 , -1],[-1 , 0]],
        [[0 , 2],[1 , 1],[0 , 0],[-1 , -1]],
        [[0 , -2],[0 , 0],[1 , -1],[1 , -1]],
    ]
];

const pieceO = [
    ["ODesign","ODesign","_"],
    ["ODesign","ODesign","_"],
    ["_","_","_"],
];

const pieceORotations = [
    [
        [[0 , 0],[0 , 0],[0 , 0],[0 , 0]],
        [[0 , 0],[0 , 0],[0 , 0],[0 , 0]],
        [[0 , 0],[0 , 0],[0 , 0],[0 , 0]],
        [[0 , 0],[0 , 0],[0 , 0],[0 , 0]],
    ]
];

const pieceT = [
    ["TDesign","TDesign","TDesign"],
    ["_","TDesign","_"],
    ["_","TDesign","_"],
];

const pieceTRotations = [
    [
        [[0 , 2],[-1 , 1],[0 , 0],[-1 , -2],[0 , 1]],
        [[1 , 2],[2 , 1],[0 , 0],[0 , 0],[-1 , -1]],
        [[0 , -1],[1 , 0],[1 , 0],[0 , -1],[0 , 0]],
        [[1 , 1],[0 , 0],[0 , 0],[-2 , -1],[-1 , -2]],
    ]
];

const pieceZ = [
    ["ZDesign","ZDesign","_"],
    ["_","ZDesign","ZDesign"],
    ["_","_","_"],
];

const pieceZRotations = [
    [
        [[0 , 0],[-1 , 1],[-2 , 2],[-1 , -1]],
        [[0 , 1],[1 , 0],[0 , 0],[1 , -2]],
        [[0 , 2],[1 , 1],[0 , 0],[-1 , -1]],
        [[0 , -2],[0 , 0],[1 , -1],[1 , -1]],
    ]
];

const pieceS = [
    ["_","SDesign","SDesign"],
    ["SDesign","SDesign","_"],
    ["_","_","_"],
];

const pieceSRotations = [
    [
        [[0 , 2],[-1 , 1],[0 , -1],[-1 , 0]],
        [[0 , -1],[2 , -1],[0 , 0],[0 , 0]],
        [[0 , 1],[0 , 0],[0 , 0],[-2 , 1]],
        [[0 , -1],[2 , -1],[0 , 0],[0 , 0]],
    ]
];

export const tetrisPieces = {pieceL, pieceJ, pieceO, pieceT, pieceZ, pieceS}
export const pieceRotations = {pieceLRotations, pieceJRotations, pieceORotations, pieceTRotations, pieceZ, pieceSRotations}