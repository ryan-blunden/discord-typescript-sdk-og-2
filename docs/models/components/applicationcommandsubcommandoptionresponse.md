# ApplicationCommandSubcommandOptionResponse

## Example Usage

```typescript
import { ApplicationCommandSubcommandOptionResponse } from "@ryan.blunden/discord/models/components";

let value: ApplicationCommandSubcommandOptionResponse = {
  name: "<value>",
  description:
    "notwithstanding aboard same below celsius along upward than acidly colorless",
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
| `options`                  | *components.Options*[]     | :heavy_minus_sign:         | N/A                        |