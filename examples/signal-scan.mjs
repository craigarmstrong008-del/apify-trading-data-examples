// Which of the top 30 Bybit perpetuals just fired a breakout, MA cross or Supertrend flip on the 4h chart?
import { run } from '../run.mjs';

const rows = await run('cryptoretirement~crypto-perp-technical-signal-scanner', {
  topN: 30,
  timeframe: '240',
  onlyWithSignals: true,
});

for (const r of rows) console.log(`${r.symbol} @ ${r.price}: ${r.signals.join(', ')}`);
if (!rows.length) console.log('No signals on the last closed bars.');
