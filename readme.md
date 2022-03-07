# How to customize your map

## `map.json`
Every map needs a `map.json` file in the root of the folder
this file contains info about the map.
The **required** values in this file are:
```json
{
  "name": "map name",
  "tiles": 40,
  "players": 4,
  "actions": 1,
  "description": "map description",
  "generator": "generator.js"
}
```

#### name: name of the map
#### tiles: amount of tiles in the map
#### players: recommended, or default amount of players on the map (can be edited in game)
#### actions: the amount of actions per turn
#### description: the description of the map
#### generator: the generator file that the map will use (most likely `generator.js`)
<br>
You can add any extra fields to this file, and they will show up in the map info box.


<br><br>

## Preset tiles
These are tiles I used for testing functionality, but feel free to use them as you need.

Code will be at the bottom of each tile, this is exactly the code as I have it.

All these are functions and have to be called to generate them: ex: `setback()`
<br>

### atm
You can interact and steal for a few coins.
(coins don't have any use as of yet)
```js
atm: () => {
    return CreateTile('ATM', 'background-color:purple;color:white;')
        .makeInteractable(
            function (tile, player) {
                if (tile.hasInteracted < 1) {
                    const stealAmount = randomNum(4) + 2;
                    CreateAlert(`You stole ${stealAmount}!`, 'tertiary');
                    tile.hasInteracted++;
                    tile.setupClearInteraction(player);
                    player.coins += stealAmount;
                    player.update();
                } else {
                    CreateAlert(`You already stole from here!`, 'secondary');
                }
            }, "Steal")
}
```
<br>

### gross
Turns the player a brown colour and they'll be "gross"
```js
gross: () => {
    return CreateTile('gross', 'background-color:maroon;color:white;')
        .addStay(function (player) {
            //change player color
            if (player.color != '#663300') {
                CreateAlert('Ew you\'re gross!', 'secondary', 1200);
                player.color = '#663300';
                //make sure not another player is changed
                this.stay = defaultStay;
                this.style = ''
            } else {
                CreateAlert('You\'re already gross!', 'primary', 1000);
            }
        })
}
```
<br>

### mimic
Mimic will copy the colour of a random player onto the current player.
```js
carwash: () => {
    return CreateTile('carwash', 'background-color:green;color:white;')
        .makeInteractable(
            function (tile, player) {
                if (player.color != colors[player.index]) {
                    CreateAlert('You got nice and clean!', 'secondary',1200);
                    player.color = colors[player.index];
                    tile.update();
                    //make sure not another player is changed
                    this.stay = defaultStay;
                    this.style = ''
                } else {
                    CreateAlert('You don\'t need to be cleaned!','primary', 1000);
                }
            }, "Clean")
}
```
<br>

### carwash
Carwash is an interactable that cleans the player to their original colour.
```js
mimic: () => {
    return CreateTile('mimic', 'background-color:green;color:white;' +Effects.rainbow)
        .addStay(function (player) {
            if (player.color == colors[player.index]) {
                let next = GetRandomPlayer();
                CreateAlert(`You mimiced the color of ${next.name}!`,'primary', 1200);
                player.color = next.color;
                //make sure not another player is changed
                this.stay = defaultStay;
                this.style = ''
            } else {
                CreateAlert('You\'re already disguised!', 'primary', 1000);
            }
        })
}
```
<br>

### backwards
When ending on this tile you'll move backwards the next turn.
```js
backwards: () => {
    return CreateTile('backwards', 'background-color:maroon;color:white;')
        .addStay(function (player) {
            if (player.currentTurn.immune) return;
            CreateAlert('You have to move backwards next turn', 'secondary';
            player.turnQueue[0].stepAmount = -1;
            //cannot be sent back next turn
            player.turnQueue[0].immune = true;
        })
}
```
<br>

### modifier
When ending on this tile you will move double next turn.
This can be given a property default `modifier(2)` to reduce/increase the modifier.
```js
modifier: (mod = 2) => {
    let color = mod > 0 ? 'green' : 'maroon';
    return CreateTile('modifier ' + mod, `background-color:${color}color:white;`)
        .addStay(function (player) {
            if (player.currentTurn.immune && mod < 0) return;
            if (mod > 0)
                CreateAlert('You get to move extra next turn', 'tertiary');
            else
                CreateAlert('You have to move backwards next turn','secondary');
            player.turnQueue[0].stepAmount = mod;
            player.turnQueue[0].immune = mod < 0;
        })
}
```
<br>

### setback
This will set the player back 2 tiles.
This can be given a property to reduce/increase the amount to set back. ex: `setback(3)` to go back 3 tiles
```js
setback: (amount = 2) => {
    return CreateTile('setback ' + amount, 'background-color:maroon;color:white;')
        .addStay(function (player) {
            if (player.currentTurn.immune) return;
            CreateAlert(`You got sent back ${amount} tiles!`, 'secondary', 1200);
            player.move(-amount);
            player.turnQueue[0].immune = true;
            //make sure not to be setback twice
            player.currentTurn.immune = true;
        })
}
```
<br>

### bigdice
Bigdice will let the user use a d8 next turn.
This also have a property to change the amount of sides the dice has ex: `bigdice(10)` to use a d10. you can of course also reduce this number.
```js
bigdice: (sides = 8) => {
    return CreateTile('big Dice', 'background-color:green;color:white;')
        .addStay(function (player) {
            CreateAlert(`You get to use a d${sides} next turn!`, 'tertiary');
            player.turnQueue[0].dice.sides = sides;
        })
}
```
<br>

### addaction
This will add an action to the **current** turn of the player.
```js
addaction: () => {
    return CreateTile('extra action', 'background-color:green;color:white;')
        .addStay(function (player) {
            CreateAlert('You get an extra action!', 'tertiary');
            player.currentTurn.actions.max += 1;
            player.currentTurn.actions.left += 1;
        })
}
```
<br>

### moreaction
This will add an action to the **next** turn of the player
```js
moreaction: () => {
    return CreateTile('extra next action', 'background-color:green;color:white;')
        .addStay(function (player) {
            CreateAlert('You get an extra action next turn!', 'tertiary');
            let newTurn = createTurn()
            newTurn.actions = { left: player.turnQueue[0].actions.left + 1, max:player.turnQueue[0].actions.max + 1 }
            player.turnQueue[0] = newTurn;
        })
}
```

<br><br>

## What is TileSet?

Tileset is a sub function of the generator function to organize your tile presets easier,
and not in the main function.
Make sure that you return an object of functions like this:

You can then access them like `tileSet.test()`


```js
return {
    test: () => { return CreateTile('test', 'background-color:purple') }
}
```

<br><br>

## WIP

<br><br>

## Functions and Objects in Generator
These are some functions and objects that you can use for creating your own tiles, functions and conditions.

### CreateTile
This is a function that will return a new tile object  
Internally managed properties or functions will have **`{managed}`**,   
these can still be used, but it is best not to modify them.
<br>

**Properties:**  
**players** - array of players currently on this tile **`{managed}`**   
**name** - this is the tile name, it will be displayed on the tile   
**stay** - function that triggers when you end up on this tile **`{managed}`**  
**style** - this is the inner style of the component, it is in plain css  
**interactable** - this is a boolean that will be used to enable features based if the tile is interactable (ex. the interact button) **`{managed}`**  
**hasInteracted** - integer of how many interactions this tile had (if > 0 then it has been interacted with), used to read if you can still interact with it, for single use tiles **`{managed}`**  
<br>

**Functions:**  
**update** - a function that is called internally to update the component, you probably do not need it, but if some UI isn't refreshing try this.  
**interact** - the function that is called internally to interact with the tile **`{managed}`**  
**makeInteractable** - add interactable property to the tile by chaining this, first is callback with properties: `tile`, `player`, and a second property with the text to put on the interact button (usage: `.makeInteractable(function(tile,player){},"interact");` It is not adviced to use arrow functions)  
**addStay** - add a stay function to the tile, this will trigger when a player ends up on this tile, it has 1 argument, which is a function. (usage: `.addStay(function(player){})`, also do not use arrow functions, you can use `this` to access the tile object)  
**setupClearInteraction** - this will setup the clear interaction, this will mean that it will reduce hasInteracted to 0 after everyone has left the tile, so if there's another player waiting, that player will also have to leave.  

### defaultStay
This is the default stay function for every tile, you can use this to replace a custom one if you want to make a tile single use for example.

### createTurn
Create a turn object,
The basic structure of ta turn object is:
```js
{
    immune: false,
    rollValue: {},
    stepAmount: 1,
    dice: { sides: 6, amount: 1 },
    actions: { max: 1, left: 0 }
}
```

It also has a few functions:  

**isNormal** - checks if a turn is unmodified, will return an object with property `normal` which is a boolean wether it's true or not, and property `modifiers` with the modified properties and their new values.

**hasActionsLeft** - checks if a turn has actions left this turn. returns boolean

**useAction** - function removes an action left, and checks if you still can, you can add an amount as parameter to use multiple actions at once.  


### colors
Colors is an array of colors, this is uses for player colors, `0 = player 1`, `1 = player 2` etc.

### GetNextPlayer
This is a function that will return the object of the next player (the player after the current player)  


### GetRandomPlayer
This is a function that will return the object of a random player,
You can include yourself, by calling it like: `GetRandomPlayer(true)`.


### CreateAlert
This function will create an alert in the game window, there's 2 parameters you can include: text, style
style options are: `primary`=blue, `secondary`=red, `tertiary`=green.  

### Effects
Effects is a selection of effects you can give your tiles (mainly tiles)  
Not many options are available yet, but the few you can use are:

**rainbow** - this will create a rainbow effect on the element.  
**background_image** - this is a **function** that can put a background image on an element: it's first property is the source/url, second optional one is cover, see css background image cover for more details

### filters
These are some tile filters that could be used, it is an object of arrays with different preset names, this will most likely be deleted as some methods changed.  

### CreatePopup
This function will create a popup object: some functions are used internally, and don't forget to call `show()` to actually show the popup.
these functions are chainable, and internally managed functions will have **`{managed}`**,   

**Functions:**  
**show** -  this will show the function, call as last chaining.  
**canCancel** - canCancel(false) will disable cancellation of the popup by clicking outside of it. When disabling: **Don't forget to add a close function**  
**hide** -  this will close the popup  **`{managed}`**  
**addButton** -  This will add a button to the popup, with 4 properties 1: `text` the text on the button, 2: `callback` will be called when the button is clicked, 3: `style` color of the button (look at [CreateAlert](#CreateAlert))
**onClose** - calling onClose will add a listener to the popup that will trigger when the popup is closed  



### gameManager
gameManager is the global message handler, and has a function to end the game.  
You can use the event system explained at [EventSystem](#EventSystem)

**events:** `eventname` [parameters]  
`lapped` [player]: triggered when a player loops around to the front (basically finishing the game) you can decide to connect an end condition to this.  
`startturn` [nextPlayer]: triggered when a new player starts their turn, parameter is the new current player.  
`ready` : triggered when the game is ready.  

**Functions:**  
**end**: this function will end the game and go back to the main menu

  
<br><br>

## Objects & functions  
<br>

### EventSystem
The event system used by multiple objects in the game.  
Internally managed properties or functions will have **`{managed}`**,  

**Properties:**  
`events` - a map of all the events and their functions.

**Functions:**  
**dispatch** - a function, which will dispatch the event, first paramater is the event name, as a string, second optional paramater is the paramaters of the event.  
**addListener** - a function to add a listener, to an event it has 3 parameters:
1: `eventname` name of event to listen on, 2: `callback`: function that will trigger when the event is dispatched, the function will havee the related parameters to the event, and except for global events in gameManager, (so tile and player) will have `this` as their respective value. 3: optional `single`: this is a boolean if set to true, this function will only work once with this event, and needs to be re listened to listen again  

### Tile
Check out [CreateTile](#CreateTile)


### Player
  
**Properties:**  
**name** -   
**turn** -   
**color** -   
**round** -   
**coins** -   
**rollHistory** -   
**currentTurn** -   
**turnQueue** -   
  
**Functions:**  
**getTile** - Get the current tile object the player is on  
**move** - move the player by a certain amount of tiles used like `player.move(x)` where x is the amount of tiles, this can be negative.  
**endTurn** - Ends the player's turn and moves on to the next player.  
**update** - a function that is called internally to update the component, you probably do not need it, but if some UI isn't refreshing try this.  