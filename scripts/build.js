const fs = require("fs-extra");
const path = require("path");
const cp = require("child_process");
const dist = path.join(__dirname, "../dist");
function clear() {
  fs.emptyDirSync(dist);
}

function translateTs2Js() {
  cp.execSync("npx tsc -p tsconfig.build.json", {
    cwd: path.resolve(__dirname, ".."),
  });
}

function copyAsserts() {
  fs.copySync(
    path.join(__dirname, "../src/components"),
    path.join(__dirname, "../dist/components"),
    {
      filter: (name) => {
        return name.indexOf(".ts") === -1;
      },
    }
  );
}

function exec() {
  console.log("编译开始");
  clear();
  translateTs2Js();
  copyAsserts();
  console.log("编译结束");
}

exec();
// console.log(process.env)