export const BOARD_SIZE = 550;
export const COLORS = {
    GREEN: "green",
    RED: "red",
    BLUE: "blue",
    YELLOW: "yellow",
    WHITE: "white"
}

export const PLAYER_COLORS = [
    COLORS.GREEN, COLORS.RED, COLORS.BLUE, COLORS.YELLOW
]

export const DIRECTIONS = ["N", "E", "S", "W"]
export const ARROWS = ["&darr;","&larr;","&uarr;", "&rarr;"]
// Maps
export const PLAYABLE_SPACES_MAP = [
// Green
      [6, 0, "S"], [6, 1, "S"], [6, 2, "S"], [6, 3, "S"], [6, 4, "E"],
      [7, 4, "E"], [8, 4, "E"], [9, 4, "E"], [10, 4, "S"], [10, 5, "S"], 
// red
      [10, 6, "W"], [9, 6, "W"], [8, 6, "W"], [7, 6, "W"], [6, 6, "S"],
      [6, 7, "S"], [6, 8, "S"], [6, 9, "S"], [6, 10, "W"], [5, 10, "W"],
// blue 
      [4, 10, "N"], [4, 9, "N"], [4, 8, "N"], [4, 7, "N"], [4, 6, "W"],
      [3, 6, "W"], [2, 6, "W"], [1, 6, "W"], [0, 6, "N"], [0, 5, "N"],
// yellow 
      [0, 4, "E"], [1, 4, "E"], [2, 4, "E"], [3, 4, "E"], [4, 4, "N"],
      [4, 3, "N"], [4, 2, "N"], [4, 1, "N"], [4, 0, "E"], [5, 0, "E"]
    ]

export const START_SPACES_MAP = [
        [9,1],[9,0],[10,0],[10,1],
        [9,10],[9,9],[10,9],[10,10],
        [0,10],[0,9],[1,9],[1,10],
        [0,1],[0,0],[1,0],[1,1],
      ]

export const HOME_SPACES_MAP = [
        [5,1,"green"],[5,2,"green"],[5,3,"green"],[5,4,"green"],
        [9,5,"red"],[8,5,"red"],[7,5,"red"],[6,5,"red"],
        [5,9,"blue"],[5,8,"blue"],[5,7,"blue"],[5,6,"blue"],
        [1,5,"yellow"],[2,5,"yellow"],[3,5,"yellow"],[4,5,"yellow"],           
    ]
