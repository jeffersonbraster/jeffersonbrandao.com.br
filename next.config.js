module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
  async rewrites() {
    return [
      { source: "/js/", destination: "https://jeffersonbrandao.com.br/" },
      { source: "/jekyll/", destination: "https://jeffersonbrandao.com.br/" },
      { source: "/svg/", destination: "https://jeffersonbrandao.com.br/" },
      { source: "/dev/", destination: "https://jeffersonbrandao.com.br/" },
      { source: "/tags/", destination: "https://jeffersonbrandao.com.br/" },
      {
        source: "/page/:slug*",
        destination: "https://jeffersonbrandao.com.br/",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/my-trips/",
        destination: "https://my-trips.jeffersonbrandao.com.br/",
        permanent: true,
      },
    ];
  },
  images: { domains: ["pbs.twimg.com", "avatars.githubusercontent.com"] },
};
