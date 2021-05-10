import 'jest-extended';
import { readFileSync } from 'fs';
var path = require('path');


let content = ""
beforeAll(async () => {
  var filename = path.join('docs', 'modeles', 'mdd.puml');
  content = readFileSync(filename, 'utf-8');
  console.log(filename);
});

describe('docs/modeles/mdd.puml', () => {
    it('should contain  JeuDeDes "1" -- "3" De : inclut >', async () => {
        expect(content).toInclude('JeuDeDes "1" -- "3" De : inclut >');
    }); 
}); 


