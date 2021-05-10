import 'jest-extended';
import app from '../../src/App';
import { readFileSync } from 'fs';
var path = require('path');


let content = ""
beforeAll(async () => {
  let filename=path.join('public','lib','main.js')
  content = readFileSync(filename, 'utf-8');
});

describe('public/lib/main.js', () => {
  it("should contain $('button.redemarrer').click(function () {", async () => {
    expect(content).toInclude("$('button.redemarrer').click(function () {");
}); 
it("should contain $.get('/api/v1/jeu/redemarrerJeu'", async () => {
  expect(content).toInclude("$.get('/api/v1/jeu/redemarrerJeu'");
}); 

}); 


