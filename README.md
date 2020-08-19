# owoify-minecraft

OWOifier code adapted from https://owoifier--black-is-back.repl.co/
---
## Requirements
The program requires:
  - Node.js - download [here](https://nodejs.org/en/download/)
  - a Minecraft language file in JSON format, by default `en_us.json` in this directory (adjusted by setting `IFILE` in `index.js`).
    You can find it in:
      * `~/.minecraft/versions/<version>/<version>/assets/minecraft/lang/` if you're on Linux or
      * `%APPDATA%\.minecraft\versions\<version>\<version>\assets\minecraft\lang\` if you're on Windows,
    where `<version>` is the Minecraft version (the included langfile comes from version 1.16.1).
## Running
After navigating to this directory, run `node .`. This shouldn't take too long.

The program should produce `out.json` (can be changed by setting `OFILE` in `index.js`). This is the output language file - which should be moved into a resource pack.
