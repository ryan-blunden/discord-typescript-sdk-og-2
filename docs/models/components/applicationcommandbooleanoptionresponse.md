# ApplicationCommandBooleanOptionResponse

## Example Usage

```typescript
import { ApplicationCommandBooleanOptionResponse } from "@ryan.blunden/discord/models/components";

let value: ApplicationCommandBooleanOptionResponse = {
  name: "<value>",
  description: "abaft ick phooey alongside near thick whose",
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