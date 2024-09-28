const baseURL = 'nextjs-portfolio.up.railway.app';

const routes = {
  '/': true,
  '/about': true,
  '/work': true,
  '/blog': false,
  '/gallery': false,
  '/contact': true,
};

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
  '/work/automate-design-handovers-with-a-figma-to-code-pipeline': true,
};

const effects = {
  gradient: true,
  dots: false,
  lines: true,
};

const style = {
  theme: 'dark', // dark | light
  brand: 'blue', // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: 'cyan', // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  neutral: 'slate', // sand | gray | slate
  border: 'playful', // rounded | playful | conservative
  solid: 'contrast', // color | contrast
  solidStyle: 'flat', // flat | plastic
  surface: 'filled', // filled | translucent
  transition: 'all', // all | micro | macro
};

const display = {
  location: false,
  time: false,
};

const mailchimp = {
  action: 'https://url/subscribe/post?parameters',
  effects: {
    gradient: true,
    dots: false,
    lines: true,
  },
};

const contactConfig = {
  email: 'mailto:juu.texier@gmail.com',
  effects: {
    gradient: true,
    dots: false,
    lines: true,
  },
};

export {
  routes,
  protectedRoutes,
  effects,
  style,
  display,
  mailchimp,
  contactConfig,
  baseURL,
};
