"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [41049], {
        241049: (e, t, i) => {
            i.d(t, {
                A8: () => a,
                B0: () => m,
                DW: () => _,
                EN: () => p,
                EZ: () => y,
                Gz: () => u,
                Qn: () => r,
                RN: () => d,
                TT: () => l,
                _T: () => T,
                aS: () => f,
                bI: () => n,
                iX: () => g,
                l: () => c,
                rc: () => s
            }), i(16280), i(898992), i(823215), i(354520), i(581454), i(737550);
            var o = i.n(i(844751));

            function r(e) {
                let {
                    automationStore: t,
                    collectionStore: o,
                    typecheckResult: r
                } = e, a = o.getSchema(), s = t.getKeyStore("properties").getKeyStore("name").getValue();
                if (!(null != s && s.trim()) || !(0, i(976298).aE)({
                        automationTrigger: t.getTrigger(),
                        collectionSchema: a
                    })) return !1;
                let l = t.getActionStores().filter(e => e.isDefined());
                return 0 !== l.length && l.every(e => n({
                    actionStore: e,
                    collectionStore: o,
                    typecheckResult: r
                }))
            }

            function n(e) {
                let {
                    actionStore: t,
                    collectionStore: o,
                    typecheckResult: r
                } = e;
                if ((0, i(933743).getValidationErrorsForAction)(r, t.id).length > 0) return !1;
                if (t.isType("slack_notification")) return (0, i(722371).O9)(t.getConfigStore().getKeyStore("external_bot_id").getValue()) && (0, i(722371).O9)(t.getConfigStore().getKeyStore("target").getValue());
                if (t.isType("send_gmail_notification")) {
                    let e = t.getConfigStore(),
                        o = e.getKeyStore("to").getValue(),
                        r = e.getKeyStore("email_subject").getValue(),
                        n = e.getKeyStore("email_body").getValue();
                    return !(!r || !n || (0, i(247438).w9s)(r.value) || (0, i(247438).w9s)(n.value) || !o || !o.value || !o.value.value || i(381453).Im(o.value.value))
                }
                if (t.isType("update_pages")) {
                    let e = t.getConfigStore().getKeyStore("target").getValue(),
                        n = t.getConfigStore().getKeyStore("properties").getValue() ? ? [];
                    if (!(0, i(722371).O9)(e) || 0 === n.length) return !1;
                    if ("collection" === e.type) {
                        let t = i(356912).m.createChildStore(o, e.collection).getSchema();
                        if (n.some(e => (0, i(976298).PP)({
                                property: e,
                                collectionSchema: t
                            }) || (0, i(976298).TK)({
                                collectionSchema: t,
                                property: e,
                                type: "action"
                            }))) return !1
                    } else if ("variable" === e.type) {
                        let s = (0, i(297493).y5)(e.id);
                        if ("global" === s.source && "button_page" === s.global) {
                            let e = o.getSchema();
                            if (n.some(t => (0, i(976298).PP)({
                                    property: t,
                                    collectionSchema: e
                                }) || (0, i(976298).TK)({
                                    collectionSchema: e,
                                    property: t,
                                    type: "action"
                                }))) return !1
                        } else {
                            if (i(300441).Q.isFail(r)) return !1;
                            let o = (0, i(297493).IV)(r.value.valueTypes, e.id),
                                s = o ? a(o, t) : void 0;
                            if (!s) return !1;
                            let l = s.getSchema();
                            if (n.some(e => (0, i(976298).PP)({
                                    property: e,
                                    collectionSchema: l
                                }) || (0, i(976298).TK)({
                                    collectionSchema: l,
                                    property: e,
                                    type: "action"
                                }))) return !1
                        }
                    } else {
                        if ("page" === e.type) return !1;
                        (0, i(722371).HB)(e)
                    }
                    return !0
                }
                if (t.isType("create_page")) {
                    let e = t.getConfigStore().getKeyStore("collection").getValue();
                    if (!(0, i(722371).O9)(e)) return !1;
                    let r = i(356912).m.createChildStore(o, e).getSchema();
                    return !(t.getConfigStore().getKeyStore("properties").getValue() ? ? []).some(e => (0, i(976298).PP)({
                        property: e,
                        collectionSchema: r
                    }) || (0, i(976298).TK)({
                        collectionSchema: r,
                        property: e,
                        type: "action"
                    }))
                }
                if (t.isType("send_in_app_notification")) {
                    let e = t.getConfigStore(),
                        o = e.getKeyStore("target").getValue(),
                        r = e.getKeyStore("notification_message").getValue();
                    if (!o || !r || (0, i(247438).w9s)(r.value)) return !1;
                    switch (o.type) {
                        case "property":
                            if (!o.propertyId || !o.collectionPointer) return !1;
                            break;
                        case "formula":
                            if (!o.value || !o.value.value || i(381453).Im(o.value.value)) return !1
                    }
                    return !0
                } else if (t.isType("define_variables")) return !0;
                else if (t.isType("http_request")) return !0;
                else if (t.isType("publish_site")) {
                    let e = t.getConfigStore().getKeyStore("target").getValue();
                    return !!(0, i(722371).O9)(e)
                } else if (t.isType("worker")) return !0;
                else if (t.isType("archive_pages")) {
                    let e = t.getConfigStore().getKeyStore("target").getValue();
                    return !!(0, i(722371).O9)(e)
                } else throw Error(`isActionStoreComplete not implemented for ${t.getType()}`)
            }

            function a(e, t) {
                let o;
                return "block" === e.type.type && e.type.collection ? o = i(356912).m.createChildStore(t, e.type.collection) : "array" === e.type.type && "block" === e.type.of.type && e.type.of.collection && (o = i(356912).m.createChildStore(t, e.type.of.collection)), o
            }
            async function s(e) {
                let {
                    collectionStore: t
                } = e;
                if (!t || (0, i(862085).qe)(t) || (0, i(862085).X6)(t) || !await (0, i(655293).S)(t.environment, {
                        name: "premium_automations",
                        spaceId: t.getSpaceId(),
                        userId: t.userId
                    })) return !1;
                let o = t.pointer,
                    r = t.getSpaceId();
                return (0, i(746094).rM)({
                    targetTriggerType: "event",
                    targetParentPointer: o,
                    targetSpaceId: r
                }).every(({
                    pointer: e,
                    minimumRequiredRole: o
                }) => {
                    let r = t.getRecordRole(e);
                    return !!r && (0, i(138798).q_)(r, o)
                })
            }
            async function l(e) {
                let {
                    automationStore: t,
                    actionStores: o,
                    collectionStore: r
                } = e, n = t.getParentStore();
                if (!n || (0, i(862085).qe)(n) || (0, i(862085).X6)(r)) return !1;
                let a = t.getMinimumFieldsForPermissions();
                if (!a || !o.every(e => e.isDefined())) return !1;
                let s = o.some(e => !e.isType("slack_notification"));
                return (!!await (0, i(655293).S)(r.environment, {
                    name: "premium_automations",
                    spaceId: r.getSpaceId(),
                    userId: r.userId
                }) || !s) && (0, i(746094).Ls)({
                    automationValue: a,
                    actionValues: o.map(e => ({
                        config: e.getConfig(),
                        type: e.getType()
                    }))
                }).every(({
                    pointer: e,
                    minimumRequiredRole: o
                }) => {
                    let r = t.getRecordRole(e);
                    return !!r && (0, i(138798).q_)(r, o)
                })
            }

            function u(e) {
                let {
                    automationStore: t,
                    collectionStore: o
                } = e, r = t.getParentStore();
                if (!r || (0, i(862085).qe)(r) || (0, i(862085).X6)(o)) return !1;
                let n = t.getMinimumFieldsForPermissions();
                return !!n && (0, i(746094).yx)(n).every(({
                    pointer: e,
                    minimumRequiredRole: o
                }) => {
                    let r = t.getRecordRole(e);
                    return !!r && (0, i(138798).q_)(r, o)
                })
            }

            function c(e) {
                var t;
                let o, r, {
                    automationStore: n,
                    collectionStore: a
                } = e;
                if (!n.isTriggerType("event")) return !1;
                let s = n.getEventConfiguration();
                if (!s || void 0 === s.source || s.source.type === i(832375).VlP || "filter" === s.source.type) return !1;
                let l = i(547131).p.createChildStore(a, s.source.pointer);
                return o = d(t = {
                    collectionSchema: a.getSchema(),
                    collectionViewStore: l
                }), r = p(t), (0, i(722371).O9)(o) || (0, i(722371).O9)(r)
            }

            function p(e) {
                var t;
                let {
                    collectionViewStore: o,
                    collectionSchema: r
                } = e, n = o.getPropertyFiltersStore().getValue() ? ? [], a = null == (t = (0, i(648256).$)({
                    collectionViewStore: o,
                    schema: r
                })) ? void 0 : t.filter, s = (0, i(400473).rg)({
                    propertyFilters: n,
                    combinatorFilter: a,
                    schema: r
                }), l = (0, i(400473).CU)({
                    operator: "and",
                    filters: s
                }, e => {
                    if ((0, i(400473).yX)(e)) {
                        let t = r[e.property];
                        return !!t && (0, i(9247).CH)(o.getSpaceId(), t, r)
                    }
                    return !1
                });
                if (l && (0, i(400473).yX)(l)) return l.property
            }

            function d(e) {
                var t;
                let {
                    collectionViewStore: o,
                    collectionSchema: r
                } = e, n = o.getPropertyFiltersStore().getValue() ? ? [], a = null == (t = (0, i(648256).$)({
                    collectionViewStore: o,
                    schema: r
                })) ? void 0 : t.filter, s = (0, i(400473).rg)({
                    propertyFilters: n,
                    combinatorFilter: a,
                    schema: r
                }), l = (0, i(400473).CU)({
                    operator: "and",
                    filters: s
                }, e => {
                    if ((0, i(400473).yX)(e)) {
                        let t = r[e.property];
                        return !!t && !(0, i(976298).Kj)(t)
                    }
                    return !1
                });
                if (l) {
                    if ((0, i(400473).yX)(l)) return l.property;
                    if ((0, i(400473).LB)(l)) return l.timestamp
                }
            }

            function f(e) {
                if ("collectionTypedView" === e.contextTypeFromStoreState) return !1;
                let t = e.collectionStore();
                return !(!t || t.isExternallyImportedAndSyncedCollection() || t.isSyncedCollection() && !i(218744).default.checkGate({
                    gateName: "support_synced_database_automations"
                })) && void 0 === e.viewsModuleContextStore.state
            }

            function g(e) {
                let {
                    collectionSchema: t,
                    propertyIds: r,
                    searchTerm: n
                } = e;
                if (!n) return r.slice(0);
                let a = new Map,
                    s = r.map(e => {
                        let o = t[e],
                            r = o ? `${o.name} ${i(799514).dC[o.type]}` : "";
                        return a.set(e, r), r
                    }),
                    l = o().filter(n, s).map(({
                        original: e
                    }) => e);
                return r.filter(e => l.includes(a.get(e) ? ? ""))
            }

            function m(e) {
                return {
                    pagesAdded: !1,
                    pagePropertiesEdited: {
                        type: "none"
                    },
                    source: {
                        pointer: e.getSpaceShardedPointer(),
                        type: i(832375).VlP
                    }
                }
            }

            function y(e) {
                let {
                    automationId: t,
                    automationName: o,
                    collectionStore: r,
                    userId: n
                } = e;
                return function(e) {
                    let {
                        actionIds: t,
                        automationId: o,
                        collectionStore: r,
                        eventConfiguration: n,
                        lastEditedTime: a,
                        properties: s,
                        userId: l
                    } = e, u = Date.now();
                    return {
                        action_ids: t,
                        alive: !0,
                        created_by_id: l,
                        created_by_table: "notion_user",
                        created_time: u,
                        id: o,
                        last_edited_by_id: l,
                        last_edited_by_table: "notion_user",
                        last_edited_time: a ? ? u,
                        parent_id: r.id,
                        parent_table: i(832375).VlP,
                        properties: s ? ? {},
                        space_id: r.getSpaceId(),
                        status: "active",
                        trigger: {
                            event: n,
                            id: i(92513).JW(),
                            type: "event"
                        },
                        version: 1
                    }
                }({
                    actionIds: [],
                    automationId: t,
                    collectionStore: r,
                    eventConfiguration: m(r),
                    properties: {
                        name: o
                    },
                    userId: n
                })
            }

            function T(e) {
                let {
                    tab: t
                } = e;
                return !!t && ("automationSettings" === t.type || "mobileCreateAutomation" === t.type || "mobileEditAutomation" === t.type || "mobileEditButtonAutomation" === t.type)
            }

            function _(e) {
                let t = e.collectionStore();
                return !!t && t.getAutomationStores().some(e => {
                    let i = e.getModel();
                    return !!(null != i && i.isFailing()) && u({
                        automationStore: e,
                        collectionStore: t
                    })
                })
            }
        },
        933743: (e, t, i) => {
            i.r(t), i.d(t, {
                TooltipWithSubtitle: () => c,
                automationErrorMessages: () => a,
                getErrorMessagesForActionValidationFailure: () => s,
                getFormulaTokenVariant: () => n,
                getValidationErrorsForAction: () => p,
                useErrorComponentForAction: () => l,
                useRequiresSubscriptionUpgradeError: () => d
            }), i(898992), i(354520);
            var o = i(296540),
                r = i(474848);

            function n(e) {
                if (!e) return "default";
                let {
                    parseErrors: t,
                    typeErrors: o,
                    typeWarnings: r
                } = e, n = (0, i(722371).O9)(t) && t.length > 0, a = (0, i(722371).O9)(o) && o.length > 0, s = (0, i(722371).O9)(r) && r.length > 0;
                return n || a ? "error" : s ? "warning" : "default"
            }
            let a = (0, i(109939).YK)({
                missingWorkerId: {
                    id: "clientAutomationHelpers.errorMessages.missingWorkerId",
                    defaultMessage: "Missing worker ID"
                },
                missingCapabilityKey: {
                    id: "clientAutomationHelpers.errorMessages.missingCapabilityKey",
                    defaultMessage: "Missing capability key"
                },
                workersNotEnabled: {
                    id: "clientAutomationHelpers.errorMessages.workersNotEnabled",
                    defaultMessage: "Workers are not enabled"
                },
                workerNotFound: {
                    id: "clientAutomationHelpers.errorMessages.workerNotFound",
                    defaultMessage: "Worker not found"
                },
                capabilityNotFound: {
                    id: "clientAutomationHelpers.errorMessages.capabilityNotFound",
                    defaultMessage: "Capability not found"
                },
                missingTargetDatabase: {
                    id: "clientAutomationHelpers.errorMessages.missingTargetDatabase",
                    defaultMessage: "Missing a target database"
                },
                missingNotificationCollectionPointer: {
                    id: "clientAutomationHelpers.errorMessages.missingNotificationCollectionPointer",
                    defaultMessage: "Missing database for property target"
                },
                missingNotificationTarget: {
                    id: "clientAutomationHelpers.errorMessages.missingNotificationTarget",
                    defaultMessage: "Missing notification recipients"
                },
                missingRecipients: {
                    id: "clientAutomationHelpers.errorMessages.missingRecipients",
                    defaultMessage: "Missing notification recipients"
                },
                missingEmailSubject: {
                    id: "clientAutomationHelpers.errorMessages.missingEmailSubject",
                    defaultMessage: "Missing email subject"
                },
                missingEmailBody: {
                    id: "clientAutomationHelpers.errorMessages.missingEmailBody",
                    defaultMessage: "Missing notification email body"
                },
                missingNotificationMessage: {
                    id: "clientAutomationHelpers.errorMessages.missingNotificationMessage",
                    defaultMessage: "Missing notification message"
                },
                missingNotificationPropertyId: {
                    id: "clientAutomationHelpers.errorMessages.missingPropertyId",
                    defaultMessage: "Missing target property"
                },
                missingNotificationFormulaValue: {
                    id: "clientAutomationHelpers.errorMessages.missingFormulaValue",
                    defaultMessage: "Missing recipients"
                },
                invalidNotificationFormulaValue: {
                    id: "clientAutomationHelpers.errorMessages.invalidFormulaValue",
                    defaultMessage: "Invalid recipients"
                },
                invalidNotificationPropertyId: {
                    id: "clientAutomationHelpers.errorMessages.invalidPropertyId",
                    defaultMessage: "Invalid property type"
                },
                deletedNotificationPropertyId: {
                    id: "clientAutomationHelpers.errorMessages.deletedPropertyId",
                    defaultMessage: "Property was deleted"
                },
                missingTargetPage: {
                    id: "clientAutomationHelpers.errorMessages.missingTargetPage",
                    defaultMessage: "Missing a target"
                },
                invalidTemplatePage: {
                    id: "clientAutomationHelpers.errorMessages.invalidTemplatePage",
                    defaultMessage: "Invalid template."
                },
                noActions: {
                    id: "clientAutomationHelpers.errorMessages.noActions",
                    defaultMessage: "This button has no actions"
                },
                createPageButtonError: {
                    id: "clientAutomationHelpers.errorMessages.createPageButtonError",
                    defaultMessage: "Add page is missing a target database"
                },
                collectionInTrashButtonError: {
                    id: "clientAutomationHelpers.errorMessages.collectionInTrashButtonError",
                    defaultMessage: "Target database is in trash"
                },
                collectionNotFoundButtonError: {
                    id: "clientAutomationHelpers.errorMessages.collectionNotFoundButtonError",
                    defaultMessage: "Target database not found"
                },
                blockInTrashButtonError: {
                    id: "clientAutomationHelpers.errorMessages.blockInTrashButtonError",
                    defaultMessage: "Target block is in trash"
                },
                createPageButtonTemplateError: {
                    id: "clientAutomationHelpers.errorMessages.createPageWithTemplateError",
                    defaultMessage: "Add page has an invalid template"
                },
                openPageOrUrlButtonError: {
                    id: "clientAutomationHelpers.errorMessages.openPageFormOrUrlButtonError",
                    defaultMessage: "Open page, form, or URL is missing a target"
                },
                updatePagesButtonError: {
                    id: "clientAutomationHelpers.errorMessages.editPagesButtonError",
                    defaultMessage: "Edit pages is missing a target database"
                },
                slackNotificationAuthenticationError: {
                    id: "clientAutomationHelpers.errorMessages.slackNotificationError",
                    defaultMessage: "Slack notification is missing an authentication."
                },
                slackNotificationTargetError: {
                    id: "clientAutomationHelpers.errorMessages.slackNotificationTargetError",
                    defaultMessage: "Slack notification is missing a target channel."
                },
                sendGmailNotificationMissingAuthenticationError: {
                    id: "clientAutomationHelpers.errorMessages.sendGmailNotificationMissingAuthenticationError",
                    defaultMessage: "Gmail notification is missing an authentication."
                },
                sendGmailNotificationInvalidAuthenticationError: {
                    id: "clientAutomationHelpers.errorMessages.sendGmailNotificationInvalidAuthenticationError",
                    defaultMessage: "Requires a re-authentication with Gmail"
                },
                missingRequiredRecordError: {
                    id: "clientAutomationHelpers.errorMessages.missingRequiredRecordError",
                    defaultMessage: "Action is missing access to a record"
                },
                invalidConfig: {
                    id: "clientAutomationHelpers.errorMessages.invalidConfig",
                    defaultMessage: "Unsupported settings"
                },
                invalidFormulaParseError: {
                    id: "clientAutomationHelpers.errorMessages.invalidFormulaParseError",
                    defaultMessage: "Formula contains a parsing error"
                },
                invalidFormulaTypeError: {
                    id: "clientAutomationHelpers.errorMessages.invalidFormulaTypeError",
                    defaultMessage: "Formula contains a type error"
                },
                invalidFormulaTypeWarning: {
                    id: "clientAutomationHelpers.errorMessages.invalidFormulaTypeWarning",
                    defaultMessage: "Formula contains a type warning"
                },
                invalidFormulaMissingReturnType: {
                    id: "clientAutomationHelpers.errorMessages.invalidFormulaMissingReturnType",
                    defaultMessage: "Formula does not have a return type"
                },
                invalidSendWebhookActionUrl: {
                    id: "clientAutomationHelpers.errorMessages.invalidSendWebhookActionUrl",
                    defaultMessage: "URL is invalid"
                },
                invalidSendWebhookActionCustomHeaderField: {
                    id: "clientAutomationHelpers.errorMessages.invalidSendWebhookActionCustomHeaderField",
                    defaultMessage: "Custom header field is invalid"
                },
                tooManyCustomHeaders: {
                    id: "clientAutomationHelpers.errorMessages.tooManyCustomHeaders",
                    defaultMessage: "Too many custom headers"
                },
                missingTargetVariable: {
                    id: "clientAutomationHelpers.errorMessages.missingTargetVariable",
                    defaultMessage: "Unable to find target variable"
                },
                crossSpaceRelation: {
                    id: "clientAutomationHelpers.errorMessages.crossSpaceRelation",
                    defaultMessage: "Cross-workspace features are restricted in automations and will not work"
                },
                crossSpacePropertyInFilter: {
                    id: "clientAutomationHelpers.errorMessages.crossSpacePropertyInFilter",
                    defaultMessage: "Filter contains a cross-workspace property"
                },
                invalidFormulaCrossSpace: {
                    id: "clientAutomationHelpers.errorMessages.invalidFormulaCrossSpace",
                    defaultMessage: "Cross-workspace features are restricted in automations and will not work"
                },
                requiresSubscription: {
                    id: "clientAutomationHelpers.errorMessages.requiresSubscription",
                    defaultMessage: "Upgrade plan or delete this step to enable the automation"
                },
                requiresSubscriptionButton: {
                    id: "clientAutomationHelpers.errorMessages.requiresSubscriptionButton",
                    defaultMessage: "Upgrade plan or delete connected steps to enable the button"
                },
                requiresSubscriptionArchivePagesButton: {
                    id: "clientAutomationHelpers.errorMessages.requiresSubscriptionArchivePagesButton",
                    defaultMessage: "Upgrade plan or delete archive step to enable the button"
                },
                createPrivatePageAndPublishSite: {
                    id: "clientAutomationHelpers.errorMessages.createPrivatePageAndPublishSite",
                    defaultMessage: "Unable to create private page and publish site"
                },
                generalErrorMessage: {
                    id: "clientAutomationHelpers.errorMessages.generalErrorMessage",
                    defaultMessage: "Fix any errors or delete this step to enable this automation"
                },
                actionIncompleteErrorMessage: {
                    id: "clientAutomationHelpers.errorMessages.actionIncompleteErrorMessage",
                    defaultMessage: "Add a property to edit or delete this step to enable this automation"
                },
                destinationInTrashTooltip: {
                    id: "clientAutomationHelpers.errorMessages.destinationInTrashTooltip",
                    defaultMessage: "Restore destination or delete step to enable this automation"
                },
                destinationMissingTooltip: {
                    id: "clientAutomationHelpers.errorMessages.destinationMissingTooltip",
                    defaultMessage: "Add destination or delete step to enable this automation"
                },
                destinationNotFoundTooltip: {
                    id: "clientAutomationHelpers.errorMessages.destinationNotFoundTooltip",
                    defaultMessage: "Change destination or delete step to enable this automation"
                },
                notificationMissingCollectionPointer: {
                    id: "clientAutomationHelpers.errorMessages.notificationMissingCollectionPointer",
                    defaultMessage: "Change destination or delete step to enable this automation"
                },
                notificationMissingTarget: {
                    id: "clientAutomationHelpers.errorMessages.notificationMissingTarget",
                    defaultMessage: "Add a recipient or delete step to enable this automation"
                },
                notificationMissingRecipients: {
                    id: "clientAutomationHelpers.errorMessages.notificationMissingRecipients",
                    defaultMessage: "Add a recipient or delete step to enable this automation"
                },
                notificationMissingEmailSubject: {
                    id: "clientAutomationHelpers.errorMessages.notificationMissingEmailSubject",
                    defaultMessage: "Add an email subject or delete step to enable this automation"
                },
                notificationMissingEmailBody: {
                    id: "clientAutomationHelpers.errorMessages.notificationMissingEmailBody",
                    defaultMessage: "Add an email body or delete step to enable this automation"
                },
                notificationMissingMessage: {
                    id: "clientAutomationHelpers.errorMessages.notificationMissingNotificationMessage",
                    defaultMessage: "Add an email message or delete step to enable this automation"
                },
                notificationMissingPropertyId: {
                    id: "clientAutomationHelpers.errorMessages.notificationMissingPropertyId",
                    defaultMessage: "Change the target property or delete step to enable this automation"
                },
                notificationMissingFormulaValue: {
                    id: "clientAutomationHelpers.errorMessages.notificationMissingFormulaValue",
                    defaultMessage: "Add a recipient or delete step to enable this automation"
                },
                sendGmailMissingAccount: {
                    id: "clientAutomationHelpers.errorMessages.sendGmailMissingAccount",
                    defaultMessage: "Select an account to send from or delete step to enable this automation"
                },
                sendGmailMissingRecipients: {
                    id: "clientAutomationHelpers.errorMessages.sendGmailMissingRecipients",
                    defaultMessage: "Add recipients or delete step to enable this automation"
                },
                sendGmailMissingSubject: {
                    id: "clientAutomationHelpers.errorMessages.sendGmailMissingSubject",
                    defaultMessage: "Add email subject or delete step to enable this automation"
                },
                sendGmailMissingBody: {
                    id: "clientAutomationHelpers.errorMessages.sendGmailMissingBody",
                    defaultMessage: "Add email body or delete step to enable this automation"
                },
                templateInTrashTooltip: {
                    id: "clientAutomationHelpers.errorMessages.templateInTrashTooltip",
                    defaultMessage: "Restore template, select new template or delete step to enable this automation"
                },
                templateInTrashButtonError: {
                    id: "clientAutomationHelpers.errorMessages.templateInTrashButtonError",
                    defaultMessage: "Selected template is in trash"
                },
                archivePagesMissingTargetError: {
                    id: "clientAutomationHelpers.errorMessages.archivePagesMissingTargetError",
                    defaultMessage: "Archive pages is missing a target database"
                }
            });

            function s(e) {
                let {
                    failure: t
                } = e;
                if ("create_page" === t.actionType)
                    if ("empty_config" === t.type) return {
                        forAction: a.destinationMissingTooltip,
                        forButtonTooltip: a.createPageButtonError
                    };
                    else if ("collection_not_found" === t.type) return {
                    forAction: a.destinationNotFoundTooltip,
                    forButtonTooltip: a.collectionNotFoundButtonError
                };
                else if ("missing_required_config" === t.type)
                    if ("collection" === t.key) return {
                        forAction: a.destinationMissingTooltip,
                        forButtonTooltip: a.createPageButtonError
                    };
                    else(0, i(722371).HB)(t);
                else {
                    if ("invalid_optional_config" === t.type) return {
                        forAction: a.invalidTemplatePage,
                        forButtonTooltip: a.createPageButtonTemplateError
                    };
                    if ("collection_in_trash" === t.type) return {
                        forAction: a.destinationInTrashTooltip,
                        forButtonTooltip: a.collectionInTrashButtonError,
                        forActionIcon: i(968411).trashIcon
                    };
                    if ("template_in_trash" === t.type) return {
                        forAction: a.templateInTrashTooltip,
                        forButtonTooltip: a.templateInTrashButtonError,
                        forActionIcon: i(968411).trashIcon
                    };
                    if ("invalid_formula_parse_error" === t.type) return {
                        forAction: a.invalidFormulaParseError,
                        forButtonTooltip: a.invalidFormulaParseError,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("invalid_formula_type_error" === t.type) return {
                        forAction: a.invalidFormulaTypeError,
                        forButtonTooltip: a.invalidFormulaTypeError,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("invalid_formula_type_warning" === t.type) return {
                        forAction: a.invalidFormulaTypeWarning,
                        forButtonTooltip: a.invalidFormulaTypeWarning,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("invalid_formula_missing_return_type" === t.type) return {
                        forAction: a.invalidFormulaMissingReturnType,
                        forButtonTooltip: a.invalidFormulaMissingReturnType,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("cross_space_relation" === t.type) return {
                        forAction: a.crossSpaceRelation,
                        forButtonTooltip: a.crossSpaceRelation,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("invalid_formula_cross_space" === t.type) return {
                        forAction: a.invalidFormulaCrossSpace,
                        forButtonTooltip: a.invalidFormulaCrossSpace,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("create_private_page_and_publish_site" === t.type) return {
                        forAction: a.createPrivatePageAndPublishSite,
                        forButtonTooltip: a.createPrivatePageAndPublishSite,
                        forButtonSubtitleTooltip: void 0
                    };
                    (0, i(722371).HB)(t)
                } else if ("update_pages" === t.actionType)
                    if ("missing_required_config" === t.type)
                        if ("target" === t.key) return {
                            forAction: a.destinationMissingTooltip,
                            forButtonTooltip: a.updatePagesButtonError
                        };
                        else {
                            if ("property" === t.key) return {
                                forAction: a.actionIncompleteErrorMessage,
                                forButtonTooltip: a.updatePagesButtonError
                            };
                            (0, i(722371).HB)(t)
                        }
                else {
                    if ("collection_in_trash" === t.type) return {
                        forAction: a.destinationInTrashTooltip,
                        forButtonTooltip: a.collectionInTrashButtonError,
                        forActionIcon: i(968411).trashIcon
                    };
                    if ("block_in_trash" === t.type) return {
                        forAction: a.blockInTrashButtonError,
                        forButtonTooltip: a.blockInTrashButtonError
                    };
                    if ("invalid_formula_parse_error" === t.type) return {
                        forAction: a.invalidFormulaParseError,
                        forButtonTooltip: a.invalidFormulaParseError,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("invalid_formula_type_error" === t.type) return {
                        forAction: a.invalidFormulaTypeError,
                        forButtonTooltip: a.invalidFormulaTypeError,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("invalid_formula_type_warning" === t.type) return {
                        forAction: a.invalidFormulaTypeWarning,
                        forButtonTooltip: a.invalidFormulaTypeWarning,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("invalid_formula_missing_return_type" === t.type) return {
                        forAction: a.invalidFormulaMissingReturnType,
                        forButtonTooltip: a.invalidFormulaMissingReturnType,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("missing_target_variable" === t.type) return {
                        forAction: a.missingTargetVariable,
                        forButtonTooltip: a.missingTargetVariable,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("cross_space_relation" === t.type) return {
                        forAction: a.crossSpaceRelation,
                        forButtonTooltip: a.crossSpaceRelation,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("invalid_formula_cross_space" === t.type) return {
                        forAction: a.invalidFormulaCrossSpace,
                        forButtonTooltip: a.invalidFormulaCrossSpace,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("cross_space_property_in_filter" === t.type) return {
                        forAction: a.crossSpacePropertyInFilter,
                        forButtonTooltip: a.crossSpacePropertyInFilter,
                        forButtonSubtitleTooltip: void 0
                    };
                    (0, i(722371).HB)(t)
                } else if ("open_page" === t.actionType)
                    if ("missing_required_config" === t.type)
                        if ("target" === t.key) return {
                            forAction: a.destinationNotFoundTooltip,
                            forButtonTooltip: a.openPageOrUrlButtonError
                        };
                        else(0, i(722371).HB)(t);
                else(0, i(722371).HB)(t);
                else if ("slack_notification" === t.actionType)
                    if ("missing_required_config" === t.type)
                        if ("external_bot_id" === t.key) return {
                            forAction: a.slackNotificationAuthenticationError,
                            forButtonTooltip: a.slackNotificationAuthenticationError
                        };
                        else {
                            if ("target" === t.key) return {
                                forAction: a.slackNotificationTargetError,
                                forButtonTooltip: a.slackNotificationTargetError
                            };
                            (0, i(722371).HB)(t)
                        }
                else if ("missing_required_value" === t.type)
                    if ("external_bot_id" === t.key) return {
                        forAction: a.slackNotificationAuthenticationError,
                        forButtonTooltip: a.slackNotificationAuthenticationError
                    };
                    else(0, i(722371).HB)(t);
                else {
                    if ("requires_subscription_upgrade" === t.type) return {
                        forAction: a.requiresSubscription,
                        forButtonTooltip: a.requiresSubscriptionButton
                    };
                    (0, i(722371).HB)(t)
                } else if ("send_in_app_notification" === t.actionType)
                    if ("missing_required_config" === t.type)
                        if ("target" === t.key) return {
                            forAction: a.notificationMissingTarget,
                            forButtonTooltip: a.missingNotificationTarget
                        };
                        else {
                            if ("notification_message" === t.key) return {
                                forAction: a.notificationMissingMessage,
                                forButtonTooltip: a.missingNotificationMessage
                            };
                            if ("collectionPointer" === t.key) return {
                                forAction: a.notificationMissingCollectionPointer,
                                forButtonTooltip: a.missingNotificationCollectionPointer
                            };
                            if ("propertyId" === t.key) return {
                                forAction: a.notificationMissingPropertyId,
                                forButtonTooltip: a.missingNotificationPropertyId
                            };
                            if ("formulaValue" === t.key) return {
                                forAction: a.notificationMissingFormulaValue,
                                forButtonTooltip: a.missingNotificationFormulaValue
                            };
                            (0, i(722371).HB)(t)
                        }
                else if ("invalid_required_config" === t.type)
                    if ("propertyId" === t.key) return {
                        forAction: a.invalidNotificationPropertyId,
                        forButtonTooltip: a.invalidNotificationPropertyId
                    };
                    else {
                        if ("formulaValue" === t.key) return {
                            forAction: a.invalidNotificationFormulaValue,
                            forButtonTooltip: a.invalidNotificationFormulaValue
                        };
                        (0, i(722371).HB)(t)
                    }
                else if ("deleted_required_config" === t.type)
                    if ("propertyId" === t.key) return {
                        forAction: a.notificationMissingPropertyId,
                        forButtonTooltip: a.deletedNotificationPropertyId
                    };
                    else(0, i(722371).HB)(t);
                else {
                    if ("invalid_formula_parse_error" === t.type) return {
                        forAction: a.invalidFormulaParseError,
                        forButtonTooltip: a.invalidFormulaParseError
                    };
                    if ("invalid_formula_type_error" === t.type) return {
                        forAction: a.invalidFormulaTypeError,
                        forButtonTooltip: a.invalidFormulaTypeError
                    };
                    if ("invalid_formula_type_warning" === t.type) return {
                        forAction: a.invalidFormulaTypeWarning,
                        forButtonTooltip: a.invalidFormulaTypeWarning
                    };
                    if ("invalid_formula_missing_return_type" === t.type) return {
                        forAction: a.invalidFormulaMissingReturnType,
                        forButtonTooltip: a.invalidFormulaMissingReturnType
                    };
                    if ("invalid_formula_cross_space" === t.type) return {
                        forAction: a.invalidFormulaCrossSpace,
                        forButtonTooltip: a.invalidFormulaCrossSpace,
                        forButtonSubtitleTooltip: void 0
                    };
                    (0, i(722371).HB)(t)
                } else if ("send_gmail_notification" === t.actionType)
                    if ("missing_required_config" === t.type)
                        if ("to" === t.key) return {
                            forAction: a.sendGmailMissingRecipients,
                            forButtonTooltip: a.missingRecipients
                        };
                        else {
                            if ("email_subject" === t.key) return {
                                forAction: a.sendGmailMissingSubject,
                                forButtonTooltip: a.missingEmailSubject
                            };
                            if ("email_body" === t.key) return {
                                forAction: a.sendGmailMissingBody,
                                forButtonTooltip: a.missingEmailBody
                            };
                            if ("formulaValue" === t.key) return {
                                forAction: a.missingNotificationFormulaValue,
                                forButtonTooltip: a.missingNotificationFormulaValue
                            };
                            if ("external_bot_id" === t.key) return {
                                forAction: a.sendGmailMissingAccount,
                                forButtonTooltip: a.sendGmailNotificationMissingAuthenticationError
                            };
                            (0, i(722371).HB)(t)
                        }
                else if ("invalid_required_config" === t.type)
                    if ("to" === t.key) return {
                        forAction: a.invalidNotificationFormulaValue,
                        forButtonTooltip: a.invalidNotificationFormulaValue
                    };
                    else {
                        if ("cc" === t.key || "bcc" === t.key || "reply_to" === t.key) return {
                            forAction: a.invalidNotificationFormulaValue,
                            forButtonTooltip: a.invalidNotificationFormulaValue
                        };
                        if ("external_bot_id" === t.key) return {
                            forAction: a.sendGmailNotificationInvalidAuthenticationError,
                            forButtonTooltip: a.sendGmailNotificationInvalidAuthenticationError
                        };
                        (0, i(722371).HB)(t)
                    }
                else {
                    if ("invalid_formula_parse_error" === t.type) return {
                        forAction: a.invalidFormulaParseError,
                        forButtonTooltip: a.invalidFormulaParseError
                    };
                    if ("invalid_formula_type_error" === t.type) return {
                        forAction: a.invalidFormulaTypeError,
                        forButtonTooltip: a.invalidFormulaTypeError
                    };
                    if ("invalid_formula_type_warning" === t.type) return {
                        forAction: a.invalidFormulaTypeWarning,
                        forButtonTooltip: a.invalidFormulaTypeWarning
                    };
                    if ("invalid_formula_missing_return_type" === t.type) return {
                        forAction: a.invalidFormulaMissingReturnType,
                        forButtonTooltip: a.invalidFormulaMissingReturnType
                    };
                    if ("invalid_formula_cross_space" === t.type) return {
                        forAction: a.invalidFormulaCrossSpace,
                        forButtonTooltip: a.invalidFormulaCrossSpace,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("requires_subscription_upgrade" === t.type) return {
                        forAction: a.requiresSubscription,
                        forButtonTooltip: a.requiresSubscriptionButton
                    };
                    (0, i(722371).HB)(t)
                } else if ("define_variables" === t.actionType)
                    if ("invalid_formula_parse_error" === t.type) return {
                        forAction: a.invalidFormulaParseError,
                        forButtonTooltip: a.invalidFormulaParseError,
                        forButtonSubtitleTooltip: void 0
                    };
                    else {
                        if ("invalid_formula_type_error" === t.type) return {
                            forAction: a.invalidFormulaTypeError,
                            forButtonTooltip: a.invalidFormulaTypeError,
                            forButtonSubtitleTooltip: void 0
                        };
                        if ("invalid_formula_type_warning" === t.type) return {
                            forAction: a.invalidFormulaTypeWarning,
                            forButtonTooltip: a.invalidFormulaTypeWarning,
                            forButtonSubtitleTooltip: void 0
                        };
                        if ("invalid_formula_missing_return_type" === t.type) return {
                            forAction: a.invalidFormulaMissingReturnType,
                            forButtonTooltip: a.invalidFormulaMissingReturnType,
                            forButtonSubtitleTooltip: void 0
                        };
                        if ("invalid_formula_cross_space" === t.type) return {
                            forAction: a.invalidFormulaCrossSpace,
                            forButtonTooltip: a.invalidFormulaCrossSpace,
                            forButtonSubtitleTooltip: void 0
                        };
                        (0, i(722371).HB)(t)
                    }
                else if ("http_request" === t.actionType)
                    if ("invalid_url" === t.type) return {
                        forAction: a.invalidSendWebhookActionUrl,
                        forButtonTooltip: a.invalidSendWebhookActionUrl
                    };
                    else {
                        if ("empty_custom_header_field" === t.type) return {
                            forAction: a.invalidSendWebhookActionCustomHeaderField,
                            forButtonTooltip: a.invalidSendWebhookActionCustomHeaderField
                        };
                        if ("requires_subscription_upgrade" === t.type) return {
                            forAction: a.requiresSubscription,
                            forButtonTooltip: a.requiresSubscriptionButton
                        };
                        if ("too_many_custom_headers" === t.type) return {
                            forAction: a.tooManyCustomHeaders,
                            forButtonTooltip: a.tooManyCustomHeaders
                        };
                        (0, i(722371).HB)(t)
                    }
                else if ("modal_confirmation" === t.actionType)
                    if ("invalid_formula_parse_error" === t.type) return {
                        forAction: a.invalidFormulaParseError,
                        forButtonTooltip: a.invalidFormulaParseError
                    };
                    else {
                        if ("invalid_formula_type_error" === t.type) return {
                            forAction: a.invalidFormulaTypeError,
                            forButtonTooltip: a.invalidFormulaTypeError
                        };
                        if ("invalid_formula_type_warning" === t.type) return {
                            forAction: a.invalidFormulaTypeWarning,
                            forButtonTooltip: a.invalidFormulaTypeWarning
                        };
                        if ("invalid_formula_missing_return_type" === t.type) return {
                            forAction: a.invalidFormulaMissingReturnType,
                            forButtonTooltip: a.invalidFormulaMissingReturnType
                        };
                        if ("invalid_formula_cross_space" === t.type) return {
                            forAction: a.invalidFormulaCrossSpace,
                            forButtonTooltip: a.invalidFormulaCrossSpace,
                            forButtonSubtitleTooltip: void 0
                        };
                        (0, i(722371).HB)(t)
                    }
                else if ("publish_site" === t.actionType)
                    if ("missing_required_config" === t.type)
                        if ("target" === t.key) return {
                            forAction: a.missingTargetDatabase,
                            forButtonTooltip: a.updatePagesButtonError
                        };
                        else(0, i(722371).HB)(t);
                else {
                    if ("missing_target_variable" === t.type) return {
                        forAction: a.missingTargetVariable,
                        forButtonTooltip: a.missingTargetVariable,
                        forButtonSubtitleTooltip: void 0
                    };
                    if ("invalid_context_value_type" === t.type) return {
                        forAction: a.invalidFormulaTypeError,
                        forButtonTooltip: a.invalidFormulaTypeError
                    };
                    (0, i(722371).HB)(t)
                } else if ("worker" === t.actionType) switch (t.type) {
                    case "missing_required_config":
                        switch (t.key) {
                            case "workerId":
                                return {
                                    forAction: a.missingWorkerId,
                                    forButtonTooltip: a.missingWorkerId
                                };
                            case "capabilityKey":
                                return {
                                    forAction: a.missingCapabilityKey,
                                    forButtonTooltip: a.missingCapabilityKey
                                };
                            default:
                                (0, i(722371).HB)(t)
                        }
                    case "workers_not_enabled":
                        return {
                            forAction: a.workersNotEnabled,
                            forButtonTooltip: a.workersNotEnabled
                        };
                    case "worker_not_found":
                        return {
                            forAction: a.workerNotFound,
                            forButtonTooltip: a.workerNotFound
                        };
                    case "capability_not_found":
                        return {
                            forAction: a.capabilityNotFound,
                            forButtonTooltip: a.capabilityNotFound
                        };
                    default:
                        (0, i(722371).HB)(t)
                } else {
                    if ("archive_pages" === t.actionType) {
                        var o = t;
                        if ("missing_required_config" === o.type)
                            if ("target" === o.key) return {
                                forAction: a.destinationMissingTooltip,
                                forButtonTooltip: a.archivePagesMissingTargetError
                            };
                            else(0, i(722371).HB)(o);
                        else {
                            if ("collection_in_trash" === o.type) return {
                                forAction: a.destinationInTrashTooltip,
                                forButtonTooltip: a.collectionInTrashButtonError,
                                forActionIcon: i(968411).trashIcon
                            };
                            if ("block_in_trash" === o.type) return {
                                forAction: a.blockInTrashButtonError,
                                forButtonTooltip: a.blockInTrashButtonError
                            };
                            if ("missing_target_variable" === o.type) return {
                                forAction: a.missingTargetVariable,
                                forButtonTooltip: a.missingTargetVariable,
                                forButtonSubtitleTooltip: void 0
                            };
                            if ("cross_space_property_in_filter" === o.type) return {
                                forAction: a.invalidFormulaCrossSpace,
                                forButtonTooltip: a.invalidFormulaCrossSpace
                            };
                            if ("requires_subscription_upgrade" === o.type) return {
                                forAction: a.requiresSubscription,
                                forButtonTooltip: a.requiresSubscriptionArchivePagesButton
                            };
                            (0, i(722371).HB)(o)
                        }
                        return
                    }(0, i(722371).HB)(t)
                }
            }

            function l(e) {
                let {
                    actionId: t,
                    shouldShow: n,
                    errorKey: a,
                    errorKeys: l
                } = e, u = (0, i(605263).K4)(), d = null == u ? void 0 : u.typecheckResult;
                return (0, o.useMemo)(() => {
                    if (!n || !d) return {
                        errorMessage: void 0,
                        errorIcon: void 0,
                        errorMessageDescriptor: void 0
                    };
                    let e = p(d, t);
                    (a || l) && (e = e.filter(e => "key" in e && (e.key === a || (null == l ? void 0 : l.includes(e.key)))));
                    let o = e[0];
                    if (!o) return {
                        errorMessage: void 0,
                        errorIcon: void 0,
                        errorMessageDescriptor: void 0
                    };
                    let u = s({
                        failure: o
                    });
                    return {
                        errorMessage: (0, r.jsx)(c, {
                            content: (0, r.jsx)(i(109939).sA, { ...u.forAction
                            })
                        }),
                        errorIcon: u.forActionIcon,
                        errorMessageDescriptor: u.forAction
                    }
                }, [n, d, t, a, l])
            }
            let u = {
                subtitle: {
                    color: i(632079).Tj.text.inverseSecondary
                }
            };

            function c(e) {
                let {
                    content: t,
                    subtitle: o
                } = e;
                return (0, r.jsxs)(i(4458).VP, {
                    alignItems: "center",
                    children: [(0, r.jsx)("div", {
                        children: t
                    }), o ? (0, r.jsx)("div", {
                        style: u.subtitle,
                        children: o
                    }) : void 0]
                })
            }

            function p(e, t) {
                return i(300441).Q.isFail(e) ? [] : e.value.actionValidationFailures[t] ? ? []
            }

            function d(e) {
                let {
                    shouldShow: t,
                    actionId: n
                } = e, a = (0, i(605263).K4)(), l = null == a ? void 0 : a.typecheckResult;
                return (0, o.useMemo)(() => {
                    if (!t || !l) return;
                    let e = p(l, n).filter(e => "requires_subscription_upgrade" === e.type)[0];
                    if (!e) return;
                    let o = s({
                        failure: e
                    });
                    return (0, r.jsx)(i(109939).sA, { ...o.forAction
                    })
                }, [t, l, n])
            }
        }
    }
]);