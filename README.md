# 王小美推送

egg文档：https://www.eggjs.org/zh-CN/tutorials

# 飞书测试群
测试机器人webhook：https://open.feishu.cn/open-apis/bot/v2/hook/0e8bbdd3-0f14-48b3-b100-08a9e902ab74
```bash
curl -X POST -H "Content-Type: application/json" \
	-d '{"msg_type":"text","content":{"text":"request example"}}' \
  https://open.feishu.cn/open-apis/bot/v2/hook/0e8bbdd3-0f14-48b3-b100-08a9e902ab74
```

接入文档：https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN?lang=zh-CN


### 开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### 部署

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
