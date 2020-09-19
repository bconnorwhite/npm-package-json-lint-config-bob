export default {
  "rules": {
    "require-name": "error",
    "require-version": "error",
    "require-description": "error",
    "require-license": "error",
    "require-author": "error",
    "require-homepage": "warning",
    "require-repository": "error",
    "require-keywords": "warning",
    "require-files": "error",
    "require-main": "error",
    "require-scripts": "warning",
    "bin-type": "warning",
    "bundledDependencies-type": "warning",
    "config-type": "warning",
    "cpu-type": "warning",
    "dependencies-type": "warning",
    "description-type": "warning",
    "devDependencies-type": "warning",
    "directories-type": "warning",
    "engines-type": "warning",
    "files-type": "warning",
    "homepage-type": "warning",
    "keywords-type": "warning",
    "license-type": "warning",
    "main-type": "warning",
    "man-type": "warning",
    "name-type": "warning",
    "optionalDependencies-type": "warning",
    "os-type": "warning",
    "peerDependencies-type": "warning",
    "preferGlobal-type": "warning",
    "private-type": "warning",
    "repository-type": "warning",
    "scripts-type": "warning",
    "version-type": "warning",
    "no-archive-dependencies": "warning",
    "no-file-dependencies": "warning",
    "no-git-dependencies": "warning",
    "prefer-alphabetical-dependencies": "error",
    "no-archive-devDependencies": "warning",
    "no-file-devDependencies": "warning",
    "no-git-devDependencies": "warning",
    "prefer-alphabetical-devDependencies": "error",
    "prefer-alphabetical-bundledDependencies": "error",
    "prefer-alphabetical-optionalDependencies": "error",
    "prefer-alphabetical-peerDependencies": "error",
    "prefer-alphabetical-scripts": "error",
    "prefer-scripts": ["warning", [
      "build",
      "postversion",
      "prepublishOnly",
      "test"
    ]],
    "description-format": ["warning", {
      "requireCapitalFirstLetter": true,
      "forbidEndingPeriod": true
    }],
    "name-format": "error",
    "version-format": "error",
    "prefer-property-order": ["error", [
      "name",
      "version",
      "description",
      "license",
      "private",
      "author",
      "homepage",
      "repository",
      "contributors",
      "keywords",
      "main",
      "bin",
      "scripts",
      "dependencies",
      "devDependencies",
      "peerDependencies",
      "config",
      "workspaces",
      "publishConfig"
    ]],
    "no-duplicate-properties": "error",
    "prefer-no-optionalDependencies": "error"
  }
}
