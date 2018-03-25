import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x27f3c5686f56078981487370bb647a0B1c6Eb71b'
);

export default instance;
