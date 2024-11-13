# GuildOnboardingResponse

## Example Usage

```typescript
import { GuildOnboardingResponse } from "@ryan.blunden/discord/models/components";

let value: GuildOnboardingResponse = {
  guildId: "<value>",
  prompts: [
    {
      id: "<value>",
      title: "<value>",
      options: [
        {
          id: "<value>",
          title: "<value>",
          description:
            "including including since brr haunting bookend mispronounce goodwill fork",
          emoji: {},
          roleIds: [
            "<value>",
          ],
          channelIds: [
            "<value>",
          ],
        },
      ],
      singleSelect: false,
      required: false,
      inOnboarding: false,
    },
  ],
  defaultChannelIds: [
    "<value>",
  ],
  enabled: false,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `guildId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `prompts`                                                                                    | [components.OnboardingPromptResponse](../../models/components/onboardingpromptresponse.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `defaultChannelIds`                                                                          | *string*[]                                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `enabled`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |