"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [45562], {
        277179: (e, a, t) => {
            t.d(a, {
                d: () => n
            });
            let i = {
                socialMediaPreviewImageActions: new(t(815048)).O2("socialMediaPreviewImageActions", () => Promise.all([t.e(17250), t.e(23644), t.e(54236)]).then(t.bind(t, 621928)))
            };
            async function n(e) {
                return await i.socialMediaPreviewImageActions.load().then(a => a.generateImage(e))
            }
        },
        580005: (e, a, t) => {
            t.r(a), t.d(a, {
                GenerateSocialMediaPreviewImageWrapper: () => n
            });
            var i = t(296540);

            function n(e) {
                let {
                    store: a
                } = e;
                return ! function(e) {
                    let a = (0, t(533992).v3)(),
                        [n, r] = (0, i.useState)("uninitialized"),
                        [o, d, l, s, u] = (0, t(682985).K8)(() => {
                            var i, n;
                            return e.pathIsDead() || "on" !== t(218744).default.getEligibleGroup({
                                experimentId: "dynamic_social_preview_image",
                                defaultGroup: "unassigned"
                            }) || e.inMemoryRecordCache.recordHasOverride({
                                pointer: e.pointer,
                                userId: a.currentUser.id
                            }) ? [!1] : [e.isReady(), t(247438).q4_(e.getTitleValue()), null == (i = e.getIcon()) ? void 0 : i.icon, null == (n = e.getCover()) ? void 0 : n.cover, e.getFormat().page_font]
                        }, [a.currentUser.id, e]);
                    (0, i.useEffect)(() => {
                        "storeReady" === n ? r("generateImage") : o && r("storeReady")
                    }, [o, d, l, s, u]);
                    let c = (0, i.useMemo)(() => (0, t(381453).sg)(() => {
                        r("storeReady"), (0, t(277179).d)({
                            environment: a,
                            store: e
                        })
                    }, 5e3), [a, e]);
                    (0, t(682985).K8)(() => {
                        "generateImage" === n && (t(358377).default.state, c())
                    }, [n, c])
                }(a), null
            }
        }
    }
]);