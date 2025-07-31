import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "최진우 | Application Dev",
  description: "안녕하세요, 응용소프트웨어 개발자 최진우입니다.",
  canonical: "https://portfolio-tau-virid-88.vercel.app/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://portfolio-tau-virid-88.vercel.app/",
    title: "최진우 | Application Dev",
    site_name: "최진우 | Application Dev",
    images: [
      {
        url: "https://portfolio-tau-virid-88.vercel.app/share.png",
        width: 285,
        height: 167,
        alt: "최진우 | Application Dev",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "최진우 | Application Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "최진우 | Application Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
