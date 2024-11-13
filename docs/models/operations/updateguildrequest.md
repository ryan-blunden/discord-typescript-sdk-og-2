# UpdateGuildRequest

## Example Usage

```typescript
import { UpdateGuildRequest } from "@ryan.blunden/discord/models/operations";

let value: UpdateGuildRequest = {
  guildId: "<value>",
  guildPatchRequestPartial: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `guildId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `guildPatchRequestPartial`                                                                 | [components.GuildPatchRequestPartial](../../models/components/guildpatchrequestpartial.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |