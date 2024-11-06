/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'media.licdn.com',
              port: '',
              pathname: '/**', // Permite cualquier ruta
          },
          {
              protocol: 'https',
              hostname: 'ds-images.bolavip.com',
              port: '',
              pathname: '/**',
          },
          {
              protocol: 'https',
              hostname: 'ibb.co',
              port: '',
              pathname: '/**',
          },
          {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              port: '',
              pathname: '/**',
          },
      ],
  },
};

export default nextConfig;
