import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**', // Permite cualquier ruta después del hostname
      }
    ],
  },
};

// Crea el plugin de Next Intl
const withNextIntl = createNextIntlPlugin();

// Exporta la configuración combinada
export default withNextIntl(nextConfig);