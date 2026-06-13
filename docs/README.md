# 文档目录规范

这个仓库后续所有说明文档、规划文档、资料沉淀都放在 `docs/` 下，不再散落到根目录。

## 目录结构

```txt
docs/
├── README.md
├── about/
├── guides/
├── plans/
├── projects/
└── notes/
```

## 各目录用途

### `docs/about/`

放个人相关内容：

- 个人介绍
- 个人定位
- 联系方式
- 对外简介版本

### `docs/guides/`

放操作说明和配置文档：

- 域名与 HTTPS
- 部署说明
- 使用指南
- 环境配置

### `docs/plans/`

放规划类内容：

- 站点建设路线
- 内容规划
- 年度目标
- 迭代计划

### `docs/projects/`

放项目介绍：

- 项目概览
- 项目拆解
- 项目复盘
- 对外展示文案

### `docs/notes/`

放零散沉淀：

- 学习笔记
- 灵感记录
- 待整理内容

## 文件命名规范

统一使用小写英文和连字符：

```txt
custom-domain-and-https.md
personal-profile.md
site-roadmap.md
project-showcase.md
```

不要使用：

- 中文文件名
- 空格
- 模糊命名如 `new.md`、`test.md`、`临时.md`

## 新文档写法规范

每个文档建议按这个结构起：

```md
# 标题

## 背景

## 目标

## 内容

## 下一步
```

如果是配置类文档，优先用：

```md
# 标题

## 适用范围

## 配置步骤

## 注意事项

## 排查方法
```

## 放置原则

- 个人是谁，放 `docs/about/`
- 怎么做，放 `docs/guides/`
- 打算做什么，放 `docs/plans/`
- 做过什么项目，放 `docs/projects/`
- 暂时未整理完成的内容，放 `docs/notes/`

拿不准时，先放到 `docs/notes/`，后续再归档。
