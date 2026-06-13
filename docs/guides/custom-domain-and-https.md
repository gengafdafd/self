# GitHub Pages 自定义域名与 HTTPS 配置

适用仓库：

- 仓库：`gengafdafd/self`
- 站点类型：GitHub Pages 项目页
- 默认地址：`https://gengafdafd.github.io/self/`
- 当前自定义域名：`https://www.yyyyang.cn/`

如果要绑定自定义域名，最终访问入口会从 `github.io` 地址切到你自己的域名。

## 你需要先决定的域名方案

推荐优先选一种，不要一开始同时混用太多解析。

### 方案 A：只用子域名

例如：

- `www.example.com`
- `home.example.com`

这是最简单、最稳定的方案。DNS 只需要配一个 `CNAME`。

### 方案 B：使用裸域

例如：

- `example.com`

这种方案需要配置 `A` 记录，通常也会再配一个 `www.example.com` 做跳转或并行访问。

## GitHub Pages 侧配置

1. 打开仓库 `Settings`
2. 进入 `Pages`
3. 在 `Build and deployment` 中确认使用 `GitHub Actions`
4. 在 `Custom domain` 输入你的域名
5. 保存后等待 GitHub 检查 DNS
6. `Enforce HTTPS` 可用后勾选启用

根据 GitHub 官方文档，自定义域名保存后，GitHub 会自动检查 DNS，并在可用时申请证书；HTTPS 开启后会把 HTTP 请求重定向到 HTTPS。

## DNS 配置

### 子域名方案

如果你要绑定 `www.yyyyang.cn`，添加：

```txt
类型: CNAME
主机: www
值: gengafdafd.github.io
```

### 裸域方案

如果你要绑定 `yyyyang.cn`，按 GitHub 官方建议添加这些 `A` 记录：

```txt
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

可选地再添加 `AAAA`：

```txt
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

## 仓库里的 CNAME 文件

GitHub Pages 发布产物里需要一个根目录 `CNAME` 文件。当前仓库已设置为：

```txt
www.yyyyang.cn
```

如果后续你决定改成裸域，需要把根目录 `CNAME` 也同步改掉。

## HTTPS 什么时候能打开

通常流程是：

1. 域名 DNS 生效
2. GitHub 检查通过
3. GitHub 自动申请证书
4. `Enforce HTTPS` 选项可勾选

如果你刚保存域名时看到 `Certificate not yet created`，通常是 DNS 还没完全生效，或者解析记录有冲突。

## 常见问题

### `NotServedByPagesError`

这个错误表示你的域名没有解析到 GitHub Pages。

对当前仓库，如果你使用的是 `www.yyyyang.cn`，应确保：

- `www` 是 `CNAME`
- `CNAME` 指向 `gengafdafd.github.io`
- 仓库根目录存在 `CNAME` 文件
- GitHub Pages 设置中的 `Custom domain` 填的是 `www.yyyyang.cn`

### HTTPS 迟迟不能启用

优先检查：

- 有没有多余的 `A`、`AAAA`、URL 转发
- `www` 是否正确 `CNAME` 到了 `gengafdafd.github.io`
- GitHub Pages 里是否填的是和 `CNAME` 一致的域名

## 参考资料

- GitHub Docs: [Configuring a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- GitHub Docs: [Securing your GitHub Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
