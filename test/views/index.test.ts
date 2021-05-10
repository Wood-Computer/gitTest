import 'jest-extended';
import { readFileSync } from 'fs';
var path = require('path');


let content = ""
beforeAll(async () => {
  let filename=path.join('views','index.pug')
  content = readFileSync(filename, 'utf-8');
});

describe('views/index.pug', () => {
    it("should contain button.redemarrer Redémarrer", async () => {
        expect(content).toInclude("button.redemarrer Redémarrer");
    }); 
  
}); 


