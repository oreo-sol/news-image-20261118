[![make.fun](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/oreo-sol/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/oreo-sol/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118)

# The World Today — Wednesday 18 November 2026

One image summing up the world news of **Wednesday 18 November 2026**, for the [make.fun news-image-20261118](https://make.fun/bounty/news-image-20261118) bounty. A newspaper-style infographic: masthead naming the day, six stories across regions and fields, each with a drawn illustration, a headline and one factual line.

## The six stories

1. **APEC opens in Shenzhen** — Xi hosts 21 leaders in China; Trump and Putin due to arrive; the Xi–Trump–Putin trilateral is set for Thursday. *(Xinhua via AJU Press, Firstpost)*
2. **Bahrain, Kuwait intercept drones** — Iranian drones intercepted a day after US jets struck an IRGC missile site on Qeshm Island. *(Reuters, Al Jazeera)*
3. **Nvidia: record $115.8B, no Huang return** — Revenue doubles year on year; the board says it will not reinstate ex-CEO Jensen Huang; Q4 guidance ~$130B. *(CNN, Dow Jones via TradingView)*
4. **Voyager 1 reaches one light-day** — First human-made object 16.1 billion miles out; a radio signal now takes 24 hours. *(NASA, USA Today)*
5. **Anthropic prices its mega-IPO** — $70–78 a share, 825m shares, up to ~$1.4tn value; trades Thursday on Nasdaq as ANT. *(Bloomberg, CNBC)*
6. **Cyclone Akvan bears down on India** — Severe storm in the Bay of Bengal; Andhra Pradesh and Odisha on alert; landfall forecast Friday. *(IMD)*

## How it was made

The image (`entry.png`, 1024×1024, PNG) was drawn programmatically with Python PIL — flat vector-style illustrations and DejaVu text, so every word is crisp and exact. No AI image generator was used. The drawing script lives in `dev/draw.py` (not part of the entry; the entry is the image plus the program that copies it).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — byte-identical on every run
```

Node 22, standard library only, no network at run time.
