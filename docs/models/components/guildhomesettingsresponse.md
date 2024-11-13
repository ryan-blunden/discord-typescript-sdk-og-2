# GuildHomeSettingsResponse

## Example Usage

```typescript
import { GuildHomeSettingsResponse } from "@ryan.blunden/discord/models/components";

let value: GuildHomeSettingsResponse = {
  guildId: "<value>",
  enabled: false,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `guildId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `enabled`                                                                                  | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `welcomeMessage`                                                                           | [components.WelcomeMessageResponse](../../models/components/welcomemessageresponse.md)     | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `newMemberActions`                                                                         | [components.NewMemberActionResponse](../../models/components/newmemberactionresponse.md)[] | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `resourceChannels`                                                                         | [components.ResourceChannelResponse](../../models/components/resourcechannelresponse.md)[] | :heavy_minus_sign:                                                                         | N/A                                                                                        |