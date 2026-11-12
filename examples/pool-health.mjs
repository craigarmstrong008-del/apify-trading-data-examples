// Score DEX liquidity pools before trading through them.
// Usage: node examples/pool-health.mjs <network:address> [...]
import { run } from '../run.mjs';

const pools = process.argv.slice(2);
if (!pools.length) pools.push('base:0xd0b53D9277642d899DF5C87A3966A349A798F224');   // USDC / WETH on Base

const rows = await run('cryptoretirement~dex-pool-health-score', { pools });

for (const r of rows) {
  if (r.error) { console.log(`${r.input}: ${r.error}`); continue; }
  console.log(`${r.network} ${r.name}: health ${r.healthScore}/100 (${r.grade}), liquidity $${Math.round(r.liquidityUsd).toLocaleString()}`);
  for (const f of r.flags) console.log(`  flag: ${f}`);
}
