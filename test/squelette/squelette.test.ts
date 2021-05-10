import 'jest-extended';
import { readFileSync } from 'fs';


let content = ""
beforeAll(async () => {
  content = readFileSync('Squelette.md', 'utf-8');
});

describe('ReadmeSuqelette', () => {
  text: ";;;;"
    it("should contain D'où vient l'idée de base pour ce squelette?", async () => {
        expect(content).toInclude("D'où vient l'idée de base pour ce squelette?");
    }); 
  
    it("should contain Le Joueur demande à redémarrer l'application", async () => {
        expect(content).toInclude("Le Joueur demande à redémarrer l'application");
    });  

    it("should contain Le Système termine tous les jeux en cours et redémarre l'application", async () => {
      expect(content).toInclude("Le Système termine tous les jeux en cours et redémarre l'application");
    });  

    it("should contain - d3.valeur est devenue un nombre entier aléatoire entre 1 et 6", async () => {
      expect(content).toInclude("- d3.valeur est devenue un nombre entier aléatoire entre 1 et 6");
    });  

  it("should contain - j.nbLancersGagnés a été incrémenté si la totale de d1.valeur, d2.valeur, d3.valeur est plus petit ou égal à 10", async () => {
      expect(content).toInclude("- j.nbLancersGagnés a été incrémenté si la totale de d1.valeur, d2.valeur, d3.valeur est plus petit ou égal à 10");  
  });  


}); 


