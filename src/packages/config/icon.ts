import type {App} from "vue"
import {h} from "vue"
import {
    CloseOutline,
    RefreshCircleOutline,
    ChevronBackOutline,
    ChevronForwardOutline,
    Home,
    SettingsOutline
} from "@vicons/ionicons5"
import {StepBackwardFilled, StepForwardFilled, StopOutlined, SmileOutlined, UsergroupAddOutlined} from "@vicons/antd"
import {NIcon} from "naive-ui"

const icons = {
    Home,
    SettingsOutline,
    UsergroupAddOutlined,
    CloseOutline,
    RefreshCircleOutline,
    ChevronBackOutline,
    ChevronForwardOutline,
    StepBackwardFilled, StepForwardFilled, StopOutlined, SmileOutlined
}

function renderIcon(iconName: string) {
    return () => h(NIcon, null, {default: () => h(icons[iconName])})
}

const setupIcons = (app: App) => {
    app.component("Home", Home)
}

export default setupIcons
export {
    renderIcon
}