import type { Config } from 'tailwindcss'

import { join } from 'path'
import { skeleton } from '@skeletonlabs/skeleton/plugin'
import * as themes from '@skeletonlabs/skeleton/themes' // Import the themes

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        join(
            require.resolve('@skeletonlabs/skeleton-react'),
            '../**/*.{html,js,jsx,tsx,ts}'
        ),
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [
        skeleton({
            themes: [
                themes.cerberus,
                themes.rose,
                themes.pine,
                themes.catppuccin,
            ],
        }),
    ],
}
export default config
