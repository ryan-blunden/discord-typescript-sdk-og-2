# CreateApplicationCommandRequest

## Example Usage

```typescript
import { CreateApplicationCommandRequest } from "@ryan.blunden/discord/models/operations";

let value: CreateApplicationCommandRequest = {
  applicationId: "<value>",
  applicationCommandCreateRequest: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `applicationCommandCreateRequest`                                                                        | [components.ApplicationCommandCreateRequest](../../models/components/applicationcommandcreaterequest.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |