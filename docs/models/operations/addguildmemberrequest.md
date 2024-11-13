# AddGuildMemberRequest

## Example Usage

```typescript
import { AddGuildMemberRequest } from "@ryan-blunden/discord/models/operations";

let value: AddGuildMemberRequest = {
  guildId: "<value>",
  userId: "<value>",
  requestBody: {
    accessToken: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `guildId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `userId`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requestBody`                                                                                | [operations.AddGuildMemberRequestBody](../../models/operations/addguildmemberrequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |