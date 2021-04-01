# HeroIcons Outline

This package includes individual files for each icon, ready to be imported into a project.

Each icon is in its own file, so you can bundle several icons from different icon sets without bundling entire icon sets.

## Installation

If you are using NPM:

```bash
npm install @iconify-icons/heroicons-outline --save-dev
```

If you are using Yarn:

```bash
yarn add --dev @iconify-icons/heroicons-outline
```

## Usage with React

First you need to install [Iconify for React](https://github.com/iconify/iconify/packages/react).

If you are using NPM:

```bash
npm install --save-dev @iconify/react
```

If you are using Yarn:

```bash
yarn add --dev @iconify/react
```

### Example using icon 'color-swatch' with React

```js
import { Icon, InlineIcon } from '@iconify/react';
import colorSwatch from '@iconify-icons/heroicons-outline/color-swatch';
```

```jsx
<Icon icon={colorSwatch} />
<p>This is some text with icon adjusted for baseline: <InlineIcon icon={colorSwatch} /></p>
```

### Example using icon 'library' with React

This example is using string syntax that is available since Iconify for React 2.0

This example will not work with Iconify for React 1.x

```jsx
import React from 'react';
import { Icon, addIcon } from '@iconify/react';
import libraryIcon from '@iconify-icons/heroicons-outline/library';

addIcon('library', libraryIcon);

export function MyComponent() {
	return (
		<div>
			<Icon icon="library" />
		</div>
	);
}
```

### Example using icon 'receipt-refund' with React

```jsx
import React from 'react';
import { InlineIcon } from '@iconify/react';
import receiptRefund from '@iconify-icons/heroicons-outline/receipt-refund';

export function MyComponent() {
	return (
		<p>
			<InlineIcon icon={receiptRefund} /> Sample text with an icon.
		</p>
	);
}
```

See https://github.com/iconify/iconify/packages/react for details.

## Usage with Vue

First you need to install [Iconify for Vue](https://github.com/iconify/iconify/packages/vue).

If you are using NPM:

```bash
npm install --save-dev @iconify/vue
```

If you are using Yarn:

```bash
yarn add --dev @iconify/vue
```

### Example using icon 'color-swatch' with Vue

This example is using object syntax with TypeScript.

```vue
<template>
	<p>
		<iconify-icon :icon="icons.colorSwatch" />
	</p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IconifyIcon from '@iconify/vue';
import colorSwatch from '@iconify-icons/heroicons-outline/color-swatch';

export default Vue.extend({
	components: {
		IconifyIcon,
	},
	data() {
		return {
			icons: {
				colorSwatch: colorSwatch,
			},
		};
	},
});
</script>
```

### Example using icon 'library' with Vue

This example is using string syntax.

```vue
<template>
	<p>
		Example of 'library' icon:
		<iconify-icon icon="library" :inline="true" />!
	</p>
</template>

<script>
import IconifyIcon from '@iconify/vue';
import libraryIcon from '@iconify-icons/heroicons-outline/library';

IconifyIcon.addIcon('library', libraryIcon);

export default {
	components: {
		IconifyIcon,
	},
};
</script>
```

### Example using icon 'receipt-refund' with Vue

This example is using object syntax.

```vue
<template>
	<iconify-icon :icon="icons.receiptRefund" />
</template>

<script>
import IconifyIcon from '@iconify/vue';
import receiptRefund from '@iconify-icons/heroicons-outline/receipt-refund';

export default {
	components: {
		IconifyIcon,
	},
	data() {
		return {
			icons: {
				receiptRefund,
			},
		};
	},
};
</script>
```

See https://github.com/iconify/iconify/packages/vue for details.

## Usage with Svelte

First you need to install [Iconify for Svelte](https://github.com/iconify/iconify/packages/svelte).

If you are using NPM:

```bash
npm install --save-dev @iconify/svelte
```

If you are using Yarn:

```bash
yarn add --dev @iconify/svelte
```

### Example using icon 'color-swatch' with Svelte

```svelte
<script>
    // npm install --save-dev @iconify/svelte @iconify-icons/heroicons-outline
    import IconifyIcon from '@iconify/svelte';
    import colorSwatch from '@iconify-icons/heroicons-outline/color-swatch';
</script>

<IconifyIcon icon={colorSwatch} />
```

### Example using icon 'library' with Svelte

```svelte
<script>
    // npm install --save-dev @iconify/svelte @iconify-icons/heroicons-outline
    import IconifyIcon from '@iconify/svelte';
    import libraryIcon from '@iconify-icons/heroicons-outline/library';
</script>

<IconifyIcon icon={libraryIcon} />
```

### Example using icon 'receipt-refund' with Svelte

```svelte
<script>
    // npm install --save-dev @iconify/svelte @iconify-icons/heroicons-outline
    import IconifyIcon from '@iconify/svelte';
    import receiptRefund from '@iconify-icons/heroicons-outline/receipt-refund';
</script>

<IconifyIcon icon={receiptRefund} />
```

See https://github.com/iconify/iconify/packages/svelte for details.

## About HeroIcons Outline

Icons author: Steve Schoger

Website: https://github.com/refactoringui/heroicons

License: MIT
