"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [67252], {
        2009: (e, t, o) => {
            o.d(t, {
                w: () => n
            });
            var a = () => o(546605);
            class i extends a().Store {
                getInitialState() {
                    return {
                        asyncModals: []
                    }
                }
            }
            let n = new i
        },
        56968: (e, t, o) => {
            o.d(t, {
                B: () => a
            });

            function a(e) {
                if ("editing" === o(358377).default.state.mode) return function(e, t, a) {
                    let i = o(247438).kJl(e),
                        n = (0, o(1890).x)(i, t, a);
                    for (let e of i) {
                        let t = n[e];
                        if (t) return t
                    }
                }(e, o(358377).default.state.multiSelection, o(358377).default.state.forceExtendAnnotations)
            }
        },
        127373: (e, t, o) => {
            o.r(t), o.d(t, {
                clipboardMessages: () => a
            });
            let a = (0, o(109939).YK)({
                copiedQnAMessageToClipboard: {
                    id: "action.copiedQnAMessageToClipboard",
                    defaultMessage: "Copied response to clipboard"
                },
                copiedHumanMessageToClipboard: {
                    id: "action.copiedHumanMessageToClipboard",
                    defaultMessage: "Copied your message to clipboard"
                },
                copiedEmailToClipboard: {
                    id: "action.copiedEmailToClipboard.snackBarMessage",
                    defaultMessage: "Copied email to clipboard"
                },
                copiedUserIdToClipboard: {
                    id: "action.copiedUserIdToClipboard.snackBarMessage",
                    defaultMessage: "Copied user ID to clipboard"
                },
                copiedLinkToClipboard: {
                    id: "action.copiedLinkToClipboard.snackBarMessage",
                    defaultMessage: "Copied link to clipboard"
                },
                copiedPageLinkToClipboard: {
                    id: "action.copiedPageLinkToClipboard.snackBarMessage",
                    defaultMessage: "Copied page link to clipboard"
                },
                copiedPageLinkToClipboardAndShare: {
                    id: "action.copiedPageLinkToClipboardAndShare.snackBarMessage",
                    defaultMessage: "Copied! This page is now public and ready to share"
                },
                copiedPageContentsToClipboard: {
                    id: "action.copiedPageContentsToClipboard.snackBarMessage",
                    defaultMessage: "Copied page contents"
                },
                copiedFormLinkToClipboard: {
                    id: "action.copiedFormLinkToClipboard.snackBarMessage",
                    defaultMessage: "Copied form link to clipboard"
                },
                copiedTeamHomeLinkToClipboard: {
                    id: "action.copiedTeamHomeLinkToClipboard.snackBarMessage",
                    defaultMessage: "Copied page link to clipboard"
                },
                copiedBlockLinkToClipboard: {
                    id: "action.copiedBlockLinkToClipboard.snackBarMessage",
                    defaultMessage: "Copied block link to clipboard"
                },
                copiedLinksToClipboard: {
                    id: "action.copiedLinksToClipboard.snackBarMessage",
                    defaultMessage: "Copied links to clipboard"
                },
                copiedPropertyToClipboard: {
                    id: "action.copiedPropertyToClipboard.snackBarMessage",
                    defaultMessage: "Copied property to clipboard"
                },
                copiedCodeToClipboard: {
                    id: "action.copiedCodeToClipboard.snackBarMessage",
                    defaultMessage: "Copied code to clipboard"
                },
                copiedTokenToClipboard: {
                    id: "action.copiedTokenToClipboard.snackBarMessage",
                    defaultMessage: "Copied token to clipboard"
                },
                copiedToClipboard: {
                    id: "action.copiedToClipboard.snackBarMessage",
                    defaultMessage: "Copied to clipboard"
                },
                copiedApiObjectToClipboard: {
                    id: "action.copiedApiObjectToClipboard.snackBarMessage",
                    defaultMessage: "Copied API object to clipboard"
                },
                copiedImageToClipboard: {
                    id: "action.copiedImageToClipboard.snackBarMessage",
                    defaultMessage: "Copied image to clipboard"
                },
                copyingImage: {
                    id: "action.copyingImage.snackBarMessage",
                    defaultMessage: "Copying…"
                },
                copyImageError: {
                    id: "action.copyImageError.snackBarMessage",
                    defaultMessage: "Failed to copy image to clipboard"
                },
                copiedPageToClipboard: {
                    id: "action.copiedPageToClipboard.snackBarMessage",
                    defaultMessage: "Copied page to clipboard"
                },
                clipboardAccessDenied: {
                    id: "action.clipboardAccessDenied.snackBarMessage",
                    defaultMessage: "Clipboard access denied. Please check your browser permissions."
                },
                copyPageContentsError: {
                    id: "action.copyPageContentsError.snackBarMessage",
                    defaultMessage: "Could not copy page contents."
                }
            })
        },
        181168: (e, t, o) => {
            o.d(t, {
                A: () => n
            });
            var a = () => o(546605);
            class i extends a().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let n = new i
        },
        280996: (e, t, o) => {
            o.d(t, {
                b: () => n,
                T: () => r()
            }), o(581454);
            var a = o(296540),
                i = o(474848);
            let n = a.memo(function(e) {
                let {
                    store: t = o(2009).w
                } = e, n = (0, o(682985).K8)(() => t.state.asyncModals, [t]);
                return (0, i.jsx)(i.Fragment, {
                    children: n.map(e => {
                        let {
                            id: t,
                            internalRenderModal: o,
                            isOpen: n
                        } = e, r = o(n);
                        return (0, i.jsx)(a.Fragment, {
                            children: r
                        }, t)
                    })
                })
            });
            var r = () => o(796123)
        },
        392252: (e, t, o) => {
            o.d(t, {
                A: () => n
            });
            var a = () => o(546605);
            class i extends a().Store {
                getInitialState() {
                    return {
                        active: !1,
                        stringValue: "",
                        manualCopyMessage: void 0,
                        manualCopyMessageValues: void 0
                    }
                }
            }
            let n = new i
        },
        766970: (e, t, o) => {
            o.r(t), o.d(t, {
                iconDefinition: () => a,
                xMarkFillIcon: () => i
            }), o(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                i = (0, o(104509).wt)("xMarkFill", a, "fill")
        },
        796123: (e, t, o) => {
            o.r(t), o.d(t, {
                showAsyncModal: () => i,
                showAsyncModalComponent: () => n,
                testOnly: () => m
            }), o(898992), o(354520), o(672577), o(581454);
            var a = o(296540);

            function i(e, t = o(2009).w) {
                return new Promise((o, a) => {
                    try {
                        let i = s({
                            renderModal: e,
                            promiseResolve: o,
                            promiseReject: a,
                            store: t
                        });
                        r({
                            asyncModal: i,
                            store: t
                        })
                    } catch (e) {
                        a(e)
                    }
                })
            }

            function n(e, t = o(2009).w) {
                return i(t => a.createElement(e, t), t)
            }

            function r(e) {
                let {
                    asyncModal: t,
                    store: a = o(2009).w
                } = e;
                a.update(e => ({
                    asyncModals: [...e.asyncModals, t]
                }))
            }

            function l(e) {
                let {
                    id: t,
                    promiseResolve: a,
                    store: i = o(2009).w
                } = e;
                return e => {
                    let o = p({
                        id: t,
                        store: i
                    });
                    null != o && o.isOpen && (u({
                        id: t,
                        store: i,
                        update: {
                            isOpen: !1
                        }
                    }), a(e))
                }
            }

            function d(e) {
                let {
                    id: t,
                    promiseResolve: a,
                    store: i = o(2009).w
                } = e;
                return () => {
                    let e = p({
                        id: t,
                        store: i
                    });
                    null != e && e.isOpen && (u({
                        id: t,
                        store: i,
                        update: {
                            isOpen: !1
                        }
                    }), a())
                }
            }

            function c(e) {
                let {
                    id: t,
                    store: a = o(2009).w
                } = e;
                return () => {
                    a.update(e => ({
                        asyncModals: e.asyncModals.filter(e => e.id !== t)
                    }))
                }
            }

            function s(e) {
                let {
                    renderModal: t,
                    promiseResolve: a,
                    promiseReject: i,
                    store: n = o(2009).w
                } = e, r = o(92513).JW(), s = c({
                    id: r,
                    store: n
                }), p = d({
                    id: r,
                    promiseResolve: a,
                    store: n
                }), u = l({
                    id: r,
                    promiseResolve: a,
                    store: n
                });
                return {
                    id: r,
                    internalRenderModal: e => {
                        try {
                            return t({
                                isOpen: e,
                                onClosed: s,
                                onDismiss: p,
                                resolve: u
                            })
                        } catch (e) {
                            throw i(e), e
                        }
                    },
                    isOpen: !0
                }
            }

            function p(e) {
                let {
                    id: t,
                    store: a = o(2009).w
                } = e;
                return a.state.asyncModals.find(e => e.id === t)
            }

            function u(e) {
                let {
                    id: t,
                    update: a,
                    store: i = o(2009).w
                } = e;
                i.update(e => ({
                    asyncModals: e.asyncModals.map(e => e.id !== t ? e : { ...e,
                        ...a
                    })
                }))
            }
            let m = {
                addAsyncModal: r,
                createAsyncModal: s,
                createOnClosed: c,
                createOnDismiss: d,
                createResolve: l,
                getAsyncModal: p,
                updateAsyncModal: u
            }
        },
        991108: (e, t, o) => {
            function a(e) {
                let t = (0, o(746473).zH)(e);
                return t instanceof o(970831).B && void 0 !== t.getAssociatedCollectionStore()
            }

            function i(e) {
                let {
                    environment: t,
                    textStore: i,
                    url: n,
                    oldTextValue: r,
                    urlSelection: l
                } = e;
                if (o(764615).Ay.state.open || o(994872).A.state.open || o(498368).Ay.state.open || o(385125).b.state.open || a(i) && o(939438).Vp({
                        url: n,
                        baseUrl: o(986939).A.domainBaseUrl,
                        publicDomainName: o(986939).A.publicDomainName
                    })) return;
                let d = o(239134).get();
                if (!d) return;
                let c = o(239134).getRect(d);
                if (!c) return;
                let s = () => {
                        o(385125).b.setState({
                            open: !0,
                            willOpen: !1,
                            loading: !1,
                            textStore: i,
                            url: n,
                            oldTextValue: r,
                            urlSelection: l,
                            selectionRect: c
                        }), o(595053).wQ(t, {
                            url: n
                        })
                    },
                    p = o(218744).default.checkGate({
                        gateName: "mobile_embed_menu_cursor_fix"
                    });
                !t.device.isTablet && p ? (o(385125).b.setState({
                    open: !1,
                    willOpen: !0,
                    loading: !1
                }), setTimeout(s, 0)) : s()
            }
            async function n(e) {
                let {
                    environment: t,
                    spaceId: a
                } = e, i = o(385125).b.state;
                if (i.open) {
                    let {
                        url: r,
                        textStore: l,
                        oldTextValue: d
                    } = i, c = o(584265).default.state.stores, s = c[0];
                    if (!s) return;
                    let p = (0, o(728601).Zv)(r) || (0, o(728601).ku)(r, o(986939).A.secureFileConfig.hostname),
                        u = p ? (0, o(728601).xm)(p) : r,
                        m = (0, o(132702).parseRoute)({
                            url: u,
                            baseUrl: o(986939).A.domainBaseUrl,
                            publicDomainName: o(986939).A.publicDomainName,
                            isMobile: o(986939).A.isMobile,
                            protocol: o(986939).A.protocol,
                            currentUrl: window.location.href,
                            requestedOnAlternateDomain: (0, o(700473).wasRequestedOnAlternateDomain)()
                        });
                    if ("agent" === m.name) {
                        if ("mention-page" === e.type) {
                            let e = s.getSpaceStore();
                            if (!e) return;
                            let a = o(360851).N.createChildStore(e, {
                                table: o(832375).C0E,
                                id: m.workflowId,
                                spaceId: e.id
                            });
                            await a.load();
                            let n = a.getData(),
                                r = null == n ? void 0 : n.runtime_actor_pointer;
                            if (r && r.table === o(832375).GPl) {
                                let e = r.id;
                                await (0, o(377796).createAndCommitAsync)({
                                    environment: t,
                                    userAction: "embedMenuActions.mentionAgent",
                                    waitForServerCommit: !1,
                                    perform: a => (o(41403).Gf({
                                        environment: t,
                                        editorMode: "default",
                                        store: l,
                                        selection: i.urlSelection,
                                        annotation: o(247438).Vb6(e),
                                        transaction: a,
                                        analyticsFrom: "block"
                                    }), Promise.resolve())
                                })
                            }
                            return
                        }
                        e.type === o(955630).xd.workflow && await (0, o(377796).createAndCommitAsync)({
                            environment: t,
                            userAction: "embedMenuActions.embedWorkflowChatInputBlock",
                            waitForServerCommit: !1,
                            perform: e => {
                                var i;
                                o(41403).R9({
                                    environment: t,
                                    store: l,
                                    value: d,
                                    transaction: e
                                });
                                let n = o(124937).Wv({
                                    environment: t,
                                    type: o(955630).xd.workflow,
                                    inMemoryRecordCache: s.inMemoryRecordCache,
                                    transaction: e,
                                    spaceId: 0 !== c.length ? c[c.length - 1].pointer.spaceId : null == (i = (0, o(385941).Z)()) ? void 0 : i.pointer.spaceId,
                                    format: {
                                        workflow_id: m.workflowId,
                                        workflow_block_display: "chat_input"
                                    }
                                });
                                return (0, o(210318).L)({
                                    environment: t,
                                    blocksToInsert: [n],
                                    target: c,
                                    transaction: e,
                                    replaceEmptyTextBlock: !0
                                }), o(374176).default.afterNextFlush(() => {
                                    (0, o(377796).createAndCommit)({
                                        userAction: "embedMenuActions.accept",
                                        environment: t,
                                        canUndo: !0,
                                        cellTarget: a ? {
                                            spaceWithId: a
                                        } : void 0,
                                        perform: e => {
                                            (0, o(5556).u)({
                                                blocks: c,
                                                transaction: e
                                            })
                                        }
                                    })
                                }), Promise.resolve()
                            }
                        });
                        return
                    }
                    if ((0, o(132702).Jx)(m)) await (0, o(377796).createAndCommitAsync)({
                        environment: t,
                        userAction: "embedMenuActions.embedPageAlias",
                        waitForServerCommit: !1,
                        perform: async n => {
                            let p;
                            if (o(41403).R9({
                                    environment: t,
                                    store: l,
                                    value: d,
                                    transaction: n
                                }), m.peekViewBlockId) {
                                let e = o(970831).B.createChildStore(l, {
                                    table: o(832375).evP,
                                    id: m.peekViewBlockId
                                });
                                await e.load(), e.isPageBlock() && (p = e)
                            }
                            if (!p && "page" === m.name && m.blockId && (p = o(970831).B.createChildStore(l, {
                                    table: o(832375).evP,
                                    id: m.blockId
                                })), p) {
                                let d = "page" === m.name ? m.scrollToBlockId : void 0,
                                    g = "page" === m.name ? m.collectionViewId : void 0;
                                if ("mention-page" === e.type) {
                                    let e = p.getRecordModel({
                                        id: p.id,
                                        table: o(832375).evP
                                    });
                                    o(41403).Gf({
                                        environment: t,
                                        editorMode: "default",
                                        store: l,
                                        selection: {
                                            startIndex: i.urlSelection.startIndex,
                                            endIndex: i.urlSelection.startIndex
                                        },
                                        annotation: o(247438).ld4(d ? ? p.id, null == e ? void 0 : e.space_id),
                                        transaction: n,
                                        analyticsFrom: "block"
                                    })
                                } else if ("create-transclusion" === e.type) {
                                    if (!d) return;
                                    o(997547).Ce({
                                        environment: t,
                                        blocks: o(584265).default.state.stores,
                                        copiedBlockIds: [d]
                                    })
                                } else if (p.isCollectionView()) {
                                    var u;
                                    let e = g ? o(547131).p.createChildStore(p, {
                                        table: o(832375).Gy1,
                                        id: g
                                    }) : void 0;
                                    if (await Promise.all([p.load(), e ? e.load() : void 0]), (null == e ? void 0 : e.getType()) === "dashboard") {
                                        let a = e.getDashboardLayoutStore();
                                        await (null == a ? void 0 : a.load());
                                        let i = e.getDashboardWidgetViewStores();
                                        await o(975162).lX(i, 10, e => e.load());
                                        let r = s.getRecordStoreUIParent();
                                        if (!(null != r && r.valueIs(o(823608)._))) return;
                                        let l = s.getSpaceId(),
                                            d = r.pointer.spaceId;
                                        if (d && l && d !== l) return;
                                        let c = o(124937).Wv({
                                            environment: t,
                                            type: o(955630).xd.collectionView,
                                            inMemoryRecordCache: s.inMemoryRecordCache,
                                            transaction: n,
                                            spaceId: d || l
                                        });
                                        if (!(0, o(855925).t)({
                                                environment: t,
                                                transaction: n,
                                                collectionViewStore: e,
                                                collectionViewBlockStore: c,
                                                intl: o(962299).A.getIntl(),
                                                copyNameExactly: !0
                                            })) return;
                                        o(579695).Br({
                                            parentStore: r,
                                            oldChildStore: s,
                                            newChildStore: c,
                                            transaction: n
                                        });
                                        return
                                    }
                                    let a = e ? e.getCollectionStore() : null == (u = p.getCollectionViewStores()) || null == (u = u[0]) ? void 0 : u.getCollectionStore();
                                    a && (await a.load(), o(605858).oT({
                                        environment: t,
                                        store: s,
                                        collectionStore: a,
                                        collectionViewStore: e,
                                        transaction: n
                                    }))
                                } else {
                                    let a = s.getParentBlockStore();
                                    if (a) {
                                        let i = o(3).s({
                                            environment: t,
                                            parentBlockStore: a,
                                            targetStore: p,
                                            transaction: n
                                        });
                                        (0, o(210318).L)({
                                            environment: t,
                                            blocksToInsert: [i],
                                            target: c,
                                            transaction: n,
                                            replaceEmptyTextBlock: !0
                                        }), "form" === e.type && (o(584265).default.reset(), o(595053).ol(t, {
                                            url: r,
                                            type: e.type,
                                            form_id: p.id,
                                            block_id: i.id
                                        }))
                                    }
                                }
                                o(374176).default.afterNextFlush(() => {
                                    (0, o(377796).createAndCommit)({
                                        userAction: "embedMenuActions.accept",
                                        environment: t,
                                        canUndo: !0,
                                        cellTarget: a ? {
                                            spaceWithId: a
                                        } : void 0,
                                        perform: e => {
                                            (0, o(5556).u)({
                                                blocks: c,
                                                transaction: e
                                            })
                                        }
                                    })
                                })
                            }
                        }
                    });
                    else if ("collection" === m.name) {
                        if ("mention-page" === e.type)(0, o(377796).createAndCommit)({
                            environment: t,
                            canUndo: !0,
                            userAction: "embedMenuActions.embedCollectionMention",
                            cellTarget: s.pointer.spaceId ? {
                                spaceWithId: s.pointer.spaceId
                            } : void 0,
                            perform: e => {
                                o(41403).R9({
                                    environment: t,
                                    store: l,
                                    value: d,
                                    transaction: e
                                });
                                let a = m.space && "id" in m.space ? m.space.id : void 0;
                                o(41403).Gf({
                                    environment: t,
                                    editorMode: "default",
                                    store: l,
                                    selection: {
                                        startIndex: i.urlSelection.startIndex,
                                        endIndex: i.urlSelection.startIndex
                                    },
                                    annotation: o(247438).ETy({
                                        collectionId: m.collectionId,
                                        spaceId: a,
                                        parentCvbId: m.parentBlockId
                                    }),
                                    transaction: e,
                                    analyticsFrom: "collection"
                                })
                            }
                        });
                        else if (e.type === o(955630).xd.collectionView) {
                            let e = m.space && "id" in m.space ? m.space.id : s.getSpaceId(),
                                a = o(356912).m.createChildStore(l, {
                                    table: o(832375).VlP,
                                    id: m.collectionId,
                                    spaceId: e
                                });
                            await a.load(), a.isDefined() && (0, o(377796).createAndCommit)({
                                environment: t,
                                canUndo: !0,
                                userAction: "embedMenuActions.embedCollectionLinkedView",
                                cellTarget: e ? {
                                    spaceWithId: e
                                } : void 0,
                                perform: e => {
                                    o(41403).R9({
                                        environment: t,
                                        store: l,
                                        value: d,
                                        transaction: e
                                    }), o(605858).oT({
                                        environment: t,
                                        store: s,
                                        collectionStore: a,
                                        collectionViewStore: void 0,
                                        transaction: e
                                    })
                                }
                            })
                        }
                    } else if (e.type === o(955630).xd.bookmark || "teamsInvite" === m.name) {
                        let {
                            performResult: e
                        } = (0, o(377796).createAndCommit)({
                            userAction: "embedMenuActions.insertedBlocks",
                            environment: t,
                            canUndo: !0,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            perform: e => {
                                var a;
                                o(41403).R9({
                                    environment: t,
                                    store: l,
                                    value: d,
                                    transaction: e
                                });
                                let i = o(124937).Wv({
                                        environment: t,
                                        type: o(955630).xd.bookmark,
                                        inMemoryRecordCache: s.inMemoryRecordCache,
                                        transaction: e,
                                        spaceId: 0 !== c.length ? c[c.length - 1].pointer.spaceId : null == (a = (0, o(385941).Z)()) ? void 0 : a.pointer.spaceId
                                    }),
                                    n = (0, o(210318).L)({
                                        environment: t,
                                        blocksToInsert: [i],
                                        target: c,
                                        transaction: e,
                                        replaceEmptyTextBlock: !0
                                    });
                                return (0, o(715144).z)({
                                    stores: [i],
                                    transaction: e,
                                    update: {
                                        bookmark_loading_ttl: Date.now()
                                    }
                                }), n
                            }
                        });
                        o(374176).default.afterNextFlush(() => {
                            (0, o(377796).createAndCommit)({
                                userAction: "embedMenuActions.accept",
                                environment: t,
                                canUndo: !0,
                                cellTarget: a ? {
                                    spaceWithId: a
                                } : void 0,
                                perform: e => {
                                    (0, o(5556).u)({
                                        blocks: c,
                                        transaction: e
                                    })
                                }
                            })
                        });
                        let i = e[0];
                        "teamsInvite" === m.name ? await o(673477).Ht({
                            environment: t,
                            store: i,
                            url: r,
                            teamId: m.teamId
                        }) : await o(673477).Ht({
                            environment: t,
                            store: i,
                            url: r
                        })
                    } else if (e.type === o(955630).xd.drive) {
                        let {
                            performResult: e
                        } = (0, o(377796).createAndCommit)({
                            userAction: "embedMenuActions.insertedBlocks",
                            environment: t,
                            canUndo: !0,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            perform: e => {
                                var a;
                                o(41403).R9({
                                    environment: t,
                                    store: l,
                                    value: d,
                                    transaction: e
                                });
                                let i = o(124937).Wv({
                                    environment: t,
                                    type: o(955630).xd.drive,
                                    inMemoryRecordCache: s.inMemoryRecordCache,
                                    transaction: e,
                                    spaceId: 0 !== c.length ? c[c.length - 1].pointer.spaceId : null == (a = (0, o(385941).Z)()) ? void 0 : a.pointer.spaceId
                                });
                                return (0, o(210318).L)({
                                    environment: t,
                                    blocksToInsert: [i],
                                    target: c,
                                    transaction: e,
                                    replaceEmptyTextBlock: !0
                                })
                            }
                        });
                        o(374176).default.afterNextFlush(() => {
                            (0, o(377796).createAndCommit)({
                                userAction: "embedMenuActions.accept",
                                environment: t,
                                canUndo: !0,
                                cellTarget: a ? {
                                    spaceWithId: a
                                } : void 0,
                                perform: e => {
                                    (0, o(5556).u)({
                                        blocks: c,
                                        transaction: e
                                    })
                                }
                            })
                        });
                        let i = e[0];
                        o(374176).default.afterNextFlush(() => {
                            let e = o(496704).K.find(e => e.getBlockStore() === i);
                            e && e.initializeGoogleDriveBlockFromUrl(r)
                        })
                    } else if ("link-mention" === e.type) {
                        o(385125).b.setState({
                            open: !1,
                            willOpen: !1,
                            loading: !0
                        });
                        let e = await t.api.callApi({
                            eventName: "getDataForLinkMention",
                            environment: t,
                            data: {
                                url: u,
                                spaceId: a,
                                source: "link_mention_activate"
                            }
                        });
                        if ("success" === e.type) {
                            let d = e.data;
                            if ("error" in d) {
                                let e = o(247438).wmz(o(247438).gru({
                                    href: r,
                                    title: r.includes("mailto:") ? r : new URL(r).hostname
                                }));
                                (0, o(377796).createAndCommit)({
                                    environment: t,
                                    userAction: "embedMenuActions.mention",
                                    canUndo: !0,
                                    cellTarget: a ? {
                                        spaceWithId: a
                                    } : void 0,
                                    perform: a => {
                                        o(41403).jQ({
                                            environment: t,
                                            store: l,
                                            selection: {
                                                startIndex: i.urlSelection.startIndex,
                                                endIndex: i.urlSelection.endIndex
                                            },
                                            transaction: a
                                        }), o(41403).yr({
                                            environment: t,
                                            store: l,
                                            tokens: [e],
                                            index: i.urlSelection.startIndex,
                                            transaction: a
                                        })
                                    }
                                }), o(595053).vt(t, {
                                    domain: r.includes("mailto:") ? r : new URL(r).hostname
                                })
                            } else {
                                var n;
                                let {
                                    title: e,
                                    description: c,
                                    author_name: s,
                                    provider_name: p,
                                    images: u,
                                    favicon_url: m,
                                    iframe: g,
                                    height: f,
                                    padding: b,
                                    padding_top: k
                                } = d, C = o(247438).wmz(o(247438).gru({
                                    href: r,
                                    title: e || p || new URL(r).hostname,
                                    description: c,
                                    link_author: s,
                                    link_provider: p,
                                    thumbnail_url: u && u.length > 0 ? null == (n = u[0]) ? void 0 : n.url : void 0,
                                    icon_url: m,
                                    iframe_url: r.includes("nytimes.com") ? void 0 : g,
                                    height: f,
                                    padding: b,
                                    padding_top: k
                                }));
                                (0, o(377796).createAndCommit)({
                                    environment: t,
                                    userAction: "embedMenuActions.mention",
                                    canUndo: !0,
                                    cellTarget: a ? {
                                        spaceWithId: a
                                    } : void 0,
                                    perform: e => {
                                        o(41403).jQ({
                                            environment: t,
                                            store: l,
                                            selection: {
                                                startIndex: i.urlSelection.startIndex,
                                                endIndex: i.urlSelection.endIndex
                                            },
                                            transaction: e
                                        }), o(41403).yr({
                                            environment: t,
                                            store: l,
                                            tokens: [C],
                                            index: i.urlSelection.startIndex,
                                            transaction: e
                                        })
                                    }
                                })
                            }
                        } else {
                            let e = o(247438).wmz(o(247438).gru({
                                href: r,
                                title: r.includes("mailto:") ? r : new URL(r).hostname
                            }));
                            (0, o(377796).createAndCommit)({
                                environment: t,
                                userAction: "embedMenuActions.mention",
                                canUndo: !0,
                                cellTarget: a ? {
                                    spaceWithId: a
                                } : void 0,
                                perform: a => {
                                    o(41403).jQ({
                                        environment: t,
                                        store: l,
                                        selection: {
                                            startIndex: i.urlSelection.startIndex,
                                            endIndex: i.urlSelection.endIndex
                                        },
                                        transaction: a
                                    }), o(41403).yr({
                                        environment: t,
                                        store: l,
                                        tokens: [e],
                                        index: i.urlSelection.startIndex,
                                        transaction: a
                                    })
                                }
                            }), o(595053).vt(t, {
                                domain: r.includes("mailto:") ? r : new URL(r).hostname
                            })
                        }
                    } else {
                        let {
                            performResult: i
                        } = (0, o(377796).createAndCommit)({
                            userAction: "embedMenuActions.insertedBlocks",
                            environment: t,
                            canUndo: !0,
                            cellTarget: a ? {
                                spaceWithId: a
                            } : void 0,
                            perform: e => {
                                var a;
                                o(41403).R9({
                                    environment: t,
                                    store: l,
                                    value: d,
                                    transaction: e
                                });
                                let i = o(124937).Wv({
                                    environment: t,
                                    type: o(955630).xd.copyIndicator,
                                    inMemoryRecordCache: s.inMemoryRecordCache,
                                    transaction: e,
                                    spaceId: 0 !== c.length ? c[c.length - 1].pointer.spaceId : null == (a = (0, o(385941).Z)()) ? void 0 : a.pointer.spaceId
                                });
                                return (0, o(210318).L)({
                                    environment: t,
                                    blocksToInsert: [i],
                                    target: c,
                                    transaction: e,
                                    replaceEmptyTextBlock: !0
                                })
                            }
                        });
                        o(374176).default.afterNextFlush(() => {
                            (0, o(377796).createAndCommit)({
                                userAction: "embedMenuActions.accept",
                                environment: t,
                                canUndo: !0,
                                cellTarget: a ? {
                                    spaceWithId: a
                                } : void 0,
                                perform: e => {
                                    (0, o(5556).u)({
                                        blocks: c,
                                        transaction: e
                                    })
                                }
                            })
                        });
                        let n = i[0];
                        o(860838).DB(u).then(i => {
                            (0, o(377796).createAndCommit)({
                                environment: t,
                                userAction: "embedMenuActions.accept.insertExtractedData",
                                canUndo: !0,
                                cellTarget: a ? {
                                    spaceWithId: a
                                } : void 0,
                                perform: t => {
                                    let a;
                                    e.type && "mention-page" !== e.type && "create-transclusion" !== e.type && "link-mention" !== e.type && "jira-sync" !== e.type ? a = e.type : (a = o(955630).xd.embed, null != i && i.media && ("photo" === i.media.type ? a = o(955630).xd.image : "video" === i.media.type && (a = o(955630).xd.video))), o(831983).pd({
                                        environment: e.environment,
                                        block: n,
                                        blockType: a,
                                        transaction: t
                                    })
                                }
                            }), o(374176).default.afterNextFlush(() => {
                                let e = o(496704).K.find(e => e.getBlockStore() === n && "function" == typeof e.embed);
                                e && e.embed({
                                    originUrl: u,
                                    pastedSecureFile: p
                                })
                            })
                        })
                    }
                }(0, o(385125).V)()
            }
            o.d(t, {
                Ju: () => n,
                en: () => a,
                p6: () => i
            }), o(898992), o(672577), o(814603), o(147566), o(198721)
        },
        997547: (e, t, o) => {
            o.d(t, {
                Ce: () => b,
                GV: () => f,
                T_: () => d,
                Tw: () => l,
                VN: () => c,
                Xw: () => g,
                ei: () => p,
                gi: () => r,
                h4: () => i,
                h8: () => u
            }), o(16280), o(18107), o(967357), o(898992), o(823215), o(581454), o(737550);
            var a = () => o(579695);

            function i(e) {
                let t = e[0],
                    a = e.at(-1),
                    i = null == t ? void 0 : t.getRecordStoreUIRoot();
                if (i && i instanceof o(970831).B && a) {
                    let t = (0, o(730994).K3)(i);
                    return {
                        type: "blockSelection",
                        stores: e,
                        currentPage: i,
                        origin: a,
                        scrollerStore: t
                    }
                }
            }
            let n = (0, o(109939).YK)({
                linkToPageCreated: {
                    id: "blockPasteMenu.a11y.linkToPageCreated",
                    defaultMessage: "Link to page created"
                },
                syncedBlockCreated: {
                    id: "blockPasteMenu.a11y.syncedBlockCreated",
                    defaultMessage: "Synced block created"
                }
            });

            function r(e) {
                let {
                    blocks: t,
                    copiedStores: a,
                    pageSource: i
                } = e, n = t.at(-1);
                if (!n) return;
                let r = o(240414).T.getRectFromStore(n);
                r && (o(181168).A.setState({
                    open: !0,
                    type: "blocks",
                    blocks: t,
                    rect: r,
                    copiedStores: a,
                    pageSource: i
                }), (0, o(104310).u)({
                    event: {
                        eventName: "block_paste_menu_opened",
                        eventProperties: {
                            type: "blocks"
                        }
                    }
                }))
            }

            function l(e) {
                if (!o(886556).z.areAiActionsOnPasteEnabled()) return !1;
                let {
                    blocks: t,
                    environment: a
                } = e;
                if (a.device.isMobileNative || !t.some(e => e.isAiFollowupEligibleBlock()) || (0, o(781407).R)(t, !0).length < 250) return !1;
                let i = t.at(0);
                if (!i) return !1;
                let n = o(240414).T.getRectFromStore(i);
                return !!n && (o(181168).A.setState({
                    open: !0,
                    type: "ai_actions",
                    blocks: t,
                    rect: n,
                    selectionStateSnapshot: o(584265).default.state,
                    textSelectionStateSnapshot: o(358377).default.state
                }), (0, o(104310).u)({
                    event: {
                        eventName: "block_paste_menu_opened",
                        eventProperties: {
                            type: "ai_actions"
                        }
                    }
                }), !0)
            }

            function d(e) {
                let {
                    blocks: t,
                    copiedLinks: a,
                    rootStore: i
                } = e;
                if (t.length !== a.length || !t.every(s) || a.some(e => e.blockId === i.id)) return !1;
                let n = t.at(-1);
                if (!n) return !1;
                let r = o(240414).T.getRectFromStore(n);
                return !!r && (o(181168).A.setState({
                    open: !0,
                    type: "links",
                    blocks: t,
                    rect: r,
                    copiedLinks: a
                }), (0, o(104310).u)({
                    event: {
                        eventName: "block_paste_menu_opened",
                        eventProperties: {
                            type: "links"
                        }
                    }
                }), !0)
            }

            function c() {
                o(181168).A.state.open && (0, o(104310).u)({
                    event: {
                        eventName: "block_paste_menu_closed",
                        eventProperties: {
                            type: o(181168).A.state.type
                        }
                    }
                }), o(181168).A.setState({
                    open: !1
                })
            }

            function s(e) {
                return !(e.isType(o(955630).xd.copyIndicator) || e.isTransclusionType() || e.isInsideCollection())
            }

            function p(e) {
                let {
                    blocks: t,
                    pageSource: a,
                    wasContiguousSelection: i,
                    action: n,
                    rootStore: r,
                    copiedStores: l
                } = e, d = o(708929).Uv.getMode(t[0]);
                return "copy" === n && i && !(0, o(496282).Z2)(a, r.pointer) && (u(e) || f({
                    spaceId: r.getSpaceId(),
                    ...e
                })) && t.every(s) && !l.every(e => e.getType() === o(955630).xd.externalObjectInstance) && "suggest" !== d
            }

            function u(e) {
                let {
                    blocks: t
                } = e;
                return 1 === t.length
            }

            function m(e) {
                let {
                    transaction: t,
                    blockUrl: a,
                    spaceId: i,
                    environment: n
                } = e, r = o(124937).Wv({
                    environment: n,
                    type: o(955630).xd.text,
                    inMemoryRecordCache: n.defaultRecordCache.inMemoryRecordCache,
                    transaction: t,
                    spaceId: i
                }), l = (0, o(247438).xV3)(a), d = [(0, o(247438).Ey_)(l, [(0, o(247438).Sez)(l)], {
                    skipSanitization: !0
                })];
                return o(41403).R9({
                    environment: n,
                    store: r.getBlockTitleStore(),
                    value: d,
                    transaction: t
                }), r
            }
            async function g(e) {
                let t, {
                        environment: a,
                        blocks: i,
                        source: r
                    } = e,
                    l = i[0];
                if (!l) return;
                let d = l.getParentBlockStore();
                if (!d) return;
                let s = l.getContentStore();
                await (0, o(377796).createAndCommitAsync)({
                    environment: a,
                    userAction: "blockPasteMenuActions.acceptLinkToPage",
                    waitForServerCommit: !0,
                    perform: async e => {
                        if ("blocks" === r.type) {
                            let {
                                copiedStores: i,
                                pageSource: n
                            } = r, c = i[0];
                            if (!l || !c) return;
                            let p = o(970831).B.createChildStore(s, {
                                table: o(832375).evP,
                                id: c.id
                            });
                            p.isNavigableBlock() ? (await p.load(), t = [o(3).s({
                                environment: a,
                                parentBlockStore: d,
                                targetStore: p,
                                transaction: e
                            })]) : t = [m({
                                blockUrl: (0, o(234310).A)({
                                    pageId: n.id,
                                    scrollToBlockId: p.id,
                                    baseUrl: o(986939).A.domainBaseUrl,
                                    pageVisitSource: o(254656).y8.LinkInPage,
                                    addPagePrefix: (0, o(700473).wasRequestedOnAlternateDomain)()
                                }),
                                spaceId: l.getSpaceId(),
                                environment: a,
                                transaction: e
                            })]
                        } else if ("links" === r.type) {
                            let {
                                copiedLinks: n
                            } = r;
                            if (n.length !== i.length) return;
                            t = (0, o(381453).oE)(await Promise.all(n.map(async t => {
                                let i = t.scrollToBlockId || t.peekViewBlockId || t.blockId;
                                if (i) {
                                    let n = o(970831).B.createChildStore(s, {
                                        table: o(832375).evP,
                                        id: i
                                    });
                                    if (await n.load(), n.isNavigableBlock()) return o(3).s({
                                        environment: a,
                                        parentBlockStore: d,
                                        targetStore: n,
                                        transaction: e
                                    }); {
                                        let i = t.peekViewBlockId || t.blockId;
                                        if (i) {
                                            let t = o(970831).B.createChildStore(s, {
                                                table: o(832375).evP,
                                                id: i
                                            });
                                            return await t.load(), m({
                                                blockUrl: (0, o(234310).A)({
                                                    pageId: i,
                                                    pageModel: t.getModel(),
                                                    scrollToBlockId: n.id,
                                                    baseUrl: o(986939).A.domainBaseUrl,
                                                    pageVisitSource: o(254656).y8.LinkInPage,
                                                    addPagePrefix: (0, o(700473).wasRequestedOnAlternateDomain)()
                                                }),
                                                spaceId: l.getSpaceId(),
                                                environment: a,
                                                transaction: e
                                            })
                                        }
                                    }
                                }
                            })))
                        } else(0, o(722371).HB)(r);
                        let n = (0, o(210318).L)({
                            environment: a,
                            blocksToInsert: t,
                            target: i,
                            replaceEmptyTextBlock: !0,
                            transaction: e
                        });
                        (0, o(596740).Z)({
                            environment: a,
                            blocks: i,
                            transaction: e
                        }), (0, o(854924).t)({
                            environment: a,
                            stores: n
                        }), c()
                    }
                }), (0, o(663123).l)(o(962299).A.formatMessage(n.linkToPageCreated))
            }

            function f(e) {
                let {
                    spaceId: t,
                    blocks: o,
                    copiedStores: a
                } = e;
                return o.length > 0 && !a.some(e => e.isInsideCollection()) && a.every(e => e.canEdit()) && a.every(e => e.getSpaceId() === t)
            }
            async function b(e) {
                let {
                    environment: t,
                    blocks: i,
                    copiedBlockIds: r,
                    removeBlocks: l
                } = e, d = await Promise.all(r.map(async e => {
                    let t = o(970831).B.createChildStore(i[0], {
                        table: o(832375).evP,
                        id: e
                    });
                    await t.load();
                    let a = t.getParentBlockStore();
                    if (!a) throw Error("Block has no parent.");
                    await a.load();
                    let n = a.getContentStore();
                    return {
                        store: o(970831).B.createChildStore(n, {
                            table: o(832375).evP,
                            id: e
                        }),
                        parentStore: a,
                        parentContentStore: n
                    }
                })), s = d[0];
                if (!s) return;
                let p = (0, o(385941).Z)();
                if (!p) return;
                let u = s.store.getSpaceId(),
                    {
                        serverCommitResult: m
                    } = (0, o(377796).createAndCommit)({
                        userAction: "blockPasteMenuActions.acceptCreateTransclusion",
                        environment: t,
                        cellTarget: u ? {
                            spaceWithId: u
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            let n;
                            if (s.store.getType() === o(955630).xd.transclusionContainer) n = s.store;
                            else if (s.store.getType() === o(955630).xd.transclusionReference) {
                                let e = s.store.getTransclusionReferenceTargetStore();
                                if (!e) throw Error("Could not find transclusion reference target");
                                n = e
                            } else if (s.parentStore.getType() === o(955630).xd.transclusionContainer) n = s.parentStore;
                            else {
                                let i = (n = o(124937).Wv({
                                    environment: t,
                                    type: o(955630).xd.transclusionContainer,
                                    inMemoryRecordCache: t.defaultRecordCache.inMemoryRecordCache,
                                    transaction: e,
                                    spaceId: s.store.pointer.spaceId
                                })).getContentStore();
                                for (let {
                                        store: t
                                    } of (a().Br({
                                        parentStore: s.parentContentStore,
                                        oldChildStore: s.store,
                                        newChildStore: n,
                                        transaction: e
                                    }), d)) a().NI({
                                    parentStore: i,
                                    childStore: t,
                                    transaction: e
                                })
                            }
                            let r = o(124937).Wv({
                                    environment: t,
                                    type: o(955630).xd.transclusionReference,
                                    format: {
                                        transclusion_reference_pointer: n.pointer
                                    },
                                    inMemoryRecordCache: t.defaultRecordCache.inMemoryRecordCache,
                                    transaction: e,
                                    spaceId: 0 !== i.length ? i[i.length - 1].pointer.spaceId : p.pointer.spaceId
                                }),
                                u = (0, o(210318).L)({
                                    environment: t,
                                    blocksToInsert: [r],
                                    target: i,
                                    transaction: e,
                                    replaceEmptyTextBlock: !0
                                });
                            (0, o(854924).t)({
                                environment: t,
                                stores: u
                            }), l && (0, o(596740).Z)({
                                environment: t,
                                blocks: i,
                                transaction: e
                            }), c()
                        }
                    });
                await m, (0, o(663123).l)(o(962299).A.formatMessage(n.syncedBlockCreated))
            }
        }
    }
]);