import 'jest-extended';
import app from '../../src/App';
import { readFileSync } from 'fs';
var path = require('path');


let content = ""
beforeAll(async () => {
  let filename=path.join('src','core','jeuDeDes.ts')
  content = readFileSync(filename, 'utf-8');
});

describe('src/core/jeuDeDes.ts', () => {
    it("should contain redemarrerJeu() {", async () => {
        expect(content).toInclude("redemarrerJeu() {");
    }); 
  
    it("should contain this.joueurs.clear()", async () => {
        expect(content).toInclude("this.joueurs.clear()");
    });  

    it("should contain this.jeu.redemarrerJeu()", async () => {
      expect(content).toInclude("this.jeu.redemarrerJeu()");
    });  
 
    it("should contain this.d3 = new De()", async () => {
      expect(content).toInclude("this.d3 = new De()");
    });
    it("should contain this.d3.brasser()", async () => {
      expect(content).toInclude("this.d3.brasser()");
    });
    it("should contain let v3 = this.d3.valeur", async () => {
      expect(content).toInclude("let v3 = this.d3.valeur");
    });
    it("should contain let somme = v1 + v2 + v3", async () => {
      expect(content).toInclude("let somme = v1 + v2 + v3");
    });
    it("should contain <= 10", async () => {
      expect(content).toInclude("<= 10");
    });
    it("should contain v3: v3", async () => {
      expect(content).toInclude("v3: v3");
    });
}); 


