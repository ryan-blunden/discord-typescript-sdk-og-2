# CreateThreadFromMessageRequest

## Example Usage

```typescript
import { CreateThreadFromMessageRequest } from "@ryan.blunden/discord/models/operations";

let value: CreateThreadFromMessageRequest = {
  channelId: "<value>",
  messageId: "<value>",
  createTextThreadWithMessageRequest: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `channelId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `messageId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createTextThreadWithMessageRequest`                                                                           | [components.CreateTextThreadWithMessageRequest](../../models/components/createtextthreadwithmessagerequest.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |