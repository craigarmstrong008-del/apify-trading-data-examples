// Prior-day box, where price sits in it, and any liquidity sweeps in the last 24 hours.
import { run } from '../run.mjs';

const rows = await run('cryptoretirement~crypto-session-box-liquidity-sweep-detector', {
  symbols: ['BTCUSDT', 'ETHUSDT', 'SOLUSDT'],
  session: 'day',
  sweepHours: 24,
});

for (const r of rows) {
  console.log(`${r.symbol} ${r.price}: box ${r.box.low} to ${r.box.high}, mid ${r.box.mid}, price in ${r.position}, setup ${r.setupState}`);
  for (const s of r.sweeps.list) console.log(`  ${s.direction} sweep of ${s.level} at ${s.price}, ${s.minutesAgo} min ago`);
}
