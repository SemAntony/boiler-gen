# Plop Generator for Atomic Design Components 🧱

This script is a **Plop generator** designed to streamline the creation of components following the **Atomic Design
methodology**. It automates the creation of component files, including TypeScript, SCSS, and Storybook files, and
ensures proper export management in the project structure.

## Purpose 

The generator simplifies the process of creating and organizing components in a **UI Kit** by:

- Generating component files for different atomic layers (atoms, molecules, organisms, templates, pages).
- Automatically updating `index.ts` files for proper exports at both the layer and root levels.
- Enforcing a consistent structure and naming convention.

## How It Works

1. **Prompts**: The generator asks the user for input, such as:

- The atomic layer (e.g., atoms, molecules, organisms, etc.).
- The component name (e.g., Button, Input, Card, etc.).
- Optional props for components in specific layers (atoms, molecules, organisms).

2. **File Generation**: Based on the input, the generator creates:

- A `.tsx` file for the component.
- Optional `.module.scss` and `.stories.tsx` files for styling and Storybook integration (for atoms, molecules, and
  organisms).
- An `index.ts` file for local exports.

3. **Export Management**:

- Updates the `index.ts` file in the component's layer to include the new component.
- Updates or creates the root `ui-kit/index.ts` file to ensure all layers are exported, maintaining alphabetical order.

4. **Helpers**:

- `renderPropsInterface`: Generates a TypeScript interface for the component's props.
- `renderPropsDestructure`: Generates a destructured list of props for use in the component.

## How to Use

1. **Install Plop**:
   Ensure you have Plop installed in your project:

  ```bash
  npm install --save-dev plop
  ```

2. **Add the Generator**:
   Save this script in your project (e.g., `plopfile.js`).

3. **Run the Generator**:
   Execute the following command to start the generator:

  ```bash
  npx plop
  ```

**Or you can adding a Shortcut Command**
To simplify running the generator, you can add the following command to the `scripts` section of your `package.json`
file:

```json
"scripts": {
"generate": "plop"
}
```
and then run `npm run generate`, or `(your package manager) generate`.

1. **Follow the Prompts**:

- Choose the atomic layer.
- Enter the component name.
- Optionally, specify props for atoms, molecules, or organisms.

5. **Generated Files**:
   The generator will create the necessary files in the `ui-kit` directory, organized by atomic layers.

6. **Export Updates**:
   The generator will automatically update the `index.ts` files to include the new component.

## Who Should Use This?

This generator is ideal for **frontend developers** working on projects that follow the **Atomic Design methodology**.
It is especially useful for teams that:

- Want to maintain a consistent component structure.
- Need to automate repetitive tasks like file creation and export management.
- Use tools like Storybook for component documentation.

## Example

If you create a `Button` component in the `atoms` layer with props `label:string, disabled:boolean`, the generator will:

- Create the following files:

  ```

  ui-kit/atoms/Button/Button.tsx
  ui-kit/atoms/Button/Button.module.scss
  ui-kit/atoms/Button/Button.stories.tsx
  ui-kit/atoms/Button/index.ts

  ```

- Update `ui-kit/atoms/index.ts` with:

  ```typescript
  export * from './Button';
  ```

- Update or create `ui-kit/index.ts` with:

  ```typescript
  export * from './atoms';
  export * from './molecules';
  export * from './organisms';
  ```

This ensures the new component is properly integrated into the project.
