"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [27043, 57339], {
        88440: (e, t, r) => {
            r.r(t), r.d(t, {
                DuplicationDurationTracker: () => a
            });
            class i {
                entries = new Map;
                targetRenderTimes = new Map;
                routingListenerCleanup;
                addDuplicationInProgress(e) {
                    let {
                        sourceBlockId: t,
                        runId: r,
                        startTime: i,
                        blockType: a,
                        environment: n
                    } = e, s = this.entries.get(t);
                    s || (s = new Map, this.entries.set(t, s)), s.set(r, {
                        startTime: i,
                        targetBlockId: void 0,
                        targetIsNavigableBlock: void 0,
                        userAction: void 0,
                        blockType: a
                    }), this.addRoutingListener(n)
                }
                updateDuplicationInProgress(e) {
                    var t;
                    let {
                        sourceBlockId: r,
                        runId: i,
                        targetBlockId: a,
                        targetIsNavigableBlock: n,
                        userAction: s
                    } = e, o = null == (t = this.entries.get(r)) ? void 0 : t.get(i);
                    if (!o) return;
                    o.targetBlockId = a, o.targetIsNavigableBlock = n, o.userAction = s;
                    let l = this.targetRenderTimes.get(a);
                    l && (this.fireEvent({
                        entry: o,
                        renderTime: l
                    }), this.clearEntry({
                        sourceBlockId: r,
                        runId: i,
                        targetBlockId: a
                    }))
                }
                registerBlockRendered(e) {
                    let {
                        sourceBlockId: t,
                        parentSourceBlockId: r,
                        blockId: i,
                        parentId: a
                    } = e, n = performance.now();
                    !(r && a && this.tryMatchEntry({
                        sourceBlockId: r,
                        targetBlockId: a,
                        targetIsNavigableBlock: !0,
                        renderTime: n
                    })) && t && this.tryMatchEntry({
                        sourceBlockId: t,
                        targetBlockId: i,
                        targetIsNavigableBlock: !1,
                        renderTime: n
                    })
                }
                clearEntry(e) {
                    let {
                        sourceBlockId: t,
                        runId: r,
                        targetBlockId: i
                    } = e;
                    this.deleteEntry({
                        sourceBlockId: t,
                        runId: r
                    }), i && this.targetRenderTimes.delete(i), this.maybeCleanupRoutingListener()
                }
                tryMatchEntry(e) {
                    let {
                        sourceBlockId: t,
                        targetBlockId: r,
                        targetIsNavigableBlock: i,
                        renderTime: a
                    } = e, n = this.entries.get(t);
                    if (!n) return !1;
                    for (let [e, s] of n)
                        if (s.targetBlockId === r && s.targetIsNavigableBlock === i) return this.fireEvent({
                            entry: s,
                            renderTime: a
                        }), this.clearEntry({
                            sourceBlockId: t,
                            runId: e,
                            targetBlockId: r
                        }), !0;
                    return this.targetRenderTimes.has(r) || this.targetRenderTimes.set(r, a), !1
                }
                deleteEntry(e) {
                    let {
                        sourceBlockId: t,
                        runId: r
                    } = e, i = this.entries.get(t);
                    null == i || i.delete(r), (null == i ? void 0 : i.size) === 0 && this.entries.delete(t)
                }
                fireEvent(e) {
                    let {
                        entry: t,
                        renderTime: i
                    } = e, a = Math.round(i - t.startTime);
                    (0, r(104310).u)({
                        event: {
                            eventName: "duplication_to_first_render",
                            eventProperties: {
                                duration_ms: a,
                                user_action: t.userAction,
                                block_type: t.blockType
                            }
                        }
                    })
                }
                addRoutingListener(e) {
                    if (this.routingListenerCleanup) return;
                    let t = () => {
                        let t = e.RouterStore.state.route;
                        ("pageVisitSource" in t ? t.pageVisitSource : void 0) !== String(r(254656).y8.Duplicate) && this.clearAllEntries()
                    };
                    e.RouterStore.addListener(t), this.routingListenerCleanup = () => {
                        e.RouterStore.removeListener(t), this.routingListenerCleanup = void 0
                    }
                }
                maybeCleanupRoutingListener() {
                    0 === this.entries.size && this.routingListenerCleanup && this.routingListenerCleanup()
                }
                clearAllEntries() {
                    this.entries.clear(), this.targetRenderTimes.clear(), this.maybeCleanupRoutingListener()
                }
            }
            let a = new i
        },
        94228: (e, t, r) => {
            r.d(t, {
                $2: () => u,
                E0: () => p,
                Fe: () => v,
                ME: () => h,
                NU: () => g,
                Nf: () => l,
                em: () => d,
                nN: () => f,
                vd: () => c,
                yE: () => o
            }), r(16280), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(581454);
            var i = () => r(970831),
                a = () => r(832375),
                n = () => r(300441),
                s = () => r(887380);

            function o(e, t) {
                return async r => {
                    let {
                        listener: i
                    } = r, a = async a => {
                        let n = await t({
                            runner: e,
                            args: r,
                            event: a
                        });
                        null != n && n.stopPropagation || await i(a)
                    };
                    await e({ ...r,
                        listener: a
                    })
                }
            }
            async function l(e) {
                if ("error" === e.event.type && (0, r(818958).Y)(e.event.error)) {
                    (0, r(977283).Yv)();
                    let t = r(975162).yX();
                    return (0, r(818958).G)({
                        environment: e.args.environment,
                        onRetry: async () => {
                            t.resolve(await e.runner({ ...e.args,
                                options: { ...e.args.options,
                                    allowRedundancy: !0
                                }
                            }))
                        }
                    }), await t.promise, {
                        stopPropagation: !0
                    }
                }
            }

            function c(e) {
                "error" === e.event.type && (0, r(648048).x)({
                    environment: e.args.environment,
                    duplicateError: e.event.error,
                    jobId: e.event.jobId
                })
            }

            function u(e) {
                let t;
                return o(e, ({
                    args: e,
                    event: i
                }) => {
                    "started" === i.type ? (t && (0, r(617154).UO)(t), t = (0, r(617154).CU)({
                        sourceBlocks: e.sourceBlocks
                    })) : "error" === i.type ? t && (0, r(617154).UO)(t) : "completed" === i.type && t && (0, r(617154).MK)(t)
                })
            }

            function d(e) {
                let t, i = window.location.href;
                return o(e, ({
                    args: e,
                    event: a
                }) => {
                    if ("page_navigable" === a.type) t = a.navigableBlockStore.id, (0, r(210370).F)({
                        environment: e.environment,
                        blockStore: a.navigableBlockStore,
                        sourceBlockId: e.sourceBlocks[0].id
                    });
                    else if ("error" === a.type) {
                        if (!t) return;
                        (0, r(210370).E)({
                            environment: e.environment,
                            targetBlockId: t,
                            originalUrl: i
                        })
                    }
                })
            }

            function g(e) {
                let t, {
                    environment: i,
                    runner: a,
                    userAction: n,
                    method: s,
                    from: l
                } = e;
                return o(a, ({
                    args: e,
                    event: a
                }) => {
                    if ("started" === a.type) t = performance.now();
                    else if ("completed" === a.type || "error" === a.type) {
                        if (void 0 === t) return;
                        let o = "completed" === a.type,
                            c = e.sourceBlocks[0];
                        (0, r(450976).E)({
                            environment: i,
                            success: o,
                            time: performance.now() - t,
                            user_action: n,
                            is_duplication_local: !1,
                            duplication_size: o ? a.numRecordsDuplicated ? ? 0 : 0,
                            method: s,
                            from: l,
                            destination_table: e.destination.parent.table,
                            block_type: c.getType(),
                            is_template_instantiation: e.options.isTemplateInstantiation,
                            source_space_id: c.getSpaceId(),
                            target_space_id: e.destination.parent.spaceId
                        })
                    }
                })
            }

            function p(e) {
                let {
                    runner: t,
                    userAction: i
                } = e, a = performance.now(), n = crypto.randomUUID();
                return o(t, ({
                    args: e,
                    event: t
                }) => {
                    let s = e.sourceBlocks[0],
                        o = s.id;
                    if ("started" === t.type) r(88440).DuplicationDurationTracker.addDuplicationInProgress({
                        sourceBlockId: o,
                        runId: n,
                        startTime: a,
                        blockType: s.getType(),
                        environment: e.environment
                    });
                    else if ("page_navigable" === t.type && t.targetIds) {
                        let a = t.targetIds[0];
                        r(88440).DuplicationDurationTracker.updateDuplicationInProgress({
                            sourceBlockId: o,
                            runId: n,
                            environment: e.environment,
                            targetBlockId: a,
                            targetIsNavigableBlock: a === t.navigableBlockStore.id,
                            userAction: i
                        })
                    } else if ("error" === t.type) {
                        var l;
                        r(88440).DuplicationDurationTracker.clearEntry({
                            sourceBlockId: o,
                            runId: n,
                            targetBlockId: null == (l = t.targetIds) ? void 0 : l[0]
                        })
                    }
                })
            }

            function h(e) {
                return o(e, ({
                    args: e,
                    event: t
                }) => {
                    var r;
                    if ("completed" !== t.type || !(null != (r = t.errors) && r.length)) return;
                    let i = new Set;
                    for (let r of t.errors)
                        if ("restricted_content" === r.code)
                            for (let t of r.metadata.marketplaceListingPointers) i.has(t.id) || (i.add(t.id), (0, s().UK)(e.environment, {
                                product: t
                            }))
                })
            }
            async function v(e) {
                if (!r(205885).A.state.online) return r(436555).D6({
                    label: r(962299).A.formatMessage(r(450976).V.offlineError)
                }), n().Q.fail(Error("Unable to duplicate while offline"));
                if ((0, r(381453).sb)(e.args.sourceBlocks.map(e => e.getSpaceId())).length > 1) {
                    let t = new(r(648048)).go("Source blocks belong to multiple spaces");
                    return (0, r(648048).x)({
                        environment: e.args.environment,
                        duplicateError: t
                    }), n().Q.fail(t)
                }
                let t = r(975162).yX(),
                    i = async r => {
                        await e.args.listener(r), "error" === r.type ? t.resolve(n().Q.fail(r.error)) : "completed" === r.type && t.resolve(n().Q.success({
                            createdBlocks: r.createdBlocks,
                            recordIdMap: r.recordIdMap,
                            numRecordsDuplicated: r.numRecordsDuplicated
                        }))
                    };
                return e.runner({ ...e.args,
                    listener: i
                }), t.promise
            }
            async function f(e) {
                await e.listener({
                    type: "started"
                }), await m(e)
            }
            async function m(e) {
                let t, {
                    environment: r,
                    iterator: s,
                    listener: o,
                    targetSpaceId: l,
                    retryOnMainCell: c
                } = e;
                for await (let e of s) {
                    if (n().Q.isFail(e)) {
                        await o({
                            type: "error",
                            error: e.error
                        });
                        break
                    }
                    if (!t && e.value.targetNavigableBlockId && (t = new(i()).B(r, {
                            table: a().evP,
                            id: e.value.targetNavigableBlockId,
                            spaceId: l
                        }), await o({
                            type: "page_navigable",
                            navigableBlockStore: t,
                            targetIds: e.value.targetIds
                        })), "success" === e.value.status) {
                        let t = e.value.targetIds.map(e => new(i()).B(r, {
                            table: a().evP,
                            id: e,
                            spaceId: l
                        }));
                        if (!t.length) {
                            await o({
                                type: "error",
                                error: Error("No returned created blocks")
                            });
                            break
                        }
                        await o({
                            type: "completed",
                            createdBlocks: t,
                            numRecordsDuplicated: e.value.numRecordsDuplicated,
                            errors: e.value.errors
                        });
                        break
                    }
                    if ("failure" === e.value.status) {
                        if (e.value.isCrossCellError && c) return m({
                            environment: r,
                            iterator: c(),
                            listener: o,
                            targetSpaceId: l
                        });
                        await o({
                            type: "error",
                            jobId: e.value.jobId,
                            error: e.value.error,
                            targetIds: e.value.targetIds
                        });
                        break
                    }
                }
            }
        },
        609328: (e, t, r) => {
            r.d(t, {
                P: () => n
            }), r(944114), r(296540);
            var i = r(474848);
            let a = (0, r(109939).YK)({
                errorStacktraceCopied: {
                    defaultMessage: "Stacktrace copied to clipboard",
                    id: "errorLabel.moreInfo.stacktrace.toast.label"
                }
            });

            function n({
                environment: e,
                title: t,
                ...s
            }) {
                var o, l, c;
                let u = [],
                    d = null == (o = s.error) ? void 0 : o.stack;
                if (d) {
                    let t = globalThis.Meticulous;
                    null != t && t.isRunningAsTest && (null == (l = t.replay) || null == (c = l.terminate) || c.call(l)), u.push({
                        label: "Copy stacktrace",
                        ariaLabel: "Copy error stacktrace to clipboard",
                        onClick: async () => {
                            (await (0, r(969899).Nu)())({
                                environment: e,
                                stringValue: d,
                                htmlValue: `<meta charset='utf-8'><pre><code class="language-bash">${d}
		</code></pre>`,
                                copiedMessage: a.errorStacktraceCopied
                            })
                        }
                    })
                }
                u.push({
                    buttonType: "solid",
                    color: "blue",
                    label: (0, i.jsx)(r(109939).sA, { ...r(647095)._0.dismissButtonLabel
                    }),
                    onAccept: r(763230).D_
                }), r(647095).ui({
                    message: t,
                    description: (0, i.jsx)(r(149795).dD, { ...s
                    }),
                    allowCopy: !0,
                    showCancel: !1,
                    keepFocus: !1,
                    mode: "wide",
                    items: u
                })
            }
        },
        617154: (e, t, r) => {
            r.d(t, {
                UO: () => l,
                MK: () => c,
                CU: () => o
            }), r(296540);
            var i = r(474848);
            let a = (0, r(109939).YK)({
                    pageDuplicatingMessage: {
                        id: "duplicateProgressSnackbar.pageDuplicating",
                        defaultMessage: "Page is duplicating"
                    },
                    contentDuplicatingMessage: {
                        id: "duplicateProgressSnackbar.contentDuplicating",
                        defaultMessage: "Content is duplicating"
                    }
                }),
                n = {
                    height: 24
                };

            function s(e) {
                let t, {
                        sourceBlocks: s,
                        stage: o
                    } = e,
                    l = (0, r(682985).K8)(() => !(s.length < 1) && s[0].isType(r(955630).Gz), [s]);
                return "initial" === o ? t = l ? a.pageDuplicatingMessage : a.contentDuplicatingMessage : (0, r(722371).HB)(o), (0, i.jsxs)(r(4458).fI, {
                    alignItems: "center",
                    gap: 8,
                    children: [(0, i.jsx)(r(517334).k, {
                        size: "sm",
                        onDarkBackground: !0
                    }), (0, i.jsx)("span", {
                        children: (0, i.jsx)(r(109939).sA, { ...t
                        })
                    }), (0, i.jsx)("div", {
                        style: n,
                        children: (0, i.jsx)(r(346268).c, {
                            type: "vertical",
                            colorVariant: "inversePrimary",
                            colorPalette: "gray",
                            size: 24
                        })
                    })]
                })
            }

            function o(e) {
                let {
                    sourceBlocks: t
                } = e, i = new(r(977283)).DI({
                    sourceBlocks: t,
                    showInitialMessage: u,
                    onClear: d
                });
                return i.start(), i.id
            }

            function l(e) {
                let t = (0, r(977283).lq)(e);
                null == t || t.clear()
            }

            function c(e) {
                let t = (0, r(977283).lq)(e);
                null == t || t.complete()
            }

            function u(e) {
                let t = (0, i.jsx)(s, {
                    sourceBlocks: e,
                    stage: "initial"
                });
                (0, r(984211).f)({
                    item: {
                        label: t,
                        durationMs: "keep"
                    },
                    onDismiss: () => {
                        (0, r(977283).Yv)()
                    }
                })
            }

            function d() {
                r(436555).N2()
            }
        },
        977283: (e, t, r) => {
            r.d(t, {
                DI: () => l,
                Yv: () => o,
                lq: () => n
            });
            let i = 2 * r(695216).TD,
                a = new Map;

            function n(e) {
                return a.get(e)
            }

            function s() {
                return a.values().next().value
            }

            function o() {
                for (let e of Array.from(a.values())) e.clear()
            }
            class l {
                id;
                sourceBlocks;
                currentTimeout = null;
                stage;
                showInitialMessage;
                onClear;
                constructor(e) {
                    this.id = (0, r(4962).Ay)(), this.sourceBlocks = e.sourceBlocks, this.stage = "started", this.showInitialMessage = e.showInitialMessage, this.onClear = e.onClear, a.set(this.id, this)
                }
                isOldestActive() {
                    return s() === this
                }
                start() {
                    this.currentTimeout = setTimeout(() => {
                        this.stage = "initial_message", this.isOldestActive() && this.showInitialMessage(this.sourceBlocks)
                    }, i)
                }
                showSnackbarForCurrentStage() {
                    "started" === this.stage || ("initial_message" === this.stage ? this.showInitialMessage(this.sourceBlocks) : (0, r(722371).HB)(this.stage))
                }
                clear() {
                    let e;
                    this.currentTimeout && (clearTimeout(this.currentTimeout), this.currentTimeout = null), a.delete(this.id), this.onClear(), (e = s()) && e.showSnackbarForCurrentStage()
                }
                complete() {
                    this.isOldestActive() && this.stage, this.clear()
                }
            }
        }
    }
]);