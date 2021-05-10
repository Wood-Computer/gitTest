import 'jest-extended';
import { readFileSync } from 'fs';
var path = require('path');


let content = ""
beforeAll(async () => {
  var filename = path.join('docs', 'modeles', 'rdcu-jouer.puml');
  content = readFileSync(filename, 'utf-8');
  console.log(filename);
});


describe('docs/modeles/rdcu-jouer.puml', () => {
  it('should contain participant "d3:De" as d3 ', async () => {
    expect(content).toInclude('participant "d3:De" as d3');
  }); 
  it('should contain  participant "d3:De" as d3', async () => {
    expect(content).toInclude('participant "d3:De" as d3');
  }); 
  it('should contain  c->d3 : brasser()', async () => {
    expect(content).toInclude('c->d3 : brasser()');
  }); 
  it('should contain note right : selon Expert;', async () => {
    expect(content).toInclude('note right : selon Expert;');
  }); 
  it('should contain c->d3 : v3 = valeur', async () => {
    expect(content).toInclude('c->d3 : v3 = valeur');
  }); 
  it('should contain note right : selon Expert', async () => {
    expect(content).toInclude('note right : selon Expert');
  }); 
  it('should contain opt v1 + v2 + v3 <= 10', async () => {
    expect(content).toInclude('opt v1 + v2 + v3 <= 10');
  }); 

}); 


