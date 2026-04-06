"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [83490], {
        72461: (e, t, n) => {
            n.d(t, {
                Ay: () => r,
                t_: () => s,
                v7: () => a
            }), n(296540);
            var i = n(474848);

            function o(e) {
                let t = (0, n(533992).v3)(),
                    {
                        actor: o,
                        format: r,
                        hasTooltip: s,
                        tooltipHeader: a,
                        hasPersonHoverCard: u,
                        spaceStore: d
                    } = e,
                    c = (0, n(682985).K8)(() => {
                        let e = o.asActor;
                        if (e) return (0, n(478418).J)(t, e)
                    }, [o, t]);
                return (0, i.jsx)(n(376921).Ay, { ...e,
                    renderAvatar: t => {
                        if (!c) return (0, i.jsx)(n(4458).fI, {
                            alignItems: "center",
                            height: t,
                            children: (0, i.jsx)("div", {
                                style: {
                                    height: t / 2,
                                    width: 100,
                                    borderRadius: t / 2,
                                    background: n(632079).Tj.background.tertiaryTranslucent
                                }
                            })
                        });
                        if (c instanceof n(447003).v)
                            if (r === n(696654).NY.Inline) return (0, i.jsx)(n(31319).A, {
                                botStore: c,
                                size: t,
                                style: l
                            });
                            else return (0, i.jsx)(n(59724).A, {
                                botStore: c,
                                avatarSize: t,
                                inline: !0,
                                style: l
                            });
                        if (c instanceof n(807825).L)
                            if (r === n(696654).NY.Inline) return (0, i.jsx)(n(321753).A, {
                                userStore: c,
                                size: t,
                                avatarShouldShowShadow: !1,
                                hasTooltip: s ? ? !0,
                                style: l,
                                tooltipHeader: a,
                                hasPersonHoverCard: u
                            });
                            else return (0, i.jsx)(n(980494).A, {
                                userStore: c,
                                avatarSize: t,
                                inline: !0,
                                hasTooltip: s,
                                hasPersonHoverCard: u,
                                style: l,
                                tooltipHeader: a,
                                spaceStore: d,
                                personHoverCardEntrypoint: u ? e.personHoverCardEntrypoint : void 0
                            });
                        (0, n(722371).HB)(c)
                    }
                })
            }
            let l = {
                minWidth: 0
            };
            o.Format = n(696654).NY;
            let r = o;

            function s(e) {
                let {
                    userValue: t,
                    ...l
                } = e, r = (0, n(197018).MR)(t);
                return (0, i.jsx)(o, {
                    actor: r,
                    ...l
                })
            }

            function a(e) {
                let {
                    botValue: t,
                    ...l
                } = e;
                return (0, i.jsx)(o, {
                    actor: (0, n(197018).oC)(t),
                    hasPersonHoverCard: !1,
                    ...l
                })
            }
            s.Format = n(376921).mI, a.Format = n(376921).mI
        },
        454860: (e, t, n) => {
            n.d(t, {
                C: () => m,
                A: () => p
            }), n(898992), n(354520), n(581454);
            var i, o = n(296540);
            n(18107), n(967357);
            var l = n(474848);
            let r = {
                    width: 250,
                    maxHeight: "40vh"
                },
                s = {
                    maxHeight: "20vh"
                },
                a = function({
                    labelText: e,
                    value: t,
                    renderResultMenuItem: i,
                    onConfirm: s,
                    items: a,
                    performRequest: u,
                    onDismiss: m,
                    onChange: p,
                    renderToken: h,
                    onRemove: f,
                    onClear: x,
                    disabled: g
                }) {
                    var b, j, y, v, I, C, A, M, k, S;
                    let T = (0, n(682985).uB)(void 0, n(419110).$),
                        R = (0, n(682985).uB)(void 0, n(519156).A),
                        [w, B] = (0, n(739271).s)(),
                        F = (0, o.useCallback)((n, o, r) => (0, l.jsx)(c, {
                            error: n,
                            data: o,
                            ready: r,
                            labelText: e,
                            value: t,
                            renderResultMenuItem: i,
                            onConfirm: s,
                            menuListStore: T,
                            comboboxProps: B
                        }), [e, t, i, s, T, B]);
                    return (0, l.jsx)(n(747369).A, { ...(b = m, j = e, y = t, v = a, I = p, C = h, A = f, M = x, k = g, S = w, n(986939).A.isMobile ? {
                            menuType: n(649476).gu.Modal,
                            title: j.title,
                            right: (0, l.jsx)(n(109939).sA, { ...n(789722).W.done
                            }),
                            onClickRight: b,
                            header: (0, l.jsx)(d, {
                                labelText: j,
                                value: y,
                                items: v,
                                disabled: k,
                                onChange: I,
                                renderToken: C,
                                onRemove: A,
                                onClear: M,
                                inputComboboxProps: S
                            })
                        } : {
                            menuType: n(649476).gu.Popup,
                            onClickOutside: b,
                            header: (0, l.jsx)(d, {
                                labelText: j,
                                value: y,
                                items: v,
                                disabled: k,
                                onChange: I,
                                renderToken: C,
                                onRemove: A,
                                onClear: M,
                                inputComboboxProps: S
                            }),
                            ...r
                        }),
                        children: (0, l.jsx)(n(814255).A, {
                            debounce: 100,
                            requestStore: R,
                            request: {
                                query: t,
                                current: a
                            },
                            performRequest: u,
                            render: F
                        })
                    })
                },
                u = {
                    padding: "4px 8px"
                };

            function d({
                labelText: e,
                value: t,
                items: i,
                disabled: o,
                onChange: r,
                renderToken: a,
                onRemove: c,
                onClear: m,
                inputComboboxProps: p
            }) {
                let h = i.map(e => a(e, {
                    onRemove: () => c(e)
                }));
                return (0, l.jsx)(n(844565).A, {
                    isInput: !0,
                    children: (0, l.jsx)("div", {
                        style: u,
                        children: (0, l.jsx)(n(160319).Ay, {
                            focus: !n(986939).A.isMobile || void 0,
                            focusAfterAnimation: !0,
                            format: n(160319).le.FilterValue,
                            tokens: h,
                            placeholder: e.tokenInputPlaceholder,
                            onRemoveLastToken: () => {
                                let e;
                                (e = i.at(-1)) && c(e)
                            },
                            onClearButtonClick: m,
                            value: t,
                            onChange: r,
                            showClearButton: !0,
                            disabled: !!o,
                            style: s,
                            ...p
                        })
                    })
                })
            }

            function c({
                error: e,
                data: t,
                ready: i,
                labelText: r,
                value: s,
                renderResultMenuItem: a,
                onConfirm: u,
                menuListStore: d,
                comboboxProps: m
            }) {
                let p = (0, n(682985).uB)(d, n(419110).$),
                    h = (0, o.useCallback)(e => (0, l.jsx)(n(844565).A, { ...e,
                        title: r.resultSectionTitle,
                        loading: !i
                    }), [r, i]);
                if (e) return n(773352).log({
                    level: "error",
                    from: r.componentDebugName,
                    type: "requestFailed",
                    error: (0, n(416607).convertErrorToLog)(e),
                    data: {
                        miscDataToConvertToString: {
                            query: s
                        }
                    }
                }), (0, l.jsx)(h, {
                    children: (0, l.jsx)(n(498341).u, {
                        title: (0, l.jsx)(n(109939).sA, {
                            defaultMessage: "Something went wrong.",
                            id: "search.inputMenu.errorMessage"
                        })
                    })
                });
                if (!t) return (0, l.jsx)(h, {
                    children: (0, l.jsx)(n(498341).u, {
                        title: (0, l.jsx)(n(109939).sA, {
                            defaultMessage: "Loading…",
                            id: "search.inputMenu.loading.message"
                        })
                    })
                });
                if (t && 0 === t.length) return (0, l.jsx)(h, {
                    children: (0, l.jsx)(n(498341).u, {
                        title: (0, l.jsx)(n(109939).sA, {
                            defaultMessage: "No results found",
                            id: "search.inputMenu.noResults.message"
                        })
                    })
                });
                let f = {
                    key: "results",
                    items: t.map(e => ({
                        key: e,
                        action: () => u(e),
                        render: t => a(e, t)
                    })),
                    render: h
                };
                return (0, l.jsx)(n(558045).A, {
                    type: n(558045).O.Vertical,
                    store: p,
                    initialFocus: 0,
                    sections: [f],
                    comboboxProps: m
                })
            }
            let m = ((i = {}).Button = "Button", i.Section = "Section", i.Pill = "Pill", i);

            function p(e) {
                let {
                    items: t,
                    keepInputOnItemConfirm: i,
                    mode: r,
                    onChange: s,
                    onMenuDismiss: a,
                    onMenuOpen: u,
                    autoOpen: d
                } = e, c = (0, o.useRef)(), p = (0, o.useRef)(null), [h, f] = (0, o.useState)(!1), [g, b] = (0, o.useState)(""), [j, y] = (0, o.useState)(void 0), [v, C] = (0, o.useState)(void 0), A = (0, o.useCallback)((e, t) => {
                    c.current = requestAnimationFrame(e => {
                        if (p && p.current && (C(p.current.getBoundingClientRect()), t)) {
                            let {
                                shouldOpenMenu: e,
                                nextIndexToReplace: n
                            } = t;
                            e && (f(!0), y(n))
                        }
                    })
                }, [p]);
                (0, o.useEffect)(() => (window.addEventListener("resize", A), () => {
                    window.removeEventListener("resize", A), c.current && (cancelAnimationFrame(c.current), c.current = void 0)
                }), [A]);
                let M = (0, o.useCallback)(e => {
                        null == u || u(), A(void 0, {
                            shouldOpenMenu: !0,
                            nextIndexToReplace: e
                        })
                    }, [u, A]),
                    k = (0, o.useCallback)(() => {
                        f(!0)
                    }, []),
                    S = (0, o.useRef)(!1);
                (0, o.useEffect)(() => {
                    !d || h || S.current || (n(986939).A.isMobile ? k() : M(), S.current = !0)
                }, [d, h, M, k]);
                let T = t.length;

                function R(e) {
                    B(), f(!1), y(void 0), null == a || a(e)
                }

                function w(e) {
                    b(e.target.value)
                }

                function B() {
                    b("")
                }

                function F() {
                    s([])
                }
                let P = (0, o.useCallback)(e => {
                        s(t.filter(t => t !== e))
                    }, [t, s]),
                    L = (0, o.useCallback)(e => {
                        if ("number" == typeof j && j < t.length) s(t.slice(0, j).concat(e, t.slice(j + 1)));
                        else if (t.includes(e) && m.Pill) P(e);
                        else {
                            let i = t.concat(e);
                            s(n(381453).sb(i))
                        }
                        i || B()
                    }, [P, j, t, i, s]);
                return (0, o.useEffect)(() => {
                    A()
                }, [T, r, A]), n(986939).A.isMobile ? (0, l.jsx)(I, {
                    inputTemporaryValue: g,
                    isMenuOpen: h,
                    onClearInput: B,
                    onClearItems: F,
                    onItemConfirm: L,
                    onMenuClose: R,
                    onMenuInputChange: w,
                    onMenuOpen: k,
                    onRemove: P,
                    searchTokenFilterProps: e
                }) : (0, l.jsx)(x, {
                    hasItemsSelected: r === m.Pill && e.hasItemsSelected,
                    inputTemporaryValue: g,
                    isMenuOpen: h,
                    onClearInput: B,
                    onClearItems: F,
                    onItemConfirm: L,
                    onMenuClose: R,
                    onMenuInputChange: w,
                    onMenuOpen: M,
                    onRemove: P,
                    popupOriginRect: v,
                    ref: p,
                    searchTokenFilterProps: e
                })
            }

            function h() {
                return {
                    buttonMenuItem: {
                        color: n(632079).Tj.text.secondary
                    },
                    appendListItemButton: {
                        color: n(632079).Tj.text.tertiary
                    }
                }
            }

            function f(e) {
                return {
                    menuItem: {
                        minHeight: "initial",
                        paddingTop: n(986939).A.isMobile ? 12 : 4,
                        paddingBottom: n(986939).A.isMobile ? 12 : 4
                    },
                    menuItemWrapper: {
                        display: "flex"
                    },
                    sectionMenuItem: {
                        display: "flex"
                    },
                    appendListItemButton: {
                        minHeight: "initial",
                        paddingTop: 4,
                        paddingBottom: 4,
                        fontSize: n(418676).vQ
                    },
                    icon: {
                        marginInlineEnd: "Pill" === e ? 6 : -2
                    },
                    iconSmall: {
                        height: 12,
                        width: 12
                    },
                    summary: {
                        display: "inline"
                    },
                    summaryItem: {
                        display: "inline"
                    }
                }
            }
            let x = (0, o.forwardRef)(function(e, t) {
                let {
                    hasItemsSelected: i,
                    inputTemporaryValue: r,
                    isMenuOpen: s,
                    onClearInput: a,
                    onClearItems: u,
                    onItemConfirm: d,
                    onMenuClose: c,
                    onMenuInputChange: p,
                    onMenuOpen: h,
                    onRemove: x,
                    popupOriginRect: v,
                    searchTokenFilterProps: I
                } = e, {
                    addItemLabel: C,
                    disabled: M,
                    focused: k,
                    icon: S,
                    items: T,
                    mode: R,
                    renderFilter: w,
                    title: B
                } = I, F = M || s, P = (0, o.useMemo)(() => ({
                    open: s,
                    ariaPopupType: "listbox"
                }), [s]), L = (0, o.useCallback)(() => {
                    h()
                }, [h]);
                return (0, l.jsxs)(n(543588).A, {
                    title: R === m.Section ? B : void 0,
                    marginAfter: R === m.Section,
                    style: f(R).sectionMenuItem,
                    children: [R !== m.Pill ? (0, l.jsx)(g, {
                        disableFilters: F,
                        items: T,
                        onClick: h,
                        onRemove: x,
                        renderFilter: w
                    }) : void 0, (0, l.jsx)(n(660343).k.Provider, {
                        value: P,
                        children: R === m.Section ? (0, l.jsx)(b, {
                            addItemLabel: C,
                            disabled: M,
                            isMenuOpen: s,
                            mode: R,
                            onClick: L,
                            ref: t
                        }) : R === m.Button ? (0, l.jsx)(j, {
                            disabled: M,
                            focused: k,
                            icon: S,
                            isMenuOpen: s,
                            mode: R,
                            onClick: L,
                            ref: t,
                            title: B
                        }) : R === m.Pill ? (0, l.jsx)(y, {
                            disabled: M,
                            hasItemsSelected: i,
                            icon: S,
                            onClick: L,
                            ref: t,
                            title: B
                        }) : void(0, n(722371).HB)(R)
                    }), (0, l.jsx)(n(182718).zD, {
                        alignmentToOrigin: "start",
                        keepFocus: !0,
                        onDismiss: c,
                        open: s,
                        originRect: v,
                        placementToOrigin: "bottom",
                        popupType: n(423291).n.Popup,
                        preventScaleTransition: !0,
                        content: () => (0, l.jsx)(A, {
                            searchTokenFilterProps: I,
                            inputTemporaryValue: r,
                            onMenuInputChange: p,
                            onClearInput: a,
                            onClearItems: u,
                            onItemConfirm: d,
                            onMenuClose: c,
                            onRemove: x
                        }),
                        trapFocus: !0
                    })]
                })
            });

            function g(e) {
                let {
                    disableFilters: t,
                    items: i,
                    onClick: r,
                    onRemove: s,
                    renderFilter: a
                } = e, u = (0, o.useMemo)(() => i.map((e, n) => (0, l.jsx)("li", {
                    children: a(e, {
                        disabled: t,
                        onClick: () => r(n),
                        onRemove: () => s(e)
                    })
                }, `${e}_${n}`)), [t, i, r, s, a]);
                return (0, l.jsx)("ul", {
                    style: n(418676).$t,
                    children: u
                })
            }
            let b = (0, o.forwardRef)(function(e, t) {
                    let {
                        addItemLabel: i,
                        disabled: o,
                        isMenuOpen: r,
                        mode: s,
                        onClick: a
                    } = e, u = f(s), d = (0, n(960253).I)(h, [h]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            ref: t,
                            style: u.menuItemWrapper
                        }), (0, l.jsx)(n(95582).A, {
                            disabled: o || r,
                            focused: !1,
                            icon: (0, l.jsx)(n(16275).I, {
                                icon: n(550246).plusFillSmallIcon,
                                size: "xxs"
                            }),
                            onClick: a,
                            style: { ...u.appendListItemButton,
                                ...d.appendListItemButton
                            },
                            title: i
                        })]
                    })
                }),
                j = (0, o.forwardRef)(function(e, t) {
                    let {
                        disabled: i,
                        focused: o,
                        icon: r,
                        isMenuOpen: s,
                        mode: a,
                        onClick: u,
                        title: d
                    } = e, c = f(a), m = (0, n(960253).I)(h, [h]), p = { ...c.menuItem,
                        ...m.buttonMenuItem
                    };
                    return (0, l.jsx)("div", {
                        ref: t,
                        style: c.menuItemWrapper,
                        children: (0, l.jsx)(n(95582).A, {
                            disabled: i || s,
                            focused: o,
                            icon: (0, l.jsx)(n(16275).I, {
                                icon: r,
                                size: "default",
                                style: c.icon
                            }),
                            onClick: u,
                            style: p,
                            title: d
                        })
                    })
                }),
                y = (0, o.forwardRef)(function(e, t) {
                    let {
                        disabled: i,
                        hasItemsSelected: o,
                        icon: r,
                        onClick: s,
                        title: a
                    } = e, u = f(m.Pill);
                    return (0, l.jsx)("div", {
                        ref: t,
                        style: u.menuItemWrapper,
                        children: (0, l.jsx)(n(97726).n, {
                            on: o,
                            icon: (0, l.jsx)(n(16275).I, {
                                icon: r,
                                fitToViewBox: "horizontal"
                            }),
                            title: (0, l.jsx)("span", {
                                children: a
                            }),
                            onClick: s,
                            disabled: i
                        })
                    })
                });

            function v(e) {
                let {
                    disableFilters: t,
                    items: i,
                    mode: o,
                    onClickClear: r,
                    onMenuOpen: s,
                    renderItemForSummary: a,
                    title: u
                } = e, d = f(o), c = { ...n(418676).$t,
                    ...d.summary
                }, m = i.length - 1, p = (0, l.jsx)("ul", {
                    style: c,
                    children: i.map((e, t) => (0, l.jsxs)("li", {
                        style: d.summaryItem,
                        children: [a(e), t !== m ? "," : void 0, " "]
                    }, e))
                });
                return (0, l.jsx)(n(835187).A, {
                    disabled: t,
                    label: u,
                    onClick: s,
                    onClickClear: r,
                    title: p
                })
            }

            function I(e) {
                let {
                    inputTemporaryValue: t,
                    isMenuOpen: i,
                    onClearInput: o,
                    onClearItems: r,
                    onItemConfirm: s,
                    onMenuClose: a,
                    onMenuInputChange: u,
                    onMenuOpen: d,
                    onRemove: c,
                    searchTokenFilterProps: p
                } = e, {
                    mode: h,
                    disabled: x,
                    title: g,
                    items: b,
                    renderItemForSummary: j,
                    icon: y
                } = p, I = f(h), C = x || i, M = h === m.Section ? (0, l.jsx)(v, {
                    disableFilters: C,
                    items: b,
                    mode: h,
                    onClickClear: r,
                    onMenuOpen: d,
                    renderItemForSummary: j,
                    title: g
                }) : (0, l.jsx)(n(95582).A, {
                    disabled: C,
                    focused: !1,
                    icon: (0, l.jsx)(n(16275).I, {
                        icon: y,
                        style: I.icon
                    }),
                    onClick: d,
                    title: g
                });
                return (0, l.jsx)(n(182718).zD, {
                    keepFocus: !0,
                    onDismiss: a,
                    open: i,
                    popupType: n(423291).n.SlideUp,
                    content: () => (0, l.jsx)(A, {
                        inputTemporaryValue: t,
                        onClearInput: o,
                        onClearItems: r,
                        onItemConfirm: s,
                        onMenuClose: a,
                        onMenuInputChange: u,
                        onRemove: c,
                        searchTokenFilterProps: p
                    }),
                    children: M
                })
            }
            let C = {
                padding: 6,
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "row"
            };

            function A(e) {
                let {
                    inputTemporaryValue: t,
                    onClearInput: i,
                    onClearItems: r,
                    onItemConfirm: s,
                    onMenuClose: u,
                    onMenuInputChange: d,
                    onRemove: c,
                    searchTokenFilterProps: m
                } = e, {
                    renderToken: p,
                    renderFooter: h,
                    allowApplyBatchSelection: f,
                    isRemovable: x,
                    onFilterRemove: g
                } = m, b = (0, o.useCallback)(() => {
                    u(), null == g || g()
                }, [u, g]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(a, { ...m,
                        onChange: d,
                        onClear: () => {
                            i(), r()
                        },
                        onConfirm: s,
                        onDismiss: u,
                        onRemove: c,
                        renderToken: p,
                        value: t
                    }), h ? (0, l.jsxs)(n(844565).A, {
                        style: C,
                        topBorder: !0,
                        children: [(0, l.jsx)(n(988022).p, {
                            onClick: r,
                            children: (0, l.jsx)(n(109939).sA, {
                                id: "searchTokenFilter.clearButton",
                                defaultMessage: "Clear"
                            })
                        }), f ? (0, l.jsx)(n(912946).A, {
                            colorPalette: "blue",
                            onClick: () => {
                                u("applyButton")
                            },
                            children: (0, l.jsx)(n(109939).sA, {
                                defaultMessage: "Apply",
                                id: "searchTokenFilter.applyButton"
                            })
                        }) : void 0]
                    }) : void 0, x && g ? (0, l.jsx)(n(726219).x, {
                        onRemove: b
                    }) : void 0]
                })
            }
        },
        478418: (e, t, n) => {
            n.d(t, {
                J: () => i
            });

            function i(e, t) {
                if (t && t.asActor) switch (t.pointer.table) {
                    case "bot":
                        return new(n(447003)).v(e, t.pointer);
                    case "notion_user":
                        return new(n(807825)).L(e, t.pointer);
                    default:
                        (0, n(722371).HB)(t.pointer)
                }
            }
        },
        583490: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(581454), n(296540);
            var i = n(474848);
            let o = function({
                mode: e,
                title: t,
                userIds: o,
                onChange: r,
                disabled: a,
                focused: m,
                onMenuDismiss: p,
                onMenuOpen: h,
                parentStore: f
            }) {
                let x = (0, n(533992).v3)(),
                    g = (0, n(109939).tz)();
                return (0, i.jsx)(n(454860).A, {
                    mode: e,
                    title: t,
                    icon: n(623290).personIcon,
                    items: o,
                    onChange: r,
                    disabled: a,
                    focused: m,
                    renderFilter: (e, t) => (0, i.jsx)(c, {
                        item: e,
                        args: t,
                        parentStore: f
                    }),
                    renderToken: (e, t) => (0, i.jsx)(u, {
                        item: e,
                        handlers: t,
                        userIds: o,
                        parentStore: f
                    }),
                    renderItemForSummary: e => (0, i.jsx)(s, {
                        item: e,
                        parentStore: f
                    }),
                    addItemLabel: (0, i.jsx)(n(109939).sA, {
                        defaultMessage: "Add a person",
                        id: "search.filterMenu.addAPersonButton.label"
                    }),
                    labelText: {
                        title: t,
                        tokenInputPlaceholder: g.formatMessage({
                            defaultMessage: "Search people",
                            id: "search.filterMenu.searchPeople.placeholder"
                        }),
                        componentDebugName: "SearchPersonFilter"
                    },
                    performRequest: e => l(e, x),
                    renderResultMenuItem: (e, t) => (0, i.jsx)(d, {
                        item: e,
                        props: t,
                        parentStore: f
                    }),
                    onMenuDismiss: p,
                    onMenuOpen: h,
                    hasItemsSelected: (null == o ? void 0 : o.length) > 0
                })
            };
            async function l({
                query: e,
                current: t
            }, i) {
                let o = new Set(t),
                    r = await n(308825).T.searchActions.load();
                return (await r.searchSpaceUsers({
                    environment: i,
                    query: e,
                    membersOnly: !1,
                    limit: 20 + o.size
                })).filter(e => !o.has(e.id)).slice(0, 20).map(e => e.id)
            }

            function r(e, t) {
                return n(807825).L.createChildStore(t, {
                    table: n(832375).oo9,
                    id: e
                }).getValue()
            }

            function s({
                item: e,
                parentStore: t
            }) {
                let o = (0, n(109939).tz)(),
                    l = (0, n(682985).K8)(() => r(e, t), [e, t]);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, n(413818).c6)(o, l)
                })
            }
            let a = {
                background: "transparent"
            };

            function u({
                item: e,
                handlers: t,
                userIds: o,
                parentStore: l
            }) {
                let s = 1 === o.length,
                    d = (0, n(682985).K8)(() => r(e, l), [e, l]);
                return d ? (0, i.jsx)(n(72461).Ay, {
                    format: n(986939).A.isMobile ? n(376921).mI.Large : n(376921).mI.Small,
                    showRemoveButton: !0,
                    isSingle: s,
                    onClickRemove: t.onRemove,
                    actor: (0, n(197018).MR)(d),
                    shouldShrink: !0,
                    style: a,
                    hasPersonHoverCard: !1
                }, e) : null
            }

            function d({
                item: e,
                props: t,
                parentStore: o
            }) {
                let l = (0, n(682985).K8)(() => r(e, o), [e, o]);
                return (0, i.jsx)(n(920224).A, { ...t,
                    actor: (0, n(197018).MR)(l)
                })
            }

            function c({
                item: e,
                args: t,
                parentStore: o
            }) {
                let {
                    disabled: l,
                    onRemove: s,
                    onClick: a
                } = t, u = {
                    menuItem: {
                        minHeight: "initial",
                        paddingTop: n(986939).A.isMobile ? 12 : 4,
                        paddingBottom: n(986939).A.isMobile ? 12 : 4
                    },
                    menuItemTitle: {
                        width: "100%"
                    },
                    labeledMenuItemTitle: {
                        display: "inline-flex",
                        alignItems: "center"
                    },
                    menuItemLabel: {
                        marginInlineEnd: 12
                    }
                }, d = (0, n(682985).K8)(() => r(e, o), [e, o]), m = (0, i.jsx)(n(706893).A, {
                    disabled: l,
                    onClick: s
                });
                return (0, i.jsx)(n(920224).A, {
                    disabled: l,
                    focused: !1,
                    actor: (0, n(197018).MR)(d),
                    right: m,
                    style: u.menuItem,
                    desktopTitleStyle: u.menuItemTitle,
                    onClick: a
                }, e)
            }
        },
        623290: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                personIcon: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.68 2.37 12.64 15.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M10 2.375c-1.137 0-2.054.47-2.674 1.242-.608.757-.9 1.765-.9 2.824s.292 2.066.9 2.824c.62.772 1.537 1.241 2.674 1.241s2.055-.469 2.675-1.241c.608-.758.9-1.766.9-2.824 0-1.059-.292-2.067-.9-2.824-.62-.773-1.538-1.242-2.675-1.242M7.676 6.441c0-.842.233-1.554.624-2.042.38-.473.937-.774 1.7-.774s1.32.301 1.7.774c.391.488.624 1.2.624 2.042s-.233 1.554-.624 2.041c-.38.473-.937.774-1.7.774s-1.32-.3-1.7-.774c-.391-.487-.624-1.2-.624-2.041M10 11.63c-2.7 0-5.101 1.315-6.12 3.305-.361.706-.199 1.421.23 1.923.412.48 1.06.767 1.74.767h8.3c.68 0 1.328-.287 1.74-.767.429-.502.591-1.217.23-1.923-1.02-1.99-3.42-3.305-6.12-3.305m-5.007 3.875c.761-1.488 2.672-2.626 5.007-2.626s4.246 1.138 5.007 2.626c.105.204.07.378-.067.54-.156.182-.448.33-.79.33h-8.3c-.342 0-.634-.148-.79-.33-.138-.162-.172-.336-.067-.54"
                    })
                },
                o = (0, n(104509).wt)("person", i, "default")
        },
        706893: (e, t, n) => {
            n.d(t, {
                A: () => l
            }), n(296540);
            var i = n(474848);
            let o = (0, n(109939).YK)({
                    removeItem: {
                        id: "menuItemRemoveButton.ariaLabel",
                        defaultMessage: "Remove item"
                    }
                }),
                l = function(e) {
                    let t = (0, n(109939).tz)(),
                        l = {
                            height: void 0,
                            width: void 0
                        },
                        {
                            onClick: r,
                            disabled: s
                        } = e,
                        a = n(986939).A.isMobile ? { ...l,
                            marginInlineEnd: -12,
                            marginTop: -12,
                            marginBottom: -12,
                            paddingInlineEnd: 12,
                            paddingTop: 12,
                            paddingBottom: 12
                        } : l;
                    return (0, i.jsx)(n(374533).A, {
                        icon: n(367198).xMarkCircleFillIcon,
                        onClick: r,
                        disabled: s,
                        disableBackground: !0,
                        style: a,
                        ariaLabel: t.formatMessage(o.removeItem)
                    })
                }
        },
        726219: (e, t, n) => {
            n.d(t, {
                x: () => o
            }), n(296540);
            var i = n(474848);

            function o(e) {
                let {
                    onRemove: t
                } = e;
                return (0, i.jsx)(n(844565).A, {
                    topBorder: !0,
                    children: (0, i.jsx)(n(95582).A, {
                        focused: !1,
                        title: (0, i.jsx)(n(109939).sA, {
                            defaultMessage: "Remove",
                            id: "searchFilter.removeButton.label"
                        }),
                        onClick: t
                    })
                })
            }
        },
        835187: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(296540);
            var i = n(474848);
            let o = function(e) {
                let {
                    disabled: t,
                    label: o,
                    title: s,
                    onClick: a,
                    isToggle: u,
                    isToggleActive: d,
                    onClickClear: c,
                    ...m
                } = e, p = {
                    menuItemLabel: {
                        color: n(632079).Tj.text.tertiary
                    }
                }, h = l(), f = (0, i.jsx)("span", {
                    style: p.menuItemLabel,
                    children: o
                });
                return (0, i.jsx)(n(95582).A, {
                    focused: !1,
                    ...m,
                    inline: u,
                    disabled: t,
                    icon: f,
                    title: s,
                    right: (0, i.jsx)(r, {
                        disabled: !!t,
                        isToggle: !!u,
                        isToggleActive: !!d,
                        onClick: a,
                        onClickClear: c
                    }),
                    onClick: a,
                    dontShrinkIcon: !0,
                    dontShrinkRight: !0,
                    shouldWrapTitle: !0,
                    style: h.menuItem,
                    desktopIconStyle: h.menuItemLabel
                })
            };

            function l() {
                return {
                    menuItem: {
                        background: "initial",
                        minHeight: "initial",
                        fontSize: n(986939).A.isMobile ? n(699422).J.UISmall.mobile : n(699422).J.UIRegular.desktop,
                        paddingTop: n(986939).A.isMobile ? 12 : 4,
                        paddingBottom: n(986939).A.isMobile ? 12 : 4
                    },
                    labeledMenuItemTitle: {
                        display: "inline-flex",
                        alignItems: "center"
                    },
                    menuItemLabel: {
                        marginTop: 0
                    },
                    rightWrapper: {
                        display: "flex",
                        alignItems: "center",
                        marginTop: "-50%",
                        marginBottom: "-50%",
                        height: 44
                    }
                }
            }

            function r({
                disabled: e,
                isToggle: t,
                isToggleActive: o,
                onClick: s,
                onClickClear: a = () => {}
            }) {
                let u = l().rightWrapper;
                return t ? (0, i.jsx)("div", {
                    style: u,
                    children: (0, i.jsx)(n(354491).d, {
                        on: !!o,
                        onClick: s
                    })
                }) : (0, i.jsx)(n(706893).A, {
                    disabled: e,
                    onClick: a
                })
            }
        },
        920224: (e, t, n) => {
            n.d(t, {
                A: () => c,
                S: () => u
            });
            var i = n(296540),
                o = n(474848);
            let l = "bodyRegular",
                r = "bodySemibold",
                s = "bodySmRegular",
                a = i.forwardRef((e, t) => {
                    let i, {
                            actor: l,
                            defaultUserTitle: r = "name_only",
                            useEmailAsTooltip: s,
                            tooltip: a,
                            tooltipPlacement: c,
                            hoveredStyle: m,
                            disabledFeedback: p,
                            customUserTitleStyles: h,
                            iconSizeOverride: f
                        } = e,
                        x = (0, n(682985).K8)(() => l.asActor && l.isUser() ? l.email : void 0, [l]),
                        g = s && x ? x : a,
                        b = f || (n(986939).A.isMobile ? n(636518).nd : n(636518).pg),
                        j = "name_and_email" !== r && ("name_and_email_unless_right" !== r || e.right) ? (0, o.jsx)(u, {
                            customStyles: h,
                            actor: null == l ? void 0 : l.asActor
                        }) : (0, o.jsx)(d, {
                            actor: null == l ? void 0 : l.asActor,
                            customStyles: h
                        });
                    return (0, n(197018).H3)(l) ? i = (0, o.jsx)(n(31319).A, {
                        botValue: null == l ? void 0 : l.asActor,
                        size: b
                    }) : (0, n(197018).ps)(l) ? i = (0, o.jsx)(n(321753).A, {
                        userValue: null == l ? void 0 : l.asActor,
                        size: b
                    }) : (0, n(722371).HB)(l), (0, o.jsx)(n(51831).m, {
                        placement: c ? ? "bottom",
                        alignment: "start",
                        textWrap: !0,
                        disableTooltip: !g,
                        content: () => g,
                        children: l => (0, o.jsx)(n(95582).A, { ...(0, n(63390).A)(l, e),
                            icon: i,
                            title: j,
                            disabledFeedback: p,
                            className: "notranslate",
                            ref: t,
                            hoveredStyle: m
                        })
                    })
                });

            function u(e) {
                let {
                    actor: t,
                    customStyles: i
                } = e, r = (0, n(533992).v3)(), a = (0, n(109939).tz)(), u = t && t.id === r.currentUser.id, d = (0, n(682985).K8)(() => t && t.getDisplayName(a), [t, a]), c = n(986939).A.isMobile ? s : l;
                return u ? (0, o.jsx)(n(109939).sA, {
                    id: "UserMenuItem.fullName.authorLabel",
                    defaultMessage: "<author>{fullName}</author> <you>(You)</you>",
                    values: {
                        author: e => (0, o.jsx)(n(111010).D, {
                            as: "span",
                            styleKey: c,
                            style: i,
                            children: e
                        }),
                        fullName: d,
                        you: e => (0, o.jsx)(n(111010).D, {
                            as: "span",
                            colorVariant: "secondary",
                            styleKey: c,
                            style: i,
                            children: e
                        })
                    }
                }) : d ? (0, o.jsx)(n(111010).D, {
                    lineClamp: 1,
                    styleKey: c,
                    style: i,
                    children: d
                }) : (0, o.jsx)(n(111010).D, {
                    styleKey: c,
                    style: i,
                    children: (0, o.jsx)(n(109939).sA, {
                        id: "UserMenuItem.fullName.unknownAuthorLabel",
                        defaultMessage: "Unknown author"
                    })
                })
            }

            function d(e) {
                let {
                    actor: t,
                    customStyles: i
                } = e, a = (0, n(109939).tz)(), u = (0, n(682985).K8)(() => t && t.getDisplayName(a), [t, a]), {
                    email: d,
                    showEmail: c
                } = (0, n(682985).K8)(() => {
                    let e = t && t.asActor && t.isUser() ? t.email : void 0;
                    return {
                        email: e,
                        showEmail: u !== e
                    }
                }, [t, u]), m = n(986939).A.isMobile ? "bodySmRegular" : r, p = n(986939).A.isMobile ? s : l;
                return u ? (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(n(111010).D, {
                        lineClamp: 1,
                        as: "span",
                        styleKey: m,
                        style: i,
                        children: u
                    }), c ? (0, o.jsx)(n(111010).D, {
                        lineClamp: 1,
                        as: "span",
                        styleKey: p,
                        style: i,
                        children: ` ${d}`
                    }) : void 0]
                }) : (0, o.jsx)(n(111010).D, {
                    styleKey: r,
                    style: i,
                    children: (0, o.jsx)(n(109939).sA, {
                        id: "UserMenuItem.fullName.unknownAuthorLabel",
                        defaultMessage: "Unknown author"
                    })
                })
            }
            a.displayName = "UserMenuItem";
            let c = a
        }
    }
]);