"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [31426, 65594, 96772], {
        10638: (e, t, i) => {
            i.r(t), i.d(t, {
                shouldShowOnboardingPlaceholder: () => o
            });

            function o(e) {
                var t;
                let {
                    pageStore: o,
                    firstGettingStartedPageId: n,
                    postOnboardingAgentConfig: l
                } = e;
                if (!n) return !1;
                let r = o.id === n;
                if (!l.thread_id || !(0, i(596244).B)(l)) return !1;
                let a = (0, i(811853).hasOnboardingAgentMutatedFirstBlock)({
                        postOnboardingAgentConfig: l
                    }),
                    s = (0, i(73233).getOnboardingAgentVariant)(),
                    d = i(218744).default.getEligibleGroup({
                        experimentId: "uxr_debug_onboarding_agent",
                        disableExposureLogging: !0
                    });
                return r && !a && ("v1" === (t = s) || "v2" === t || "v3" === t || (0, i(565719).w)(d))
            }
        },
        13042: (e, t, i) => {
            i.d(t, {
                d: () => o
            });

            function o(e) {
                if (!e) return !1;
                let t = e.getFormat();
                if (!t) return !1;
                let i = t.marketplace_listing_id;
                return !!i && i.length > 0
            }
        },
        24296: (e, t, i) => {
            i.d(t, {
                j: () => l
            });
            var o = () => i(375622);
            class n extends o().A {}
            let l = new n
        },
        28847: (e, t, i) => {
            i.d(t, {
                H: () => a
            });
            var o = i(296540),
                n = i(474848);

            function l({
                onMouseEnter: e,
                onMouseLeave: t,
                headerControls: i
            }) {
                return (0, n.jsx)("div", {
                    onMouseEnter: e,
                    onMouseLeave: t,
                    children: i
                })
            }
            let r = {
                style0: {
                    display: "inline-block"
                },
                style1: {
                    pointerEvents: "none"
                },
                style2: {
                    display: "inline-block",
                    verticalAlign: "top"
                },
                style3: {
                    paddingInlineStart: i(57461).Gt.paddingInlineStart
                },
                style4: {
                    marginInlineStart: -2
                },
                style5: {
                    display: "flow-root",
                    pointerEvents: "auto"
                }
            };

            function a(e) {
                let {
                    store: t,
                    hasCover: a,
                    headerFocusStore: s,
                    headerControls: d,
                    isHeaderHovered: c = !1,
                    isEditable: u,
                    openMenuOnMount: p,
                    openMenuOnMountCallback: g,
                    pageViewBlockStore: m,
                    discussionInputStore: f,
                    handleHeaderMouseEnter: h,
                    handleHeaderMouseLeave: S,
                    hideTitleIfEmpty: y,
                    isInPageLayoutModuleEditor: v = !1,
                    layoutModule: b,
                    disabled: x,
                    viewsModuleCollectionContextStore: k,
                    ...C
                } = e, w = (0, i(533992).v3)(), {
                    isAndroid: _
                } = (0, i(533992).Y0)(), [I, P] = (0, o.useState)(() => !!_);
                (0, o.useEffect)(() => {
                    (async () => {
                        if ((0, i(59406).w)(w)) {
                            let e = w.RouterStore.getState();
                            if ((0, i(132702).bh)(e.route)) {
                                await t.load();
                                let e = (0, i(891711).GN)(t),
                                    o = null == e ? void 0 : e.getSiteStore();
                                await (null == o ? void 0 : o.load());
                                let n = null == o ? void 0 : o.getSettings(),
                                    l = null == n ? void 0 : n.embedSettings;
                                P(!(null != l && l.hideTitle));
                                return
                            }
                        }
                        P(!0)
                    })()
                }, [w, t]);
                let M = (0, i(682985).K8)(() => (0, i(447036).cq)(t), [t]),
                    A = (0, i(682985).K8)(() => M && (i(475097).default.isSidePeekOpen() || i(475097).default.isSidePeekClosingStore.state), [M]),
                    {
                        context: j
                    } = C,
                    B = i(166654).m.has(j),
                    T = i(986939).A.isMobile && !a,
                    K = !i(986939).A.isMobile && C.isInSidePeek || B,
                    V = (0, i(960253).I)(() => !K || B ? {
                        container: {}
                    } : {
                        container: {
                            display: "flex",
                            alignItems: "flex-start"
                        }
                    }, [K, B]),
                    E = (0, i(682985).K8)(() => t.isExternalObjectInstancePageBlockStore() && t.hasError() ? t : null, [t]),
                    R = (0, i(682985).K8)(() => t.canEdit(), [t]),
                    L = (0, i(616844).Y5)("left", 0),
                    D = (0, i(616844).Y5)("right", 0),
                    F = (0, i(682985).K8)(() => (0, i(335818).NR)(t, w), [t, w]),
                    O = (0, o.useCallback)(e => {
                        let t = e.target;
                        void 0 !== t && t instanceof HTMLElement && (0, i(768397).p)(t) && s.setState(!0)
                    }, [s]),
                    z = (0, o.useCallback)(() => {
                        s.setState(!1)
                    }, [s]),
                    W = (0, n.jsx)("div", {
                        className: M ? i(828432).S6D : void 0,
                        style: { ...r.style5,
                            ...B && r.style2
                        },
                        children: (0, n.jsx)(i(216994).v, {
                            store: t,
                            isEditable: u,
                            hasCover: a,
                            isInSidePeek: C.isInSidePeek,
                            openMenuOnMount: p,
                            openMenuOnMountCallback: g,
                            isInPageLayoutModuleEditor: v,
                            isInlinePostTitle: B
                        }, t.id)
                    }),
                    H = B ? (0, n.jsx)(i(385827).s, {
                        style: r.style0,
                        allowSelectionWithin: !1,
                        children: W
                    }) : W,
                    N = (0, i(682985).K8)(() => {
                        var e;
                        return (0, i(247438).w9s)(null == (e = t.getTitleStore()) ? void 0 : e.getValue())
                    }, [t]),
                    U = B ? { ...e.extraStyles,
                        display: "inline-block",
                        verticalAlign: "top"
                    } : e.extraStyles,
                    q = (0, n.jsx)(i(119359).s, {
                        store: t,
                        disabled: x,
                        hideText: y && N || !I,
                        ...C,
                        extraStyles: U
                    }),
                    Y = (0, i(682985).K8)(() => t.getAssociatedCollectionStore(), [t]),
                    Q = (0, i(682985).K8)(() => !!Y && !!b && (0, i(410489).v)({
                        collectionStore: Y,
                        module: b,
                        isMobile: i(986939).A.isMobile
                    }), [Y, b]),
                    G = (0, i(926524).o)(t, k),
                    X = Q || G,
                    $ = (0, i(682985).K8)(() => null == Y ? void 0 : Y.getSchema(), [Y]),
                    J = $ && b ? (0, i(287753).LD)({
                        collectionSchema: $,
                        module: b
                    }) : void 0,
                    Z = (0, i(643160).yf)(),
                    [ee, et] = (0, o.useState)(!1),
                    ei = (0, o.useMemo)(() => {
                        let e = (null == J ? void 0 : J.length) ? i(986939).A.isMobile ? 20 : i(209046).Lb : void 0,
                            o = !i(986939).A.isMobile && (c || ee);
                        return (0, n.jsxs)(n.Fragment, {
                            children: [Y && X ? (0, n.jsxs)(i(4458).fI, {
                                gap: 4,
                                marginTop: 4,
                                paddingBottom: e,
                                children: [Q ? (0, n.jsx)(i(22521).LR, {
                                    collectionStore: Y,
                                    pageViewBlockContext: j
                                }) : void 0, (0, n.jsx)(i(22521).Rm, {
                                    pageStore: t,
                                    viewsModuleCollectionContextStore: k
                                })]
                            }) : void 0, (null == J ? void 0 : J.length) ? (0, n.jsx)("div", {
                                style: {
                                    paddingTop: i(986939).A.isMobile && !X ? i(209046).Lb : void 0,
                                    ...Z ? r.style3 : r.style4
                                },
                                onMouseEnter: () => et(!0),
                                onMouseLeave: () => et(!1),
                                children: (0, n.jsx)(i(120805).h, {
                                    context: j,
                                    disabled: x,
                                    store: t,
                                    variant: "pinned",
                                    layoutModule: b,
                                    propertyIds: J,
                                    showDescriptionIcons: o,
                                    wrapper: e => (0, n.jsx)(i(394112).vV, {
                                        children: e
                                    }),
                                    customization: {
                                        disableContainerPadding: !0,
                                        disableLastRowBottomPadding: !0
                                    }
                                })
                            }) : void 0]
                        })
                    }, [Y, b, j, J, x, t, Z, X, k, Q, c, ee, et]),
                    eo = (0, i(682985).K8)(() => (0, i(336136).Fm)(t), [t]),
                    en = (0, i(682985).K8)(() => !!t.getIcon(), [t]),
                    el = i(986939).A.isMobile && a && !en && !(d && o.isValidElement(d) && o.Children.count(d.props.children) > 0);
                return A ? (0, n.jsxs)(i(28111).A, {
                    name: "PageTitleWithIcon",
                    children: [(0, n.jsxs)(i(385827).s, {
                        allowSelectionWithin: !0,
                        children: [(0, n.jsx)(l, {
                            onMouseEnter: h,
                            onMouseLeave: S,
                            headerControls: d
                        }), I ? H : void 0, q]
                    }), ei]
                }) : (0, n.jsxs)(i(28111).A, {
                    name: "PageTitleWithIcon",
                    children: [(0, n.jsx)("div", {
                        style: F,
                        onMouseEnter: h,
                        onMouseLeave: S,
                        children: (0, n.jsxs)("div", {
                            style: {
                                maxWidth: "100%",
                                paddingInlineStart: L,
                                width: "100%"
                            },
                            onClick: async e => {
                                if (eo) {
                                    let e = await i(310639).assistantDependency.load();
                                    await e.assistantEditActions.saveAssistantCreatedPage(w)
                                }(0, i(705660).SQ)(e, i(705660).y$.Click)
                            },
                            children: [(0, n.jsxs)(i(385827).s, {
                                onFocus: O,
                                onBlur: z,
                                allowSelectionWithin: !1,
                                style: r.style1,
                                children: [T ? d : void 0, I && !K ? H : void 0, T ? void 0 : d]
                            }), (0, n.jsx)("div", {
                                style: {
                                    paddingInlineEnd: D,
                                    marginTop: el ? 8 : void 0
                                },
                                children: K ? (0, n.jsxs)("div", {
                                    style: V.container,
                                    children: [I ? H : void 0, q]
                                }) : q
                            }), E ? (0, n.jsx)(i(940594).A, {
                                store: E,
                                canEdit: R
                            }) : null]
                        })
                    }), ei]
                })
            }
        },
        28916: (e, t, i) => {
            i.d(t, {
                d: () => c
            }), i(898992), i(672577), i(430670), i(581454);
            var o = i(296540);
            let n = (0, i(815048)._h)(new(i(815048)).O2("FeedItemPresence", () => Promise.all([i.e(75134), i.e(34677), i.e(35313)]).then(i.bind(i, 410277))), e => e.FeedItemPresence);
            var l = i(474848);

            function r(e) {
                let {
                    store: t,
                    discussionStore: n,
                    isFirst: r,
                    isOnly: a,
                    discussionLocation: s,
                    collapsed: d
                } = e, c = (0, i(533992).v3)(), u = (0, o.useMemo)(() => new(i(478597)).A(c, (0, i(226221).e)(t.pointer.spaceId)), [c, t.pointer.spaceId]), {
                    value: p
                } = (0, i(815048).fJ)(i(656915).commentsDependency);
                return p ? (0, l.jsx)(i(656915).PW, {
                    store: n,
                    format: p.discussionHelpers.DiscussionFormat.Page,
                    isFirst: r,
                    isOnly: a,
                    collapsed: d,
                    showResolveButtonByDefaultIfPossible: !1,
                    blockStore: t,
                    discussionInputStore: u,
                    ..."feed_item_top_level_discussion" === s ? {
                        discussionLocation: "feed_item_top_level_discussion",
                        pageVisitStore: e.pageVisitStore,
                        presenceStore: e.presenceStore
                    } : {
                        discussionLocation: "page_discussion"
                    }
                }, n.id) : null
            }

            function a(e) {
                let {
                    store: t,
                    from: n
                } = e, r = (0, i(533992).v3)(), a = (0, o.useMemo)(() => new(i(478597)).A(r, (0, i(226221).e)(t.pointer.spaceId)), [r, t.pointer.spaceId]), s = (0, o.useRef)(null), d = (0, o.useCallback)(() => {
                    (0, i(525779).clear)({
                        environment: r
                    })
                }, [r]), c = function(e) {
                    let {
                        environment: t,
                        discussionInputStore: n,
                        store: l,
                        from: r
                    } = e, a = (0, i(682985).uB)(void 0, i(823756).A), s = (0, o.useCallback)(e => {
                        let o = l.id;
                        null === i(898128)._ || void 0 === i(898128)._ || i(898128)._.setToggleState({
                            environment: t,
                            type: "discussion",
                            id: o
                        }, e)
                    }, [t, l.id]);
                    return (0, o.useCallback)(async () => {
                        let e = n.state.textStore.getValue(),
                            o = n.state.files;
                        if ((!e || 0 === e.length) && 0 === o.length) return;
                        let d = await i(864850).T.formulas.load(),
                            c = (0, i(226221).e)(l.pointer.spaceId),
                            u = t.idCreator.getSpaceIdCreatorSync(c).deterministicIdInSavedSpace(i(832375).$YH, `${l.id}-discussion-0`),
                            p = u ? i(581068).c.createChildStore(l, {
                                table: i(832375).$YH,
                                id: u,
                                spaceId: c
                            }) : void 0;
                        await (null == p ? void 0 : p.load());
                        let g = !(null != p && p.getResolved()),
                            {
                                performResult: m
                            } = (0, i(377796).createAndCommit)({
                                userAction: "PageDiscussion.useSubmitNewDiscussion",
                                environment: t,
                                cellTarget: {
                                    spaceWithId: c
                                },
                                canUndo: !0,
                                perform: n => (0, i(151002).i)({
                                    discussionId: g ? u : void 0,
                                    environment: t,
                                    type: "default",
                                    blockStore: l,
                                    commentTextValue: e || [],
                                    transaction: n,
                                    files: o,
                                    formulasModule: d,
                                    fromOverride: r
                                }),
                                skipUpdatingEditedMetadata: !0
                            });
                        if (n.reset(), a.setState({ ...a.state,
                                forceDiscussionOpen: !1
                            }), s(!0), m && !i(986939).A.isMobile) {
                            await i(374176).default.afterNextFlush();
                            let e = i(115995).A.find(e => e.getStore().id === m.id);
                            e && (0, i(739204).z)({
                                store: e.getInputStore().state.textStore
                            })
                        }
                    }, [n, t, a, s, l, r])
                }({
                    environment: r,
                    discussionInputStore: a,
                    store: t,
                    from: n
                });
                (0, i(336494).b)(i(24296).j, () => ({
                    getNode: () => s.current,
                    getBlockStore: () => t,
                    getInputStore: () => a
                }), [a]);
                let {
                    value: u
                } = (0, i(815048).fJ)(i(656915).commentsDependency);
                return u ? (0, l.jsx)("div", {
                    ref: s,
                    children: (0, l.jsx)(i(656915).bd, {
                        showAvatar: !0,
                        parentStore: t,
                        onSubmit: c,
                        onCancel: d,
                        discussionInputStore: a,
                        discussionFormat: u.discussionHelpers.DiscussionFormat.Page,
                        isMobileSlideUpMenu: !1,
                        shouldSaveUnsentComments: !0,
                        canDrop: !0,
                        blockStore: t
                    })
                }) : null
            }
            let s = {
                pageViewDiscussion: {
                    width: "100%",
                    margin: "0 auto"
                },
                repliesButton: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    cursor: "pointer",
                    padding: 4,
                    borderRadius: 6
                },
                replyCount: {
                    fontSize: 14,
                    color: i(632079).Tj.text.primary
                },
                lastReplyTime: {
                    fontSize: 12,
                    color: i(632079).Tj.text.tertiary
                }
            };

            function d(e) {
                let {
                    store: t,
                    showDiscussionInput: d,
                    unresolvedDiscussionStores: c,
                    discussionLocation: u,
                    collapsed: g
                } = e, m = (0, i(533992).v3)(), f = (0, i(109939).tz)(), {
                    value: h
                } = (0, i(815048).fJ)(i(864850).T.formulas), {
                    value: S
                } = (0, i(815048).fJ)(i(656915).commentsDependency), y = (0, i(83208).X)("block_reactions"), v = (0, i(682985).K8)(() => c.find(e => e.getReactions().length > 0), [c]), b = (0, i(682985).K8)(() => c.find(e => e.getCommentPointers().length > 0), [c]), x = !!v, k = (0, i(682985).K8)(() => (null == b ? void 0 : b.getCommentPointers().length) ? ? 0, [b]), C = (0, i(682985).K8)(() => {
                    let e = [...(null == b ? void 0 : b.getCommentStores()) ? ? []].reverse().flatMap(e => {
                        let t = e.getCreatedByStore();
                        return t ? [t] : []
                    });
                    return i(381453).hS(e, "id").slice(0, 5)
                }, [b]), w = (0, i(682985).K8)(() => {
                    let e = null == b ? void 0 : b.getLastComment(),
                        t = null == e ? void 0 : e.getCreatedTime();
                    return t ? (0, i(850640).eV)({
                        value: i(906745).DateTime.fromMillis(t),
                        preset: "time",
                        locale: i(849917).locale
                    }) : void 0
                }, [b]), _ = (0, o.useCallback)(e => {
                    if (!b) return;
                    let o = e.target;
                    (0, i(919332).I)({
                        environment: m,
                        discussionStore: b,
                        rect: o.getBoundingClientRect(),
                        blockStore: t,
                        discussionLocation: "feed_item_top_level_discussion"
                    })
                }, [m, t, b]), I = (0, i(960253).I)(() => {
                    let e = {
                        paddingTop: c.length > 0 ? 12 : -1 * i(42615).Ql / 2,
                        paddingBottom: 12,
                        paddingInlineEnd: 4
                    };
                    return {
                        newPageDiscussionWrapper: { ..."feed_item_top_level_discussion" === u ? {
                                padding: 0
                            } : e
                        },
                        reactionButton: { ...null == S ? void 0 : S.REACTION_PILL_STYLE,
                            width: 40,
                            paddingInlineStart: 10,
                            paddingInlineEnd: 10,
                            borderRadius: 13,
                            borderWidth: 1,
                            borderColor: i(632079).Tj.border.secondary,
                            borderStyle: "solid",
                            ...i(986939).A.isMobile ? null == S ? void 0 : S.MOBILE_REACTION_PILL_STYLE_OVERRIDES : {},
                            border: "none",
                            background: i(632079).Tj.background.secondary
                        }
                    }
                }, [c.length, S, u]), P = (0, i(960253).I)(() => ({
                    presenceReactionsContainer: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: y ? "space-between" : "flex-end",
                        ...i(986939).A.isMobile ? {
                            justifyContent: "flex-start",
                            gap: 4
                        } : {}
                    }
                }), [y]);
                if ("feed_item_top_level_discussion" === u && (null == e ? void 0 : e.pageViewBlockContext) === i(166654).R.PageInFeed) {
                    let o = e.pageVisitStore && e.presenceStore,
                        r = o && i(986939).A.isMobile;
                    return (0, l.jsxs)(i(4458).VP, {
                        gap: 12,
                        children: [(0, l.jsxs)("div", {
                            style: P.presenceReactionsContainer,
                            children: [y ? (0, l.jsxs)(i(4458).fI, {
                                gap: 6,
                                minHeight: 27,
                                children: [v ? (0, l.jsx)(i(656915).PH, {
                                    focused: !0,
                                    disableShadow: !0,
                                    parentStore: v,
                                    discussionLocation: e.discussionLocation,
                                    showAddReactionButton: !0,
                                    additionalItems: r ? (0, l.jsx)(n, {
                                        pageVisitStore: e.pageVisitStore,
                                        presenceStore: e.presenceStore,
                                        rootStore: t,
                                        enableFacepile: !1,
                                        isShowingInFeed: !0
                                    }) : void 0
                                }) : void 0, x ? void 0 : (0, l.jsx)(i(374533).A, {
                                    ariaLabel: f.formatMessage({
                                        defaultMessage: "Add reaction",
                                        id: "ReactionBar.newReaction.ariaLabel"
                                    }),
                                    hasBackground: !1,
                                    showShadow: !1,
                                    style: I.reactionButton,
                                    icon: () => (0, l.jsx)(i(16275).I, {
                                        icon: i(704694).r,
                                        colorVariant: "secondary"
                                    }),
                                    onClick: e => void(0, i(593342).O)({
                                        environment: m,
                                        blockStore: t,
                                        rect: e.currentTarget.getBoundingClientRect(),
                                        skipOpeningDiscussionOnSubmit: !0,
                                        formulasModule: h
                                    })
                                })]
                            }) : void 0, x && r || !o ? void 0 : (0, l.jsx)(n, {
                                pageVisitStore: e.pageVisitStore,
                                presenceStore: e.presenceStore,
                                rootStore: t,
                                maxUsers: 5,
                                enableFacepile: !i(986939).A.isMobile,
                                isShowingInFeed: !0
                            })]
                        }), k > 0 ? (0, l.jsx)(i(64960).Ay, {
                            style: s.repliesButton,
                            onClick: _,
                            children: (0, l.jsxs)(i(4458).fI, {
                                alignItems: "center",
                                gap: 8,
                                children: [(0, l.jsx)(p, {
                                    commenters: C
                                }), (0, l.jsxs)(i(4458).fI, {
                                    alignItems: "baseline",
                                    gap: 8,
                                    children: [(0, l.jsx)("div", {
                                        style: s.replyCount,
                                        children: (0, l.jsx)(i(109939).sA, {
                                            defaultMessage: "{replyCount, plural, one {{replyCount} reply} other {{replyCount} replies}}",
                                            id: "pageLayout.discussionsModule.replyCount",
                                            values: {
                                                replyCount: k
                                            }
                                        })
                                    }), w ? (0, l.jsx)("div", {
                                        style: s.lastReplyTime,
                                        children: w
                                    }) : void 0]
                                })]
                            })
                        }) : (0, l.jsx)("div", {
                            style: I.newPageDiscussionWrapper,
                            children: (0, l.jsx)(a, {
                                from: u,
                                store: t
                            })
                        })]
                    })
                }
                return (0, l.jsxs)("div", {
                    style: s.pageViewDiscussion,
                    onMouseDown: i(170609).N,
                    onClick: i(50678).s,
                    className: i(828432).Jv,
                    children: ["feed_item_top_level_discussion" !== u || x ? void 0 : (0, l.jsxs)(i(4458).fI, {
                        justifyContent: "space-between",
                        paddingBottom: 12,
                        children: [(0, l.jsx)(i(374533).A, {
                            ariaLabel: f.formatMessage({
                                defaultMessage: "Add reaction",
                                id: "ReactionBar.newReaction.ariaLabel"
                            }),
                            hasBackground: !1,
                            showShadow: !1,
                            style: I.reactionButton,
                            icon: () => (0, l.jsx)(i(16275).I, {
                                icon: i(704694).r,
                                colorVariant: "secondary"
                            }),
                            onClick: e => void(0, i(593342).O)({
                                environment: m,
                                blockStore: t,
                                rect: e.currentTarget.getBoundingClientRect(),
                                skipOpeningDiscussionOnSubmit: !0,
                                formulasModule: h
                            })
                        }), e.pageVisitStore && e.presenceStore ? (0, l.jsx)(i(616922).hJ, {
                            pageVisitStore: e.pageVisitStore,
                            presenceStore: e.presenceStore,
                            rootStore: t,
                            maxUsers: 5,
                            isShowingInFeed: !0
                        }) : void 0]
                    }), c.map((i, o, n) => (0, l.jsx)(r, {
                        store: t,
                        discussionStore: i,
                        isFirst: 0 === o,
                        isOnly: 1 === n.length,
                        collapsed: g,
                        ..."feed_item_top_level_discussion" === u ? {
                            discussionLocation: "feed_item_top_level_discussion",
                            pageVisitStore: e.pageVisitStore,
                            presenceStore: e.presenceStore
                        } : {
                            discussionLocation: u
                        }
                    }, i.id)), d ? (0, l.jsx)("div", {
                        style: I.newPageDiscussionWrapper,
                        children: (0, l.jsx)(a, {
                            from: u,
                            store: t
                        })
                    }) : void 0]
                })
            }

            function c(e) {
                let {
                    store: t,
                    wrapper: n,
                    discussionLocation: r,
                    collapsed: a,
                    showDefaultTitle: s,
                    pageDiscussionsRenderState: c
                } = e, u = (0, o.useRef)(null), p = (0, o.useCallback)(e => {
                    i(670296).u.setDiscussionsHeight(e.height)
                }, []);
                (0, i(729787).tK)(u, p);
                let g = (0, i(643160).yf)();
                return (0, l.jsx)(i(28111).A, {
                    name: "PageDiscussionsWrapper",
                    children: "hidden" !== c.type ? n((0, l.jsx)(i(4458).VP, {
                        gap: 2,
                        paddingInlineStart: g ? 8 : void 0,
                        ref: u,
                        children: (0, l.jsxs)(i(385827).s, {
                            allowSelectionWithin: !0,
                            children: [s ? (0, l.jsx)("div", {
                                onClick: e => (0, i(705660).SQ)(e, i(705660).y$.Click, () => {}),
                                children: (0, l.jsx)(i(837371).j, {
                                    store: t,
                                    children: (0, l.jsx)(i(109939).sA, {
                                        id: "pageLayout.discussionsModule.title",
                                        defaultMessage: "Comments"
                                    })
                                })
                            }) : void 0, (0, l.jsx)(d, { ...c,
                                withLegacyInputPadding: !0,
                                store: t,
                                collapsed: a,
                                ..."feed_item_top_level_discussion" === r ? {
                                    discussionLocation: "feed_item_top_level_discussion",
                                    pageVisitStore: e.pageVisitStore,
                                    presenceStore: e.presenceStore,
                                    pageViewBlockContext: e.pageViewBlockContext
                                } : {
                                    discussionLocation: "page_discussion"
                                }
                            })]
                        })
                    })) : void 0
                })
            }

            function u(e) {
                let {
                    actorStore: t,
                    size: o
                } = e;
                return t.table === i(832375).GPl ? (0, l.jsx)(i(31319).A, {
                    botStore: t,
                    size: o
                }) : t.table === i(832375).oo9 ? (0, l.jsx)(i(321753).A, {
                    userStore: t,
                    size: o
                }) : void(0, i(722371).HB)(t)
            }

            function p(e) {
                let {
                    commenters: t
                } = e, o = (0, i(960253).I)(() => ({
                    container: {
                        display: "flex",
                        alignItems: "center",
                        width: 16 * t.length + 8,
                        paddingInlineEnd: 8
                    }
                }), [t.length, 8]);
                return (0, l.jsx)("div", {
                    style: o.container,
                    children: t.map((e, i) => (0, l.jsx)("div", {
                        style: {
                            position: "relative",
                            insetInlineStart: -(8 * i),
                            zIndex: t.length - i
                        },
                        children: (0, l.jsx)(u, {
                            actorStore: e,
                            size: 24
                        })
                    }, e.id))
                })
            }
        },
        42615: (e, t, i) => {
            i.d(t, {
                FB: () => p,
                JC: () => m,
                Ql: () => g,
                Wv: () => l,
                Yz: () => a,
                ds: () => n,
                e4: () => o,
                eQ: () => r,
                im: () => d,
                jw: () => s,
                k2: () => u,
                uG: () => c
            });
            let o = 8,
                n = 10,
                l = 8,
                r = 24,
                a = 6,
                s = 1.5,
                d = 11.25,
                c = 30,
                u = `calc(100% + ${l+(o-a)-c}px)`,
                p = 32,
                g = -16;

            function m(e, t, i) {
                return t ? 20 : "margin_comments" === e ? 12 : "comment_unfurl" === e && "start" === i ? 14 : 16
            }
        },
        50678: (e, t, i) => {
            i.d(t, {
                s: () => o
            });

            function o(e) {
                (0, i(705660).SQ)(e, i(705660).y$.Click, () => {})
            }
        },
        52144: (e, t, i) => {
            i.d(t, {
                a: () => n
            }), i(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.09 3.6 11.91 8.81",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M5.696 3.775a.625.625 0 0 0 0 1.25h7.68a.625.625 0 1 0 0-1.25zm0 3.6a.625.625 0 0 0 0 1.25h7.68a.625.625 0 1 0 0-1.25zM5.071 11.6c0-.345.28-.625.625-.625h7.68a.625.625 0 1 1 0 1.25h-7.68a.625.625 0 0 1-.625-.625M2.896 5.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6m.8 2.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0m-.8 4.4a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6"
                    })
                },
                n = (0, i(104509).wt)("bulletedListSmall", o, "small")
        },
        63728: (e, t, i) => {
            function o(e, t) {
                let o = i(966980).dd(t),
                    n = i(385475).xh(o);
                e.setState({ ...e.state,
                    files: n
                })
            }
            async function n(e) {
                let {
                    blockStore: t,
                    pageViewBlockStore: o,
                    environment: n
                } = e;
                o ? o.setState({ ...o.state,
                    forceDiscussionOpen: !0
                }) : i(400890).A.openNewPageDiscussionInput(t), i(65255).o2(n, {
                    from: "page_comments"
                }), await i(374176).default.afterNextFlush();
                let l = i(24296).j.find(e => e.getBlockStore().id === t.id),
                    r = null == l ? void 0 : l.getInputStore();
                r && (0, i(739204).z)({
                    store: r.state.textStore
                })
            }
            i.d(t, {
                O: () => n,
                e: () => o
            }), i(898992), i(672577)
        },
        70391: (e, t, i) => {
            i.d(t, {
                _p: () => c,
                xZ: () => s,
                C8: () => d
            }), i(296540);
            var o = i(474848);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.77 1.77 12.45 12.41",
                    svg: (0, o.jsx)("path", {
                        d: "M7.12 7.042a.18.18 0 0 1 .294-.157l3.993 3.365a.179.179 0 0 1-.095.315l-1.464.166 1.474 2.648a.536.536 0 1 1-.94.52l-1.444-2.592-.856 1.26a.18.18 0 0 1-.326-.08zm-2.107 3.062a.625.625 0 0 1 .883.883l-1.414 1.414a.626.626 0 0 1-.884-.883zM4.4 7.375a.625.625 0 0 1 0 1.25h-2a.625.625 0 1 1 0-1.25zm9.2 0a.625.625 0 0 1 0 1.25h-2a.625.625 0 1 1 0-1.25zM3.599 3.599a.625.625 0 0 1 .883 0l1.414 1.414a.625.625 0 0 1-.883.883L3.599 4.482a.625.625 0 0 1 0-.883m7.919 0a.626.626 0 0 1 .884.883l-1.415 1.414a.625.625 0 0 1-.883-.883zM8 1.774c.345 0 .625.281.625.626v2a.625.625 0 0 1-1.25 0v-2c0-.345.28-.626.625-.626"
                    })
                },
                l = (0, i(104509).wt)("cursorClickSmall", n, "small"),
                r = (0, i(109939).YK)({
                    dialogTitle: {
                        id: "PagePropertiesLimitExceededBannerDialog.title",
                        defaultMessage: "You’ve reached the property data limit. Try these to fix the issue:"
                    }
                });
            async function a(e, t) {
                let i = await t.api.callApi({
                    eventName: "cleanUpPagePropertiesAndCheckLimits",
                    environment: t,
                    data: {
                        pagePointer: { ...e.pointer,
                            spaceId: e.getSpaceId()
                        }
                    }
                });
                return "success" === i.type && i.data.bytesExceeded > 0
            }
            async function s(e, t, o) {
                if (!e.canEdit()) return !1;
                let n = e.getModel();
                if (!n) return !1;
                let l = i(993189).b4_.constant(void 0);
                return !(JSON.stringify(n.getProperties(l)).length <= o) && a(e, t)
            }

            function d(e) {
                let t = e.ThemeModeStore.state,
                    n = (0, i(632079).O4)({
                        theme: t
                    }),
                    a = {
                        descriptionContainer: {
                            display: "flex",
                            "flex-direction": "column",
                            gap: "8px",
                            marginTop: "8px"
                        },
                        descriptionItem: {
                            color: n.text.primary,
                            display: "flex",
                            gap: "10px",
                            fontSize: i(699422).J.UIRegular.desktop,
                            fontWeight: i(699422).Wy.regular,
                            alignItems: "center"
                        },
                        learnMoreLink: {
                            fontSize: i(699422).J.UIRegular.desktop,
                            fontWeight: i(699422).Wy.regular,
                            marginInlineStart: "25px",
                            color: n.blue.text.accentPrimary,
                            textDecoration: "none",
                            cursor: "pointer"
                        }
                    };
                i(647095).ui({
                    showCancel: !1,
                    showCloseButton: !0,
                    mode: "wide",
                    keepFocus: !1,
                    message: i(962299).A.formatMessage(r.dialogTitle),
                    description: (0, o.jsxs)("div", {
                        style: a.descriptionContainer,
                        children: [(0, o.jsxs)("div", {
                            style: a.descriptionItem,
                            children: [(0, o.jsx)("div", {
                                children: (0, o.jsx)(i(16275).I, {
                                    icon: i(52144).a,
                                    size: "xs"
                                })
                            }), (0, o.jsx)("div", {
                                children: (0, o.jsx)(i(109939).sA, {
                                    id: "PagePropertiesLimitExceededBannerDialog.deleteProperties",
                                    defaultMessage: "Delete properties you don’t need"
                                })
                            })]
                        }), (0, o.jsxs)("div", {
                            style: a.descriptionItem,
                            children: [(0, o.jsx)("div", {
                                children: (0, o.jsx)(i(16275).I, {
                                    icon: i(753114).pencilLineSmallIcon,
                                    size: "xs"
                                })
                            }), (0, o.jsx)("div", {
                                children: (0, o.jsx)(i(109939).sA, {
                                    id: "PagePropertiesLimitExceededBannerDialog.shortenLength",
                                    defaultMessage: "Shorten length of option names and text inputs"
                                })
                            })]
                        }), (0, o.jsxs)("div", {
                            style: a.descriptionItem,
                            children: [(0, o.jsx)("div", {
                                children: (0, o.jsx)(i(16275).I, {
                                    icon: l,
                                    size: "xs"
                                })
                            }), (0, o.jsx)("div", {
                                children: (0, o.jsx)(i(109939).sA, {
                                    id: "PagePropertiesLimitExceededBannerDialog.deselect",
                                    defaultMessage: "Deselect multi-select, people, and relation values"
                                })
                            })]
                        }), (0, o.jsx)("a", {
                            href: "https://www.notion.com/help/optimize-database-load-times-and-performance",
                            target: "_blank",
                            style: a.learnMoreLink,
                            children: (0, o.jsx)(i(109939).sA, {
                                id: "PagePropertiesLimitExceededBannerDialog.learnMore",
                                defaultMessage: "Learn more"
                            })
                        })]
                    }),
                    items: []
                })
            }
            async function c(e, t) {
                var o, n;
                let l = null == (o = i(496704).K.findBlockFromId(t)) ? void 0 : o.getBlockStore();
                if (!l) return;
                let r = i(475097).default.state.open ? i(731810).A : i(465361).A;
                if (!i(474329).Cn(r, "PagePropertiesLimitExceededBanner")) {
                    let o = await a(l, e),
                        s = (0, i(330870).a)();
                    if (o && (null == s || null == (n = s.getModel()) ? void 0 : n.id) === t) return void i(474329).HQ({
                        bannerStore: r,
                        id: "PagePropertiesLimitExceededBanner",
                        contentKey: "page_properties_limit_exceeded",
                        styleKey: i(909595).q.Yellow
                    })
                }
                d(e)
            }
        },
        73233: (e, t, i) => {
            i.d(t, {
                getOnboardingAgentVariant: () => o
            });

            function o({
                disableExposureLogging: e = !0
            } = {}) {
                let t = i(218744).default.getEligibleGroup({
                    experimentId: "onboarding_agent_m1_no_layer",
                    disableExposureLogging: e
                });
                return void 0 !== t && "control" !== t ? t : i(218744).default.getEligibleGroup({
                    experimentId: "onboarding_agent_m1",
                    disableExposureLogging: !0
                })
            }
        },
        96692: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => o,
                layoutFillSmallIcon: () => n
            }), i(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.45 2.44 11.1 11.11",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M3.74 2.45a1.29 1.29 0 0 0-1.29 1.29v8.52c0 .712.578 1.29 1.29 1.29h2.593a1.29 1.29 0 0 0 1.291-1.29V3.74a1.29 1.29 0 0 0-1.29-1.29zm5.927 0a1.29 1.29 0 0 0-1.291 1.29v2.593a1.29 1.29 0 0 0 1.29 1.291h2.593a1.29 1.29 0 0 0 1.29-1.29V3.74a1.29 1.29 0 0 0-1.29-1.291zm0 5.926a1.29 1.29 0 0 0-1.291 1.29v2.593a1.29 1.29 0 0 0 1.29 1.291h2.593a1.29 1.29 0 0 0 1.29-1.29V9.666a1.29 1.29 0 0 0-1.29-1.291z"
                    })
                },
                n = (0, i(104509).wt)("layoutFillSmall", o, "fillSmall")
        },
        98702: (e, t, i) => {
            i.r(t), i.d(t, {
                checkmarkFillIcon: () => n,
                iconDefinition: () => o
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.66 3.66 12.68 12.68",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M15.913 3.787a.875.875 0 0 1 .3 1.2L9.658 15.914a.875.875 0 0 1-1.415.119l-4.37-5.098a.875.875 0 0 1 1.329-1.14l3.58 4.177 5.93-9.884a.875.875 0 0 1 1.2-.3"
                    })
                },
                n = (0, i(104509).wt)("checkmarkFill", o, "fill")
        },
        112923: (e, t, i) => {
            i.d(t, {
                n: () => o
            });

            function o(e) {
                let t = (0, i(533992).v3)(),
                    o = (0, i(682985).K8)(() => (0, i(424332).dC)(t, e), [t, e]);
                return (0, i(682985).K8)(() => o && !e.isFullWidth() ? (0, i(424332).Zy)({
                    environment: t,
                    isInPeekRenderer: (0, i(447036).cq)(e),
                    isInFrameWhenSidePeekOpen: (0, i(447036).RX)(e)
                }) : 0, [t, o, e])
            }
        },
        119359: (e, t, i) => {
            i.d(t, {
                s: () => s
            });
            var o = i(296540),
                n = i(474848);
            let l = (0, i(109939).YK)({
                    ariaRoledescription: {
                        id: "pageTitle.ariaRoledescription",
                        defaultMessage: "page title"
                    }
                }),
                r = Object.freeze({
                    property: !0
                }),
                a = {
                    style0: {
                        width: "100%",
                        maxWidth: "100%"
                    },
                    style1: {
                        marginInlineStart: 4
                    },
                    style2: {
                        fontWeight: i(699422).Wy.regular,
                        margin: 0
                    }
                },
                s = o.memo(function({
                    store: e,
                    context: t,
                    disabled: s,
                    isInSidePeek: u,
                    extraStyles: p,
                    titlePlaceholder: g,
                    collectionContextStore: m,
                    shouldShowTemplatePicker: f,
                    onTitleChange: h,
                    onTitleEditText: S,
                    onTitleEsc: y,
                    onTitleUntab: v,
                    onTitleTab: b,
                    onMoveUp: x,
                    onMoveDown: k,
                    hideText: C,
                    disableEnter: w
                }) {
                    let _ = (0, i(109939).tz)(),
                        I = (0, i(533992).v3)(),
                        P = (0, i(67499).S)(),
                        M = (0, i(718012).V)(),
                        A = (0, i(153223).u)(),
                        j = (0, i(682985).K8)(() => e.getTitleStore(), [e]),
                        B = (0, i(682985).K8)(() => {
                            if (e.isCollectionView()) {
                                let t = e.getCollectionStoreIfSingleSource();
                                return !!t && t.isSyncedCollection()
                            }
                            return e.isType(i(955630).xd.externalObjectInstancePage)
                        }, [e]),
                        T = (0, i(366318).S)(e),
                        K = (0, i(682985).K8)(() => {
                            if (s || i(420153).l.state) return !1;
                            let t = null == P ? void 0 : P.publicEditModeStore.state;
                            return !(0, i(45262).Q)(t) && e.canEditCollection()
                        }, [s, null == P ? void 0 : P.publicEditModeStore, e]),
                        V = (0, i(682985).K8)(() => {
                            if (!e.isCollectionView()) return !1;
                            let t = e.getCollectionStoreIfSingleSource();
                            return !!t && (0, i(69499).Qu)(t.getValue())
                        }, [e]),
                        E = (0, i(682985).K8)(() => {
                            let t = e.getModel();
                            return g ? ? (null == t ? void 0 : t.getEmptyTitlePlaceholder({
                                getRecordModel: e.getRecordModel,
                                userTimeZone: (0, i(714350).P)(),
                                intl: _
                            }))
                        }, [e, g, _]),
                        R = !i(986939).A.isMobile && u,
                        L = (0, i(682985).K8)(() => K && !(0, i(444285).S)(e) && !B && !T && !(0, i(933062).Nh)(e.id) && "suggest" !== i(708929).Uv.getMode(e), [K, B, T, e]),
                        D = (0, i(682985).K8)(() => e.isEmptyPage(), [e]),
                        F = (0, i(682985).K8)(() => e.isTemplate(), [e]),
                        O = (0, i(682985).K8)(() => e.getAssociatedCollectionTemplateStores(), [e]),
                        z = (0, i(682985).K8)(() => e.getSyncedUri(), [e]),
                        W = function(e) {
                            let {
                                store: t,
                                isInSidePeek: o,
                                context: n,
                                shouldRenderIconInlineWithTitle: l,
                                extraStyles: r,
                                disabled: a
                            } = e, s = (0, i(533992).v3)(), {
                                page_font: d,
                                page_small_text: u
                            } = (0, i(682985).K8)(() => ({
                                page_font: t.getFormatStore().getKeyValue("page_font"),
                                page_small_text: t.getFormatStore().getKeyValue("page_small_text")
                            }), [t]), p = (0, i(682985).K8)(() => t.isCollectionView(), [t]), g = (0, i(682985).K8)(() => t.isExternalObjectInstancePageBlockStore(), [t]), m = c(t), f = (0, i(682985).K8)(() => t.isLibraryBlock(), [t]), h = (0, i(533992).Y0)(), S = (0, i(355301).D1)(h), y = (0, i(643160).yf)();
                            return (0, i(960253).I)(() => {
                                let e, t = !!u || p || o;
                                e = i(986939).A.isMobile ? S ? 34 : 28 : t ? 32 : n === i(166654).R.DraftPostInInlineComposer || n === i(166654).R.WorkflowInstructionsInInlineComposer ? 26 : 40;
                                let c = n === i(166654).R.DraftPostInInlineComposer || n === i(166654).R.WorkflowInstructionsInInlineComposer ? i(699422).Wy.semibold : i(699422).Wy.bold,
                                    h = y ? {
                                        paddingTop: 0,
                                        paddingInlineStart: i(57461).dE.paddingInlineStart,
                                        paddingInlineEnd: i(57461).dE.paddingInlineEnd
                                    } : i(57461).CC;
                                return {
                                    container: {
                                        display: (null == r ? void 0 : r.display) ? ? void 0,
                                        flex: l ? 1 : void 0
                                    },
                                    title: { ...h,
                                        paddingBottom: "0px",
                                        width: g || m ? "fit-content" : "100%",
                                        fontSize: "1em",
                                        fontWeight: "inherit",
                                        margin: 0,
                                        cursor: a ? "default" : "text",
                                        ...(n === i(166654).R.DraftPostInInlineComposer || n === i(166654).R.WorkflowInstructionsInInlineComposer) && {
                                            fontSize: 24
                                        },
                                        ...m && {
                                            whiteSpace: "nowrap",
                                            display: "inline-block"
                                        },
                                        ...m && !y && {
                                            marginInlineEnd: 6
                                        },
                                        ...f && {
                                            wordBreak: "keep-all"
                                        }
                                    },
                                    selectable: {
                                        color: i(632079).Tj.text.primary,
                                        fontWeight: c,
                                        lineHeight: 1.2,
                                        fontSize: e,
                                        fontFamily: (0, i(699422).xf)({
                                            pageFont: d,
                                            locale: i(849917).locale
                                        }),
                                        cursor: a ? "default" : "text",
                                        display: "flex",
                                        alignItems: "center",
                                        textRendering: s.device.isSafari ? "optimizeSpeed" : void 0,
                                        ...m && {
                                            flexWrap: "wrap"
                                        },
                                        ...r
                                    },
                                    placeholder: { ...h,
                                        paddingBottom: "0px",
                                        WebkitTextFillColor: i(632079).Tj.pageTitlePlaceholderTextColor,
                                        cursor: a ? "default" : "text",
                                        ...(n === i(166654).R.DraftPostInInlineComposer || n === i(166654).R.WorkflowInstructionsInInlineComposer) && {
                                            color: i(632079).Tj.text.tertiary,
                                            WebkitTextFillColor: i(632079).Tj.text.tertiary
                                        }
                                    },
                                    personPronounSuffix: {
                                        color: i(632079).Tj.text.secondary,
                                        paddingBottom: "0px",
                                        paddingTop: h.paddingTop
                                    }
                                }
                            }, [S, s.device.isSafari, r, d, u, p, g, m, f, o, n, y, l, a])
                        }({
                            store: e,
                            isInSidePeek: u,
                            context: t,
                            shouldRenderIconInlineWithTitle: R,
                            extraStyles: p,
                            disabled: s || !L
                        }),
                        H = (0, i(682985).K8)(() => e.isExternalObjectInstancePageBlockStore(), [e]),
                        N = (0, i(682985).K8)(() => e.isExternalCollectionBlockStore() ? e : void 0, [e]),
                        U = (0, i(682985).K8)(() => (null == N ? void 0 : N.canEdit()) ? ? !1, [N]),
                        q = (0, i(682985).K8)(() => z ? (0, i(939042).e)(z, e.pointer.spaceId) : void 0, [e.pointer.spaceId, z]),
                        Y = (0, i(682985).K8)(() => i(886556).z.shouldEnablePageTitleDiffs(), []),
                        Q = O && 0 === O.length,
                        G = (0, i(854258).O)(e, t),
                        X = !!w || !G && !!f && !F && !Q && !i(986939).A.isMobile && D,
                        $ = (0, o.useRef)(null),
                        J = (0, o.useCallback)(() => {
                            if (!e) return;
                            let t = e.getSpaceId();
                            (0, i(377796).createAndCommit)({
                                userAction: "TourTutorial.createEmptyTextBlock",
                                environment: I,
                                cellTarget: {
                                    spaceWithId: t
                                },
                                canUndo: !0,
                                perform: t => {
                                    i(749560)._N({
                                        environment: I,
                                        store: e,
                                        transaction: t
                                    })
                                }
                            })
                        }, [e, I]),
                        Z = c(e) ? (0, n.jsx)("span", {
                            style: W.personPronounSuffix,
                            children: (0, n.jsx)(i(109939).sA, {
                                id: "pageTitle.personalPronoun",
                                defaultMessage: "(You)"
                            })
                        }) : null;
                    if (V || !j) return (0, n.jsx)(i(28111).A, {
                        name: "PageTitle",
                        children: null
                    });
                    let ee = i(970831).B.createChildStore(j, e.pointer),
                        et = I.device.isIOS || I.device.isSafari,
                        ei = (0, n.jsx)(i(24884).n, {
                            step: "create_page_start_with_title",
                            showSidebarOverlays: !1,
                            onNextButtonClick: J,
                            inAppCalloutStore: M,
                            teamIds: A,
                            children: C ? (0, n.jsx)(n.Fragment, {}) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(i(53373).A, {
                                    tagName: "h1",
                                    style: W.title,
                                    store: j,
                                    placeholderStyle: W.placeholder,
                                    disabled: !L,
                                    placeholder: E,
                                    testId: "page-title",
                                    disableSlashCommands: !0,
                                    disableSelectAllBlocks: !0,
                                    disableStyleAnnotations: !0,
                                    disableInsertedDeletedAnnotations: !Y,
                                    disableMobileActionBar: !L,
                                    disableShiftEnter: !0,
                                    disableEmbedMenu: !0,
                                    onEsc: y,
                                    onUntab: v,
                                    onTab: b,
                                    onMoveDown: k,
                                    onMoveUp: x,
                                    disableUpDownArrows: !!f && !F && !Q && !i(986939).A.isMobile && D,
                                    disableEnter: X,
                                    onChange: h,
                                    disableHorizontalEdgeScroll: !0,
                                    pasteBehavior: "block",
                                    trackEditsToUserFlow: "user_flow_edit_page_title",
                                    inPageFind: i(831719).Os.block_match,
                                    disabledMentionTypes: r,
                                    "aria-roledescription": _.formatMessage(l.ariaRoledescription)
                                }, j.id), Z]
                            })
                        }),
                        eo = _.formatMessage({
                            id: "PageTitle.syncedBlock.original",
                            defaultMessage: "Link to original url"
                        });
                    return (0, n.jsx)(i(28111).A, {
                        name: "PageTitle",
                        children: (0, n.jsxs)("div", {
                            style: W.container,
                            ref: $,
                            children: [(0, n.jsxs)(i(611752).Ay, {
                                canSelect: !1,
                                canDrag: !1,
                                canEditText: L,
                                onEditText: S,
                                store: ee,
                                style: W.selectable,
                                analyticsName: "page_content",
                                shouldShowDropZone: !0,
                                children: [et ? (0, n.jsx)(i(385827).s, {
                                    allowSelectionWithin: !0,
                                    style: a.style0,
                                    children: ei
                                }) : ei, (0, n.jsxs)(i(385827).s, {
                                    allowSelectionWithin: !0,
                                    children: [(0, n.jsx)(i(505580).vE, {
                                        origin: $ ? ? void 0
                                    }), H ? (0, n.jsx)(i(51831).m, {
                                        placement: "bottom",
                                        content: () => eo,
                                        children: e => (0, n.jsx)(i(590422).Q, {
                                            href: q,
                                            ignoreLocalHoverState: !0,
                                            hovered: !1,
                                            children: (0, n.jsx)(i(374533).A, {
                                                ariaLabel: eo,
                                                ...e,
                                                icon: () => (0, n.jsx)(i(16275).I, {
                                                    icon: i(588739).linkIcon,
                                                    colorVariant: "secondary"
                                                }),
                                                style: a.style1,
                                                onClick: () => {
                                                    q && (0, i(624621).L)({
                                                        url: q,
                                                        environment: I
                                                    })
                                                }
                                            })
                                        })
                                    }) : void 0, N && !i(986939).A.isMobile ? (0, n.jsx)(i(940594).A, {
                                        store: N,
                                        canEdit: U,
                                        buttonStyle: a.style2
                                    }) : void 0]
                                })]
                            }), (0, n.jsx)(i(385827).s, {
                                allowSelectionWithin: !0,
                                style: a.style1,
                                children: (0, n.jsx)(d, {
                                    store: e,
                                    collectionContextStore: m
                                })
                            })]
                        })
                    })
                });

            function d(e) {
                let {
                    store: t,
                    collectionContextStore: o
                } = e, l = (0, i(682985).K8)(() => t.isCollectionView(), [t]), r = (0, i(682985).K8)(() => t.getCollectionStoreIfSingleSource(), [t]), a = (0, i(834656).F)(null == o ? void 0 : o.capabilitiesStore, null == o ? void 0 : o.previewContextStore);
                return l && o && r ? (0, n.jsx)(i(281353).A, {
                    collectionStore: r,
                    canFollowPageLinks: a,
                    syncProgressStore: void 0,
                    onNavigateToSourceClick: void 0
                }) : null
            }

            function c(e) {
                return (0, i(682985).K8)(() => {
                    var t;
                    let o = e.getPersonProfileUserId(),
                        n = null == (t = i(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id;
                    return !!o && !!n && o === n
                }, [e])
            }
        },
        119965: (e, t, i) => {
            i.d(t, {
                V: () => n
            });
            var o = i(296540);

            function n() {
                let e = (0, o.useRef)(!1),
                    t = (0, i(682985).K8)(() => i(728372).default.state.renderPhase, []),
                    n = (0, i(682985).K8)(() => i(329464).A.state.initialCollectionPendingRenderCount > 0, []);
                return "rendered" !== t || n || (e.current = !0), !e.current
            }
        },
        125824: (e, t, i) => {
            i.d(t, {
                A: () => o
            }), i(898992), i(354520);

            function o(e) {
                var t;
                let {
                    store: o,
                    pageViewBlockStore: n,
                    environment: l
                } = e, r = i(966980).O3(o, {
                    recursivelyLoadAllDiscussions: !1
                }).sort((e, t) => t.getReactions().length - e.getReactions().length), a = r.length > 0, s = 0 === r.length, d = 0 === r.filter(e => e.getComments().length > 0).length, c = i(898128)._.getToggleState({
                    environment: l,
                    type: "discussion",
                    id: o.id
                }), u = {
                    type: "hidden"
                }, p = o.getAssociatedCollectionStore() ? ? o, g = "section_hide" === (0, i(613968).z5)(null == (t = p.getFormat()) ? void 0 : t.page_section_visibility);
                if (!(null == n ? void 0 : n.state.forceDiscussionOpen) && !(o.isInsideCollection() && s) && (s || a && (!1 === c || void 0 === c && g)) || g) return u;
                let m = o.pathIsDead();
                if (s && m) return u;
                let f = function(e) {
                    let {
                        environment: t,
                        blockStore: o,
                        visibilityStore: n,
                        hasNoOpenCommentDiscussion: l
                    } = e;
                    return !(!t.currentUser.isLoggedIn() || !(o.canComment() && l) || (0, i(335818).sV)(o) || (0, i(335818).fc)(o) && !(0, i(335818).f1)(o)) && (n === o || !("isExternallyImportedAndSyncedCollection" in n) || (0, i(607689).vW)(n))
                }({
                    environment: l,
                    blockStore: o,
                    visibilityStore: p,
                    hasNoOpenCommentDiscussion: d
                });
                return !f && s ? u : {
                    type: "visible",
                    showDiscussionInput: f,
                    unresolvedDiscussionStores: r
                }
            }
        },
        148344: (e, t, i) => {
            i.d(t, {
                k: () => l
            }), i(581454);
            var o = () => i(546605);
            class n extends o().Store {
                getInitialState() {}
                waitUntilLoaded() {
                    return this.waitUntil(() => !!this.state)
                }
                getSortedUserIds() {
                    return Object.entries(this.state || {}).sort(([e, t], [i, o]) => o - t).map(([e, t]) => e)
                }
            }
            let l = new n;
            (0, i(202146).exposeDebugValue)("UserSimilarityStore", l)
        },
        170609: (e, t, i) => {
            i.d(t, {
                N: () => o
            });

            function o(e) {
                (0, i(705660).SQ)(e, i(705660).y$.EditorMouseDown, () => {})
            }
        },
        196441: (e, t, i) => {
            i.d(t, {
                n$: () => n,
                rx: () => o,
                yA: () => l
            });
            let o = 1;

            function n(e) {
                switch (i(381453).qE(i(381453).LI(e, 1), .5, 4.9)) {
                    case .5:
                        return 155;
                    case .6:
                        return 128;
                    case .7:
                        return 108;
                    case .8:
                        return 94;
                    case .9:
                        return 83;
                    default:
                        return 75
                }
            }

            function l(e) {
                let t = i(381453).qE(i(381453).LI(e, 1), .5, 4.9);
                switch (t) {
                    case .5:
                        return 273;
                    case .6:
                        return 228;
                    case .7:
                        return 195;
                    case .8:
                        return 171;
                    case .9:
                        return 151;
                    case 1:
                        return 136;
                    case 1.1:
                        return 123;
                    case 1.2:
                        return 113;
                    case 1.3:
                        return 105;
                    case 1.4:
                        return 97;
                    case 1.5:
                        return 91;
                    case 1.6:
                        return 85;
                    default:
                        return Math.max(85 - Math.floor((t - 1.6) * 50), 0)
                }
            }
        },
        204729: (e, t, i) => {
            i.d(t, {
                A: () => a
            });
            var o = i(296540),
                n = i(474848);
            let l = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 15.25 11.75",
                    svg: (0, n.jsx)("path", {
                        d: "M2.375 6.25c0-1.174.951-2.125 2.125-2.125h11c1.174 0 2.125.951 2.125 2.125v7.5a2.125 2.125 0 0 1-2.125 2.125h-11a2.125 2.125 0 0 1-2.125-2.125zm1.25 7.5c0 .483.392.875.875.875h11a.875.875 0 0 0 .875-.875v-2.791l-2.87-2.871a.625.625 0 0 0-.884 0l-4.137 4.136-1.98-1.98a.625.625 0 0 0-.883 0L3.625 12.24zM8.5 9.31a1.5 1.5 0 0 0 1.33-.806 1.094 1.094 0 0 1-.702-2.058A1.5 1.5 0 1 0 8.5 9.31"
                    })
                },
                r = (0, i(104509).wt)("photoFill", l, "fill");

            function a(e) {
                let {
                    store: t,
                    style: l,
                    label: a,
                    from: s
                } = e, d = (0, i(533992).v3)(), [c, u] = (0, o.useState)(!1), p = (0, i(533992).Y0)(), g = (0, o.useCallback)(async () => {
                    await (0, i(988454).o)(d, {
                        action: "edit_cover",
                        from: s,
                        blockStore: t
                    }, async e => {
                        let o = t.getCoverStore();
                        if (!o || o.getValue()) return;
                        u(!0);
                        let n = await i(974024).f.load(),
                            l = t.getSpaceId(),
                            {
                                serverCommitResult: r,
                                transactionId: a
                            } = (0, i(377796).createAndCommit)({
                                userAction: "PageViewBlock.handleAddRandomCoverClick",
                                environment: d,
                                cellTarget: l ? {
                                    spaceWithId: l
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    i(605858).Oj({
                                        transaction: e,
                                        store: t,
                                        coverStore: o,
                                        pageCovers: n
                                    })
                                }
                            });
                        e.setMetadata({
                            transactionId: a
                        });
                        let s = r.then(e);
                        return u(!1), s
                    })
                }, [d, t, s]);
                return !0 === c ? (0, n.jsx)(i(988022).p, {
                    style: l,
                    colorVariant: "tertiary",
                    disabled: !0,
                    iconLeading: {
                        icon: r,
                        size: "xs",
                        fitToViewBox: "all"
                    },
                    children: p.isSmallPhone ? (0, n.jsx)(i(109939).sA, {
                        id: "pageAddCoverButton.add.pageCoverMobileLoading",
                        defaultMessage: "Loading"
                    }) : (0, n.jsx)(i(109939).sA, {
                        id: "pageAddCoverButton.add.pageCoverLoading",
                        defaultMessage: "Loading cover"
                    })
                }, "add-cover-loading") : (0, n.jsx)(i(988022).p, {
                    style: l,
                    colorVariant: "tertiary",
                    onClick: g,
                    iconLeading: {
                        icon: r,
                        size: "xs",
                        fitToViewBox: "all"
                    },
                    children: a
                }, "add-cover")
            }
        },
        209046: (e, t, i) => {
            i.d(t, {
                Br: () => c,
                Jh: () => d,
                Lb: () => r,
                YE: () => a,
                cu: () => u
            }), i(16280), i(898992), i(672577);
            var o = i.n(i(32485)),
                n = i(296540),
                l = i(474848);
            let r = 12,
                a = 12;

            function s({
                collectionSchema: e,
                module: t
            }) {
                return !!e && "normalizedTitleWithIcon" === t.type && (0, i(287753).LD)({
                    collectionSchema: e,
                    module: t
                }).length > 0
            }

            function d({
                layoutModule: e,
                area: t,
                context: c,
                collectionSchema: u,
                collectionStore: p,
                showDetailsPanelToggleButtonBelowTitle: g,
                modules: m,
                postContext: f
            }) {
                let h = m.findIndex(t => t.id === e.id),
                    S = null != m && m.length && -1 !== h ? m[h + 1] : void 0,
                    y = (0, i(455379).p)({
                        collectionStore: p,
                        layoutModule: S
                    }),
                    v = (0, i(92248).aN)(p),
                    b = (0, i(682985).K8)(() => !!(null == p ? void 0 : p.isPageTreeCollection()), [p]),
                    x = (0, i(643160).yf)(),
                    k = (0, i(682985).K8)(() => (0, i(191844).I)(null == p ? void 0 : p.getLayoutStore()), [p]),
                    C = (0, i(682985).K8)(() => (0, i(897822).n)(), []),
                    w = k && !C,
                    [_, I] = (0, n.useMemo)(() => {
                        let o = s({
                                collectionSchema: u,
                                module: e
                            }),
                            n = !1,
                            l = {};
                        if ("page_details" === t || "person_profile_page_details" === t) l.marginBottom = 10, l.paddingBottom = 10;
                        else if ("page_main" === t || "person_profile_page_main" === t) l.marginBottom = a, l.paddingBottom = r;
                        else if ("views_main_tab_modules" === t) l.marginBottom = a, l.paddingBottom = r;
                        else if ("form_layout_schema" === t || "form_conditional_modules" === t) throw Error("Not implemented for forms");
                        else if ("dashboard_layout_schema" === t) throw Error("Not implemented for dashboard");
                        else(0, i(722371).HB)(t);
                        let d = (null == S ? void 0 : S.type) === "editor";
                        (0, i(335818).Mi)(f) ? "editor" === e.type && f !== i(166654).R.DraftPostInFullPageComposer ? n = !0 : "normalizedTitleWithIcon" === e.type && (l.marginBottom = void 0, l.paddingBottom = 8): d && (n = !0, "normalizedTitleWithIcon" !== e.type || o || (n = !1, l.marginBottom = void 0, l.paddingBottom = void 0), "views_main_tab_modules" === t && (n = !1, l.marginBottom = void 0, l.paddingBottom = void 0)), y && l.marginBottom && (l.marginBottom = Math.max(l.marginBottom - 4, 0)), ("page_main" === t || "page_details" === t || "views_main_tab_modules" === t) && (x ? (l.marginInlineStart = 0, "properties" === e.type && (l.paddingInlineStart = 2)) : "discussions" === e.type ? l.marginInlineStart = 0 : "normalizedTitleWithIcon" === e.type ? l.marginInlineStart = -4 : (0, i(11287).gx)(e) || "properties" === e.type || "relationsGroup" === e.type ? l.marginInlineStart = -6 : "editor" === e.type && (l.marginInlineStart = -2));
                        let p = (null == S ? void 0 : S.type) === "views" || (null == S ? void 0 : S.type) === "editor";
                        return ("page_main" === t || "page_details" === t) && l.paddingBottom && !p && ("property_text" === e.type || "property_relation" === e.type && v ? l.paddingBottom = Math.max(l.paddingBottom - 4, 0) : "properties" === e.type && (!b || i(986939).A.isMobile) && (l.paddingBottom = Math.max(l.paddingBottom - 4, 0)), (null == S ? void 0 : S.type) === "viewsMain" && (l.paddingBottom = Math.max(l.paddingBottom - 12, 0))), "normalizedTitleWithIcon" === e.type && (o ? i(986939).A.isMobile && (null == S ? void 0 : S.type) === "properties" && !y && (l.paddingBottom = void 0, l.marginBottom = 4) : (g ? (null == S ? void 0 : S.type) === "discussions" && (l.marginBottom = void 0) : (null == S ? void 0 : S.type) === "properties" ? (l.paddingBottom = void 0, l.marginBottom = 8) : (null == S ? void 0 : S.type) === "discussions" && (l.paddingBottom = r), i(986939).A.isMobile && (null == S ? void 0 : S.type) === "discussions" && (l.marginBottom = void 0))), "bottomControls" === e.type && (l.paddingBottom = void 0, l.marginBottom = void 0), "discussions" === e.type && d && (l.paddingBottom = void 0, l.marginBottom = void 0), "discussions" === e.type && w && (l.paddingTop = 40), ((null == S ? void 0 : S.type) === "inlinePageSections" || (null == S ? void 0 : S.type) === "expandedBacklinks" || (null == S ? void 0 : S.type) === "bottomControls") && (l.marginBottom = 8), "editor" !== e.type || (0, i(335818).Mi)(f) || (l.marginTop = 8), "views" !== e.type && ("editor" !== e.type || (0, i(335818).Mi)(f)) || (l.paddingBottom = void 0, l.marginBottom = void 0), "viewsMain" === e.type && (l.paddingBottom = void 0), (c === i(166654).R.DraftPostInInlineComposer || c === i(166654).R.WorkflowInstructionsInInlineComposer) && (l.marginBottom = 4, l.paddingBottom = 0), [n, l]
                    }, [u, e, t, null == S ? void 0 : S.type, y, b, c, v, g, f, x, w]);
                return (0, n.useMemo)(() => function(t) {
                    return (0, l.jsx)(i(394112).vV, {
                        className: o()({
                            "layout-content-with-divider": _
                        }),
                        style: I,
                        testId: (0, i(559244).H)(e),
                        children: t
                    })
                }, [e, _, I])
            }

            function c({
                layoutModule: e,
                area: t,
                collectionSchema: o,
                collectionStore: n,
                showDetailsPanelToggleButtonBelowTitle: l,
                pageMainModules: r
            }) {
                let a = (0, i(533992).Y0)(),
                    d = (0, i(682985).K8)(() => !!n && !!r.find(e => "normalizedTitleWithIcon" === e.type) && l, [n, r, l]),
                    u = (0, i(355301).D1)(a);
                if (!n || "properties" !== e.type && "discussions" !== e.type && "relationsGroup" !== e.type) return !1;
                if ("page_main" !== t) return !0;
                let p = r.findIndex(t => t.id === e.id);
                if (0 === p || r.length <= 1 || "discussions" === e.type && u) return !1;
                let g = r[p - 1];
                if ((null == g ? void 0 : g.type) !== "normalizedTitleWithIcon" || "relationsGroup" === e.type && d || "properties" === e.type && d && !a.isPhone) return !0;
                let m = s({
                    collectionSchema: o,
                    module: g
                });
                return ("properties" !== e.type || !a.isPhone || !m) && m
            }

            function u({
                collectionStore: e,
                modulesByArea: t
            }) {
                return !((e.getNormalizedPropertyGroups({
                    publicPageDataFallbackEnabled: !0
                }) || []).length > 0) && 0 === (0, i(287753).Ul)({
                    collectionStore: e,
                    modulesByArea: t
                }).length
            }
        },
        216994: (e, t, i) => {
            i.d(t, {
                v: () => r
            });
            var o = i(296540),
                n = i(474848);
            let l = {
                    outlineStyle: "solid",
                    outlineWidth: 2,
                    outlineColor: "white"
                },
                r = o.memo(function(e) {
                    let {
                        hasCover: t,
                        isEditable: r,
                        isInlinePostTitle: a,
                        isInPageLayoutModuleEditor: s,
                        isInSidePeek: d,
                        openMenuOnMount: c,
                        openMenuOnMountCallback: u,
                        store: p
                    } = e, g = (0, i(533992).v3)(), m = (0, i(109939).tz)(), f = (0, i(83208).X)("nds_stickered_page_icon"), h = (0, i(682985).K8)(() => p.isPersonProfile(), [p]), S = (0, i(682985).K8)(() => h ? p.getPersonProfileUserStore() : void 0, [h, p]), y = (0, i(682985).K8)(() => p.getIcon(), [p]), v = (0, i(682985).K8)(() => p.getIconStore(), [p]), b = (0, i(682985).K8)(() => p.getType(), [p]), x = (0, i(682985).K8)(() => p.isCollectionView(), [p]), k = (0, i(682985).K8)(() => {
                        if (x) {
                            let e = p.getCollectionStoreIfSingleSource();
                            return !!e && e.isSyncedCollection()
                        }
                        return p.isType(i(955630).xd.externalObjectInstancePage)
                    }, [p, x]), C = (0, i(682985).K8)(() => p.isType(i(955630).xd.form), [p]), w = (0, i(682985).K8)(() => p.isEmptyPage(), [p]), _ = (0, i(682985).K8)(() => (0, i(569553).Te)(p), [p]), I = (0, i(682985).K8)(() => i(708929).Uv.getMode(p), [p]), P = (0, o.useCallback)(e => {
                        let t = p.getIconStore();
                        t && (0, i(988454).o)(g, {
                            action: "edit_icon",
                            from: "page_header",
                            blockStore: p
                        }, o => {
                            let n = (0, i(728601).pc)({
                                    source: e,
                                    secureFileConfigRootpath: i(986939).A.secureFileConfig.rootPath,
                                    secureFileConfigHostname: i(986939).A.secureFileConfig.hostname
                                }),
                                l = n ? n.link : e,
                                r = p.getSpaceId(),
                                {
                                    serverCommitResult: a,
                                    transactionId: s
                                } = (0, i(377796).createAndCommit)({
                                    userAction: "PageIcon.handleChange",
                                    environment: g,
                                    cellTarget: r ? {
                                        spaceWithId: r
                                    } : void 0,
                                    canUndo: !0,
                                    perform: e => {
                                        (0, i(368198).K)({
                                            store: t,
                                            value: l,
                                            transaction: e
                                        })
                                    }
                                });
                            return o.setMetadata({
                                transactionId: s
                            }), a.then(o)
                        })
                    }, [g, p]), M = a ? "xs" : x || d ? "sm" : "md", {
                        size: A,
                        emojiSize: j
                    } = (0, o.useMemo)(() => "xs" === M ? {
                        size: 26,
                        emojiSize: 26
                    } : "sm" === M ? {
                        size: 36,
                        emojiSize: 36
                    } : "md" !== M ? {
                        size: 140,
                        emojiSize: 78
                    } : k ? {
                        size: 74,
                        emojiSize: 78
                    } : {
                        size: 140,
                        emojiSize: 78
                    }, [k, M]), B = (0, i(643160).yf)(), T = (0, i(960253).I)(() => {
                        let e = {
                                position: "relative",
                                zIndex: 1,
                                marginInlineStart: B ? 8 : 3,
                                marginBottom: 8 * !!i(986939).A.isMobile,
                                ...!B && {
                                    marginTop: 4
                                },
                                pointerEvents: "auto"
                            },
                            o = (() => {
                                if ("xs" === M) return {
                                    marginInlineEnd: 4,
                                    height: A,
                                    width: A
                                };
                                if ("sm" === M) return { ...!B && {
                                        marginInlineEnd: 6
                                    }
                                };
                                if ("md" !== M) return {};
                                if (t && !s) return {
                                    marginTop: -80
                                };
                                if (i(986939).A.isMobile || s) return {
                                    marginTop: 0
                                };
                                else return {
                                    marginTop: (0, i(437788).W)(g) - 32 * !!C
                                }
                            })(),
                            n = "xs" === M ? {
                                marginInlineEnd: 4
                            } : "sm" === M ? { ...!B && {
                                    marginTop: 4,
                                    marginInlineEnd: 8
                                }
                            } : t && !s ? {
                                marginTop: -42
                            } : i(986939).A.isMobile || s ? {
                                marginTop: 0
                            } : {
                                marginTop: (0, i(437788).W)(g) - 32 * !!C
                            };
                        return {
                            icon: { ...e,
                                ...o
                            },
                            emoji: n,
                            personProfile: { ...e,
                                ...o,
                                borderRadius: "50%",
                                background: i(632079).Tj.background.primary,
                                width: A,
                                height: A
                            }
                        }
                    }, [g, t, C, s, M, A, B]);
                    if (h) return (0, n.jsx)("div", {
                        style: T.personProfile,
                        children: (0, n.jsx)(i(321753).A, {
                            userStore: S,
                            size: A,
                            avatarShouldShowShadow: !1,
                            borderStyle: "none",
                            iconStyle: l
                        })
                    });
                    if (!y && !a) return null;
                    if (!r || "suggest" === I) return (0, n.jsx)(i(569553).B6, {
                        disabled: !0,
                        icon: y,
                        useStickeredIcon: t && f,
                        iconRecordCategory: _,
                        isEmptyPage: w,
                        size: A,
                        emojiSize: j,
                        style: T.icon,
                        emojiStyle: T.emoji,
                        largeIcon: !0,
                        label: m.formatMessage({
                            id: "layout.pageIcon.disabledLabel",
                            defaultMessage: "Page icon"
                        }),
                        testId: "pageIcon"
                    });
                    let K = null == v ? void 0 : v.table;
                    return (0, n.jsx)(i(569553).B6, {
                        disabled: !1,
                        bucket: "secure",
                        icon: y,
                        useStickeredIcon: t && f,
                        iconRecordCategory: _,
                        store: p,
                        isEmptyPage: w,
                        onChange: P,
                        size: A,
                        emojiSize: j,
                        style: T.icon,
                        emojiStyle: T.emoji,
                        largeIcon: !0,
                        openMenuOnMount: c,
                        openMenuOnMountCallback: u,
                        isInlinePostTitle: a,
                        iconLoggingData: {
                            recordTable: K,
                            source: "page_header",
                            block_type: b,
                            collection_id: "collection" === K ? null == v ? void 0 : v.id : void 0
                        },
                        label: m.formatMessage({
                            id: "layout.pageIcon.label",
                            defaultMessage: "Change page icon"
                        }),
                        testId: "pageIcon"
                    })
                })
        },
        256209: (e, t, i) => {
            i.d(t, {
                A: () => l
            });
            var o = () => i(546605);
            class n extends o().Store {
                getInitialState() {
                    return {
                        pageMap: {}
                    }
                }
                setStatus(e, t) {
                    let {
                        pageMap: i
                    } = this.state;
                    t ? i[e] = t : delete i[e], this.emit()
                }
            }
            let l = new n
        },
        258437: (e, t, i) => {
            i.d(t, {
                A: () => l
            }), i(898992), i(354520), i(672577), i(581454);
            var o = i(296540),
                n = i(474848);
            let l = o.memo(function(e) {
                    let {
                        store: t,
                        collectionStore: o,
                        disabled: l,
                        locked: a,
                        propertyIds: s,
                        blockPropertyValueOverlayStore: d,
                        format: c,
                        type: u
                    } = e, p = (0, i(533992).v3)(), g = (0, i(713311).Ks)(), m = (0, i(682985).K8)(() => {
                        var e;
                        return null == g || null == (e = g.permissionScopesStore.state) ? void 0 : e.canConfigureCollection
                    }, [g]);
                    return g ? "minimal" === u ? (0, n.jsx)(n.Fragment, {
                        children: s.map((e, i) => (0, n.jsx)(r, {
                            format: c,
                            locked: a,
                            collectionStore: o,
                            store: t,
                            disabled: l,
                            blockPropertyValueOverlayStore: d,
                            propertyId: e,
                            visibility: u,
                            isLast: i === s.length - 1
                        }, e))
                    }) : l || a || !m ? (0, n.jsx)("div", {
                        style: i(66467).Bb,
                        children: s.map((e, i) => (0, n.jsx)(r, {
                            format: c,
                            locked: a,
                            collectionStore: o,
                            store: t,
                            disabled: l,
                            blockPropertyValueOverlayStore: d,
                            propertyId: e,
                            visibility: u,
                            isLast: i === s.length - 1
                        }, e))
                    }) : (0, n.jsx)(i(66467).Ay, {
                        direction: "vertical",
                        keys: s,
                        renderKey: (e, i) => (0, n.jsx)(r, {
                            format: c,
                            locked: a,
                            collectionStore: o,
                            store: t,
                            disabled: l,
                            blockPropertyValueOverlayStore: d,
                            propertyId: e,
                            visibility: u,
                            isLast: i === s.length - 1
                        }, e),
                        onDrop: e => {
                            var t, n, l, r;
                            let a, s, d;
                            return t = e, n = o, l = c, r = p, a = l.collection_page_sections || [], s = [...i(381453).oE(t.map(e => a.find(t => t.section === e))), ...a.filter(e => !t.includes(e.section))], d = n.getSpaceId(), void(0, i(377796).createAndCommit)({
                                cellTarget: d ? {
                                    spaceWithId: d
                                } : void 0,
                                userAction: "RelationPropertyPageSections.handleReorder",
                                environment: r,
                                canUndo: !0,
                                perform: e => {
                                    (0, i(715144).z)({
                                        stores: [n],
                                        update: {
                                            collection_page_sections: s
                                        },
                                        transaction: e
                                    })
                                }
                            })
                        }
                    }) : null
                }, i(795676).A),
                r = o.memo(function({
                    propertyId: e,
                    format: t,
                    locked: o,
                    collectionStore: l,
                    store: r,
                    disabled: a,
                    blockPropertyValueOverlayStore: s,
                    visibility: d,
                    isLast: c
                }) {
                    let u;
                    u = d || (t.collection_page_sections ? ? []).filter(t => t.section === e).map(e => e.visibility)[0];
                    let [p, g] = (0, i(771869).z)(), m = (0, i(226142).a)(), f = "inline" === u, h = !c && "minimal" !== u, S = (0, i(682985).K8)(() => r.canEdit(), [r]), y = (0, i(960253).I)(() => ({
                        discussionIndicator: i(986939).A.isMobile ? {
                            flexShrink: 0
                        } : f ? {
                            position: "absolute",
                            visibility: g ? "visible" : "hidden",
                            insetInlineStart: g ? g + 4 : void 0,
                            top: 0
                        } : {},
                        wrapperDiv: {
                            position: "relative",
                            width: "minimal" !== u ? "100%" : void 0,
                            ...h ? {
                                marginBottom: i(209046).YE + i(209046).Lb + (S ? -4 : 0)
                            } : {}
                        },
                        selectable: f ? {} : {
                            display: "flex",
                            alignItems: "center"
                        }
                    }), [g, h, f, u, S]), v = (0, n.jsx)(i(656915).L_, {
                        store: r,
                        propertyId: e,
                        style: y.discussionIndicator
                    });
                    return (0, n.jsx)("div", {
                        className: "minimal" !== u ? "layout-content" : void 0,
                        style: y.wrapperDiv,
                        ref: p,
                        children: (0, n.jsxs)(i(611752).Ay, {
                            store: r,
                            analyticsName: "page_property",
                            style: y.selectable,
                            children: [(0, n.jsx)(i(625399).qm, {
                                store: r,
                                property: e,
                                disabled: a,
                                locked: o,
                                surface: "property_module",
                                tableWrap: !1,
                                blockPropertyValueOverlayStore: s,
                                collectionStore: l,
                                propertyVisibility: u
                            }, e), m ? null : v]
                        })
                    })
                })
        },
        261428: (e, t, i) => {
            i.d(t, {
                A: () => l
            });
            var o = i(296540),
                n = i(474848);

            function l(e) {
                let {
                    store: t,
                    afterOnClick: l,
                    style: r,
                    label: a
                } = e, s = (0, i(533992).v3)(), d = (0, i(682985).K8)(() => t.getSpaceId(), [t]), c = (0, o.useCallback)(() => {
                    (0, i(377796).createAndCommit)({
                        userAction: "PageAddIconButton.handleAddRandomIconClick",
                        environment: s,
                        cellTarget: d ? {
                            spaceWithId: d
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, i(291876).v)({
                                store: t,
                                transaction: e
                            })
                        }
                    }), l()
                }, [s, l, t, d]);
                return (0, n.jsx)(i(988022).p, {
                    style: r,
                    colorVariant: "tertiary",
                    onClick: c,
                    iconLeading: {
                        icon: i(718080).emojiFaceFillIcon,
                        size: "xs",
                        fitToViewBox: "all"
                    },
                    children: a
                }, "add-icon")
            }
        },
        266683: (e, t, i) => {
            i.d(t, {
                e: () => n
            });
            let o = new(i(815048)).O2("FormBlock", async () => await Promise.all([i.e(75134), i.e(9773), i.e(36556), i.e(55373), i.e(40537), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(23519), i.e(63771), i.e(29663), i.e(48860), i.e(75136), i.e(98175), i.e(63793), i.e(18881), i.e(65594), i.e(36441), i.e(15021), i.e(75234), i.e(66200), i.e(65499), i.e(53883), i.e(65688)]).then(i.bind(i, 354989))),
                n = (0, i(815048)._h)(o, e => e.FormBlock)
        },
        274749: (e, t, i) => {
            i.d(t, {
                i: () => o
            });

            function o(e) {
                var t;
                return null == (t = e.getSetting("getting_started_templates")) ? void 0 : t.default[0].page_id
            }
        },
        281353: (e, t, i) => {
            i.d(t, {
                A: () => n
            }), i(296540);
            var o = i(474848);
            let n = function({
                    collectionStore: e,
                    canFollowPageLinks: t,
                    syncProgressStore: n,
                    onNavigateToSourceClick: l
                }) {
                    return (0, i(682985).K8)(() => e.isSyncedCollection(), [e]) ? (0, o.jsx)(c, {
                        collectionStore: e,
                        canFollowPageLinks: t,
                        syncProgressStore: n,
                        onNavigateToSourceClick: l
                    }) : null
                },
                l = {
                    style0: {
                        display: "inline-flex"
                    },
                    style1: {
                        marginInlineStart: 5,
                        marginInlineEnd: 5,
                        display: "inline-flex",
                        gap: 4,
                        alignItems: "center"
                    },
                    style2: {
                        marginInlineStart: 5,
                        marginInlineEnd: 5,
                        display: "inline-flex"
                    },
                    fontStyle: {
                        color: i(632079).Tj.text.secondary,
                        fontSize: 12,
                        lineHeight: 1.2
                    }
                };

            function r({
                collectionStore: e,
                syncProgressStore: t,
                onNavigateToSourceClick: n
            }) {
                let a, s = (0, i(682985).K8)(() => e.getFormatStore().getKeyStore("sync_state").getKeyStore("syncing").getValue(), [e]),
                    d = (0, i(682985).K8)(() => e.getFormatStore().getKeyStore("sync_state").getKeyStore("last_synced_at").getValue(), [e]),
                    c = (0, i(682985).O$)(t),
                    u = !!((null == c ? void 0 : c.numberChildrenReceived) && c.numberChildrenUnfurled / c.numberChildrenReceived < 1) && !i(986939).A.isMobile,
                    p = s && i(986939).A.isMobile;
                return (d && (a = (0, o.jsx)(i(109939).sA, {
                    defaultMessage: "Synced {lastSyncedAt}",
                    id: "synced.lastSyncedAt.label",
                    values: {
                        lastSyncedAt: (0, i(799843).nl)(d, {
                            useLowercase: !0
                        })
                    }
                })), "row_limit_exceeded" === s) ? (0, o.jsx)(i(590422).Q, {
                    style: { ...l.style0,
                        ...l.fontStyle
                    },
                    onClick: () => null == n ? void 0 : n(),
                    children: (0, o.jsxs)("span", {
                        style: { ...l.style1,
                            ...l.fontStyle
                        },
                        children: [(0, o.jsx)(i(16275).I, {
                            icon: i(143896).exclamationMarkTriangleFillSmallIcon,
                            size: "xxs",
                            colorPalette: "orange",
                            colorVariant: "accentPrimary"
                        }), (0, o.jsx)(i(109939).sA, {
                            defaultMessage: "Partial Sync",
                            id: "synced.partial_sync.label"
                        })]
                    })
                }) : u || p ? (0, o.jsxs)("span", {
                    style: { ...l.style1,
                        ...l.fontStyle
                    },
                    children: [(0, o.jsx)(i(109939).sA, {
                        defaultMessage: "Syncing",
                        id: "synced.syncing.label"
                    }), (0, o.jsx)(i(16275).I, {
                        icon: i(670989).l,
                        size: "xxs",
                        className: "sync-spinner"
                    })]
                }) : (0, o.jsx)("span", {
                    style: { ...l.style2,
                        ...l.fontStyle
                    },
                    children: a
                })
            }
            let a = {
                span: {
                    color: i(632079).Tj.text.secondary
                },
                linkBox: {
                    fontSize: "14px",
                    lineHeight: 1.2,
                    color: i(632079).Tj.blue.text.accentPrimary,
                    marginInlineStart: "5px",
                    marginInlineEnd: "5px"
                },
                style0: {
                    background: "none",
                    textDecoration: "underline"
                }
            };

            function s() {
                let e = (0, i(533992).v3)();
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)("span", {
                        style: a.span,
                        children: "•"
                    }), (0, o.jsx)(i(590422).Q, {
                        inline: !0,
                        onClick: async () => {
                            await i(667932).j({
                                environment: e,
                                from: "collection_header"
                            });
                            let t = i(639675).Ay.createNewFlowId();
                            (0, i(104310).u)({
                                event: {
                                    eventName: "external_sync_entry_point",
                                    eventProperties: {
                                        integration: "jira",
                                        from: "database_sync",
                                        flowId: t
                                    }
                                }
                            })
                        },
                        style: a.linkBox,
                        hoveredStyle: a.style0,
                        children: (0, o.jsx)(i(109939).sA, {
                            defaultMessage: "Improve your Jira sync",
                            id: "synced.improve_jira_sync.label"
                        })
                    })]
                })
            }
            let d = {
                style0: {
                    display: "inline-flex",
                    alignItems: "center",
                    whiteSpace: "nowrap"
                },
                style2: {
                    background: "none",
                    textDecoration: "underline"
                },
                style1: {
                    flexShrink: 1,
                    width: "none",
                    padding: "2px 0px",
                    marginInlineEnd: 5,
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    alignSelf: "center"
                },
                style4: {
                    color: i(632079).Tj.text.secondary
                }
            };

            function c({
                collectionStore: e,
                canFollowPageLinks: t,
                syncProgressStore: n,
                onNavigateToSourceClick: a
            }) {
                let p = (0, i(682985).K8)(() => e.getFormatStore().getKeyStore("original_url").getValue(), [e]),
                    g = (0, i(682985).K8)(() => e.getSpaceId(), [e]),
                    m = (0, i(682985).K8)(() => !!e.getFormatStore().getKeyStore("sync_state").getValue(), [e]),
                    f = (0, i(682985).K8)(() => p && (0, i(939042).e)(p, g), [g, p]),
                    h = (0, i(682985).K8)(() => (0, i(607689).fH)(p, g), [g, p]),
                    S = (0, i(682985).K8)(() => {
                        let t = e.getFormat().uri;
                        return !!t && e.getFormat().external_collection_type !== i(565546).uO.Jira && (0, i(607689).Ip)(t)
                    }, [e]);
                return (0, o.jsxs)("div", {
                    style: d.style0,
                    children: [f ? (0, o.jsx)(i(590422).Q, {
                        href: f,
                        style: { ...d.style1,
                            ...l.fontStyle
                        },
                        hoveredStyle: d.style2,
                        disabled: !t,
                        external: !0,
                        children: h
                    }) : void 0, m ? (0, o.jsx)("span", {
                        style: d.style4,
                        children: "•"
                    }) : null, m ? (0, o.jsx)(r, {
                        collectionStore: e,
                        syncProgressStore: n,
                        onNavigateToSourceClick: a
                    }) : null, S ? (0, o.jsx)(s, {}) : void 0, (0, o.jsx)(u, {
                        collectionStore: e
                    })]
                })
            }

            function u({
                collectionStore: e
            }) {
                let t = (0, i(682985).K8)(() => {
                        let t = (0, i(607689).cl)(e.getFormat().uri, e.getSpaceId());
                        return (null == t ? void 0 : t.id) ? ? e.getFormat().integration_id
                    }, [e]),
                    n = (0, i(59651).l)(t);
                return n ? (0, o.jsx)(p, {
                    featureName: n,
                    collectionStore: e
                }) : null
            }

            function p({
                featureName: e,
                collectionStore: t
            }) {
                let n = (0, i(801643).uF)({
                    featureName: e,
                    collectionStore: t
                });
                if (!(null != n && n.upsell)) return null;
                let {
                    upsell: l
                } = n;
                return (0, o.jsx)(i(364017).j, {
                    source: "collection_synced_database",
                    upsell: l,
                    featureName: e,
                    display: "text",
                    customMessages: g,
                    size: "small",
                    spaceStore: (0, i(974410).f)(t)
                })
            }
            let g = (0, i(109939).YK)({
                eligible_to_purchase: {
                    id: "SyncedCollectionIndicators.upgrade.eligibleToPurchase",
                    defaultMessage: "<highlight>Upgrade</highlight> to continue using synced database"
                },
                eligible_for_trial: {
                    id: "SyncedCollectionIndicators.upgrade.eligibleForTrial",
                    defaultMessage: "<highlight>Try</highlight> to continue using synced database"
                },
                sales_eligible: {
                    id: "SyncedCollectionIndicators.upgrade.salesEligible",
                    defaultMessage: "<highlight>Contact sales</highlight> to continue using synced database"
                },
                sales_assisted: {
                    id: "SyncedCollectionIndicators.upgrade.salesAssisted",
                    defaultMessage: "<highlight>Contact sales</highlight> to continue using synced database"
                },
                eligible_to_request: {
                    id: "SyncedCollectionIndicators.upgrade.eligibleToRequest",
                    defaultMessage: "<highlight>Request upgrade</highlight> to continue using synced database"
                },
                request_pending: {
                    id: "SyncedCollectionIndicators.upgrade.requestPending",
                    defaultMessage: "<highlight>Requested</highlight> to continue using synced database"
                }
            })
        },
        284771: (e, t, i) => {
            i.d(t, {
                A: () => l
            });
            var o = () => i(546605);
            class n extends o().Store {
                constructor() {
                    super()
                }
                getInitialState() {}
            }
            let l = new n
        },
        291876: (e, t, i) => {
            i.d(t, {
                v: () => o
            });

            function o(e) {
                let {
                    store: t,
                    transaction: o
                } = e, n = t.getIconStore();
                if (n) {
                    let e = (0, i(859941).a)();
                    (0, i(368198).K)({
                        store: n,
                        value: e,
                        transaction: o
                    })
                }
            }
        },
        299304: (e, t, i) => {
            i.d(t, {
                Y: () => n
            }), i(296540);
            var o = i(474848);

            function n() {
                return (0, o.jsx)(i(51831).m, {
                    placement: "top",
                    content: () => (0, o.jsx)(i(109939).sA, {
                        defaultMessage: "Only visible to you",
                        id: "privatePageBadge.tooltip"
                    }),
                    children: e => (0, o.jsx)("div", { ...e,
                        children: (0, o.jsx)(i(16275).I, {
                            icon: i(930113).lockFillSmallIcon,
                            size: "sm",
                            colorPalette: "gray",
                            colorVariant: "secondary",
                            fitToViewBox: "vertical"
                        })
                    })
                })
            }
        },
        306472: (e, t, i) => {
            i.d(t, {
                A: () => n
            }), i(296540);
            var o = i(474848);

            function n(e) {
                let {
                    store: t,
                    context: n,
                    onFocus: l,
                    onBlur: r,
                    children: a
                } = e, s = (0, i(682985).K8)(() => {
                    let e, o, l, r = (0, i(335818).XD)(n);
                    return i(986939).A.isMobile ? t.getCover() ? (t.getIcon(), l = "block", e = r, o = 4) : (l = "flex", e = r, o = (0, i(335818).$n)()) : t.isCollectionView() || (0, i(335818).mb)(t) ? (l = "flex", e = t.getCover() ? 16 : 4, o = 4) : (l = "flex", t.getIcon() ? (e = 8, o = 4) : t.getCover() ? (e = 16, o = 4) : (e = r, o = (0, i(335818).$n)())), {
                        display: l,
                        paddingTop: e,
                        paddingBottom: o
                    }
                }, [n, t]), d = (0, i(960253).I)(() => ({
                    container: { ...s,
                        justifyContent: "flex-start",
                        flexWrap: "wrap",
                        marginInlineStart: -1,
                        color: i(632079).Tj.text.tertiary,
                        fontFamily: (0, i(699422).vc)(i(849917).locale).sans,
                        pointerEvents: "auto"
                    }
                }), [s]);
                return (0, o.jsx)("div", {
                    onFocus: l,
                    onBlur: r,
                    style: d.container,
                    className: "notion-page-controls",
                    children: a
                })
            }
        },
        329171: (e, t, i) => {
            i.d(t, {
                n: () => o
            });

            function o(e) {
                return (0, i(862085).Jh)(e) || (0, i(862085).K1)(e)
            }
        },
        334120: (e, t, i) => {
            i.d(t, {
                E: () => r,
                f: () => l
            }), i(296540);
            var o = i(474848);
            let n = {
                isolation: "isolate"
            };

            function l(e) {
                let {
                    store: t,
                    isEditable: l,
                    isInPeek: a,
                    paddingX: s,
                    pageCoverHeight: d,
                    onMouseEnter: c,
                    onMouseLeave: u
                } = e, p = (0, i(533992).v3)(), g = (0, i(682985).K8)(() => t.isCollectionView() ? "20vh" : d, [d, t]), m = (0, i(616844).Y5)("left", s), f = (0, i(616844).Y5)("right", s), h = (0, i(682985).K8)(() => p.WindowSizeStore.state.width, [p.WindowSizeStore]), S = (0, i(112923).n)(t), y = (0, i(682985).K8)(() => r(t, p), [p, t]);
                return (0, o.jsx)(i(394112).Pb, {
                    style: n,
                    children: (0, o.jsx)(i(654979).A, {
                        tag: i(385827).s,
                        animate: {
                            translateX: S
                        },
                        allowSelectionWithin: !1,
                        className: a ? i(828432).S6D : void 0,
                        style: y,
                        onMouseEnter: c,
                        onMouseLeave: u,
                        children: (0, o.jsx)(i(15021).d, {
                            height: g,
                            store: t,
                            disabled: !l,
                            paddingLeft: m,
                            paddingRight: f,
                            proxyWidth: h
                        })
                    })
                })
            }

            function r(e, t) {
                let o = (0, i(335818).NR)(e, t);
                return o.zIndex = 2, o
            }
        },
        337108: (e, t, i) => {
            function o(e, t) {
                return e.sort((e, i) => {
                    let o = e.store.canAdmin();
                    if (o === i.store.canAdmin()) {
                        var n, l;
                        let o = null == (n = e.publishedMetadata.publishedBy) ? void 0 : n.id,
                            r = e.publishedMetadata.publishedTime,
                            a = null == (l = i.publishedMetadata.publishedBy) ? void 0 : l.id,
                            s = i.publishedMetadata.publishedTime;
                        if (t) {
                            if (o === t && a === t && r && s) return s - r;
                            if (o === t) return -1;
                            if (a === t) return 1
                        }
                        return r && s ? s - r : 0
                    }
                    return o ? -1 : 1
                })
            }

            function n(e) {
                let {
                    environment: t,
                    store: o
                } = e;
                if (!(0, i(862085).i0)(o).find(e => (0, i(642157).W8)(e.permissionItem))) return !1;
                let n = i(728372).AppStoreSidebarSpaceStore.state;
                return (null == n || !n.getSettings().hide_sites_banner) && !(0, i(142484).q)(t, o, o.getSpaceStore())
            }
            i.d(t, {
                X: () => o,
                c: () => n
            }), i(898992), i(672577)
        },
        345519: (e, t, i) => {
            i.d(t, {
                DV: () => o,
                Up: () => l,
                cf: () => n
            });
            let o = 1e3;

            function n(e) {
                return !!e && !!(0, i(247438).q4_)(e.getValue())
            }

            function l(e) {
                if (!e) return [];
                let t = e.getSettings();
                return (null == t ? void 0 : t.hidden_collection_descriptions) ? ? []
            }
        },
        349417: (e, t, i) => {
            i.d(t, {
                F: () => l
            });
            var o = () => i(546605);
            class n extends o().Store {
                getInitialState() {
                    return {
                        isOpen: !1
                    }
                }
            }
            let l = new n
        },
        356622: (e, t, i) => {
            i.d(t, {
                V: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    errors: n
                } = e, l = (0, i(274749).i)(o);
                if (!l) return;
                let r = o.getSetting("getting_started_template_errors");
                (0, i(377796).createAndCommit)({
                    userAction: "spaceActions.setGettingStartedTemplateError",
                    environment: t,
                    cellTarget: {
                        spaceWithId: o.id
                    },
                    canUndo: !0,
                    perform: e => {
                        (0, i(818116).R)(o, e, {
                            getting_started_template_errors: { ...r,
                                [l]: n
                            }
                        })
                    }
                })
            }
        },
        406245: (e, t, i) => {
            i.d(t, {
                X: () => o
            });
            let o = (0, i(296540).createContext)(0);
            o.displayName = "PageViewHorizontalOffsetContext"
        },
        410489: (e, t, i) => {
            i.d(t, {
                v: () => o
            });

            function o(e) {
                let {
                    collectionStore: t,
                    module: o,
                    isMobile: n
                } = e;
                if ("normalizedTitleWithIcon" !== o.type) return !1;
                let l = t.getSchema(),
                    r = !!l && (0, i(287753).LD)({
                        collectionSchema: l,
                        module: o
                    }).length > 0,
                    a = (0, i(287753).pm)({
                        collectionStore: t
                    }).count > 0;
                return !!n && !!a || !r && a
            }
        },
        412764: (e, t, i) => {
            i.d(t, {
                Ap: () => l,
                RR: () => r,
                X1: () => n
            });
            var o = i(296540);

            function n(e) {
                let {
                    format: t
                } = e;
                return {
                    backlinksConfiguredToShowAboveTitle: (0, i(682985).K8)(() => {
                        let e = (0, i(613968).nl)(t.page_section_visibility);
                        return "section_collapsed" === e || "always_show" === e
                    }, [t.page_section_visibility])
                }
            }

            function l(e) {
                let {
                    store: t,
                    format: n
                } = e, l = (0, i(533992).v3)();
                return {
                    backlinksVisibility: (0, i(613968).nl)(n.page_section_visibility),
                    updateBacklinksVisibility: (0, o.useCallback)(e => {
                        let o = (0, i(613968).SB)(e);
                        i(453042).OD({
                            environment: l,
                            pageSection: "backlinks",
                            visibility: o,
                            store: t,
                            format: n
                        })
                    }, [l, t, n])
                }
            }

            function r(e) {
                let {
                    pageStore: t
                } = e, o = (0, i(533992).v3)(), {
                    store: n,
                    format: r
                } = (0, i(682985).K8)(() => {
                    let e = t.getAssociatedCollectionStore() ? ? t,
                        i = e.getFormat();
                    return {
                        store: e,
                        format: i
                    }
                }, [t]), {
                    backlinksVisibility: a
                } = l({
                    store: n,
                    format: r
                }), s = (0, i(682985).K8)(() => "section_hide" !== a && (0, i(184273).Pn)(t, o), [t, o, a], {
                    debugName: "useShowBacklinksTopControlButtonInPage.useComputedStore:mightHaveBacklinks"
                });
                return "section_hide" !== a && s ? "always_show" === a ? "always" : "section_collapsed" === a ? "onHover" : void(0, i(722371).HB)(a) : "never"
            }
        },
        437788: (e, t, i) => {
            i.d(t, {
                W: () => o
            });

            function o(e) {
                return (0, i(120190).F)(e)
            }
        },
        475620: (e, t, i) => {
            i.d(t, {
                z: () => r
            }), i(898992), i(354520), i(581454);
            var o = i(296540),
                n = i(474848);
            let l = {
                marginInlineStart: 6
            };

            function r(e) {
                let {
                    pageStore: t,
                    disabled: r,
                    context: a,
                    wrapper: s,
                    showDefaultTitle: d
                } = e, c = a === i(166654).R.PeekView, u = (0, i(682985).K8)(() => (0, i(444285).S)(t), [t]), {
                    collectionStore: p,
                    collectionSchema: g,
                    normalizedCollectionFormat: m
                } = (0, i(682985).K8)(() => {
                    let e = t.getAssociatedCollectionStore(),
                        o = null == e ? void 0 : e.getSchema(),
                        n = null == e ? void 0 : e.getFormat(),
                        l = n && o && (0, i(944940).L)(n, o, void 0, i(565546).jf.Collection);
                    return {
                        collectionStore: e,
                        collectionSchema: o,
                        normalizedCollectionFormat: l
                    }
                }, [t]), f = (0, o.useCallback)(e => {
                    let o = null == g ? void 0 : g[e];
                    if ((null == o ? void 0 : o.type) !== "relation") return !1;
                    let n = t.getPropertyValue(e);
                    return 0 === (0, i(561872).bG)({
                        relationValue: (0, i(561872).n)(n),
                        propertySchema: o,
                        getRecordModel: t.getRecordModel,
                        includeNoAccess: !0
                    }).length
                }, [g, t]), h = (0, i(682985).K8)(() => g && m ? (0, i(824207).u)({
                    format: m,
                    schema: g,
                    visibilityLevels: ["inline"]
                }).filter(e => !f(e)) : [], [g, f, m]), S = (0, i(682985).K8)(() => g && m ? (0, i(824207).T)({
                    format: m,
                    schema: g,
                    visibilityLevels: ["minimal", "inline"]
                }).filter(e => !!("minimal" === e.visibility || "inline" === e.visibility && f(e.section))).map(e => e.section) : [], [g, f, m]), y = (0, i(682985).K8)(() => t.canEdit(), [t]), v = (0, i(960253).I)(() => ({
                    inlinePageSectionsContainer: { ...S.length > 0 ? {
                            marginBottom: i(209046).YE + i(209046).Lb + (y ? -4 : 0)
                        } : {}
                    }
                }), [S.length, y]);
                return p && g && m && (0 !== h.length || 0 !== S.length) ? s((0, n.jsx)(i(4458).VP, {
                    gap: 4,
                    children: (0, n.jsxs)(i(385827).s, {
                        allowSelectionWithin: !0,
                        children: [h.length > 0 ? (0, n.jsx)("div", {
                            style: v.inlinePageSectionsContainer,
                            children: (0, n.jsx)(i(258437).A, {
                                propertyIds: h,
                                store: t,
                                collectionStore: p,
                                disabled: r,
                                locked: u,
                                blockPropertyValueOverlayStore: c ? i(129894).A : i(363746).A,
                                format: m,
                                type: "inline"
                            })
                        }) : void 0, S.length > 0 ? (0, n.jsxs)(n.Fragment, {
                            children: [d ? (0, n.jsx)(i(837371).j, {
                                store: t,
                                style: l,
                                children: (0, n.jsx)(i(109939).sA, {
                                    id: "pageLayout.relationsGroup.defaultTitle",
                                    defaultMessage: "Relations"
                                })
                            }) : void 0, (0, n.jsx)(i(4458).fI, {
                                flexWrap: "wrap",
                                children: (0, n.jsx)(i(258437).A, {
                                    propertyIds: S,
                                    store: t,
                                    collectionStore: p,
                                    disabled: r,
                                    locked: u,
                                    blockPropertyValueOverlayStore: c ? i(129894).A : i(363746).A,
                                    format: m,
                                    type: "minimal"
                                })
                            })]
                        }) : void 0]
                    })
                })) : null
            }
        },
        509364: (e, t, i) => {
            i.d(t, {
                TK: () => r,
                YC: () => l,
                ui: () => n
            });
            let o = {
                    pageVerification: new(i(815048)).O2("pageVerification", () => Promise.all([i.e(54951), i.e(28048), i.e(96579), i.e(95150), i.e(94891)]).then(i.bind(i, 21161))),
                    pageVerificationBadge: new(i(815048)).O2("pageVerificationBadge", () => Promise.all([i.e(40994), i.e(80139), i.e(54951), i.e(17250), i.e(28048), i.e(55940), i.e(12560), i.e(21969), i.e(74145), i.e(48860), i.e(18682), i.e(79349), i.e(47414), i.e(96579), i.e(9817), i.e(29447), i.e(75189), i.e(34331), i.e(41412)]).then(i.bind(i, 182617))),
                    pageVerificationMenuRenderer: new(i(815048)).O2("pageVerificationMenuRenderer", () => Promise.all([i.e(40994), i.e(80139), i.e(54951), i.e(17250), i.e(28048), i.e(55940), i.e(12560), i.e(21969), i.e(74145), i.e(48860), i.e(18682), i.e(79349), i.e(47414), i.e(96579), i.e(9817), i.e(29447), i.e(75189), i.e(34331), i.e(26207)]).then(i.bind(i, 988890)))
                },
                n = (0, i(815048)._h)(o.pageVerification, e => e.PageAddVerificationButton),
                l = (0, i(815048)._h)(o.pageVerificationBadge, e => e.PageVerificationBadge),
                r = (0, i(815048)._h)(o.pageVerificationMenuRenderer, e => e.PageVerificationMenuRenderer)
        },
        520087: (e, t, i) => {
            i.d(t, {
                p: () => P
            });
            var o = i(296540),
                n = i(474848);

            function l(e) {
                let {
                    pageBlockStore: t,
                    isVisible: o,
                    context: l
                } = e, r = (0, i(533992).Y0)(), a = (0, i(682985).K8)(() => (0, i(335818).Ck)(t, l, r), [t, l, r]);
                return (0, n.jsx)(i(385827).s, {
                    allowSelectionWithin: !0,
                    style: {
                        width: a && o ? i(424332).Qb : 0
                    },
                    children: (0, n.jsx)(i(656915).UY, { ...e
                    })
                })
            }
            let r = new(i(815048)).O2("VirtualList", () => Promise.all([i.e(26361), i.e(10876)]).then(i.bind(i, 704527))),
                a = (0, i(815048)._h)(r, e => e.VirtualList);

            function s(e) {
                return (0, i(682985).K8)(() => {
                    if (e.isCollectionView()) {
                        let t = e.getCollectionStoreIfSingleSource();
                        return !!t && t.isSyncedCollection()
                    }
                    return e.isType(i(955630).xd.externalObjectInstancePage)
                }, [e])
            }

            function d(e) {
                return (0, i(682985).K8)(() => !!i(4929).A.state.pageMap[e.id] || i(566276).A.state.pages.has(e.id), [e.id])
            }
            let c = {
                    height: 24,
                    width: "100%",
                    borderRadius: 8
                },
                u = {
                    height: 24,
                    width: "100%",
                    borderRadius: 8
                },
                p = {
                    height: 24,
                    width: "80%",
                    borderRadius: 8
                };

            function g() {
                return (0, n.jsxs)(i(4458).VP, {
                    gap: 6,
                    children: [(0, n.jsx)(i(795830).P, {
                        style: c
                    }), (0, n.jsx)(i(795830).P, {
                        style: u
                    }), (0, n.jsx)(i(795830).P, {
                        style: p
                    })]
                })
            }
            i(581454);
            let m = {
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 5
                },
                f = {
                    marginInlineStart: 5,
                    width: 26,
                    height: 26,
                    marginInlineEnd: 10,
                    borderRadius: 4
                },
                h = {
                    height: 14,
                    marginTop: 8,
                    marginBottom: 8,
                    width: "25%",
                    borderRadius: 8
                };

            function S() {
                return (0, n.jsx)(n.Fragment, {
                    children: [...Array(6)].map((e, t) => (0, n.jsxs)("div", {
                        style: m,
                        children: [(0, n.jsx)(i(795830).P, {
                            style: f
                        }), (0, n.jsx)(i(795830).P, {
                            style: h
                        })]
                    }, t))
                })
            }
            let y = {
                width: "100%"
            };

            function v(e) {
                let {
                    menuListStore: t,
                    store: o
                } = e;
                (0, i(383953).w)(() => {
                    t.reset()
                });
                let l = (0, i(682985).K8)(() => (function(e) {
                        let t = i(991807).f.state.pages.get(e.id);
                        if (t) {
                            if (!t.hasContent) return !1
                        } else {
                            let t = e.getFormat().duplication_job_ids;
                            if (!t || 0 === t.length) return !1
                        }
                        return !e.hasContent()
                    })(o), [o]),
                    r = (0, i(682985).K8)(() => !!o.getAssociatedCollectionStore(), [o]);
                return (0, n.jsx)(i(385827).s, {
                    style: y,
                    allowSelectionWithin: !1,
                    children: r && l ? (0, n.jsx)(g, {}) : (0, n.jsx)(b, {
                        menuListStore: t,
                        store: o,
                        collectionPage: r
                    })
                })
            }

            function b(e) {
                let {
                    menuListStore: t,
                    store: l,
                    collectionPage: r
                } = e, a = (0, i(533992).WS)(), s = (0, i(682985).O$)(i(205885).e), d = (0, i(682985).K8)(() => l.isTeamPost(), [l]), c = (0, i(682985).K8)(() => (0, i(191844).I)(l.getAssociatedLayoutStore()), [l]), u = (0, i(960253).I)(() => {
                    let e = c ? 0 : "14vh";
                    return {
                        wrapStyle: {
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: d ? void 0 : e
                        }
                    }
                }, [d, c]), p = (0, o.useCallback)(() => !a && (0, n.jsx)(S, {}), [a]), g = (0, i(463846).A)(!0);
                return (0, i(264873).N)(e => (0, n.jsxs)("div", { ...g,
                    ...e,
                    style: u.wrapStyle,
                    children: [(0, n.jsx)(k, {
                        store: l,
                        collectionPage: r
                    }), s ? (0, n.jsx)(i(929925).t, {
                        menuListStore: t,
                        store: l,
                        renderLoading: p
                    }) : void 0]
                }))
            }
            let x = {
                display: "inline-block",
                textDecoration: "underline"
            };

            function k(e) {
                let {
                    store: t,
                    collectionPage: l
                } = e, r = (0, i(533992).v3)(), a = (0, i(533992).Y0)(), s = (0, o.useContext)(i(440411).n), d = (0, i(682985).K8)(() => i(827482).A.getMode(r, t, t.getSpaceStore()), [r, t]), c = (0, o.useCallback)(() => (function(e) {
                    let {
                        environment: t,
                        store: o,
                        overrideLinkClick: n
                    } = e, l = o.getAssociatedCollectionStore();
                    if (l && (0, i(194020).E)(t, (0, i(974410).f)(o))) {
                        var r;
                        let e, a = o.getSpaceId(),
                            {
                                performResult: s
                            } = (0, i(377796).createAndCommit)({
                                userAction: "TemplatePicker.newPage",
                                environment: t,
                                cellTarget: a ? {
                                    spaceWithId: a
                                } : void 0,
                                canUndo: !0,
                                perform: e => i(845422).bI({
                                    environment: t,
                                    collectionStore: l,
                                    transaction: e
                                })
                            });
                        s && (r = (e = i(728372).AppStoreMainEditorCurrentBlockStore.state) ? (0, i(483227).Ay)({
                            store: e,
                            peekViewBlockId: s.id,
                            fullyQualified: !1,
                            pageVisitSource: i(254656).y8.LinkInPage
                        }) : (0, i(483227).Ay)({
                            store: s,
                            fullyQualified: !1,
                            pageVisitSource: i(254656).y8.LinkInPage
                        }), n ? n(r) : (0, i(79266).navigate)({
                            environment: t,
                            url: r
                        })), (0, i(941754).e)(t, {
                            collection_id: l.id
                        })
                    }
                })({
                    environment: r,
                    store: t,
                    overrideLinkClick: s
                }), [r, t, s]), u = (0, i(682985).K8)(() => t.isTemplate(), [t]), p = (0, i(682985).O$)(i(205885).e), g = (0, i(682985).K8)(() => {
                    let e, i;
                    return (i = (e = t.getAssociatedCollectionStore()) ? e.getTemplatePageStores() : void 0) && i.length > 0
                }, [t]), m = l && !g, f = (0, i(682985).K8)(() => {
                    let e = t.getAssociatedCollectionStore(),
                        o = e && e.getParentBlockStore();
                    return !(0, i(261105).v)({
                        collectionStore: e,
                        collectionViewBlockStore: o,
                        checkNavigableAncestorLocked: !0
                    })
                }, [t]), h = (0, i(682985).K8)(() => {
                    var e;
                    let i = t.getAssociatedCollectionStore(),
                        o = null == i ? void 0 : i.getLayoutStore();
                    return (null == o || null == (e = o.getFormat()) ? void 0 : e.database_templates_visibility) === "hide"
                }, [t]), S = (0, i(682985).K8)(() => (0, i(576348).ZE)(d, t), [d, t]), v = (0, i(682985).K8)(() => t.isTeamPost(), [t]), b = (0, i(643160).yf)(), k = (0, i(960253).I)(() => {
                    let e = 8 * !!b,
                        t = b ? 8 : 5;
                    return {
                        placeholder: { ...i(57461).CC,
                            color: i(632079).Tj.text.tertiary,
                            paddingTop: v ? 3 : t,
                            paddingBottom: v ? 3 : 24,
                            paddingInlineStart: v ? 2 : e,
                            paddingInlineEnd: v ? 2 : void 0
                        }
                    }
                }, [v, b]), C = null;
                return l && h ? null : (p || a.isPhone ? u ? C = (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "{isMobileDevice, select, true {Tap here to continue with an empty page.} other {Press ‘enter’ to continue with an empty page.}}",
                    id: "templatePicker.isTemplate.emptyPagePrompt",
                    values: {
                        isMobileDevice: i(986939).A.isMobile
                    }
                }) : i(986939).A.isMobile ? l && g ? C = a.isTablet ? (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Tap here to continue with an empty page, or pick a template",
                    id: "templatePicker.mobileTabletEmptyPage.withTemplates.prompt"
                }) : (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Tap here to continue…",
                    id: "templatePicker.mobilePhoneEmptyPage.withTemplates.prompt"
                }) : m ? C = (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "{isParentLocked, select, true {Tap here to continue with an empty page} other {Tap here to continue with an empty page, or <templatebutton>create a template</templatebutton>}}",
                    id: "templatePicker.mobileCollectionEmptyPage.prompt",
                    values: {
                        isParentLocked: f,
                        templatebutton: e => (0, n.jsx)(i(64960).Ay, {
                            style: x,
                            onClick: c,
                            children: e
                        })
                    }
                }) : a.isPhone || (C = a.isTablet ? (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Tap here to continue with an empty page, or pick a template",
                    id: "templatePicker.mobileTabletEmptyPage.withTemplates.prompt"
                }) : (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Tap here to continue…",
                    id: "templatePicker.mobilePhoneEmptyPage.withTemplates.prompt"
                })) : m ? C = (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "{isParentLocked, select, true {Press ‘enter’ to continue with an empty page} other {Press ‘enter’ to continue with an empty page, or <templatebutton>create a template</templatebutton>}}",
                    id: "templatePicker.webCollectionEmptyPage.prompt",
                    values: {
                        isParentLocked: f,
                        templatebutton: e => (0, n.jsx)(i(64960).Ay, {
                            style: x,
                            onClick: c,
                            children: e
                        })
                    }
                }) : (!S || l) && (C = (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Press ‘enter’ to continue with an empty page, or pick a template (use ‘↑’ and ‘↓’ to select)",
                    id: "templatePicker.webEmptyPage.withTemplates.prompt"
                })) : C = (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "{isMobileDevice, select, true {Tap here to continue with an empty page. Go online to use templates.} other {Press ‘enter’ to continue with an empty page. Go online to use templates.}}",
                    id: "templatePicker.deviceOffline.goOnlinePrompt",
                    values: {
                        isMobileDevice: i(986939).A.isMobile
                    }
                }), C) ? (0, n.jsx)("div", {
                    style: y,
                    children: (0, n.jsx)("div", {
                        style: k.placeholder,
                        onClick: e => {
                            (0, i(705660).SQ)(e, i(705660).y$.Click, () => {
                                if ((0, i(194020).E)(r, (0, i(974410).f)(t))) {
                                    let e = t.getSpaceId();
                                    (0, i(377796).createAndCommit)({
                                        userAction: "TemplatePicker.handleEmptyPageContinueClick",
                                        environment: r,
                                        cellTarget: e ? {
                                            spaceWithId: e
                                        } : void 0,
                                        canUndo: !0,
                                        perform: e => {
                                            i(532559).n({
                                                environment: r,
                                                store: t,
                                                transaction: e
                                            })
                                        }
                                    }), (0, i(523713).k)(r, {
                                        is_keyboard: !1,
                                        from: "template_picker",
                                        template_type: "empty_page"
                                    })
                                }
                            })
                        },
                        children: C
                    })
                }) : null
            }
            let C = {
                    emptyDroppableStyle: {
                        width: "100%"
                    },
                    emptyPlaceholderText: {
                        color: i(632079).Tj.text.disabled,
                        paddingInlineStart: 8
                    }
                },
                w = (0, o.forwardRef)(function({
                    context: e,
                    disabled: t,
                    onClick: l,
                    store: r,
                    templatePickerMenuListStore: c,
                    testPlaceholder: u,
                    forceIsInsideMarginCollapseContainer: p
                }, g) {
                    var m, f;
                    let h, S, y, b, x = (0, i(533992).v3)(),
                        {
                            device: k
                        } = x,
                        w = d(r),
                        _ = (0, i(119965).V)(),
                        I = function(e, t) {
                            let o, n, l, r, a, c = (0, i(854258).O)(e, t),
                                u = (o = (0, i(533992).v3)(), n = (0, i(67499).S)(), l = d(e), r = (0, i(682985).K8)(() => {
                                    var o, n;
                                    return t === i(166654).R.Frame ? !!(null == (o = i(728372).default.state.currentLoadingContainerStore) ? void 0 : o.state.ready) : t === i(166654).R.PeekView && i(475097).default.state.open ? !!(null == (n = i(475097).default.state.loadingContainerStore) ? void 0 : n.state.ready) : t === i(166654).R.CollectionPageView || t === i(166654).R.CollectionPageViewFullScreen ? e.isReady() : void 0
                                }, [t, e]), a = s(e), (0, i(682985).K8)(() => {
                                    var t, s;
                                    if (!r) return !1;
                                    let d = o.currentUser.isLoggedIn(),
                                        c = n && n.publicEditModeStore.state,
                                        u = null == (t = i(728372).AppStoreSidebarSpaceViewStore.state) || null == (t = t.getSettings()) || null == (t = t.getting_started_page_ids) ? void 0 : t[0],
                                        p = null == (s = i(728372).AppStoreCurrentUserSettingsStore.state) || null == (s = s.getSettings()) ? void 0 : s.post_onboarding_agent_config;
                                    return !(0, i(10638).shouldShowOnboardingPlaceholder)({
                                        pageStore: e,
                                        firstGettingStartedPageId: u,
                                        postOnboardingAgentConfig: p ? ? {}
                                    }) && !!(e && e.isDefined() && !(0, i(444285).S)(e) && e.canEdit() && !e.hasContent() && d && (!(null != c && c.hasPublicPermission) || (null == c ? void 0 : c.permission) === "edit") && !l && !a)
                                }, [o.currentUser, a, r, n, l, e]));
                            return c ? "horizontal" : u ? "legacy" : "none"
                        }(r, e),
                        P = s(r),
                        M = (0, i(366318).S)(r),
                        A = (0, i(682985).K8)(() => !!(t || (0, i(444285).S)(r)) || !!M, [r, t, M]),
                        {
                            page_font: j,
                            page_small_text: B
                        } = (0, i(682985).K8)(() => ({
                            page_font: r.getFormatStore().getKeyValue("page_font"),
                            page_small_text: r.getFormatStore().getKeyValue("page_small_text")
                        }), [r]),
                        T = (0, i(682985).K8)(() => (0, i(335818).In)(r), [r]),
                        K = (0, i(335818).L5)(e),
                        V = (0, i(682985).K8)(() => r.isTeamPost(), [r]),
                        E = (0, i(682985).K8)(() => r.getContentStore(), [r]),
                        R = (0, i(747193).b)(r, t),
                        L = (0, i(533992).WS)(),
                        D = (0, i(682985).K8)(() => r.isCollectionView(), [r]),
                        F = (0, i(682985).K8)(() => (0, i(897822).n)(), []),
                        O = (0, i(682985).K8)(() => !!r.getCover(), [r]),
                        z = (0, i(83208).X)("page_editor_virtual_list"),
                        W = (0, i(682985).K8)(() => {
                            var e;
                            let t = null == (e = r.getAssociatedCollectionStore()) ? void 0 : e.getLayoutStore();
                            return (0, i(191844).I)(t)
                        }, [r]),
                        H = (0, i(355301).D1)(k),
                        N = (0, i(682985).K8)(() => k.isAndroid && k.isTablet && k.isMobileNative ? x.WindowSizeStore.getSafePaddingBottomPx(36) : 0, [k, x.WindowSizeStore]),
                        U = (0, i(682985).K8)(() => K ? i(731810).A.state.totalHeight : i(465361).A.state.totalHeight, [K]),
                        q = (0, i(682985).K8)(() => {
                            let e = !(0, i(447036).cq)(r) || i(475097).default.isSidePeekOpen() || i(475097).default.isSidePeekClosingStore.state ? "100vh" : `100vh - ${i(475097).PeekModeOuterPadding}px*2`,
                                t = (0, i(801113).ek)(x.device.isElectronMac),
                                o = i(670296).u.getTotalHeight(),
                                n = U ? ? 0;
                            return `calc(${e} - ${t}px - 66px - 48px - 140px - ${N}px - ${n}px + ${o<250?0:o}px)`
                        }, [r, x.device.isElectronMac, N, U]),
                        Y = (0, i(355301).D1)(k) ? i(699422).LP.redesign : i(699422).LP.control,
                        Q = (0, o.useCallback)(() => e === i(166654).R.DraftPostInInlineComposer || e === i(166654).R.WorkflowInstructionsInInlineComposer ? 29 : V || F || W ? 0 : "15vh", [e, V, W, F]),
                        G = (0, i(960253).I)(() => {
                            let t, o, n = j || i(865594).zs,
                                l = i(865594).DX[n];
                            t = i(986939).A.isMobile ? Y.lineHeight : i(865594).JK[n] || 1.5, o = i(986939).A.isMobile ? Y.fontSize : e === i(166654).R.DraftPostInInlineComposer || e === i(166654).R.WorkflowInstructionsInInlineComposer ? 14 : B ? i(865594).Y4[n] || i(865594).dp : i(865594).T1[n] || i(865594).uD;
                            let r = {},
                                a = {
                                    paddingTop: 8 * (e !== i(166654).R.DraftPostInInlineComposer && e !== i(166654).R.WorkflowInstructionsInInlineComposer)
                                },
                                s = (0, i(335818).L5)(e);
                            if (!(T && s && "none" === I && !w)) {
                                let e = T ? Q() : 0;
                                r = { ...a = { ...a,
                                        paddingBottom: e
                                    },
                                    paddingInlineStart: 0,
                                    paddingInlineEnd: 0
                                }
                            }
                            let d = {};
                            s && !V && (d = { ...W ? {} : {
                                    minHeight: 240
                                },
                                zIndex: 1
                            });
                            let c = {};
                            e === i(166654).R.InAppTemplatePreview && (c = {
                                margin: "0 auto"
                            });
                            let u = {};
                            if (L && !D && R && !O) {
                                let t = (0, i(865594).nu)(e, k),
                                    o = i(515378).s1 + 132 - t;
                                u = {
                                    minHeight: W || H ? `${o}px` : `calc(100vh - ${o}px)`
                                }
                            }
                            return {
                                content: {
                                    flexShrink: 0,
                                    flexGrow: 1,
                                    maxWidth: "100%",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    flexDirection: "column",
                                    fontFamily: i(865594).AP[n],
                                    fontSize: o,
                                    letterSpacing: l ? `${l}em` : void 0,
                                    lineHeight: t,
                                    width: "100%",
                                    ...W || F ? {
                                        minHeight: 80
                                    } : {},
                                    zIndex: 4,
                                    ...r,
                                    ...d,
                                    ...c,
                                    ...u
                                },
                                templatePicker: {
                                    position: "absolute",
                                    top: q,
                                    width: "100%",
                                    pointerEvents: "none",
                                    transition: "top 220ms ease"
                                }
                            }
                        }, [j, B, k, e, T, I, w, V, L, D, R, O, q, Y, Q, W, F, H]),
                        [X, $] = (m = g, f = K, h = (0, o.useRef)(null), S = (0, i(421573).A)(h, m), y = (0, i(729787).wY)(h), b = (0, o.useCallback)(e => {
                            i(205999).A.setWidth(e.width, f)
                        }, [f]), (0, o.useEffect)(() => {
                            y && b(y)
                        }, [b, y]), [S, (0, i(682985).K8)(() => i(205999).A.getWidth(f), [f])]),
                        J = T && F,
                        Z = z ? a : i(301124).A;
                    return (0, n.jsxs)(i(28111).A, {
                        name: "PageEditor",
                        children: [(0, n.jsxs)("div", {
                            className: i(828432).pXT,
                            onClick: l,
                            style: G.content,
                            ref: X,
                            children: [P ? void 0 : (0, n.jsx)(Z, {
                                store: E,
                                emptyDroppableStyle: C.emptyDroppableStyle,
                                disabled: A,
                                placeholder: u,
                                forceIsInsideMarginCollapseContainer: !!p || void 0
                            }), w ? (0, n.jsx)(i(517334).k, {}) : void 0, J ? (0, n.jsx)("div", {
                                style: C.emptyPlaceholderText,
                                children: (0, n.jsx)(i(109939).sA, {
                                    id: "pageEditor.empty.placeholderText",
                                    defaultMessage: "Empty"
                                })
                            }) : void 0, c && "legacy" === I ? (0, n.jsx)(v, {
                                store: r,
                                menuListStore: c
                            }) : void 0]
                        }), "horizontal" !== I || _ ? void 0 : (0, n.jsx)("div", {
                            style: G.templatePicker,
                            children: (0, n.jsx)(i(929925).Nv, {
                                store: r,
                                context: e,
                                menuListStore: c,
                                editorWidth: $
                            })
                        })]
                    })
                }),
                _ = {
                    minHeight: void 0,
                    pointerEvents: "auto"
                },
                I = {
                    minHeight: 170
                },
                P = (0, o.forwardRef)(function(e, t) {
                    let {
                        context: r,
                        disabled: a,
                        handlePlaceholderWrapClick: s,
                        pageBlockStore: d,
                        pathToBlockId: c,
                        templatePickerMenuListStore: u,
                        pageViewBlockAccessor: p,
                        editorWrapper: g,
                        forceIsInsideMarginCollapseContainer: m
                    } = e, f = (0, i(533992).v3)(), h = (0, i(682985).K8)(() => c ? function({
                        environment: e,
                        pageBlockStore: t,
                        pathToBlockId: o
                    }) {
                        let n = new(i(517013)).pm({
                            environment: e,
                            pointer: t.pointer,
                            path: o
                        }).getValue();
                        return new(i(970831)).B(e, {
                            table: "block",
                            spaceId: t.getSpaceId(),
                            id: n
                        })
                    }({
                        environment: f,
                        pageBlockStore: d,
                        pathToBlockId: c
                    }) : d, [f, d, c]), S = (0, i(682985).K8)(() => (0, i(424332).dC)(f, d), [f, d]), y = (0, i(682985).K8)(() => (0, i(335818).In)(d), [d]), v = (0, i(682985).K8)(() => (0, i(336136).Fm)(d), [d]), b = r === i(166654).R.DraftPostInInlineComposer || r === i(166654).R.WorkflowInstructionsInInlineComposer, x = i(986939).A.isMobile || b ? 0 : 5, k = (0, i(682985).K8)(() => i(409730).A.state.isHovered, []), C = g || (e => (0, n.jsx)(i(394112).vV, {
                        style: { ...b ? _ : I,
                            paddingTop: x
                        },
                        children: e
                    })), P = (0, o.useMemo)(() => v ? async () => {
                        let e = await i(310639).assistantDependency.load();
                        await e.assistantEditActions.saveAssistantCreatedPage(f)
                    } : y ? s : void 0, [s, y, v, f]);
                    return (0, n.jsxs)(i(28111).A, {
                        name: "PageEditorModule",
                        children: [C((0, n.jsx)(w, {
                            store: h,
                            disabled: a,
                            context: r,
                            templatePickerMenuListStore: u,
                            onClick: P,
                            ref: t,
                            forceIsInsideMarginCollapseContainer: m
                        })), S && p ? (0, n.jsx)(i(394112).kZ, {
                            children: (0, n.jsx)(l, {
                                pageBlockStore: d,
                                isVisible: !k,
                                context: r,
                                pageViewBlockAccessor: p,
                                isCollapsedAnchor: !0
                            })
                        }) : null]
                    })
                })
        },
        523713: (e, t, i) => {
            i.d(t, {
                k: () => o
            });

            function o(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "select_template",
                        eventProperties: {
                            is_keyboard: t.is_keyboard,
                            from: t.from,
                            template_type: t.template_type,
                            event_id: t.event_id
                        }
                    }
                })
            }
        },
        532559: (e, t, i) => {
            function o(e) {
                let {
                    environment: t,
                    store: o,
                    transaction: n,
                    preventTextSelection: l,
                    onTextSelection: r
                } = e;
                i(218744).default.checkGate({
                    gateName: "mobile_keep_template_gallery_open"
                }) && i(717376).A.state.open && i(717376).A.setState({
                    open: !1
                });
                let a = (() => {
                    let e = o.getContentStores();
                    if (1 === e.length && e[0].isEmptyTextBlock()) return e[0];
                    let l = i(124937).Wv({
                            environment: t,
                            type: "text",
                            inMemoryRecordCache: o.inMemoryRecordCache,
                            transaction: n,
                            spaceId: o.pointer.spaceId
                        }),
                        r = (0, i(135674).B)({
                            parentStore: o.getContentStore(),
                            appendStore: l,
                            transaction: n
                        }).childStore;
                    return i(549960).vH(t, {
                        from: "template_picker",
                        type: "text",
                        creating_block_id: l.id,
                        parent_collection_id: l.getParentCollectionIdUpToTwoLevels()
                    }), r
                })();
                return l || i(374176).default.afterNextFlush(() => {
                    (0, i(182553).h)({
                        environment: t,
                        store: a
                    }), (0, i(940763).e)({
                        store: a.getBlockTitleStore()
                    }), null == r || r()
                }), a
            }

            function n(e) {
                let {
                    environment: t,
                    store: n,
                    transaction: l
                } = e;
                (0, i(291876).v)({
                    store: n,
                    transaction: l
                }), o({
                    environment: t,
                    store: n,
                    transaction: l
                })
            }
            i.d(t, {
                T: () => n,
                n: () => o
            })
        },
        553635: (e, t, i) => {
            i.d(t, {
                t3: () => r,
                sD: () => a,
                VD: () => s
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698);
            var o = i(296540);
            let n = "ai_meetings_notes_custom_instructions",
                l = new Set;

            function r(e = {}) {
                return "on" === function(e = {}) {
                    return i(218744).default.getEligibleGroup({
                        experimentId: n,
                        defaultGroup: "control",
                        disableExposureLogging: e.disableExposureLogging ? ? !0
                    })
                }(e)
            }

            function a(e = {}) {
                return "on" === function(e = {}) {
                    return (0, i(604306).r)(n, {
                        disableExposureLogging: e.disableExposureLogging ? ? !0
                    })
                }(e)
            }

            function s(e) {
                let {
                    blockId: t,
                    shouldLog: r
                } = e;
                (0, o.useEffect)(() => {
                    !r || l.has(t) || (l.add(t), i(218744).default.manuallyLogExperimentExposure(n))
                }, [t, r])
            }
        },
        554089: (e, t, i) => {
            i.d(t, {
                d: () => l
            });
            var o = () => i(546605);
            class n extends o().Store {
                getInitialState() {
                    return {
                        blockStoreMode: {},
                        siteTemplateStatus: {}
                    }
                }
                getStateForBlock(e) {
                    if (e in this.state.blockStoreMode) return this.state.blockStoreMode[e]
                }
                setStateForBlock(e, t) {
                    this.update(i => ({ ...i,
                        blockStoreMode: { ...i.blockStoreMode,
                            [e]: t
                        }
                    }))
                }
                setSiteTemplateStatus(e, t) {
                    this.update(i => ({ ...i,
                        siteTemplateStatus: {
                            [e]: t
                        }
                    }))
                }
                isTemplateListing(e) {
                    var t;
                    return (null == (t = this.state.siteTemplateStatus[e]) ? void 0 : t.templateListingExists) ? ? !1
                }
                clearStateForBlock(e) {
                    e in this.state.blockStoreMode && (delete this.state.blockStoreMode[e], this.emit())
                }
            }
            let l = new n;
            (0, i(202146).exposeDebugValue)("MarketplaceTemplateStore", l)
        },
        559244: (e, t, i) => {
            i.d(t, {
                H: () => o
            });

            function o(e) {
                let t = e.type;
                return "properties" === t ? `module__properties_${"pinned"===e.variant?"minimal":"expanded"}` : "normalizedTitleWithIcon" === t || "titleWithIcon" === t ? "module__title_with_icon" : "cover" === t ? "cover__module" : "views" === t ? "module__views" : "editor" === t ? "module__editor" : "formTitle" === t ? "module__formTitle" : "viewsMain" === t ? "module__views_main" : "transcript" === t ? "module__transcript" : "formSubmit" === t ? "module__form_submit" : "discussions" === t ? "module__discussion" : "placeholder" === t ? "module__placeholder" : "formQuestion" === t ? "module__formQuestion" : "bottomControls" === t ? "module__bottomControls" : "relationsGroup" === t ? "module__relationsGroup" : "deleted_property" === t ? "module__deleted_property" : "expandedBacklinks" === t ? "module__expandedBacklinks" : "inlinePageSections" === t ? "module__inlinePageSections" : "property" === t ? `module__property_${e.id}` : "collectionView" === t ? "module__collectionView" : "collectionViewV2" === t ? "module__collectionViewV2" : (0, i(11287).CA)(t) ? `module__property_${e.id}` : void(0, i(722371).HB)(t)
            }
        },
        622465: (e, t, i) => {
            function o({
                environment: e,
                blockStore: t,
                from: n,
                blockContext: l,
                allowTabletsToUseLayoutBuilder: r
            }) {
                let {
                    currentUser: a
                } = e;
                if (r && e.device.isPhone || !r && i(986939).A.isMobile || !a.isLoggedIn() || (0, i(142484).q)(e, t, t.getSpaceStore()) && !i(827482).A.state.editing || l === i(166654).R.InPageSnapShot || "suggest" === i(708929).Uv.getMode(t) || t.pathIsDead()) return !1;
                if (t.isCollectionView() && "topControls" !== n) {
                    let e = (0, i(444610).U)(t);
                    return !!e && !!(e.permissionScopesStore.state.canConfigureCollection && (function(e) {
                        switch (e) {
                            case "topControls":
                            case "pageActionsMenu":
                                return !1;
                            case "viewsModule":
                            case "pagePropertiesRowNameMenu":
                            case "collectionSettingsMenu":
                                return !0;
                            default:
                                (0, i(722371).HB)(e)
                        }
                    }(n) || t.getCollectionStoreIfSingleSource()) && !t.isCollectionViewPageWithContent() && !t.isLocked() && !t.isTeamPost() && !t.isTeamPostCollectionBlock() && !e.permissionScopesStore.state.isExternallyImportedAndSyncedCollection)
                }
                if (t.isPageBlock() || t.isExternalObjectInstancePageBlockStore()) {
                    let e = t.getAssociatedCollectionStore(),
                        o = null == e ? void 0 : e.getParentStore();
                    return !!(!t.isLocked() && e && e.canEditCollection() && !e.isPageTreeCollection() && (null == o ? void 0 : o.table) === i(832375).evP && !o.isLocked() && !e.isExternallyImportedAndSyncedCollection())
                }
                return !1
            }

            function n({
                environment: e,
                blockStore: t,
                from: l,
                blockContext: r
            }) {
                let a = (0, i(83208).X)("layouts_tablet_builder");
                return (0, i(682985).K8)(() => !!t && o({
                    environment: e,
                    blockStore: t,
                    from: l,
                    blockContext: r,
                    allowTabletsToUseLayoutBuilder: a
                }), [r, t, e, l, a])
            }
            i.d(t, {
                X: () => n,
                Y: () => o
            })
        },
        645700: (e, t, i) => {
            function o(e) {
                let {
                    collectionFormat: t
                } = e;
                if (!t) return {
                    shouldShowBanner: !1
                };
                let o = t.external_collection_type;
                return o && o === i(565546).uO.Jira ? {
                    shouldShowBanner: !0,
                    bannerId: "AuthMissingForJiraSyncedCollectionPageBanner",
                    contentKey: "auth_missing_for_jira_user",
                    styleKey: i(909595).q.LightBlue
                } : {
                    shouldShowBanner: !1
                }
            }

            function n(e) {
                let {
                    collectionFormat: t,
                    userSettingsBannerInfo: n,
                    collectionStore: l,
                    hasCollectionContext: r
                } = e;
                if (!l || !t || !(0, i(607689).fo)({
                        collectionStore: l
                    })) return {
                    shouldShowBanner: !1
                };
                let a = t.external_collection_type;
                if (!a) return {
                    shouldShowBanner: !1
                };
                switch (a) {
                    case i(565546).uO.Jira:
                        return function(e) {
                            var t, n, l;
                            let r, {
                                collectionFormat: a,
                                userSettingsBannerInfo: s,
                                collectionStore: d,
                                hasCollectionContext: c
                            } = e;
                            if (!s || !d) return {
                                shouldShowBanner: !1
                            };
                            if (c && !(null == s ? void 0 : s.seen_auth_missing_for_jira_synced_collection_view_banner) && (0, i(607689).z9)({
                                    collectionStore: d
                                })) return o({
                                collectionFormat: a
                            });
                            let u = (null == (t = a.sync_state) ? void 0 : t.enable_two_way_sync) === !0 && (!(r = d.getSpaceStore()) || (0, i(262166).OX)(r.getSubscriptionTier())),
                                p = (null == (n = a.sync_state) ? void 0 : n.syncing) === !0,
                                g = (null == (l = a.sync_state) ? void 0 : l.syncing) === !1 && a.error,
                                m = null == s ? void 0 : s.seen_jira_two_way_sync_info_banner;
                            return u || m || p || g ? {
                                shouldShowBanner: !1
                            } : {
                                shouldShowBanner: !0,
                                bannerId: "JiraTwoWaySyncInfoBanner",
                                contentKey: "jira_two_way_sync_info",
                                styleKey: i(909595).q.Blue
                            }
                        }({
                            collectionFormat: t,
                            userSettingsBannerInfo: n,
                            collectionStore: l,
                            hasCollectionContext: r
                        });
                    case i(565546).uO.Salesforce:
                    default:
                        return {
                            shouldShowBanner: !1
                        }
                }
            }
            i.d(t, {
                W: () => n,
                j: () => o
            })
        },
        668734: (e, t, i) => {
            i.d(t, {
                M: () => o
            });

            function o(e) {
                return (0, i(682985).K8)(() => {
                    let t = null == e ? void 0 : e.collectionViewStore();
                    return t && "page" !== t.getType()
                }, [e])
            }
        },
        670296: (e, t, i) => {
            i.d(t, {
                u: () => l
            });
            var o = () => i(546605);
            class n extends o().Store {
                getInitialState() {
                    return {
                        discussionsHeight: 0
                    }
                }
                setDiscussionsHeight(e) {
                    this.setState({ ...this.state,
                        discussionsHeight: e
                    })
                }
                resetHeights() {
                    this.setState({
                        discussionsHeight: 0
                    })
                }
                getTotalHeight() {
                    return this.state.discussionsHeight
                }
            }
            let l = new n
        },
        671215: (e, t, i) => {
            i.d(t, {
                p: () => r,
                A: () => a
            });
            var o = i(296540);
            let n = 24 * i(695216).pT;

            function l(e) {
                if (!(null != e && e.enabled)) return {
                    status: "disabled"
                };
                let t = e.start_ts ? 1e3 * e.start_ts - Date.now() : 0;
                return t <= 0 ? {
                    status: "active"
                } : t <= n ? {
                    status: "warning",
                    nextUpdateInMs: t
                } : {
                    status: "scheduled",
                    nextUpdateInMs: t - n
                }
            }

            function r(e) {
                let [t, i] = (0, o.useState)(() => l(e).status);
                return (0, o.useEffect)(() => {
                    let t;
                    if (null != e && e.enabled) return function o() {
                        t = void 0;
                        let {
                            status: n,
                            nextUpdateInMs: r
                        } = l(e);
                        i(n), r && (t = setTimeout(o, r))
                    }(), () => {
                        t && (clearTimeout(t), t = void 0)
                    }
                }, [e]), t
            }

            function a(e) {
                let [t, n] = (0, o.useState)(() => Date.now()), r = (null == e ? void 0 : e.enabled) && e.start_ts;
                return (0, o.useEffect)(() => {
                    let e;
                    if ("number" == typeof r) return ! function t() {
                        let o = Date.now();
                        n(o);
                        let l = r * i(695216).TD - o;
                        if (l > 0) {
                            let o = l % i(695216).Xb;
                            e = setTimeout(t, 0 === o ? i(695216).Xb : o)
                        } else e = void 0
                    }(), () => {
                        e && (clearTimeout(e), e = void 0)
                    }
                }, [r]), {
                    freezeStatus: l(e).status,
                    minUntilFreeze: r ? Math.floor((r * i(695216).TD - t) / i(695216).Xb) : void 0
                }
            }
        },
        699258: (e, t, i) => {
            i.d(t, {
                LG: () => r
            });
            var o = i(296540),
                n = i(474848);

            function l(e) {
                let {
                    state: t,
                    store: o,
                    disabled: l,
                    blockPropertyValueOverlayStore: r
                } = e, a = (0, i(682985).K8)(() => (0, i(444285).S)(o), [o]);
                return (0, n.jsx)(i(258437).A, {
                    propertyIds: t.sectionPropertyIds,
                    store: o,
                    collectionStore: t.collectionStore,
                    format: t.format,
                    disabled: l,
                    locked: a,
                    blockPropertyValueOverlayStore: r
                })
            }

            function r(e) {
                let {
                    store: t,
                    context: r,
                    disabled: a,
                    inlinePropertyIDs: s,
                    wrapper: d
                } = e, c = (0, i(682985).K8)(() => t.getAssociatedCollectionStore(), [t]), u = (0, o.useMemo)(() => new(i(120025)).YB, []), p = function(e) {
                    let {
                        collectionStore: t,
                        format: i,
                        sectionPropertyIds: o
                    } = e;
                    return t && i && o && o.length ? {
                        type: "visible",
                        collectionStore: t,
                        format: i,
                        sectionPropertyIds: o
                    } : {
                        type: "hidden"
                    }
                }({
                    collectionStore: c,
                    format: (0, i(682985).K8)(() => (0, i(335818).gV)(t), [t]),
                    sectionPropertyIds: s
                });
                if ("hidden" === p.type) return null;
                let g = r === i(166654).R.PeekView;
                return d((0, n.jsx)(i(385827).s, {
                    allowSelectionWithin: !0,
                    children: (0, n.jsx)(l, {
                        topBorder: !0,
                        state: p,
                        store: t,
                        disabled: a,
                        blockPropertyValueOverlayStore: g ? i(129894).A : i(363746).A,
                        isInPeekRenderer: g,
                        pagePropertiesStore: u
                    })
                }))
            }
        },
        718080: (e, t, i) => {
            i.r(t), i.d(t, {
                emojiFaceFillIcon: () => n,
                iconDefinition: () => o
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0m5.67 1.706a.625.625 0 0 0-1.036.698A3.6 3.6 0 0 0 10.005 14c1.245 0 2.35-.637 2.996-1.596a.625.625 0 0 0-1.036-.698 2.37 2.37 0 0 1-1.96 1.044 2.36 2.36 0 0 1-1.96-1.044m-.68-2.041c.49 0 .88-.46.88-1.02s-.39-1.02-.88-1.02-.88.46-.88 1.02.39 1.02.88 1.02m6.15-1.02c0-.56-.39-1.02-.88-1.02s-.88.46-.88 1.02.39 1.02.88 1.02.88-.46.88-1.02"
                    })
                },
                n = (0, i(104509).wt)("emojiFaceFill", o, "fill")
        },
        728583: (e, t, i) => {
            i.d(t, {
                J: () => n
            });
            var o = i(296540);

            function n(e) {
                let {
                    environment: t,
                    store: n,
                    shouldQueryForSiteTemplateStatus: l
                } = e, [{
                    value: r,
                    status: a
                }] = (0, i(97668).Yb)(async () => {
                    if (!l) return {
                        templateListingExists: !1
                    };
                    n.getSpaceId() || i(773352).log({
                        level: "error",
                        from: "useGetSiteTemplateStatus",
                        type: "spaceIdNotFound",
                        data: {
                            blockId: n.id
                        }
                    });
                    try {
                        let l = await t.api.callApi({
                            eventName: "inAppGetBannerByBlockId",
                            environment: t,
                            data: {
                                blockId: n.id
                            }
                        });
                        if ("success" === l.type && l.data.success) {
                            var e, o, r;
                            return i(554089).d.setSiteTemplateStatus((null == (e = l.data.template) ? void 0 : e.root_block_id) ? ? "", {
                                templateListingExists: !!(null == (o = l.data.template) ? void 0 : o.listing_id),
                                template: l.data.template,
                                status: "resolved"
                            }), {
                                templateListingExists: !!(null == (r = l.data.template) ? void 0 : r.listing_id),
                                template: l.data.template
                            }
                        }
                    } catch (e) {
                        i(773352).log({
                            level: "error",
                            from: "AllPublishedSiteSettings",
                            type: "getTemplateByBlockId",
                            data: {
                                blockId: n.id
                            }
                        })
                    }
                    return i(554089).d.setSiteTemplateStatus(n.id, {
                        templateListingExists: !1,
                        template: void 0,
                        status: "rejected"
                    }), {
                        templateListingExists: !1
                    }
                }, [t, l, n]);
                return (0, o.useMemo)(() => ({
                    templateListingExists: (null == r ? void 0 : r.templateListingExists) ? ? !1,
                    status: a,
                    template: null == r ? void 0 : r.template
                }), [r, a])
            }
        },
        729148: (e, t, i) => {
            i.d(t, {
                K: () => n
            }), i(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.66 3.65 8.68 8.68",
                    directional: !0,
                    svg: (0, i(474848).jsx)("path", {
                        d: "M12.154 3.846a.614.614 0 0 0-.867-.017l-6.374 6.374v-4.6a.625.625 0 1 0-1.25 0v6.11c0 .345.28.624.625.624h6.109a.625.625 0 1 0 0-1.25h-4.6l6.374-6.374a.614.614 0 0 0-.017-.867"
                    })
                },
                n = (0, i(104509).wt)("arrowDiagonalDownLeftSmall", o, "small")
        },
        763137: (e, t, i) => {
            i.d(t, {
                p: () => r,
                t: () => a
            }), i(581454);
            var o = i(296540),
                n = i(474848);
            let l = {
                width: "100%",
                maxWidth: "100%",
                marginTop: 0,
                marginInlineEnd: "auto",
                marginBottom: 6,
                marginInlineStart: "auto"
            };

            function r({
                store: e
            }) {
                return (0, n.jsx)("div", {
                    style: l,
                    onMouseDown: i(170609).N,
                    onClick: i(50678).s,
                    children: (0, n.jsx)(i(971840).A, {
                        type: "page",
                        store: e,
                        headerText: (0, n.jsx)(i(109939).sA, {
                            defaultMessage: "Linked to this page",
                            id: "page.expandedBacklinks.label"
                        }),
                        disableCurrentPageToken: !0,
                        disableInaccessiblePages: !0
                    })
                })
            }

            function a({
                store: e
            }) {
                let t = (0, i(533992).v3)(),
                    l = (0, i(682985).K8)(() => (0, i(184273).cg)(e, t), [e, t]),
                    r = (0, o.useMemo)(() => l.backlinks.map(e => e.backlinkStore), [l]).map((e, o) => ({
                        key: e.id,
                        render: t => (0, n.jsx)(i(103558).A, { ...t,
                            store: e,
                            hidePath: !1
                        }),
                        action: ({
                            event: o
                        }) => {
                            i(349417).F.setState({
                                isOpen: !1
                            });
                            let n = (0, i(7029).V)(o);
                            (0, i(545586).navigateToBlock)({
                                environment: t,
                                store: e,
                                openInNew: n,
                                visitType: i(981324).ig.Link,
                                pageVisitSource: i(254656).y8.Backlinks
                            })
                        }
                    }));
                return (0, n.jsx)(i(558045).A, {
                    type: i(558045).O.Vertical,
                    initialFocus: void 0,
                    sections: [{
                        key: "all",
                        items: r
                    }]
                })
            }
        },
        781744: (e, t, i) => {
            i.d(t, {
                JO: () => l,
                K$: () => s,
                KM: () => a
            });
            var o = () => i(345519),
                n = () => i(421439);

            function l(e) {
                let {
                    store: t,
                    pageId: i,
                    descriptionStore: o,
                    environment: n,
                    userSettingsStore: l
                } = e;
                r({
                    environment: n,
                    isExpanded: !t.state.isPageDescriptionExpanded,
                    pageId: i,
                    store: t,
                    userSettingsStore: l,
                    descriptionStore: o
                })
            }

            function r(e) {
                let {
                    environment: t,
                    pageId: l,
                    isExpanded: r,
                    store: a,
                    userSettingsStore: s
                } = e;
                r !== a.state.isPageDescriptionExpanded && (a.setState({ ...a.state,
                    isPageDescriptionExpanded: r
                }), s && (0, i(377796).createAndCommit)({
                    userAction: "pageDescriptionActions.setExpanded",
                    environment: t,
                    cellTarget: "main",
                    canUndo: !0,
                    perform: e => {
                        if (r) {
                            let t = {
                                pointer: {
                                    table: "user_settings",
                                    id: s.id
                                },
                                path: ["settings", "hidden_collection_descriptions"],
                                command: "listRemove",
                                args: {
                                    id: l
                                }
                            };
                            (0, n().y4)({
                                store: s,
                                transaction: e,
                                operation: t
                            })
                        } else {
                            let t = {
                                pointer: {
                                    table: "user_settings",
                                    id: s.id
                                },
                                path: ["settings", "hidden_collection_descriptions"],
                                command: "listAfter",
                                args: {
                                    id: l
                                }
                            };
                            (0, n().y4)({
                                store: s,
                                transaction: e,
                                operation: t
                            });
                            let i = (0, o().Up)(s);
                            for (; i.length > o().DV;) {
                                let t = i[0],
                                    l = {
                                        pointer: {
                                            table: "user_settings",
                                            id: s.id
                                        },
                                        path: ["settings", "hidden_collection_descriptions"],
                                        command: "listRemove",
                                        args: {
                                            id: t
                                        }
                                    };
                                (0, n().y4)({
                                    store: s,
                                    transaction: e,
                                    operation: l
                                }), i = (0, o().Up)(s)
                            }
                        }
                    }
                }))
            }

            function a(e) {
                let {
                    environment: t,
                    pageId: o,
                    store: n,
                    userSettingsStore: l,
                    descriptionStore: a
                } = e;
                r({
                    environment: t,
                    isExpanded: !0,
                    pageId: o,
                    store: n,
                    userSettingsStore: l,
                    descriptionStore: a
                }), i(374176).default.afterNextFlush(() => {
                    a && !t.device.isMobileBrowser && (0, i(739204).z)({
                        store: a
                    })
                })
            }

            function s(e) {
                let {
                    pageId: t,
                    store: i,
                    userSettingsStore: n,
                    descriptionHasText: l
                } = e;
                if (!l) return void i.setState({ ...i.state,
                    isPageDescriptionExpanded: !1
                });
                let r = !(0, o().Up)(n).includes(t);
                i.setState({ ...i.state,
                    isPageDescriptionExpanded: r
                })
            }
        },
        794532: (e, t, i) => {
            i.d(t, {
                b: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    spaceId: o
                } = e;
                return (0, i(682985).K8)(() => {
                    if (o) return (0, i(471078).O)({
                        environment: t,
                        spaceId: o
                    })
                }, [t, o])
            }
        },
        796164: (e, t, i) => {
            i.d(t, {
                y: () => n
            }), i(296540);
            var o = i(474848);

            function n(e) {
                let {
                    pageStore: t,
                    backlinksButtonPopupStore: n,
                    numBacklinks: l,
                    isButtonVisible: r,
                    customization: a = {}
                } = e, {
                    buttonStyles: s,
                    ...d
                } = a, c = (0, i(533992).v3)(), {
                    isPhone: u
                } = (0, i(533992).Y0)(), p = (0, i(682985).K8)(() => void 0 !== l ? l : u || r ? (0, i(184273).Ju)(t, c).backlinksCount : i(411005).A.getBacklinkState({
                    blockId: t.id,
                    currentUserId: c.currentUser.id
                }).backlinks.length, [c, t, l, r, u], {
                    debugName: "BacklinksControlButton.useComputedStore"
                }), g = (0, i(682985).K8)(() => i(272755).g.getState().isOpen, []), m = (0, i(960253).I)(() => {
                    let e = 0 === p && g,
                        t = i(632079).Tj.text.disabled;
                    return {
                        button: e ? {
                            color: t
                        } : {}
                    }
                }, [g, p]), f = ({
                    buttonPopupEvents: e = {}
                }) => (0, o.jsx)(i(988022).p, {
                    colorVariant: "tertiary",
                    iconLeading: {
                        icon: i(729148).K,
                        size: "sm",
                        colorVariant: 0 === p && g ? "disabled" : void 0
                    },
                    style: { ...s,
                        ...m.button
                    },
                    ...d,
                    ...e,
                    children: (0, o.jsx)(i(109939).sA, {
                        id: "pageViewBlock.show.backlinks",
                        defaultMessage: "{numberOfBacklinks, plural, =0 {No backlinks} one {{numberOfBacklinks} backlink} other {{numberOfBacklinks} backlinks}}",
                        values: {
                            numberOfBacklinks: p
                        }
                    })
                });
                return u ? f({
                    buttonPopupEvents: {
                        onClick: e => {
                            i(349417).F.setState({
                                isOpen: !0
                            })
                        }
                    }
                }) : (0, o.jsx)(i(656252).A, {
                    buttonPopupStore: n,
                    popupType: i(656252).z.Popup,
                    content: () => {
                        let e = {
                            menuType: i(649476).gu.Popup,
                            width: 500
                        };
                        return (0, o.jsx)(i(747369).A, { ...e,
                            children: p > 0 ? (0, o.jsx)(i(763137).p, {
                                store: t
                            }) : null
                        })
                    },
                    children: e => f({
                        buttonPopupEvents: e
                    })
                }, "backlinkspopup")
            }
        },
        801113: (e, t, i) => {
            i.d(t, {
                $C: () => n,
                Hi: () => o,
                Qy: () => l,
                Uu: () => r,
                ek: () => a,
                jq: () => s,
                pz: () => d
            });
            let o = 52,
                n = 45,
                l = 44,
                r = 44;

            function a(e) {
                return e ? r : l
            }

            function s(e) {
                return 2 * a(e)
            }

            function d(e, t, o) {
                return (e && !t ? (0, i(196441).n$)(o) : 12) + 30
            }
        },
        811853: (e, t, i) => {
            i.r(t), i.d(t, {
                hasOnboardingAgentMutatedFirstBlock: () => o
            });

            function o(e) {
                let {
                    postOnboardingAgentConfig: t
                } = e;
                return !!(0, i(596244).B)(t) && !!t.has_mutated_block
            }
        },
        823756: (e, t, i) => {
            i.d(t, {
                A: () => l
            });
            var o = () => i(546605);
            class n extends o().Store {
                getInitialState() {
                    return {
                        forceDiscussionOpen: !1,
                        isPageDescriptionExpanded: !0
                    }
                }
            }
            let l = n
        },
        834656: (e, t, i) => {
            i.d(t, {
                F: () => o
            });

            function o(e, t) {
                let o = (0, i(83208).X)("collections_capabilities_refactor");
                return (0, i(682985).K8)(() => {
                    var i;
                    return o ? (null == e ? void 0 : e.state.canFollowPageLinks) ? ? !0 : !(null != t && null != (i = t.state) && i.disablePageLinks)
                }, [e, t, o])
            }
        },
        854258: (e, t, i) => {
            i.d(t, {
                O: () => o
            });

            function o(e, t) {
                let o = (0, i(533992).v3)(),
                    n = (0, i(67499).S)(),
                    {
                        isTablet: l
                    } = (0, i(533992).Y0)(),
                    r = (0, i(83208).X)("tablet_refresh_template_pills_gate");
                return (0, i(682985).K8)(() => {
                    var a, s;
                    if (t === i(166654).R.SitePreview || t === i(166654).R.WorkflowInstructionsInInlineComposer || i(986939).A.isMobile && !(l && r) || !o.currentUser.isLoggedIn()) return !1;
                    let d = n && n.publicEditModeStore.state;
                    if (null != d && d.hasPublicPermission && (null == d ? void 0 : d.permission) !== "edit" || e.getContentLength() > 1 || !e.canEdit() || (0, i(444285).S)(e)) return !1;
                    let c = e.getContentStores()[0];
                    if (c && !c.isEmptyTextBlock() || e.getAssociatedCollectionStore()) return !1;
                    let u = i(585823).gZ.state,
                        p = i(585823).Di.state;
                    if (u && e.id === p || ((0, i(335818).L5)(t) ? i(984583).VY.state : i(984583).u3.state)) return !1;
                    let g = null == (a = i(728372).AppStoreSidebarSpaceViewStore.state) || null == (a = a.getSettings()) || null == (a = a.getting_started_page_ids) ? void 0 : a[0],
                        m = null == (s = i(728372).AppStoreCurrentUserSettingsStore.state) || null == (s = s.getSettings()) ? void 0 : s.post_onboarding_agent_config;
                    return !(0, i(10638).shouldShowOnboardingPlaceholder)({
                        pageStore: e,
                        firstGettingStartedPageId: g,
                        postOnboardingAgentConfig: m ? ? {}
                    })
                }, [o, n, e, t, l, r])
            }
        },
        865594: (e, t, i) => {
            i.d(t, {
                zs: () => Y,
                mv: () => eo,
                AT: () => ei,
                uD: () => et,
                dp: () => ee,
                AP: () => Q,
                DX: () => X,
                JK: () => G,
                T1: () => J,
                Y4: () => $,
                g1: () => eu,
                NS: () => ed,
                nu: () => ec,
                rK: () => eg,
                Wj: () => en
            }), i(944114), i(898992), i(672577);
            var o = i(296540),
                n = () => i(474329);
            let l = new(i(815048)).O2("CollaborationSessionTracker", () => Promise.all([i.e(75134), i.e(46313)]).then(i.bind(i, 668942))),
                r = (0, i(815048)._h)(l, e => e.CollaborationSessionTracker);
            var a = i(474848);
            let s = {
                    textContainer: {
                        display: "flex",
                        cursor: "text"
                    },
                    lockedIconContainer: {
                        paddingTop: 4,
                        paddingInlineEnd: 6
                    },
                    pageTitleWithIconContainer: {
                        whiteSpace: "nowrap",
                        fontWeight: i(699422).Wy.bold
                    },
                    pageIcon: {
                        marginInlineEnd: 4,
                        display: "inline-block"
                    },
                    pageTitle: {
                        display: "inline"
                    }
                },
                d = o.memo(function(e) {
                    let {
                        descriptionStore: t,
                        disabled: n,
                        toggleStore: l,
                        pageId: r,
                        userSettingsStore: d,
                        collectionStore: u,
                        locked: p,
                        canEdit: g,
                        bottomMargin: m
                    } = e, f = (0, i(960253).I)(() => ({
                        container: {
                            maxWidth: "100%",
                            borderRadius: 4,
                            overflow: "hidden",
                            marginBottom: m ? ? 12
                        }
                    }), [m]), h = (0, i(682985).K8)(() => u && u.getIcon(), [u]), S = (0, o.useCallback)(e => (0, a.jsx)("div", {
                        children: (0, a.jsx)("div", {
                            style: s.textContainer,
                            ...e,
                            children: (0, a.jsx)(c, {
                                descriptionStore: t,
                                toggleStore: l,
                                userSettingsStore: d,
                                pageId: r,
                                disabled: n,
                                hasIcon: !!h
                            })
                        })
                    }), [t, n, h, r, l, d]), y = (0, o.useCallback)(() => (0, a.jsxs)(i(4458).fI, {
                        alignItems: "start",
                        children: [(0, a.jsx)("div", {
                            style: s.lockedIconContainer,
                            children: (0, a.jsx)(i(16275).I, {
                                icon: i(697198).lockSmallIcon,
                                size: "xs"
                            })
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsx)("div", {
                                children: (0, a.jsx)(i(109939).sA, {
                                    defaultMessage: "Please unlock {pageTitleWithIcon} to edit the description.",
                                    id: "pageDescription.lockedTooltip.message",
                                    values: {
                                        pageTitleWithIcon: (0, a.jsxs)("span", {
                                            style: s.pageTitleWithIconContainer,
                                            children: [h ? (0, a.jsx)(i(569553).B6, {
                                                disabled: !0,
                                                icon: h,
                                                isEmptyPage: !1,
                                                size: 12,
                                                style: s.pageIcon
                                            }) : null, u ? (0, a.jsx)(i(627918).A, {
                                                store: u,
                                                style: s.pageTitle
                                            }) : null]
                                        })
                                    }
                                })
                            })
                        })]
                    }), [u, h]);
                    return (0, a.jsx)("div", {
                        style: f.container,
                        children: i(986939).A.isMobile ? (0, a.jsx)(c, {
                            descriptionStore: t,
                            toggleStore: l,
                            userSettingsStore: d,
                            pageId: r,
                            disabled: n,
                            hasIcon: !!h
                        }) : (0, a.jsx)(i(51831).m, {
                            content: y,
                            disableTooltip: !p || !g,
                            children: S
                        })
                    })
                }),
                c = o.memo(function(e) {
                    let {
                        descriptionStore: t,
                        disabled: n,
                        toggleStore: l,
                        pageId: r,
                        userSettingsStore: s,
                        hasIcon: d
                    } = e, c = (0, i(643160).yf)(), u = (0, i(533992).v3)(), p = (0, i(533992).Y0)(), g = (0, i(109939).tz)(), m = (0, i(67499).S)(), f = (0, o.useRef)(null), h = (0, i(682985).K8)(() => l.state.isPageDescriptionExpanded, [l]), S = (0, o.useCallback)(e => {
                        h || (h || e.preventDefault(), i(781744).JO({
                            store: l,
                            pageId: r,
                            descriptionStore: t,
                            environment: u,
                            userSettingsStore: s
                        }))
                    }, [t, u, h, r, l, s]), y = (0, o.useCallback)(e => {
                        var o, l;
                        let r, a;
                        if (r = m && m.publicEditModeStore.state, a = (0, i(148337).o9)((0, i(534012).T)(t)), !(!(n || (0, i(45262).Q)(r)) && "suggest" !== i(708929).Uv.getMode(a) && t.canEdit()) || (null == (o = e.preventDefault) || o.call(e), f.current && f.current.isComposing())) return;
                        let s = i(358377).default.state;
                        if ("editing" !== s.mode) return;
                        let d = (0, i(778758).H)(s.multiSelection);
                        if (!d) return;
                        let c = null != m && m.pageStore ? i(708929).Uv.getMode(m.pageStore) : "default",
                            p = null == m || null == (l = m.spaceStore) ? void 0 : l.id;
                        (0, i(377796).createAndCommit)({
                            userAction: "PageDescription.handleEnter",
                            environment: u,
                            cellTarget: p ? {
                                spaceWithId: p
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                i(41403).$D({
                                    environment: u,
                                    editorMode: c,
                                    store: t,
                                    string: "\n",
                                    selection: d.selection,
                                    disableMentions: !0,
                                    disableSlashCommands: !0,
                                    disableEmojiCommands: !0,
                                    transaction: e
                                })
                            }
                        })
                    }, [t, n, u, m]), v = (0, o.useCallback)(e => !0, []), b = (0, o.useCallback)(e => !0, []), x = (0, o.useMemo)(() => ({
                        bot: !1,
                        date: !1,
                        page: !1,
                        team: !1,
                        user: !1,
                        group: !1,
                        formulaContextVariable: !0,
                        heading: !0,
                        reminder: !0,
                        createPage: !0,
                        inviteUserToPage: !0,
                        templateVariable: !0,
                        slackSpecialMention: !0,
                        inviteUserToWorkspace: !0,
                        property: !0
                    }), []), k = (0, i(960253).I)(() => {
                        let e = c ? i(57461).dE.paddingInlineStart : i(57461).Md;
                        return {
                            container: {
                                fontSize: 14,
                                paddingInlineStart: d ? e + 4 : e,
                                paddingBottom: 4,
                                paddingTop: 3,
                                width: 780
                            }
                        }
                    }, [d, c]);
                    return t ? (0, a.jsx)(i(53373).A, {
                        ref: f,
                        store: t,
                        style: k.container,
                        disabled: n,
                        placeholder: g.formatMessage({
                            defaultMessage: "Add a description…",
                            id: "pageDescription.emptyPlaceholder"
                        }),
                        disableSlashCommands: !0,
                        disableEmbedMenu: !0,
                        disabledMentionTypes: x,
                        onTab: v,
                        onUntab: b,
                        onEnter: y,
                        onClick: S,
                        disableStyleAnnotations: p.isMobileBrowser,
                        disableInsertedDeletedAnnotations: p.isMobileBrowser,
                        disableHorizontalEdgeScroll: !0,
                        pasteBehavior: "inline",
                        inPageFind: i(831719).Os.none
                    }) : null
                }),
                u = o.memo(function(e) {
                    let {
                        canEdit: t,
                        collectionContextStore: n,
                        context: l,
                        controlHoverStyle: r,
                        disabled: s,
                        editorContentContainerRef: d,
                        forceLocalQueryCollection: c,
                        handleHeaderMouseEnter: u,
                        handleHeaderMouseLeave: p,
                        hasCover: m,
                        headerFocusStore: f,
                        isEditable: h,
                        isInSidePeek: S,
                        onCollectionViewBlockMount: y,
                        onTitleChange: v,
                        onTitleEditText: b,
                        onTitleEsc: x,
                        onTitleTab: k,
                        onTitleUntab: C,
                        openMenuOnMount: w,
                        openMenuOnMountCallback: _,
                        paddingLeft: I,
                        paddingRight: P,
                        pageCover: M,
                        pageViewBlockStore: A,
                        productUseCase: j,
                        shouldShowTemplatePicker: B,
                        store: T,
                        titlePlaceholder: K,
                        topControls: V
                    } = e, E = (0, i(533992).v3)(), R = (0, i(533992).Y0)(), [L, D] = (0, o.useState)(!!R.isAndroid), F = (0, i(682985).K8)(() => T.getCollectionViewSourceDescriptionStore(), [T]), O = (0, i(682985).K8)(() => (0, i(345519).cf)(F), [F]), {
                        isMobileNative: z
                    } = R, {
                        viewId: W,
                        mobileEmbed: H
                    } = (0, i(682985).K8)(() => {
                        var e;
                        if (T.id !== (null == (e = i(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.id)) return {
                            viewId: void 0,
                            mobileEmbed: !1
                        };
                        let {
                            RouterStore: t
                        } = E, o = t.state.route;
                        return "page" === o.name ? {
                            viewId: o.collectionViewId,
                            mobileEmbed: z && !!o.mobileEmbed
                        } : {
                            viewId: void 0,
                            mobileEmbed: !1
                        }
                    }, [T, E, z], {
                        equalityFn: i(381453).n4
                    });
                    (0, o.useEffect)(() => {
                        (async () => {
                            if ((0, i(59406).w)(E)) {
                                let e = E.RouterStore.getState();
                                if ((0, i(132702).bh)(e.route)) {
                                    let e = (0, i(891711).GN)(T),
                                        t = null == e ? void 0 : e.getSiteStore();
                                    await (null == t ? void 0 : t.load());
                                    let o = null == t ? void 0 : t.getSettings(),
                                        n = null == o ? void 0 : o.embedSettings;
                                    D(!(null != n && n.hideTitle));
                                    return
                                }
                            }
                            D(!0)
                        })()
                    }, [E, T]);
                    let N = L && !H;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [N ? (0, a.jsx)(g, {
                            canEdit: t,
                            collectionContextStore: n,
                            collectionViewDescriptionStore: F,
                            context: l,
                            controlHoverStyle: r,
                            descriptionHasText: O,
                            disabled: s,
                            handleHeaderMouseEnter: u,
                            handleHeaderMouseLeave: p,
                            hasCover: m,
                            headerFocusStore: f,
                            isEditable: h,
                            isInSidePeek: S,
                            onTitleChange: v,
                            onTitleEditText: b,
                            onTitleEsc: x,
                            onTitleTab: k,
                            onTitleUntab: C,
                            openMenuOnMount: w,
                            openMenuOnMountCallback: _,
                            paddingLeft: I,
                            paddingRight: P,
                            pageCover: M,
                            pageViewBlockStore: A,
                            shouldShowTemplatePicker: B,
                            store: T,
                            titlePlaceholder: K,
                            topControls: V
                        }) : null, (0, a.jsx)(i(590285).dN, {
                            editorContentContainerRef: d,
                            overridePaddingLeft: I,
                            overridePaddingRight: P,
                            store: T,
                            isFullScreen: !0,
                            productUseCase: j || "full_page",
                            viewId: W,
                            disabled: s,
                            hideViewTabBar: H,
                            headerActionsBehavior: H || l === i(166654).R.InAppTemplatePreview ? "hidden" : "default",
                            onMount: y,
                            forceLocalQueryCollection: c
                        })]
                    })
                }, i(795676).A),
                p = {
                    marginTop: 4,
                    paddingTop: 4,
                    marginBottom: 12,
                    paddingBottom: 12
                };

            function g(e) {
                let {
                    canEdit: t,
                    collectionContextStore: n,
                    collectionViewDescriptionStore: l,
                    context: r,
                    controlHoverStyle: s,
                    descriptionHasText: c,
                    disabled: u,
                    handleHeaderMouseEnter: g,
                    handleHeaderMouseLeave: f,
                    hasCover: h,
                    headerFocusStore: S,
                    isEditable: y,
                    isInSidePeek: v,
                    onTitleChange: b,
                    onTitleEditText: x,
                    onTitleEsc: k,
                    onTitleTab: C,
                    onTitleUntab: w,
                    openMenuOnMount: _,
                    openMenuOnMountCallback: I,
                    paddingLeft: P,
                    paddingRight: M,
                    pageCover: A,
                    pageViewBlockStore: j,
                    shouldShowTemplatePicker: B,
                    store: T,
                    titlePlaceholder: K,
                    topControls: V
                } = e, E = (0, i(533992).v3)(), R = (0, i(533992).Y0)(), {
                    singleSourceCollectionStore: L,
                    hasExactlyOneSourceAndNoLinkedCollections: D,
                    hasAnySourceCollectionStores: F
                } = (0, i(682985).K8)(() => ({
                    singleSourceCollectionStore: T.getCollectionStoreIfSingleSource(),
                    hasExactlyOneSourceAndNoLinkedCollections: T.hasSingleSourceAndNoLinkedCollections(),
                    hasAnySourceCollectionStores: T.getOwnedCollectionStores().length > 0
                }), [T]), O = (0, i(682985).K8)(() => i(708929).Uv.getMode(T), [T]), z = (0, i(682985).K8)(() => T.getTitleStore(), [T]), W = (0, i(682985).K8)(() => i(247438).q4_(null == z ? void 0 : z.getValue()), [z]), H = (0, i(682985).K8)(() => 0 === T.getCollectionViewStores().length || !!D || !!F || !!z && !!(W || (0, i(338670).j)(z)), [T, D, F, z, W]), {
                    currentUserSettingsStore: N,
                    userSettings: U
                } = (0, i(682985).K8)(() => {
                    let e = i(728372).AppStoreCurrentUserSettingsStore.state;
                    return {
                        currentUserSettingsStore: e,
                        userSettings: null == e ? void 0 : e.getSettings()
                    }
                }, []), [q, Y] = (0, o.useState)(!1);
                (0, o.useEffect)(() => {
                    let e = !E.currentUser.isLoggedIn(),
                        t = !e && N && U;
                    !q && (e || t) && void 0 !== c && (i(781744).K$({
                        pageId: T.id,
                        store: j,
                        userSettingsStore: N,
                        descriptionHasText: c
                    }), Y(!0))
                }, [N, U, c, q, T.id, j, E]);
                let Q = (0, i(682985).K8)(() => {
                        let {
                            isPageDescriptionExpanded: e
                        } = j.state;
                        return E.currentUser.isLoggedIn() ? !!U && !!q && ((0, i(345519).cf)(l) ? e : y && e) : e
                    }, [l, q, y, j, U, E.currentUser]),
                    G = (0, i(682985).K8)(() => Q && l && j.state.isPageDescriptionExpanded ? {
                        type: "visible",
                        descriptionStore: l,
                        currentUserSettingsStore: i(728372).AppStoreCurrentUserSettingsStore.state,
                        collectionStore: L,
                        shouldHideBottomMargin: !T.hasSingleSourceAndNoLinkedCollections()
                    } : {
                        type: "hidden"
                    }, [l, L, j, Q, T]),
                    X = (0, i(682985).K8)(() => (0, i(829435).s)(T.id), [T]),
                    $ = (0, i(853284).U)(),
                    J = (0, i(682985).K8)(() => X && !$ || (0, i(400695).W)(T.id), [X, $, T.id]),
                    Z = (0, i(682985).K8)(() => (0, i(335818).NR)(T, E), [T, E]),
                    ee = (0, i(682985).K8)(() => (0, i(335818).uf)(T, r, R), [T, r, R]),
                    et = (0, i(682985).K8)(() => (0, i(444285).S)(T), [T]),
                    ei = (0, o.useContext)(i(953075).w),
                    eo = (0, i(682985).K8)(() => (0, i(936221).U)(E) + (0, i(921001).z)(E, !1) - ei - P, [E, P, ei]),
                    en = {
                        paddingLeft: (0, i(616844).Y5)("left", P),
                        paddingRight: (0, i(616844).Y5)("right", M)
                    },
                    el = (0, i(643160).yf)(),
                    er = (0, i(960253).I)(() => {
                        let e = "visible" === G.type && G.shouldHideBottomMargin;
                        return {
                            container: {
                                maxWidth: "100%",
                                paddingInlineStart: en.paddingLeft
                            },
                            titleWrapper: {
                                paddingInlineEnd: en.paddingRight,
                                marginBottom: i(986939).A.isMobile ? e ? 8 : 16 : e ? 4 : 8,
                                width: eo
                            },
                            titleWithIcon: {
                                display: "flex",
                                alignItems: el && !i(986939).A.isMobile ? "center" : "flex-start",
                                flexDirection: i(986939).A.isMobile ? "column" : "row"
                            }
                        }
                    }, [eo, en.paddingLeft, en.paddingRight, G, el]);
                return (0, a.jsxs)("div", {
                    style: Z,
                    onMouseEnter: g,
                    onMouseLeave: f,
                    children: [A, (0, a.jsxs)(i(654979).A, {
                        animate: {
                            width: ee
                        },
                        style: er.container,
                        children: [(0, a.jsx)(m, {
                            canEdit: t,
                            context: r,
                            controlHoverStyle: s,
                            store: T,
                            headerFocusStore: S,
                            topControls: V,
                            isEditable: y,
                            isInSidePeek: v,
                            titleStore: z,
                            titleTextValue: W,
                            pageViewBlockStore: j,
                            editorMode: O,
                            shouldShowDescription: Q,
                            collectionViewDescriptionStore: l,
                            descriptionHasText: c
                        }), (0, a.jsxs)("div", {
                            style: er.titleWrapper,
                            children: [J ? null : (0, a.jsxs)("div", {
                                style: er.titleWithIcon,
                                children: [X ? null : (0, a.jsx)(i(216994).v, {
                                    store: T,
                                    isEditable: y,
                                    hasCover: h,
                                    isInSidePeek: v,
                                    openMenuOnMount: _,
                                    openMenuOnMountCallback: I
                                }), H ? (0, a.jsx)(i(119359).s, {
                                    store: T,
                                    context: r,
                                    disabled: u,
                                    isInSidePeek: v,
                                    titlePlaceholder: K,
                                    collectionContextStore: n,
                                    shouldShowTemplatePicker: B,
                                    onTitleChange: b,
                                    onTitleEditText: x,
                                    onTitleEsc: k,
                                    onTitleTab: C,
                                    onTitleUntab: w
                                }) : null]
                            }), "visible" === G.type ? (0, a.jsx)(d, {
                                disabled: !y,
                                canEdit: t,
                                locked: et,
                                pageId: T.id,
                                toggleStore: j,
                                descriptionStore: G.descriptionStore,
                                collectionStore: G.collectionStore,
                                userSettingsStore: G.currentUserSettingsStore,
                                bottomMargin: G.shouldHideBottomMargin ? 0 : void 0
                            }) : null, (0, a.jsx)(i(120805).h, {
                                store: T,
                                context: r,
                                layoutModule: void 0,
                                disabled: u || "suggest" === O,
                                wrapper: e => (0, a.jsx)(i(394112).vV, {
                                    className: "layout-content-with-divider",
                                    style: p,
                                    children: e
                                })
                            }, T.id)]
                        })]
                    })]
                })
            }

            function m(e) {
                let {
                    collectionViewDescriptionStore: t,
                    context: n,
                    controlHoverStyle: l,
                    descriptionHasText: r,
                    editorMode: s,
                    headerFocusStore: d,
                    isEditable: c,
                    isInSidePeek: u,
                    pageViewBlockStore: p,
                    shouldShowDescription: g,
                    store: m,
                    titleStore: S,
                    titleTextValue: y,
                    topControls: v
                } = e, b = (0, i(533992).Y0)(), x = (0, i(355301).D1)(b), k = (0, i(682985).K8)(() => !!m.getCollectionViewSourceDescriptionStore(), [m]), C = (0, o.useCallback)(e => {
                    let t = e.target;
                    void 0 !== t && t instanceof HTMLElement && (0, i(768397).p)(t) && d.setState(!0)
                }, [d]), w = (0, o.useCallback)(() => {
                    d.setState(!1)
                }, [d]);
                return (0, a.jsx)("div", {
                    className: u ? i(828432).S6D : void 0,
                    children: (0, a.jsxs)(i(306472).A, {
                        store: m,
                        context: n,
                        onFocus: C,
                        onBlur: w,
                        children: [v, (0, a.jsx)(f, {
                            controlHoverStyle: l,
                            store: m,
                            isEditable: c,
                            titleStore: S,
                            titleTextValue: y
                        }), !x && k ? (0, a.jsx)(h, {
                            store: m,
                            pageViewBlockStore: p,
                            collectionViewDescriptionStore: t,
                            descriptionHasText: r,
                            controlHoverStyle: l,
                            editorMode: s,
                            shouldShowDescription: g,
                            isEditable: c
                        }) : null]
                    })
                })
            }

            function f(e) {
                let {
                    store: t,
                    isEditable: n,
                    titleTextValue: l,
                    titleStore: r,
                    controlHoverStyle: s
                } = e, d = (0, i(533992).v3)(), {
                    isSmallPhone: c
                } = (0, i(533992).Y0)(), u = (0, i(682985).K8)(() => t.hasSingleSourceAndNoLinkedCollections(), [t]), p = (0, i(682985).K8)(() => (t.getOwnedCollectionStores() ? ? []).length > 0, [t]), g = (0, o.useCallback)(() => {
                    r && ((0, i(471e3).I)({
                        environment: d
                    }), (0, i(739204).z)({
                        store: r
                    }))
                }, [r, d]);
                return p || u || !n || l ? null : (0, a.jsx)(i(988022).p, {
                    style: s,
                    colorVariant: "tertiary",
                    onClick: g,
                    iconLeading: i(517259).a,
                    children: c ? (0, a.jsx)(i(109939).sA, {
                        id: "pageViewBlock.add.pageTitleMobile",
                        defaultMessage: "Title"
                    }) : (0, a.jsx)(i(109939).sA, {
                        id: "pageViewBlock.add.pageTitle",
                        defaultMessage: "Add title"
                    })
                }, "add-title")
            }

            function h(e) {
                let {
                    collectionViewDescriptionStore: t,
                    descriptionHasText: n,
                    controlHoverStyle: l,
                    editorMode: r,
                    isEditable: s,
                    pageViewBlockStore: d,
                    shouldShowDescription: c,
                    store: u
                } = e, p = (0, i(533992).v3)(), {
                    isSmallPhone: g
                } = (0, i(533992).Y0)(), m = (0, o.useCallback)(() => {
                    i(781744).KM({
                        environment: p,
                        pageId: u.id,
                        store: d,
                        userSettingsStore: i(728372).AppStoreCurrentUserSettingsStore.state,
                        descriptionStore: t
                    })
                }, [t, p, d, u.id]), f = (0, o.useCallback)(e => {
                    i(781744).JO({
                        environment: p,
                        pageId: u.id,
                        store: d,
                        userSettingsStore: i(728372).AppStoreCurrentUserSettingsStore.state,
                        descriptionStore: t
                    })
                }, [p, u.id, d, t]), h = (0, o.useCallback)(() => {
                    f(!0)
                }, [f]), S = (0, o.useCallback)(() => {
                    f(!1)
                }, [f]);
                return c ? (0, a.jsx)(i(988022).p, {
                    colorVariant: "tertiary",
                    style: l,
                    onClick: S,
                    iconLeading: {
                        icon: i(923007).infoCircleFillIcon,
                        size: "xs",
                        fitToViewBox: "all"
                    },
                    children: (0, a.jsx)(i(109939).sA, {
                        defaultMessage: "Hide description",
                        id: "pageViewBlock.hideDescription.button"
                    })
                }) : s && "suggest" !== r && !n ? (0, a.jsx)(i(988022).p, {
                    colorVariant: "tertiary",
                    style: l,
                    onClick: m,
                    iconLeading: {
                        icon: i(923007).infoCircleFillIcon,
                        size: "xs",
                        fitToViewBox: "all"
                    },
                    children: g ? (0, a.jsx)(i(109939).sA, {
                        defaultMessage: "Description",
                        id: "pageViewBlock.addDescription.mobileButton"
                    }) : (0, a.jsx)(i(109939).sA, {
                        defaultMessage: "Add description",
                        id: "pageViewBlock.addDescription.button"
                    })
                }) : n ? (0, a.jsx)(i(988022).p, {
                    colorVariant: "tertiary",
                    style: l,
                    onClick: h,
                    iconLeading: {
                        icon: i(923007).infoCircleFillIcon,
                        size: "xs",
                        fitToViewBox: "all"
                    },
                    children: g ? (0, a.jsx)(i(109939).sA, {
                        defaultMessage: "Description",
                        id: "pageViewBlock.showDescription.mobileButton"
                    }) : (0, a.jsx)(i(109939).sA, {
                        defaultMessage: "Show description",
                        id: "pageViewBlock.showDescription.button"
                    })
                }) : null
            }

            function S(e) {
                let {
                    style: t,
                    onClick: o
                } = e;
                return (0, a.jsx)(i(988022).p, {
                    style: t,
                    colorVariant: "tertiary",
                    onClick: o,
                    iconLeading: {
                        icon: i(96692).layoutFillSmallIcon,
                        size: "xs",
                        fitToViewBox: "all"
                    },
                    children: (0, a.jsx)(i(109939).sA, {
                        id: "pageViewBlock.customizeLayout",
                        defaultMessage: "Customize layout"
                    })
                }, "customize-layout")
            }
            i(430670);
            let y = {
                wrapper: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 16,
                    marginTop: "12vh"
                },
                message: {
                    fontSize: 14,
                    marginTop: 8,
                    color: i(632079).Tj.text.secondary
                }
            };

            function v() {
                return (0, a.jsxs)("div", {
                    style: y.wrapper,
                    children: [(0, a.jsx)(i(517334).k, {}), (0, a.jsx)("div", {
                        style: y.message,
                        children: (0, a.jsx)(i(109939).sA, {
                            defaultMessage: "Importing…",
                            id: "frame.importingMessage"
                        })
                    })]
                })
            }
            i(354520), i(581454);
            let b = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.13 15.25 14.86",
                    svg: (0, a.jsx)("path", {
                        d: "M17.625 5.255A2.125 2.125 0 0 0 15.5 3.13h-11a2.125 2.125 0 0 0-2.125 2.125v7.5c0 1.173.951 2.125 2.125 2.125h1.188v2.482a.625.625 0 0 0 1.006.496l3.87-2.978H15.5a2.125 2.125 0 0 0 2.125-2.125zM5.95 7.505a.55.55 0 0 1 .55-.55h7a.55.55 0 0 1 0 1.1h-7a.55.55 0 0 1-.55-.55m.55 2.45h5a.55.55 0 0 1 0 1.1h-5a.55.55 0 1 1 0-1.1"
                    })
                },
                x = (0, i(104509).wt)("commentFilledFill", b, "fill");
            i(16280);
            let k = new(i(815048)).O2("OnboardingAgentGettingStartedPlaceholder", async () => await Promise.all([i.e(31190), i.e(946)]).then(i.bind(i, 962727))),
                C = (0, i(815048)._h)(k, e => e.OnboardingAgentGettingStartedPlaceholder),
                w = new(i(815048)).O2("floatingTableOfContents", async () => await i.e(52614).then(i.bind(i, 608241))),
                _ = (0, i(815048)._h)(w, e => e.FloatingTableOfContents);

            function I({
                isViewsMainModule: e,
                collectionViewBlockStore: t,
                environment: n,
                collectionContextStore: l
            }) {
                let r = (0, i(682985).K8)(() => {
                    if (!e || !t) return;
                    let o = n.RouterStore.state.route;
                    if ("page" === o.name && o.scrollToBlockId) {
                        var r;
                        let e = t.getCollectionViewStores().find(e => "page" === e.getType()),
                            o = (null == l || null == (r = l.collectionViewStore()) ? void 0 : r.id) === (null == e ? void 0 : e.id),
                            n = null == l ? void 0 : l.isInPeekRendererStore.state,
                            a = i(475097).default.state.open && !(0, i(447036).cq)(t);
                        return o || n || a || null == e ? void 0 : e.id
                    }
                }, [n, t, e, l]);
                (0, o.useEffect)(() => {
                    l && r && (0, i(532013).t)({
                        environment: n,
                        collectionContextStore: l,
                        collectionViewId: r,
                        isFullScreen: l.isFullScreenStore.state,
                        isRootChild: l.isRootChildStore.state,
                        isInPeekRenderer: l.isInPeekRendererStore.state
                    })
                }, [n, r, t, e, l])
            }

            function P({
                isViewsMainModule: e,
                collectionViewBlockStore: t,
                collectionContextStore: o
            }) {
                return (0, i(682985).K8)(() => {
                    if (!e || !o) return !1;
                    let i = null == o ? void 0 : o.collectionViewStore();
                    return (null == t ? void 0 : t.getCollectionViewStores().length) === 1 && (null == i ? void 0 : i.getType()) === "page" && !(null != i && i.getFormat().page_pointer)
                }, [e, o, t])
            }

            function M(e) {
                let t = (0, i(533992).v3)(),
                    n = (0, o.useContext)(i(953075).w);
                return (0, i(682985).K8)(() => {
                    if (!e) return 0;
                    let {
                        device: o
                    } = t, l = t.WindowSizeStore.state.width, r = !!(e && (0, i(447036).cq)(e));
                    if (r) {
                        let e = (0, i(27469).eO)({
                            environment: t,
                            isInPeek: !0
                        });
                        return i(475097).default.getPeekModeWidth(l) - n - e
                    }
                    let a = l - n - ((0, i(921001).z)(t, r) - (0, i(493739).Q)(t));
                    if (!(0, i(845181).t)(t)) return a;
                    let {
                        shouldShowSidebar: s
                    } = (0, i(846044).X)(t);
                    return (!i(986939).A.isMobile || o.isTablet) && s && (a -= (0, i(898478).k)(t)), a
                }, [t, e, n])
            }

            function A({
                pageStore: e,
                disabled: t,
                viewsModule: o,
                wrapper: n,
                templatePickerMenuListStore: l,
                editorContentContainerRef: r,
                viewsModuleCollectionContextStore: s,
                setViewsModuleCollectionContextStore: d
            }) {
                let c = (0, i(533992).v3)(),
                    {
                        collectionViewBlockStore: u,
                        viewsModuleContext: p,
                        isViewsMainModule: g
                    } = (0, i(682985).K8)(() => {
                        if (!o) return {
                            collectionViewBlockStore: void 0,
                            collectionViewId: void 0,
                            viewsModuleContext: void 0,
                            isViewsMainModule: !1
                        };
                        let t = i(970831).B.createChildStore(e, o.collection_view_block_pointer);
                        return {
                            collectionViewBlockStore: t,
                            viewsModuleContext: {
                                location: "page",
                                viewsModule: o,
                                currentPageStore: e,
                                collectionViewBlockStore: t
                            },
                            isViewsMainModule: "viewsMain" === o.type
                        }
                    }, [e, o]);
                I({
                    isViewsMainModule: g,
                    collectionViewBlockStore: u,
                    environment: c,
                    collectionContextStore: s
                });
                let m = M(u),
                    f = P({
                        isViewsMainModule: g,
                        collectionViewBlockStore: u,
                        collectionContextStore: s
                    });
                return u && p ? n((0, a.jsx)("div", {
                    style: g ? {
                        minHeight: "60vh"
                    } : void 0,
                    children: (0, a.jsx)(i(590285).dN, {
                        store: u,
                        isFullScreen: !1,
                        productUseCase: "page_views_module",
                        hideViewTabBar: f,
                        headerActionsBehavior: f ? "hidden" : "always_show",
                        headerAllowedActions: j,
                        disabled: t,
                        disableHoverMenu: !0,
                        fullWidth: m,
                        showOnlyCurrentView: !g,
                        isUnlistedView: !1,
                        viewsModuleContext: p,
                        setCollectionContextStore: d,
                        templatePickerMenuListStore: l,
                        editorContentContainerRef: r
                    })
                })) : null
            }
            let j = ["filter", "sort", "search", "addItem", "sync", "emptyOrganizeBy", "minimize"];

            function B() {
                let e = i(632079).Tj.background.secondary,
                    t = (0, i(960253).I)(() => ({
                        container: {
                            height: 300,
                            width: "100%",
                            backgroundColor: e
                        }
                    }), [e]),
                    o = (0, a.jsx)("div", {
                        style: t.container,
                        children: (0, a.jsx)(i(4458).fI, {
                            gap: "inherit",
                            height: "100%",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            children: (0, a.jsx)(i(111010).D, {
                                styleKey: "bodySemibold",
                                colorVariant: "secondary",
                                children: "🏭 Software Factory"
                            })
                        })
                    });
                return (0, a.jsx)(i(337336).K, {
                    from: "SoftwareFactoryCollectionPageSection",
                    fallback: () => null,
                    children: o
                })
            }
            let T = (0, o.createContext)(void 0);

            function K(e) {
                return (0, a.jsx)(T.Provider, {
                    value: e.value,
                    children: e.children
                })
            }

            function V({
                pageStore: e,
                disabled: t,
                viewsModule: o,
                wrapper: n,
                templatePickerMenuListStore: l,
                editorContentContainerRef: r,
                viewsModuleCollectionContextStore: s,
                setViewsModuleCollectionContextStore: d
            }) {
                let c = (0, i(533992).v3)(),
                    {
                        collectionViewBlockStore: u,
                        viewsModuleContext: p,
                        isViewsMainModule: g
                    } = (0, i(682985).K8)(() => {
                        if (!o) return {
                            collectionViewBlockStore: void 0,
                            viewsModuleContext: void 0,
                            isViewsMainModule: !1
                        };
                        let t = i(970831).B.createChildStore(e, o.collection_view_block_pointer);
                        return {
                            collectionViewBlockStore: t,
                            viewsModuleContext: {
                                location: "page",
                                viewsModule: o,
                                currentPageStore: e,
                                collectionViewBlockStore: t
                            },
                            isViewsMainModule: "viewsMain" === o.type
                        }
                    }, [e, o]);
                I({
                    isViewsMainModule: g,
                    collectionViewBlockStore: u,
                    environment: c,
                    collectionContextStore: s
                });
                let m = M(u),
                    f = P({
                        isViewsMainModule: g,
                        collectionViewBlockStore: u,
                        collectionContextStore: s
                    });
                return u && p ? (0, a.jsx)(K, {
                    value: p,
                    children: n((0, a.jsx)("div", {
                        style: g ? {
                            minHeight: "60vh"
                        } : void 0,
                        children: (0, a.jsx)(i(590285).dN, {
                            store: u,
                            isFullScreen: !1,
                            productUseCase: "page_views_module",
                            hideViewTabBar: f,
                            headerActionsBehavior: f ? "hidden" : "always_show",
                            headerAllowedActions: E,
                            disabled: t,
                            disableHoverMenu: !0,
                            fullWidth: m,
                            showOnlyCurrentView: !g,
                            isUnlistedView: !1,
                            viewsModuleContext: p,
                            setCollectionContextStore: d,
                            templatePickerMenuListStore: l,
                            editorContentContainerRef: r
                        })
                    }))
                }) : null
            }
            T.displayName = "ViewsModuleReactContext";
            let E = ["filter", "sort", "search", "addItem", "sync", "emptyOrganizeBy", "minimize"],
                R = new(i(815048)).O2("PageLayoutModuleErrorFallback", () => i.e(98396).then(i.bind(i, 37368))),
                L = (0, i(815048)._h)(R, e => e.PageLayoutModuleErrorFallback);

            function D(e) {
                let {
                    store: t
                } = e, n = (0, i(682985).K8)(() => {
                    var e;
                    return null == (e = i(728372).AppStoreSidebarSpaceViewStore.state) || null == (e = e.getSettings()) || null == (e = e.getting_started_page_ids) ? void 0 : e[0]
                }, []), l = (0, i(682985).K8)(() => {
                    var e;
                    return null == (e = i(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.post_onboarding_agent_config
                }, []), [r, s] = (0, o.useState)();
                (0, o.useEffect)(() => {
                    i.e(71831).then(i.bind(i, 10638)).then(e => {
                        s({
                            fn: e.shouldShowOnboardingPlaceholder
                        })
                    })
                }, []);
                let d = (0, i(682985).K8)(() => null == r ? void 0 : r.fn({
                    pageStore: t,
                    firstGettingStartedPageId: n,
                    postOnboardingAgentConfig: l ? ? {}
                }), [t, r, n, l]);
                return (0, a.jsx)(i(28111).A, {
                    name: "OnboardingPlaceholderSection",
                    children: d ? (0, a.jsx)(i(394112).vV, {
                        children: (0, a.jsx)(i(385827).s, {
                            allowSelectionWithin: !0,
                            children: (0, a.jsx)(C, {
                                store: t
                            })
                        })
                    }) : null
                })
            }
            let F = {
                    bottomControls: {
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "flex-start",
                        flexWrap: "wrap",
                        color: i(632079).Tj.text.tertiary,
                        fontFamily: (0, i(699422).vc)(i(849917).locale).sans
                    },
                    detailsButton: {
                        fontWeight: i(699422).Wy.medium,
                        color: i(632079).Tj.text.secondary
                    },
                    style0: {
                        display: "contents"
                    }
                },
                O = function(e) {
                    let {
                        store: t,
                        context: n,
                        postContext: l,
                        disabled: r,
                        templatePickerMenuListStore: s,
                        styleOverrides: d,
                        onHeaderMouseEnter: c,
                        onHeaderMouseLeave: u,
                        pageCoverHeight: p,
                        isEditable: g,
                        getControlHoverStyle: m,
                        pageViewBlockStores: f,
                        pageViewBlockAccessor: h,
                        onDetailMouseEnter: S,
                        onDetailMouseLeave: y,
                        modules: v,
                        editorContentContainerRef: b,
                        layoutRef: k,
                        isHeaderHovered: C
                    } = e, w = (0, i(533992).v3)(), I = (0, i(682985).K8)(() => t.getAssociatedCollectionStore(), [t], {
                        debugName: "PageLayoutModules(collectionStore).useComputedStore"
                    }), [P, M] = (0, o.useState)(void 0), A = (0, i(682985).K8)(() => t.getSchema(), [t], {
                        debugName: "PageLayoutModules(schema).useComputedStore"
                    }), j = (0, i(682985).K8)(() => (0, i(125824).A)({
                        environment: w,
                        store: t,
                        pageViewBlockStore: f.pageViewBlockStore
                    }), [w, t, f.pageViewBlockStore]), B = (0, i(682985).K8)(() => {
                        let e = (0, i(335818).gV)(t);
                        if (e) return (e.collection_page_sections || []).filter(e => {
                            let o = A[e.section];
                            if (!o || "relation" !== o.type) return;
                            let n = t.getPropertyValue(e.section),
                                l = (0, i(561872).bG)({
                                    relationValue: (0, i(561872).n)(n),
                                    propertySchema: o,
                                    getRecordModel: t.getRecordModel,
                                    includeNoAccess: !0
                                }).length;
                            return "inline" === e.visibility && A[e.section] && 0 !== l
                        }).map(e => e.section)
                    }, [A, t], {
                        debugName: "PageLayoutModules(inlinePropertyIDs).useComputedStore"
                    }), T = (0, i(682985).K8)(() => (null == d ? void 0 : d.paddingX) ? ? (0, i(335818).OU)(n, w), [n, w, null == d ? void 0 : d.paddingX], {
                        debugName: "PageLayoutModules(horizontalPadding).useComputedStore"
                    }), K = (0, i(682985).K8)(() => (0, i(966980).qE)(t, {
                        recursivelyLoadAllDiscussions: !1
                    }).comments, [t]), V = (0, i(682985).K8)(() => {
                        let e = (0, i(335818).gV)(t);
                        if (e) return (e.collection_page_sections || []).filter(e => {
                            let o = A[e.section];
                            if (!o || "relation" !== o.type) return;
                            let n = t.getPropertyValue(e.section),
                                l = (0, i(561872).bG)({
                                    relationValue: (0, i(561872).n)(n),
                                    propertySchema: o,
                                    getRecordModel: t.getRecordModel,
                                    includeNoAccess: !0
                                }).length;
                            return "minimal" === e.visibility && A[e.section] || "inline" === e.visibility && A[e.section] && 0 === l
                        }).map(e => e.section)
                    }, [A, t], {
                        debugName: "PageLayoutModules(minimalPropertyIDs).useComputedStore"
                    }), {
                        value: E
                    } = (0, i(815048).fJ)(i(656915).commentsDependency), {
                        value: R
                    } = (0, i(815048).fJ)(i(310639).assistantDependency), O = (0, i(682985).K8)(() => {
                        var e;
                        if (!R) return !1;
                        let o = R.clientSkillHelpers.createClientGlobalSkill("fill_title");
                        return 1 === R.assistantSurfaceValidators.filterAssistantSurfaceActionsForContext(R.assistantSurfaceValidators.clientSkillToAssistantSurfaceAction([o]), {
                            type: "entrypoint",
                            entrypoint: "pageStart",
                            pageStore: t,
                            isMobile: i(986939).A.isMobile,
                            userSettings: null == (e = i(728372).AppStoreCurrentUserSettingsStore.state) ? void 0 : e.getSettings()
                        }).length
                    }, [R, t]), W = (0, i(412764).RR)({
                        pageStore: t
                    }), H = (0, i(335818).L5)(n), N = (0, i(355301).D1)(w.device), U = (0, i(682985).K8)(() => {
                        if (e.context === i(166654).R.DraftPostInInlineComposer || e.context === i(166654).R.WorkflowInstructionsInInlineComposer) return {
                            bottomControls: []
                        };
                        let n = async () => {
                                await (0, i(63728).O)({
                                    blockStore: t,
                                    pageViewBlockStore: f.pageViewBlockStore,
                                    environment: w
                                })
                            },
                            l = async () => {
                                let {
                                    assistantDependency: e
                                } = await Promise.resolve().then(i.bind(i, 310639)), o = t.getTitleStore();
                                if (!o) return;
                                let n = await e.load();
                                (0, i(739204).z)({
                                    store: o
                                }), n.executeAssistantSkillAction({
                                    environment: w,
                                    clientSkillWithParameterValues: n.clientSkillHelpers.dangerouslyCreateClientSkillWithParameterValues(n.clientSkillHelpers.createClientGlobalSkill("fill_title")),
                                    from: "block_action_menu",
                                    assistantSurfaceType: i(986939).A.isMobile ? "mobileWriter" : "writer"
                                })
                            };
                        try {
                            let s, d, c, u, p, g = [],
                                h = [];
                            return s = [], (c = (d = "hidden" === j.type) && (() => {
                                if ("section_hide" !== (0, i(613968).Rn)() && K > 0) return (0, a.jsx)(i(988022).p, {
                                    colorPalette: "gray",
                                    onClick: () => {
                                        i(898128)._.setToggleState({
                                            environment: w,
                                            type: "discussion",
                                            id: t.id
                                        }, !0)
                                    },
                                    iconLeading: {
                                        icon: x,
                                        size: "xs",
                                        fitToViewBox: "all"
                                    },
                                    style: F.detailsButton,
                                    children: (0, a.jsx)(i(109939).sA, {
                                        id: "pageViewBlock.show.pageComments",
                                        defaultMessage: "{numberOfComments, plural, one {{numberOfComments} comment} other {{numberOfComments} comments}}",
                                        values: {
                                            numberOfComments: K
                                        }
                                    })
                                }, "showcomments")
                            })()) && s.push((0, a.jsx)(o.Fragment, {
                                children: c
                            }, "discussions")), (u = (() => {
                                let e = (0, i(966980).hq)(t, {
                                    recursivelyLoadAllDiscussions: !1
                                });
                                if (0 === e.length) return;
                                let o = (0, a.jsx)(i(109939).sA, {
                                    id: "pageViewBlock.showResolvedComments.button",
                                    defaultMessage: "{numberOfResolvedComments, plural, one {{numberOfResolvedComments} resolved comment} other {{numberOfResolvedComments} resolved comments}}",
                                    values: {
                                        numberOfResolvedComments: e.length
                                    }
                                });
                                return (0, i(953099).N)(w) ? (0, a.jsx)(i(988022).p, {
                                    iconLeading: i(98702).checkmarkFillIcon,
                                    colorPalette: "gray",
                                    style: F.detailsButton,
                                    onClick: () => {
                                        i(821243).B4({
                                            environment: w,
                                            blockStore: t,
                                            analyticsFrom: "page_comments",
                                            shouldFocusDiscussion: !0,
                                            recursivelyLoadAllDiscussions: !1,
                                            discussionIds: e.map(e => e.id)
                                        })
                                    },
                                    children: o
                                }) : (0, a.jsx)(i(656252).A, {
                                    buttonPopupStore: f.resolvedDiscussionButtonPopupStore,
                                    popupType: i(986939).A.isMobile ? i(656252).z.SlideUp : i(656252).z.Popup,
                                    content: o => {
                                        let n;
                                        return n = i(986939).A.isMobile ? {
                                            menuType: i(649476).gu.Modal,
                                            title: (0, a.jsx)(i(109939).sA, {
                                                defaultMessage: "Resolved comments",
                                                id: "pageViewBlock.resolvedComments.menuTabTitle"
                                            }),
                                            right: (0, a.jsx)(i(109939).sA, { ...i(789722).W.done
                                            }),
                                            onClickRight: o.close,
                                            whiteBackground: !0
                                        } : {
                                            menuType: i(649476).gu.Popup,
                                            width: 500
                                        }, (0, a.jsx)(i(747369).A, { ...n,
                                            children: e.map((e, n, l) => (0, a.jsx)(i(318981).A, {
                                                store: e,
                                                droppable: !0,
                                                render: () => E ? (0, a.jsx)(i(656915).PW, {
                                                    store: e,
                                                    format: E.discussionHelpers.DiscussionFormat.Menu,
                                                    isFirst: 0 === n,
                                                    isOnly: 1 === l.length,
                                                    discussionLocation: "page_discussion",
                                                    showResolveButtonByDefaultIfPossible: !0,
                                                    blockStore: t,
                                                    onDismiss: o.close
                                                }, e.id) : null
                                            }, e.id))
                                        })
                                    },
                                    children: e => (0, a.jsx)(i(988022).p, {
                                        iconLeading: i(98702).checkmarkFillIcon,
                                        colorPalette: "gray",
                                        style: F.detailsButton,
                                        ...e,
                                        children: o
                                    })
                                }, "resolve-discussions")
                            })()) && !d && s.unshift((0, a.jsx)(o.Fragment, {
                                children: u
                            }, "resolveddiscussions")), (p = (() => {
                                if (!I) return;
                                let e = (0, i(335818).gV)(t),
                                    o = (0, i(444285).S)(t);
                                if (e && V && V.length) return (0, a.jsx)(i(258437).A, {
                                    propertyIds: V,
                                    store: t,
                                    collectionStore: I,
                                    disabled: r,
                                    locked: o,
                                    blockPropertyValueOverlayStore: H ? i(129894).A : i(363746).A,
                                    format: e,
                                    type: "minimal"
                                })
                            })()) && s.push((0, a.jsx)(o.Fragment, {
                                children: p
                            }, "minimalpagesections")), g = s, {
                                headerControls: N ? void 0 : (() => {
                                    let s;
                                    if (h = [...e.topControls], "always" === W || "onHover" === W) {
                                        let e = {
                                            isBottomControl: !1,
                                            ..."always" === W ? {
                                                forceVisible: !0
                                            } : {}
                                        };
                                        h.unshift((0, a.jsx)(o.Fragment, {
                                            children: (0, a.jsx)(i(796164).y, {
                                                pageStore: t,
                                                backlinksButtonPopupStore: f.backlinksButtonPopupStore,
                                                isButtonVisible: C || "always" === W,
                                                customization: {
                                                    buttonStyles: m(e)
                                                }
                                            })
                                        }, "backlinks"))
                                    }
                                    return "section_hide" === (0, i(613968).Rn)(t) || t.isCollectionView() || t.isInsideCollection() || K > 0 || !t.canComment() || !w.currentUser.isLoggedIn() || f.pageViewBlockStore.state.forceDiscussionOpen || t.pathIsDead() || t.isTeamPost() || r || h.push((s = {
                                        isBottomControl: !1
                                    }, (0, a.jsx)(i(988022).p, {
                                        style: m({
                                            isBottomControl: s.isBottomControl
                                        }),
                                        colorVariant: "tertiary",
                                        onClick: n,
                                        iconLeading: {
                                            icon: x,
                                            size: "xs",
                                            fitToViewBox: "all"
                                        },
                                        children: w.device.isSmallPhone ? (0, a.jsx)(i(109939).sA, {
                                            id: "pageViewBlock.add.pageCommentMobile",
                                            defaultMessage: "Comment"
                                        }) : (0, a.jsx)(i(109939).sA, {
                                            id: "pageViewBlock.add.pageComment",
                                            defaultMessage: "Add comment"
                                        })
                                    }, "addcomment"))), O && h.push((0, a.jsx)(i(988022).p, {
                                        style: m({
                                            isBottomControl: !1
                                        }),
                                        colorPalette: "blue",
                                        onClick: l,
                                        iconLeading: i(517259).a,
                                        children: (0, a.jsx)(i(109939).sA, {
                                            id: "pageViewBlock.add.fillTitle",
                                            defaultMessage: "Fill page title"
                                        })
                                    }, "fill-title")), (0, a.jsx)("div", {
                                        className: H ? i(828432).S6D : void 0,
                                        children: (0, a.jsx)(i(306472).A, {
                                            store: t,
                                            context: e.context,
                                            children: h
                                        })
                                    })
                                })(),
                                bottomControls: g
                            }
                        } catch (e) {
                            return {
                                bottomControls: []
                            }
                        }
                    }, [e.context, e.topControls, t, f.pageViewBlockStore, f.resolvedDiscussionButtonPopupStore, f.backlinksButtonPopupStore, w, m, K, r, N, j, W, O, H, I, V, E, C], {
                        debugName: "PageLayoutModules(headerAndBottomControlsStore).useComputedStore",
                        silenceRerenderDefender: !0
                    });
                    return (0, a.jsxs)(i(28111).A, {
                        name: "PageLayoutModules",
                        children: [(0, a.jsx)(i(385827).s, {
                            style: F.style0,
                            allowSelectionWithin: !1,
                            children: (0, a.jsx)(_, {
                                store: t,
                                viewsModuleCollectionContextStore: P
                            })
                        }), v.map(o => (0, a.jsx)(i(875034).S, {
                            from: `PageLayout.${o.type}`,
                            fallback: ({
                                error: e,
                                errorId: t
                            }) => (0, a.jsx)(L, {
                                error: e,
                                errorId: t,
                                type: o.type
                            }),
                            getParentEl: () => k.current,
                            children: (0, a.jsx)(z, {
                                editorContentContainerRef: b,
                                module: o,
                                context: n,
                                postContext: l,
                                pageViewBlockStore: f.pageViewBlockStore,
                                disabled: r,
                                environment: w,
                                bottomControls: U.bottomControls,
                                headerControls: U.headerControls,
                                horizontalPadding: T,
                                inlinePropertyIDs: B,
                                isEditable: g,
                                isInPeek: H,
                                isHeaderHovered: C,
                                onDetailMouseEnter: S,
                                onDetailMouseLeave: y,
                                onHeaderMouseEnter: c,
                                onHeaderMouseLeave: u,
                                pageCoverHeight: p,
                                pageViewBlockAccessor: h,
                                headerFocusStore: f.headerFocusStore,
                                store: t,
                                collectionStore: I,
                                collectionSchema: A,
                                bottomControlsStyle: F.bottomControls,
                                templatePickerMenuListStore: s,
                                pageTitleWithIconProps: e,
                                modules: v,
                                pageDiscussionsRenderState: j,
                                viewsModuleCollectionContextStore: P,
                                setViewsModuleCollectionContextStore: M
                            })
                        }, o.id)), (0, a.jsx)(D, {
                            store: t
                        })]
                    })
                };

            function z(e) {
                let {
                    module: t,
                    modules: o,
                    context: n,
                    postContext: l,
                    disabled: r,
                    environment: s,
                    bottomControls: d,
                    headerControls: c,
                    horizontalPadding: u,
                    inlinePropertyIDs: p,
                    isEditable: g,
                    isInPeek: m,
                    onDetailMouseEnter: f,
                    onDetailMouseLeave: h,
                    onHeaderMouseEnter: S,
                    onHeaderMouseLeave: y,
                    pageCoverHeight: v,
                    pageViewBlockAccessor: b,
                    headerFocusStore: x,
                    store: k,
                    collectionStore: C,
                    collectionSchema: w,
                    bottomControlsStyle: _,
                    templatePickerMenuListStore: I,
                    pageTitleWithIconProps: P,
                    pageDiscussionsRenderState: M,
                    editorContentContainerRef: j,
                    viewsModuleCollectionContextStore: T,
                    setViewsModuleCollectionContextStore: K
                } = e, {
                    pageVisitStore: E,
                    presenceStore: R
                } = (0, i(931482).S)({
                    store: k,
                    environment: s,
                    postContext: l
                }), L = (0, i(682985).K8)(() => !!C && (0, i(410489).v)({
                    collectionStore: C,
                    module: t,
                    isMobile: i(986939).A.isMobile
                }), [C, t]), D = "page_main", F = (0, i(209046).Jh)({
                    layoutModule: t,
                    area: D,
                    collectionSchema: w,
                    collectionStore: C,
                    showDetailsPanelToggleButtonBelowTitle: L,
                    modules: o,
                    context: n,
                    postContext: l
                }), O = (0, i(209046).Br)({
                    layoutModule: t,
                    area: D,
                    collectionSchema: w,
                    collectionStore: C,
                    pageMainModules: o,
                    showDetailsPanelToggleButtonBelowTitle: L
                }), z = (0, i(682985).K8)(() => i(218744).default.getConfig({
                    configName: "factory_ui_1"
                }).collectionIds ? ? [], []), W = null == C ? void 0 : C.id, H = (0, i(83208).X)("software_factory_collection_page_section") && void 0 !== W && z.includes(W), N = (0, i(83208).X)("views_module_ccs_decouple");
                return (0, a.jsx)(i(28111).A, {
                    name: "PageLayoutModule",
                    children: (() => {
                        if ((0, i(11287).gx)(t)) return (0, a.jsx)(i(952330).v, {
                            context: n,
                            disabled: r,
                            propertyId: t.propertyId,
                            store: k,
                            pageModule: t,
                            wrapper: F,
                            stackPropertyLabelAndValue: !0
                        });
                        switch (t.type) {
                            case "cover":
                                if (n === i(166654).R.WorkflowInstructionsInInlineComposer) return null;
                                return (0, a.jsx)(i(334120).f, {
                                    store: k,
                                    isEditable: g,
                                    paddingX: u,
                                    pageCoverHeight: v,
                                    onMouseEnter: S,
                                    onMouseLeave: y,
                                    isInPeek: m
                                });
                            case "normalizedTitleWithIcon":
                                if (n === i(166654).R.WorkflowInstructionsInInlineComposer) return null;
                                return F((0, a.jsx)(i(28847).H, {
                                    handleHeaderMouseEnter: S,
                                    handleHeaderMouseLeave: y,
                                    headerControls: c,
                                    headerFocusStore: x,
                                    layoutModule: t,
                                    viewsModuleCollectionContextStore: T,
                                    ...P
                                }));
                            case "properties":
                                return (0, a.jsx)(i(120805).h, {
                                    context: n,
                                    disabled: r,
                                    store: k,
                                    layoutModule: t,
                                    customization: {
                                        neverShowPropertiesElsewhereInLayout: !0,
                                        disableContainerPadding: !0
                                    },
                                    wrapper: F,
                                    showDefaultTitle: O
                                });
                            case "inlinePageSections":
                                return (0, a.jsx)(i(699258).LG, {
                                    context: n,
                                    disabled: r,
                                    inlinePropertyIDs: p,
                                    store: k,
                                    wrapper: F
                                });
                            case "expandedBacklinks":
                            case "transcript":
                            case "formTitle":
                            case "formQuestion":
                            case "formSubmit":
                            case "placeholder":
                            case "deleted_property":
                            case "recentActivity":
                            case "collaborators":
                            case "teamspaces":
                                return null;
                            case "discussions":
                                {
                                    let e = H ? e => F((0, a.jsxs)(i(4458).VP, {
                                        gap: 8,
                                        children: [(0, a.jsx)(i(385827).s, {
                                            allowSelectionWithin: !0,
                                            children: (0, a.jsx)(B, {})
                                        }), e]
                                    })) : F;
                                    if (l === i(166654).R.DraftPostInInlineComposer || l === i(166654).R.DraftPostInFullPageComposer || n === i(166654).R.WorkflowInstructionsInInlineComposer) return null;
                                    if (l === i(166654).R.PostInFullPageOrPeek) return (0, a.jsx)(i(28916).d, {
                                        store: k,
                                        wrapper: e,
                                        showDefaultTitle: !1,
                                        discussionLocation: "feed_item_top_level_discussion",
                                        pageDiscussionsRenderState: M,
                                        presenceStore: R,
                                        pageVisitStore: E
                                    });
                                    return (0, a.jsx)(i(28916).d, {
                                        store: k,
                                        wrapper: e,
                                        showDefaultTitle: O,
                                        discussionLocation: "page_discussion",
                                        pageDiscussionsRenderState: M
                                    })
                                }
                            case "bottomControls":
                                if (0 === d.length) return null;
                                return F((0, a.jsx)(i(385827).s, {
                                    allowSelectionWithin: !0,
                                    children: (0, a.jsx)("div", {
                                        style: _,
                                        className: "notion-page-details-controls",
                                        onMouseEnter: f,
                                        onMouseLeave: h,
                                        children: d
                                    })
                                }));
                            case "editor":
                                return (0, a.jsx)(i(520087).p, {
                                    context: n,
                                    disabled: r,
                                    handlePlaceholderWrapClick: e => i(605858).YB(e, k, s),
                                    pageBlockStore: k,
                                    pathToBlockId: t.pathToBlockId,
                                    templatePickerMenuListStore: I,
                                    pageViewBlockAccessor: b,
                                    ref: j,
                                    editorWrapper: n === i(166654).R.DraftPostInInlineComposer || n === i(166654).R.WorkflowInstructionsInInlineComposer ? void 0 : F
                                });
                            case "viewsMain":
                            case "views":
                                if (N) return (0, a.jsx)(V, {
                                    pageStore: k,
                                    disabled: r,
                                    viewsModule: t,
                                    wrapper: F,
                                    templatePickerMenuListStore: I,
                                    editorContentContainerRef: j,
                                    viewsModuleCollectionContextStore: T,
                                    setViewsModuleCollectionContextStore: K
                                });
                                return (0, a.jsx)(A, {
                                    pageStore: k,
                                    disabled: r,
                                    viewsModule: t,
                                    wrapper: F,
                                    templatePickerMenuListStore: I,
                                    editorContentContainerRef: j,
                                    viewsModuleCollectionContextStore: T,
                                    setViewsModuleCollectionContextStore: K
                                });
                            case "relationsGroup":
                                return (0, a.jsx)(i(475620).z, {
                                    pageStore: k,
                                    wrapper: F,
                                    disabled: r,
                                    context: n,
                                    showDefaultTitle: O
                                })
                        }
                    })()
                })
            }
            let W = new(i(815048)).O2("GenerateSocialMediaPreviewImageWrapper", async () => i.e(45562).then(i.bind(i, 580005))),
                H = (0, i(815048)._h)(W, e => e.GenerateSocialMediaPreviewImageWrapper),
                N = new(i(815048)).O2("TaskPageViewBlock", () => Promise.all([i.e(75134), i.e(36556), i.e(55373), i.e(36192), i.e(40994), i.e(57042), i.e(54280), i.e(16712), i.e(93186), i.e(80139), i.e(67542), i.e(15389), i.e(97732), i.e(53050), i.e(87353), i.e(64696), i.e(29663), i.e(75136), i.e(98175), i.e(65594), i.e(15021), i.e(98239), i.e(20757)]).then(i.bind(i, 781402))),
                U = (0, i(815048)._h)(N, e => e.TaskPageViewBlock),
                q = (0, i(109939).YK)({
                    slashMenuOpened: {
                        id: "liveRegion.editorMenu.slashMenuOpened",
                        defaultMessage: "Command menu. Type to filter. Use up and down to navigate. Press Enter to select, Escape to close."
                    },
                    mentionMenuOpened: {
                        id: "liveRegion.editorMenu.mentionMenuOpened",
                        defaultMessage: "Mention menu. Type to filter. Use up and down to navigate. Press Enter to select, Escape to close."
                    },
                    emojiPickerOpened: {
                        id: "liveRegion.editorMenu.emojiPickerOpened",
                        defaultMessage: "Emoji picker. Type to filter. Use arrow keys to navigate. Press Enter to select, Escape to close."
                    }
                }),
                Y = (0, i(699422).vc)(i(849917).locale).sans,
                Q = {
                    serif: (0, i(699422).vc)(i(849917).locale).serif,
                    mono: (0, i(699422).vc)(i(849917).locale).mono,
                    comic: (0, i(699422).vc)(i(849917).locale).comic
                },
                G = {
                    serif: 1.6,
                    mono: 1.6
                },
                X = {
                    serif: 0,
                    mono: .055
                },
                $ = {
                    serif: 15,
                    mono: 14
                },
                J = {
                    serif: 17,
                    mono: 15
                },
                Z = {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    alignItems: "center",
                    flexGrow: 1
                },
                ee = 14,
                et = 16,
                ei = o.memo(o.forwardRef(function(e, t) {
                    var l, s;
                    let d, c, p, g, m, f, h, y, b, x, k, C = (0, o.useRef)();
                    C.current = performance.now();
                    let {
                        store: w,
                        context: _,
                        disabled: I,
                        onTitleEsc: P,
                        styleOverrides: M,
                        disableTopControls: A
                    } = e, j = (0, i(682985).K8)(() => {
                        var e;
                        return null == (e = w.getSpaceStore()) ? void 0 : e.getFreezeSettings()
                    }, [w]), B = (0, i(671215).p)(j), T = I || "active" === B, K = (0, i(533992).v3)(), V = (0, i(345776).T)(), E = (0, i(533992).Y0)(), R = (0, i(67499).S)(), L = (0, i(109939).tz)(), D = function() {
                        let e = (0, i(109939).tz)(),
                            {
                                isMenuOpen: t,
                                menuType: n
                            } = (0, i(682985).K8)(() => i(764615).Ay.state.open ? {
                                isMenuOpen: !0,
                                menuType: "slash"
                            } : "block" === i(498368).Ay.getMentionMenuContext() ? {
                                isMenuOpen: !0,
                                menuType: "mention"
                            } : i(994872).A.state.open ? {
                                isMenuOpen: !0,
                                menuType: "emoji"
                            } : {
                                isMenuOpen: !1,
                                menuType: null
                            }, [], {
                                debugName: "pageViewBlock-isMenuOpen"
                            }),
                            {
                                announce: l
                            } = (0, i(813367).U)(),
                            r = (0, o.useRef)(null);
                        (0, o.useEffect)(() => {
                            let t, i = null !== n && null === r.current;
                            if (r.current = n, i) {
                                switch (n) {
                                    case "slash":
                                        t = e.formatMessage(q.slashMenuOpened);
                                        break;
                                    case "mention":
                                        t = e.formatMessage(q.mentionMenuOpened);
                                        break;
                                    case "emoji":
                                        t = e.formatMessage(q.emojiPickerOpened)
                                }
                                t && l(t)
                            }
                        }, [n, l, e]);
                        let a = (0, o.useCallback)(e => {
                            let t = i(764615).Ay.state;
                            if (t.open) return void i(764615).Ay.setState({ ...t,
                                comboboxProps: e
                            });
                            if ("block" === i(498368).Ay.getMentionMenuContext()) {
                                let t = i(498368).Ay.state;
                                if (t.open) return void i(498368).Ay.setState({ ...t,
                                    comboboxProps: e
                                })
                            }
                            let o = i(994872).A.state;
                            o.open && i(994872).A.setState({ ...o,
                                comboboxProps: e
                            })
                        }, []);
                        return (0, i(444844).X)(t, a)
                    }(), F = (0, i(747193).b)(w, T), z = (d = (0, i(67499).S)(), (0, i(682985).K8)(() => {
                        if (T || i(420153).l.state) return !1;
                        let e = null == d ? void 0 : d.publicEditModeStore.state;
                        return !(0, i(45262).Q)(e) && w.canEditCollection()
                    }, [T, null == d ? void 0 : d.publicEditModeStore, w])), W = (0, i(682985).K8)(() => w.isReady() && z && !(0, i(444285).S)(w) && !(0, i(335818).sV)(w) && !(0, i(335818).fc)(w), [z, w]), N = (0, i(682985).O$)(i(205885).e), Y = (0, i(682985).K8)(() => w.isCollectionView(), [w]), Q = (0, o.useMemo)(() => (0, i(73467).X2)(w.id) ? "v8" : "v4", [w.id]), G = (0, i(682985).K8)(() => w.getType(), [w]), X = "workflow" === G, $ = (0, i(682985).K8)(() => w.isPeopleCollectionViewPage(), [w]), J = G === i(955630).xd.factoryTask, ee = $ ? "people_collection" : "full_page", et = (0, i(682985).K8)(() => {
                        let e = w.getAssociatedCollectionStore();
                        return !!(null == e ? void 0 : e.getLayoutStore())
                    }, [w]);
                    c = (0, i(83208).X)("prefetch_extended_user_profiles"), p = (0, i(815048).fJ)(i(554666).u.extendedUserProfileActions, {
                        disabled: !c
                    }), (0, o.useEffect)(() => {
                        c && w && p.value && p.value.prefetchMentionedUserProfiles(w, K)
                    }, [c, w, K, p.value]);
                    let ei = (0, i(83208).X)("adoption_track_collaboration_session_eligibility"),
                        en = (0, i(112923).n)(w),
                        eg = (0, o.useMemo)(() => ({
                            layout: {
                                translateX: -en
                            },
                            layoutFull: {
                                translateX: en
                            }
                        }), [en]),
                        em = (0, o.useMemo)(() => i(546605).Store.createValue(!1, {
                            name: "headerFocusStore"
                        }), []),
                        ef = (0, i(682985).O$)(em),
                        {
                            isInPeek: eh,
                            isInsideSidePeek: eS
                        } = (0, i(682985).K8)(() => ({
                            isInPeek: (0, i(447036).cq)(w),
                            isInsideSidePeek: (0, i(335818).mb)(w)
                        }), [w]),
                        ey = (0, o.useMemo)(() => new(i(823756)).A, []),
                        ev = (0, o.useMemo)(() => new(i(510969)).A, []),
                        eb = (0, o.useMemo)(() => new(i(510969)).A, []),
                        ex = (0, o.useMemo)(() => new(i(419110)).$, []),
                        ek = (0, o.useMemo)(() => i(546605).Store.createValue(!1, {
                            name: "forceControlHoverVisibleStore"
                        }), []),
                        eC = (0, i(682985).O$)(ek),
                        ew = (0, o.useMemo)(() => ({
                            headerFocusStore: em,
                            pageViewBlockStore: ey,
                            resolvedDiscussionButtonPopupStore: ev,
                            backlinksButtonPopupStore: eb,
                            templatePickerMenuListStore: ex,
                            forceControlHoverVisibleStore: ek
                        }), [em, ey, ev, eb, ex, ek]),
                        [e_, eI] = (0, o.useState)(!1),
                        [eP, eM] = (0, o.useState)(!1);
                    (0, i(913257).o)(w.id);
                    let eA = (0, o.useCallback)(() => {
                            ev.setState({
                                open: !0
                            }), ey.setState({ ...ey.state,
                                forceDiscussionOpen: !0
                            })
                        }, [ey, ev]),
                        ej = (0, o.useCallback)(() => {
                            let e = eT.current;
                            if (e) {
                                if (E.isIOS) return {
                                    paddingLeft: 0,
                                    paddingRight: 0
                                };
                                let t = getComputedStyle(e),
                                    i = parseFloat(t.getPropertyValue("padding-left")),
                                    o = parseFloat(t.getPropertyValue("padding-right"));
                                return {
                                    paddingLeft: Number.isNaN(i) ? 0 : i,
                                    paddingRight: Number.isNaN(o) ? 0 : o
                                }
                            }
                        }, [E]),
                        eB = (0, o.useCallback)(() => {
                            let e = eT.current;
                            if (e) {
                                let t = e.getBoundingClientRect().width,
                                    i = ej() ? ? {
                                        paddingLeft: 0,
                                        paddingRight: 0
                                    };
                                return t - i.paddingLeft - i.paddingRight
                            }
                        }, [ej]),
                        eT = (0, o.useRef)(null),
                        eK = (0, o.useRef)(null),
                        eV = (0, o.useRef)(null),
                        eE = (0, o.useCallback)(() => eT.current, []),
                        eR = (0, o.useCallback)(() => eK.current, []),
                        eL = (0, o.useMemo)(() => new(i(109900)).B(K), [K]);
                    (0, i(336494).b)(i(400890).A, () => ({
                        store: w,
                        blockContext: _,
                        openResolvedDiscussionPopup: eA,
                        getContentInnerWidth: eB,
                        getContentWrapEl: eE,
                        getLayoutEl: eR,
                        collectionContextStore: eL,
                        headerFocusStore: em,
                        pageViewBlockStore: ey,
                        resolvedDiscussionButtonPopupStore: ev,
                        backlinksButtonPopupStore: eb,
                        templatePickerMenuListStore: ex,
                        forceControlHoverVisibleStore: ek,
                        headerMouseStore: void 0,
                        renderedType: "page",
                        getBlockStore: () => w,
                        getNode: () => eV.current
                    }), [w, _, eA, eB, ej, eE, eR, eL, ew]);
                    let eD = (0, o.useRef)(!1),
                        eF = (0, i(682985).K8)(() => w.getTitleStore(), [w]),
                        eO = (0, i(682985).K8)(() => w.isInsideFactoryOrDuplicateBlocksAction(), [w]),
                        {
                            agentContextPageId: ez,
                            dailyBriefPageId: eW
                        } = (0, i(682985).K8)(() => {
                            var e;
                            let t = i(728372).AppStoreSidebarSpaceViewStore.state,
                                o = null == t ? void 0 : t.getSettingsStore().getKeyValue("agent_personalization_settings");
                            return {
                                agentContextPageId: null == o ? void 0 : o.context_page_id,
                                dailyBriefPageId: null == o || null == (e = o.daily_brief_prompt) ? void 0 : e.page_id
                            }
                        }, []),
                        eH = ez === w.id,
                        eN = eW === w.id,
                        eU = (0, i(682985).K8)(() => {
                            var e, t;
                            if (w.getParentTable() !== i(832375).C0E) return !1;
                            let o = w.getParentStore();
                            if (!(o instanceof i(360851).N)) return !1;
                            let n = null == (e = o.getData()) ? void 0 : e.instructions,
                                l = null == (t = o.getDraftData()) ? void 0 : t.instructions,
                                r = (0, i(886883).ap)(n) && n.id === w.id,
                                a = (0, i(886883).ap)(l) && l.id === w.id;
                            return r || a
                        }, [w]),
                        eq = (0, i(828294).N)("ai_prompt_pages"),
                        eY = (0, i(682985).K8)(() => eq && w.isAiSkill(), [w, eq]),
                        eQ = (0, i(553635).sD)(),
                        eG = (0, i(682985).K8)(() => {
                            let e = i(686494).A.state.publicPageData;
                            return !!(null == e ? void 0 : e.isDLSViewer)
                        }, []),
                        eX = (0, i(355301).D1)(E),
                        e$ = (0, o.useCallback)(() => !!eF && (!!e.forceSelectTitleOnMount || !(Y || i(986939).A.isMobile && E.isPhone && i(630121).A.hasOpenMobileSlideUps()) && (!i(247438).q4_(eF.getValue()) || (0, i(335818).In)(w) && !i(986939).A.isMobile)), [E.isPhone, Y, e.forceSelectTitleOnMount, w, eF]),
                        eJ = (0, i(682985).K8)(() => w.isFormBlock(), [w]),
                        [eZ, e0] = (0, i(682985).K8)(() => [!!w.getIcon(), !!w.getCover()], [w]),
                        e8 = (0, i(682985).K8)(() => i(908032).i({
                            userId: V,
                            spaceId: w.getSpaceId(),
                            debugFrom: "PageViewBlockFC"
                        }), [V, w]);
                    g = (0, i(533992).v3)(), m = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore), f = (0, i(682985).K8)(() => (0, i(427846)._)(g), [g]), h = (0, i(682985).K8)(() => {
                        let {
                            spaceId: e,
                            userId: t
                        } = i(498368).Ay.state.emptyQueryUserRequestStore.state.request ? ? {};
                        return (null == m ? void 0 : m.id) !== e || (null == f ? void 0 : f.id) !== t
                    }, [m, f]), (0, i(97668).Yb)(async () => {
                        if (!m || !h || !i(908032).i({
                                userId: null == f ? void 0 : f.id,
                                spaceId: null == m ? void 0 : m.id,
                                debugFrom: "useHydrateUsersMentionMenuEmptyState"
                            })) return;
                        i(498368).Ay.state.emptyQueryUserRequestStore.setState({ ...i(498368).Ay.state.emptyQueryUserRequestStore.state,
                            ready: !1,
                            loading: !0
                        }), await i(148344).k.waitUntilLoaded();
                        let e = i(148344).k.getSortedUserIds(),
                            t = i(728372).AppStoreMainEditorCurrentBlockStore.state,
                            o = t ? (0, i(862085).i0)(t).flatMap(({
                                permissionItem: e
                            }) => (0, i(642157).B2)(e) ? [e.user_id] : []) : [],
                            n = (0, i(381453).sb)([...(0, i(381453).oE)([null == f ? void 0 : f.id]), ...e, ...o]),
                            l = (0, i(975162).lX)(n.slice(0, 100), 100, async e => {
                                if (e === (null == f ? void 0 : f.id)) return null == f ? void 0 : f.getValue();
                                let t = i(807825).L.createChildStore(m, {
                                    table: i(832375).oo9,
                                    id: e
                                });
                                return await t.load(), t.getValue()
                            }),
                            r = await l;
                        i(498368).Ay.state.emptyQueryUserRequestStore.setState({
                            ready: !0,
                            loading: !1,
                            result: (0, i(381453).oE)(r),
                            request: {
                                spaceId: m.id,
                                userId: (null == f ? void 0 : f.id) ? ? ""
                            }
                        })
                    }, [m, f, h]);
                    let e9 = (0, o.useRef)(!1),
                        e5 = (0, o.useRef)(void 0);
                    (0, o.useEffect)(() => () => {
                        e5.current && window.removeEventListener("focus", e5.current)
                    }, []), (0, o.useEffect)(() => {
                        if (!e9.current) {
                            if (e9.current = !0, ep({
                                    environment: K,
                                    shouldUseEdgeCache: e8,
                                    pageContext: R
                                }), (0, i(288442).y)(), E.isPhone && !eX) {
                                let {
                                    PageScroller: e
                                } = i(862921).A;
                                if (e) {
                                    let t = e.getNode();
                                    if (t && F && !e0) {
                                        let e = ec(_, E);
                                        t.scrollTo({
                                            top: e
                                        })
                                    }
                                }
                            }
                            if (eF && e$()) {
                                let e = () => {
                                    if ((0, i(182553).h)({
                                            environment: K,
                                            store: w
                                        }), (0, i(739204).z)({
                                            store: eF
                                        }), E.isAndroid && E.isMobileNative) {
                                        var e;
                                        null == (e = K.mobileNative) || e.forceKeyboardVisibility(!0)
                                    }
                                };
                                if (document.hasFocus()) e();
                                else {
                                    let t = () => {
                                        e(), window.removeEventListener("focus", t), e5.current = void 0
                                    };
                                    e5.current = t, window.addEventListener("focus", t)
                                }
                            }
                            if (i(266130).updateMetricDataWithIsPushTag(K), _ !== i(166654).R.Frame || Y || eJ || (C.current && i(898727).A.markPageViewBlockRender(C.current), i(266130).measurePageRenderMetrics({
                                    environment: K,
                                    isEditable: W,
                                    isHomePage: !1,
                                    isWikiHome: !1,
                                    isPageWithCustomLayout: et,
                                    idSchema: Q
                                }), function(e, t, i) {
                                    if (es(e, t, i)) {
                                        var o;
                                        null == (o = t.mobileNative) || o.markTransitionReady({
                                            environment: t,
                                            type: "new_page",
                                            id: e.id,
                                            sendImmediately: !0
                                        })
                                    }
                                }(w, K, E)), eL) {
                                let e = (0, i(752242).kz)(eL);
                                i(680007).default.measure("collections.open_item_page_lag", {
                                    data: { ...e,
                                        peek_mode: i(475097).default.getPeekMode()
                                    }
                                })
                            }
                        }
                    }, [F, eL, _, E, eX, K, e$, e0, et, Q, Y, W, eJ, R, e8, w, eF]);
                    let e2 = (0, i(682985).K8)(() => i(880791).u.state.areAllBlocksRendered, []),
                        e6 = (0, o.useRef)(!1);
                    (0, o.useEffect)(() => {
                        _ !== i(166654).R.Frame || Y || eJ || e2 && !e6.current && (i(266130).measureRenderedBlocks(K, w.id), e6.current = !0)
                    }, [e2, _, K, Y, eJ, w.id]);
                    let e1 = (0, i(682985).K8)(() => eQ && !0 === w.getFormatStore().getKeyValue("is_transcription_summary_template"), [w, eQ]),
                        e3 = (0, i(682985).K8)(() => {
                            var e;
                            return null == (e = i(708929).Uv.getStateForBlock(w.id)) ? void 0 : e.mode
                        }, [w.id]),
                        e4 = (0, i(682985).K8)(() => {
                            var e;
                            let t = i(585823).ei.state,
                                o = (0, i(722371).O9)(t) && (null == (e = (0, i(637306).N)(t)) ? void 0 : e.id) === w.id;
                            return i(585823).gZ.state && o && "disconnected" === i(284771).A.state
                        }, [w.id]),
                        e7 = (0, i(682985).K8)(() => {
                            var e;
                            let t = i(585823).ei.state,
                                o = (0, i(722371).O9)(t) && (null == (e = (0, i(637306).N)(t)) ? void 0 : e.id) === w.id;
                            return i(585823).gZ.state && o && "transcription_service_unavailable" === i(284771).A.state
                        }, [w.id]),
                        te = (0, i(682985).K8)(() => {
                            var e;
                            return (0, i(952592).z)(w) || !!(null == (e = i(686494).A.state.publicPageData) ? void 0 : e.isDeleted) && (0, i(335818).jN)(_)
                        }, [w, _]),
                        tt = (0, i(682985).K8)(() => null == R ? void 0 : R.publicEditModeStore.state, [null == R ? void 0 : R.publicEditModeStore]),
                        ti = "on" === (0, i(604306).r)("better_template_indicators"),
                        to = (0, i(682985).K8)(() => w.isTemplate() ? w : ti ? w.getNearestAncestorTemplateStore() : void 0, [w, ti]),
                        tn = !!to,
                        tl = (0, i(682985).K8)(() => w.isDraft(), [w]),
                        tr = (0, i(682985).K8)(() => w.isArchived(), [w]),
                        ta = (y = (0, i(682985).K8)(() => (0, i(337108).c)({
                            environment: K,
                            store: w
                        }), [K, w]), b = (0, i(83208).X)("marketplace_template_versioning"), x = (0, i(682985).K8)(() => !!b && (0, i(13042).d)(w), [b, w]), k = (0, i(728583).J)({
                            environment: K,
                            store: w,
                            shouldQueryForSiteTemplateStatus: y && !x
                        }), (0, o.useMemo)(() => {
                            if (y && "pending" !== k.status) return k.templateListingExists && k.template ? {
                                type: "marketplace_template",
                                template: k.template
                            } : {
                                type: "sites"
                            }
                        }, [y, k])),
                        ts = function(e) {
                            let t = (0, i(533992).v3)(),
                                n = "control" !== (0, i(604306).r)("adoption_custom_workspace_getting_started_page", {
                                    disableExposureLogging: !0
                                }),
                                l = (0, i(682985).K8)(() => {
                                    let t = e.getSpaceStore();
                                    return null != t && t.isDefined() ? t : void 0
                                }, [e]),
                                r = (0, i(682985).K8)(() => {
                                    var e;
                                    return void 0 !== (null == (e = i(728372).AppStoreSidebarSpaceViewStore.state) || null == (e = e.getSettings()) ? void 0 : e.set_custom_getting_started_page_banner_dismissed_at)
                                }, []),
                                {
                                    canAdmin: a,
                                    isMultiplayer: s
                                } = (0, i(682985).K8)(() => {
                                    if (!l) return {
                                        canAdmin: !1,
                                        isMultiplayer: !1
                                    };
                                    let e = !!(0, i(471078).O)({
                                        environment: t,
                                        spaceId: l.id
                                    });
                                    return {
                                        canAdmin: l.canAdmin(),
                                        isMultiplayer: e
                                    }
                                }, [l, t]),
                                d = (0, i(682985).K8)(() => {
                                    var t;
                                    return (null == (t = i(728372).AppStoreSidebarSpaceViewStore.state) || null == (t = t.getSettings()) || null == (t = t.getting_started_page_ids) ? void 0 : t[0]) === e.id
                                }, [e]),
                                c = (0, i(682985).K8)(() => {
                                    var e;
                                    if (l) return null == (e = l.getSettings()) || null == (e = e.getting_started_templates) || null == (e = e.default) || null == (e = e[0]) ? void 0 : e.page_id
                                }, [l]),
                                u = c === e.id,
                                p = (0, i(682985).K8)(() => {
                                    var t;
                                    return null == (t = e.getSpaceStore()) || null == (t = t.getSetting("getting_started_template_errors")) ? void 0 : t[e.id]
                                }, [e]);
                            if ((0, o.useEffect)(() => {
                                    null != p && p.length && l && (0, i(920200).k)({
                                        environment: t,
                                        spaceStore: l
                                    }) && (0, i(356622).V)({
                                        environment: t,
                                        spaceStore: l,
                                        errors: []
                                    })
                                }, [p, t, l]), !r && a && n) {
                                if (d && s && void 0 === c) return {
                                    type: "own_page"
                                };
                                else if (u) return {
                                    type: "custom_page"
                                }
                            }
                        }(w),
                        td = (0, i(682985).K8)(() => i(218744).default.getConfigKey("collection_size_limits", "block_properties_max_size"), []),
                        tc = (0, i(682985).K8)(() => ({
                            is_asana_imported_project: w.getFormatStore().getKeyValue("is_asana_imported_project"),
                            is_asana_imported_task: w.getFormatStore().getKeyValue("is_asana_imported_task"),
                            dismissed_asana_import_banner: w.getFormatStore().getKeyValue("dismissed_asana_import_banner")
                        }), [w]);
                    (0, o.useEffect)(() => {
                        if (_ === i(166654).R.Frame) {
                            let e = ea(_);
                            null == tt || !tt.hasPublicPermission || "edit" !== tt.permission || tn || (0, i(470641).g)() ? n().zA({
                                bannerStore: e,
                                id: "EditingPageBanner"
                            }) : n().HQ({
                                bannerStore: e,
                                id: "EditingPageBanner",
                                contentKey: "editing_page",
                                styleKey: i(909595).q.White
                            })
                        }
                        if ((0, i(335818).Zz)(_)) {
                            let e = ea(_),
                                t = (0, i(214287).G)(w),
                                o = (0, i(977605).C)(w);
                            if ((0, i(573143).vW)(t)) n().HQ({
                                bannerStore: e,
                                id: "SpaceContentDuplicationPage",
                                contentKey: "space_content_duplication",
                                styleKey: i(909595).q.Red,
                                blockStore: w
                            });
                            else if (!te || eJ || es(w, K, E))
                                if (o) n().HQ({
                                    bannerStore: e,
                                    id: "ArchivedTeamPage",
                                    contentKey: "page_in_archived_team",
                                    styleKey: i(909595).q.Red
                                });
                                else if (tr) n().HQ({
                                bannerStore: e,
                                id: "ArchivedPage",
                                contentKey: "archived_page",
                                blockStore: w,
                                styleKey: i(909595).q.Yellow
                            });
                            else
                                for (let t of ["SpaceContentDuplicationPage", "DeletedPage", "ArchivedTeamPage", "ArchivedPage"]) n().zA({
                                    bannerStore: e,
                                    id: t
                                });
                            else n().HQ({
                                bannerStore: e,
                                id: "DeletedPage",
                                contentKey: "deleted_or_moved_page",
                                blockStore: w,
                                styleKey: i(909595).q.Red
                            });
                            if (e4 ? n().HQ({
                                    bannerStore: e,
                                    id: "DictationConnectionBanner",
                                    styleKey: i(909595).q.Yellow,
                                    contentKey: "dictation_connection",
                                    blockStore: w
                                }) : n().zA({
                                    bannerStore: e,
                                    id: "DictationConnectionBanner"
                                }), e7 ? n().HQ({
                                    bannerStore: e,
                                    id: "TranscriptionServiceUnavailableBanner",
                                    styleKey: i(909595).q.Yellow,
                                    contentKey: "transcription_service_unavailable",
                                    blockStore: w
                                }) : n().zA({
                                    bannerStore: e,
                                    id: "TranscriptionServiceUnavailableBanner"
                                }), e3 && (0, i(708929).Or)(e3) ? n().HQ({
                                    bannerStore: e,
                                    id: "TranslateBanner",
                                    styleKey: i(909595).q.Blue,
                                    contentKey: "translate",
                                    blockStore: w
                                }) : n().zA({
                                    bannerStore: e,
                                    id: "TranslateBanner"
                                }), eG && !(0, i(447036).cq)(w) ? n().HQ({
                                    bannerStore: e,
                                    id: "TrustedDomainPageBanner",
                                    styleKey: i(909595).q.LightGray,
                                    contentKey: "trusted_domain_page",
                                    blockStore: w
                                }) : n().zA({
                                    bannerStore: e,
                                    id: "TrustedDomainPageBanner"
                                }), to ? n().HQ({
                                    bannerStore: e,
                                    id: "CollectionTemplatePage",
                                    contentKey: "template_in_page",
                                    styleKey: i(909595).q.Beige,
                                    blockStore: to,
                                    context: _,
                                    disabled: T
                                }) : eO ? n().HQ({
                                    bannerStore: e,
                                    id: "CollectionTemplatePage",
                                    contentKey: "template_in_button",
                                    styleKey: i(909595).q.Beige,
                                    blockStore: w,
                                    context: _,
                                    disabled: T
                                }) : n().zA({
                                    bannerStore: e,
                                    id: "CollectionTemplatePage"
                                }), eH ? n().HQ({
                                    bannerStore: e,
                                    id: "AgentProfilePage",
                                    contentKey: "agent_profile_page",
                                    styleKey: i(909595).q.Purple,
                                    blockStore: w,
                                    context: _,
                                    disabled: T
                                }) : eN ? n().HQ({
                                    bannerStore: e,
                                    id: "DailyBriefPage",
                                    contentKey: "daily_brief_page",
                                    styleKey: i(909595).q.Purple,
                                    blockStore: w,
                                    context: _,
                                    disabled: T
                                }) : (n().zA({
                                    bannerStore: e,
                                    id: "AgentProfilePage"
                                }), n().zA({
                                    bannerStore: e,
                                    id: "DailyBriefPage"
                                })), eU && n().HQ({
                                    bannerStore: e,
                                    id: "CustomAgentInstructionsPage",
                                    contentKey: "custom_agent_instructions_page",
                                    styleKey: i(909595).q.Purple,
                                    blockStore: w,
                                    context: _,
                                    disabled: T
                                }), e1 ? n().HQ({
                                    bannerStore: e,
                                    id: "MeetingNotesInstructionPage",
                                    contentKey: "meeting_notes_instruction_page",
                                    styleKey: i(909595).q.Purple,
                                    blockStore: w
                                }) : n().zA({
                                    bannerStore: e,
                                    id: "MeetingNotesInstructionPage"
                                }), eY ? n().HQ({
                                    bannerStore: e,
                                    id: "PromptPage",
                                    contentKey: "prompt_page",
                                    styleKey: i(909595).q.Blue
                                }) : n().zA({
                                    bannerStore: e,
                                    id: "PromptPage"
                                }), (null != tc && tc.is_asana_imported_project || null != tc && tc.is_asana_imported_task) && (null != tc && tc.dismissed_asana_import_banner ? n().zA({
                                    bannerStore: e,
                                    id: "AsanaImporterBanner"
                                }) : n().HQ({
                                    bannerStore: e,
                                    id: "AsanaImporterBanner",
                                    contentKey: "asana_importer_banner",
                                    blockStore: w,
                                    styleKey: i(909595).q.ImportNotification
                                })), (null == ta ? void 0 : ta.type) === "sites" ? n().HQ({
                                    id: "Site",
                                    bannerStore: e,
                                    styleKey: i(909595).q.Blue,
                                    contentKey: "site",
                                    blockStore: w
                                }) : (null == ta ? void 0 : ta.type) === "marketplace_template" ? n().HQ({
                                    id: "MarketplaceTemplateBanner",
                                    bannerStore: e,
                                    styleKey: i(909595).q.Blue,
                                    contentKey: "marketplace_template",
                                    template: ta.template,
                                    blockStore: w
                                }) : (n().zA({
                                    bannerStore: e,
                                    id: "Site"
                                }), n().zA({
                                    bannerStore: e,
                                    id: "MarketplaceTemplateBanner"
                                })), (null == ts ? void 0 : ts.type) === "custom_page" ? n().HQ({
                                    id: "CustomGettingStartedPageBanner",
                                    bannerStore: e,
                                    styleKey: i(909595).q.LightGray,
                                    contentKey: "custom_getting_started_page_banner",
                                    blockStore: w
                                }) : (null == ts ? void 0 : ts.type) !== "own_page" || i(986939).A.isMobile ? (n().zA({
                                    bannerStore: e,
                                    id: "CustomGettingStartedPageBanner"
                                }), n().zA({
                                    bannerStore: e,
                                    id: "SetCustomGettingStartedPageBanner"
                                })) : n().HQ({
                                    id: "SetCustomGettingStartedPageBanner",
                                    bannerStore: e,
                                    styleKey: i(909595).q.LightGray,
                                    contentKey: "set_custom_getting_started_page_banner",
                                    blockStore: w
                                }), (0, i(335818).f1)(w) && eL) {
                                let t = eL.collectionStore();
                                if (!t) return;
                                if ((0, i(607689).fo)({
                                        collectionStore: t
                                    }) && (0, i(607689).z9)({
                                        collectionStore: t
                                    })) {
                                    let o = (0, i(645700).j)({
                                        collectionFormat: t.getFormat()
                                    });
                                    o.shouldShowBanner && n().HQ({
                                        bannerStore: e,
                                        id: o.bannerId,
                                        contentKey: o.contentKey,
                                        styleKey: o.styleKey,
                                        blockStore: w
                                    })
                                }
                            }
                            void 0 !== td && td > 0 && i(70391).xZ(w, K, td).then(t => {
                                if (t) {
                                    var o;
                                    i(773352).log({
                                        level: "info",
                                        type: "collectionLimitsBannerDisplayed",
                                        from: "PageViewBlock",
                                        data: {
                                            miscDataToConvertToString: {
                                                blockId: w.id,
                                                spaceId: w.getSpaceId(),
                                                collectionId: null == (o = w.getCollectionPointerIfSingleSource()) ? void 0 : o.id
                                            }
                                        }
                                    }), n().HQ({
                                        bannerStore: e,
                                        id: "PagePropertiesLimitExceededBanner",
                                        contentKey: "page_properties_limit_exceeded",
                                        styleKey: i(909595).q.Yellow
                                    })
                                }
                            }).catch(() => {})
                        }
                        return () => {
                            if ((0, i(335818).Zz)(_)) {
                                let e = ea(_);
                                ["DeletedPage", "CollectionTemplatePage", "AgentProfilePage", "CustomAgentInstructionsPage", "MeetingNotesInstructionPage", "PromptPage", "Site", "MarketplaceTemplateBanner", "CustomGettingStartedPageBanner", "SetCustomGettingStartedPageBanner", "CrdtPage", "TrustedDomainPageBanner", "TranslateBanner", "AsanaImporterBanner", "AuthMissingForJiraSyncedCollectionPageBanner", "JiraTwoWaySyncInfoBanner", "PagePropertiesLimitExceededBanner", "ArchivedPage"].forEach(t => {
                                    n().zA({
                                        bannerStore: e,
                                        id: t
                                    })
                                })
                            }
                        }
                    }, [K, tt, _, T, R, w, F, te, eJ, eO, null == tc ? void 0 : tc.is_asana_imported_project, null == tc ? void 0 : tc.is_asana_imported_task, null == tc ? void 0 : tc.dismissed_asana_import_banner, e3, e4, e7, eG, tn, tl, E, ta, ts, eL, td, eH, eN, eU, e1, eY, to, tr]);
                    let tu = (0, i(682985).K8)(() => i(256209).A.state.pageMap[w.id], [w.id]);
                    (0, o.useEffect)(() => {
                        if (_ === i(166654).R.Frame) {
                            let e = ea(_);
                            n().zA({
                                bannerStore: e,
                                id: "ImportingEvernotePage"
                            }), tu && n().HQ({
                                bannerStore: e,
                                id: "ImportingEvernotePage",
                                contentKey: "importing_evernote",
                                styleKey: i(909595).q.Blue,
                                blockStore: w
                            })
                        }
                        return () => {
                            _ === i(166654).R.Frame && n().zA({
                                bannerStore: ea(_),
                                id: "ImportingEvernotePage"
                            })
                        }
                    }, [_, w, tu]), (0, i(383953).w)(() => {
                        "suggest" === i(708929).Uv.getMode(w, !0) && i(718490).Nz({
                            environment: K,
                            location: "page_navigation",
                            navigableBlockStore: w
                        })
                    }), (0, i(537885).Bs)({
                        pageId: w.id,
                        isFrameContext: (0, i(335818).jN)(_)
                    }), (0, o.useEffect)(() => () => {
                        "suggest" === i(708929).Uv.getMode(w, !0) && i(718490).eB({
                            environment: K,
                            location: "page_navigation",
                            navigableBlockStore: w
                        })
                    }, [K, w]);
                    let tp = (0, i(682985).K8)(() => er(w), [w]),
                        tg = (0, i(682985).K8)(() => null == tp ? void 0 : tp.getParentBlockStore(), [tp]),
                        tm = (0, i(682985).K8)(() => null == eL ? void 0 : eL.collectionStore(), [eL]);
                    tp && tp !== tm && eL.setContext({
                        type: "collectionPage",
                        collectionViewBlockStore: tg,
                        collectionStore: tp
                    });
                    let tf = (0, o.useCallback)(() => {
                            eh || i(400198).A.state.isDragging || i(818955).default.state.isActive || eI(!0)
                        }, [eh]),
                        th = (0, o.useCallback)(() => {
                            eh || i(400198).A.state.isDragging || i(818955).default.state.isActive || eI(!1)
                        }, [eh]),
                        tS = (0, o.useCallback)(() => {
                            i(400198).A.state.isDragging || i(818955).default.state.isActive || eM(!0)
                        }, []),
                        ty = (0, o.useCallback)(() => {
                            i(400198).A.state.isDragging || i(818955).default.state.isActive || eM(!1)
                        }, []),
                        tv = (0, i(825154).d)(tS, 100),
                        tb = (0, i(825154).d)(ty, 100),
                        tx = (0, o.useCallback)(e => {
                            eF && ((0, i(182553).h)({
                                environment: K,
                                store: w
                            }), e.isAtStartOfLine ? (0, i(940763).e)({
                                store: eF
                            }) : (0, i(739204).z)({
                                store: eF
                            }))
                        }, [K, w, eF]),
                        tk = (0, o.useCallback)(e => {
                            (0, i(525779).clear)({
                                environment: K
                            }), (0, i(471e3).I)({
                                environment: K
                            }), P && P(e)
                        }, [K, P]),
                        tC = (0, o.useCallback)(e => {
                            if (Y) return !0;
                            if (e.preventDefault(), er(w)) {
                                let e = (0, i(335818).gV)(w);
                                if (e && e.collection_page_properties) {
                                    let t = e.collection_page_properties.find((e, t) => (function(e, t) {
                                        if (!er(t)) return !1;
                                        let o = t.getSchema();
                                        return (0, i(793550).B2)(o[e])
                                    })(e.property, w));
                                    t && i(374176).default.afterNextFlush(() => {
                                        var e;
                                        i(576186).ho({
                                            environment: K,
                                            blockPropertyValueOverlayStore: (e = _, (0, i(335818).L5)(e) ? i(129894).A : i(363746).A),
                                            collectionContextStore: eL,
                                            store: w,
                                            property: t.property,
                                            surface: "page"
                                        })
                                    })
                                }
                            }
                        }, [eL, _, K, Y, w]),
                        tw = (0, o.useCallback)(e => {
                            if (Y) return !0;
                            tk(e)
                        }, [tk, Y]),
                        t_ = (0, o.useCallback)(() => {
                            ex.reset()
                        }, [ex]),
                        tI = (0, o.useCallback)(e => {
                            e.target === eV.current && null === e.relatedTarget && document.hasFocus() && (0, i(471e3).I)({
                                environment: K
                            })
                        }, [K]),
                        tP = (0, i(682985).K8)(() => ed((0, i(424332).dC)(K, w), w, _, E), [K, w, _, E]),
                        tM = (0, i(682985).K8)(() => {
                            if (_ === i(166654).R.DraftPostInInlineComposer) return i(166654).R.DraftPostInInlineComposer;
                            if (w.isTeamPost()) {
                                if (w.isPublishedDraft()) return i(166654).R.PostInFullPageOrPeek;
                                if (tl) return i(166654).R.DraftPostInFullPageComposer
                            }
                        }, [w, _, tl]),
                        tA = (0, i(935817).sS)({
                            pageStore: w,
                            postContext: tM,
                            collectionStore: tp,
                            pageViewBlockStore: ew.pageViewBlockStore
                        }),
                        tj = (0, i(682985).K8)(() => i(475097).default.state.topHoverAreaEntered, []),
                        tB = (0, o.useCallback)(e => {
                            let {
                                isBottomControl: t,
                                forceVisible: o
                            } = e ? ? {}, n = eh ? tj : e_;
                            return eu(!!i(986939).A.isMobile || !!o || !!eC || (t ? eP && !i(200083).A.state.isKeyboardMode : n && !i(200083).A.state.isKeyboardMode || ef))
                        }, [eP, ef, e_, eh, tj, eC]),
                        tT = (0, i(682985).K8)(() => tB({
                            isBottomControl: !1
                        }), [tB]),
                        tK = (0, i(682985).K8)(() => "suggest" === i(708929).Uv.getMode(w), [w]),
                        tV = (0, i(682985).K8)(() => (0, i(843641).$3)({
                            environment: K,
                            collectionStore: w.getAssociatedCollectionStore()
                        }), [K, w]),
                        tE = (0, i(682985).K8)(() => (0, i(843641).Wk)({
                            blockStore: w,
                            showUpsell: tV
                        }), [w, tV]),
                        tR = (0, i(622465).X)({
                            environment: K,
                            blockStore: w,
                            from: "topControls",
                            blockContext: _
                        }),
                        tL = (0, o.useCallback)(({
                            from: e
                        }) => {
                            if (Y) return;
                            let t = er(w);
                            t && (0, i(41500).nh)({
                                environment: K,
                                blockStore: w,
                                collectionStore: t,
                                from: e
                            })
                        }, [K, Y, w]),
                        tD = (0, o.useMemo)(() => {
                            if (A || eX) return [];
                            let e = [];
                            return !W || eZ || tK || e.push((0, a.jsx)(o.Fragment, {
                                children: (0, a.jsx)(i(261428).A, {
                                    store: w,
                                    afterOnClick: () => {
                                        eD.current = !0
                                    },
                                    style: tT,
                                    label: E.isSmallPhone ? (0, a.jsx)(i(109939).sA, {
                                        id: "PageViewBlock.icon.pageIconMobile",
                                        defaultMessage: "Icon"
                                    }) : (0, a.jsx)(i(109939).sA, {
                                        id: "PageViewBlock.icon.pageIcon",
                                        defaultMessage: "Add icon"
                                    })
                                })
                            }, "add-icon")), !N || !W || e0 || tK || tM || e.push((0, a.jsx)(o.Fragment, {
                                children: (0, a.jsx)(i(204729).A, {
                                    store: w,
                                    style: tT,
                                    label: E.isSmallPhone ? (0, a.jsx)(i(109939).sA, {
                                        id: "PageViewBlock.cover.pageCoverMobile",
                                        defaultMessage: "Cover"
                                    }) : (0, a.jsx)(i(109939).sA, {
                                        id: "PageViewBlock.cover.pageCover",
                                        defaultMessage: "Add cover"
                                    }),
                                    from: "page_header"
                                })
                            }, "add-cover")), tE && e.push((0, a.jsx)(o.Fragment, {
                                children: (0, a.jsx)(i(509364).ui, {
                                    store: w,
                                    style: tT,
                                    showUpsell: tV
                                })
                            }, "verify-page")), tR && !tM && e.push((0, a.jsx)(S, {
                                blockStore: w,
                                onClick: () => tL({
                                    from: "customize_page_button_above_title"
                                }),
                                style: tT
                            }, "customize-layout")), W && !i(986939).A.isMobile && e.push((0, a.jsx)(o.Fragment, {
                                children: (0, a.jsx)(H, {
                                    store: w
                                })
                            }, "generate-preview-image")), e
                        }, [A, eX, W, eZ, tK, N, e0, tM, tE, tR, E.isSmallPhone, w, tT, tV, tL]),
                        tF = (0, i(682985).K8)(() => (0, i(334120).E)(w, K), [w, K]),
                        tO = (0, i(682985).K8)(() => {
                            let {
                                WindowSizeStore: e
                            } = K, t = (null == M ? void 0 : M.paddingX) ? ? (0, i(335818).OU)(_, K);
                            return {
                                paddingLeft: (0, i(616844).Y5)("left", t),
                                paddingRight: (0, i(616844).Y5)("right", t),
                                proxyWidth: e.state.width
                            }
                        }, [K, null == M ? void 0 : M.paddingX, _]),
                        tz = (0, i(682985).K8)(() => {
                            let e, t = K.currentUser.isLoggedIn(),
                                o = null == R ? void 0 : R.publicEditModeStore.state;
                            return _ === i(166654).R.Frame ? e = i(728372).default.state.currentLoadingContainerStore : _ === i(166654).R.PeekView && i(475097).default.state.open && (e = i(475097).default.state.loadingContainerStore), !!(w && e && w.isDefined() && !(0, i(444285).S)(w) && w.canEdit() && !w.hasContent() && t && (!(null != o && o.hasPublicPermission) || (null == o ? void 0 : o.permission) === "edit") && !(i(4929).A.state.pageMap[w.id] || i(566276).A.state.pages.has(w.id)) && e.state.ready && !(0, i(335818).sV)(w) && !(0, i(335818).fc)(w))
                        }, [K.currentUser, null == R ? void 0 : R.publicEditModeStore, w, _]),
                        tW = (0, o.useMemo)(() => ({
                            store: w,
                            isEditable: W,
                            hasCover: e0,
                            isInSidePeek: eS,
                            openMenuOnMountCallback: () => {
                                eD.current = !1
                            }
                        }), [e0, W, eS, w]),
                        tH = (0, i(682985).K8)(() => !!w.getAssociatedCollectionStore(), [w]),
                        tN = E.isPhone && !tH && !Y,
                        tU = (0, i(682985).K8)(() => {
                            var t;
                            let o = (null == (t = e.styleOverrides) ? void 0 : t.paddingX) ? ? (0, i(335818).OU)(_, K),
                                n = e.titlePlaceholder;
                            return tN && (n = ""), {
                                store: w,
                                disabled: !1,
                                isInSidePeek: eS,
                                paddingLeft: o,
                                paddingRight: o,
                                extraStyles: e.titleStyle,
                                titlePlaceholder: n,
                                collectionContextStore: eL,
                                shouldShowTemplatePicker: tz,
                                onTitleChange: t_,
                                onTitleEditText: tx,
                                onTitleEsc: tk,
                                onTitleUntab: tw,
                                onTitleTab: tC
                            }
                        }, [null == (l = e.styleOverrides) ? void 0 : l.paddingX, e.titleStyle, e.titlePlaceholder, _, K, w, eL, tz, t_, tx, tk, tw, tC, eS, tN]),
                        tq = (0, o.useCallback)(e => {
                            "page" === e && i(266130).measurePageRenderMetrics({
                                environment: K,
                                isEditable: W,
                                isHomePage: !1,
                                isWikiHome: !0,
                                isPageWithCustomLayout: !1,
                                idSchema: Q
                            })
                        }, [K, W, Q]),
                        tY = (0, i(682985).K8)(() => {
                            let e = w.getAssociatedLayoutStore(),
                                t = (0, i(191844).I)(e),
                                o = "hidden" === (0, i(125824).A)({
                                    environment: K,
                                    store: w,
                                    pageViewBlockStore: void 0
                                }).type;
                            return _ !== i(166654).R.DraftPostInInlineComposer && _ !== i(166654).R.WorkflowInstructionsInInlineComposer && (!t || o)
                        }, [_, w, K]),
                        tQ = (0, i(682985).K8)(() => !!(eL && eL.contextTypeFromStoreState), [eL]),
                        tG = (0, o.useMemo)(() => {
                            var t, o;
                            let n = (0, a.jsx)(i(406245).X.Provider, {
                                value: en,
                                children: (0, a.jsx)(i(654979).A, {
                                    tag: i(394112).Mx,
                                    animate: eg.layout,
                                    type: tP,
                                    withBottomPadding: tY,
                                    ref: eK,
                                    children: (0, a.jsx)(O, {
                                        context: _,
                                        postContext: tM,
                                        onHeaderMouseEnter: tf,
                                        onHeaderMouseLeave: th,
                                        onDetailMouseEnter: tv,
                                        onDetailMouseLeave: tb,
                                        pageCoverHeight: (null == (t = e.styleOverrides) ? void 0 : t.pageCoverHeight) ? ? eo,
                                        modules: (null == (o = e.layoutModulesByArea) ? void 0 : o.page_main) ? ? tA.page_main,
                                        styleOverrides: e.styleOverrides,
                                        templatePickerMenuListStore: ew.templatePickerMenuListStore,
                                        topControls: tD,
                                        getControlHoverStyle: tB,
                                        pageViewBlockStores: ew,
                                        isHeaderHovered: eh ? tj : e_,
                                        ...tW,
                                        openMenuOnMount: eD.current,
                                        ...tU,
                                        disabled: T,
                                        pageViewBlockAccessor: eR,
                                        editorContentContainerRef: eT,
                                        layoutRef: eK
                                    })
                                })
                            });
                            return tQ ? (0, a.jsx)(i(713311).RI, {
                                value: eL,
                                children: n
                            }) : n
                        }, [en, eg.layout, tP, _, tM, tf, th, tv, tb, e.styleOverrides, null == (s = e.layoutModulesByArea) ? void 0 : s.page_main, tA.page_main, ew, tD, tB, e_, tj, eh, tW, tU, T, eR, tQ, eL, tY]),
                        tX = G === i(955630).xd.copyIndicator,
                        t$ = (0, i(682985).K8)(() => {
                            var e;
                            return !!tX && ((null == (e = w.getFormatStore().getKeyValue("duplication_job_ids")) ? void 0 : e.length) || 0) > 0
                        }, [w, tX]),
                        tJ = (0, i(682985).K8)(() => !!tX && (w.getParentTable() !== i(832375).VlP || w.getParentTable() === i(832375).VlP && 0 === Object.keys(w.getProperties()).length), [w, tX]),
                        tZ = (0, i(682985).K8)(() => i(137933).A.state.isDuplicating, []),
                        t0 = (0, i(682985).K8)(() => !F || (0, i(444285).S)(w), [F, w]),
                        t8 = (0, o.useMemo)(() => {
                            if (tX && t$) return (0, a.jsx)(i(866147).R, {
                                store: w,
                                peekMode: void 0,
                                forceShowIcon: !0
                            });
                            if (tX && tJ) return (0, a.jsx)(v, {});
                            if (tZ) return (0, a.jsx)(i(866147).R, {
                                store: w,
                                peekMode: void 0,
                                forceShowIcon: !0
                            });
                            if (Y) {
                                let e = (0, a.jsx)(i(385827).s, {
                                    allowSelectionWithin: !1,
                                    style: tF,
                                    children: (0, a.jsx)(i(15021).d, {
                                        height: "20vh",
                                        store: w,
                                        disabled: !W,
                                        paddingLeft: tO.paddingLeft,
                                        paddingRight: tO.paddingRight,
                                        proxyWidth: tO.proxyWidth
                                    })
                                });
                                return (0, a.jsx)(i(713311).RI, {
                                    value: eL,
                                    children: (0, a.jsx)(u, {
                                        canEdit: F,
                                        context: i(166654).R.CollectionViewBlockFullScreen,
                                        controlHoverStyle: tT,
                                        handleHeaderMouseEnter: tf,
                                        handleHeaderMouseLeave: th,
                                        headerFocusStore: ew.headerFocusStore,
                                        pageCover: e,
                                        topControls: tD,
                                        ...tW,
                                        openMenuOnMount: eD.current,
                                        ...tU,
                                        store: w,
                                        productUseCase: ee,
                                        onCollectionViewBlockMount: tq,
                                        editorContentContainerRef: eT,
                                        pageViewBlockStore: ey,
                                        disabled: T
                                    })
                                })
                            }
                            return eJ ? (0, a.jsx)(i(266683).e, {
                                renderLoading: () => (0, a.jsx)(i(866147).R, {
                                    store: w,
                                    peekMode: void 0
                                }),
                                innerRenderLoading: () => (0, a.jsx)(i(866147).R, {
                                    store: w,
                                    peekMode: void 0
                                }),
                                store: w
                            }) : X ? (0, a.jsx)(i(178801).eN, {
                                store: w
                            }) : J ? (0, a.jsx)(U, {
                                store: w
                            }) : (0, a.jsx)(i(744628).c, {
                                displayName: "PageContent",
                                style: { ...Z,
                                    ...e.style
                                },
                                disabled: t0,
                                onBlur: tI,
                                shouldSelectOnEnter: el,
                                "aria-roledescription": L.formatMessage({
                                    id: "pageViewBlock.editor.roledescription",
                                    defaultMessage: "editor"
                                }),
                                ...D,
                                ref: eV,
                                children: (0, a.jsx)(i(28111).A, {
                                    name: "PageContent",
                                    children: tG
                                })
                            })
                        }, [w, tX, t$, tJ, tZ, Y, eJ, X, J, t0, e.style, tI, tG, eL, F, tT, tf, th, ew.headerFocusStore, tD, tW, tU, tq, ey, tF, tO, W, T, ee, D, L]),
                        t9 = (0, a.jsxs)(a.Fragment, {
                            children: [ei ? (0, a.jsx)(r, {
                                pageStore: w
                            }) : null, t8]
                        });
                    return (0, i(705155).N)({
                        store: w,
                        forwardedRef: t,
                        blockRefObject: (0, o.useMemo)(() => ({
                            store: w,
                            blockContext: _,
                            openResolvedDiscussionPopup: eA,
                            getContentInnerWidth: eB,
                            getContentWrapEl: eE,
                            getLayoutEl: eR,
                            ...ew,
                            renderedType: "page",
                            getBlockStore: () => w,
                            getNode: () => eV.current
                        }), [w, _, eB, eE, eR, eA, ew]),
                        contents: t9
                    })
                }), i(795676).A),
                eo = i(986939).A.isMobile ? 200 : "30vh";

            function en(e, t = 0) {
                return e.isTablet ? 380 : e.isIOS ? Math.max(350, t) : i(986939).A.isMobile ? 400 : "30vh"
            }

            function el() {
                return 0 === i(584265).default.state.stores.length
            }

            function er(e) {
                return e.getAssociatedCollectionStore()
            }

            function ea(e) {
                return (0, i(335818).L5)(e) ? i(731810).A : (0, i(335818).jN)(e) ? i(465361).A : (0, i(722371).HB)(e)
            }

            function es(e, t, i) {
                let {
                    RouterStore: o
                } = t, {
                    route: n
                } = o.state;
                return i.isMobileNative && "page" === n.name && n.showMoveTo && e.isEmptyTitle() && e.isEmptyPage()
            }

            function ed(e, t, o, n) {
                return o === i(166654).R.DraftPostInInlineComposer || o === i(166654).R.WorkflowInstructionsInInlineComposer ? "create-post" : n.isPhone ? "phone" : n.isTablet ? (0, i(335818).Ck)(t, o, n) ? "wide" : "tablet" : (0, i(335818).L5)(o) ? (0, i(335818).mb)(t) ? "side-peek" : "center-peek" : (0, i(335818).A7)(o) || (0, i(335818).Vi)(o) ? "template-preview" : (0, i(335818).sL)(o) ? (0, i(335818).Ck)(t, o, n) ? "wide" : "default" : (0, i(335818).Ck)(t, o, n) ? e ? "wide-right-margin-expanded" : "wide" : "default"
            }

            function ec(e, t) {
                return 28 + (0, i(335818).XD)(e)
            }

            function eu(e) {
                return {
                    opacity: +!!e,
                    pointerEvents: e ? "auto" : "none",
                    transition: "opacity 100ms ease"
                }
            }
            async function ep(e) {
                let {
                    environment: t,
                    shouldUseEdgeCache: o,
                    pageContext: n
                } = e;
                o || i(498368).Ay.state.emptyQueryUserRequestStore.setState({ ...i(498368).Ay.state.emptyQueryUserRequestStore.state,
                    ready: !1,
                    loading: !0
                }), await i(728372).default.waitUntil(() => !!((0, i(888).$)(n) && i(728372).AppStoreMainEditorCurrentBlockStore.state));
                let l = await i(308825).T.searchActions.load(),
                    r = await l.searchVisibleSpaceUsers({
                        environment: t,
                        query: "",
                        membersOnly: !1,
                        minFuzzyScore: 25,
                        placeSelfFirst: !1
                    });
                o || i(498368).Ay.state.emptyQueryUserRequestStore.setState({
                    ready: !0,
                    loading: !1,
                    result: r
                })
            }

            function eg() {
                if (!i(475097).default.isSidePeekOpen() && !i(475097).default.isCenterPeekOpen()) return !1;
                let e = i(728372).AppStoreMainEditorCurrentBlockStore.state;
                return (0, i(933062).lU)(e)
            }
        },
        866147: (e, t, i) => {
            i.d(t, {
                A: () => r,
                R: () => l
            }), i(296540);
            var o = i(474848);
            let n = {
                collectionCoverPhoto: {
                    width: "100%",
                    height: "20vh"
                },
                collectionIcon: {
                    flexGrow: 0,
                    flexShrink: 0,
                    width: 36,
                    height: 36,
                    borderRadius: 6,
                    marginInlineEnd: 10,
                    marginInlineStart: 3
                },
                collectionTitle: {
                    height: i(986939).A.isMobile ? 24 : 30,
                    width: 600,
                    marginTop: i(986939).A.isMobile ? 6 : 3,
                    borderRadius: 15
                },
                pageTitle: {
                    marginTop: 3 * !!i(986939).A.isMobile,
                    height: i(986939).A.isMobile ? 24 : 30,
                    width: 600,
                    borderRadius: 15
                }
            };

            function l({
                store: e,
                peekMode: t,
                forceShowIcon: r
            }) {
                let a = (0, i(682985).K8)(() => !!e.getCover(), [e]),
                    s = (0, i(682985).K8)(() => !!e.getIcon(), [e]) || r,
                    d = (0, i(682985).K8)(() => e.isCollectionView(), [e]),
                    c = (0, i(682985).K8)(() => e.isFullWidth(), [e]),
                    u = t === i(387722).O ? "20vh" : i(865594).mv,
                    p = (0, i(960253).I)(() => {
                        let e = i(986939).A.isMobile ? 24 : t === i(387722).A ? 48 : 96,
                            o = (() => {
                                switch (!0) {
                                    case i(986939).A.isMobile:
                                        return 32;
                                    case s:
                                        return 96;
                                    case t === i(387722).O && !s:
                                        return 54;
                                    case !s:
                                        return 102
                                }
                            })(),
                            n = (() => {
                                switch (!0) {
                                    case i(986939).A.isMobile && a && s:
                                        return 22;
                                    case i(986939).A.isMobile && a && !s:
                                        return 54;
                                    case i(986939).A.isMobile && !a && s:
                                        return 56;
                                    case i(986939).A.isMobile && !a && !s:
                                        return 4;
                                    case !i(986939).A.isMobile && a && s:
                                        return 50;
                                    case !i(986939).A.isMobile && a && !s:
                                        return 58;
                                    case !i(986939).A.isMobile && !a && s:
                                        return 92;
                                    case !i(986939).A.isMobile && !a && !s:
                                        return 20
                                }
                            })();
                        return {
                            collectionTitleContainer: {
                                display: "flex",
                                alignItems: "center",
                                paddingInlineStart: e,
                                paddingInlineEnd: e,
                                width: "100%",
                                paddingTop: (() => {
                                    switch (!0) {
                                        case i(986939).A.isMobile && a:
                                            return 50;
                                        case i(986939).A.isMobile && !a:
                                            return 78;
                                        case !i(986939).A.isMobile && a:
                                            return 48;
                                        case !i(986939).A.isMobile && !a:
                                            return 36
                                    }
                                })()
                            },
                            pageCoverPhoto: {
                                width: "100%",
                                height: u
                            },
                            pageCoverPadding: {
                                width: "100%",
                                height: o
                            },
                            pageIconContainer: {
                                maxWidth: "100%",
                                boxSizing: "border-box",
                                paddingInlineStart: e,
                                paddingInlineEnd: e,
                                width: c ? "100%" : 900,
                                height: 36
                            },
                            pageIcon: {
                                position: "relative",
                                top: a ? -42 : 0,
                                width: 78,
                                height: 78,
                                marginInlineStart: 2,
                                borderRadius: 16
                            },
                            pageTitleContainer: {
                                display: "flex",
                                boxSizing: "border-box",
                                paddingInlineStart: e,
                                paddingInlineEnd: e,
                                width: c ? "100%" : 900,
                                maxWidth: "100%",
                                paddingTop: n
                            }
                        }
                    }, [c, a, s, u, t]);
                return d || t === i(387722).A ? (0, o.jsxs)(o.Fragment, {
                    children: [a ? (0, o.jsx)(i(795830).P, {
                        style: n.collectionCoverPhoto
                    }) : void 0, (0, o.jsxs)("div", {
                        style: p.collectionTitleContainer,
                        children: [s ? (0, o.jsx)(i(795830).P, {
                            emphasized: !0,
                            style: n.collectionIcon
                        }) : void 0, (0, o.jsx)(i(795830).P, {
                            style: n.collectionTitle
                        })]
                    })]
                }) : (0, o.jsxs)(o.Fragment, {
                    children: [a ? (0, o.jsx)(i(795830).P, {
                        style: p.pageCoverPhoto
                    }) : (0, o.jsx)("div", {
                        style: p.pageCoverPadding
                    }), s ? (0, o.jsx)("div", {
                        style: p.pageIconContainer,
                        children: (0, o.jsx)(i(795830).P, {
                            emphasized: !0,
                            style: p.pageIcon
                        })
                    }) : void 0, (0, o.jsx)("div", {
                        style: p.pageTitleContainer,
                        children: (0, o.jsx)(i(795830).P, {
                            style: n.pageTitle
                        })
                    })]
                })
            }

            function r({
                isVisible: e,
                peekMode: t,
                store: n
            }) {
                let a = (0, i(533992).Y0)(),
                    s = (0, i(109939).tz)(),
                    d = a.isPhone,
                    c = a.isMobileNative,
                    u = i(801113).ek(a.isElectronMac),
                    p = t === i(387722).O || t === i(387722).A || d ? u : 0,
                    g = (0, i(960253).I)(() => ({
                        root: {
                            position: "absolute",
                            top: (0, i(616844).Y5)("top", p),
                            bottom: (0, i(616844).Y5)("bottom"),
                            insetInlineStart: (0, i(616844).Y5)("left"),
                            insetInlineEnd: (0, i(616844).Y5)("right"),
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            pointerEvents: "none"
                        }
                    }), [p]);
                return (0, i(934877).A)({
                    visibility: e,
                    delayShow: 10 * !c,
                    delayHold: 0
                }) ? (0, o.jsx)("div", {
                    role: "progressbar",
                    "aria-valuetext": s.formatMessage({
                        id: "frameLoadingState.loading",
                        defaultMessage: "Loading..."
                    }),
                    style: g.root,
                    children: (0, o.jsx)(l, {
                        store: n,
                        peekMode: t
                    })
                }, "shimmer") : null
            }
        },
        897822: (e, t, i) => {
            i.d(t, {
                n: () => o
            });

            function o() {
                return i(272755).g.state.isOpen
            }
        },
        913257: (e, t, i) => {
            i.d(t, {
                o: () => n
            });
            var o = i(296540);

            function n(e) {
                let t = (0, i(533992).v3)(),
                    n = (0, i(682985).K8)(() => {
                        let e = (0, i(500880).Xz)(t.TabbedRouterStore.state);
                        if ("web" === e.type) {
                            var o, n;
                            if ((null == (o = e.redirectedTo) ? void 0 : o.route.name) === "page") return null == (n = e.redirectedTo) ? void 0 : n.route.blockId;
                            if ("page" === e.route.name) return e.route.blockId
                        }
                    }, [t]),
                    [l, r] = (0, o.useState)("");
                (0, o.useEffect)(() => {
                    r(e)
                }, [e]);
                let a = (0, o.useRef)(void 0);
                (0, o.useEffect)(() => {
                    if (t.mobileNative && l === n) {
                        let e = n !== a.current;
                        t.mobileNative.markTransitionReady({
                            environment: t,
                            type: "page",
                            id: n,
                            sendImmediately: !0,
                            isNavigationEvent: e
                        }), a.current = n
                    }
                }, [t, n, l])
            }
        },
        919332: (e, t, i) => {
            i.d(t, {
                I: () => o
            });
            async function o(e) {
                let {
                    environment: t,
                    discussionStore: o,
                    rect: n,
                    blockStore: l,
                    discussionLocation: r,
                    activityId: a,
                    notificationId: s
                } = e, d = new(i(478597)).A(t, (0, i(226221).e)(l.pointer.spaceId));
                i(266960).A.setState({
                    open: !0,
                    rect: n,
                    discussionStore: o,
                    discussionInputStore: d,
                    blockStore: l,
                    discussionLocation: r,
                    activityId: a,
                    notificationId: s
                }), (0, i(471e3).I)({
                    environment: t
                }), await i(374176).default.afterNextFlush(), "feed_item_top_level_discussion" !== r && (await (0, i(975162).wR)(10), (0, i(739204).z)({
                    store: d.state.textStore
                })), i(65255).nq({
                    environment: t,
                    from: r,
                    activityId: a,
                    notificationId: s
                })
            }
        },
        920200: (e, t, i) => {
            i.d(t, {
                k: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    spaceStore: o
                } = e, n = o && (0, i(274749).i)(o);
                if (!n) return;
                let l = new(i(970831)).B(t, {
                    table: "block",
                    id: n
                });
                return (0, i(329171).n)(l)
            }
        },
        923007: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => o,
                infoCircleFillIcon: () => n
            }), i(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M8.65 8.25a.625.625 0 1 0 0 1.25h.725v3.25H8.65a.625.625 0 1 0 0 1.25h2.7a.625.625 0 1 0 0-1.25h-.725V8.875A.625.625 0 0 0 10 8.25zM10.7 6.3a.8.8 0 1 0-1.6 0 .8.8 0 0 0 1.6 0"
                    })
                },
                n = (0, i(104509).wt)("infoCircleFill", o, "fill")
        },
        926524: (e, t, i) => {
            i.d(t, {
                o: () => o
            });

            function o(e, t) {
                let o = (0, i(682985).K8)(() => (0, i(191844).I)(e.getAssociatedLayoutStore()), [e]),
                    n = (0, i(682985).K8)(() => {
                        var t;
                        let o = null == (t = e.getAssociatedCollectionStore()) ? void 0 : t.getFormat();
                        return "section_hide" !== (0, i(613968).z5)(null == o ? void 0 : o.page_section_visibility)
                    }, [e]),
                    l = (0, i(668734).M)(t),
                    r = (0, i(682985).K8)(() => (0, i(966980).oC)(e, {}), [e]),
                    a = (0, i(682985).K8)(() => e.canComment(), [e]);
                return o && n && !l && (r > 0 || a)
            }
        },
        931482: (e, t, i) => {
            i.d(t, {
                S: () => l
            });
            var o = i(296540);
            let n = new(i(971781)).Y(e => new(i(422526)).A);

            function l({
                store: e,
                environment: t,
                postContext: r
            }) {
                let {
                    pageVisitStore: a,
                    presenceStore: s
                } = (0, o.useMemo)(() => ({
                    pageVisitStore: n.get(e),
                    presenceStore: new(i(343455)).A
                }), [e]);
                return (0, o.useEffect)(() => {
                    r && (r === i(166654).R.PostInFullPageOrPeek || r === i(166654).R.PageInFeed) && (e.id !== a.state.pageId && a.setState({ ...a.getInitialState(),
                        pageId: e.id
                    }), i(469589).updatePageVisits(t, {
                        blockStore: e,
                        pageVisitStore: a,
                        incremental: !1,
                        includeTotalCount: !0
                    }))
                }, [e, a, t, s, r]), {
                    pageVisitStore: a,
                    presenceStore: s
                }
            }
        },
        935817: (e, t, i) => {
            i.d(t, {
                Qf: () => r,
                sS: () => n,
                ub: () => l
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(672577), i(737550);
            var o = i(296540);

            function n(e) {
                let {
                    pageStore: t,
                    pageViewBlockStore: n,
                    postContext: r,
                    collectionStore: a,
                    collectionSchema: s
                } = e, {
                    collectionStore: d,
                    collectionFormat: c,
                    collectionSchema: u,
                    canConfigureCollection: p
                } = (0, i(682985).K8)(() => {
                    let e = a || (null == t ? void 0 : t.getAssociatedCollectionStore()),
                        o = s || (null == e ? void 0 : e.getSchema()),
                        n = null == e ? void 0 : e.getFormat(),
                        l = e && (0, i(261105).v)({
                            collectionStore: e,
                            collectionViewBlockStore: e.getParentBlockStore(),
                            checkNavigableAncestorLocked: !1
                        });
                    return {
                        collectionStore: e,
                        collectionSchema: o,
                        collectionFormat: n,
                        canConfigureCollection: l
                    }
                }, [t, a, s]), g = (0, i(533992).v3)(), m = (0, i(682985).K8)(() => {
                    var e;
                    return null == (e = (0, i(125824).A)({
                        environment: g,
                        store: t,
                        pageViewBlockStore: n
                    })) ? void 0 : e.type
                }, [g, t, n]), f = l({
                    collectionFormat: c,
                    collectionSchema: u,
                    layoutStore: (0, i(682985).K8)(() => null == d ? void 0 : d.getLayoutStore(), [d]),
                    postContext: r,
                    pageStoreId: null == t ? void 0 : t.id,
                    pageStore: t
                }), h = (0, i(682985).K8)(() => {
                    let e = f.page_main.some(e => (0, i(11287).i_)(e)) || f.page_details.some(e => (0, i(11287).i_)(e));
                    return !!d && !!e && (0, i(209046).cu)({
                        modulesByArea: f,
                        collectionStore: d
                    })
                }, [f, d]), S = (0, o.useMemo)(() => {
                    let e = new Set;
                    return d && (p || !h) || e.add("properties"), "hidden" === m && e.add("discussions"), e
                }, [p, d, m, h]);
                return (0, o.useMemo)(() => 0 === S.size ? f : (0, i(977862).KO)(f, e => !S.has(e.type)), [f, S])
            }

            function l(e) {
                let {
                    layoutStore: t,
                    collectionSchema: n,
                    collectionFormat: l,
                    postContext: r,
                    pageStoreId: s,
                    pageStore: d
                } = e, c = (0, i(533992).v3)(), u = (0, o.useRef)(s), p = (0, o.useRef)(null), g = (0, i(682985).K8)(() => {
                    var e;
                    return null == d || null == (e = d.getSpaceStore()) ? void 0 : e.id
                }, [d]), m = (0, i(794532).b)({
                    environment: c,
                    spaceId: g
                });
                return (0, i(682985).K8)(() => {
                    var e;
                    if (r === i(166654).R.DraftPostInInlineComposer) return i(200394).wC;
                    if (null != d && d.isPersonProfile()) return a({
                        personProfileStore: d,
                        isMultiplayerWorkspace: m ? ? !0
                    });
                    if ((0, i(335818).Mi)(r)) {
                        let e = (0, i(333042).aG)(n, "created_time"),
                            t = (0, i(333042).aG)(n, "created_by"),
                            o = [];
                        return t && o.push(t), e && o.push(e), { ...i(200394)._u,
                            page_main: [{ ...i(200394)._u.page_main[0],
                                propertyIds: o
                            }, ...i(200394)._u.page_main.slice(1)]
                        }
                    }
                    let o = null == t ? void 0 : t.getModules(),
                        c = s && o && s === u.current && 0 === o.page_main.length && (null == (e = p.current) ? void 0 : e.page_main.find(e => "editor" === e.type));
                    return (!o || c) && (o = (0, i(200394).xN)({
                        collectionSchema: n,
                        collectionFormat: l
                    })), u.current = s, p.current = o, o
                }, [r, d, t, s, m, n, l], {
                    equalityFn: i(381453).n4
                })
            }

            function r(e) {
                let {
                    personProfileStore: t
                } = e, o = (0, i(533992).v3)(), n = (0, i(682985).K8)(() => {
                    var e;
                    return null == (e = t.getSpaceStore()) ? void 0 : e.id
                }, [t]), l = (0, i(794532).b)({
                    environment: o,
                    spaceId: n
                });
                return (0, i(682985).K8)(() => a({
                    personProfileStore: t,
                    isMultiplayerWorkspace: l ? ? !0
                }), [t, l], {
                    equalityFn: i(381453).n4
                })
            }

            function a(e) {
                var t;
                let {
                    personProfileStore: o,
                    isMultiplayerWorkspace: n
                } = e, l = o.getAssociatedCollectionStore(), r = !!(null == (t = o.getSpaceStore()) ? void 0 : t.getSetting("hide_people_activity"));
                if (!l) return (0, i(200394).E1)({
                    isMultiplayerWorkspace: n,
                    isActivityHidden: r
                });
                let a = l.getLayoutStore();
                if (!a) return (0, i(200394).E1)({
                    isMultiplayerWorkspace: n,
                    isActivityHidden: r
                });
                let s = a.getModules();
                return s && (0 !== s.person_profile_page_main.length || 0 !== s.person_profile_page_details.length) ? s : (0, i(200394).E1)({
                    isMultiplayerWorkspace: n,
                    isActivityHidden: r
                })
            }
        },
        941754: (e, t, i) => {
            i.d(t, {
                e: () => o
            });

            function o(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "create_collection_template",
                        eventProperties: t
                    }
                })
            }
        },
        952330: (e, t, i) => {
            i.d(t, {
                v: () => r
            });
            var o = i(296540),
                n = i(474848);
            let l = {
                position: "relative",
                width: "100%"
            };

            function r(e) {
                let {
                    store: t,
                    context: r,
                    propertyId: a,
                    disabled: s,
                    wrapper: d,
                    pageModule: c,
                    stackPropertyLabelAndValue: u
                } = e, p = (0, i(747193).b)(t, s), g = (0, i(682985).K8)(() => t.getAssociatedCollectionStore(), [t]), m = (0, i(682985).K8)(() => {
                    if (t.isCollectionViewPageWithContent()) return {
                        type: "hidden"
                    };
                    let e = t.getAssociatedCollectionStore();
                    return e ? {
                        type: "visible",
                        collectionStore: e
                    } : {
                        type: "hidden"
                    }
                }, [t]), f = (0, i(682985).K8)(() => null == g ? void 0 : g.getSchema(), [g]), h = (0, i(682985).K8)(() => null == g ? void 0 : g.getFormat(), [g]), S = (0, i(682985).K8)(() => {
                    var e;
                    return null == (e = m.collectionStore) ? void 0 : e.getSchema()[a]
                }, [m.collectionStore, a]), y = (0, i(682985).K8)(() => (0, i(444285).S)(t), [t]), v = (0, o.useMemo)(() => new(i(120025)).YB, []), b = o.useRef(null), x = (0, i(682985).K8)(() => {
                    let e = null == g ? void 0 : g.getParentStore();
                    return !!g && !!e && "block" === e.table && (0, i(261105).v)({
                        collectionStore: g,
                        collectionViewBlockStore: e,
                        checkNavigableAncestorLocked: !1
                    })
                }, [g]), k = r === i(166654).R.PeekView, C = (0, i(11287).gx)(c) ? c : void 0, {
                    isPropertyInPageDetails: w
                } = (0, i(287753)._1)({
                    store: t,
                    propertyId: a
                }), _ = (0, i(978096).s)(b, 50), I = (0, i(475717).l)(t), P = (0, i(682985).K8)(() => {
                    var e;
                    return (null == I || null == (e = I.getFormat()) ? void 0 : e.property_icons_visibility) === "hide"
                }, [I]), M = (0, i(226142).a)();
                if (!S || "hidden" === m.type || !g || !f || !h) return null;
                let A = !M && "relation" !== S.type,
                    j = (0, i(973037).Ge)({
                        isMobile: i(986939).A.isMobile,
                        stackPropertyLabelAndValue: u,
                        isPropertyInPageDetails: w
                    }),
                    B = (0, n.jsx)(i(656915).L_, {
                        store: t,
                        propertyId: a,
                        style: w || i(986939).A.isMobile ? {
                            flexShrink: 0
                        } : {
                            position: "absolute",
                            insetInlineStart: null != _ && _.width ? _.width + 4 : void 0,
                            top: 0
                        }
                    }),
                    T = (0, n.jsx)(i(611752).Ay, {
                        store: t,
                        analyticsName: "page_property",
                        children: (0, n.jsx)(i(625399).qm, {
                            store: t,
                            property: a,
                            disabled: !p,
                            locked: y,
                            surface: "property_module",
                            tableWrap: !0,
                            blockPropertyValueOverlayStore: k ? i(129894).A : i(363746).A,
                            collectionStore: m.collectionStore,
                            isInPeekRenderer: k,
                            propertyModule: C
                        }, a)
                    }),
                    K = (0, n.jsxs)(n.Fragment, {
                        children: [A ? (0, n.jsxs)(i(4458).fI, {
                            gap: 0,
                            alignItems: "center",
                            justifyContent: w ? void 0 : "space-between",
                            width: j,
                            flexShrink: j ? 0 : void 0,
                            children: [(0, n.jsx)(i(105876).I, {
                                schema: f,
                                format: h,
                                hideIcon: P,
                                hideDragHandle: !0,
                                property: a,
                                blockStore: t,
                                collectionStore: g,
                                pagePropertiesStore: v,
                                disabled: s,
                                locked: y,
                                canConfigureCollection: x,
                                isInPeekRenderer: k,
                                styleVariants: {
                                    width: (0, i(973037).aG)({
                                        stackPropertyLabelAndValue: u
                                    }),
                                    height: u ? {
                                        variant: "small"
                                    } : {
                                        variant: "medium"
                                    },
                                    size: "small",
                                    fontWeight: "medium"
                                },
                                layoutModule: C,
                                hideDuplicatePropertyOption: !0
                            }), M ? null : B]
                        }) : void 0, T]
                    });
                return d((0, n.jsx)(i(385827).s, {
                    allowSelectionWithin: !0,
                    style: l,
                    children: u ? (0, n.jsx)(i(4458).VP, {
                        gap: 0,
                        ref: b,
                        children: K
                    }) : (0, n.jsx)(i(4458).fI, {
                        gap: 0,
                        ref: b,
                        alignItems: "flex-start",
                        children: K
                    })
                }))
            }
        },
        971840: (e, t, i) => {
            i.d(t, {
                A: () => k
            }), i(581454);
            var o = i(296540);
            i(898992), i(354520);
            var n = i(474848);
            let l = {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 16
                },
                r = {
                    marginBottom: 2,
                    marginInlineEnd: 4
                },
                a = {
                    marginTop: -2,
                    minWidth: 0,
                    display: "flex",
                    alignItems: "baseline",
                    flex: "2 0 40%",
                    paddingTop: "0.1em"
                },
                s = {
                    paddingInlineStart: 8
                },
                d = function({
                    currentBlockStore: e,
                    backlinkStore: t,
                    scrollToBlockId: o,
                    discussionId: d,
                    showOriginalToken: c,
                    disableCurrentPageToken: g,
                    disableArrow: h
                }) {
                    let S = (0, i(533992).v3)(),
                        y = (0, i(682985).K8)(() => !(0, i(862085).X9)(S, e) && (0, i(862085).X9)(S, t), [S, e, t]),
                        v = (0, i(682985).O$)(i(728372).AppStoreMainEditorCurrentBlockStore),
                        b = v && v.id === t.id,
                        x = (0, i(682985).K8)(() => (0, i(483227).Ay)({
                            store: t,
                            scrollToBlockId: o,
                            discussionId: d,
                            fullyQualified: !0,
                            preferPublicLink: (0, i(59406).w)(S),
                            pageVisitSource: i(254656).y8.LinkInPage
                        }), [t, o, d, S]);
                    return (0, n.jsx)(i(590422).Q, {
                        href: x,
                        external: !1,
                        style: l,
                        children: (0, n.jsx)(i(340186).Ay, {
                            childrenStyle: {
                                padding: "4px 2px"
                            },
                            alignment: "center",
                            style: r,
                            right: (0, n.jsxs)(n.Fragment, {
                                children: [c ? (0, n.jsx)("div", {
                                    style: p(S),
                                    children: (0, n.jsx)(i(109939).sA, {
                                        defaultMessage: "Original",
                                        id: "backlink.originalTokenLabel"
                                    })
                                }) : void 0, b && !g ? (0, n.jsx)("div", {
                                    style: p(S),
                                    children: (0, n.jsx)(i(109939).sA, {
                                        defaultMessage: "This page",
                                        id: "backlink.currentPageTokenLabel"
                                    })
                                }) : void 0]
                            }),
                            children: (0, n.jsxs)(i(4458).fI, {
                                alignItems: "center",
                                children: [h ? void 0 : (0, n.jsx)(i(16275).I, {
                                    icon: i(729148).K,
                                    size: "sm"
                                }), (0, n.jsx)(u, {
                                    backlinkStore: t
                                }), (0, n.jsx)(i(627918).A, {
                                    store: t,
                                    style: {
                                        fontWeight: i(699422).Wy.medium,
                                        fontSize: i(699422).J.UIRegular.desktop,
                                        lineHeight: 1.3,
                                        borderBottom: `1px solid ${i(632079).Tj.border.primaryTranslucent}`,
                                        flexShrink: 1
                                    }
                                }), (0, n.jsxs)("div", {
                                    style: a,
                                    children: [(0, n.jsx)(f, {
                                        store: t,
                                        style: s
                                    }), (0, n.jsx)(m, {
                                        isPrivate: y
                                    })]
                                })]
                            })
                        })
                    })
                },
                c = {
                    marginInlineStart: 4,
                    marginInlineEnd: 4
                };

            function u({
                backlinkStore: e
            }) {
                let t = (0, i(682985).K8)(() => e.getIcon(), [e]),
                    o = (0, i(682985).K8)(() => e.isEmptyPage(), [e]),
                    l = (0, i(682985).K8)(() => (0, i(569553).Te)(e), [e]);
                return (0, n.jsx)(i(569553).B6, {
                    disabled: !0,
                    icon: t,
                    iconRecordCategory: l,
                    isEmptyPage: o,
                    size: 20,
                    style: c
                })
            }

            function p(e) {
                let {
                    device: t
                } = e;
                return {
                    padding: "2px 6px",
                    borderRadius: 4,
                    color: i(632079).Tj.text.secondary,
                    background: i(632079).Tj.background.tertiaryTranslucent,
                    fontSize: i(986939).A.isMobile ? 11 : 9,
                    lineHeight: t.isAndroid ? 1.5 : 1,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    whiteSpace: "nowrap",
                    marginInlineStart: 4
                }
            }
            let g = {
                paddingInlineEnd: 4,
                marginInlineStart: 12
            };

            function m({
                isPrivate: e
            }) {
                return e ? (0, n.jsx)("div", {
                    style: g,
                    children: (0, n.jsx)(i(299304).Y, {})
                }) : null
            }

            function f({
                store: e,
                style: t
            }) {
                let o = (0, i(682985).K8)(() => (0, i(399348).f)(e, {
                    includeTeamHomeFeed: !1,
                    includeDataSources: !0
                }).filter(e => !(e instanceof i(360851).N)), [e]);
                (0, i(682985).K8)(() => e.isNavigableBlock(), [e]) && o.shift(), o.reverse();
                let l = o.length;
                if (0 === l) return null;
                l > 2 && o.splice(1, o.length - 2);
                let r = o.map(e => (0, n.jsx)(v, {
                    store: e
                }, e.id));
                l > 2 && r.splice(1, 0, (0, n.jsx)(y, {}));
                let a = (0, i(405843).G)(r, e => (0, n.jsx)(S, {}, e));
                return (0, n.jsx)(i(324489).V, {
                    isSecondaryColor: !0,
                    isSmall: !0,
                    style: t,
                    children: a
                })
            }
            let h = {
                paddingInlineStart: 4,
                paddingInlineEnd: 4
            };

            function S() {
                return (0, n.jsx)("span", {
                    style: h,
                    children: "/"
                })
            }

            function y() {
                return (0, n.jsx)("span", {
                    children: "..."
                })
            }

            function v({
                store: e
            }) {
                return (0, n.jsx)(i(627918).A, {
                    store: e,
                    shouldWrap: !0,
                    maxLength: 20
                })
            }
            let b = i(546605).Store.createClass(10, {
                    name: "ShowMoreStore"
                }),
                x = i(546605).Store.createClass(!1, {
                    name: "HoveredStore"
                }),
                k = function({
                    store: e,
                    originalTransclusionStore: t,
                    disableInaccessiblePages: l,
                    headerText: r,
                    disableArrow: a,
                    disableCurrentPageToken: s
                }) {
                    let c = (0, i(533992).v3)(),
                        u = (0, i(682985).uB)(void 0, x),
                        p = (0, i(682985).uB)(void 0, b),
                        g = (0, i(682985).K8)(() => (0, i(184273).cg)(e, c), [e, c]),
                        m = (0, o.useCallback)(() => {
                            var e;
                            (e = p).setState(e.state + 10)
                        }, [p]),
                        f = (0, o.useCallback)(() => {
                            u.setState(!1)
                        }, [u]),
                        h = (0, o.useCallback)(() => {
                            u.setState(!0)
                        }, [u]),
                        S = (0, i(682985).O$)(p),
                        y = (0, i(682985).K8)(() => t ? t.getNavigableBlockStore() : void 0, [t]);
                    if (0 === g.backlinks.length && 0 === g.inaccessibleBacklinkCount && !t) return null;
                    let v = g.backlinks.length > S,
                        k = g.inaccessibleBacklinkCount > 0 && !l;
                    return (0, n.jsxs)("div", {
                        onMouseMove: h,
                        onMouseLeave: f,
                        children: [r ? (0, n.jsx)(w, {
                            headerText: r
                        }) : void 0, t && y ? (0, n.jsx)(d, {
                            currentBlockStore: e,
                            disableArrow: a,
                            disableCurrentPageToken: s,
                            backlinkStore: y,
                            scrollToBlockId: t.id,
                            showOriginalToken: !0
                        }) : void 0, g.backlinks.slice(0, S).map(t => (0, n.jsx)(d, {
                            currentBlockStore: e,
                            disableArrow: a,
                            disableCurrentPageToken: s,
                            ...t
                        }, t.backlinkStore.id)), v || k ? (0, n.jsx)(i(51831).m, {
                            disableTooltip: v,
                            content: () => (0, n.jsx)(i(109939).sA, {
                                defaultMessage: "Synced in pages that you don’t have access to.",
                                id: "page.backlinks.privatePagesTooltip"
                            }),
                            children: e => (0, n.jsx)(i(988022).p, {
                                iconLeading: i(397900).ellipsisIcon,
                                colorPalette: "gray",
                                onClick: m,
                                style: {
                                    padding: `2px ${a?17:14}px`,
                                    width: "100%"
                                },
                                disabled: !v,
                                ...e,
                                children: v ? (0, n.jsx)(i(109939).sA, {
                                    defaultMessage: "{count} more",
                                    id: "page.backlinks.more",
                                    values: {
                                        count: g.backlinks.length - S
                                    }
                                }) : (0, n.jsx)(i(109939).sA, {
                                    id: "page.backlinks.privatePages",
                                    defaultMessage: "{count, plural, one {{count} private page} other {{count} private pages}}",
                                    values: {
                                        count: g.inaccessibleBacklinkCount
                                    }
                                })
                            })
                        }) : void 0]
                    })
                },
                C = {
                    marginTop: 12,
                    marginBottom: 8,
                    marginInlineStart: 4,
                    flex: 1,
                    paddingInlineStart: 8
                };

            function w({
                headerText: e
            }) {
                return (0, n.jsx)(i(4458).fI, {
                    children: (0, n.jsx)(i(324489).V, {
                        isSmall: !0,
                        style: C,
                        children: e
                    })
                })
            }
        },
        984583: (e, t, i) => {
            i.d(t, {
                VY: () => a,
                ZJ: () => l,
                u3: () => r
            });
            var o = () => i(546605);
            class n extends o().Store {
                getInitialState() {
                    return {
                        popupRenderedInPage: !1,
                        popupRenderedInPeekView: !1
                    }
                }
            }
            let l = new n,
                r = new(i(345426)).ComputedStore(() => !1 !== l.state.popupRenderedInPage, {
                    debugName: "AssistantWriterRenderedInPageStore"
                }),
                a = new(i(345426)).ComputedStore(() => !1 !== l.state.popupRenderedInPeekView, {
                    debugName: "AssistantWriterRenderedInPeekViewStore"
                })
        }
    }
]);