Example of setting up a section

```tsx
import React from "react";
import { Section, ForegroundItems, Coordinate } from "@repo/ui";

const background = {
  /* some component */
};

const content = {
  /* some component */
};

const foreground: ForegroundItems = [
  {
    item: {
      /* some component */
    },
    coordinate: {
      x: {
        /* some number % of the screen width to place the item */
      },
      y: {
        /* some number % of the screen height to place the item */
      },
    },
  },
];

export default function SomeSection(): React.ReactNode {
  return (
    <Section
      background={background}
      content={content}
      foreground={foreground}
      height={/* some number % size of the view height */}
    />
  );
}
```
