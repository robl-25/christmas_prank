import { execa } from 'execa'
import { existsSync } from 'fs'

(async () => {
  try {
    console.log("Create deploy branch...");
    await execa("git", ["checkout", '-B', "gh-pages"]);
    
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("yarn", ["build"]);

    // Understand if it's dist or build folder
    const folderName = existsSync("dist") ? "dist" : "build";

    await execa("sed", ["-i", "/dist/d", ".gitignore"])
    await execa("git", ["add", folderName]);
    await execa("git", ["commit", "-m", "deploy"]);

    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "main"]);
    await execa("git", ["branch", "-D", "gh-pages"]);

    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();