
/*var assert = require('assert');


exports['ceci est un test'] = function(assert) {
    assert.equal(1, 1, 'est egale');
}*/


/* MOCHA TEST */
var gridClass = require("../grid.js");
var oGridClass = new gridClass();

var mocha = require('mocha');
//var chai = require('chai');

//mocha.setup('bdd');

//var expect = chai.expect; // faites ça soit pour expect ET assert, soit pour aucun ; avec un seul des deux on a un peu l'impression, dans votre code, que vous utilisez des libs différentes

/*describe('Teste de la function test', function() {
    it('really runs', function() {
    expect(test()).to.equal(9);
    });
});*/

var assert = require('assert');

describe('Test sur la classe "GRID"', function() {

    var oGrid = new oGridClass.Grid(5);

    it('La grille est un tableau', function() {

      assert.isArray(oGrid.grid);

    });
});



// describe("Test de la classe 'Grid'", function() {

//     var oGrid;
//     var size = 5;

//     beforeEach(function() {
//         oGrid = new Grid(size);
//     })

//     it("La grille est un tableau", function() {
//         chai.assert.isArray(oGrid.grid);
//     })

//     // it("La grille n'est pas null", function() {
//     //     expect(oGrid.grid).to.not.be.null;
//     // })

//     // it("La grille ne contient pas de -1", function() {
//     //     assert.notEqual(oGrid.grid[3][1], -1, 'these numbers are not equal');
//     //     // uncomplete
//     // })

//     // it("La grille ne contient pas de nombres négatifs", function() {
//     //     for (var i = 0; i < size; i++) {
//     //         for (var j = 0; j < size; j++) {
//     //             assert.isAtLeast(oGrid.grid[i][j], 0, 'greater  than or equal to 0');
//     //         }
//     //     }
//     // })

// })

// describe("Test sur la classe 'Boat'", function() {

//     beforeEach(function() {
//         var testBoat = new Boat(1,1,1,2,2,0,5);
//     })

//     /*it("Le bateau n'est pas en dehors de la grille", function() {
//         chai.assert.isOk('everything', 'everything is ok');
//     })*/
// })

// describe("Test sur la classe 'Player'", function() {

//     var oPlayer;

//     beforeEach(() => {
//         oPlayer = new Player();
//     })

//     it("oPlayer est un objet", function() {
//         //chai.assert.ifError(oPlayer.attack(-1,-1,0))('everything', 'everything is ok');
//         chai.assert.typeOf(oPlayer, 'object');

//     })
// })

// describe("Test la fonction d'attaque", function() {

//     /*it("reponse envoyé", function() {
//         chai.assert.isOk(askAttackPosition());
//     })

//     it("retourne un tableau de position", function() {
//         chai.assert.isArray(askAttackPosition());
//     })*/

//     it("Les coordonnées saisies sont correctes", function(){
//         //chai.assert.
//     })

// })

//mocha.run();

/* END MOCHA */
