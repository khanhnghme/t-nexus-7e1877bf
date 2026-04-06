"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [72181, 72933], {
        53634: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => l,
                sparklesSmallIcon: () => n
            }), i(296540);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.17 1.53 13.65 12.93",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M4.577 1.536a.7.7 0 0 0-.7.7c0 .362-.236.87-.684 1.317-.448.448-.955.683-1.316.683a.7.7 0 1 0 0 1.4c.36 0 .868.236 1.316.684s.684.955.684 1.316a.7.7 0 1 0 1.4 0c0-.36.235-.868.683-1.316s.955-.684 1.317-.684a.7.7 0 1 0 0-1.4c-.362 0-.87-.235-1.317-.683-.448-.448-.683-.955-.683-1.317a.7.7 0 0 0-.7-.7m-.394 3.007q.208-.208.394-.451a4.4 4.4 0 0 0 .844.844 4.4 4.4 0 0 0-.844.845 4.4 4.4 0 0 0-.845-.845 4 4 0 0 0 .451-.393m5.887.413a.7.7 0 0 0-.7.7c0 .831-.392 1.674-1.036 2.318S6.847 9.01 6.016 9.01a.7.7 0 1 0 0 1.4c.831 0 1.674.392 2.318 1.036s1.036 1.487 1.036 2.318a.7.7 0 1 0 1.4 0c0-.831.392-1.674 1.036-2.318s1.487-1.036 2.318-1.036a.7.7 0 1 0 0-1.4c-.831 0-1.674-.392-2.318-1.036S10.77 6.487 10.77 5.656a.7.7 0 0 0-.7-.7m-.746 4.008a5.2 5.2 0 0 0 .746-.941 5.2 5.2 0 0 0 1.687 1.687 5.2 5.2 0 0 0-1.687 1.687A5.2 5.2 0 0 0 8.383 9.71a5.2 5.2 0 0 0 .94-.746"
                    })
                },
                n = (0, i(104509).wt)("sparklesSmall", l, "small")
        },
        242912: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowStraightDownSmallIcon: () => n,
                iconDefinition: () => l
            }), i(296540);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.05 2.12 9.9 11.76",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M8 2.125a.61.61 0 0 0-.625.599v9.017L4.122 8.488a.625.625 0 1 0-.884.884l4.32 4.32c.244.244.64.244.884 0l4.32-4.32a.625.625 0 0 0-.884-.884l-3.253 3.253V2.724A.61.61 0 0 0 8 2.125"
                    })
                },
                n = (0, i(104509).wt)("arrowStraightDownSmall", l, "small")
        },
        264305: (e, t, i) => {
            i.d(t, {
                P: () => a,
                a: () => r
            }), i(581454);
            var l = i(296540),
                n = i(474848);
            let o = {
                headerText: {
                    flexGrow: 1,
                    fontWeight: i(699422).Wy.medium
                },
                step: {
                    display: "flex",
                    gap: 14,
                    minHeight: 28,
                    flexShrink: 0,
                    flexGrow: 0
                },
                stepContent: {
                    flexGrow: 1,
                    alignSelf: "flex-start",
                    color: i(632079).Tj.text.secondary,
                    width: "100%",
                    userSelect: "text"
                },
                collapsedStepsContainer: {
                    maxHeight: 140,
                    overflowY: "auto",
                    position: "relative",
                    padding: "0 0 12px",
                    userSelect: "text"
                },
                collapsedStep: {
                    display: "flex",
                    color: i(632079).Tj.text.secondary,
                    minHeight: 28,
                    padding: "4px 0"
                }
            };

            function a(e) {
                let t, {
                        steps: a,
                        renderStep: r,
                        done: s,
                        style: d,
                        hideLoadingSpinner: c,
                        headerText: h
                    } = e,
                    [x, u] = (0, l.useState)(!1),
                    g = (0, l.useRef)(null),
                    {
                        bodyStyleKey: p
                    } = (0, i(765846).yq)(),
                    m = (0, i(765846).Cd)(p);
                (0, l.useEffect)(() => {
                    !x && a.length > 0 && g.current && (g.current.scrollTop = g.current.scrollHeight)
                }, [a, x]);
                let f = !s && a.length > 0,
                    y = (0, i(960253).I)(() => ({
                        container: {
                            display: "flex",
                            flexDirection: "column",
                            ...d,
                            maxWidth: 600,
                            backgroundColor: i(632079).Tj.selectLightGray[30],
                            borderRadius: 8,
                            boxShadow: `0px 0px 0px 1px ${i(632079).Tj.border.secondary}, 0 1px 3px rgba(0, 0, 0, 0.06)`,
                            padding: 4
                        },
                        header: {
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            color: i(632079).Tj.text.tertiary,
                            ...m,
                            cursor: "pointer",
                            padding: "16px 8px",
                            borderRadius: x || f ? "7px 7px 0 0" : "7px"
                        },
                        steps: {
                            display: "flex",
                            flexDirection: "column",
                            color: i(632079).Tj.text.tertiary,
                            ...m,
                            listStyle: "none",
                            padding: "4px 8px",
                            margin: 0,
                            maxHeight: 400,
                            overflowY: "auto"
                        },
                        icon: {
                            transition: "transform 0.2s ease-in-out",
                            transformOrigin: "center",
                            transform: x ? "rotate(0deg)" : "rotate(calc(var(--direction, 1) * -90deg))"
                        },
                        collapsedSteps: {
                            display: "flex",
                            flexDirection: "column",
                            color: i(632079).Tj.text.tertiary,
                            ...m,
                            listStyle: "none",
                            padding: "0 16px",
                            margin: 0
                        }
                    }), [x, f, d, m]),
                    w = (0, l.useCallback)(() => {
                        u(!x)
                    }, [x]);
                return t = h || (s ? (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Thought",
                    id: "aiInference.thinkingStep.thought"
                }) : (0, n.jsx)(i(109939).sA, {
                    defaultMessage: "Thinking",
                    id: "aiInference.thinkingStep.thinking"
                })), (0, n.jsxs)("div", {
                    style: y.container,
                    children: [(0, n.jsxs)(i(988022).p, {
                        style: y.header,
                        onClick: w,
                        disabled: 0 === a.length,
                        "aria-expanded": x,
                        children: [s || c ? void 0 : (0, n.jsx)(i(517334).k, {
                            size: 12
                        }), (0, n.jsx)("div", {
                            style: o.headerText,
                            children: t
                        }), a.length > 0 ? (0, n.jsx)(i(16275).I, {
                            icon: i(87963).arrowChevronSingleDownIcon,
                            size: "sm",
                            colorVariant: "secondary",
                            style: y.icon
                        }) : void 0]
                    }), x ? (0, n.jsx)("ul", {
                        style: y.steps,
                        children: a.map((e, t) => (0, n.jsx)("li", {
                            style: o.step,
                            children: (0, n.jsx)("div", {
                                style: o.stepContent,
                                children: r(e)
                            })
                        }, t))
                    }) : f && (0, n.jsx)("div", {
                        style: o.collapsedStepsContainer,
                        ref: g,
                        children: (0, n.jsx)("ul", {
                            style: y.collapsedSteps,
                            children: a.map((e, t) => (0, n.jsx)("li", {
                                style: o.collapsedStep,
                                children: r(e)
                            }, t))
                        })
                    })]
                })
            }

            function r(e) {
                let t = Math.floor(e / 6e4),
                    i = Math.floor(e % 6e4 / 1e3);
                return t > 0 ? i > 0 ? `${t}m ${i}s` : `${t}m` : `${i}s`
            }
        },
        265035: (e, t, i) => {
            i.r(t), i.d(t, {
                SCROLLING_SQUIGGLE_DEFAULTS: () => o,
                ScrollingSquiggle: () => a
            });
            var l = i(296540),
                n = i(474848);
            let o = {
                width: 24,
                height: 16,
                tempo: 18,
                minLoopSize: 24,
                maxLoopSize: 32,
                acceleration: .3,
                tailLength: 72,
                strokeWidth: 1.5,
                loopSpacing: 1.3,
                modulationSpeed: .4,
                modulationPhaseOffset: 2,
                tempoModulation: 10,
                accelerationModulation: .12
            };

            function a(e) {
                let {
                    style: t,
                    width: a = o.width,
                    height: r = o.height,
                    tempo: s = o.tempo,
                    minLoopSize: d = o.minLoopSize,
                    maxLoopSize: c = o.maxLoopSize,
                    acceleration: h = o.acceleration,
                    tailLength: x = o.tailLength,
                    strokeWidth: u = o.strokeWidth,
                    strokeColor: g,
                    loopSpacing: p = o.loopSpacing,
                    modulationSpeed: m = o.modulationSpeed,
                    modulationPhaseOffset: f = o.modulationPhaseOffset,
                    tempoModulation: y = o.tempoModulation,
                    accelerationModulation: w = o.accelerationModulation
                } = e, v = (0, l.useRef)(null), j = (0, l.useRef)(), b = (0, l.useRef)(!0), S = (0, i(960253).e)(), k = (0, i(632079).O4)({
                    theme: S
                }), C = (0, l.useMemo)(() => {
                    let e = r / 2,
                        t = a / 200 * 8 * p,
                        i = Math.min(d / 100 * r, .45 * r),
                        l = Math.min(c / 100 * r, .45 * r),
                        n = Math.max(3, x * Math.min(1, a / 200)),
                        o = .95 * a - l;
                    return {
                        W: a,
                        H: r,
                        BASE_Y: e,
                        FRAMES_PER_RAD: s,
                        SUB_STEPS: 3,
                        DX_PER_RAD: t,
                        ACC_FACTOR: h,
                        MIN_R: i,
                        MAX_R: l,
                        R_BASE: (i + l) / 2,
                        R_VAR: (l - i) / 2,
                        R_FREQ1: .2,
                        R_FREQ2: .1,
                        TAIL_RADS: n,
                        PURGE_PAD_R: 5,
                        START_OFFSET: o,
                        D_THETA_PER_SECOND: Math.PI / s * 60
                    }
                }, [a, r, s, d, c, h, x, p]), M = (0, l.useMemo)(() => ({
                    modulationSpeed: m,
                    modulationPhaseOffset: f,
                    tempoModulation: y,
                    accelerationModulation: w
                }), [m, f, y, w]);
                return (0, l.useEffect)(() => {
                    let e = () => {
                        b.current = !document.hidden
                    };
                    return document.addEventListener("visibilitychange", e), () => {
                        document.removeEventListener("visibilitychange", e)
                    }
                }, []), (0, l.useEffect)(() => {
                    let e = v.current;
                    if (!e) return;
                    let t = e.getContext("2d", {
                        willReadFrequently: !1,
                        alpha: !0,
                        desynchronized: !0
                    });
                    if (!t) return;
                    e.width = 2 * a, e.height = 2 * r, t.scale(2, 2), t.imageSmoothingEnabled = !1;
                    let {
                        W: i,
                        H: l,
                        BASE_Y: n,
                        SUB_STEPS: o,
                        DX_PER_RAD: d,
                        ACC_FACTOR: c,
                        MIN_R: h,
                        R_BASE: x,
                        R_VAR: p,
                        R_FREQ1: m,
                        R_FREQ2: f,
                        TAIL_RADS: y,
                        PURGE_PAD_R: w,
                        START_OFFSET: S
                    } = C;
                    t.lineCap = "round", t.lineJoin = "round", t.strokeStyle = g || k.text.primary, t.lineWidth = u;
                    let T = 0,
                        I = performance.now(),
                        P = performance.now(),
                        R = Array(1e3),
                        A = 0,
                        L = 0,
                        z = 0,
                        D = 0,
                        E = 0;
                    return j.current = requestAnimationFrame(() => (function e(t) {
                        let a, r = performance.now(),
                            u = Math.min((r - I) / 1e3, .1);
                        I = r;
                        let g = Math.sin(2 * Math.PI * M.modulationSpeed * ((r - P) / 1e3) + M.modulationPhaseOffset),
                            v = s + M.tempoModulation * g,
                            k = c + M.accelerationModulation * g,
                            C = D > 5 ? Math.max(1, Math.floor(o / 2)) : o,
                            H = Math.PI / Math.max(1, v) * 60 * u * (1 + -(k * Math.sin(T))) / C;
                        for (let e = 0; e < C; e++) T += H, R[L] = function(e) {
                            let t = Math.max(h, x + p * (.6 * Math.sin(m * e) + .4 * Math.sin(f * e + 1.1)));
                            return {
                                x: e * d + t * Math.cos(e),
                                y: n - t * Math.sin(e),
                                t: e
                            }
                        }(T), L = (L + 1) % 1e3, z < 1e3 ? z++ : A = (A + 1) % 1e3;
                        let W = T - y;
                        for (; z > 0 && R[A].t < W - w;) A = (A + 1) % 1e3, z--;
                        let $ = T * d - S,
                            B = $ - E;
                        E = $, Math.abs(B) < i && (B > 0 ? t.clearRect(0, 0, Math.ceil(B) + 10, l) : B < 0 && t.clearRect(i + Math.floor(B) - 10, 0, -B + 10, l)), t.clearRect(0, 0, i, l), t.save(), t.translate(-$, 0);
                        let _ = A,
                            F = 0;
                        for (; F < z && R[_].t < W;) _ = (_ + 1) % 1e3, F++;
                        if (0 === F || 0 === z) a = R[A];
                        else if (F < z) {
                            let e = R[(_ - 1 + 1e3) % 1e3],
                                t = R[_],
                                i = (W - e.t) / (t.t - e.t);
                            a = {
                                x: e.x + (t.x - e.x) * i,
                                y: e.y + (t.y - e.y) * i
                            }
                        }
                        if (a && z > 0) {
                            t.beginPath(), t.moveTo(a.x, a.y);
                            let e = _;
                            for (let i = F; i < z; i++) t.lineTo(R[e].x, R[e].y), e = (e + 1) % 1e3;
                            t.stroke()
                        }
                        t.restore(), performance.now() - r > 16 ? D++ : D > 0 && (D = Math.max(0, D - .1)), b.current ? j.current = requestAnimationFrame(() => e(t)) : setTimeout(() => {
                            b.current && (j.current = requestAnimationFrame(() => e(t)))
                        }, 100)
                    })(t)), () => {
                        j.current && cancelAnimationFrame(j.current)
                    }
                }, [C, M, a, r, u, g, k.text.primary, s]), (0, n.jsx)("canvas", {
                    ref: v,
                    style: {
                        width: a,
                        height: r,
                        display: "block",
                        ...t
                    }
                })
            }
        },
        449837: (e, t, i) => {
            i.d(t, {
                f: () => n
            }), i(296540);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.62 1.34 8.75 12.93",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M9.332 1.38a.575.575 0 0 0-.662.204l-4.936 6.84a.575.575 0 0 0 .466.911h2.398l-.315 4.32a.575.575 0 0 0 1.039.378l4.944-6.832a.575.575 0 0 0-.466-.912H9.401l.309-4.328a.575.575 0 0 0-.378-.582M7.216 8.185H5.324l3.095-4.289-.209 2.927a.575.575 0 0 0 .574.616h1.89l-3.097 4.28.212-2.917a.575.575 0 0 0-.573-.617"
                    })
                },
                n = (0, i(104509).wt)("lightningSmall", l, "small")
        },
        474438: (e, t, i) => {
            i.d(t, {
                Gr: () => o,
                WE: () => r,
                rC: () => a
            }), i(898992), i(581454), i(908872);
            var l = i(296540),
                n = i(474848);
            let o = 30;

            function a({
                columnRenderInfo: e,
                containerMarginTop: t
            }) {
                return {
                    container: {
                        marginTop: t ? ? 17,
                        tableLayout: "fixed",
                        borderCollapse: "collapse",
                        width: "100%",
                        minWidth: e.reduce((e, t) => e + g(t.widthData) + 24, 0)
                    },
                    tableHeaderRow: {},
                    paddingRowCell: {
                        height: 8
                    }
                }
            }

            function r({
                columnRenderInfo: e,
                sortState: t,
                onSortStateChanged: o,
                showRowBorders: a,
                hideHeaderRow: s,
                hideHeaderRowPadding: h,
                renderRowChild: x,
                rows: u,
                onRowClick: g,
                renderNoRowsComponent: p,
                styles: m,
                getStyleForRow: f,
                extendToFullScreen: y,
                multiselect: v,
                allowHorizontalScroll: b,
                setStickyHeaderColumn: S,
                maxHeight: k,
                setStickyHeaderRow: C,
                loadMoreMethod: M,
                maxRowHeight: T
            }) {
                let I = b ? S ? ? !0 : void 0,
                    P = (0, i(960253).I)(() => ({
                        horizontalScrollContainer: {
                            position: "relative",
                            width: null != y && y.extendTableToFullWidthOffsetPx ? `calc(100% + ${null==y?void 0:y.extendTableToFullWidthOffsetPx}px)` : "100%",
                            display: "grid",
                            overflow: "auto"
                        },
                        scrollableContainer: {
                            maxHeight: k,
                            position: "relative",
                            display: "grid",
                            overflowX: "auto",
                            width: "100%"
                        },
                        table: I ? { ...m.container,
                            minWidth: "100%",
                            width: void 0
                        } : m.container
                    }), [m.container, I, k, null == y ? void 0 : y.extendTableToFullWidthOffsetPx]),
                    R = (0, l.useCallback)(e => {
                        var i;
                        let l = e.id === (null == t || null == (i = t.column) ? void 0 : i.id) && !(null != t && t.sortAscending);
                        o && o({
                            sortAscending: l,
                            column: e
                        })
                    }, [t, o]),
                    A = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("table", {
                            style: P.table,
                            children: [s ? void 0 : (0, n.jsx)("thead", { ...{
                                    0: {},
                                    1: {
                                        className: "x7wzq59 x1vjfegm"
                                    }
                                }[0 | !!C],
                                children: (0, n.jsxs)("tr", {
                                    children: [e.map((e, i) => (0, n.jsx)(d, {
                                        index: i,
                                        column: e,
                                        sortState: t,
                                        handleSortableColumnClick: R,
                                        shouldShowSortIcon: 0 !== u.length,
                                        multiselect: v,
                                        setStickyHeaderColumn: I,
                                        setStickyHeaderRow: C,
                                        style: e.headerStyle
                                    }, `header_${e.id}`)), null != y && y.rightPaddingPx ? (0, n.jsx)(j, {
                                        width: null == y ? void 0 : y.rightPaddingPx,
                                        style: e[e.length - 1].rowStyle
                                    }) : null]
                                })
                            }), h ? void 0 : (0, n.jsx)("tbody", {
                                children: (0, n.jsxs)("tr", {
                                    children: [e.map(e => (0, n.jsx)("td", {
                                        style: m.paddingRowCell
                                    }, `padding_row_${e.id}`)), null != y && y.rightPaddingPx ? (0, n.jsx)("td", {
                                        style: m.paddingRowCell
                                    }) : null]
                                })
                            }), (0, n.jsx)("tbody", {
                                children: u.map(t => (0, n.jsx)(c, {
                                    columns: e,
                                    onRowClick: g,
                                    rowChild: null == x ? void 0 : x(t),
                                    showRowBorders: a,
                                    row: t,
                                    getStyleForRow: f,
                                    multiselect: v,
                                    setStickyHeaderColumn: I,
                                    rightPaddingPx: null == y ? void 0 : y.rightPaddingPx,
                                    maxRowHeight: T
                                }, `${t.id}_row`))
                            }), u.length > 0 && M && (!b || (null == M ? void 0 : M.type) !== "scroll") ? (0, n.jsx)("tfoot", {
                                children: (0, n.jsx)(w, {
                                    columnLength: e.length,
                                    loadMoreMethod: M,
                                    showRowBorders: a,
                                    rightPaddingPx: null == y ? void 0 : y.rightPaddingPx,
                                    style: e[e.length - 1].rowStyle
                                })
                            }) : null]
                        }), 0 === u.length ? p() : void 0]
                    });
                return b ? (0, n.jsxs)("div", {
                    style: P.horizontalScrollContainer,
                    children: [(0, n.jsxs)("div", {
                        style: P.scrollableContainer,
                        children: [A, k && (null == M ? void 0 : M.type) === "scroll" ? (0, n.jsx)(i(775070).A, {
                            loading: !1,
                            loadMoreOffsetThreshold: 100,
                            onLoadMore: M.onLoadMore
                        }) : void 0]
                    }), k || (null == M ? void 0 : M.type) !== "scroll" ? void 0 : (0, n.jsx)(i(775070).A, {
                        loading: !1,
                        loadMoreOffsetThreshold: 100,
                        onLoadMore: M.onLoadMore
                    })]
                }) : (0, n.jsx)("div", {
                    style: {
                        maxHeight: k,
                        overflowY: C && k ? "auto" : void 0,
                        overflowX: C && k ? "hidden" : void 0
                    },
                    children: A
                })
            }
            let s = {
                text: {
                    fontSize: i(699422).J.UISmall.desktop,
                    fontWeight: i(699422).Wy.regular,
                    color: i(632079).Tj.text.secondary,
                    ...i(699422).RC
                },
                sortButton: {
                    padding: 5,
                    margin: -5
                },
                sortIcon: {
                    color: i(632079).Tj.text.secondary,
                    fill: "currentColor"
                },
                tooltip: {
                    width: 380
                }
            };

            function d({
                column: e,
                index: t,
                sortState: o,
                handleSortableColumnClick: a,
                shouldShowSortIcon: r,
                multiselect: c,
                setStickyHeaderColumn: h,
                setStickyHeaderRow: x,
                style: u
            }) {
                let [m, f] = (0, l.useState)(!1), y = 0 === t, w = e.id === (null == o ? void 0 : o.column.id), v = (0, i(960253).I)(() => ({
                    th: {
                        boxShadow: `
					inset 0 1px 0 ${i(632079).Tj.border.primary},
					inset 0 -1px 0 ${i(632079).Tj.border.primary}
				`,
                        ...x && {
                            position: "sticky",
                            top: 0,
                            zIndex: 3,
                            background: i(632079).Tj.background.elevated
                        },
                        ...p(e),
                        ...h && y && {
                            position: "sticky",
                            zIndex: 4,
                            insetInlineStart: 0,
                            background: i(632079).Tj.background.elevated,
                            boxShadow: `
							inset calc(var(--direction, 1) * -1px) 0px 0px ${i(632079).Tj.border.primary},
							inset 0 1px 0 ${i(632079).Tj.border.primary},
							inset 0 -1px 0 ${i(632079).Tj.border.primary}
						`
                        },
                        height: 32,
                        ...u
                    },
                    innerDiv: {
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        minWidth: g(e.widthData),
                        maxWidth: e.widthData.maxWidth
                    },
                    multiselectCheckbox: {
                        color: i(632079).Tj.selectLightGray[300],
                        marginInlineEnd: 16,
                        opacity: null != c && c.header.isDisabled ? .5 : 1
                    },
                    tooltipIcon: {
                        marginInlineStart: 4,
                        color: m ? i(632079).Tj.icon.secondary : i(632079).Tj.icon.tertiary
                    }
                }), [e, c, h, x, u, y, m]), j = {
                    onMouseEnter: () => f(!0),
                    onMouseLeave: () => f(!1)
                }, b = e.headerInfoTooltip ? (0, n.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    justifyContent: "flex-start",
                    children: [(0, n.jsx)("div", {
                        style: s.text,
                        children: e.headerTitle
                    }), (0, n.jsx)(i(51831).m, {
                        textWrap: !0,
                        style: s.tooltip,
                        delayThreshold: 0,
                        content: () => e.headerInfoTooltip,
                        children: e => (0, n.jsx)("div", { ...(0, i(63390).A)(e, j),
                            children: (0, n.jsx)(i(16275).I, {
                                icon: i(61107).infoCircleIcon,
                                size: "sm",
                                style: v.tooltipIcon
                            })
                        })
                    })]
                }) : (0, n.jsx)("div", {
                    style: s.text,
                    children: e.headerTitle
                }), S = e.sortable ? (0, n.jsx)(i(51831).m, {
                    placement: "bottom",
                    disableTooltip: !e.shouldShowSortTooltip,
                    content: () => w ? (0, n.jsx)(i(109939).sA, {
                        id: "baseTable.hoverSortedHeaderCell",
                        defaultMessage: "Reverse sort order"
                    }) : (0, n.jsx)(i(109939).sA, {
                        id: "baseTable.hoverSortableHeaderCell",
                        defaultMessage: "Sort by this column"
                    }),
                    children: t => (0, n.jsx)(i(988022).p, {
                        size: "xs",
                        style: s.sortButton,
                        iconTrailing: (() => {
                            if (o && r && w) return {
                                icon: i(242912).arrowStraightDownSmallIcon,
                                size: "xxs",
                                style: { ...s.sortIcon,
                                    ...o.sortAscending && {
                                        transform: "rotate(180deg)"
                                    }
                                }
                            }
                        })(),
                        onClick: () => a(e),
                        ...t,
                        children: b
                    })
                }) : b, k = void 0 !== c && 0 === t ? (0, n.jsx)(i(349050).S, {
                    style: v.multiselectCheckbox,
                    disabled: c.header.isDisabled,
                    onClick: () => c.header.onClick(),
                    checked: c.header.isSelected,
                    size: 14,
                    tapArea: {
                        size: 30
                    }
                }) : null;
                return (0, n.jsx)("th", {
                    style: v.th,
                    children: (0, n.jsxs)("div", {
                        style: v.innerDiv,
                        children: [k, S]
                    })
                })
            }

            function c({
                row: e,
                columns: t,
                onRowClick: o,
                rowChild: a,
                showRowBorders: r,
                getStyleForRow: s,
                setStickyHeaderColumn: d,
                multiselect: u,
                rightPaddingPx: g,
                maxRowHeight: p
            }) {
                let [m, f] = (0, l.useState)(!1), y = e.isClickable, w = (0, l.useCallback)(() => f(!0), []), v = (0, l.useCallback)(() => f(!1), []), j = (0, l.useCallback)(t => {
                    y && void 0 !== o && x(t, () => o(e))
                }, [y, o, e]), b = (0, i(960253).I)(() => ({
                    row: {
                        height: 1,
                        ...y && {
                            cursor: "pointer"
                        },
                        ...r && {
                            borderBottom: `1px solid ${i(632079).Tj.border.primary}`
                        },
                        ...s && s(e)
                    }
                }), [y, r, s, e]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("tr", {
                        onMouseLeave: v,
                        onMouseEnter: w,
                        style: b.row,
                        onClick: j,
                        children: [t.map((i, l) => (0, n.jsx)(h, {
                            isRowHovered: m,
                            isRowClickable: y,
                            columnIndex: l,
                            numColumns: t.length,
                            data: e,
                            column: i,
                            multiselect: u,
                            setStickyHeaderColumn: d,
                            cellStyle: i.rowStyle,
                            maxRowHeight: p
                        }, `cell_${e.id}_${i.id}`)), g ? (0, n.jsx)(S, {
                            style: t[t.length - 1].rowStyle
                        }) : null]
                    }), a ? (0, n.jsx)("tr", {
                        style: b.row,
                        children: (0, n.jsx)("td", {
                            colSpan: t.length,
                            children: a
                        })
                    }) : void 0]
                })
            }

            function h({
                data: e,
                column: t,
                columnIndex: l,
                numColumns: o,
                isRowHovered: a,
                isRowClickable: r,
                multiselect: s,
                setStickyHeaderColumn: d,
                cellStyle: c,
                maxRowHeight: u
            }) {
                let m = 0 === l,
                    f = l === o - 1,
                    y = (0, i(960253).e)(),
                    w = (0, i(960253).I)(() => ({
                        td: { ...p(t),
                            height: "inherit",
                            ...m && {
                                borderStartStartRadius: 4,
                                borderEndStartRadius: 4
                            },
                            ...f && {
                                borderStartEndRadius: 4,
                                borderEndEndRadius: 4
                            },
                            ...d && m && {
                                position: "sticky",
                                zIndex: 2,
                                insetInlineStart: 0,
                                background: i(632079).Tj.background.elevated,
                                boxShadow: `inset calc(var(--direction, 1) * -1px) 0px 0px ${i(632079).Tj.border.primary}`
                            },
                            ...c,
                            ...a && r && {
                                background: "light" === y ? "#f8f8f7" : i(632079).Tj.palette.gray[30]
                            }
                        },
                        innerDiv: {
                            minWidth: g(t.widthData),
                            maxWidth: t.widthData.maxWidth,
                            fontSize: i(699422).J.UIRegular.desktop,
                            color: i(632079).Tj.text.primary,
                            minHeight: 42,
                            maxHeight: u || 52,
                            display: "flex",
                            alignItems: "center",
                            height: "100%"
                        },
                        multiselectCheckbox: {
                            color: i(632079).Tj.selectLightGray[300],
                            marginInlineEnd: 16,
                            opacity: null != s && s.row.getDisabledState(e) ? .5 : 1
                        }
                    }), [t, m, f, a, r, s, e, d, c, u, y]),
                    v = !!t.hasClickableContents || !!t.computeClickableContents && t.computeClickableContents(e),
                    j = s && m ? (0, n.jsx)(i(349050).S, {
                        style: w.multiselectCheckbox,
                        checked: s.row.getSelectedState(e),
                        onClick: t => {
                            t.stopPropagation(), s.row.onClick(e)
                        },
                        disabled: s.row.getDisabledState(e),
                        size: 14,
                        tapArea: {
                            size: 30
                        }
                    }) : null;
                return (0, n.jsx)("td", {
                    style: w.td,
                    children: (0, n.jsxs)("div", {
                        style: w.innerDiv,
                        onClick: v ? x : void 0,
                        children: [j, t.renderCell({ ...e,
                            isRowHovered: a
                        })]
                    })
                })
            }

            function x(e, t) {
                (0, i(705660).SQ)(e, i(705660).y$.Click, t)
            }
            let u = {
                paddingInlineStart: 12,
                paddingInlineEnd: 12
            };

            function g(e) {
                return "minWidth" in e ? e.minWidth : e.width
            }

            function p(e) {
                let t;
                return t = "width" in e.widthData ? {
                    width: e.widthData.width
                } : {
                    width: `${e.widthData.widthPercent}%`,
                    minWidth: e.widthData.minWidth
                }, { ...u,
                    ...t
                }
            }
            let m = {
                keTefX: "xdwrcjd",
                k71WvV: "xbelrpt",
                $$css: !0
            };

            function f({
                columnLength: e,
                onLoadMore: t,
                showRowBorders: l,
                hasNextPage: o
            }) {
                let a = (0, i(960253).I)(() => ({
                    row: { ...l && {
                            borderBottom: `1px solid ${i(632079).Tj.border.primary}`
                        }
                    },
                    button: {
                        display: "flex",
                        alignItems: "center",
                        height: 30,
                        borderRadius: 6 * !l,
                        whiteSpace: "break-spaces",
                        fontSize: 14,
                        paddingInlineEnd: 8
                    }
                }), [l]);
                return !1 === o ? null : (0, n.jsx)("tr", {
                    style: a.row,
                    children: (0, n.jsx)("td", {
                        colSpan: e,
                        children: (0, n.jsx)(i(4458).fI, {
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 4,
                            children: (0, n.jsx)("div", { ...{
                                    className: "x7wzq59 x1o0tod x78zum5 x1nhvcw1 x6s0dn4 x1r0jzty x17zd0t2"
                                },
                                children: (0, n.jsxs)(i(64960).Ay, {
                                    style: a.button,
                                    onClick: t,
                                    children: [(0, n.jsx)(i(16275).I, {
                                        icon: i(309087).arrowStraightDownFillSmallIcon,
                                        size: "sm",
                                        colorVariant: "tertiary",
                                        style: m
                                    }), (0, n.jsx)("div", { ...{
                                            className: "x167d0v7"
                                        },
                                        children: (0, n.jsx)(i(109939).sA, {
                                            id: "baseTable.loadMoreButton",
                                            defaultMessage: "Load more"
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            }

            function y({
                columnLength: e,
                onLoadNext: t,
                onLoadPrevious: l,
                currentPage: o,
                finalPage: a,
                hasNextPage: r,
                hasPrevPage: s,
                showRowBorders: d,
                rightPaddingPx: c,
                style: h
            }) {
                let x = (0, i(960253).I)(() => ({
                    row: { ...d && {
                            borderBottom: `1px solid ${i(632079).Tj.border.primary}`
                        }
                    },
                    button: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 30,
                        width: 30,
                        borderRadius: 6 * !d,
                        whiteSpace: "break-spaces",
                        fontSize: 14,
                        paddingInlineStart: 4,
                        paddingInlineEnd: 6
                    }
                }), [d]);
                return (0, n.jsxs)("tr", {
                    style: x.row,
                    children: [(0, n.jsx)("td", {
                        colSpan: c ? e : e - 1,
                        children: (0, n.jsx)(i(4458).fI, {
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 4,
                            children: (0, n.jsxs)("div", { ...{
                                    className: "x7wzq59 x1o0tod x78zum5 x1nhvcw1 x6s0dn4 x1r0jzty x17zd0t2"
                                },
                                children: [(0, n.jsx)(i(64960).Ay, {
                                    ariaLabel: s ? "Previous page" : "No previous pages",
                                    style: x.button,
                                    onClick: l,
                                    disabled: !s,
                                    disabledFeedback: !s,
                                    children: (0, n.jsx)(i(16275).I, {
                                        icon: i(414243).v,
                                        size: "sm",
                                        colorVariant: "secondary"
                                    })
                                }), (0, n.jsx)(i(64960).Ay, {
                                    ariaLabel: r ? "Next page" : "No more pages",
                                    style: x.button,
                                    onClick: t,
                                    disabled: !r,
                                    disabledFeedback: !r,
                                    children: (0, n.jsx)(i(16275).I, {
                                        icon: i(588222).arrowChevronSingleRightFillSmallIcon,
                                        size: "sm",
                                        colorVariant: "secondary"
                                    })
                                }), (0, n.jsx)(i(111010).D, {
                                    styleKey: "captionMedium",
                                    colorVariant: "secondary",
                                    children: a ? (0, n.jsx)(i(109939).sA, {
                                        id: "baseTable.pages.currentPageWithFinalPageCount",
                                        defaultMessage: "Page {currentPage} of {finalPage}",
                                        values: {
                                            currentPage: o,
                                            finalPage: a
                                        }
                                    }) : (0, n.jsx)(i(109939).sA, {
                                        id: "baseTable.pages.currentPage",
                                        defaultMessage: "Page {currentPage}",
                                        values: {
                                            currentPage: o
                                        }
                                    })
                                })]
                            })
                        })
                    }), c ? (0, n.jsx)(S, {
                        style: h
                    }) : null]
                })
            }

            function w({
                columnLength: e,
                loadMoreMethod: t,
                showRowBorders: l,
                rightPaddingPx: o,
                style: a
            }) {
                switch (t.type) {
                    case "scroll":
                        return (0, n.jsx)(i(775070).A, {
                            loading: !1,
                            loadMoreOffsetThreshold: 100,
                            onLoadMore: t.onLoadMore
                        });
                    case "button":
                        return (0, n.jsx)(f, {
                            columnLength: e,
                            onLoadMore: t.onLoadMore,
                            showRowBorders: l,
                            hasNextPage: t.hasNextPage
                        });
                    case "pages":
                        return (0, n.jsx)(y, {
                            columnLength: e,
                            showRowBorders: l,
                            onLoadNext: t.onLoadNext,
                            onLoadPrevious: t.onLoadPrevious,
                            currentPage: t.currentPage,
                            finalPage: t.finalPage,
                            hasNextPage: t.hasNextPage,
                            hasPrevPage: t.hasPrevPage,
                            rightPaddingPx: o,
                            style: a
                        });
                    default:
                        return (0, i(722371).HB)(t)
                }
            }
            let v = {
                kC7eKd: "xu8wnyf",
                kVAEAm: "x10l6tqk",
                k87sOh: "x13vifvy",
                kLqNvP: "x1o0tod",
                kt4wiu: "xtijo5x",
                krVfgx: "xqmqy1e",
                $$css: !0
            };

            function j(e) {
                let t = (0, i(960253).I)(() => ({
                    extender: {
                        width: e.width,
                        height: 1
                    }
                }), [e.width]);
                return (0, n.jsxs)("th", { ...{
                        className: "x1n2onr6"
                    },
                    children: [(0, n.jsx)("div", {
                        style: t.extender
                    }), (0, n.jsx)("div", { ...i(952687).A.props(v, e.style)
                    })]
                })
            }
            let b = {
                kC7eKd: "xu8wnyf",
                kVAEAm: "x10l6tqk",
                k87sOh: "x13vifvy",
                kLqNvP: "x1o0tod",
                kt4wiu: "xtijo5x",
                krVfgx: "xqmqy1e",
                $$css: !0
            };

            function S(e) {
                return (0, n.jsx)("td", { ...{
                        className: "x1n2onr6"
                    },
                    children: (0, n.jsx)("div", { ...i(952687).A.props(b, e.style)
                    })
                })
            }
        },
        534965: (e, t, i) => {
            i.d(t, {
                n: () => n
            }), i(296540);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.32 1.79 13.36 12.32",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M13.425 7.483c0-2.294-1.961-4.31-5.116-4.433L8 3.044c-3.335 0-5.426 2.072-5.426 4.44l.005.207c.053 1.033.497 1.975 1.251 2.71a.63.63 0 0 1 .181.546 6 6 0 0 1-.603 1.84c.764-.138 1.466-.493 2.095-1.009l.063-.045a.63.63 0 0 1 .506-.072A7 7 0 0 0 8 11.923l.309-.006c3.154-.124 5.116-2.14 5.116-4.434m1.242.3c-.164 2.978-2.767 5.24-6.31 5.383L8 13.173a8.3 8.3 0 0 1-1.962-.23c-1.09.811-2.411 1.286-3.9 1.132a.625.625 0 0 1-.405-1.032c.537-.617.835-1.31.986-1.996a5.26 5.26 0 0 1-1.388-3.29l-.007-.274c0-3.226 2.832-5.69 6.676-5.69l.358.008c3.66.147 6.317 2.557 6.317 5.682z"
                    })
                },
                n = (0, i(104509).wt)("chatBubbleSmall", l, "small")
        },
        687911: (e, t, i) => {
            i.d(t, {
                Y: () => o
            }), i(296540);
            var l = i(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.37 0.43 13.25 16.44",
                    svg: (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("path", {
                            d: "M9.533.62a.625.625 0 0 1 .884 0l2.5 2.5a.625.625 0 1 1-.884.884l-1.408-1.408V11a.625.625 0 1 1-1.25 0V2.546L7.917 4.004a.625.625 0 1 1-.884-.883z"
                        }), (0, l.jsx)("path", {
                            d: "M8.125 5.125H5.5A2.125 2.125 0 0 0 3.375 7.25v7.5c0 1.174.951 2.125 2.125 2.125h9a2.125 2.125 0 0 0 2.125-2.125v-7.5A2.125 2.125 0 0 0 14.5 5.125h-2.625v1.25H14.5c.483 0 .875.392.875.875v7.5a.875.875 0 0 1-.875.875h-9a.875.875 0 0 1-.875-.875v-7.5c0-.483.392-.875.875-.875h2.625z"
                        })]
                    })
                },
                o = (0, i(104509).wt)("squareAndArrowUp", n, "default")
        },
        770985: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => l,
                plugSmallIcon: () => n
            }), i(296540);
            let l = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.17 2.97 13.65 10.06",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M7.592 2.975c-.531 0-1.045.19-1.448.536L3.969 5.375H1.8A.625.625 0 0 0 1.175 6v4c0 .345.28.625.625.625h2.169l2.175 1.864c.403.346.917.536 1.448.536H10.6c.345 0 .625-.28.625-.625v-1.575H14.2a.625.625 0 1 0 0-1.25h-2.975v-3.15H14.2a.625.625 0 1 0 0-1.25h-2.975V3.6a.625.625 0 0 0-.625-.625zM6.957 4.46a.98.98 0 0 1 .635-.235h2.383v7.55H7.592a.98.98 0 0 1-.635-.235l-2.35-2.015a.63.63 0 0 0-.407-.15H2.425v-2.75H4.2c.15 0 .294-.053.407-.15z"
                    })
                },
                n = (0, i(104509).wt)("plugSmall", l, "small")
        },
        775070: (e, t, i) => {
            i.d(t, {
                A: () => n
            }), i(296540);
            var l = i(474848);
            let n = function({
                loading: e,
                onLoadMore: t,
                loadMoreOffsetThreshold: n,
                resultSize: o,
                fetchSize: a
            }) {
                return (0, l.jsx)(i(636255).A, {
                    onChange: i => (function(e) {
                        let {
                            offset: t,
                            loading: i,
                            onLoadMore: l,
                            loadMoreOffsetThreshold: n,
                            resultSize: o,
                            fetchSize: a
                        } = e;
                        i || t > (n || 200) || (void 0 === o || void 0 === a || o >= a) && l()
                    })({
                        offset: i,
                        loading: e,
                        onLoadMore: t,
                        loadMoreOffsetThreshold: n,
                        resultSize: o,
                        fetchSize: a
                    })
                })
            }
        }
    }
]);