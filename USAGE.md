<!-- Start SDK Example Usage [usage] -->
```typescript
import { Discord } from "@ryan.blunden/discord";

const discord = new Discord({
  botToken: process.env["DISCORD_BOT_TOKEN"] ?? "",
});

async function run() {
  const result = await discord.oauth2.getMyApplication();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->