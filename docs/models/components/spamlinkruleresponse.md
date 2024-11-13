# SpamLinkRuleResponse

## Example Usage

```typescript
import { SpamLinkRuleResponse } from "@ryan.blunden/discord/models/components";

let value: SpamLinkRuleResponse = {
  id: "<value>",
  guildId: "<value>",
  creatorId: "<value>",
  name: "<value>",
  actions: [
    {
      metadata: {
        durationSeconds: 147916,
      },
    },
  ],
  triggerMetadata: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `guildId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `creatorId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `name`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `eventType`                                                                                              | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `actions`                                                                                                | *components.SpamLinkRuleResponseActions*[]                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `triggerType`                                                                                            | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `enabled`                                                                                                | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `exemptRoles`                                                                                            | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `exemptChannels`                                                                                         | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `triggerMetadata`                                                                                        | [components.SpamLinkTriggerMetadataResponse](../../models/components/spamlinktriggermetadataresponse.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |