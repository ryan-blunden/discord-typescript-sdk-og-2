# GetAnswerVotersRequest

## Example Usage

```typescript
import { GetAnswerVotersRequest } from "@ryan.blunden/discord/models/operations";

let value: GetAnswerVotersRequest = {
  channelId: "<value>",
  messageId: "<value>",
  answerId: 676576,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `channelId`        | *string*           | :heavy_check_mark: | N/A                |
| `messageId`        | *string*           | :heavy_check_mark: | N/A                |
| `answerId`         | *number*           | :heavy_check_mark: | N/A                |
| `after`            | *string*           | :heavy_minus_sign: | N/A                |
| `limit`            | *number*           | :heavy_minus_sign: | N/A                |