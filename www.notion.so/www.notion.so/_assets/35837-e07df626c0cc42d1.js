"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [35837, 70216], {
        5793: (e, t, r) => {
            r.d(t, {
                F: () => o
            });
            var n = r(296540);

            function o({
                children: e,
                features: t,
                strict: i = !1
            }) {
                let [, s] = (0, n.useState)(!a(t)), l = (0, n.useRef)(void 0);
                if (!a(t)) {
                    let {
                        renderer: e,
                        ...n
                    } = t;
                    l.current = e, (0, r(852194).Y)(n)
                }
                return (0, n.useEffect)(() => {
                    a(t) && t().then(({
                        renderer: e,
                        ...t
                    }) => {
                        (0, r(852194).Y)(t), l.current = e, s(!0)
                    })
                }, []), n.createElement(r(866048).Y.Provider, {
                    value: {
                        renderer: l.current,
                        strict: i
                    }
                }, e)
            }

            function a(e) {
                return "function" == typeof e
            }
        },
        7411: (e, t, r) => {
            r.d(t, {
                l: () => n
            });
            let n = {
                renderer: r(104355).J,
                ...r(337807).W,
                ...r(720128).n
            }
        },
        188137: (e, t, r) => {
            function n() {
                let e = (0, r(328601).M)(r(523514).L);
                return (0, r(525128).E)(e.mount, []), e
            }
            r.d(t, {
                E: () => n,
                s: () => o
            });
            let o = n
        },
        412681: (e, t, r) => {
            function n(e) {
                let t = new Uint8Array(e),
                    r = "";
                for (let e of t) r += String.fromCharCode(e);
                return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }

            function o(e) {
                let t = e.replace(/-/g, "+").replace(/_/g, "/"),
                    r = (4 - t.length % 4) % 4,
                    n = atob(t.padEnd(t.length + r, "=")),
                    o = new ArrayBuffer(n.length),
                    a = new Uint8Array(o);
                for (let e = 0; e < n.length; e++) a[e] = n.charCodeAt(e);
                return o
            }

            function a() {
                return window ? .PublicKeyCredential !== void 0 && "function" == typeof window.PublicKeyCredential
            }

            function i(e) {
                let {
                    id: t
                } = e;
                return { ...e,
                    id: o(t),
                    transports: e.transports
                }
            }

            function s(e) {
                return "localhost" === e || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)
            }
            r.d(t, {
                HS: () => E,
                startRegistration: () => h
            });
            class l extends Error {
                constructor({
                    message: e,
                    code: t,
                    cause: r,
                    name: n
                }) {
                    super(e, {
                        cause: r
                    }), this.name = n ? ? r.name, this.code = t
                }
            }
            let c = new class {
                    createNewAbortSignal() {
                        if (this.controller) {
                            let e = Error("Cancelling existing WebAuthn API call for new one");
                            e.name = "AbortError", this.controller.abort(e)
                        }
                        let e = new AbortController;
                        return this.controller = e, e.signal
                    }
                    cancelCeremony() {
                        if (this.controller) {
                            let e = Error("Manually cancelling existing WebAuthn API call");
                            e.name = "AbortError", this.controller.abort(e), this.controller = void 0
                        }
                    }
                },
                u = ["cross-platform", "platform"];

            function d(e) {
                if (e && !(0 > u.indexOf(e))) return e
            }
            async function h(e) {
                var t;
                let r, u, h, E, R;
                if (!a()) throw Error("WebAuthn is not supported in this browser");
                let w = {
                    publicKey: { ...e,
                        challenge: o(e.challenge),
                        user: { ...e.user,
                            id: (t = e.user.id, new TextEncoder().encode(t))
                        },
                        excludeCredentials: e.excludeCredentials ? .map(i)
                    }
                };
                w.signal = c.createNewAbortSignal();
                try {
                    r = await navigator.credentials.create(w)
                } catch (e) {
                    throw function({
                        error: e,
                        options: t
                    }) {
                        let {
                            publicKey: r
                        } = t;
                        if (!r) throw Error("options was missing required publicKey property");
                        if ("AbortError" === e.name) {
                            if (t.signal instanceof AbortSignal) return new l({
                                message: "Registration ceremony was sent an abort signal",
                                code: "ERROR_CEREMONY_ABORTED",
                                cause: e
                            })
                        } else if ("ConstraintError" === e.name) {
                            if (r.authenticatorSelection ? .requireResidentKey === !0) return new l({
                                message: "Discoverable credentials were required but no available authenticator supported it",
                                code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
                                cause: e
                            });
                            else if (r.authenticatorSelection ? .userVerification === "required") return new l({
                                message: "User verification was required but no available authenticator supported it",
                                code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
                                cause: e
                            })
                        } else if ("InvalidStateError" === e.name) return new l({
                            message: "The authenticator was previously registered",
                            code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
                            cause: e
                        });
                        else if ("NotAllowedError" === e.name) return new l({
                            message: e.message,
                            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                            cause: e
                        });
                        else if ("NotSupportedError" === e.name) return new l(0 === r.pubKeyCredParams.filter(e => "public-key" === e.type).length ? {
                            message: 'No entry in pubKeyCredParams was of type "public-key"',
                            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
                            cause: e
                        } : {
                            message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
                            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
                            cause: e
                        });
                        else if ("SecurityError" === e.name) {
                            let t = window.location.hostname;
                            if (!s(t)) return new l({
                                message: `${window.location.hostname} is an invalid domain`,
                                code: "ERROR_INVALID_DOMAIN",
                                cause: e
                            });
                            if (r.rp.id !== t) return new l({
                                message: `The RP ID "${r.rp.id}" is invalid for this domain`,
                                code: "ERROR_INVALID_RP_ID",
                                cause: e
                            })
                        } else if ("TypeError" === e.name) {
                            if (r.user.id.byteLength < 1 || r.user.id.byteLength > 64) return new l({
                                message: "User ID was not between 1 and 64 characters",
                                code: "ERROR_INVALID_USER_ID_LENGTH",
                                cause: e
                            })
                        } else if ("UnknownError" === e.name) return new l({
                            message: "The authenticator was unable to process the specified options, or could not create a new credential",
                            code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                            cause: e
                        });
                        return e
                    }({
                        error: e,
                        options: w
                    })
                }
                if (!r) throw Error("Registration was not completed");
                let {
                    id: g,
                    rawId: p,
                    response: m,
                    type: A
                } = r;
                if ("function" == typeof m.getTransports && (h = m.getTransports()), "function" == typeof m.getPublicKeyAlgorithm) try {
                    E = m.getPublicKeyAlgorithm()
                } catch (e) {
                    f("getPublicKeyAlgorithm()", e)
                }
                if ("function" == typeof m.getPublicKey) try {
                    let e = m.getPublicKey();
                    null !== e && (R = n(e))
                } catch (e) {
                    f("getPublicKey()", e)
                }
                if ("function" == typeof m.getAuthenticatorData) try {
                    u = n(m.getAuthenticatorData())
                } catch (e) {
                    f("getAuthenticatorData()", e)
                }
                return {
                    id: g,
                    rawId: n(p),
                    response: {
                        attestationObject: n(m.attestationObject),
                        clientDataJSON: n(m.clientDataJSON),
                        transports: h,
                        publicKeyAlgorithm: E,
                        publicKey: R,
                        authenticatorData: u
                    },
                    type: A,
                    clientExtensionResults: r.getClientExtensionResults(),
                    authenticatorAttachment: d(r.authenticatorAttachment)
                }
            }

            function f(e, t) {
                console.warn(`The browser extension that intercepted this WebAuthn API call incorrectly implemented ${e}. You should report this error to them.
`, t)
            }
            async function E(e, t = !1) {
                var r;
                let u, h, f;
                if (!a()) throw Error("WebAuthn is not supported in this browser");
                e.allowCredentials ? .length !== 0 && (u = e.allowCredentials ? .map(i));
                let R = { ...e,
                        challenge: o(e.challenge),
                        allowCredentials: u
                    },
                    w = {};
                if (t) {
                    let e;
                    if (!await (void 0 === (e = window.PublicKeyCredential).isConditionalMediationAvailable ? new Promise(e => e(!1)) : e.isConditionalMediationAvailable())) throw Error("Browser does not support WebAuthn autofill");
                    if (document.querySelectorAll("input[autocomplete$='webauthn']").length < 1) throw Error('No <input> with "webauthn" as the only or last value in its `autocomplete` attribute was detected');
                    w.mediation = "conditional", R.allowCredentials = []
                }
                w.publicKey = R, w.signal = c.createNewAbortSignal();
                try {
                    h = await navigator.credentials.get(w)
                } catch (e) {
                    throw function({
                        error: e,
                        options: t
                    }) {
                        let {
                            publicKey: r
                        } = t;
                        if (!r) throw Error("options was missing required publicKey property");
                        if ("AbortError" === e.name) {
                            if (t.signal instanceof AbortSignal) return new l({
                                message: "Authentication ceremony was sent an abort signal",
                                code: "ERROR_CEREMONY_ABORTED",
                                cause: e
                            })
                        } else if ("NotAllowedError" === e.name) return new l({
                            message: e.message,
                            code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
                            cause: e
                        });
                        else if ("SecurityError" === e.name) {
                            let t = window.location.hostname;
                            if (!s(t)) return new l({
                                message: `${window.location.hostname} is an invalid domain`,
                                code: "ERROR_INVALID_DOMAIN",
                                cause: e
                            });
                            if (r.rpId !== t) return new l({
                                message: `The RP ID "${r.rpId}" is invalid for this domain`,
                                code: "ERROR_INVALID_RP_ID",
                                cause: e
                            })
                        } else if ("UnknownError" === e.name) return new l({
                            message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
                            code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
                            cause: e
                        });
                        return e
                    }({
                        error: e,
                        options: w
                    })
                }
                if (!h) throw Error("Authentication was not completed");
                let {
                    id: g,
                    rawId: p,
                    response: m,
                    type: A
                } = h;
                return m.userHandle && (r = m.userHandle, f = new TextDecoder("utf-8").decode(r)), {
                    id: g,
                    rawId: n(p),
                    response: {
                        authenticatorData: n(m.authenticatorData),
                        clientDataJSON: n(m.clientDataJSON),
                        signature: n(m.signature),
                        userHandle: f
                    },
                    type: A,
                    clientExtensionResults: h.getClientExtensionResults(),
                    authenticatorAttachment: d(h.authenticatorAttachment)
                }
            }
        },
        523514: (e, t, r) => {
            r.d(t, {
                L: () => n
            });

            function n() {
                let e = !1,
                    t = new Set,
                    n = {
                        subscribe: e => (t.add(e), () => void t.delete(e)),
                        start(n, o) {
                            (0, r(285238).V)(e, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
                            let a = [];
                            return t.forEach(e => {
                                a.push((0, r(452094)._)(e, n, {
                                    transitionOverride: o
                                }))
                            }), Promise.all(a)
                        },
                        set: n => ((0, r(285238).V)(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), t.forEach(e => {
                            (0, r(124714).VI)(e, n)
                        })),
                        stop() {
                            t.forEach(e => {
                                e.values.forEach(e => e.stop())
                            })
                        },
                        mount: () => (e = !0, () => {
                            e = !1, n.stop()
                        })
                    };
                return n
            }
        },
        766031: (e, t, r) => {
            r.d(t, {
                m: () => n
            });
            let n = (0, r(6046).H)(r(501723).P)
        }
    }
]);