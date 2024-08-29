import fs from "fs/promises";

if (process.argv.length < 3) {
  console.log("Usage: node index.mjs <file-path>");
  process.exit(1);
}

const filePath = process.argv[2];

try {
  const data = await fs.readFile(filePath, "utf-8");
  const wordCount = data.split(/\s+/).filter((word) => word.length > 0).length;
  console.log(`The entered file contains ${wordCount} words.`);
} catch (err) {
  console.error("Error reading file");
  process.exit(1);
}
