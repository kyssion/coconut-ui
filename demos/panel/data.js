import React from "react";

export const panelData = [
    ["参数", "说明", "类型", "可选值", "默认值"],
    ["title", "panel标题", "string|ReactNode", "--","--"],
    ["collapsible","是否可折叠","boolean","--","true"],
    ["expanded", "是否展开面板","boolean", "true false", "true"],
    ["showArrow","是否展示箭头，当不传入title时，也不会展示箭头","boolean", "true false", "true"],
    ["style", "自定义样式", "", "--", "--"],
    ["className", "自定义类名", "string[]", "--","--"]
]

export const PanelGroupData = [
    ["参数", "说明", "类型", "可选值", "默认值"],
    ["accordion","是否手风琴形式","boolean","true,false","false"]
]