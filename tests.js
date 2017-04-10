
/* MOCHA TEST */

mocha.setup('bdd');

var expect = chai.expect; // faites ça soit pour expect ET assert, soit pour aucun ; avec un seul des deux on a un peu l'impression, dans votre code, que vous utilisez des libs différentes

/*describe('Teste de la function test', function() {
    it('really runs', function() {
    expect(test()).to.equal(9);
    });
});*/

describe("Test de la classe 'Grid'", function() {

    let oGrid;

    beforeEach(() => {
        oGrid = new Grid();
    })

    it("La grille est un tableau", function() {
        chai.assert.isArray(oGrid.grid);
    })

    it("La grille n'est pas null", function() {
        expect(oGrid.grid).to.not.be.null;
    })


})

describe("Test sur la classe 'Boat'", function() {

    beforeEach(() => {
        let testBoat = new Boat(1,1,1,2,2,0,5);
    })

    /*it("Le bateau n'est pas en dehors de la grille", function() {
        chai.assert.isOk('everything', 'everything is ok');
    })*/
})

describe("Test sur la classe 'Player'", function() {

    let oPlayer;

    beforeEach(() => {
        oPlayer = new Player();
    })

    it("oPlayer est un objet", function() {
        //chai.assert.ifError(oPlayer.attack(-1,-1,0))('everything', 'everything is ok');
        chai.assert.typeOf(oPlayer, 'object');

    })
})

describe("Test la fonction d'attaque", function() {

    /*it("reponse envoyé", function() {
        chai.assert.isOk(askAttackPosition());
    })

    it("retourne un tableau de position", function() {
        chai.assert.isArray(askAttackPosition());
    })*/

})

mocha.run();

/* END MOCHA */
