// Print exchange listing announcements this account has not seen before.
// Run it on a schedule (every 10 minutes) to get an alert feed.
// Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID to also send each one to Telegram.
import { run } from '../run.mjs';

const rows = await run('cryptoretirement~crypto-exchange-new-listings', { sinceHours: 48, onlyNew: true });

for (const r of rows) {
  const text = `${r.exchange} ${r.kind} listing: ${r.symbols.join(', ') || 'see title'}\n${r.title}\n${r.url}`;
  console.log(text, '\n');
  if (process.env.TELEGRAM_BOT_TOKEN) {
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text }),
    });
  }
}
if (!rows.length) console.log('Nothing new.');
