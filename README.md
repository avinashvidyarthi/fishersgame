
# Fishers Game

### Summary

This is a web game to find the pairs between a set of ﬁshes. This game requires a set of 24 ﬁshers (2 of each type). In each turn the player selects 2 ﬁshers. If they are of the same type, a point is scored and they are removed from the game, otherwise they are returned to the same position. There will be a limit of 10 failures where the player will be "eliminated".


### How to play

- On the screen there are 12 pairs of different colored/type fishes(total 24).
- When you click on the first fish, its color is shown into ```1st Fish``` box and that fish is disabled.
- Then you have to guess the second fish of the same color from the remaining fishes. Its color is shown into ```2nd Fish``` box.
- If both colors/type match, both the fishes are removed from the game and you score a correct point.
- If both colors/type doesn't match, both fishes will be enabled again and you score a incorrect point.
- If you score 10 incorrect point, you will be eliminated from the game and the game will reload. 

### Technology used

- It is made using HTML and vanilla JavaScript.
- To make it reponsive according to the device, I've used Bootstrap 4.