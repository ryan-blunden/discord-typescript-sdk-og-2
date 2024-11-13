# BulkSetApplicationCommandsRequest

## Example Usage

```typescript
import { BulkSetApplicationCommandsRequest } from "@ryan-blunden/discord/models/operations";

let value: BulkSetApplicationCommandsRequest = {
  applicationId: "<value>",
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
| `requestBody`                                                                                              | [components.ApplicationCommandUpdateRequest](../../models/components/applicationcommandupdaterequest.md)[] | :heavy_check_mark:                                                                                         | N/A                                                                                                        |