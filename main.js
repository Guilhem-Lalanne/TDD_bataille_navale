	//var grid = new Array();

	/* MAIN SCRIPT */

	function test() {
		return 10;
	}

	function refreshScreen() {

		console.clear();
		console.log("JOUEUR 1");
		oGridPlayer1.diplayGrid();
		console.log("JOUEUR 2");
		oGridPlayer2.diplayGrid();
	}

    class Player {

        constructor(name) {
            this.name = name;
            this.listBoat = new Array();
        }

		attack(x,y,numGrid) {

		}

    }

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

	let oGridPlayer1 = new Grid(5);
	let oGridPlayer2 = new Grid(5);

	class Boat {

		constructor(playerId,startX,startY, width, lenght) {
			this.playerId = playerId;
			this.startX = startX;
			this.startY = startY;
			this.width = width;
			this.lenght = lenght;
		}

		setBoat() {

			for(var i = 0; i < this.width; i++){
				for(var j = 0; j < this.lenght; j++) {

					oGridPlayer1.grid[this.startX+j][this.startY+i] = 1;
				}
			}

			refreshScreen();
		}
	}

    var oPlayer1 = new Player();
	var boat1J1 = new Boat(1,1,1,2,2,0,5);
    
    oPlayer1.listBoat.push(boat1J1);

	boat1J1.setBoat();

	function askAttackPosition() {

		try {
			var attackPosition = prompt("Saisir une position d'attaque (x,y)", "x,y");
			var attackPosition = attackPosition.split(",");
			console.log(attackPosition);
			return attackPosition;
		} catch(err) {
			return false;
		}

	}
	

	var run = true;
	var j = 1;
	
	do {
		console.log("Tour du joueur "+j);
		position = askAttackPosition();
		refreshScreen();
		if(position == "x,y") {
			run = false;
		}
		j++;

		if(j>2) {
			j=1
		}
	} while(run);

	//var boat1 = new boat(2,2,"hor",1,1,2);

	/* END MAIN SCRIPT */