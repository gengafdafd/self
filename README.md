# self

这是一个 GitHub Pages 个人站点仓库，当前用于承载主页、个人介绍和文档目录。

默认 GitHub Pages 地址：

`https://gengafdafd.github.io/self/`

自定义域名：

`https://www.yyyyang.cn/`

## 当前结构

- 纯静态单页站点
- `index.html` 作为主页
- `styles.css` 负责视觉样式
- `script.js` 放轻量交互
- GitHub Actions 自动部署到 Pages
- 根目录 `CNAME` 用于 GitHub Pages 自定义域名
- 文档统一归档到 `docs/`

## 文档目录

- `docs/README.md`：文档分类规范
- `docs/about/`：个人介绍与对外资料
- `docs/guides/`：配置与操作说明
- `docs/plans/`：站点规划
- `docs/projects/`：项目资料
- `docs/notes/`：零散笔记

当前已创建：

- `docs/about/personal-profile.md`
- `docs/guides/custom-domain-and-https.md`
- `docs/plans/site-roadmap.md`

## 如何启用 GitHub Pages

1. 打开仓库 `Settings`
2. 进入 `Pages`
3. 在 `Build and deployment` 中选择 `GitHub Actions`
4. 推送到 `main` 分支后会自动部署

## 内容维护原则

- 根目录只保留站点运行必要文件
- 说明性文档统一放在 `docs/`
- 新增文档先判断归属目录，再创建文件
- 文件命名统一用小写英文加连字符

## 本地预览

仓库当前是纯静态站，直接用任意静态服务器即可，例如：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`
