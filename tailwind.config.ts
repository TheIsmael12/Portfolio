import type { Config } from 'tailwindcss'

const config: Config = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {

    extend: {

      backgroundImage: {

        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

      },

      colors: {

        textLight: '#2C3E50', // Texto en modo claro (un gris azulado oscuro)
        colorLight: '#3498DB', // Color principal en modo claro (un azul vibrante)
        hoverLight: '#A6C8FF', // Hover en modo claro (un azul suave)
        lightBackground: '#ECF0F1', // Fondo en modo claro (un gris claro)

        textDark: '#ECF0F1', // Texto en modo oscuro (un blanco suave)
        colorDark: '#3498DB', // Color principal en modo oscuro (el mismo azul vibrante)
        hoverDark: '#34495E', // Hover en modo oscuro (un azul oscuro)
        darkBackground: '#1c1e20', // Fondo en modo oscuro (un azul oscuro profundo)

      }

    },

  },

  plugins: [

    require('tailwindcss-animated')

  ],

  darkMode: 'class',

}

export default config