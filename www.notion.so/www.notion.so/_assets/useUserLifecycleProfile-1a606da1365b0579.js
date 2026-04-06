"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [2302], {
        611382: (e, r, t) => {
            t.r(r), t.d(r, {
                useUserLifecycleProfile: () => a
            }), t(16280);
            var s = t(296540);
            async function n(e) {
                let {
                    environment: r,
                    userId: t
                } = e, s = await r.api.callApi({
                    eventName: "getLifecycleUserProfile",
                    environment: r,
                    data: {
                        userId: t
                    }
                });
                if ("success" === s.type && s.data.success && "userProfile" in s.data) return s.data.userProfile
            }

            function a() {
                let e = (0, t(533992).v3)(),
                    r = (0, t(345776).T)();
                (0, s.useEffect)(() => {
                    (async () => {
                        if (!r) return t(529119).k.setError("No current user", "");
                        if (t(529119).k.needsFetch(r)) {
                            t(529119).k.setLoading(!0, r);
                            try {
                                let s = await n({
                                    environment: e,
                                    userId: r
                                });
                                t(529119).k.setProfile(s || null, r)
                            } catch (s) {
                                let e = s instanceof Error ? s.message : "Unknown error";
                                t(529119).k.setError(e, r)
                            }
                        }
                    })()
                }, [e, r])
            }
        }
    }
]);