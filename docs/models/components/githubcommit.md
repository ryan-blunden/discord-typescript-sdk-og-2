# GithubCommit

## Example Usage

```typescript
import { GithubCommit } from "@ryan.blunden/discord/models/components";

let value: GithubCommit = {
  id: "<id>",
  url: "https://sticky-tarragon.com",
  message: "<value>",
  author: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `url`                                                              | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `message`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `author`                                                           | [components.GithubAuthor](../../models/components/githubauthor.md) | :heavy_check_mark:                                                 | N/A                                                                |