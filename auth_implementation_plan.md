# Bibitalk 身份验证模块实现计划

## 1. 目标概述
根据 `bibitlyalk20260615.md` 文档，实现完整的用户身份验证流程，包括：短信验证码获取、验证码登录以及用户注册。要求包含 UI 界面和完整的 API 服务逻辑。

## 2. 技术栈
- **前端框架**: React + TypeScript
- **状态管理**: Zustand (用于管理用户信息和 Auth Token)
- **样式**: Tailwind CSS + Lucide React (图标)
- **网络请求**: Fetch API / Axios (封装 Service 层)
- **构建工具**: Vite

## 3. 开发阶段规划

### 阶段 1: 基础架构与数据模型 (Infrastructure & Models)
- [ ] **定义类型声明**: 在 `im-app/src/renderer/types/auth.ts` 中定义 `AuthResponse`, `LoginParams`, `RegisterParams` 等接口。
- [ ] **建立 API Service 层**: 在 `im-app/src/renderer/services/authService.ts` 中实现：
    - `sendSmsCode(phone, type)`
    - `loginWithCode(phone, code)`
    - `registerUser(payload)`
- [ ] **配置全局环境变量**: 设置 `VITE_API_BASE_URL`。

### 阶段 2: 状态管理实现 (State Management)
- [ ] **Auth Store 开发**: 在 `im-app/src/renderer/store/useAuthStore.ts` 中使用 Zustand 实现：
    - 存储 `user` 对象、`accessToken`、`refreshToken`。
    - 提供 `setAuth(data)`、`logout()`、`checkAuth()` 等 Action。
    - 持久化 Token 到 `localStorage` 或 `IndexedDB`。

### 3. UI 组件开发 (UI Components)
- [ ] **基础组件封装**:
    - 确保 `Input` 和 `Button` 在 `im-app/src/renderer/components` 中具备良好的交互状态（Loading, Error）。
- [ ] **登录页面 (Login Page)**: 实现手机号输入 -> 点击发送验证码 -> 输入验证码 -> 完成登录的交互流程。
- [ ] **注册页面 (Register Page)**: 实现包含手机号、昵称、头像、地区选择的表单逻辑。
- [ ] **Auth 路由守卫**: 在 `App.tsx` 中实现逻辑：若无 Token 则重定向至登录页，若有 Token 则进入主应用界面。

### 4. 功能集成与联调 (Integration & Testing)
- [ ] **Mock 数据/环境准备**: 确保前端能连接到 `/dev/api` 路径的后端服务。
- [ ] **异常处理**: 实现验证码错误、网络超时、Token 过期自动登出的逻辑。
- [ ] **界面美化**: 使用 Tailwind CSS 完成登录页的响应式布局和 Material/Modern 风格设计。

## 4. 验收标准 (Definition of Done)
- [x] 用户可以成功触发短信发送流程。
- [x] 用户输入正确的验证码后，能够获取到 `accessToken` 并跳转至主界面。
- [x] 刷新页面后，用户状态依然保持登录（Token 持久化生效）。
- [x] 注册流程完成后，新用户信息能在 Store 中正确更新。
- [x] 界面在移动端与桌面端均能正常适配显示。
