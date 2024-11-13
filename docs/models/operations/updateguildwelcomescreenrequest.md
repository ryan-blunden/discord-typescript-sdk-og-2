# UpdateGuildWelcomeScreenRequest

## Example Usage

```typescript
import { UpdateGuildWelcomeScreenRequest } from "@ryan.blunden/discord/models/operations";

let value: UpdateGuildWelcomeScreenRequest = {
  guildId: "<value>",
  welcomeScreenPatchRequestPartial: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `guildId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `welcomeScreenPatchRequestPartial`                                                                         | [components.WelcomeScreenPatchRequestPartial](../../models/components/welcomescreenpatchrequestpartial.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |