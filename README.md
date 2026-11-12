# Trading data Actors on Apify: usage examples

Copy-and-paste examples for eight data Actors on [Apify Store](https://apify.com/cryptoretirement). Each one is a single API call that returns JSON. No exchange API keys are needed.

| Actor | What one run returns | Example |
|---|---|---|
| [Forex News Filter & Economic Calendar](https://apify.com/cryptoretirement/forex-news-filter-economic-calendar) | This week's economic events and a "is high-impact news within N minutes" check per currency | [news-filter.mjs](examples/news-filter.mjs) |
| [Crypto Perp Funding Rate Scanner](https://apify.com/cryptoretirement/crypto-perp-funding-rate-scanner) | Funding rates, annualised yield and cross-exchange spreads on Binance, Bybit, OKX, Hyperliquid and Gate | [funding-spreads.mjs](examples/funding-spreads.mjs) |
| [Crypto Exchange New Listing Announcements](https://apify.com/cryptoretirement/crypto-exchange-new-listings) | New coin and perpetual listings from 6 exchanges, with an `isNew` flag for alerts | [listing-alerts.mjs](examples/listing-alerts.mjs) |
| [Crypto Signal Scanner](https://apify.com/cryptoretirement/crypto-perp-technical-signal-scanner) | Donchian breakouts, golden and death crosses, Supertrend flips and volatility breakouts on the top Bybit perpetuals | [signal-scan.mjs](examples/signal-scan.mjs) |
| [Crypto Session Box Levels & Liquidity Sweep Detector](https://apify.com/cryptoretirement/crypto-session-box-liquidity-sweep-detector) | Prior-day and session boxes, wick setups at the box edge, liquidity sweeps | [session-levels.mjs](examples/session-levels.mjs) |
| [Solana Token Rug Check + Coin Score](https://apify.com/cryptoretirement/solana-token-rug-check-and-score) | Twelve rug gates, a live sell-route test and a 0-100 score per token | [solana-check.mjs](examples/solana-check.mjs) |
| [DEX Pool Health Score](https://apify.com/cryptoretirement/dex-pool-health-score) | Health and rug-risk score for any liquidity pool on 100+ networks | [pool-health.mjs](examples/pool-health.mjs) |
| [YouTube Most Replayed Clip Finder](https://apify.com/cryptoretirement/youtube-most-replayed-clip-finder) | The most replayed moments of a video as ranked clip segments | [youtube-clips.mjs](examples/youtube-clips.mjs) |

## Quick start

1. Create a free [Apify](https://apify.com) account and copy your API token from Settings, then API & Integrations.
2. Clone this repo. You need Node 18 or newer. There is nothing to install.
3. Run an example:

```bash
export APIFY_TOKEN=your_token_here
node examples/news-filter.mjs
```

On Windows PowerShell use `$env:APIFY_TOKEN = 'your_token_here'`.

Every example uses the helper in [run.mjs](run.mjs), which is one `fetch` call to Apify's `run-sync-get-dataset-items` endpoint. The same call works from Python, a spreadsheet, n8n, Make or an AI agent through Apify's MCP server.

## Cost

The Actors are pay per event with no subscription. Most example runs cost between a fraction of a cent and 4 cents. Each Actor's Store page lists its prices.

## Notes

These Actors return data and analytics. Nothing here is financial advice.
