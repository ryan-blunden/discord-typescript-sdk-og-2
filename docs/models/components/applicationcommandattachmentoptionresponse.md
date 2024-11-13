# ApplicationCommandAttachmentOptionResponse

## Example Usage

```typescript
import { ApplicationCommandAttachmentOptionResponse } from "@ryan.blunden/discord/models/components";

let value: ApplicationCommandAttachmentOptionResponse = {
  name: "<value>",
  description:
    "extricate serpentine along consequently incidentally cop questioningly blacken around separate",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `type`                     | *number*                   | :heavy_check_mark:         | N/A                        |
| `name`                     | *string*                   | :heavy_check_mark:         | N/A                        |
| `nameLocalized`            | *string*                   | :heavy_minus_sign:         | N/A                        |
| `nameLocalizations`        | Record<string, *string*>   | :heavy_minus_sign:         | N/A                        |
| `description`              | *string*                   | :heavy_check_mark:         | N/A                        |
| `descriptionLocalized`     | *string*                   | :heavy_minus_sign:         | N/A                        |
| `descriptionLocalizations` | Record<string, *string*>   | :heavy_minus_sign:         | N/A                        |
| `required`                 | *boolean*                  | :heavy_minus_sign:         | N/A                        |