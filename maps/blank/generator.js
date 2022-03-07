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

    //your code here

    return tiles;
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
    } = data;



    return {
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