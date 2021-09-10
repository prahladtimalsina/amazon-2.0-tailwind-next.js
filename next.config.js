module.exports = {
  publicRuntimeConfig: {
    APP_NAME: "Instagram",
    API_DEVELOPMENT: "http://localhost:8000/api",
    API_PRODUCTION: "https://prahladtimalsina.com/api",
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: "http://localhost:3000",
    DOMAIN_PRODUCTION: "https://prahladtimalsina.com",
    FB_APP_ID: "415724632408061",
  },
  images: {
    domains: ["localhost", "fakestoreapi.com",'links.papareact.com'],
  },
  env: {
    stripe_public_key: `${process.env.STRIPE_PUBLIC_KEY}`,
  },
};
