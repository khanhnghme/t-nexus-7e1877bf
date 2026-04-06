"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [35818], {
        113555: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => i
            });
            var o = t(296540),
                s = t(474848);
            let i = o.memo(function() {
                let e = (0, t(682985).K8)(() => t(378736).A.state.open ? t(378736).A.state : void 0, []),
                    n = (0, o.useCallback)(() => {
                        var e;
                        let n = t(378736).A.state;
                        n.open && (null == (e = n.onDismiss) || e.call(n), t(640133).l())
                    }, []);
                return e ? (0, s.jsx)(t(556809).a, {
                    open: !!(null == e ? void 0 : e.open),
                    onDismiss: n,
                    children: e ? (0, s.jsx)(t(578786).A, { ...e
                    }) : void 0
                }) : null
            })
        },
        378736: (e, n, t) => {
            t.d(n, {
                A: () => i
            });
            var o = () => t(546605);
            class s extends o().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let i = new s
        },
        640133: (e, n, t) => {
            async function o(e) {
                return t(378736).A.state.open ? Promise.resolve(void 0) : new Promise(n => {
                    var o;
                    o = { ...e,
                        onConfirm: e => (s(), n(e)),
                        onDismiss: () => (s(), n(void 0))
                    }, t(378736).A.setState({ ...o,
                        open: !0
                    })
                })
            }

            function s() {
                t(378736).A.reset()
            }
            t.d(n, {
                f: () => o,
                l: () => s
            })
        }
    }
]);