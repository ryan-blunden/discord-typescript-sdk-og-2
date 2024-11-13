# ApplicationCommandSubcommandGroupOption

## Example Usage

```typescript
import { ApplicationCommandSubcommandGroupOption } from "@ryan.blunden/discord/models/components";

let value: ApplicationCommandSubcommandGroupOption = {
  name: "<value>",
  description:
    "hydrocarbon soliloquy yowza whose brr above tenderly igloo past generously",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `nameLocalizations`                                                                                              | Record<string, *string*>                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `descriptionLocalizations`                                                                                       | Record<string, *string*>                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `required`                                                                                                       | *boolean*                                                                                                        | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `options`                                                                                                        | [components.ApplicationCommandSubcommandOption](../../models/components/applicationcommandsubcommandoption.md)[] | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |