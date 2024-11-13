# CommandPermissionsResponse

## Example Usage

```typescript
import { CommandPermissionsResponse } from "@ryan-blunden/discord/models/components";

let value: CommandPermissionsResponse = {
  id: "<value>",
  applicationId: "<value>",
  guildId: "<value>",
  permissions: [
    {
      id: "<value>",
      permission: false,
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `applicationId`                                                                                | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `guildId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `permissions`                                                                                  | [components.CommandPermissionResponse](../../models/components/commandpermissionresponse.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |