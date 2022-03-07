//tiles will be an array of pre generated blank tiles
export function generate(tiles, data, presets) {
    console.log('generating')
    //some functions you might need
    const { // in [] are optional
        CreateTile, //create a tile object CreateTile('name'[, 'style'])
        //you can add .addStay(function(player){}) to add a function when a player ends on this tile
        //and .makeInteractable(function(tile, player){}) to add a function to the interact button (middle button)
        defaultStay, //default stay function (if you want to clear a tile's event)
        createTurn, //create a turn object createTurn
        colors, //default player colors [0] = blue, [1] = red, etc
        GetNextPlayer, //get the next player's object
        GetRandomPlayer, //get random player, add 'true' as parameter to include self (ex: GetRandomPlayer(true))
        CreateAlert, //create an alert message CreateAlert('message'[,'style']), style can choose of 3 options: primary: blue, secondary: red, tertiary: green
        Effects, //effects, for now only rainbow, add to style of tile
        CreatePopup, //can create a modal popup, has chain functions for extra functions
        gameManager, //global events for example end of game (end game with function: gameManager.end())
        mapInfo, //Data contained in map.json
    } = data;

    //custom own tiles
    const tileSet = TileSet(data);

    //pre generated 
    const {//these are all functions!
        atm, //can steal for a few coins
        gross, //turns the player poopy brown
        carwash, //can clean the player to their original color
        mimic, // mimics the color of another player
        backwards, //will move the player backwards insead next turn
        modifier, //will multiply the value given (uses parameter, default: 2) ex. modifier(2)
        setback, //will set the player back x amount of tiles (uses parameter, default: 2) ex. setback(2)
        bigdice,  //will make the user use a different sided dice (uses parameter, default 8) ex. bigdice(8) = d8
        addaction, //will add an action to the current turn of the player
        moreaction, //will add an action to the next turn of the player
    } = presets;

    //random generated map
    const good = [atm, carwash, modifier, bigdice, addaction, moreaction];
    const bad = [gross, mimic, backwards, setback, tileSet.gamble];

    const groupSize = 5;

    //every group has x of each
    const goodAmount = 1;
    const badAmount = 1;

    let tileMap = [CreateTile("Start", 'color:white' + Effects.background_image('https://i.pinimg.com/originals/bc/55/51/bc5551ac237a9ef4d8e9575662f2e106.gif'))]

    for (let group = 0; group < tiles.length / groupSize; group++) {
        let start = group * groupSize;
        const end = start + groupSize;
        if (group * groupSize == 0) start++;//skip start

        const tileGroup = tiles.slice(start, end);
        let picked = []
        for (let t = 0; t < goodAmount + badAmount; t++) {
            const num = randomNumU(tileGroup.length, picked);
            picked.push(num)
        }

        //pick random for bad
        for (let b = 0; b < badAmount; b++) {
            let ind = randomNum(picked);
            tileGroup[picked.splice(ind, 1)] = bad[randomNum(bad.length)]()
        }

        for (let b = 0; b < picked.length; b++) {
            tileGroup[picked[b]] = good[randomNum(good.length)]()
        }

        tileMap = [...tileMap, ...tileGroup]
    }

    //Always return tiles!!
    return tileMap;
}


//use this to return your own custom tilesets
function TileSet(data) {
    const {
        CreateTile,
        defaultStay,
        createTurn,
        colors,
        GetNextPlayer,
        CreateAlert,
        Effects,
        CreatePopup, 
        gameManager,
        mapInfo
    } = data;



    return {
        gamble: () => {
            return CreateTile('Gamble', 'background-color:purple;color:white')
                .makeInteractable(function (tile, player) {
                    const number = randomBetween(-3, 3)
                    CreateAlert(`You got ${number}!`, (number >= 1) ? 'tertiary' : 'secondary');
                    player.move(number)
                }, "Gamble")
        },
        test: () => { return CreateTile('test', 'background-color:purple') }
    }
}

//you can of course add any functions or variables you like
function randomNum(max) {
    return Math.floor(Math.random() * max)
};

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min
};

//should return unique index
function randomNumU(max, picked = []) {
    let num = randomNum(max);
    if (picked.includes(num)) num = randomNumU(max, picked);
    return num;
};