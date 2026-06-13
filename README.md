# self

这是一个基于 Astro 的 GitHub Pages 个人站点仓库，用于承载个人主页、博客和文档入口。

默认 GitHub Pages 地址：

`https://gengafdafd.github.io/self/`

自定义域名：

`https://www.yyyyang.cn/`

## 当前结构

- Astro 静态站
- `src/pages/index.astro`：个人主页
- `src/pages/blog/`：博客列表与文章页
- `src/pages/docs/`：文档展示页
- `src/content/blog/`：Markdown 博客文章
- `public/CNAME`：GitHub Pages 自定义域名
- GitHub Actions 自动构建 `dist/` 并发布到 Pages

## 内容目录

- `src/content/blog/`：博客文章 Markdown 源文件
- `docs/about/`：原始个人介绍资料
- `docs/guides/`：原始配置说明
- `docs/plans/`：原始规划资料

当前已创建：

- `src/content/blog/hello-astro.md`
- `src/pages/docs/about/personal-profile.astro`
- `src/pages/docs/guides/custom-domain-and-https.astro`
- `src/pages/docs/plans/site-roadmap.astro`

## 本地开发

```bash
npm install
npm run dev
```

## 构建发布

```bash
npm run build
```

GitHub Actions 会自动构建 `dist/` 并部署到 GitHub Pages。

## 内容维护原则

- 新增博客文章放 `src/content/blog/`
- 页面路由放 `src/pages/`
- 原始资料可以继续放 `docs/`
- 最终对外展示以 Astro 页面为准

## 本地预览

仓库当前是纯静态站，直接用任意静态服务器即可，例如：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`
