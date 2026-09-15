# 决策回传的干净动作

每次只做一件事，把结果带回对应 roomId：

- 批准：`matrix_reply_worker(roomId=<该群>, decision="approved", reply=<一句话说明>)`
- 拒绝：`matrix_reply_worker(roomId=<该群>, decision="rejected", reply=<理由>)`
- 上呈后再带回：先 `matrix_request_owner_decision` / `matrix_report_owner` 拿主人 decision，再 `matrix_reply_worker` 把结果带回 worker。
