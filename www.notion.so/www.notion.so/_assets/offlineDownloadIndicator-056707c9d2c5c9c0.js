"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [71739], {
        672: (a, e, t) => {
            t.r(e), t.d(e, {
                OfflineDownloadIndicator: () => s
            });
            var l = t(296540),
                n = t(474848);
            let o = (0, t(109939).YK)({
                    downloadFailed: {
                        id: "offline.downloadIndicator.failed",
                        defaultMessage: "Couldn’t make this page available offline"
                    }
                }),
                i = {
                    background: "inherit"
                },
                d = {
                    top: -9
                };

            function s({
                blockStore: a
            }) {
                let e = (0, t(533992).v3)(),
                    r = (0, t(109939).tz)(),
                    c = (0, t(556583).y)(),
                    u = (0, t(682985).O$)(t(205885).e),
                    [f, g] = (0, l.useState)(!1),
                    h = (0, t(682985).K8)(() => {
                        var e;
                        if (!(0, t(597845).fF)(a.id)) return;
                        let l = null == (e = t(987458).A.state.offlinePages) ? void 0 : e[a.id];
                        return null == l ? void 0 : l.download_status
                    }, [a.id]),
                    v = (0, l.useCallback)(() => {
                        u && (g(!0), (0, t(964743).lX)({
                            store: a,
                            environment: e,
                            analyticsFrom: "topbar",
                            operation: "addPage"
                        }).then(() => {
                            g(!1)
                        }).catch(() => {
                            g(!1)
                        }))
                    }, [u, a, e]);
                return c && "failed" === h ? (0, n.jsx)(t(51831).m, {
                    alignment: "start",
                    placement: "right",
                    content: () => r.formatMessage(o.downloadFailed),
                    style: d,
                    children: a => (0, n.jsx)(t(988022).p, { ...a,
                        ariaLabel: r.formatMessage(o.downloadFailed),
                        disabled: f || !u,
                        hoveredStyle: i,
                        iconLeading: f ? void 0 : {
                            icon: t(602445).k,
                            size: "lg",
                            colorVariant: "secondary"
                        },
                        isLoading: f,
                        onClick: v
                    })
                }) : null
            }
        },
        602445: (a, e, t) => {
            t.d(e, {
                k: () => o
            }), t(296540);
            var l = t(474848);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.27 3.53 17.42 12.94",
                    svg: (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("path", {
                            d: "M10.375 6.775c.345 0 .625.28.625.625v3.15a.625.625 0 1 1-1.25 0V7.4c0-.345.28-.625.625-.625m0 6.775a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
                        }), (0, l.jsx)("path", {
                            d: "M4.066 8.914a6.477 6.477 0 0 1 12.859 1.029 3.494 3.494 0 0 1-1.725 6.532H5.121a3.855 3.855 0 0 1-1.056-7.56m6.384-4.14a5.226 5.226 0 0 0-5.2 4.716l-.047.482-.48.075a2.605 2.605 0 0 0 .406 5.178H15.2a2.244 2.244 0 0 0 .853-4.32l-.41-.169.024-.443q.008-.146.008-.293a5.225 5.225 0 0 0-5.225-5.225"
                        })]
                    })
                },
                o = (0, t(104509).wt)("cloudExclamation", n, "default")
        }
    }
]);