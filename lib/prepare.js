import path from "path";
import { move } from "fs-extra";
import { execa } from "execa";

export default async (pluginConfig, context) => {
    const {
    cwd,
    options: { repositoryUrl },
    nextRelease: { gitTag, gitHead, notes, version },
    logger,
    } = context;
  

  logger.log("Write version %s to package.json in %s", version, cwd);

  const versionResult = execa(
    "npm",
    ["version", version, "--userconfig", npmrc, "--no-git-tag-version", "--allow-same-version"],
    {
      cwd: cwd,
      env,
      preferLocal: true,
    }
  );
  versionResult.stdout.pipe(stdout, { end: false });
  versionResult.stderr.pipe(stderr, { end: false });

  await versionResult;
}
