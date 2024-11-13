# ApplicationCommandBooleanOption

## Example Usage

```typescript
import { ApplicationCommandBooleanOption } from "@ryan.blunden/discord/models/components";

let value: ApplicationCommandBooleanOption = {
  name: "<value>",
  description:
    "hastily investigate even mushy or ack roughly normal drat sidetrack",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `type`                     | *number*                   | :heavy_check_mark:         | N/A                        |
| `name`                     | *string*                   | :heavy_check_mark:         | N/A                        |
| `nameLocalizations`        | Record<string, *string*>   | :heavy_minus_sign:         | N/A                        |
| `description`              | *string*                   | :heavy_check_mark:         | N/A                        |
| `descriptionLocalizations` | Record<string, *string*>   | :heavy_minus_sign:         | N/A                        |
| `required`                 | *boolean*                  | :heavy_minus_sign:         | N/A                        |