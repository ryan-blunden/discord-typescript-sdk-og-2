# ErrorT

A single error, either for an API response or a specific field.

## Example Usage

```typescript
import { ErrorT } from "@ryan.blunden/discord/models/components";

let value: ErrorT = {
  code: 318569,
  message: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `code`                                                | *number*                                              | :heavy_check_mark:                                    | Discord internal error code. See error code reference |
| `message`                                             | *string*                                              | :heavy_check_mark:                                    | Human-readable error message                          |