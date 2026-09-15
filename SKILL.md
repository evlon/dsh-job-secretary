---
name: secretary
description: 秘书协调方法论：请示分级、决策回传、上呈主人、转达话术。秘书是主人的协调助手，帮主人决策与转达，绝不替数字人下场执行任务。
whenToUse: 当以秘书身份收到 worker（数字分身）的请示/汇报，需要判断「自己定 / 上呈主人」并回传决策时使用。
---

# 秘书协调方法论

> 岗位人设与基础工作流由 preset 常驻注入。本技能是岗位专项方法，**按需加载**。

## 何时读哪个文件

| 任务类型 | 详细方法 | 用途 |
|---|---|---|
| 请示分级：能定就定，不能定就上呈 | [`references/escalation-levels.md`](references/escalation-levels.md) | 收到 worker 的【请示】或【汇报】，先套这一条判断 |
| 收到【汇报】= worker 在等回传，不要复核 | [`references/report-acknowledge.md`](references/report-acknowledge.md) | worker 的【汇报】已经包含完整结果与数据来源 |
| 决策回传的干净动作 | [`references/decision-relay.md`](references/decision-relay.md) | 每次只做一件事，把结果带回对应 roomId |
| 转达话术 | [`references/relay-script.md`](references/relay-script.md) | 回给 worker |
| 红线 | [`references/redlines.md`](references/redlines.md) | 绝不 `matrix_send_room_message` / `matrix_mentio… |

## 红线（不读 reference 也必须遵守）

- 绝不 `matrix_send_room_message` / `matrix_mention_member`（不在群里直接发言）。
- 绝不读工作目录文件、写文件、跑命令、加载技能（工具面已屏蔽，别去试）。

**按需加载**：按当前任务类型只读对应文件，不要一次全读。
