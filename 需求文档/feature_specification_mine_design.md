1. 布局结构 (Layout & Structure)

分栏架构 (Split-pane Layout): 采用经典的“侧边导航栏 + 主内容区”的双栏式布局。
左侧导航栏 (Sidebar): 宽度固定（约占屏幕 20-25%），背景色为浅灰色，用于承载功能入口。
右侧内容区 (Main Content Area): 宽度自适应，背景色为纯白色，展示详细信息。
视口关系: 左栏通过纵向列表（List Item）引导用户，右栏以卡片化/详情页（Detail View）的形式承载具体数据。
2. 色彩规范 (Color Palette)

背景色系 (Backgrounds):
Primary BG (Sidebar): 非常浅的灰色 (e.g., #F5F5F7)，与主内容区形成视觉层级。
Secondary BG (Main Content): 纯白色 (#FFFFFF)，确保信息阅读的高对比度。
文字色系 (Typography Colors):
Primary Text: 深灰色/接近黑色 (#333333)，用于标题和姓名。
Secondary/Meta Text: 中灰色 (#888888)，用于副标题、ID、地区等辅助信息。
强调色 (Accent Color):
Action Color: 橙红色系 (e.g., #FF4D4F)，用于关键操作按钮（如“编辑资料”）的边框与文字。
3. 设计风格 (Visual Style)

设计语言: 极简主义 (Minimalism) / 现代扁平化 (Modern Flat Design)。
特征关键词: Clean, Airy (留白充足), High Contrast (高对比度), Minimalist, Soft UI.
圆角规范 (Corner Radius):
头像：大圆角或圆形 (Circle/Squircle)。
列表项与容器：极小圆角或无圆角，强调线条感。
4. UI 组件规范 (UI Components)

侧边导航组件 (Sidebar List Item):
结构：[Icon] + [Label] + [Chevron/Arrow Icon]。
交互暗示：右侧带有向右的箭头 >，提示可点击跳转。
分隔线：元素之间使用极细的浅灰色分割线或纯留白区分。
用户信息卡片 (Profile Header Card):
包含：头像（左）+ 文本信息簇（右，包含姓名、ID、地区）。
详情列表组件 (Information List/Key-Value Pairs):
结构：Label (Left) + Value (Right)。
对齐方式：标签左对齐，内容右对齐（或靠右分布），通过水平分割线 (Divider) 维持节奏感。
操作按钮 (Action Button):
样式：Outline Button (描边按钮)。
特征：无填充、橙红色边框、橙红色文字、居中对齐。
5. 字体与排版 (Typography & Hierarchy)

字体族: 无衬线字体 (Sans-serif)，如 PingFang SC, Helvetica, 或 Inter。
层级逻辑:
Level 1 (Title): 字号较大，字重加粗 (Bold)，用于用户昵称。
Level 2 (Label): 中等字号，字重适中，用于列表的 Key（如“性别”、“地区”）。
Level 3 (Value/Meta): 字号较小，颜色较浅，用于展示具体的详细数据。