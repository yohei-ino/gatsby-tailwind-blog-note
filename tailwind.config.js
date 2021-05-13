module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            code: {
              backgroundColor: "rgb(1,2,39)",
              color: "snow",
              fontWeight: "400",
              borderRadius: "0.25rem",
              padding: 2,
            },
            "code::before": {
              content: '""',
              paddingLeft: "0.25rem",
            },
            "code::after": {
              content: '""',
              paddingRight: "0.25rem",
            },
          }
        },
        dark: {
          css: {
            color: "snow",
            a: {
              color: "snow",
              '&:hover': {
                color: "snow",
              },
            },
            h1: {
              color: "snow",
            },
            h2: {
              color: "snow",
            },
            h3: {
              color: "snow",
            },
            h4: {
              color: "snow",
            },
            h5: {
              color: "snow",
            },
            h6: {
              color: "snow",
            },
            th: {
              color: "snow",
            },
            strong: {
              color: "snow",
            },
            figcaption: {
              color: "snow",
            },
            blockquote: {
              color: "snow",
            },
            code: {
              backgroundColor: "rgb(1,2,39)",
              color: "snow",
              fontWeight: "400",
              borderRadius: "0.25rem",
              padding: 2,
            },
            "code::before": {
              content: '""',
              paddingLeft: "0.25rem",
            },
            "code::after": {
              content: '""',
              paddingRight: "0.25rem",
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
