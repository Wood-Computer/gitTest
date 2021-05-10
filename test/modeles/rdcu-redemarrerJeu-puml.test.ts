
import 'jest-extended';
import { readFileSync } from 'fs';
var path = require('path');


let content = ""
beforeAll(async () => {
  var filename = path.join('docs','modeles','rdcu-redemarrerJeu.puml')
  content = readFileSync(filename, 'utf-8');
});

describe('docs/modeles/rdcu-redemarrerJeu.puml', () => {

  it("should contain :JeuDeDes", async () => {
        expect(content).toInclude(":JeuDeDes");
    }); 
  
    it("should contain joueurs:", async () => {
      expect(content).toInclude("joueurs:");
    });  
   
    it("should contain Map<String,Joueur>", async () => {
      expect(content).toInclude("Map<String,Joueur>");
    });  
    
    it("should contain redemarrerJeu()", async () => {
      expect(content).toInclude("redemarrerJeu()");
    });  



}); 


