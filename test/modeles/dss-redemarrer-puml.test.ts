import 'jest-extended';
import { readFileSync } from 'fs';
var path = require('path');

let content = ""
beforeAll(async () => {
  var filename=path.join('docs','modeles','dss-redemarrerJeu.puml');
  content = readFileSync(filename, 'utf-8');
});

describe('docs/modeles/dss-redemarrerJeu.puml', () => {
  it("should contain Joueur", async () => {
        expect(content).toInclude("Joueur");
    }); 
  
    it("should contain Système", async () => {
      expect(content).toInclude("Systeme");
    });  

    it("should contain redemarrerJeu()", async () => {
      expect(content).toInclude("redemarrerJeu()");
    });  

}); 


