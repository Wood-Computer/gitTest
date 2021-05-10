import 'jest-extended';
import { readFileSync } from 'fs';
var path = require('path');


let content = ""
beforeAll(async () => {
  let filename = path.join('test','jouer.test.ts');
  content = readFileSync(filename, 'utf-8');
});
 
describe('test/jouer.test.ts', () => {
    it("should contain expect(response.body.resultat.v3).toBeWithin(1, 7)", async () => {
        expect(content).toInclude("expect(response.body.resultat.v3).toBeWithin(1, 7)");
    }); 
  
}); 

 
 