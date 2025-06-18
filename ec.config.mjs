import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
    plugins: [pluginLineNumbers()],
    defaultProps: {
        showLineNumbers: false,
        wrap: false,
        overridesByLang: {
            'js,ts,html,json': { 
                showLineNumbers: true,
                preserveIndent: true,
            },
            'bash,ps,sh': { preserveIndent: false },
        },
    },
}