"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [35118], {
        6779: (e, t, a) => {
            a.d(t, {
                s: () => o
            });

            function o() {
                return a(205885).A.state.online
            }
        },
        46428: (e, t, a) => {
            a.d(t, {
                LQ: () => i
            });
            let o = (0, a(233319).Ls)({
                    key: "mobile undo",
                    displayName: a(233319).AY.undoName,
                    analyticsName: a(233319).AY.undoName.defaultMessage,
                    svg: a(325336).arrowUTurnUpLeftIcon,
                    validators: [a(26313).M, a(803254).F, a(378718).B, (0, a(572251).A)(a(734533).c), (0, a(572251).A)(a(442284).P)],
                    closeParentMenu: !0,
                    track: {
                        actionName: "undo"
                    },
                    action: (e, {
                        environment: t
                    }, o) => (0, a(462446).t)({
                        environment: t,
                        preventSelectText: !1,
                        callback: e
                    })
                }),
                n = (0, a(233319).Ls)({
                    key: "mobile redo",
                    displayName: a(233319).AY.redoName,
                    analyticsName: a(233319).AY.redoName.defaultMessage,
                    svg: a(515861).W,
                    validators: [a(803254).F, a(628664).f, (0, a(572251).A)(a(734533).c), (0, a(572251).A)(a(442284).P)],
                    closeParentMenu: !0,
                    track: {
                        actionName: "redo"
                    },
                    action: (e, {
                        environment: t
                    }, o) => (0, a(270600).Z)({
                        environment: t,
                        callback: e
                    })
                }),
                i = (0, a(233319).gy)({
                    key: "mobile revision actions",
                    actions: [o, n]
                })
        },
        53445: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowLeftRightIcon: () => n,
                iconDefinition: () => o
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.26 2.25 13.47 15.5",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3.45 5.925a.625.625 0 0 0 0 .884l3.499 3.497a.625.625 0 1 0 .884-.883L5.402 6.992h10.705a.625.625 0 0 0 0-1.25H5.402l2.43-2.431a.625.625 0 0 0-.883-.884zm8.717 11.648a.625.625 0 0 1 0-.884l2.431-2.43H3.893a.625.625 0 1 1 0-1.25h10.705l-2.43-2.431a.625.625 0 0 1 .883-.884l3.498 3.497a.625.625 0 0 1 0 .884l-3.498 3.498a.625.625 0 0 1-.884 0"
                    })
                },
                n = (0, a(104509).wt)("arrowLeftRight", o, "default")
        },
        60748: (e, t, a) => {
            a.d(t, {
                B: () => i,
                T: () => r
            }), a(18107), a(967357), a(898992), a(737550), a(296540);
            var o = a(474848);
            let n = (0, a(109939).YK)({
                archiveSubitemsConfirmMessage: {
                    id: "archiveActions.archiveSubitemsConfirmMessage",
                    defaultMessage: "Are you sure you want to archive {itemCount, plural, one {this {newItemName}} other {these {newItemNamePlural}}}?"
                },
                archiveSubitemsConfirmDescription: {
                    id: "archiveActions.archiveSubitemsConfirmDescription",
                    defaultMessage: "This will also archive {subitemCount, plural, one {{subitemCount} sub-{newItemName}} other {{subitemCount} sub-{newItemNamePlural}}}."
                },
                archiveSubitemsConfirmAcceptLabel: {
                    id: "archiveActions.archiveSubitemsConfirmAcceptLabel",
                    defaultMessage: "Archive"
                },
                archivedPage: {
                    id: "archiveActions.archivedPage",
                    defaultMessage: "Archived page"
                },
                archiveSubitemsErrorMessage: {
                    id: "archiveActions.archiveSubitemsErrorMessage",
                    defaultMessage: "There was an error archiving those items. Please try again later."
                },
                unarchive: {
                    id: "archiveActions.unarchive",
                    defaultMessage: "Unarchive"
                }
            });
            async function i(e) {
                var t;
                let {
                    environment: i,
                    blocks: r
                } = e, d = r.at(0);
                if (!d) return;
                let u = (null == (t = (0, a(444610).U)(d)) ? void 0 : t.collectionStore()) ? ? d.getAssociatedCollectionStore(),
                    m = u && r.some(e => (0, a(523288).Q)({
                        collectionStore: u,
                        blockStore: e
                    })),
                    g = d.getSpaceId();
                if (!m) {
                    (0, a(377796).createAndCommit)({
                        userAction: "archiveActions.archiveBlocksWithMaybeSubitems",
                        environment: i,
                        cellTarget: g ? {
                            spaceWithId: g
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            for (let t of r) l({
                                environment: i,
                                blockStore: t,
                                transaction: e
                            })
                        }
                    }), c(i);
                    return
                }
                let {
                    result: p,
                    status: f
                } = await (0, a(112944).zM)({
                    environment: i,
                    blocks: r,
                    options: {
                        canEdit: !0
                    },
                    collectionStore: u ? ? void 0
                });
                if ("success" !== f) return void a(436555).D6({
                    label: (0, o.jsx)(a(109939).sA, { ...n.archiveSubitemsErrorMessage
                    })
                });
                if (p.length > 0) {
                    let e = null == u ? void 0 : u.getFormat().app_config_uri,
                        t = (0, a(463082).$O)(e, !0),
                        o = (0, a(463082).oj)(e, !0);
                    if (!await s({
                            itemCount: r.length,
                            subitemCount: p.length,
                            newItemName: t,
                            newItemNamePlural: o
                        })) return
                }(0, a(377796).createAndCommit)({
                    userAction: "archiveActions.archiveBlocksWithMaybeSubitems",
                    environment: i,
                    cellTarget: g ? {
                        spaceWithId: g
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        for (let t of r) l({
                            environment: i,
                            blockStore: t,
                            transaction: e
                        });
                        for (let t of p) l({
                            environment: i,
                            blockStore: t,
                            transaction: e
                        })
                    }
                }), c(i)
            }

            function r(e) {
                let {
                    blockStore: t,
                    transaction: o
                } = e;
                (0, a(421439).y4)({
                    store: t,
                    transaction: o,
                    operation: a(488307).op.update({
                        pointer: t.pointer,
                        path: [],
                        args: {
                            archived_by_id: null,
                            archived_by_table: null,
                            archived_time: null
                        }
                    })
                })
            }
            async function s(e) {
                let {
                    itemCount: t,
                    subitemCount: i,
                    newItemName: r,
                    newItemNamePlural: s
                } = e, {
                    accept: l
                } = await a(647095).Gh({
                    message: (0, o.jsx)(a(109939).sA, { ...n.archiveSubitemsConfirmMessage,
                        values: {
                            itemCount: t,
                            newItemName: r,
                            newItemNamePlural: s
                        }
                    }),
                    description: (0, o.jsx)(a(109939).sA, { ...n.archiveSubitemsConfirmDescription,
                        values: {
                            subitemCount: i,
                            newItemName: r,
                            newItemNamePlural: s
                        }
                    }),
                    acceptLabel: (0, o.jsx)(a(109939).sA, { ...n.archiveSubitemsConfirmAcceptLabel
                    })
                });
                return l
            }

            function l(e) {
                let {
                    environment: t,
                    blockStore: o,
                    transaction: n
                } = e, i = t.currentUser.id;
                if (!i) return;
                let r = Date.now();
                (0, a(421439).y4)({
                    store: o,
                    transaction: n,
                    operation: a(488307).op.update({
                        pointer: o.pointer,
                        path: [],
                        args: {
                            archived_by_id: i,
                            archived_by_table: a(832375).oo9,
                            archived_time: r
                        }
                    })
                })
            }

            function c(e) {
                a(436555).D6({
                    label: (0, o.jsx)(a(109939).sA, { ...n.archivedPage
                    }),
                    right: (0, o.jsx)(a(531119).Ag, {
                        onClick: () => {
                            a(436555).N2(), (0, a(462446).t)({
                                environment: e,
                                preventSelectText: !0
                            })
                        },
                        children: (0, o.jsx)(a(109939).sA, { ...n.unarchive
                        })
                    })
                })
            }
        },
        61149: (e, t, a) => {
            a.d(t, {
                U: () => g
            });
            let o = (0, a(477465).Dv)("collectionsBulkAction");
            a(296540);
            var n = () => a(739411),
                i = a(474848);
            let r = (0, a(109939).YK)({
                    loadingMessage: {
                        id: "bulkActionProgressSnackbar.loading",
                        defaultMessage: "Loading…"
                    },
                    deletingProgress: {
                        id: "bulkActionProgressSnackbar.deletingProgress",
                        defaultMessage: "Deleting {processed} / {total}…"
                    },
                    archivingProgress: {
                        id: "bulkActionProgressSnackbar.archivingProgress",
                        defaultMessage: "Archiving {processed} / {total}…"
                    },
                    editingPropertyProgress: {
                        id: "bulkActionProgressSnackbar.editingPropertyProgress",
                        defaultMessage: "Updating {processed} / {total}…"
                    },
                    movingProgress: {
                        id: "bulkActionProgressSnackbar.movingProgress",
                        defaultMessage: "Moving {processed} / {total}…"
                    }
                }),
                s = {
                    height: 24
                };

            function l() {
                let e = (0, a(682985).K8)(() => {
                    let e = n().Y.state;
                    if ("loading" === e.phase || "in_progress" === e.phase) return e
                }, []);
                return e ? (0, i.jsxs)(a(4458).fI, {
                    alignItems: "center",
                    gap: 8,
                    children: [(0, i.jsx)(a(517334).k, {
                        size: "sm",
                        onDarkBackground: !0
                    }), (0, i.jsx)("span", {
                        children: "loading" === e.phase ? (0, i.jsx)(a(109939).sA, { ...r.loadingMessage
                        }) : (0, i.jsx)(a(109939).sA, { ... function(e) {
                                switch (e) {
                                    case "delete":
                                        return r.deletingProgress;
                                    case "archive":
                                        return r.archivingProgress;
                                    case "editProperty":
                                    default:
                                        return r.editingPropertyProgress;
                                    case "move":
                                        return r.movingProgress
                                }
                            }(e.actionType),
                            values: {
                                processed: e.processed,
                                total: e.total
                            }
                        })
                    }), (0, i.jsx)("div", {
                        style: s,
                        children: (0, i.jsx)(a(346268).c, {
                            type: "vertical",
                            colorVariant: "inversePrimary",
                            colorPalette: "gray",
                            size: 24
                        })
                    })]
                }) : null
            }
            let c = (0, a(109939).YK)({
                completedDelete: {
                    id: "bulkActionProgressSnackbar.completedDelete",
                    defaultMessage: "Deleted {processed} rows"
                },
                completedArchive: {
                    id: "bulkActionProgressSnackbar.completedArchive",
                    defaultMessage: "Archived {processed} rows"
                },
                completedEditProperty: {
                    id: "bulkActionProgressSnackbar.completedEditProperty",
                    defaultMessage: "Updated {processed} rows"
                },
                completedMove: {
                    id: "bulkActionProgressSnackbar.completedMove",
                    defaultMessage: "Moved {processed} rows"
                },
                errorMessage: {
                    id: "bulkActionProgressSnackbar.errorMessage",
                    defaultMessage: "Something went wrong. Please try again."
                }
            });

            function d() {
                (0, a(984211).f)({
                    item: {
                        label: (0, i.jsx)(l, {}),
                        durationMs: "keep",
                        persistAcrossNavigation: !0
                    },
                    onDismiss: () => {
                        m()
                    }
                })
            }

            function u() {
                a(436555).D6({
                    label: a(962299).A.formatMessage(c.errorMessage),
                    durationMs: a(441742).LX,
                    persistAcrossNavigation: !0
                })
            }

            function m() {
                a(436555).N2(), n().Y.setState({
                    phase: "idle"
                })
            }
            async function g(e) {
                let {
                    environment: t,
                    collectionContextStore: i,
                    bulkAction: r
                } = e;
                if (!a(218744).default.checkGate({
                        gateName: "collections_bulk_action"
                    })) return {
                    success: !1
                };
                let s = i.collectionViewStore();
                if (!s) return {
                    success: !1
                };
                let l = s.getCollectionSource();
                if (!l) return {
                    success: !1
                };
                let c = s.pointer.spaceId;
                if (!c) return {
                    success: !1
                };
                let m = r.type,
                    g = !1;
                n().Y.setState({
                    phase: "loading",
                    actionType: m
                }), d(), g = !0;
                let f = i.bulkSelectionStore.state,
                    v = f.excludedIds,
                    y = f.includedIds,
                    b = i.archiveStatusStore.state ? ? (a(218744).default.checkGate({
                        gateName: "default_loader_archive_status_non_archived"
                    }) && !(0, a(213832).TR)(l) ? "NON_ARCHIVED" : void 0),
                    h = f.scope ? { ...f.scope,
                        archiveStatus: b
                    } : void 0,
                    k = i.searchQueryStore.state || void 0,
                    S = (0, a(259242).UT)({
                        environment: t,
                        eventName: o,
                        request: {
                            spaceId: c,
                            collectionSource: l,
                            collectionViewPointer: s.pointer,
                            bulkAction: r,
                            excludedBlockIds: [...v],
                            includedBlockIds: [...y],
                            bulkSelectScope: h,
                            searchQuery: k
                        },
                        multiCellRouting: {
                            spaceIds: [c]
                        }
                    }),
                    A = await S.next();
                return A.done ? {
                    success: !1
                } : A.value.error ? (n().Y.setState({
                    phase: "error",
                    errorType: "somethingWentWrong",
                    actionType: m
                }), u(), {
                    success: !1
                }) : ((0, a(203272).wi)({
                    collectionContextStore: i
                }), (0, a(471e3).I)({
                    environment: t
                }), p({
                    taskIterator: S,
                    firstResult: A.value,
                    actionType: m,
                    snackbarShown: g
                }), {
                    success: !0
                })
            }
            async function p(e) {
                let {
                    taskIterator: t,
                    firstResult: o,
                    actionType: i
                } = e, r = e.snackbarShown, s = {
                    done: !1,
                    value: o
                };
                for (; !s.done;) {
                    let e = s.value;
                    if (e.error) {
                        n().Y.setState({
                            phase: "error",
                            errorType: "somethingWentWrong",
                            actionType: i
                        }), u();
                        return
                    }
                    let {
                        value: o
                    } = e;
                    if ("in_progress" === o.status && (n().Y.setState({
                            phase: "in_progress",
                            processed: o.processed,
                            total: o.total,
                            actionType: i
                        }), r || (d(), r = !0)), "completed" === o.status) {
                        n().Y.setState({
                                phase: "completed",
                                processed: o.processed,
                                actionType: i
                            }),
                            function(e, t) {
                                let o = function(e) {
                                    switch (e) {
                                        case "delete":
                                            return c.completedDelete;
                                        case "archive":
                                            return c.completedArchive;
                                        case "editProperty":
                                        default:
                                            return c.completedEditProperty;
                                        case "move":
                                            return c.completedMove
                                    }
                                }(t);
                                a(436555).D6({
                                    label: a(962299).A.formatMessage(o, {
                                        processed: e
                                    }),
                                    persistAcrossNavigation: !0
                                })
                            }(o.processed, i), setTimeout(() => {
                                m()
                            }, 3e3);
                        return
                    }
                    if ("error" === o.status) {
                        n().Y.setState({
                            phase: "error",
                            errorType: o.errorType,
                            actionType: i
                        }), u();
                        return
                    }
                    s = await t.next()
                }
            }
        },
        84309: (e, t, a) => {
            a.d(t, {
                G: () => n
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.62 2.37 10.76 15.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.665 17.22a.625.625 0 0 0 .805.365 7.96 7.96 0 0 0 4.528-4.353 7.94 7.94 0 0 0 4.532 4.353.625.625 0 0 0 .44-1.17 6.69 6.69 0 0 1-4.345-6.268V4.509l2.683 2.683a.625.625 0 0 0 .884-.884l-3.75-3.75a.625.625 0 0 0-.884 0l-3.75 3.75a.625.625 0 1 0 .884.884l2.683-2.683v5.625a6.71 6.71 0 0 1-4.345 6.281.625.625 0 0 0-.365.805"
                    })
                },
                n = (0, a(104509).wt)("arrowMergeUp", o, "default")
        },
        87822: (e, t, a) => {
            a.d(t, {
                J: () => o
            });

            function o(e) {
                let {
                    spaceViewStore: t,
                    pageId: a
                } = e;
                return !!t && !!a && -1 !== t.getBookmarkedPageIds().indexOf(a)
            }
        },
        89352: (e, t, a) => {
            a.d(t, {
                j: () => o
            });

            function o() {
                return a(447036).Gb() ? a(129894).A : a(363746).A
            }
        },
        94021: (e, t, a) => {
            a.d(t, {
                A: () => n
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.27 2.85 17.64 14.57",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M1.293 6.583A2.125 2.125 0 0 1 3.12 4.195l9.912-1.321A2.125 2.125 0 0 1 15.418 4.7l.264 1.975h1.103c1.174 0 2.125.951 2.125 2.125v6.5a2.125 2.125 0 0 1-2.125 2.125h-10A2.125 2.125 0 0 1 4.66 15.3v-.465l-.12.016a2.125 2.125 0 0 1-2.388-1.825zm3.367 6.991V8.8c0-1.174.952-2.125 2.125-2.125h7.636l-.242-1.81a.875.875 0 0 0-.983-.752L3.284 5.434a.875.875 0 0 0-.752.983l.86 6.443a.875.875 0 0 0 .982.752zM5.91 8.8v6.5c0 .483.392.875.875.875h10a.875.875 0 0 0 .875-.875V8.8a.875.875 0 0 0-.875-.875h-10a.875.875 0 0 0-.875.875"
                    })
                },
                n = (0, a(104509).wt)("rectangleOnRectangleTilt", o, "default")
        },
        123219: (e, t, a) => {
            a.d(t, {
                Y: () => n
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 16.67 15.44",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M14.958 8.587c.332.095.523.44.429.772l-2.5 8.75a.625.625 0 0 1-1.202-.343l2.5-8.75a.625.625 0 0 1 .773-.43m-4.74 1.783a.626.626 0 0 1 .886.885l-2.308 2.307 2.308 2.308a.627.627 0 0 1-.885.885l-2.75-2.75a.626.626 0 0 1 0-.885zm5.75 0a.626.626 0 0 1 .884 0l2.75 2.75a.626.626 0 0 1 0 .885l-2.75 2.75a.626.626 0 0 1-.884-.885l2.307-2.307-2.307-2.308a.627.627 0 0 1 0-.885M14.75 3.125c1.174 0 2.125.951 2.125 2.125v2.972l-1.25-1.204V5.25a.875.875 0 0 0-.875-.875h-9.5a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h2.071l1.25 1.25H5.25a2.125 2.125 0 0 1-2.125-2.125v-9.5c0-1.174.951-2.125 2.125-2.125z"
                    })
                },
                n = (0, a(104509).wt)("copyCode", o, "default")
        },
        127872: (e, t, a) => {
            function o(e) {
                let {
                    collectionStore: t,
                    environment: o
                } = e;
                return t.canEdit() || t.canEditCollection() || t.canEditContentOnly() || (0, a(862085).gN)({
                    collectionStore: t,
                    environment: o
                })
            }

            function n(e) {
                let {
                    collectionContextStore: t,
                    transaction: o
                } = e;
                return (0, a(165170).w)({
                    collectionContextStore: t,
                    transaction: o
                }), i(e)
            }

            function i(e) {
                var t, n, i;
                let r, {
                        environment: s,
                        collectionContextStore: l,
                        groupsPointer: c,
                        insertAtIndex: d,
                        shouldCoerce: u,
                        templateStore: m,
                        transaction: g,
                        from: p,
                        tracker: f,
                        inMemoryRecordCache: v,
                        isKeyboard: y,
                        title: b,
                        blockType: h
                    } = e,
                    k = a(680007).default.mark("collections.add_item_lag");
                a(680007).default.measureAfterNextFlush(k, {
                    getData: () => ({ ...a(752242).kz(l),
                        from: p.createBlock
                    })
                });
                let S = "collectionTypedView" === l.contextTypeFromStoreState,
                    A = l.databaseTypeFromStoreState,
                    M = l.collectionStoresStore.state,
                    w = M.find(e => o({
                        collectionStore: e,
                        environment: s
                    })) || M[0],
                    I = null == (t = (0, a(974410).f)(w)) ? void 0 : t.id,
                    N = a(728372).AppStoreCurrentUserSettingsStore.state,
                    C = S && A && I && N && [...N.getAllPreferredCollections(I), ...N.getPreferredCollectionsOfType(I, A)] || [],
                    x = c[0];
                if ("group_header" === p.createBlock && "location" === x.value.type) {
                    let e = x.value.value;
                    e && (r = M.find(t => t.id === e.id && o({
                        collectionStore: t,
                        environment: s
                    })))
                } else r = function(e, t, a) {
                    for (let n of e) {
                        let e = t.find(e => e.id === n && o({
                            collectionStore: e,
                            environment: a
                        }));
                        if (e) return e
                    }
                }(C, M, s);
                let _ = r ? ? w,
                    P = null == _ ? void 0 : _.getSpaceId(),
                    T = l.collectionViewStore(),
                    L = l.getViewType(),
                    j = a(124937).Wv({
                        environment: s,
                        type: h ? ? a(955630).xd.page,
                        inMemoryRecordCache: v,
                        transaction: g,
                        spaceId: P,
                        tracker: f,
                        properties: {
                            title: (0, a(247438).x9d)(b)
                        }
                    });
                if (!_ || !T || !L) return {
                    coercionSucceeded: !0,
                    newStore: j
                };
                let B = null == (n = l.groupsStore.getGroupState(c)) ? void 0 : n.groupUiParentStore;
                if (!B) return {
                    coercionSucceeded: !0,
                    newStore: j
                };
                let D = a(970831).B.createChildStore(B, {
                    table: a(832375).evP,
                    id: j.id
                });
                m && a(205885).A.state.online && a(845422).TB({
                    title: "template",
                    environment: s,
                    store: j,
                    templateStore: m,
                    isKeyboard: y ? ? !1,
                    isCreateIn: !1,
                    transaction: g,
                    from: p.initCollection ? ? "collection_group_actions"
                });
                let V = (0, a(188993).j)({
                        environment: s,
                        store: j,
                        collectionStore: _,
                        collectionContextStore: l,
                        groupsPointer: c,
                        shouldCoerce: u,
                        transaction: g
                    }),
                    F = (null == (i = l.groupsStore.getGroupState(c)) || null == (i = i.reducerResultStore.state) ? void 0 : i.blockIds) || [],
                    R = void 0 !== d ? d : F.length,
                    U = l.permissionScopesStore.state.canCreatePagesInCollection;
                if ((0, a(979052).k)({
                        environment: s,
                        collectionStore: _,
                        blockIds: [D.id],
                        action: "collection_view"
                    }), U || S) {
                    let e = [...F.slice(0, R), D.id, ...F.slice(R)];
                    (0, a(806875).z)({
                        resultIds: e,
                        collectionViewStore: T,
                        collectionContextStore: l,
                        transaction: g
                    })
                }
                return {
                    coercionSucceeded: V,
                    newStore: D
                }
            }
            a.d(t, {
                H: () => i,
                Q: () => n
            }), a(898992), a(672577)
        },
        139780: (e, t, a) => {
            a.d(t, {
                d: () => n
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.4 2.39 15.2 15.86",
                    svg: (0, a(474848).jsx)("path", {
                        d: "m4.897 3.085-.122-.142a.625.625 0 0 0-.95.814l3.18 3.71h-3.98a.625.625 0 0 0-.367 1.13L6.6 11.462l-1.506 4.636a.625.625 0 0 0 .962.699L10 13.932l3.943 2.865a.625.625 0 0 0 .903-.183l1.215 1.418a.625.625 0 1 0 .95-.814l-.495-.576a.6.6 0 0 1-.127-.113l-11.4-13.3a.6.6 0 0 1-.093-.144m.051 5.632h3.129l5.018 5.853.027.085-2.755-2.001a.625.625 0 0 0-.734 0l-2.755 2 1.052-3.237a.625.625 0 0 0-.227-.7zm8.633 2.613 3.762-2.733a.625.625 0 0 0-.367-1.13H12.1L10.594 2.83a.625.625 0 0 0-1.188 0L8.55 5.463l.953 1.112L10 5.046l1.052 3.239a.625.625 0 0 0 .595.432h3.404l-2.287 1.662z"
                    })
                },
                n = (0, a(104509).wt)("starSlash", o, "default")
        },
        144092: (e, t, a) => {
            a.d(t, {
                Qi: () => l,
                Z5: () => d,
                fb: () => c,
                x2: () => i,
                yP: () => s
            }), a(944114);
            var o = () => a(517013),
                n = () => a(832375);

            function i(e) {
                let t = (0, a(457915).g)(e),
                    i = [];
                for (let a of t) "block" === a.table && i.push({
                    blockStore: a,
                    slackIntegrationStore: (0, o().v3)(e, {
                        table: n().VY8,
                        id: a.id
                    })
                });
                for (let {
                        blockStore: e,
                        slackIntegrationStore: t
                    } of i)
                    if (t.isReady() && t.getKeyStore("enabled").getValue()) return {
                        blockStore: e,
                        slackIntegrationStore: t
                    };
                return {
                    blockStore: e,
                    slackIntegrationStore: (0, o().v3)(e, {
                        table: n().VY8,
                        id: e.id
                    })
                }
            }

            function r(e) {
                let {
                    spaceStore: t
                } = e, o = null == t ? void 0 : t.getBotSettingsStore().getValue();
                return (0, a(573143).nH)({
                    spaceBotSettings: o,
                    integrationId: a(49361).zG
                })
            }

            function s() {
                return a(218744).default.checkGate({
                    gateName: "legacy_slack_notifications"
                })
            }

            function l(e) {
                let {
                    spaceStore: t
                } = e;
                return r({
                    spaceStore: t
                }) || !1
            }

            function c(e) {
                let {
                    spaceStore: t
                } = e;
                return r({
                    spaceStore: t
                }) || !1
            }

            function d(e) {
                let {
                    spaceStore: t
                } = e;
                return !!r({
                    spaceStore: t
                }) && a(218744).default.checkGate({
                    gateName: "enable_notion_activity_notifications_in_slack"
                })
            }
        },
        165170: (e, t, a) => {
            a.d(t, {
                w: () => o
            }), a(898992), a(672577);

            function o({
                collectionContextStore: e,
                transaction: t
            }) {
                let n = "collectionTypedView" === e.contextTypeFromStoreState,
                    i = e.databaseTypeFromStoreState,
                    r = e.collectionStoresStore.state,
                    s = r.find(e => e.canEdit() || e.canEditCollection() || e.canEditContentOnly()) || r[0];
                !n && s && (0, a(90252).e)({
                    transaction: t,
                    databaseType: i,
                    collectionId: s.id,
                    spaceId: s.getSpaceId()
                })
            }
        },
        245102: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowLineDownIcon: () => n,
                iconDefinition: () => o
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.52 2.39 12.95 15.21",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M10 2.4c.345 0 .625.28.625.625v9.966l3.333-3.333a.625.625 0 1 1 .884.884l-4.4 4.4a.625.625 0 0 1-.884 0l-4.4-4.4a.625.625 0 0 1 .884-.884l3.333 3.333V3.025c0-.345.28-.625.625-.625M4.15 16.35a.625.625 0 1 0 0 1.25h11.7a.625.625 0 0 0 0-1.25z"
                    })
                },
                n = (0, a(104509).wt)("arrowLineDown", o, "default")
        },
        256606: (e, t, a) => {
            a.d(t, {
                b: () => n,
                oU: () => o
            });
            let o = {
                    "1:1": {
                        width: 1,
                        height: 1
                    },
                    "5:4": {
                        width: 5,
                        height: 4
                    },
                    "4:3": {
                        width: 4,
                        height: 3
                    },
                    "7:5": {
                        width: 7,
                        height: 5
                    },
                    "3:2": {
                        width: 3,
                        height: 2
                    },
                    "5:3": {
                        width: 5,
                        height: 3
                    },
                    "16:9": {
                        width: 16,
                        height: 9
                    }
                },
                n = {
                    crop: {
                        unit: "%",
                        x: 0,
                        y: 0,
                        width: 100,
                        height: 100
                    },
                    mask: "None"
                }
        },
        260235: (e, t, a) => {
            function o(e) {
                var t, o;
                if (!e.isInLibraryBlock()) return;
                let n = e.getRecordStoreUIRoot();
                if (!(n instanceof a(678703).Bv)) return;
                let i = null == (t = (0, a(444610).U)(n)) ? void 0 : t.collectionViewStore();
                return null == (o = (0, a(134273).N)(i)) ? void 0 : o.viewName
            }

            function n({
                environment: e,
                selectedItems: t
            }) {
                if (0 === t.length) return;
                let i = a(728372).AppStoreCurrentUserSettingsStore.state,
                    r = a(728372).AppStoreSidebarSpaceViewStore.state,
                    s = a(728372).AppStoreSidebarSpaceStore.state,
                    l = e.currentUser.id,
                    c = o(t[0]);
                if (!i || !r || !l || !s || !c || ! function({
                        libraryViewName: e,
                        blocks: t,
                        userId: o,
                        spaceStore: n,
                        spaceViewStore: i
                    }) {
                        if (t.some(e => e.isArchived())) return !1;
                        switch (e) {
                            case "recents":
                            case "teamspaceDirectory":
                            case "libraryExternalPages":
                            case "myMeetings":
                            case "agents":
                                return !1;
                            case "favorites":
                                let r = i.getBookmarkedPageIds();
                                return t.every(e => r.includes(e.id));
                            case "private":
                                return t.every(e => (0, a(528991).K)(e));
                            case "shared":
                                return t.every(e => (0, a(260405).B)({
                                    store: e,
                                    spaceStore: n,
                                    userId: o
                                }));
                            default:
                                return (0, a(722371).HB)(e), !1
                        }
                    }({
                        libraryViewName: c,
                        blocks: t,
                        userId: l,
                        spaceStore: s,
                        spaceViewStore: r
                    })) return;
                let d = a(678703).VF.createChildStore(r, (0, a(729052).i1)({
                    userId: l,
                    spaceId: r.id
                }));
                if (d) return {
                    environment: e,
                    selectedItems: t,
                    userSettingsStore: i,
                    spaceViewStore: r,
                    spaceUserStore: d,
                    libraryViewName: c
                }
            }
            a.d(t, {
                o: () => o,
                s: () => n
            }), a(898992), a(823215), a(737550)
        },
        290884: (e, t, a) => {
            a.d(t, {
                l: () => n
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.79 5.83 18.41 8.34",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M5.393 6.022a.625.625 0 0 1 0 .884L2.924 9.375h5.662a.625.625 0 1 1 0 1.25H2.924l2.469 2.469a.625.625 0 0 1-.884.883L.974 10.442a.625.625 0 0 1 0-.884l3.535-3.536a.625.625 0 0 1 .884 0m6.026 3.353a.625.625 0 1 0 0 1.25h5.648l-2.469 2.469a.625.625 0 1 0 .884.883l3.535-3.535a.625.625 0 0 0 0-.884l-3.535-3.536a.625.625 0 0 0-.884.884l2.469 2.469z"
                    })
                },
                n = (0, a(104509).wt)("arrowExpandHorizontal", o, "default")
        },
        329117: (e, t, a) => {
            a.d(t, {
                K: () => o
            }), a(898992), a(823215);

            function o(e) {
                return !a(420153).l.state && e.blocks.every(e => e.canAdmin())
            }
        },
        330621: (e, t, a) => {
            a.d(t, {
                q: () => o
            });

            function o(e) {
                var t;
                return (0, a(505941).y)(e.environment, null == (t = e.blocks) ? void 0 : t[0])
            }
        },
        347487: (e, t, a) => {
            a.d(t, {
                C: () => i
            }), a(296540);
            var o = a(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.95 1.45 16.59 16.01",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M3.465 6.889a2.865 2.865 0 0 1 4.962-2.865l.244.422a.55.55 0 1 0 .952-.55l-.244-.422a3.965 3.965 0 1 0-6.867 3.965l.244.422a.55.55 0 1 0 .953-.55z"
                        }), (0, o.jsx)("path", {
                            d: "M11.557 5.959a1.75 1.75 0 0 1 1.96.142 1.748 1.748 0 0 1 2.871.23l1.367 2.366a5.84 5.84 0 0 1-8.956 7.27l-4.044-3.624a1.672 1.672 0 0 1 1.64-2.831L4.593 6.39a1.75 1.75 0 1 1 3.03-1.749l1.14 1.975a1.75 1.75 0 0 1 2.29-.22c.134-.172.303-.322.504-.437M6.54 5.266a.5.5 0 0 0-.865.5l3.216 5.57a.625.625 0 0 1-.915.813L6.12 10.76a.42.42 0 0 0-.532.651l4.044 3.624a4.591 4.591 0 0 0 7.04-5.714l-1.367-2.367a.498.498 0 1 0-.864.5l.067.118a.625.625 0 1 1-1.082.625l-.563-.974a.5.5 0 0 0-.865.5l.113.194a.625.625 0 1 1-1.083.625l-.562-.974a.5.5 0 0 0-.865.5l.562.974a.625.625 0 1 1-1.082.625z"
                        })]
                    })
                },
                i = (0, a(104509).wt)("handTap", n, "default")
        },
        366518: (e, t, a) => {
            a.d(t, {
                O8: () => l,
                Yf: () => r,
                fS: () => s
            });
            var o = () => a(56477),
                n = () => a(11266),
                i = () => a(993189);

            function r(e) {
                let {
                    environment: t,
                    textStore: o,
                    blockStore: n,
                    url: i,
                    oldTextValue: r,
                    urlSelection: s
                } = e;
                if (a(764615).Ay.state.open || a(994872).A.state.open || a(498368).Ay.state.open || a(385125).b.state.open) return !1;
                let l = a(239134).get();
                if (!l) return !1;
                let c = a(239134).getRect(l);
                if (!c) return !1;
                let d = (0, a(132702).parseRoute)({
                    url: i,
                    baseUrl: a(986939).A.domainBaseUrl,
                    publicDomainName: a(986939).A.publicDomainName,
                    isMobile: a(986939).A.isMobile,
                    protocol: a(986939).A.protocol,
                    currentUrl: window.location.href,
                    requestedOnAlternateDomain: (0, a(700473).wasRequestedOnAlternateDomain)()
                });
                if ("page" === d.name && d.discussionId && d.discussionId) {
                    let e = d.discussionId,
                        l = d.blockId;
                    if (!l) return !1;
                    let u = n.getParentBlockStore();
                    if (!u) return !1;
                    let m = a(970831).B.createChildStore(u, {
                            table: a(832375).evP,
                            id: l,
                            spaceId: u.getSpaceId()
                        }),
                        g = a(581068).c.createChildStore(m, {
                            table: a(832375).$YH,
                            id: e,
                            spaceId: u.getSpaceId()
                        });
                    if ("none" === g.getRole()) return !1;
                    let p = new(a(345426)).ComputedStore(() => g.getCommentStoresSortedByCreatedTime()[0], {
                            debugName: "firstCommentStore"
                        }),
                        f = new(a(870941)).A({
                            name: "internalUnfurlingMenuActions.activate",
                            isTemporaryData: !0
                        });
                    t.defaultRecordCache.inMemoryRecordCache.addCacheOverride(f);
                    let v = n.clone(f),
                        y = o.clone(f),
                        b = u.clone(f);
                    return a(705023).A.setState({
                        args: {
                            commentStore: p
                        },
                        stores: {
                            blockStore: n,
                            textStore: o,
                            parentStore: u
                        },
                        temporaryStores: {
                            blockStore: v,
                            textStore: y,
                            parentStore: b
                        },
                        temporaryRecordCache: f,
                        focusedIndex: a(679125).A.Preview,
                        selectionRect: c,
                        oldTextValue: r,
                        open: !0,
                        url: i,
                        urlSelection: s
                    }), a(595053).wQ(t, {
                        url: i
                    }), !0
                }
                return !1
            }

            function s(e) {
                let {
                    actionType: t,
                    environment: r,
                    commentStore: s,
                    useTempStores: l
                } = e, c = a(705023).A.state;
                if (!c.open) return;
                let {
                    oldTextValue: d
                } = c, {
                    textStore: u,
                    blockStore: m,
                    parentStore: g
                } = l ? c.temporaryStores : c.stores, p = r.currentUser.id;
                if (p) {
                    if (l)
                        for (let e in c.temporaryRecordCache.clearCache(), c.temporaryStores) {
                            let t = c.temporaryStores[e],
                                a = {
                                    userId: p,
                                    pointer: t.pointer
                                },
                                s = r.defaultRecordCache.inMemoryRecordCache.getRecord(a);
                            s ? (0, n().P)({
                                currentUserId: r.currentUser.id,
                                defaultRecordCache: r.defaultRecordCache,
                                inMemoryRecordCache: c.temporaryRecordCache,
                                pointer: t.pointer,
                                model: i().Bj6.fromValue(t.pointer.table, s.value),
                                role: s.role,
                                updatePaths: [
                                    []
                                ],
                                userId: p,
                                force: !0,
                                debugSource: "setUnfurlType"
                            }) : (0, o().o)({
                                inMemoryRecordCache: c.temporaryRecordCache,
                                persistedRecordCache: void 0,
                                pointer: t.pointer,
                                userId: p
                            })
                        } else r.defaultRecordCache.inMemoryRecordCache.removeCacheOverride(c.temporaryRecordCache);
                    switch (t) {
                        case a(679125).A.Link:
                            (0, a(182553).h)({
                                environment: r,
                                store: c.stores.blockStore
                            }), (0, a(627974).t)({
                                store: c.stores.textStore,
                                selection: {
                                    startIndex: c.urlSelection.endIndex,
                                    endIndex: c.urlSelection.endIndex
                                }
                            }), a(705023).A.setState({ ...c,
                                focusedIndex: a(679125).A.Link
                            });
                            break;
                        case a(679125).A.Mention:
                            if (!s) return;
                            let e = u.pointer.spaceId;
                            if (!e) return;
                            let f = s.id;
                            (0, a(377796).createAndCommit)({
                                environment: r,
                                userAction: "internalUnfurlingMenuActions.mention",
                                canUndo: !0,
                                cellTarget: {
                                    spaceWithId: e
                                },
                                perform: t => {
                                    a(41403).R9({
                                        environment: r,
                                        store: u,
                                        value: d,
                                        transaction: t
                                    }), a(41403).Gf({
                                        environment: r,
                                        editorMode: "default",
                                        store: u,
                                        selection: {
                                            startIndex: c.urlSelection.startIndex,
                                            endIndex: c.urlSelection.startIndex
                                        },
                                        annotation: a(247438).hiQ(f, e),
                                        transaction: t,
                                        analyticsFrom: "block"
                                    })
                                }
                            }), a(705023).A.setState({ ...c,
                                focusedIndex: a(679125).A.Mention
                            });
                            break;
                        case a(679125).A.Preview:
                            if (!s) return;
                            (0, a(377796).createAndCommit)({
                                environment: r,
                                userAction: "internalUnfurlingMenuActions.preview",
                                canUndo: !0,
                                cellTarget: u.pointer.spaceId ? {
                                    spaceWithId: u.pointer.spaceId
                                } : void 0,
                                perform: e => {
                                    a(41403).R9({
                                        environment: r,
                                        store: u,
                                        value: d,
                                        transaction: e
                                    });
                                    let t = a(966980).eK(s);
                                    if (!t || !a(966980).No(t) || !g || !t.getParentId()) return;
                                    let o = a(3).s({
                                        environment: r,
                                        parentBlockStore: g,
                                        targetStore: s,
                                        transaction: e
                                    });
                                    if ((0, a(51929).W)({
                                            parentStore: g.getContentStore(),
                                            insertStore: o,
                                            afterStore: m,
                                            transaction: e
                                        }), 0 === a(247438).q4_(c.oldTextValue).trim().length) {
                                        let t = a(970831).B.createChildStore(g.getContentStore(), c.stores.blockStore.pointer);
                                        (0, a(818646).T)({
                                            parentStore: g.getContentStore(),
                                            childToRemoveStore: t,
                                            transaction: e
                                        })
                                    }
                                }
                            }), a(705023).A.setState({ ...c,
                                focusedIndex: a(679125).A.Preview
                            });
                            break;
                        default:
                            throw (0, a(722371).HB)(t)
                    }
                    l || a(705023).A.setState({
                        open: !1
                    })
                }
            }

            function l(e) {
                var t, o;
                let {
                    blockStore: n,
                    transaction: i,
                    environment: r
                } = e, s = n.getType(), l = n.getFormat(), c = n.getSpaceId();
                if (!n.isDefined() || s !== a(955630).xd.alias || !(null != l && null != (t = l.alias_pointer) && t.id)) return;
                let d = [a(247438).wmz(a(247438).hiQ(null == l || null == (o = l.alias_pointer) ? void 0 : o.id, c))];
                (0, a(173157).z)({
                    store: n,
                    data: {
                        type: a(955630).xd.text
                    },
                    transaction: i
                }), (0, a(173157).z)({
                    store: n.getFormatStore(),
                    data: {
                        alias_pointer: null
                    },
                    transaction: i
                }), a(41403).R9({
                    environment: r,
                    store: n.getBlockTitleStore(),
                    value: d,
                    transaction: i
                })
            }
        },
        380802: (e, t, a) => {
            a.d(t, {
                $: () => i,
                B: () => n
            });
            let o = "alwaysShowTextDirectionControls";

            function n({
                userId: e,
                value: t
            }) {
                a(255482).K.set({
                    userId: e,
                    key: o,
                    value: t
                })
            }

            function i({
                userId: e
            }) {
                return !!a(255482).K.get({
                    userId: e,
                    key: o
                })
            }
        },
        391605: (e, t, a) => {
            a.d(t, {
                $: () => i
            });
            var o = () => a(546605);
            class n extends o().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let i = new n
        },
        431956: (e, t, a) => {
            function o(e, t) {
                let o = t.getAlive(),
                    i = (0, a(697006).hu)(t),
                    r = !n(t),
                    s = n(t),
                    l = e.currentUser.id === t.getParentId(),
                    c = s && l && !(0, a(938977).YH)(t.getIntegrationId());
                return o && i && (c || r)
            }

            function n(e) {
                if (!e.getAlive || !(0, a(697006).hu)(e)) return !1;
                let t = a(728372).AppStoreCurrentUserRootStore.state,
                    o = e.getIntegrationId();
                if (!t || !o) return !1;
                let n = (0, a(517013).v3)(t, {
                    id: o,
                    table: a(832375).Lij
                }).getKeyStore("type").getValue();
                return !e.isInternalBot(n ? {
                    type: n
                } : void 0)
            }

            function i(e) {
                let {
                    externalIntegrationStoreState: t,
                    integrationId: o
                } = e;
                if (!t.loaded) return;
                let n = new Set(t.externalAuthentications.map(({
                        parent_id: e
                    }) => e)),
                    i = t.bots.filter(e => e.alive && n.has(e.id) && (0, a(697006).Sd)(e) && e.integration_id === o);
                return i.length ? i[0] : void 0
            }
            a.d(t, {
                VT: () => o,
                b0: () => n,
                gz: () => i
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(581454)
        },
        523288: (e, t, a) => {
            a.d(t, {
                Q: () => o
            });

            function o(e) {
                let {
                    collectionStore: t,
                    blockStore: o
                } = e, n = t ? (0, a(986629).by)(t.getFormat(), t.getSchema(), t.id) : void 0, i = null == n ? void 0 : n.property;
                if (!n || !i) return !1;
                let r = o.getSchema();
                if (!r) return !1;
                let s = r[i];
                return !!s && "relation" === s.type && (0, a(149267).r)({
                    store: o,
                    subitemFormat: n,
                    propertySchema: s,
                    includeNoAccess: !0
                }).length > 0
            }
        },
        610128: (e, t, a) => {
            a.d(t, {
                h: () => o,
                p: () => n
            });
            let o = new(a(815048)).O2("imageEdit", () => Promise.all([a.e(75134), a.e(56809), a.e(81074)]).then(a.bind(a, 681212))),
                n = (0, a(815048)._h)(o, e => e.ImageEditModal)
        },
        622862: (e, t, a) => {
            a.d(t, {
                Y: () => r
            }), a(581454);
            var o = () => a(722371),
                n = () => a(181472),
                i = () => a(818646);

            function r({
                modificationType: e,
                storesToModify: t,
                spaceViewStore: s,
                transaction: l
            }) {
                let c = s.getBookmarkedPagesStore();
                for (let r of t.map(e => a(970831).B.createChildStore(c, e.pointer)).reverse()) "add" === e ? (0, n().H)({
                    parentStore: c,
                    prependStore: r,
                    transaction: l
                }) : "remove" === e ? (0, i().T)({
                    parentStore: c,
                    childToRemoveStore: r,
                    transaction: l
                }) : (0, o().HB)(e)
            }
        },
        631821: (e, t, a) => {
            a.d(t, {
                q: () => o
            });
            let o = (0, a(233319).Ls)({
                key: "delete deactivated person profile",
                displayName: a(233319).AY.moveToTrashName,
                analyticsName: a(233319).AY.moveToTrashName.defaultMessage,
                svg: a(968411).trashIcon,
                isRed: !0,
                validators: [a(857064).P, a(818285)._, (0, a(572251).A)(a(804043).o)],
                closeParentMenu: !0,
                track: {
                    actionName: "move_to_trash"
                },
                action: async (e, {
                    blocks: t,
                    environment: o
                }, n) => {
                    await (0, a(660262).A)({
                        environment: o,
                        blocks: t,
                        shouldCheckSuggestEdit: !1,
                        callback: e
                    })
                }
            })
        },
        635690: (e, t, a) => {
            function o(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "bookmark",
                        eventProperties: {
                            from: e.from
                        }
                    }
                })
            }

            function n(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "unbookmark",
                        eventProperties: {
                            from: e.from
                        }
                    }
                })
            }
            a.d(t, {
                J: () => n,
                W: () => o
            })
        },
        639561: (e, t, a) => {
            function o(e) {
                return e.blocks.every(e => {
                    let t = e.getRecordStoreUIParent();
                    return !!(t && t.canEdit() && e.isDefined() && e.getParentId() !== t.id)
                })
            }
            a.d(t, {
                w: () => o
            }), a(898992), a(823215)
        },
        679125: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var o, n = ((o = n || {})[o.Preview = 0] = "Preview", o[o.Mention = 1] = "Mention", o[o.Link = 2] = "Link", o);
            let i = n
        },
        725232: (e, t, a) => {
            a.d(t, {
                A: () => s,
                V: () => l
            }), a(296540);
            var o = () => a(60748);

            function n(e) {
                return e.blocks.every(e => {
                    let t = null == e ? void 0 : e.getSystemBlockTypeStore().getValue();
                    return (0, a(512845).Lo)(t)
                })
            }
            a(898992), a(823215), a(737550);
            var i = a(474848);
            let r = (0, a(109939).YK)({
                    archivePage: {
                        id: "blockActionMenu.archivePage",
                        defaultMessage: "Archive"
                    },
                    unarchivePage: {
                        id: "blockActionMenu.unarchivePage",
                        defaultMessage: "Unarchive"
                    }
                }),
                s = (0, a(233319).Ls)({
                    key: "archive page",
                    displayName: r.archivePage,
                    analyticsName: "Archive page",
                    svg: a(937776).B,
                    badge: (0, i.jsx)(a(18274).A, {}),
                    validators: [a(887175)._, (0, a(572251).A)((0, a(648903).U)([a(533301).K, (0, a(572251).A)(a(923147).a)])), a(411618).X, (0, a(572251).A)(a(804043).o), (0, a(572251).A)(function(e) {
                        return e.blocks.some(e => e.isArchived())
                    }), ({
                        environment: e
                    }) => {
                        var t;
                        let o = null == (t = a(728372).AppStoreSidebarSpaceStore.state) ? void 0 : t.id;
                        return !!o && (0, a(630131).Y)(e, {
                            name: "archive_content",
                            spaceId: o,
                            userId: e.currentUser.id
                        })
                    }, n],
                    closeParentMenu: !0,
                    action: e => {
                        let t = (0, a(444610).U)(e.blocks[0]);
                        a(218744).default.checkGate({
                            gateName: "collections_bulk_action"
                        }) && null != t && t.bulkSelectionStore.state.isSelectAll ? (0, a(61149).U)({
                            environment: e.environment,
                            collectionContextStore: t,
                            bulkAction: {
                                type: "archive"
                            }
                        }) : (0, o().B)({
                            environment: e.environment,
                            blocks: e.blocks
                        })
                    }
                }),
                l = (0, a(233319).Ls)({
                    key: "unarchive page",
                    displayName: r.unarchivePage,
                    analyticsName: r.unarchivePage.defaultMessage,
                    svg: a(937776).B,
                    validators: [a(887175)._, (0, a(572251).A)((0, a(648903).U)([a(533301).K, (0, a(572251).A)(a(923147).a)])), a(411618).X, (0, a(572251).A)(a(804043).o), function(e) {
                        return e.blocks.every(e => {
                            var t;
                            return null == (t = e.getModel()) ? void 0 : t.isArchivedWithoutTakingParentsIntoAccount()
                        })
                    }, n],
                    closeParentMenu: !0,
                    action: e => {
                        var t;
                        let n = (0, a(444610).U)(e.blocks[0]);
                        if (a(218744).default.checkGate({
                                gateName: "collections_bulk_action"
                            }) && null != n && n.bulkSelectionStore.state.isSelectAll) return void(0, a(61149).U)({
                            environment: e.environment,
                            collectionContextStore: n,
                            bulkAction: {
                                type: "unarchive"
                            }
                        });
                        let i = null == (t = e.pageContext) || null == (t = t.spaceStore) ? void 0 : t.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "blockActionRegistry.unarchivePage",
                            environment: e.environment,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                for (let a of e.blocks)(0, o().T)({
                                    blockStore: a,
                                    transaction: t
                                })
                            }
                        })
                    }
                })
        },
        739411: (e, t, a) => {
            a.d(t, {
                Y: () => i
            });
            var o = () => a(546605);
            class n extends o().Store {
                getInitialState() {
                    return {
                        phase: "idle"
                    }
                }
            }
            let i = new n
        },
        742782: (e, t, a) => {
            a.d(t, {
                d: () => n
            }), a(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.22 2.75 16.5 13.24",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M17 14.745a.625.625 0 0 1 0 1.25H8a.625.625 0 1 1 0-1.25zm.1-3.333a.625.625 0 1 1 0 1.25H7.9l-.127-.013a.626.626 0 0 1 0-1.224l.126-.013zm0-3.334a.625.625 0 0 1 0 1.25H7.9l-.127-.013a.626.626 0 0 1 0-1.224l.126-.013zM1.23 3.317a.56.56 0 0 1 .842-.485l2.881 1.687c.37.217.37.754 0 .971l-2.88 1.688a.56.56 0 0 1-.843-.486zm15.87.688c.345 0 .625.28.626.625v.75c0 .345-.28.624-.625.625H7.9a.625.625 0 0 1-.626-.625v-.75l.013-.126a.626.626 0 0 1 .612-.5z"
                    })
                },
                n = (0, a(104509).wt)("layoutAbovePageContent", o, "default")
        },
        756952: (e, t, a) => {
            a.d(t, {
                A: () => eg,
                $: () => eu
            });
            var o = a(296540);

            function n(e, t) {
                let o = t.trim().toLowerCase(),
                    n = (0, a(758654).d9)(o).replace(/\./g, "-");
                return n ? `${n}-${e}` : e
            }
            var i = () => a(832375),
                r = a(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.62 1.77 10.75 15.97",
                    svg: (0, r.jsx)("path", {
                        d: "M4.892 4.553a.55.55 0 0 1 .776.06l.222.258.012.017 8.777 10.24a.55.55 0 0 1-.847.7l-1.929-2.25-2.827 3.908a.626.626 0 0 1-1.13-.411l.402-5.5H5.25a.626.626 0 0 1-.507-.99l2.1-2.91-2.01-2.346a.55.55 0 0 1 .059-.776m4.752 6.443-.291 3.974 1.714-2.368-1.425-1.662zm-3.172-.671H9.02q.053 0 .103.01L7.68 8.65zm4.441-8.291a.626.626 0 0 1 1.13.41l-.391 5.51h3.098a.626.626 0 0 1 .506.993l-2.026 2.798-.837-.977 1.134-1.563h-2.474l-.688-.802.275-3.854-1.637 2.265-.837-.976z"
                    })
                },
                l = (0, a(104509).wt)("lightningSlash", s, "default");

            function c({
                blocks: e
            }) {
                var t;
                let o = e.at(0);
                if (!o) return !1;
                let {
                    slackIntegrationStore: n
                } = (0, a(144092).x2)(o);
                return !!(n.isReady() && !(null != n && null != (t = n.getKeyStore("enabled")) && t.getValue()))
            }

            function d() {
                var e;
                let t = a(728372).AppStoreSidebarSpaceStore.state,
                    o = null == t || null == (e = t.getBotSettingsStore()) ? void 0 : e.getValue();
                return !(0, a(573143).az)(o) || !!((null == o ? void 0 : o.integration_approval_statuses) && o.integration_approval_statuses[a(212527).Jc])
            }

            function u({
                blocks: e
            }) {
                var t;
                let o = e.at(0);
                if (!o) return !1;
                let {
                    blockStore: n,
                    slackIntegrationStore: i
                } = (0, a(144092).x2)(o);
                return !!(i.isReady() && (null == i || null == (t = i.getKeyStore("enabled")) ? void 0 : t.getValue()) && n.id !== o.id)
            }

            function m({
                blocks: e
            }) {
                var t;
                let o = e.at(0);
                if (!o) return !1;
                let {
                    blockStore: n,
                    slackIntegrationStore: i
                } = (0, a(144092).x2)(o);
                return !!(i.isReady() && (null == i || null == (t = i.getKeyStore("enabled")) ? void 0 : t.getValue()) && n.id === o.id)
            }

            function g({
                blocks: e
            }) {
                var t;
                let o = e.at(0);
                return !!o && !!(null == (t = (0, a(144092).x2)(o)) || null == (t = t.slackIntegrationStore) ? void 0 : t.isReady())
            }
            a(18107), a(967357);
            var p = () => a(517013);
            let f = {
                createdBy: void 0,
                authorizedBy: void 0,
                integrationType: void 0,
                isYou: !1,
                creatorEmail: void 0,
                tagline: void 0,
                integrationInfo: void 0,
                isInternal: !0
            };

            function v(e) {
                let t = (0, a(109939).tz)(),
                    o = (0, a(682985).O$)(a(728372).AppStoreCurrentUserRootStore);
                return (0, a(682985).K8)(() => {
                    var n;
                    let r;
                    if (!e || !o) return f;
                    let s = e.integration_id;
                    if (!s) return f;
                    let l = (0, p().v3)(o, {
                            id: s,
                            table: i().Lij
                        }),
                        c = l.getKeyStore("type").getValue(),
                        d = l.getKeyStore("info").getValue(),
                        u = e.created_by_id;
                    if (d && "tagline" in d && (r = d.tagline), !u) return { ...f,
                        integrationType: c,
                        integrationInfo: d,
                        tagline: r,
                        isInternal: !c || "internal" === c
                    };
                    let m = a(807825).L.createChildStore(o, {
                            id: u,
                            table: i().oo9
                        }),
                        g = m.getDisplayName(t),
                        v = m.getEmail(),
                        y = null == (n = a(728372).AppStoreCurrentUserStore.state) ? void 0 : n.id,
                        b = m.id === y,
                        h = !c || "internal" === c;
                    return h ? {
                        createdBy: g,
                        authorizedBy: void 0,
                        integrationType: c,
                        isYou: b,
                        creatorEmail: v,
                        tagline: r,
                        integrationInfo: d,
                        isInternal: h
                    } : {
                        createdBy: d && "developer_name" in d ? d.developer_name : void 0,
                        authorizedBy: g,
                        integrationType: c,
                        isYou: b,
                        creatorEmail: v,
                        tagline: r,
                        integrationInfo: d,
                        isInternal: h
                    }
                }, [e, o, t])
            }
            let y = {
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                maxWidth: 350,
                whiteSpace: "normal",
                padding: 8
            };

            function b({
                mainContent: e,
                caption: t
            }) {
                let o = (0, a(960253).I)(() => ({
                    caption: {
                        marginTop: 4 * !!e
                    }
                }), [e]);
                return (0, r.jsxs)("div", {
                    style: y,
                    children: [e ? (0, r.jsx)(a(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "inversePrimary",
                        children: e
                    }) : void 0, t ? (0, r.jsx)(a(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "inverseSecondary",
                        style: o.caption,
                        children: t
                    }) : void 0]
                })
            }
            let h = (0, a(109939).YK)({
                    createdBy: {
                        id: "connection.createdBy",
                        defaultMessage: "Created by {name}"
                    },
                    authorizedBy: {
                        id: "botMenuItem.authorizedBy",
                        defaultMessage: "Authorized by {name}"
                    },
                    publicLabel: {
                        id: "botMenuItem.public",
                        defaultMessage: "Public"
                    },
                    selfIndicator: {
                        id: "botMenuItem.youIndicator",
                        defaultMessage: " (You)"
                    },
                    addConnectionLabel: {
                        id: "topbarMoreConnections.addConnection",
                        defaultMessage: "Add connection"
                    },
                    activeConnectionsLabel: {
                        defaultMessage: "Active connections",
                        id: "topbarMenu.subActions.addConnections.activeConnections"
                    },
                    authorizedByLabel: {
                        defaultMessage: "Authorized by {authorizedBy}",
                        id: "topbarMenu.subActions.activeConnection.authorizedBy"
                    },
                    notConnectedLabel: {
                        defaultMessage: "Add a new connection",
                        id: "topbarMenu.subActions.addConnections.addNewConnection"
                    },
                    noConnectionsLabel: {
                        defaultMessage: "None",
                        id: "topbarMenu.subActions.addConnections.none"
                    },
                    capabilitiesLabel: {
                        defaultMessage: "Capabilities",
                        id: "topbar.connectionSection.capabilities.label"
                    }
                }),
                k = o.forwardRef(function(e, t) {
                    let o, n, {
                            bot: i,
                            tooltipText: s,
                            ...l
                        } = e,
                        c = (0, a(682985).O$)(a(728372).AppStoreCurrentUserRootStore),
                        d = (0, a(109939).tz)(),
                        u = v(i);
                    if (u.isInternal) {
                        o = u.createdBy ? d.formatMessage(h.createdBy, {
                            name: u.createdBy
                        }) : void 0;
                        let e = u.createdBy ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("span", {
                                children: o
                            }), (0, r.jsx)("span", {
                                children: u.isYou ? (0, r.jsx)(a(109939).sA, { ...h.selfIndicator
                                }) : void 0
                            })]
                        }) : void 0;
                        n = u.creatorEmail || e ? (0, r.jsx)(b, {
                            mainContent: e,
                            caption: u.creatorEmail
                        }) : void 0
                    } else o = u.authorizedBy ? d.formatMessage(h.authorizedBy, {
                        name: u.authorizedBy
                    }) : void 0, n = (0, r.jsx)(b, {
                        mainContent: u.tagline,
                        caption: u.authorizedBy ? (0, r.jsx)(a(109939).sA, { ...h.authorizedBy,
                            values: {
                                name: u.authorizedBy
                            }
                        }) : void 0
                    });
                    let m = u.isInternal ? void 0 : (0, r.jsx)(a(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "tertiary",
                            children: (0, r.jsx)(a(109939).sA, { ...h.publicLabel
                            })
                        }),
                        g = {
                            alignSelf: "flex-start"
                        };
                    if (!i || !c) return null;
                    let p = s || n;
                    return (0, r.jsx)(a(51831).m, {
                        placement: "left",
                        disableTooltip: !p,
                        content: () => p,
                        textWrap: !0,
                        children: e => (0, r.jsx)(a(95582).A, { ...(0, a(63390).A)(l, e),
                            icon: (0, r.jsx)(a(31319).A, {
                                botValue: i
                            }),
                            title: (0, a(697006).Hg)(i),
                            caption: o,
                            right: m,
                            rightStyle: g,
                            ref: t
                        })
                    })
                }),
                S = (0, a(109939).YK)({
                    somethingWentWrong: {
                        defaultMessage: "Something went wrong.",
                        id: "slackActions.dialogError.loginWithSlack.errorMessage"
                    },
                    titleMessage: {
                        defaultMessage: "Slack login",
                        id: "slackActions.loginPopupModal.title"
                    },
                    removeIntegrationMessage: {
                        id: "slackIntegrationButton.removeIntegrationConfirmationDialog.prompt",
                        defaultMessage: "Are you sure you want to remove Slack integration?"
                    },
                    removeIntegrationConfirmationLabel: {
                        id: "slackIntegrationButton.removeIntegrationConfirmationDialog.removeButton.label",
                        defaultMessage: "Remove"
                    }
                });
            async function A(e) {
                let {
                    environment: t,
                    blockId: o,
                    intl: n
                } = e, i = (0, a(321543).LX)(t), r = (0, a(132702).Hs)(a(986939).A.domainBaseUrl, {
                    blockId: o,
                    authType: i,
                    userId: t.currentUser.id
                });
                if (r = i.redirectToAuth ? r : await (0, a(321543).YN)(t, r), t.device.isElectron) return void(0, a(754573).P)(r);
                let s = await a(956935).P(t, {
                    width: 530,
                    height: 530,
                    url: r,
                    titleMessage: S.titleMessage
                });
                if (!s) return void a(647095).f1(n.formatMessage(S.somethingWentWrong));
                let l = (0, a(132702).parseRoute)({
                    url: s,
                    isMobile: a(986939).A.isMobile,
                    baseUrl: a(986939).A.domainBaseUrl,
                    publicDomainName: a(986939).A.publicDomainName,
                    protocol: a(986939).A.protocol,
                    currentUrl: window.location.href,
                    requestedOnAlternateDomain: (0, a(700473).wasRequestedOnAlternateDomain)()
                });
                "slackAuthCallback" === l.name && (0, a(143807).K)({
                    route: l,
                    environment: t
                })
            }
            async function M({
                environment: e,
                blockId: t,
                intl: o
            }) {
                a(831975).FY(e), await A({
                    environment: e,
                    blockId: t,
                    intl: o
                })
            }

            function w(e) {
                return (0, a(682985).K8)(() => {
                    var t;
                    return {
                        isDefined: e.isDefined(),
                        channel: null == (t = e.getKeyStore("channel").getValue()) ? void 0 : t.replace(/^#/, "")
                    }
                }, [e])
            }

            function I() {
                return (0, r.jsx)(a(916612).A, {
                    imageURL: a(896221).A.images.tooltips.pageUpdates.slackPng,
                    imageHeight: 100,
                    caption: (0, r.jsx)(a(109939).sA, {
                        defaultMessage: "Connect a Slack channel to get updates about this page and pages within it.",
                        id: "topbar.updatesButton.slackIntegrationButton.tooltip"
                    })
                })
            }

            function N() {
                return (0, r.jsx)(a(916612).A, {
                    imageURL: a(896221).A.images.tooltips.pageUpdates.slackPng,
                    imageHeight: 100,
                    caption: (0, r.jsx)(a(109939).sA, {
                        defaultMessage: "Disconnect a Slack channel to stop getting updates about this page and pages within it.",
                        id: "topbar.updatesButton.slackIntegrationButton.disconnectTooltip"
                    })
                })
            }
            let C = {
                    display: "inline"
                },
                x = (0, o.forwardRef)(function(e, t) {
                    let {
                        blockStore: o,
                        ...n
                    } = e, {
                        blockStore: i,
                        slackIntegrationStore: s
                    } = (0, a(682985).K8)(() => (0, a(144092).x2)(o), [o]), {
                        isDefined: l,
                        channel: c
                    } = w(s), d = (0, a(682985).K8)(() => (0, a(483227).Ay)({
                        store: i,
                        pageVisitSource: a(254656).y8.LinkInPage
                    }), [i]);
                    return l ? (0, r.jsx)(a(51831).m, {
                        placement: "left",
                        content: N,
                        children: e => (0, r.jsx)(a(860287).A, { ...(0, a(63390).A)(e, n),
                            svg: a(378111).slackIcon,
                            title: c,
                            caption: (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(a(109939).sA, {
                                    defaultMessage: "Based on",
                                    id: "topbar.updatesButton.slackIntegrationButton.activeTitle"
                                }), " ", (0, r.jsx)(a(428217).V, {
                                    href: d,
                                    children: (0, r.jsx)(a(627918).A, {
                                        store: i,
                                        style: C
                                    })
                                })]
                            }),
                            ref: t
                        })
                    }) : null
                }),
                _ = (0, o.forwardRef)(function(e, t) {
                    let {
                        blockStore: o,
                        ...n
                    } = e, {
                        isDefined: i,
                        channel: s
                    } = w((0, a(682985).K8)(() => (0, a(144092).x2)(o).slackIntegrationStore, [o]));
                    return i ? (0, r.jsx)(a(51831).m, {
                        placement: "left",
                        content: N,
                        children: e => (0, r.jsx)(a(860287).A, {
                            ref: t,
                            svg: a(378111).slackIcon,
                            title: s,
                            caption: (0, r.jsx)(a(109939).sA, {
                                defaultMessage: "Connected to Slack channel",
                                id: "topbar.updatesButton.slackIntegrationButton.connectedCaption"
                            }),
                            ...(0, a(63390).A)(e, n)
                        })
                    }) : null
                }),
                P = (0, a(109939).YK)({
                    parentPageLabel: {
                        id: "topbar.connectionSection.parentPage.label",
                        defaultMessage: "From"
                    }
                }),
                T = {
                    container: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start"
                    },
                    textWrapper: a(986939).A.isMobile ? {
                        fontSize: 14,
                        paddingInlineStart: 4
                    } : {
                        fontSize: 12,
                        paddingInlineStart: 4
                    },
                    icon: {
                        margin: "0px 2px"
                    },
                    linkButtonHover: {
                        backgroundColor: a(632079).Tj.selectLightGray[100]
                    },
                    linkButtonPressed: {
                        backgroundColor: a(632079).Tj.selectLightGray[200]
                    }
                };

            function L(e) {
                let {
                    parentBlockStore: t
                } = e, n = (0, a(682985).K8)(() => t.getIcon(), [t]), {
                    isParentPageEmpty: i,
                    iconRecordCategory: s
                } = (0, a(682985).K8)(() => ({
                    isParentPageEmpty: t.isEmptyPage(),
                    iconRecordCategory: (0, a(569553).Te)(t)
                }), [t]), l = (0, a(533992).v3)(), [c, d] = (0, o.useState)("transparent"), u = (0, a(960253).I)(() => ({
                    linkButton: {
                        display: "flex",
                        alignItems: "center",
                        padding: 2,
                        borderRadius: 2,
                        marginInlineStart: 2,
                        border: "none",
                        cursor: "pointer",
                        backgroundColor: c,
                        color: a(632079).Tj.text.primary,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                }), [c]);
                return (0, r.jsx)(a(498341).u, { ...e,
                    title: (0, r.jsxs)("span", {
                        style: T.container,
                        children: [(0, r.jsx)(a(109939).sA, { ...P.parentPageLabel
                        }), (0, r.jsxs)("button", {
                            type: "button",
                            style: u.linkButton,
                            onClick: () => {
                                (0, a(545586).navigateToBlock)({
                                    environment: l,
                                    store: t,
                                    pageVisitSource: a(254656).y8.LinkInPage
                                })
                            },
                            onMouseEnter: () => {
                                d(T.linkButtonHover.backgroundColor)
                            },
                            onMouseLeave: () => {
                                d("transparent")
                            },
                            onMouseDown: () => {
                                d(T.linkButtonPressed.backgroundColor)
                            },
                            onMouseUp: () => {
                                d(T.linkButtonHover.backgroundColor)
                            },
                            children: [(0, r.jsx)(a(569553).B6, {
                                disabled: !0,
                                icon: n,
                                isEmptyPage: i,
                                size: 12,
                                style: T.icon,
                                iconRecordCategory: s
                            }), (0, r.jsx)(a(627918).A, {
                                store: t
                            })]
                        })]
                    }),
                    textWrapperStyle: T.textWrapper
                })
            }

            function j(e) {
                let [t, a] = (0, o.useState)(""), [n, i] = (0, o.useState)(!1), r = (0, o.useCallback)(() => {
                    a(""), i(!1)
                }, []);
                return {
                    query: t,
                    setQuery: a,
                    userToggledToAddView: n,
                    setUserToggledToAddView: i,
                    resetMenuState: r,
                    inActiveOnlyMode: !n && e
                }
            }
            let B = {
                    style0: {
                        minWidth: 350
                    },
                    style1: {
                        fontSize: "13px",
                        fontWeight: a(699422).Wy.medium
                    },
                    style2: {
                        fontSize: "11px"
                    },
                    style3: {
                        alignSelf: "center",
                        marginInlineEnd: "4px"
                    },
                    style4: {
                        position: "relative",
                        width: "20px",
                        height: "20px"
                    },
                    style5: {
                        paddingInlineStart: 12,
                        paddingInlineEnd: 12,
                        paddingTop: 4,
                        paddingBottom: 4
                    },
                    style6: {
                        marginTop: 4
                    }
                },
                D = (0, o.forwardRef)(function(e, t) {
                    let {
                        context: n,
                        parent: s,
                        isSharedDirectly: c,
                        botStore: d,
                        botPermissionSourcePage: u,
                        originConnectionLabel: m,
                        ...g
                    } = e, p = !!d, f = (0, a(533992).v3)(), y = (0, a(109939).tz)(), b = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore), k = n.blocks[0], S = (0, a(682985).K8)(() => k.canAdmin() && (null == b ? void 0 : b.canRead()), [k, b]), A = (0, a(682985).K8)(() => d.getCapabilities(), [d]), M = (0, a(682985).K8)(() => d.getName(), [d]), w = v((0, a(682985).K8)(() => d.getModel(), [d])), {
                        resetMenuState: I
                    } = j(p), N = !w.isInternal, C = w.createdBy ? y.formatMessage(h.createdBy, {
                        name: w.createdBy
                    }) : void 0, x = w.authorizedBy ? y.formatMessage(h.authorizedBy, {
                        name: w.authorizedBy
                    }) : void 0;
                    return (0, o.createElement)(a(816231).A, { ...g,
                        style: B.style0,
                        key: d.id,
                        onFocus: s.onFocus,
                        focused: g.focused,
                        ref: t,
                        placementToOrigin: "left",
                        renderExtension: (e, t) => {
                            let o;
                            return o = f.device.isPhone ? {
                                menuType: a(649476).gu.Modal,
                                right: (0, r.jsx)(a(109939).sA, { ...a(789722).W.done
                                }),
                                onClickRight: () => {
                                    I(), t.close()
                                },
                                ...e
                            } : {
                                menuType: a(649476).gu.Popup,
                                onClickOutside: () => {
                                    I(), t.close()
                                },
                                ...e
                            }, (0, r.jsx)(a(747369).A, { ...o,
                                children: (0, r.jsx)(a(530500).A, {
                                    context: n,
                                    initialFocus: 0,
                                    onAccept: s.onAccept,
                                    sections: [function(e) {
                                        var t;
                                        let o, {
                                                isSharedDirectly: n,
                                                botCapabilities: s,
                                                botPermissionSourcePage: l,
                                                intl: c
                                            } = e,
                                            d = (0, a(579825).MD)(s);
                                        return {
                                            key: "active connection capabilities section",
                                            render: e => (0, r.jsx)(a(844565).A, { ...e,
                                                topBorder: !1
                                            }),
                                            actions: [...n ? [] : [(t = l, {
                                                key: "from parent page",
                                                displayName: o = a(962299).A.formatMessage(q.fromParentPageLabel),
                                                analyticsName: o,
                                                searchName: o,
                                                closeParentMenu: !1,
                                                validators: [a(6779).s, a(998256).p],
                                                action: () => {},
                                                render: (e, {
                                                    blocks: o
                                                }) => {
                                                    let n = o[0],
                                                        s = a(970831).B.createChildStore(n, {
                                                            table: i().evP,
                                                            id: t.blockId
                                                        });
                                                    return (0, r.jsx)(L, { ...e,
                                                        parentBlockStore: s
                                                    })
                                                }
                                            })], {
                                                key: "capabilities",
                                                displayName: c.formatMessage(h.capabilitiesLabel),
                                                analyticsName: "capabilities",
                                                searchName: c.formatMessage(h.capabilitiesLabel),
                                                closeParentMenu: !1,
                                                action: () => {},
                                                render: e => {
                                                    let t = (0, a(625921).I2)(d);
                                                    return (0, r.jsx)(a(636518).Ay, { ...e,
                                                        title: (0, r.jsx)(a(111010).D, {
                                                            styleKey: "captionMedium",
                                                            colorVariant: "secondary",
                                                            children: c.formatMessage(h.capabilitiesLabel)
                                                        }),
                                                        shouldWrapCaption: !0,
                                                        style: B.style5,
                                                        captionStyle: B.style6,
                                                        caption: (0, r.jsx)(a(4458).VP, {
                                                            gap: 4,
                                                            children: t
                                                        })
                                                    })
                                                }
                                            }]
                                        }
                                    }({
                                        isSharedDirectly: c,
                                        botCapabilities: A,
                                        botPermissionSourcePage: u,
                                        intl: y
                                    }), ...S ? [function(e) {
                                        var t, o, n;
                                        let i, {
                                            botId: s,
                                            botName: c,
                                            isSharedDirectly: d
                                        } = e;
                                        return {
                                            key: "active connection disconnect section",
                                            render: e => (0, r.jsx)(a(844565).A, { ...e,
                                                topBorderExtendToEdge: !0
                                            }),
                                            actions: [(t = s, o = c, n = d, {
                                                key: "disconnect integration",
                                                displayName: i = a(962299).A.formatMessage(q.disconnectLabel),
                                                analyticsName: i,
                                                searchName: q.disconnectLabel.defaultMessage,
                                                closeParentMenu: !1,
                                                validators: [a(6779).s, a(998256).p],
                                                action: async ({
                                                    blocks: e,
                                                    environment: a
                                                }) => {
                                                    let i = e[0];
                                                    await es(i, a, t, o, n)
                                                },
                                                render: (e, n) => {
                                                    let {
                                                        canUserModifyPageAccess: s,
                                                        tooltipText: c
                                                    } = el(n, t, o, "disconnect");
                                                    return (0, r.jsx)(a(860287).A, { ...e,
                                                        svg: l,
                                                        title: i,
                                                        tooltipText: c,
                                                        ...s ? {
                                                            disabled: !1
                                                        } : {
                                                            disabled: !0,
                                                            textWrapperStyle: {
                                                                color: a(632079).oZ.lightTextColor
                                                            },
                                                            svgCustomFill: () => a(632079).Tj.icon.secondary
                                                        }
                                                    })
                                                }
                                            })]
                                        }
                                    }({
                                        isSharedDirectly: c,
                                        botId: d.id,
                                        botName: M
                                    })] : [], ...w.createdBy || w.authorizedBy ? [function(e) {
                                        let {
                                            createdBy: t,
                                            authorizedBy: o
                                        } = e;
                                        return {
                                            key: "active connection metadata section",
                                            render: e => (0, r.jsx)(a(844565).A, { ...e,
                                                topBorderExtendToEdge: !0
                                            }),
                                            actions: [{
                                                key: "created by",
                                                displayName: t || "",
                                                analyticsName: "created_by_label",
                                                searchName: h.createdBy.defaultMessage,
                                                closeParentMenu: !0,
                                                render: () => (0, r.jsxs)(a(4458).VP, {
                                                    width: 175,
                                                    alignItems: "start",
                                                    padding: 8,
                                                    gap: 4,
                                                    children: [t ? (0, r.jsx)(a(111010).D, {
                                                        styleKey: "captionRegular",
                                                        colorVariant: "secondary",
                                                        children: (0, r.jsx)(a(109939).sA, { ...h.createdBy,
                                                            values: {
                                                                name: t
                                                            }
                                                        })
                                                    }) : void 0, o ? (0, r.jsx)(a(111010).D, {
                                                        styleKey: "captionRegular",
                                                        colorVariant: "secondary",
                                                        children: (0, r.jsx)(a(109939).sA, { ...h.authorizedBy,
                                                            values: {
                                                                name: o
                                                            }
                                                        })
                                                    }) : void 0]
                                                }),
                                                action: () => {}
                                            }]
                                        }
                                    }({
                                        createdBy: w.createdBy,
                                        authorizedBy: w.authorizedBy
                                    })] : []]
                                })
                            })
                        }
                    }, e => (0, r.jsx)(a(95582).A, { ...e,
                        title: m,
                        titleStyle: B.style1,
                        caption: w.isInternal ? C : x,
                        captionStyle: B.style2,
                        right: N ? (0, r.jsx)(a(111010).D, {
                            styleKey: "captionSmRegular",
                            colorVariant: "tertiary",
                            children: (0, r.jsx)(a(109939).sA, { ...h.publicLabel
                            })
                        }) : void 0,
                        rightStyle: B.style3,
                        icon: (0, r.jsx)(a(31319).A, {
                            botStore: d,
                            style: B.style4
                        })
                    }))
                });
            a(16280), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(581454);
            var V = () => a(887788),
                F = () => a(993189),
                R = () => a(720871),
                U = () => a(431956);
            let z = {
                    rightStyle: {
                        color: a(632079).Tj.text.tertiary,
                        marginInlineEnd: 5
                    },
                    botCapabilitiesListContainer: {
                        display: "flex",
                        alignItems: "start",
                        flexDirection: "column",
                        fontSize: a(699422).J.UISmall.desktop
                    },
                    botCapabilitiesList: {
                        display: "flex",
                        flexDirection: "column",
                        border: `1px solid ${a(632079).Tj.border.secondary}`,
                        padding: 14,
                        width: "100%",
                        borderRadius: 8
                    },
                    botCapabilitiesListTitle: {
                        color: a(632079).Tj.text.secondary,
                        marginBottom: 6
                    },
                    dialogIconStyle: {
                        height: a(104509).Ev.xl,
                        width: a(104509).Ev.xl
                    },
                    connectBotDescription: {
                        marginTop: 8,
                        color: a(632079).Tj.text.secondary
                    },
                    backArrowStyle: {
                        fill: a(632079).Tj.text.tertiary,
                        height: 16,
                        width: 16,
                        fontWeight: a(699422).Wy.medium
                    },
                    style0: {
                        height: a(104509).Ev.xs,
                        width: a(104509).Ev.xs
                    }
                },
                E = (0, o.forwardRef)(function(e, t) {
                    let {
                        context: n,
                        parent: s,
                        alreadyConnectedIntegrationIds: l,
                        alreadyConnectedBotIds: c,
                        originButtonLabel: d,
                        connectedActionsToShow: u,
                        ...m
                    } = e, g = n.blocks[0], f = (0, a(533992).v3)(), v = (0, a(109939).tz)(), y = (0, a(67499).S)(), b = (0, a(682985).K8)(() => (0, a(888).$)(y), [y]), k = (0, a(682985).K8)(() => null == b ? void 0 : b.getBotSettingsStore().getValue(), [b]), {
                        canAdminAndIsMember: S,
                        canUseSlackNotification: A
                    } = (0, a(682985).K8)(() => ({
                        canAdminAndIsMember: !!(g.canAdmin() && (null == b ? void 0 : b.canRead())),
                        canUseSlackNotification: (0, a(144092).Qi)({
                            spaceStore: b
                        })
                    }), [g, b]), M = (0, a(682985).K8)(() => (0, a(144092).yP)(), []), w = (0, o.useMemo)(() => null != k && k.integration_restrictions && null != k && k.integration_approval_statuses ? Object.keys(k.integration_approval_statuses) : [], [k]), I = ((null == u ? void 0 : u.length) ? ? 0) > 0, {
                        query: N,
                        setQuery: C,
                        userToggledToAddView: x,
                        setUserToggledToAddView: _,
                        resetMenuState: P
                    } = j(I), [T, L] = (0, o.useState)({
                        status: "loading"
                    }), B = (0, a(815048).fJ)(a(308825).T.searchActions), [D, E] = (0, a(739271).s)();
                    return (0, o.useEffect)(() => {
                        if ("resolved" !== B.status) return;
                        let e = B.value;
                        async function t(t) {
                            return await e.searchSpaceBots({
                                environment: f,
                                query: t
                            })
                        }
                        async function o(e) {
                            let t = await a(308825).T.searchActions.load();
                            return await t.searchInstallableIntegrations({
                                query: e,
                                environment: f,
                                spaceId: null == b ? void 0 : b.id,
                                botSettings: k
                            })
                        }
                        let n = a(728372).AppStoreCurrentUserRootStore.state;
                        Promise.all([t(N), o(N)]).then(([e, t]) => {
                            let o = new Set,
                                r = (function(e) {
                                    let {
                                        alreadyConnectedBotIds: t,
                                        alreadyConnectedIntegrationIds: o,
                                        botValues: n,
                                        environment: r
                                    } = e, s = [], l = a(728372).AppStoreCurrentUserRootStore.state;
                                    if (!l) throw Error("currentUserStore not defined");
                                    for (let e of n) {
                                        let a = e.id,
                                            n = !e.integration_id;
                                        if (e.integration_id) {
                                            let t = (0, p().v3)(l, {
                                                id: e.integration_id,
                                                table: i().Lij
                                            }).getKeyStore("type").getValue();
                                            (0, R().SF)(t ? {
                                                type: t
                                            } : void 0) && (n = !0)
                                        }
                                        let c = t.has(a) || e.integration_id && !n && o.has(e.integration_id),
                                            d = F().Bj6.fromValue(i().GPl, e),
                                            u = (0, U().VT)(r, d) || (0, V().h)(r) && (0, U().b0)(d);
                                        !c && u && s.push(e)
                                    }
                                    return s
                                })({
                                    alreadyConnectedBotIds: c,
                                    alreadyConnectedIntegrationIds: l,
                                    botValues: e,
                                    environment: f
                                }).filter(e => !(0, a(938977).YH)(e.integration_id)).map(e => {
                                    if (e.integration_id && n) {
                                        let t = (0, p().v3)(n, {
                                            id: e.integration_id,
                                            table: i().Lij
                                        }).getKeyStore("type").getValue();
                                        F().Bj6.fromValue(i().GPl, e).isInternalBot(t ? {
                                            type: t
                                        } : void 0) && o.add(e.integration_id)
                                    }
                                    return {
                                        table: i().GPl,
                                        value: e
                                    }
                                }),
                                s = t.map(e => {
                                    if (b) {
                                        let t = a(183934).C.createChildStore(b, {
                                                id: e,
                                                table: i().Lij
                                            }),
                                            o = t.computeWithRecordValues(({
                                                getRecordValueAndSubscribe: e
                                            }) => e(t));
                                        if (o && !(0, a(212527).Ww)(o)) return {
                                            table: i().Lij,
                                            value: o
                                        }
                                    }
                                }).filter(a(722371).O9).filter(e => !(o.has(e.value.id) || l.has(e.value.id))).filter(e => !(0, a(938977).YH)(e.value.id));
                            a(212527).Gk.name.toLowerCase().includes(N.toLowerCase()) && (s = [...s, {
                                table: "legacy_integration",
                                value: a(212527).Gk
                            }]), L({
                                results: [...r, ...s].sort((e, t) => {
                                    var a, o;
                                    let n = null == (a = e.value.name) ? void 0 : a.toLowerCase(),
                                        i = null == (o = t.value.name) ? void 0 : o.toLowerCase();
                                    return n && i ? n < i ? -1 : 1 * !!(n > i) : 0
                                }),
                                status: "ready"
                            })
                        }).catch(() => L({
                            status: "error"
                        }))
                    }, [N, b, c, k, w, f, l, g, B.status, B.value]), (0, r.jsx)(a(816231).A, { ...m,
                        renderExtension: (e, t) => {
                            var o;
                            let s = a(986939).A.isMobile ? {
                                    menuType: a(649476).gu.Modal,
                                    right: (0, r.jsx)(a(109939).sA, { ...a(789722).W.done
                                    }),
                                    onClickRight: () => {
                                        P(), t.close()
                                    },
                                    onCancel: () => {
                                        P(), t.close()
                                    },
                                    ...e
                                } : {
                                    menuType: a(649476).gu.Popup,
                                    onClickOutside: () => {
                                        P(), t.close
                                    },
                                    ...e
                                },
                                d = a(986939).A.isMobile ? {
                                    menuType: a(649476).gu.Modal,
                                    topbarStyle: {
                                        height: 0
                                    },
                                    onCancel: () => {
                                        P(), t.close
                                    }
                                } : {
                                    menuType: a(649476).gu.Popup,
                                    maxHeight: "16vh",
                                    onClickOutside: () => {
                                        P(), t.close
                                    },
                                    ...e
                                },
                                m = [],
                                g = {
                                    key: "add connection row",
                                    displayName: v.formatMessage(h.addConnectionLabel),
                                    analyticsName: "add_connection_row",
                                    searchName: v.formatMessage(h.addConnectionLabel),
                                    closeParentMenu: !1,
                                    action: () => {
                                        _(!0)
                                    },
                                    render: e => (0, r.jsx)(a(860287).A, { ...e,
                                        title: v.formatMessage(h.addConnectionLabel),
                                        svg: a(581923).plusIcon,
                                        svgStyle: z.style0
                                    })
                                };
                            return !x && I ? (m = [(o = u || [], {
                                key: "existing connections section",
                                title: v.formatMessage(h.activeConnectionsLabel),
                                render: e => (0, r.jsx)(a(844565).A, {
                                    style: H,
                                    ...e
                                }),
                                actions: [...o]
                            }), {
                                key: "add connection row section",
                                actions: [g]
                            }]).push(Y({
                                canAdminAndIsMember: S,
                                slackValue: a(212527).Gk,
                                canUseSlackNotification: A,
                                shouldUseLegacySlack: M
                            })) : (I && (m = [{
                                key: "back row section",
                                render: e => (0, r.jsx)(a(844565).A, { ...e,
                                    topBorder: !1
                                }),
                                actions: [{
                                    key: "back row",
                                    displayName: v.formatMessage(h.addConnectionLabel),
                                    analyticsName: "back_button",
                                    searchName: "back row",
                                    closeParentMenu: !1,
                                    action: () => {
                                        _(!1), C("")
                                    },
                                    render: e => (0, r.jsx)(a(860287).A, { ...e,
                                        title: (0, r.jsx)(a(111010).D, {
                                            styleKey: "bodySemibold",
                                            colorVariant: "primary",
                                            children: v.formatMessage(h.addConnectionLabel)
                                        }),
                                        svg: a(128743).arrowStraightLeftIcon,
                                        svgStyle: z.backArrowStyle
                                    })
                                }]
                            }]), S && (m.push(function({
                                query: e,
                                setQuery: t,
                                inputComboboxProps: o
                            }) {
                                var n, i, s;
                                return {
                                    key: "search connections section",
                                    render: e => (0, r.jsx)(a(844565).A, {
                                        style: K,
                                        ...e,
                                        isInput: !0,
                                        topBorder: !1
                                    }),
                                    actions: [(n = e, i = t, s = o, {
                                        key: "search connections input",
                                        analyticsName: q.connectionSearchPlaceholderLabel.defaultMessage,
                                        displayName: a(962299).A.formatMessage(q.connectionSearchPlaceholderLabel),
                                        searchName: q.connectionSearchPlaceholderLabel.defaultMessage,
                                        closeParentMenu: !1,
                                        validators: [a(6779).s, a(998256).p, G],
                                        render: () => (0, r.jsx)(a(310324).Ay, {
                                            value: n,
                                            onChange: e => i(e.target.value),
                                            placeholder: a(962299).A.formatMessage(q.connectionSearchPlaceholderLabel),
                                            focus: !0,
                                            ...s
                                        }),
                                        action: () => {}
                                    })]
                                }
                            }({
                                query: N,
                                setQuery: C,
                                inputComboboxProps: D
                            })), "" === N ? m.push(function(e) {
                                let {
                                    searchResults: t,
                                    resultsMenuProps: o,
                                    styles: n,
                                    onClose: i,
                                    intl: s,
                                    hasExistingConnections: l,
                                    canUseSlackNotification: c,
                                    shouldUseLegacySlack: d
                                } = e, u = new Set, m = "ready" === t.status ? t.results.map(e => {
                                    if ("bot" === e.table) return e.value.integration_id && u.add(e.value.integration_id), Q(e.value, n, i);
                                    if (!ec(e)) return ee(e.value, i);
                                    if (!c || d) return ea(e.value)
                                }).filter(a(722371).O9) : "loading" === t.status ? [X()] : [$()];
                                return {
                                    key: "search initial connections section",
                                    render: e => (0, r.jsx)(O, { ...e,
                                        resultsMenuProps: o
                                    }),
                                    title: l ? void 0 : s.formatMessage(h.notConnectedLabel),
                                    actions: [...m]
                                }
                            }({
                                searchResults: T,
                                resultsMenuProps: d,
                                styles: z,
                                onClose: () => P(),
                                intl: v,
                                hasExistingConnections: c.size + l.size > 0,
                                canUseSlackNotification: A,
                                shouldUseLegacySlack: M
                            })) : m.push(function(e) {
                                let {
                                    searchResults: t,
                                    resultsMenuProps: o,
                                    styles: n,
                                    onClose: s,
                                    canUseSlackNotification: l,
                                    shouldUseLegacySlack: c
                                } = e;
                                return {
                                    key: "connections search results",
                                    render: e => (0, r.jsx)(O, { ...e,
                                        resultsMenuProps: o
                                    }),
                                    actions: "error" === t.status ? [$()] : "loading" === t.status ? [X()] : "ready" === t.status && t.results.length > 0 ? t.results.map(e => {
                                        if (e.table === i().GPl) return Q(e.value, n, s);
                                        if (!ec(e)) return ee(e.value, s);
                                        if (!l || c) return ea(e.value)
                                    }).filter(a(722371).O9) : [{
                                        key: "connections search error",
                                        displayName: a(962299).A.formatMessage(q.connectionNoSearchResultsLabel),
                                        analyticsName: q.connectionNoSearchResultsLabel.defaultMessage,
                                        searchName: q.connectionNoSearchResultsLabel.defaultMessage,
                                        closeParentMenu: !1,
                                        validators: [a(6779).s, a(998256).p, G],
                                        render: e => (0, r.jsx)(a(498341).u, {
                                            title: a(962299).A.formatMessage(q.connectionNoSearchResultsLabel)
                                        }),
                                        action: () => {}
                                    }]
                                }
                            }({
                                searchResults: T,
                                resultsMenuProps: d,
                                styles: z,
                                onClose: () => P(),
                                canUseSlackNotification: A,
                                shouldUseLegacySlack: M
                            }))), m.push(Y({
                                canAdminAndIsMember: S,
                                slackValue: a(212527).Gk,
                                includeDeveloperLink: !0,
                                canUseSlackNotification: A,
                                shouldUseLegacySlack: M
                            }))), (0, r.jsx)(a(747369).A, { ...s,
                                onClick: e => {
                                    e.stopPropagation()
                                },
                                children: (0, r.jsx)(a(530500).A, {
                                    initialFocus: 0,
                                    context: n,
                                    onAccept: e => {
                                        (0, a(104310).u)({
                                            event: {
                                                eventName: "open_more_connections_menu",
                                                eventProperties: {}
                                            }
                                        }), e.closeParentMenu && (t.close(), P())
                                    },
                                    comboboxProps: S ? E : void 0,
                                    sections: m,
                                    resetFocusOnMouseOut: !0
                                })
                            })
                        },
                        onFocus: s.onFocus,
                        focused: m.focused,
                        ref: t,
                        right: l.size + c.size > 0 ? l.size + c.size : v.formatMessage(h.noConnectionsLabel),
                        rightStyle: z.rightStyle,
                        children: (e, t) => (0, r.jsx)(a(860287).A, { ...e,
                            ref: t,
                            title: d,
                            svg: a(7776).squareGrid2X2Icon
                        })
                    })
                }),
                K = {
                    width: 350
                },
                W = {
                    margin: 0,
                    paddingTop: 0,
                    paddingBottom: 0
                };

            function O(e) {
                let {
                    resultsMenuProps: t,
                    ...n
                } = e, i = (0, o.useRef)(null), s = (0, o.useCallback)(() => {
                    var e;
                    let t = null == (e = i.current) || null == (e = e.querySelector('[role="menuitem"]')) ? void 0 : e.clientHeight,
                        a = window.innerHeight < 600;
                    i.current && t && (i.current.style.maxHeight = `${(a?3:7)*t+.5*t}px`)
                }, []);
                return (0, o.useEffect)(() => (s(), window.addEventListener("resize", s), () => {
                    window.removeEventListener("resize", s)
                }), [s]), (0, r.jsx)(a(747369).A, { ...t,
                    innerRef: i,
                    children: (0, r.jsx)(a(844565).A, { ...n,
                        isInput: !0,
                        topBorder: !1,
                        style: W
                    })
                })
            }

            function Y({
                canAdminAndIsMember: e,
                slackValue: t,
                includeDeveloperLink: o,
                canUseSlackNotification: n,
                shouldUseLegacySlack: i
            }) {
                return {
                    key: "manage connections section",
                    actions: [...n || n && !i ? [] : [ea(t)], {
                        key: "manage connections",
                        displayName: a(962299).A.formatMessage(q.manageConnectionsLabel),
                        analyticsName: q.manageConnectionsLabel.defaultMessage,
                        searchName: q.manageConnectionsLabel.defaultMessage,
                        closeParentMenu: !0,
                        validators: [a(6779).s, a(998256).p, (0, a(572251).A)(a(803254).F)],
                        render: (e, t, o) => (0, r.jsx)(a(860287).A, { ...e,
                            title: a(962299).A.formatMessage(q.manageConnectionsLabel),
                            svg: a(829968).gearIcon
                        }),
                        action: e => {
                            a(599754).Ow({
                                currentPage: "connected_apps",
                                openedFrom: "topbar"
                            })
                        }
                    }, ...o ? [{
                        key: "develop manage integrations",
                        displayName: "Develop or manage integrations",
                        analyticsName: "develop_manage_integrations",
                        searchName: "develop manage integrations",
                        closeParentMenu: !0,
                        action: ({
                            environment: e
                        }) => {
                            a(691968).yQ({
                                from: "topbar_connections_menu",
                                href: a(168962).JZ.creatorProfileIntegrations
                            }), window.open(a(168962).JZ.creatorProfileIntegrations, "_blank")
                        },
                        render: e => (0, r.jsx)(a(860287).A, { ...e,
                            title: (0, r.jsx)(a(109939).sA, {
                                id: "topbarMoreConnections.developManage",
                                defaultMessage: "Develop integration"
                            }),
                            svg: a(684668).arrowDiagonalUpRightIcon
                        })
                    }] : []]
                }
            }
            let H = {
                    maxHeight: 300,
                    overflowY: "auto"
                },
                q = (0, a(109939).YK)({
                    connectionLoadingLabel: {
                        id: "topbar.connectionsSection.connectionLoading.label",
                        defaultMessage: "Connections loading…"
                    },
                    connectionSearchPlaceholderLabel: {
                        id: "topbar.connectionsSection.topbarMoreConnectionsSubMenu.label",
                        defaultMessage: "Search for connections…"
                    },
                    connectionSearchErrorLabel: {
                        id: "topbar.connectionsSection.connectionSearchError.label",
                        defaultMessage: "Something went wrong"
                    },
                    connectionNoSearchResultsLabel: {
                        id: "topbar.connectionsSection.noSearchResults.label",
                        defaultMessage: "No results"
                    },
                    connectionSearchResultLabel: {
                        id: "topbar.connectionsSection.connectionSearchResult.label",
                        defaultMessage: "{name}"
                    },
                    slackEmptyLabel: {
                        id: "topbar.connectionSection.slackEmpty.label",
                        defaultMessage: "Slack"
                    },
                    slackConnectedLabel: {
                        id: "topbar.connectionSection.slackConnected.label",
                        defaultMessage: "Connected to Slack channel"
                    },
                    manageConnectionsLabel: {
                        id: "topbar.connectionsSection.manageConnections.label",
                        defaultMessage: "Manage connections"
                    },
                    connectionsLabel: {
                        id: "topbar.connectionsSection.connections.label",
                        defaultMessage: "Connections"
                    },
                    fromParentPageLabel: {
                        id: "topbar.connectionsSection.fromParenPage.label",
                        defaultMessage: "From"
                    },
                    capabilitiesLabel: {
                        id: "topbar.connectionsSection.capabilities.label",
                        defaultMessage: "Capabilities"
                    },
                    disconnectLabel: {
                        id: "topbar.connectionSection.disconnectIntegration.label",
                        defaultMessage: "Disconnect"
                    },
                    disconnectConfirmationLabel: {
                        id: "topbar.connectionSection.disconnectIntegrationConfirmation.label",
                        defaultMessage: "Remove {botName}"
                    },
                    restrictionLabel: {
                        id: "topbar.connectionSection.restrictIntegration.label",
                        defaultMessage: "Restrict"
                    },
                    restrictionConfirmationLabel: {
                        id: "topbar.connectionSection.restrictIntegrationConfirmation.label",
                        defaultMessage: "Are you sure you want to remove this permission and restrict access? This page will no longer share settings from the parent page."
                    },
                    restrictionAcceptLabel: {
                        id: "topbar.connectionSection.restrictAccept.label",
                        defaultMessage: "Restrict access"
                    },
                    connectionLabel: {
                        id: "topbar.connectionSection.connectionIntegration.label",
                        defaultMessage: "{connectionName}"
                    },
                    connectionBotConfirmLabel: {
                        id: "topbar.connectionSection.connectBotConfirmation.label",
                        defaultMessage: "Connect {botName} to this page"
                    },
                    connectionIntegrationConfirmlabel: {
                        id: "topbar.connectionSection.connectIntegrationConfirmation.label",
                        defaultMessage: "{integrationName} is developed by a third party partner and you will be redirected outside of Notion to authorize this connection. Continue?"
                    },
                    botCapabilitiesLabel: {
                        id: "topbar.connectionSection.botCapabilities.label",
                        defaultMessage: "Integration capabilities"
                    },
                    connectionBotConfirmDescription: {
                        id: "topbar.connectionSection.connectionBotConfirmDescription.label",
                        defaultMessage: "This integration will have the following access to this page and all its child pages"
                    },
                    disconnectConfirmationDescription: {
                        id: "topbar.connectionSection.disconnectConfirmationDescription.label",
                        defaultMessage: "This action will remove {botName} from the page. Do you want to continue?"
                    },
                    connectBotAccessRestricted: {
                        id: "topbar.connectionSection.botAccessRestricted.connect.tooltip",
                        defaultMessage: "You can’t connect {botName} to this page. Please ask a workspace owner to enable it."
                    },
                    disconnectBotAccessRestricted: {
                        id: "topbar.connectionSection.botAccessRestricted.disconnect.tooltip",
                        defaultMessage: "You can’t disconnect {botName} from this page. Please ask a workspace owner to disable it."
                    }
                }),
                G = (0, a(572251).A)((0, a(648903).U)([a(803254).F, (0, a(572251).A)((0, a(648903).U)([a(329117).K, a(998256).p]))]));

            function X() {
                return {
                    key: "connections loading",
                    displayName: a(962299).A.formatMessage(q.connectionLoadingLabel),
                    analyticsName: q.connectionLoadingLabel.defaultMessage,
                    searchName: q.connectionLoadingLabel.defaultMessage,
                    closeParentMenu: !1,
                    validators: [a(6779).s, a(998256).p, G],
                    render: e => (0, r.jsx)(a(636518).Ay, { ...e,
                        icon: (0, r.jsx)(a(517334).k, {}),
                        title: a(962299).A.formatMessage(q.connectionLoadingLabel)
                    }),
                    action: () => {}
                }
            }

            function $() {
                return {
                    key: "connections search error",
                    displayName: a(962299).A.formatMessage(q.connectionSearchErrorLabel),
                    analyticsName: q.connectionSearchErrorLabel.defaultMessage,
                    searchName: q.connectionSearchErrorLabel.defaultMessage,
                    closeParentMenu: !1,
                    validators: [a(6779).s, a(998256).p, G],
                    render: e => (0, r.jsx)(a(498341).u, {
                        title: a(962299).A.formatMessage(q.connectionSearchErrorLabel)
                    }),
                    action: () => {}
                }
            }

            function Q(e, t, o) {
                let {
                    id: n,
                    name: i
                } = e, s = a(962299).A.formatMessage(q.connectionSearchResultLabel, {
                    name: i
                });
                return {
                    key: `${n}`,
                    displayName: s,
                    analyticsName: s,
                    searchName: i,
                    closeParentMenu: !1,
                    validators: [a(6779).s, a(998256).p, G],
                    render: (t, o, n) => {
                        let {
                            canUserModifyPageAccess: i,
                            tooltipText: s
                        } = el(o, e.id, e.name, "connect");
                        return (0, r.jsx)(k, { ...t,
                            bot: e,
                            focused: t.focused,
                            ref: t.ref,
                            tooltipText: s,
                            ...i ? {
                                disabled: !1
                            } : {
                                disabled: !0,
                                textWrapperStyle: {
                                    color: a(632079).oZ.lightTextColor
                                },
                                desktopIconStyle: {
                                    fill: a(632079).oZ.lightIconColor
                                },
                                mobileIconStyle: {
                                    fill: a(632079).oZ.lightIconColor
                                }
                            }
                        })
                    },
                    action: async a => {
                        await en(a.blocks[0], a.environment, e, t), o()
                    }
                }
            }
            let J = {
                    width: 18,
                    height: "auto"
                },
                Z = {
                    position: "relative"
                };

            function ee(e, t) {
                let {
                    id: o,
                    name: n,
                    info: i
                } = e, s = a(962299).A.formatMessage(q.connectionLabel, {
                    connectionName: n
                });
                return {
                    key: `${o}`,
                    displayName: s,
                    analyticsName: s,
                    searchName: n,
                    closeParentMenu: !1,
                    validators: [a(6779).s, a(998256).p, G, (0, a(572251).A)(a(803254).F)],
                    render: (e, t, o) => (0, r.jsx)(a(95582).A, { ...e,
                        title: s,
                        icon: (0, r.jsx)("img", {
                            src: i.icon,
                            style: J,
                            ref: e.ref
                        })
                    }),
                    action: async t => {
                        e.id !== a(212527).Jc && await ei(e, t.environment)
                    }
                }
            }
            let et = {
                height: 18
            };

            function ea(e) {
                let t = a(962299).A.formatMessage(q.slackEmptyLabel);
                return {
                    key: "slack empty",
                    displayName: t,
                    analyticsName: q.slackEmptyLabel.defaultMessage,
                    searchName: t,
                    closeParentMenu: !1,
                    validators: [a(6779).s, a(998256).p, d, g, c, (0, a(572251).A)(a(341133).w)],
                    render: (o, n, i) => (0, r.jsx)(a(51831).m, {
                        placement: "left",
                        content: I,
                        children: n => (0, r.jsx)(a(95582).A, { ...(0, a(63390).A)(n, o),
                            title: t,
                            icon: (0, r.jsx)("img", {
                                src: e.info.icon,
                                style: et
                            })
                        })
                    }),
                    action: async e => {
                        var t;
                        await M({
                            environment: e.environment,
                            blockId: null == (t = e.blocks) || null == (t = t[0]) ? void 0 : t.id,
                            intl: a(962299).A.getIntl()
                        })
                    }
                }
            }
            let eo = {
                position: "relative",
                marginBottom: 16
            };
            async function en(e, t, o, n, i) {
                let s = [...(0, a(625921).I2)((0, a(579825).MD)(o.capabilities))],
                    {
                        accept: l
                    } = await a(647095).Gh({
                        icon: (0, r.jsx)(a(16275).I, {
                            icon: a(7776).squareGrid2X2Icon,
                            style: n.dialogIconStyle
                        }),
                        message: (0, r.jsxs)(a(4458).VP, {
                            gap: 24,
                            style: eo,
                            className: "autolayout-fill-width",
                            children: [(0, r.jsxs)("div", {
                                children: [(0, r.jsx)(a(111010).D, {
                                    styleKey: "titleSmSemibold",
                                    children: (0, r.jsx)(a(109939).sA, { ...q.connectionBotConfirmLabel,
                                        values: {
                                            botName: o.name
                                        }
                                    })
                                }), (0, r.jsx)(a(111010).D, {
                                    styleKey: "bodyRegular",
                                    style: n.connectBotDescription,
                                    children: a(962299).A.formatMessage(q.connectionBotConfirmDescription)
                                })]
                            }), (0, r.jsx)("div", {
                                children: (0, r.jsxs)("div", {
                                    style: n.botCapabilitiesListContainer,
                                    children: [(0, r.jsx)(a(111010).D, {
                                        styleKey: "captionMedium",
                                        style: n.botCapabilitiesListTitle,
                                        children: a(962299).A.formatMessage(q.botCapabilitiesLabel)
                                    }), (0, r.jsx)("div", {
                                        style: n.botCapabilitiesList,
                                        children: (0, r.jsx)(a(4458).VP, {
                                            gap: 10,
                                            className: "autolayout-fill-width",
                                            style: Z,
                                            children: s
                                        })
                                    })]
                                })
                            })]
                        }),
                        acceptColor: "blue",
                        mode: "wide"
                    });
                return l && a(577464).sK({
                    botValue: o,
                    store: e,
                    environment: t
                }), i && i(), {
                    accept: l
                }
            }
            async function ei(e, t) {
                let {
                    id: o,
                    name: i
                } = e, {
                    accept: r
                } = await a(647095).Gh({
                    message: a(962299).A.formatMessage(q.connectionIntegrationConfirmlabel, {
                        integrationName: i
                    })
                }), s = function(e, t) {
                    if (!(0, a(4962).uj)(e)) return `${a(168962).JZ.integrations}/${e}`;
                    let o = void 0 === t ? n(e, "") : n(e, t);
                    return `${a(168962).JZ.integrations}/${o}`
                }(o, i);
                r && (0, a(624621).L)({
                    environment: t,
                    url: s,
                    targetSelf: !1
                })
            }
            let er = {
                marginTop: 8
            };
            async function es(e, t, o, n, i) {
                if (i) {
                    let {
                        accept: i
                    } = await a(647095).Gh({
                        message: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(a(111010).D, {
                                styleKey: "titleSmSemibold",
                                children: a(962299).A.formatMessage(q.disconnectConfirmationLabel, {
                                    botName: n
                                })
                            }), (0, r.jsx)(a(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                style: er,
                                children: a(962299).A.formatMessage(q.disconnectConfirmationDescription, {
                                    botName: n
                                })
                            })]
                        })
                    });
                    i && a(577464).oG({
                        botId: o,
                        store: e,
                        environment: t
                    })
                } else await a(577464).Q0({
                    botId: o,
                    botName: n,
                    store: e,
                    environment: t
                })
            }

            function el(e, t, o, n) {
                let r = e.blocks[0].getSpaceStore();
                if (!r) {
                    let t = e.blocks[0],
                        o = t.getSpaceId();
                    o && (r = a(695906).SpaceStore.createChildStore(t, {
                        table: i().NXh,
                        id: o
                    }))
                }
                let s = (0, a(322103).RV)();
                r && (s = a(447003).v.createChildStore(r, {
                    table: i().GPl,
                    id: t,
                    spaceId: r.id
                }).getIntegrationManagementPermissions());
                let l = s.userCanModifyPageAccess,
                    c = l ? void 0 : a(962299).A.formatMessage("connect" === n ? q.connectBotAccessRestricted : q.disconnectBotAccessRestricted, {
                        botName: o || "this integration"
                    });
                return {
                    canUserModifyPageAccess: l,
                    tooltipText: c
                }
            }

            function ec(e) {
                return "legacy_integration" === e.table && e.value.id === a(212527).Gk.id
            }
            a(823215);
            let ed = (0, a(109939).YK)({
                    copyPublicApiObject: {
                        id: "action.copyPublicApiObject",
                        defaultMessage: "Copy API object (Dev)"
                    }
                }),
                eu = (0, a(233319).Ls)({
                    key: "copy public API object",
                    displayName: ed.copyPublicApiObject,
                    analyticsName: ed.copyPublicApiObject.defaultMessage,
                    validators: [a(21848).v, (0, a(550385).S)({
                        experimentId: "public_api_dev_mode"
                    })],
                    closeParentMenu: !1,
                    svg: a(490648).d,
                    action: async ({
                        environment: e,
                        blocks: t
                    }) => {
                        let o, n = await e.api.callApi({
                            eventName: "getPublicApiObject",
                            environment: e,
                            data: {
                                id: t[0].id
                            }
                        });
                        o = "success" === n.type ? JSON.stringify(n.data, void 0, 2) : JSON.stringify(n.error, void 0, 2);
                        let [i, r] = await Promise.all([(0, a(161333).r)(), (0, a(969899).jd)()]);
                        await r({
                            stringValue: o,
                            environment: e,
                            copiedMessage: i.copiedPropertyToClipboard
                        })
                    }
                }),
                em = {
                    marginTop: 1
                };

            function eg(e) {
                let t, o, {
                    loadingAction: n,
                    connectedActions: s,
                    searchSubMenu: l
                } = function(e) {
                    let t, o, n, {
                            alreadyConnectedBotIds: s,
                            alreadyConnectedIntegrationIds: l,
                            botActionsState: c
                        } = function(e) {
                            let {
                                status: t
                            } = e;
                            if ("no bots" === t || "loading" === t) return {
                                botActionsState: e,
                                alreadyConnectedIntegrationIds: new Set,
                                alreadyConnectedBotIds: new Set
                            };
                            let {
                                botStores: o,
                                botIdToSharedPageIds: n
                            } = e, i = (0, a(634189).R7)(o), s = new Set, l = [];
                            for (let e of o.filter(a(722371).O9)) {
                                let t = n.get(e.id);
                                if (!t) continue;
                                let o = function(e) {
                                    let {
                                        botStore: t,
                                        botPermissionSourcePage: o
                                    } = e, {
                                        id: n
                                    } = t, i = t.getName(), s = a(962299).A.formatMessage(q.connectionLabel, {
                                        connectionName: i
                                    });
                                    return {
                                        key: `${n}`,
                                        displayName: s,
                                        analyticsName: s,
                                        searchName: s,
                                        closeParentMenu: !1,
                                        validators: [a(6779).s, a(998256).p, (0, a(572251).A)(a(804043).o)],
                                        action: () => {},
                                        render: (e, a, n) => {
                                            let i = a.blocks[0].id === o.blockId;
                                            return (0, r.jsx)(D, { ...e,
                                                context: a,
                                                parent: n,
                                                isSharedDirectly: i,
                                                botStore: t,
                                                botPermissionSourcePage: o,
                                                originConnectionLabel: s
                                            })
                                        }
                                    }
                                }({
                                    botStore: e,
                                    botPermissionSourcePage: t
                                });
                                l.push(o);
                                let c = e.getIntegrationId();
                                c && i.has(c) || s.add(e.id)
                            }
                            return {
                                alreadyConnectedIntegrationIds: i,
                                alreadyConnectedBotIds: s,
                                botActionsState: {
                                    status: "ready",
                                    botActions: l
                                }
                            }
                        }(function(e) {
                            var t;
                            let o = e.blocks[0],
                                n = (0, a(862085).i0)(o).filter(e => (0, a(642157).P3)(e.permissionItem) ? (e.permissionItem, !0) : (e.permissionItem, !1));
                            if (0 === n.length) return {
                                status: "no bots"
                            };
                            let r = new Map,
                                s = null == (t = (0, a(328765).S)()) ? void 0 : t.id,
                                l = n.filter(({
                                    permissionItem: e
                                }) => (0, a(4962).uj)(e.bot_id)).map(({
                                    from: e,
                                    permissionItem: t
                                }) => {
                                    let n = a(447003).v.createChildStore(o, {
                                        table: i().GPl,
                                        id: t.bot_id,
                                        spaceId: s
                                    });
                                    if ("block" === e.table && !(0, a(938977).YH)(n.getIntegrationId())) return r.set(t.bot_id, e), n
                                }).filter(a(722371).O9);
                            if (!l.every(e => e.isReady())) return {
                                status: "loading"
                            };
                            let c = l.filter(t => t.isDefined() && !!(0, U().VT)(e.environment, t.getModel()));
                            if ((0, V().h)(e.environment)) {
                                let e = new Set(c.map(e => e.getIntegrationId())),
                                    t = l.filter(t => !!(t.isDefined() && !e.has(t.getIntegrationId()) && (0, U().b0)(t.getModel())) && (e.add(t.getIntegrationId()), !0));
                                c.push(...t)
                            }
                            return {
                                status: "ready",
                                botStores: c,
                                botIdToSharedPageIds: r
                            }
                        }(e)),
                        d = (t = q.connectionsLabel, o = a(962299).A.formatMessage(t), n = (null == c ? void 0 : c.status) === "ready" ? c.botActions : [], {
                            key: "add connections action",
                            displayName: o,
                            analyticsName: t.defaultMessage,
                            searchName: t.defaultMessage,
                            closeParentMenu: !1,
                            validators: [a(6779).s, a(998256).p, G, (0, a(572251).A)(a(804043).o), (0, a(572251).A)(a(330621).q)],
                            action: () => {},
                            render: (e, t, a) => (0, r.jsx)(E, { ...e,
                                context: t,
                                parent: a,
                                alreadyConnectedIntegrationIds: l,
                                alreadyConnectedBotIds: s,
                                originButtonLabel: o,
                                connectedActionsToShow: n
                            })
                        });
                    return "loading" === c.status ? {
                        loadingAction: [X()],
                        connectedActions: [],
                        searchSubMenu: d
                    } : {
                        loadingAction: [],
                        connectedActions: [],
                        searchSubMenu: d
                    }
                }(e);
                return {
                    key: "topbar connections",
                    render: e => (0, r.jsx)(a(844565).A, { ...e,
                        style: em,
                        topBorder: !0
                    }),
                    actions: [...n, {
                        key: "slack connected inherited",
                        displayName: t = a(962299).A.formatMessage(q.slackConnectedLabel),
                        analyticsName: q.slackConnectedLabel.defaultMessage,
                        searchName: t,
                        closeParentMenu: !0,
                        validators: [a(6779).s, a(998256).p, u, (0, a(572251).A)(a(341133).w)],
                        render: (e, t, a) => (0, r.jsx)(x, {
                            blockStore: t.blocks[0],
                            ...e
                        }),
                        action: () => {}
                    }, {
                        key: "slack connected on block",
                        displayName: o = a(962299).A.formatMessage(q.slackConnectedLabel),
                        analyticsName: q.slackConnectedLabel.defaultMessage,
                        searchName: o,
                        closeParentMenu: !0,
                        validators: [a(6779).s, a(998256).p, m, (0, a(572251).A)(a(341133).w)],
                        render: (e, t, a) => (0, r.jsx)(_, {
                            blockStore: t.blocks[0],
                            ...e
                        }),
                        action: e => {
                            var t, o;
                            let {
                                slackIntegrationStore: n
                            } = (0, a(144092).x2)(e.blocks[0]);
                            t = e.environment, o = a(962299).A.getIntl(), a(647095).ui({
                                message: o.formatMessage(S.removeIntegrationMessage),
                                showCancel: !0,
                                keepFocus: !0,
                                items: [{
                                    label: o.formatMessage(S.removeIntegrationConfirmationLabel),
                                    color: "red",
                                    onAccept: () => {
                                        a(831975).oI(t), (0, a(377796).createAndCommit)({
                                            userAction: "slackActions.handleRemoveSlackIntegration",
                                            environment: t,
                                            canUndo: !0,
                                            cellTarget: "main",
                                            perform: e => {
                                                (0, a(173157).z)({
                                                    store: n,
                                                    data: {
                                                        enabled: !1
                                                    },
                                                    transaction: e
                                                })
                                            }
                                        })
                                    }
                                }]
                            })
                        }
                    }, ...s, l, eu]
                }
            }
        },
        789700: (e, t, a) => {
            a.d(t, {
                I: () => s
            });
            var o = a(296540),
                n = a(474848);
            let i = "M19 6V4C19 2.34315 17.6569 1 16 1V1C14.3431 1 13 2.34315 13 4V8",
                r = "M7 7.5V5.5C7 3.84315 8.34315 2.5 10 2.5V2.5C11.6569 2.5 13 3.84315 13 5.5V7.5";

            function s({
                isLocked: e,
                color: t = "primary",
                size: l = "default",
                style: c
            }) {
                let d = "number" == typeof l ? l : a(986939).A.isMobile ? a(104509).lD[l] : a(104509).Ev[l],
                    u = (0, o.useRef)(!0),
                    [m, g] = (0, o.useState)(""),
                    p = (0, a(960253).I)(() => ({
                        icon: {
                            width: d,
                            height: d,
                            stroke: "inherit" === t ? "inherit" : a(632079).Tj.icon[t],
                            ...c,
                            fill: "none"
                        }
                    }), [t, d, c]);
                return (0, o.useEffect)(() => {
                    u.current ? u.current = !1 : g(e ? "unlocked-to-locked" : "locked-to-unlocked")
                }, [e]), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("style", {
                        children: `
				.unlocked-to-locked {
					animation-duration: 0.75s;
					animation-name: unlocked-to-locked;
					animation-fill-mode: forwards;
				}

				.locked-to-unlocked {
					animation-duration: 0.75s;
					animation-name: locked-to-unlocked;
					animation-fill-mode: forwards;
				}

				@keyframes unlocked-to-locked {
					0% {
						d: path("${i}");
						transition-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
					}
					50% {
						d: path("M7 6V4C7 2.34315 8.34315 1 10 1V1C11.6569 1 13 2.34315 13 4V8");
						transition-timing-function: linear;
					}
					100% {
						d: path("${r}");
						transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
					}
				}

				@keyframes locked-to-unlocked {
					0% {
						d: path("${r}");
						transition-timing-function: cubic-bezier(0.36, 0, 0.66, -0.56);
					}
					50% {
						d: path("M7 6V4C7 2.34315 8.34315 1 10 1V1C11.6569 1 13 2.34315 13 4V8");
						transition-timing-function: linear;
					}
					100% {
						d: path("${i}");
						transition-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
					}
				}
			`
                    }), (0, n.jsxs)("svg", {
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: p.icon,
                        children: [(0, n.jsx)("rect", {
                            x: "4.5",
                            y: "8",
                            width: "11",
                            height: "9",
                            rx: "2",
                            strokeWidth: "1.25"
                        }), (0, n.jsx)("circle", {
                            cx: "10",
                            cy: "11.5",
                            r: "0.5",
                            strokeWidth: "1.25"
                        }), (0, n.jsx)("path", {
                            d: "M10 14V11.5",
                            strokeWidth: "1.25",
                            strokeLinecap: "round"
                        }), (0, n.jsx)("path", {
                            className: m,
                            d: e ? r : i,
                            strokeWidth: "1.25",
                            strokeLinecap: "round"
                        })]
                    })]
                })
            }
        },
        806875: (e, t, a) => {
            a.d(t, {
                z: () => l
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(430670), a(581454);
            var o = () => a(517013),
                n = () => a(832375),
                i = () => a(51929),
                r = () => a(987380),
                s = () => a(818646);

            function l(e) {
                let {
                    resultIds: t,
                    collectionViewStore: l,
                    collectionContextStore: c,
                    transaction: d
                } = e, u = l.getPageSortStore(), m = u.getValue() || [], {
                    beforeOps: g
                } = (0, a(219083).i)(m, t.slice(0, a(9247).WF));
                for (let [e, a] of Object.entries(g))
                    if (a) {
                        let t = (0, o().v3)(l, {
                            table: n().evP,
                            id: a
                        });
                        (0, r().n)({
                            parentStore: u,
                            insertStore: (0, o().v3)(l, {
                                table: n().evP,
                                id: e
                            }),
                            beforeStore: t,
                            transaction: d
                        })
                    } else {
                        let a = t.findIndex(t => t === e),
                            r = t[a - 1],
                            s = r ? (0, o().v3)(l, {
                                table: n().evP,
                                id: r
                            }) : void 0;
                        (0, i().W)({
                            parentStore: u,
                            insertStore: (0, o().v3)(l, {
                                table: n().evP,
                                id: e
                            }),
                            afterStore: s,
                            transaction: d
                        })
                    }! function(e) {
                    let {
                        collectionContextStore: t,
                        collectionViewStore: i,
                        transaction: r
                    } = e, l = i.getPageSortStore();
                    for (let e of function(e) {
                            let {
                                pageSort: t,
                                currentResults: o
                            } = e;
                            if (!t || t.length <= a(9247).WF) return [];
                            let n = t.filter(e => !o.has(e));
                            return a(381453).sb([...n.reverse(), ...a(381453).o8(t).reverse()]).slice(0, t.length - a(9247).WF)
                        }({
                            pageSort: l.getValue(),
                            currentResults: new Set(t.groupsStore.getAllGroupStates().flatMap(e => e.resultsStore.state.map(e => e.id)))
                        }))(0, s().T)({
                        parentStore: l,
                        childToRemoveStore: (0, o().v3)(l, {
                            table: n().evP,
                            id: e
                        }),
                        transaction: r
                    })
                }({
                    collectionContextStore: c,
                    collectionViewStore: l,
                    transaction: d
                })
            }
            a(354520)
        },
        818285: (e, t, a) => {
            a.d(t, {
                _: () => o
            });

            function o(e) {
                var t;
                let o = a(728372).AppStoreSidebarSpaceStore.state,
                    {
                        currentUser: n
                    } = e.environment;
                return void 0 !== n.id && !!(null == (t = (0, a(993077).sE)(o, n.id)) ? void 0 : t.isWorkspaceOwner())
            }
        },
        823304: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var o = () => a(546605);
            let n = {
                open: !0,
                isImageLoaded: !1,
                saveButtonLoading: !1,
                imageRef: void 0,
                fixedAspectSelection: void 0,
                aspectSelectionFlipped: !1,
                outerContainerSize: void 0,
                innerContainerSize: void 0
            };
            class i extends o().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                openModal(e) {
                    let {
                        originalSource: t,
                        blockStore: o
                    } = e, i = "uploading" === a(836257).A.getStatus(o.id) && a(836257).A.getMetadataByBlockId(o.id) || { ...a(256606).b,
                        ...o.getImageEditMetadata()
                    };
                    this.setState({ ...n,
                        blockStore: o,
                        originalSource: t,
                        editMetadata: i,
                        cropAspect: "Circle" === i.mask ? 1 : void 0
                    })
                }
                setSaveButtonLoading(e) {
                    this.state.open && this.setState({ ...this.state,
                        saveButtonLoading: e
                    })
                }
                closeModal(e) {
                    var t;
                    null == e || null == (t = e.onClose) || t.call(e), this.setState({
                        open: !1
                    })
                }
                getEditMetadata() {
                    return this.state.open && this.state.editMetadata || a(256606).b
                }
                getIsImageLoaded() {
                    return !!this.state.open && this.state.isImageLoaded
                }
                setIsImageLoaded(e) {
                    this.state.open && this.setState({ ...this.state,
                        isImageLoaded: !0,
                        imageRef: e
                    })
                }
                setCrop(e) {
                    if (this.state.open) {
                        let t = { ...this.state.editMetadata,
                            crop: e
                        };
                        this.setState({ ...this.state,
                            editMetadata: t
                        })
                    }
                }
                setMask(e) {
                    if (this.state.open) switch (this.setState({ ...this.state,
                        fixedAspectSelection: void 0,
                        aspectSelectionFlipped: !1
                    }), e) {
                        case "None":
                            this.setFreeform();
                            return;
                        case "Circle":
                            this.setCircleMask();
                            return;
                        default:
                            (0, a(722371).HB)(e)
                    }
                }
                async setFixedAspectRatio(e, t) {
                    if (!this.state.open) return;
                    let {
                        width: o,
                        height: n
                    } = a(256606).oU[e], i = t ? n / o : o / n, r = this.state.editMetadata, s = await this.getAspectCrop(r, i);
                    s && this.setState({ ...this.state,
                        cropAspect: i,
                        editMetadata: { ...r,
                            crop: s,
                            mask: "None"
                        },
                        fixedAspectSelection: e,
                        aspectSelectionFlipped: t
                    })
                }
                setFreeform() {
                    if (!this.state.open) return;
                    let e = this.state.editMetadata;
                    this.setState({ ...this.state,
                        cropAspect: void 0,
                        editMetadata: { ...e,
                            mask: "None"
                        }
                    })
                }
                async setCircleMask() {
                    if (!this.state.open) return;
                    let e = this.state.editMetadata,
                        t = await this.getAspectCrop(e, 1);
                    t && this.setState({ ...this.state,
                        cropAspect: 1,
                        editMetadata: {
                            crop: t,
                            mask: "Circle"
                        }
                    })
                }
                async getAspectCrop(e, t) {
                    if (this.state.open) {
                        var o;
                        let n = null == (o = this.state.imageRef) ? void 0 : o.current,
                            i = null == e ? void 0 : e.crop;
                        if (!n || !i) return;
                        let {
                            makeAspectCrop: r
                        } = await a(610128).h.load();
                        return r(i, t, n.width, n.height)
                    }
                }
                resetCrop() {
                    this.state.open && (this.setCrop(a(256606).b.crop), this.setMask(a(256606).b.mask))
                }
            }
            let r = new i
        },
        831975: (e, t, a) => {
            function o(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "add_slack_integration",
                        eventProperties: {}
                    }
                })
            }

            function n(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "remove_slack_integration",
                        eventProperties: {}
                    }
                })
            }

            function i(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "slack_notification_create",
                        eventProperties: t
                    }
                })
            }

            function r(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "slack_notification_delete",
                        eventProperties: t
                    }
                })
            }

            function s(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "slack_notification_update",
                        eventProperties: t
                    }
                })
            }

            function l(e, t) {
                let o = a(216260).AI(),
                    n = a(904434).FX();
                (0, a(104310).u)({
                    event: {
                        eventName: "slack_imports_invite_render_invite_popup",
                        eventProperties: {
                            subscription_tier: o,
                            domain_type: n,
                            origin: t.origin,
                            invite_flow_id: t.invite_flow_id
                        }
                    }
                })
            }

            function c(e, t) {
                let o = a(216260).AI(),
                    n = a(904434).FX();
                (0, a(104310).u)({
                    event: {
                        eventName: "slack_imports_invite_click_invite_button",
                        eventProperties: {
                            subscription_tier: o,
                            domain_type: n,
                            invited_user_count: t.invited_user_count,
                            origin: t.origin,
                            invite_token_query: t.inviteTokenQuery,
                            invite_targets: t.inviteTargets,
                            invite_flow_id: t.invite_flow_id
                        }
                    }
                })
            }

            function d(e, t) {
                let o = a(216260).AI(),
                    n = a(904434).FX();
                (0, a(104310).u)({
                    event: {
                        eventName: "slack_imports_invite_completed",
                        eventProperties: {
                            subscription_tier: o,
                            domain_type: n,
                            invited_user_count: t.invited_user_count,
                            is_success: t.is_success,
                            origin: t.origin,
                            invite_flow_id: t.invite_flow_id,
                            error: t.error,
                            invite_stage: t.invite_stage
                        }
                    }
                })
            }

            function u(e, t) {
                let o = a(216260).AI(),
                    n = a(904434).FX();
                (0, a(104310).u)({
                    event: {
                        eventName: "slack_imports_invite_dismiss_popup",
                        eventProperties: {
                            subscription_tier: o,
                            domain_type: n,
                            origin: t.origin,
                            invite_flow_id: t.invite_flow_id
                        }
                    }
                })
            }

            function m(e, t) {
                let o = a(216260).AI(),
                    n = a(904434).FX();
                (0, a(104310).u)({
                    event: {
                        eventName: "slack_imports_invite_start_slack_integration",
                        eventProperties: {
                            subscription_tier: o,
                            domain_type: n,
                            origin: t.origin,
                            invite_flow_id: t.invite_flow_id,
                            from: t.from
                        }
                    }
                })
            }

            function g(e, t) {
                let o = a(216260).AI(),
                    n = a(904434).FX();
                (0, a(104310).u)({
                    event: {
                        eventName: "slack_imports_invite_complete_slack_integration",
                        eventProperties: {
                            subscription_tier: o,
                            domain_type: n,
                            origin: t.origin,
                            invite_flow_id: t.invite_flow_id,
                            from: t.from,
                            is_success: t.is_success
                        }
                    }
                })
            }
            a.d(t, {
                Eu: () => s,
                FY: () => o,
                MP: () => d,
                YT: () => r,
                d2: () => u,
                fK: () => m,
                lL: () => i,
                mH: () => g,
                oI: () => n,
                sD: () => l,
                yS: () => c
            })
        },
        854108: (e, t, a) => {
            a.d(t, {
                V: () => o
            });
            async function o({
                userSettingsStore: e,
                spaceViewStore: t,
                spaceUserStore: n,
                selectedItems: i,
                libraryViewName: r,
                analyticsFrom: s,
                environment: l
            }) {
                switch ("teamspaceDirectory" !== r && "libraryExternalPages" !== r && (0, a(723836).xN)({
                    environment: l,
                    eventProperties: {
                        from: s,
                        section_type: r,
                        item_count: i.length
                    }
                }), r) {
                    case "favorites":
                        let c = t.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "libraryBulkRowActions.addToFavorites",
                            environment: l,
                            cellTarget: {
                                spaceWithId: c
                            },
                            canUndo: !0,
                            perform: e => {
                                (0, a(622862).Y)({
                                    modificationType: "add",
                                    spaceViewStore: t,
                                    storesToModify: i,
                                    transaction: e
                                })
                            }
                        });
                        break;
                    case "shared":
                    case "private":
                        let d = "shared" === r ? t.getSharedPagesStore() : t.getPrivatePagesStore(),
                            u = "shared" === r ? (0, a(500957).a)({
                                environment: l,
                                spaceViewStore: t,
                                userSettingsStore: e,
                                type: r
                            }).state.visiblePagesStores[0] : void 0;
                        await a(245757).Hu({
                            type: r,
                            environment: l,
                            droppedStores: i,
                            duplicate: !1,
                            duplicateActions: void 0,
                            isDroppingOnFullSection: !1,
                            spaceUserStore: n,
                            isTopLevelItem: !0,
                            droppedDirection: a(966225).bH.Above,
                            targetParentStore: d,
                            targetStore: u
                        });
                        break;
                    case "recents":
                    case "teamspaceDirectory":
                    case "libraryExternalPages":
                    case "myMeetings":
                    case "agents":
                        break;
                    default:
                        (0, a(722371).HB)(r)
                }
            }
        },
        857064: (e, t, a) => {
            function o(e) {
                return e.every(e => {
                    if (!e.isPersonProfile()) return !1;
                    let t = e.getModel();
                    return !!t && (0, a(907137).dY)({
                        personProfileBlock: t,
                        getRecordModel: e.getRecordModel
                    })
                })
            }

            function n(e) {
                return !!a(218744).default.checkGate({
                    gateName: "person_profile_deletion"
                }) && o(e.blocks)
            }
            a.d(t, {
                P: () => n,
                d: () => o
            }), a(898992), a(823215)
        },
        882257: (e, t, a) => {
            a.d(t, {
                T: () => l
            });
            var o = () => a(104310),
                n = () => a(962299),
                i = () => a(647095),
                r = () => a(262058);
            let s = (0, a(109939).YK)({
                importingCSV: {
                    id: "databaseViewActions.importingCSV.loadingMessage",
                    defaultMessage: "Importing"
                },
                uploadingCSV: {
                    id: "databaseViewActions.uploadingCSV.loadingMessage",
                    defaultMessage: "Uploading"
                },
                importFailed: {
                    id: "databaseViewActions.importFailedError.message",
                    defaultMessage: "Import failed."
                }
            });

            function l(e) {
                let t, {
                        store: l,
                        environment: c,
                        analytics: d
                    } = e,
                    u = (0, a(444610).U)(l),
                    m = null == u ? void 0 : u.collectionViewBlockStore(),
                    g = null == u ? void 0 : u.collectionViewStore(),
                    p = null == g ? void 0 : g.getCollectionStore();
                if ((0, a(421141).v)()) {
                    let e = a(47797).A.getOrCreateFlowId();
                    a(691968).fJ({
                        import_source: "csv",
                        from: d.from,
                        data_source_session_id: d.dataSourceSessionId,
                        data_source_from: d.dataSourceFrom,
                        import_type: "file",
                        flowId: e,
                        userId: c.currentUser.id,
                        spaceId: l.getSpaceId()
                    }), a(523893).Z({
                        importType: "merge",
                        spaceId: l.getSpaceId(),
                        importLocation: null == p ? void 0 : p.id,
                        parentId: l.id,
                        parentTable: "block",
                        collectionViewBlockStore: m,
                        analyticsFrom: d.from
                    });
                    return
                }
                let f = async ({
                        fileURL: e,
                        fileName: t,
                        signedToken: o
                    }) => {
                        if (r().m({
                                message: s.importingCSV
                            }), !p || !a(496704).K.findCollectionViewBlockFromStore(l)) return;
                        let d = (0, a(714350).P)(),
                            u = a(259242).UT({
                                environment: c,
                                eventName: a(540234).V,
                                request: {
                                    importType: "MergeIntoCollection",
                                    fileURL: e,
                                    fileName: t,
                                    collection: {
                                        id: p.id,
                                        spaceId: (0, a(226221).e)(p.pointer.spaceId)
                                    },
                                    spaceId: (0, a(226221).e)(p.pointer.spaceId),
                                    userTimeZone: d,
                                    signedToken: o
                                },
                                multiCellRouting: {
                                    spaceIds: [p.getSpaceId()]
                                }
                            }),
                            m = a(218744).default.checkGate({
                                gateName: "csvimport_faster_navigate_to_page_enabled"
                            }),
                            g = !1;
                        for await (let e of u) {
                            if (e.error) throw i().f1(n().A.formatMessage(s.importFailed)), r().V(), e.error;
                            !g && m && "status" in e.value && "updated_collection" === e.value.status.message && (g = !0, r().V())
                        }
                        r().V()
                    },
                    v = {},
                    y = performance.now();
                a(385475).Bz({
                    environment: c,
                    accept: ".csv",
                    bucket: "temporary",
                    spaceId: l.getSpaceId(),
                    onStart: e => {
                        t = e, r().m({
                            message: s.uploadingCSV
                        })
                    },
                    onCompleteWithToken: e => {
                        for (let [n, i] of (a(691968).eH({
                                from: d.from,
                                import_source: "csv"
                            }), v.uploadTimeTaken = performance.now() - y, v.firstTimeNavigateToCollection = v.uploadTimeTaken, f({
                                fileURL: e[0].fileUrl,
                                fileName: t[0].name,
                                signedToken: e[0].signedToken
                            }), v.overallTimeTaken = performance.now() - y, Object.entries(v)))(0, o().u)({
                            event: {
                                eventName: "import_file_finished",
                                eventProperties: {
                                    importUploadType: "csv",
                                    importType: "MergeIntoCollection",
                                    importLatency: i,
                                    importSource: "file",
                                    importLatencyType: n,
                                    importFileCount: 1
                                }
                            }
                        });
                        a(773352).log({
                            level: "info",
                            from: "mergeWithCSV",
                            type: "mergeWithCSVFinished",
                            data: {
                                miscDataToConvertToString: {
                                    data: {
                                        uploadType: "csv",
                                        importType: "MergeIntoCollection",
                                        importLatencies: v,
                                        importSource: "file",
                                        fileNames: [t[0].name]
                                    }
                                }
                            }
                        })
                    },
                    onError: e => {
                        r().V(), i().f1(n().A.formatMessage(s.importFailed))
                    }
                })
            }
        },
        884940: (e, t, a) => {
            a.d(t, {
                AS: () => n,
                EH: () => i
            });
            let o = ["png", "jpg", "jpeg", "webp", "heic", "heif"];

            function n(e) {
                if (!e) return !1;
                let t = a(728601).QC(e);
                if (!t) return !1;
                let n = a(728601)._J(e),
                    i = o.includes(t.toLowerCase());
                return n && i
            }
            async function i(e, t) {
                let o = e.getOriginalImageSource();
                if ((0, a(148337).o9)(o), !o) return;
                let n = await (0, a(783826).L)({
                        url: o,
                        isAuthenticated: !0,
                        permissionRecord: e.pointer
                    }, t),
                    {
                        imageEditActions: i
                    } = await a(610128).h.load();
                return i.cropAndUploadImage({
                    store: e,
                    environment: t,
                    proxiedOriginalUrl: n
                })
            }
        },
        958738: (e, t, a) => {
            a.d(t, {
                T: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    store: o,
                    alignment: n,
                    transaction: i
                } = e, {
                    id: r
                } = t.currentUser;
                r && (0, a(173157).z)({
                    store: o.getFormatStore(),
                    data: {
                        block_alignment: n
                    },
                    transaction: i
                })
            }
        },
        982735: (e, t, a) => {
            a.d(t, {
                Xv: () => eV,
                _J: () => ex,
                w4: () => ej,
                qQ: () => eC,
                SH: () => tk,
                bH: () => tS,
                tA: () => $,
                O5: () => J,
                qI: () => eo,
                A2: () => tf,
                xD: () => tN,
                Bf: () => tI,
                fg: () => ey,
                Fh: () => eb,
                cy: () => eh,
                TD: () => ev,
                wy: () => eT,
                Kl: () => eB,
                Zk: () => eP,
                oq: () => ew,
                b2: () => Z
            }), a(18107), a(967357), a(898992), a(823215), a(354520), a(430670), a(803949), a(581454), a(737550);
            var o = a(296540),
                n = a(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.87 15.25 14.25",
                    svg: (0, n.jsx)("path", {
                        d: "M3 2.875a.625.625 0 1 0 0 1.25h14a.625.625 0 1 0 0-1.25zM5.125 7.5c0-1.174.951-2.125 2.125-2.125h5.5c1.174 0 2.125.951 2.125 2.125v5a2.125 2.125 0 0 1-2.125 2.125h-5.5A2.125 2.125 0 0 1 5.125 12.5zm2.125-.875a.875.875 0 0 0-.875.875v5c0 .483.392.875.875.875h5.5a.875.875 0 0 0 .875-.875v-5a.875.875 0 0 0-.875-.875zM2.375 16.5c0-.345.28-.625.625-.625h14a.625.625 0 1 1 0 1.25H3a.625.625 0 0 1-.625-.625"
                    })
                },
                r = (0, a(104509).wt)("alignCenter", i, "default"),
                s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.87 15.25 14.25",
                    directional: !0,
                    svg: (0, n.jsx)("path", {
                        d: "M3 2.875a.625.625 0 1 0 0 1.25h14a.625.625 0 1 0 0-1.25zM2.375 7.5c0-1.174.951-2.125 2.125-2.125H10c1.174 0 2.125.951 2.125 2.125v5A2.125 2.125 0 0 1 10 14.625H4.5A2.125 2.125 0 0 1 2.375 12.5zM4.5 6.625a.875.875 0 0 0-.875.875v5c0 .483.392.875.875.875H10a.875.875 0 0 0 .875-.875v-5A.875.875 0 0 0 10 6.625zM2.375 16.5c0-.345.28-.625.625-.625h14a.625.625 0 1 1 0 1.25H3a.625.625 0 0 1-.625-.625"
                    })
                },
                l = (0, a(104509).wt)("alignLeft", s, "default"),
                c = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.87 15.25 14.25",
                    directional: !0,
                    svg: (0, n.jsx)("path", {
                        d: "M3 2.875a.625.625 0 1 0 0 1.25h14a.625.625 0 1 0 0-1.25zM7.875 7.5c0-1.174.951-2.125 2.125-2.125h5.5c1.174 0 2.125.951 2.125 2.125v5a2.125 2.125 0 0 1-2.125 2.125H10A2.125 2.125 0 0 1 7.875 12.5zM10 6.625a.875.875 0 0 0-.875.875v5c0 .483.392.875.875.875h5.5a.875.875 0 0 0 .875-.875v-5a.875.875 0 0 0-.875-.875zM2.375 16.5c0-.345.28-.625.625-.625h14a.625.625 0 1 1 0 1.25H3a.625.625 0 0 1-.625-.625"
                    })
                },
                d = (0, a(104509).wt)("alignRight", c, "default"),
                u = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 16.38 16.38",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M3.125 5.25c0-1.174.951-2.125 2.125-2.125h9.5c1.174 0 2.125.951 2.125 2.125v6.233a4.6 4.6 0 0 0-1.25-.068v-4.6H4.375v7.935c0 .483.392.875.875.875h6.165a4.6 4.6 0 0 0 .069 1.25H5.25a2.125 2.125 0 0 1-2.125-2.125z"
                        }), (0, n.jsx)("path", {
                            d: "M9.537 8.843a.694.694 0 1 1-1.389 0 .694.694 0 0 1 1.389 0m-.694 3.009a.694.694 0 1 0 0-1.389.694.694 0 0 0 0 1.389m0 2.315a.695.695 0 1 0 0-1.39.695.695 0 0 0 0 1.39m2.315-4.63a.694.694 0 1 0 0-1.389.694.694 0 0 0 0 1.389m0 2.315a.694.694 0 1 0 0-1.389.694.694 0 0 0 0 1.389m0 2.315a.694.694 0 1 0 0-1.39.694.694 0 0 0 0 1.39m2.314-4.63a.694.694 0 1 0 0-1.389.694.694 0 0 0 0 1.389m-6.944 2.315a.694.694 0 1 0 0-1.389.694.694 0 0 0 0 1.389m0 2.315a.695.695 0 1 0 0-1.39.695.695 0 0 0 0 1.39m6.944-2.315a.694.694 0 1 0 0-1.389.694.694 0 0 0 0 1.389m.053 6.623a3.5 3.5 0 1 1 4.95-4.95 3.5 3.5 0 0 1-4.95 4.95m4.287-.619a.625.625 0 0 0 0-.884L16.84 16l.972-.972a.625.625 0 0 0-.884-.884l-.972.972-.973-.972a.625.625 0 1 0-.883.884l.972.972-.972.972a.625.625 0 0 0 .883.884l.973-.972.972.972c.244.244.64.244.884 0"
                        })]
                    })
                },
                m = (0, a(104509).wt)("calendarBadgeX", u, "default"),
                g = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.37 1.37 17.25 17.25",
                    svg: (0, n.jsx)("path", {
                        d: "M5.625 2a.625.625 0 1 0-1.25 0v2.375H2a.625.625 0 1 0 0 1.25h2.375V13.5c0 1.174.951 2.125 2.125 2.125h7.875V18a.625.625 0 1 0 1.25 0v-2.375H18a.625.625 0 1 0 0-1.25h-2.375V6.5A2.125 2.125 0 0 0 13.5 4.375H5.625zm0 3.625H13.5c.483 0 .875.392.875.875v7.875H6.5a.875.875 0 0 1-.875-.875z"
                    })
                },
                p = (0, a(104509).wt)("crop", g, "default");
            var f = () => a(958738);

            function v(e) {
                let t = (0, a(659848).k)(e),
                    o = (0, a(328765).S)(),
                    n = (0, a(916804).I)(o);
                return !!t && !n && t
            }
            let y = (0, a(109939).YK)({
                buttonEffectTitle: {
                    id: "action.buttonEffect.title",
                    defaultMessage: "Click effect"
                },
                confettiTitle: {
                    id: "action.buttonEffect.confettiTitle",
                    defaultMessage: "Confetti"
                },
                noneTitle: {
                    id: "action.buttonEffect.noneTitle",
                    defaultMessage: "None"
                }
            });

            function b(e) {
                return (t, o) => {
                    var n;
                    let i = o.blocks[0];
                    if (!i.isType(a(955630).xd.button)) return;
                    let r = i.getAutomationStore();
                    if (!r || !r.isTriggerType("button")) return;
                    let s = null == (n = o.pageContext) || null == (n = n.spaceStore) ? void 0 : n.getSpaceId(),
                        {
                            serverCommitResult: l,
                            transactionId: c
                        } = (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.setButtonEffectAction",
                            environment: o.environment,
                            cellTarget: s ? {
                                spaceWithId: s
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                (0, a(368198).K)({
                                    transaction: t,
                                    store: r.getPropertiesStore().getKeyStore("button_effect"),
                                    value: e ? {
                                        type: e
                                    } : null
                                })
                            }
                        });
                    return t.setMetadata({
                        transactionId: c
                    }), l.then(t)
                }
            }
            let h = (0, o.forwardRef)(function(e, t) {
                    let {
                        blockStore: o,
                        buttonEffectType: i,
                        ...r
                    } = e, s = (0, a(682985).K8)(() => {
                        let e = o.getAutomationStore();
                        if (!e) return !1;
                        let t = e.getButtonEffect();
                        return (null == t ? void 0 : t.type) === i
                    }, [o, i]);
                    return (0, n.jsx)(a(860287).A, {
                        ref: t,
                        ...r,
                        isChecked: s
                    })
                }),
                k = (0, a(233319).gy)({
                    key: "change button effect",
                    actions: [(0, a(233319).Ls)({
                        key: "button effect confetti",
                        displayName: y.confettiTitle,
                        analyticsName: y.confettiTitle.defaultMessage,
                        validators: [],
                        closeParentMenu: !0,
                        track: {
                            actionName: "set_button_effect"
                        },
                        action: b("confetti"),
                        render: (e, t) => (0, n.jsx)(h, { ...e,
                            blockStore: t.blocks[0],
                            title: (0, n.jsx)(a(109939).sA, { ...y.confettiTitle
                            }),
                            svg: a(40411).a,
                            buttonEffectType: "confetti"
                        })
                    }), (0, a(233319).Ls)({
                        key: "button effect none",
                        displayName: y.noneTitle,
                        analyticsName: y.noneTitle.defaultMessage,
                        validators: [],
                        closeParentMenu: !0,
                        track: {
                            actionName: "set_button_effect"
                        },
                        action: b(void 0),
                        render: (e, t) => (0, n.jsx)(h, { ...e,
                            blockStore: t.blocks[0],
                            title: (0, n.jsx)(a(109939).sA, { ...y.noneTitle
                            }),
                            svg: a(927364).xMarkCircleIcon,
                            buttonEffectType: void 0
                        })
                    })]
                }),
                S = (0, a(35370).u)({
                    key: "change button effect",
                    displayName: y.buttonEffectTitle,
                    analyticsName: y.buttonEffectTitle.defaultMessage,
                    svg: a(347487).C,
                    validators: [a(998256).p, function(e) {
                        var t;
                        return !!(1 === e.blocks.length && (null == (t = e.blocks.at(0)) ? void 0 : t.isType(a(955630).xd.button)))
                    }, (0, a(550385).S)({
                        experimentId: "automations_button_confetti_effect"
                    })],
                    subActions: () => [k]
                });

            function A(e) {
                var t;
                let {
                    environment: o
                } = e;
                if ((0, a(380802).$)({
                        userId: o.currentUser.id
                    })) return !0;
                let n = a(728372).AppStoreCurrentUserSettingsStore.state,
                    i = (null == n || null == (t = n.getSettings()) ? void 0 : t.preferred_locale) || a(599412).q;
                return (0, a(619157).Vf)(i)
            }
            let M = (0, a(109939).YK)({
                textDirectionName: {
                    id: "action.textDirection.name",
                    defaultMessage: "Text direction"
                },
                leftToRight: {
                    id: "action.textDirection.ltr",
                    defaultMessage: "Left to right"
                },
                rightToLeft: {
                    id: "action.textDirection.rtl",
                    defaultMessage: "Right to left"
                },
                auto: {
                    id: "action.textDirection.auto",
                    defaultMessage: "Auto-detect"
                }
            });

            function w() {
                return [a(998256).p, (0, a(572251).A)(a(99378).v), a(211129).Y, a(446019).M, (0, a(572251).A)(a(252805).C), a(424884).P, A]
            }

            function I(e) {
                let {
                    textDirection: t,
                    displayName: o,
                    svg: i
                } = e, r = (0, a(233319).Ls)({
                    key: `text direction ${t??"auto"}`,
                    displayName: o,
                    analyticsName: o.defaultMessage,
                    analyticsActionType: "change_text_direction",
                    validators: w(),
                    track: !1,
                    action: ({
                        blocks: e,
                        environment: o,
                        pageContext: n
                    }) => {
                        var i;
                        let r = null == n || null == (i = n.spaceStore) ? void 0 : i.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.createTextDirectionAction",
                            environment: o,
                            cellTarget: r ? {
                                spaceWithId: r
                            } : void 0,
                            canUndo: !0,
                            perform: o => {
                                (0, a(715144).z)({
                                    stores: e,
                                    update: {
                                        block_text_direction: t
                                    },
                                    transaction: o
                                })
                            }
                        })
                    },
                    closeParentMenu: !0,
                    render: (e, a) => (0, n.jsx)(N, {
                        props: e,
                        context: a,
                        textDirection: t,
                        svg: i,
                        actionDisplayName: r.displayName
                    })
                });
                return r
            }

            function N({
                props: e,
                context: t,
                textDirection: o,
                svg: i,
                actionDisplayName: r
            }) {
                let s = (0, a(682985).K8)(() => (t.blocks.length > 0 ? t.blocks[0].getFormat().block_text_direction : void 0) === o, [t.blocks, o]);
                return (0, n.jsx)(a(860287).A, { ...e,
                    svg: i,
                    title: r,
                    isChecked: s
                })
            }
            let C = (0, a(233319).gy)({
                    key: "text direction actions",
                    actions: [I({
                        textDirection: void 0,
                        displayName: M.auto,
                        svg: a(53445).arrowLeftRightIcon
                    }), I({
                        textDirection: "ltr",
                        displayName: M.leftToRight,
                        svg: (0, a(619157).A1)() ? a(128743).arrowStraightLeftIcon : a(988824).arrowStraightRightIcon
                    }), I({
                        textDirection: "rtl",
                        displayName: M.rightToLeft,
                        svg: (0, a(619157).A1)() ? a(988824).arrowStraightRightIcon : a(128743).arrowStraightLeftIcon
                    })]
                }),
                x = (0, a(35370).u)({
                    key: "text direction section",
                    displayName: M.textDirectionName,
                    analyticsName: M.textDirectionName.defaultMessage,
                    svg: a(53445).arrowLeftRightIcon,
                    validators: w(),
                    subActions: () => [C]
                });

            function _(e) {
                return t => t.blocks.every(t => t && t.getType() === e)
            }

            function P(e) {
                let {
                    blocks: t
                } = e, o = t[0];
                if (!o) return !1;
                let n = (0, a(444610).U)(o);
                return !!n && (0, a(845001).q)(n.capabilitiesStore, n.permissionScopesStore)
            }
            let T = (0, a(766550).h)("source");

            function L(e) {
                return e.blocks.every(e => {
                    let t = null == e ? void 0 : e.getModel();
                    return !!(null == t ? void 0 : t.isType(a(955630).XC))
                })
            }

            function j(e) {
                if (!e.blocks) return !1;
                let t = e.blocks.at(0),
                    o = t && t.getNonCollectionProperty("source");
                if (!o) return !1;
                let n = a(561872).MO(o);
                return !!n && a(728601)._J(n)
            }

            function B(e) {
                let t = a(728372).AppStoreSidebarSpaceViewStore.state,
                    o = e.blocks.at(0);
                return !!(t && o && (0, a(87822).J)({
                    spaceViewStore: t,
                    pageId: o.id
                }))
            }

            function D(e) {
                var t;
                return (null == (t = e.blocks.at(0)) || null == (t = t.getFormat().alias_pointer) ? void 0 : t.table) === a(832375).SNf
            }

            function V(e) {
                if (!e.blocks || 0 === e.blocks.length) return !1;
                let t = e.blocks[0];
                if (!(t.isDefined() && t.isType(a(955630).xd.file))) return !1;
                let o = t.getNonCollectionProperty("source");
                if (!o) return !1;
                let n = (0, a(561872).MO)(o);
                if (!n) return !1;
                let i = a(218744).default.getConfigKey("file_block_download", "force_download_extensions");
                return !(0, a(728601).YR)({
                    url: n,
                    forceDownloadExtensions: i
                })
            }

            function F(e) {
                return e.blocks[0].isFirstBlockInCalloutV2Block()
            }

            function R(e) {
                return t => {
                    if (1 !== t.blocks.length) return !1;
                    let a = t.blocks.at(0);
                    if (!a) return !1;
                    let o = a.getParentBlockStore(),
                        n = null == o ? void 0 : o.getContentStores(),
                        i = null == n ? void 0 : n.map(t => t.getType() === e);
                    if (!i || (null == i ? void 0 : i.length) === 0) return !1;
                    let r = null == n ? void 0 : n.map(e => e.id).indexOf(a.id);
                    return void 0 !== r && (0 === r || !i[r - 1])
                }
            }

            function U({
                blocks: e
            }) {
                return e.some(e => !!e.isImmediateColumnChild())
            }

            function z(e) {
                var t;
                return !!(null == (t = e.blocks.at(0)) ? void 0 : t.getFormat().is_placeholder)
            }

            function E(e) {
                if (!(0, a(21848).v)(e)) return !1;
                let {
                    publicPageData: t
                } = a(686494).A.state;
                return !!(null == t ? void 0 : t.isDLSViewer)
            }

            function K(e) {
                var t;
                return 1 === e.blocks.length && (null == (t = e.blocks.at(0)) ? void 0 : t.getType()) === a(955630).xd.table
            }
            let W = (0, a(109939).YK)({
                    fixLegacyTransclusion: {
                        id: "action.fixLegacyTransclusion.name",
                        defaultMessage: "Fix legacy transclusion"
                    },
                    libraryAddToSidebarSection: {
                        id: "action.libraryAddToSidebarSection.name",
                        defaultMessage: "Move to top of {sectionName}"
                    },
                    libraryAddToSidebarWithoutSectionName: {
                        id: "action.libraryAddToSidebarWithoutSectionName.name",
                        defaultMessage: "Move to top"
                    },
                    insertBelowName: {
                        id: "action.insertBelow.name",
                        defaultMessage: "Insert below"
                    },
                    simpleTableFitToPageWidth: {
                        id: "action.fitToPageWidth.title",
                        defaultMessage: "Fit to width"
                    },
                    copyDirectLinkName: {
                        id: "action.copyDirectLink.name",
                        defaultMessage: "Copy link to original"
                    },
                    openasPageName: {
                        id: "action.openasPage.name",
                        defaultMessage: "Open as page"
                    },
                    copyLinksName: {
                        id: "action.copyLinks.name",
                        defaultMessage: "Copy links to all"
                    },
                    viewOriginalName: {
                        id: "action.viewOriginal.name",
                        defaultMessage: "View original"
                    },
                    openInBrowserName: {
                        id: "action.openInBrowser.name",
                        defaultMessage: "Open in browser"
                    },
                    downloadName: {
                        id: "action.download.name",
                        defaultMessage: "Download"
                    },
                    replaceName: {
                        id: "action.replace.name",
                        defaultMessage: "Replace"
                    },
                    changeCustomBlockSourceUrlName: {
                        id: "action.changeCustomBlockSourceUrl.name",
                        defaultMessage: "Edit custom block settings"
                    },
                    turnSimpleTableIntoCollection: {
                        id: "action.turnIntoCollection.title",
                        defaultMessage: "Turn into database"
                    },
                    viewAsSpreadsheetPrototype: {
                        id: "action.viewAsSpreadsheetPrototype.title",
                        defaultMessage: "View as spreadsheet"
                    },
                    editPropertyName: {
                        id: "action.editProperty.name",
                        defaultMessage: "Edit property"
                    },
                    clearDateName: {
                        id: "action.clearDate.name",
                        defaultMessage: "Clear date"
                    },
                    turnintoInlineName: {
                        id: "action.turnintoInline.name",
                        defaultMessage: "Turn into inline database"
                    },
                    turnintoPageName: {
                        id: "action.turnintoPage.name",
                        defaultMessage: "Turn into page"
                    },
                    turnCollectionIntoSimpleTable: {
                        id: "action.turnintoSimpleTable.name",
                        defaultMessage: "Turn into simple table"
                    },
                    mergewithCSVName: {
                        id: "action.mergewithCSV.name",
                        defaultMessage: "Merge with CSV"
                    },
                    mergewithCSVCaption: {
                        id: "action.mergewithCSV.caption",
                        defaultMessage: "Header row required"
                    },
                    openIn: {
                        id: "action.openIn.name",
                        defaultMessage: "Open in"
                    },
                    lockDatabaseName: {
                        id: "action.lockDatabaseName.name",
                        defaultMessage: "Lock database"
                    },
                    lockDatabaseViewsName: {
                        id: "action.lockDatabaseViewsName.name",
                        defaultMessage: "Lock views"
                    },
                    lockWikiName: {
                        id: "action.lockWikiName.name",
                        defaultMessage: "Lock wiki"
                    },
                    reloadPreview: {
                        id: "action.reloadPreview",
                        defaultMessage: "Reload preview"
                    },
                    unlockWikiName: {
                        id: "action.unlockWikiName.name",
                        defaultMessage: "Unlock wiki"
                    },
                    turnPreviewIntoMention: {
                        id: "action.turnPreviewIntoMention",
                        defaultMessage: "Turn into mention"
                    },
                    turnBookmarkIntoMention: {
                        id: "action.convertToLinkMention.name",
                        defaultMessage: "Turn into mention"
                    },
                    reloadSyncedPage: {
                        id: "action.reloadSyncedPage",
                        defaultMessage: "Sync page"
                    },
                    addtoFavoritesName: {
                        id: "action.addtoFavorites.name",
                        defaultMessage: "Add to Favorites"
                    },
                    removefromFavoritesName: {
                        id: "action.removefromFavorites.name",
                        defaultMessage: "Remove from Favorites"
                    },
                    editIconName: {
                        id: "action.editIcon.name",
                        defaultMessage: "Edit icon"
                    },
                    addIcon: {
                        id: "action.addIcon.name",
                        defaultMessage: "Add icon"
                    },
                    wrapCodeKeywords: {
                        id: "action.wrapCode.fuzzySearchKeywords",
                        defaultMessage: "Wrap Code"
                    },
                    wrapCodeLabel: {
                        id: "action.wrapCode.label",
                        defaultMessage: "Wrap code"
                    },
                    languageModeName: {
                        id: "action.languageMode.name",
                        defaultMessage: "Language"
                    },
                    formatCodeLabel: {
                        id: "action.formatCode.label",
                        defaultMessage: "Format code"
                    },
                    openInBrowserLabel: {
                        id: "action.openInBrowser.label",
                        defaultMessage: "Open in browser"
                    },
                    workAtNotion: {
                        id: "action.workAtNotion.name",
                        defaultMessage: "Work at Notion"
                    },
                    quoteSizeSection: {
                        id: "action.section.quoteSize",
                        defaultMessage: "Quote size"
                    },
                    quoteSizeDefault: {
                        id: "action.quoteSize.default",
                        defaultMessage: "Default"
                    },
                    quoteSize: {
                        id: "action.quoteSize.name",
                        defaultMessage: "Quote size"
                    },
                    quoteSizeLarge: {
                        id: "action.quoteSize.large",
                        defaultMessage: "Large"
                    },
                    listFormatDefault: {
                        id: "action.listFormat.letters.default",
                        defaultMessage: "Default"
                    },
                    listFormatSection: {
                        id: "action.listFormat.sectionName",
                        defaultMessage: "List format"
                    },
                    listFormat: {
                        id: "action.listFormat.name",
                        defaultMessage: "List format"
                    },
                    listFormatNumbers: {
                        id: "action.listFormat.numbers.name",
                        defaultMessage: "Numbers"
                    },
                    listFormatLetters: {
                        id: "action.listFormat.letters.name",
                        defaultMessage: "Letters"
                    },
                    listFormatRoman: {
                        id: "action.listFormat.letters.roman",
                        defaultMessage: "Roman numerals"
                    },
                    listFormatDisc: {
                        id: "action.listFormat.disc.name",
                        defaultMessage: "Disc"
                    },
                    listFormatCircle: {
                        id: "action.listFormat.circle.name",
                        defaultMessage: "Circle"
                    },
                    listFormatSquare: {
                        id: "action.listFormat.square.name",
                        defaultMessage: "Square"
                    },
                    alignmentName: {
                        id: "action.alignment.name",
                        defaultMessage: "Align"
                    },
                    cropImage: {
                        id: "action.cropImage",
                        defaultMessage: "Crop image"
                    },
                    copyImage: {
                        id: "action.copyImage",
                        defaultMessage: "Copy image"
                    },
                    copyCode: {
                        id: "action.copyCode",
                        defaultMessage: "Copy code"
                    },
                    turnTableIntoDatabaseWarning: {
                        id: "action.turnTableIntoDatabaseWarning",
                        defaultMessage: "All suggestions in the table must be resolved before the table can be turned into a database."
                    },
                    linkToImportModal: {
                        id: "action.linkToImportModal",
                        defaultMessage: "Import data"
                    },
                    propertyVisibilityName: {
                        id: "action.propertyVisibility.name",
                        defaultMessage: "Property visibility"
                    },
                    layoutName: {
                        id: "action.layout.name",
                        defaultMessage: "Layout"
                    },
                    presentFromHere: {
                        id: "action.presentFromHere.name",
                        defaultMessage: "Present from here"
                    }
                }),
                O = [a(185273).e, (0, a(572251).A)(a(648620).x), (0, a(572251).A)(a(653262).p), (0, a(515914).or)([a(252805).C, (0, a(572251).A)(a(99378).v)]), ...a(233319).uo],
                Y = (0, a(233319).Ls)({
                    key: "fixLegacyTransclusion",
                    displayName: W.fixLegacyTransclusion,
                    analyticsName: W.fixLegacyTransclusion.defaultMessage,
                    svg: a(194123).a,
                    validators: [function(e) {
                        return !!(0, a(405157).i)() && e.blocks.every(e => {
                            let t = e.getParentId(),
                                a = e.recordStoreUIParentStore,
                                o = null == a ? void 0 : a.id;
                            return t && o && t !== o
                        })
                    }, a(21848).v, ...O],
                    closeParentMenu: !0,
                    action: async ({
                        blocks: e,
                        environment: t
                    }) => {
                        (await a(749564).l.legacyTransclusionActions.load()).fixLegacyTransclusion({
                            environment: t,
                            store: e[0]
                        })
                    }
                });

            function H({
                blockStore: e
            }) {
                let t = (0, a(682985).K8)(() => e ? (0, a(260235).o)(e) : void 0, [e]),
                    o = (0, a(109939).tz)();
                return t ? (0, n.jsx)(a(109939).sA, { ...W.libraryAddToSidebarSection,
                    values: {
                        sectionName: (0, a(413388).Ws)(t, o)
                    }
                }) : (0, n.jsx)(a(109939).sA, { ...W.libraryAddToSidebarWithoutSectionName
                })
            }
            let q = (0, a(233319).Ls)({
                    key: "addToSidebarSectionLibrary",
                    displayName: W.libraryAddToSidebarWithoutSectionName,
                    contextualDisplayName: ({
                        blocks: e
                    }) => (0, n.jsx)(H, {
                        blockStore: e.length > 0 ? e[0] : void 0
                    }),
                    analyticsName: W.libraryAddToSidebarWithoutSectionName.defaultMessage,
                    svg: a(742782).d,
                    validators: [function({
                        environment: e,
                        blocks: t
                    }) {
                        return void 0 !== a(260235).s({
                            selectedItems: t,
                            environment: e
                        })
                    }],
                    closeParentMenu: !0,
                    action: async ({
                        blocks: e,
                        environment: t
                    }) => {
                        let o = (0, a(260235).s)({
                            environment: t,
                            selectedItems: e
                        });
                        o && await a(854108).V({ ...o,
                            analyticsFrom: "block_action_menu"
                        })
                    }
                }),
                G = (0, a(35370).u)({
                    key: "turn into section",
                    displayName: a(233319).AY.turnIntoName,
                    analyticsName: a(233319).AY.turnIntoName.defaultMessage,
                    svg: a(84697).arrowSquarePathUpDownIcon,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), a(689441).p, a(211129).Y, a(424884).P],
                    subActions: () => [{
                        key: 0,
                        title: void 0,
                        render: e => (0, n.jsx)(a(844565).A, { ...e
                        }),
                        actions: a(993581).t3.actions
                    }]
                }),
                X = (0, a(233319).Ls)({
                    key: "insert below",
                    displayName: W.insertBelowName,
                    analyticsName: W.insertBelowName.defaultMessage,
                    svg: a(356938).arrowStraightDownIcon,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), (0, a(572251).A)(a(995356).p), a(734533).c, a(803254).F],
                    closeParentMenu: !0,
                    lazyDependencyKeys: ["insertBlockActions"],
                    action: ({
                        blocks: e,
                        environment: t,
                        pageContext: o
                    }) => {
                        var n;
                        let i = null == o || null == (n = o.spaceStore) ? void 0 : n.getSpaceId();
                        a(162865).H.load().then(({
                            insertTextBelow: o
                        }) => {
                            (0, a(377796).createAndCommit)({
                                userAction: "actionRegistry.insertBelow",
                                environment: t,
                                cellTarget: i ? {
                                    spaceWithId: i
                                } : void 0,
                                canUndo: !0,
                                perform: a => {
                                    o({
                                        environment: t,
                                        blocks: e,
                                        transaction: a
                                    })
                                }
                            })
                        })
                    }
                }),
                $ = (0, a(233319).Ls)({
                    key: "copy direct link to content housed within block",
                    displayName: W.copyDirectLinkName,
                    analyticsName: W.copyDirectLinkName.defaultMessage,
                    svg: a(588739).linkIcon,
                    validators: [a(26313).M, a(21848).v, (0, a(572251).A)(j), (0, a(572251).A)(a(341133).w), (0, a(515914).or)([a(560063).I, a(205391).k, (0, a(686412).X)(a(955630).xd.bookmark), (0, a(686412).X)(a(955630).xd.externalObjectInstance), (0, a(686412).X)(a(955630).xd.externalObjectInstancePage), a(980039).I, D]), (0, a(572251).A)(a(263583).I)],
                    closeParentMenu: !0,
                    track: {
                        actionName: "copy_original_link"
                    },
                    lazyDependencyKeys: ["clipboardActions"],
                    action: (e, t, o) => {
                        let n = (0, a(968864).Y)("clipboardActions");
                        n ? n.copyDirectLinkToContent({ ...t,
                            event: o,
                            callback: e
                        }) : a(773352).log({
                            data: {
                                miscDataToConvertToString: {
                                    actionKey: "copy direct link to content housed within block"
                                }
                            },
                            from: "blockActionRegistry",
                            level: "info",
                            type: "lazyDependencies:missingClipboardActions"
                        })
                    }
                }),
                Q = (0, a(233319).Ls)({
                    key: "open collection as page",
                    displayName: W.openasPageName,
                    analyticsName: W.openasPageName.defaultMessage,
                    svg: a(792763).arrowExpandDiagonalBottomLeftToTopRightIcon,
                    validators: [a(662136).l, (0, a(572251).A)(a(252805).C), (0, a(572251).A)(function(e) {
                        if (e.blocks && 1 === e.blocks.length) {
                            let [t] = e.blocks;
                            if (t.isCollectionView()) {
                                let e = t.getCollectionStoreIfSingleSource();
                                if (!e) return !1;
                                let o = e.getValue();
                                if (o) return (0, a(69499).SJ)(o)
                            }
                        }
                        return !1
                    })],
                    closeParentMenu: !0,
                    action: e => (function(e) {
                        let {
                            environment: t,
                            blocks: o
                        } = e, n = o[0].findRecordStoreUIAncestor(e => e instanceof a(970831).B && e.isCollectionView()).ancestor;
                        n && (0, a(545586).navigateToBlock)({
                            environment: t,
                            store: n,
                            visitType: a(981324).ig.Link,
                            pageVisitSource: a(254656).y8.Expand
                        })
                    })(e)
                }),
                J = (0, a(233319).Ls)({
                    key: "copy links to blocks",
                    displayName: W.copyLinksName,
                    analyticsName: W.copyLinksName.defaultMessage,
                    svg: a(588739).linkIcon,
                    validators: [a(26313).M, a(906864).F, (0, a(572251).A)(a(804043).o)],
                    closeParentMenu: !0,
                    track: {
                        actionName: "copy_multiple_block_links"
                    },
                    lazyDependencyKeys: ["clipboardActions"],
                    action: (e, t, o) => {
                        let n = (0, a(968864).Y)("clipboardActions");
                        n ? n.copyLinksToBlocks({ ...t,
                            callback: e
                        }) : a(773352).log({
                            data: {
                                miscDataToConvertToString: {
                                    actionKey: "copy links to blocks"
                                }
                            },
                            from: "blockActionRegistry",
                            level: "info",
                            type: "lazyDependencies:missingClipboardActions"
                        })
                    }
                }),
                Z = (0, a(233319).Ls)({
                    key: "view original",
                    displayName: W.viewOriginalName,
                    analyticsName: W.viewOriginalName.defaultMessage,
                    svg: a(684668).arrowDiagonalUpRightIcon,
                    validators: [(0, a(572251).A)(a(595474).b), a(21848).v, (0, a(515914).or)([a(560063).I, V])],
                    closeParentMenu: !0,
                    track: {
                        actionName: "view_original"
                    },
                    action: (e, {
                        blocks: t,
                        environment: o
                    }, n) => {
                        let i = t.at(0);
                        if (i && (0, a(860838).hg)(i)) return a(556533).oD(o, {
                            store: i,
                            from: "view_original",
                            callback: e
                        })
                    },
                    disabled: () => !a(205885).A.state.online,
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: () => a(205885).A.state.online
                }),
                ee = (0, a(233319).Ls)({
                    key: "view in browser",
                    displayName: W.openInBrowserName,
                    analyticsName: W.openInBrowserName.defaultMessage,
                    svg: a(684668).arrowDiagonalUpRightIcon,
                    validators: [a(595474).b, a(21848).v, (0, a(515914).or)([a(560063).I, V])],
                    closeParentMenu: !0,
                    track: {
                        actionName: "view_original"
                    },
                    action: (e, {
                        blocks: t,
                        environment: o
                    }, n) => {
                        let i = t.at(0);
                        if (i && (0, a(860838).hg)(i)) return a(556533).oD(o, {
                            store: i,
                            from: "view_original",
                            callback: e
                        })
                    },
                    disabled: () => !a(205885).A.state.online,
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: () => a(205885).A.state.online
                }),
                et = (0, a(233319).Ls)({
                    key: "copy image",
                    displayName: W.copyImage,
                    analyticsName: W.copyImage.defaultMessage,
                    svg: a(703696).V,
                    validators: [a(21848).v, a(552555).w, T, (0, a(572251).A)(a(803254).F)],
                    closeParentMenu: !0,
                    track: {
                        actionName: "copy_image"
                    },
                    action: async (e, {
                        blocks: t,
                        environment: o
                    }, n) => {
                        await a(556533).BL({
                            blockStore: t[0],
                            environment: o
                        }), e()
                    },
                    disabled: () => !a(205885).A.state.online,
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: () => a(205885).A.state.online
                }),
                ea = (0, a(233319).Ls)({
                    key: "copy code",
                    displayName: W.copyCode,
                    closeParentMenu: !0,
                    analyticsName: W.copyCode.defaultMessage,
                    svg: a(123219).Y,
                    validators: [a(21848).v, (0, a(686412).X)(a(955630).xd.code)],
                    track: {
                        actionName: "copy_code"
                    },
                    action: async (e, {
                        blocks: t,
                        environment: o
                    }, n) => {
                        let i = t[0];
                        await a(760178).t({
                            codeBlockStore: i,
                            environment: o
                        }), e()
                    }
                }),
                eo = (0, a(233319).Ls)({
                    key: "download source",
                    displayName: W.downloadName,
                    analyticsName: W.downloadName.defaultMessage,
                    svg: a(725111).arrowInCircleDownIcon,
                    validators: [a(21848).v, (0, a(515914).or)([a(205391).k, a(560063).I]), (0, a(515914).or)([function(e) {
                        if (e.blocks) {
                            let t = e.blocks.at(0),
                                o = null == t ? void 0 : t.getType();
                            return !!(o && (0, a(955630).bI)(o))
                        }
                        return !1
                    }, j]), (0, a(572251).A)(a(341133).w)],
                    closeParentMenu: !0,
                    track: {
                        actionName: "download"
                    },
                    action: (e, {
                        blocks: t,
                        environment: o
                    }, n) => {
                        let i = t[0];
                        if (i && (0, a(860838).hg)(i)) return a(556533).qI({
                            environment: o,
                            store: i,
                            callback: e
                        })
                    },
                    disabled: () => !a(205885).A.state.online,
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: () => a(205885).A.state.online
                }),
                en = (0, a(233319).Ls)({
                    key: "replace source",
                    displayName: W.replaceName,
                    analyticsName: W.replaceName.defaultMessage,
                    svg: a(194123).a,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), a(21848).v, (0, a(515914).or)([a(205391).k, a(560063).I])],
                    closeParentMenu: !0,
                    action: ({
                        blocks: e
                    }) => {
                        a(556533).wA({
                            store: e[0]
                        })
                    },
                    disabled: () => !a(205885).A.state.online,
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: () => a(205885).A.state.online
                }),
                ei = (0, a(233319).Ls)({
                    key: "change custom block source url",
                    displayName: W.changeCustomBlockSourceUrlName,
                    analyticsName: W.changeCustomBlockSourceUrlName.defaultMessage,
                    svg: a(588739).linkIcon,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), a(21848).v, (0, a(686412).X)(a(955630).xd.custom), (0, a(550385).S)({
                        experimentId: "custom_blocks"
                    })],
                    closeParentMenu: !0,
                    action: ({
                        blocks: e
                    }) => {
                        let t = e[0];
                        t && t.isType(a(955630).xd.custom) && a(391605).$.setState({
                            open: !0,
                            blockStore: t
                        })
                    }
                }),
                er = (0, a(233319).Ls)({
                    key: "view as spreadsheet prototype",
                    displayName: W.viewAsSpreadsheetPrototype,
                    analyticsName: W.viewAsSpreadsheetPrototype.defaultMessage,
                    svg: a(518630).T,
                    validators: [() => !1, (0, a(550385).S)({
                        experimentId: "spreadsheet_prototype"
                    }), a(998256).p, (0, a(572251).A)(a(639561).w), K, a(211129).Y, (0, a(572251).A)(U)],
                    closeParentMenu: !0,
                    action: ({
                        blocks: e
                    }) => {
                        let t = e[0];
                        a(65085).A.setState({ ...a(65085).A.getState(),
                            [t.id]: !0
                        })
                    }
                }),
                es = (0, a(233319).Ls)({
                    key: "link to import modal",
                    displayName: W.linkToImportModal,
                    analyticsName: W.linkToImportModal.defaultMessage,
                    svg: a(245102).arrowLineDownIcon,
                    validators: [a(998256).p, (0, a(572251).A)(a(639561).w), K, () => "db_create_empty_state" === a(218744).default.getEligibleGroup({
                        experimentId: "adoption_import_entry_point",
                        defaultGroup: "control"
                    })],
                    closeParentMenu: !0,
                    action: ({
                        environment: e
                    }) => {
                        a(599754).Ow({
                            currentPage: "imports",
                            openedFrom: "block_action_import"
                        }), (0, a(784293).t)({
                            environment: e,
                            action: "click",
                            from: "block_action_import"
                        });
                        let t = a(47797).A.getOrCreateFlowId();
                        a(691968).kY({
                            from: "block_action_import",
                            flowId: t
                        })
                    }
                }),
                el = (0, a(233319).Ls)({
                    key: "fit to page width",
                    displayName: W.simpleTableFitToPageWidth,
                    analyticsName: W.simpleTableFitToPageWidth.defaultMessage,
                    svg: a(290884).l,
                    validators: [K, a(998256).p, (0, a(572251).A)(a(639561).w), (0, a(572251).A)(a(99378).v), a(211129).Y],
                    closeParentMenu: !0,
                    action: ({
                        blocks: e,
                        environment: t,
                        pageContext: o
                    }) => {
                        var n;
                        let i = null == o || null == (n = o.spaceStore) ? void 0 : n.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.fitSimpleTableToPageWidth",
                            environment: t,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                let o = e[0];
                                a(189948).AA({
                                    simpleTableStore: o,
                                    transaction: t
                                })
                            }
                        })
                    }
                }),
                ec = (0, a(233319).Ls)({
                    key: "turn into collection",
                    displayName: W.turnSimpleTableIntoCollection,
                    analyticsName: W.turnSimpleTableIntoCollection.defaultMessage,
                    svg: a(84697).arrowSquarePathUpDownIcon,
                    validators: [K, a(998256).p, (0, a(572251).A)(a(639561).w), (0, a(572251).A)(a(99378).v), a(211129).Y, (0, a(572251).A)(U)],
                    closeParentMenu: !0,
                    action: ({
                        blocks: e,
                        environment: t,
                        pageContext: o
                    }) => {
                        var i;
                        let r = null == o || null == (i = o.spaceStore) ? void 0 : i.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.turnSimpleTableIntoCollection",
                            environment: t,
                            cellTarget: r ? {
                                spaceWithId: r
                            } : void 0,
                            canUndo: !0,
                            perform: o => {
                                let i = e[0];
                                i.getContentStores().flatMap(e => {
                                    let t = Object.values(e.getProperties()).flat().filter(a(722371).O9);
                                    return (0, a(247438).vSn)(t)
                                }).length > 0 ? a(647095).rG({
                                    message: (0, n.jsx)(a(109939).sA, { ...W.turnTableIntoDatabaseWarning
                                    })
                                }) : (a(189948).cP({
                                    environment: t,
                                    simpleTableStore: i,
                                    transaction: o
                                }), (0, a(471e3).I)({
                                    environment: t
                                }), a(169274).wr())
                            }
                        })
                    }
                }),
                ed = [a(998256).p, (0, a(572251).A)(a(597426).l), a(993186).$, (0, a(572251).A)(a(877340).P), (0, a(572251).A)(a(533301).K), tC],
                eu = (0, a(35370).u)({
                    key: "edit property",
                    displayName: W.editPropertyName,
                    analyticsName: W.editPropertyName.defaultMessage,
                    svg: a(774458).n,
                    validators: ed,
                    subActions: ({
                        blocks: e
                    }) => {
                        let t = e.at(0);
                        if (!t) return [];
                        let o = (0, a(444610).U)(t),
                            i = t.getAssociatedCollectionStore();
                        if (!i) return [];
                        let r = (null == o ? void 0 : o.normalizedSchemaStore.state) ? ? i.getSchema(),
                            s = i.getFormat(),
                            l = (0, a(944940).L)(s, r, void 0, a(565546).jf.Collection);
                        return l.collection_page_properties ? (l.collection_page_properties.unshift({
                            property: "title"
                        }), [{
                            key: 0,
                            title: void 0,
                            render: e => (0, n.jsx)(a(844565).A, { ...e
                            }),
                            actions: a(381453).oE(l.collection_page_properties.map(t => {
                                let o = r[t.property],
                                    s = i.getSpaceStore();
                                if (o && (0, a(799514).g2)({
                                        propertySchema: o,
                                        property: t.property,
                                        blockStores: e,
                                        collectionSchema: r,
                                        collectionStore: i,
                                        spaceStore: s
                                    })) return function(e) {
                                    let {
                                        property: t,
                                        propertySchema: o
                                    } = e, i = o.name, r = !a(205885).A.state.online && (0, a(260682).$)({
                                        propertyType: o.type,
                                        propertySchema: o,
                                        allowAIProperty: !0
                                    });
                                    return {
                                        key: `Edit Property ${i} ${t}`,
                                        displayName: i,
                                        analyticsName: "Edit property",
                                        searchName: i,
                                        validators: ed,
                                        closeParentMenu: !0,
                                        action: ({
                                            blocks: e,
                                            originRect: n,
                                            environment: i,
                                            pageContext: r
                                        }) => {
                                            if ("checkbox" === o.type) {
                                                var s;
                                                let o = null == r || null == (s = r.spaceStore) ? void 0 : s.getSpaceId();
                                                (0, a(377796).createAndCommit)({
                                                    userAction: "actionRegistry.createEditPropertyAction",
                                                    environment: i,
                                                    cellTarget: o ? {
                                                        spaceWithId: o
                                                    } : void 0,
                                                    canUndo: !0,
                                                    perform: o => {
                                                        a(576186).qS({
                                                            stores: e,
                                                            property: t,
                                                            transaction: o
                                                        })
                                                    }
                                                })
                                            } else n && a(576186).ho({
                                                environment: i,
                                                store: e[0],
                                                additionalStores: e.slice(1),
                                                property: t,
                                                surface: "page",
                                                rect: { ...a(381453).VP(n),
                                                    width: 200
                                                },
                                                preventClearSelection: !0,
                                                blockPropertyValueOverlayStore: (0, a(89352).j)(),
                                                collectionContextStore: (0, a(444610).U)(e[0])
                                            })
                                        },
                                        render: e => (0, n.jsx)(a(51831).m, {
                                            disableTooltip: !r,
                                            placement: "right",
                                            content: () => (0, n.jsx)(a(109939).sA, {
                                                id: "collectionAction.editProperty.offlineTooltip",
                                                defaultMessage: "Go online to edit property"
                                            }),
                                            children: t => (0, n.jsx)(a(34824).G, { ...(0, a(63390).A)(t, e),
                                                propertySchema: o,
                                                format: a(34824).e.Name,
                                                disabled: r,
                                                disabledFeedback: !0
                                            })
                                        })
                                    }
                                }({
                                    property: t.property,
                                    propertySchema: o
                                })
                            }))
                        }]) : []
                    }
                }),
                em = (0, a(233319).Ls)({
                    key: "clear date",
                    displayName: W.clearDateName,
                    analyticsName: W.clearDateName.defaultMessage,
                    svg: m,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), (0, a(515914).or)([(0, a(160138).B)("timeline"), (0, a(160138).B)("calendar")])],
                    closeParentMenu: !0,
                    action: ({
                        environment: e,
                        blocks: t,
                        pageContext: o
                    }) => {
                        var n;
                        let i = (0, a(444610).U)(t[0]);
                        if (!i) return;
                        let r = null == i ? void 0 : i.collectionViewStore();
                        if (!r) return;
                        let s = i.normalizedSchemaStore.state,
                            l = null == o || null == (n = o.spaceStore) ? void 0 : n.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.clearDate",
                            environment: e,
                            cellTarget: l ? {
                                spaceWithId: l
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                a(917104).MQ({
                                    stores: t,
                                    collectionViewStore: r,
                                    schema: s,
                                    transaction: e
                                })
                            }
                        })
                    }
                }),
                eg = (0, a(233319).Ls)({
                    key: "view collection view inline",
                    displayName: W.turnintoInlineName,
                    analyticsName: W.turnintoInlineName.defaultMessage,
                    svg: a(84697).arrowSquarePathUpDownIcon,
                    validators: [function(e) {
                        if (e.blocks && 1 === e.blocks.length) {
                            let [t] = e.blocks;
                            return t.isType(a(955630).xd.collectionViewPage)
                        }
                        return !1
                    }, (0, a(572251).A)(a(252805).C), a(411618).X, (0, a(572251).A)(a(639561).w), (0, a(572251).A)(a(64865).A), a(424884).P],
                    closeParentMenu: !0,
                    action: ({
                        blocks: e,
                        environment: t,
                        pageContext: o
                    }) => {
                        var n;
                        let i = null == o || null == (n = o.spaceStore) ? void 0 : n.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.viewCollectionViewInline",
                            environment: t,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            canUndo: !0,
                            perform: o => {
                                a(422224).transformBlocks({
                                    environment: t,
                                    blocks: e,
                                    blockType: "collection_view",
                                    transaction: o
                                }), (0, a(471e3).I)({
                                    environment: t
                                })
                            }
                        })
                    }
                }),
                ep = (0, a(233319).Ls)({
                    key: "view collection view as page",
                    displayName: W.turnintoPageName,
                    analyticsName: W.turnintoPageName.defaultMessage,
                    svg: a(84697).arrowSquarePathUpDownIcon,
                    validators: [a(662136).l, (0, a(572251).A)(a(252805).C), a(411618).X, (0, a(572251).A)(a(639561).w), (0, a(572251).A)(a(99378).v), (0, a(572251).A)(a(980039).I)],
                    closeParentMenu: !0,
                    action: ({
                        blocks: e,
                        environment: t,
                        pageContext: o
                    }) => {
                        var n;
                        let i = null == o || null == (n = o.spaceStore) ? void 0 : n.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.turnCollectionViewIntoCollectionViewPage",
                            environment: t,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            canUndo: !0,
                            perform: o => {
                                a(422224).transformBlocks({
                                    environment: t,
                                    blocks: e,
                                    blockType: "collection_view_page",
                                    transaction: o
                                })
                            }
                        })
                    }
                }),
                ef = (0, a(233319).Ls)({
                    key: "turn into simple table",
                    displayName: W.turnCollectionIntoSimpleTable,
                    analyticsName: W.turnCollectionIntoSimpleTable.defaultMessage,
                    svg: a(84697).arrowSquarePathUpDownIcon,
                    validators: [a(662136).l, e => {
                        if (e.blocks && 1 === e.blocks.length) {
                            let [t] = e.blocks, o = a(496704).K.findCollectionViewBlockFromStore(t);
                            if (o && "collectionContextStore" in o) return "table" === o.collectionContextStore.getViewType()
                        }
                        return !1
                    }, function(e) {
                        if (e.blocks && 1 === e.blocks.length) {
                            let [t] = e.blocks;
                            return t.hasSingleSourceAndNoLinkedCollections()
                        }
                        return !1
                    }, (0, a(572251).A)(a(252805).C), a(411618).X, (0, a(572251).A)(a(639561).w), (0, a(572251).A)(a(99378).v), function(e) {
                        if (e.blocks && 1 === e.blocks.length) {
                            let [t] = e.blocks;
                            return 1 === t.getCollectionViewStores().length
                        }
                        return !1
                    }, function(e) {
                        if (e.blocks && 1 === e.blocks.length) {
                            let [t] = e.blocks, o = t.getCollectionStoreIfSingleSource();
                            return !!o && Object.values(o.getSchema()).map(e => null == e ? void 0 : e.type).every(e => e && a(685840).gx[e])
                        }
                        return !0
                    }, (0, a(572251).A)(a(980039).I)],
                    closeParentMenu: !0,
                    action: async ({
                        blocks: e,
                        environment: t,
                        pageContext: o
                    }) => {
                        var n;
                        let i = e[0],
                            r = i.isCrdtEnabled(),
                            s = await a(685840).Bp({
                                environment: t,
                                collectionViewBlockStore: i
                            });
                        if (s.some(e => e.isCrdtEnabled() !== r)) {
                            a(436555).D6({
                                label: r ? "Cannot turn database with non-CRDT pages into simple table on CRDT page" : "Cannot turn database with CRDT pages into simple table on non-CRDT page"
                            }), a(773352).log({
                                level: "info",
                                from: "blockActionRegistry",
                                type: "crdt:turnCollectionIntoSimpleTableUseCrdtMismatch",
                                data: {
                                    miscDataToConvertToString: {
                                        collectionViewBlockUseCrdt: r
                                    }
                                }
                            });
                            return
                        }
                        let l = null == o || null == (n = o.spaceStore) ? void 0 : n.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.turnCollectionIntoSimpleTable",
                            environment: t,
                            cellTarget: l ? {
                                spaceWithId: l
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                a(189948).GD({
                                    environment: t,
                                    collectionViewBlockStore: i,
                                    pageStores: s,
                                    transaction: e
                                }), (0, a(471e3).I)({
                                    environment: t
                                }), a(169274).wr()
                            }
                        })
                    }
                }),
                ev = (0, a(233319).Ls)({
                    key: "merge with csv",
                    displayName: W.mergewithCSVName,
                    analyticsName: W.mergewithCSVName.defaultMessage,
                    validators: [a(533301).K, a(411618).X, a(6779).s, a(158213).I, (0, a(572251).A)(a(99378).v), (0, a(572251).A)(function(e) {
                        return e.blocks.some(e => {
                            let t = a(728372).AppStoreMainEditorCurrentBlockStore.state,
                                o = a(496704).K.findCollectionViewBlockFromStore(e),
                                n = o && "collectionContextStore" in o ? o.collectionContextStore : void 0,
                                i = null == n ? void 0 : n.collectionStore();
                            return !!n && !!i && !n.permissionScopesStore.state.canEditContent || !!((null == t ? void 0 : t.isCollectionView()) && (0, a(444285).S)(t) && t.uiContains(e) && t !== e)
                        })
                    }), (0, a(572251).A)(a(458165).Q), (0, a(572251).A)(a(980039).I), (0, a(572251).A)(a(804043).o)],
                    closeParentMenu: !0,
                    render: e => (0, n.jsx)(a(860287).A, { ...e,
                        svg: a(84309).G,
                        title: (0, n.jsx)(a(109939).sA, { ...W.mergewithCSVName
                        }),
                        tooltipText: (0, n.jsx)(a(109939).sA, { ...W.mergewithCSVCaption
                        })
                    }),
                    action: ({
                        blocks: [e],
                        environment: t
                    }) => {
                        (0, a(882257).T)({
                            environment: t,
                            store: e,
                            analytics: {
                                from: "topbar_more_menu"
                            }
                        })
                    }
                }),
                ey = (0, a(233319).fi)({
                    key: "database lock",
                    displayName: W.lockDatabaseName,
                    label: a(962299).A.formatMessage(W.lockDatabaseName),
                    renderTooltip: () => a(962299).A.formatMessage(a(411264).D.lockDatabaseMultiSourceTooltip),
                    disableTooltip: e => e.hasSingleSourceAndNoLinkedCollections(),
                    getSvgIcon: ({
                        isChecked: e
                    }) => t => (0, n.jsx)(a(789700).I, {
                        isLocked: e,
                        style: t
                    }),
                    isChecked: e => e.isLockedForAllUsers(),
                    validators: [a(533301).K, a(923147).a, (0, a(572251).A)(a(64865).A), a(411618).X, (0, a(572251).A)(a(804043).o)],
                    action: (e, t, o) => (0, a(173157).z)({
                        store: t.getFormatStore(),
                        data: {
                            block_locked: !t.isLockedForAllUsers(),
                            block_locked_by: e.currentUser.id
                        },
                        transaction: o
                    }),
                    afterAction: () => null
                }),
                eb = (0, a(233319).fi)({
                    key: "database views lock",
                    displayName: W.lockDatabaseViewsName,
                    label: a(962299).A.formatMessage(W.lockDatabaseViewsName),
                    renderTooltip: () => a(962299).A.formatMessage(a(411264).D.lockDatabaseViewsTooltip),
                    getSvgIcon: () => a(157160).lockIcon,
                    isChecked: e => e.isLockedForAllUsers(),
                    validators: [a(533301).K, (0, a(572251).A)(a(923147).a), a(411618).X, (0, a(572251).A)(a(804043).o)],
                    action: (e, t, o) => (0, a(173157).z)({
                        store: t.getFormatStore(),
                        data: {
                            block_locked: !t.isLockedForAllUsers(),
                            block_locked_by: e.currentUser.id
                        },
                        transaction: o
                    }),
                    afterAction: () => null
                }),
                eh = (0, a(233319).fi)({
                    key: "wiki lock",
                    displayName: W.lockWikiName,
                    label: a(962299).A.formatMessage(W.lockWikiName),
                    getSvgIcon: () => a(157160).lockIcon,
                    isChecked: e => e.isLockedForAllUsers(),
                    validators: [a(533301).K, a(923147).a, a(64865).A, a(411618).X, (0, a(572251).A)(a(804043).o)],
                    action: (e, t, o) => (0, a(173157).z)({
                        store: t.getFormatStore(),
                        data: {
                            block_locked: !t.isLockedForAllUsers(),
                            block_locked_by: e.currentUser.id
                        },
                        transaction: o
                    }),
                    afterAction: () => null
                }),
                ek = (0, a(233319).Ls)({
                    key: "wiki unlock",
                    displayName: W.unlockWikiName,
                    analyticsName: W.unlockWikiName.defaultMessage,
                    svg: a(454736).p,
                    validators: [a(533301).K, a(923147).a, a(64865).A, a(411618).X, a(597426).l],
                    closeParentMenu: !1,
                    action: ({
                        blocks: e,
                        environment: t
                    }) => {
                        let o = e[0];
                        a(605858).X6({
                            environment: t,
                            store: o,
                            lock: !1
                        })
                    }
                }),
                eS = [a(21848).v, a(998256).p, (0, a(572251).A)(a(99378).v), (0, a(572251).A)(a(974226).P)];

            function eA(e = !1) {
                return [...eS, e ? (0, a(515914).or)([_("external_object_instance"), D]) : _("external_object_instance"), (0, a(572251).A)(z)]
            }
            let eM = (0, a(233319).Ls)({
                    key: "reload link preview",
                    displayName: W.reloadPreview,
                    analyticsName: W.reloadPreview.defaultMessage,
                    svg: a(194123).a,
                    validators: eA(!1),
                    closeParentMenu: !0,
                    action: ({
                        environment: e,
                        blocks: t
                    }) => {
                        if (0 === t.length) return;
                        let o = t[0];
                        o.isExternalObjectInstanceBlockStore() && a(994869).updateExternalObjectInstance({
                            environment: e,
                            from: "page_more_menu",
                            store: o,
                            spaceId: o.getSpaceId()
                        })
                    },
                    disabled: () => !a(205885).A.state.online,
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: () => a(205885).A.state.online
                }),
                ew = (0, a(233319).Ls)({
                    key: "turn preview into mention",
                    displayName: W.turnPreviewIntoMention,
                    analyticsName: W.turnPreviewIntoMention.defaultMessage,
                    svg: a(84697).arrowSquarePathUpDownIcon,
                    validators: eA(!0),
                    closeParentMenu: !0,
                    action: ({
                        environment: e,
                        blocks: t,
                        pageContext: o
                    }) => {
                        var n;
                        if (0 === t.length) return;
                        let i = null == o || null == (n = o.spaceStore) ? void 0 : n.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.turnPreviewIntoMention",
                            environment: e,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            canUndo: !0,
                            perform: o => {
                                t[0].isType("alias") ? a(366518).O8({
                                    environment: e,
                                    blockStore: t[0],
                                    transaction: o
                                }) : a(994869).transformExternalObjectInstanceBlockIntoMention({
                                    environment: e,
                                    block: t[0],
                                    transaction: o
                                })
                            }
                        })
                    }
                }),
                eI = (0, a(233319).Ls)({
                    key: "turn bookmark into mention",
                    displayName: W.turnBookmarkIntoMention,
                    analyticsName: W.turnBookmarkIntoMention.defaultMessage,
                    svg: a(84697).arrowSquarePathUpDownIcon,
                    validators: [_("bookmark"), ...eS],
                    closeParentMenu: !0,
                    action: (e, t) => {
                        a(673477).uS({ ...e,
                            event: t
                        })
                    }
                });

            function eN(e = [], t) {
                return (0, a(233319).Ls)({
                    key: "add to favorites",
                    displayName: W.addtoFavoritesName,
                    analyticsName: W.addtoFavoritesName.defaultMessage,
                    svg: a(150963).w,
                    validators: [...e, a(26313).M, a(887175)._, a(21848).v, (0, a(572251).A)(B), (0, a(572251).A)(a(442284).P), (0, a(572251).A)(E), (0, a(572251).A)((0, a(648903).U)([v, (0, a(572251).A)(a(330621).q)])), (0, a(572251).A)(a(748118).Y)],
                    closeParentMenu: !0,
                    action: ({
                        blocks: e,
                        environment: o,
                        analyticsFrom: n,
                        pageContext: i
                    }) => {
                        let r = a(728372).AppStoreSidebarSpaceViewStore.state;
                        if (r) {
                            var s;
                            let l = e[0];
                            (0, a(635690).W)({
                                environment: o,
                                from: "keyboard_shortcut" === n ? "keyboard_shortcut" : t
                            });
                            let c = null == i || null == (s = i.spaceStore) ? void 0 : s.getSpaceId();
                            (0, a(377796).createAndCommit)({
                                userAction: "actionRegistry.addToFavorites",
                                environment: o,
                                cellTarget: c ? {
                                    spaceWithId: c
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    (0, a(622862).Y)({
                                        modificationType: "add",
                                        spaceViewStore: r,
                                        storesToModify: [l],
                                        transaction: e
                                    })
                                }
                            })
                        }
                    }
                })
            }
            let eC = eN([a(803254).F]),
                ex = eN();

            function e_(e = [], t) {
                return (0, a(233319).Ls)({
                    key: "remove from favorites",
                    displayName: W.removefromFavoritesName,
                    analyticsName: W.removefromFavoritesName.defaultMessage,
                    svg: a(139780).d,
                    validators: [...e, B, a(21848).v, (0, a(572251).A)(a(748118).Y)],
                    closeParentMenu: !0,
                    action: ({
                        blocks: e,
                        environment: o,
                        analyticsFrom: n,
                        pageContext: i
                    }) => {
                        let r = a(728372).AppStoreSidebarSpaceViewStore.state;
                        if (r) {
                            var s;
                            let l = e[0];
                            (0, a(635690).J)({
                                environment: o,
                                from: "keyboard_shortcut" === n ? "keyboard_shortcut" : t
                            });
                            let c = null == i || null == (s = i.spaceStore) ? void 0 : s.getSpaceId();
                            (0, a(377796).createAndCommit)({
                                userAction: "actionRegistry.removeFromFavorites",
                                environment: o,
                                cellTarget: c ? {
                                    spaceWithId: c
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    (0, a(622862).Y)({
                                        modificationType: "remove",
                                        spaceViewStore: r,
                                        storesToModify: [l],
                                        transaction: e
                                    })
                                }
                            }), "favorites" === (0, a(260235).o)(l) && (0, a(471e3).I)({
                                environment: o
                            })
                        }
                    }
                })
            }
            let eP = e_([a(803254).F]),
                eT = e_();

            function eL() {
                return "copy_link_only" === a(218744).default.getEligibleGroup({
                    experimentId: "move_copy_link_button",
                    defaultGroup: "control",
                    disableExposureLogging: !0
                })
            }
            let ej = eN([a(158213).I, eL], "overflow_menu"),
                eB = e_([a(158213).I, eL], "overflow_menu"),
                eD = (0, a(233319).Ls)({
                    key: "reload synced page",
                    displayName: W.reloadSyncedPage,
                    analyticsName: W.reloadSyncedPage.defaultMessage,
                    svg: a(194123).a,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), (0, a(572251).A)(a(974226).P), a(21848).v, _("external_object_instance_page")],
                    closeParentMenu: !0,
                    action: ({
                        environment: e,
                        blocks: t
                    }) => {
                        if (0 === t.length) return;
                        let o = t[0];
                        o.isExternalObjectInstancePageBlockStore() && a(994869).updateExternalObjectInstance({
                            environment: e,
                            from: "page_more_menu",
                            store: o,
                            spaceId: o.getSpaceId(),
                            bypassCache: !0
                        })
                    },
                    disabled: () => !a(205885).A.state.online,
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: () => a(205885).A.state.online
                }),
                eV = (0, a(233319).Ls)({
                    key: "add page icon",
                    displayName: W.addIcon,
                    svg: a(976898).emojiFaceIcon,
                    analyticsName: W.addIcon.defaultMessage,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), (0, a(572251).A)(a(804043).o), (0, a(515914).or)([L, a(533301).K]), function(e) {
                        return e.blocks.every(e => !(null != e && e.getIcon()))
                    }],
                    closeParentMenu: !0,
                    track: {
                        actionName: "init_edit_icon"
                    },
                    action: (e, t, a) => {
                        eK(e, t, a)
                    }
                }),
                eF = (0, a(233319).Ls)({
                    key: "edit icon",
                    displayName: W.editIconName,
                    analyticsName: W.editIconName.defaultMessage,
                    svg: a(976898).emojiFaceIcon,
                    validators: [a(998256).p, (0, a(572251).A)(a(99378).v), (0, a(515914).or)([L, a(533301).K, (0, a(648903).U)([a(977003).i, F])])],
                    closeParentMenu: !0,
                    track: {
                        actionName: "init_edit_icon"
                    },
                    action: (e, t, a) => {
                        eK(e, t, a)
                    }
                }),
                eR = [a(998256).p, (0, a(572251).A)(a(597426).l), a(993186).$, (0, a(515914).or)([(0, a(160138).B)("board"), (0, a(160138).B)("gallery")]), P, (0, a(572251).A)(a(877340).P), (0, a(572251).A)(a(533301).K), tC],
                eU = (0, a(233319).Ls)({
                    key: "property visibility",
                    displayName: W.propertyVisibilityName,
                    analyticsName: W.propertyVisibilityName.defaultMessage,
                    validators: eR,
                    closeParentMenu: !0,
                    action: ({
                        blocks: e,
                        environment: t
                    }) => {
                        let o = e.at(0);
                        if (!o) return;
                        let n = (0, a(444610).U)(o);
                        if (!n) return;
                        let i = n.settingsStore;
                        (0, a(76790).a)({
                            collectionSettingsStore: i,
                            item: {
                                type: "propertyVisibility",
                                timelineViewTab: "timeline"
                            }
                        }), (0, a(893783).X)({
                            environment: t,
                            action: "click_show_hide_properties",
                            collectionContextStore: n,
                            from: "block_more_menu"
                        })
                    },
                    render: e => (0, n.jsx)(a(860287).A, { ...e,
                        showExtensionArrow: !1,
                        title: a(962299).A.formatMessage(W.propertyVisibilityName),
                        svg: a(152208).eyeIcon
                    })
                }),
                ez = [a(998256).p, (0, a(572251).A)(a(597426).l), a(993186).$, (0, a(515914).or)([(0, a(160138).B)("board"), (0, a(160138).B)("gallery")]), P, (0, a(572251).A)(a(877340).P), (0, a(572251).A)(a(533301).K), tC],
                eE = (0, a(233319).Ls)({
                    key: "layout",
                    displayName: W.layoutName,
                    analyticsName: W.layoutName.defaultMessage,
                    validators: ez,
                    closeParentMenu: !0,
                    action: ({
                        blocks: e,
                        environment: t
                    }) => {
                        let o = e.at(0);
                        if (!o) return;
                        let n = (0, a(444610).U)(o);
                        if (!n) return;
                        let i = n.settingsStore;
                        (0, a(76790).a)({
                            collectionSettingsStore: i,
                            item: {
                                type: "layout"
                            }
                        }), (0, a(893783).X)({
                            environment: t,
                            action: "click_layout",
                            collectionContextStore: n,
                            from: "block_more_menu"
                        })
                    },
                    render: e => (0, n.jsx)(a(860287).A, { ...e,
                        showExtensionArrow: !1,
                        title: a(962299).A.formatMessage(W.layoutName),
                        svg: a(94021).A
                    })
                });

            function eK(e, t, o) {
                var i;
                let {
                    environment: r,
                    originRect: s,
                    pageContext: l
                } = t, c = null == l || null == (i = l.spaceStore) ? void 0 : i.getSpaceId(), d = t.blocks;
                if ((0, a(977003).i)(t) && F(t)) {
                    let e = d[0].getParentStore();
                    e instanceof a(970831).B && (d = [e])
                }
                let u = e => {
                        var t;
                        return e.isType("button") ? null == (t = e.getAutomationStore()) ? void 0 : t.getIconStore() : e.getIconStore()
                    },
                    m = (e, t) => {
                        var o;
                        d.forEach(t => {
                            (0, a(988454).o)(r, {
                                action: "edit_icon",
                                from: "block_more_menu",
                                blockStore: t
                            }, o => {
                                let n = u(t);
                                if (!n) return;
                                let {
                                    serverCommitResult: i,
                                    transactionId: s
                                } = (0, a(377796).createAndCommit)({
                                    userAction: "actionRegistry.editIcon",
                                    environment: r,
                                    cellTarget: c ? {
                                        spaceWithId: c
                                    } : void 0,
                                    canUndo: !0,
                                    perform: t => {
                                        (0, a(368198).K)({
                                            store: n,
                                            value: e,
                                            transaction: t
                                        })
                                    }
                                });
                                return o.setMetadata({
                                    transactionId: s
                                }), i.then(o)
                            })
                        }), (null == (o = (0, a(565546).WO)(e)) ? void 0 : o.type) !== "url" && d.some(e => e.isType("callout")) && a(255482).K.set({
                            userId: r.currentUser.id,
                            key: a(7827).c,
                            value: e ? ? ""
                        }), t && t.keepVisible || a(874443).I()
                    },
                    g = d.some(e => {
                        var t;
                        return e.isType("button") ? null == (t = u(e)) ? void 0 : t.getValue() : !!e.getIcon()
                    }),
                    p = d.every(e => e.isType("callout")),
                    f = [{
                        type: "emoji",
                        title: (0, n.jsx)(a(109939).sA, {
                            defaultMessage: "Emoji",
                            id: "recordIcon.emojiTab.title"
                        }),
                        onChange: m
                    }, {
                        type: "icon",
                        title: (0, n.jsx)(a(4458).fI, {
                            gap: 4,
                            children: (0, n.jsx)(a(109939).sA, {
                                defaultMessage: "Icons",
                                id: "recordIcon.iconTab.title"
                            })
                        }),
                        onChange: m
                    }];
                a(874443).W(r, {
                    recordIconLoggingData: {
                        source: "bulk_block_selection"
                    },
                    originGap: 4,
                    originRect: s,
                    popupWidth: a(703188).jv,
                    popupHeight: a(703188).GF,
                    isSmallWidth: !1,
                    title: a(962299).A.getIntl().formatMessage({
                        defaultMessage: "Page icon",
                        id: "recordIcon.emojiModalMenu.title"
                    }),
                    onDelete: g ? () => {
                        d.forEach(e => {
                            let t = u(e);
                            t && (0, a(377796).createAndCommit)({
                                userAction: "actionRegistry.editIcon",
                                environment: r,
                                cellTarget: c ? {
                                    spaceWithId: c
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    (0, a(368198).K)({
                                        store: t,
                                        value: void 0,
                                        transaction: e
                                    })
                                }
                            })
                        }), a(874443).I()
                    } : void 0,
                    currentTab: "emoji",
                    isCallout: p,
                    tabs: f,
                    disableClearSelection: !0
                }), e()
            }
            let eW = (0, a(233319).fi)({
                    key: "code wrap",
                    displayName: W.wrapCodeKeywords,
                    label: a(962299).A.formatMessage(W.wrapCodeLabel),
                    isChecked: e => !!e.getFormat().code_wrap,
                    getSvgIcon: () => a(349806).arrowTurnDownLeftIcon,
                    validators: [a(21848).v, (0, a(686412).X)("code"), a(998256).p, (0, a(572251).A)(a(99378).v)],
                    track: {
                        actionName: "set_text_wrap"
                    },
                    action: (e, t, o) => (0, a(715144).z)({
                        stores: [t],
                        update: {
                            code_wrap: !t.getFormat().code_wrap
                        },
                        transaction: o
                    }),
                    afterAction: (e, t) => {
                        a(255482).K.set({
                            userId: t.currentUser.id,
                            key: a(192670).j.localCodeWrapPreferenceKey,
                            value: e
                        })
                    }
                }),
                eO = [a(998256).p, (0, a(572251).A)(a(99378).v), a(734533).c, _("code"), (0, a(572251).A)(a(252805).C)],
                eY = (0, a(233319).gy)({
                    key: "code block languageMode actions",
                    title: W.languageModeName,
                    actions: a(381453).Ul((0, a(656974).qX)().__DANGEROUS_MANUALLY_CHECK_GATES.map(e => {
                        let t = e.featureFlag ? [...eO, (0, a(550385).S)({
                                experimentId: e.featureFlag
                            })] : eO,
                            o = a(804518).languageModeMessages[e.name];
                        return (0, a(233319).Ls)({
                            key: `set language ${e.name} action`,
                            displayName: o,
                            analyticsName: `set language ${e.name}`,
                            validators: t,
                            closeParentMenu: !0,
                            fuzzySearchKeywords: e.fuzzySearchKeywords,
                            track: {
                                actionName: "set_language"
                            },
                            action: (t, {
                                environment: o,
                                blocks: n,
                                pageContext: i
                            }, r) => {
                                var s;
                                a(255482).K.set({
                                    userId: o.currentUser.id,
                                    key: a(192670).j.localLanguagePreferenceKey,
                                    value: e.name
                                });
                                let l = null == i || null == (s = i.spaceStore) ? void 0 : s.getSpaceId(),
                                    {
                                        serverCommitResult: c,
                                        transactionId: d
                                    } = (0, a(377796).createAndCommit)({
                                        userAction: "actionRegistry.languageModeActions",
                                        environment: o,
                                        cellTarget: l ? {
                                            spaceWithId: l
                                        } : void 0,
                                        canUndo: !0,
                                        perform: t => {
                                            a(760178).IA({
                                                language: e.name,
                                                blocks: n,
                                                transaction: t
                                            })
                                        }
                                    });
                                return t.setMetadata({
                                    transactionId: d
                                }), c.then(t)
                            },
                            render: e => (0, n.jsx)(a(95582).A, { ...e,
                                title: a(962299).A.formatMessage(o)
                            })
                        })
                    }), e => {
                        var t;
                        return null == (t = e.displayName) ? void 0 : t.toLowerCase()
                    })
                }),
                eH = (0, a(35370).u)({
                    key: "languageMode section",
                    displayName: W.languageModeName,
                    analyticsName: W.languageModeName.defaultMessage,
                    svg: a(501148).Z,
                    validators: eO,
                    subActions: () => [eY]
                }),
                eq = (0, a(233319).Ls)({
                    key: "format code",
                    displayName: W.formatCodeLabel,
                    closeParentMenu: !0,
                    analyticsName: W.formatCodeLabel.defaultMessage,
                    svg: a(877163).m,
                    validators: [(0, a(686412).X)("code"), a(21848).v, function(e) {
                        let t = e.blocks.at(0);
                        return !!t && !!t.isType("code") && !!t.getLanguage().prettier
                    }, a(998256).p, (0, a(572251).A)(a(99378).v)],
                    action: async ({
                        blocks: e,
                        environment: t
                    }) => {
                        let o = e[0];
                        await a(760178).aZ({
                            codeBlockStore: o,
                            environment: t
                        })
                    }
                }),
                eG = (0, a(233319).Ls)({
                    key: "open html in browser",
                    displayName: W.openInBrowserLabel,
                    closeParentMenu: !0,
                    analyticsName: W.openInBrowserLabel.defaultMessage,
                    validators: [a(21848).v, (0, a(686412).X)("code"), function(e) {
                        let t = e.blocks.at(0);
                        if (!t) return !1;
                        let o = t.getNonCollectionProperty("language");
                        return "HTML" === (0, a(247438).q4_)(o)
                    }, function(e) {
                        return !1
                    }],
                    action: ({
                        blocks: e,
                        environment: t
                    }) => {
                        let o = e[0].getTitleValue(),
                            n = (0, a(247438).q4_)(o),
                            i = window.open();
                        i && i.document.write(n)
                    }
                }),
                eX = (0, a(233319).Ls)({
                    key: "work at notion",
                    analyticsName: W.workAtNotion.defaultMessage,
                    closeParentMenu: !0,
                    displayName: W.workAtNotion,
                    svg: a(240150).N,
                    validators: [(0, a(686412).X)("code"), function({
                        environment: e
                    }) {
                        let t = a(728372).AppStoreSidebarSpaceStore.state;
                        if (!(null != t && t.id)) return !1;
                        let o = a(54068).T.getData(e, {
                            spaceId: null == t ? void 0 : t.id
                        });
                        return "free" === (0, a(192159).AI)(o)
                    }],
                    action: () => {
                        window && window.open(a(168962).JZ.careers)
                    }
                }),
                e$ = [a(998256).p, (0, a(572251).A)(a(99378).v), _("quote")];

            function eQ(e) {
                return (t, o) => {
                    var n;
                    a(255482).K.set({
                        userId: o.environment.currentUser.id,
                        key: a(192670).w.localSizePreferenceKey,
                        value: e
                    });
                    let i = null == (n = o.pageContext) || null == (n = n.spaceStore) ? void 0 : n.getSpaceId(),
                        {
                            serverCommitResult: r,
                            transactionId: s
                        } = (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.createQuoteSizeAction",
                            environment: o.environment,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                (0, a(715144).z)({
                                    stores: o.blocks,
                                    update: {
                                        quote_size: e
                                    },
                                    transaction: t
                                })
                            }
                        });
                    return t.setMetadata({
                        transactionId: s
                    }), r.then(t)
                }
            }
            let eJ = (0, a(233319).gy)({
                    key: "quote size actions",
                    title: W.quoteSizeSection,
                    actions: [(0, a(233319).Ls)({
                        key: "quote size default",
                        displayName: W.quoteSizeDefault,
                        analyticsName: W.quoteSizeDefault.defaultMessage,
                        validators: e$,
                        closeParentMenu: !0,
                        track: {
                            actionName: "set_size"
                        },
                        action: eQ(void 0)
                    }), (0, a(233319).Ls)({
                        key: "quote size large",
                        displayName: W.quoteSizeLarge,
                        analyticsName: W.quoteSizeLarge.defaultMessage,
                        validators: e$,
                        closeParentMenu: !0,
                        track: {
                            actionName: "set_size"
                        },
                        action: eQ("large")
                    })]
                }),
                eZ = (0, a(35370).u)({
                    key: "quote size",
                    displayName: W.quoteSize,
                    analyticsName: W.quoteSize.defaultMessage,
                    svg: a(636434).P,
                    validators: e$,
                    subActions: () => [eJ]
                }),
                e0 = [a(998256).p, (0, a(572251).A)(a(99378).v), _("numbered_list"), R("numbered_list")],
                e2 = [a(998256).p, (0, a(572251).A)(a(99378).v), _("bulleted_list"), R("bulleted_list")],
                e5 = (0, a(35370).u)({
                    key: "number format",
                    displayName: W.listFormat,
                    analyticsName: W.listFormat.defaultMessage,
                    svg: a(774458).n,
                    validators: e0,
                    subActions: () => [e3]
                });

            function e1(e) {
                return (t, o) => {
                    var n;
                    let i = null == (n = o.pageContext) || null == (n = n.spaceStore) ? void 0 : n.getSpaceId(),
                        {
                            serverCommitResult: r,
                            transactionId: s
                        } = (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.createListFormatAction",
                            environment: o.environment,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                (0, a(715144).z)({
                                    stores: o.blocks,
                                    update: {
                                        list_format: e
                                    },
                                    transaction: t
                                })
                            }
                        });
                    return t.setMetadata({
                        transactionId: s
                    }), r.then(t)
                }
            }
            let e3 = (0, a(233319).gy)({
                key: "text color actions",
                title: W.listFormatSection,
                actions: [(0, a(233319).Ls)({
                    key: "list format default",
                    displayName: W.listFormatDefault,
                    analyticsName: W.listFormatDefault.defaultMessage,
                    validators: e0,
                    closeParentMenu: !0,
                    track: {
                        actionName: "set_list_format"
                    },
                    action: e1(void 0)
                }), (0, a(233319).Ls)({
                    key: "list format numbers",
                    displayName: W.listFormatNumbers,
                    analyticsName: W.listFormatNumbers.defaultMessage,
                    validators: e0,
                    closeParentMenu: !0,
                    track: {
                        actionName: "set_list_format"
                    },
                    action: e1("numbers")
                }), (0, a(233319).Ls)({
                    key: "list format letters",
                    displayName: W.listFormatLetters,
                    analyticsName: W.listFormatLetters.defaultMessage,
                    validators: e0,
                    closeParentMenu: !0,
                    track: {
                        actionName: "set_list_format"
                    },
                    action: e1("letters")
                }), (0, a(233319).Ls)({
                    key: "list format roman numerals",
                    displayName: W.listFormatRoman,
                    analyticsName: W.listFormatRoman.defaultMessage,
                    validators: e0,
                    closeParentMenu: !0,
                    track: {
                        actionName: "set_list_format"
                    },
                    action: e1("roman")
                })]
            });

            function e9(e) {
                return (t, o) => {
                    var n;
                    let i = null == (n = o.pageContext) || null == (n = n.spaceStore) ? void 0 : n.getSpaceId(),
                        {
                            serverCommitResult: r,
                            transactionId: s
                        } = (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.createBulletListFormatAction",
                            environment: o.environment,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                (0, a(715144).z)({
                                    stores: o.blocks,
                                    update: {
                                        bullet_list_format: e
                                    },
                                    transaction: t
                                })
                            }
                        });
                    return t.setMetadata({
                        transactionId: s
                    }), r.then(t)
                }
            }
            let e6 = (0, a(233319).gy)({
                    key: "bullet list format actions",
                    title: W.listFormatSection,
                    actions: [(0, a(233319).Ls)({
                        key: "list format default",
                        displayName: W.listFormatDefault,
                        analyticsName: W.listFormatDefault.defaultMessage,
                        validators: e2,
                        closeParentMenu: !0,
                        track: {
                            actionName: "set_list_format"
                        },
                        action: e9(void 0)
                    }), (0, a(233319).Ls)({
                        key: "list format disc",
                        displayName: W.listFormatDisc,
                        analyticsName: W.listFormatDisc.defaultMessage,
                        validators: e2,
                        closeParentMenu: !0,
                        track: {
                            actionName: "set_list_format"
                        },
                        action: e9("disc")
                    }), (0, a(233319).Ls)({
                        key: "list format circle",
                        displayName: W.listFormatCircle,
                        analyticsName: W.listFormatCircle.defaultMessage,
                        validators: e2,
                        closeParentMenu: !0,
                        track: {
                            actionName: "set_list_format"
                        },
                        action: e9("circle")
                    }), (0, a(233319).Ls)({
                        key: "list format square",
                        displayName: W.listFormatSquare,
                        analyticsName: W.listFormatSquare.defaultMessage,
                        validators: e2,
                        closeParentMenu: !0,
                        track: {
                            actionName: "set_list_format"
                        },
                        action: e9("square")
                    })]
                }),
                e8 = (0, a(35370).u)({
                    key: "bulleted format",
                    displayName: W.listFormat,
                    analyticsName: W.listFormat.defaultMessage,
                    svg: a(774458).n,
                    validators: e2,
                    subActions: () => [e6]
                }),
                e7 = [a(26313).M, a(998256).p, (0, a(572251).A)(a(99378).v), (0, a(648903).U)([a(21848).v, a(560063).I, function({
                    blocks: e
                }) {
                    let t = e.at(0);
                    if (!t) return !1;
                    let o = t.getType(),
                        n = t.getFormat();
                    return !!n.block_width && !n.block_page_width && !n.block_full_width && !!(o && (0, a(955630).lL)(o))
                }])],
                e4 = (0, a(35370).u)({
                    key: "alignment",
                    displayName: W.alignmentName,
                    analyticsName: W.alignmentName.defaultMessage,
                    svg: l,
                    validators: e7,
                    subActions: () => [ta]
                });

            function te(e) {
                return (t, o) => {
                    var n;
                    let i = null == (n = o.pageContext) || null == (n = n.spaceStore) ? void 0 : n.getSpaceId(),
                        {
                            serverCommitResult: r,
                            transactionId: s
                        } = (0, a(377796).createAndCommit)({
                            userAction: "actionRegistry.createAlignmentFormatAction",
                            environment: o.environment,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            canUndo: !0,
                            perform: t => {
                                if (o.blocks && o.blocks.length > 0)
                                    for (let a of o.blocks)(0, f().T)({
                                        environment: o.environment,
                                        store: a,
                                        alignment: e,
                                        transaction: t
                                    })
                            }
                        });
                    return t.setMetadata({
                        transactionId: s
                    }), r.then(t)
                }
            }
            let tt = (0, a(109939).YK)({
                    leftAlign: {
                        id: "action.alignment.left.name",
                        defaultMessage: "Left"
                    },
                    centerAlign: {
                        id: "action.alignment.center.name",
                        defaultMessage: "Center"
                    },
                    rightAlign: {
                        id: "action.alignment.right.name",
                        defaultMessage: "Right"
                    }
                }),
                ta = (0, a(233319).gy)({
                    key: "alignment format actions",
                    title: W.alignmentName,
                    actions: [(0, a(233319).Ls)({
                        key: "alignment format left",
                        displayName: tt.leftAlign,
                        analyticsName: "Align left",
                        validators: e7,
                        closeParentMenu: !0,
                        svg: l,
                        track: {
                            actionName: "set_alignment"
                        },
                        action: te("left")
                    }), (0, a(233319).Ls)({
                        key: "alignment format center",
                        displayName: tt.centerAlign,
                        analyticsName: "Align center",
                        validators: e7,
                        closeParentMenu: !0,
                        svg: r,
                        track: {
                            actionName: "set_alignment"
                        },
                        action: te("center")
                    }), (0, a(233319).Ls)({
                        key: "alignment format right",
                        displayName: tt.rightAlign,
                        analyticsName: "Align right",
                        validators: e7,
                        closeParentMenu: !0,
                        svg: d,
                        track: {
                            actionName: "set_alignment"
                        },
                        action: te("right")
                    })]
                }),
                to = (0, a(233319).Ls)({
                    key: "edit image",
                    displayName: W.cropImage,
                    analyticsName: W.cropImage.defaultMessage,
                    svg: p,
                    validators: [a(998256).p, function(e) {
                        let t = e.blocks.at(0);
                        return !!((null == t ? void 0 : t.isType("image")) && (0, a(884940).AS)(t.getOriginalImageSource()))
                    }, a(158213).I, (0, a(572251).A)(a(99378).v)],
                    closeParentMenu: !0,
                    action: ({
                        blocks: e,
                        environment: t
                    }) => {
                        let o = e[0],
                            n = o.getOriginalImageSource();
                        n && a(823304).A.openModal({
                            blockStore: o,
                            originalSource: n
                        })
                    },
                    disabled: () => !a(205885).A.state.online,
                    renderTooltip: () => a(962299).A.formatMessage(a(233319).AY.unavailableOfflineTooltip),
                    disableTooltip: () => a(205885).A.state.online
                }),
                tn = [G, ec, el, eg, ep, ef, ew, eI, a(612678).Rw, x, S, eF, Y, X],
                ti = [en, et, eo, a(28653).pG, to, e4, a(93078).N, a(93078).S, a(28653).R5, a(887329).i, Z],
                tr = [ex, ey, a(7316).U, ev],
                ts = [a(621792).Zm, a(621792).Lc],
                tl = [a(993581).c5],
                tc = (0, a(233319).Fw)({
                    key: "present from here",
                    displayName: W.presentFromHere,
                    analyticsName: W.presentFromHere.defaultMessage,
                    svg: a(59041).C,
                    shortcuts: ["presentPage"],
                    validators: [() => (0, a(149121).c_)(), a(158213).I, a(21848).v, (0, a(572251).A)(a(804043).o), (0, a(572251).A)(_("divider")), e => e.blocks.every(e => !e.isEmptyEditableBlock())],
                    closeParentMenu: !0,
                    badge: (0, n.jsx)(a(18274).A, {}),
                    lazyDependencyKeys: ["pagePresentationActions"],
                    action: e => {
                        let t = (0, a(968864).Y)("pagePresentationActions");
                        if (!t) return;
                        let o = e.blocks[0];
                        if (!o) return;
                        let n = (0, a(330870).a)();
                        n && n.isPageBlock() && t.enterPagePresentation({
                            environment: e.environment,
                            pageStore: n,
                            source: "block_menu",
                            startAtBlockId: o.id
                        })
                    }
                }),
                td = {
                    key: "block menu primary",
                    shouldShowMoreOptions: !0,
                    actions: [...tn, ...ti, eZ, e8, e5, ...tr, ea, eW, eH, eq, eX, eG, ...ts, eM, ...tl, eb, eh, ek, ee, es, er, ei, a(7316).H, eu, em, eD]
                },
                tu = {
                    key: "block menu navigation",
                    actions: [Q, ...a(612256).YO]
                },
                tm = (0, a(233319).Ls)({
                    key: "move page to trash block menu",
                    displayName: a(233319).AY.moveToTrashName,
                    analyticsName: a(233319).AY.moveToTrashName.defaultMessage,
                    svg: a(968411).trashIcon,
                    isRed: !0,
                    validators: [(0, a(515914).or)([a(517506).p, a(533301).K]), a(972831).Sv, (0, a(572251).A)(a(648620).x), (0, a(572251).A)((0, a(686412).X)(a(955630).xd.externalObjectInstancePage)), (0, a(572251).A)(a(877340).P), a(397620).z, (0, a(572251).A)(a(804043).o), (0, a(572251).A)(a(142910).P), (0, a(572251).A)(a(15292).Z)],
                    closeParentMenu: !0,
                    track: {
                        actionName: "move_to_trash"
                    },
                    render: (e, t) => {
                        let o = (0, a(13042).d)(t.blocks.at(0));
                        return (0, n.jsx)(a(860287).A, { ...e,
                            title: (0, n.jsx)(a(109939).sA, { ...a(233319).AY.moveToTrashName
                            }),
                            svg: a(968411).trashIcon,
                            isRed: !0,
                            disabled: o,
                            disabledFeedback: o,
                            tooltipText: o ? (0, n.jsx)(a(109939).sA, { ...a(233319).AY.cannotDeleteBlockTooltip
                            }) : void 0
                        })
                    },
                    action: async (e, {
                        blocks: t,
                        environment: o
                    }, n) => {
                        await (0, a(660262).A)({
                            environment: o,
                            blocks: t,
                            shouldCheckSuggestEdit: !1,
                            callback: e
                        })
                    }
                }),
                tg = {
                    key: "block menu manage",
                    actions: [$, a(986758).k, a(986758).o, J, a(467366).As, a(467366).nK, a(47131).tw, a(725232).A, a(725232).V, tm, a(479131).Gx, a(756952).$]
                },
                tp = {
                    key: "block menu presentation",
                    actions: [tc]
                };

            function tf() {
                return [a(46428).LQ, td, tu, tg, {
                    key: "block menu comment",
                    actions: [a(28653).Im, (0, a(964049).F)("block_action_menu")]
                }, tp, {
                    key: "block menu completion",
                    actions: [a(36741).uK, (0, a(36741).KV)()]
                }]
            }
            let tv = (0, a(35370).u)({
                    key: "open in (group)",
                    svg: a(684668).arrowDiagonalUpRightIcon,
                    displayName: W.openIn,
                    analyticsName: W.openIn.defaultMessage,
                    validators: [a(21848).v, (0, a(572251).A)(a(803254).F), a(612256).kf],
                    subActions: () => [{
                        key: 0,
                        title: void 0,
                        render: e => (0, n.jsx)(a(844565).A, { ...e
                        }),
                        actions: a(612256).Wq
                    }]
                }),
                ty = {
                    key: "collection menu primary",
                    actions: [ex, eT, eF, eu]
                },
                tb = {
                    key: "collection menu secondary",
                    actions: [tv, a(28653).Im]
                },
                th = {
                    key: "collection menu manage",
                    actions: [a(986758).o, J, a(467366).As, a(47131).tw, a(725232).A, a(725232).V, a(479131).UK, a(631821).q]
                },
                tk = [ty, {
                    key: "card customization section",
                    title: void 0,
                    actions: [eE, eU]
                }, tb, th],
                tS = [ty, tu, th],
                tA = {
                    key: "library hover menu primary",
                    actions: [ex, eT, q, eF, a(7316).U]
                },
                tM = {
                    key: "library menu navigation",
                    actions: [a(612256).Sr, a(612256).EC]
                },
                tw = {
                    key: "library menu manage",
                    actions: [a(986758).o, J, a(47131).tw, a(725232).A, a(725232).V, a(479131).UK]
                },
                tI = [tA, tM, tw],
                tN = [{
                    key: "library bulk actions toolbar menu primary",
                    actions: [ex, eT, eF, a(7316).U]
                }, tM, tw];

            function tC(e) {
                return e.blocks.some(e => e.getAssociatedCollectionStore())
            }
        }
    }
]);