# UploadApplicationAttachmentRequest

## Example Usage

```typescript
import { UploadApplicationAttachmentRequest } from "@ryan.blunden/discord/models/operations";

let value: UploadApplicationAttachmentRequest = {
  applicationId: "<value>",
  requestBody: {
    file: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                        | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `requestBody`                                                                                                          | [operations.UploadApplicationAttachmentRequestBody](../../models/operations/uploadapplicationattachmentrequestbody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |