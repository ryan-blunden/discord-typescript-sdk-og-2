# SendSoundboardSoundRequest

## Example Usage

```typescript
import { SendSoundboardSoundRequest } from "@ryan.blunden/discord/models/operations";

let value: SendSoundboardSoundRequest = {
  channelId: "<value>",
  soundboardSoundSendRequest: {
    soundId: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `channelId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `soundboardSoundSendRequest`                                                                   | [components.SoundboardSoundSendRequest](../../models/components/soundboardsoundsendrequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |