# MessageComponentUserSelectResponse

## Example Usage

```typescript
import { MessageComponentUserSelectResponse } from "@ryan-blunden/discord/models/components";

let value: MessageComponentUserSelectResponse = {
  id: 627129,
  customId: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `id`                                                                                                     | *number*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `customId`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `placeholder`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `minValues`                                                                                              | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `maxValues`                                                                                              | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `disabled`                                                                                               | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `defaultValues`                                                                                          | [components.UserSelectDefaultValueResponse](../../models/components/userselectdefaultvalueresponse.md)[] | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |