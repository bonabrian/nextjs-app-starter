import type { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import type { AppProps } from 'next/app'

import { createEmotionCache } from '@/common/utils'
import { GlobalStyles } from '@/styles'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      {/* TODO: implement ThemeProvider from `emotion/react`
      <ThemeProvider theme={theme}>...rest</ThemeProvider> */}
      <GlobalStyles />
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp
