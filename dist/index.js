const piecetypes = {
    sipahi: 0,
    hathi: 1,
    ghodo: 2,
    uut: 3,
    vajir: 4,
    king: 5
};
const teamcolors = {
    black: 1,
    white: 0
};
export var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["right"] = 2] = "right";
    Direction[Direction["down"] = 3] = "down";
    Direction[Direction["left"] = 4] = "left";
})(Direction = Direction || (Direction = {}));
const chessBoard = [
    // ^ Black = 1
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.black, PieceID: 0, x: 0, y: 6 },
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.black, PieceID: 1, x: 1, y: 6 },
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.black, PieceID: 2, x: 2, y: 6 },
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.black, PieceID: 3, x: 3, y: 6 },
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.black, PieceID: 4, x: 4, y: 6 },
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.black, PieceID: 5, x: 5, y: 6 },
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.black, PieceID: 6, x: 6, y: 6 },
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.black, PieceID: 7, x: 7, y: 6 },
    { piecetype: piecetypes.hathi, teamcolor: teamcolors.black, PieceID: 0, x: 0, y: 7 },
    { piecetype: piecetypes.hathi, teamcolor: teamcolors.black, PieceID: 1, x: 7, y: 7 },
    { piecetype: piecetypes.ghodo, teamcolor: teamcolors.black, PieceID: 0, x: 1, y: 7 },
    { piecetype: piecetypes.ghodo, teamcolor: teamcolors.black, PieceID: 1, x: 6, y: 7 },
    { piecetype: piecetypes.uut, teamcolor: teamcolors.black, PieceID: 0, x: 2, y: 7 },
    { piecetype: piecetypes.uut, teamcolor: teamcolors.black, PieceID: 1, x: 5, y: 7 },
    { piecetype: piecetypes.vajir, teamcolor: teamcolors.black, PieceID: 0, x: 3, y: 7 },
    { piecetype: piecetypes.king, teamcolor: teamcolors.black, PieceID: 0, x: 4, y: 7 },
    // ^ White = 0
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.white, PieceID: 0, x: 0, y: 1 },
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.white, PieceID: 1, x: 1, y: 1 },
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.white, PieceID: 2, x: 2, y: 1 },
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.white, PieceID: 3, x: 3, y: 1 },
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.white, PieceID: 4, x: 4, y: 1 },
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.white, PieceID: 5, x: 5, y: 1 },
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.white, PieceID: 6, x: 6, y: 1 },
    { piecetype: piecetypes.sipahi, teamcolor: teamcolors.white, PieceID: 7, x: 7, y: 1 },
    { piecetype: piecetypes.hathi, teamcolor: teamcolors.white, PieceID: 0, x: 0, y: 0 },
    { piecetype: piecetypes.hathi, teamcolor: teamcolors.white, PieceID: 1, x: 7, y: 0 },
    { piecetype: piecetypes.ghodo, teamcolor: teamcolors.white, PieceID: 0, x: 1, y: 0 },
    { piecetype: piecetypes.ghodo, teamcolor: teamcolors.white, PieceID: 1, x: 6, y: 0 },
    { piecetype: piecetypes.uut, teamcolor: teamcolors.white, PieceID: 0, x: 2, y: 0 },
    { piecetype: piecetypes.uut, teamcolor: teamcolors.white, PieceID: 1, x: 5, y: 0 },
    { piecetype: piecetypes.vajir, teamcolor: teamcolors.white, PieceID: 0, x: 3, y: 0 },
    { piecetype: piecetypes.king, teamcolor: teamcolors.white, PieceID: 0, x: 4, y: 0 }, // king
];
/**
 * all 4 directions configure according to the function signature named 'findCross'
 */
export const directionConfig = {
    leftForward: { forwardOrBack: false, leftOrRight: false },
    rightForward: { forwardOrBack: false, leftOrRight: true },
    rightBack: { forwardOrBack: true, leftOrRight: false },
    leftBack: { forwardOrBack: true, leftOrRight: true }
};
/**
 * all knight's 8 possible move direction config according to the function signature named 'findKnightPosition'
 */
export const knightDirectionsConfig = {
    leftForwardSide: { leftOrRight: false, forwardOrBack: false, sideOrStreight: false },
    leftForwardStreight: { leftOrRight: false, forwardOrBack: false, sideOrStreight: true },
    leftBackSide: { leftOrRight: false, forwardOrBack: true, sideOrStreight: false },
    leftBackStreight: { leftOrRight: false, forwardOrBack: true, sideOrStreight: true },
    rightForwardSide: { leftOrRight: true, forwardOrBack: false, sideOrStreight: false },
    rightForwardStreight: { leftOrRight: true, forwardOrBack: false, sideOrStreight: true },
    rightBackSide: { leftOrRight: true, forwardOrBack: true, sideOrStreight: false },
    rightBackStreight: { leftOrRight: true, forwardOrBack: true, sideOrStreight: true },
};
/**
 * all rook's 8 possible move direction config according to the function signature named 'findOneStreight'
 */
export const rookDirectionsConfig = {
    up: { direction: Direction.up },
    right: { direction: Direction.right },
    down: { direction: Direction.down },
    left: { direction: Direction.left },
};
const findPosition = (t_position, chessBoard) => {
    const filterChessBoard = chessBoard.filter((position) => t_position.x === position.x && t_position.y === position.y);
    return filterChessBoard.length > 0 ? filterChessBoard[0] : null;
};
const isValidPosition = (position) => {
    if (position.x < 0 ||
        position.x > 7 ||
        position.y < 0 ||
        position.y > 7)
        return false;
    else
        return true;
};
export const findCrossPosition = ({ position, forwardOrBack, leftOrRight, steps }) => {
    if (!isValidPosition(position))
        return null;
    else {
        if (!forwardOrBack) {
            if (!leftOrRight) {
                const crossForwardLeft = { x: position.x - steps, y: position.y + steps };
                return isValidPosition(crossForwardLeft) ? crossForwardLeft : null;
            }
            else {
                const crossForwardRight = { x: position.x + steps, y: position.y + steps };
                return isValidPosition(crossForwardRight) ? crossForwardRight : null;
            }
        }
        else {
            if (!leftOrRight) {
                const crossBackLeft = { x: position.x + steps, y: position.y - steps };
                return isValidPosition(crossBackLeft) ? crossBackLeft : null;
            }
            else {
                const crossBackRight = { x: position.x - steps, y: position.y - steps };
                return isValidPosition(crossBackRight) ? crossBackRight : null;
            }
        }
    }
};
export const isKing = (t_position, chessBoard) => {
    return chessBoard.filter(position => {
        if (position.x === t_position.x &&
            position.y === t_position.y &&
            position.piecetype === piecetypes.king)
            return true;
        else
            return false;
    }).length > 0 ? true : false;
};
export const findKnightPosition = ({ position, forwardOrBack, leftOrRight, sideOrStreight }) => {
    if (!forwardOrBack) {
        if (sideOrStreight) {
            const upOne = { x: position.x, y: position.y + 1 };
            if (isValidPosition(upOne)) {
                if (!leftOrRight) {
                    const leftCrossUp = findCrossPosition({ position: upOne, steps: 1, ...directionConfig.leftForward });
                    return leftCrossUp;
                }
                else {
                    const rightCrossUp = findCrossPosition({ position: upOne, steps: 1, ...directionConfig.rightForward });
                    return rightCrossUp;
                }
            }
            else
                return null;
        }
        else {
            if (!leftOrRight) {
                const leftCrossUp = findCrossPosition({ position, steps: 1, ...directionConfig.leftForward });
                if (leftCrossUp) {
                    const leftOne = { x: leftCrossUp.x - 1, y: leftCrossUp.y };
                    if (isValidPosition(leftOne))
                        return leftOne;
                    else
                        return null;
                }
                else
                    return null;
            }
            else {
                const rightCrossUp = findCrossPosition({ position, steps: 1, ...directionConfig.rightForward });
                if (rightCrossUp) {
                    const rightOne = { x: rightCrossUp.x + 1, y: rightCrossUp.y };
                    if (isValidPosition(rightOne))
                        return rightOne;
                    else
                        return null;
                }
                else
                    return null;
            }
        }
    }
    else {
        if (sideOrStreight) {
            const downOne = { x: position.x, y: position.y - 1 };
            if (isValidPosition(downOne)) {
                if (!leftOrRight) {
                    const leftCrossUp = findCrossPosition({ position: downOne, steps: 1, ...directionConfig.leftBack });
                    return leftCrossUp;
                }
                else {
                    const rightCrossUp = findCrossPosition({ position: downOne, steps: 1, ...directionConfig.rightBack });
                    return rightCrossUp;
                }
            }
            else
                return null;
        }
        else {
            if (!leftOrRight) {
                const leftCrossUp = findCrossPosition({ position, steps: 1, ...directionConfig.leftBack });
                if (leftCrossUp) {
                    const leftOne = { x: leftCrossUp.x - 1, y: leftCrossUp.y };
                    if (isValidPosition(leftOne))
                        return leftOne;
                    else
                        return null;
                }
                else
                    return null;
            }
            else {
                const rightCrossUp = findCrossPosition({ position, steps: 1, ...directionConfig.rightBack });
                if (rightCrossUp) {
                    const rightOne = { x: rightCrossUp.x + 1, y: rightCrossUp.y };
                    if (isValidPosition(rightOne))
                        return rightOne;
                    else
                        return null;
                }
                else
                    return null;
            }
        }
    }
};
export const findOneStreight = ({ position, direction, teamColor, steps }) => {
    if (direction === Direction.up) {
        if (teamColor === teamcolors.white) {
            const up = { x: position.x, y: position.y + steps };
            return isValidPosition(up) ? up : null;
        }
        else {
            const up = { x: position.x, y: position.y - steps };
            return isValidPosition(up) ? up : null;
        }
    }
    else if (direction === Direction.right) {
        if (teamColor === teamcolors.white) {
            const right = { x: position.x + steps, y: position.y };
            return isValidPosition(right) ? right : null;
        }
        else {
            const right = { x: position.x - steps, y: position.y };
            return isValidPosition(right) ? right : null;
        }
    }
    else if (direction === Direction.down) {
        if (teamColor === teamcolors.white) {
            const down = { x: position.x, y: position.y - steps };
            return isValidPosition(down) ? down : null;
        }
        else {
            const down = { x: position.x, y: position.y + steps };
            return isValidPosition(down) ? down : null;
        }
    }
    else if (direction === Direction.left) {
        if (teamColor === teamcolors.white) {
            const left = { x: position.x - steps, y: position.y };
            return isValidPosition(left) ? left : null;
        }
        else {
            const left = { x: position.x + steps, y: position.y };
            return isValidPosition(left) ? left : null;
        }
    }
    else {
        return null;
    }
};
const canPawnKillKing = (teamColor, chessBoard) => {
    var killFound = null;
    var path = [];
    chessBoard.every((position) => {
        if (position.piecetype === piecetypes.sipahi && position.teamcolor === teamColor) {
            const rightCross = findCrossPosition({
                position: { x: position.x, y: position.y },
                forwardOrBack: position.teamcolor === teamcolors.black ? true : false,
                leftOrRight: true,
                steps: 1
            });
            if (rightCross && isKing(rightCross, chessBoard) && findPosition(rightCross, chessBoard).teamcolor !== teamColor) {
                killFound = position;
                path.push(position);
                return true;
            }
            const leftCross = findCrossPosition({
                position: { x: position.x, y: position.y },
                forwardOrBack: position.teamcolor === teamcolors.black ? true : false,
                leftOrRight: false,
                steps: 1
            });
            if (leftCross && isKing(leftCross, chessBoard) && findPosition(leftCross, chessBoard).teamcolor !== teamColor) {
                killFound = position;
                path.push(position);
                return true;
            }
            if (killFound)
                return false;
            else
                return true;
        }
        else
            return true;
    });
    return killFound ? {
        killFound,
        path: path
    } : null;
};
const canKnightKillKing = (teamColor, chessBoard) => {
    var killFound = null;
    var path = [];
    chessBoard.every((position) => {
        if (position.piecetype === piecetypes.ghodo && position.teamcolor === teamColor) {
            var foundInAnyDirection = null;
            Object.keys(knightDirectionsConfig).every(direction => {
                const knightMove = findKnightPosition({
                    position: { x: position.x, y: position.y },
                    ...knightDirectionsConfig[direction]
                });
                if (knightMove && isKing(knightMove, chessBoard) && findPosition(knightMove, chessBoard).teamcolor !== teamColor) {
                    foundInAnyDirection = position;
                    return false;
                }
                else
                    return true;
            });
            if (foundInAnyDirection) {
                path.push(position);
                killFound = foundInAnyDirection;
                return true;
            }
            else
                return true;
        }
        return true;
    });
    return killFound ? {
        killFound,
        path: path
    } : null;
};
const canBishopKillKing = (teamColor, chessBoard) => {
    var killFound = null;
    var path = [];
    chessBoard.every((position) => {
        var isKingKilled = null;
        let foundKingDangerPath = [];
        if (position.piecetype === piecetypes.uut && position.teamcolor === teamColor) {
            Object.keys(directionConfig).every(direction => {
                let gaps = [];
                let steps = 1;
                while (true) {
                    const cross = findCrossPosition({ position: position, steps: steps, ...directionConfig[direction] });
                    if (cross && isValidPosition(cross)) {
                        const crossPosition = findPosition(cross, chessBoard);
                        if (crossPosition && isKing(crossPosition, chessBoard) && crossPosition.teamcolor !== teamColor) {
                            isKingKilled = position;
                            break;
                        }
                        if (crossPosition)
                            break;
                        else
                            gaps.push(cross);
                    }
                    else
                        break;
                    steps++;
                }
                if (isKingKilled) {
                    foundKingDangerPath = gaps;
                    return false;
                }
                else
                    return true;
            });
        }
        else
            return true;
        if (isKingKilled) {
            foundKingDangerPath.push(position);
            path = foundKingDangerPath;
            killFound = isKingKilled;
            return false;
        }
        else
            return true;
    });
    return killFound ? {
        killFound,
        path: path
    } : null;
};
const canRookKillKing = (teamColor, chessBoard) => {
    var killFound = null;
    var path = [];
    chessBoard.every((position) => {
        var isKingKilled = null;
        let foundKingDangerPath = [];
        if (position.piecetype === piecetypes.hathi && position.teamcolor === teamColor) {
            Object.keys(rookDirectionsConfig).every(direction => {
                let gaps = [];
                let steps = 1;
                while (true) {
                    const oneStreightMove = findOneStreight({
                        position: position,
                        steps: steps,
                        teamColor: teamColor === teamcolors.white ? teamcolors.black : teamcolors.white,
                        ...rookDirectionsConfig[direction]
                    });
                    if (oneStreightMove && isValidPosition(oneStreightMove)) {
                        const streightMove = findPosition(oneStreightMove, chessBoard);
                        if (streightMove && isKing(streightMove, chessBoard) && streightMove.teamcolor !== teamColor) {
                            isKingKilled = position;
                            break;
                        }
                        if (streightMove)
                            break;
                        else
                            gaps.push(oneStreightMove);
                    }
                    else
                        break;
                    steps++;
                }
                if (isKingKilled) {
                    gaps.push(position);
                    foundKingDangerPath = gaps;
                    return false;
                }
                else
                    return true;
            });
        }
        else
            return true;
        if (isKingKilled) {
            path = foundKingDangerPath;
            killFound = isKingKilled;
            return false;
        }
        else
            return true;
    });
    return killFound ? {
        killFound,
        path: path
    } : null;
};
const canQueenKillKing = (teamColor, chessBoard) => {
    var killFound = null;
    var path = [];
    chessBoard.every((position) => {
        var isKingKilled = null;
        let foundKingDangerPath = null;
        if (position.piecetype === piecetypes.vajir && position.teamcolor === teamColor) {
            Object.keys(directionConfig).every(direction => {
                let gaps = [];
                let steps = 1;
                while (true) {
                    const cross = findCrossPosition({ position: position, steps: steps, ...directionConfig[direction] });
                    if (cross && isValidPosition(cross)) {
                        const crossPosition = findPosition(cross, chessBoard);
                        if (crossPosition && isKing(crossPosition, chessBoard) && crossPosition.teamcolor !== teamColor) {
                            isKingKilled = position;
                            break;
                        }
                        if (crossPosition)
                            break;
                        else
                            gaps.push(cross);
                    }
                    else
                        break;
                    steps++;
                }
                if (isKingKilled) {
                    gaps.push(position);
                    foundKingDangerPath = gaps;
                    return false;
                }
                else
                    return true;
            });
            if (foundKingDangerPath === null) {
                Object.keys(rookDirectionsConfig).every(direction => {
                    let gaps = [];
                    let steps = 1;
                    while (true) {
                        const oneStreightMove = findOneStreight({
                            position: position,
                            steps: steps,
                            teamColor: teamColor === teamcolors.white ? teamcolors.black : teamcolors.white,
                            ...rookDirectionsConfig[direction]
                        });
                        if (oneStreightMove && isValidPosition(oneStreightMove)) {
                            const streightMove = findPosition(oneStreightMove, chessBoard);
                            if (streightMove && isKing(streightMove, chessBoard) && streightMove.teamcolor !== teamColor) {
                                isKingKilled = position;
                                break;
                            }
                            if (streightMove)
                                break;
                            else {
                                gaps.push(oneStreightMove);
                            }
                        }
                        else
                            break;
                        steps++;
                    }
                    if (isKingKilled) {
                        gaps.push(position);
                        foundKingDangerPath = gaps;
                        return false;
                    }
                    else
                        return true;
                });
            }
        }
        else
            return true;
        if (isKingKilled) {
            path = foundKingDangerPath;
            killFound = isKingKilled;
            return false;
        }
        else
            return true;
    });
    return killFound ? {
        killFound,
        path: path
    } : null;
};
const isKingInDanger = (teamColor, chessBoard) => {
    var dangers = [];
    const isPawnDanger = canPawnKillKing(teamColor === teamcolors.white ? teamcolors.black : teamcolors.white, chessBoard);
    const isKnightDanger = canKnightKillKing(teamColor === teamcolors.white ? teamcolors.black : teamcolors.white, chessBoard);
    const isBishopDanger = canBishopKillKing(teamColor === teamcolors.white ? teamcolors.black : teamcolors.white, chessBoard);
    const isRookDanger = canRookKillKing(teamColor === teamcolors.white ? teamcolors.black : teamcolors.white, chessBoard);
    const isQueenDanger = canQueenKillKing(teamColor === teamcolors.white ? teamcolors.black : teamcolors.white, chessBoard);
    if (isPawnDanger)
        dangers.push(isPawnDanger);
    if (isKnightDanger)
        dangers.push(isKnightDanger);
    if (isBishopDanger)
        dangers.push(isBishopDanger);
    if (isRookDanger)
        dangers.push(isRookDanger);
    if (isQueenDanger)
        dangers.push(isQueenDanger);
    return dangers.length > 0 ? dangers : null;
};
const board = [
    // ^ Black = 1
    { piecetype: 0, teamcolor: 1, PieceID: 0, x: 0, y: 6 },
    { piecetype: 0, teamcolor: 1, PieceID: 1, x: 1, y: 6 },
    { piecetype: 0, teamcolor: 1, PieceID: 2, x: 2, y: 6 },
    { piecetype: 0, teamcolor: 1, PieceID: 3, x: 3, y: 6 },
    { piecetype: 0, teamcolor: 1, PieceID: 4, x: 4, y: 6 },
    { piecetype: 0, teamcolor: 1, PieceID: 5, x: 5, y: 6 },
    { piecetype: 0, teamcolor: 1, PieceID: 6, x: 6, y: 6 },
    { piecetype: 0, teamcolor: 1, PieceID: 7, x: 7, y: 6 },
    { piecetype: 1, teamcolor: 1, PieceID: 0, x: 0, y: 7 },
    { piecetype: 1, teamcolor: 1, PieceID: 1, x: 7, y: 7 },
    { piecetype: 2, teamcolor: 1, PieceID: 0, x: 1, y: 7 },
    { piecetype: 2, teamcolor: 1, PieceID: 1, x: 6, y: 7 },
    { piecetype: 3, teamcolor: 1, PieceID: 0, x: 2, y: 7 },
    { piecetype: 3, teamcolor: 1, PieceID: 1, x: 5, y: 7 },
    { piecetype: 4, teamcolor: 1, PieceID: 0, x: 4, y: 6 },
    { piecetype: 5, teamcolor: 1, PieceID: 0, x: 4, y: 7 },
    // ^ White = 0
    { piecetype: 0, teamcolor: 0, PieceID: 0, x: 0, y: 1 },
    { piecetype: 0, teamcolor: 0, PieceID: 1, x: 1, y: 1 },
    { piecetype: 0, teamcolor: 0, PieceID: 2, x: 2, y: 1 },
    { piecetype: 0, teamcolor: 0, PieceID: 3, x: 3, y: 1 },
    { piecetype: 0, teamcolor: 0, PieceID: 4, x: 4, y: 1 },
    { piecetype: 0, teamcolor: 0, PieceID: 5, x: 5, y: 1 },
    { piecetype: 0, teamcolor: 0, PieceID: 6, x: 6, y: 1 },
    { piecetype: 0, teamcolor: 0, PieceID: 7, x: 7, y: 1 },
    { piecetype: 1, teamcolor: 0, PieceID: 0, x: 0, y: 0 },
    { piecetype: 1, teamcolor: 0, PieceID: 1, x: 7, y: 0 },
    { piecetype: 2, teamcolor: 0, PieceID: 0, x: 1, y: 0 },
    { piecetype: 2, teamcolor: 0, PieceID: 1, x: 6, y: 0 },
    { piecetype: 3, teamcolor: 0, PieceID: 0, x: 2, y: 0 },
    { piecetype: 3, teamcolor: 0, PieceID: 1, x: 5, y: 0 },
    { piecetype: 4, teamcolor: 0, PieceID: 0, x: 3, y: 0 },
    { piecetype: 5, teamcolor: 0, PieceID: 0, x: 4, y: 3 } // king
];
// console.log(canPawnKillKing(teamcolors.black, board))
// console.log(canKnightKillKing(teamcolors.black, board))
// console.log(canBishopKillKing(teamcolors.black, board))
// console.log(canRookKillKing(teamcolors.black, board)) 
// console.log(canQueenKillKing(teamcolors.black, board));
console.log(isKingInDanger(teamcolors.white, board));
//# sourceMappingURL=index.js.map