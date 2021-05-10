import 'jest-extended';
import { readFileSync } from 'fs';
var path = require('path');


let content = ""
beforeAll(async () => {
  let filename=path.join('src','routes','jeuRouter.ts')
  content = readFileSync(filename, 'utf-8');
});

describe('src/routes/jeuRouter.ts', () => {
    it("should contain this.router.get('/redemarrerJeu', this.redemarrerJeu.bind(this))", async () => {
        expect(content).toInclude("this.router.get('/redemarrerJeu', this.redemarrerJeu.bind(this))");
    }); 
  
    it("should contain redemarrerJeu(req: Request, res: Response, next: NextFunction) {", async () => {
        expect(content).toInclude("redemarrerJeu(req: Request, res: Response, next: NextFunction) {");
    });  

    it("should contain this.jeu.redemarrerJeu()", async () => {
      expect(content).toInclude("this.jeu.redemarrerJeu()");
  });  
 
  it("should contain resultat.v3", async () => {
    expect(content).toInclude("resultat.v3");
  });
}); 


