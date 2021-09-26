# Sigil-Space
View Sigils of users who have direct messaged you on urbit.

This repo was made to experiment with urbit and Typescript.  
This project also contains a plain SCSS butchering of `@tlon/indigo-react`, Its barebones however it's an attempt to be a 1:1 clone of the [tlon indigo spec](https://www.figma.com/community/file/822953707012850361). I may expand on this eventually since I'm not a fan of styled components. However, I can admit my current implementation is messy & not in a position to be used.

## Connect to urbit 
```bash
# Run fakezod
urbit -F zod
# Swap out http://localhost:3000 with wherever your react app is running
# This allows your react app to hit urbit
~zod:dojo> |pass [%e [%approve-origin 'http://localhost:3000']]
```
---
**Urbit:** `~bicmed-fiprut-hansug-forruc--tanmex-lodlyd-pactul-wanzod` (I dont own a planet yet)
