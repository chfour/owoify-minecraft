# owoify-minecraft

What.

OWOifier code adapted from <https://owoifier--black-is-back.repl.co/>

## Premade resource pack

If for some reason you can't run this / you're too lazy to, go [here](https://github.com/m1ch4ll064/owoify-minecraft/releases) to download a premade `.zip`. Drop this into your resource packs directory.

## Requirements

The program requires:

- Node.js - download [here](https://nodejs.org/en/download/)
- a Minecraft language file in JSON format, by default `en_us.json` in this directory (adjusted by setting `IFILE` in `index.js`).
  You can find it in:
  - `~/.minecraft/versions/<version>/<version>/assets/minecraft/lang/` if you're on Linux or
  - `%APPDATA%\.minecraft\versions\<version>\<version>\assets\minecraft\lang\` if you're on Windows,
  where `<version>` is the Minecraft version.
  
  The included langfile comes from version 1.16.1.

## Running

After navigating to this directory, run `node .`. This shouldn't take too long.

The program should produce `en_us.json` in the `uwu/assets/minecraft/lang/` directory. (can be changed by setting `OFILE` & `ODIR` in `index.js`)

The directory `uwu/` is the output resource pack - it should be moved your resource pack directory. You can compress this directory into a `.zip` archive, but this is not necessary.

Enjoy or something, idk.
