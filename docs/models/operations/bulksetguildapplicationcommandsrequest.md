# BulkSetGuildApplicationCommandsRequest

## Example Usage

```typescript
import { BulkSetGuildApplicationCommandsRequest } from "@ryan-blunden/discord/models/operations";

let value: BulkSetGuildApplicationCommandsRequest = {
  applicationId: "<value>",
  guildId: "<value>",
  requestBody: [
    {
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `guildId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `requestBody`                                                                                              | [components.ApplicationCommandUpdateRequest](../../models/components/applicationcommandupdaterequest.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |