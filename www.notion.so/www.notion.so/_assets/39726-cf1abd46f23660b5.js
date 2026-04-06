"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [39726], {
        428375: (e, t, o) => {
            o.d(t, {
                f: () => n
            });

            function n() {
                let e = (0, o(330870).a)(),
                    t = o(358377).default.state;
                if ("editing" !== t.mode) return !1;
                let n = t.multiSelection.start.store;
                return !!(e && e.id === n.id && (e.getBlockTitleStore() === n || o(381453).n4(e.getBlockTitleStore().path, n.path)))
            }
        },
        554397: (e, t, o) => {
            function n(e) {
                let t = [];
                if ("textSelection" === e.type) {
                    let n = (0, o(250943).E)({
                            mode: "editing",
                            multiSelection: e.textSelection,
                            forceExtendAnnotations: {}
                        }),
                        i = n.slice(0, 1200),
                        a = n.length > 1200,
                        l = e.textSelection.start.store.pointer,
                        r = e.textSelection.end.store.pointer;
                    l.table === o(832375).evP && r.table === o(832375).evP && t.push({
                        textSelection: {
                            type: "text",
                            value: {
                                start: {
                                    pointer: l,
                                    index: e.textSelection.start.index
                                },
                                end: {
                                    pointer: r,
                                    index: e.textSelection.end.index
                                }
                            },
                            text: i,
                            ...a ? {
                                isPreviewTruncated: !0
                            } : {}
                        }
                    })
                }
                return "blockSelection" === e.type && t.push(a(e.stores)), t
            }

            function i(e) {
                return 0 === e.length ? [] : [a(e)]
            }

            function a(e) {
                let t = (0, o(685745).B)(e),
                    n = t ? (0, o(250943).E)({
                        mode: "editing",
                        multiSelection: t,
                        forceExtendAnnotations: {}
                    }) : "";
                return {
                    blockSelection: {
                        type: "blocks",
                        value: e.map(e => e.pointer),
                        text: n.slice(0, 1200)
                    }
                }
            }
            o.d(t, {
                e: () => n,
                j: () => i
            }), o(944114), o(581454)
        },
        573953: (e, t, o) => {
            o.d(t, {
                o: () => n
            });

            function n() {
                let e = (0, o(330870).a)();
                return !e || !e.isLocked()
            }
        },
        644967: (e, t, o) => {
            o.d(t, {
                n: () => n
            });

            function n(e, t) {
                (0, o(195857).DO_NOT_USE_trackLegacy)("tap_mobile_action_bar_item", {
                    item_name: t.itemName,
                    from: t.from
                })
            }
        },
        739726: (e, t, o) => {
            o.d(t, {
                L: () => n
            });

            function n() {
                let e = (0, o(533992).v3)(),
                    t = (0, o(533992).Y0)(),
                    n = (0, o(67499).S)(),
                    i = (0, o(682985).K8)(() => {
                        if (!(t.isMobileNative && t.isAndroid)) return 0;
                        let i = o(728372).AppStoreMainEditorCurrentBlockStore.state;
                        return i ? 48 * !!(0, o(987329).mobileActionBarRenderAvailability)(e, i, null == n ? void 0 : n.publicEditModeStore.state, n).shouldShow : 0
                    }, [e, t, n]);
                return (0, o(682985).K8)(() => {
                    let n = t.isMobileNative ? 12 : 24;
                    return t.isMobileNative ? n + i + (0, o(849584).y)(e, o(707785).A.keyboardHeight(), o(707785).A.state.nativeBottomBarHeight) : n
                }, [e, t.isMobileNative, i])
            }
        },
        987329: (e, t, o) => {
            o.r(t), o.d(t, {
                canMoveDown: () => y,
                canMoveUp: () => A,
                canShowMobileActionBar: () => s,
                canTriggerBlockActions: () => f,
                canTriggerTextActions: () => h,
                getOpenPropertyValueOverlaySchema: () => G,
                handleAi: () => k,
                handleComment: () => C,
                handleDatabaseDiscoveryModal: () => E,
                handleDelete: () => w,
                handleDismissKeyboard: () => R,
                handleEmojiPicker: () => V,
                handleEquation: () => O,
                handleFilePicker: () => H,
                handleIndent: () => S,
                handleLink: () => I,
                handleMention: () => M,
                handleMoreClick: () => W,
                handleMoveDown: () => v,
                handleMoveUp: () => b,
                handleReaction: () => N,
                handleRedo: () => x,
                handleSetMenu: () => _,
                handleSetSubMenu: () => T,
                handleTemplate: () => U,
                handleTemplates: () => D,
                handleTextAnnotation: () => B,
                handleUndo: () => P,
                handleUnindent: () => g,
                isEditingCollectionTextProperty: () => d,
                mobileActionBarRenderAvailability: () => c,
                shouldPreserveExistingSelection: () => m,
                shouldShowTemplatesButton: () => u,
                shouldShowTextActions: () => p,
                trackItemTap: () => L,
                updateDebugShouldShow: () => r
            }), o(18107), o(967357), o(898992), o(737550);
            let n = {
                pageTemplateModalActions: new(o(815048)).O2("pageTemplateModalActions", async () => Promise.all([o.e(9773), o.e(40537), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(23519), o.e(63771), o.e(53847), o.e(48486), o.e(34208)]).then(o.bind(o, 151965)))
            };
            async function i(e) {
                var t, n;
                if (!e.mobileNative) return;
                let i = o(358377).default.state;
                if ("editing" !== i.mode) return;
                let a = null == (t = await e.mobileNative.openEmojiPicker()) ? void 0 : t.emoji;
                if (a) {
                    let t = null == (n = (0, o(385941).Z)()) ? void 0 : n.pointer.spaceId;
                    (0, o(377796).createAndCommit)({
                        userAction: "mobileActions.pickEmoji",
                        environment: e,
                        cellTarget: t ? {
                            spaceWithId: t
                        } : void 0,
                        canUndo: !0,
                        perform: t => {
                            o(68205).Yf({
                                environment: e,
                                multiSelection: i.multiSelection,
                                isFromInsertion: !1
                            }), o(68205).Ju({
                                environment: e,
                                emoji: a,
                                transaction: t
                            }), o(68205).VN()
                        }
                    })
                }
            }
            async function a(e) {
                var t;
                let n = o(584265).default.state.stores,
                    i = e.device.isIOS,
                    a = await o(385475).dA({
                        environment: e,
                        supportsMobileNativeFileUpload: !0,
                        multiple: !0,
                        accept: i ? "*/*" : "image/*, video/*"
                    }),
                    l = o(584265).default.getCurrentRecordCache(),
                    r = (0, o(830479).y)(e);
                if (!a || 0 === a.length || !l) return;
                let s = 0 !== n.length ? n[0].pointer.spaceId : null == (t = (0, o(385941).Z)()) ? void 0 : t.pointer.spaceId;
                (0, o(377796).createAndCommit)({
                    userAction: "mobileActions.takePicture",
                    environment: e,
                    cellTarget: s ? {
                        spaceWithId: s
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        var i;
                        let s = o(556533).$C({
                            environment: e,
                            files: a,
                            inMemoryRecordCache: l,
                            pageWidth: r,
                            transaction: t,
                            spaceId: 0 !== n.length ? n[0].pointer.spaceId : null == (i = (0, o(385941).Z)()) ? void 0 : i.pointer.spaceId
                        });
                        1 === n.length && n[0] && (0, o(966980).wm)(n[0]) ? (0, o(199894).t)({
                            environment: e,
                            blocks: s,
                            selection: n,
                            transaction: t,
                            preventSetSelection: !0
                        }) : ((0, o(210318).L)({
                            environment: e,
                            blocksToInsert: s,
                            target: n,
                            transaction: t,
                            replaceEmptyTextBlock: !0
                        }), (0, o(471e3).I)({
                            environment: e
                        }))
                    }
                })
            }
            let l = !1;

            function r(e) {
                l = e
            }

            function s(e, t, n, i) {
                var a;
                let {
                    device: r,
                    TabbedRouterStore: s
                } = e, c = l || !!o(770520).A.state.enableShouldShowDebugging;
                if (!o(986939).A.isMobile) return F(c, "canShowMobileActionBar = false (reason: !config.isMobile)"), !1;
                if ((0, o(318355).A)(e) && o(218744).default.checkGate({
                        gateName: "mab_consider_navigation_top_page"
                    })) {
                    let e = (0, o(500880).Xz)(s.state);
                    if ("web" !== e.type || "page" !== (0, o(500880).AE)(e).route.name) return F(c, "canShowMobileActionBar = false (reason: top page is not a web page)"), !1
                }
                if (o(930179).default.state.open) return F(c, "canShowMobileActionBar = false (reason: quickFindOpen)"), !1;
                if (!r.isMobileNative && o(498368).Ay.state.open) return F(c, "canShowMobileActionBar = false (reason: !device.isMobileNative && MentionMenuStore.state.open)"), !1;
                if (o(358377).default.isEditingComment()) return F(c, "canShowMobileActionBar = false (reason: TextSelectionStore.isEditingComment())"), !1;
                let d = (0, o(730994).SB)(o(304636).default.state),
                    u = null == (a = o(838448).default.getActiveSession()) ? void 0 : a.hasPendingOperations();
                if (d || u) return F(c, "canShowMobileActionBar = false (reason: isCompletionsPopupActive || hasPendingEdits)"), !1;
                if (!o(363746).A.state.isOpen && e.device.isMobileNative && o(630121).A.hasOpenPopups()) return F(c, "canShowMobileActionBar = false (reason: !PageTemplateModalStore.state.open && environment.device.isMobileNative && GlobalPopupStore.hasOpenPopups() > 0)"), !1;
                if (o(363746).A.state.isOpen) {
                    let t = G(o(363746).A.state);
                    if (!t) return F(c, "canShowMobileActionBar = false (reason: PageBlockPropertyValueOverlayStore.state.isOpen && propertySchema === undefined)"), !1;
                    switch (t.type) {
                        case "text":
                            if (t.ai_inference) return F(c, "canShowMobileActionBar = false (reason: PageBlockPropertyValueOverlayStore.state.isOpen && propertySchema.ai_inference !== undefined)"), !1;
                            break;
                        case "number":
                            if (! function(e) {
                                    let {
                                        device: t
                                    } = e, {
                                        isIOS: n,
                                        isIpad: i
                                    } = t;
                                    return n && !i && o(218744).default.checkGate({
                                        gateName: "ios_number_property_mab"
                                    })
                                }({
                                    device: e.device
                                })) return F(c, 'canShowMobileActionBar = false (reason: PageBlockPropertyValueOverlayStore.state.isOpen && propertySchema.type == "number")'), !1;
                            break;
                        default:
                            return F(c, `canShowMobileActionBar = false (reason: PageBlockPropertyValueOverlayStore.state.isOpen && propertySchema.type == "${t.type}`), !1
                    }
                }
                if (t.isFormBlock()) return !1;
                let p = "editing" === o(358377).default.state.mode;
                return (0, o(712358).K)(e) && o(984858).sidebarOpenStore.state && !p ? (F(c, "canShowMobileActionBar = false (reason: sidebarHelpers.sidebarIsExpanded(environment) && sidebarOpenStore.get() && !isCurrentlyEditing"), !1) : (0, o(573953).o)() ? !!(0, o(998256).p)({
                    environment: e,
                    blocks: [t],
                    publicEditMode: n,
                    pageContext: i
                }) || (F(c, "canShowMobileActionBar = false (reason: !_canEdit)"), !1) : (F(c, "canShowMobileActionBar = false (reason: !currentPageIsNotLocked())"), !1)
            }

            function c(e, t, n, i) {
                var a, r;
                let c = l || !!o(770520).A.state.enableShouldShowDebugging;
                if (!s(e, t, n, i)) return F(c, "shouldShowMobileActionBar = false (reason: !canShowMobileActionBar)"), {
                    canShow: !1,
                    canShowNativeBar: !1,
                    shouldShow: !1
                };
                let d = e.device.isMobileNative;
                if (null != (a = o(770520).A.state.menu) && a.type && !(0, o(428375).f)()) return F(c, "shouldShowMobileActionBar = true (reason: NativeMobileActionBarStore && NativeMobileActionBarStore.state.menu?.type"), {
                    canShow: !0,
                    canShowNativeBar: d,
                    shouldShow: !0
                };
                let u = o(358377).default.state;
                if ("editing" !== u.mode) return F(c, "shouldShowMobileActionBar = false (reason: TextSelectionStore.state.mode !== editing"), {
                    canShow: !0,
                    canShowNativeBar: d,
                    shouldShow: !1
                };
                let p = u.multiSelection,
                    m = (0, o(58512).$)(p),
                    f = m.some(e => e.editable.props.disableStyleAnnotations),
                    h = m.some(e => e.editable.props.disableMobileActionBar),
                    S = m.some(e => e.editable.props.disableComment);
                return m && h ? (F(c, "shouldShowMobileActionBar = false (reason: !renderedBlocks || !disableMobileActionBar)"), {
                    canShow: !0,
                    canShowNativeBar: d,
                    shouldShow: !1
                }) : (F(c, "shouldShowMobileActionBar = true"), {
                    shouldShow: !0,
                    canShowNativeBar: d,
                    disableStyleAnnotations: f,
                    disableComment: S,
                    isEmpty: (0, o(971541).k)(p) && 0 === p.end.index && (null == (r = (0, o(129499).s)(p.end.store)) ? void 0 : r.endIndex) === 0
                })
            }

            function d() {
                var e;
                let t = o(363746).A.state;
                if (!t.isOpen) return !1;
                let n = null == (e = t.collectionContextStore) ? void 0 : e.normalizedSchemaStore.state;
                if (!n) return !1;
                let i = (0, o(561872)._g)({
                    schema: n,
                    property: t.property
                });
                return (null == i ? void 0 : i.type) === "text"
            }

            function u(e) {
                let {
                    environment: t,
                    store: n
                } = e, {
                    isPhone: i
                } = t.device, a = t.currentUser.isLoggedIn(), l = n.isCollectionView(), r = n.getAssociatedCollectionStore(), s = o(752085).A.state.open, c = o(728372).default.state.currentLoadingContainerStore, d = n.getContentStores()[0], u = d && !d.isEmptyTextBlock();
                return !!(i && n.isDefined() && n.canEdit() && a && !r && !l && !s && !u && c && c.state.ready)
            }

            function p(e, t) {
                let n = o(358377).default.state;
                if ("editing" === n.mode) return !t.state.isComposing && !(0, o(971541).k)(n.multiSelection) || void 0 !== o(169274).wg();
                let i = e.state.savedTextSelectionStoreState;
                return !!i && "editing" === i.mode && !(0, o(971541).k)(i.multiSelection)
            }

            function m(e) {
                var t;
                let {
                    device: n
                } = e;
                return !!((null == (t = o(770520).A.state.menu) ? void 0 : t.type) && !n.isTablet && !n.isAndroid && !(0, o(907620).T)("supportsMobileActionBarNativeActionMenuWithoutIgnoreSelectionArea"))
            }

            function f(e) {
                if ((0, o(45262).Q)(e)) return !1;
                let {
                    stores: t
                } = o(584265).default.state;
                return t.length > 0 && t[0].canEdit() && !t[0].isNavigableBlock() && !o(169274).wg()
            }

            function h(e, t) {
                return !(0, o(45262).Q)(e) && t.canEdit()
            }

            function S(e, t) {
                "editing" === o(358377).default.state.mode && ((0, o(377796).createAndCommit)({
                    userAction: "mobileActionBarHelpers.handleIndent",
                    environment: e,
                    cellTarget: t ? {
                        spaceWithId: t
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        o(41403).Mf({
                            environment: e,
                            transaction: t,
                            shiftKey: !1
                        })
                    }
                }), L(e, "indent"))
            }

            function g(e, t) {
                "editing" === o(358377).default.state.mode && ((0, o(377796).createAndCommit)({
                    userAction: "mobileActionBarHelpers.handleUnindent",
                    environment: e,
                    cellTarget: t ? {
                        spaceWithId: t
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        o(41403).Mf({
                            environment: e,
                            transaction: t,
                            shiftKey: !0
                        })
                    }
                }), L(e, "unindent"))
            }

            function b(e, t) {
                (0, o(377796).createAndCommit)({
                    userAction: "mobileActionBarHelpers.handleMoveUp",
                    environment: e,
                    cellTarget: t ? {
                        spaceWithId: t
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        o(41403).$P({
                            environment: e,
                            transaction: t,
                            direction: "up",
                            maintainParent: !0
                        })
                    }
                }), L(e, "move-up")
            }

            function v(e, t) {
                (0, o(377796).createAndCommit)({
                    userAction: "mobileActionBarHelpers.handleMoveDown",
                    environment: e,
                    cellTarget: t ? {
                        spaceWithId: t
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        o(41403).$P({
                            environment: e,
                            transaction: t,
                            direction: "down",
                            maintainParent: !0
                        })
                    }
                }), L(e, "move-down")
            }

            function A(e) {
                if (!e) return !1;
                let t = e.getRecordStoreUIParent();
                if (!(null != t && t.isTable(o(832375).evP))) return !1;
                let n = (0, o(746473).zH)(t);
                return !!(null != n && n.isDefined()) && n.getContentIds().indexOf(e.id) > 0
            }

            function y(e) {
                if (!e) return !1;
                let t = e.getRecordStoreUIParent();
                if (!(null != t && t.isTable(o(832375).evP))) return !1;
                let n = (0, o(746473).zH)(t);
                if (!(null != n && n.isDefined())) return !1;
                let i = n.getContentIds(),
                    a = i.indexOf(e.id);
                return a >= 0 && a < i.length - 1
            }

            function w(e) {
                let t = o(584265).default.state.stores[0],
                    n = o(358377).default.state;
                if (t && "editing" === n.mode) {
                    let {
                        multiSelection: i
                    } = n, a = (0, o(698702).J)(i.end.store) || (0, o(477402).H)(i.start.store), l = t.getParentBlockStore(), r = l && l.isCalloutV2() && 1 === l.getContentLength(), s = t.getSpaceId();
                    if ((0, o(377796).createAndCommit)({
                            userAction: "mobileActionBarHelpers.handleDelete",
                            environment: e,
                            cellTarget: {
                                spaceWithId: s
                            },
                            canUndo: !0,
                            perform: e => {
                                if (r) {
                                    let t = l.getParentBlockStore();
                                    t && o(579695).zz({
                                        childStore: l,
                                        parentStore: t,
                                        transaction: e
                                    })
                                } else(0, o(210191).T)({
                                    store: t,
                                    transaction: e
                                })
                            }
                        }), o(169274).wg())(0, o(377796).createAndCommit)({
                        userAction: "mobileActionBarHelpers.handleDelete",
                        environment: e,
                        cellTarget: {
                            spaceWithId: s
                        },
                        canUndo: !0,
                        perform: t => {
                            (0, o(922393).x)({
                                environment: e,
                                transaction: t
                            })
                        }
                    });
                    else if (a) {
                        let t = (0, o(534012).T)(a);
                        (0, o(182553).h)({
                            environment: e,
                            store: t
                        }), (0, o(931263).Z)(e)
                    } else(0, o(471e3).I)({
                        environment: e
                    });
                    L(e, "remove")
                }
            }

            function M(e, t) {
                o(977712).Gf({
                    spaceStore: t,
                    environment: e,
                    mentionTypes: {
                        page: !0,
                        collection: !0,
                        heading: !0,
                        createPage: !0,
                        user: !0,
                        inviteUserToWorkspace: !1,
                        inviteUserToPage: !0,
                        bot: !0,
                        date: !0,
                        reminder: !0,
                        templateVariable: !0,
                        group: !0,
                        team: !0,
                        formulaContextVariable: !0,
                        slackSpecialMention: !1,
                        property: !1,
                        propertyValue: !1
                    }
                }), L(e, "mention")
            }

            function k(e) {
                let t = o(358377).default.state;
                if ("editing" === t.mode && (0, o(971541).k)(t.multiSelection)) {
                    let t = o(584265).default.state.stores.at(0),
                        n = null == t ? void 0 : t.getTitleStore();
                    t && n && !t.isEmptyTextBlock() && (0, o(492368).x)({
                        environment: e,
                        store: n,
                        canSelectAllBlocks: !0
                    })
                }
                if ((0, o(828294).a)("agent_writer") && e.device.isMobileNative) {
                    let t = (0, o(420459).G4)();
                    if (t && (0, o(907620).T)("supportsNativeAgent")) {
                        var n;
                        let i = (0, o(554397).e)(t);
                        null == (n = e.mobileNative) || n.openNewAgentChat({
                            from: "mobile_action_bar",
                            mode: "writer",
                            userSpecifiedContextValues: i.length > 0 ? i : void 0
                        }), L(e, "ai")
                    }
                } else z({
                    from: "mobile_action_bar",
                    environment: e
                }), L(e, "ai")
            }

            function B(e, t) {
                o(31904).po({
                    environment: e,
                    annotation: t
                }), L(e, t[0])
            }

            function _(e, t, n) {
                o(770520).A.update(e => ({ ...e,
                    menu: t,
                    shouldRestoreSelectionForMenu: n
                }))
            }

            function T(e, t, n) {
                o(770520).A.update(e => ({ ...e,
                    isSubMenuOverridden: n,
                    subMenu: t
                })), void 0 === t ? (0, o(259413).V)({
                    environment: e,
                    dismissed: !0,
                    trackCreateBlock: o(549960).vH
                }) : L(e, t.type)
            }

            function x(e) {
                (0, o(270600).Z)({
                    environment: e
                }), L(e, "redo")
            }

            function P(e) {
                (0, o(462446).t)({
                    environment: e,
                    preventSelectText: !1
                }), L(e, "undo")
            }

            function I(e) {
                o(280546).fi({
                    type: "focusOnly",
                    focus: !0
                }), L(e, o(247438).Ifu.Link)
            }

            function C(e, t, n) {
                let i = o(584265).default.state.stores[0];
                if (!i) return;
                let a = o(358377).default.state,
                    l = "empty" !== a.mode && a.multiSelection;
                l && !(0, o(971541).k)(l) ? (o(22229).hN({
                    environment: e,
                    blockStore: i,
                    multiSelection: l,
                    formulasModule: n
                }), L(e, "comment", t)) : ((0, o(476081).l)({
                    environment: e,
                    blockStore: i
                }), L(e, "discuss", t))
            }

            function N(e, t, n, i) {
                (0, o(593342).O)({
                    environment: e,
                    blockStore: n,
                    from: "right_margin",
                    formulasModule: i
                }), L(e, "react", t)
            }

            function O(e, t) {
                o(817048).Wx({
                    environment: e,
                    analyticsFrom: "rich_text_menu",
                    katex: t
                }), L(e, "equation")
            }
            async function E(e, t) {
                o(218744).default.checkGate({
                    gateName: "mobile_discovery_modal_restore_selection_killswitch"
                }) && ((0, o(471e3).I)({
                    environment: e
                }), (0, o(854091).k)());
                let n = t.getParentStore();
                if (n && (0, o(726342).u)(n)) {
                    let {
                        openTemplateOnboardingModal: i,
                        getTemplateOnboardingVersion: a
                    } = await o(903673).O.load();
                    i({
                        parentStore: n,
                        template: void 0,
                        version: a({
                            template: void 0
                        }),
                        origin: "mobile_new_page_pills",
                        navigateToOnFinish: "created_collection",
                        onClose: n => {
                            (0, o(487016)._M)({
                                environment: e,
                                newPageStore: t,
                                result: n
                            })
                        }
                    });
                    return
                }
                L(e, "databaseDiscoveryModal")
            }

            function D(e) {
                o(218744).default.checkGate({
                    gateName: "mobile_template_gallery_restore_selection_killswitch"
                }) && ((0, o(471e3).I)({
                    environment: e
                }), (0, o(854091).k)()), o(717376).A.setState({
                    open: !0
                }), L(e, "templates")
            }
            async function U(e, t) {
                var i;
                let a = o(728372).AppStoreSidebarSpaceViewStore.state,
                    l = o(728372).AppStoreSidebarSpaceStore.state,
                    r = o(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (!a || !l || !r) return;
                let s = o(962299).A.getIntl(),
                    c = (0, o(714350).P)(),
                    d = (0, o(322095).B)(t, s),
                    u = ((null == (i = r.getModel()) || null == (i = i.getRenderTitle({
                        getRecordModel: r.getRecordModel,
                        userTimeZone: c,
                        intl: s
                    })) ? void 0 : i.length) ? ? 0) > 0,
                    p = !1,
                    m = Date.now();
                try {
                    o(137933).A.setState({
                        isDuplicating: !0
                    });
                    let t = await n.pageTemplateModalActions.load();
                    await t.loadAndDuplicatePageTemplate({
                        environment: e,
                        isPrivate: !1,
                        item: d,
                        spaceStore: l,
                        spaceViewStore: a,
                        useMinimalTemplates: !1,
                        initializeStore: r
                    }), p = !0
                } finally {
                    o(137933).A.setState({
                        isDuplicating: !1
                    });
                    let e = Date.now() - m;
                    (0, o(81149).h)({
                        from: "mobileApp",
                        success: p,
                        context: "template_pill",
                        template_block_id: d.rootId,
                        target_space_id: l.id,
                        template_duplication_duration_ms: e,
                        public_template_name: d.name,
                        has_existing_title: u
                    })
                }
            }

            function V(e) {
                i(e), L(e, "pick_emoji")
            }

            function H(e) {
                a(e), L(e, "take_picture")
            }

            function W(e) {
                let {
                    device: t
                } = e, n = t.isMobileNative && t.isIOS && t.isPhone;
                n || (0, o(854924).t)({
                    environment: e,
                    stores: o(584265).default.state.stores
                }), o(899964).WU({
                    environment: e,
                    stores: o(584265).default.state.stores,
                    actionSectionGroupKey: "default",
                    showInput: !1,
                    analyticsFrom: "mobile_more_menu"
                }), L(e, "more"), o(374176).default.afterNextFlush(() => {
                    n && (0, o(854091).k)()
                })
            }

            function R(e, t) {
                (0, o(471e3).I)({
                    environment: t
                }), e.store.setState({ ...e.store.state,
                    menuType: void 0,
                    selectedBlocks: void 0
                }), L(t, "hide_keyboard"), (0, o(854091).k)()
            }

            function L(e, t, n) {
                (0, o(644967).n)(e, {
                    itemName: t,
                    from: n
                })
            }

            function F(e, t) {
                e && (console.log(t), o(773352).log({
                    level: "info",
                    from: "mobileActionBarHelpers.ts",
                    type: "logShouldShowReason",
                    data: {
                        message: t
                    }
                }))
            }
            async function z(e) {
                let {
                    completionInitialPromptActions: t
                } = await o(712155).aiDependency.load();
                await t.toggleInitialPrompt(e)
            }

            function G(e) {
                var t;
                if (!e.isOpen) return;
                let n = null == (t = e.collectionContextStore) ? void 0 : t.normalizedSchemaStore.state;
                if (n) return (0, o(561872)._g)({
                    schema: n,
                    property: e.property
                })
            }
        }
    }
]);