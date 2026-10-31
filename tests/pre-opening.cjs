/* eslint-disable @typescript-eslint/no-require-imports -- Node integration test against the running production build. */
const assert = require("node:assert/strict");

const origin = process.env.BASE_URL || "http://127.0.0.1:3031";
const notices = {
  enquire: "We’re preparing to open. Online enquiries will be available soon. In the meantime, you’re welcome to explore Le CollectiF and what we have planned.",
  book: "Our workspaces are getting ready to welcome you. Online booking will become available closer to opening.",
  reserve: "We’re not taking table reservations just yet. We’ll let you know when reservations open.",
  host: "We’re preparing our spaces for future gatherings. Event enquiries will open as we get closer to launch.",
};

async function run() {
  const routes = [
    "/enquire", "/book", "/reserve", "/host",
    "/book?space=coworking", "/book?space=private-offices",
    "/book?space=meeting-rooms", "/book?preview=false",
    "/enquire?preview=false", "/host?preview=false",
  ];

  for (const route of routes) {
    const response = await fetch(new URL(route, origin));
    assert.equal(response.status, 200, route);
    const html = await response.text();
    const journey = route.split("?")[0].slice(1);
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
    assert.ok(main, `${route}: main content`);
    assert.ok(main.includes(notices[journey]), `${route}: exact approved notice in server HTML`);
    assert.doesNotMatch(main, /<(?:form|input|textarea|select|button|progress)\b/i, `${route}: no inactive controls`);
    assert.doesNotMatch(main, /aria-label="Progress"|mailto:|waitlist|Request received\.|ready for payment/i, `${route}: no intake or success interface`);
    for (const selector of ["name=\"description\"", "property=\"og:description\""]) {
      const tag = html.match(new RegExp(`<meta[^>]*${selector}[^>]*>`))?.[0];
      assert.ok(tag?.includes(`content="${notices[journey]}"`), `${route}: exact ${selector}`);
    }
  }
  console.log(`PASS: ${routes.length} public entry variants render exact pre-opening copy and metadata without forms, progress, contact actions or success messages. GET requests only.`);
}

run().catch((error) => { console.error(error); process.exitCode = 1; });
