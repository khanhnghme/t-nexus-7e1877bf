"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [39225], {
        27907: (e, t, n) => {
            n.d(t, {
                R: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.74 2.15 8.51 12.5",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M5.072 2.4a.25.25 0 0 1 .25-.25h5.356a.25.25 0 0 1 .25.25v.38a2.65 2.65 0 0 1-.886 1.977l-.326.29.153 1.568.037.012a3.45 3.45 0 0 1 2.344 3.268v.505a.25.25 0 0 1-.25.25H8.664v2.714a.9.9 0 0 1-.08.368l-.352.765-.05.07a.28.28 0 0 1-.452-.083l-.345-.752a.9.9 0 0 1-.08-.367V10.65H4a.25.25 0 0 1-.25-.25v-.505a3.45 3.45 0 0 1 2.344-3.268l.037-.012.153-1.567-.326-.291a2.65 2.65 0 0 1-.886-1.978z"
                    })
                },
                o = (0, n(104509).wt)("pinFillSmall", i, "fillSmall")
        },
        47879: (e, t, n) => {
            function i(e, t, i) {
                return !!(0, n(186452).D)(e, t) && (i.activeShortcuts.includes("pin") || i.isMouseNearPerformanceToolbar)
            }

            function o(e) {
                let t, {
                    environment: i,
                    setMouseNearPerformanceToolbar: o,
                    sidebarExpanded: a,
                    sidebarWidth: r,
                    secondarySidebarExpanded: s,
                    secondarySidebarWidth: l,
                    updateSidebarExpanded: c,
                    updateSidebarWidth: d
                } = e;

                function p(e) {
                    e.toElement || e.relatedTarget || (o(!1), void 0 !== t && (window.clearTimeout(t), t = void 0))
                }

                function u(e) {
                    (0, n(705660).SQ)(e, n(705660).y$.PerformanceToolbarMouseMove, () => {
                        if (a && e.clientX < r || s && e.clientX < r + l || c && e.clientX > i.WindowSizeStore.state.width - d) return;
                        let p = i.WindowSizeStore.state.height - e.clientY < n(398879).ls;
                        p && e.shiftKey || (p && void 0 === t ? t = window.setTimeout(() => {
                            o(!0)
                        }, 1e3) : p || void 0 === t || (window.clearTimeout(t), t = void 0, o(!1)))
                    })
                }

                function m() {
                    void 0 !== t && (window.clearTimeout(t), t = void 0)
                }
                return window.addEventListener("mousemove", u), window.addEventListener("mouseout", p), window.addEventListener("mousedown", m), () => {
                    window.removeEventListener("mousemove", u), window.removeEventListener("mouseout", p), window.removeEventListener("mousedown", m)
                }
            }

            function a() {
                return "memory" in performance
            }

            function r(e, t, n) {
                return t ? function(...e) {
                    let t = new Map;
                    return e.forEach((e, n) => {
                        e.forEach((i, o) => {
                            t.set(i, o + n * e.length)
                        })
                    }), Array.from(t.keys()).sort((e, n) => t.get(e) - t.get(n))
                }(e, t ? t.filter(e => n.includes(e)) : []) : e
            }

            function s(e, t, n) {
                return Object.assign(e, function(e, t) {
                    let n = {};
                    if (!e) return n;
                    for (let i in e) t.includes(i) && (n[i] = e[i]);
                    return n
                }(t, n))
            }

            function l() {
                let e = n(728372).AppStoreCurrentUserStore.state,
                    t = n(728372).AppStoreSidebarSpaceStore.state,
                    i = null == e ? void 0 : e.id,
                    o = null == t ? void 0 : t.id;
                return {
                    pageId: (0, n(965142).s)(),
                    userId: i,
                    spaceId: o
                }
            }
            n.d(t, {
                AH: () => o,
                BN: () => r,
                Mm: () => i,
                Og: () => a,
                V8: () => s,
                rO: () => l
            }), n(898992), n(354520), n(803949)
        },
        69858: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                pageSmallIcon: () => a
            }), n(296540);
            var i = n(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.37 2.12 9.25 11.75",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M5.75 8.675a.575.575 0 1 0 0 1.15h4.5a.575.575 0 1 0 0-1.15zm0 2a.575.575 0 0 0 0 1.15h4.5a.575.575 0 1 0 0-1.15z"
                        }), (0, i.jsx)("path", {
                            d: "M5.125 2.125a1.75 1.75 0 0 0-1.75 1.75v8.25c0 .966.784 1.75 1.75 1.75h5.75a1.75 1.75 0 0 0 1.75-1.75V6.591c0-.464-.184-.91-.513-1.237L9.396 2.638a1.75 1.75 0 0 0-1.237-.513zm-.5 1.75a.5.5 0 0 1 .5-.5h2.604v1.831c0 .98.794 1.775 1.775 1.775h1.871v5.144a.5.5 0 0 1-.5.5h-5.75a.5.5 0 0 1-.5-.5zm4.254 1.331V3.888l1.944 1.943h-1.32a.625.625 0 0 1-.624-.625"
                        })]
                    })
                },
                a = (0, n(104509).wt)("pageSmall", o, "small")
        },
        80086: (e, t, n) => {
            n.r(t), n.d(t, {
                gearSmallIcon: () => a,
                iconDefinition: () => o
            }), n(296540);
            var i = n(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.14 2.13 11.77 11.77",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 10.15c-1.19 0-2.15-.96-2.15-2.15S6.81 5.85 8 5.85s2.15.96 2.15 2.15-.96 2.15-2.15 2.15M8.9 8c0-.5-.4-.9-.9-.9s-.9.4-.9.9.4.9.9.9.9-.4.9-.9"
                        }), (0, i.jsx)("path", {
                            d: "M13.27 6.42c.26.04.46.24.51.5l.03.02c.06.34.1.7.1 1.06 0 .39-.04.77-.11 1.15-.05.26-.26.46-.51.5l-.98.17.57.8c.15.21.15.5 0 .71-.2.29-.43.57-.68.82-.28.28-.58.53-.89.74-.21.15-.5.15-.71 0l-.82-.58-.17.97c-.04.26-.24.46-.5.51-.35.06-.71.1-1.06.1-.39 0-.77-.04-1.15-.11a.63.63 0 0 1-.5-.51l-.17-.98-.8.57c-.21.15-.5.15-.71 0-.29-.2-.57-.43-.82-.68-.28-.28-.53-.57-.74-.89a.62.62 0 0 1 0-.71l.57-.82-.97-.17a.62.62 0 0 1-.51-.5c-.07-.35-.1-.7-.1-1.06 0-.4.04-.78.11-1.15.05-.26.26-.46.51-.5l.98-.17-.57-.8a.62.62 0 0 1 0-.71c.2-.29.43-.57.68-.82.28-.28.57-.53.89-.74.22-.15.5-.15.71 0l.81.57.17-.97c.04-.26.24-.46.5-.51.35-.07.71-.1 1.06-.1.39 0 .77.04 1.14.11.26.05.46.26.5.51l.17.98.8-.57c.21-.14.49-.15.71 0 .29.2.57.43.82.68.29.28.53.58.74.89.15.21.15.5 0 .71l-.58.81zM8 3.38v.02c-.13 0-.27.01-.41.02l-.16.94c-.04.23-.21.42-.43.49-.16.05-.32.11-.48.19-.21.1-.45.08-.64-.05l-.79-.56c-.12.1-.24.21-.35.32s-.2.21-.29.32l.55.77c.13.19.15.44.04.65-.08.14-.14.29-.2.47-.08.22-.26.38-.49.42l-.95.16c-.02.16-.02.32-.02.48 0 .15.01.29.02.43l.94.16c.23.04.42.21.49.43.05.15.11.31.19.47.1.21.08.45-.05.64l-.56.79c.1.12.21.24.32.35l.105.097q.104.101.215.193l.77-.55c.19-.13.44-.15.65-.04.14.08.29.14.47.2.22.08.38.26.42.49l.16.95c.3.03.62.03.9 0l.16-.94c.04-.23.21-.42.43-.49.15-.05.31-.11.47-.19.21-.1.45-.08.64.05l.79.55c.12-.1.24-.21.35-.32l.097-.105q.101-.105.193-.215L11 10.2a.63.63 0 0 1-.04-.65c.08-.14.14-.29.2-.47.08-.22.26-.38.49-.42l.95-.16c.02-.16.02-.32.02-.48s-.01-.3-.02-.43l-.94-.16a.63.63 0 0 1-.49-.43 3 3 0 0 0-.19-.48c-.1-.21-.08-.45.05-.64l.56-.79c-.1-.12-.21-.24-.32-.35s-.21-.2-.32-.29l-.77.55c-.19.13-.44.15-.65.04-.14-.08-.29-.14-.47-.2a.64.64 0 0 1-.42-.49l-.16-.95A4 4 0 0 0 8 3.38"
                        })]
                    })
                },
                a = (0, n(104509).wt)("gearSmall", o, "small")
        },
        125040: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                personSmallIcon: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.81 1.77 10.36 12.45",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 1.775c-.947 0-1.717.392-2.237 1.04-.508.633-.747 1.47-.747 2.338s.239 1.704.747 2.337c.52.648 1.29 1.04 2.237 1.04s1.717-.392 2.237-1.04c.508-.633.748-1.47.748-2.337 0-.869-.24-1.705-.748-2.338-.52-.648-1.29-1.04-2.237-1.04M6.738 3.597c.28-.348.69-.572 1.262-.572s.983.224 1.263.572c.291.364.472.904.472 1.556 0 .651-.18 1.191-.472 1.555-.28.348-.69.572-1.263.572s-.982-.224-1.262-.572c-.292-.364-.472-.904-.472-1.555 0-.652.18-1.192.472-1.556M8 9.178c-2.196 0-4.166 1.07-5.007 2.713a1.48 1.48 0 0 0 .2 1.677c.356.413.91.657 1.487.657h6.64c.577 0 1.132-.244 1.486-.657a1.48 1.48 0 0 0 .201-1.677c-.84-1.643-2.81-2.713-5.007-2.713m-3.894 3.283c.583-1.14 2.062-2.033 3.894-2.033s3.311.893 3.895 2.033q.045.089.033.154a.27.27 0 0 1-.07.14.72.72 0 0 1-.538.22H4.68a.72.72 0 0 1-.537-.22.27.27 0 0 1-.07-.14.26.26 0 0 1 .033-.154"
                    })
                },
                o = (0, n(104509).wt)("personSmall", i, "small")
        },
        155263: (e, t, n) => {
            n.d(t, {
                VP: () => er,
                V6: () => ei,
                ZK: () => el,
                Rx: () => ea
            }), n(898992), n(908872);
            var i = n(296540),
                o = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.45 2.44 11.1 11.11",
                    svg: (0, o.jsx)("path", {
                        d: "M11.4 2.45a.95.95 0 0 0-.95.95v9.2c0 .525.425.95.95.95h1.2a.95.95 0 0 0 .95-.95V3.4a.95.95 0 0 0-.95-.95zm-4 5.2a.95.95 0 0 0-.95.95v4c0 .525.425.95.95.95h1.2a.95.95 0 0 0 .95-.95v-4a.95.95 0 0 0-.95-.95zm-4-3.2a.95.95 0 0 0-.95.95v7.2c0 .525.425.95.95.95h1.2a.95.95 0 0 0 .95-.95V5.4a.95.95 0 0 0-.95-.95z"
                    })
                },
                r = (0, n(104509).wt)("chartBarXAxisFillSmall", a, "fillSmall"),
                s = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.77 1.77 12.46 12.46",
                    svg: (0, o.jsx)("path", {
                        d: "M8 1.775a6.226 6.226 0 1 1 0 12.452A6.226 6.226 0 0 1 8 1.775M8 12a4 4 0 0 0 0-8z"
                    })
                },
                l = (0, n(104509).wt)("circleSplitFillSmall", s, "fillSmall"),
                c = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.71 2.03 10.57 12.04",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M8 2.031c-1.545 0-2.924.226-3.9.578-.491.177-.856.376-1.09.575-.237.202-.291.359-.291.457s.054.255.29.457c.235.2.6.399 1.09.575.977.352 2.356.578 3.901.578s2.924-.226 3.9-.578c.491-.176.856-.376 1.09-.575.237-.202.291-.358.291-.457 0-.098-.054-.255-.29-.457-.235-.199-.6-.398-1.09-.575-.977-.352-2.356-.578-3.9-.578"
                        }), (0, o.jsx)("path", {
                            d: "m2.907 5.12-.188-.109v3.036c0 .099.054.255.29.457.235.199.6.399 1.09.575.977.352 2.356.578 3.901.578s2.924-.226 3.9-.578c.491-.176.856-.376 1.09-.575.237-.202.291-.358.291-.457V5.01l-.187.11a5.5 5.5 0 0 1-.892.405c-1.097.395-2.582.63-4.202.63s-3.105-.235-4.201-.63a5.5 5.5 0 0 1-.892-.406"
                        }), (0, o.jsx)("path", {
                            d: "m2.907 9.526-.188-.109v3.036c0 .098.054.255.29.456.235.2.6.4 1.09.576.977.351 2.356.578 3.901.578s2.924-.227 3.9-.578c.491-.177.856-.377 1.09-.576.237-.202.291-.358.291-.457V9.418l-.187.109a5.5 5.5 0 0 1-.892.406c-1.097.394-2.582.63-4.202.63s-3.105-.236-4.201-.63a5.5 5.5 0 0 1-.892-.406"
                        })]
                    })
                },
                d = (0, n(104509).wt)("collectionFillSmall", c, "fillSmall"),
                p = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.59 2.13 8.88 11.85",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M9.402 2.14a1.222 1.222 0 1 0-.256 2.432 1.222 1.222 0 0 0 .256-2.431M8.135 4.773a3 3 0 0 0-.413-.011l-2.349.112a.575.575 0 0 0-.535.458l-.39 1.882a.575.575 0 1 0 1.126.233l.3-1.445 1.009-.049-.479 1.73a1.275 1.275 0 0 0 .454 1.352l2.216 1.696-1.458 1.058a.575.575 0 0 0 .676.93l2.006-1.456a.645.645 0 0 0 .013-1.034L8.706 9.001l.63-2.018.435 1.282a.575.575 0 0 0 .689.372l1.581-.41a.575.575 0 0 0-.289-1.114l-1.064.276-.27-.792a2.71 2.71 0 0 0-2.283-1.824"
                        }), (0, o.jsx)("path", {
                            d: "m6.278 9.072-.094-.117-.606 2.41-1.782 1.604a.575.575 0 1 0 .77.854l2.041-1.839.556-2.209-.532-.373a1.7 1.7 0 0 1-.353-.33"
                        })]
                    })
                },
                u = (0, n(104509).wt)("figureRunSmall", p, "small"),
                m = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.25 3.3 13.51 9.39",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M3.32 5.92a.52.52 0 1 1 1.04 0 .52.52 0 0 1-1.04 0m2.6-.52a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04M8 5.4a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04m2.08 0a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04m2.08 0a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04M3.84 7.48a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04m2.08 0a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04m2.08 0a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04m2.08 0a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04m2.08 0a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04M3.84 9.56a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04m2.043-.041a.55.55 0 1 0 0 1.1h4.2a.55.55 0 0 0 0-1.1zm6.277.041a.52.52 0 1 0 0 1.04.52.52 0 0 0 0-1.04"
                        }), (0, o.jsx)("path", {
                            d: "M1.25 5.057c0-.966.784-1.75 1.75-1.75h10c.966 0 1.75.784 1.75 1.75v5.886a1.75 1.75 0 0 1-1.75 1.75H3a1.75 1.75 0 0 1-1.75-1.75zM3 4.407a.65.65 0 0 0-.65.65v5.886c0 .359.291.65.65.65h10a.65.65 0 0 0 .65-.65V5.057a.65.65 0 0 0-.65-.65z"
                        })]
                    })
                },
                g = (0, n(104509).wt)("keyboardSmall", m, "small"),
                h = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.77 1.77 12.46 12.46",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M6.47 4.278a.333.333 0 0 1 .431.431 3.393 3.393 0 0 0 4.39 4.389.333.333 0 0 1 .43.43 4.06 4.06 0 0 1-3.464 2.581l-.32.013a4.06 4.06 0 0 1-4.053-3.85l-.006-.209A4.06 4.06 0 0 1 6.47 4.278"
                        }), (0, o.jsx)("path", {
                            d: "M8 1.775a6.226 6.226 0 1 1 0 12.452A6.226 6.226 0 0 1 8 1.775m0 1.25a4.975 4.975 0 1 0 0 9.95 4.975 4.975 0 0 0 0-9.95"
                        })]
                    })
                },
                v = (0, n(104509).wt)("moonCircleSmall", h, "small"),
                _ = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.08 1.54 12.23 12.24",
                    svg: (0, o.jsx)("path", {
                        d: "M9.394 1.852a1.05 1.05 0 0 0-1.597.132l-1.68 2.351 5.398 5.397 2.351-1.68a1.05 1.05 0 0 0 .132-1.596L12.972 5.43l-.258.331a2.9 2.9 0 0 1-1.37.97l-.62.206c-.136.046-.24-.123-.139-.224l.062-.062a3.86 3.86 0 0 0 1.118-2.429zm1.671 8.986-6.041-6.04-.861.86a1.85 1.85 0 0 0 0 2.617l.658.658-1.312.938c-.289.206-.614.437-.876.711-.268.28-.487.622-.536 1.05a1.923 1.923 0 0 0 2.132 2.132c.43-.048.77-.267 1.05-.535.275-.262.506-.587.712-.876l.062-.088.875-1.225.66.66a1.85 1.85 0 0 0 2.616 0z"
                    })
                },
                f = (0, n(104509).wt)("paintBrushFillSmall", _, "fillSmall"),
                x = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.75 1.21 12.88 12.89",
                    svg: (0, o.jsx)("path", {
                        d: "M9.624 1.622a1.374 1.374 0 0 0-2.091.173L5.57 4.543a.575.575 0 0 0-.781.03l-.856.855c-.85.85-.85 2.227 0 3.076l.383.383.004.005-.007.005-1 .715-.003.001c-.282.201-.629.448-.912.744-.297.31-.564.715-.624 1.24a2.248 2.248 0 0 0 2.492 2.49c.524-.06.928-.326 1.238-.623.297-.284.543-.63.744-.912l.014-.02.708-.99.387.387c.85.85 2.227.85 3.076 0l.857-.856a.575.575 0 0 0 .018-.794l2.747-1.962c.692-.494.774-1.49.173-2.091zm-1.155.841a.225.225 0 0 1 .342-.028l2.616 2.615a3.36 3.36 0 0 1-.891 1.592l-.056.055c-.146.146.005.39.2.324l.552-.184c.46-.153.87-.43 1.183-.798l1 1a.225.225 0 0 1-.028.342l-2.795 1.997-4.12-4.12zM5.119 5.87l.077-.077 4.874 4.874-.45.45c-.4.4-1.05.4-1.45 0l-.867-.868a.575.575 0 0 0-.875.073l-1.103 1.544c-.216.304-.405.567-.615.768-.203.194-.385.29-.574.312a1.1 1.1 0 0 1-.904-.316 1.1 1.1 0 0 1-.315-.903c.021-.189.118-.37.312-.574.201-.21.463-.399.768-.616L5.54 9.433a.575.575 0 0 0 .073-.874l-.868-.868a1.025 1.025 0 0 1 0-1.45z"
                    })
                },
                b = (0, n(104509).wt)("paintBrushSmall", x, "small"),
                y = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.37 11.75 9.25",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M10.344 4.883a.45.45 0 0 0 0 .9h1.437a.45.45 0 0 0 0-.9zm0 2.667a.45.45 0 0 0 0 .9h1.437a.45.45 0 0 0 0-.9zm0 2.667a.45.45 0 0 0 0 .9h1.437a.45.45 0 0 0 0-.9z"
                        }), (0, o.jsx)("path", {
                            d: "M4 3.375c-1.036 0-1.875.84-1.875 1.875v5.5c0 1.036.84 1.875 1.875 1.875h8c1.036 0 1.875-.84 1.875-1.875v-5.5c0-1.036-.84-1.875-1.875-1.875zM3.375 5.25c0-.345.28-.625.625-.625h8c.345 0 .625.28.625.625v.842h-9.25zm0 3.508V7.242h9.25v1.516zm0 1.992v-.842h9.25v.842c0 .345-.28.625-.625.625H4a.625.625 0 0 1-.625-.625"
                        })]
                    })
                },
                w = (0, n(104509).wt)("serverRackSmall", y, "small");

            function S(e) {
                return "hovered" === e || "pinned" === e || "dragging" === e
            }
            n(944114), n(354520), n(803949), n(581454);
            let j = {
                caption: {
                    color: n(632079).Tj.text.tertiary,
                    fontFamily: n(699422).Tf.mono,
                    fontSize: 12,
                    marginInlineEnd: 4
                }
            };

            function k(e) {
                let {
                    caption: t,
                    tooltipEvents: n
                } = e;
                return (0, o.jsx)("span", {
                    style: j.caption,
                    ...n,
                    children: t
                })
            }
            let I = {
                    frontIcon: {
                        fill: n(632079).Tj.text.secondary,
                        transform: "translateY(0.5px)",
                        verticalAlign: "middle"
                    }
                },
                T = i.forwardRef(function(e, t) {
                    let {
                        popupState: a,
                        popupZIndex: r,
                        popupPosition: s,
                        onActivateButton: l,
                        onFrontPopup: c,
                        onClosePopup: d
                    } = e, p = (0, i.useRef)(null), u = (0, n(421573).A)(p, t), m = function() {
                        let [e, t] = (0, i.useState)(window.innerWidth);
                        return (0, i.useEffect)(() => {
                            let e = () => t(window.innerWidth);
                            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                        }, []), e
                    }(), g = s ? new DOMRect(m / 2, s.y) : void 0, [h, v] = (0, i.useState)({}), [_, f] = (0, i.useState)(1), [x, b] = (0, i.useState)(void 0), [y, w] = (0, i.useState)(void 0), j = "pinned" === a || "dragging" === a, T = (0, n(960253).I)(() => ({
                        entry: {
                            alignItems: "center",
                            borderInlineEnd: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                            color: n(632079).Tj.text.secondary,
                            display: "flex",
                            flex: "0 0 auto",
                            flexDirection: "row",
                            flexWrap: "nowrap",
                            height: "100%",
                            minHeight: n(398879).ls,
                            justifyContent: "space-between",
                            margin: 0,
                            padding: `0 ${n(398879).ls/2}px`,
                            width: "auto",
                            cursor: "pointer",
                            ...j && {
                                boxShadow: `inset 0px 0px 8px ${n(632079).Tj.state.pressed}`
                            }
                        },
                        container: {
                            backgroundColor: n(632079).Tj.background.secondary,
                            border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                            borderRadius: 8,
                            color: n(632079).Tj.text.secondary,
                            display: "flex",
                            flexDirection: "column",
                            fontFamily: n(699422).Tf.mono,
                            fontSize: 12,
                            marginInlineEnd: 8,
                            opacity: j ? 1 : .9,
                            overflow: "hidden",
                            position: "relative",
                            width: `${m}px`
                        }
                    }), [m, j]), M = (0, i.useCallback)(() => {
                        let e = _.toString();
                        f(_ + 1), b(e), v(t => ({ ...t,
                            [e]: {
                                start: Date.now(),
                                end: void 0
                            }
                        }))
                    }, [f, b, v, _]), V = (0, i.useCallback)(() => {
                        if (!x) return;
                        let e = h[x];
                        v(t => ({ ...t,
                            [x]: { ...e,
                                end: Date.now()
                            }
                        })), w(x), b(void 0)
                    }, [b, v, h, x]), P = (0, i.useCallback)(() => {
                        x ? V() : M()
                    }, [x, V, M]);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            ref: u,
                            style: T.entry,
                            children: (0, o.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                justifyContent: "space-between",
                                height: "100%",
                                children: [(0, o.jsxs)(n(4458).fI, {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    height: "100%",
                                    onClick: l,
                                    role: "button",
                                    tabIndex: 0,
                                    onKeyDown: e => {
                                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), l())
                                    },
                                    children: [(0, o.jsx)(n(4458).fI, {
                                        alignItems: "center",
                                        height: "100%",
                                        justifyContent: "center",
                                        marginInlineEnd: 6,
                                        children: (0, o.jsx)(n(16275).I, {
                                            icon: n(283885).j,
                                            size: 11,
                                            style: I.frontIcon
                                        })
                                    }), (0, o.jsx)(k, {
                                        caption: "DEPS"
                                    })]
                                }), (0, o.jsx)(n(4458).fI, {
                                    marginInlineEnd: 4,
                                    height: 11,
                                    width: 11,
                                    onClick: P,
                                    role: "button",
                                    tabIndex: 0,
                                    onKeyDown: e => {
                                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), P())
                                    },
                                    children: x ? (0, o.jsx)(z, {}) : (0, o.jsx)(E, {})
                                })]
                            })
                        }), (0, o.jsx)(n(182718).zD, {
                            alignmentToOrigin: "center",
                            disableMouseCapture: !0,
                            enableOutsideClickDismiss: !1,
                            open: S(a),
                            originGap: 6,
                            originRect: g,
                            overlayContainerZIndex: r,
                            placementToOrigin: "top",
                            popupType: n(423291).n.Popup,
                            preventCaptureEsc: !0,
                            style: T.container,
                            trapFocus: !1,
                            content: () => (0, o.jsx)(C, {
                                spans: h,
                                activeSpanName: x,
                                selectedSpanName: y,
                                spanIndex: _,
                                visibility: a,
                                onSelectSpan: w,
                                onStartSpan: M,
                                onStopSpan: V,
                                onFront: c,
                                onClose: d
                            })
                        })]
                    })
                }),
                M = {
                    header: {
                        alignItems: "center",
                        backgroundColor: n(632079).Tj.background.secondary,
                        borderBottom: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: 8,
                        paddingInlineStart: "16px",
                        paddingInlineEnd: "16px",
                        paddingBottom: 8,
                        position: "sticky",
                        top: 0,
                        width: "100%",
                        zIndex: 1
                    },
                    titleIcon: {
                        marginInlineEnd: 8
                    },
                    title: {
                        color: n(632079).Tj.text.secondary,
                        fontSize: 12
                    },
                    closeIcon: {
                        cursor: "pointer"
                    },
                    buttonSection: {
                        width: "100%",
                        marginBottom: "10px",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row"
                    },
                    spanSelectSection: {
                        paddingInlineStart: "8px"
                    },
                    activeButton: {
                        border: "1px solid gray",
                        borderRadius: "4px",
                        marginInlineEnd: "8px",
                        padding: "8px",
                        boxShadow: `inset 0px 0px 8px ${n(632079).Tj.state.pressed}`
                    },
                    button: {
                        border: "1px solid gray",
                        borderRadius: "4px",
                        marginInlineEnd: "8px",
                        padding: "8px"
                    },
                    traceRow: {
                        display: "flex",
                        position: "relative",
                        insetInlineStart: "0",
                        top: "0",
                        height: "24px",
                        paddingTop: "8px",
                        boxSizing: "border-box",
                        paddingBottom: "8px"
                    },
                    traceWrapper: {
                        position: "absolute",
                        height: "24px",
                        overflow: "hidden"
                    },
                    trace: {
                        padding: "4px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        boxSizing: "border-box",
                        height: "100%",
                        border: "1px solid black",
                        borderRadius: "2px"
                    },
                    style0: {
                        overflow: "scroll",
                        flexGrow: 1
                    }
                };

            function C({
                spans: e,
                activeSpanName: t,
                selectedSpanName: a,
                visibility: r,
                onSelectSpan: s,
                onStartSpan: l,
                onStopSpan: c,
                onFront: d,
                onClose: p
            }) {
                var u, m;
                let [g, h] = (0, i.useState)(() => n(547385).A.traces), v = Object.keys(e).filter(t => e[t].end), _ = a && e[a], f = _ ? g.filter(e => {
                    var t, n;
                    return t = _, n = e, t.start <= n.start && (!t.end || t.end >= n.end)
                }) : g, x = function(e) {
                    let t = e.sort((e, t) => e.start - t.start),
                        n = [];
                    for (; t.length > 0;) {
                        let [e, ...i] = t, o = [e], a = e.end, r = [];
                        i.forEach(e => {
                            e.start >= a ? (o.push(e), a = e.end) : r.push(e)
                        }), n.push(o), t = r
                    }
                    return n
                }(f), b = null == (u = (0, n(381453).wq)(f, e => e.start)) ? void 0 : u.start, y = null == (m = (0, n(381453).Sk)(f, e => e.end)) ? void 0 : m.end, w = b && y && y - b, [S, j] = function() {
                    let e = (0, i.useRef)(null),
                        [t, n] = (0, i.useState)(1),
                        o = (0, i.useCallback)(e => {
                            var t;
                            t = e, void 0 !== globalThis.WheelEvent && t instanceof globalThis.WheelEvent && e.metaKey && (e.stopPropagation(), e.preventDefault(), n(t => Math.max(1, t - e.deltaY / 100)))
                        }, [n]),
                        a = e.current;
                    return (0, i.useEffect)(() => (null == a || a.addEventListener("wheel", o, {
                        passive: !1
                    }), () => {
                        null == a || a.removeEventListener("wheel", o)
                    }), [a, o]), [t, e]
                }(), k = (0, n(960253).I)(() => ({
                    container: {
                        display: "flex",
                        flexDirection: "column",
                        height: "400px"
                    },
                    icon: {
                        fill: n(632079).Tj.text.secondary,
                        transform: "translateY(1px)",
                        verticalAlign: "middle",
                        cursor: "dragging" === r ? "grab" : "pointer"
                    },
                    content: {
                        padding: "8px 16px",
                        height: "367px",
                        display: "flex",
                        flexDirection: "column"
                    },
                    traceSection: {
                        width: "100%",
                        marginBottom: "10px",
                        boxSizing: "border-box",
                        height: `${24*x.length}px`
                    }
                }), [x.length, r]);
                return (0, o.jsxs)("div", {
                    onClick: d,
                    role: "button",
                    tabIndex: 0,
                    onKeyDown: e => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), d())
                    },
                    style: k.container,
                    children: [(0, o.jsxs)("div", {
                        style: M.header,
                        children: [(0, o.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            children: [(0, o.jsx)("div", {
                                style: M.titleIcon,
                                children: (0, o.jsx)(n(16275).I, {
                                    icon: n(283885).j,
                                    size: "xxs",
                                    style: k.icon
                                })
                            }), (0, o.jsx)("div", {
                                style: M.title,
                                children: "Dependency Loading"
                            })]
                        }), (0, o.jsx)("div", {
                            onClick: p,
                            role: "button",
                            tabIndex: 0,
                            onKeyDown: e => {
                                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), p())
                            },
                            style: M.closeIcon,
                            children: (0, o.jsx)(n(16275).I, {
                                icon: n(25094).xMarkSmallIcon,
                                size: "xxs",
                                style: k.icon
                            })
                        })]
                    }), (0, o.jsxs)("div", {
                        style: k.content,
                        children: [(0, o.jsxs)("div", {
                            style: M.buttonSection,
                            children: [(0, o.jsxs)("div", {
                                children: [(0, o.jsx)("button", {
                                    style: t ? M.activeButton : M.button,
                                    onClick: () => {
                                        t ? (c(), h(n(547385).A.traces)) : l()
                                    },
                                    children: t ? "Stop" : "Record"
                                }), (0, o.jsx)("button", {
                                    style: M.button,
                                    onClick: () => {
                                        h(n(547385).A.traces)
                                    },
                                    children: "Refresh"
                                })]
                            }), "|", (0, o.jsx)("div", {
                                style: M.spanSelectSection,
                                children: ["all", ...v].map(e => {
                                    let t = e === a || "all" === e && !a;
                                    return (0, o.jsx)("button", {
                                        style: t ? M.activeButton : M.button,
                                        onClick: () => "all" === e ? s(void 0) : s(e),
                                        children: e
                                    }, e)
                                })
                            })]
                        }), (0, o.jsx)("div", {
                            style: M.style0,
                            children: (0, o.jsxs)("div", {
                                style: k.traceSection,
                                title: "Cmd+scroll to zoom in",
                                ref: j,
                                children: [0 === x.length ? (0, o.jsx)("div", {
                                    children: "No traces in this time span"
                                }) : void 0, x.map((e, t) => (0, o.jsx)("div", {
                                    style: M.traceRow,
                                    children: e.map(e => {
                                        let t, n = e.end - e.start,
                                            i = S * (100 * (e.start - b)) / w;
                                        return t = "lazy_load" === e.type ? "lightblue" : "lazy_eval" === e.type ? "lightgreen" : "api_call" === e.type ? "lightcoral" : "lightgray", (0, o.jsx)("div", {
                                            title: e.name,
                                            style: { ...M.traceWrapper,
                                                width: `${100*n*S/w}%`,
                                                insetInlineStart: `${i}%`
                                            },
                                            children: (0, o.jsx)("div", {
                                                style: { ...M.trace,
                                                    background: t
                                                },
                                                title: e.name,
                                                children: e.name
                                            })
                                        }, `${e.name}-${e.end}-${e.start}`)
                                    })
                                }, t))]
                            })
                        })]
                    })]
                })
            }
            let V = {
                ring: {
                    stroke: n(632079).Tj.red.icon.accentPrimary,
                    fillOpacity: 0
                },
                center: {
                    stroke: n(632079).Tj.red.icon.accentPrimary,
                    fill: n(632079).Tj.red.icon.accentPrimary
                }
            };

            function E() {
                return (0, o.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    height: "100%",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("circle", {
                        cx: "50",
                        cy: "50",
                        r: "45",
                        strokeWidth: "5",
                        ...V.ring
                    }), (0, o.jsx)("circle", {
                        cx: "50",
                        cy: "50",
                        r: "33",
                        ...V.center
                    })]
                })
            }
            let P = {
                ring: {
                    stroke: n(632079).Tj.red.icon.accentPrimary,
                    fillOpacity: 0
                },
                pause: {
                    fill: n(632079).Tj.text.secondary
                }
            };

            function z() {
                return (0, o.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    height: "100%",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsx)("circle", {
                        cx: "50",
                        cy: "50",
                        r: "45",
                        strokeWidth: "7",
                        fill: "none",
                        ...P.ring
                    }), (0, o.jsx)("rect", {
                        x: "35",
                        y: "25",
                        width: "10",
                        height: "50",
                        rx: "5",
                        ry: "5",
                        ...P.pause
                    }), (0, o.jsx)("rect", {
                        x: "55",
                        y: "25",
                        width: "10",
                        height: "50",
                        rx: "5",
                        ry: "5",
                        ...P.pause
                    })]
                })
            }

            function B(e) {
                let {
                    value: t
                } = e, i = (0, n(960253).I)(() => ({
                    icon: {
                        width: 12,
                        height: 12,
                        marginTop: 2,
                        fill: t ? n(632079).Tj.green.icon.accentPrimary : n(632079).Tj.red.icon.accentPrimary
                    }
                }), [t]);
                return (0, o.jsx)(n(16275).I, {
                    icon: t ? n(853160).checkmarkCircleIcon : n(927364).xMarkCircleIcon,
                    size: "xxs",
                    style: i.icon
                })
            }
            let D = (0, o.jsx)("span", {
                    children: "—"
                }),
                F = e => void 0 !== e ? String(e) : "—",
                N = e => void 0 !== e && "number" == typeof e ? e.toFixed(0) : "—",
                R = e => void 0 !== e && "number" == typeof e ? `${(e/1e3).toFixed(2)}s` : "—",
                L = e => void 0 !== e && "number" == typeof e ? `${e.toFixed(0)}ms` : "—",
                A = e => void 0 !== e && "number" == typeof e ? function(e) {
                    let t = (0, n(700369).z3)(e, {
                            decimals: 1
                        }),
                        [i, o] = t.split(" ");
                    return -1 === i.indexOf(".") ? `${i}.0 ${o}` : t
                }(e) : "—",
                $ = {
                    buttonContainer: {
                        border: `2px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                        borderRadius: 12,
                        cursor: "pointer",
                        padding: "2px 6px",
                        backgroundColor: n(632079).Tj.background.secondary,
                        display: "flex",
                        alignItems: "center",
                        gap: 4
                    },
                    buttonContainerNotFirst: {
                        marginInlineStart: 6
                    },
                    buttonIcon: {
                        fill: n(632079).Tj.text.secondary,
                        height: 12,
                        width: 12
                    },
                    buttonLabel: {
                        fontFamily: n(699422).Tf.mono,
                        fontSize: 10,
                        fontWeight: n(699422).Wy.medium,
                        color: n(632079).Tj.text.secondary,
                        lineHeight: "16px",
                        userSelect: "none"
                    },
                    popup: {
                        backgroundColor: n(632079).Tj.background.secondary,
                        borderRadius: 12,
                        display: "flex",
                        flexDirection: "row",
                        padding: 6,
                        gap: 6
                    },
                    pill: {
                        cursor: "pointer",
                        border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                        borderRadius: "50%",
                        padding: 4,
                        backgroundColor: n(632079).Tj.background.secondary
                    },
                    pillIcon: {
                        fill: n(632079).Tj.text.secondary,
                        height: 12,
                        width: 12
                    }
                };

            function O(e) {
                let {
                    isFirst: t
                } = e, i = (0, n(682985).uB)(void 0, n(510969).A), a = (0, n(682985).K8)(() => {
                    let {
                        pageId: e,
                        userId: t,
                        spaceId: i
                    } = (0, n(47879).rO)();
                    return [{
                        key: "page_id",
                        tooltip: "Page ID",
                        icon: n(69858).pageSmallIcon,
                        value: e
                    }, {
                        key: "user_id",
                        tooltip: "User ID",
                        icon: n(125040).personSmallIcon,
                        value: t
                    }, {
                        key: "space_id",
                        tooltip: "Space ID",
                        icon: n(238542).teamspaceSmallIcon,
                        value: i
                    }]
                }, []);
                return (0, o.jsx)(n(180364).K, {
                    text: "Copy IDs (right-click for undashed)",
                    render: (e, r) => (0, o.jsx)(n(656252).A, {
                        ariaPopupType: "listbox",
                        popupType: n(656252).z.Popup,
                        buttonPopupStore: i,
                        ariaLabel: "Copy IDs",
                        placementToOrigin: "top",
                        alignmentToOrigin: "center",
                        originGap: 10,
                        content: e => (0, o.jsx)("div", {
                            style: $.popup,
                            children: a.map(({
                                key: t,
                                tooltip: n,
                                icon: i,
                                value: a
                            }) => (0, o.jsx)(H, {
                                tooltip: n,
                                icon: i,
                                onCopy: () => {
                                    a && navigator.clipboard.writeText(a), e.close()
                                },
                                onCopyUndashed: () => {
                                    a && navigator.clipboard.writeText(a.replace(/-/g, "")), e.close()
                                }
                            }, t))
                        }),
                        children: i => (0, o.jsxs)("div", {
                            style: { ...$.buttonContainer,
                                ...!t ? $.buttonContainerNotFirst : {}
                            },
                            role: "button",
                            tabIndex: 0,
                            "aria-label": "Copy IDs",
                            onKeyDown: e => {
                                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), i.onClick())
                            },
                            ...i,
                            ...e,
                            children: [(0, o.jsx)(n(16275).I, {
                                icon: n(802942).k,
                                size: 12,
                                style: $.buttonIcon
                            }), (0, o.jsx)("span", {
                                style: $.buttonLabel,
                                children: "IDs"
                            })]
                        })
                    })
                })
            }

            function H(e) {
                let {
                    tooltip: t,
                    icon: i,
                    onCopy: a,
                    onCopyUndashed: r
                } = e;
                return (0, o.jsx)(n(180364).K, {
                    text: t,
                    render: (e, s) => (0, o.jsx)("div", {
                        style: $.pill,
                        role: "button",
                        tabIndex: 0,
                        "aria-label": t,
                        onClick: a,
                        onContextMenu: e => {
                            e.preventDefault(), r()
                        },
                        onKeyDown: e => {
                            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), a())
                        },
                        ...e,
                        children: (0, o.jsx)(n(16275).I, {
                            icon: i,
                            size: 12,
                            style: $.pillIcon
                        })
                    })
                })
            }
            let W = {
                buttonContainer: {
                    border: `2px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    borderRadius: 12,
                    cursor: "pointer",
                    padding: "2px 6px",
                    backgroundColor: n(632079).Tj.background.secondary,
                    display: "flex",
                    alignItems: "center",
                    gap: 4
                },
                buttonContainerNotFirst: {
                    marginInlineStart: 6
                },
                icon: {
                    fill: n(632079).Tj.text.secondary,
                    height: 12,
                    width: 12
                },
                label: {
                    fontFamily: n(699422).Tf.mono,
                    fontSize: 10,
                    fontWeight: n(699422).Wy.medium,
                    color: n(632079).Tj.text.secondary,
                    lineHeight: "16px",
                    userSelect: "none"
                },
                itemCaption: {
                    color: n(632079).Tj.text.secondary
                }
            };

            function K(e) {
                let {
                    isFirst: t
                } = e, i = (0, n(533992).v3)(), a = (0, n(682985).uB)(void 0, n(510969).A), r = (0, n(83208).X)("polyglot"), s = (0, n(682985).O$)(n(728372).AppStoreCurrentUserSettingsStore), l = (0, n(682985).K8)(() => {
                    var e;
                    return (null == s || null == (e = s.getSettings()) ? void 0 : e.preferred_locale) || n(599412).q
                }, [s]), c = l.split("-")[0].toUpperCase();
                return (0, o.jsx)(n(180364).K, {
                    text: "Change language",
                    render: (e, s) => (0, o.jsx)(n(656252).A, {
                        ariaPopupType: "listbox",
                        popupType: n(656252).z.Popup,
                        buttonPopupStore: a,
                        ariaLabel: "Select language",
                        placementToOrigin: "top",
                        alignmentToOrigin: "start",
                        content: e => {
                            let t = r ? [...n(619157).fy, ...n(619157).Tf] : [...n(619157).fy],
                                a = [{
                                    key: "languages",
                                    render: e => (0, o.jsx)(n(844565).A, { ...e,
                                        topBorder: 0 !== e.index
                                    }),
                                    items: (0, n(722371).objectKeys)(n(601587).vC).filter(e => t.includes(e)).sort((e, t) => n(601587).vC[e].localeCompare(n(601587).vC[t])).map(t => {
                                        let a = n(601587).vC[t];
                                        return {
                                            key: t,
                                            render: e => (0, o.jsx)(n(95582).A, { ...e,
                                                title: a,
                                                titleStyle: {
                                                    color: n(632079).Tj.text.primary
                                                },
                                                caption: (0, o.jsx)("span", {
                                                    style: W.itemCaption,
                                                    children: t
                                                }),
                                                shouldWrapCaption: !0
                                            }),
                                            action: () => {
                                                l === t ? e.close() : (e.close(), function({
                                                    locale: e,
                                                    environment: t
                                                }) {
                                                    let i = (0, n(109939).EY)({
                                                        locale: "en-US",
                                                        messages: {}
                                                    });
                                                    (0, n(989068).i)({
                                                        locale: e,
                                                        environment: t,
                                                        origin: "languageSettings",
                                                        intl: i
                                                    })
                                                }({
                                                    locale: t,
                                                    environment: i
                                                }))
                                            }
                                        }
                                    })
                                }];
                            return (0, o.jsx)(n(747369).A, {
                                menuType: n(649476).gu.Popup,
                                width: 240,
                                children: (0, o.jsx)(n(558045).A, {
                                    type: n(558045).O.Vertical,
                                    role: "listbox",
                                    initialFocus: void 0,
                                    sections: a
                                })
                            })
                        },
                        children: i => (0, o.jsxs)("div", {
                            style: { ...W.buttonContainer,
                                ...!t ? W.buttonContainerNotFirst : {}
                            },
                            role: "button",
                            tabIndex: 0,
                            "aria-label": `Language: ${c}`,
                            onKeyDown: e => {
                                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), i.onClick())
                            },
                            ...i,
                            ...e,
                            children: [(0, o.jsx)(n(16275).I, {
                                icon: n(451034).globeSmallIcon,
                                size: 12,
                                style: W.icon
                            }), (0, o.jsx)("span", {
                                style: W.label,
                                children: c
                            })]
                        })
                    })
                })
            }

            function U(e) {
                let {
                    width: t,
                    height: a
                } = e, {
                    fpsHistory: r
                } = (0, n(643189).z)(), [s, l] = (0, i.useState)(""), c = (0, n(960253).e)(), d = (0, n(960253).I)(() => ({
                    graph: {
                        color: "dark" === c ? "white" : "black"
                    }
                }), [c]), p = (0, i.useCallback)(e => {
                    let t = (e - -5) / 149 * a;
                    return Math.min(a, Math.max(0, t))
                }, [a]);
                return (0, i.useEffect)(() => {
                    if (0 === r.length) return;
                    let e = r.map((e, n) => `${n/r.length*t},${a-p(e)}`);
                    l(`M${e.join(" L")}`)
                }, [r, a, t, p]), (0, o.jsx)("div", {
                    children: (0, o.jsxs)("svg", {
                        width: t,
                        height: a,
                        viewBox: `-20 -4 ${t} ${a}`,
                        children: [(0, o.jsx)("path", {
                            d: s,
                            fill: "none",
                            stroke: d.graph.color,
                            strokeWidth: "1"
                        }), (0, o.jsx)("path", {
                            d: `M0,0 L0,${a}`,
                            stroke: d.graph.color
                        }), (0, o.jsx)("path", {
                            d: `M0,${a-p(30)} L${t},${a-p(30)}`,
                            strokeDasharray: "2 2",
                            stroke: d.graph.color
                        }), (0, o.jsx)("text", {
                            x: -12,
                            y: a - p(30) + 3,
                            fontSize: "8",
                            fill: d.graph.color,
                            children: "30"
                        }), (0, o.jsx)("path", {
                            d: `M0,${a-p(60)} L${t},${a-p(60)}`,
                            strokeDasharray: "2 2",
                            stroke: d.graph.color
                        }), (0, o.jsx)("text", {
                            x: -12,
                            y: a - p(60) + 3,
                            fontSize: "8",
                            fill: d.graph.color,
                            children: "60"
                        }), (0, o.jsx)("path", {
                            d: `M0,${a-p(120)} L${t},${a-p(120)}`,
                            strokeDasharray: "2 2",
                            stroke: d.graph.color
                        }), (0, o.jsx)("text", {
                            x: -16,
                            y: a - p(120) + 3,
                            fontSize: "8",
                            fill: d.graph.color,
                            children: "120"
                        })]
                    })
                })
            }
            let Y = (0, n(109939).YK)({
                    valueCopied: {
                        defaultMessage: "Value copied to clipboard.",
                        id: "performanceToolbar.performanceValue.valueCopied"
                    }
                }),
                q = {
                    container: {
                        display: "flex",
                        flexDirection: "row"
                    },
                    value: {
                        color: n(632079).Tj.text.secondary,
                        fontFamily: n(699422).Tf.mono,
                        fontSize: 12,
                        marginInlineEnd: 4
                    },
                    copyIcon: {
                        marginInlineEnd: 4
                    },
                    icon: {
                        fill: n(632079).Tj.text.secondary,
                        transform: "translateY(3px)",
                        verticalAlign: "middle"
                    }
                };

            function G(e) {
                let {
                    canCopy: t,
                    value: a
                } = e, r = (0, n(533992).v3)(), [s, l] = (0, i.useState)(!1);
                async function c() {
                    let e = await (0, n(969899).jd)();
                    await e({
                        environment: r,
                        stringValue: a,
                        copiedMessage: Y.valueCopied
                    })
                }
                return (0, o.jsxs)("div", {
                    onClick: t ? c : void 0,
                    onMouseEnter: () => l(!0),
                    onMouseLeave: () => l(!1),
                    style: q.container,
                    ...t ? {
                        role: "button",
                        tabIndex: 0,
                        onKeyDown: e => {
                            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), c())
                        }
                    } : {},
                    children: [(0, o.jsx)("div", {
                        style: q.value,
                        children: a
                    }), t && s ? (0, o.jsx)("div", {
                        role: "button",
                        tabIndex: 0,
                        onKeyDown: e => {
                            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), c())
                        },
                        style: q.copyIcon,
                        children: (0, o.jsx)(n(16275).I, {
                            icon: n(682006).a,
                            size: 10,
                            style: q.icon
                        })
                    }) : void 0]
                })
            }
            let Z = {
                header: {
                    alignItems: "center",
                    backgroundColor: n(632079).Tj.background.secondary,
                    borderBottom: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: 8,
                    paddingInlineStart: `${n(398879).ls/2}px`,
                    paddingInlineEnd: `${n(398879).ls/2}px`,
                    paddingBottom: 8,
                    position: "sticky",
                    top: 0,
                    width: "100%",
                    zIndex: 1
                },
                titleIcon: {
                    marginInlineEnd: 8
                },
                title: {
                    color: n(632079).Tj.text.secondary,
                    fontSize: 12
                },
                closeIcon: {
                    cursor: "pointer"
                },
                content: {
                    backgroundColor: n(632079).Tj.background.secondary,
                    height: "auto",
                    overflowY: "auto",
                    padding: `8px ${n(398879).ls/2}px`,
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px"
                },
                table: {
                    borderCollapse: "collapse",
                    width: "auto"
                },
                graph: {
                    flex: 1
                },
                description: {
                    color: n(632079).Tj.text.tertiary,
                    fontSize: "10px",
                    marginBottom: 0,
                    paddingBottom: 0
                },
                footer: {
                    position: "sticky",
                    bottom: 0,
                    borderTop: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                    backgroundColor: n(632079).Tj.background.secondary,
                    zIndex: 1,
                    padding: `0 ${n(398879).ls/2}px`,
                    marginBottom: 8,
                    width: "100%"
                }
            };

            function X(e) {
                let {
                    id: t,
                    name: a,
                    description: r,
                    icon: s,
                    subMetrics: l,
                    onDragEvents: c,
                    visibility: d,
                    onClose: p,
                    onFront: u
                } = e, [m, g] = (0, i.useState)(!1), h = (0, n(960253).I)(() => ({
                    icon: {
                        fill: n(632079).Tj.text.secondary,
                        transform: "translateY(1px)",
                        verticalAlign: "middle",
                        cursor: "dragging" === d ? "grab" : "pointer"
                    }
                }), [d]);
                if (!(l && l.length > 0)) return null;
                let v = m || "dragging" === d;
                return (0, o.jsxs)(n(4458).VP, {
                    onClick: u,
                    role: "button",
                    tabIndex: 0,
                    onKeyDown: e => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), u())
                    },
                    children: [(0, o.jsxs)("div", {
                        onMouseOver: () => g(!0),
                        onMouseLeave: () => g(!1),
                        style: Z.header,
                        children: [(0, o.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            children: [(0, o.jsx)("div", {
                                style: Z.titleIcon,
                                onMouseDown: c.onMouseDown,
                                onTouchStart: c.onTouchStart,
                                onContextMenu: c.onContextMenu,
                                role: "button",
                                tabIndex: 0,
                                children: v ? (0, o.jsx)(n(16275).I, {
                                    icon: n(271789).N,
                                    size: "xxs",
                                    style: h.icon
                                }) : (0, o.jsx)(n(16275).I, {
                                    icon: s,
                                    size: "xxs",
                                    style: h.icon
                                })
                            }), (0, o.jsx)("div", {
                                style: Z.title,
                                children: a
                            })]
                        }), (0, o.jsx)("div", {
                            onClick: p,
                            role: "button",
                            tabIndex: 0,
                            onKeyDown: e => {
                                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), p())
                            },
                            style: Z.closeIcon,
                            children: (0, o.jsx)(n(16275).I, {
                                icon: n(25094).xMarkSmallIcon,
                                size: "xxs",
                                style: h.icon
                            })
                        })]
                    }), (0, o.jsxs)("div", {
                        style: Z.content,
                        children: [(0, o.jsx)(n(4458).VP, {
                            flex: "0 1 auto",
                            children: (0, o.jsx)("table", {
                                style: Z.table,
                                children: (0, o.jsx)("tbody", {
                                    children: l.map(e => (0, i.createElement)(Q, { ...e,
                                        key: e.id
                                    }))
                                })
                            })
                        }), "frames_per_second" === t ? (0, o.jsx)("div", {
                            style: Z.graph,
                            children: (0, o.jsx)(U, {
                                width: 140,
                                height: 50
                            })
                        }) : void 0]
                    }), (0, o.jsx)("div", {
                        style: Z.footer,
                        children: (0, o.jsx)("p", {
                            style: Z.description,
                            children: r
                        })
                    })]
                })
            }
            let J = {
                paddingInlineEnd: 8
            };

            function Q(e) {
                let {
                    id: t,
                    name: i,
                    shortName: a,
                    formatValue: r
                } = e, s = r((0, n(219255).Y)(t));
                return (0, o.jsxs)("tr", {
                    children: [(0, o.jsx)("td", {
                        style: J,
                        children: (0, o.jsx)(n(180364).K, {
                            text: i,
                            render: (e, t) => (0, o.jsx)(k, {
                                caption: a,
                                tooltipEvents: e
                            })
                        })
                    }), (0, o.jsx)("td", {
                        children: (0, o.jsx)(G, {
                            value: s,
                            canCopy: !0
                        })
                    })]
                })
            }

            function ee(e) {
                let {
                    id: t,
                    icon: i,
                    name: a,
                    description: r,
                    subMetrics: s,
                    visibility: l,
                    zIndex: c,
                    position: d,
                    onClose: p,
                    onFront: u,
                    onDragEvents: m
                } = e, g = (0, n(960253).I)(() => ({
                    container: {
                        backgroundColor: n(632079).Tj.background.secondary,
                        border: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                        borderRadius: 8,
                        color: n(632079).Tj.text.secondary,
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: n(699422).Tf.mono,
                        fontSize: 12,
                        marginInlineEnd: 8,
                        opacity: "pinned" === l || "dragging" === l ? 1 : .9,
                        overflow: "hidden",
                        position: "relative",
                        width: 8 * n(398879).ls
                    }
                }), [l]);
                if (!d) return null;
                let h = new DOMRect(d.x, d.y, 0, 0);
                return (0, o.jsx)(n(182718).zD, {
                    alignmentToOrigin: "center",
                    disableMouseCapture: !0,
                    enableOutsideClickDismiss: !1,
                    open: S(l),
                    originGap: 6,
                    originRect: h,
                    overlayContainerZIndex: c,
                    placementToOrigin: "top",
                    popupType: n(423291).n.Popup,
                    preventCaptureEsc: !0,
                    style: g.container,
                    trapFocus: !1,
                    content: () => (0, o.jsx)(X, {
                        id: t,
                        name: a,
                        description: r,
                        icon: i,
                        subMetrics: s,
                        visibility: l,
                        onClose: p,
                        onFront: u,
                        onDragEvents: m
                    })
                })
            }
            let et = {
                    icon: {
                        fill: n(632079).Tj.text.secondary,
                        height: 11,
                        transform: "translateY(0.5px)",
                        verticalAlign: "middle",
                        width: 11
                    }
                },
                en = i.memo(i.forwardRef(function(e, t) {
                    var a, r;
                    let s, {
                            popupState: l,
                            popupZIndex: c,
                            popupPosition: d,
                            onPeekButton: p,
                            onUnpeekButton: u,
                            onActivateButton: m,
                            onFrontPopup: g,
                            onClosePopup: h,
                            onDragPopupEvents: v,
                            id: _,
                            icon: f,
                            description: x,
                            name: b,
                            shortName: y,
                            subMetrics: w,
                            formatValue: S,
                            valueType: j
                        } = e,
                        I = (0, i.useRef)(null),
                        T = (0, n(421573).A)(I, t),
                        M = S((0, n(219255).Y)(_)),
                        C = w && w.length > 0,
                        V = (0, n(219255).Y)("frames_per_second"),
                        E = (0, n(219255).Y)("frames_per_second__avg"),
                        P = (a = "number" == typeof V ? V : void 0, r = "number" == typeof E ? E : void 0, s = (0, n(960253).e)(), (0, i.useCallback)(e => {
                            if (!a || !r) return "inherit";
                            let t = "light" === e ? 247 : 32,
                                i = r - a,
                                o = (0, n(627179).qE)({
                                    value: t - 1.5 * i,
                                    min: 0,
                                    max: t
                                });
                            return `rgb(${t}, ${o}, ${o})`
                        }, [r, a])(s)),
                        z = function(e) {
                            let [t, o] = (0, i.useState)(0), a = e.current;
                            return (0, i.useEffect)(() => {
                                let e = (0, n(381453).sg)(() => {
                                        let e = (null == a ? void 0 : a.offsetWidth) ? ? 0;
                                        e > t && o(e)
                                    }, 100),
                                    i = new ResizeObserver(() => e());
                                return a && i.observe(a), () => {
                                    a && i.unobserve(a), e.cancel()
                                }
                            }, [a, t]), t
                        }(I),
                        B = "pinned" === l || "dragging" === l,
                        D = "frames_per_second" === _ ? P : "inherit",
                        F = (0, n(960253).I)(() => ({
                            entry: {
                                alignItems: "center",
                                borderInlineEnd: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                                color: n(632079).Tj.text.secondary,
                                display: "flex",
                                flex: "0 0 auto",
                                flexDirection: "row",
                                flexWrap: "nowrap",
                                height: "100%",
                                minHeight: n(398879).ls,
                                justifyContent: "space-between",
                                margin: 0,
                                minWidth: `${z}px`,
                                padding: `0 ${n(398879).ls/2}px`,
                                width: "auto",
                                ...C && {
                                    cursor: "pointer"
                                },
                                ...B && {
                                    boxShadow: `inset 0px 0px 8px ${n(632079).Tj.state.pressed}`
                                }
                            }
                        }), [C, z, B]);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            ref: T,
                            style: {
                                backgroundColor: D,
                                ...F.entry
                            },
                            ...C ? {
                                onClick: m,
                                onMouseOver: p,
                                onMouseLeave: u,
                                role: "button",
                                tabIndex: 0
                            } : {},
                            children: (0, o.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                gap: 6,
                                children: [(0, o.jsx)(n(4458).fI, {
                                    alignItems: "center",
                                    height: "100%",
                                    justifyContent: "center",
                                    children: f(et.icon)
                                }), C ? (0, o.jsx)(k, {
                                    caption: y
                                }) : (0, o.jsx)(n(180364).K, {
                                    text: b,
                                    render: (e, t) => (0, o.jsx)(k, {
                                        caption: y,
                                        tooltipEvents: e
                                    })
                                }), "element" === j ? M : (0, o.jsx)(G, {
                                    value: "string" == typeof M ? M : String(M)
                                })]
                            })
                        }, _), C ? (0, o.jsx)(ee, {
                            id: _,
                            icon: f,
                            name: b,
                            description: x,
                            subMetrics: w,
                            position: d,
                            zIndex: c,
                            visibility: l,
                            onClose: h,
                            onFront: g,
                            onDragEvents: v
                        }) : void 0]
                    })
                })),
                ei = [ec({
                    id: "environment",
                    name: "Environment",
                    description: "The environment Notion is running in (e.g., local, development, staging, or production).",
                    isForced: !0,
                    isEnabled: !0,
                    shortName: "ENV",
                    icon: n(451034).globeSmallIcon,
                    formatValue: F,
                    valueType: "string",
                    subMetrics: [{
                        id: "env__cell",
                        name: "Cell",
                        shortName: "Cell",
                        formatValue: F
                    }, {
                        id: "env__region",
                        name: "Region",
                        shortName: "Region",
                        formatValue: F
                    }]
                }), ec({
                    id: "version",
                    name: "Version",
                    description: "The current version of Notion. On local, it will appear as 'local: <branch-name>' when available.",
                    isForced: !0,
                    isEnabled: !0,
                    shortName: "VER",
                    icon: n(283885).j,
                    formatValue: F,
                    valueType: "string",
                    subMetrics: [{
                        id: "version__last_updated",
                        name: "Last Updated",
                        shortName: "Last Updated",
                        formatValue: F
                    }]
                }), ec({
                    id: "frames_per_second",
                    name: "FPS",
                    description: "The number of frames displayed per second. Shows visual 'smoothness.'",
                    isForced: !0,
                    isEnabled: !0,
                    shortName: "FPS",
                    icon: u,
                    formatValue: N,
                    valueType: "string",
                    subMetrics: [{
                        id: "frames_per_second__avg",
                        name: "Average FPS",
                        shortName: "Avg",
                        formatValue: N
                    }, {
                        id: "frames_per_second__min",
                        name: "Min FPS",
                        shortName: "Min",
                        formatValue: N
                    }, {
                        id: "frames_per_second__max",
                        name: "Max FPS",
                        shortName: "Max",
                        formatValue: N
                    }]
                }), ec({
                    id: "memory",
                    name: "Memory",
                    description: "Shows the size of the JavaScript heap. Not available on some browsers, such as Firefox.",
                    isForced: !1,
                    isEnabled: (0, n(47879).Og)(),
                    shortName: "MEM",
                    icon: w,
                    formatValue: A,
                    valueType: "string",
                    subMetrics: [{
                        id: "memory__total",
                        name: "Total Memory",
                        shortName: "Total",
                        formatValue: A
                    }, {
                        id: "memory__limit",
                        name: "Memory Limit",
                        shortName: "Limit",
                        formatValue: A
                    }]
                }), ec({
                    id: "initial_page_render",
                    name: "Initial Page Render",
                    description: "The time to load your first page. See the `InitialPageRenderSubMetrics` interface for more.",
                    isForced: !1,
                    isEnabled: !0,
                    shortName: "IPR",
                    icon: n(372365).clockSmallIcon,
                    formatValue: R,
                    valueType: "string",
                    subMetrics: [{
                        id: "page_origin_to_app_start",
                        name: "Page Origin to App Start",
                        shortName: "Stage 0 (O2A)",
                        formatValue: R
                    }, {
                        id: "app_start_to_main_start",
                        name: "App Start to Main Start",
                        shortName: "Stage 1 (A2M)",
                        formatValue: R
                    }, {
                        id: "main_start_to_prefetch_initiated",
                        name: "Main Start to Prefetch Initiated",
                        shortName: "Stage 2 (M2P)",
                        formatValue: R
                    }, {
                        id: "prefetch_initiated_to_statsig_bootup_blocking_start",
                        name: "Prefetch Initiated to Render Start",
                        shortName: "Stage 3 (P2S)",
                        formatValue: R
                    }, {
                        id: "statsig_bootup_blocking",
                        name: "Statsig Bootup Blocking Time",
                        shortName: "Stage 4 (SBB)",
                        formatValue: R
                    }, {
                        id: "render_start_to_render_end",
                        name: "Render Start to Render End",
                        shortName: "Stage 5 (R2R)",
                        formatValue: R
                    }, {
                        id: "render_end_to_await_page_chunk_start",
                        name: "Render End to Await Page Chunk Start",
                        shortName: "Stage 6 (R2C)",
                        formatValue: R
                    }, {
                        id: "await_page_chunk_start_to_await_page_chunk_end",
                        name: "Await Page Chunk Start to Await Page Chunk End",
                        shortName: "Stage 7 (C2C)",
                        formatValue: R
                    }, {
                        id: "await_page_chunk_end_to_browser_repaint_start",
                        name: "Await Page Chunk End to Browser Repaint Start",
                        shortName: "Stage 8 (C2R)",
                        formatValue: R
                    }]
                }), ec({
                    id: "navigation_page_render",
                    name: "Navigation Page Render",
                    description: "The time it takes for your current page to load, after navigation.",
                    isForced: !1,
                    isEnabled: !1,
                    shortName: "NPR",
                    icon: n(166568).arrowUpRightSquareSmallIcon,
                    formatValue: R,
                    valueType: "string",
                    subMetrics: []
                }), ec({
                    id: "initial_database_items_visible",
                    name: "Initial Database Visible",
                    description: "The time it takes for your first seen collection's items to be visible.",
                    isForced: !1,
                    isEnabled: !0,
                    shortName: "IDV",
                    icon: d,
                    formatValue: R,
                    valueType: "string",
                    subMetrics: [{
                        id: "collection_view_block_bundle_load_and_parse",
                        name: "Collection View Block Bundle Load and Parse",
                        shortName: "Stage 1 (CVB)",
                        formatValue: R
                    }, {
                        id: "collections.await_page_chunk_end_to_cvb_start",
                        name: "Await Page Chunk End to CVB Start",
                        shortName: "Stage 2 (C2C)",
                        formatValue: R
                    }, {
                        id: "collections.cvb_start_to_cvb_mount",
                        name: "CVB Start to CVB Mount",
                        shortName: "Stage 3 (C2M)",
                        formatValue: R
                    }, {
                        id: "collections.cvb_mount_to_items_start",
                        name: "CVB Mount to Items Start",
                        shortName: "Stage 4 (M2I)",
                        formatValue: R
                    }, {
                        id: "collections.items_start_to_items_visible",
                        name: "Items Start to Items Visible",
                        shortName: "Stage 5 (I2V)",
                        formatValue: R
                    }]
                }), ec({
                    id: "collections.navigation_items_visible",
                    name: "Navigation DB Visible",
                    description: "The time it takes for your navigated-to collection's items to be visible.",
                    isForced: !1,
                    isEnabled: !1,
                    shortName: "NDV",
                    icon: n(310585).H,
                    formatValue: R,
                    valueType: "string",
                    subMetrics: [{
                        id: "navigation_database_render",
                        name: "Navigation DB Render",
                        shortName: "NDR",
                        formatValue: R
                    }]
                }), ec({
                    id: "computed_store_count",
                    name: "Computed Store Count",
                    description: "Computed store instances and subscriptions in memory as well as the number of recomputes and rerenders caused by computed stores since app start.",
                    isForced: !1,
                    isEnabled: !0,
                    shortName: "CSC",
                    icon: r,
                    formatValue: N,
                    valueType: "string",
                    subMetrics: [{
                        id: "computed_store_count",
                        name: "Computed Store Count",
                        shortName: "Total Count",
                        formatValue: N
                    }, {
                        id: "computed_store_subscriptions",
                        name: "Computed Store Subscriptions",
                        shortName: "Subscriptions",
                        formatValue: N
                    }, {
                        id: "computed_store_rerenders",
                        name: "Computed Store Rerenders",
                        shortName: "Rerenders",
                        formatValue: N
                    }, {
                        id: "computed_store_recomputes",
                        name: "Computed Store Recomputes",
                        shortName: "Recomputes",
                        formatValue: N
                    }]
                }), ec({
                    id: "typing_lag",
                    name: "Typing Lag",
                    description: "The time between a keystroke and its completed action.",
                    isForced: !1,
                    isEnabled: !0,
                    icon: g,
                    shortName: "TL",
                    formatValue: L,
                    valueType: "string",
                    subMetrics: [{
                        id: "typing_delete",
                        name: "Typing Delete",
                        shortName: "Del",
                        formatValue: L
                    }, {
                        id: "typing_backspace",
                        name: "Typing Backspace",
                        shortName: "Bsp",
                        formatValue: L
                    }, {
                        id: "typing_enter",
                        name: "Typing Enter",
                        shortName: "Ent",
                        formatValue: L
                    }, {
                        id: "typing_tab",
                        name: "Typing Tab",
                        shortName: "Tab",
                        formatValue: L
                    }, {
                        id: "typing_untab",
                        name: "Typing Untab",
                        shortName: "Untab",
                        formatValue: L
                    }]
                }), ec({
                    id: "message_store__connected",
                    name: "Message Store Status",
                    description: "Whether the message store is connected.",
                    isForced: !1,
                    isEnabled: !1,
                    shortName: "MSS",
                    icon: n(895500).bubbleEllipsesSmallIcon,
                    formatValue: e => void 0 !== e && "boolean" == typeof e ? (0, o.jsx)(B, {
                        value: e
                    }) : D,
                    valueType: "element",
                    subMetrics: [{
                        id: "message_store__num_attempts",
                        name: "Message Store Connection Attempts",
                        shortName: "MCA",
                        formatValue: N
                    }]
                }), {
                    id: "dependency_loading",
                    name: "Dependency Loading",
                    description: "Simplified version of networks tab to make it easier to see what dependencies (data/lazy loading) get loaded for a given action",
                    isForced: !1,
                    isEnabled: !1,
                    render: e => (0, o.jsx)(T, { ...e
                    })
                }, ec({
                    id: "initial_page_rendered_blocks",
                    name: "Initial Page Rendered Blocks",
                    description: "The time it takes for current page content to render, after initial page render.",
                    isForced: !1,
                    isEnabled: !1,
                    shortName: "IPRB",
                    icon: n(692493).pageFillSmallIcon,
                    formatValue: R,
                    valueType: "string",
                    subMetrics: []
                }), ec({
                    id: "navigation_page_rendered_blocks",
                    name: "Navigation Page Rendered Blocks",
                    description: "The time it takes for current page content to render, after navigation page render.",
                    isForced: !1,
                    isEnabled: !1,
                    shortName: "NPRB",
                    icon: n(692493).pageFillSmallIcon,
                    formatValue: R,
                    valueType: "string",
                    subMetrics: []
                }), ec({
                    id: "interaction_to_next_paint",
                    name: "Interaction to Next Paint",
                    description: "The time between an interaction (click, keypress) and when the browser has finished painting in reaction to that interaction.",
                    isForced: !1,
                    isEnabled: !1,
                    shortName: "INP",
                    icon: n(319472).arrowUpDownFillSmallIcon,
                    formatValue: L,
                    valueType: "string",
                    subMetrics: []
                })],
                eo = ei.reduce((e, t) => ({ ...e,
                    [t.id]: t
                }), {});

            function ea(e) {
                return eo[e]
            }
            let er = [{
                    id: "pin",
                    name: "Pin the toolbar",
                    description: "Pin the toolbar to the screen.",
                    ariaLabel: "Toggle toolbar pin",
                    icon: n(736620).M,
                    activeIcon: n(27907).R,
                    tooltip: "Pin",
                    onClick: () => {
                        n(378567).PM("pin")
                    },
                    isForced: !0,
                    isEnabled: !0
                }, {
                    id: "settings",
                    name: "Open toolbar settings",
                    description: "Open the performance toolbar settings, right from the toolbar itself.",
                    ariaLabel: "Open toolbar settings",
                    icon: n(80086).gearSmallIcon,
                    tooltip: "Open toolbar settings",
                    onClick: () => n(599754).Ow({
                        currentPage: "performance_toolbar",
                        openedFrom: "performance_toolbar"
                    }),
                    isForced: !0,
                    isEnabled: !0
                }, {
                    id: "uidoc",
                    name: "Open UIDocs",
                    description: "Access Notion's UIDocs in a new tab.",
                    ariaLabel: "Open UIDocs",
                    icon: n(814812).presentSmallIcon,
                    tooltip: "Open UIDocs",
                    onClick: () => window.open("/design"),
                    isForced: !1,
                    isEnabled: !0
                }, {
                    id: "experiments",
                    name: "Open experiments",
                    description: "Open the experiments settings menu.",
                    ariaLabel: "Open experiments",
                    icon: n(53634).sparklesSmallIcon,
                    tooltip: "Open experiments",
                    onClick: () => n(599754).Ow({
                        currentPage: "experiments",
                        openedFrom: "performance_toolbar"
                    }),
                    isForced: !1,
                    isEnabled: !1
                }, {
                    id: "reset_popups",
                    name: "Reset popups",
                    description: "Reset all popups back to their starting position.",
                    ariaLabel: "Reset popups",
                    icon: n(283885).j,
                    tooltip: "Reset popups",
                    onClick: () => n(378567).ys(),
                    isForced: !1,
                    isEnabled: !1
                }, {
                    id: "copy_ids",
                    name: "Copy IDs",
                    description: "Copies current user_id, space_id, and page_id to clipboard.",
                    ariaLabel: "Copy IDs",
                    icon: n(802942).k,
                    tooltip: "Copy IDs",
                    renderCustom: e => (0, o.jsx)(O, { ...e
                    }),
                    onClick: () => {},
                    isForced: !1,
                    isEnabled: !0
                }, {
                    id: "toggle_theme",
                    name: "Toggle theme mode",
                    description: "Toggle between light and dark theme.",
                    ariaLabel: "Toggle theme mode",
                    icon: v,
                    tooltip: "Toggle theme mode",
                    onClick: e => {
                        n(997524).C5((null == e ? void 0 : e.ThemeStore.state.mode) === "light" ? "dark" : "light")
                    },
                    isForced: !1,
                    isEnabled: !0
                }, {
                    id: "toggle_content_reskin",
                    name: "Toggle Content Reskin",
                    description: "Toggles new block margins in the editor",
                    ariaLabel: "Toggle Content Reskin",
                    icon: b,
                    activeIcon: f,
                    tooltip: "Toggle Content Reskin",
                    isInitiallyActive: () => n(473556).default.checkGate("content_reskin_v2"),
                    onClick: e => {
                        let t = n(473556).default.checkGate("content_reskin_v2");
                        n(473556).default.updateLocalOverrideGate("content_reskin_v2", !t), n(378567).PM("toggle_content_reskin", !t)
                    },
                    isForced: !1,
                    isEnabled: !1
                }, {
                    id: "toggle_high_contrast",
                    name: "Toggle high contrast",
                    description: "Toggle high contrast mode on/off.",
                    ariaLabel: "Toggle high contrast mode",
                    icon: l,
                    tooltip: "Toggle high contrast",
                    onClick: e => {
                        if (!e) return;
                        let t = "high" === (0, n(961489).Wu)(e) ? "standard" : "high";
                        (0, n(961489).S4)({
                            environment: e,
                            preference: t
                        }), n(378567).PM("toggle_high_contrast", "high" === t)
                    },
                    isInitiallyActive: () => "high" === document.body.getAttribute("data-contrast"),
                    isForced: !1,
                    isEnabled: !0
                }, {
                    id: "language_picker",
                    name: "Change language",
                    description: "Switch the application locale for i18n testing.",
                    ariaLabel: "Change language",
                    icon: n(451034).globeSmallIcon,
                    tooltip: "Change language",
                    renderCustom: e => (0, o.jsx)(K, { ...e
                    }),
                    onClick: () => {},
                    isForced: !1,
                    isEnabled: !0
                }, {
                    id: "toggle_rtl_dir",
                    name: "Toggle RTL/LTR (with page reload)",
                    description: "Reloads the page with new direction applied.",
                    ariaLabel: "Toggle RTL/LTR (with page reload)",
                    icon: n(987349).arrowLeftRightFillIcon,
                    tooltip: "Toggle RTL/LTR (with page reload)",
                    onClick: e => {
                        let t = document.dir;
                        n(647095).ui({
                            showCancel: !0,
                            keepFocus: !1,
                            message: (0, o.jsx)(n(109939).sA, {
                                id: "performanceToolbar.toggleRtl.confirmationMessage",
                                defaultMessage: "[internal only]Are you sure you want to change the text direction to {direction}?",
                                values: {
                                    direction: "rtl" !== t ? "RTL" : "LTR"
                                }
                            }),
                            items: [{
                                label: (0, o.jsx)(n(109939).sA, {
                                    id: "performanceToolbar.toggleRtl.updateButton.label",
                                    defaultMessage: "Change Direction"
                                }),
                                color: "red",
                                onAccept: () => {
                                    (0, n(38899).Z)("rtl" !== t), n.g.location.reload()
                                }
                            }]
                        })
                    },
                    isForced: !1,
                    isEnabled: !1
                }],
                es = er.reduce((e, t) => ({ ...e,
                    [t.id]: t
                }), {});

            function el(e) {
                return es[e]
            }

            function ec({
                id: e,
                name: t,
                description: n,
                isForced: i,
                isEnabled: a,
                shortName: r,
                icon: s,
                formatValue: l,
                valueType: c,
                subMetrics: d
            }) {
                return {
                    id: e,
                    name: t,
                    description: n,
                    isForced: i,
                    isEnabled: a,
                    render: i => (0, o.jsx)(en, { ...i,
                        id: e,
                        name: t,
                        description: n,
                        icon: s,
                        shortName: r,
                        formatValue: l,
                        valueType: c,
                        subMetrics: d
                    })
                }
            }
        },
        180364: (e, t, n) => {
            n.d(t, {
                K: () => a
            }), n(296540);
            var i = n(474848);
            let o = {
                tooltip: {
                    fontFamily: n(699422).Tf.mono,
                    fontSize: 11
                }
            };

            function a(e) {
                let {
                    text: t,
                    render: a
                } = e;
                return (0, i.jsx)(n(51831).m, {
                    originGap: 6,
                    placement: "top",
                    content: e => (0, i.jsx)("span", {
                        style: o.tooltip,
                        children: t
                    }),
                    children: a
                })
            }
        },
        219255: (e, t, n) => {
            n.d(t, {
                Y: () => d,
                B: () => c
            }), n(898992), n(803949);
            var i = n(296540);
            n(16280);
            var o = () => n(546605);
            class a extends o().Store {
                observer;
                getInitialState() {
                    return {
                        initial_page_render: void 0,
                        page_origin_to_app_start: void 0,
                        app_start_to_main_start: void 0,
                        main_start_to_prefetch_initiated: void 0,
                        prefetch_initiated_to_statsig_bootup_blocking_start: void 0,
                        statsig_bootup_blocking: void 0,
                        render_start_to_render_end: void 0,
                        render_end_to_await_page_chunk_start: void 0,
                        await_page_chunk_start_to_await_page_chunk_end: void 0,
                        await_page_chunk_end_to_browser_repaint_start: void 0,
                        navigation_page_render: void 0,
                        initial_page_rendered_blocks: void 0,
                        navigation_page_rendered_blocks: void 0,
                        initial_database_items_visible: void 0,
                        collection_view_block_bundle_load_and_parse: void 0,
                        "collections.await_page_chunk_end_to_cvb_start": void 0,
                        "collections.cvb_start_to_cvb_mount": void 0,
                        "collections.cvb_mount_to_items_start": void 0,
                        "collections.items_start_to_items_visible": void 0,
                        "collections.navigation_items_visible": void 0,
                        navigation_database_render: void 0,
                        typing_lag: void 0,
                        typing_delete: void 0,
                        typing_backspace: void 0,
                        typing_enter: void 0,
                        typing_tab: void 0,
                        typing_untab: void 0
                    }
                }
                constructor() {
                    if (super(), !performance.getEntries) throw Error("Attempted to initialize PerformanceObserver in NotionPerformanceStore without performance API");
                    this.observer = new PerformanceObserver((e, t) => {
                        e.getEntries().forEach(e => {
                            (0, n(997551).G8)(e.name) && this.setPerformanceMetric(e.name, e.duration)
                        })
                    }), this.observer.observe({
                        entryTypes: ["measure"]
                    })
                }
                setPerformanceMetric(e, t) {
                    this.update(n => ({ ...n,
                        [e]: t
                    }))
                }
            }
            let r = null;

            function s() {
                return r || (r = new a)
            }

            function l(e, t, n = 1e3) {
                let [o, a] = (0, i.useState)(t);
                return (0, i.useEffect)(() => {
                    let t = setInterval(() => {
                        a(e())
                    }, n);
                    return () => clearInterval(t)
                }, [e, n]), o
            }

            function c() {
                let e = (0, n(533992).Y0)().version,
                    t = (0, n(850640).v9)(n(986939).A.lastUpdatedTime, n(849917).locale),
                    {
                        fps: o,
                        avgFps: a,
                        minFps: r,
                        maxFps: c
                    } = (0, n(643189).z)(),
                    {
                        initial_page_render: d,
                        page_origin_to_app_start: p,
                        app_start_to_main_start: u,
                        main_start_to_prefetch_initiated: m,
                        prefetch_initiated_to_statsig_bootup_blocking_start: g,
                        statsig_bootup_blocking: h,
                        render_start_to_render_end: v,
                        render_end_to_await_page_chunk_start: _,
                        await_page_chunk_start_to_await_page_chunk_end: f,
                        await_page_chunk_end_to_browser_repaint_start: x,
                        navigation_page_render: b,
                        initial_page_rendered_blocks: y,
                        navigation_page_rendered_blocks: w,
                        initial_database_items_visible: S,
                        collection_view_block_bundle_load_and_parse: j,
                        "collections.await_page_chunk_end_to_cvb_start": k,
                        "collections.cvb_start_to_cvb_mount": I,
                        "collections.cvb_mount_to_items_start": T,
                        "collections.items_start_to_items_visible": M,
                        "collections.navigation_items_visible": C,
                        navigation_database_render: V,
                        typing_lag: E,
                        typing_delete: P,
                        typing_backspace: z,
                        typing_enter: B,
                        typing_tab: D,
                        typing_untab: F
                    } = (0, n(682985).O$)(s());
                (0, i.useEffect)(() => {
                    performance.getEntriesByName && n(997551).a7.forEach(e => performance.getEntriesByName(e).forEach(t => {
                        let n = s().state;
                        e in n && void 0 !== n[e] || s().setPerformanceMetric(e, t.duration)
                    }))
                }, []);
                let {
                    computedStoreCount: N,
                    computedStoreSubscriptionCount: R,
                    computedStoreRecomputesTotal: L,
                    computedStoreRerendersTotal: A
                } = l(n(345426).g5, (0, n(345426).g5)()), $ = "memory" in performance ? performance.memory : void 0, {
                    message_store__connected: O,
                    message_store__num_attempts: H
                } = (0, n(682985).K8)(() => ({
                    message_store__connected: n(260220).A.state.isConnected,
                    message_store__num_attempts: n(260220).A.state.numConnectionAttempts
                }), []), W = l((0, i.useCallback)(() => n(566025).w.getP98INPDuration(), []), void 0, 5e3), {
                    env__cell: K,
                    env__region: U
                } = (0, n(682985).K8)(() => {
                    let e = (0, n(328765).S)();
                    if (e) {
                        let t = e.getPublicSpaceData();
                        if (t && "none" !== t.role) return {
                            env__cell: null == t ? void 0 : t.cell,
                            env__region: null == t ? void 0 : t.region
                        }
                    }
                    return {
                        env__cell: void 0,
                        env__region: void 0
                    }
                }, []);
                return {
                    environment: "production",
                    env__cell: K,
                    env__region: U,
                    version: e,
                    version__last_updated: t,
                    frames_per_second: o,
                    frames_per_second__avg: a,
                    frames_per_second__min: r,
                    frames_per_second__max: c,
                    memory: $ ? $.usedJSHeapSize : void 0,
                    memory__total: $ ? $.totalJSHeapSize : void 0,
                    memory__limit: $ ? $.jsHeapSizeLimit : void 0,
                    initial_page_render: d,
                    page_origin_to_app_start: p,
                    app_start_to_main_start: u,
                    main_start_to_prefetch_initiated: m,
                    prefetch_initiated_to_statsig_bootup_blocking_start: g,
                    statsig_bootup_blocking: h,
                    render_start_to_render_end: v,
                    render_end_to_await_page_chunk_start: _,
                    await_page_chunk_start_to_await_page_chunk_end: f,
                    await_page_chunk_end_to_browser_repaint_start: x,
                    navigation_page_render: b,
                    initial_page_rendered_blocks: y,
                    navigation_page_rendered_blocks: w,
                    initial_database_items_visible: S,
                    collection_view_block_bundle_load_and_parse: j,
                    "collections.await_page_chunk_end_to_cvb_start": k,
                    "collections.cvb_start_to_cvb_mount": I,
                    "collections.cvb_mount_to_items_start": T,
                    "collections.items_start_to_items_visible": M,
                    "collections.navigation_items_visible": C,
                    navigation_database_render: V,
                    computed_store_count: N,
                    computed_store_subscriptions: R,
                    computed_store_recomputes: L,
                    computed_store_rerenders: A,
                    typing_lag: E,
                    typing_delete: P,
                    typing_backspace: z,
                    typing_enter: B,
                    typing_tab: D,
                    typing_untab: F,
                    message_store__connected: O,
                    message_store__num_attempts: H,
                    interaction_to_next_paint: W
                }
            }

            function d(e) {
                return (0, n(533229)._D)()[e]
            }
        },
        238542: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                teamspaceSmallIcon: () => a
            }), n(296540);
            var i = n(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 2.97 11.75 10.05",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M5.066 4.914a.538.538 0 1 0 0 1.076.538.538 0 0 0 0-1.076m2.162 0a.538.538 0 1 0 0 1.076.538.538 0 0 0 0-1.076M5.066 6.458a.538.538 0 1 0 0 1.077.538.538 0 0 0 0-1.077m2.162 0a.538.538 0 1 0 0 1.077.538.538 0 0 0 0-1.077M5.066 8.002a.538.538 0 1 0 0 1.077.538.538 0 0 0 0-1.077m2.162 0a.538.538 0 1 0 0 1.077.538.538 0 0 0 0-1.077m4.169.618a.538.538 0 1 0 0 1.076.538.538 0 0 0 0-1.076m0 1.544a.538.538 0 1 0 0 1.076.538.538 0 0 0 0-1.076"
                        }), (0, i.jsx)("path", {
                            d: "M4.063 2.977a1.934 1.934 0 0 0-1.935 1.935V12.4c0 .343.279.622.622.622h10.5a.62.62 0 0 0 .622-.622V8.772a1.934 1.934 0 0 0-1.934-1.934h-1.772V4.912a1.934 1.934 0 0 0-1.934-1.935zm-.691 1.935c0-.382.31-.691.69-.691h4.17c.381 0 .69.31.69.69v6.868H7.895v-1.54a.513.513 0 0 0-.512-.513H4.912a.513.513 0 0 0-.513.513v1.54H3.372zm6.794 6.867V8.08h1.772c.381 0 .69.31.69.691v3.007zm-4.742 0V10.75H6.87v1.028z"
                        })]
                    })
                },
                a = (0, n(104509).wt)("teamspaceSmall", o, "small")
        },
        271789: (e, t, n) => {
            n.d(t, {
                N: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "5 2.2 6.01 11.61",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6 4.2a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2M10 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2M6 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4 4.8a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
                    })
                },
                o = (0, n(104509).wt)("dragHandleSmall", i, "small")
        },
        283885: (e, t, n) => {
            n.d(t, {
                j: () => a
            }), n(296540);
            var i = n(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.07 1.87 14.06 12.26",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 1.875A6.125 6.125 0 0 0 1.875 8v1.08l-.736-.736a.625.625 0 1 0-.884.884l1.803 1.803c.244.244.64.244.884 0l1.803-1.803a.625.625 0 1 0-.884-.884l-.736.736V8a4.875 4.875 0 1 1 1.54 3.557.625.625 0 0 0-.854.911A6.125 6.125 0 1 0 8 1.875"
                        }), (0, i.jsx)("path", {
                            d: "M8 3.955a.625.625 0 0 0-.625.625V8c0 .345.28.625.625.625h2.88a.625.625 0 1 0 0-1.25H8.625V4.58A.625.625 0 0 0 8 3.955"
                        })]
                    })
                },
                a = (0, n(104509).wt)("clockArrowBackSmall", o, "small")
        },
        310585: (e, t, n) => {
            n.d(t, {
                H: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 1.77 11.26 12.46",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M13.625 4.186q0 .086-.01.168h.01v7.46c0 .502-.287.896-.615 1.173-.33.28-.773.503-1.264.678-.989.354-2.313.56-3.746.56s-2.757-.207-3.746-.56c-.491-.175-.933-.399-1.264-.678-.328-.277-.615-.67-.615-1.173v-7.46h.01a1 1 0 0 1-.01-.168c0-.502.287-.896.615-1.173.33-.28.773-.503 1.264-.679.989-.353 2.313-.56 3.746-.56s2.757.207 3.746.56c.491.176.933.4 1.264.679.328.277.615.67.615 1.173m-8.95-.674c-.414.147-.704.308-.879.456-.16.135-.17.21-.171.218 0 .007.011.082.171.217.175.148.465.31.879.457.82.293 1.997.486 3.325.486s2.504-.193 3.325-.486c.414-.148.704-.31.879-.457.168-.142.171-.217.171-.217s-.003-.076-.171-.218c-.175-.148-.465-.309-.879-.456-.82-.294-1.997-.487-3.325-.487s-2.504.193-3.325.487m7.07 2.525c-.988.353-2.312.56-3.745.56s-2.757-.207-3.746-.56a5 5 0 0 1-.629-.268V8c0 .008.01.083.171.218.175.148.465.31.879.457.82.293 1.997.487 3.325.487s2.504-.194 3.325-.487c.414-.148.704-.309.879-.457.16-.135.17-.21.171-.217V5.77q-.295.148-.63.267m-8.12 5.777c0 .007.01.082.171.218.175.148.465.309.879.456.82.294 1.997.487 3.325.487s2.504-.193 3.325-.487c.414-.147.704-.308.879-.456.16-.136.17-.21.171-.218v-2.23q-.295.149-.63.267c-.988.353-2.312.56-3.745.56s-2.757-.207-3.746-.56a5 5 0 0 1-.629-.267z"
                    })
                },
                o = (0, n(104509).wt)("collectionSmall", i, "small")
        },
        319472: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowUpDownFillSmallIcon: () => o,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.56 2.36 12.91 11.28",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4.343 11.075v-7.96a.75.75 0 1 1 1.5 0v7.96l1.518-1.518a.75.75 0 1 1 1.06 1.06l-2.797 2.799a.75.75 0 0 1-1.061 0l-2.798-2.798a.75.75 0 0 1 1.06-1.06zm7.094-8.491a.75.75 0 0 0-1.06 0l-2.8 2.798a.75.75 0 0 0 1.06 1.06l1.519-1.517v7.96a.75.75 0 0 0 1.5 0v-7.96l1.518 1.518a.75.75 0 1 0 1.06-1.06z"
                    })
                },
                o = (0, n(104509).wt)("arrowUpDownFillSmall", i, "fillSmall")
        },
        378567: (e, t, n) => {
            function i(e, t) {
                n(866321).V.update(n => ({ ...n,
                    activeShortcuts: ("boolean" == typeof t ? t : !n.activeShortcuts.includes(e)) ? [...n.activeShortcuts, e] : n.activeShortcuts.filter(t => t !== e)
                }))
            }

            function o(e) {
                n(866321).V.update(t => ({ ...t,
                    isPerformanceToolbarMounted: e
                }))
            }

            function a(e, t) {
                let i = [...n(866321).V.state.orderedWidgets],
                    [o] = i.splice(e, 1);
                i.splice(t, 0, o), n(866321).V.update(e => ({ ...e,
                    orderedWidgets: i
                }))
            }

            function r(e, t) {
                let i = [...n(866321).V.state.orderedShortcuts],
                    [o] = i.splice(e, 1);
                i.splice(t, 0, o), n(866321).V.update(e => ({ ...e,
                    orderedShortcuts: i
                }))
            }

            function s(e) {
                let t = n(866321).V.state,
                    i = t.enabledWidgets.includes(e) ? t.enabledWidgets.filter(t => t !== e) : [...t.enabledWidgets, e];
                n(866321).V.update(e => ({ ...e,
                    enabledWidgets: i
                }))
            }

            function l(e) {
                let t = n(866321).V.state,
                    i = t.enabledShortcuts.includes(e) ? t.enabledShortcuts.filter(t => t !== e) : [...t.enabledShortcuts, e];
                n(866321).V.update(e => ({ ...e,
                    enabledShortcuts: i
                }))
            }

            function c(e, t) {
                n(866321).V.update(n => ({ ...n,
                    widgetPopupVisibility: { ...n.widgetPopupVisibility,
                        [e]: t
                    }
                }))
            }

            function d(e, t) {
                n(866321).V.update(n => ({ ...n,
                    widgetPopupPosition: { ...n.widgetPopupPosition,
                        [e]: t
                    }
                }))
            }

            function p() {
                n(866321).V.update(e => ({ ...e,
                    widgetPopupPosition: n(997551).mn.reduce((e, t) => ({ ...e,
                        [t]: void 0
                    }), {})
                }))
            }

            function u(e) {
                n(866321).V.update(t => {
                    let n = t.widgetPopupStack.filter(t => t !== e);
                    return n.push(e), { ...t,
                        widgetPopupStack: n
                    }
                })
            }
            n.d(t, {
                ER: () => u,
                Gm: () => a,
                J_: () => o,
                Kv: () => r,
                PM: () => i,
                fE: () => l,
                iy: () => d,
                tp: () => c,
                xu: () => s,
                ys: () => p
            }), n(944114), n(898992), n(354520), n(908872)
        },
        451034: (e, t, n) => {
            n.r(t), n.d(t, {
                globeSmallIcon: () => o,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.94 12.11 12.1",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 1.95a6.05 6.05 0 1 1 0 12.1 6.05 6.05 0 0 1 0-12.1m-1.438 6.6c.048 1.194.25 2.247.539 3.016.167.445.353.766.532.967s.304.234.367.234.188-.033.367-.234c.179-.2.365-.522.532-.967.29-.77.491-1.822.54-3.016zm-3.481 0a4.95 4.95 0 0 0 3.326 4.137 5.4 5.4 0 0 1-.336-.734c-.343-.912-.562-2.1-.61-3.403zm7.458 0c-.048 1.303-.267 2.491-.61 3.403q-.15.396-.337.734a4.95 4.95 0 0 0 3.327-4.137zM6.407 3.312A4.95 4.95 0 0 0 3.081 7.45h2.38c.048-1.303.267-2.491.61-3.403q.149-.396.336-.734M8 3.234c-.063 0-.188.033-.367.234-.179.2-.365.523-.532.968-.29.77-.491 1.821-.54 3.015h2.877c-.048-1.194-.25-2.246-.539-3.015-.167-.445-.353-.767-.532-.968S8.063 3.233 8 3.233m1.592.08q.188.336.337.734c.343.912.562 2.1.61 3.403h2.38a4.95 4.95 0 0 0-3.327-4.137"
                    })
                },
                o = (0, n(104509).wt)("globeSmall", i, "small")
        },
        533229: (e, t, n) => {
            n.d(t, {
                _D: () => s,
                b0: () => r
            }), n(16280);
            var i = n(296540),
                o = n(474848);
            let a = (0, i.createContext)(void 0);

            function r({
                children: e
            }) {
                let t = (0, n(219255).B)();
                return (0, o.jsx)(a.Provider, {
                    value: t,
                    children: e
                })
            }

            function s() {
                let e = (0, i.useContext)(a);
                if (!e) throw Error("usePerformanceMetricsContext must be used within PerformanceMetricsProvider");
                return e
            }
            a.displayName = "PerformanceMetricsContext"
        },
        566025: (e, t, n) => {
            n.d(t, {
                w: () => a
            }), n(18107), n(967357);
            var i = () => n(546605);
            class o extends i().Store {
                getInitialState() {
                    return {
                        longestInteractionMap: new Map,
                        longestInteractionSortedList: [],
                        interactionCount: 0
                    }
                }
                incrementInteractionCount() {
                    this.state.interactionCount++
                }
                maybeAddDuration(e, t) {
                    let n = this.state.longestInteractionMap.get(e),
                        i = this.state.longestInteractionSortedList.at(-1);
                    if ((!n && this.state.longestInteractionMap.size < 10 || !n && i && t > i[1] || n && t > n) && (this.state.longestInteractionMap.set(e, t), this.state.longestInteractionSortedList = [...this.state.longestInteractionMap.entries()].sort((e, t) => t[1] - e[1]), this.state.longestInteractionSortedList.length > 10))
                        for (let e of this.state.longestInteractionSortedList.splice(10)) this.state.longestInteractionMap.delete(e[0])
                }
                getP98INPDuration() {
                    if (!this.state.longestInteractionMap.size) return;
                    let e = Math.min(this.state.longestInteractionSortedList.length - 1, Math.floor(this.state.interactionCount / 50));
                    return this.state.longestInteractionSortedList[e][1]
                }
            }
            let a = new o;
            (0, n(202146).exposeDebugValue)("interactionToNextPaintStore", a)
        },
        643189: (e, t, n) => {
            n.d(t, {
                z: () => o
            }), n(898992), n(908872);
            var i = n(296540);

            function o(e = 300) {
                let [t, n] = (0, i.useState)([]), a = (0, i.useRef)([]), r = (0, i.useRef)(performance.now()), s = (0, i.useRef)(0), l = (0, i.useRef)(0);
                return (0, i.useEffect)(() => {
                    function t() {
                        document.hidden || (r.current = performance.now(), s.current = 0)
                    }
                    return document.addEventListener("visibilitychange", t), l.current = requestAnimationFrame(function t() {
                        if (document.hidden) {
                            l.current = requestAnimationFrame(t);
                            return
                        }
                        let i = performance.now();
                        s.current += 1;
                        let o = i - r.current;
                        o >= 500 && (a.current = [Math.round(1e3 * s.current / o), ...a.current].slice(0, e), n([...a.current]), s.current = 0, r.current = i), l.current = requestAnimationFrame(t)
                    }), () => {
                        document.removeEventListener("visibilitychange", t), l.current > 0 && cancelAnimationFrame(l.current)
                    }
                }, [e]), {
                    fpsHistory: t,
                    ...t.length >= 1 && {
                        fps: t[0],
                        maxFps: Math.max(...t),
                        minFps: Math.min(...t),
                        avgFps: t.reduce((e, t) => e + t, 0) / t.length
                    }
                }
            }
        },
        692493: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => o,
                pageFillSmallIcon: () => a
            }), n(296540);
            var i = n(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.45 2.2 9.11 11.61",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.804 2.2H5.125c-.925 0-1.675.75-1.675 1.675v8.25c0 .925.75 1.675 1.675 1.675h5.75c.925 0 1.675-.75 1.675-1.675V6.906H9.504a1.7 1.7 0 0 1-1.7-1.7zm2.946 9.05a.5.5 0 0 1-.5.5h-4.5a.5.5 0 0 1 0-1h4.5a.5.5 0 0 1 .5.5m-.5-1.5h-4.5a.5.5 0 0 1 0-1h4.5a.5.5 0 1 1 0 1"
                        }), (0, i.jsx)("path", {
                            d: "M12.404 5.906a1.7 1.7 0 0 0-.345-.5L9.343 2.692a1.7 1.7 0 0 0-.54-.362v2.877a.7.7 0 0 0 .7.7z"
                        })]
                    })
                },
                a = (0, n(104509).wt)("pageFillSmall", o, "fillSmall")
        },
        802942: (e, t, n) => {
            n.d(t, {
                k: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.18 1.73 11.64 12.54",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.435 1.735c-.875 0-1.585.71-1.585 1.585v.735H3.765c-.875 0-1.585.71-1.585 1.585v7.04c0 .875.71 1.585 1.585 1.585h4.8c.876 0 1.585-.71 1.585-1.585v-.735h2.085c.876 0 1.585-.71 1.585-1.585V5.638c0-.42-.167-.824-.464-1.121l-2.318-2.318a1.6 1.6 0 0 0-1.12-.464zM7.1 3.32c0-.185.15-.335.335-.335H9.58V4.44c0 .848.687 1.535 1.535 1.535h1.455v4.385c0 .185-.15.335-.335.335H10.15V7.958c0-.42-.167-.824-.464-1.121L7.368 4.519a1.6 1.6 0 0 0-.268-.215zm3.63 1.12v-.781l1.166 1.166h-.78a.385.385 0 0 1-.386-.385m-7.3 1.2c0-.185.15-.335.335-.335H5.91V6.76c0 .848.687 1.535 1.535 1.535H8.9v4.385c0 .185-.15.335-.335.335h-4.8a.335.335 0 0 1-.335-.335zm3.63 1.12v-.781l1.166 1.166h-.78a.385.385 0 0 1-.386-.385"
                    })
                },
                o = (0, n(104509).wt)("docOnDocSmall", i, "small")
        },
        814812: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                presentSmallIcon: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.05 1.29 11.9 12.66",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.575 3.628A2.337 2.337 0 0 1 6.37 1.337l.056.01a2.73 2.73 0 0 1 1.584.956c.4-.484.961-.835 1.61-.964 1.441-.289 2.805.81 2.805 2.29 0 .392-.097.761-.268 1.086h.403c.765 0 1.385.62 1.385 1.385v1.52c0 .511-.277.958-.69 1.198v3.742c0 .765-.62 1.385-1.384 1.385H4.128c-.765 0-1.385-.62-1.385-1.385V8.818a1.38 1.38 0 0 1-.688-1.198V6.1c0-.765.62-1.385 1.385-1.385h.402a2.3 2.3 0 0 1-.267-1.087m5.05 2.337v1.79h3.935c.074 0 .135-.06.135-.135V6.1a.135.135 0 0 0-.135-.135zm-1.25 0H3.44a.135.135 0 0 0-.135.135v1.52c0 .075.06.135.135.135h3.935zm2.722-1.25a1.087 1.087 0 0 0 1.078-1.087c0-.68-.632-1.2-1.31-1.064-.72.144-1.24.777-1.24 1.505v.646zM6.125 2.562a1.087 1.087 0 1 0-.213 2.153h1.463V4.03c0-.708-.5-1.318-1.194-1.456zm2.5 6.443v3.69h3.246c.074 0 .135-.06.135-.135V9.005zm-1.25 0H3.993v3.555c0 .075.06.135.135.135h3.247z"
                    })
                },
                o = (0, n(104509).wt)("presentSmall", i, "small")
        },
        866321: (e, t, n) => {
            n.d(t, {
                V: () => l
            }), n(898992), n(354520), n(581454), n(908872);
            var i = () => n(546605);
            let o = new(n(245541)).R({
                    key: "performanceToolbar",
                    namespace: n(274919).Bq,
                    important: !0,
                    trackingType: "necessary"
                }),
                a = [...n(997551).mn],
                r = [...n(997551).Yt];
            class s extends i().Store {
                getInitialState() {
                    return {
                        isMouseNearPerformanceToolbar: !1,
                        isPerformanceToolbarMounted: !1,
                        widgetPopupVisibility: a.reduce((e, t) => ({ ...e,
                            [t]: "not_showing"
                        }), {}),
                        widgetPopupPosition: a.reduce((e, t) => ({ ...e,
                            [t]: void 0
                        }), {}),
                        widgetPopupStack: a,
                        orderedWidgets: a,
                        enabledWidgets: a.filter(e => (0, n(155263).Rx)(e).isEnabled),
                        orderedShortcuts: r,
                        enabledShortcuts: r.filter(e => (0, n(155263).ZK)(e).isEnabled),
                        activeShortcuts: r.filter(e => {
                            var t, i;
                            return null == (t = (i = (0, n(155263).ZK)(e)).isInitiallyActive) ? void 0 : t.call(i)
                        }).map(e => e)
                    }
                }
                constructor() {
                    super();
                    const e = n(363256).e.withListenerIgnored(() => o.getState());
                    if (e) {
                        const t = this.getInitialState(),
                            i = a.filter(e => (0, n(155263).Rx)(e).isForced),
                            o = r.filter(e => (0, n(155263).ZK)(e).isForced);
                        super.setState({
                            isMouseNearPerformanceToolbar: t.isMouseNearPerformanceToolbar,
                            isPerformanceToolbarMounted: t.isPerformanceToolbarMounted,
                            widgetPopupVisibility: (0, n(47879).V8)(t.widgetPopupVisibility, e.widgetPopupVisibility, a),
                            widgetPopupPosition: (0, n(47879).V8)(t.widgetPopupPosition, e.widgetPopupPosition, a),
                            widgetPopupStack: (0, n(47879).BN)(t.widgetPopupStack, e.widgetPopupStack, a),
                            orderedWidgets: (0, n(47879).BN)(t.orderedWidgets, e.orderedWidgets, a),
                            enabledWidgets: (0, n(47879).BN)(i, e.enabledWidgets, a),
                            orderedShortcuts: (0, n(47879).BN)(t.orderedShortcuts, e.orderedShortcuts, r),
                            enabledShortcuts: (0, n(47879).BN)(o, e.enabledShortcuts, r),
                            activeShortcuts: (0, n(47879).BN)(t.activeShortcuts, e.activeShortcuts, r)
                        })
                    }
                }
                setState(e) {
                    super.setState(e), o.setState(e)
                }
                reset() {
                    let e = this.getInitialState();
                    this.update(t => ({ ...e,
                        activeShortcuts: t.activeShortcuts,
                        isPerformanceToolbarMounted: t.isPerformanceToolbarMounted
                    }))
                }
            }
            let l = new s
        },
        895500: (e, t, n) => {
            n.r(t), n.d(t, {
                bubbleEllipsesSmallIcon: () => a,
                iconDefinition: () => o
            }), n(296540);
            var i = n(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.19 3.04 11.61 11.55",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M6.229 7.6a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0m1.9.7a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4m2.6 0a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4"
                        }), (0, i.jsx)("path", {
                            d: "M13.8 4.85a1.8 1.8 0 0 0-1.8-1.8H4a1.8 1.8 0 0 0-1.8 1.8v5.5a1.8 1.8 0 0 0 1.8 1.8h.54v1.897a.55.55 0 0 0 .898.427l2.86-2.324H12a1.8 1.8 0 0 0 1.8-1.8zm-1.8-.7a.7.7 0 0 1 .7.7v5.5a.7.7 0 0 1-.7.7H8.102a.55.55 0 0 0-.347.123l-2.114 1.718V11.6a.55.55 0 0 0-.55-.55H4a.7.7 0 0 1-.7-.7v-5.5a.7.7 0 0 1 .7-.7z"
                        })]
                    })
                },
                a = (0, n(104509).wt)("bubbleEllipsesSmall", o, "small")
        },
        987349: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowLeftRightFillIcon: () => o,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.01 1.99 13.97 16.02",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.274 5.748a.875.875 0 0 0 0 1.237l3.498 3.498a.875.875 0 0 0 1.237-1.237L6.005 7.242h10.102a.875.875 0 0 0 0-1.75H6.005L8.01 3.488A.875.875 0 1 0 6.772 2.25zM11.99 17.75a.875.875 0 0 1 0-1.238l2.005-2.004H3.893a.875.875 0 0 1 0-1.75h10.102l-2.004-2.004a.875.875 0 1 1 1.237-1.237l3.498 3.498a.875.875 0 0 1 0 1.237l-3.498 3.498a.875.875 0 0 1-1.237 0"
                    })
                },
                o = (0, n(104509).wt)("arrowLeftRightFill", i, "fill")
        },
        997551: (e, t, n) => {
            n.d(t, {
                G8: () => r,
                Yt: () => s,
                a7: () => o,
                mn: () => i
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            let i = ["environment", "version", "frames_per_second", "memory", "initial_page_render", "navigation_page_render", "initial_database_items_visible", "collections.navigation_items_visible", "computed_store_count", "typing_lag", "message_store__connected", "dependency_loading", "initial_page_rendered_blocks", "navigation_page_rendered_blocks", "interaction_to_next_paint"],
                o = ["initial_page_render", "page_origin_to_app_start", "app_start_to_main_start", "main_start_to_prefetch_initiated", "prefetch_initiated_to_statsig_bootup_blocking_start", "statsig_bootup_blocking", "render_start_to_render_end", "render_end_to_await_page_chunk_start", "await_page_chunk_start_to_await_page_chunk_end", "await_page_chunk_end_to_browser_repaint_start", "initial_page_rendered_blocks", "initial_database_items_visible", "collections.await_page_chunk_end_to_cvb_start", "collections.cvb_start_to_cvb_mount", "collections.cvb_mount_to_items_start", "collections.items_start_to_items_visible", "collections.navigation_items_visible", "collection_view_block_bundle_load_and_parse", "navigation_page_render", "navigation_database_render", "navigation_page_rendered_blocks", "typing_lag", "typing_delete", "typing_backspace", "typing_enter", "typing_tab", "typing_untab"];
            [...o];
            let a = new Set(o);

            function r(e) {
                return a.has(e)
            }
            let s = ["pin", "settings", "uidoc", "experiments", "reset_popups", "copy_ids", "toggle_theme", "toggle_high_contrast", "toggle_content_reskin", "toggle_rtl_dir", "language_picker"]
        }
    }
]);