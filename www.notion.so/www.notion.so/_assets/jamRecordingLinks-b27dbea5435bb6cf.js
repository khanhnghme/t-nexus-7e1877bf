"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [98213], {
        129961: (e, t, r) => {
            function n() {
                let e = new EventTarget;
                return {
                    addEventListener(t, r, n) {
                        e.addEventListener(t, r, n)
                    },
                    removeEventListener(t, r, n) {
                        e.removeEventListener(t, r, n)
                    },
                    dispatch: (t, r) => e.dispatchEvent(new CustomEvent(t, {
                        detail: r
                    }))
                }
            }
            r.r(t), r.d(t, {
                Recorder: () => l,
                addEventListener: () => d,
                initialize: () => p,
                isInitialized: () => c,
                loadRecorder: () => u,
                removeEventListener: () => s
            });
            let i = e => {
                    try {
                        let t = new URL(e);
                        return {
                            recordingId: t.searchParams.get("jam-recording"),
                            jamTitle: t.searchParams.get("jam-title")
                        }
                    } catch (e) {}
                    return null
                },
                a = {
                    isInitialized: !1
                },
                o = n(),
                d = o.addEventListener.bind(o),
                s = o.removeEventListener.bind(o),
                c = () => a.isInitialized,
                l = null;

            function p({
                recorderRefCounter: e = (e => {
                    let t = `jam:${e}`,
                        r = n(),
                        i = Number.parseInt(localStorage.getItem(t) ? ? "0", 10) || 0;
                    return window.addEventListener("storage", e => {
                        if (e.storageArea === localStorage && e.key === t) {
                            let t = Number.parseInt(e.newValue ? ? "", 10);
                            Number.isNaN(t) || t === i || (i = t, r.dispatch("update", i))
                        }
                    }), {
                        count: i,
                        addEventListener: r.addEventListener.bind(r),
                        removeEventListener: r.removeEventListener.bind(r),
                        update(e) {
                            let n = i;
                            switch (e) {
                                case "increment":
                                    i += 1;
                                    break;
                                case "decrement":
                                    i -= 1;
                                    break;
                                default:
                                    i = e
                            }
                            return i < 0 && (i = 0), i !== n && (localStorage.setItem(t, `${i}`), r.dispatch("update", i)), i
                        }
                    }
                })("numRecorders"),
                ...t
            } = {}) {
                if (a.isInitialized) throw Error("SDK already initialized.");
                Object.assign(a, {
                    isInitialized: !0,
                    recorderRefCounter: e,
                    config: t
                }), e.count > 0 ? m("capture") : e.addEventListener("update", () => m("capture"), {
                    once: !0
                }), window.addEventListener("popstate", o);
                let r = {
                    apply(e, t, r) {
                        let n = Reflect.apply(e, t, r);
                        return o(), n
                    }
                };

                function o() {
                    if (l) return;
                    let e = a.config ? .parseJamData ? ? i,
                        t = "string" == typeof a.config ? .openImmediately ? a.config.openImmediately : e(window.location.href) ? .recordingId;
                    t && u({
                        openImmediately: !1 !== a.config ? .openImmediately && t
                    })
                }
                history.pushState = new Proxy(history.pushState, r), history.replaceState = new Proxy(history.replaceState, r), o()
            }
            async function u({ ...e
            } = {}) {
                if (l) return l;
                if (!a.isInitialized) throw Error("SDK not initialized. Call initialize() first.");
                if ({
                        Recorder: l
                    } = await m("recorder"), !l) throw Error("Failed to load recorder script.");
                let {
                    openImmediately: t,
                    ...r
                } = { ...a.config,
                    ...e
                }, n = "string" == typeof t ? t : null;
                return l.initialize({ ...r,
                    openImmediately: !n && (t ? ? !0)
                }), a.recorderRefCounter.update("increment"), window.addEventListener("pagehide", () => {
                    a.recorderRefCounter.update("decrement")
                }), n && l.open(n, r), l
            }
            async function m(e) {
                let t = `https://js.jam.dev/${e}.js`,
                    r = await
                import (t);
                if ("recorder" === e) {
                    if (!r.Recorder) throw Error("Loaded recorder script, but Recorder not found.");
                    o.dispatch("loaded", {
                        type: "script",
                        name: e,
                        Recorder: r.Recorder
                    })
                } else o.dispatch("loaded", {
                    type: "script",
                    name: e
                });
                return r
            }
        }
    }
]);