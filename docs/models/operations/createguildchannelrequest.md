# CreateGuildChannelRequest

## Example Usage

```typescript
import { CreateGuildChannelRequest } from "@ryan.blunden/discord/models/operations";

let value: CreateGuildChannelRequest = {
  guildId: "<value>",
  createGuildChannelRequest: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `guildId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `createGuildChannelRequest`                                                                  | [components.CreateGuildChannelRequest](../../models/components/createguildchannelrequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |