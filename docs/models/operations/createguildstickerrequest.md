# CreateGuildStickerRequest

## Example Usage

```typescript
import { CreateGuildStickerRequest } from "@ryan.blunden/discord/models/operations";

let value: CreateGuildStickerRequest = {
  guildId: "<value>",
  requestBody: {
    file: "<value>",
    name: "<value>",
    tags: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `guildId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `requestBody`                                                                                        | [operations.CreateGuildStickerRequestBody](../../models/operations/createguildstickerrequestbody.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |