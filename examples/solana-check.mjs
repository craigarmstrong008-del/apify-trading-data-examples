// Run the rug gates, the sell test and the 0-100 score on Solana tokens.
// Usage: node examples/solana-check.mjs <mint> [<mint> ...]
import { run } from '../run.mjs';

const mints = process.argv.slice(2);
if (!mints.length) mints.push('EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm');   // WIF

const rows = await run('cryptoretirement~solana-token-rug-check-and-score', { mints });

for (const r of rows) {
  console.log(`${r.symbol}: ${r.passed ? 'passed every gate' : `failed ${r.failedOn}`}, score ${r.score}, tier ${r.tier}`);
  for (const g of r.gates.filter(g => !g.passed)) console.log(`  ${g.detail}`);
}
