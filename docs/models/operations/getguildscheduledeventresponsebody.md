# GetGuildScheduledEventResponseBody

200 response for get_guild_scheduled_event


## Supported Types

### `components.ExternalScheduledEventResponse`

```typescript
const value: components.ExternalScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  scheduledStartTime: new Date("2022-04-09T17:59:24.322Z"),
  entityMetadata: {
    location: "<value>",
  },
};
```

### `components.StageScheduledEventResponse`

```typescript
const value: components.StageScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  scheduledStartTime: new Date("2023-08-31T09:29:51.256Z"),
};
```

### `components.VoiceScheduledEventResponse`

```typescript
const value: components.VoiceScheduledEventResponse = {
  id: "<value>",
  guildId: "<value>",
  name: "<value>",
  scheduledStartTime: new Date("2022-12-17T03:55:26.194Z"),
};
```

