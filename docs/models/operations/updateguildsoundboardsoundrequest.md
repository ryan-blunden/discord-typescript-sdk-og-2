# UpdateGuildSoundboardSoundRequest

## Example Usage

```typescript
import { UpdateGuildSoundboardSoundRequest } from "@ryan-blunden/discord/models/operations";

let value: UpdateGuildSoundboardSoundRequest = {
  guildId: "<value>",
  soundId: "<value>",
  soundboardPatchRequestPartial: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `guildId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `soundId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `soundboardPatchRequestPartial`                                                                      | [components.SoundboardPatchRequestPartial](../../models/components/soundboardpatchrequestpartial.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |