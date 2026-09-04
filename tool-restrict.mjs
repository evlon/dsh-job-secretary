// 秘书协调者的工具白名单：只读上下文 + 决策/回传。
// 秘书是协调者、不是执行者——绝不读工作目录文件、写文件、跑命令、发群。
// 通过 ToolRuntime.restrict({ allow }) 把这些之外的所有全局工具（write/skill/bash/pwsh/
// matrix_send_room_message / matrix_list_workspace_files / matrix_read_workspace_file 等）
// 对秘书 agent 隐藏并禁止执行，从机制层杜绝「秘书下场执行任务」。
const ALLOW = [
  'matrix_get_room_info',
  'matrix_get_recent_messages',
  'matrix_get_room_members',
  'matrix_get_user_info',
  'matrix_list_rooms',
  'twin_timeline',
  'matrix_request_owner_decision',
  'matrix_report_owner',
  'matrix_reply_worker',
]

export const name = 'secretary-tool-restrict'
export const inject = ['tools']

export function apply(ctx) {
  // 只过滤全局层工具：恰好把 matrix_* 之外的所有 host 工具一并挡掉。
  ctx.effect(() => ctx.tools.restrict({ allow: ALLOW }), 'secretary.tool-restrict')
}
