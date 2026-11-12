// Should a bot trade EURUSD right now, or is a high-impact release too close?
import { run } from '../run.mjs';

const rows = await run('cryptoretirement~forex-news-filter-economic-calendar', {
  currencies: ['EUR', 'USD'],
  minImpact: 'high',
  upcomingOnly: true,
  newsWindowMinutes: 30,
});

const blocked = rows.filter(r => r.inNewsWindow);
if (blocked.length) {
  console.log('Stand aside:', blocked.map(r => `${r.currency} ${r.title} at ${r.time}`).join('; '));
} else if (rows.length) {
  console.log(`Clear. Next high-impact event: ${rows[0].currency} ${rows[0].title} in ${rows[0].minutesUntil} min`);
} else {
  console.log('Clear. No high-impact events left this week.');
}
