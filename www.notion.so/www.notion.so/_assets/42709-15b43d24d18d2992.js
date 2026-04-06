"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [42709], {
        139343: (e, t, a) => {
            a.d(t, {
                A: () => l
            });
            let l = new(a(593423)).A
        },
        151965: (e, t, a) => {
            a.r(t), a.d(t, {
                accept: () => d,
                close: () => n,
                loadAndDuplicatePageTemplate: () => s,
                openWithItem: () => r,
                previewItem: () => o,
                setTemplateVisited: () => c
            }), a(16280), a(581454);
            let l = "LastViewedTemplateId",
                i = (0, a(109939).YK)({
                    clientCopyError: {
                        defaultMessage: "Client copy could not be created.",
                        id: "spaceActions.createGettingStartedPage.copyNotCreated.error"
                    }
                });

            function r(e) {
                var t;
                let {
                    environment: i,
                    item: r,
                    createNewPage: o,
                    isPrivate: n,
                    disablePointerEvents: d,
                    isCheckout: s = !1
                } = e;
                (0, a(471e3).I)({
                    environment: i
                }), a(752085).A.setState({
                    open: !0,
                    item: r,
                    createNewPage: o,
                    isPrivate: n,
                    isLoading: !1,
                    disablePointerEvents: d,
                    isCheckout: s
                }), a(255482).K.set({
                    userId: i.currentUser.id,
                    key: l,
                    value: r.rootId
                }), t = {
                    template_id: (0, a(498348).dY)(r),
                    from: o ? "sidebar" : "newPage"
                }, (0, a(104310).u)({
                    event: {
                        eventName: "template_modal_open",
                        eventProperties: { ...t,
                            ...(0, a(403884).h)({
                                environment: i
                            })
                        }
                    }
                })
            }

            function o({
                templateItem: e,
                currentUserId: t
            }) {
                let i = a(752085).A.state.item;
                a(752085).A.setState({ ...a(752085).A.state,
                    item: e
                }), i !== e && a(255482).K.set({
                    userId: t,
                    key: l,
                    value: e.rootId
                })
            }

            function n(e) {
                a(752085).A.setState({
                    item: a(752085).A.state.item,
                    open: !1
                }), (0, a(471e3).I)({
                    environment: e
                })
            }
            async function d(e) {
                var t, l;
                let i, {
                    acceptFrom: r,
                    item: o,
                    environment: d,
                    spaceStore: s,
                    initializeStore: c,
                    ...p
                } = e;
                a(752085).A.state.open && a(752085).A.setState({ ...a(752085).A.state,
                    isLoading: !0
                }), a(218744).default.checkGate({
                    gateName: "mobile_keep_template_gallery_open"
                }) && a(717376).A.state.open && a(717376).A.setState({
                    open: !1
                });
                let u = c ? { ...p,
                        item: o,
                        environment: d,
                        spaceStore: s,
                        initializeStore: c,
                        type: "inExistingStore",
                        useMinimalTemplates: !1,
                        from: "page_template_modal"
                    } : { ...p,
                        item: o,
                        environment: d,
                        spaceStore: s,
                        type: "inSpace",
                        useMinimalTemplates: !1,
                        from: "page_template_modal"
                    },
                    m = !1,
                    f = Date.now();
                try {
                    i = await (0, a(54647).o)(u), m = !0;
                    let e = null == (t = a(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.id;
                    i && (!e || e !== i.id) && (0, a(545586).navigateToBlock)({
                        environment: d,
                        store: i,
                        pageVisitSource: a(254656).y8.Create,
                        showMoveTo: !0
                    }), n(d), a(986939).A.isMobile && ((0, a(713167).V)(), a(717376).A.setState({
                        open: !1
                    }))
                } finally {
                    let t = Date.now() - f,
                        n = e.initializeStore ? (0, a(297311).U)(e.initializeStore) : void 0,
                        d = e.initializeStore ? !n : e.isPrivate;
                    (0, a(522974).B)({
                        destination: d ? "private" : "team",
                        template_block_id: o.rootId,
                        template_duplication_duration_ms: t,
                        team_id: null == n ? void 0 : n.id,
                        created_page_id: null == (l = i) ? void 0 : l.id
                    }), (0, a(81149).h)({
                        from: "mobileApp",
                        success: m,
                        context: r,
                        template_block_id: o.rootId,
                        target_space_id: s.id,
                        template_duplication_duration_ms: t,
                        public_template_name: o.name,
                        template_id: o.id
                    })
                }
            }
            async function s(e) {
                let t, {
                        environment: l,
                        initializeStore: r,
                        item: o,
                        isPrivate: n,
                        useMinimalTemplates: d,
                        spaceStore: s,
                        spaceViewStore: c
                    } = e,
                    p = d ? o.rootId : o.previewRootId,
                    u = await l.api.callCellCompatibleApi({
                        eventName: "loadBlockSubtree",
                        environment: l,
                        data: {
                            block: {
                                id: p,
                                spaceId: o.spaceId
                            },
                            shallow: !1
                        },
                        cellNavigation: {
                            spaceId: o.spaceId
                        }
                    });
                "success" === u.type && (t = a(412951).RecordMapWithRole.create(u.data.subtreeRecordMap));
                let m = "pageTemplateModalActions.loadAndDuplicatePageTemplate",
                    {
                        performResult: f
                    } = (0, a(377796).createAndCommit)({
                        userAction: m,
                        environment: l,
                        cellTarget: {
                            spaceWithId: s.id
                        },
                        canUndo: !0,
                        perform: e => {
                            let o = r || a(964232).IT({
                                environment: l,
                                spaceStore: s,
                                spaceViewStore: c,
                                parent: n ? "private" : "none",
                                loading: !0,
                                transaction: e
                            });
                            (0, a(31069)._)({
                                currentUserId: l.currentUser.id,
                                defaultRecordCache: l.defaultRecordCache,
                                inMemoryRecordCache: o.inMemoryRecordCache,
                                recordMap: t,
                                debugSource: m,
                                isPendingTransactionForRecord: a(941701).transactionQueue.isPendingTransactionForRecord.bind(a(941701).transactionQueue)
                            });
                            let d = (0, a(559096).loadLocalSubtree)({
                                environment: l,
                                blockId: p,
                                inMemoryRecordCache: o.inMemoryRecordCache,
                                options: {
                                    allowCopyCollections: !0,
                                    requireFullSubtree: !1,
                                    skipTransclusionContainerChildren: !1,
                                    allowCopyExternalObjectInstances: !0
                                }
                            }).recordMap;
                            if (!d) throw Error(a(962299).A.getIntl().formatMessage(i.clientCopyError));
                            return (0, a(44226).localDuplicate)({
                                environment: l,
                                sourceBlockId: p,
                                targetBlockPointer: o.pointer,
                                sourceBlockSubtree: d,
                                targetInMemoryRecordCache: o.inMemoryRecordCache,
                                transaction: e,
                                from: "load_and_duplicate_page_template",
                                destinationTable: o.getParentTable(),
                                options: {
                                    allowRedundancy: !0,
                                    deepCopyTransclusionContainers: !0,
                                    resolveTemplateVariables: !0
                                }
                            }), o
                        }
                    }),
                    g = ((null == f ? void 0 : f.getCollectionPointers()) ? ? []).map(e => e.id);
                return (0, a(104310).u)({
                    event: {
                        eventName: "create_app_templates",
                        eventProperties: {
                            target_page_ids: [f.id],
                            template_label: o.name,
                            collection_ids: g
                        }
                    }
                }), f
            }

            function c(e) {
                let {
                    item: t,
                    transaction: l,
                    spaceViewStore: i
                } = e;
                if (i) {
                    let e = i.getVisitedTemplateIds();
                    if (0 > e.indexOf(t.rootId)) {
                        let r = e.concat([t.rootId]);
                        (0, a(173157).z)({
                            store: i,
                            data: {
                                visited_templates: r
                            },
                            transaction: l
                        })
                    }
                }
            }
        },
        498348: (e, t, a) => {
            function l(e) {
                let t = window.location.href;
                return a(758654).O$(t, {
                    tg: e.templateGalleryItem
                })
            }

            function i(e) {
                let t;
                return e instanceof a(258710).s ? t = e.getBlockId() : "type" in e ? (e.type, t = e.template.rootId) : t = e.rootId, t
            }

            function r(e) {
                let t = a(849917).locale && "en-us" !== a(849917).locale.toLocaleLowerCase() ? `/${a(849917).locale.toLowerCase()}` : "",
                    l = void 0 !== e ? `${t}${a(168962).JZ.templates}/${encodeURIComponent(e)}` : `${t}${a(168962).JZ.templates}`;
                return `${a(986939).A.domainBaseUrl}${l}`
            }

            function o(e) {
                if (!e) return "";
                try {
                    let a = JSON.parse(e);
                    if ("text" === a.content[0].content[0].nodeType) {
                        var t;
                        return ((null == a || null == (t = a.content) || null == (t = t[0]) || null == (t = t.content) || null == (t = t[0]) ? void 0 : t.value) || "").replace(/^(#{2,6})\s+/gm, "# ")
                    }
                } catch (e) {
                    return ""
                }
            }
            a.d(t, {
                $Y: () => o,
                Px: () => r,
                Up: () => l,
                dY: () => i
            })
        },
        502925: (e, t, a) => {
            a.d(t, {
                A: () => o
            }), a(898992), a(354520), a(581454);
            var l = a(296540);

            function i(e) {
                a(775657).electronApi && a(775657).electronApi.snackbarReady && a(775657).electronApi.snackbarReady(e)
            }
            var r = a(474848);
            let o = l.memo(function() {
                    let [e, t] = (0, l.useReducer)((e, t) => {
                        switch (t.type) {
                            case "push":
                                return [...e.map(e => ({ ...e,
                                    isAnimatingOut: !0
                                })), {
                                    item: t.item,
                                    isAnimatingOut: !1
                                }];
                            case "delete":
                                return e.filter(e => e.item.key !== t.key);
                            case "clear":
                                return e.map(e => ({ ...e,
                                    isAnimatingOut: !0
                                }));
                            default:
                                return e
                        }
                    }, []);
                    (0, l.useEffect)(() => (i(!0), () => {
                        i(!1)
                    }), []), (0, l.useEffect)(() => {
                        let e = new(a(345426)).ComputedStore(() => a(441742).Ay.state.currentItem, {
                                debugName: "currentItemStore"
                            }),
                            l = null;

                        function i() {
                            let a = e.state;
                            a && l !== a.key ? (t({
                                type: "push",
                                item: a
                            }), l = a.key) : a || t({
                                type: "clear"
                            })
                        }
                        return e.addListener(i), () => {
                            e.removeListener(i)
                        }
                    }, []);
                    let {
                        announce: o
                    } = (0, a(813367).U)(), n = (0, l.useRef)(), d = (0, l.useMemo)(() => {
                        let t = e.filter(e => !e.isAnimatingOut);
                        if (0 === t.length) return;
                        let a = t[t.length - 1].item.label;
                        return "string" == typeof a ? a : void 0
                    }, [e]);
                    return (0, l.useEffect)(() => {
                        d && d !== n.current && o(d, "assertive"), n.current = d
                    }, [d, o]), (0, r.jsx)(a(114596).O, {
                        open: e.length > 0,
                        zIndex: 201,
                        children: e.map(e => (0, l.createElement)(c, { ...e,
                            key: e.item.key,
                            dispatch: t
                        }))
                    })
                }),
                n = {
                    marginInlineStart: 8,
                    width: 16,
                    height: 16
                },
                d = {
                    marginInlineStart: 4,
                    marginInlineEnd: -4
                },
                s = {
                    position: "fixed",
                    insetInlineStart: 0,
                    width: "100%",
                    display: "flex",
                    zIndex: 1e6,
                    padding: 4,
                    pointerEvents: "none"
                },
                c = l.memo(function({
                    dispatch: e,
                    isAnimatingOut: t,
                    item: i
                }) {
                    let o = (0, a(739726).L)(),
                        c = (0, l.useCallback)(() => {
                            e({
                                type: "delete",
                                key: i.key
                            })
                        }, [e, i.key]),
                        p = (0, l.useRef)(!1),
                        u = (0, l.useCallback)(() => {
                            t || p.current || (p.current = !0, a(436555).ge())
                        }, [t]),
                        m = (0, l.useCallback)(e => {
                            let {
                                relatedTarget: l
                            } = e, i = null === l || !(l instanceof Node) || !e.currentTarget.contains(l);
                            !t && p.current && i && (p.current = !1, a(436555).Dk())
                        }, [t]),
                        f = (0, l.useCallback)(() => {
                            t || a(436555).ge()
                        }, [t]),
                        g = (0, l.useCallback)(() => {
                            t || a(436555).Dk()
                        }, [t]),
                        v = (0, l.useRef)(t);
                    (0, l.useEffect)(() => {
                        if (!v.current && t) {
                            let e = setTimeout(c, 270);
                            return () => {
                                c(), clearTimeout(e)
                            }
                        }
                        v.current = t
                    }, [t, c]);
                    let b = i.position ? ? "bottom";
                    return (0, r.jsx)("div", {
                        style: { ..."top" === b ? {
                                top: 24
                            } : {
                                bottom: o
                            },
                            ...s
                        },
                        children: (0, r.jsxs)("div", {
                            style: {
                                background: a(632079).Tj.background.accentPrimary,
                                color: a(632079).Tj.text.inversePrimary,
                                borderRadius: 8,
                                padding: "11px 16px",
                                boxShadow: a(632079).Tj.shadow.outline.lg,
                                margin: "0 auto",
                                fontSize: 14,
                                display: "flex",
                                alignItems: "center",
                                pointerEvents: "auto",
                                ...i.style,
                                animationName: `snackbar-slide-in-${b}`,
                                animationDuration: "270ms",
                                animationTimingFunction: "ease",
                                transitionProperty: "transform, opacity",
                                transitionDuration: "270ms",
                                transitionTimingFunction: "ease",
                                transform: t ? "scale(0.95)" : "scale(1)",
                                opacity: +!t
                            },
                            onMouseOver: u,
                            onMouseOut: m,
                            onFocus: f,
                            onBlur: g,
                            tabIndex: -1,
                            onTransitionEnd: t ? c : void 0,
                            children: [i.label, i.helpUrl ? (0, r.jsx)(a(590422).Q, {
                                href: i.helpUrl,
                                external: !0,
                                style: n,
                                children: (0, r.jsx)(a(16275).I, {
                                    icon: a(211052).questionMarkCircleSmallIcon,
                                    size: "sm",
                                    colorVariant: "inverseSecondary"
                                })
                            }) : void 0, (0, r.jsx)("div", {
                                style: d,
                                children: i.right
                            })]
                        })
                    })
                })
        },
        585832: (e, t, a) => {
            a.r(t), a.d(t, {
                CloseTemplatesPopupComponent: () => j,
                default: () => b
            });
            var l = a(296540);

            function i() {
                return "web-mobile" === (0, a(533992).Y0)().deviceType
            }
            var r = () => a(546605);
            class o extends r().Store {
                getInitialState() {
                    return {
                        inMemoryRecordCache: new(a(870941)).A({
                            name: "TemplateRecordCacheStore"
                        })
                    }
                }
            }
            a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(581454);
            var n = () => a(832375),
                d = () => a(247438);
            class s extends r().Store {
                getInitialState() {
                    return {}
                }
            }
            var c = a(474848);
            let p = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                u = function({
                    style: e,
                    disabled: t,
                    disablePointerEvents: i,
                    previewRootId: r,
                    previewSpaceId: n,
                    isPaidTemplate: d,
                    userHasAcquiredTemplate: u,
                    templateRecordCacheStore: m
                }) {
                    let v = (0, a(533992).v3)(),
                        b = (0, a(682985).uB)(m, o),
                        y = (0, a(682985).uB)(void 0, s),
                        h = (0, a(682985).O$)(a(205885).e),
                        S = (0, l.useCallback)((a, l) => (0, c.jsx)(f, {
                            err: a,
                            store: l,
                            style: e,
                            disabled: t,
                            disablePointerEvents: i,
                            isPaidTemplate: d,
                            userHasAcquiredTemplate: u,
                            pageTemplatePreviewStore: y
                        }), [e, t, i, y, d, u]),
                        A = (0, l.useCallback)(e => {
                            let {
                                rootId: a,
                                spaceId: l
                            } = e;
                            return g(a, l, v, b, t)
                        }, [v, b, t]),
                        k = (0, l.useCallback)(e => {
                            var t, l;
                            let i;
                            return t = e, l = y, void("page" === (i = (0, a(132702).parseRoute)({
                                url: t,
                                isMobile: a(986939).A.isMobile,
                                baseUrl: a(986939).A.domainBaseUrl,
                                publicDomainName: a(986939).A.publicDomainName,
                                protocol: a(986939).A.protocol,
                                currentUrl: window.location.href,
                                requestedOnAlternateDomain: (0, a(700473).wasRequestedOnAlternateDomain)()
                            })).name && (i.peekViewBlockId ? l.setState({ ...l.state,
                                navigatedRootId: i.peekViewBlockId
                            }) : l.setState({ ...l.state,
                                navigatedRootId: i.blockId
                            })))
                        }, [v, y]);
                    return h ? (0, c.jsx)(a(440411).B, {
                        value: k,
                        children: (0, c.jsx)(a(814255).A, {
                            request: {
                                rootId: r,
                                spaceId: n
                            },
                            performRequest: A,
                            render: S
                        })
                    }) : (0, c.jsx)(a(440411).B, {
                        value: k,
                        children: (0, c.jsx)("div", {
                            style: { ...p,
                                ...e
                            },
                            children: (0, c.jsx)(a(324489).V, {
                                isSmall: !0,
                                children: (0, c.jsx)(a(109939).sA, {
                                    defaultMessage: "Please go online to view this template.",
                                    id: "pageTemplatePreview.offline.message"
                                })
                            })
                        })
                    })
                },
                m = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                };

            function f({
                store: e,
                style: t,
                disabled: r,
                disablePointerEvents: o,
                isPaidTemplate: d,
                userHasAcquiredTemplate: p,
                pageTemplatePreviewStore: u
            }) {
                let g = (0, a(533992).v3)(),
                    v = (0, a(533992).Y0)(),
                    b = (0, a(682985).uB)(u, s),
                    y = (0, a(682985).K8)(() => b.state.navigatedRootId, [b]),
                    h = i(),
                    S = (0, a(682985).K8)(() => e && (0, a(676416).f)({
                        environment: g,
                        store: e
                    }), [g, e]),
                    A = (0, a(994732).x)();
                if ((0, l.useEffect)(() => {
                        d && !h && a(436555).D6({
                            label: (0, c.jsx)(a(109939).sA, {
                                defaultMessage: "Purchase is unavailable on this platform",
                                id: "pageTemplatePreview.paidTemplate.message"
                            }),
                            durationMs: "keep"
                        })
                    }, [g, d, h, p]), !e || !S) return (0, c.jsx)("div", {
                    style: { ...m,
                        ...t,
                        fontSize: a(311336).K
                    },
                    children: (0, c.jsx)(a(517334).k, {})
                }); {
                    let l;
                    return l = y ? a(970831).B.createChildStore(e, {
                        table: n().evP,
                        id: y
                    }) : e, (0, c.jsx)("div", {
                        style: t,
                        children: (0, c.jsx)(a(318981).A, {
                            store: l,
                            isDefaultContainer: !0,
                            droppable: !0,
                            render: ({
                                selectableEvents: e,
                                selectableHoverMenuOverlay: t
                            }) => (0, c.jsx)(a(126767).H, {
                                style: function(e) {
                                    let {
                                        device: t
                                    } = e;
                                    return {
                                        flex: 1,
                                        ...t.isSafari && {
                                            zIndex: 1
                                        }
                                    }
                                }(g),
                                type: S,
                                store: a(139343).A,
                                preventType: A,
                                ...e,
                                children: o ? (0, c.jsxs)("section", {
                                    inert: "",
                                    children: [t, (0, c.jsx)(a(865594).AT, {
                                        store: l,
                                        context: a(166654).R.InAppTemplatePreview,
                                        paddingBottom: (0, a(865594).Wj)(v),
                                        disabled: r
                                    })]
                                }) : (0, c.jsxs)(c.Fragment, {
                                    children: [t, (0, c.jsx)(a(865594).AT, {
                                        store: l,
                                        context: a(166654).R.InAppTemplatePreview,
                                        paddingBottom: (0, a(865594).Wj)(v),
                                        disabled: r
                                    })]
                                })
                            }, l.id)
                        }, l.id)
                    })
                }
            }
            async function g(e, t, l, i, r) {
                if (r) return new(a(970831)).B(l, {
                    table: n().evP,
                    id: e
                });
                let o = await l.api.callCellCompatibleApi({
                    eventName: "loadBlockSubtree",
                    environment: l,
                    data: {
                        block: {
                            id: e,
                            spaceId: t
                        },
                        shallow: !1
                    },
                    cellNavigation: {
                        spaceId: t
                    }
                });
                if ("failed" === o.type) throw o.error;
                let s = a(728372).AppStoreSidebarSpaceStore.state,
                    {
                        inMemoryRecordCache: c
                    } = i.state;
                c.clearCache(), c.isTemplatePreview = !0;
                let p = new Set,
                    u = new Set,
                    m = a(412951).RecordMapWithRole.create(o.data.subtreeRecordMap),
                    f = a(993189).b4_.fromRecordMapWithRole(m);
                for (let e of m) {
                    let {
                        pointer: t,
                        model: a,
                        role: i
                    } = e;
                    if (!i) return;
                    if (c.setModelAndRole({
                            pointer: t,
                            userId: l.currentUser.id
                        }, a, "editor"), (null == a ? void 0 : a.table) === n().evP) {
                        let e = a.getProperties(f);
                        for (let t of Object.keys(e)) {
                            for (let a of (0, d().Fbh)(e[t])) p.add(a);
                            for (let a of (0, d().jgW)(e[t])) u.add(a)
                        }
                        a.created_by_table && a.created_by_id && (a.created_by_table === n().oo9 ? p.add(a.created_by_id) : u.add(a.created_by_id)), a.last_edited_by_table && a.last_edited_by_id && (a.last_edited_by_table === n().oo9 ? p.add(a.last_edited_by_id) : u.add(a.last_edited_by_id))
                    }
                }
                for (let e of (await Promise.all(Array.from(p).map(async e => {
                        if (s) {
                            let t = a(807825).L.createChildStore(s, {
                                table: n().oo9,
                                id: e
                            });
                            return await t.load(), t.getValue()
                        } {
                            let t = await (0, a(130925).e)(l, {
                                pointer: {
                                    table: n().oo9,
                                    id: e
                                },
                                userId: l.currentUser.id,
                                version: -1
                            });
                            return t && t.value
                        }
                    })))) e && c.setRecord({
                    pointer: {
                        table: n().oo9,
                        id: e.id
                    },
                    userId: l.currentUser.id
                }, {
                    role: "reader",
                    value: e
                });
                for (let e of (await Promise.all(Array.from(u).map(async e => {
                        if (s) {
                            let t = (0, a(517013).v3)(s, {
                                table: n().GPl,
                                id: e,
                                spaceId: s.id
                            });
                            return await t.load(), t.getValue()
                        } {
                            let t = await (0, a(130925).e)(l, {
                                pointer: {
                                    table: n().GPl,
                                    id: e
                                },
                                userId: l.currentUser.id,
                                version: -1
                            });
                            return t && t.value
                        }
                    })))) e && c.setRecord({
                    pointer: {
                        table: n().GPl,
                        id: e.id,
                        spaceId: e.space_id
                    },
                    userId: l.currentUser.id
                }, {
                    role: "reader",
                    value: e
                });
                let g = a(728372).AppStoreCurrentUserStore.state;
                return g && (await g.load(), c.setRecord({
                    pointer: g.pointer,
                    userId: l.currentUser.id
                }, {
                    role: "editor",
                    value: g.getValue()
                })), new(a(970831)).B(l, {
                    table: n().evP,
                    id: e
                }, {
                    inMemoryRecordCache: c
                })
            }
            let v = {
                    width: "100%",
                    flexGrow: 1,
                    flexShrink: 1,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                },
                b = function() {
                    let e = (0, a(533992).v3)(),
                        t = (0, a(682985).uB)(void 0, o),
                        i = (0, l.useCallback)(() => A(e, t), [e, t]),
                        r = (0, l.useCallback)(() => (0, c.jsx)(x, {
                            templateRecordCacheStore: t
                        }), [t]),
                        n = (0, a(682985).O$)(a(752085).A),
                        d = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore),
                        s = (0, a(682985).K8)(() => {
                            var e;
                            return null == (e = a(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.pointer.spaceId
                        }, []);
                    return ((0, l.useEffect)(() => {
                        n.open && d && (0, a(377796).createAndCommit)({
                            userAction: "PageTemplateModal.willMountOrUpdate",
                            environment: e,
                            cellTarget: s ? {
                                spaceWithId: s
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                a(151965).setTemplateVisited({
                                    item: n.item,
                                    spaceViewStore: d,
                                    transaction: e
                                })
                            }
                        })
                    }, [d, e, n.item, n.open, s]), a(986939).A.isMobile) ? (0, c.jsx)(a(182718).zD, {
                        open: n.open,
                        content: r,
                        forceFullScreenSlideUp: !0,
                        onDismiss: i,
                        popupType: a(423291).n.SlideUp
                    }) : null
                };

            function y() {
                return new Promise((e, t) => {
                    a(647095).ui({
                        message: (0, c.jsx)(a(109939).sA, {
                            id: "pageTemplateModal.modifiedTemplateDialog.prompt",
                            defaultMessage: "It looks like you’ve modified the template. Would you like to save your edits?"
                        }),
                        showCancel: !1,
                        keepFocus: !0,
                        items: [{
                            label: (0, c.jsx)(a(109939).sA, {
                                id: "pageTemplateModal.modifiedTemplateDialog.saveButton.label",
                                defaultMessage: "Save edits"
                            }),
                            onAccept: () => {
                                e(!0)
                            }
                        }, {
                            label: (0, c.jsx)(a(109939).sA, {
                                id: "pageTemplateModal.modifiedTemplateDialog.discardEditsButton.label",
                                defaultMessage: "Discard"
                            }),
                            color: "red",
                            onAccept: () => {
                                e(!1)
                            }
                        }]
                    })
                })
            }

            function h({
                modalState: e,
                templateRecordCacheStore: t
            }) {
                var l, i;
                let r = (0, a(682985).uB)(t, o);
                return (0, c.jsx)(u, {
                    disablePointerEvents: e.disablePointerEvents,
                    previewRootId: e.item.previewRootId,
                    previewSpaceId: e.item.spaceId,
                    isPaidTemplate: !!(null == (l = e.item.marketplaceTemplateMetadata) ? void 0 : l.isPaidTemplate),
                    userHasAcquiredTemplate: !!(null == (i = e.item.marketplaceTemplateMetadata) ? void 0 : i.userHasAcquiredTemplate),
                    style: v,
                    templateRecordCacheStore: r,
                    disabled: !0
                }, e.item.previewRootId)
            }

            function S(e, t, l, i) {
                let {
                    inMemoryRecordCache: r
                } = l.state, o = a(752085).A.state, n = a(728372).AppStoreSidebarSpaceViewStore.state, d = a(728372).AppStoreSidebarSpaceStore.state, s = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (o.open && n && d) {
                    let l = s && s.isEmptyPage() ? s : void 0,
                        c = a(475097).default.state.open && a(475097).default.state.targetStore && a(475097).default.state.targetStore.isEmptyPage() ? a(475097).default.state.targetStore : void 0;
                    a(151965).accept({
                        environment: t,
                        item: o.item,
                        spaceStore: d,
                        spaceViewStore: n,
                        useRecordCache: e ? r : void 0,
                        initializeStore: o.createNewPage ? void 0 : l || c,
                        isPrivate: o.isPrivate,
                        acceptFrom: o.createNewPage ? "sidebar" : "newPage",
                        isEmailShared: i
                    })
                }
            }
            async function A(e, t) {
                var l;
                let {
                    inMemoryRecordCache: i
                } = t.state;
                a(436555).N2(), i.appliedTransaction && await y() ? S(!0, e, t) : (l = e, a(151965).close(l), a(821243).xl())
            }
            async function k(e, t, l) {
                var i, r, o, n;
                let {
                    inMemoryRecordCache: d
                } = t.state;
                if (d.appliedTransaction) return void(await y() ? S(!0, e, t) : S(!1, e, t));
                let s = null == (i = a(752085).A.state.item) || null == (i = i.marketplaceTemplateMetadata) ? void 0 : i.isPaidTemplate,
                    c = null == (r = a(752085).A.state.item) || null == (r = r.marketplaceTemplateMetadata) ? void 0 : r.marketplaceListingId,
                    p = null == (o = a(752085).A.state.item) || null == (o = o.marketplaceTemplateMetadata) ? void 0 : o.userHasAcquiredTemplate,
                    u = null == (n = a(752085).A.state.item) ? void 0 : n.id;
                if (a(752085).A.state.open && s && c && u && !p) {
                    a(199231).A.setState({ ...a(199231).A.state,
                        from: "mobileApp",
                        marketplaceListingId: c,
                        templateId: u
                    }), a(752085).A.setState({ ...a(752085).A.state,
                        isCheckout: !0
                    });
                    return
                }(p || !s) && S(!1, e, t, l)
            }
            let T = {
                    marginInlineStart: 20
                },
                I = {
                    marginInlineEnd: 40
                };

            function x({
                templateRecordCacheStore: e
            }) {
                var t, r, o, n, d;
                let s = (0, a(533992).v3)(),
                    p = (0, a(109939).tz)(),
                    u = (0, a(960253).e)(),
                    m = i(),
                    f = (0, a(682985).K8)(() => {
                        var e;
                        return (null == (e = a(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.preferred_locale) || a(619157).q
                    }, []),
                    g = (0, a(682985).K8)(() => a(947673).A.state.duplicationStatus, []),
                    v = (0, a(682985).O$)(a(752085).A),
                    b = null == (t = v.item) || null == (t = t.marketplaceTemplateMetadata) ? void 0 : t.creator,
                    y = null == (r = v.item) || null == (r = r.marketplaceTemplateMetadata) ? void 0 : r.emailCaptureType,
                    S = !!(null == (o = v.item) || null == (o = o.marketplaceTemplateMetadata) ? void 0 : o.isPaidTemplate),
                    C = null == (n = v.item) || null == (n = n.marketplaceTemplateMetadata) ? void 0 : n.paidTemplatePrice,
                    _ = !!(null == (d = v.item) || null == (d = d.marketplaceTemplateMetadata) ? void 0 : d.userHasAcquiredTemplate),
                    R = (0, l.useCallback)(() => {
                        if ("required" !== y && "optional" !== y) return k(s, e);
                        a(205852).A.open({
                            creator: b,
                            emailRequirement: y,
                            productType: "template",
                            onSubmit: async t => {
                                await k(s, e, t)
                            }
                        })
                    }, [s, y, b, e]),
                    P = (0, l.useCallback)(() => A(s, e), [s, e]),
                    B = (0, l.useCallback)(() => {
                        a(436555).N2(), a(752085).A.state.open && a(752085).A.setState({ ...a(752085).A.state,
                            isCheckout: !1
                        }), a(199231).A.setState({ ...a(199231).A.state,
                            isModalOpen: !1,
                            from: void 0,
                            marketplaceListingId: void 0,
                            templateId: void 0,
                            creatorId: void 0,
                            customerId: void 0
                        })
                    }, []),
                    E = (0, a(303072).IT)(a(632079).Tj, f, u);
                return v.open ? (0, c.jsx)(a(488796).s, {
                    title: v.isCheckout ? (0, c.jsx)(a(109939).sA, {
                        defaultMessage: "Complete checkout",
                        id: "pageTemplateModal.mobileModal.checkoutTitle"
                    }) : void 0,
                    left: v.isCheckout ? (0, c.jsx)(M, {
                        handleClick: B
                    }) : (0, c.jsx)(j, {
                        handleClick: P,
                        style: T
                    }),
                    right: v.isLoading ? (0, c.jsx)(a(517334).k, {
                        style: I
                    }) : v.isCheckout ? null : (0, c.jsx)(w, {
                        handleClick: R,
                        isDisabled: "duplicating" === g || S && !m,
                        label: _ ? (0, c.jsx)(a(109939).sA, {
                            id: "inApp.marketplace.template.addAgain",
                            defaultMessage: "Add again"
                        }) : S && C ? (0, c.jsx)(a(109939).sA, {
                            id: "inApp.marketplace.template.buyTemplate",
                            defaultMessage: "Buy for <money></money>",
                            values: {
                                money: () => (0, c.jsx)(a(887949).v, {
                                    cost: {
                                        amount: 100 * C,
                                        currencyCode: "USD"
                                    },
                                    intl: p,
                                    trailingZeroDisplay: "auto"
                                })
                            }
                        }) : void 0
                    }),
                    shouldRenderLeftDirectly: !0,
                    shouldRenderRightDirectly: !0,
                    onCancel: P,
                    disableHeaderShadow: !0,
                    forceFullScreenSlideUp: !0,
                    children: v.isCheckout ? (0, c.jsx)(a(222926).Elements, {
                        stripe: (0, a(889503).getStripe)(),
                        options: E,
                        children: (0, c.jsx)(a(432843).l, {})
                    }) : (0, c.jsx)(h, {
                        templateRecordCacheStore: e,
                        modalState: v
                    })
                }) : null
            }

            function w({
                handleClick: e,
                isDisabled: t,
                label: l
            }) {
                let i = (0, a(960253).I)(() => ({
                    doneButton: {
                        display: "flex",
                        alignItems: "center",
                        height: 34,
                        paddingInlineStart: 14,
                        paddingInlineEnd: 14,
                        marginInlineEnd: 20,
                        fontWeight: a(699422).Wy.medium,
                        color: t ? a(632079).Tj.text.secondary : a(632079).Tj.text.primary,
                        background: a(632079).Tj.background.tertiaryTranslucent,
                        borderRadius: 17
                    }
                }), [t]);
                return (0, c.jsx)(a(64960).Ay, {
                    style: i.doneButton,
                    onClick: e,
                    disabled: t,
                    children: l || (0, c.jsx)(a(109939).sA, {
                        defaultMessage: "Use template",
                        id: "pageTemplateModal.mobileModal.useTemplateButton.label"
                    })
                })
            }
            let C = {
                borderRadius: 17,
                width: 34,
                height: 34,
                marginInlineStart: 20
            };

            function M({
                handleClick: e
            }) {
                let t = (0, a(109939).tz)();
                return (0, c.jsx)(a(374533).A, {
                    icon: a(740158).$,
                    style: C,
                    colorVariant: "primary",
                    onClick: e,
                    ariaLabel: t.formatMessage({
                        defaultMessage: "Back",
                        id: "pageTemplateModal.mobileModal.checkout.backButton.label"
                    })
                })
            }
            let _ = {
                style0: {
                    width: a(104509).Ev.default,
                    height: a(104509).Ev.default
                }
            };

            function j({
                handleClick: e,
                style: t,
                disabled: l
            }) {
                let i = (0, a(109939).tz)(),
                    r = {
                        background: a(632079).Tj.background.tertiaryTranslucent,
                        borderRadius: 17,
                        width: 34,
                        height: 34,
                        ...t
                    };
                return (0, c.jsx)(a(374533).A, {
                    disabled: l,
                    icon: a(117152).xMarkIcon,
                    iconStyle: _.style0,
                    style: r,
                    colorVariant: "primary",
                    onClick: e,
                    ariaLabel: i.formatMessage({
                        defaultMessage: "Close",
                        id: "pageTemplateModal.mobileModal.closeButton.label"
                    })
                })
            }
        },
        595413: (e, t, a) => {
            a.d(t, {
                f: () => i
            }), a(296540);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.94 12.1 11.57",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8 1.95c-.27 0-.51.174-.594.431l-1.14 3.51H2.574a.625.625 0 0 0-.367 1.13l2.985 2.17-1.14 3.509a.625.625 0 0 0 .962.699L8 11.229l2.986 2.17a.625.625 0 0 0 .961-.699l-1.14-3.51 2.985-2.169a.625.625 0 0 0-.367-1.13h-3.69l-1.14-3.51A.625.625 0 0 0 8 1.95m-.686 4.759L8 4.597l.686 2.112a.625.625 0 0 0 .595.432h2.22L9.705 8.446a.625.625 0 0 0-.227.699l.686 2.112-1.797-1.305a.625.625 0 0 0-.734 0l-1.797 1.305.686-2.112a.625.625 0 0 0-.227-.699L4.5 7.141h2.22a.63.63 0 0 0 .595-.432"
                    })
                },
                i = (0, a(104509).wt)("starSmall", l, "small")
        },
        673700: (e, t, a) => {
            a.d(t, {
                C: () => l
            });
            let l = (0, a(104509).xh)("magnifyingGlass", {
                default: {
                    loader: () => a.e(42022).then(a.bind(a, 330274))
                },
                small: {
                    loader: () => a.e(42022).then(a.bind(a, 921048))
                },
                fill: {
                    loader: () => a.e(42022).then(a.bind(a, 367008))
                },
                fillSmall: {
                    loader: () => a.e(42022).then(a.bind(a, 693863))
                }
            }, ["magnifying", "glass", "search", "zoom", "explore"])
        },
        740158: (e, t, a) => {
            a.d(t, {
                $: () => i
            }), a(296540);
            let l = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "6.12 3.97 6.66 12.06",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M6.308 9.558a.625.625 0 0 0 0 .884l5.4 5.4a.625.625 0 1 0 .884-.884L7.634 10l4.958-4.958a.625.625 0 1 0-.884-.884z"
                    })
                },
                i = (0, a(104509).wt)("arrowChevronSingleLeft", l, "default")
        }
    }
]);