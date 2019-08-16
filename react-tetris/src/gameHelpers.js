export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y += 1) {
        for (let x = 0; x < player.tetromino[0].length; x += 1) {
            // check that were on an actual tetromino cell
            if (player.tetromino[y][x] !== 0) {
                // check that move is inside game area height (y)
                // shouldnt go through bottom of game area
                // check that move is inside the game are width (x)
                // check that the cell we are attempting to move to is not set to clear

                if (!stage[y + player.pos.y + moveY] || !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] || stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear') {
                    return true;
                }
            }
        }
    }
}