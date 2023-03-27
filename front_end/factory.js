import web3 from './web3';

const instance = new web3.eth.Contract(
  JSON.parse(CharityDecentralized.interface),
  '0x68506cdfE0398cAdca23F8123Ea2ceCBC4D1FDe3'
);

export default instance;