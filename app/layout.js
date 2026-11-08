import "./globals.css";
import { profile } from "@/lib/profile";

export const metadata = {
  title: `${profile.name} · ${profile.major} ${profile.grade}`,
  description: `${profile.name}的个人主页 —— 杭州电子科技大学自动化专业 2026 级新生，喜欢机器人、嵌入式开发，以及排球、羽毛球和网球。`,
  keywords: ["陈欣媛", "自动化", "杭电", "杭州电子科技大学", "2026 级", "个人主页"],
};

export const viewport = {
  themeColor: "#05070c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* JS 可用标记：进场动画只在该标记存在时启用，保证无 JS 时内容可见 */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
