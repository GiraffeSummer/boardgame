//tiles will be an array of pre generated blank tiles
export function generate(tiles, data, presets) {
    console.log('generating snakes and ladders')
    //some functions you might need
    const { // in [] are optional
        CreateTile, //create a tile object CreateTile('name'[, 'style'])
        defaultStay, //default stay function (if you want to clear a tile's event)
        createTurn, //create a turn object createTurn
        colors, //default player colors [0] = blue, [1] = red, etc
        GetNextPlayer, //get the next player's object
        GetRandomPlayer, //get random player, add 'true' as parameter to include self (ex: GetRandomPlayer(true))
        CreateAlert, //create an alert message CreateAlert('message'[,'style']), style can choose of 3 options: primary: blue, secondary: red, tertiary: green
        CreatePopup, //can create a modal popup, has chain functions for extra functions
        gameManager, //global events for example end of game (end game with function: gameManager.end())
    } = data;

    const tileSet = TileSet(data, tiles);

    tiles[0] = CreateTile("Start");
    tiles[3] = tileSet.ladder(13);
    tiles[8] = tileSet.ladder(30);
    tiles[20] = tileSet.ladder(41);
    tiles[23] = tileSet.ladder(47);
    tiles[27] = tileSet.ladder(83);
    tiles[50] = tileSet.ladder(66);
    tiles[71] = tileSet.ladder(30);
    tiles[79] = tileSet.ladder(90);


    tiles[16] = tileSet.snake(6);
    tiles[46] = tileSet.snake(24);
    tiles[53] = tileSet.snake(33);
    tiles[61] = tileSet.snake(18);
    tiles[63] = tileSet.snake(59);
    tiles[86] = tileSet.snake(35);
    tiles[92] = tileSet.snake(72);
    tiles[94] = tileSet.snake(74);
    tiles[97] = tileSet.snake(78);


    //adding win condition:
    gameManager.addListener('lapped', (evt, player) => {
        CreatePopup(`${player.name} has won!`, `Nice!`)
            .addButton('close', () => { }, 'tertiary')
            .onClose(() => {
                gameManager.end();
            })
            .show();
    })

    return tiles;
}

function TileSet(data, tiles) {
    const {
        CreateTile,
        CreateAlert,
    } = data;

    const MovePlayerTo = (player, target) => {
        const from = tiles[player.tile];
        from.removePlayer(player);

        player.tile = target;

        const to = tiles[player.tile];
        to.addPlayer(player);

        player.update();
        to.stay(player);
    }

    return {
        snake: (target) => {
            return CreateTile('snake ' + target, 'background-color:purple;color:white')
                .addStay(function (player) {
                    CreateAlert(`You landed on a snake, moving to tile ${target}`, 'secondary')
                    MovePlayerTo(player, target);
                })
        },
        ladder: (target) => {
            return CreateTile('ladder ' + target, 'background-color:green;color:white')
                .addStay(function (player) {
                    CreateAlert(`You landed on a ladder, moving to tile ${target}`, 'tertiary')
                    MovePlayerTo(player, target);
                })
        }
    }
}