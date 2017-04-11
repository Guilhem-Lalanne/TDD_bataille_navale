class Grid {

    constructor(gridSize) {
    
    this.gridSize = gridSize;
    this.grid = new Array();

    for(var i = 0; i < gridSize; i++) {
        this.grid[i] = new Array();
        for(var j = 0; j < gridSize; j++) {
        this.grid[i][j] = 0;
        }
    }
    }

    diplayGrid() {
        
    $.each(this.grid, function(key, value) {
        console.log(value);
    });
    }
}