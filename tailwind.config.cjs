/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.md", "./.vitepress/theme/**/*.{vue,ts}"],
    theme: {
        extend: {
            colors: {
                'deskfolio': {
                    'bg': '#242424',
                    'bg-light': '#2d2d2d',
                    'bg-lighter': '#383838',
                    'blue': '#75BAFF',
                    'blue-light': '#C7E3FF',
                    'text': '#e5e5e5',
                    'text-muted': '#bdbdbd',
                    'text-dim': '#8a8a8a',
                },
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
            typography: {
                DEFAULT: {
                    css: {
                        '--tw-prose-body': '#e5e5e5',
                        '--tw-prose-headings': '#f5f5f5',
                        '--tw-prose-links': '#75BAFF',
                        '--tw-prose-bold': '#f5f5f5',
                        '--tw-prose-counters': '#bdbdbd',
                        '--tw-prose-bullets': '#75BAFF',
                        '--tw-prose-hr': '#383838',
                        '--tw-prose-quotes': '#bdbdbd',
                        '--tw-prose-quote-borders': '#75BAFF',
                        '--tw-prose-code': '#C7E3FF',
                        color: 'var(--tw-prose-body)',
                        maxWidth: 'none',
                        a: {
                            color: 'var(--tw-prose-links)',
                            textDecoration: 'none',
                            fontWeight: '500',
                            '&:hover': {
                                color: '#C7E3FF',
                            },
                        },
                        strong: {
                            color: 'var(--tw-prose-bold)',
                        },
                        h1: {
                            color: 'var(--tw-prose-headings)',
                        },
                        h2: {
                            color: 'var(--tw-prose-headings)',
                        },
                        h3: {
                            color: 'var(--tw-prose-headings)',
                        },
                        h4: {
                            color: 'var(--tw-prose-headings)',
                        },
                        code: {
                            color: 'var(--tw-prose-code)',
                            backgroundColor: '#2d2d2d',
                            padding: '0.2em 0.4em',
                            borderRadius: '0.25rem',
                            fontWeight: '500',
                            '&::before': {
                                content: '""',
                            },
                            '&::after': {
                                content: '""',
                            },
                        },
                        'ul > li': {
                            '&::marker': {
                                color: 'var(--tw-prose-bullets)',
                            },
                        },
                        hr: {
                            borderColor: 'var(--tw-prose-hr)',
                        },
                    },
                },
            },
        },
    },
};
