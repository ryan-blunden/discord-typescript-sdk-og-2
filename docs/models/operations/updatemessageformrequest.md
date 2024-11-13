# UpdateMessageFormRequest

## Example Usage

```typescript
import { UpdateMessageFormRequest } from "@ryan.blunden/discord/models/operations";

let value: UpdateMessageFormRequest = {
  channelId: "<value>",
  messageId: "<value>",
  messageEditRequestPartial: {},
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `channelId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `messageId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `messageEditRequestPartial`                                                                  | [components.MessageEditRequestPartial](../../models/components/messageeditrequestpartial.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |