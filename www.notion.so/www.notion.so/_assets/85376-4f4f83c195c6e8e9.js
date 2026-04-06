"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [85376], {
        19606: (e, t, n) => {
            n.d(t, {
                A: () => d,
                a: () => c
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(581454);
            var i = n(296540),
                l = n(474848);
            let o = {
                style0: {
                    width: 18
                },
                accountSelection: {
                    padding: "8px",
                    borderTop: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    cursor: "pointer"
                },
                accountSelectionLabel: {
                    fontWeight: n(699422).Wy.medium,
                    paddingInlineStart: 4,
                    paddingTop: 4
                }
            };

            function r(e) {
                let {
                    onClick: t,
                    integration: i,
                    accountName: r
                } = e;
                return (0, l.jsx)("div", {
                    style: o.accountSelection,
                    children: (0, l.jsxs)("div", {
                        onClick: t,
                        children: [(0, l.jsx)(n(324489).V, {
                            isSecondaryColor: !0,
                            isSmall: !0,
                            style: o.accountSelectionLabel,
                            children: (0, l.jsx)(n(109939).sA, {
                                id: "collectionSettingsCreateExternalViewPicker.currentAccountSection.label",
                                defaultMessage: "Connected to {integration}",
                                values: {
                                    integration: i.name
                                }
                            })
                        }), (0, l.jsx)(n(51831).m, {
                            content: () => (0, l.jsx)("span", {
                                children: r
                            }),
                            placement: "left",
                            textWrap: !0,
                            children: t => (0, l.jsx)(n(95582).A, {
                                showExtensionArrow: !0,
                                focused: !1,
                                ...(0, n(63390).A)(t || {}, e),
                                title: r,
                                icon: (0, l.jsx)("img", {
                                    style: o.style0,
                                    src: i.info.icon
                                })
                            })
                        })]
                    })
                })
            }
            let a = {
                style0: {
                    marginBottom: 6
                },
                authenticationBody: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    paddingTop: 0,
                    paddingInlineEnd: 16,
                    paddingBottom: 16,
                    paddingInlineStart: 16,
                    textAlign: "center"
                },
                settingsMenuSubHeading: {
                    display: "inline",
                    fontSize: 14,
                    marginTop: 4,
                    marginInlineEnd: 20,
                    marginBottom: 20,
                    marginInlineStart: 20,
                    color: n(632079).Tj.text.secondary,
                    textAlign: "center"
                },
                settingsMenuAuthenticationButton: {
                    fontSize: 14,
                    height: 32,
                    color: n(632079).Tj.text.inversePrimary
                }
            };

            function s(e) {
                let {
                    collectionContextStore: t,
                    integration: i
                } = e, o = (0, n(960253).e)(), r = (0, n(682985).K8)(() => t.collectionStore(), [t]), s = (0, n(682985).K8)(() => null == r ? void 0 : r.getIcon(), [r]), c = (0, n(533992).v3)(), d = (0, n(723240).r)(), {
                    background: u,
                    hoveredBackground: g,
                    pressedBackground: p
                } = (0, n(162857).u)(i, o);
                return (0, l.jsx)(n(669).A, { ...e,
                    title: (0, l.jsx)(n(109939).sA, {
                        defaultMessage: "Connect to {integration}",
                        id: "collectionSettingsCreateExternalViewPicker.authenticateHeader.title",
                        values: {
                            integration: i.name
                        }
                    }),
                    children: (0, l.jsx)(n(4458).VP, {
                        flexGrow: 1,
                        paddingTop: 8,
                        paddingInlineEnd: 16,
                        paddingBottom: 16,
                        paddingInlineStart: 8,
                        children: (0, l.jsxs)("div", {
                            style: a.authenticationBody,
                            children: [(0, l.jsx)(n(569553).B6, {
                                disabled: !0,
                                bucket: "secure",
                                store: r,
                                icon: s,
                                iconRecordCategory: "collection",
                                size: 40,
                                isEmptyPage: !1,
                                style: a.style0
                            }), (0, l.jsx)("div", {
                                style: a.settingsMenuSubHeading,
                                children: (0, l.jsx)(n(109939).sA, {
                                    defaultMessage: "Link your {integration} account for richer content previews and seamless imports.",
                                    id: "collectionSettingsCreateExternalViewPicker.authenticateBody.title",
                                    values: {
                                        integration: i.name
                                    }
                                })
                            }), (0, l.jsx)(n(988022).p, {
                                onClick: () => {
                                    d && (n(211791).Jq({
                                        environment: c,
                                        integration: i,
                                        spaceId: d,
                                        from: "placeholder_root_external_collection_view_block"
                                    }), n(336987).A.reset())
                                },
                                style: {
                                    background: u,
                                    ...a.settingsMenuAuthenticationButton
                                },
                                hoveredStyle: {
                                    background: g
                                },
                                pressedStyle: {
                                    background: p
                                },
                                children: (0, l.jsx)(n(109939).sA, {
                                    defaultMessage: "Connect to {integration}",
                                    id: "collectionSettingsCreateExternalViewPicker.authenticateButton.title",
                                    values: {
                                        integration: i.name
                                    }
                                })
                            })]
                        })
                    })
                })
            }

            function c(e) {
                let {
                    collectionSettingsStore: t,
                    collectionContextStore: i,
                    externalAuthentication: o
                } = e, r = (0, n(682985).K8)(() => i.collectionStore(), [i]), a = (0, n(682985).K8)(() => {
                    if (!r) return;
                    let e = r.getFormat().integration_id;
                    return n(610463).A.integrations.state.find(t => t.id === e)
                }, [r]), c = (0, n(682985).K8)(() => !!a && (0, n(88937).jw)(a.id).length > 0, [a]), u = (0, n(682985).K8)(() => {
                    var e;
                    return null == r || null == (e = r.getSpaceStore()) ? void 0 : e.canEdit()
                }, [r]);
                if (!a || !r || !u) return null;
                let g = c ? (0, l.jsx)(x, { ...e,
                        collectionContextStore: i,
                        collectionSettingsStore: t,
                        integration: a,
                        externalAuthentication: o
                    }) : (0, l.jsx)(s, { ...e,
                        collectionContextStore: i,
                        collectionSettingsStore: t,
                        integration: a
                    }),
                    p = (0, n(59651).l)(null == a ? void 0 : a.id);
                return p ? (0, l.jsx)(d, {
                    featureName: p,
                    collectionStore: r,
                    children: g
                }) : g
            }

            function d(e) {
                let {
                    children: t,
                    featureName: i,
                    collectionStore: l
                } = e, o = (0, n(801643).G9)({
                    featureName: i,
                    collectionStore: l
                });
                return (0, n(811656).e2)(o) ? t : null
            }

            function u(e) {
                var t;
                return null == (t = e.integration.info) || null == (t = t.original_url_patterns) ? void 0 : t.filter(e => {
                    var t;
                    return null == (t = e.additional_types) ? void 0 : t.collection
                }).find(({
                    regex: t
                }) => new RegExp(t).test(e.url))
            }
            let g = (0, n(109939).YK)({
                    all: {
                        id: "collectionSettingsCreateExternalViewPicker.filters.all",
                        defaultMessage: "All"
                    },
                    issues: {
                        id: "collectionSettingsCreateExternalViewPicker.filters.issues",
                        defaultMessage: "Issues"
                    },
                    pull_requests: {
                        id: "collectionSettingsCreateExternalViewPicker.filters.pullRequests",
                        defaultMessage: "Pull Requests"
                    },
                    board: {
                        id: "collectionSettingsCreateExternalViewPicker.filters.boards",
                        defaultMessage: "Boards"
                    },
                    project: {
                        id: "collectionSettingsCreateExternalViewPicker.filters.projects",
                        defaultMessage: "Projects"
                    },
                    Releases: {
                        id: "collectionSettingsCreateExternalViewPicker.filters.releases",
                        defaultMessage: "Releases"
                    },
                    "Pull Request": {
                        id: "collectionSettingsCreateExternalViewPicker.filters.PullRequests",
                        defaultMessage: "Pull Requests"
                    },
                    Issues: {
                        id: "collectionSettingsCreateExternalViewPicker.filters.Issues",
                        defaultMessage: "Issues"
                    }
                }),
                p = {
                    style0: {
                        width: 18
                    },
                    style1: {
                        alignSelf: "center"
                    },
                    settingsMenuSearchBox: {
                        background: n(632079).Tj.background.primary,
                        marginBottom: 10
                    },
                    noResults: {
                        width: "100%",
                        paddingBottom: 10,
                        display: "flex",
                        justifyContent: "center",
                        fontSize: 14,
                        color: n(632079).Tj.text.secondary
                    },
                    suggestionBox: {
                        display: "flex",
                        alignItems: "center",
                        fontSize: 12,
                        color: n(632079).oZ.white,
                        background: n(632079).Tj.blue.background.accentPrimary,
                        borderRadius: 6,
                        padding: 10,
                        boxShadow: n(632079).Tj.shadow.outline.lg,
                        alignSelf: "center",
                        maxWidth: "80%",
                        gap: 6
                    },
                    errorMessage: {
                        alignSelf: "center",
                        padding: 10,
                        fontSize: 14,
                        color: n(632079).Tj.red.text.accentPrimary
                    },
                    syncingData: {
                        width: "100%",
                        paddingBottom: 10,
                        display: "flex",
                        justifyContent: "center",
                        fontSize: 14,
                        color: n(632079).Tj.text.secondary
                    },
                    filterContainer: {
                        position: "relative",
                        flexGrow: 0,
                        overflow: "hidden"
                    },
                    filterContainerScroller: {
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 12px",
                        gap: 6
                    }
                };

            function x(e) {
                let t = (0, n(109939).tz)(),
                    {
                        integration: o,
                        collectionContextStore: a,
                        collectionSettingsStore: c,
                        externalAuthentication: d
                    } = e,
                    [x, f] = (0, i.useState)(""),
                    m = (0, n(682985).K8)(() => {
                        let e = n(610463).A.state;
                        return e.loaded ? e.externalAuthentications.filter(e => e.integration_id === o.id) : []
                    }, [o]),
                    y = (0, n(682985).K8)(() => d || (m.length ? m[0] : null), [m, d]),
                    [h, b] = (0, i.useState)(!1),
                    [S, v] = (0, i.useState)(null),
                    j = (0, n(682985).K8)(() => a.collectionStore(), [a]),
                    A = (0, n(682985).K8)(() => a.collectionViewBlockStore(), [a]),
                    w = (0, n(533992).v3)(),
                    [{
                        value: C,
                        status: I
                    }] = (0, n(97668).Yb)(async () => {
                        if (!y) return;
                        let e = y.parent_id;
                        return w.api.callApi({
                            eventName: "listExternalCollections",
                            environment: w,
                            data: {
                                bot_id: e
                            }
                        })
                    }, [w, y]),
                    M = (null == C ? void 0 : C.type) === "success" && "data" in C.data ? C.data.data : [],
                    k = (null == C ? void 0 : C.type) === "success" && "error" in C.data ? C.data.error : null,
                    P = M.filter(e => !S || e.type === S),
                    E = P.length ? (0, n(821048).Ay)(x, P, e => e.title) : [],
                    T = Array.from(new Set(M.map(e => e.type))),
                    B = u({
                        integration: o,
                        url: x
                    }),
                    V = async e => {
                        if (b(!0), !j || !A) return;
                        let t = e || x,
                            i = u({
                                integration: o,
                                url: t
                            });
                        if (!i) {
                            b(!1), n(647095).ui({
                                items: [{
                                    label: (0, l.jsx)(n(109939).sA, {
                                        id: "collectionSettingsCreateExternalViewPicker.unsupportedUrlErrorDialog.copyDebuggingInformation",
                                        defaultMessage: "Copy debugging information"
                                    }),
                                    color: "blue",
                                    onAccept: async () => {
                                        let [e, i] = await Promise.all([(0, n(161333).r)(), (0, n(969899).jd)()]);
                                        i({
                                            environment: w,
                                            stringValue: JSON.stringify({
                                                botId: null == y ? void 0 : y.parent_id,
                                                url: t
                                            }, null, 2),
                                            copiedMessage: e.copiedToClipboard
                                        })
                                    }
                                }, {
                                    label: (0, l.jsx)(n(109939).sA, {
                                        id: "collectionSettingsCreateExternalViewPicker.unsupportedUrlErrorDialog.closeButton",
                                        defaultMessage: "Close"
                                    }),
                                    onAccept: () => {}
                                }],
                                showCancel: !1,
                                keepFocus: !1,
                                message: (0, l.jsx)(n(109939).sA, {
                                    id: "collectionSettingsCreateExternalViewPicker.unsupportedUrlErrorDialog.title",
                                    defaultMessage: "This source is currently not supported. Please try a different source."
                                })
                            });
                            return
                        }
                        let r = (0, n(88937).jw)(o.id);
                        await n(994869).startUnfurlRequestForCollection({
                            environment: w,
                            url: t,
                            botIds: r.map(e => e.id),
                            externalCollectionStore: j,
                            externalCollectionViewBlockStore: A,
                            integrationId: o.id
                        });
                        let {
                            host: s
                        } = (0, n(758654).qg)(t);
                        n(691968).lR({ ...(0, n(752242).sl)(a),
                            integrationId: o.id,
                            type: "collection",
                            entity: i.name,
                            domain: s || "",
                            from: "external_picker_settings"
                        }), (0, n(132425).R)({
                            collectionSettingsStore: c,
                            item: {
                                type: "shareSyncedView",
                                integrationName: o.name,
                                integrationIcon: o.info.icon
                            }
                        }), b(!1)
                    };
                if (!j || !A) return null;
                let _ = T.length > 1 ? (0, l.jsx)("div", {
                        style: p.filterContainer,
                        children: (0, l.jsxs)(n(126767).H, {
                            type: n(644154).A.X,
                            style: p.filterContainerScroller,
                            children: [(0, l.jsx)(n(97726).n, {
                                title: (0, l.jsx)("span", {
                                    children: t.formatMessage(g.all)
                                }),
                                on: !(0, n(722371).Pe)(S),
                                hideChevron: !0,
                                onClick: () => {
                                    v(null)
                                }
                            }, "all"), T.map(e => (0, l.jsx)(n(97726).n, {
                                title: (0, l.jsx)("span", {
                                    children: t.formatMessage(g[e])
                                }),
                                on: S === e,
                                hideChevron: !0,
                                onClick: () => {
                                    v(t => t === e ? null : e)
                                }
                            }, e))]
                        })
                    }) : null,
                    R = B ? (0, l.jsx)(n(4458).fI, {
                        width: "100%",
                        justifyContent: "center",
                        children: (0, l.jsx)(n(912946).A, {
                            colorPalette: "blue",
                            size: "lg",
                            onClick: () => {
                                V()
                            },
                            disabled: !1,
                            children: (0, l.jsx)(n(109939).sA, {
                                id: "collectionSettingsCreateExternalViewPicker.syncSourceButton.label",
                                defaultMessage: "Sync Source"
                            })
                        })
                    }) : null,
                    K = B || M.length && E.length ? null : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            style: p.noResults,
                            children: (0, l.jsx)(n(109939).sA, {
                                id: "collectionSettingsCreateExternalViewPicker.noResults.text",
                                defaultMessage: "No results"
                            })
                        }), (0, l.jsxs)("div", {
                            style: p.suggestionBox,
                            children: [(0, l.jsx)(n(16275).I, {
                                icon: n(372181).infoCircleSmallIcon,
                                size: "sm"
                            }), (0, l.jsx)(n(109939).sA, {
                                defaultMessage: "Try different search or paste any {integration} URL",
                                id: "collectionSettingsCreateExternalViewPicker.noResults.help",
                                values: {
                                    integration: o.name
                                }
                            })]
                        })]
                    }),
                    L = M.length && E.length ? (0, l.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        initialFocus: 0,
                        sections: [{
                            key: "collections",
                            items: E.map(e => ({
                                key: e.url,
                                render: t => (0, l.jsx)(n(51831).m, {
                                    content: () => (0, l.jsx)("span", {
                                        children: e.title
                                    }),
                                    placement: "left",
                                    textWrap: !0,
                                    children: i => (0, l.jsx)(n(95582).A, { ...(0, n(63390).A)(i || {}, t),
                                        title: e.title,
                                        icon: (0, l.jsx)("img", {
                                            style: p.style0,
                                            src: e.icon
                                        }),
                                        caption: e.parent.title
                                    })
                                }),
                                action: t => {
                                    "stopPropagation" in t.event && t.event.stopPropagation(), V(e.url)
                                }
                            })),
                            render: e => (0, l.jsx)(n(844565).A, { ...e,
                                disableMobilePadding: !0
                            })
                        }]
                    }) : null,
                    z = "pending" === I || "idle" === I || h;
                if (!y || k && (k.status === n(654070).nG.UNAUTHORIZED || k.status === n(654070).nG.FORBIDDEN)) return (0, l.jsx)(s, {
                    collectionContextStore: a,
                    collectionSettingsStore: c,
                    integration: o
                });
                let D = "rejected" === I || (null == C ? void 0 : C.type) === "failed" || k,
                    F = (0, l.jsx)(r, {
                        onClick: () => {
                            (0, n(76790).a)({
                                collectionSettingsStore: c,
                                item: {
                                    type: "selectAccountForExternalSource",
                                    integration: o,
                                    onAccountSelect: e => {
                                        (0, n(76790).a)({
                                            collectionSettingsStore: c,
                                            item: {
                                                type: "createSyncedViewSource",
                                                externalAuthentication: e
                                            }
                                        })
                                    }
                                }
                            })
                        },
                        integration: o,
                        accountName: y.account_name
                    });
                return (0, l.jsx)(n(669).A, { ...e,
                    footer: R || h ? null : F,
                    title: (0, l.jsx)(n(109939).sA, {
                        defaultMessage: "Select from {integration}",
                        id: "collectionSettingsCreateExternalViewPicker.title",
                        values: {
                            integration: o.name
                        }
                    }),
                    header: !z && "resolved" === I && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(n(310324).Ay, {
                            inputLeft: (0, l.jsx)(n(310324).Zf, {
                                icon: n(921048).magnifyingGlassSmallIcon
                            }),
                            onSubmit: () => {
                                B && V()
                            },
                            style: p.settingsMenuSearchBox,
                            focusInitial: !0,
                            value: x,
                            onChange: e => {
                                f(e.target.value)
                            },
                            placeholder: "Search source or paste a link…"
                        }), B ? null : _]
                    }),
                    children: (0, l.jsxs)(n(4458).VP, {
                        flexGrow: 1,
                        padding: 8,
                        children: [D ? (0, l.jsx)("div", {
                            style: p.errorMessage,
                            children: (0, l.jsx)(n(109939).sA, {
                                id: "collectionSettingsCreateExternalViewPicker.error.unknown",
                                defaultMessage: "Something went wrong.",
                                values: {
                                    integration: o.name
                                }
                            })
                        }) : void 0, z ? h ? (0, l.jsxs)("div", {
                            style: p.syncingData,
                            children: [(0, l.jsx)("span", {
                                children: (0, l.jsx)(n(109939).sA, {
                                    id: "collectionSettingsCreateExternalViewPicker.settingUpSync",
                                    defaultMessage: "Setting up sync…"
                                })
                            }), (0, l.jsx)(n(517334).k, {
                                style: p.style1
                            })]
                        }) : (0, l.jsxs)("div", {
                            style: p.syncingData,
                            children: [(0, l.jsx)("span", {
                                children: (0, l.jsx)(n(109939).sA, {
                                    id: "collectionSettingsCreateExternalViewPicker.loadingData",
                                    defaultMessage: "Loading available sources…"
                                })
                            }), (0, l.jsx)(n(517334).k, {
                                style: p.style1
                            })]
                        }) : void 0, z || "resolved" !== I ? void 0 : (0, l.jsxs)(l.Fragment, {
                            children: [R, K, L]
                        })]
                    })
                })
            }
        },
        80384: (e, t, n) => {
            n.d(t, {
                MG: () => o,
                T1: () => l,
                a1: () => d,
                dt: () => r,
                kg: () => a,
                lC: () => c,
                n_: () => s
            });
            var i = n(296540);
            let l = new(n(815048)).O2("PerformanceToolbar", () => Promise.all([n.e(39225), n.e(45624)]).then(n.bind(n, 476932))),
                o = (0, n(815048)._h)(l, e => e.PerformanceToolbar),
                r = (0, n(815048)._h)(l, e => e.PerformanceToolbarSettings);

            function a() {
                let e = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => (0, n(186452).D)(e, e.RouterStore.state), [e])
            }

            function s() {
                let e = (0, n(533992).v3)(),
                    t = u("performanceToolbarStore"),
                    i = u("isPerformanceToolbarVisible");
                return (0, n(682985).K8)(() => !!t && !!i && i(e, e.RouterStore.state, t.state), [i, e, t])
            }

            function c() {
                let e = u("performanceToolbarStore");
                return (0, n(682985).K8)(() => !!e && e.state.isPerformanceToolbarMounted, [e])
            }

            function d() {
                let e = (0, n(533992).v3)(),
                    t = u("createPerformanceToolbarMouseListeners"),
                    l = u("performanceToolbarStore"),
                    {
                        sidebarExpanded: o,
                        sidebarWidth: r,
                        secondarySidebarExpanded: a,
                        secondarySidebarWidth: s,
                        updateSidebarExpanded: c,
                        updateSidebarWidth: d
                    } = (0, n(682985).K8)(() => ({
                        sidebarExpanded: n(984858).sidebarExpandedStore.state,
                        sidebarWidth: n(984858).sidebarWidthStore.state,
                        secondarySidebarExpanded: n(550830).default.isOpen(),
                        secondarySidebarWidth: n(515492).Ay.getWidth(),
                        updateSidebarExpanded: n(449473).B8.state.expanded,
                        updateSidebarWidth: n(449473).B8.state.width
                    }), []);
                return (0, i.useEffect)(() => {
                    if (l && t) return t({
                        environment: e,
                        setMouseNearPerformanceToolbar: e => l.update(t => ({ ...t,
                            isMouseNearPerformanceToolbar: e
                        })),
                        sidebarExpanded: o,
                        sidebarWidth: r,
                        secondarySidebarExpanded: a,
                        secondarySidebarWidth: s,
                        updateSidebarExpanded: c,
                        updateSidebarWidth: d
                    })
                }, [t, e, l, o, r, a, s, c, d])
            }

            function u(e) {
                let t = a(),
                    [{
                        value: i
                    }] = (0, n(97668).Yb)(() => t ? l.load().then(t => t[e]) : Promise.resolve(void 0), [e, t]);
                return i
            }
        },
        96351: (e, t, n) => {
            n.d(t, {
                B: () => i
            });

            function i({
                openInNew: e,
                url: t,
                makeTabActive: l,
                position: o,
                isNewPage: r,
                environment: a
            }) {
                "tab" === e && l ? (0, n(266527).x)(a, {
                    url: t,
                    position: o,
                    makeTabActive: l,
                    isNewPage: r
                }) : "tab" !== e || l ? "window" === e && (0, n(714770).E)(t) : (0, n(380839).x)(a, {
                    url: t,
                    position: o
                })
            }
        },
        132261: (e, t, n) => {
            n.d(t, {
                DX: () => u,
                FD: () => o,
                Zr: () => r,
                aL: () => i,
                bG: () => a,
                qe: () => d,
                ry: () => l,
                sI: () => c,
                sx: () => s
            });
            let i = 800,
                l = 22,
                o = 24,
                r = 30,
                a = 8,
                s = 4,
                c = 6,
                d = 15,
                u = {
                    baseSidebarItem: { ...n(153262).hG,
                        fontWeight: n(699422).Wy.medium
                    },
                    currentSelectedSidebarItem: {
                        background: n(632079).Tj.sidebarItemSelectedBackground,
                        color: n(632079).Tj.text.primary,
                        ...n(986939).A.isMobile && {
                            boxShadow: `
                            0 1px 0 ${n(632079).Tj.buttonHoveredBackground}
                        `
                        }
                    }
                }
        },
        186452: (e, t, n) => {
            n.d(t, {
                D: () => i
            });

            function i(e, t) {
                return t.route.name, !1
            }
        },
        198347: (e, t, n) => {
            n.d(t, {
                v: () => i
            });

            function i(e, t) {
                n(606047).A.setState({ ...n(606047).A.state,
                    open: !0,
                    from: e
                }), n(606047).A.state.onClose = null == t ? void 0 : t.onClose
            }
        },
        380559: (e, t, n) => {
            n.d(t, {
                u: () => r
            }), n(296540);
            var i = n(474848);
            let l = {
                position: "absolute",
                insetInlineEnd: -2,
                bottom: -2
            };

            function o(e) {
                let {
                    size: t
                } = e;
                return (0, i.jsx)("span", {
                    style: l,
                    children: (0, i.jsx)(n(16275).I, {
                        icon: n(759706).arrowDiagonalUpRightSmallIcon,
                        size: t,
                        colorVariant: "primary",
                        showOutline: !0
                    })
                })
            }

            function r(e) {
                var t, l;
                let {
                    isTablet: r
                } = (0, n(533992).Y0)(), a = (0, n(853284).U)(), s = (0, n(665002).g)(), c = n(986939).A.isMobile ? (0, n(616844).Y5)("left", "number" == typeof(null == (t = e.style) ? void 0 : t.paddingInlineStart) ? null == (l = e.style) ? void 0 : l.paddingInlineStart : 10) : void 0, d = (0, n(960253).I)(() => {
                    let t = n(986939).A.isMobile ? {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            minHeight: 26,
                            fontSize: 16,
                            paddingTop: r ? 4 : 8,
                            paddingBottom: r ? 4 : 8,
                            paddingInlineStart: c,
                            paddingInlineEnd: 10,
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            boxShadow: void 0,
                            marginBottom: e.shouldShowMobileMarginBottom ? 12 : 1
                        } : {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            fontSize: 14,
                            minHeight: e.isBottomItem ? 24 : 27,
                            height: n(132261).Zr,
                            paddingTop: 4,
                            paddingBottom: 4,
                            ...(0, n(153262).ic)()
                        },
                        i = n(986939).A.isMobile ? 24 : e.isLibrary ? n(132261).FD : n(132261).ry;
                    return {
                        wrapper: { ...t,
                            ...e.style,
                            ...s && {
                                transition: "none"
                            }
                        },
                        icon: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            flexGrow: 0,
                            width: n(986939).A.isMobile ? 28 : 22,
                            height: n(986939).A.isMobile ? 24 : 18,
                            marginInlineEnd: e.isLibrary ? 3 : 8,
                            position: "relative"
                        },
                        right: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            flexGrow: 0,
                            height: "100%",
                            ...e.rightStyle
                        },
                        left: {
                            flexShrink: 0,
                            flexGrow: 0,
                            borderRadius: 4,
                            color: n(632079).Tj.text.secondary,
                            width: i,
                            height: i,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginInlineEnd: a ? 6 * !e.icon : e.isLibrary ? 8 : 8 * !e.icon
                        },
                        children: {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexBasis: "auto",
                            whiteSpace: "nowrap",
                            minWidth: 0,
                            overflow: "hidden",
                            textOverflow: e.right && !n(986939).A.isMobile ? "clip" : "ellipsis",
                            ...e.childrenStyle
                        }
                    }
                }, [r, c, e.shouldShowMobileMarginBottom, e.isBottomItem, e.style, e.rightStyle, e.isLibrary, e.icon, e.right, e.childrenStyle, a, s]);
                return (0, i.jsxs)("div", {
                    role: e.role,
                    dir: (0, n(619157).A1)() ? "rtl" : "ltr",
                    "aria-current": e["aria-current"],
                    "aria-expanded": e["aria-expanded"],
                    "aria-owns": e["aria-owns"],
                    "aria-labelledby": e["aria-labelledby"],
                    style: d.wrapper,
                    onFocus: e.onFocus,
                    onBlur: e.onBlur,
                    onMouseMove: e.onMouseMove,
                    onMouseLeave: e.onMouseLeave,
                    onClick: e.onClick,
                    className: e.className,
                    children: [e.left ? (0, i.jsx)("div", {
                        style: d.left,
                        children: e.left
                    }) : void 0, e.icon ? (0, i.jsxs)("div", {
                        style: d.icon,
                        children: [e.icon, e.isAlias ? (0, i.jsx)(o, {
                            size: "xs"
                        }) : void 0]
                    }) : void 0, (0, i.jsx)("div", {
                        style: d.children,
                        children: e.children
                    }), e.right ? (0, i.jsx)("div", {
                        style: d.right,
                        children: e.right
                    }) : void 0]
                })
            }
        },
        398879: (e, t, n) => {
            n.d(t, {
                EG: () => r,
                K5: () => o,
                RH: () => l,
                Yi: () => a,
                ls: () => i
            });
            let i = 32,
                l = 202,
                o = 1e3,
                r = "Want to add a metric? Look for 'src/client/performanceToolbar/config.ts' in notion-next.",
                a = "To disable the toolbar entirely, go to the 'Experiments' panel and look for the 'performance_debugging_toolbar' flag."
        },
        473182: (e, t, n) => {
            n.d(t, {
                $y: () => r,
                jc: () => o,
                x9: () => l
            }), n(296540);
            var i = n(474848);

            function l() {
                let e = (0, n(682985).K8)(() => {
                    let {
                        editsBlocked: e
                    } = n(177123).A.state;
                    return e ? ? !1
                }, []);
                return (0, n(682985).K8)(() => (0, n(717274).Jq)(), []) && e
            }

            function o() {
                return (0, n(682985).K8)(() => {
                    var e;
                    let t = n(731632).A.state;
                    return null == t || null == (e = t.data) ? void 0 : e.invoiceHostedUrl
                }, [])
            }

            function r() {
                var e, t;
                let l = (0, n(533992).v3)(),
                    r = o(),
                    s = (0, n(682985).K8)(() => {
                        var e;
                        let t = n(731632).A.state;
                        return (null == t || null == (e = t.data) ? void 0 : e.overdueInvoiceCount) ? ? 0
                    }, []),
                    c = (0, n(682985).K8)(() => (0, n(887788).h)(l), [l]),
                    d = (e = c, t = s, e ? t > 1 ? (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "Access to Notion is limited because we couldn’t process {overdueInvoiceCount, plural, one {your last payment} other {{overdueInvoiceCount} payments}}.",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.multipleInvoicesMessageContent",
                        values: {
                            overdueInvoiceCount: t
                        }
                    }) : (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "Access to Notion is limited because we couldn’t process your last payment",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.messageContent"
                    }) : (0, i.jsx)(n(109939).sA, {
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberMessageContent",
                        defaultMessage: "Access to Notion is limited"
                    })),
                    u = function(e) {
                        if (!e) return (0, i.jsx)(n(109939).sA, {
                            id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberSecondaryLabel",
                            defaultMessage: "Contact a workspace owner to update your workspace’s payment method"
                        })
                    }(c),
                    g = function(e, t, i) {
                        if (t) {
                            let l = (0, n(987954).a)(i);
                            return n => {
                                l && (a(t, e), l(n))
                            }
                        }
                        return i => {
                            a(t, e), n(599754).Ow()
                        }
                    }(l, c, r),
                    p = c ? (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "View unpaid invoice",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.buttonLabel"
                    }) : (0, i.jsx)(n(109939).sA, {
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberButtonLabel",
                        defaultMessage: "View workspace owner"
                    });
                return {
                    clickAction: g,
                    ctaMessage: p,
                    primaryMessage: d,
                    secondaryMessage: u,
                    ctaIcon: c ? n(213458).arrowUpRightSquareIcon : n(11056).personCircleFillIcon,
                    tooltipBodyMessage: c ? p : u,
                    isWorkspaceOwner: c,
                    overdueInvoiceCount: s
                }
            }

            function a(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "subscription_uncollectible_blurred_experience_cta_clicked",
                        eventProperties: {
                            is_workspace_owner: e
                        }
                    }
                })
            }
        },
        515487: (e, t, n) => {
            n.d(t, {
                r: () => o
            });
            var i = n(296540),
                l = n(474848);

            function o({
                loadingMessage: e
            }) {
                let t = (0, n(934877).A)({
                    visibility: !0,
                    delayShow: 400
                });
                return (0, l.jsx)(n(4458).fI, {
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    children: t ? (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)(n(517334).k, {}), e ? (0, l.jsx)("div", {
                            className: "x13fj5qh x1b8rd1j",
                            children: e
                        }) : void 0]
                    }) : void 0
                })
            }
        },
        665002: (e, t, n) => {
            n.d(t, {
                H: () => s,
                g: () => c
            });
            var i = n(296540),
                l = n(474848);
            let o = {
                    disableHoverAnimations: !1
                },
                r = {
                    disableHoverAnimations: !0
                },
                a = (0, i.createContext)(o);

            function s({
                disableHoverAnimations: e,
                children: t
            }) {
                return (0, l.jsx)(a.Provider, {
                    value: e ? r : o,
                    children: t
                })
            }

            function c() {
                return (0, i.useContext)(a).disableHoverAnimations
            }
            a.displayName = "SidebarItemHoverAnimationContext"
        },
        690004: (e, t, n) => {
            n.d(t, {
                r: () => i
            });
            let i = (0, n(477465).Dv)("importEvernote")
        },
        710426: (e, t, n) => {
            n.d(t, {
                Ay: () => o,
                MR: () => a
            }), n(18107), n(967357), n(898992), n(354520), n(581454);
            var i = n(296540),
                l = n(474848);
            let o = i.memo(function(e) {
                let {
                    store: t,
                    from: i,
                    type: o,
                    canEditItem: a,
                    itemDepth: s,
                    isHovered: c,
                    isFocused: d,
                    onToggle: u
                } = e, p = n(986939).A.isMobile || c || d, x = (0, n(682985).K8)(() => {
                    var e;
                    let i = (0, n(162782).s)(t),
                        l = t.isPlaceholderWorkflowTemplateBlock(),
                        o = null == (e = t.getCollectionStoreIfSingleSource()) ? void 0 : e.isSyncedCollection(),
                        r = t.isPersonProfile(),
                        s = t.isPeopleCollectionViewPage();
                    return !!(t.getType() && a && !i && !l && !o && !r && !s)
                }, [t, a]), f = function(e) {
                    let {
                        showRightIcons: t
                    } = e;
                    return (0, n(960253).I)(() => ({
                        iconContainer: {
                            display: "flex",
                            paddingInlineStart: 3,
                            ...t ? {} : { ...n(69916).Qg,
                                display: "block"
                            }
                        }
                    }), [t])
                }({
                    showRightIcons: p
                });
                return o === n(171231).yy ? null : (0, l.jsx)("div", {
                    style: f.iconContainer,
                    children: "library" === i ? null : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(g, {
                            store: t,
                            from: i,
                            type: e.type,
                            itemIndex: e.itemIndex,
                            itemDepth: s
                        }), x ? (0, l.jsx)(r, {
                            store: t,
                            onToggle: u,
                            isTopLevelItem: 0 === s,
                            from: i,
                            type: o
                        }) : void 0]
                    })
                })
            });

            function r(e) {
                let {
                    store: t,
                    onToggle: i,
                    isTopLevelItem: o,
                    from: r,
                    type: a
                } = e, c = (0, n(533992).v3)(), d = (0, n(109939).tz)(), g = (0, n(682985).K8)(() => t.isCollectionView(), [t]), p = (0, n(682985).K8)(() => t.getOwnedAndLinkedCollectionStores(), [t]), x = (0, n(682985).K8)(() => {
                    var e;
                    let i = null == (e = t.getCollectionViewStores().at(0)) ? void 0 : e.id;
                    if (!i) return;
                    let l = n(547131).p.createChildStore(t, {
                        table: n(832375).Gy1,
                        id: i
                    });
                    return null == l ? void 0 : l.getFormatStore().getValue()
                }, [t]), f = d.formatMessage(n(925021).v.addAPageInside);
                return g && !x && 0 === p.length ? (0, l.jsx)(s, {
                    disabled: !0
                }) : p.length <= 1 ? (0, l.jsx)(n(51831).m, {
                    content: () => f,
                    placement: "bottom",
                    children: e => {
                        let d = { ...e,
                            onClick: e => {
                                var l;
                                let s = (null == (l = p[0]) ? void 0 : l.getParentBlockStore()) ? ? t;
                                n(245757).ru({
                                    store: s,
                                    shouldNavigateToSource: !1,
                                    environment: c,
                                    analytics: {
                                        from: r,
                                        type: a
                                    },
                                    toggleOptions: {
                                        onToggle: i,
                                        isTopLevelItem: o
                                    }
                                })
                            }
                        };
                        return (0, l.jsx)(s, {
                            events: d
                        })
                    }
                }) : (0, l.jsx)(n(51831).m, {
                    content: () => f,
                    placement: "bottom",
                    children: e => (0, l.jsx)(n(656252).A, {
                        popupType: n(986939).A.isMobile ? n(656252).z.BottomSheet : n(656252).z.Popup,
                        content: e => (0, l.jsx)(u, {
                            blockStore: t,
                            parent: e,
                            from: r,
                            type: a
                        }),
                        children: t => (0, l.jsx)(s, {
                            events: (0, n(63390).A)(e, t)
                        })
                    })
                })
            }
            let a = {
                button: n(986939).A.isMobile ? {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: 4,
                    marginInlineStart: 0
                } : {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                    marginInlineStart: 4
                }
            };

            function s(e) {
                let t = (0, n(109939).tz)();
                return (0, l.jsx)(n(64960).Ay, {
                    ariaLabel: t.formatMessage(n(925021).v.addAPageInside),
                    style: a.button,
                    disabled: e.disabled,
                    disabledFeedback: e.disabled,
                    ...e.events,
                    children: (0, l.jsx)(n(16275).I, {
                        icon: n(638501).plusSmallIcon,
                        size: "sm",
                        colorVariant: n(986939).A.isMobile ? "tertiary" : "secondary"
                    })
                })
            }
            let c = {
                display: "flex",
                alignItems: "center",
                whiteSpace: "pre"
            };

            function d({
                itemProps: e,
                store: t,
                disabled: i,
                blockStore: o
            }) {
                let r = (0, n(682985).K8)(() => t.getIcon(), [t]),
                    a = (0, n(682985).K8)(() => {
                        var e;
                        return (null == (e = t.getParentBlockStore()) ? void 0 : e.id) !== o.id
                    }, [t, o]);
                return (0, l.jsx)(n(95582).A, { ...e,
                    disabled: i,
                    disabledFeedback: !0,
                    title: (0, l.jsx)("div", {
                        style: c,
                        children: (0, l.jsx)(n(627918).A, {
                            store: t
                        })
                    }),
                    icon: (0, l.jsx)(n(734914).A, {
                        icon: r,
                        size: 14,
                        isEmptyPage: !1,
                        isAlias: a,
                        iconRecordCategory: "collection"
                    })
                })
            }

            function u(e) {
                let {
                    blockStore: t,
                    parent: i,
                    from: o,
                    type: r
                } = e, a = (0, n(533992).v3)(), s = (0, n(682985).K8)(() => t.getOwnedAndLinkedCollectionStores().filter(e => !e.isSyncedCollection()), [t]), c = (0, n(682985).K8)(() => s.map(e => !n(352441).Q.getData(a, {
                    collectionId: e.id,
                    spaceId: e.getSpaceId()
                })), [s, a]), u = {
                    menuType: n(986939).A.isMobile ? n(649476).gu.Modal : n(649476).gu.Popup,
                    right: n(986939).A.isMobile ? (0, l.jsx)(n(109939).sA, { ...n(789722).W.done
                    }) : void 0
                }, g = {
                    key: "collections",
                    render: e => (0, l.jsx)(n(844565).A, { ...e,
                        title: (0, l.jsx)(n(109939).sA, {
                            defaultMessage: "Add to",
                            id: "sidebarItem.addAPageInside.popup.addTo"
                        })
                    }),
                    items: s.map((e, i) => ({
                        key: e.id,
                        render: n => (0, l.jsx)(d, {
                            itemProps: n,
                            store: e,
                            disabled: c[i],
                            blockStore: t
                        }),
                        action: t => {
                            n(245757).ru({
                                store: e,
                                environment: a,
                                shouldNavigateToSource: !0,
                                analytics: {
                                    from: o,
                                    type: r
                                }
                            })
                        }
                    }))
                };
                return (0, l.jsx)(n(747369).A, { ...u,
                    children: (0, l.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        onAccept: i.close,
                        initialFocus: void 0,
                        sections: [g]
                    })
                })
            }

            function g(e) {
                let {
                    store: t,
                    from: i,
                    type: o,
                    itemDepth: r,
                    itemIndex: s
                } = e, c = (0, n(109939).tz)(), d = (0, n(533992).v3)(), u = e => {
                    let l = (0, n(297311).U)(t);
                    (0, n(472709).L)({
                        environment: d,
                        store: t
                    }), n(899964).it({
                        environment: d,
                        stores: [t],
                        left: e.clientX,
                        top: e.clientY,
                        showInput: !1,
                        actionSectionGroupKey: "sidebar_outliner",
                        analyticsFrom: "sidebar_more_menu",
                        optionalAnalyticsProperties: {
                            teamStore: l,
                            type: 0 === r ? "top_level" : "nested",
                            outliner_type: o,
                            outliner_position: s,
                            outliner_depth: r,
                            outliner_location: "main_sidebar" === i ? "sidebar" : "library" === i ? "library" : "pane"
                        }
                    })
                }, g = "bookmarks" === o ? c.formatMessage({
                    defaultMessage: "Remove, rename, and more…",
                    id: "sidebarItem.favoritedPageMenuButton.tooltip"
                }) : "myMeetings" === o ? c.formatMessage({
                    defaultMessage: "Copy, move, and more…",
                    id: "sidebarItem.meetingNoteMenuButton.tooltip"
                }) : c.formatMessage({
                    defaultMessage: "Delete, duplicate, and more…",
                    id: "sidebarItem.pageMenuButton.tooltip"
                });
                return (0, l.jsx)(n(51831).m, {
                    content: () => g,
                    placement: "bottom",
                    children: e => (0, l.jsx)(n(64960).Ay, {
                        ariaLabel: g,
                        style: a.button,
                        onClick: u,
                        ...e,
                        children: (0, l.jsx)(n(16275).I, {
                            icon: n(361226).ellipsisSmallIcon,
                            size: "sm",
                            colorVariant: n(986939).A.isMobile ? "tertiary" : "secondary"
                        })
                    })
                })
            }
        },
        731632: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var i = () => n(546605);
            class l extends i().Store {}
            let o = new l
        },
        734914: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(296540);
            var i = n(474848);
            let l = {
                wrap: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    flexGrow: 0,
                    width: n(986939).A.isMobile ? 28 : 22,
                    height: n(986939).A.isMobile ? 24 : 18,
                    position: "relative"
                }
            };

            function o(e) {
                let {
                    icon: t,
                    isAlias: o,
                    isEmptyPage: r,
                    iconStyle: a,
                    size: s,
                    iconRecordCategory: c
                } = e;
                return (0, i.jsxs)("div", {
                    style: l.wrap,
                    children: [(0, i.jsx)(n(569553).B6, {
                        disabled: !0,
                        icon: t,
                        iconRecordCategory: c,
                        isEmptyPage: r,
                        size: s ? ? 19,
                        style: a
                    }), o ? (0, i.jsx)(n(321825).H, {
                        size: "sm"
                    }) : void 0]
                })
            }
        },
        746801: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var i = () => n(546605);
            class l extends i().Store {
                static limitIncrement = 20;
                static resultsCacheTTL = 2 * n(627179).Xb;
                static incrementScrollOffset = 200;
                getInitialState() {
                    return {
                        searchQuery: "",
                        searchLimit: l.limitIncrement,
                        searchPopupOpen: !1,
                        addingPage: !1
                    }
                }
            }
            let o = l
        },
        831957: (e, t, n) => {
            n.d(t, {
                k: () => i
            });

            function i(e, t) {
                let i = n(986939).A.isMobile ? 2 : 3;
                return t.slice(0, i)
            }
        },
        925021: (e, t, n) => {
            n.d(t, {
                K: () => l,
                v: () => i
            });
            let i = (0, n(109939).YK)({
                    addAPageInside: {
                        defaultMessage: "Add a page inside",
                        id: "sidebarItem.addAPageInside.tooltip"
                    }
                }),
                l = (0, n(109939).YK)({
                    addPageTooltip: {
                        defaultMessage: "Add a page",
                        id: "sidebar.addButton.addPageTooltip"
                    }
                })
        },
        961489: (e, t, n) => {
            function i(e) {
                let {
                    environment: t,
                    preference: i
                } = e, l = (0, n(904434).R$)(t);
                l && (0, n(377796).createAndCommit)({
                    environment: t,
                    userAction: "userSettingsActions.setContrastPreference",
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: l,
                            transaction: e,
                            data: {
                                contrast_preference: i
                            }
                        })
                    }
                })
            }

            function l(e) {
                let t = (0, n(904434).R$)(e);
                return (null == t ? void 0 : t.getSettingsStore().getKeyStore("contrast_preference").getValue()) ? ? "auto"
            }

            function o(e) {
                return void 0 !== (0, n(904434).R$)(e)
            }
            n.d(t, {
                S4: () => i,
                Wu: () => l,
                rD: () => o
            })
        }
    }
]);