"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [82094], {
        877306: (e, t, a) => {
            a.r(t), a.d(t, {
                SavePageToOPFS: () => f
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(908872);
            var r = a(296540),
                n = () => a(694402),
                i = () => a(488307),
                o = () => a(832375);
            a(944114);
            var s = () => a(986939),
                d = () => a(485886),
                l = () => a(383613),
                c = () => a(801507),
                u = () => a(412951);
            async function g({
                pageStore: e,
                environment: t,
                pageContext: r,
                sessionId: i,
                isSnapshotsEnabled: o
            }) {
                let f, v, p = (0, a(6146).getOPFSPageCacheInstance)(),
                    h = (0, a(974410).f)(e);
                if (!t.currentUser.id || !h || !p || a(461457).z.state.inFlightPages.has(e.id)) return;
                performance.mark("generate-chunk-start");
                let m = [],
                    k = {
                        stack: []
                    },
                    b = new Set;
                for (; k;) {
                    let a = u().RecordMapWithRole.create(),
                        r = await (0, l().T)({
                            page: {
                                spaceId: h.id,
                                id: e.id
                            },
                            limit: 30,
                            cursor: k,
                            verticalColumns: !0,
                            baseUrl: s().A.domainBaseUrl,
                            publicDomainName: s().A.publicDomainName,
                            shouldTraverseToggleBlocks: !0,
                            contentBatchSize: 30,
                            sessionCombinedIds: b
                        }, c().h.fromMonomorphicFunctionUnsafe(e => {
                            let r = d().pm({
                                environment: t,
                                pointer: e
                            });
                            return r ? (a.setModelAndRole(e, r.model, r.role), b.add((0, n().jV)(e)), r.model) : void 0
                        }));
                    if (m.push(a), 0 === r.cursorValue.stack.length) {
                        k = void 0;
                        break
                    }
                    k = r.cursorValue
                }
                if (performance.mark("generate-chunk-end"), performance.measure("generate-chunk", "generate-chunk-start", "generate-chunk-end"), a(461457).z.state.inFlightPages.has(e.id)) return;
                let _ = t.currentUser.id;
                if (o) {
                    let e = a(737096).E.getSnapshotId(_),
                        t = a(737096).E.getEditSeq(_),
                        r = t > a(737096).E.getConfirmedEditSeq(_);
                    f = r ? e : void 0, r && !f && (f = a(737096).E.createSnapshotId(_)), v = t
                }
                if (f) try {
                    await p.snapshots.createPendingMarker({
                        userId: _,
                        sessionId: i,
                        snapshotId: f
                    })
                } catch (e) {
                    a(773352).log({
                        level: "error",
                        from: "savePageToOPFS",
                        type: "createPendingMarkerError",
                        error: (0, a(416607).convertErrorToLog)(e),
                        data: {
                            miscDataToConvertToString: {
                                snapshotId: f
                            }
                        }
                    });
                    return
                }
                await p.write({
                    userId: _,
                    pageId: e.id,
                    recordMapWithRoleArray: m,
                    snapshotOpts: f ? {
                        id: f,
                        metadata: {
                            title: (0, a(247438).q4_)(e.getTitleValue()) || "New Page"
                        }
                    } : void 0
                }), f && void 0 !== v && a(737096).E.setSnapshotEditSeq(_, f, v)
            }

            function f({
                pageStore: e
            }) {
                return ! function(e) {
                    var t;
                    let s, d, l, c = (0, a(533992).v3)(),
                        u = e.id,
                        f = a(22553).z.isEnabled,
                        [v, p] = (0, r.useState)(!1),
                        h = (0, a(83208).X)("opfs_save_page_strategy_revision_tracking") && f,
                        m = (0, a(83208).X)("opfs_save_page_strategy_sync_tracking") && f,
                        k = (0, a(83208).X)("opfs_save_page_strategy_background") && f,
                        b = (0, a(83208).X)("opfs_save_page_strategy_navigation") && f,
                        _ = (0, a(83208).X)("opfs_snapshots") && f,
                        C = (0, a(682985).uB)(a(728372).default),
                        E = (0, r.useCallback)(e => {
                            var t;
                            null != (t = C.state.currentLoadingContainerStore) && t.state.endOfResultsReached && g({
                                pageStore: e,
                                environment: c,
                                pageContext: void 0,
                                sessionId: a(941701).transactionQueue.sessionId,
                                isSnapshotsEnabled: _
                            }).catch(e => {})
                        }, [c, C, _]),
                        P = (0, a(84235).Y)(e => {
                            window.requestIdleCallback ? window.requestIdleCallback(() => E(e), {
                                timeout: 1e4
                            }) : setTimeout(() => E(e), 2e3)
                        }, 1e3),
                        S = (0, r.useCallback)((...e) => {
                            for (let t of e) {
                                let e = (0, n().W8)({
                                    combinedId: t.combinedId
                                });
                                "track_page" === t.type && e.id === u ? p(!0) : "untrack_page" === t.type && e.id === u && p(!1)
                            }
                        }, [u]);
                    (0, r.useEffect)(() => h || m ? (a(10218).y.addListener(S), a(10218).y.getPageBlockTrackerForPage({
                        table: o().evP,
                        id: u
                    }) && p(!0), () => a(10218).y.removeListener(S)) : void a(10218).y.removeListener(S), [u, S, h, m]);
                    let y = (0, r.useMemo)(() => {
                            if (!1 !== v) return a(10218).y.getPageBlockTrackerForPage({
                                table: o().evP,
                                id: u
                            })
                        }, [u, v]),
                        w = (0, r.useCallback)(() => {
                            if (!y) return;
                            performance.mark("revisionChangeDetectionStart");
                            let t = a(912846).default.state,
                                r = t.undoStack[t.undoStack.length - 1];
                            if (!r) return;
                            let n = r.transactions.reduce((e, t) => {
                                    for (let a of t.operations)
                                        if (a.pointer.table === o().evP && e.add(a.pointer.id), (0, i().mP)(a) && a.additionalUpdatedPointers)
                                            for (let t of a.additionalUpdatedPointers) t.table === o().evP && e.add(t.id);
                                    return e
                                }, new Set),
                                s = y.getLiveBlocks().filter(({
                                    blockStore: e
                                }) => n.has(e.id));
                            performance.mark("revisionChangeDetectionEnd"), performance.measure("revisionChangeDetection", "revisionChangeDetectionStart", "revisionChangeDetectionEnd"), s.length > 0 && P(e)
                        }, [y, e, P]);
                    (0, r.useEffect)(() => {
                        if (f && h && y) return a(912846).default.addListener(w), () => a(912846).default.removeListener(w)
                    }, [f, h, y, w]);
                    let L = (0, r.useCallback)(() => {
                            P(e)
                        }, [e, P]),
                        T = (0, a(84235).Y)(L, 50);
                    (0, r.useEffect)(() => {
                        if (f && m && y) return y.addListener(T), () => {
                            y.removeListener(T)
                        }
                    }, [f, m, y, T]), (0, r.useEffect)(() => {
                        if (b) return () => {
                            P(e)
                        }
                    }, [b, e, P]), t = (0, r.useCallback)(() => {
                        f && k && P(e)
                    }, [f, k, e, P]), s = (0, a(84235).Y)(t, (void 0) ? ? 256), d = (0, r.useCallback)(() => {
                        document.hidden && s()
                    }, [s]), l = (0, r.useCallback)(() => {
                        s()
                    }, [s]), (0, r.useEffect)(() => (document.addEventListener("visibilitychange", d), window.addEventListener("blur", l), () => {
                        document.removeEventListener("visibilitychange", d), window.removeEventListener("blur", l), s.cancel()
                    }), [s, d, l])
                }(e), null
            }
        }
    }
]);