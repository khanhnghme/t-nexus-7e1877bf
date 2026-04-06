"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [2703], {
        827778: (e, n, i) => {
            i.r(n), i.d(n, {
                ChatSidebar: () => u,
                DockedSidebar: () => l().DockedSidebar
            });
            var t, a = i(296540),
                l = () => i(707709),
                o = i(474848);
            let u = (t = function({
                aiChatFeature: e
            }) {
                let n = (0, i(548124).useChatPanelState)(),
                    t = (0, i(533992).Y0)(),
                    u = (0, a.useMemo)(() => new(i(558208)).rz, []),
                    {
                        visibility: r,
                        mode: s,
                        onDismissed: c,
                        isOpen: d
                    } = (0, i(830949).c)(),
                    h = (0, i(181347).yr)();
                return ((0, i(383953).w)(() => {
                    let e = h.chatPanelMode;
                    t.isTablet && (e = "popup"), i(562733).zI.update(n => ({ ...n,
                        chatPanelMode: e
                    }))
                }), (0, a.useEffect)(() => {
                    null != n && n.isOpen && "closed" === r ? i(562733).zI.update(e => ({ ...e,
                        chatPanelVisibility: "opening"
                    })) : null != n && n.isOpen || "open" !== r || (i(562733).zI.update(e => ({ ...e,
                        chatPanelVisibility: "closing"
                    })), c())
                }, [n, r, c, d]), "closed" === r || !n || t.isPhone) ? null : (0, o.jsx)(i(558208).XN.Provider, {
                    value: u,
                    children: (0, o.jsx)(l().DockedSidebar, {
                        aiChatFeature: e,
                        visibility: r,
                        routeData: n,
                        mode: s,
                        fromSurface: "corner"
                    })
                })
            }, function(e) {
                return (0, i(533992).Y0)().isPhone ? null : (0, o.jsx)(t, { ...e
                })
            })
        }
    }
]);