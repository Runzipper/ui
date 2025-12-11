# UIKit for runzipper

> The package includes typography, icon, components, theme for runzipper app.

## Installation

### Add configuration file

#### npm

.npmrc

```text

@runzipper:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}

```

#### yarn

 .yarnrc.yml

```yml
npmScopes:
  "runzipper":
    npmRegistryServer: 'https://npm.pkg.github.com'
    npmAuthToken: '${GITHUB_TOKEN}' 
```

### Set GITHUB_TOKEN to environment variable

1. Generate a GitHub personal access token
2. Add the environment variable to your shell setting file

   ```bash
   # zsh
   echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.zshrc
   source ~/.zshrc

   # bash
   echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
   source ~/.bashrc
   ```

### Install package

>This package requires react ^19.2 and react-dom ^19.2 as peer dependencies.

  ```bash
# npm
npm install @runzipper/ui

# bash
yarn add @runzipper/ui
```

## Icon

### Usage

```tsx
import { Icon } from '@runzipper/ui';

<Icon icon="IconCheck" width={24} height={24} />
```

The Icon component allows you to select an icon via the `icon` prop and supports all SVG attributes such as `width`, `height`, `fill`, `stroke`, etc.

### Available Icons

- `IconCheck` - Check icon
- `IconCloud` - Cloud icon
- `IconExclamation` - Exclamation icon
- `IconFile` - File icon
- `IconUpload` - Upload icon
- `IconX` - X (close) icon

## Typography

Typography components provide consistent text styling. All Typography components accept a `textType` prop to specify the HTML text element and support all attributes of that element.

### Bold

Displays bold text.

```tsx
import { Typography } from '@runzipper/ui';

<Typography.Bold textType="p" size="medium">
  Bold Text
</Typography.Bold>
```

**Props:**

- `textType`: HTML text element type (e.g., `p`, `span`, `div`)
- `size` (optional): `small` | `medium` | `large` (default: `medium`)
  - `small`: 14px / line-height 20px
  - `medium`: 16px / line-height 24px
  - `large`: 20px / line-height 28px

### Regular

Displays regular weight text.

```tsx
<Typography.Regular textType="p" size="medium">
  Regular Text
</Typography.Regular>
```

**Props:**

- `textType`: HTML text element type
- `size` (optional): `small` | `medium` | `large` (default: `medium`)
  - `small`: 14px / line-height 20px
  - `medium`: 16px / line-height 24px
  - `large`: 18px / line-height 28px

### Heading

Displays heading text.

```tsx
<Typography.Heading textType="h1" size="primary">
  Main Heading
</Typography.Heading>

{/* Or use with default size */}
<Typography.Heading textType="h2">
  Secondary Heading
</Typography.Heading>
```

**Props:**

- `textType`: HTML heading element type (`h1` | `h2` | `h3` | `h4` | `h5` | `h6`)
- `size` (optional): `primary` | `secondary` | `default` (default: `default`)
  - `primary`: 48px / letter-spacing -1.2px
  - `secondary`: 30px / letter-spacing -0.75px
  - `default`: 14px

### Cell

Displays table cell header text.

```tsx
<Typography.Cell textType="span">
  Column Header
</Typography.Cell>
```

### Data

Displays data for the first column of a table.

```tsx
<Typography.Data textType="span">
  Row Label
</Typography.Data>
```

## Component

### Button

A clickable button component.

```tsx
import { UI } from '@runzipper/ui';

<UI.Button showShadow={true}>
  Click Me
</UI.Button>
```

**Props:**

- `showShadow`: Whether to show shadow effect (default: `false`)
- Supports all HTML button attributes (`onClick`, `disabled`, `type`, etc.)

### FileDrop

A component for drag-and-drop or file selection.

```tsx
<UI.FileDrop
  onDropFile={(files) => console.log(files)}
  accept=".pdf,.doc"
  multiple={true}
/>
```

**Props:**

- `onDropFile`: Function called when files are selected or dropped `(files: FileList) => void`
- `multiple`: Whether to allow multiple file selection (default: `true`)
- `accept`: Allowed file types (e.g., `".pdf,.doc"`)

### Notification

A component for displaying notification messages.

```tsx
<UI.Notification
  type="notification"
  title="Success"
  description="Task completed successfully"
  onClose={() => console.log('closed')}
/>
```

**Props:**

- `type`: Notification type - `notification` | `warn` | `default`
  - `notification`: Success message (with check icon)
  - `warn`: Warning message (with exclamation icon)
  - `default`: Default message (no icon)
- `title`: Title (optional)
- `description`: Description (optional)
- `onClose`: Function called when close button is clicked (optional, close button is hidden if not provided)

### Table

A component for displaying tables.

```tsx
<UI.Table
  columns={['Name', 'Age', 'Email']}
  rows={[
    ['John', '25', 'john@example.com'],
    ['Jane', '30', 'jane@example.com']
  ]}
/>
```

**Props:**

- `columns`: Array of table headers `string[]`
- `rows`: Array of table data `string[][]` (each row is an array of strings)

### Logo

A component for displaying the application logo.

```tsx
<UI.Logo type="primary" />
```

**Props:**

- `type` (optional): Logo style variant - `primary` | `secondary` (default: `primary`)
  - `primary`: Logo with primary background color
  - `secondary`: Logo with transparent background
- Supports all HTML div attributes

### Toggle

A component for toggling between two options.

```tsx
import { UI } from '@runzipper/ui';

<UI.Toggle
  option1={{ label: '파일', value: 'file' }}
  option2={{ label: '폴더', value: 'directory' }}
  value={selectedValue}
  onChange={(value) => setSelectedValue(value)}
/>
```

**Props:**

- `option1`: First option object `{ label: string; value: T }`
- `option2`: Second option object `{ label: string; value: T }`
- `value`: Currently selected value `T` (must match one of the option values)
- `onChange`: Function called when selection changes `(value: T) => void`

**Generic Type:**

The component supports generic types for the value (`string` or `number`)

### Dropdown

A component for selecting a single option from a list.

```tsx
import { UI } from '@runzipper/ui';
import { useState } from 'react';

const items = [
  { label: 'English', value: 'en' },
  { label: '한국어', value: 'ko' },
  { label: '日本語', value: 'ja' },
];

const [selected, setSelected] = useState(items[0]);

<UI.Dropdown
  items={items}
  value={selected}
  onSelect={(item) => setSelected(item)}
/>
```

**Props:**

- `items`: Array of dropdown items `DropdownItem[]`
  - Each item has `{ label: string; value: string }`
- `value`: Currently selected item `DropdownItem`
- `onSelect`: Function called when an item is selected `(item: DropdownItem) => void`
- `className` (optional): Additional CSS class name for the dropdown container

## Theme

This package provides a theme system using Vanilla Extract. You can access design tokens through the `vars` object.

### Theme Usage

```tsx
import { vars } from '@runzipper/ui/styles/theme.css';

const myStyle = style({
  color: vars.color.primary,
  fontSize: vars.fontSize.sizeBase,
  padding: vars.spacing['4'],
});
```

### Theme Variables

**Colors:**

- Primary: `primary`, `primaryHover`, `primaryActive`, `primaryLight`, `primaryMedium`
- Background: `backgroundLight`, `backgroundDark`
- Content: `contentLight`, `contentDark`
- Border: `borderLight`, `borderDark`
- Success: `success`, `successLight`, `successBorder`, `successHover`
- Error: `error`, `errorLight`, `errorBorder`, `errorHover`
- Base: `black`, `white`

**Font Sizes:**

- `sizeXs` (12px), `sizeSm` (14px), `sizeBase` (16px), `sizeLg` (18px)
- `sizeXl` (20px), `size2xl` (24px), `size3xl` (30px), `size4xl` (36px), `size5xl` (48px)

**Spacing:**

- `1` (4px), `2` (8px), `3` (12px), `4` (16px)
- `6` (24px), `8` (32px), `12` (48px), `16` (64px)

**Border Radius:**

- `default` (8px), `md` (6px), `lg` (12px), `xl` (16px), `full` (9999px)

**Other:**

- Border Width: `width1` (1px), `width2` (2px)
- Shadow: `md`, `lg`
- Blur: `sm` (4px)
- Font: `pretendard`
