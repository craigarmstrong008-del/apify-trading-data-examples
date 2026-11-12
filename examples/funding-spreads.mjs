// Where is perpetual funding highest and lowest for each asset, across 5 exchanges?
import { run } from '../run.mjs';

const rows = await run('cryptoretirement~crypto-perp-funding-rate-scanner', {
  assets: ['BTC', 'ETH', 'SOL'],
  includeSpreads: true,
});

for (const s of rows.filter(r => r.type === 'spread')) {
  console.log(`${s.base}: highest ${s.highestExchange} ${s.highestAnnualizedPct}%, lowest ${s.lowestExchange} ${s.lowestAnnualizedPct}%, spread ${s.spreadAnnualizedPct}% a year before fees`);
}
