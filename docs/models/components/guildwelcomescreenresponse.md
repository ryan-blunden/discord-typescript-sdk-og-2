# GuildWelcomeScreenResponse

## Example Usage

```typescript
import { GuildWelcomeScreenResponse } from "@ryan-blunden/discord/models/components";

let value: GuildWelcomeScreenResponse = {
  welcomeChannels: [
    {
      channelId: "<value>",
      description: "brown across farmer reluctantly",
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `welcomeChannels`                                                                                              | [components.GuildWelcomeScreenChannelResponse](../../models/components/guildwelcomescreenchannelresponse.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |