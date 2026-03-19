import { spawnSync } from "child_process";
import { existsSync, rmSync } from "fs";

for (const dir of ["allure-results"]) {
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true, force: true });
    console.log(`Cleaned ${dir}`);
  }
}

const allArgs = process.argv.slice(2);
const serve = allArgs.includes("--serve");

const tagArg = allArgs.find((arg) => arg.startsWith("--@"));
const extraArgs = allArgs.filter((arg) => arg !== "--serve" && arg !== tagArg);

if (tagArg) {
  extraArgs.push("--cucumberOpts.tags", tagArg.slice(2));
}

const result = spawnSync(
  "npx",
  ["wdio", "run", "./wdio.conf.ts", ...extraArgs],
  { stdio: "inherit", shell: true },
);

if (serve) {
  spawnSync("npx", ["allure", "serve", "allure-results"], {
    stdio: "inherit",
    shell: true,
  });
}

process.exit(result.status ?? 1);
