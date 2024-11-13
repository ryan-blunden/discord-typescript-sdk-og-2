# CreateAutoModerationRuleRequest

## Example Usage

```typescript
import { CreateAutoModerationRuleRequest } from "@ryan.blunden/discord/models/operations";

let value: CreateAutoModerationRuleRequest = {
  guildId: "<value>",
  requestBody: {
    name: "<value>",
    triggerMetadata: {},
  },
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `guildId`                                        | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `requestBody`                                    | *operations.CreateAutoModerationRuleRequestBody* | :heavy_check_mark:                               | N/A                                              |