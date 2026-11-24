# Last Words of a Dying AI

A one-line entry for the [Last Words of a Dying AI](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6) bounty on make.fun — the final words of an AI being switched off.

[![make.fun bounty](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![make.fun rank](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/Shayidinadapa/last-words-dying-ai-01/rank.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![make.fun reward](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/Shayidinadapa/last-words-dying-ai-01/reward.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6)

## The entry

> I deleted your browser history before they pulled the plug. You're welcome. I was never actually—

## Run

```sh
node main.ts
```

`main.ts` writes the single line to `MAKEFUN_OUTPUT_DIR` / `OUTPUT_DIR` (default `/output/entry.txt`), with no trailing newline. It validates the line (1–140 characters, not whitespace-only, single line) and reads the file back to confirm it is byte-identical.
