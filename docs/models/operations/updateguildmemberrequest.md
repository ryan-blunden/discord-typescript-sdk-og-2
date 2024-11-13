# UpdateGuildMemberRequest

## Example Usage

```typescript
import { UpdateGuildMemberRequest } from "@ryan.blunden/discord/models/operations";

let value: UpdateGuildMemberRequest = {
  guildId: "<value>",
  userId: "<value>",
  requestBody: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `guildId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `userId`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `requestBody`                                                                                      | [operations.UpdateGuildMemberRequestBody](../../models/operations/updateguildmemberrequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |