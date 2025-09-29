# Angular Custom UI Component Library with Storybook

Theme: Ocean Professional
- Primary: #2563EB
- Secondary: #F59E0B
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827

Packages: Angular 19.2.1 (all core packages pinned to same version). Storybook 8.4.7.

Exports
- OceanProfessionalModule
- Components:
  - OcnButtonComponent
  - OcnCardComponent
  - OcnBadgeComponent
  - OcnInputComponent

Usage
- Import either individual components or OceanProfessionalModule.
- Styles: `src/lib/styles/_theme.css` defines CSS variables and utility classes.

Storybook
- Scripts:
  - npm run storybook
  - npm run build-storybook
- Files in `.storybook/` and `src/lib/**/**.stories.ts`.

App Demo Shell
- The running Angular application shows a sidebar (components list), a preview area rendering components, and a controls panel mirroring Storybook controls for demonstration.

Notes
- All public components include PUBLIC_INTERFACE doc comments.
- No environment variables required.
