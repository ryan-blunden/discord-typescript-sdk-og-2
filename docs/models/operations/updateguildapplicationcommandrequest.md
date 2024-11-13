# UpdateGuildApplicationCommandRequest

## Example Usage

```typescript
import { UpdateGuildApplicationCommandRequest } from "@ryan.blunden/discord/models/operations";

let value: UpdateGuildApplicationCommandRequest = {
  applicationId: "<value>",
  guildId: "<value>",
  commandId: "<value>",
  applicationCommandPatchRequestPartial: {},
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `guildId`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `commandId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `applicationCommandPatchRequestPartial`                                                                              | [components.ApplicationCommandPatchRequestPartial](../../models/components/applicationcommandpatchrequestpartial.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |