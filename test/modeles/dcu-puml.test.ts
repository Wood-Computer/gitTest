import 'jest-extended';
import { readFileSync } from 'fs';
var path = require('path');


let content = ""
beforeAll(async () => {
  var filename = path.join('docs', 'modeles', 'dcu.puml');
  content = readFileSync(filename, 'utf-8');
  console.log(filename);
});

describe('docs/modeles/dcu.puml', () => {
    it("should contain (Redémarrer) as R #powderblue", async () => {
        expect(content).toInclude("(Redémarrer) as R #powderblue");
    }); 
  
    it("should contain J -- R", async () => {
      expect(content).toInclude("J -- R"); 
    });  

}); 


