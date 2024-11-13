# CreateGuildSoundboardSoundRequest

## Example Usage

```typescript
import { CreateGuildSoundboardSoundRequest } from "@ryan.blunden/discord/models/operations";

let value: CreateGuildSoundboardSoundRequest = {
  guildId: "<value>",
  soundboardCreateRequest: {
    name: "<value>",
    sound: "<value>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `guildId`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `soundboardCreateRequest`                                                                | [components.SoundboardCreateRequest](../../models/components/soundboardcreaterequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |