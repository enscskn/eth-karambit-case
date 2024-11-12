# QBCore Karambit Case Opening System

This script is a karambit case opening system developed for the FiveM QBCore framework. Players can earn karambit knives in different skins by opening cases.

## Preview

- [YouTube](https://youtu.be/hhUI47YqbCo?si=uFmsOc6i2LzaEXLB)

## Features

- Animated case opening system
- 5 different rarity levels of skins
- Sound effects

## Installation

1. Copy the files to the `resources` folder
2. Add the following line to `server.cfg` file:

```lua
ensure eth-karambit-case
```

3. Add the following items to QBCore shared items:

```lua
['dagger_karambit'] 	     			= {['name'] = 'dagger_karambit', 					['label'] = 'Karambit', 					['weight'] = 1000, 		['type'] = 'item', 		['image'] = 'karambit.png', 				['unique'] = false, 						['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = 'Karambit Mod', ['created'] = nil, ['decay'] = 28.0},
['karambitcase'] 	     			= {['name'] = 'karambitcase', 					['label'] = 'Karambit Case', 					['weight'] = 1000, 		['type'] = 'item', 		['image'] = 'karambit_case.png', 				['unique'] = false, 						['useable'] = true, 	['shouldClose'] = true,	   ['combinable'] = nil,   ['description'] = '', ['created'] = nil, ['decay'] = 28.0},

```

## Dependencies

- QBCore Framework
- qb-inventory
- qb-core

## Rarity Levels

- Level 1 (Grey) - 35% chance
- Level 2 (Blue) - 25% chance
- Level 3 (Green) - 20% chance
- Level 4 (Purple) - 15% chance
- Level 5 (Gold) - 5% chance

## Contact

For any questions or suggestions:
- Discord: [ETHLOG Discord](https://discord.gg/VrA83Nwt8v)