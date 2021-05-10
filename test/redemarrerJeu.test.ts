// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import 'jest-extended';
import { Joueur } from '../src/core/Joueur';
import * as supertest from "supertest";
import app from '../src/App';


const request = supertest(app);

let j1 = 'Jean-Marc';
let j2 = 'Pierre';

beforeAll( async () => {
  
  await request.post('/api/v1/jeu/demarrerJeu').send({nom: j1});
  await request.post('/api/v1/jeu/demarrerJeu').send({nom: j2});

});

describe('redemarrerJeu.test.ts', () => {
  it("should implement test", async () => {
    assert(false);    
    });   
}); 

describe('GET /api/v1/jeu/redemarrerJeu', () => {

  it('Scénario principal (succès) ' , async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');

    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    
  });

  it('Réinitialiser' + j1 , async () => {
    const response = await request.get('/api/v1/jeu/jouer/' + j1);

    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body.resultat.nom).toBe(j1);
    expect(response.body.resultat.lancers).toBe(0);
    expect(response.body.réussites).toBe(0);
  });

  it('Réinitialiser' + j2 , async () => {
    const response = await request.get('/api/v1/jeu/jouer/' + j2);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body.resultat.nom).toBe(j2);
    expect(response.body.resultat.lancers).toBe(0);
    expect(response.body.réussites).toBe(0);
  });

  
});


