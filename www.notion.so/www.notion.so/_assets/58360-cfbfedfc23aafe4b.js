"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [58360], {
        758360: (e, t, a) => {
            a.d(t, {
                K7: () => o,
                f8: () => l
            });
            var _ = a(296540);
            class n {
                constructor(e, t) {
                    this.aiChatType = e, this.checkGate = t
                }
                get isNewAgentModalVariant() {
                    return "new_agent_modal" === this.aiChatType
                }
                get isNoUserSpecifiedContextVariant() {
                    return "new_agent_modal" === this.aiChatType || "start_factory_task" === this.aiChatType
                }
                get supportsSimplifiedLayout() {
                    return "slippery_slope" === this.aiChatType
                }
                get selectionContextInsertionMode() {
                    return "none"
                }
                get supportsDebugButton() {
                    return "agent_mobile" !== this.aiChatType && "desktop_nosey" !== this.aiChatType
                }
                get isTokenUsageRingEnabled() {
                    return this.checkGate.isTokenUsageRingEnabled
                }
                get isMicInputEnabled() {
                    if (!this.checkGate.isTranscriptionEnabled) return !1;
                    switch (this.aiChatType) {
                        case "custom_agent_preview":
                        case "desktop_nosey":
                        case "new_agent_modal":
                        case "start_factory_task":
                        case "custom_agent_animated_modal":
                        case "agent_mobile":
                        case "agent_new_db_quick_access":
                        case "agent_db_filters":
                        case "agent_writer":
                        case "agent_collections_new_view":
                        case "infra_as_code":
                            return !1;
                        default:
                            return !0
                    }
                }
                get analyticsFromSourceForActions() {
                    return ({
                        agent: "agent",
                        agent_full_page: "agent_full_page",
                        agent_popup: "agent_popup",
                        agent_command_search: "agent_command_search",
                        custom_agent: "custom_agent",
                        custom_agent_activity: "custom_agent_activity",
                        custom_agent_preview: "custom_agent_preview",
                        desktop_nosey: "desktop_nosey",
                        full_page: "full_page",
                        ai_module: "full_page",
                        research_mode: "research_mode",
                        slippery_slope: "slippery_slope",
                        agent_collections_new_view: "agent_collections_new_view",
                        agent_new_db_quick_access: "agent_new_db_quick_access",
                        agent_db_filters: "agent_db_filters",
                        new_agent_modal: "new_agent_modal",
                        start_factory_task: "start_factory_task",
                        custom_agent_animated_modal: "new_agent_modal",
                        agent_mobile: "agent",
                        agent_writer: "agent_writer",
                        infra_as_code: "infra_as_code"
                    })[this.aiChatType]
                }
                get draftStorageKey() {
                    return ({
                        agent: "agent",
                        agent_full_page: "full_page",
                        agent_popup: "agent",
                        agent_command_search: "agent_command_search",
                        custom_agent: "custom_agent",
                        custom_agent_activity: "custom_agent",
                        custom_agent_preview: void 0,
                        desktop_nosey: "agent",
                        full_page: "full_page",
                        ai_module: "full_page",
                        research_mode: "full_page",
                        new_agent_modal: void 0,
                        start_factory_task: void 0,
                        custom_agent_animated_modal: void 0,
                        agent_mobile: "agent_mobile",
                        slippery_slope: void 0,
                        agent_new_db_quick_access: void 0,
                        agent_db_filters: void 0,
                        agent_writer: "agent",
                        agent_collections_new_view: void 0,
                        infra_as_code: void 0
                    })[this.aiChatType]
                }
                supportsMinimalTranscript() {
                    return "agent_writer" === this.aiChatType
                }
                get shouldCheckFeatureAvailabilityBeforeSubmit() {
                    return ({
                        agent: !1,
                        agent_full_page: !1,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: !1,
                        ai_module: !0,
                        research_mode: !1,
                        agent_new_db_quick_access: !0,
                        agent_db_filters: !0,
                        slippery_slope: !0,
                        agent_collections_new_view: !0,
                        new_agent_modal: !0,
                        start_factory_task: !0,
                        custom_agent_animated_modal: !0,
                        agent_mobile: !1,
                        agent_writer: !0,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get shouldShowUsageError() {
                    return ({
                        agent: !1,
                        agent_full_page: !1,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: !1,
                        ai_module: !0,
                        research_mode: !1,
                        agent_new_db_quick_access: !0,
                        agent_db_filters: !0,
                        slippery_slope: !0,
                        agent_collections_new_view: !0,
                        new_agent_modal: !0,
                        start_factory_task: !0,
                        custom_agent_animated_modal: !0,
                        agent_mobile: !1,
                        agent_writer: !0,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get chonkyStyles() {
                    return ({
                        agent: !1,
                        agent_full_page: !0,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: !1,
                        ai_module: !1,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !0,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                shouldAllowMentions(e) {
                    let t = {
                        researcher: !0,
                        search: !0,
                        workflow: !0,
                        "markdown-chat": !1,
                        "setup-generator": !0,
                        "debug-inference": !0,
                        "memory-agent": !0,
                        "summarize-transcript": !0,
                        "route-inference-transcript": !0,
                        "fast-researcher": !0,
                        aiBlock: !0,
                        formulas: !0,
                        "council-chat": !1
                    }[e];
                    return ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !0,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !0,
                        full_page: t,
                        ai_module: t,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !0,
                        agent_collections_new_view: !1,
                        new_agent_modal: !0,
                        start_factory_task: !0,
                        custom_agent_animated_modal: !0,
                        agent_mobile: !0,
                        agent_writer: !0,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get newChatRouteToAiHome() {
                    return ({
                        agent: !1,
                        agent_full_page: !0,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: !0,
                        ai_module: !1,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                shouldSupportAttachments(e) {
                    let t = {
                        researcher: !0,
                        search: !0,
                        workflow: !0,
                        "markdown-chat": !1,
                        "setup-generator": !1,
                        "debug-inference": !1,
                        "memory-agent": !1,
                        "summarize-transcript": !1,
                        "route-inference-transcript": !1,
                        "fast-researcher": !1,
                        aiBlock: !1,
                        formulas: !1,
                        "council-chat": !1
                    }[e];
                    return ({
                        agent: t,
                        agent_full_page: t,
                        agent_popup: t,
                        agent_command_search: t,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !0,
                        desktop_nosey: t,
                        full_page: t,
                        ai_module: t,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: t,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: t,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                isModelPickerLimited(e) {
                    let {
                        config: t,
                        mode: a,
                        threadMode: _
                    } = e;
                    return "workflow" === t.type && t.isCustomAgent ? {
                        action: "hide",
                        reason: "custom_agent_config"
                    } : "researcher" === t.type ? {
                        action: "disable",
                        reason: "researcher_config"
                    } : "runningInference" === a ? {
                        action: "disable",
                        reason: "running_inference"
                    } : "existingThread" !== _ || this.checkGate.isAllowModelSwitchingDuringChatEnabled ? void 0 : {
                        action: "disable",
                        reason: "existing_thread"
                    }
                }
                isChatCompletelyDisabled(e) {
                    return (0, a(722371).Xk)(i, e)
                }
                isChatSubmitDisabled(e) {
                    return (0, a(722371).Xk)(s, e) || this.isChatCompletelyDisabled(e)
                }
                get isSubmitOnReturnEnabled() {
                    return "agent_mobile" !== this.aiChatType
                }
                get isCommandEnterSubmitEnabled() {
                    return "agent_mobile" !== this.aiChatType
                }
                isChatReady(e) {
                    return "ready" === e
                }
                canUseSendDestinationShortcuts(e) {
                    let {
                        inputMode: t,
                        threadMode: a
                    } = e;
                    return "slippery_slope" === this.aiChatType && "newThread" === a && "ready" === t
                }
                supportsConfigTypeChanges(e) {
                    let {
                        mode: t,
                        threadMode: _
                    } = e;
                    return !!g[this.aiChatType] && "newThread" === _ && (0, a(722371).Xk)(r, t)
                }
                supportsWorkspaceContext(e) {
                    return "markdown-chat" !== e
                }
                supportsUserSpecifiedContext(e) {
                    return !this.isNoUserSpecifiedContextVariant && "agent_collections_new_view" !== this.aiChatType && "agent_new_db_quick_access" !== this.aiChatType && "agent_db_filters" !== this.aiChatType && "custom_agent" !== this.aiChatType && ("workflow" === e || "researcher" === e)
                }
                supportsScopePicker(e) {
                    return "workflow" === e || "researcher" === e || "search" === e
                }
                get showWelcomeMessage() {
                    return ({
                        agent: !1,
                        agent_full_page: !1,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: !0,
                        ai_module: !1,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get supportsModePicker() {
                    return ({
                        agent: !1,
                        agent_full_page: !1,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: !0,
                        ai_module: !0,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !0,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get showModelButton() {
                    return ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !0,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !0,
                        desktop_nosey: !0,
                        full_page: !0,
                        ai_module: !0,
                        research_mode: !0,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !0,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !0,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get adaptiveMenuType() {
                    return "agent_mobile" === this.aiChatType ? a(649476).gu.Modal : a(649476).gu.Popup
                }
                get adaptiveMenuPopupType() {
                    return "agent_mobile" === this.aiChatType ? a(423291).n.BottomSheet : a(423291).n.Popup
                }
                get supportsChatSidebarModes() {
                    return ({
                        agent: !0,
                        agent_full_page: !1,
                        agent_popup: !0,
                        agent_command_search: !1,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: !1,
                        ai_module: !1,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !0,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get supportsTallChatHeader() {
                    return "agent_mobile" === this.aiChatType
                }
                get supportsThreadInvites() {
                    return this.checkGate.isMultiPlayerChatEnabled ? ? !1
                }
                get isCouncilChatEnabled() {
                    return this.checkGate.isCouncilChatEnabled ? ? !1
                }
                get supportsCouncilChat() {
                    return !!this.isCouncilChatEnabled && (0, a(722371).Xk)(c, this.aiChatType)
                }
                get threadInviteButtonVariant() {
                    let e = {
                        sidebar: "icon",
                        popup: "icon",
                        full_page: "default",
                        side_peek: "hidden"
                    };
                    return ({
                        agent: e[this.agentChatFormFactor],
                        agent_full_page: "default",
                        agent_popup: e[this.agentChatFormFactor],
                        agent_command_search: "hidden",
                        custom_agent: e[this.agentChatFormFactor],
                        custom_agent_activity: e[this.agentChatFormFactor],
                        custom_agent_preview: e[this.agentChatFormFactor],
                        full_page: e[this.agentChatFormFactor],
                        ai_module: "hidden",
                        research_mode: "hidden",
                        agent_new_db_quick_access: "hidden",
                        agent_db_filters: "hidden",
                        slippery_slope: e[this.agentChatFormFactor],
                        agent_collections_new_view: "hidden",
                        new_agent_modal: "hidden",
                        start_factory_task: "hidden",
                        custom_agent_animated_modal: "hidden",
                        agent_mobile: "hidden",
                        agent_writer: "hidden",
                        desktop_nosey: "hidden",
                        infra_as_code: "hidden"
                    })[this.aiChatType]
                }
                get supportsChatActionsOnHover() {
                    return "agent_mobile" !== this.aiChatType
                }
                get supportsChatSidebarModeButton() {
                    return ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !0,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: !0,
                        ai_module: !0,
                        research_mode: !0,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get showUserContextOnlyWhenFocused() {
                    return ({
                        agent: !1,
                        agent_full_page: !1,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: !1,
                        ai_module: !1,
                        research_mode: !1,
                        agent_collections_new_view: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !0,
                        new_agent_modal: !0,
                        start_factory_task: !0,
                        custom_agent_animated_modal: !0,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get isAgentChat() {
                    return ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !0,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !0,
                        full_page: !1,
                        ai_module: !1,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !0,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !0,
                        agent_writer: !0,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get agentChatFormFactor() {
                    return ({
                        agent: "sidebar",
                        agent_full_page: "full_page",
                        agent_popup: "popup",
                        agent_mobile: "full_page",
                        agent_command_search: "popup",
                        custom_agent: "full_page",
                        custom_agent_activity: "full_page",
                        custom_agent_preview: "popup",
                        desktop_nosey: "popup",
                        full_page: "full_page",
                        ai_module: "full_page",
                        research_mode: "full_page",
                        agent_new_db_quick_access: "popup",
                        agent_db_filters: "popup",
                        slippery_slope: "sidebar",
                        agent_collections_new_view: "popup",
                        new_agent_modal: "popup",
                        start_factory_task: "popup",
                        custom_agent_animated_modal: "popup",
                        agent_writer: "full_page",
                        infra_as_code: "full_page"
                    })[this.aiChatType]
                }
                get recordLastOpenState() {
                    return ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !0,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !0,
                        full_page: !0,
                        ai_module: !0,
                        research_mode: !0,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !0,
                        agent_writer: !0,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                supportsSearchScopePopup(e) {
                    let t = {
                        researcher: !0,
                        search: !0,
                        workflow: !0,
                        "markdown-chat": !1,
                        "setup-generator": !1,
                        "debug-inference": !1,
                        "memory-agent": !1,
                        "summarize-transcript": !1,
                        "route-inference-transcript": !1,
                        "fast-researcher": !1,
                        aiBlock: !1,
                        formulas: !1,
                        "council-chat": !1
                    }[e];
                    return ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !0,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !0,
                        desktop_nosey: !0,
                        full_page: t,
                        ai_module: t,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !0,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !0,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get supportsCollapsiblePanel() {
                    return ({
                        agent: !1,
                        agent_full_page: !0,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !0,
                        desktop_nosey: !1,
                        full_page: !0,
                        ai_module: !1,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !0,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get supportsNotionSidebarButton() {
                    return ({
                        agent: !1,
                        agent_full_page: !0,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !0,
                        desktop_nosey: !1,
                        full_page: !0,
                        ai_module: !1,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get supportsThreadHistoryPicker() {
                    return ({
                        agent: !0,
                        agent_full_page: !1,
                        agent_popup: !0,
                        agent_command_search: !1,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !1,
                        desktop_nosey: !0,
                        full_page: !1,
                        ai_module: !1,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !0,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get supportsBlurOnToolExpand() {
                    return "agent_mobile" === this.aiChatType
                }
                supportsWebSearch(e) {
                    if (this.checkGate.isZeroRetentionEnabled || this.checkGate.isWebSearchDisabledInSpace) return !1;
                    let t = {
                        researcher: !0,
                        search: this.checkGate.isWebSearchInUnifiedFindEnabled,
                        workflow: !0,
                        "markdown-chat": !1,
                        "setup-generator": !1,
                        "debug-inference": !1,
                        "memory-agent": !1,
                        "summarize-transcript": !1,
                        "route-inference-transcript": !1,
                        "fast-researcher": !1,
                        aiBlock: !1,
                        formulas: !1,
                        "council-chat": !0
                    }[e];
                    return ({
                        agent: t,
                        agent_full_page: t,
                        agent_popup: t,
                        agent_command_search: t,
                        custom_agent: t,
                        custom_agent_activity: t,
                        custom_agent_preview: t,
                        desktop_nosey: t,
                        full_page: t,
                        ai_module: t,
                        research_mode: !0,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !0,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: t,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                supportsStopInference(e) {
                    return "researcher" !== e
                }
                get supportsChatHeader() {
                    return ("slippery_slope" !== this.aiChatType || !this.checkGate.isSlipperySlopeSecondarySidebarChatEnabled) && ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !1,
                        custom_agent: !0,
                        custom_agent_activity: !1,
                        custom_agent_preview: !0,
                        desktop_nosey: !0,
                        full_page: !0,
                        ai_module: !1,
                        research_mode: !0,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !0,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !0,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get supportsHeaderMenu() {
                    return !!this.checkGate.isThreadActionsMenuEnabled && ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !1,
                        custom_agent: !0,
                        custom_agent_activity: !1,
                        custom_agent_preview: !0,
                        desktop_nosey: !1,
                        full_page: !0,
                        ai_module: !1,
                        research_mode: !0,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get isThreadActionsMenuEnabled() {
                    return this.checkGate.isThreadActionsMenuEnabled
                }
                get shouldUseIncrementalMarkdownRendering() {
                    return this.checkGate.isIncrementalMarkdownRenderingEnabled
                }
                supportsSearchResults(e) {
                    return ({
                        agent: !1,
                        agent_full_page: !1,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: (0, a(187353).av)(e) && this.checkGate.isHomeAiShowSearchResultsEnabled,
                        ai_module: !1,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                supportsUpdatingExistingPersonalizationSettings() {
                    return ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !1,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !0,
                        desktop_nosey: !0,
                        full_page: !0,
                        ai_module: !0,
                        research_mode: !0,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !0,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                shouldTrackInputMetrics(e) {
                    return ({
                        agent: !1,
                        agent_full_page: !1,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: (0, a(187353).av)(e),
                        ai_module: !0,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get chatViewMinWidth() {
                    return ({
                        agent: void 0,
                        agent_full_page: 300,
                        agent_popup: void 0,
                        agent_command_search: void 0,
                        custom_agent: void 0,
                        custom_agent_activity: void 0,
                        custom_agent_preview: void 0,
                        desktop_nosey: void 0,
                        full_page: 300,
                        ai_module: 300,
                        research_mode: void 0,
                        slippery_slope: void 0,
                        agent_collections_new_view: void 0,
                        agent_new_db_quick_access: void 0,
                        agent_db_filters: void 0,
                        new_agent_modal: void 0,
                        start_factory_task: void 0,
                        custom_agent_animated_modal: void 0,
                        agent_mobile: void 0,
                        agent_writer: void 0,
                        infra_as_code: void 0
                    })[this.aiChatType]
                }
                get chatInputWidth() {
                    return ({
                        agent: "100%",
                        agent_full_page: 742,
                        agent_popup: 710,
                        agent_command_search: "100%",
                        custom_agent: 742,
                        custom_agent_activity: 742,
                        custom_agent_preview: 710,
                        desktop_nosey: 710,
                        full_page: 710,
                        ai_module: 710,
                        research_mode: 710,
                        agent_new_db_quick_access: "100%",
                        agent_db_filters: "100%",
                        slippery_slope: "100%",
                        agent_collections_new_view: "100%",
                        new_agent_modal: "100%",
                        start_factory_task: "100%",
                        custom_agent_animated_modal: "100%",
                        agent_mobile: "100%",
                        agent_writer: "100%",
                        infra_as_code: "100%"
                    })[this.aiChatType]
                }
                get chatInputPadding() {
                    return ({
                        agent: "0 16px",
                        agent_full_page: "0 24px",
                        agent_popup: "0 16px",
                        agent_command_search: "0 16px",
                        custom_agent: "0 24px",
                        custom_agent_activity: "0 24px",
                        custom_agent_preview: "0 16px",
                        desktop_nosey: "0 16px",
                        full_page: "0 16px",
                        ai_module: "0px",
                        research_mode: "0 16px",
                        agent_new_db_quick_access: "0px",
                        agent_db_filters: "0px",
                        slippery_slope: "0px 16px",
                        agent_collections_new_view: "0px",
                        new_agent_modal: "0px",
                        start_factory_task: "0px",
                        custom_agent_animated_modal: "0px",
                        agent_mobile: "0 8px",
                        agent_writer: "0 16px",
                        infra_as_code: "0 16px"
                    })[this.aiChatType]
                }
                get chatInputContainerPadding() {
                    return "agent_mobile" === this.aiChatType ? "0 0 8px 0" : this.chonkyStyles ? "0 0 24px" : "0 0 16px"
                }
                get chatInputContainerMinHeight() {
                    return "new_agent_modal" === this.aiChatType || "start_factory_task" === this.aiChatType ? "md" : "agent_collections_new_view" === this.aiChatType || "agent_new_db_quick_access" === this.aiChatType || "agent_db_filters" === this.aiChatType || "custom_agent_animated_modal" === this.aiChatType ? "sm" : "default"
                }
                get extraSpaciousStyle() {
                    return "ai_module" === this.aiChatType
                }
                get chatInputHeightCanGrow() {
                    return ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !0,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !0,
                        desktop_nosey: !0,
                        full_page: !0,
                        ai_module: !0,
                        research_mode: !0,
                        agent_collections_new_view: !1,
                        agent_new_db_quick_access: !0,
                        agent_db_filters: !0,
                        slippery_slope: !0,
                        new_agent_modal: !0,
                        start_factory_task: !0,
                        custom_agent_animated_modal: !0,
                        agent_mobile: !0,
                        agent_writer: !0,
                        infra_as_code: !0
                    })[this.aiChatType]
                }
                get isSingleLineInput() {
                    return "agent_collections_new_view" === this.aiChatType
                }
                get suggestedActionsContainerPadding() {
                    return "agent_mobile" === this.aiChatType ? {
                        paddingInlineStart: 16,
                        paddingInlineEnd: 16,
                        paddingBlockStart: 0
                    } : "full_page" === this.agentChatFormFactor ? {
                        paddingBlockStart: 16,
                        paddingInlineEnd: 24,
                        paddingBlockEnd: 0,
                        paddingInlineStart: 24,
                        marginInlineStart: "auto"
                    } : {
                        paddingBlockStart: 16,
                        paddingInlineEnd: 16,
                        paddingBlockEnd: 0,
                        paddingInlineStart: 16,
                        marginInlineStart: "auto"
                    }
                }
                get chatInputWrapperPadding() {
                    return ({
                        agent: "0 0 12px",
                        agent_full_page: "0 0 12px",
                        agent_popup: "0 0 12px",
                        agent_command_search: "0 0 12px",
                        custom_agent: "0 0 12px",
                        custom_agent_activity: "0 0 12px",
                        custom_agent_preview: "0 0 12px",
                        desktop_nosey: "0 0 12px",
                        full_page: "0 0 24px",
                        ai_module: "0",
                        research_mode: "0 0 12px",
                        agent_new_db_quick_access: "0",
                        agent_db_filters: "0",
                        slippery_slope: "0",
                        agent_collections_new_view: "0",
                        new_agent_modal: "0",
                        start_factory_task: "0",
                        custom_agent_animated_modal: "0",
                        agent_mobile: "0 0px",
                        agent_writer: "0 0 12px",
                        infra_as_code: "0 0 12px"
                    })[this.aiChatType]
                }
                get shouldShowInlineSubmit() {
                    return "agent_collections_new_view" === this.aiChatType || "agent_new_db_quick_access" === this.aiChatType || "agent_db_filters" === this.aiChatType
                }
                get shouldShowSimplifiedInputSourceControls() {
                    return ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !0,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !0,
                        desktop_nosey: !0,
                        full_page: !0,
                        ai_module: !0,
                        research_mode: !0,
                        agent_new_db_quick_access: !0,
                        agent_db_filters: !0,
                        slippery_slope: !0,
                        agent_collections_new_view: !0,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !0,
                        agent_writer: !0,
                        infra_as_code: !0
                    })[this.aiChatType]
                }
                get shouldHaveInitialFocusOnInput() {
                    return ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !0,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !0,
                        desktop_nosey: !0,
                        full_page: !0,
                        ai_module: !0,
                        research_mode: !0,
                        agent_new_db_quick_access: !0,
                        agent_db_filters: !0,
                        slippery_slope: !1,
                        agent_collections_new_view: !0,
                        new_agent_modal: !0,
                        start_factory_task: !0,
                        custom_agent_animated_modal: !0,
                        agent_mobile: !1,
                        agent_writer: !0,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get shouldShowSuggestedActions() {
                    return ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !1,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !0,
                        desktop_nosey: !0,
                        full_page: !0,
                        ai_module: !0,
                        research_mode: !0,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !0,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !0,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get emptyContainerBottomPadding() {
                    return "slippery_slope" === this.aiChatType && this.checkGate.isSlipperySlopeSecondarySidebarChatEnabled ? 16 : ({
                        agent: 16,
                        agent_full_page: 0,
                        agent_popup: 16,
                        agent_command_search: 32,
                        custom_agent: 0,
                        custom_agent_activity: 0,
                        custom_agent_preview: 0,
                        desktop_nosey: 16,
                        full_page: 0,
                        ai_module: 0,
                        research_mode: 0,
                        custom_agent_animated_modal: 0,
                        agent_new_db_quick_access: 0,
                        agent_db_filters: 0,
                        slippery_slope: 0,
                        agent_collections_new_view: 0,
                        new_agent_modal: 0,
                        start_factory_task: 0,
                        agent_mobile: 16,
                        agent_writer: 16,
                        infra_as_code: 0
                    })[this.aiChatType]
                }
                get shouldHaveDelayedFocusOnInput() {
                    return "agent_mobile" === this.aiChatType
                }
                get contextStepSurface() {
                    return ({
                        agent: "workflows",
                        agent_full_page: "full_page_chat",
                        agent_popup: "workflows",
                        agent_command_search: "workflows",
                        custom_agent: "custom_agent",
                        custom_agent_activity: "custom_agent",
                        custom_agent_preview: "custom_agent",
                        desktop_nosey: "workflows",
                        full_page: "full_page_chat",
                        ai_module: "ai_module",
                        research_mode: "full_page_chat",
                        agent_new_db_quick_access: "new_db_quick_access",
                        agent_db_filters: "database_filters",
                        slippery_slope: "slippery_slope_sidebar",
                        agent_collections_new_view: "new_view_quick_access",
                        new_agent_modal: "workflows",
                        start_factory_task: "workflows",
                        custom_agent_animated_modal: "workflows",
                        agent_mobile: "workflows",
                        agent_writer: "writer",
                        infra_as_code: "workflows"
                    })[this.aiChatType]
                }
                get shouldMeasureInputToTranscriptRender() {
                    return ({
                        agent: !1,
                        agent_full_page: !1,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: !1,
                        ai_module: !0,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get analyticsEntrypointsForUpsell() {
                    return ({
                        agent: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        agent_full_page: {
                            upgradeRequestAnalyticsEntrypoint: "ai_full_page_chat",
                            upgradeRequestEntrypoint: "ai_chat"
                        },
                        agent_popup: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        agent_mobile: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        agent_command_search: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        custom_agent: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        custom_agent_activity: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        custom_agent_preview: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        desktop_nosey: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        full_page: {
                            upgradeRequestAnalyticsEntrypoint: "ai_full_page_chat",
                            upgradeRequestEntrypoint: "ai_chat"
                        },
                        ai_module: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        research_mode: {
                            upgradeRequestAnalyticsEntrypoint: "ai_full_page_chat",
                            upgradeRequestEntrypoint: "ai_research_mode"
                        },
                        agent_new_db_quick_access: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        agent_db_filters: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        slippery_slope: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        agent_collections_new_view: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        new_agent_modal: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        start_factory_task: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        custom_agent_animated_modal: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        agent_writer: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        },
                        infra_as_code: {
                            upgradeRequestAnalyticsEntrypoint: "ai_agent",
                            upgradeRequestEntrypoint: "ai_agent"
                        }
                    })[this.aiChatType]
                }
                get analyticsSourceForResearchMode() {
                    return ({
                        ai_module: "welcome_page",
                        full_page: "welcome_page",
                        research_mode: void 0,
                        agent: void 0,
                        agent_full_page: void 0,
                        agent_popup: void 0,
                        agent_command_search: void 0,
                        custom_agent: void 0,
                        custom_agent_activity: void 0,
                        custom_agent_preview: void 0,
                        desktop_nosey: void 0,
                        new_agent_modal: void 0,
                        start_factory_task: void 0,
                        custom_agent_animated_modal: void 0,
                        agent_mobile: void 0,
                        slippery_slope: void 0,
                        agent_new_db_quick_access: void 0,
                        agent_db_filters: void 0,
                        agent_writer: void 0,
                        agent_collections_new_view: void 0,
                        infra_as_code: void 0
                    })[this.aiChatType]
                }
                analyticsSource(e) {
                    return (0, a(187353).av)(e) ? this.contextStepSurface : "follow_up_chat"
                }
                get supportsBlueFocusRing() {
                    return ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !0,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !0,
                        desktop_nosey: !0,
                        full_page: !0,
                        ai_module: !0,
                        research_mode: !0,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !0,
                        agent_collections_new_view: !1,
                        new_agent_modal: !0,
                        start_factory_task: !0,
                        custom_agent_animated_modal: !0,
                        agent_mobile: !1,
                        agent_writer: !0,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get supportsRenderingPermissionError() {
                    return ({
                        agent: !1,
                        agent_full_page: !1,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !0,
                        desktop_nosey: !1,
                        full_page: !1,
                        ai_module: !1,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get supportsDetailedError() {
                    return ({
                        agent: !1,
                        agent_full_page: !1,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !0,
                        custom_agent_activity: !0,
                        custom_agent_preview: !0,
                        desktop_nosey: !1,
                        full_page: !1,
                        ai_module: !1,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get supportsConnectorsBanner() {
                    return ({
                        agent: !1,
                        agent_full_page: !1,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: !1,
                        ai_module: !0,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get agentEmptyStateFormat() {
                    return ({
                        agent: "default",
                        agent_full_page: "default",
                        agent_popup: "default",
                        agent_command_search: "default",
                        custom_agent: "default",
                        custom_agent_activity: "default",
                        custom_agent_preview: "default",
                        desktop_nosey: "default",
                        full_page: "default",
                        ai_module: "centered",
                        research_mode: "default",
                        agent_new_db_quick_access: "default",
                        agent_db_filters: "default",
                        slippery_slope: "default",
                        agent_collections_new_view: "default",
                        new_agent_modal: "default",
                        start_factory_task: "default",
                        custom_agent_animated_modal: "default",
                        agent_mobile: "compact",
                        agent_writer: "default",
                        infra_as_code: "default"
                    })[this.aiChatType]
                }
                get agentSuggestedActionsDisplay() {
                    return "ai_module" === this.aiChatType && this.checkGate.isSuggestionCardsOnAiHomeEnabled ? "card" : ({
                        agent: "list",
                        agent_full_page: "list",
                        agent_popup: "list",
                        agent_command_search: "list",
                        custom_agent: "list",
                        custom_agent_activity: "list",
                        custom_agent_preview: "list",
                        desktop_nosey: "list",
                        full_page: "list",
                        ai_module: "pill",
                        research_mode: "list",
                        agent_new_db_quick_access: "list",
                        agent_db_filters: "list",
                        slippery_slope: "list",
                        agent_collections_new_view: "list",
                        new_agent_modal: "list",
                        start_factory_task: "list",
                        custom_agent_animated_modal: "list",
                        agent_mobile: "list",
                        agent_writer: "list",
                        infra_as_code: "list"
                    })[this.aiChatType]
                }
                get hasAgentBackground() {
                    return ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !0,
                        full_page: !1,
                        ai_module: !1,
                        research_mode: !1,
                        agent_new_db_quick_access: !1,
                        agent_db_filters: !1,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get agentSuggestedActionsPlacementRelativeToChat() {
                    return ({
                        agent: "above",
                        agent_full_page: "above",
                        agent_popup: "above",
                        agent_command_search: "above",
                        custom_agent: "above",
                        custom_agent_activity: "above",
                        custom_agent_preview: "above",
                        desktop_nosey: "above",
                        full_page: "above",
                        ai_module: "below",
                        research_mode: "above",
                        agent_new_db_quick_access: "above",
                        agent_db_filters: "above",
                        slippery_slope: "above",
                        agent_collections_new_view: "above",
                        new_agent_modal: "above",
                        start_factory_task: "above",
                        custom_agent_animated_modal: "above",
                        agent_mobile: "above",
                        agent_writer: "above",
                        infra_as_code: "above"
                    })[this.aiChatType]
                }
                get headerButtonShape() {
                    return ({
                        agent: "roundrect",
                        agent_full_page: "roundrect",
                        agent_popup: "pill",
                        agent_command_search: "pill",
                        custom_agent: "roundrect",
                        custom_agent_activity: "roundrect",
                        custom_agent_preview: "roundrect",
                        desktop_nosey: "pill",
                        full_page: "roundrect",
                        ai_module: "roundrect",
                        research_mode: "roundrect",
                        agent_new_db_quick_access: "roundrect",
                        agent_db_filters: "roundrect",
                        slippery_slope: "pill",
                        agent_collections_new_view: "roundrect",
                        new_agent_modal: "roundrect",
                        start_factory_task: "roundrect",
                        custom_agent_animated_modal: "roundrect",
                        agent_mobile: "roundrect",
                        agent_writer: "roundrect",
                        infra_as_code: "roundrect"
                    })[this.aiChatType]
                }
                get usesElevatedDarkModeBackground() {
                    return "agent_popup" === this.aiChatType || "desktop_nosey" === this.aiChatType || "slippery_slope" === this.aiChatType
                }
                get supportsConnectingNewIntegrations() {
                    return "agent_mobile" !== this.aiChatType
                }
                get agentToolDiffRowIconContainerStyles() {
                    return "agent_mobile" === this.aiChatType ? {
                        marginInlineStart: 4
                    } : {}
                }
                get toolUsePartMarginInline() {
                    return "agent_mobile" === this.aiChatType ? 6 : void 0
                }
                get supportsClearSelectionOnSubmit() {
                    return "agent_mobile" === this.aiChatType
                }
                shouldShowAgentAttribution(e, t) {
                    return void 0 === t && (0, a(60123).T)(e)
                }
                get unifiedChatInputModeButtonStyleKey() {
                    return "agent_mobile" === this.aiChatType ? "bodySmMedium" : "bodyMedium"
                }
                get onlyShowAgentThreads() {
                    return "agent_mobile" === this.aiChatType
                }
                get shouldShowActionsInStep() {
                    return ({
                        agent: !0,
                        agent_full_page: !0,
                        agent_popup: !0,
                        agent_command_search: !0,
                        custom_agent: !0,
                        custom_agent_preview: !0,
                        desktop_nosey: !0,
                        full_page: !0,
                        ai_module: !0,
                        research_mode: !0,
                        agent_new_db_quick_access: !0,
                        agent_db_filters: !0,
                        slippery_slope: !0,
                        agent_collections_new_view: !0,
                        new_agent_modal: !0,
                        start_factory_task: !0,
                        custom_agent_animated_modal: !0,
                        agent_mobile: !0,
                        custom_agent_activity: !0,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get isChatInputElevated() {
                    return "slippery_slope" !== this.aiChatType && "ai_module" === this.aiChatType
                }
                get shouldRenderHeadless() {
                    return ({
                        agent: !1,
                        agent_full_page: !1,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: !1,
                        ai_module: !1,
                        research_mode: !1,
                        agent_new_db_quick_access: !0,
                        agent_db_filters: !0,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
                get shouldUseCompactSubmitButton() {
                    return ({
                        agent: !1,
                        agent_full_page: !1,
                        agent_popup: !1,
                        agent_command_search: !1,
                        custom_agent: !1,
                        custom_agent_activity: !1,
                        custom_agent_preview: !1,
                        desktop_nosey: !1,
                        full_page: !1,
                        ai_module: !1,
                        research_mode: !1,
                        agent_new_db_quick_access: !0,
                        agent_db_filters: !0,
                        slippery_slope: !1,
                        agent_collections_new_view: !1,
                        new_agent_modal: !1,
                        start_factory_task: !1,
                        custom_agent_animated_modal: !1,
                        agent_mobile: !1,
                        agent_writer: !1,
                        infra_as_code: !1
                    })[this.aiChatType]
                }
            }

            function o(e) {
                let t = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore),
                    o = (0, a(682985).K8)(() => (0, a(851099).A)(t), [t]),
                    i = (0, a(682985).K8)(() => !!(null == t ? void 0 : t.getSetting("disable_ai_web_search")), [t]),
                    s = (0, a(83208).X)("ai_web_search_enabled_for_unified_find"),
                    r = (0, a(83208).X)("suggestion_cards_on_ai_home"),
                    g = (0, a(853284).U)(),
                    c = (0, a(83208).X)("ai_multi_player_chat"),
                    l = (0, a(83208).X)("council_chat_enabled"),
                    p = (0, a(83208).X)("ai_allow_model_switching_during_chat"),
                    u = (0, a(83208).X)("ai_thread_actions_menu"),
                    d = (0, a(83208).X)("agent_incremental_block_render"),
                    m = (0, a(83208).X)("ai_agent_token_usage_ring"),
                    h = "on" === (0, a(604306).r)("ai_product_retention_agent_transcription"),
                    y = (0, a(682985).K8)(() => "on" === a(218744).default.getEligibleGroup({
                        experimentId: "home_ai_input_show_search_results",
                        defaultGroup: "control"
                    }), []);
                return (0, _.useMemo)(() => new n(e, {
                    isZeroRetentionEnabled: o,
                    isWebSearchDisabledInSpace: i,
                    isWebSearchInUnifiedFindEnabled: s,
                    isHomeAiShowSearchResultsEnabled: y,
                    isSuggestionCardsOnAiHomeEnabled: r,
                    isAllowModelSwitchingDuringChatEnabled: p,
                    isSlipperySlopeEnabled: g,
                    isSlipperySlopeSecondarySidebarChatEnabled: g,
                    isMultiPlayerChatEnabled: c,
                    isCouncilChatEnabled: l,
                    isThreadActionsMenuEnabled: u,
                    isIncrementalMarkdownRenderingEnabled: d,
                    isTokenUsageRingEnabled: m,
                    isTranscriptionEnabled: h
                }), [e, o, i, s, y, r, p, g, g, c, l, u, d, m, h])
            }
            let i = ["readOnlyThread", "aiDisabled"],
                s = ["configTypeDown", "modelProviderDown", "upgradeRequired", "uploadingFiles", "filesRequireConfirmation", "recording", "runningInference", "error", "pendingStop", "noContent"],
                r = ["ready", "configTypeDown", "modelProviderDown", "upgradeRequired", "recording", "uploadingFiles", "noContent"],
                g = {
                    agent: !1,
                    agent_full_page: !1,
                    agent_popup: !1,
                    agent_command_search: !1,
                    custom_agent: !1,
                    custom_agent_activity: !1,
                    custom_agent_preview: !1,
                    desktop_nosey: !1,
                    full_page: !0,
                    ai_module: !0,
                    research_mode: !1,
                    agent_new_db_quick_access: !1,
                    agent_db_filters: !1,
                    slippery_slope: !1,
                    agent_collections_new_view: !1,
                    new_agent_modal: !1,
                    start_factory_task: !1,
                    custom_agent_animated_modal: !1,
                    agent_mobile: !1,
                    agent_writer: !1,
                    infra_as_code: !1
                },
                c = ["full_page", "ai_module", "slippery_slope", "agent", "agent_full_page", "agent_popup", "agent_command_search", "agent_mobile"];

            function l(e) {
                return "desktop_nosey" === e
            }
        },
        851099: (e, t, a) => {
            a.d(t, {
                A: () => _
            });

            function _(e) {
                return !!e && e.getZeroRetentionEnabled()
            }
        }
    }
]);