# UpdateOriginalWebhookMessageMultipartRequest

## Example Usage

```typescript
import { UpdateOriginalWebhookMessageMultipartRequest } from "@ryan.blunden/discord/models/operations";

let value: UpdateOriginalWebhookMessageMultipartRequest = {
  webhookId: "<value>",
  webhookToken: "<value>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `webhookId`                                                                                                                                | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `webhookToken`                                                                                                                             | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `threadId`                                                                                                                                 | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `withComponents`                                                                                                                           | *boolean*                                                                                                                                  | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `requestBody`                                                                                                                              | [operations.UpdateOriginalWebhookMessageMultipartRequestBody](../../models/operations/updateoriginalwebhookmessagemultipartrequestbody.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |