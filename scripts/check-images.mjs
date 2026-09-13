import { readFileSync } from "node:fs";

const files = ["lib/images.ts", "lib/content.ts"];
const ids = new Set();
for (const f of files) {
  const txt = readFileSync(f, "utf8");
  for (const m of txt.matchAll(/"(\d{10,}-[a-z0-9]+)"/g)) ids.add(m[1]);
}

const list = [...ids];
console.log(`Checking ${list.length} image ids...`);
const bad = [];
await Promise.all(
  list.map(async (id) => {
    const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=200&q=60`;
    try {
      const res = await fetch(url, { method: "GET" });
      if (!res.ok) bad.push(`${id} -> ${res.status}`);
    } catch (e) {
      bad.push(`${id} -> ERR ${e.message}`);
    }
  })
);

if (bad.length) {
  console.log("BAD IMAGES:");
  for (const b of bad) console.log("  " + b);
} else {
  console.log("All images OK");
}
