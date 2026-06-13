# 博客目录规范

博客内容后续统一放在 `docs/blog/` 下，和配置文档、规划文档分开维护。

## 目录建议

```txt
docs/blog/
├── README.md
├── posts/
├── series/
└── drafts/
```

## 用途说明

### `docs/blog/posts/`

放正式文章。

命名建议：

```txt
2026-06-13-first-post.md
2026-06-20-build-notes.md
```

### `docs/blog/series/`

放专题页或系列索引页。

例如：

- `ai-notes.md`
- `engineering-log.md`

### `docs/blog/drafts/`

放草稿和未完成内容，避免和正式文章混在一起。

## 文章建议结构

```md
# 标题

## 背景

## 正文

## 总结
```

## 维护原则

- 正式文章只放 `posts/`
- 专题页只放 `series/`
- 未完成内容只放 `drafts/`
- 文档说明仍然放 `docs/guides/`
- 规划内容仍然放 `docs/plans/`
