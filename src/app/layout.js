import "@/assets/scss/style.scss";

export const metadata = {
  title: "미술 수행평가 웹사이트 만들기",
  description: "Webstoryboy님의 창작물을 바탕으로 수정하여 만든 웹사이트입니다.",
  keywords: ["미술","수행평가","웹사이트","만들기"],
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  )
}
