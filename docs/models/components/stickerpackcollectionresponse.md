# StickerPackCollectionResponse

## Example Usage

```typescript
import { StickerPackCollectionResponse } from "@ryan.blunden/discord/models/components";

let value: StickerPackCollectionResponse = {
  stickerPacks: [
    {
      id: "<value>",
      skuId: "<value>",
      name: "<value>",
      stickers: [
        {
          id: "<value>",
          name: "<value>",
          tags: "<value>",
          packId: "<value>",
          sortValue: 484140,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `stickerPacks`                                                                     | [components.StickerPackResponse](../../models/components/stickerpackresponse.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |