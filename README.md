# dsh-job-secretary

秘书数字员工岗位包（样板：每岗位一个独立包）。

## 内容（单目录平铺）

| 文件 | 安装去向 | 作用 |
|---|---|---|
| `agent.cordis.yml` | `$DSH_HOME/.agent-presets/secretary/` | 岗位 preset 组合：协调者 persona + 白名单插件 + skill 加载 |
| `preset.yml` | `$DSH_HOME/.agent-presets/secretary/` | preset 显示元数据（name「秘书」/ description / order） |
| `tool-restrict.mjs` | `$DSH_HOME/.agent-presets/secretary/` | 白名单小插件：只暴露协调工具（agent.cordis.yml 用 `./tool-restrict.mjs` 相对引用） |
| `SKILL.md` | `$DSH_HOME/skills/secretary-job-skill/` | 岗位技能：秘书协调方法论（请示分级 / 决策回传 / 红线） |

> preset id 与 skill name 不同：preset 目录名 `secretary`，SKILL.md frontmatter `name: secretary-job-skill`。

## 安装

- 开发期：用 job-install 插件（本地源 → DSH_HOME），或拷本目录到 user preset root / skills root。
- 生产期：dsh-himarket 安装发布包（安装器会拷贝整个目录，含 tool-restrict.mjs）。

## 发布

推 `v*` tag 触发 GitHub Actions 自动 `npm publish`（需仓库配置 `NPM_TOKEN`）。
