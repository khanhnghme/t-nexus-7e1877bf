"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [14344, 33619, 92883], {
        1249: (e, t, r) => {
            r.d(t, {
                g: () => o
            });

            function o(e) {
                return "drag" in e && e.drag ? {
                    WebkitAppRegion: "drag"
                } : "noDrag" in e && e.noDrag ? {
                    WebkitAppRegion: "no-drag"
                } : {}
            }
        },
        58931: (e, t, r) => {
            r.d(t, {
                HR: () => a,
                _y: () => i
            });
            let o = (0, r(109939).YK)({
                discardCommentConfirmationPrompt: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.prompt",
                    defaultMessage: "Do you want to discard the comment?"
                },
                discardCommentButtonLabel: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.discardButton.label",
                    defaultMessage: "Discard"
                },
                draftCommentConfirmationPromptTitle: {
                    id: "newDiscussionMenu.draftCommentConfirmationDialogTitle.prompt",
                    defaultMessage: "Finish your draft comment?"
                },
                draftCommentConfirmationStartingNewDescription: {
                    id: "newDiscussionMenu.draftCommentConfirmationStartingNewDescription.prompt",
                    defaultMessage: "You have a draft comment that will be lost if you start a new one"
                },
                draftCommentConfirmationNavigateAwayPromptDescription: {
                    id: "newDiscussionMenu.draftCommentConfirmationNavigateAwayPromptDescription.prompt",
                    defaultMessage: "You have a draft comment that will be lost if you leave the page"
                },
                returnToPageButtonLabel: {
                    id: "newDiscussionMenu.discardCommentConfirmationDialog.returnToPage.label",
                    defaultMessage: "Return to draft"
                }
            });

            function a(e) {
                let {
                    discussionInputStore: t,
                    environment: a,
                    discussionHelpers: n,
                    reason: s
                } = e;
                r(332190).A.isComposingNewDiscussion() ? i({
                    environment: a,
                    reason: s ? ? "navigating_away"
                }) : n.hasCommentChanged(t) ? (r(65255).yO(a), r(647095).ui({
                    message: r(962299).A.formatMessage(o.discardCommentConfirmationPrompt),
                    showCancel: !0,
                    handleCancel: () => r(65255).Ie(a),
                    keepFocus: !0,
                    items: [{
                        label: r(962299).A.formatMessage(o.discardCommentButtonLabel),
                        color: "red",
                        onAccept: () => {
                            r(65255).QP(a), (0, r(585356).c)()
                        }
                    }]
                })) : (0, r(585356).c)()
            }

            function i(e) {
                let {
                    environment: t
                } = e;
                if (!r(332190).A.isDraftCommentOnValidSelection()) return;
                let a = r(332190).A.getDiscussionInputStore();
                r(65255).yO(t), r(647095).ui({
                    message: r(962299).A.formatMessage(o.draftCommentConfirmationPromptTitle),
                    description: (() => {
                        switch (e.reason) {
                            case "starting_new":
                                return r(962299).A.formatMessage(o.draftCommentConfirmationStartingNewDescription);
                            case "navigating_away":
                                return r(962299).A.formatMessage(o.draftCommentConfirmationNavigateAwayPromptDescription);
                            default:
                                (0, r(722371).HB)(e.reason)
                        }
                    })(),
                    keepFocus: !0,
                    innerStyle: {
                        textAlign: "center"
                    },
                    showCancel: !1,
                    shouldRenderDraftCommentIcon: !0,
                    items: [{
                        label: r(962299).A.formatMessage(o.returnToPageButtonLabel),
                        buttonType: "solid",
                        color: "blue",
                        onAccept: () => {
                            (0, r(758275).x)({
                                currentBlockStore: r(728372).AppStoreMainEditorCurrentBlockStore.state,
                                discussionInputStore: a,
                                environment: t
                            }), r(65255).Ie(t)
                        }
                    }, {
                        label: r(962299).A.formatMessage(o.discardCommentButtonLabel),
                        color: "red",
                        buttonType: "outline",
                        onAccept: () => {
                            r(65255).QP(t), (0, r(585356).c)()
                        }
                    }]
                })
            }
        },
        72762: (e, t, r) => {
            r.d(t, {
                o: () => o
            });

            function o(e) {
                let {
                    collectionSettingsStore: t
                } = e;
                t.setState({ ...t.state,
                    open: !1,
                    hideSettingsPopup: void 0,
                    hideSettingsHeader: void 0,
                    stack: [],
                    ref: void 0,
                    hideDuplicatePropertyOption: void 0,
                    closeOnEscape: void 0
                }), r(639675).Ay.setState({ ...r(639675).Ay.state,
                    flowId: void 0
                })
            }
        },
        153262: (e, t, r) => {
            r.d(t, {
                Jg: () => a,
                bM: () => o,
                hG: () => i,
                ic: () => n
            });
            let o = "150ms ease";

            function a() {
                return {
                    borderRadius: 6
                }
            }
            let i = r(986939).A.isMobile ? {} : { ...a(),
                display: "flex",
                marginInlineStart: 0,
                marginInlineEnd: 0,
                transition: `background ${o}`
            };

            function n() {
                return {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8
                }
            }
        },
        192883: (e, t, r) => {
            function o(e) {
                let {
                    environment: t,
                    inMemoryRecordCache: o,
                    pointer: a,
                    userId: i,
                    recordWithRole: n,
                    debugSource: s
                } = e;
                (0, r(11266).P)({
                    currentUserId: t.currentUser.id,
                    defaultRecordCache: t.defaultRecordCache,
                    inMemoryRecordCache: o,
                    pointer: a,
                    userId: i,
                    model: r(993189).Bj6.fromValue(a.table, n.value),
                    role: n.role,
                    updatePaths: [
                        []
                    ],
                    debugSource: s
                })
            }
            async function a(e) {
                let t, a, {
                        inMemoryRecordCache: i,
                        pointer: n,
                        userId: s,
                        environment: d,
                        minimumVersion: l,
                        isPendingTransactionForRecord: u
                    } = e,
                    c = r(218744).default.checkGate({
                        gateName: "record_cache_backfill_space_id"
                    }),
                    m = u(n),
                    h = d.defaultRecordCache.persistedRecordCache;
                if (void 0 === s && d.currentUser.id) {
                    var f;
                    let e = null == (f = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : f.pointer;
                    (0, r(104310).u)({
                        event: {
                            eventName: "refresh_and_return_record_on_undefined_userid_while_logged_in",
                            eventProperties: {
                                table: n.table,
                                is_main_editor_current_block_store: void 0 !== e && n.id === e.id && n.table === e.table
                            }
                        }
                    });
                    return
                }
                if (m && h && (0, r(16903).u)(n)) return await h.get({
                    pointer: n,
                    userId: s
                });
                let g = h && (0, r(16903).u)(n) ? h.get({
                    pointer: n,
                    userId: s
                }) : void 0;
                if (g) {
                    let e = await (0, r(975162).nQ)(function(e) {
                        switch (e.device.platform) {
                            case "browser":
                                switch (e.device.os) {
                                    case "mac":
                                        return 172;
                                    case "windows":
                                        return 250;
                                    case "android":
                                        return 0;
                                    case "ios":
                                        return 360;
                                    case "chrome":
                                        return 238;
                                    case "linux":
                                        return 220
                                }
                                return 200;
                            case "electron":
                                return 1 / 0;
                            case "react-native":
                                switch (e.device.os) {
                                    case "android":
                                        return 270;
                                    case "ios":
                                        return 64
                                }
                                return 102
                        }
                    }(d), g);
                    e.timeout || (t = e.result), e.timeout && !r(205885).A.state.online && (t = await g), t && o({
                        environment: d,
                        inMemoryRecordCache: i,
                        pointer: n,
                        userId: s,
                        recordWithRole: t,
                        debugSource: "refreshAndReturnRecord (localResult)"
                    })
                }
                if (!r(205885).A.state.online) return t && r(218744).default.checkGate({
                    gateName: "record_map_logging"
                }) && (0, r(104310).u)({
                    event: {
                        eventName: "refresh_and_return_record.use_local",
                        eventProperties: {}
                    }
                }), t;
                try {
                    let e = i.getEntryWithBackfilledSpaceId({
                            pointer: n,
                            userId: s
                        }, {
                            ignoreAllCaches: !0
                        }),
                        u = e ? e.value : void 0,
                        m = e ? e.pointer : void 0;
                    if (l && null != u && u.value && (null == u ? void 0 : u.value.version) >= l) return r(218744).default.checkGate({
                        gateName: "record_map_logging"
                    }) && (0, r(104310).u)({
                        event: {
                            eventName: "refresh_and_return_record.use_local",
                            eventProperties: {}
                        }
                    }), u;
                    let h = (0, r(722371).O9)(m) ? { ...m
                        } : { ...n
                        },
                        f = null == u ? void 0 : u.value;
                    c && void 0 === h.spaceId && m && ((0, r(433261).RP)(m) || (0, r(433261).kW)(m.table)) && f && "space_id" in f && "string" == typeof f.space_id && (h.spaceId = f.space_id);
                    let p = !1;
                    try {
                        a = await (0, r(130925).e)(d, {
                            userId: s,
                            version: u && u.value && u.value.version ? u.value.version : -1,
                            pointer: h,
                            shouldThrowError: !0
                        })
                    } catch (e) {
                        p = !0
                    }
                    if (a) {
                        (0, r(929984).s)({
                            environment: d,
                            userId: s
                        });
                        let e = r(993189).Bj6.fromValue(n.table, a.value);
                        e && r(209401).t.broadcastRemoteRecordRefresh(n, e), o({
                            environment: d,
                            inMemoryRecordCache: i,
                            pointer: n,
                            userId: s,
                            recordWithRole: a,
                            debugSource: "refreshAndReturnRecord (remoteResult)"
                        })
                    }
                    p && !t && (t = await g) && o({
                        environment: d,
                        inMemoryRecordCache: i,
                        pointer: n,
                        userId: s,
                        recordWithRole: t,
                        debugSource: "refreshAndReturnRecord (localResult)"
                    })
                } catch (e) {
                    console.error(e)
                }
                return r(218744).default.checkGate({
                    gateName: "record_map_logging"
                }) && (a ? (0, r(104310).u)({
                    event: {
                        eventName: "refresh_and_return_record.use_remote",
                        eventProperties: {}
                    }
                }) : t && (0, r(104310).u)({
                    event: {
                        eventName: "refresh_and_return_record.use_local",
                        eventProperties: {}
                    }
                })), a || t
            }
            r.d(t, {
                s: () => a
            })
        },
        209401: (e, t, r) => {
            function o(e) {
                return e === r(832375).evP || e === r(832375).SNf
            }
            r.d(t, {
                t: () => a
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            class a {
                static containers = new(r(277637)).G(() => new WeakMap);
                static observers = new Set;
                observer;
                renderedPointers = new(r(227318)).d;
                refreshedPointers = new(r(227318)).d;
                isRecording = !1;
                startTime;
                lastChunkTimeoutId;
                abortTimeoutId;
                chunkSource;
                chunkLocalSource;
                static forRootStore(e, t) {
                    let r = this.containers.get(e).get(t);
                    return r || (r = new a(t.pointer, e), this.containers.get(e).set(t, r), this.observers.add(new WeakRef(r))), r
                }
                static broadcastRemoteRecordRefresh(e, t) {
                    for (let r of this.observers) {
                        let o = r.deref();
                        o ? o.onRemoteRecordRefresh(e, t) : this.observers.delete(r)
                    }
                }
                constructor(e, t) {
                    this.rootPointer = e, this.container = t, this.observer = (0, r(137182).j)(`RenderedRecordObserver(${t} ${e.table}:${e.id})`, this)
                }
                didUnregister() {
                    for (let e of (this.isRecording = !1, this.clearTimeouts(), this.renderedPointers = new(r(227318)).d, this.refreshedPointers = new(r(227318)).d, a.observers)) {
                        let t = e.deref();
                        t && t === this && a.observers.delete(e)
                    }
                }
                startRecording({
                    chunkSource: e,
                    chunkLocalSource: t
                }) {
                    this.chunkSource = e, this.chunkLocalSource = t, this.startTime = Date.now(), this.isRecording = !0, this.abortTimeoutId = setTimeout(() => this.observer.unregister(), 6e4)
                }
                onRemoteRecordRefresh(e, t) {
                    this.isRecording && this.startTime && o(e.table) && !r(496282).L3.isEqualIdTable(e, this.rootPointer) && t.getLastEditedTime() < this.startTime && this.refreshedPointers.add(e)
                }
                onLastChunkLoaded() {
                    this.isRecording && (this.clearTimeouts(), this.lastChunkTimeoutId = setTimeout(() => this.stopRecordingAndFlush(), 1e4))
                }
                stopRecordingAndFlush() {
                    this.lastChunkTimeoutId = void 0, this.isRecording = !1;
                    let e = new(r(227318)).d;
                    for (let t of this.refreshedPointers) this.renderedPointers.has(t) && e.add(t);
                    if (this.chunkSource) {
                        let t = {
                            eventName: "page_load_record_stats",
                            eventProperties: {
                                container: this.container,
                                root_table: this.rootPointer.table,
                                root_id: this.rootPointer.id,
                                chunk_source: this.chunkSource,
                                chunk_local_source: this.chunkLocalSource,
                                record_stats: {
                                    rendered_and_refreshed: e.size(),
                                    refreshed: this.refreshedPointers.size(),
                                    rendered: this.renderedPointers.size()
                                }
                            }
                        };
                        (0, r(104310).u)({
                            event: t
                        })
                    }
                    this.observer.unregister()
                }
                clearTimeouts() {
                    this.abortTimeoutId && clearTimeout(this.abortTimeoutId), this.lastChunkTimeoutId && clearTimeout(this.lastChunkTimeoutId)
                }
                maybeAddStore(e) {
                    if (!this.isRecording || !(e && e instanceof r(569574).yZ)) return;
                    let t = e.pointer;
                    o(t.table) && this.renderedPointers.add(t)
                }
                onAutoListenerAdded = (e, t) => {
                    this.maybeAddStore(t)
                };
                onAutoListenerRemoved = () => {}
            }
        },
        280996: (e, t, r) => {
            r.d(t, {
                b: () => i,
                T: () => n()
            }), r(581454);
            var o = r(296540),
                a = r(474848);
            let i = o.memo(function(e) {
                let {
                    store: t = r(2009).w
                } = e, i = (0, r(682985).K8)(() => t.state.asyncModals, [t]);
                return (0, a.jsx)(a.Fragment, {
                    children: i.map(e => {
                        let {
                            id: t,
                            internalRenderModal: r,
                            isOpen: i
                        } = e, n = r(i);
                        return (0, a.jsx)(o.Fragment, {
                            children: n
                        }, t)
                    })
                })
            });
            var n = () => r(796123)
        },
        366318: (e, t, r) => {
            r.d(t, {
                S: () => o
            });

            function o(e) {
                return (0, r(682985).K8)(() => {
                    if (!(0, r(23803).vL)()) return !1;
                    let t = e.getParentStore();
                    return !!((null == t ? void 0 : t.table) === r(832375).VlP && t.getFormatStore().getKeyStore("external_collection_type").getValue()) || !1
                }, [e])
            }
        },
        374241: (e, t, r) => {
            r.r(t), r.d(t, {
                arrowStraightLeftSmallIcon: () => a,
                iconDefinition: () => o
            }), r(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, r(474848).jsx)("path", {
                        d: "M2.16 8.206q.046.13.148.236l4.32 4.32a.625.625 0 0 0 .884-.884L4.259 8.625h8.991a.625.625 0 1 0 0-1.25H4.259l3.253-3.253a.625.625 0 1 0-.884-.884l-4.32 4.32a.62.62 0 0 0-.148.648"
                    })
                },
                a = (0, r(104509).wt)("arrowStraightLeftSmall", o, "small")
        },
        397900: (e, t, r) => {
            r.r(t), r.d(t, {
                ellipsisIcon: () => a,
                iconDefinition: () => o
            }), r(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 8.62 14.76 2.76",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M4 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"
                    })
                },
                a = (0, r(104509).wt)("ellipsis", o, "default")
        },
        478597: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var o = () => r(546605);
            class a extends o().Store {
                environment;
                spaceId;
                constructor(e, t) {
                    super(), this.environment = e, this.spaceId = t, this.reset()
                }
                getInitialState() {
                    if (!this.environment) return;
                    let e = new(r(870941)).A({
                        name: "DiscussionInputStore",
                        isTemporaryData: !0
                    });
                    return {
                        textStore: new(r(517013)).pm({
                            environment: this.environment,
                            pointer: (0, r(295447).zP)({
                                environment: this.environment,
                                table: r(832375).SNf,
                                spaceId: this.spaceId
                            }),
                            path: ["text"],
                            recordStoreOptions: {
                                inMemoryRecordCache: e
                            }
                        }),
                        localRecordCache: e,
                        files: [],
                        showAttachFileIntro: !1,
                        renderFileAttachIntro: !1
                    }
                }
                isEmpty() {
                    let e = this.state.textStore.getValue();
                    return !e || 0 === e.length
                }
                hasNewLineCharacter() {
                    let e = this.state.textStore.getValue();
                    return r(247438).q4_(e).includes("\n")
                }
            }
            let i = a
        },
        497857: (e, t, r) => {
            r.d(t, {
                h: () => a
            }), r(296540);
            var o = r(474848);

            function a() {
                return (0, o.jsx)(r(16275).I, {
                    icon: r(746204).w,
                    size: "lg",
                    colorVariant: "primary"
                })
            }
        },
        519529: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => o,
                xMarkFillSmallIcon: () => a
            }), r(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.03 3.03 9.94 9.94",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M12.73 4.33a.75.75 0 1 0-1.06-1.06L8 6.94 4.33 3.27a.75.75 0 1 0-1.06 1.06L6.94 8l-3.67 3.67a.75.75 0 1 0 1.06 1.06L8 9.06l3.67 3.67a.75.75 0 0 0 1.06-1.06L9.06 8z"
                    })
                },
                a = (0, r(104509).wt)("xMarkFillSmall", o, "fillSmall")
        },
        551408: (e, t, r) => {
            function o() {
                let e = (0, r(83208).X)("database_agents"),
                    t = (0, r(682985).K8)(() => r(886556).z.isAiEnabled(), []);
                return e && t
            }

            function a() {
                return r(218744).default.checkGate({
                    gateName: "database_agents"
                }) && r(886556).z.isAiEnabled()
            }
            r.d(t, {
                A: () => o,
                R: () => a
            })
        },
        633097: (e, t, r) => {
            r.d(t, {
                G: () => i
            });
            var o = () => r(546605);
            class a extends o().Store {
                getInitialState() {
                    return {}
                }
                setSelectedView(e, t) {
                    this.setState({ ...this.state,
                        [e]: t
                    })
                }
                getSelectedView(e) {
                    return this.state[e]
                }
            }
            let i = new a
        },
        746204: (e, t, r) => {
            r.d(t, {
                w: () => a
            }), r(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.87 3.72 7.16 12.56",
                    directional: !0,
                    svg: (0, r(474848).jsx)("path", {
                        d: "M6.131 9.381a.875.875 0 0 0 0 1.238l5.4 5.4a.875.875 0 1 0 1.238-1.238L7.987 10l4.782-4.781A.875.875 0 0 0 11.53 3.98z"
                    })
                },
                a = (0, r(104509).wt)("arrowChevronSingleLeftFill", o, "fill")
        },
        766970: (e, t, r) => {
            r.r(t), r.d(t, {
                iconDefinition: () => o,
                xMarkFillIcon: () => a
            }), r(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                a = (0, r(104509).wt)("xMarkFill", o, "fill")
        },
        789722: (e, t, r) => {
            r.d(t, {
                W: () => o
            });
            let o = (0, r(109939).YK)({
                done: {
                    id: "modal.doneButton",
                    defaultMessage: "Done"
                },
                cancel: {
                    id: "modal.cancelButton",
                    defaultMessage: "Cancel"
                },
                back: {
                    id: "modal.backButton",
                    defaultMessage: "Back"
                }
            })
        },
        799843: (e, t, r) => {
            r.d(t, {
                DG: () => l,
                OH: () => s,
                nl: () => n,
                x$: () => d
            });
            let o = (0, r(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.year",
                        defaultMessage: "{numYears, plural, one {{numYears} year ago} other {{numYears} years ago}}"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.day",
                        defaultMessage: "{numDays, plural, one {{numDays} day ago} other {{numDays} days ago}}"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.week",
                        defaultMessage: "{numWeeks, plural, one {{numWeeks} week ago} other {{numWeeks} weeks ago}}"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.hour",
                        defaultMessage: "{numHours, plural, one {{numHours} hour ago} other {{numHours} hours ago}}"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.minute",
                        defaultMessage: "{numMinutes, plural, one {{numMinutes} minute ago} other {{numMinutes} minutes ago}}"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.second",
                        defaultMessage: "Just now"
                    }
                }),
                a = (0, r(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.ultraCompactYear",
                        defaultMessage: "{numYears}y"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.ultraCompactDay",
                        defaultMessage: "{numDays}d"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.ultraCompactWeek",
                        defaultMessage: "{numWeeks}w"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.ultraCompactHour",
                        defaultMessage: "{numHours}h"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.ultraCompactMinute",
                        defaultMessage: "{numMinutes}m"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.ultraCompactSeconds",
                        defaultMessage: "Just now"
                    }
                }),
                i = (0, r(109939).YK)({
                    year: {
                        id: "timeUtils.durationDescriptor.compactYear",
                        defaultMessage: "{numYears}y ago"
                    },
                    day: {
                        id: "timeUtils.durationDescriptor.compactDay",
                        defaultMessage: "{numDays}d ago"
                    },
                    week: {
                        id: "timeUtils.durationDescriptor.compactWeek",
                        defaultMessage: "{numWeeks}w ago"
                    },
                    hour: {
                        id: "timeUtils.durationDescriptor.compactHour",
                        defaultMessage: "{numHours}h ago"
                    },
                    minute: {
                        id: "timeUtils.durationDescriptor.compactMinute",
                        defaultMessage: "{numMinutes}m ago"
                    },
                    second: {
                        id: "timeUtils.durationDescriptor.compactSecond",
                        defaultMessage: "Just now"
                    }
                });

            function n(e, {
                useCompactFormat: t,
                useUltraCompactFormat: s,
                useLowercase: d,
                roundDownYears: l,
                useWeeks: u,
                showDaysToOneWeek: c,
                nowOverrideMs: m = Date.now()
            } = {}) {
                let h = s ? a : t ? i : o,
                    f = new Date(e),
                    g = r(962299).A.getIntl().locale,
                    p = new Date(m),
                    v = Number(p) - e;
                if (v >= r(627179).Gq && l) {
                    let e = Math.floor(v / r(627179).Gq);
                    return r(962299).A.formatMessage(h.year, {
                        numYears: e
                    })
                }
                if (f.getFullYear() !== p.getFullYear()) return f.toLocaleDateString(g, s ? {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                } : {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                let w = Math.floor(v / r(627179).nD);
                if (w < 28 && w > 7 && u || c && 7 === w) {
                    let e = Math.floor(w / 7);
                    return r(962299).A.formatMessage(h.week, {
                        numWeeks: e
                    })
                }
                if (c && w > 6 || !c && w >= 3) return f.toLocaleDateString(g, {
                    month: "short",
                    day: "numeric"
                });
                if (w >= 1) return r(962299).A.formatMessage(h.day, {
                    numDays: w
                });
                let M = Math.floor(v / r(627179).pT);
                if (M >= 1) return r(962299).A.formatMessage(h.hour, {
                    numHours: M
                });
                let b = Math.floor(v / r(627179).Xb);
                return b >= 1 ? r(962299).A.formatMessage(h.minute, {
                    numMinutes: b
                }) : d ? r(962299).A.formatMessage(h.second).toLocaleLowerCase() : r(962299).A.formatMessage(h.second)
            }

            function s(e, t) {
                let o = t - e,
                    a = Math.floor(o / r(627179).Gq),
                    i = Math.floor(o / r(627179).nD),
                    n = Math.floor(o / r(627179).pT),
                    s = Math.floor(o / r(627179).Xb),
                    d = Math.floor(o / r(627179).TD);
                return a >= 1 ? r(962299).A.formatMessage(r(362008).jX.year, {
                    numYears: a
                }) : i >= 1 ? r(962299).A.formatMessage(r(362008).jX.day, {
                    numDays: i
                }) : n >= 1 ? r(962299).A.formatMessage(r(362008).jX.hour, {
                    numHours: n
                }) : s >= 1 ? r(962299).A.formatMessage(r(362008).jX.minute, {
                    numMinutes: s
                }) : r(962299).A.formatMessage(r(362008).jX.second, {
                    numSeconds: d
                })
            }

            function d(e, t) {
                return new Date(e).toLocaleDateString(r(962299).A.getIntl().locale, {
                    month: "long",
                    year: "numeric",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "2-digit",
                    second: t ? void 0 : "2-digit"
                })
            }

            function l(e) {
                return new Date(e).toLocaleDateString(r(962299).A.getIntl().locale, {
                    month: "short",
                    year: "numeric",
                    day: "numeric"
                })
            }
        },
        828294: (e, t, r) => {
            function o(e) {
                let t = (0, r(83208).X)(e);
                return "on" === (0, r(604306).r)("agent_writer_custom_skills") || t
            }

            function a(e) {
                return "on" === r(218744).default.getEligibleGroup({
                    experimentId: "agent_writer_custom_skills",
                    defaultGroup: "control"
                }) || r(218744).default.checkGate({
                    gateName: e
                })
            }
            r.d(t, {
                N: () => o,
                a: () => a
            })
        },
        848135: (e, t, r) => {
            r.d(t, {
                B: () => a
            });
            var o = r(296540);

            function a() {
                let e = (0, o.useRef)(null),
                    [t, r] = (0, o.useState)(!1),
                    a = (0, o.useCallback)(() => {
                        let t = e.current;
                        t && r(t.matches(":hover"))
                    }, []);
                return [(0, o.useCallback)(t => {
                    t ? (t.addEventListener("mouseenter", a), t.addEventListener("mouseleave", a), e.current = t, a()) : e.current && (e.current.removeEventListener("mouseenter", a), e.current.removeEventListener("mouseleave", a), e.current = null)
                }, [a]), t, e]
            }
        },
        876252: (e, t, r) => {
            r.d(t, {
                $: () => o
            });

            function o() {
                return (0, r(682985).O$)(r(728372).AppStoreCurrentUserStore)
            }
        },
        884877: (e, t, r) => {
            r.d(t, {
                A: () => a
            }), r(296540);
            var o = r(474848);

            function a(e) {
                let t = {
                    display: "inline-block",
                    minWidth: e.size,
                    minHeight: e.size
                };
                return "x" === e.axis ? t.minHeight = 1 : "y" === e.axis && (t.minWidth = 1), (0, o.jsx)("div", {
                    style: t
                })
            }
        }
    }
]);