"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [67984], {
        54645: (e, t, i) => {
            i.d(t, {
                zP: () => Y,
                nJ: () => I
            }), i(898992), i(354520), i(672577), i(581454), i(737550);
            var n = i(296540),
                o = () => i(247438),
                r = i(474848);
            let a = (0, i(109939).YK)({
                    chatButton: {
                        id: "botHoverCard.chatButton",
                        defaultMessage: "Chat"
                    },
                    configureButton: {
                        id: "botHoverCard.settingsButton",
                        defaultMessage: "Settings"
                    }
                }),
                l = {
                    card: {
                        maxWidth: 400,
                        minWidth: 280,
                        padding: 12
                    },
                    bio: {
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        overflow: "hidden"
                    },
                    bioRight: {
                        overflow: "hidden"
                    },
                    profileTitle: {
                        fontWeight: i(699422).Wy.semibold
                    },
                    profileSubtitle: { ...i(699422).RC
                    },
                    description: { ...i(699422).RC,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                    },
                    actionButton: {
                        width: "100%",
                        height: 28,
                        fontWeight: i(699422).Wy.medium
                    }
                };

            function s(e) {
                let {
                    navigate: t
                } = (0, n.useContext)(i(44894).E), {
                    botStore: o
                } = e, s = (0, i(533992).v3)(), d = (0, i(109939).tz)(), c = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore), u = (0, i(682985).K8)(() => o.getModel(), [o]), p = (0, i(682985).K8)(() => (null == u ? void 0 : u.isWorkflowBot()) ? ? !1, [u]), g = (0, i(682985).K8)(() => {
                    if (u && p) return u.getWorkflowId()
                }, [u, p]), y = (0, i(682985).K8)(() => {
                    if (g && c) return i(360851).N.createChildStore(c, {
                        table: i(832375).C0E,
                        id: g,
                        spaceId: c.id
                    })
                }, [g, c]), m = (0, n.useCallback)(() => {
                    g && t({
                        environment: s,
                        url: (0, i(453573).Lm)({
                            workflowId: g,
                            params: {
                                workflowViewType: "chat"
                            },
                            pageVisitSource: i(254656).y8.MentionInPage
                        })
                    })
                }, [g, s, t]), h = (0, n.useCallback)(() => {
                    g && t({
                        environment: s,
                        url: (0, i(453573).Lm)({
                            workflowId: g,
                            params: {
                                workflowViewType: "settings"
                            },
                            pageVisitSource: i(254656).y8.MentionInPage
                        })
                    })
                }, [g, s, t]);
                (0, n.useEffect)(() => {
                    u && c && (0, i(104310).u)({
                        event: {
                            eventName: "bot_hover_card_impression",
                            eventProperties: {
                                bot_id: o.id,
                                workflow_id: g || void 0,
                                space_id: c.id
                            }
                        }
                    })
                }, [u, o.id, g, s, c]);
                let v = (0, i(682985).K8)(() => void 0 !== (0, i(604384).W0)(y), [y]),
                    x = (0, i(682985).K8)(() => {
                        if (y) return (0, i(646440).getWorkflowValue)(y)
                    }, [y]),
                    f = (0, i(682985).K8)(() => (null == x ? void 0 : x.name) || (null == u ? void 0 : u.getName()) || d.formatMessage(i(748761).aX.unnamedAgent), [u, x, d]),
                    j = (0, i(682985).K8)(() => null == x ? void 0 : x.description, [x]),
                    b = (0, i(682985).K8)(() => null == x ? void 0 : x.icon, [x]),
                    S = (0, i(682985).K8)(() => !!y && y.canEdit(), [y]);
                return u ? (0, r.jsx)("div", {
                    style: l.card,
                    children: (0, r.jsx)(i(337336).K, {
                        from: "BotHoverCard",
                        fallback: e => (0, r.jsx)(i(640310).d, { ...e
                        }),
                        children: (0, r.jsxs)(i(4458).VP, {
                            gap: 16,
                            children: [(0, r.jsx)(i(4458).fI, {
                                gap: 0,
                                children: (0, r.jsxs)("div", {
                                    style: l.bio,
                                    children: [(0, r.jsx)(i(736371).Z, {
                                        icon: b,
                                        size: 56
                                    }), (0, r.jsxs)(i(4458).VP, {
                                        gap: "inherit",
                                        width: "100%",
                                        style: {
                                            gap: 3,
                                            ...l.bioRight
                                        },
                                        children: [(0, r.jsxs)(i(4458).fI, {
                                            gap: 6,
                                            alignItems: "center",
                                            children: [(0, r.jsx)(i(324489).V, {
                                                isSecondaryColor: v,
                                                style: l.profileTitle,
                                                children: f
                                            }), v ? (0, r.jsx)(i(487604).u, {}) : void 0]
                                        }), (0, r.jsx)(i(324489).V, {
                                            isSmall: !0,
                                            isSecondaryColor: v,
                                            style: l.profileSubtitle,
                                            children: (0, r.jsx)(i(109939).sA, {
                                                id: "botHoverCard.agentLabel",
                                                defaultMessage: "Custom Agent"
                                            })
                                        }), j ? (0, r.jsx)(i(324489).V, {
                                            isSmall: !0,
                                            isSecondaryColor: !0,
                                            style: l.description,
                                            children: j
                                        }) : void 0]
                                    })]
                                })
                            }), p ? (0, r.jsxs)(i(4458).fI, {
                                gap: 12,
                                children: [v ? void 0 : (0, r.jsx)(i(548436).A, {
                                    onClick: m,
                                    size: "lg",
                                    style: l.actionButton,
                                    iconLeading: i(799891).y,
                                    children: (0, r.jsx)(i(324489).V, {
                                        children: d.formatMessage(a.chatButton)
                                    })
                                }), S ? (0, r.jsx)(i(548436).A, {
                                    onClick: h,
                                    size: "lg",
                                    style: l.actionButton,
                                    iconLeading: i(213039).M,
                                    children: (0, r.jsx)(i(324489).V, {
                                        children: d.formatMessage(a.configureButton)
                                    })
                                }) : void 0]
                            }) : void 0]
                        })
                    })
                }) : null
            }

            function d(e) {
                let t = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore),
                    n = (0, i(682985).K8)(() => {
                        if (!t) return;
                        let [n, o] = e.state.annotation;
                        return i(447003).v.createChildStore(t, {
                            id: o,
                            table: i(832375).GPl
                        })
                    }, [e.state, t]),
                    o = (0, i(682985).K8)(() => !!n && n.isDefined(), [n]);
                return n && o && t ? (0, r.jsx)(s, {
                    botStore: n
                }) : null
            }
            var c = i.n(i(32485));
            let u = (0, i(109939).YK)({
                    contentDeletedHeader: {
                        defaultMessage: "Deleted",
                        id: "HoverCitationPreviewOverlay.contentDeletedHeader"
                    },
                    contentMovedHeader: {
                        defaultMessage: "No access",
                        id: "HoverCitationPreviewOverlay.contentMovedHeader"
                    },
                    contentDeletedMessage: {
                        defaultMessage: "Cited content was deleted.",
                        id: "HoverCitationPreviewOverlay.contentDeletedMessage"
                    },
                    contentMovedMessage: {
                        defaultMessage: "Cited content was moved to a location you do not have access to.",
                        id: "HoverCitationPreviewOverlay.contentMovedMessage"
                    }
                }),
                p = {
                    header: {
                        flex: 1,
                        display: "grid",
                        gap: 5,
                        gridTemplateColumns: "auto 1fr auto",
                        gridTemplateRows: "1fr",
                        gridTemplateAreas: `
                    "icons text actions"
                `
                    },
                    headerIcons: {
                        gridArea: "icons",
                        display: "grid",
                        placeItems: "center",
                        gap: 2
                    },
                    headerText: {
                        color: i(632079).Tj.text.primary,
                        gridArea: "text",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontWeight: i(699422).Wy.medium
                    },
                    headerActions: {
                        gridArea: "actions"
                    },
                    content: {
                        flex: 1
                    },
                    style0: {
                        cursor: "default"
                    }
                };

            function g(e) {
                let {
                    headerIcons: t,
                    headerText: n,
                    headerActions: o,
                    content: a,
                    hideOverflowFade: l = !1
                } = e, s = (0, i(960253).e)(), d = (0, i(960253).I)(() => ({
                    container: {
                        width: "max-content",
                        maxWidth: 275,
                        maxHeight: 275,
                        padding: 12,
                        fontSize: 12,
                        display: "grid",
                        gap: 5,
                        overflow: "hidden",
                        position: "relative"
                    },
                    overflowFade: {
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        height: 21.6,
                        background: "dark" === s ? "linear-gradient(to top, rgba(32,32,32, 1), transparent)" : "linear-gradient(to top, rgba(255,255,255, 1), transparent)"
                    }
                }), [s]);
                return (0, r.jsxs)("div", {
                    style: d.container,
                    children: [(0, r.jsxs)("div", {
                        style: p.header,
                        children: [(0, r.jsx)("div", {
                            style: p.headerIcons,
                            children: t
                        }), (0, r.jsx)("div", {
                            style: p.headerText,
                            children: n
                        }), (0, r.jsx)("div", {
                            style: p.headerActions,
                            children: o
                        })]
                    }), (0, r.jsx)("div", {
                        style: p.content,
                        children: a
                    }), l ? void 0 : (0, r.jsx)("div", {
                        style: d.overflowFade
                    })]
                })
            }
            let y = {
                deletedHeader: {
                    color: i(632079).Tj.palette.red[500],
                    whiteSpace: "nowrap"
                },
                noAccessHeader: {
                    color: i(632079).Tj.palette.yellow[500],
                    whiteSpace: "nowrap"
                },
                deletedMessage: {
                    color: i(632079).Tj.text.secondary
                },
                noAccessMessage: {
                    color: i(632079).Tj.text.secondary
                },
                rendererBlockStyle: {
                    fontSize: 12,
                    color: i(632079).Tj.text.secondary
                },
                style0: {
                    height: "auto"
                },
                style1: {
                    padding: 0
                },
                style2: {
                    paddingInlineStart: 5,
                    paddingInlineEnd: 5
                }
            };

            function m(e) {
                let t = (0, i(109939).tz)(),
                    a = o().NpB(e.state.annotation),
                    {
                        navigablePageStore: l,
                        citationNumber: s,
                        citedBlockStore: d,
                        citedBlockIsDeleted: m,
                        citedBlockNoAccess: h
                    } = (0, i(682985).K8)(() => {
                        var t;
                        if ("block" !== a.type || !a.blockId || !a.spaceId || !a.citationNumber) return {
                            navigablePageStore: void 0,
                            citationNumber: void 0,
                            citedBlockStore: void 0,
                            citedBlockIsDeleted: !0,
                            citedBlockNoAccess: !0
                        };
                        let n = {
                                id: a.blockId,
                                spaceId: a.spaceId,
                                table: i(832375).evP
                            },
                            o = i(970831).B.createChildStore(e.state.store, n),
                            r = o.getPageStatus(),
                            l = null == (t = o.getNavigableBlockStore()) ? void 0 : t.pointer;
                        return {
                            navigablePageStore: l ? i(970831).B.createChildStore(e.state.store, l) : void 0,
                            citedBlockStore: o,
                            citedBlockIsDeleted: "deleted_from_trash" === r || "in_trash" === r,
                            citedBlockNoAccess: "none" === o.getRole(),
                            citationNumber: a.citationNumber
                        }
                    }, [a, e.state.store]),
                    v = (0, i(960253).I)(() => (0, i(198185).D)({
                        theme: i(632079).Tj,
                        isFocused: !1,
                        isDeleted: m,
                        hasNoAccess: h
                    }), [m, h]),
                    x = (0, i(697251).aS)({
                        theme: i(632079).Tj
                    }),
                    f = (0, i(682985).K8)(() => null == d ? void 0 : d.getCreatedTime(), [d]),
                    j = c()(i(728069).Co, i(728069).te, "citation-annotation-anchor", "notion-numbered-block-citation-token", {
                        "notion-numbered-block-citation-token-deleted": m
                    }, {
                        "notion-numbered-block-citation-token-no-access": h
                    }),
                    b = (0, n.useMemo)(() => s ? (0, r.jsx)("div", {
                        className: j,
                        style: { ...x.citationContainerStyles,
                            ...v.numberedBlockCitationStyles,
                            ...p.style0,
                            ...s > 99 ? y.style2 : {}
                        },
                        children: s
                    }) : void 0, [s, j, v.numberedBlockCitationStyles, x.citationContainerStyles]);
                if (m) return (0, r.jsx)(g, {
                    headerIcons: b,
                    headerText: (0, r.jsx)("div", {
                        style: y.deletedHeader,
                        children: (0, r.jsx)(i(109939).sA, { ...u.contentDeletedHeader
                        })
                    }),
                    content: (0, r.jsx)("div", {
                        style: y.deletedMessage,
                        children: (0, r.jsx)(i(109939).sA, { ...u.contentDeletedMessage
                        })
                    }),
                    hideOverflowFade: !0
                });
                if (h) return (0, r.jsx)(g, {
                    headerIcons: b,
                    headerText: (0, r.jsx)("div", {
                        style: y.noAccessHeader,
                        children: (0, r.jsx)(i(109939).sA, { ...u.contentMovedHeader
                        })
                    }),
                    content: (0, r.jsx)("div", {
                        style: y.noAccessMessage,
                        children: (0, r.jsx)(i(109939).sA, { ...u.contentMovedMessage
                        })
                    }),
                    hideOverflowFade: !0
                });
                if ("block" !== a.type || !d || !l) return null;
                let S = f ? (0, i(850640).AE)({
                    date: f,
                    locale: i(849917).locale,
                    intl: t
                }) : void 0;
                return (0, r.jsx)(g, {
                    headerIcons: b,
                    headerText: S,
                    content: (0, r.jsx)(i(522824).wJ, {
                        surfaceName: "citation_preview",
                        children: (0, r.jsx)(i(742726).z, {
                            variant: "default",
                            store: l,
                            coverFormat: {
                                type: "page_content"
                            },
                            allowVideoPlayback: !1,
                            contentWrapStyle: y.style0,
                            coverContentFadedOverlay: !1,
                            startBlockId: d.id === l.id ? void 0 : d.id,
                            imageCoverWrapStyle: i(268896).b.imageCoverWrap,
                            emptyGalleryCoverStyle: i(268896).b.contentCoverEmpty,
                            loadingShimmerStyle: i(268896).b.loadingShimmer,
                            showLoadingShimmer: !0,
                            showEmptyGalleryCover: !0,
                            onLoadProxiedImage: () => {},
                            rendererBlockStyle: y.rendererBlockStyle,
                            renderAdditionalBlocks: !0,
                            style: y.style1,
                            exactBlockOnlyNoContentCover: !0
                        })
                    })
                })
            }

            function h(e) {
                let t, {
                        token: o,
                        store: a,
                        spaceStore: l
                    } = e.state,
                    {
                        linkMentionAnnotationData: s
                    } = e,
                    d = e.onDismiss,
                    c = (0, i(533992).v3)(),
                    [u, p] = (0, n.useState)(!0),
                    {
                        iframe_url: g,
                        height: y,
                        padding: m,
                        href: h,
                        padding_top: v
                    } = s,
                    x = s.hasOwnProperty("description"),
                    f = i(381453).Im(s),
                    [{
                        value: j
                    }] = (0, i(97668).Yb)(async () => {
                        var e;
                        if (g) return i(611844).wZ(c, {
                            type: "iframe"
                        }), {
                            result: "iframePresent"
                        };
                        if (x) return p(!1), f ? i(611844).wZ(c, {
                            type: "default"
                        }) : i(611844).wZ(c, {
                            type: "custom"
                        }), {
                            result: "linkMentionContainsDescription"
                        };
                        p(!0);
                        let t = await c.api.callApi({
                            eventName: "getDataForLinkMention",
                            environment: c,
                            data: {
                                url: h,
                                spaceId: (null == l ? void 0 : l.getSpaceId()) ? ? (null == (e = i(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.getSpaceId()),
                                source: "link_mention_hover"
                            }
                        });
                        return "success" === t.type ? "error" in t.data ? (p(!1), {
                            result: "apiFailed"
                        }) : (i(611844).wZ(c, {
                            type: "custom"
                        }), p(!1), {
                            result: "gotApiResponse",
                            resultData: t.data
                        }) : "failed" === t.type ? (p(!1), {
                            result: "apiFailed"
                        }) : (p(!1), (0, i(722371).HB)(t))
                    }, [g, x, c, h, f, l]);
                switch (null == j ? void 0 : j.result) {
                    case "linkMentionContainsDescription":
                        t = s;
                        break;
                    case "gotApiResponse":
                        t = j.resultData;
                        break;
                    case "apiFailed":
                    case "iframePresent":
                    case void 0:
                        t = void 0;
                        break;
                    default:
                        (0, i(722371).HB)(j)
                }
                return (!t || g) && (t || g) && g ? (0, r.jsx)(i(301690).p, {
                    hoverData: s,
                    iframe_url: g,
                    showEditButton: !1,
                    height: y,
                    padding: m,
                    store: a,
                    token: o,
                    onDismiss: d,
                    href: h,
                    padding_top: v
                }) : (0, r.jsx)(i(348400).R, {
                    hoverData: t,
                    href: h,
                    showEditButton: !1,
                    store: a,
                    token: o,
                    onDismiss: d,
                    loading: u
                })
            }
            let v = {
                wrapper: {
                    fontSize: i(699422).J.UISmall.desktop
                },
                button: {
                    marginInlineEnd: 2
                },
                destinationText: {
                    paddingInlineEnd: 6,
                    maxWidth: 250,
                    ...i(699422).RC
                }
            };

            function x(e) {
                let {
                    onDismiss: t,
                    state: a
                } = e, {
                    store: l
                } = a, s = (0, i(533992).v3)(), d = (0, i(960253).e)(), [c, u] = (0, n.useState)(!0), p = "token" === a.type ? o().cQR(a.annotation) : a.hyperlink, g = (0, i(430733).lX)({
                    url: p,
                    baseUrl: i(986939).A.domainBaseUrl,
                    publicDomainName: i(986939).A.publicDomainName
                }), y = (0, o().HZO)({
                    url: p,
                    baseUrl: i(986939).A.domainBaseUrl,
                    publicDomainName: i(986939).A.publicDomainName
                }), m = (0, n.useCallback)(async () => {
                    switch (t(), a.type) {
                        case "token":
                            (function(e) {
                                let {
                                    token: t,
                                    store: n,
                                    readOnly: r
                                } = e, a = 0, l = 0;
                                if (t.textValue) {
                                    let e = 0;
                                    for (; e < t.tokenIndex;) a += o().WWE(t.textValue[e]), e++;
                                    l = a + o().WWE(t.textValue[e])
                                }(0, i(627974).t)({
                                    store: n,
                                    selection: {
                                        startIndex: a,
                                        endIndex: l
                                    },
                                    readOnly: r
                                })
                            })({
                                token: a.token,
                                store: a.store,
                                readOnly: !1
                            }), await i(374176).default.afterNextFlush(), i(280546).fi({
                                type: "focusOnly",
                                focus: !0
                            });
                            break;
                        case "block":
                            i(869782).hv({
                                store: a.store
                            });
                            break;
                        default:
                            (0, i(722371).HB)(a)
                    }
                }, [t, a]), h = (0, n.useCallback)(async () => {
                    t(), await i(374176).default.afterNextFlush();
                    let [e, n] = await Promise.all([(0, i(161333).r)(), (0, i(969899).jd)()]), o = e.copiedLinkToClipboard, r = p, a = (0, i(132702).parseRoute)({
                        url: p,
                        baseUrl: i(986939).A.domainBaseUrl,
                        publicDomainName: i(986939).A.publicDomainName,
                        isMobile: i(986939).A.isMobile,
                        protocol: i(986939).A.protocol,
                        currentUrl: window.location.href,
                        requestedOnAlternateDomain: (0, i(700473).wasRequestedOnAlternateDomain)()
                    });
                    if ("page" === a.name && a.blockId) {
                        let e = i(970831).B.createChildStore(l, {
                            table: i(832375).evP,
                            id: a.blockId
                        });
                        r = (0, i(234310).A)({
                            pageId: a.blockId,
                            pageModel: e.getModel(),
                            baseUrl: i(986939).A.domainBaseUrl,
                            discussionId: a.discussionId,
                            scrollToBlockId: a.scrollToBlockId,
                            peekViewBlockId: a.peekViewBlockId,
                            peekMode: a.peekMode,
                            pageVisitSource: i(254656).y8.CopyLink,
                            addPagePrefix: (0, i(700473).wasRequestedOnAlternateDomain)()
                        })
                    }
                    n({
                        environment: s,
                        stringValue: r,
                        copiedMessage: o
                    })
                }, [s, t, l, p]), x = (0, i(682985).K8)(() => !1, []), [{
                    value: f
                }] = (0, i(97668).Yb)(async () => {
                    var e, t;
                    if (g || !x) return;
                    u(!0);
                    let n = await s.api.callApi({
                        eventName: "getDataForLinkMention",
                        environment: s,
                        data: {
                            url: p,
                            spaceId: (null == (e = a.spaceStore) ? void 0 : e.id) ? ? (null == (t = i(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.getSpaceId()),
                            source: "hyperlink_hover"
                        }
                    });
                    if ("success" === n.type) return "error" in n.data ? void u(!1) : (u(!1), n.data);
                    if ("failed" !== n.type) return u(!1), (0, i(722371).HB)(n);
                    throw void u(!1)
                }, [s, p, g, x, a.spaceStore]), j = s.device.isSafari || s.device.isIOS, b = (0, i(960253).I)(() => ({
                    icon: {
                        marginInlineEnd: j ? "0.4em" : "0.5em"
                    }
                }), [j]), S = (0, i(109939).tz)(), I = (0, i(109939).YK)({
                    copyLink: {
                        defaultMessage: "Copy link",
                        id: "hoverPreviewOverlay.copyLink"
                    }
                }), k = (0, i(682985).K8)(() => {
                    if (g) {
                        let e = i(970831).B.createChildStore(l, {
                            table: i(832375).evP,
                            id: g
                        });
                        return {
                            icon: (0, i(605351).h6)({
                                pageModel: e.getModel(),
                                pageRole: e.getRole(),
                                baseUrl: i(986939).A.domainBaseUrl,
                                getRecordModel: l.getRecordModel,
                                emojiType: (0, i(591404).FN)(s),
                                isSafariOrIOS: j,
                                isClient: !0,
                                currentUserId: s.currentUser.id,
                                theme: i(632079).Tj,
                                themeMode: d,
                                emojiData: i(753281).A.state
                            }),
                            title: (0, r.jsx)(i(627918).A, {
                                placeholder: `${window.location.protocol}//${window.location.host}${p}`,
                                style: v.destinationText,
                                store: e
                            })
                        }
                    }
                    if (y) {
                        let e = i(356912).m.createChildStore(l, {
                            table: i(832375).VlP,
                            id: y
                        });
                        return {
                            icon: (0, i(116825).e)({
                                collectionPointer: e.pointer,
                                emojiType: (0, i(591404).FN)(s),
                                getRecordModel: l.getRecordModel,
                                getRecordRole: l.getRecordRole,
                                baseUrl: i(986939).A.domainBaseUrl,
                                themeMode: d,
                                isSafariOrIOS: j,
                                isClient: !0,
                                currentUserId: s.currentUser.id,
                                emojiData: i(753281).A.state
                            }),
                            title: (0, r.jsx)(i(627918).A, {
                                placeholder: `${window.location.protocol}//${window.location.host}${p}`,
                                style: v.destinationText,
                                store: e
                            })
                        }
                    }
                    return {
                        icon: (0, r.jsx)("span", {
                            style: b.icon,
                            children: (0, r.jsx)(i(16275).I, {
                                icon: i(451034).globeSmallIcon,
                                size: "sm",
                                colorVariant: "secondary",
                                fitToViewBox: "horizontal"
                            })
                        }),
                        title: (0, r.jsx)("div", {
                            style: v.destinationText,
                            children: p
                        })
                    }
                }, [s, l, g, y, b, d, j, p]), A = (0, i(682985).K8)(() => {
                    if (!i(986939).A.isMobile && f) return f.hasOwnProperty("iframe") ? i(611844).Av(s, {
                        type: "iframe"
                    }) : i(611844).Av(s, {
                        type: "custom"
                    }), f
                }, [s, f]);
                if (x && !g) {
                    if (A && !A.iframe || !A) return (0, r.jsx)(i(348400).R, {
                        hoverData: A,
                        href: p,
                        handleEditClick: m,
                        showEditButton: e.isHoveredTokenEditable,
                        store: l,
                        loading: c
                    });
                    else if (A && A.iframe) return (0, r.jsx)(i(301690).p, {
                        hoverData: A,
                        iframe_url: A.iframe,
                        height: A.height,
                        padding: A.padding,
                        padding_top: A.padding_top,
                        handleEditClick: m,
                        store: l,
                        href: p,
                        onDismiss: t,
                        showEditButton: e.isHoveredTokenEditable
                    })
                }
                return (0, r.jsx)(i(4458).VP, {
                    gap: 0,
                    style: v.wrapper,
                    alignItems: "center",
                    children: (0, r.jsxs)(i(4458).fI, {
                        gap: 0,
                        paddingTop: 4,
                        paddingBottom: 4,
                        paddingInlineStart: 6,
                        alignItems: "center",
                        children: [k.icon, (0, r.jsx)(i(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            children: k.title
                        }), (0, r.jsx)(i(988022).p, {
                            size: "sm",
                            onClick: h,
                            iconLeading: {
                                icon: i(490648).d,
                                size: "sm"
                            },
                            ariaLabel: S.formatMessage(I.copyLink)
                        }), e.isHoveredTokenEditable ? (0, r.jsx)("div", {
                            style: v.button,
                            children: (0, r.jsx)(i(988022).p, {
                                size: "sm",
                                onClick: m,
                                style: v.button,
                                children: (0, r.jsx)(i(111010).D, {
                                    styleKey: "captionRegular",
                                    children: (0, r.jsx)(i(109939).sA, {
                                        defaultMessage: "Edit",
                                        id: "hoverPreviewOverlay.editButton.label"
                                    })
                                })
                            })
                        }) : void 0]
                    })
                })
            }
            let f = {
                tooltipStyle: {
                    fontSize: 14
                },
                mentionPageInTrashTime: {
                    fontWeight: i(699422).Wy.regular,
                    color: i(632079).Tj.text.secondary,
                    fontSize: 14
                },
                avatarStyle: {
                    margin: "0 6px"
                },
                placeholderStyle: {
                    marginInlineEnd: 6
                }
            };

            function j(e) {
                let {
                    store: t,
                    closestNonAliveAncestorStore: n,
                    originRect: o
                } = e, a = (0, i(109939).tz)(), {
                    trashAuthorStore: l,
                    trashAuthorDisplayName: s,
                    trashTimestamp: d,
                    isMovedToTrashMetadata: c
                } = (0, i(802244).x)({
                    store: t,
                    closestNonAliveAncestorStore: n,
                    intl: a
                });
                if (!d) return null;
                let u = (0, i(850640).jE)(d, i(849917).locale, a),
                    p = l && (0, r.jsx)(i(10097).E, {
                        authorStore: l,
                        avatarSize: 18,
                        avatarStyle: f.avatarStyle
                    });
                return (0, r.jsx)(i(51831).m, {
                    forceVisibleState: !0,
                    originRect: o,
                    content: () => (0, r.jsxs)("div", {
                        children: [(0, r.jsxs)(i(4458).fI, {
                            gap: 0,
                            alignItems: "center",
                            children: [c ? (0, r.jsx)(i(109939).sA, {
                                defaultMessage: "Moved to Trash by",
                                id: "hoverPreviewOverlay.pageInTrash.message.movedToTrashBy"
                            }) : (0, r.jsx)(i(109939).sA, {
                                defaultMessage: "Last edited by",
                                id: "hoverPreviewOverlay.pageInTrash.message.lastEditedBy"
                            }), p || (0, r.jsx)("div", {
                                style: f.placeholderStyle
                            }), s]
                        }), (0, r.jsx)("div", {
                            style: f.mentionPageInTrashTime,
                            children: u
                        })]
                    }),
                    placement: "bottom",
                    alignment: "start",
                    style: f.tooltipStyle,
                    children: () => void 0
                })
            }

            function b(e) {
                let t = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore),
                    n = (0, i(682985).K8)(() => {
                        if (!t) return;
                        if ("user" === e.state.type) return e.state.store;
                        let n = e.state.annotation;
                        return i(807825).L.createChildStore(t, {
                            id: n[1],
                            table: i(832375).oo9
                        })
                    }, [e.state, t]),
                    o = (0, i(682985).K8)(() => !!n && n.isDefined(), [n]),
                    a = "user" === e.state.type ? e.state.from : "page_mention";
                return n && o && t ? (0, r.jsx)(i(3196).E, {
                    userStore: n,
                    from: a
                }) : null
            }

            function S(e, t) {
                if (Object.is(e, t)) return !0;
                if (void 0 === e || void 0 === t || e.type !== t.type) return !1;
                switch (e.type) {
                    case "token":
                        return t.type === e.type && e.store.id === t.store.id && Object.is(e.annotations, t.annotations);
                    case "block":
                    case "user":
                        return t.type === e.type && e.store.id === t.store.id;
                    case "tab":
                        return t.type === e.type && e.tabId === t.tabId;
                    case "deletionMarker":
                        return t.type === e.type && e.deletedText === t.deletedText && e.store.id === t.store.id;
                    default:
                        return !1
                }
            }

            function I(e) {
                let t, a = (0, i(533992).v3)(),
                    {
                        state: l,
                        pinPopup: s,
                        unpinPopup: d,
                        hasBeenHovering: c,
                        isPinned: u,
                        dismissPopup: p
                    } = function() {
                        let [e] = (0, i(682985).$y)(i(84300).A), t = (0, i(482170).l)(e, S);
                        return (0, i(473234).v)({
                            immediateState: t,
                            isEqual: S
                        })
                    }(),
                    g = (t = (0, i(533992).v3)(), (0, i(682985).K8)(() => !!l && (0, i(120080).k)(t, l.store, l.spaceStore), [l, t])),
                    y = (0, n.useMemo)(() => !!(l && function(e, t) {
                        switch (e.type) {
                            case "token":
                                return e.annotations.some(o().sh$) || t && e.annotations.some(o().N53) || e.annotations.some(o().rie) || e.annotations.some(o().XkZ) || e.annotations.some(o().ik2);
                            case "block":
                                return !!e.hyperlink;
                            case "user":
                            case "deletionMarker":
                                return !0;
                            case "tab":
                                return !1;
                            default:
                                (0, i(722371).HB)(e)
                        }
                    }(l, g)), [l, g]),
                    m = (0, n.useMemo)(() => l && function(e) {
                        switch (e.type) {
                            case "token":
                                return e.token.node.getBoundingClientRect();
                            case "block":
                                return i(496704).K.getRect(e.store);
                            case "user":
                            case "tab":
                            case "deletionMarker":
                                return e.domRect;
                            default:
                                (0, i(722371).HB)(e)
                        }
                    }(l), [l]),
                    h = m && 0 === m.width && 0 === m.height && 0 === m.left && 0 === m.top,
                    v = (0, i(682985).K8)(() => {
                        let e = i(395364).A.state;
                        return y ? !h : !!(!e && c && !h)
                    }, [y, h, c]),
                    [, x] = (0, i(682985).$y)(i(23531).A);
                (0, n.useEffect)(() => (x({
                    isPinned: u
                }), () => x({
                    isPinned: !1
                })), [u, x]);
                let f = (null == l ? void 0 : l.type) === "token" && !(null != l && l.annotations.some(o().N53)) && !(null != l && l.annotations.some(o().jIt)),
                    j = (0, n.useMemo)(() => (null == l ? void 0 : l.type) === "token" && (null == l ? void 0 : l.annotations.some(o().nNl)), [l]),
                    b = (0, n.useMemo)(() => ((null == l ? void 0 : l.type) === "token" ? null == l ? void 0 : l.annotations.some(o().rie) : (null == l ? void 0 : l.type) === "user") ? ? !1, [l]),
                    I = (0, n.useMemo)(() => (null == l ? void 0 : l.type) === "token" && (null == l ? void 0 : l.annotations.some(o().XkZ)), [l]),
                    k = (0, n.useCallback)(() => b || I ? "end" : j ? "center" : "start", [b, I, j]),
                    w = (0, n.useCallback)(() => b || I ? "top" : "bottom", [b, I]),
                    M = (0, i(682985).O$)(a.RouterStore);
                return (0, n.useEffect)(() => {
                    p()
                }, [M, p]), (0, n.useEffect)(() => {
                    let e = i(381453).nF(() => {
                        i(23531).A.state.isPinned || (i(171511).co(), p())
                    }, 200, {
                        leading: !0
                    });
                    return (0, i(166027).P)({
                        el: window,
                        eventName: "scroll",
                        callback: e,
                        capture: !0
                    }), () => (0, i(260244).O)({
                        el: window,
                        eventName: "scroll",
                        callback: e,
                        capture: !0
                    })
                }, [p]), (0, r.jsx)(i(182718).zD, {
                    disableMouseCapture: !0,
                    preventCaptureEsc: !0,
                    preventPointerEvents: v && !y,
                    preventScaleTransition: !0,
                    preventOpacityTransition: !0,
                    popupType: i(423291).n.Popup,
                    open: v,
                    originRect: m,
                    originGap: 6,
                    alignmentToOrigin: k(),
                    placementToOrigin: w(),
                    lightBoxShadow: f,
                    content: () => l && (0, r.jsx)("div", {
                        onMouseOver: s,
                        onMouseLeave: d,
                        children: (0, r.jsx)(A, {
                            state: l,
                            isHoveredTokenEditable: g,
                            onDismiss: d,
                            originRect: m
                        })
                    }),
                    ...j ? {
                        borderRadius: 6
                    } : {}
                })
            }
            let k = {
                noMembersInGroupStyle: {
                    fontSize: i(699422).J.UISmall.desktop,
                    color: i(632079).Tj.text.secondary
                }
            };

            function A(e) {
                let t = e.state.spaceStore,
                    n = "token" === e.state.type ? e.state.annotations : void 0,
                    a = null == n ? void 0 : n.find(o().ik2),
                    l = (0, i(682985).K8)(() => {
                        if (i(218744).default.checkGate({
                                gateName: "enable_link_mention_hover"
                            }) && a) return o().q1R(a)
                    }, [a]),
                    s = null == n ? void 0 : n.find(o().sh$),
                    c = null == n ? void 0 : n.find(o().qsB),
                    u = null == n ? void 0 : n.find(o().RaC),
                    p = null == n ? void 0 : n.find(o().go0),
                    g = n ? o().MzR(n) : void 0,
                    y = null == n ? void 0 : n.find(o().jIt),
                    v = null == n ? void 0 : n.find(o().bZo),
                    f = null == n ? void 0 : n.find(o().muW),
                    j = null == n ? void 0 : n.find(o().rie),
                    S = null == n ? void 0 : n.find(o().XkZ),
                    I = null == n ? void 0 : n.find(o().nNl),
                    A = (0, i(682985).K8)(() => {
                        if (!u) return;
                        let e = o().FHi(u);
                        if (e) return null == e ? void 0 : e.groupId
                    }, [u]);
                if (null == n ? void 0 : n.some(e => {
                        if (o().JCc(e)) {
                            let t = o().FLg(e);
                            return t && "everyone" !== t.mentionType
                        }
                        return !1
                    })) return null;
                if ("user" === e.state.type && !i(986939).A.isMobile) return (0, r.jsx)(b, { ...e,
                    state: e.state,
                    onDismiss: e.onDismiss
                });
                if ("tab" === e.state.type) {
                    let t = e.state;
                    return (0, r.jsx)(X, { ...e,
                        state: t,
                        onDismiss: e.onDismiss
                    })
                }
                if ("deletionMarker" === e.state.type) return (0, r.jsx)(R, {
                    state: e.state
                });
                if ("token" !== e.state.type) return null;
                if (s && e.state.store.table !== i(832375).SNf) return (0, r.jsx)(x, { ...e,
                    state: { ...e.state,
                        annotation: s
                    }
                });
                if (c) return (0, r.jsx)(C, { ...e,
                    state: { ...e.state,
                        annotation: c
                    }
                });
                if (u) {
                    if (o().FHi(u) && A) return (0, r.jsx)(i(269130).Q, {
                        groupId: A,
                        limit: 10,
                        color: "white_background",
                        trackHover: !0,
                        noMembersMessage: (0, r.jsx)(i(4458).fI, {
                            gap: 0,
                            paddingBlock: 4,
                            paddingInline: 8,
                            style: k.noMembersInGroupStyle,
                            children: (0, r.jsx)("div", {
                                style: i(699422).RC,
                                children: (0, r.jsx)(i(109939).sA, {
                                    id: "groupPreview.noUsers",
                                    defaultMessage: "No users in this group"
                                })
                            })
                        })
                    })
                } else if (l && !i(986939).A.isMobile) return (0, r.jsx)(h, {
                    state: e.state,
                    isHoveredTokenEditable: e.isHoveredTokenEditable,
                    linkMentionAnnotationData: l,
                    onDismiss: e.onDismiss
                });
                return I ? (0, r.jsx)(M, { ...e,
                    state: { ...e.state,
                        annotation: I
                    },
                    currentSpaceStore: t
                }) : p ? (0, r.jsx)(D, { ...e,
                    state: { ...e.state,
                        annotation: p
                    }
                }) : g && !i(986939).A.isMobile ? (0, r.jsx)(Y, { ...e,
                    state: { ...e.state,
                        annotation: g
                    },
                    onDismiss: e.onDismiss
                }) : v && "block" === v[1].type && void 0 !== v[1].citationNumber && !i(986939).A.isMobile ? (0, r.jsx)(m, { ...e,
                    state: { ...e.state,
                        annotation: v
                    },
                    onDismiss: e.onDismiss
                }) : y && !i(986939).A.isMobile ? o().vqC(y) ? null : (0, r.jsx)(X, { ...e,
                    state: { ...e.state,
                        annotation: y
                    },
                    onDismiss: e.onDismiss
                }) : f && !i(986939).A.isMobile ? (0, r.jsx)(Q, { ...e,
                    state: { ...e.state,
                        annotation: f
                    },
                    onDismiss: e.onDismiss
                }) : j ? (0, r.jsx)(b, { ...e,
                    state: { ...e.state,
                        annotation: j
                    },
                    onDismiss: e.onDismiss
                }) : S && !i(986939).A.isMobile ? (0, r.jsx)(d, { ...e,
                    state: { ...e.state,
                        annotation: S
                    },
                    onDismiss: e.onDismiss
                }) : null
            }
            let w = {
                container: {
                    backgroundColor: i(632079).Tj.background.accentPrimary,
                    padding: "4px 8px",
                    maxWidth: 250,
                    width: "max-content"
                },
                text: {
                    color: i(632079).Tj.text.inverseSecondary
                }
            };

            function M(e) {
                var t, n;
                let {
                    store: a,
                    annotation: l
                } = e.state, s = o().qS0(l), d = s && i(427581).P.createChildStore(a, s), c = (0, i(682985).K8)(() => {
                    if (null != d && d.isDefined()) return null == d ? void 0 : d.getModel().getRenderTitle()
                }, [d]), u = (0, i(682985).K8)(() => (0, i(63839).wA)({
                    spaceStore: e.currentSpaceStore
                }), [e.currentSpaceStore]);
                return d ? (0, r.jsx)("div", {
                    style: w.container,
                    children: (0, r.jsx)(i(732080).A, {
                        type: "custom",
                        customEmojiStore: d,
                        text: (0, r.jsx)("span", {
                            className: "notranslate",
                            children: c
                        }),
                        deletedText: (0, r.jsx)(i(109939).sA, {
                            defaultMessage: "{name} <medium>(deleted)</medium>",
                            id: "HoverPreviewOverlay.customEmojiDeleted",
                            values: {
                                name: (0, r.jsx)("span", {
                                    className: "notranslate",
                                    children: c
                                }),
                                medium: e => (0, r.jsx)("span", {
                                    style: w.text,
                                    children: e
                                })
                            }
                        }),
                        subText: null != (t = e.currentSpaceStore) && t.id && s.spaceId !== (null == (n = e.currentSpaceStore) ? void 0 : n.id) && u ? (0, r.jsx)("span", {
                            style: w.text,
                            children: (0, r.jsx)(i(109939).sA, {
                                id: "HoverPreviewOverlay.customEmojiUpload",
                                defaultMessage: "Right-click to add to your workspace"
                            })
                        }) : void 0
                    })
                }) : null
            }
            let T = {
                container: {
                    fontSize: i(699422).J.UISmall.desktop,
                    color: i(632079).Tj.text.secondary
                },
                icon: {
                    height: "1em",
                    width: "1em",
                    marginInlineEnd: "0.25em"
                }
            };

            function C(e) {
                let {
                    annotation: t
                } = e.state, n = o().K7D(t), a = (0, i(109939).tz)(), l = "relative" === n.date_format ? "ll" : "relative", s = (0, i(850640).ZF)({
                    value: n,
                    date_format: l,
                    time_format: "h:mm A",
                    allowRelativeDates: !0,
                    intl: a
                });
                return s === (0, i(850640).ZF)({
                    value: n,
                    date_format: n.date_format,
                    time_format: n.time_format,
                    allowRelativeDates: !0,
                    intl: a
                }) ? null : (0, r.jsxs)(i(4458).fI, {
                    gap: 0,
                    paddingBlock: 4,
                    paddingInline: 8,
                    style: T.container,
                    alignItems: "center",
                    children: [(0, r.jsx)(i(16275).I, {
                        icon: i(428602).Y,
                        colorVariant: "secondary",
                        style: T.icon
                    }), (0, r.jsx)("div", {
                        style: i(699422).RC,
                        children: s
                    })]
                })
            }
            let B = {
                container: {
                    padding: "8px 12px",
                    minWidth: 100,
                    width: "max-content",
                    maxWidth: "min(400px, 90vw)",
                    position: "relative"
                },
                header: {
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    marginBottom: 4,
                    color: i(632079).Tj.red.text.secondary,
                    flexShrink: 0
                },
                text: {
                    color: i(632079).Tj.text.primary
                }
            };

            function R(e) {
                let {
                    deletedText: t
                } = e.state, o = (0, i(960253).e)(), a = (0, n.useRef)(null), [l, s] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    let e = a.current;
                    e && s(e.scrollHeight > e.clientHeight)
                }, [t]);
                let d = (0, i(960253).I)(() => ({
                    textContainer: {
                        maxHeight: "min(300px, 50vh)",
                        overflowY: "auto",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                        scrollbarWidth: "thin",
                        paddingBottom: 12 * !!l
                    },
                    overflowFade: {
                        position: "absolute",
                        bottom: 0,
                        insetInlineStart: 0,
                        insetInlineEnd: 0,
                        height: 24,
                        background: "dark" === o ? "linear-gradient(to top, rgba(32,32,32, 1), transparent)" : "linear-gradient(to top, rgba(255,255,255, 1), transparent)",
                        pointerEvents: "none",
                        borderStartStartRadius: 0,
                        borderStartEndRadius: 0,
                        borderEndEndRadius: 4,
                        borderEndStartRadius: 4
                    }
                }), [o, l]);
                return (0, r.jsxs)("div", {
                    style: B.container,
                    children: [(0, r.jsxs)("div", {
                        style: B.header,
                        children: [(0, r.jsx)(i(465584).G, {}), (0, r.jsx)(i(111010).D, {
                            styleKey: "bodySmMedium",
                            children: (0, r.jsx)(i(109939).sA, {
                                id: "HoverPreviewOverlay.deletedHeader",
                                defaultMessage: "Deleted"
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        ref: a,
                        style: d.textContainer,
                        children: (0, r.jsx)("span", {
                            style: B.text,
                            children: t
                        })
                    }), l ? (0, r.jsx)("div", {
                        style: d.overflowFade
                    }) : null]
                })
            }
            let P = {
                container: {
                    fontSize: i(699422).J.UISmall.desktop,
                    color: i(632079).Tj.text.secondary
                }
            };

            function D(e) {
                let {
                    annotation: t
                } = e.state, n = o().y0Y(t), a = (0, i(109939).tz)(), l = (0, i(664993).EC)(n.type, a);
                return (0, r.jsx)(i(4458).fI, {
                    gap: 0,
                    paddingBlock: 4,
                    paddingInline: 8,
                    style: P.container,
                    alignItems: "center",
                    children: (0, r.jsx)("div", {
                        style: i(699422).RC,
                        children: l
                    })
                })
            }
            let E = {
                title: {
                    color: i(632079).Tj.text.primary,
                    fontWeight: i(699422).Wy.semibold,
                    whiteSpace: "initial",
                    fontSize: 13,
                    padding: "4px 0",
                    width: "100%"
                },
                header: {
                    color: i(632079).Tj.text.secondary,
                    fontSize: i(699422).J.UISmall.desktop
                },
                dictionaryKey: {
                    color: i(632079).Tj.text.tertiary,
                    fontWeight: i(699422).Wy.regular,
                    fontSize: i(699422).J.UISmall.desktop
                },
                dictionaryValue: {
                    color: i(632079).Tj.text.secondary,
                    fontSize: i(699422).J.UISmall.desktop,
                    whiteSpace: "normal",
                    wordBreak: "break-word"
                },
                style3: {
                    marginInlineEnd: 6
                },
                style4: {
                    width: "100%",
                    maxHeight: 200
                }
            };

            function z(e) {
                var t, n;
                let {
                    renderConfig: o,
                    store: a
                } = e, l = (0, i(533992).v3)(), s = null == (t = o.previewImageAttribute) ? void 0 : t.values[0], d = a.pointer, [c] = (0, i(97668).Yb)(async () => {
                    if (s) return (0, i(783826).L)({
                        isAuthenticated: !0,
                        url: s,
                        permissionRecord: d
                    }, l)
                }, [l, s, d]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [o.title ? (0, r.jsx)(i(4458).fI, {
                        gap: 0,
                        children: (0, r.jsx)(i(119418).Ic, { ...o.title,
                            store: a,
                            style: E.title
                        })
                    }) : void 0, o.headerAttributes && o.headerAttributes.length > 0 ? (0, r.jsx)(i(4458).fI, {
                        gap: 0,
                        alignItems: "center",
                        marginBottom: 8,
                        style: E.header,
                        children: (0, i(405843).G)(o.headerAttributes.map((e, t) => (0, r.jsx)(i(119418).Ic, { ...e,
                            store: a,
                            style: { ...E.header,
                                ...i(699422).RC
                            }
                        }, `attribute-${t}`)) || [], e => (0, r.jsxs)("span", {
                            children: [" ", "·", " "]
                        }, `dot-${e}`))
                    }) : void 0, o.dictionaryAttributes && o.dictionaryAttributes.length > 0 ? (0, r.jsx)(i(4458).VP, {
                        gap: 0,
                        children: o.dictionaryAttributes.map(({
                            key: e,
                            value: t
                        }, n) => {
                            var l;
                            return (0, r.jsxs)(i(4458).fI, {
                                gap: 0,
                                marginBottom: n !== ((null == (l = o.dictionaryAttributes) ? void 0 : l.length) ? ? 0) - 1 ? 4 : 8,
                                children: [(0, r.jsx)(i(4458).fI, {
                                    marginInlineEnd: 8,
                                    width: "30%",
                                    alignItems: "center",
                                    children: (0, r.jsx)("span", {
                                        style: E.dictionaryKey,
                                        children: (0, r.jsx)(i(109939).sA, { ...e.formatter,
                                            values: {
                                                value: t.attribute.name
                                            }
                                        })
                                    })
                                }), (0, r.jsxs)(i(4458).fI, {
                                    width: "70%",
                                    alignItems: "center",
                                    children: [t.icon && (0, i(375905).nN)(t.icon) ? (0, r.jsx)(i(392392).A, {
                                        type: "image_url",
                                        imageURL: t.icon.values[0],
                                        size: 16,
                                        style: E.style3
                                    }) : void 0, (0, r.jsx)(i(119418).Ic, { ...t,
                                        store: a,
                                        style: E.dictionaryValue,
                                        avatarStyle: E.style3
                                    })]
                                })]
                            }, n)
                        })
                    }) : void 0, o.bodyAttribute && !(0, i(375905).Q7)(o.bodyAttribute) ? (0, r.jsx)("div", {
                        style: ((null == (n = o.dictionaryAttributes) ? void 0 : n.length) ? ? 0) > 0 ? {
                            display: "flex",
                            marginTop: 3
                        } : {
                            display: "flex"
                        },
                        children: (0, r.jsx)(i(119418).xq, {
                            attribute: o.bodyAttribute,
                            store: a
                        })
                    }) : void 0, null != c && c.value ? (0, r.jsx)("div", {
                        style: {
                            marginTop: 6 * !!o.dictionaryAttributes,
                            marginBottom: 4,
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsx)(i(989059).A, {
                                src: c.value,
                                style: E.style4
                            })
                        })
                    }) : void 0]
                })
            }

            function O(e, t) {
                if (!e) return null;
                let i = e.find(e => e.key.formatter.id === t);
                return i ? i.value : null
            }

            function V(e, t) {
                return e ? e.filter(e => e.attribute && t.includes(e.attribute.id)) : null
            }

            function _(e, t) {
                if (!e) return null;
                let i = e.find(e => e.value.attribute.id === t);
                return i ? i.value : null
            }
            let U = {
                title: {
                    color: i(632079).Tj.text.primary,
                    fontWeight: i(699422).Wy.medium,
                    whiteSpace: "initial",
                    fontSize: 14,
                    padding: "4px 0",
                    width: "100%"
                },
                header: {
                    color: i(632079).Tj.text.secondary,
                    fontSize: i(699422).J.UISmall.desktop,
                    paddingInlineStart: 8,
                    flexGrow: 1,
                    fontWeight: i(699422).Wy.regular
                },
                dictionaryValue: {
                    color: i(632079).Tj.text.primary,
                    fontSize: i(699422).J.UISmall.desktop,
                    whiteSpace: "normal",
                    wordBreak: "break-word"
                },
                buttonOrigin: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 24,
                    height: 24,
                    borderRadius: 4,
                    fill: i(632079).Tj.icon.tertiary
                },
                style1: {
                    fontSize: 12
                },
                style2: {
                    marginInlineEnd: 4
                },
                style3: {
                    fontWeight: i(699422).Wy.medium
                },
                style4: {
                    position: "relative"
                },
                style7: {
                    marginInlineEnd: 6
                },
                style8: {
                    lineHeight: "16px",
                    display: "flex",
                    gap: 4
                },
                style9: {
                    marginInlineStart: 4
                }
            };

            function H(e) {
                var t, n, o;
                let {
                    renderConfig: a,
                    store: l,
                    integration: s,
                    haveInstanceAction: d,
                    containerDivRef: c,
                    token: u,
                    parentBlockStore: p,
                    onDismiss: g
                } = e, y = null == (t = O(a.dictionaryAttributes, "unfurling.github.pullRequest")) ? void 0 : t.attribute.values[0], m = O(a.dictionaryAttributes, "unfurling.generic.status"), h = O(a.dictionaryAttributes, "unfurling.generic.author"), v = (n = a.headerAttributes, o = ["unfurling.github.githubPullMerged", "unfurling.github.githubPullClosed", "unfurling.github.githubPullOpened"], n ? n.find(e => e.formatter && o.includes(e.formatter.id)) || null : null);
                return (0, r.jsxs)(i(4458).VP, {
                    width: 295,
                    children: [(0, r.jsxs)(i(4458).fI, {
                        gap: 0,
                        alignItems: "center",
                        style: U.style1,
                        children: [(0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(i(392392).A, {
                                type: "image_url",
                                imageURL: s.icon,
                                size: 16,
                                style: U.style2
                            }), (0, r.jsx)("div", {
                                style: U.style3,
                                children: "GitHub"
                            })]
                        }), y ? (0, r.jsx)("div", {
                            style: U.header,
                            children: (0, r.jsx)(i(109939).sA, {
                                id: "unfurling.github.pullRequestNo",
                                defaultMessage: "PR {prNumber}",
                                values: {
                                    prNumber: y
                                }
                            })
                        }) : void 0, d ? void 0 : (0, r.jsx)("div", {
                            style: U.style4,
                            children: (0, r.jsx)(i(656252).A, {
                                popupType: i(656252).z.Popup,
                                placementToOrigin: "right",
                                alignmentToOrigin: "start",
                                originGap: 4,
                                onClose: () => {
                                    let e = !1,
                                        t = c.current;
                                    t && (e = (0, i(195304).ux)(t.getBoundingClientRect(), i(398902).$C.x, i(398902).$C.y)), e || null == g || g()
                                },
                                content: e => (0, r.jsx)(i(113858).ExternalObjectInstanceBlockMenu, {
                                    titleForReloadMenuOption: (0, r.jsx)(i(109939).sA, {
                                        id: "linkMention.reload",
                                        defaultMessage: "Reload mention"
                                    }),
                                    parentBlockStore: p,
                                    store: l,
                                    token: u,
                                    onAccept: () => e.close(),
                                    extraSecondaryItemKey: "mention_to_preview"
                                }),
                                children: e => (0, r.jsx)(i(64960).Ay, {
                                    style: U.buttonOrigin,
                                    ...e,
                                    children: (0, r.jsx)(i(16275).I, {
                                        icon: i(397900).ellipsisIcon
                                    })
                                })
                            })
                        })]
                    }), a.title ? (0, r.jsx)(i(4458).fI, {
                        gap: 0,
                        children: (0, r.jsx)(i(119418).Ic, { ...a.title,
                            store: l,
                            style: U.title
                        })
                    }) : void 0, (0, r.jsxs)(i(4458).fI, {
                        gap: 4,
                        alignSelf: "stretch",
                        alignItems: "center",
                        children: [m ? (0, r.jsxs)(i(4458).fI, {
                            width: "fit-content",
                            alignItems: "center",
                            children: [m.icon && (0, i(375905).nN)(m.icon) ? (0, r.jsx)(i(392392).A, {
                                type: "image_url",
                                imageURL: m.icon.values[0],
                                size: 14
                            }) : void 0, (0, r.jsx)(i(119418).Ic, { ...m,
                                store: l,
                                style: U.dictionaryValue,
                                avatarStyle: U.style7
                            })]
                        }) : void 0, (0, r.jsxs)("div", {
                            style: U.style8,
                            children: [v ? (0, r.jsx)(i(4458).fI, {
                                width: "fit-content",
                                alignItems: "center",
                                gap: 4,
                                children: (0, r.jsx)(i(119418).Ic, {
                                    attribute: v.attribute,
                                    store: l,
                                    style: U.dictionaryValue
                                })
                            }) : void 0, h ? (0, r.jsxs)(i(4458).fI, {
                                width: "fit-content",
                                alignItems: "center",
                                gap: 4,
                                children: [(0, r.jsx)("div", {
                                    style: U.dictionaryValue,
                                    children: (0, r.jsx)(i(109939).sA, {
                                        id: "unfurling.generic.by",
                                        defaultMessage: "by"
                                    })
                                }), h.icon && (0, i(375905).nN)(h.icon) ? (0, r.jsx)(i(392392).A, {
                                    type: "image_url",
                                    imageURL: h.icon.values[0],
                                    size: 16,
                                    style: U.style9
                                }) : void 0, (0, r.jsx)(i(119418).Ic, { ...h,
                                    store: l,
                                    style: U.dictionaryValue
                                })]
                            }) : void 0]
                        })]
                    })]
                })
            }
            let W = {
                dictionaryValue: {
                    color: i(632079).Tj.text.primary,
                    fontSize: i(699422).J.UISmall.desktop,
                    whiteSpace: "normal",
                    wordBreak: "break-word"
                },
                buttonOrigin: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 24,
                    height: 24,
                    borderRadius: 4,
                    fill: i(632079).Tj.icon.tertiary
                },
                actionButton: {
                    position: "absolute",
                    top: 10,
                    insetInlineEnd: 10,
                    zIndex: 2
                },
                style1: {
                    fontSize: 12
                },
                style2: {
                    marginInlineEnd: 4
                },
                style3: {
                    fontWeight: i(699422).Wy.medium
                },
                style6: {
                    marginInlineStart: 4
                },
                style7: {
                    width: "100%",
                    maxHeight: 200
                }
            };

            function N(e) {
                let {
                    renderConfig: t,
                    store: n,
                    integration: o,
                    haveInstanceAction: a,
                    containerDivRef: l,
                    token: s,
                    parentBlockStore: d,
                    onDismiss: c
                } = e, u = O(t.dictionaryAttributes, "unfurling.generic.lastModifiedBy"), p = O(t.dictionaryAttributes, "unfurling.generic.lastModifiedAt");
                return (0, r.jsxs)(i(4458).VP, {
                    width: 295,
                    children: [(0, r.jsx)(i(4458).fI, {
                        gap: 0,
                        alignItems: "center",
                        style: W.style1,
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(i(392392).A, {
                                type: "image_url",
                                imageURL: o.icon,
                                size: 16,
                                style: W.style2
                            }), (0, r.jsx)("div", {
                                style: W.style3,
                                children: "Figma"
                            })]
                        })
                    }), (0, r.jsxs)(i(4458).fI, {
                        gap: 4,
                        alignSelf: "stretch",
                        alignItems: "center",
                        children: [p ? (0, r.jsxs)(i(4458).fI, {
                            width: "fit-content",
                            alignItems: "center",
                            gap: 4,
                            children: [(0, r.jsx)("div", {
                                style: W.dictionaryValue,
                                children: (0, r.jsx)(i(109939).sA, {
                                    id: "unfurling.generic.editor",
                                    defaultMessage: "Edited"
                                })
                            }), (0, r.jsx)(i(119418).Ic, { ...p,
                                store: n,
                                style: W.dictionaryValue
                            })]
                        }) : void 0, u ? (0, r.jsxs)(i(4458).fI, {
                            width: "fit-content",
                            alignItems: "center",
                            gap: 4,
                            children: [(0, r.jsx)("div", {
                                style: W.dictionaryValue,
                                children: (0, r.jsx)(i(109939).sA, {
                                    id: "unfurling.generic.from",
                                    defaultMessage: "by"
                                })
                            }), u.icon && (0, i(375905).nN)(u.icon) ? (0, r.jsx)(i(392392).A, {
                                type: "image_url",
                                imageURL: u.icon.values[0],
                                size: 16,
                                style: W.style6
                            }) : void 0, (0, r.jsx)(i(119418).Ic, { ...u,
                                store: n,
                                style: W.dictionaryValue
                            })]
                        }) : void 0]
                    }), t.previewImageAttribute ? (0, r.jsx)("div", {
                        style: {
                            marginTop: 6 * !!t.dictionaryAttributes,
                            marginBottom: 4,
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsx)(i(989059).A, {
                                src: t.previewImageAttribute.values[0],
                                style: W.style7
                            })
                        })
                    }) : void 0, a ? void 0 : (0, r.jsx)("div", {
                        style: W.actionButton,
                        children: (0, r.jsx)(i(656252).A, {
                            popupType: i(656252).z.Popup,
                            placementToOrigin: "right",
                            alignmentToOrigin: "start",
                            originGap: 4,
                            onClose: () => {
                                let e = !1,
                                    t = l.current;
                                t && (e = (0, i(195304).ux)(t.getBoundingClientRect(), i(398902).$C.x, i(398902).$C.y)), e || null == c || c()
                            },
                            content: e => (0, r.jsx)(i(113858).ExternalObjectInstanceBlockMenu, {
                                titleForReloadMenuOption: (0, r.jsx)(i(109939).sA, {
                                    id: "linkMention.reload",
                                    defaultMessage: "Reload mention"
                                }),
                                parentBlockStore: d,
                                store: n,
                                token: s,
                                onAccept: () => e.close(),
                                extraSecondaryItemKey: "mention_to_preview"
                            }),
                            children: e => (0, r.jsx)(i(64960).Ay, {
                                style: W.buttonOrigin,
                                ...e,
                                children: (0, r.jsx)(i(16275).I, {
                                    icon: i(397900).ellipsisIcon
                                })
                            })
                        })
                    })]
                })
            }
            let K = {
                dictionaryValue: {
                    color: i(632079).Tj.text.primary,
                    fontSize: i(699422).J.UISmall.desktop,
                    whiteSpace: "normal",
                    wordBreak: "break-word"
                },
                channelValue: {
                    color: i(632079).Tj.text.secondary,
                    fontSize: i(699422).J.UISmall.desktop,
                    whiteSpace: "normal",
                    wordBreak: "break-word"
                },
                buttonOrigin: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 24,
                    height: 24,
                    borderRadius: 4,
                    fill: i(632079).Tj.icon.tertiary
                },
                actionButton: {
                    position: "absolute",
                    top: 10,
                    insetInlineEnd: 10,
                    zIndex: 2
                },
                style1: {
                    fontSize: 12
                },
                style2: {
                    padding: 2
                },
                style3: {
                    fontWeight: i(699422).Wy.medium,
                    marginInlineEnd: 8
                },
                style4: {
                    marginInlineEnd: 6
                },
                style6: {
                    marginInlineStart: 8
                }
            };

            function F(e) {
                var t, n;
                let {
                    renderConfig: o,
                    store: a,
                    integration: l,
                    haveInstanceAction: s,
                    containerDivRef: d,
                    token: c,
                    parentBlockStore: u,
                    onDismiss: p
                } = e, g = O(o.dictionaryAttributes, "unfurling.generic.author"), y = (n = o.dictionaryAttributes) ? n.find(e => "unfurling.slack.slackReplyCount" === e.key.formatter.id) || null : null, m = V(o.headerAttributes, ["title", "name"]), h = V(o.headerAttributes, ["sent_at"]), v = i(381453).hS(o.icons || [], e => `${e.type}:${e.values[0].toString()}`), x = v.length > 5 ? 5 : v.length;
                return (0, r.jsxs)(i(4458).VP, {
                    width: 295,
                    children: [(0, r.jsxs)(i(4458).fI, {
                        gap: 0,
                        alignItems: "center",
                        style: K.style1,
                        children: [(0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(i(392392).A, {
                                type: "image_url",
                                imageURL: l.icon,
                                size: 16,
                                style: K.style2
                            }), (0, r.jsx)("div", {
                                style: K.style3,
                                children: "Slack"
                            })]
                        }), m && m.length > 0 ? (0, r.jsx)(i(119418).Ic, {
                            attribute: m[0].attribute,
                            store: a,
                            style: K.channelValue,
                            avatarStyle: K.style4
                        }) : void 0]
                    }), (0, r.jsxs)(i(4458).fI, {
                        gap: 0,
                        paddingTop: 8,
                        alignSelf: "stretch",
                        alignItems: "center",
                        children: [g ? (0, r.jsx)(i(4458).fI, {
                            width: "fit-content",
                            alignItems: "center",
                            children: (0, r.jsx)(i(119418).Ic, { ...g,
                                store: a,
                                style: K.dictionaryValue
                            })
                        }) : void 0, h ? (0, r.jsx)("div", {
                            style: K.style6,
                            children: (0, r.jsx)(i(119418).Ic, { ...h[0],
                                store: a,
                                style: K.channelValue
                            })
                        }) : void 0]
                    }), (0, r.jsxs)(i(4458).VP, {
                        gap: 8,
                        children: [o.bodyAttribute && !(0, i(375905).Q7)(o.bodyAttribute) ? (0, r.jsx)("div", {
                            style: ((null == (t = o.dictionaryAttributes) ? void 0 : t.length) ? ? 0) > 0 ? {
                                display: "flex",
                                marginTop: 3
                            } : {
                                display: "flex"
                            },
                            children: (0, r.jsx)(i(119418).xq, {
                                attribute: o.bodyAttribute,
                                store: a
                            })
                        }) : void 0, (0, r.jsxs)(i(4458).fI, {
                            gap: 0,
                            alignSelf: "stretch",
                            alignItems: "center",
                            children: [o.icons && y ? (0, r.jsx)(q, {
                                renderConfig: o
                            }) : void 0, y ? (0, r.jsx)(i(119418).Ic, {
                                formatter: y.key.formatter,
                                attribute: y.value.attribute,
                                store: a,
                                style: { ...K.channelValue,
                                    transform: `translateX(-${(x-1)*3}px)`
                                },
                                avatarStyle: K.style4
                            }) : void 0]
                        })]
                    }), s ? void 0 : (0, r.jsx)("div", {
                        style: K.actionButton,
                        children: (0, r.jsx)(i(656252).A, {
                            popupType: i(656252).z.Popup,
                            placementToOrigin: "right",
                            alignmentToOrigin: "start",
                            originGap: 4,
                            onClose: () => {
                                let e = !1,
                                    t = d.current;
                                t && (e = (0, i(195304).ux)(t.getBoundingClientRect(), i(398902).$C.x, i(398902).$C.y)), e || null == p || p()
                            },
                            content: e => (0, r.jsx)(i(113858).ExternalObjectInstanceBlockMenu, {
                                titleForReloadMenuOption: (0, r.jsx)(i(109939).sA, {
                                    id: "linkMention.reload",
                                    defaultMessage: "Reload mention"
                                }),
                                parentBlockStore: u,
                                store: a,
                                token: c,
                                onAccept: () => e.close(),
                                extraSecondaryItemKey: "mention_to_preview"
                            }),
                            children: e => (0, r.jsx)(i(64960).Ay, {
                                style: K.buttonOrigin,
                                ...e,
                                children: (0, r.jsx)(i(16275).I, {
                                    icon: i(397900).ellipsisIcon
                                })
                            })
                        })
                    })]
                })
            }
            let L = {
                dictionaryValue: {
                    color: i(632079).Tj.text.primary,
                    fontSize: i(699422).J.UISmall.desktop,
                    whiteSpace: "normal",
                    wordBreak: "break-word"
                },
                buttonOrigin: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 24,
                    height: 24,
                    borderRadius: 4,
                    fill: i(632079).Tj.icon.tertiary
                },
                actionButton: {
                    position: "absolute",
                    top: 10,
                    insetInlineEnd: 10,
                    zIndex: 2
                },
                style1: {
                    fontSize: 12
                },
                style2: {
                    marginInlineEnd: 4
                },
                style3: {
                    fontWeight: i(699422).Wy.medium
                },
                style6: {
                    width: "100%",
                    maxHeight: 200
                }
            };

            function $(e) {
                let {
                    renderConfig: t,
                    store: n,
                    integration: o,
                    haveInstanceAction: a,
                    containerDivRef: l,
                    token: s,
                    parentBlockStore: d,
                    onDismiss: c,
                    fileType: u
                } = e, p = (0, i(960253).I)(() => ({
                    imageBackground: {
                        marginTop: 6 * !!t.dictionaryAttributes,
                        marginBottom: 4,
                        display: "flex",
                        justifyContent: "center",
                        padding: "docs" === u ? "14px 54px" : "14px 34px",
                        borderRadius: 6,
                        background: "doc" === u ? "#4285F4" : "sheet" === u ? "#34A853" : "#F8CB4A"
                    }
                }), [u, t.dictionaryAttributes]), g = _(t.dictionaryAttributes, "username"), y = _(t.dictionaryAttributes, "updated_at");
                return (0, r.jsxs)(i(4458).VP, {
                    width: 288,
                    children: [(0, r.jsx)(i(4458).fI, {
                        gap: 0,
                        alignItems: "center",
                        style: L.style1,
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(i(392392).A, {
                                type: "image_url",
                                imageURL: o.icon,
                                size: 16,
                                style: L.style2
                            }), (0, r.jsx)("div", {
                                style: L.style3,
                                children: "doc" === u ? "Google Docs" : "sheet" === u ? "Google Sheets" : "Google Slides"
                            })]
                        })
                    }), (0, r.jsxs)(i(4458).fI, {
                        gap: 4,
                        alignSelf: "stretch",
                        alignItems: "center",
                        children: [y ? (0, r.jsxs)(i(4458).fI, {
                            width: "fit-content",
                            alignItems: "center",
                            gap: 4,
                            children: [(0, r.jsx)("div", {
                                style: L.dictionaryValue,
                                children: (0, r.jsx)(i(109939).sA, {
                                    id: "unfurling.generic.editor",
                                    defaultMessage: "Edited"
                                })
                            }), (0, r.jsx)(i(119418).Ic, { ...y,
                                store: n,
                                style: L.dictionaryValue
                            })]
                        }) : void 0, g ? (0, r.jsxs)(i(4458).fI, {
                            width: "fit-content",
                            alignItems: "center",
                            gap: 4,
                            children: [(0, r.jsx)("div", {
                                style: L.dictionaryValue,
                                children: (0, r.jsx)(i(109939).sA, {
                                    id: "unfurling.generic.from",
                                    defaultMessage: "by"
                                })
                            }), (0, r.jsx)(i(119418).Ic, { ...g,
                                store: n,
                                style: L.dictionaryValue
                            })]
                        }) : void 0]
                    }), t.previewImageAttribute ? (0, r.jsx)("div", {
                        style: p.imageBackground,
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsx)(i(989059).A, {
                                src: t.previewImageAttribute.values[0],
                                style: L.style6
                            })
                        })
                    }) : void 0, a ? void 0 : (0, r.jsx)("div", {
                        style: L.actionButton,
                        children: (0, r.jsx)(i(656252).A, {
                            popupType: i(656252).z.Popup,
                            placementToOrigin: "right",
                            alignmentToOrigin: "start",
                            originGap: 4,
                            onClose: () => {
                                let e = !1,
                                    t = l.current;
                                t && (e = (0, i(195304).ux)(t.getBoundingClientRect(), i(398902).$C.x, i(398902).$C.y)), e || null == c || c()
                            },
                            content: e => (0, r.jsx)(i(113858).ExternalObjectInstanceBlockMenu, {
                                titleForReloadMenuOption: (0, r.jsx)(i(109939).sA, {
                                    id: "linkMention.reload",
                                    defaultMessage: "Reload mention"
                                }),
                                parentBlockStore: d,
                                store: n,
                                token: s,
                                onAccept: () => e.close(),
                                extraSecondaryItemKey: "mention_to_preview"
                            }),
                            children: e => (0, r.jsx)(i(64960).Ay, {
                                style: L.buttonOrigin,
                                ...e,
                                children: (0, r.jsx)(i(16275).I, {
                                    icon: i(397900).ellipsisIcon
                                })
                            })
                        })
                    })]
                })
            }
            let G = {
                    gap: -5.333
                },
                J = {
                    paddingInlineEnd: 4
                };

            function q({
                renderConfig: e
            }) {
                let t = i(381453).hS(e.icons || [], e => `${e.type}:${e.values[0].toString()}`);
                return t.length >= 2 ? (0, r.jsx)(i(4458).fI, {
                    gap: "inherit",
                    height: 16,
                    justifyContent: "flex-end",
                    style: G,
                    children: t.slice(0, 5).map((e, t) => (0, r.jsx)(i(119418).Tr, {
                        attribute: e,
                        isSmall: !0,
                        isUltraSmall: !0,
                        style: {
                            zIndex: 10 - t,
                            transform: `translateX(${-5*t}px)`,
                            position: "relative"
                        }
                    }, t))
                }) : 1 === t.length ? (0, r.jsx)("div", {
                    style: J,
                    children: (0, r.jsx)(i(119418).Tr, {
                        attribute: t[0],
                        isSmall: !0,
                        isUltraSmall: !0
                    })
                }) : null
            }
            let Z = {
                style1: {
                    fontSize: 12
                },
                style2: {
                    margin: 4
                },
                style3: {
                    flexGrow: 1,
                    fontWeight: i(699422).Wy.medium
                },
                style4: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 24,
                    height: 24,
                    borderRadius: 4,
                    fill: i(632079).Tj.icon.tertiary
                },
                style5: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "6px 0"
                }
            };

            function Y(e) {
                let {
                    state: {
                        annotation: t,
                        store: a,
                        token: l
                    },
                    onDismiss: s
                } = e, d = o().T$c(t), c = (0, i(533992).v3)(), u = (0, i(960253).e)(), p = (0, n.useRef)(null), [g, y] = (0, n.useState)(!1), [m, h] = (0, n.useState)(!1), v = (0, i(682985).K8)(() => {
                    let t = i(970831).B.createChildStore(a, {
                            table: i(832375).evP,
                            id: d,
                            spaceId: a.pointer.spaceId
                        }),
                        n = t.canEdit(),
                        o = i(218744).default.checkGate({
                            gateName: "new_hover_designs_lp"
                        }),
                        g = (0, i(939042).Su)({
                            store: t,
                            isInDarkMode: "dark" === u,
                            canEdit: n,
                            currentUserId: c.currentUser.id,
                            getRenderFn: e => t => {
                                var n, o;
                                return (null == (n = e.hover) ? void 0 : n.call(e, t)) || (null == (o = i(625591).u.hover) ? void 0 : o.call(i(625591).u, t))
                            },
                            showAction: void 0
                        });
                    if (!g || !i(205885).A.state.online) return;
                    let {
                        renderConfig: m,
                        integration: v
                    } = g, x = !!g.action, f = e.isHoveredTokenEditable, j = a.recordStoreUIParentStore && a.recordStoreUIParentStore instanceof i(970831).B ? a.recordStoreUIParentStore : void 0, b = v.id === i(49361).Hd && (null == g ? void 0 : g.action) === "error" && (null == g ? void 0 : g.status_code) === 428, S = v.id === i(49361).Hd && (null == g ? void 0 : g.action) === "update";
                    if (y(b), h(S), o) {
                        if (v.id === i(49361).bh || v.id === i(49361).ZY) return (0, r.jsx)(H, {
                            store: t,
                            integration: v,
                            renderConfig: m,
                            haveInstanceAction: x,
                            containerDivRef: p,
                            token: l,
                            parentBlockStore: j,
                            onDismiss: s
                        });
                        else if (v.id === i(49361).e1) return (0, r.jsx)(N, {
                            store: t,
                            integration: v,
                            renderConfig: m,
                            haveInstanceAction: x,
                            containerDivRef: p,
                            token: l,
                            parentBlockStore: j,
                            onDismiss: s
                        });
                        else if (v.id === i(49361).zG) return (0, r.jsx)(F, {
                            store: t,
                            integration: v,
                            renderConfig: m,
                            haveInstanceAction: x,
                            containerDivRef: p,
                            token: l,
                            parentBlockStore: j,
                            onDismiss: s
                        });
                        else if (v.id === i(49361).Hd) {
                            let e = t.getFormat().uri,
                                i = "drive";
                            if (e && (i = e.includes("spreadsheets") ? "sheet" : e.includes("document") ? "doc" : e.includes("presentation") ? "slide" : "drive"), "drive" !== i) return (0, r.jsx)($, {
                                store: t,
                                integration: v,
                                renderConfig: m,
                                haveInstanceAction: x,
                                containerDivRef: p,
                                token: l,
                                parentBlockStore: j,
                                onDismiss: s,
                                fileType: i
                            })
                        }
                    }
                    return (0, r.jsxs)(i(4458).VP, {
                        ref: p,
                        children: [b ? void 0 : (0, r.jsxs)(i(4458).fI, {
                            gap: 0,
                            alignItems: "center",
                            style: Z.style1,
                            children: [S ? null : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(i(392392).A, {
                                    type: "image_url",
                                    imageURL: v.icon,
                                    size: 16,
                                    style: Z.style2
                                }), (0, r.jsx)("div", {
                                    style: Z.style3,
                                    children: v.name
                                })]
                            }), l && !x && f ? (0, r.jsx)("div", {
                                children: (0, r.jsx)(i(656252).A, {
                                    popupType: i(656252).z.Popup,
                                    placementToOrigin: "right",
                                    alignmentToOrigin: "start",
                                    originGap: 4,
                                    onClose: () => {
                                        let e = !1,
                                            t = p.current;
                                        t && (e = (0, i(195304).ux)(t.getBoundingClientRect(), i(398902).$C.x, i(398902).$C.y)), e || null == s || s()
                                    },
                                    content: e => (0, r.jsx)(i(113858).ExternalObjectInstanceBlockMenu, {
                                        titleForReloadMenuOption: (0, r.jsx)(i(109939).sA, {
                                            id: "linkMention.reload",
                                            defaultMessage: "Reload mention"
                                        }),
                                        parentBlockStore: j,
                                        store: t,
                                        token: l,
                                        onAccept: () => e.close(),
                                        extraSecondaryItemKey: "mention_to_preview"
                                    }),
                                    children: e => (0, r.jsx)(i(64960).Ay, {
                                        style: Z.style4,
                                        ...e,
                                        children: (0, r.jsx)(i(16275).I, {
                                            icon: i(397900).ellipsisIcon
                                        })
                                    })
                                })
                            }) : void 0]
                        }), x && f ? (0, r.jsx)("div", {
                            style: Z.style5,
                            children: (0, r.jsx)(i(940594).A, {
                                canEdit: n,
                                store: t,
                                isHoverPreview: !0,
                                postActionCallback: s
                            })
                        }) : (0, r.jsx)(z, {
                            renderConfig: m,
                            store: t
                        })]
                    })
                }, [d, a, c, u, l, s, e.isHoveredTokenEditable, p]);
                return v ? (0, r.jsx)("div", {
                    style: {
                        padding: m ? "0px 4px" : g ? "0px 15px" : "12px 16px",
                        minWidth: 260,
                        maxWidth: 450
                    },
                    children: v
                }) : null
            }

            function X(e) {
                let t = (0, i(533992).v3)(),
                    {
                        store: n,
                        contentBlockStart: o
                    } = (0, i(682985).K8)(() => {
                        let t = e.state.store;
                        if (!t) return {
                            store: void 0,
                            contentBlockStart: void 0
                        };
                        let n = "token" === e.state.type ? e.state.annotation[1] : e.state.store.pointer.id,
                            o = i(970831).B.createChildStore(t, {
                                id: n,
                                table: "block"
                            });
                        if (!o.isNavigableBlock()) {
                            var r;
                            let e = null == (r = o.getNavigableBlockStore()) ? void 0 : r.pointer;
                            return {
                                store: e ? i(970831).B.createChildStore(t, e) : void 0,
                                contentBlockStart: o
                            }
                        }
                        return o.isDefined() ? {
                            store: o
                        } : {
                            store: void 0,
                            contentBlockStart: void 0
                        }
                    }, [e.state]),
                    a = (0, i(682985).K8)(() => !!n && (0, i(597845).Wi)(t, n.id), [n, t]),
                    l = (0, i(693410).M)(n);
                return a ? null : n && l && e.originRect ? (0, r.jsx)(j, {
                    store: n,
                    closestNonAliveAncestorStore: l,
                    originRect: e.originRect
                }) : (0, r.jsx)(i(272307).HoverPagePreview, {
                    store: n,
                    contentBlocks: o && [o]
                })
            }

            function Q(e) {
                let t = (0, i(533992).v3)(),
                    {
                        collectionStore: n,
                        parentCollectionViewBlockStore: o
                    } = (0, i(682985).K8)(() => {
                        var t;
                        let n = (null == e ? void 0 : e.state.spaceStore) ? ? (null == (t = i(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.getSpaceStore());
                        if (!n) return {
                            collectionStore: void 0,
                            parentCollectionViewBlockStore: void 0
                        };
                        let o = e.state.annotation[1],
                            r = i(356912).m.createChildStore(n, {
                                id: o,
                                table: i(832375).VlP
                            });
                        return {
                            collectionStore: r,
                            parentCollectionViewBlockStore: r.getParentCollectionViewBlockStore()
                        }
                    }, [e.state.annotation, e.state.spaceStore]),
                    a = (0, i(693410).M)(o),
                    l = (0, i(682985).K8)(() => !(null != n && n.getAlive()) || !!a, [n, a]),
                    s = (0, i(682985).K8)(() => !!o && (0, i(597845).Wi)(t, o.id), [o, t]);
                return n && o && !s ? l && e.originRect ? (0, r.jsx)(j, {
                    store: n,
                    closestNonAliveAncestorStore: a,
                    originRect: e.originRect
                }) : (0, r.jsx)(ee, {
                    collectionStore: n,
                    parentCollectionViewBlockStore: o
                }) : null
            }

            function ee(e) {
                let {
                    collectionStore: t,
                    parentCollectionViewBlockStore: n,
                    events: o,
                    size: a = "regular"
                } = e, l = (0, i(682985).K8)(() => null == t ? void 0 : t.getIcon(), [t]);
                return t && n ? (0, r.jsxs)("div", {
                    style: i(268896).i.wrapper,
                    ...o,
                    children: [(0, r.jsx)("div", {
                        style: i(268896).i.coverContainer,
                        children: (0, r.jsx)(i(15021).d, {
                            store: n,
                            disabled: !0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            height: 36,
                            proxyWidth: 260
                        })
                    }), (0, r.jsx)(i(569553).B6, {
                        disabled: !0,
                        icon: l,
                        iconRecordCategory: "collection",
                        isEmptyPage: !1,
                        isLarge: !0,
                        disableShrinking: !0,
                        size: 26,
                        emojiSize: 26,
                        largeIcon: !0,
                        style: i(268896).i.pageTitleIcon
                    }), (0, r.jsxs)(i(4458).VP, {
                        gap: 4,
                        paddingInline: 16,
                        children: [(0, r.jsxs)(i(4458).VP, {
                            gap: 2,
                            children: [(0, r.jsx)(i(307983).Ay, {
                                store: t,
                                style: i(268896).i.breadcrumb
                            }), (0, r.jsx)("div", {
                                style: i(268896).i.pageTitleContainer,
                                children: (0, r.jsx)(i(627918).A, {
                                    shouldWrap: !0,
                                    maxLines: 2,
                                    store: t,
                                    style: i(268896).i.pageTitle
                                })
                            })]
                        }), (0, r.jsx)(i(892452).f, {
                            store: n,
                            size: a
                        })]
                    })]
                }) : null
            }
        },
        113858: (e, t, i) => {
            i.r(t), i.d(t, {
                ExternalObjectInstanceBlockMenu: () => l
            }), i(944114), i(898992), i(672577);
            var n = i(296540),
                o = i(474848);
            let r = {
                    paddingTop: 0,
                    paddingBottom: 0
                },
                a = {
                    paddingTop: 3,
                    paddingBottom: 3
                };

            function l(e) {
                let {
                    titleForReloadMenuOption: t,
                    store: l,
                    parentBlockStore: s,
                    onAccept: d,
                    onDismiss: c,
                    extraSecondaryItemKey: u,
                    token: p
                } = e, g = (0, i(533992).v3)(), y = (0, i(67499).S)(), m = (0, n.useCallback)(e => {
                    let t = {
                        blocks: [l],
                        environment: g,
                        publicEditMode: void 0,
                        analyticsFrom: "external_object_instance_block_menu",
                        pageContext: y
                    };
                    return e.lazyDependencyKeys && (0, i(968864).G)(...e.lazyDependencyKeys), {
                        key: e.key,
                        render: (i, n) => e.render(i, t, {
                            onAccept: d,
                            onFocus: n.onFocus
                        }),
                        action: ({
                            event: i
                        }) => e.action(t, i)
                    }
                }, [l, g, d, y]), h = (0, i(682985).K8)(() => {
                    let e = l.getFormat().bot_id,
                        t = i(610463).A.getBotsAsRecordMap();
                    if (e && !0 === i(610463).A.state.loaded) {
                        let n = t.getValue({
                            table: i(832375).GPl,
                            id: e
                        });
                        if (n && n.integration_id && n.integration_id === i(49361).ob) return !1
                    }
                    return (!e || !0 !== i(610463).A.state.loaded || !!i(610463).A.externalAuthentications.state.find(({
                        id: t
                    }) => e === t)) && !0
                }, [l]), v = [], x = !(0, i(682985).O$)(i(205885).e);
                h && v.push({
                    key: 0,
                    render: e => (0, o.jsx)(i(844565).A, { ...e,
                        style: r
                    }),
                    items: [{
                        key: "reload external instance object",
                        render: e => (0, o.jsx)(i(860287).A, { ...e,
                            title: t,
                            svg: i(194123).a,
                            disabled: x,
                            style: x ? {
                                opacity: .4
                            } : void 0,
                            tooltipText: x ? (0, o.jsx)(i(109939).sA, {
                                id: "externalObjectInstanceBlockMenu.reload.offlineTooltip",
                                defaultMessage: "Unavailable while offline"
                            }) : void 0
                        }),
                        action: () => {
                            !l || (l.isExternalObjectInstanceBlockStore() || l.isExternalObjectInstancePageBlockStore()) && i(994869).updateExternalObjectInstance({
                                environment: g,
                                from: "page_more_menu",
                                store: l,
                                spaceId: l.getSpaceId()
                            })
                        }
                    }]
                });
                let f = (0, i(682985).K8)(() => {
                    switch (u) {
                        case "preview_to_mention":
                            return [m(i(982735).oq)];
                        case "mention_to_preview":
                            if (!l.isExternalObjectInstanceBlockStore() || !s || !p) return [];
                            return [{
                                key: "turn preview into block",
                                render: e => (0, o.jsx)(i(860287).A, { ...e,
                                    title: (0, o.jsx)(i(109939).sA, {
                                        id: "hoverPreviewOverlay.action.turnPreviewIntoPreview",
                                        defaultMessage: "Turn into preview"
                                    }),
                                    svg: i(84697).arrowSquarePathUpDownIcon
                                }),
                                action: () => {
                                    let e = l.getSpaceId();
                                    (0, i(377796).createAndCommit)({
                                        userAction: "HoverPreviewOverlay.transformExternalObjectInstanceMentionIntoBlock",
                                        environment: g,
                                        cellTarget: {
                                            spaceWithId: e
                                        },
                                        canUndo: !0,
                                        perform: e => {
                                            i(994869).transformExternalObjectInstanceMentionIntoBlock({
                                                block: l,
                                                parentStore: s,
                                                transaction: e,
                                                token: p
                                            }), e.postSubmitCallbacks.push(e => {
                                                e || null == c || c()
                                            })
                                        }
                                    })
                                }
                            }];
                        default:
                            (0, i(722371).HB)(u)
                    }
                }, [u, m, l, s, p, g, c]);
                return v.push({
                    key: 1,
                    render: e => (0, o.jsx)(i(844565).A, { ...e,
                        style: r
                    }),
                    items: [...f, m(i(982735).tA)]
                }), (0, o.jsx)(i(747369).A, {
                    menuType: i(649476).gu.Popup,
                    children: (0, o.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        initialFocus: void 0,
                        onAccept: d,
                        sections: v,
                        style: a
                    })
                })
            }
        },
        269130: (e, t, i) => {
            i.d(t, {
                Q: () => l
            }), i(581454);
            var n = i(296540),
                o = i(474848);
            let r = {
                    display: "flex",
                    alignContent: "flex-end",
                    minWidth: 140,
                    width: "100%",
                    marginTop: 4
                },
                a = {
                    flexGrow: 1
                };

            function l(e) {
                let {
                    groupId: t,
                    limit: l,
                    noMembersMessage: s,
                    color: d,
                    trackHover: c
                } = e, u = (0, i(960253).I)(() => ({
                    container: {
                        marginBottom: 4,
                        ..."white_background" === d ? {
                            fontSize: i(699422).J.UISmall.desktop,
                            color: i(632079).Tj.text.secondary,
                            padding: "4px 8px"
                        } : {}
                    },
                    moreMessage: {
                        marginInlineStart: 2,
                        marginTop: 4,
                        ..."white_background" === d ? {
                            fontSize: i(699422).J.UISmall.desktop,
                            color: i(632079).Tj.text.secondary
                        } : {
                            color: i(632079).Tj.text.inverseSecondary
                        }
                    }
                }), [d]), p = (0, i(533992).v3)(), g = (0, i(972740).L)();
                (0, n.useEffect)(() => {
                    c && i(611844).ZX(p, {
                        group_id: t
                    })
                }, [c, t, p]);
                let [{
                    value: y
                }] = (0, i(97668).Yb)(async () => {
                    if (!g) return;
                    let e = await p.api.callApi({
                        eventName: "getSpacePermissionGroupMembers",
                        environment: p,
                        data: {
                            groupIds: [t],
                            spaceId: g.id
                        }
                    });
                    if ("success" === e.type) {
                        var n;
                        let o = (null == (n = e.data.groupUsersMap[t]) ? void 0 : n.userIds) ? ? [];
                        return (0, i(405461).gA)({
                            userIds: o,
                            limit: l,
                            spaceStore: g
                        })
                    }
                }, [g, p, t, l]);
                return (null == y ? void 0 : y.limitedUserStores.length) === 0 ? void 0 === s ? null : (0, o.jsx)("span", {
                    children: s
                }) : (0, o.jsxs)("div", {
                    style: u.container,
                    children: [null == y ? void 0 : y.limitedUserStores.map(e => (0, o.jsx)("div", {
                        style: r,
                        children: (0, o.jsx)(i(980494).A, {
                            style: a,
                            userStore: e,
                            avatarSize: 18,
                            hasPersonHoverCard: !1
                        })
                    }, e.id)), y && y.countRemainingUsers > 0 ? (0, o.jsx)("div", {
                        style: u.moreMessage,
                        children: (0, o.jsx)(i(109939).sA, {
                            id: "blockPermissionsSettings.groupPermissionUsers.tooltip",
                            defaultMessage: "{countRemainingUsers} more…",
                            values: {
                                countRemainingUsers: y.countRemainingUsers
                            }
                        })
                    }) : null]
                })
            }
        },
        454736: (e, t, i) => {
            i.d(t, {
                p: () => r
            }), i(296540);
            var n = i(474848);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 1.94 14.91 15.66",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M10.55 12.808a1.35 1.35 0 1 0-1.1 0v1.242a.55.55 0 1 0 1.1 0z"
                        }), (0, n.jsx)("path", {
                            d: "M15.4 1.95a3.48 3.48 0 0 0-3.48 3.48v1.92H6.4a2.425 2.425 0 0 0-2.425 2.425v5.4A2.425 2.425 0 0 0 6.4 17.6h7.2a2.425 2.425 0 0 0 2.425-2.425v-5.4A2.425 2.425 0 0 0 13.6 7.35h-.43V5.43a2.23 2.23 0 1 1 4.46 0v2.095a.625.625 0 1 0 1.25 0V5.43a3.48 3.48 0 0 0-3.48-3.48M5.225 9.775c0-.649.526-1.175 1.175-1.175h7.2c.649 0 1.175.526 1.175 1.175v5.4c0 .649-.526 1.175-1.175 1.175H6.4a1.175 1.175 0 0 1-1.175-1.175z"
                        })]
                    })
                },
                r = (0, i(104509).wt)("lockOpen", o, "default")
        },
        693410: (e, t, i) => {
            i.d(t, {
                M: () => n
            });

            function n(e) {
                return (0, i(682985).K8)(() => e && e.getClosestNonAliveAncestor(), [e])
            }
        },
        732080: (e, t, i) => {
            i.d(t, {
                A: () => r
            }), i(296540);
            var n = i(474848);
            let o = {
                    label: {
                        color: i(632079).Tj.text.inversePrimary,
                        fontWeight: i(699422).Wy.medium,
                        textAlign: "center",
                        overflowWrap: "anywhere"
                    },
                    emojiContainer: {
                        background: "white",
                        borderRadius: 4,
                        padding: 4,
                        display: "flex",
                        lineHeight: 1,
                        marginTop: 2
                    }
                },
                r = function(e) {
                    let {
                        type: t,
                        emoji: r,
                        customEmojiStore: a,
                        text: l,
                        deletedText: s,
                        subText: d
                    } = e, c = (0, i(682985).K8)(() => "custom" === t && a.isDefined() && a.getAlive(), [a, t]);
                    return (0, n.jsxs)(i(4458).VP, {
                        gap: 4,
                        alignItems: "center",
                        children: ["custom" === t && c ? (0, n.jsx)("div", {
                            style: o.emojiContainer,
                            children: (0, n.jsx)(i(689479).A, {
                                emojiStore: a,
                                size: 40
                            })
                        }) : "unicode" === t ? (0, n.jsx)("div", {
                            style: o.emojiContainer,
                            children: (0, n.jsx)(i(945304).A, {
                                size: 40,
                                char: r
                            })
                        }) : null, (0, n.jsx)(i(324489).V, {
                            isSmall: !0,
                            isMultiline: !0,
                            style: o.label,
                            children: "unicode" === t || c ? l : s
                        }), d ? (0, n.jsx)(i(324489).V, {
                            isSmall: !0,
                            isMultiline: !0,
                            style: o.label,
                            children: d
                        }) : void 0]
                    })
                }
        },
        802244: (e, t, i) => {
            function n(e) {
                let {
                    store: t,
                    closestNonAliveAncestorStore: n,
                    intl: r
                } = e;
                return (0, i(682985).K8)(() => {
                    let e = t.table !== i(832375).VlP || t.getAlive() ? n : t,
                        a = e && (e.table === i(832375).evP || e.table === i(832375).VlP) && e.getMovedToTrashTime();
                    if (a) {
                        let t = e.getMovedToTrashStore();
                        return {
                            trashAuthorStore: t,
                            trashAuthorDisplayName: o(t, r),
                            trashTimestamp: a,
                            isMovedToTrashMetadata: !0
                        }
                    }
                    if (t.table !== i(832375).evP) return {
                        trashAuthorStore: void 0,
                        trashAuthorDisplayName: void 0,
                        trashTimestamp: void 0,
                        isMovedToTrashMetadata: !1
                    }; {
                        let e = t.getLastEditedByStore();
                        return {
                            trashAuthorStore: e,
                            trashAuthorDisplayName: o(e, r),
                            trashTimestamp: t.getLastEditedTime(),
                            isMovedToTrashMetadata: !1
                        }
                    }
                }, [t, n, r])
            }

            function o(e, t) {
                return (null == e ? void 0 : e.getDisplayName(t)) || t.formatMessage(i(993189).Fvx.messages.anonymousPlaceholder)
            }
            i.d(t, {
                x: () => n
            })
        },
        820997: (e, t, i) => {
            i.d(t, {
                D: () => o
            }), i(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.37 11.75 9.25",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M4 3.375c-1.036 0-1.875.84-1.875 1.875v5.5c0 1.036.84 1.875 1.875 1.875h8c1.036 0 1.875-.84 1.875-1.875v-5.5c0-1.036-.84-1.875-1.875-1.875zm4 4.991L4.26 4.625h7.482zm-4.625 2.122v-4.98l2.49 2.49zm9.25 0-2.49-2.49 2.49-2.489zm-8.37.887 2.493-2.493.81.81c.244.244.64.244.884 0l.81-.81 2.492 2.493z"
                    })
                },
                o = (0, i(104509).wt)("envelopeSmall", n, "small")
        }
    }
]);