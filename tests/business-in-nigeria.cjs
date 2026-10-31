/* eslint-disable @typescript-eslint/no-require-imports -- HTTP integration test against a running build. */
const assert = require("node:assert/strict");

const origin = process.env.BASE_URL || "http://127.0.0.1:3031";

async function run() {
  const response = await fetch(new URL("/business-in-nigeria", origin));
  assert.equal(response.status, 200);
  const html = await response.text();
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert.ok(main, "server-rendered main content");
  assert.equal((main.match(/<h1\b/g) || []).length, 1, "one page H1");
  assert.equal((main.match(/<h3\b/g) || []).length, 3, "three service pillars");
  assert.match(html, /<title>Business in Nigeria · Le CollectiF<\/title>/);
  for (const selector of ['name="description"', 'property="og:description"']) {
    const tag = html.match(new RegExp(`<meta[^>]*${selector}[^>]*>`))?.[0];
    assert.ok(tag?.includes("Not yet available."), selector);
  }
  assert.match(main, /Le CollectiF has not opened yet\./);
  assert.match(main, /Business in Nigeria services are not currently available\./);
  assert.match(main, /independent professional providers under separate arrangements/);
  assert.doesNotMatch(main, /<(?:form|input|select|textarea|button|progress)\b/i);
  assert.doesNotMatch(main, /mailto:|tel:|href="\/(?:book|enquire|reserve|host)/);
  for (const heading of ["Establish Your Presence", "Navigate the Local Environment", "Connect and Grow"]) {
    assert.ok(main.includes(heading), heading);
  }
  for (const path of ["/", "/spaces"]) {
    assert.ok(main.includes(`href="${path}"`), path);
    assert.equal((await fetch(new URL(path, origin))).status, 200);
  }
  const spaces = await (await fetch(new URL("/spaces", origin))).text();
  assert.match(spaces, /href="\/business-in-nigeria"/);
  assert.match(spaces, /Explore Business in Nigeria/);
  console.log("PASS: Spaces discovery link, rendered service structure/metadata, pre-opening and independent-provider boundaries, informational links and no intake controls.");
}

run().catch((error) => { console.error(error); process.exitCode = 1; });
