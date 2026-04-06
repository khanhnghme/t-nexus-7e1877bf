"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [21475, 32626, 71481], {
        669: (e, t, n) => {
            n.d(t, {
                A: () => c
            });
            var o = n(296540),
                i = n(474848);
            let r = (0, n(109939).YK)({
                    back: {
                        defaultMessage: "Back",
                        id: "collectionsSettingsMenu.back"
                    }
                }),
                l = {
                    hiddenDesktopHeaderDiv: {
                        height: 0
                    },
                    arrowButton: {
                        marginInlineEnd: 8,
                        marginInlineStart: -2,
                        height: 22
                    },
                    closeButton: {
                        borderRadius: "100%",
                        background: n(632079).Tj.gray.background.secondaryTranslucent
                    },
                    style0: {
                        flexGrow: 1
                    }
                },
                a = (0, n(64960)._S)({
                    color: n(632079).Tj.gray.background.secondaryTranslucent
                });

            function s({
                backArrowButton: e,
                topRightButton: t,
                children: o,
                title: c,
                desktopTitleType: d,
                settingsStackLength: u,
                handleClose: p,
                handleBackArrowClick: m,
                hideDesktopHeader: f,
                hasBackStack: h,
                isInPageViewMode: g,
                isDashboardWidget: y
            }) {
                let v = (0, n(109939).tz)(),
                    w = !!e || u > 1 || h,
                    x = (0, n(960253).I)(() => {
                        let e = g && !y,
                            t = w ? 12 : 16;
                        return {
                            nonHiddenDesktopHeaderDiv: {
                                display: "flex",
                                alignItems: e ? "top" : "center",
                                paddingTop: e ? "0px" : "14px",
                                paddingBottom: "6px",
                                paddingInlineStart: e ? "14px" : `${t}px`,
                                paddingInlineEnd: e ? "14px" : "16px",
                                height: e ? void 0 : 42
                            },
                            title: {
                                flexGrow: 1,
                                fontWeight: e ? n(699422).Wy.medium : n(699422).Wy.semibold,
                                fontSize: e ? 16 : 14,
                                lineHeight: e ? "24px" : void 0,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            },
                            closeButtonHovered: {
                                background: a.hovered
                            }
                        }
                    }, [y, g, w]),
                    S = !g;
                return (0, i.jsxs)(i.Fragment, {
                    children: [f ? (0, i.jsx)("div", {
                        style: l.hiddenDesktopHeaderDiv
                    }) : (0, i.jsxs)("div", {
                        style: x.nonHiddenDesktopHeaderDiv,
                        children: [e || (u > 1 || h ? (0, i.jsx)(n(374533).A, {
                            icon: n(374241).arrowStraightLeftSmallIcon,
                            style: l.arrowButton,
                            onClick: m,
                            ariaLabel: v.formatMessage(r.back)
                        }) : void 0), "sectionHeader" === d ? (0, i.jsx)(n(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "secondary",
                            style: l.style0,
                            children: c
                        }) : (0, i.jsx)("span", {
                            style: x.title,
                            children: c
                        }), t || (S ? (0, i.jsx)(n(374533).A, {
                            testId: "collection-settings-menu-close-button",
                            onClick: p,
                            style: l.closeButton,
                            hoveredStyle: x.closeButtonHovered,
                            icon: n(25094).xMarkSmallIcon,
                            size: "xs",
                            ariaLabel: v.formatMessage({
                                id: "collectionSettingsMenu.close",
                                defaultMessage: "Close"
                            })
                        }) : void 0)]
                    }), o]
                })
            }
            let c = (0, o.forwardRef)(function({
                children: e,
                footer: t,
                header: r,
                unconstrainedWidth: l,
                desktopWidth: a,
                title: c,
                desktopTitleType: d,
                collectionSettingsStore: u,
                fullHeight: p,
                hideDesktopHeader: m,
                menuScrollerStyle: f,
                innerContentWrapperStyle: h,
                disableScroller: g,
                handleBackArrowClick: y,
                hasBackStack: v,
                handleClose: w,
                topRightButton: x,
                backArrowButton: S
            }, b) {
                let k, T = (0, n(713311).Ks)(),
                    j = (0, n(649476).Tf)(),
                    _ = (0, n(226142).a)(),
                    C = (0, n(682985).K8)(() => (null == T ? void 0 : T.isDashboardWidget()) ? ? !1, [T]),
                    {
                        currentTab: I,
                        settingsStackLength: M,
                        hideHeader: A
                    } = (0, n(682985).K8)(() => {
                        let e = u.state;
                        return {
                            currentTab: (0, n(92293).S)(u),
                            settingsStackLength: e.stack.length,
                            hideHeader: e.hideSettingsHeader
                        }
                    }, [u], {
                        equalityFn: n(381453).n4
                    }),
                    B = (0, o.useCallback)(() => {
                        var e;
                        y ? y() : (0, n(465370).y)({
                            collectionSettingsStore: u,
                            keepPreviousRef: (null == T || null == (e = T.collectionViewStore()) ? void 0 : e.getType()) === "form_editor"
                        })
                    }, [y, u, T]),
                    D = (0, o.useCallback)(e => {
                        w ? w(e) : (0, n(72762).o)({
                            collectionSettingsStore: u
                        })
                    }, [w, u]),
                    H = (0, o.useCallback)(e => {
                        (0, n(444306).rW)(e.target) || (0, n(444306).iX)(e.target) || (0, n(444306).u2)(e.target) || n(272755).g.state.isOpen || D(e)
                    }, [D]);
                if (!I) return null;
                let L = _ && !C;
                if (n(986939).A.isMobile) k = {
                    disableScroller: g,
                    menuType: n(649476).gu.Modal,
                    title: c,
                    left: M > 1 ? (0, i.jsx)(n(497857).h, {}) : void 0,
                    onClickLeft: M > 1 ? B : void 0,
                    scrollerStyle: f,
                    innerRef: b,
                    right: j ? void 0 : (0, i.jsx)(n(109939).sA, { ...n(789722).W.done
                    }),
                    onClickRight: j ? void 0 : D
                };
                else {
                    let e = l || a ? void 0 : L ? n(632188).vg : n(632188).vE;
                    k = {
                        disableScroller: g,
                        menuType: n(649476).gu.Popup,
                        minWidth: L ? n(632188).vg : n(632188).vE,
                        width: a,
                        maxHeight: p ? "100%" : "80vh",
                        ...e && {
                            maxWidth: e
                        },
                        onClickOutside: H,
                        scrollerStyle: {
                            flexGrow: 0,
                            ...f
                        },
                        header: !A && (0, i.jsx)(s, {
                            settingsStackLength: M,
                            handleClose: D,
                            handleBackArrowClick: B,
                            hasBackStack: v,
                            hideDesktopHeader: m,
                            title: c,
                            desktopTitleType: d,
                            topRightButton: x,
                            backArrowButton: S,
                            isDashboardWidget: C,
                            isInPageViewMode: _,
                            children: r
                        }),
                        paddingTop: 6 * !!A,
                        footer: t,
                        innerRef: b
                    }
                }
                let R = (0, i.jsxs)(i.Fragment, {
                    children: [n(986939).A.isMobile ? r : void 0, e, n(986939).A.isMobile ? t : void 0]
                });
                return p ? (0, i.jsx)(n(943019).Y, {
                    direction: "vertical",
                    children: (0, i.jsx)(n(747369).A, { ...k,
                        children: R
                    })
                }) : (0, i.jsx)(n(943019).Y, {
                    direction: "vertical",
                    children: (0, i.jsx)(n(747369).A, { ...k,
                        children: (0, i.jsx)(n(790124).N, {
                            capture: !0,
                            allowMobileAutoScroll: !0,
                            allowEsc: !0,
                            wrapperTag: "div",
                            children: (0, i.jsx)("div", {
                                style: h,
                                children: R
                            })
                        })
                    })
                })
            })
        },
        33918: (e, t, n) => {
            n.d(t, {
                G: () => o
            });

            function o(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "delete_property",
                        eventProperties: t
                    }
                })
            }
        },
        72762: (e, t, n) => {
            n.d(t, {
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
                }), n(639675).Ay.setState({ ...n(639675).Ay.state,
                    flowId: void 0
                })
            }
        },
        76761: (e, t, n) => {
            n.d(t, {
                A: () => i
            }), n(296540);
            var o = n(474848);
            let i = function({
                switcherProps: e,
                ...t
            }) {
                return (0, o.jsx)(n(209572).A, {
                    right: (0, o.jsx)(n(354491).d, {
                        onClick: t.onClick,
                        disabled: t.disabled,
                        ...e
                    }),
                    ...t
                })
            }
        },
        76790: (e, t, n) => {
            n.d(t, {
                a: () => o
            });

            function o(e) {
                let {
                    collectionSettingsStore: t,
                    item: n,
                    hideSettingsPopup: o
                } = e, i = t.state;
                t.setState({ ...i,
                    open: !0,
                    stack: [...i.stack, n],
                    ...void 0 !== o ? {
                        hideSettingsPopup: o
                    } : {}
                })
            }
        },
        85071: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                integrationIcon: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                i = (0, n(104509).wt)("integration", o, "default")
        },
        85918: (e, t, n) => {
            n.d(t, {
                o: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.7 1.41 8.6 12.78",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M9.635 1.955a.5.5 0 0 0-.905-.328l-4.935 6.84a.5.5 0 0 0 .405.793h2.478l-.32 4.4a.5.5 0 0 0 .903.33l4.944-6.833a.5.5 0 0 0-.405-.793H9.32z"
                    })
                },
                i = (0, n(104509).wt)("lightningFillSmall", o, "fillSmall")
        },
        107048: (e, t, n) => {
            n.d(t, {
                n: () => a,
                z: () => r
            }), n(16280), n(296540);
            var o = n(474848);

            function i({
                icon: e,
                themeMode: t,
                size: r,
                style: l
            }) {
                let a = (0, n(960253).I)(() => ({
                    icon: {
                        fill: (0, n(140507)._)(e, t),
                        ...l
                    }
                }), [e, l, t]);
                return (0, o.jsx)(n(87019).p, {
                    icon: e,
                    themeMode: t,
                    size: r,
                    style: a.icon
                })
            }

            function r({
                template: e,
                size: t,
                iconStyle: a
            }) {
                var s;
                let c = t ? ? 16,
                    d = (0, n(960253).I)(() => ({
                        icon: {
                            width: c,
                            height: c,
                            ...a
                        }
                    }), [c, a]),
                    u = (0, n(960253).e)();
                if ((0, n(388507).cB)(e.templateId)) return (0, o.jsx)(n(16275).I, {
                    icon: n(273344).aiFaceIcon,
                    style: d.icon
                });
                let {
                    type: p
                } = e;
                switch (p) {
                    case "property":
                        return (0, o.jsx)(l, {
                            template: e,
                            iconSize: c,
                            styles: d
                        });
                    case "collection_view":
                        return (0, o.jsx)(n(647905).hy, {
                            viewIcon: null == (s = e.value.format) ? void 0 : s.collection_view_icon,
                            viewType: e.value.type,
                            color: "lightGray",
                            style: d.icon
                        });
                    case "layout":
                        return (0, o.jsx)(n(16275).I, {
                            style: d.icon,
                            icon: n(950237).layoutIcon
                        });
                    case "block":
                        return (0, o.jsx)(o.Fragment, {
                            children: (0, n(646220).notionTemplateTintableIcon)(d.icon)
                        });
                    case "collection":
                    case "compound":
                        let m = "collection" === e.type ? e.value.targetCollection.icon : e.icon;
                        if (!(0, n(111012).T8)(m)) throw Error("Only Notion static icons are allowed for template icons");
                        return (0, o.jsx)(i, {
                            icon: m,
                            themeMode: u,
                            size: c,
                            style: d.icon
                        });
                    case "automation":
                        return (0, o.jsx)(n(16275).I, {
                            icon: n(85918).o,
                            style: d.icon
                        });
                    default:
                        (0, n(722371).HB)(p)
                }
            }

            function l({
                template: e,
                iconSize: t,
                styles: i
            }) {
                let r = (0, n(960253).e)(),
                    a = (0, n(682985).K8)(() => {
                        let {
                            relatedCollectionTemplateId: t
                        } = e;
                        return "relation" === e.value.type && t ? n(932292).globalWorkflowTemplates.fromIdOfType({
                            templateId: t,
                            type: "collection"
                        }).value.targetCollection.icon : e.value.icon
                    }, [e]);
                return (0, o.jsx)(n(221535).zB, {
                    type: e.value.type,
                    icon: a,
                    size: t,
                    style: i.icon,
                    theme: n(632079).Tj,
                    themeMode: r
                })
            }

            function a({
                template: e,
                backgroundSize: t
            }) {
                let i = (0, n(960253).I)(() => ({
                    iconContainer: {
                        background: s({
                            template: e
                        })[30]
                    },
                    icon: {
                        fill: s({
                            template: e
                        })[400]
                    }
                }), [e]);
                return (0, o.jsx)(n(457978).y, {
                    backgroundColor: i.iconContainer.background,
                    backgroundSize: t,
                    icon: (0, o.jsx)(r, {
                        template: e,
                        iconStyle: i.icon
                    })
                })
            }

            function s({
                template: e
            }) {
                let {
                    type: t
                } = e;
                switch (t) {
                    case "collection_view":
                    case "automation":
                        return n(632079).Tj.palette.blue;
                    case "property":
                        return "relation" === e.value.type ? n(632079).Tj.palette.yellow : n(632079).Tj.palette.red;
                    case "layout":
                        return n(632079).Tj.palette.orange;
                    case "block":
                        return n(632079).Tj.palette.purple;
                    case "compound":
                        return n(632079).Tj.palette.green;
                    case "collection":
                        return n(632079).Tj.palette.pink;
                    default:
                        (0, n(722371).HB)(t)
                }
            }
        },
        140507: (e, t, n) => {
            function o(e) {
                let t = (0, n(111012).VA)(e);
                return "lightgray" === t ? "gray" : t
            }

            function i(e, t) {
                let o = (0, n(111012).VA)(e);
                return n(111012).l8[t]["lightgray" === o ? "gray" : o]
            }
            n.d(t, {
                P: () => o,
                _: () => i
            })
        },
        199894: (e, t, n) => {
            n.d(t, {
                t: () => o
            }), n(16280), n(898992), n(672577), n(581454);

            function o(e) {
                let {
                    environment: t,
                    selection: o,
                    transaction: i,
                    preventSetSelection: r
                } = e, {
                    blocks: l
                } = e, a = (0, n(385941).Z)();
                if (!a) throw Error("No root store.");
                if (o.length > 0) {
                    let e = o[0],
                        a = n(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!a || !a.props.onInsertAbove) throw Error("No Selectable found.");
                    let s = a.props.onInsertAbove({
                        insertStores: l,
                        transaction: i
                    });
                    return r || (0, n(854924).t)({
                        environment: t,
                        stores: s
                    }), s
                } {
                    let e = a.getContentStore(),
                        o = l.map(t => (0, n(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: i
                        }).childStore);
                    return r || (0, n(854924).t)({
                        environment: t,
                        stores: o
                    }), o
                }
            }
        },
        209572: (e, t, n) => {
            n.d(t, {
                A: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                style0: { ...n(699422).RC,
                    display: "flex"
                },
                style1: {
                    flexGrow: 1,
                    flexShrink: 1
                }
            };

            function r(e) {
                let {
                    icon: t,
                    iconStyle: r,
                    title: l,
                    caption: a,
                    right: s,
                    rightStyle: c,
                    isRedOnHover: d,
                    isGray: u,
                    isOrange: p,
                    onClick: m,
                    onMouseDown: f,
                    onMouseEnter: h,
                    onMouseLeave: g,
                    disabled: y,
                    showChevron: v,
                    chevronStyle: w,
                    rotateChevron: x,
                    showDragHandle: S,
                    focused: b,
                    textWrapperStyle: k,
                    shouldWrapCaption: T,
                    desktopIconStyle: j,
                    buttonStyle: _,
                    desktopTitleStyle: C,
                    source: I,
                    menuListItemProps: M,
                    isPulsing: A,
                    shouldShowMobileBackground: B
                } = e, D = (0, n(564725).y$)(), H = (0, n(960253).I)(() => ({
                    style: { ...u ? {
                            color: n(632079).Tj.text.secondary,
                            fill: n(632079).Tj.icon.secondary
                        } : p ? {
                            color: n(632079).Tj.orange.icon.accentPrimary,
                            fill: n(632079).Tj.orange.icon.accentPrimary
                        } : {
                            color: n(632079).Tj.text.primary,
                            fill: n(632079).Tj.icon.primary
                        },
                        opacity: y ? .4 : void 0,
                        ..._
                    },
                    leftIconStyle: {
                        width: D,
                        height: D,
                        ...r
                    },
                    rightStyle: {
                        display: "flex",
                        alignItems: "center",
                        color: y ? n(632079).Tj.text.primary : n(632079).Tj.text.tertiary,
                        fill: y ? n(632079).Tj.icon.primary : n(632079).Tj.icon.tertiary,
                        flexShrink: 0,
                        marginInlineStart: n(986939).A.isMobile ? 8 : void 0,
                        ...c
                    },
                    rightChevronStyle: {
                        marginInlineStart: 6 * ("tableHeaderMenu" !== I),
                        transition: "transform 200ms ease-in-out",
                        ...x && {
                            transform: "rotate(90deg)"
                        },
                        ...w
                    }
                }), [u, p, y, r, w, c, _, D, x, I]), {
                    itemRef: L,
                    onKeyDown: R,
                    onFocus: z
                } = (0, n(943019).e)(), V = (0, o.jsx)(n(95582).A, {
                    ref: L,
                    role: "menuitem",
                    icon: null == t ? void 0 : t(H.leftIconStyle),
                    focused: b || !1,
                    disabled: y,
                    title: l,
                    caption: a,
                    shouldWrapTitle: !0,
                    shouldWrapCaption: T,
                    desktopTitleStyle: { ...i.style1,
                        ...C
                    },
                    onKeyDown: R,
                    onFocus: z,
                    disallowTabbing: !1,
                    showDragHandle: S,
                    buttonStyle: H.style,
                    rightStyle: H.rightStyle,
                    isRedOnHover: d,
                    ignoreLocalHoverState: !!y || void 0,
                    right: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            style: i.style0,
                            children: s
                        }), !y && v ? (0, o.jsx)(n(16275).I, {
                            icon: n(491469).arrowChevronSingleRightSmallIcon,
                            size: "sm",
                            colorVariant: "tableHeaderMenu" === I ? "secondary" : "tertiary",
                            style: H.rightChevronStyle
                        }) : null]
                    }),
                    onClick: m,
                    onMouseDown: f,
                    onMouseEnter: h,
                    onMouseLeave: g,
                    textWrapperStyle: k,
                    desktopIconStyle: j,
                    reducedPadding: e.reducedPadding,
                    shouldShowMobileBackground: B,
                    ...M
                });
                return A ? (0, o.jsx)(n(315384).u, {
                    borderRadius: 6,
                    shape: "square",
                    children: V
                }) : V
            }
        },
        226142: (e, t, n) => {
            n.d(t, {
                a: () => i
            });
            let o = new(n(345426)).ComputedStore(() => n(272755).g.state.isOpen, {
                debugName: "IsInPageViewModeStore"
            });

            function i() {
                return (0, n(682985).O$)(o)
            }
        },
        285482: (e, t, n) => {
            n.d(t, {
                A: () => o
            });

            function o(e, t) {
                if ((0, n(101787).pA8)(t)) {
                    let o = (0, n(115964).$)(t.clientData);
                    if (o) return "messageValues" in t.clientData ? e.formatMessage(o, t.clientData.messageValues) : e.formatMessage(o)
                }
                return e.formatMessage(n(683646).k.generic_error)
            }
        },
        315384: (e, t, n) => {
            n.d(t, {
                u: () => i
            });
            let o = new(n(815048)).O2("PulsingWrapper", async () => n.e(45248).then(n.bind(n, 593830))),
                i = (0, n(815048).jQ)(o, e => e.PulsingWrapper, {
                    renderLoading: (e, t) => t.children
                })
        },
        374241: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowStraightLeftSmallIcon: () => i,
                iconDefinition: () => o
            }), n(296540);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.05 11.76 9.9",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M2.16 8.206q.046.13.148.236l4.32 4.32a.625.625 0 0 0 .884-.884L4.259 8.625h8.991a.625.625 0 1 0 0-1.25H4.259l3.253-3.253a.625.625 0 1 0-.884-.884l-4.32 4.32a.62.62 0 0 0-.148.648"
                    })
                },
                i = (0, n(104509).wt)("arrowStraightLeftSmall", o, "small")
        },
        425749: (e, t, n) => {
            n.d(t, {
                I$: () => l,
                R2: () => c,
                WF: () => s,
                bZ: () => a,
                cE: () => i,
                jX: () => r,
                rz: () => d
            });
            var o = () => n(381453);

            function i(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let r = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function l(e) {
                return !!(void 0 !== e && (0, n(722371).Xk)(r, e))
            }

            function a() {
                let e = (0, n(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: n(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, n(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function s(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let c = [{
                type: "everything"
            }];

            function d(e) {
                for (let t of c)
                    if (o().n4(e, t)) return !0;
                return !1
            }
        },
        431666: (e, t, n) => {
            n.d(t, {
                i: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    collectionStore: o,
                    collectionViewStore: i,
                    property_type: r,
                    from: l,
                    property: a
                } = e;
                (0, n(33918).G)(t, {
                    property: a,
                    property_type: r,
                    from: l,
                    collection_id: null == o ? void 0 : o.id,
                    collection_view_id: null == i ? void 0 : i.id
                })
            }
        },
        432705: (e, t, n) => {
            function o(e) {
                return "event" === e || "recurrence" === e
            }

            function i(e) {
                let t = e.getTrigger();
                return (0, n(722371).O9)(t) && o(t.type)
            }

            function r(e) {
                return "event" === e ? "event" : "recurrence" === e ? "recurrence" : void(0, n(722371).HB)(e)
            }
            n.d(t, {
                $X: () => i,
                H8: () => r,
                x2: () => o
            })
        },
        444306: (e, t, n) => {
            function o(e) {
                return !(0, n(885711).EV)(e, e => e.classList && (e.classList.contains(n(828432).Hfz) || e.classList.contains(n(828432).uMd) || e.classList.contains(n(828432).LvP) || e.classList.contains(n(828432).sux) || e.classList.contains(n(828432).HA4) || e.classList.contains(n(828432).z$c))) && !!(0, n(885711).EV)(e, e => e.classList && e.classList.contains(n(545028).hq))
            }

            function i(e) {
                return !!(0, n(885711).EV)(e, e => e.classList && e.classList.contains(n(828432).N11))
            }

            function r(e) {
                return !!(0, n(885711).EV)(e, e => e.classList && e.classList.contains(n(828432).xeF))
            }

            function l(e) {
                return !!(0, n(885711).EV)(e, e => e.classList && e.classList.contains(n(828432).Jnf))
            }

            function a(e) {
                return !!(0, n(885711).EV)(e, e => e.classList && e.classList.contains(n(828432).kew))
            }
            n.d(t, {
                Rp: () => o,
                iX: () => a,
                pM: () => r,
                rW: () => i,
                u2: () => l
            })
        },
        457978: (e, t, n) => {
            n.d(t, {
                y: () => i
            }), n(296540);
            var o = n(474848);

            function i({
                icon: e,
                backgroundColor: t,
                backgroundSize: r
            }) {
                let l = (0, n(960253).I)(() => ({
                    iconContainer: {
                        height: r ? ? 28,
                        width: r ? ? 28,
                        borderRadius: 6,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: t ? ? n(632079).Tj.background.tertiaryTranslucent
                    }
                }), [t, r]);
                return (0, o.jsx)("div", {
                    style: l.iconContainer,
                    children: e
                })
            }
        },
        465370: (e, t, n) => {
            n.d(t, {
                y: () => o
            });

            function o(e) {
                let {
                    collectionSettingsStore: t,
                    keepPreviousRef: o
                } = e, i = t.state, r = i.stack.slice(0, i.stack.length - 1);
                0 === r.length ? (0, n(72762).o)({
                    collectionSettingsStore: t
                }) : t.setState({
                    open: !0,
                    stack: r,
                    ...void 0 !== i.ref && o ? {
                        ref: i.ref
                    } : {}
                })
            }
        },
        487016: (e, t, n) => {
            n.d(t, {
                Bi: () => a,
                My: () => l,
                ZM: () => c,
                _M: () => s,
                navigateToWorkflowTemplateOnboardingModal: () => d
            }), n(16280), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(581454);
            var o = () => n(388507),
                i = () => n(715144),
                r = () => n(717673);

            function l({
                transaction: e,
                collectionStore: t,
                propertyTemplates: n
            }) {
                var a, s;
                let c = (null == (a = t.getParentBlockStore()) ? void 0 : a.getCollectionViewStores().filter(e => "table" === e.getType())) ? ? [];
                if (0 === c.length) return;
                let d = [];
                for (let e of n) {
                    let n = (0, r().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    n && d.push({
                        property: n.id,
                        visible: !(0, o().Sz)(e),
                        ...e.tablePropertyFormat
                    })
                }
                if (0 !== d.length)
                    for (let t of c) {
                        let n = (null == (s = t.getPropertyFormatsStore("table_properties")) ? void 0 : s.getValue()) ? ? [],
                            o = new Set(n.map(e => e.property)),
                            r = d.filter(e => !o.has(e.property));
                        0 !== r.length && (0, i().z)({
                            stores: [t],
                            update: {
                                table_properties: [...n, ...r]
                            },
                            transaction: e
                        })
                    }
            }

            function a({
                transaction: e,
                collectionStore: t,
                propertyTemplates: n
            }) {
                let o = [];
                for (let e of n) {
                    let n = (0, r().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    n && o.push({
                        property: n.id,
                        visible: !0
                    })
                }
                let l = t.getFormat().collection_page_properties ? ? [],
                    s = new Set(l.map(e => e.property)),
                    c = o.filter(e => !s.has(e.property));
                c.length && (0, i().z)({
                    stores: [t],
                    update: {
                        collection_page_properties: [...l, ...c]
                    },
                    transaction: e
                })
            }

            function s({
                environment: e,
                newPageStore: t,
                result: o
            }) {
                if ("accepted_template" === o.type || "accepted_empty_collection" === o.type) {
                    let i = t.getSpaceId();
                    (0, n(377796).createAndCommit)({
                        environment: e,
                        canUndo: !1,
                        cellTarget: i ? {
                            spaceWithId: i
                        } : void 0,
                        perform: i => {
                            let r = t.getTitleValue();
                            if ((0, n(173157).z)({
                                    store: t,
                                    transaction: i,
                                    data: {
                                        alive: !1
                                    }
                                }), "accepted_empty_collection" === o.type && !(0, n(247438).w9s)(r)) {
                                let l = n(970831).B.createChildStore(t, {
                                    table: "block",
                                    id: o.blockId
                                }).getTitleStore();
                                l && n(41403).yr({
                                    environment: e,
                                    transaction: i,
                                    tokens: r,
                                    index: 0,
                                    store: l
                                })
                            }
                            let l = t.getParentStore();
                            if ((null == l ? void 0 : l.table) === n(682956).ev) {
                                let e = l.getContentIds();
                                (0, n(173157).z)({
                                    store: l,
                                    transaction: i,
                                    data: {
                                        content: e.filter(e => e !== t.id)
                                    }
                                })
                            }
                        },
                        userAction: "clean_up_empty_new_page"
                    })
                }
            }

            function c({
                environment: e,
                userAction: t,
                result: o,
                existingCollectionViewBlockStore: i,
                existingCollectionStore: r
            }) {
                if ("canceled" !== o.type) {
                    if ("accepted_empty_collection" === o.type && r) {
                        let i = r.getKeyStore("name"),
                            l = (0, n(247438).x9d)(o.newCollectionTitle);
                        if (i) {
                            let o = r.getSpaceId();
                            (0, n(377796).createAndCommit)({
                                userAction: t,
                                environment: e,
                                canUndo: !0,
                                cellTarget: o ? {
                                    spaceWithId: o
                                } : void 0,
                                perform: t => n(41403).R9({
                                    environment: e,
                                    store: i,
                                    transaction: t,
                                    value: l
                                })
                            })
                        }
                    }
                    if (i) {
                        var l;
                        let e = null == (l = (0, n(444610).U)(i)) ? void 0 : l.settingsStore;
                        e && (0, n(72762).o)({
                            collectionSettingsStore: e
                        })
                    }
                    if ("accepted_template" === o.type && null != i && i.isCollectionView() && !(null != i && i.hasSingleSourceAndNoLinkedCollections())) {
                        let t = (0, n(444610).U)(i),
                            r = i.getCollectionViewStores().find(e => {
                                var t;
                                return (null == (t = e.getCollectionStore()) ? void 0 : t.id) === o.collectionId
                            });
                        if (!t || !r) return;
                        (0, n(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: r.id,
                            isFullScreen: t.isFullScreenStore.state,
                            isRootChild: t.isRootChildStore.state,
                            isInPeekRenderer: t.isInPeekRendererStore.state
                        })
                    }
                }
            }
            async function d({
                environment: e,
                collectionViewBlockStore: t
            }) {
                let o = t.id;
                if (!t.isDefined()) {
                    let i = await (0, n(389323).$)({
                        environment: e,
                        blockId: o
                    });
                    if (!i) return;
                    e = await n(274662).T({
                        environment: e,
                        newCurrentUserId: i
                    }), t = new(n(970831)).B(e, {
                        table: n(682956).ev,
                        id: o
                    }), await t.load()
                }
                let i = t.getSpaceId();
                if (!i) throw Error("Space ID not found for collection block");
                let r = (0, n(593303).k)(i);
                if (!r) throw Error(`Space view not found for space ID: ${i}`);
                let l = n(728372).AppStoreSidebarSpaceStore.state;
                (null == l ? void 0 : l.id) !== i && await (0, n(269948).y)({
                    environment: e,
                    spaceViewStore: r
                });
                let a = t.getFormat();
                if ((null == a ? void 0 : a.collection_view_sub_type) === "workflow_template_placeholder" && null != a && a.placeholder_workflow_template_id && t.isCollectionView()) {
                    let {
                        getCollectionTemplateFromId: o
                    } = await n(708370).t.load(), i = o(a.placeholder_workflow_template_id);
                    if (!i) throw Error(`Collection template "${a.placeholder_workflow_template_id}" not found`);
                    let {
                        onNavigateToPlaceholderWorkflowTemplateBlock: r
                    } = await n(903673).O.load();
                    r({
                        environment: e,
                        collectionTemplate: i,
                        collectionViewBlockStore: t
                    })
                } else(0, n(545586).navigateToBlock)({
                    environment: e,
                    store: t,
                    pageVisitSource: n(254656).y8.WorkflowTemplatesDeeplink
                })
            }
        },
        497857: (e, t, n) => {
            n.d(t, {
                h: () => i
            }), n(296540);
            var o = n(474848);

            function i() {
                return (0, o.jsx)(n(16275).I, {
                    icon: n(746204).w,
                    size: "lg",
                    colorVariant: "primary"
                })
            }
        },
        593100: (e, t, n) => {
            n.d(t, {
                O: () => i,
                q: () => r
            }), n(296540);
            var o = n(474848);

            function i(e) {
                let {
                    value: t,
                    color: i,
                    format: r,
                    showEllipsis: l,
                    onClickRemove: a,
                    showRemoveButton: s,
                    isSingle: c,
                    shouldShrink: d,
                    hideTooltip: u,
                    description: p,
                    tooltipPlacement: m,
                    removeBackground: f,
                    ...h
                } = e, g = (0, n(960253).I)(() => ({
                    token: { ...l && n(699422).RC,
                        ...f && {
                            paddingInlineStart: 0,
                            paddingInlineEnd: 0
                        }
                    }
                }), [l, f]), {
                    textColor: y,
                    backgroundColor: v
                } = (0, n(632079).LD)(n(632079).Tj, i);
                return t ? (0, o.jsx)(n(628462).A, {
                    format: r,
                    value: (0, o.jsx)(n(93594).A, {
                        children: t
                    }),
                    description: p,
                    onClickRemove: a,
                    showRemoveButton: s,
                    isSingle: c,
                    color: y,
                    backgroundColor: f ? "transparent" : v,
                    shouldShrink: d,
                    tooltipPlacement: m,
                    showTooltip: u ? "never" : "overflow",
                    style: g.token,
                    ...h
                }) : null
            }

            function r(e) {
                let t, {
                        value: i,
                        color: r,
                        format: l,
                        showEllipsis: a,
                        onClickRemove: s,
                        showRemoveButton: c,
                        isSingle: d,
                        shouldShrink: u,
                        groupColor: p,
                        tooltipPlacement: m,
                        description: f,
                        hideTooltip: h,
                        ...g
                    } = e,
                    y = (0, n(960253).I)(() => ({
                        token: { ...a && n(699422).RC
                        }
                    }), [a]);
                if (!i) return null;
                let {
                    textColor: v,
                    backgroundColor: w
                } = (0, n(632079).LD)(n(632079).Tj, r ? ? p ? ? "gray");
                return t = r || p || "gray", (0, o.jsx)(n(628462).A, {
                    format: l,
                    value: (0, o.jsx)(n(93594).A, {
                        children: i
                    }),
                    description: f,
                    onClickRemove: s,
                    showRemoveButton: c,
                    isSingle: d,
                    color: v,
                    backgroundColor: w,
                    shouldShrink: u,
                    showTooltip: h ? "never" : "overflow",
                    style: y.token,
                    isRound: !0,
                    showColoredDot: t,
                    tooltipPlacement: m,
                    ...g
                })
            }
        },
        605263: (e, t, n) => {
            n.d(t, {
                K4: () => s,
                To: () => p,
                fi: () => c,
                q8: () => a,
                u: () => l
            }), n(16280), n(18107), n(967357);
            var o = n(296540),
                i = n(474848);
            let r = (0, o.createContext)({
                ancestors: []
            });

            function l(e) {
                let {
                    automationStore: t,
                    children: l,
                    contextType: a,
                    collectionStore: s,
                    collectionSettingsStore: c,
                    collectionViewBlockStore: p,
                    collectionViewStore: m,
                    enableExistenceGuarantees: f
                } = e, h = (0, n(533992).v3)(), g = (0, n(109939).tz)(), {
                    value: y
                } = (0, n(815048).fJ)(n(864850).T.formulas), {
                    value: v
                } = (0, n(815048).fJ)(n(879267).QV.automationTypecheck), w = (0, n(470569).o)(t), x = (0, n(67499).S)(), S = (0, n(682985).K8)(() => y ? v ? function(e) {
                    let {
                        environment: t,
                        automationStore: o,
                        automationTypecheckModule: i,
                        contextType: r,
                        formulasModule: l,
                        intl: a,
                        subscriptionInfo: s,
                        pageStore: c,
                        enableExistenceGuarantees: p
                    } = e, m = p ? d.get(o) : d.get(o) ? ? u.get(o);
                    if (m) return m;
                    let f = new(n(345426)).ComputedStore(() => {
                        let e = o.getTriggerType(),
                            d = r;
                        return (0, n(722371).O9)(e) && (0, n(432705).x2)(e) && (d = (0, n(432705).H8)(e)), (0, n(100197).Z)({
                            environment: t,
                            automationStore: o,
                            automationTypecheckModule: i,
                            contextType: d,
                            formulasModule: l,
                            intl: a,
                            subscriptionInfo: s,
                            pageStore: c,
                            enableExistenceGuarantees: p
                        })
                    }, {
                        debugName: "automationContextTypecheckResultCachedStore"
                    });
                    return p && d.set(o, f), u.set(o, f), f
                }({
                    automationStore: t,
                    automationTypecheckModule: v,
                    contextType: a,
                    environment: h,
                    formulasModule: y,
                    intl: g,
                    subscriptionInfo: w,
                    pageStore: "button_block" === a ? null == x ? void 0 : x.pageStore : void 0,
                    enableExistenceGuarantees: f
                }).state : {
                    error: new(n(600005)).N9("Missing automation dependency")
                } : {
                    error: new(n(600005)).N9("Missing formulas dependency")
                }, [h, t, v, a, y, g, w, null == x ? void 0 : x.pageStore, f]), b = (0, o.useContext)(r), k = (0, o.useMemo)(() => 0 === b.ancestors.length ? [{
                    automationStore: t,
                    contextType: a,
                    typecheckResult: S,
                    collectionStore: s,
                    collectionSettingsStore: c,
                    collectionViewBlockStore: p,
                    collectionViewStore: m
                }] : [...b.ancestors, {
                    automationStore: t,
                    contextType: a,
                    typecheckResult: S,
                    collectionStore: s,
                    collectionSettingsStore: c,
                    collectionViewBlockStore: p,
                    collectionViewStore: m
                }], [b, t, a, S, s, c, p, m]), T = (0, o.useMemo)(() => ({
                    ancestors: k,
                    enableExistenceGuarantees: f
                }), [k, f]);
                return (0, i.jsx)(r.Provider, {
                    value: T,
                    children: l
                })
            }

            function a() {
                let e = (0, o.useContext)(r).ancestors.at(-1);
                if (!e) throw Error("No automation context found!");
                return e
            }

            function s() {
                return (0, o.useContext)(r).ancestors.at(-1)
            }

            function c() {
                return (0, o.useContext)(r).enableExistenceGuarantees
            }
            r.displayName = "AutomationContext", r.Consumer;
            let d = new WeakMap,
                u = new WeakMap;

            function p(e) {
                var t;
                return null == (t = d.get(e)) ? void 0 : t.state
            }
        },
        609328: (e, t, n) => {
            n.d(t, {
                P: () => r
            }), n(944114), n(296540);
            var o = n(474848);
            let i = (0, n(109939).YK)({
                errorStacktraceCopied: {
                    defaultMessage: "Stacktrace copied to clipboard",
                    id: "errorLabel.moreInfo.stacktrace.toast.label"
                }
            });

            function r({
                environment: e,
                title: t,
                ...l
            }) {
                var a, s, c;
                let d = [],
                    u = null == (a = l.error) ? void 0 : a.stack;
                if (u) {
                    let t = globalThis.Meticulous;
                    null != t && t.isRunningAsTest && (null == (s = t.replay) || null == (c = s.terminate) || c.call(s)), d.push({
                        label: "Copy stacktrace",
                        ariaLabel: "Copy error stacktrace to clipboard",
                        onClick: async () => {
                            (await (0, n(969899).Nu)())({
                                environment: e,
                                stringValue: u,
                                htmlValue: `<meta charset='utf-8'><pre><code class="language-bash">${u}
		</code></pre>`,
                                copiedMessage: i.errorStacktraceCopied
                            })
                        }
                    })
                }
                d.push({
                    buttonType: "solid",
                    color: "blue",
                    label: (0, o.jsx)(n(109939).sA, { ...n(647095)._0.dismissButtonLabel
                    }),
                    onAccept: n(763230).D_
                }), n(647095).ui({
                    message: t,
                    description: (0, o.jsx)(n(149795).dD, { ...l
                    }),
                    allowCopy: !0,
                    showCancel: !1,
                    keepFocus: !1,
                    mode: "wide",
                    items: d
                })
            }
        },
        632188: (e, t, n) => {
            n.d(t, {
                iZ: () => r,
                vE: () => o,
                vg: () => i
            });
            let o = 290,
                i = 280,
                r = 400
        },
        646220: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                notionTemplateTintableIcon: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.58 3 16.83 14",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M6.014 16.338a4.43 4.43 0 0 0 4.43-4.48H8.88c-.254 0-.512 0-.732-.018a2.3 2.3 0 0 1-.86-.226 2.24 2.24 0 0 1-.979-.979 2.3 2.3 0 0 1-.226-.86 10 10 0 0 1-.018-.731V7.48a4.44 4.44 0 0 1 2.297.678 4.431 4.431 0 0 0-6.777 3.751 4.43 4.43 0 0 0 4.43 4.43z",
                            clipRule: "evenodd"
                        }), (0, o.jsx)("path", {
                            d: "M12.902 11.044c.463-.802.694-1.203.997-1.338a1.02 1.02 0 0 1 .828 0c.302.135.534.536.996 1.338l2.028 3.512c.463.802.695 1.203.66 1.532-.03.287-.18.548-.414.718-.267.194-.73.194-1.656.194h-4.057c-.925 0-1.388 0-1.656-.194a1.02 1.02 0 0 1-.414-.718c-.035-.329.197-.73.66-1.532z"
                        }), (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.287 4.63c0-.571 0-.856.111-1.074.098-.192.254-.347.445-.445C8.061 3 8.346 3 8.916 3h4.38c.57 0 .854 0 1.072.111.191.098.347.253.445.445.11.218.11.503.11 1.073v3.852a2.24 2.24 0 0 0-1.52.109c-.46.204-.75.56-.94.83q-.318.472-.595.97l-.024.043-.118.203h-2.81c-.57 0-.855 0-1.073-.11a1 1 0 0 1-.445-.445c-.11-.218-.11-.503-.11-1.074z",
                            clipRule: "evenodd"
                        })]
                    })
                },
                r = (0, n(104509).wt)("notionTemplateTintable", i, "tintable")
        },
        726342: (e, t, n) => {
            n.d(t, {
                u: () => o
            });

            function o(e) {
                return e instanceof n(681735).h || e instanceof n(695906).SpaceStore || e instanceof n(970831).B
            }
        },
        726790: (e, t, n) => {
            n.r(t), n.d(t, {
                WorkflowSettingsConfirmAddTemplate: () => c,
                isWorkflowTemplateWithConfirmStep: () => f
            }), n(16280);
            var o = n(296540);
            n(581454);
            var i = n(474848);

            function r({
                template: e,
                style: t
            }) {
                let o = (0, n(960253).I)(() => ({
                        container: { ...t,
                            padding: 12,
                            border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                            borderRadius: 6
                        }
                    }), [t]),
                    a = function(e) {
                        if ((0, n(388507).Xq)(e, "property") && (0, n(388507).Io)(e)) {
                            let {
                                options: t = []
                            } = e.value;
                            if (0 !== t.length) return (0, i.jsx)(l, {
                                options: t
                            })
                        }
                    }(e);
                return a ? (0, i.jsx)("div", {
                    style: o.container,
                    children: a
                }) : null
            }

            function l({
                options: e
            }) {
                return (0, i.jsx)(n(4458).VP, {
                    gap: 8,
                    children: e.map(e => (0, i.jsx)("div", {
                        children: (0, i.jsx)(n(593100).O, {
                            format: n(696654).NY.Medium,
                            isSingle: !0,
                            value: e.value,
                            color: e.color,
                            showRemoveButton: !1
                        })
                    }, e.id))
                })
            }
            let a = {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 0
                },
                s = {
                    shrinkableHeight: a,
                    noShrink: {
                        flexShrink: 0
                    },
                    featurePreviewWrapper: { ...a,
                        width: "-webkit-fill-available"
                    },
                    featurePreviewBody: { ...a,
                        gap: 16,
                        ...n(986939).A.isMobile ? {
                            margin: "16px 0"
                        } : {
                            margin: 0
                        }
                    },
                    featurePreview: { ...a,
                        overflow: "auto"
                    },
                    addButtonContainer: { ...n(986939).A.isMobile ? {
                            margin: "12px 0"
                        } : {
                            marginBottom: 6
                        }
                    }
                };

            function c({
                template: e,
                collectionSettingsStore: t
            }) {
                let [l, a] = (0, o.useState)("sample" === e.propertyOptionsType), d = (0, n(932292).getWorkflowTemplateName)(e);
                return (0, i.jsxs)(n(669).A, {
                    collectionSettingsStore: t,
                    title: (0, i.jsx)(n(109939).sA, {
                        id: "workflowTemplateSettings.confirmAddTemplate.title",
                        defaultMessage: "Turn on {templateName}",
                        values: {
                            templateName: d
                        }
                    }),
                    disableScroller: !0,
                    menuScrollerStyle: s.shrinkableHeight,
                    innerContentWrapperStyle: s.shrinkableHeight,
                    children: [(0, i.jsx)(n(844565).A, {
                        style: s.shrinkableHeight,
                        children: (0, i.jsx)(n(636518).Ay, {
                            style: s.shrinkableHeight,
                            textWrapperStyle: s.featurePreviewWrapper,
                            bodyStyle: s.featurePreviewBody,
                            body: (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(u, {
                                    template: e,
                                    style: s.noShrink
                                }), (0, i.jsx)(r, {
                                    template: e,
                                    style: s.featurePreview
                                })]
                            })
                        })
                    }), (0, i.jsx)(n(844565).A, {
                        style: s.noShrink,
                        children: e.value.options && e.value.options.length > 0 ? (0, i.jsx)(n(76761).A, {
                            title: (0, i.jsx)(n(109939).sA, {
                                id: "workflowTemplateSettings.confirmAddTemplate.propertyOptionsToggle",
                                defaultMessage: "Set my own options"
                            }),
                            switcherProps: {
                                on: l,
                                disallowTabbing: !0
                            },
                            onClick: () => {
                                a(!l)
                            }
                        }) : void 0
                    }), (0, i.jsx)(n(844565).A, {
                        style: s.noShrink,
                        children: (0, i.jsx)(n(636518).Ay, {
                            body: (0, i.jsx)(m, {
                                template: e,
                                startEmpty: l
                            }),
                            bodyStyle: s.addButtonContainer
                        })
                    })]
                })
            }
            let d = {
                textWrapper: {
                    lineHeight: n(986939).A.isMobile ? "20px" : "18px"
                },
                title: {
                    fontSize: n(986939).A.isMobile ? 16 : 13
                },
                caption: {
                    fontSize: n(986939).A.isMobile ? 14 : 12,
                    overflow: "hidden",
                    color: "gray",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis"
                }
            };

            function u({
                template: e,
                style: t
            }) {
                let o = (0, n(960253).I)(() => ({
                        container: { ...t,
                            display: "flex",
                            alignItems: "center",
                            gap: 12
                        }
                    }), [t]),
                    r = (0, n(932292).getWorkflowTemplateName)(e),
                    l = (0, n(388507).Uy)(e);
                return (0, i.jsxs)("div", {
                    style: o.container,
                    children: [(0, i.jsx)(n(107048).n, {
                        template: e,
                        backgroundSize: 32
                    }), (0, i.jsxs)("div", {
                        style: d.textWrapper,
                        children: [(0, i.jsx)("div", {
                            style: d.title,
                            children: r
                        }), l ? (0, i.jsx)("div", {
                            style: d.caption,
                            children: l
                        }) : void 0]
                    })]
                })
            }
            let p = {
                width: "100%"
            };

            function m({
                template: e,
                startEmpty: t
            }) {
                let o = (0, n(533992).v3)(),
                    r = (0, n(713311).ET)(),
                    l = (0, n(932292).getWorkflowTemplateName)(e),
                    a = n(381453).mg(e);
                return t && delete a.value.options, (0, i.jsx)(n(912946).A, {
                    colorPalette: "blue",
                    style: p,
                    size: "lg",
                    onClick: () => {
                        let t = r.collectionStore();
                        if (!t) throw Error("collectionStore not found");
                        (0, n(377796).createAndCommit)({
                            userAction: "WorkflowSettingsConfirmAddTemplate.addFeatureTemplateToTarget",
                            environment: o,
                            canUndo: !0,
                            cellTarget: t.pointer.spaceId ? {
                                spaceWithId: t.pointer.spaceId
                            } : void 0,
                            perform: i => {
                                n(526131).ai({
                                    environment: o,
                                    transaction: i,
                                    collectionStore: t,
                                    template: a,
                                    logger: new(n(932292)).WorkflowTemplateLogger,
                                    origin: "suggested_feature"
                                });
                                let l = r.settingsStore;
                                (0, n(465370).y)({
                                    collectionSettingsStore: l
                                });
                                let s = t.getWorkflowTemplateId();
                                (0, n(104310).u)({
                                    event: {
                                        eventName: "suggested_feature_template_added",
                                        eventProperties: {
                                            origin: "suggested_properties",
                                            template_id_added: e.templateId,
                                            collection_template_id: s
                                        }
                                    }
                                });
                                let c = r.collectionViewStore();
                                c && (0, n(868411).UD)({
                                    template: e,
                                    environment: o,
                                    collectionStore: t,
                                    collectionViewStore: c,
                                    collectionSettingsStore: l,
                                    collectionContextStore: r
                                })
                            }
                        })
                    },
                    children: (0, i.jsx)(n(109939).sA, {
                        id: "workflowTemplateSettings.confirmAddTemplate.button",
                        defaultMessage: "Add {templateName}",
                        values: {
                            templateName: l
                        }
                    })
                })
            }

            function f(e) {
                return "property" === e.type && ("select" === e.value.type || "multi_select" === e.value.type)
            }
        },
        746204: (e, t, n) => {
            n.d(t, {
                w: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.87 3.72 7.16 12.56",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.131 9.381a.875.875 0 0 0 0 1.238l5.4 5.4a.875.875 0 1 0 1.238-1.238L7.987 10l4.782-4.781A.875.875 0 0 0 11.53 3.98z"
                    })
                },
                i = (0, n(104509).wt)("arrowChevronSingleLeftFill", o, "fill")
        },
        789722: (e, t, n) => {
            n.d(t, {
                W: () => o
            });
            let o = (0, n(109939).YK)({
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
        832248: (e, t, n) => {
            n.d(t, {
                S7: () => a,
                fF: () => w,
                es: () => v,
                LE: () => g,
                zs: () => h,
                HE: () => f,
                yg: () => y,
                QH: () => m,
                kn: () => p,
                mB: () => s,
                L$: () => c,
                X3: () => d,
                jX: () => u
            }), n(898992), n(354520), n(581454), n(944114);
            var o = () => n(896346);
            class i extends o().p3 {
                constructor(e, t) {
                    super(e, t)
                }
                after(e, t) {
                    return super.after(e, t)
                }
            }
            let r = (0, n(109939).YK)({
                    dateAtTime: {
                        id: "automations.recurrenceHelpers.dateAtTime",
                        defaultMessage: "{date} at {time}"
                    },
                    dateBetweenMidnightAnd3AM: {
                        id: "automations.recurrenceHelpers.dateBetweenMidnightAnd3AM",
                        defaultMessage: "{date} between 12–3 AM"
                    },
                    numberEndConditionDescription: {
                        id: "automations.recurrenceHelpers.numberEndConditionDescription",
                        defaultMessage: "{number, plural, one {After {number} run} other {After {number} runs}}"
                    },
                    noEndCondition: {
                        id: "automations.recurrenceHelpers.noEndCondition",
                        defaultMessage: "Never"
                    }
                }),
                l = {
                    hour: i.HOURLY,
                    day: i.DAILY,
                    week: i.WEEKLY,
                    month: i.MONTHLY,
                    year: i.YEARLY
                },
                a = {
                    MO: i.MO,
                    TU: i.TU,
                    WE: i.WE,
                    TH: i.TH,
                    FR: i.FR,
                    SA: i.SA,
                    SU: i.SU
                };

            function s(e) {
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 99
            }

            function c(e) {
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 999
            }

            function d(e) {
                let {
                    start_date: t,
                    frequency: o,
                    interval: r,
                    weekdays: s,
                    timezone: c,
                    hour: d,
                    minute: u
                } = e, p = (0, n(943003).eU)(t);
                "hour" === o && p.setUTCHours(d ? ? 0, u ? ? 0, 0, 0);
                let m = "week" === o && s ? s.map(e => a[e]) : void 0,
                    f = {};
                return (0, n(722371).O9)(e.end_condition) && ("date" === e.end_condition.type ? f.until = (0, n(943003).eU)(e.end_condition.end_at) : "number" === e.end_condition.type ? f.count = e.end_condition.number_of_occurrences : (0, n(722371).HB)(e.end_condition)), "month" === e.frequency && (0, n(722371).O9)(e.monthly_restriction) && ("monthdays" === e.monthly_restriction.type ? f.bymonthday = e.monthly_restriction.monthdays : "weekdays_in_month" === e.monthly_restriction.type ? f.byweekday = (function e(t, ...n) {
                    if (0 === n.length) return t.map(e => [e]);
                    let o = [];
                    for (let i of t) o.push(...e(n[0], ...n.slice(1)).map(e => [i, ...e]));
                    return o
                })(e.monthly_restriction.weekdays, e.monthly_restriction.week_numbers).map(([e, t]) => a[e].nth(t)) : (0, n(722371).HB)(e.monthly_restriction)), new i({
                    freq: l[o],
                    dtstart: p,
                    interval: r,
                    byweekday: m,
                    tzid: "hour" === o ? void 0 : c,
                    ..."hour" === o ? {} : {
                        byhour: d ? ? 0,
                        byminute: u ? ? 0,
                        bysecond: 0
                    },
                    ...f
                })
            }

            function u(e) {
                var t;
                if (0 === e.length) return {
                    violatesConstraint: !1,
                    templateNestingExceedsMaxDepth: !1,
                    ancestorHasDailyTemplate: !1,
                    nestedDepthOfAutomationAncestors: void 0,
                    immediateAncestorRecurrenceType: void 0
                };
                let n = e.filter(e => {
                        var t;
                        return (null == (t = e.getRecurrence()) ? void 0 : t.frequency) === "day"
                    }),
                    o = e.length,
                    i = null == (t = e[0].getRecurrence()) ? void 0 : t.frequency,
                    r = o > 1,
                    l = n.length >= 1;
                return {
                    violatesConstraint: r || l,
                    templateNestingExceedsMaxDepth: r,
                    ancestorHasDailyTemplate: l,
                    nestedDepthOfAutomationAncestors: o,
                    immediateAncestorRecurrenceType: i
                }
            }

            function p(e) {
                return 0 === e.hour || 1 === e.hour || 2 === e.hour
            }

            function m(e) {
                return d(e).after((0, n(943003).eU)((0, n(943003).Rz)())) || void 0
            }

            function f(e) {
                let {
                    recurrence: t,
                    intl: o
                } = e, i = "hour" === t.frequency ? function(e) {
                    let t = n(906745).DateTime.now();
                    if (n(906745).DateTime.fromMillis(e.start_date) > t) return e;
                    let o = t.startOf("hour");
                    return { ...e,
                        start_date: o.toMillis(),
                        hour: o.hour,
                        minute: o.minute
                    }
                }(t) : t, l = m(v(i));
                if (!l) return;
                let a = n(906745).DateTime.fromJSDate(l).toUTC().setZone("local", {
                    keepLocalTime: !0
                }).setLocale((0, n(599412).H)(o));
                "hour" !== i.frequency && (a = a.setZone(i.timezone));
                let s = "hour" !== t.frequency && p(t),
                    c = (0, n(850640).Yq)({
                        date: a,
                        dateFormat: "relative",
                        allowRelativeDates: !0,
                        intl: o,
                        shortenDate: !0
                    });
                if (s) return o.formatMessage(r.dateBetweenMidnightAnd3AM, {
                    date: c
                }); {
                    let e = a.toLocaleString(n(906745).DateTime.TIME_SIMPLE);
                    return t.timezone !== (0, n(714350).P)() && (e += ` ${a.toFormat("ZZZZ")}`), o.formatMessage(r.dateAtTime, {
                        date: c,
                        time: e
                    })
                }
            }

            function h(e, t) {
                return (0, n(722371).O9)(e) ? "number" === e.type ? t.formatMessage(r.numberEndConditionDescription, {
                    number: e.number_of_occurrences
                }) : "date" === e.type ? (0, n(850640).Yq)({
                    date: n(906745).DateTime.fromMillis(e.end_at),
                    dateFormat: "relative",
                    allowRelativeDates: !0,
                    intl: t,
                    shortenDate: !0
                }) : void(0, n(722371).HB)(e) : t.formatMessage(r.noEndCondition)
            }

            function g(e) {
                return { ...e,
                    start_date: (0, n(943003).l1)(e.start_date),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? {
                        type: "date",
                        end_at: (0, n(943003).l1)(e.end_condition.end_at)
                    } : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function y(e, t, n) {
                return e.plus(n - t)
            }

            function v(e) {
                var t;
                let o;
                return { ...e,
                    start_date: (0, n(943003).Rz)(new Date(e.start_date)),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? (t = e.end_condition, o = n(906745).DateTime.fromMillis(t.end_at).set({
                        hour: e.hour ? ? 0,
                        minute: e.minute ? ? 0
                    }), {
                        type: "date",
                        end_at: (0, n(943003).Rz)(o.toJSDate())
                    }) : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function w(e, t) {
                let o = n(381453).fN(e, e => void 0 !== e),
                    i = n(381453).fN(t, e => void 0 !== e);
                return n(381453).n4(o, i)
            }
        },
        852864: (e, t, n) => {
            n.d(t, {
                H: () => o
            }), n(898992), n(672577);

            function o({
                spaceStore: e,
                userId: t,
                environment: i
            }) {
                let r = new(n(736309)).d(i, {
                    table: n(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return r ? n(994797).SpaceViewStore.createChildStore(e, {
                    id: r.id,
                    table: n(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        868411: (e, t, n) => {
            n.d(t, {
                UD: () => i
            }), n(16280);
            let o = {
                property: function({
                    template: e,
                    collectionStore: t,
                    collectionViewStore: o,
                    collectionSettingsStore: i
                }) {
                    let r = (0, n(717673).S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    if (!r) throw Error(`No property instance found for property template ${e.templateId}`);
                    let l = o.getType();
                    (0, n(76790).a)({
                        collectionSettingsStore: i,
                        item: {
                            type: "property",
                            property: r.id,
                            formatKey: l ? n(565546).u9(l) : void 0
                        }
                    })
                },
                collection_view: function({
                    template: e,
                    environment: t,
                    collectionStore: o,
                    collectionContextStore: i
                }) {
                    let r = (0, n(717673).S1)({
                        collectionStore: o,
                        templateId: e.templateId,
                        instancePointerType: "collection_view"
                    });
                    if (!r) throw Error(`No collection view instance found for property template ${e.templateId}`);
                    ! function({
                        environment: e,
                        collectionContextStore: t,
                        collectionViewId: o
                    }) {
                        var i;
                        (null == (i = t.collectionViewStore()) ? void 0 : i.id) !== o && (0, n(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: o,
                            isFullScreen: t.isFullScreenStore.state,
                            isRootChild: t.isRootChildStore.state,
                            isInPeekRenderer: t.isInPeekRendererStore.state
                        }), (0, n(76790).a)({
                            collectionSettingsStore: t.settingsStore,
                            item: {
                                type: "main"
                            }
                        })
                    }({
                        environment: t,
                        collectionContextStore: i,
                        collectionViewId: r.id
                    })
                },
                compound: function(e) {}
            };

            function i(e) {
                o[e.template.type](e)
            }
        },
        937776: (e, t, n) => {
            n.d(t, {
                B: () => r
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, o.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                r = (0, n(104509).wt)("archiveBox", i, "default")
        },
        950237: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                layoutIcon: () => i
            }), n(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.29 3.29 13.41 13.41",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.3 4.825c0-.842.683-1.525 1.525-1.525h3.15c.842 0 1.525.683 1.525 1.525v10.35c0 .842-.683 1.525-1.525 1.525h-3.15A1.525 1.525 0 0 1 3.3 15.175zm1.525-.275a.275.275 0 0 0-.275.275v10.35c0 .152.123.275.275.275h3.15a.275.275 0 0 0 .275-.275V4.825a.275.275 0 0 0-.275-.275zm5.675.275v3.15c0 .842.683 1.525 1.525 1.525h3.15c.842 0 1.525-.683 1.525-1.525v-3.15c0-.842-.683-1.525-1.525-1.525h-3.15c-.842 0-1.525.683-1.525 1.525m1.525-.275h3.15c.152 0 .275.123.275.275v3.15a.275.275 0 0 1-.275.275h-3.15a.275.275 0 0 1-.275-.275v-3.15c0-.152.123-.275.275-.275m0 5.95c-.842 0-1.525.683-1.525 1.525v3.15c0 .842.683 1.525 1.525 1.525h3.15c.842 0 1.525-.683 1.525-1.525v-3.15c0-.842-.683-1.525-1.525-1.525zm-.275 1.525c0-.152.123-.275.275-.275h3.15c.152 0 .275.123.275.275v3.15a.275.275 0 0 1-.275.275h-3.15a.275.275 0 0 1-.275-.275z"
                    })
                },
                i = (0, n(104509).wt)("layout", o, "default")
        },
        964047: (e, t, n) => {
            n.r(t), n.d(t, {
                WorkflowTemplatesTooltip: () => i
            }), n(296540);
            var o = n(474848);

            function i({
                collectionTemplate: e,
                placement: t,
                children: r
            }) {
                return e.templateId === n(582881).MH ? (0, o.jsx)(o.Fragment, {
                    children: r({})
                }) : (0, o.jsx)(l, {
                    collectionTemplate: e,
                    placement: t,
                    children: r
                })
            }
            let r = {
                tooltip: {
                    whiteSpace: "break-spaces"
                },
                tooltipInner: {
                    width: 230,
                    marginTop: 4,
                    marginBottom: 4
                },
                imageContainer: {
                    width: "100%",
                    height: 100,
                    borderRadius: 4,
                    marginBottom: 6,
                    overflow: "hidden",
                    color: n(632079).Tj.text.primary
                },
                description: {
                    whiteSpace: "normal",
                    lineHeight: 1.4
                }
            };

            function l({
                collectionTemplate: e,
                placement: t,
                children: i
            }) {
                let a = (0, n(140507).P)(e.value.targetCollection.icon);
                return (0, o.jsx)(n(51831).m, {
                    placement: t ? ? "left",
                    delayThreshold: 0,
                    style: r.tooltip,
                    content: () => (0, o.jsxs)("div", {
                        style: r.tooltipInner,
                        children: [(0, o.jsx)("div", {
                            style: r.imageContainer,
                            children: (0, o.jsx)(n(710471).i, {
                                template: e,
                                templateColor: a,
                                index: 0
                            })
                        }), (0, o.jsx)("div", {
                            style: r.description,
                            children: e.description
                        })]
                    }),
                    children: i
                })
            }
        },
        966559: (e, t, n) => {
            n.r(t), n.d(t, {
                exclamationMarkCircleSmallIcon: () => r,
                iconDefinition: () => i
            }), n(296540);
            var o = n(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M7.9 4.875a.625.625 0 0 0-.625.625V8a.625.625 0 1 0 1.25 0V5.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, o.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                r = (0, n(104509).wt)("exclamationMarkCircleSmall", i, "small")
        }
    }
]);