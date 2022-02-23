// Other dependencies
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

const fontReltns = [
  '/fonts/Inter/Inter-Black.ttf',
  '/fonts/Inter/Inter-ExtraBold.ttf',
  '/fonts/Inter/Inter-Bold.ttf',
  '/fonts/Inter/Inter-SemiBold.ttf',
  '/fonts/Inter/Inter-Medium.ttf',
  '/fonts/Inter/Inter-Regular.ttf',
  '/fonts/Inter/Inter-Light.ttf',
  '/fonts/Inter/Inter-ExtraLight.ttf',
  '/fonts/Inter/Inter-Thin.ttf',
  '/fonts/Righteous/Righteous-Regular.ttf',
];

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {fontReltns.map((fontlink) => {
            return <link key={fontlink} rel="preload" href={fontlink} as="font" crossOrigin="" />;
          })}
        </Head>
        <body>
          <ColorModeScript initialColorMode={'light'} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
