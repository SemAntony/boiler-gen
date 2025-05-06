/*
/!*
export default function (plop) {
    plop.setGenerator('component', {
        description: 'Create an Atomic Design component',
        prompts: [
            {
                type: 'list',
                name: 'layer',
                message: 'Choose atomic layer:',
                choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
            },
            {
                type: 'input',
                name: 'name',
                message: 'Component name (e.g. Button, Input, Card, ...):',
            },
            {
                type: 'input',
                name: 'props',
                message: 'Enter props (e.g. label:string, disabled:boolean):',
                when: (answers) => ['atoms', 'molecules', 'organisms'].includes(answers.layer),
            },
        ],
        actions(data) {
            const actions = [];

            // Component TSX
            actions.push({
                type: 'add',
                path: 'ui-kit/{{layer}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: `plop-templates/${data.layer}/component.tsx.hbs`,
            });

            // Optional files (scss + stories)
            if (['atoms', 'molecules', 'organisms'].includes(data.layer)) {
                actions.push(
                    {
                        type: 'add',
                        path: 'ui-kit/{{layer}}/{{pascalCase name}}/{{pascalCase name}}.module.scss',
                        templateFile: `plop-templates/${data.layer}/component.module.scss.hbs`,
                    },
                    {
                        type: 'add',
                        path: 'ui-kit/{{layer}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                        templateFile: `plop-templates/${data.layer}/component.stories.tsx.hbs`,
                    }
                );
            }

            // Index export
            actions.push({
                type: 'add',
                path: 'ui-kit/{{layer}}/{{pascalCase name}}/index.ts',
                template: "export * from './{{pascalCase name}}';",
            });

            return actions;
        },
    });

    // helpers
    plop.setHelper('renderPropsInterface', function (props) {
        if (!props || typeof props !== 'string') return '';
        return props
            .split(',')
            .map(p => {
                const [key, type] = p.trim().split(':');
                return `  ${key}?: ${type};`;
            })
            .join('\n');
    });

    plop.setHelper('renderPropsDestructure', function (props) {
        if (!props || typeof props !== 'string') return '';
        return props
            .split(',')
            .map(p => p.trim().split(':')[0])
            .join(', ');
    });
}
*/


/*

import fs from 'fs';
import path from 'path';

export default function (plop) {
    plop.setGenerator('component', {
        description: 'Create an Atomic Design component',
        prompts: [
            {
                type: 'list',
                name: 'layer',
                message: 'Choose atomic layer:',
                choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
            },
            {
                type: 'input',
                name: 'name',
                message: 'Component name (e.g. Button, Input, Card, ...):',
            },
            {
                type: 'input',
                name: 'props',
                message: 'Enter props (e.g. label:string, disabled:boolean):',
                when: (answers) => ['atoms', 'molecules', 'organisms'].includes(answers.layer),
            },
        ],
        actions(data) {
            const actions = [];

            // Component TSX
            actions.push({
                type: 'add',
                path: 'ui-kit/{{layer}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: `plop-templates/${data.layer}/component.tsx.hbs`,
            });

            // Optional files (scss + stories)
            if (['atoms', 'molecules', 'organisms'].includes(data.layer)) {
                actions.push(
                    {
                        type: 'add',
                        path: 'ui-kit/{{layer}}/{{pascalCase name}}/{{pascalCase name}}.module.scss',
                        templateFile: `plop-templates/${data.layer}/component.module.scss.hbs`,
                    },
                    {
                        type: 'add',
                        path: 'ui-kit/{{layer}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                        templateFile: `plop-templates/${data.layer}/component.stories.tsx.hbs`,
                    }
                );
            }

            // Local component index
            actions.push({
                type: 'add',
                path: 'ui-kit/{{layer}}/{{pascalCase name}}/index.ts',
                template: "export * from './{{pascalCase name}}';",
            });

            // Добавление экспорта в index.ts слоя
            actions.push(function customLayerIndexUpdate() {
                const layerPath = path.resolve(`ui-kit/${data.layer}`);
                const indexFilePath = path.join(layerPath, 'index.ts');
                const componentName = plop.getHelper('pascalCase')(data.name);
                const exportLine = `export * from './${componentName}';`;

                if (!fs.existsSync(indexFilePath)) {
                    fs.writeFileSync(indexFilePath, exportLine + '\n', 'utf8');
                    return `Created ui-kit/${data.layer}/index.ts and added export`;
                }

                const currentContent = fs.readFileSync(indexFilePath, 'utf8');
                if (!currentContent.includes(exportLine)) {
                    fs.writeFileSync(indexFilePath, currentContent.trim() + '\n' + exportLine + '\n', 'utf8');
                    return `Updated ui-kit/${data.layer}/index.ts with new export`;
                }

                return `Export already exists in ui-kit/${data.layer}/index.ts`;
            });

            return actions;
        },
    });

    // helpers
    plop.setHelper('renderPropsInterface', function (props) {
        if (!props || typeof props !== 'string') return '';
        return props
            .split(',')
            .map(p => {
                const [key, type] = p.trim().split(':');
                return `  ${key}?: ${type};`;
            })
            .join('\n');
    });

    plop.setHelper('renderPropsDestructure', function (props) {
        if (!props || typeof props !== 'string') return '';
        return props
            .split(',')
            .map(p => p.trim().split(':')[0])
            .join(', ');
    });
}


*/


/*
import fs from 'fs';
import path from 'path';

export default function (plop) {
    plop.setGenerator('component', {
        description: 'Create an Atomic Design component',
        prompts: [
            {
                type: 'list',
                name: 'layer',
                message: 'Choose atomic layer:',
                choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
            },
            {
                type: 'input',
                name: 'name',
                message: 'Component name (e.g. Button, Input, Card, ...):',
            },
            {
                type: 'input',
                name: 'props',
                message: 'Enter props (e.g. label:string, disabled:boolean):',
                when: (answers) => ['atoms', 'molecules', 'organisms'].includes(answers.layer),
            },
        ],
        actions(data) {
            const actions = [];

            // ✅Validation of the name of the component
            if (!data.name || /[^a-zA-Z0-9]/.test(data.name)) {
                throw new Error('Component name must be alphanumeric and non-empty');
            }

            // Ensure layer directory exists
            const layerDir = path.resolve(`ui-kit/${data.layer}`);
            if (!fs.existsSync(layerDir)) {
                fs.mkdirSync(layerDir, {recursive: true});
                console.log(`Created missing directory: ${layerDir}`);
            }

            // Ensure index.ts in the layer exists
            const layerIndex = path.join(layerDir, 'index.ts');
            if (!fs.existsSync(layerIndex)) {
                fs.writeFileSync(layerIndex, '', 'utf8');
                console.log(`Created missing file: ${layerIndex}`);
            }


            // Component TSX
            actions.push({
                type: 'add',
                path: 'ui-kit/{{layer}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: `plop-templates/${data.layer}/component.tsx.hbs`,
            });

            // Optional files (scss + stories)
            if (['atoms', 'molecules', 'organisms'].includes(data.layer)) {
                actions.push(
                    {
                        type: 'add',
                        path: 'ui-kit/{{layer}}/{{pascalCase name}}/{{pascalCase name}}.module.scss',
                        templateFile: `plop-templates/${data.layer}/component.module.scss.hbs`,
                    },
                    {
                        type: 'add',
                        path: 'ui-kit/{{layer}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                        templateFile: `plop-templates/${data.layer}/component.stories.tsx.hbs`,
                    }
                );
            }

            // Local component index
            actions.push({
                type: 'add',
                path: 'ui-kit/{{layer}}/{{pascalCase name}}/index.ts',
                template: "export * from './{{pascalCase name}}';",
            });

            // Добавление экспорта в index.ts слоя
            actions.push(function customLayerIndexUpdate() {
                const layerPath = path.resolve(`ui-kit/${data.layer}`);
                const indexFilePath = path.join(layerPath, 'index.ts');
                const componentName = plop.getHelper('pascalCase')(data.name);
                const exportLine = `export * from './${componentName}';`;

                if (!fs.existsSync(indexFilePath)) {
                    fs.writeFileSync(indexFilePath, exportLine + '\n', 'utf8');
                    return `Created ui-kit/${data.layer}/index.ts and added export`;
                }

                const currentContent = fs.readFileSync(indexFilePath, 'utf8');
                if (!currentContent.includes(exportLine)) {
                    fs.writeFileSync(indexFilePath, currentContent.trim() + '\n' + exportLine + '\n', 'utf8');
                    return `Updated ui-kit/${data.layer}/index.ts with new export`;
                }

                return `Export already exists in ui-kit/${data.layer}/index.ts`;
            });

            // Обновление или создание корневого index.ts с сортировкой
            actions.push(function updateRootIndex() {
                const uiKitPath = path.resolve(plop.getPlopfilePath(), '../ui-kit');

                // ✅ Убедимся, что ui-kit/ существует
                if (!fs.existsSync(uiKitPath)) {
                    fs.mkdirSync(uiKitPath, { recursive: true });
                    console.log(`Created missing directory: ${uiKitPath}`);
                }

                const rootIndexPath = path.join(uiKitPath, 'index.ts');

                const layerDirs = fs.readdirSync(path.resolve('ui-kit')).filter(name => {
                    const fullPath = path.resolve('ui-kit', name);
                    return fs.statSync(fullPath).isDirectory();
                });

                const exportLines = layerDirs
                    .map(layer => `export * from './${layer}';`)
                    .sort((a, b) => a.localeCompare(b));

                if (!fs.existsSync(rootIndexPath)) {
                    fs.writeFileSync(rootIndexPath, exportLines.join('\n') + '\n', 'utf8');
                    return 'Created ui-kit/index.ts with sorted exports from layers';
                }

                const currentContent = fs.readFileSync(rootIndexPath, 'utf8');
                const currentLines = currentContent
                    .split('\n')
                    .map(l => l.trim())
                    .filter(line => line.startsWith('export * from'));

                const allLines = new Set([...currentLines, ...exportLines]);
                const sortedUniqueLines = Array.from(allLines).sort((a, b) => a.localeCompare(b));

                const newContent = sortedUniqueLines.join('\n') + '\n';

                if (newContent !== currentContent.trim() + '\n') {
                    fs.writeFileSync(rootIndexPath, newContent, 'utf8');
                    return 'Updated and sorted ui-kit/index.ts';
                }

                return 'ui-kit/index.ts is already up to date and sorted';
            });


            return actions;
        },
    });

    // helpers
    plop.setHelper('renderPropsInterface', function (props) {
        if (!props || typeof props !== 'string') return '';
        return props
            .split(',')
            .map(p => {
                const [key, type] = p.trim().split(':');
                return `  ${key}?: ${type};`;
            })
            .join('\n');
    });

    plop.setHelper('renderPropsDestructure', function (props) {
        if (!props || typeof props !== 'string') return '';
        return props
            .split(',')
            .map(p => p.trim().split(':')[0])
            .join(', ');
    });
}
*/





// import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export default function (plop) {
    // Определение корневого каталога проекта
    const projectRoot = process.env.PROJECT_ROOT || process.cwd();


    plop.setGenerator('component', {
        description: 'Create an Atomic Design component',
        prompts: [
            {
                type: 'list',
                name: 'layer',
                message: 'Choose atomic layer:',
                choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages'],
            },
            {
                type: 'input',
                name: 'name',
                message: 'Component name (e.g. Button, Input, Card, ...):',
            },
            {
                type: 'input',
                name: 'props',
                message: 'Enter props (e.g. label:string, disabled:boolean):',
                when: (answers) => ['atoms', 'molecules', 'organisms'].includes(answers.layer),
            },
        ],
        actions(data) {
            const actions = [];

            // Validation of the name of the component
            if (!data.name || /[^a-zA-Z0-9]/.test(data.name)) {
                throw new Error('Component name must be alphanumeric and non-empty');
            }

            // Ensure layer directory exists
            const layerDir = path.resolve(projectRoot, `ui-kit/${data.layer}`);
            if (!fs.existsSync(layerDir)) {
                fs.mkdirSync(layerDir, {recursive: true});
                console.log(`Created missing directory: ${layerDir}`);
            }

            // Ensure index.ts in the layer exists
            const layerIndex = path.join(layerDir, 'index.ts');
            if (!fs.existsSync(layerIndex)) {
                fs.writeFileSync(layerIndex, '', 'utf8');
                console.log(`Created missing file: ${layerIndex}`);
            }

            // Component TSX
            actions.push({
                type: 'add',
                path: `${layerDir}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
                templateFile: `plop-templates/${data.layer}/component.tsx.hbs`,
            });

            // Optional files (scss + stories)
            if (['atoms', 'molecules', 'organisms'].includes(data.layer)) {
                actions.push(
                    {
                        type: 'add',
                        path: `${layerDir}/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
                        templateFile: `plop-templates/${data.layer}/component.module.scss.hbs`,
                    },
                    {
                        type: 'add',
                        path: `${layerDir}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
                        templateFile: `plop-templates/${data.layer}/component.stories.tsx.hbs`,
                    }
                );
            }

            // Local component index
            actions.push({
                type: 'add',
                path: `${layerDir}/{{pascalCase name}}/index.ts`,
                template: "export * from './{{pascalCase name}}';",
            });

            return actions;
        },
    });

    // helpers
    plop.setHelper('renderPropsInterface', function (props) {
        if (!props || typeof props !== 'string') return '';
        return props
            .split(',')
            .map(p => {
                const [key, type] = p.trim().split(':');
                return `  ${key}?: ${type};`;
            })
            .join('\n');
    });

    plop.setHelper('renderPropsDestructure', function (props) {
        if (!props || typeof props !== 'string') return '';
        return props
            .split(',')
            .map(p => p.trim().split(':')[0])
            .join(', ');
    });
}
