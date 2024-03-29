import 'styles/global.css'
import type { AppProps } from 'next/app'
import type { AppRouter } from 'backend/router'
import { withTRPC } from '@trpc/next'
import { getBaseUrl } from 'utils/getBaseUrl'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    }
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp)
