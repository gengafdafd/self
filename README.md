# self

这是一个 GitHub Pages 项目页仓库，建议发布为：

`https://gengafdafd.github.io/self/`

## 当前初始化内容

- 纯静态单页站点
- `index.html` 作为主页
- `styles.css` 负责视觉样式
- `script.js` 放轻量交互
- GitHub Actions 自动部署到 Pages

## 如何启用 GitHub Pages

1. 打开仓库 `Settings`
2. 进入 `Pages`
3. 在 `Build and deployment` 中选择 `GitHub Actions`
4. 推送到 `main` 分支后会自动部署

## 建设建议

### 第一阶段

- 改标题、简介、链接为你自己的内容
- 增加项目卡片和联系方式
- 保持一页式，先上线

### 第二阶段

- 增加 `projects/` 或 `posts/` 页面
- 把项目和文章改成数据化维护
- 补 `404.html`、社交分享图、统计脚本

### 第三阶段

- 迁移到 Astro、Next.js 或 Jekyll
- 加 Markdown 博客能力
- 加 SEO、RSS、站点地图、搜索

## 本地预览

仓库当前是纯静态站，直接用任意静态服务器即可，例如：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`
