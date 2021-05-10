import * as supertest from "supertest";
import 'jest-extended';
import app from '../src/App';

const request = supertest(app);

let testNom1 = 'Jean-Marc';
let testNom2 = 'Pierre';

beforeAll(async () => {
    await request.post('/api/v1/jeu/demarrerJeu').send({nom: testNom1});
});


describe('GET /api/v1/jeu/jouer/:id', () => {
    // plusieurs appels à jouer (pour valider la somme aléatoire)
    for (let i = 0; i < 20; i++) {
        it('responds with successful call for initialized player ' + testNom1, async () => {
          const response = await request.get('/api/v1/jeu/jouer/' + testNom1);
  
          expect(response.status).toBe(200);
          expect(response.type).toBe("application/json");
          expect(response.body.resultat.lancers).toBe(i + 1);
          expect(response.body.resultat.v1).toBeWithin(1, 7);
          expect(response.body.resultat.v2).toBeWithin(1, 7);
          expect(response.body.resultat.somme).toBe(response.body.resultat.v1 + response.body.resultat.v2);
          expect(response.body.resultat.nom).toBe(testNom1);
        });
    }

    it('Call responds with bad request when player is not intialized ' + testNom2, async () => {
        const response = await request.get('/api/v1/jeu/jouer/' + testNom2);

        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json");
        expect(response.body.error).toInclude("n'existe pas");
        expect(response.body.error).toInclude(testNom2);
    });
});