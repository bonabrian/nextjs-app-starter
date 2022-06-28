import { extractCritical } from '@emotion/server'
import type { DocumentContext, DocumentInitialProps } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const page = await ctx.renderPage()
    // extract css to render in SSR
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)

    return { ...initialProps, ...page, ...styles }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name='title' content='bonabrian | NextJS Starter Template' />
          <meta name='description' content='NextJS Starter Template' />
          <meta
            name='keywords'
            content='NextJS starter, NextJS boilerplate, NextJS emotion, NextJS eslint, React, Typescript'
          />
          <meta name='robots' content='index, follow' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />

          <meta name='author' content='Bona Brian Siagian' />
          <meta httpEquiv='content-language' content='en' />

          {/* Open Graph / Facebook */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://bonabrian.com' />
          <meta
            property='og:title'
            content='bonabrian | NextJS Starter Template'
          />
          <meta property='og:description' content='NextJS Starter Template' />
          {/* TODO: add og:image */}
          {/* <meta property='og:image' content='' /> */}

          {/* Twitter */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://bonabrian.com' />
          <meta property='twitter:site' content='bonabrian_' />
          <meta
            property='twitter:title'
            content='bonabrian | NextJS Starter Template'
          />
          <meta
            property='twitter:description'
            content='NextJS Starter Template'
          />

          <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#fff' />

          {/* TODO: add app-icon */}
          <link rel='icon' href='/favicon.ico' />
          {/* <link rel='manifest' href='manifest.json' /> */}
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
