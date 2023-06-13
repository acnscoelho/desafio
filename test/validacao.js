const chai = require('chai');
const clientes = require('../index');
const expect = chai.expect;

describe('Tamanho da lista de nomes', () => {

    it('deve ter 6 itens' , () => {
        expect(clientes.length).to.equal(6);
    });
  
  });
  