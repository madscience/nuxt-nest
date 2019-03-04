// @ts-ignore
import NuxtConfiguration from '@nuxt/config';

const config: NuxtConfiguration = {
  srcDir: 'src/frontend/',
  dev: (process.env.NODE_ENV !== 'production'),
  plugins: ['~/plugins/hello'],
};

export default config;
