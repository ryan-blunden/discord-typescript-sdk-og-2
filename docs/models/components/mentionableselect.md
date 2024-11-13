# MentionableSelect

## Example Usage

```typescript
import { MentionableSelect } from "@ryan.blunden/discord/models/components";

let value: MentionableSelect = {
  customId: "<id>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `type`                                        | *number*                                      | :heavy_check_mark:                            | N/A                                           |
| `customId`                                    | *string*                                      | :heavy_check_mark:                            | N/A                                           |
| `placeholder`                                 | *string*                                      | :heavy_minus_sign:                            | N/A                                           |
| `minValues`                                   | *number*                                      | :heavy_minus_sign:                            | N/A                                           |
| `maxValues`                                   | *number*                                      | :heavy_minus_sign:                            | N/A                                           |
| `disabled`                                    | *boolean*                                     | :heavy_minus_sign:                            | N/A                                           |
| `defaultValues`                               | *components.MentionableSelectDefaultValues*[] | :heavy_minus_sign:                            | N/A                                           |