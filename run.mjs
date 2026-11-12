// Runs an Apify Actor and returns its dataset rows.
// Needs Node 18+ and your Apify API token in the APIFY_TOKEN environment variable.
export async function run(actor, input) {
  const res = await fetch(`https://api.apify.com/v2/acts/${actor}/run-sync-get-dataset-items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.APIFY_TOKEN}` },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`${actor}: HTTP ${res.status} ${await res.text()}`);
  return res.json();
}
