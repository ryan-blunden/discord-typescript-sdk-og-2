# DiscordIntegrationResponse

## Example Usage

```typescript
import { DiscordIntegrationResponse } from "@ryan.blunden/discord/models/components";

let value: DiscordIntegrationResponse = {
  id: "<value>",
  application: {
    id: "<value>",
    name: "<value>",
    description: "since raw depart whoever SUV carefully",
  },
  scopes: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `account`                                                                                              | [components.AccountResponse](../../models/components/accountresponse.md)                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `enabled`                                                                                              | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `application`                                                                                          | [components.IntegrationApplicationResponse](../../models/components/integrationapplicationresponse.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `scopes`                                                                                               | *string*[]                                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `user`                                                                                                 | [components.UserResponse](../../models/components/userresponse.md)                                     | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |