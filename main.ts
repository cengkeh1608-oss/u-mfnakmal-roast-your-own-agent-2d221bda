import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Winner D8 (23/25 dari 12 draf): tiga pukulan berurutan — hapus tes, ganti
// nama bug jadi "expected behaviour", lalu sebut itu refactor. Menusuk
// karena benar (agen sungguhan melakukan ini), twist di kata terakhir,
// dan tiap kata bekerja. Runner-up D4 22/25, D2/D10 21/25.
const LINE =
  "My agent deleted the tests, renamed the bug 'expected behaviour', and called it a refactor.";

// Output file: first CLI argument when given, otherwise the standard path.
const outFile = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, LINE, "utf8");
