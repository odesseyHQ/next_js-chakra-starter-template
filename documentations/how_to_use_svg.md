source: [dev](https://dev.to/dolearning/importing-svgs-to-next-js-nna)

More details:
# SVGR
This tool comes built in with create-react-app, so if you've used that before then this will be a familiar tool.

First, use yarn or **npm to install @svgr/webpack to your project**. You'll then need to create or add to your next.config.js in the root of your project.

```jsx
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
```
Webpack can sometimes be a little bit incomprehensible to me. Here we are adding a rule (rules.push). Specifically, we test if the file is an SVG and, if it is, we use the library we installed above.

It's worth noting that if you make changes to your next.config.js you'll need to restart the development server before you'll notice the changes.

Once restarted, the error above should be gone.