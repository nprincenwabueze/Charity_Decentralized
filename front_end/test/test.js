const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CharityFactory.json');
const compiledCharity = require('../ethereum/build/Charity.json');

let accounts;
let factory;
let charityAddress;
let charity;

beforeEach( async () => {
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({ data: compiledFactory.bytecode })
  .send({ 
    from: accounts[0],
    gas: '3000000'});

  await factory.methods.createCharity().send({
    from: accounts[0],
    gas: '3000000'});
  [charityAddress] = await factory.methods.getDeployedCharity().call();

  charity = await new web3.eth.Contract(
    JSON.parse(compiledCharity.interface),
    charityAddress
  );
});

describe('Charity Smart Contract', () => {
  it('It deploys a factory and a charity', () => {
    assert.ok(factory.options.address);
    assert.ok(charity.options.address);
  });

  it('When a user donates some amount of ether in the system, charity count will go up by one', async () => {
      await charity.methods
      .contributeMessage('I love you guys', 'Vince Howard', 100 ).send({ 
        value: web3.utils.toWei('1', 'ether'),
        from: accounts[0],
        gas: '1000000'
      });
      count = await charity.methods.charityCount().call()
      assert.equal(count, 1);
    });
});