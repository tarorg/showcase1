import autoAdapter from '@sveltejs/adapter-auto';
import cloudflareAdapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: cloudflareAdapter(), // Use the desired adapter here
    // ... other configuration ...
  }
};

export default config;
