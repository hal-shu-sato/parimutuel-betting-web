import type { NextConfig } from 'next';

const prefixPath =
  process.env.NODE_ENV === 'production' ? '/parimutuel-betting-web' : '';

const nextConfig: NextConfig = {
  output: 'export',

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  assetPrefix: prefixPath,
  basePath: prefixPath,
  publicRuntimeConfig: {
    basePath: prefixPath,
  },
};

export default nextConfig;
