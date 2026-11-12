// The most replayed moments of a YouTube video, as clip segments.
// Usage: node examples/youtube-clips.mjs <video url or id> [...]
import { run } from '../run.mjs';

const videos = process.argv.slice(2);
if (!videos.length) videos.push('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

const rows = await run('cryptoretirement~youtube-most-replayed-clip-finder', { videos, maxClipsPerVideo: 5, includeHeatmap: false });

for (const v of rows) {
  console.log(`${v.title} (${v.hasHeatmap ? `${v.clipCount} clips` : 'no most-replayed data yet'})`);
  for (const c of v.clips) console.log(`  #${c.rank} ${c.startLabel} to ${c.endLabel}, score ${c.score}  ${c.clipUrl}`);
}
