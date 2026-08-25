---
version: 1.0.0
name: Ravindu Heshan
description: A high-energy fitness marketing design system with bold editorial typography, stark contrast, and electric yellow accents.
---

# DESIGN.md — Visual Design System & UI Specifications

## 1. Color Tokens

| Token Name | Hex Code | System Usage |
| :--- | :--- | :--- |
| `primary` | `#FFDE02` | Vivid Electric Yellow — Primary CTAs, status badges, highlighted numbers, accent borders |
| `primary-80` | `#FFE83A` | Primary button hover state |
| `primary-60` | `#FFF06A` | Active states / subtle highlights |
| `primary-20` | `#FFF7BF` | Low-opacity yellow tints |
| `secondary` | `#07070A` | Deep Ink Black — Primary background canvas & structural hero elements |
| `secondary-90` | `#18181A` | Dark surface containers, card backgrounds, overlay panels |
| `secondary-70` | `#3A3A3D` | Borders, subtle dividers, structural lines |
| `secondary-40` | `#8A8A8E` | Muted body copy, secondary subtitles, metadata |
| `tertiary` | `#FFFFFF` | Pure White — Primary body copy, reversed text on dark surfaces |
| `neutral` | `#E8E8E8` | Border accents, low-priority UI elements |
| `surface` | `#FFFFFF` | Light card canvas (where applicable) |
| `on-surface` | `#000000` | Contrast text on light surfaces / primary button text |
| `error` | `#D92D20` | Destructive actions and validation errors |

---
## 2. Typography Scale & Font Mapping

Headlines:  Bebas Neue (Compressed, Poster-Style, Uppercase, Tracking: 0px)
UI / Nav:   Onest (Bold, Clean Labels, Tracking: 0.02em - 0.04em)
Body Copy:  Manrope (Modern, Scannable, Line-Height: 1.5x)


| Style Token | Font Family | Size | Weight | Line Height | Letter Spacing | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `headline-display` | Bebas Neue | 111px | 800 | 133px | `0px` | Hero main title |
| `headline-lg` | Bebas Neue | 80px | 800 | 102px | `0px` | Major section titles |
| `headline-md` | Bebas Neue | 58px | 800 | 73px | `0px` | Card headers, sub-sections |
| `headline-sm` | Onest | 42px | 600 | 50px | `0px` | Sub-headings |
| `body-lg` | Manrope | 30px | 600 | 45px | `0.08em` | Hero callouts, blockquotes |
| `body-md` | Manrope | 16px | 400 | 24px | `0px` | Standard body paragraphs |
| `body-sm` | Manrope | 14px | 400 | 20px | `0px` | Card descriptions, fine copy |
| `label-lg` | Onest | 38px | 700 | 60px | `0px` | Large status counters |
| `label-md` | Onest | 16px | 700 | 24px | `0px` | Button labels, badge titles |
| `label-sm` | Onest | 12px | 700 | 16px | `0.04em` | Tags, chips, metadata |
| `nav` | Onest | 16px | 700 | 20px | `0.02em` | Navigation bar links |
| `caption` | Manrope | 12px | 400 | 16px | `0px` | Copyright, disclaimers |

---

## 3. Shape Language & Spacing Scale

### Border Radii
* `none`: `0px`
* `sm`: `8px` (Chips, status tags)
* `md`: `16px` (Form inputs, inner containers)
* `lg`: `24px` (Content cards, modal boxes)
* `xl`: `32px` (Buttons, primary CTA containers)
* `full`: `9999px` (Pills, badges, floating widgets)

### Spacing Steps
* `xs`: `6px`
* `sm`: `16px`
* `md`: `36px`
* `lg`: `50px`
* `xl`: `76px`

---

## 4. Component Token Rules

### Primary CTA Button (`button-primary`)
* Background: `{colors.primary}` (`#FFDE02`)
* Text Color: `{colors.on-surface}` (`#000000`)
* Typography: `{typography.nav}` (Onest 16px Bold Uppercase)
* Border Radius: `{rounded.xl}` (`32px`) or Pill (`full`)
* Height: `60px`
* Hover State: Background `{colors.primary-80}` (`#FFE83A`)

### Secondary Button (`button-secondary`)
* Background: Transparent or `{colors.secondary-90}`
* Border: 1px solid `{colors.secondary-70}` (`#3A3A3D`)
* Text Color: `{colors.tertiary}` (`#FFFFFF`)
* Height: `60px`

### Content Card (`card`)
* Background: `{colors.secondary-90}` (`#18181A`)
* Border: 1px solid `{colors.secondary-70}` (`#3A3A3D`)
* Text Color: `{colors.tertiary}`
* Border Radius: `{rounded.lg}` (`24px`)
* Padding: `20px` to `32px`

### Chips & Urgency Pills (`chip`)
* Background: `{colors.primary}` (`#FFDE02`)
* Text Color: `{colors.on-surface}` (`#000000`)
* Typography: `{typography.label-sm}`
* Radius: `{rounded.full}` (`9999px`)