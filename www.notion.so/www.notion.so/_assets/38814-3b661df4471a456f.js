"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [38814], {
        6957: (e, t, i) => {
            i.d(t, {
                B: () => n
            }), i(296540);
            var a = i(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.37 2.12 12.22 11.76",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M5.125 2.125a1.75 1.75 0 0 0-1.75 1.75v8.25c0 .966.784 1.75 1.75 1.75h5.75c.756 0 1.4-.479 1.644-1.15a.075.075 0 0 0-.07-.1H5.125a.5.5 0 0 1-.5-.5v-.134a1 1 0 0 1-.006-.091V7.7a1 1 0 0 1 .006-.091V3.875a.5.5 0 0 1 .5-.5h2.604v1.831c0 .929.713 1.691 1.622 1.769h3.199a.075.075 0 0 0 .075-.075v-.309c0-.464-.184-.91-.513-1.237L9.396 2.638a1.75 1.75 0 0 0-1.237-.513zm3.754 3.081V3.888l1.943 1.943H9.504a.625.625 0 0 1-.625-.625"
                        }), (0, a.jsx)("path", {
                            d: "M10.606 7.76c-.38 0-.753.089-1.049.286-.304.203-.533.533-.533.955 0 .358.134.688.43.939.267.227.632.359 1.047.439l.008.001c.343.066.51.152.582.214a.2.2 0 0 1 .051.063.2.2 0 0 1 .015.09.1.1 0 0 1-.01.036.2.2 0 0 1-.066.063c-.086.057-.246.113-.476.113-.441 0-.606-.184-.642-.237a.515.515 0 1 0-.849.583c.23.335.714.684 1.491.684.38 0 .753-.09 1.048-.287.305-.203.534-.533.534-.955 0-.358-.134-.688-.43-.938-.267-.228-.632-.36-1.047-.44h-.008c-.344-.066-.51-.153-.582-.215a.2.2 0 0 1-.051-.062.2.2 0 0 1-.015-.09q-.001-.017.01-.037a.2.2 0 0 1 .066-.063c.086-.057.246-.113.475-.113.442 0 .607.185.643.237a.515.515 0 1 0 .849-.583c-.23-.335-.714-.684-1.492-.684m-2.213.271c-.54-.305-1.304-.37-1.95-.106-.693.284-1.218.935-1.218 1.95s.525 1.667 1.219 1.95c.645.264 1.41.2 1.95-.105a.515.515 0 1 0-.507-.897c-.265.149-.7.193-1.054.049a.87.87 0 0 1-.403-.321c-.105-.156-.175-.373-.175-.676 0-.302.07-.52.175-.676a.87.87 0 0 1 .403-.32c.355-.145.79-.1 1.054.048a.515.515 0 1 0 .506-.896m5.031.202a.515.515 0 0 0-.968.352l1.066 2.933a.515.515 0 0 0 .968 0l1.067-2.933a.515.515 0 0 0-.968-.352l-.583 1.602z"
                        })]
                    })
                },
                n = (0, i(104509).wt)("fileCsvSmall", o, "small")
        },
        9774: (e, t, i) => {
            i.r(t), i.d(t, {
                COMPLETION_THROTTLE: () => r,
                PREVIEW_STEP_DELAY: () => l,
                postProcessAICreatedStores: () => d,
                showCompletionErrorWithCode: () => s,
                wrapTemporaryBlocksInList: () => c
            }), i(18107), i(967357);
            var a = () => i(749560),
                o = () => i(135674),
                n = () => i(173157);
            let r = 300,
                l = 250;

            function s(e) {
                let t = i(962299).A.getIntl();
                return 451 === e ? i(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.moderationError",
                        defaultMessage: "AI does not allow content that is harmful or illegal. Please revise your input and try again. (451)"
                    })
                }) : 413 === e ? i(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.promptOrAttachmentTooLarge",
                        defaultMessage: "Query or attachment is too large. Please revise your input and try again. (413)"
                    })
                }) : 502 === e || 503 === e || 504 === e ? i(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.providerError",
                        defaultMessage: "We’re experiencing issues with our AI provider. Try again in a few minutes. ({errorCode})"
                    }, {
                        errorCode: e
                    })
                }) : void i(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.genericError",
                        defaultMessage: "AI is temporarily unavailable. Try again in a few minutes. ({errorCode})"
                    }, {
                        errorCode: e
                    })
                })
            }

            function d(e, t) {
                for (let i of t) a().In({
                    environment: e,
                    blockStore: i
                })
            }

            function c(e) {
                var t;
                let {
                    environment: a,
                    stores: r,
                    listId: l,
                    inMemoryRecordCache: s,
                    transaction: d
                } = e, c = (null == (t = r.at(0)) ? void 0 : t.getSpaceId()) ? ? d.spaceId, u = new(i(517013)).pm({
                    environment: a,
                    pointer: {
                        table: i(832375).evP,
                        id: l || (0, i(295447).Z1)({
                            environment: a,
                            table: i(832375).evP,
                            spaceId: c
                        }),
                        spaceId: c
                    },
                    recordStoreOptions: {
                        inMemoryRecordCache: s,
                        userId: a.currentUser.id
                    },
                    path: ["content"]
                });
                for (let e of r)(0, o().B)({
                    parentStore: u,
                    appendStore: e,
                    transaction: d
                }), (0, n().z)({
                    store: e,
                    data: {
                        parent_id: u.id,
                        parent_table: u.table,
                        alive: !0
                    },
                    transaction: d
                });
                return u
            }
        },
        49768: (e, t, i) => {
            i.d(t, {
                Jc: () => n,
                Q7: () => o,
                eo: () => l,
                q8: () => r
            });
            var a = i(296540);

            function o(e) {
                let {
                    textStore: t,
                    initialFocus: o
                } = e, s = (0, i(533992).v3)(), d = (0, i(682985).K8)(() => l(t), [t]), c = (0, a.useCallback)(() => {
                    n(t)
                }, [t]), u = (0, a.useCallback)(() => {
                    r({
                        environment: s,
                        textStore: t
                    })
                }, [s, t]);
                return (0, i(383953).w)(() => {
                    o && c()
                }), (0, a.useMemo)(() => ({
                    isFocused: d,
                    focus: c,
                    blur: u
                }), [d, c, u])
            }

            function n(e) {
                i(374176).default.afterNextFlush(() => {
                    (0, i(411282).w)();
                    let t = i(521595).n.findNodeFromStore(e);
                    null == t || t.focus(), (0, i(739204).z)({
                        store: e
                    })
                })
            }

            function r(e) {
                let {
                    environment: t,
                    textStore: a
                } = e;
                if (!l(a)) return;
                let o = i(521595).n.findNodeFromStore(a);
                null == o || o.blur(), (0, i(525779).clear)({
                    environment: t
                }), i(200083).A.setKeyboardMode(!1)
            }

            function l(e) {
                return "empty" !== i(358377).default.state.mode && i(358377).default.state.multiSelection.start.store.id === e.id
            }
        },
        95405: (e, t, i) => {
            i.d(t, {
                $S: () => n,
                I4: () => a,
                IQ: () => o
            }), i(898992), i(354520);

            function a(e, t, a) {
                let n = o(t).slice(),
                    r = n.findIndex(t => e.id === t.id); - 1 === r ? n.unshift(e) : n.splice(r, 1, e), (0, i(862759).m)({
                    userSettingsStore: t,
                    transaction: a,
                    data: {
                        favorite_ai_actions: n
                    }
                })
            }

            function o(e) {
                var t;
                return (null == (t = e.getModel()) || null == (t = t.getSettings()) ? void 0 : t.favorite_ai_actions) ? ? []
            }

            function n(e, t, a) {
                let n = o(t).filter(t => t.id !== e.id);
                (0, i(862759).m)({
                    userSettingsStore: t,
                    transaction: a,
                    data: {
                        favorite_ai_actions: n
                    }
                })
            }
        },
        129593: (e, t, i) => {
            i.d(t, {
                CP: () => a
            }), (0, i(722371).qb)()(["openai-gpt-4o", "openai-gpt-4o-mini", "openai-turbo", "openai-chatgpt-4o-latest", "openai-o1", "openai-o1-mini", "openai-o3-mini", "openai-gpt-4.1", "openai-gpt-4.1-mini", "openai-gpt-4.1-nano", "openai-gpt-5-mini", "openai-gpt-5-nano", "openai-o3", "openai-o4-mini", "openai-turbo-thinking", "openai-turbo-minimal-thinking", "openai-turbo-10", "openai-turbo-8", "orange-tart", "orange-tart-minimal-thinking"]), (0, i(722371).qb)()(["anthropic-sonnet-4", "anthropic-sonnet-3.7", "anthropic-sonnet-3.7-thinking", "anthropic-opus", "anthropic-sonnet-4-thinking", "anthropic-opus-4", "anthropic-opus-4-thinking", "anthropic-opus-4.1", "anthropic-opus-4.1-thinking", "anthropic-sonnet-alt", "anthropic-sonnet-alt-no-thinking", "anthropic-sonnet-alt-thinking", "anthropic-haiku-4.5", "anthropic-haiku-4.5-thinking", "apple-danish"]), (0, i(722371).qb)()(["vertex-gemini-1.5-pro", "vertex-gemini-1.5-flash", "vertex-gemini-2.0-flash", "vertex-gemini-2.5-pro", "vertex-gemini-2.5-flash", "gemini-pro", "gemini-flash", "gateau-roule", "gateau-roule-low-thinking"]), (0, i(722371).qb)()(["fireworks-llama3-70b", "fireworks-deepseek-r1", "fireworks-llama3.1-405b", "fireworks-llama3.1-70b", "fireworks-llama3.3-70b", "fireworks-llama3.3-70b-dedicated", "fireworks-llama3.3-70b-dedicated-multiregion", "fireworks-llama3.1-8b", "fireworks-mixtral-22b", "fireworks-mixtral-7b", "fireworks-ft-router-101", "fireworks-ft-router-102", "fireworks-deepseek-v3", "fireworks-deepseek-r1-0528", "fireworks-kimi-k2", "fireworks-kimi-k2.5", "fireworks-minimax-m2.5", "fireworks-glm-5", "pi-fireworks-glm-5", "fireworks-gpt-oss-20b", "fireworks-gpt-oss-120b", "fireworks-gpt-oss-safeguard-120b", "fireworks-llama-8b-finetune-v07-p50-cru6bgc4"]), (0, i(722371).qb)()(["groq-gemma2-9b-it", "groq-gemma-7b-it", "groq-llama-70b", "groq-llama-8b", "groq-mixtral"]), (0, i(722371).qb)()(["bedrock-nova-pro", "bedrock-nova-lite", "bedrock-nova-micro"]), (0, i(722371).qb)()(["bedrock-anthropic-sonnet-3.7"]), (0, i(722371).qb)()(["cerebras-llama3.1-8b", "cerebras-llama3.3-70b", "cerebras-deepseek-r1-distill-llama-70b", "cerebras-gpt-oss-120b"]), (0, i(722371).qb)()(["cinder-kite"]), (0, i(722371).qb)()(["anyscale-gpt-oss-safeguard-20b"]), (0, i(722371).qb)()(["baseten-kimi-k2.5"]);
            let a = (0, i(722371).qb)()(["custom-openai-slot-1", "custom-openai-slot-2", "custom-openai-slot-3", "custom-openai-slot-4", "custom-openai-slot-5", "custom-anthropic-slot-1", "custom-anthropic-slot-2", "custom-anthropic-slot-3", "custom-anthropic-slot-4", "custom-anthropic-slot-5"]);
            (0, i(722371).qb)()(["oatmeal-cookie", "pi-openai-gpt-5.2", "oatmeal-cookie-medium-thinking", "oatmeal-cookie-high-thinking", "oatmeal-cake", "oval-kumquat", "oval-kumquat-medium", "oval-kumquat-high", "oregon-grape-low", "oregon-grape-medium", "oregon-grape-high", "otaheite-apple-low", "otaheite-apple-medium", "otaheite-apple-high", "oreo-cheesecake", "old-fashioned-donut", "gingerbread", "pi-gemini-3.1-pro", "avocado-froyo-max", "avocado-froyo-high", "avocado-froyo-medium", "avocado-froyo-low", "almond-croissant-max", "almond-croissant-high", "almond-croissant-medium", "almond-croissant-low", "pi-anthropic-sonnet-4.6", "pi-anthropic-opus-4.6", "pi-fireworks-glm-5", "gpt-5.3-codex", "gpt-5.2-codex", "gpt-5.1-codex-max", "gpt-5.1-codex", "galette", "galette-low-thinking", "galette-medium-thinking"])
        },
        133121: (e, t, i) => {
            i.d(t, {
                u: () => a
            });
            let a = "return-to-writer-button"
        },
        166788: (e, t, i) => {
            i.d(t, {
                O: () => a
            });

            function a(e) {
                return "string" == typeof e ? e : "Agent with invalid name"
            }
        },
        216736: (e, t, i) => {
            function a(e) {
                let {
                    svgElement: t,
                    padding: i,
                    backgroundColor: a
                } = e, o = t.cloneNode(!0);
                if (!(o instanceof SVGSVGElement)) throw Error("Failed to clone SVG element");
                o.getAttribute("xmlns") || o.setAttribute("xmlns", "http://www.w3.org/2000/svg"), o.getAttribute("xmlns:xlink") || o.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                let n = function(e) {
                        var t;
                        try {
                            let t = e.getBBox();
                            if (t.width > 0 && t.height > 0) return t
                        } catch {}
                        let i = null == (t = e.viewBox) ? void 0 : t.baseVal;
                        if (i && i.width > 0 && i.height > 0) return {
                            x: i.x,
                            y: i.y,
                            width: i.width,
                            height: i.height
                        };
                        let a = e.getBoundingClientRect();
                        return {
                            x: 0,
                            y: 0,
                            width: a.width,
                            height: a.height
                        }
                    }(t),
                    r = n.width,
                    l = n.height,
                    s = r + 2 * i,
                    d = l + 2 * i;
                o.setAttribute("width", s.toString()), o.setAttribute("height", d.toString()), o.setAttribute("viewBox", `${n.x-i} ${n.y-i} ${s} ${d}`);
                let c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                return c.setAttribute("x", (n.x - i).toString()), c.setAttribute("y", (n.y - i).toString()), c.setAttribute("width", s.toString()), c.setAttribute("height", d.toString()), c.setAttribute("fill", a), o.insertBefore(c, o.firstChild), {
                    svgText: new XMLSerializer().serializeToString(o),
                    width: s,
                    height: d
                }
            }

            function o(e) {
                let t = encodeURIComponent(e);
                return `data:image/svg+xml;charset=utf-8,${t}`
            }

            function n(e) {
                let t = e;
                return (t = (t = (t = t.replace(/@import[^;]+;/g, "")).replace(/url\(\s*(['"]?)(https?:\/\/|\/\/)[^)"']+\1\s*\)/g, 'url("")')).replace(/<image\b[^>]*(?:href|xlink:href)=["'](?:https?:)?\/\/[^"']+["'][^>]*\/?>/gi, "")).replace(/<use\b[^>]*(?:href|xlink:href)=["'](?:https?:)?\/\/[^"']+["'][^>]*\/?>/gi, "")
            }
            async function r(e) {
                let {
                    svgText: t,
                    width: i,
                    height: a,
                    mimeType: o,
                    quality: n,
                    pixelRatio: r,
                    platform: l
                } = e;
                return await new Promise((e, s) => {
                    if (l) {
                        if (!l.createImage || !l.createCanvas) return void s(Error("RasterizePlatform requires createImage and createCanvas"));
                        let d = l.createImage,
                            c = l.createCanvas,
                            u = l.createObjectUrl ? ? (e => URL.createObjectURL(e)),
                            m = l.revokeObjectUrl ? ? (e => URL.revokeObjectURL(e)),
                            p = new Blob([t], {
                                type: "image/svg+xml"
                            }),
                            g = d();
                        g.crossOrigin = "anonymous";
                        let f = u(p);
                        return g.onload = () => {
                            m(f);
                            let t = c(),
                                l = t.getContext("2d");
                            if (!l) return void s(Error("Failed to get canvas context"));
                            let d = r ? ? 1;
                            t.width = Math.max(1, Math.floor(i * d)), t.height = Math.max(1, Math.floor(a * d)), l.setTransform(d, 0, 0, d, 0, 0), l.drawImage(g, 0, 0);
                            try {
                                t.toBlob(i => {
                                    t.remove(), i ? e(i) : s(Error("Failed to rasterize SVG"))
                                }, o, "image/jpeg" === o ? n : void 0)
                            } catch (i) {
                                t.remove();
                                let e = i instanceof Error ? i.message : "Unknown rasterization error";
                                s(Error(`Failed to export image: ${e}`))
                            }
                        }, g.onerror = () => {
                            m(f), s(Error("Failed to load SVG for rasterization"))
                        }, void(g.src = f)
                    }
                    let d = new Image;
                    d.crossOrigin = "anonymous", d.onload = () => {
                        let t = document.createElement("canvas"),
                            l = t.getContext("2d");
                        if (!l) return void s(Error("Failed to get canvas context"));
                        let c = r ? ? 1;
                        t.width = Math.max(1, Math.floor(i * c)), t.height = Math.max(1, Math.floor(a * c)), l.setTransform(c, 0, 0, c, 0, 0), l.drawImage(d, 0, 0);
                        try {
                            t.toBlob(i => {
                                t.remove(), i ? e(i) : s(Error("Failed to rasterize SVG"))
                            }, o, "image/jpeg" === o ? n : void 0)
                        } catch (i) {
                            t.remove();
                            let e = i instanceof Error ? i.message : "Unknown rasterization error";
                            s(Error(`Failed to export image: ${e}`))
                        }
                    }, d.onerror = () => {
                        s(Error("Failed to load SVG for rasterization"))
                    }, d.src = `data:image/svg+xml;charset=utf-8;base64,${btoa(unescape(encodeURIComponent(t)))}`
                })
            }

            function l(e) {
                let {
                    blob: t,
                    filename: i
                } = e, a = URL.createObjectURL(t), o = document.createElement("a");
                o.href = a, o.download = i, o.style.display = "none", document.body.appendChild(o), o.click(), o.remove(), setTimeout(() => URL.revokeObjectURL(a), 0)
            }
            i.d(t, {
                Ep: () => o,
                WN: () => l,
                Zu: () => r,
                l8: () => a,
                r1: () => n
            }), i(16280), i(964979), i(814603), i(147566), i(198721)
        },
        225206: (e, t, i) => {
            i.d(t, {
                y: () => n
            }), i(296540);
            var a = i(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0 0 16 16",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("g", {
                            clipPath: "url(#clip0_15424_13149)",
                            children: [(0, a.jsx)("path", {
                                d: "M6.922 5.575a2.27 2.27 0 0 1 3.903.022.55.55 0 0 1-.949.554 1.168 1.168 0 0 0-2.01-.01l-2.647 4.42 1.861.301a.551.551 0 0 1-.176 1.087l-2.662-.431a.55.55 0 0 1-.383-.827z"
                            }), (0, a.jsx)("path", {
                                d: "M8.451 6.784a.614.614 0 1 1-.197 1.213.614.614 0 0 1 .197-1.213M5.21 6.26a.615.615 0 1 1-.196 1.214.615.615 0 0 1 .196-1.214M3.491 4.43a2.27 2.27 0 0 1 3.227.206.55.55 0 0 1-.832.72 1.166 1.166 0 0 0-1.66-.106.551.551 0 0 1-.735-.82"
                            }), (0, a.jsx)("path", {
                                d: "M9.095.293C12.659.293 15.35 3.867 15.35 8s-2.692 7.706-6.256 7.706h-2.19C3.34 15.706.648 12.133.648 8S3.34.293 6.904.293zm-2.19 1.1C4.166 1.394 1.748 4.23 1.748 8s2.418 6.606 5.155 6.606S12.06 11.771 12.06 8 9.642 1.394 6.905 1.394m6.052 4.666c.132.624.203 1.275.203 1.941 0 2.595-1.062 4.968-2.733 6.376C12.57 13.633 14.25 11.143 14.25 8a8.3 8.3 0 0 0-.226-1.941zm-.821-2.286q.298.564.514 1.186h1.023a7 7 0 0 0-.617-1.186zm-1.71-2.15c.365.306.7.66 1.002 1.05h.709a4.8 4.8 0 0 0-1.711-1.05"
                            })]
                        }), (0, a.jsx)("defs", {
                            children: (0, a.jsx)("clipPath", {
                                id: "clip0_15424_13149",
                                children: (0, a.jsx)("path", {
                                    d: "M0 0h16v16H0z"
                                })
                            })
                        })]
                    })
                },
                n = (0, i(104509).wt)("aiCoinSmall", o, "small")
        },
        229820: (e, t, i) => {
            i.d(t, {
                AH: () => o,
                B9: () => n,
                G2: () => l,
                Js: () => s,
                pk: () => r,
                tv: () => d
            }), i(898992), i(354520), i(581454);
            let a = i(426048).di.filter(e => !(0, i(722371).Xk)(i(129593).CP, e.notionName)),
                o = a.filter(e => "fast" === e.displayGroup).map(e => e.notionName),
                n = a.filter(e => "intelligent" === e.displayGroup).map(e => e.notionName),
                r = [...o, ...n];

            function l(e) {
                switch (e) {
                    case "openai":
                        return {
                            buttonColor: "gray",
                            textColor: "gray"
                        };
                    case "anthropic":
                        return {
                            buttonColor: "orange",
                            textColor: "orange"
                        };
                    default:
                        return
                }
            }
            let s = (0, i(109939).YK)({
                default: {
                    id: "UnifiedModelPicker.default",
                    defaultMessage: "Auto"
                },
                "baseten-kimi-k2.5": {
                    id: "UnifiedModelPicker.basetenKimiK25",
                    defaultMessage: "Kimi K2.5 (Baseten)"
                },
                "fireworks-kimi-k2.5": {
                    id: "UnifiedModelPicker.fireworks-kimi-k2.5",
                    defaultMessage: "Kimi K2.5 (Fireworks)"
                },
                "fireworks-minimax-m2.5": {
                    id: "UnifiedModelPicker.fireworks-minimax-m2.5",
                    defaultMessage: "MiniMax M2.5 (Fireworks)"
                },
                "fireworks-glm-5": {
                    id: "UnifiedModelPicker.fireworks-glm-5",
                    defaultMessage: "GLM-5 (Fireworks)"
                },
                "anthropic-sonnet-4": {
                    id: "UnifiedModelPicker.anthropic-sonnet-4",
                    defaultMessage: "Claude 4 Sonnet"
                },
                "anthropic-sonnet-4-thinking": {
                    id: "UnifiedModelPicker.anthropic-sonnet-4-thinking",
                    defaultMessage: "Claude 4 Sonnet with thinking"
                },
                "anthropic-sonnet-3.7": {
                    id: "UnifiedModelPicker.anthropic-sonnet-3.7",
                    defaultMessage: "Claude 3.7 Sonnet"
                },
                "anthropic-sonnet-3.7-thinking": {
                    id: "UnifiedModelPicker.anthropic-sonnet-3.7-thinking",
                    defaultMessage: "Claude 3.7 Sonnet with thinking"
                },
                "anthropic-opus-4": {
                    id: "UnifiedModelPicker.anthropic-opus-4",
                    defaultMessage: "Claude 4 Opus"
                },
                "anthropic-opus-4-thinking": {
                    id: "UnifiedModelPicker.anthropic-opus-4-thinking",
                    defaultMessage: "Claude 4 Opus with thinking"
                },
                "anthropic-opus-4.1": {
                    id: "UnifiedModelPicker.anthropic-opus-4.1",
                    defaultMessage: "Claude 4.1 Opus"
                },
                "anthropic-opus-4.1-thinking": {
                    id: "UnifiedModelPicker.anthropic-opus-4.1-thinking",
                    defaultMessage: "Claude 4.1 Opus with thinking"
                },
                "anthropic-sonnet-alt": {
                    id: "UnifiedModelPicker.anthropicSonnetAlt",
                    defaultMessage: "Claude Sonnet 4.5"
                },
                "anthropic-sonnet-alt-no-thinking": {
                    id: "UnifiedModelPicker.anthropicSonnetAltNoThinking",
                    defaultMessage: "Claude Sonnet 4.5"
                },
                "anthropic-sonnet-alt-thinking": {
                    id: "UnifiedModelPicker.anthropicSonnetAltThinking",
                    defaultMessage: "Claude Sonnet (dev only) with thinking"
                },
                "openai-gpt-4.1": {
                    id: "UnifiedModelPicker.openai",
                    defaultMessage: "OpenAI GPT-4.1"
                },
                "openai-gpt-4.1-mini": {
                    id: "UnifiedModelPicker.openaiMini",
                    defaultMessage: "OpenAI GPT-4.1 Mini"
                },
                "openai-gpt-5-mini": {
                    id: "UnifiedModelPicker.openaiGpt5Mini",
                    defaultMessage: "OpenAI GPT-5 Mini"
                },
                "openai-gpt-5-nano": {
                    id: "UnifiedModelPicker.openaiGpt5Nano",
                    defaultMessage: "OpenAI GPT-5 Nano"
                },
                "openai-o4-mini": {
                    id: "UnifiedModelPicker.openaiO4Mini",
                    defaultMessage: "OpenAI o4-mini"
                },
                "gemini-pro": {
                    id: "UnifiedModelPicker.geminiPro",
                    defaultMessage: "Gemini 2.5 Pro"
                },
                galette: {
                    id: "UnifiedModelPicker.galette",
                    defaultMessage: "Gemini 3.1 Pro (High)"
                },
                "galette-low-thinking": {
                    id: "UnifiedModelPicker.galetteLowThinking",
                    defaultMessage: "Gemini 3.1 Pro (Low)"
                },
                "galette-medium-thinking": {
                    id: "UnifiedModelPicker.galetteMediumThinking",
                    defaultMessage: "Gemini 3.1 Pro"
                },
                "gemini-flash": {
                    id: "UnifiedModelPicker.geminiFlash",
                    defaultMessage: "Gemini 2.5 Flash"
                },
                "openai-turbo": {
                    id: "UnifiedModelPicker.openaiTurbo",
                    defaultMessage: "OpenAI GPT-5"
                },
                "openai-turbo-thinking": {
                    id: "UnifiedModelPicker.openaiTurboThinking",
                    defaultMessage: "OpenAI GPT-5 with thinking"
                },
                "openai-turbo-minimal-thinking": {
                    id: "UnifiedModelPicker.openaiTurboMinimalThinking",
                    defaultMessage: "OpenAI GPT-5 + minimal CoT"
                },
                "openai-turbo-10": {
                    id: "UnifiedModelPicker.openaiTurbo10",
                    defaultMessage: "OpenAI GPT-5 + juice@10"
                },
                "openai-turbo-8": {
                    id: "UnifiedModelPicker.openaiTurbo8",
                    defaultMessage: "OpenAI GPT-5 + juice@8"
                },
                "anthropic-haiku-4.5": {
                    id: "UnifiedModelPicker.anthropicHaiku4Point5",
                    defaultMessage: "Claude Haiku 4.5"
                },
                "anthropic-haiku-4.5-thinking": {
                    id: "UnifiedModelPicker.anthropicHaiku4Point5Thinking",
                    defaultMessage: "Claude Haiku 4.5 with thinking"
                },
                "apple-danish": {
                    id: "UnifiedModelPicker.appleDanish",
                    defaultMessage: "Claude Opus 4.5"
                },
                "orange-tart": {
                    id: "UnifiedModelPicker.openaiOrangeTart",
                    defaultMessage: "OpenAI GPT-5.1"
                },
                "orange-tart-minimal-thinking": {
                    id: "UnifiedModelPicker.openaiOrangeTartMinimalThinking",
                    defaultMessage: "OpenAI GPT-5.1 + minimal CoT"
                },
                "gateau-roule": {
                    id: "UnifiedModelPicker.gateauRoule",
                    defaultMessage: "Gemini 3 Pro"
                },
                "gateau-roule-low-thinking": {
                    id: "UnifiedModelPicker.gateauRouleLowThinking",
                    defaultMessage: "Gemini 3 Pro (Low Thinking)"
                },
                gingerbread: {
                    id: "UnifiedModelPicker.gingerbread",
                    defaultMessage: "Gemini 3 Flash"
                },
                "avocado-froyo-max": {
                    id: "UnifiedModelPicker.avocadoFroyoMax",
                    defaultMessage: "Opus 4.6 (Max)"
                },
                "avocado-froyo-high": {
                    id: "UnifiedModelPicker.avocadoFroyoHigh",
                    defaultMessage: "Opus 4.6 (High)"
                },
                "avocado-froyo-medium": {
                    id: "UnifiedModelPicker.avocadoFroyoMedium",
                    defaultMessage: "Opus 4.6 (Medium)"
                },
                "avocado-froyo-low": {
                    id: "UnifiedModelPicker.avocadoFroyoLow",
                    defaultMessage: "Opus 4.6 (Low)"
                },
                "almond-croissant-max": {
                    id: "UnifiedModelPicker.almondCroissantMax",
                    defaultMessage: "Sonnet 4.6 (Max)"
                },
                "almond-croissant-high": {
                    id: "UnifiedModelPicker.almondCroissantHigh",
                    defaultMessage: "Sonnet 4.6 (High)"
                },
                "almond-croissant-medium": {
                    id: "UnifiedModelPicker.almondCroissantMedium",
                    defaultMessage: "Sonnet 4.6 (Medium)"
                },
                "almond-croissant-low": {
                    id: "UnifiedModelPicker.almondCroissantLow",
                    defaultMessage: "Sonnet 4.6 (Low)"
                },
                "oatmeal-cookie": {
                    id: "UnifiedModelPicker.oatmealCookie",
                    defaultMessage: "GPT 5.2"
                },
                "pi-openai-gpt-5.2": {
                    id: "UnifiedModelPicker.piOpenAiGpt52",
                    defaultMessage: "Pi GPT 5.2"
                },
                "pi-anthropic-sonnet-4.6": {
                    id: "UnifiedModelPicker.piAnthropicSonnet46",
                    defaultMessage: "Pi Sonnet 4.6"
                },
                "pi-anthropic-opus-4.6": {
                    id: "UnifiedModelPicker.piAnthropicOpus46",
                    defaultMessage: "Pi Opus 4.6"
                },
                "pi-gemini-3.1-pro": {
                    id: "UnifiedModelPicker.piGemini31Pro",
                    defaultMessage: "Pi Gemini 3.1 Pro"
                },
                "pi-fireworks-glm-5": {
                    id: "UnifiedModelPicker.piFireworksGlm5",
                    defaultMessage: "Pi GLM-5"
                },
                "oatmeal-cake": {
                    id: "UnifiedModelPicker.oatmealCake",
                    defaultMessage: "Oatmeal Cake"
                },
                "oval-kumquat": {
                    id: "UnifiedModelPicker.ovalKumquat",
                    defaultMessage: "Oval Kumquat"
                },
                "oval-kumquat-medium": {
                    id: "UnifiedModelPicker.ovalKumquatMedium",
                    defaultMessage: "Oval Kumquat (Medium)"
                },
                "oval-kumquat-high": {
                    id: "UnifiedModelPicker.ovalKumquatHigh",
                    defaultMessage: "Oval Kumquat (High)"
                },
                "oregon-grape-low": {
                    id: "UnifiedModelPicker.oregonGrapeLow",
                    defaultMessage: "Oregon Grape (Low)"
                },
                "oregon-grape-medium": {
                    id: "UnifiedModelPicker.oregonGrapeMedium",
                    defaultMessage: "Oregon Grape (Medium)"
                },
                "oregon-grape-high": {
                    id: "UnifiedModelPicker.oregonGrapeHigh",
                    defaultMessage: "Oregon Grape (High)"
                },
                "otaheite-apple-low": {
                    id: "UnifiedModelPicker.otaheiteAppleLow",
                    defaultMessage: "Otaheite Apple (Low)"
                },
                "otaheite-apple-medium": {
                    id: "UnifiedModelPicker.otaheiteAppleMedium",
                    defaultMessage: "Otaheite Apple (Medium)"
                },
                "otaheite-apple-high": {
                    id: "UnifiedModelPicker.otaheiteAppleHigh",
                    defaultMessage: "Otaheite Apple (High)"
                },
                "cinder-kite": {
                    id: "UnifiedModelPicker.cinderKite",
                    defaultMessage: "Engram 1"
                },
                "gpt-5.2-codex": {
                    id: "UnifiedModelPicker.gpt52Codex",
                    defaultMessage: "GPT-5.2 Codex"
                },
                "gpt-5.3-codex": {
                    id: "UnifiedModelPicker.gpt53Codex",
                    defaultMessage: "GPT-5.3 Codex"
                },
                "oatmeal-cookie-medium-thinking": {
                    id: "UnifiedModelPicker.gpt52MediumThinking",
                    defaultMessage: "GPT-5.2 Medium"
                },
                "oatmeal-cookie-high-thinking": {
                    id: "UnifiedModelPicker.gpt52HighThinking",
                    defaultMessage: "GPT-5.2 High"
                },
                "gpt-5.1-codex-max": {
                    id: "UnifiedModelPicker.gpt51CodexMax",
                    defaultMessage: "GPT-5.1 Codex Max"
                },
                "gpt-5.1-codex": {
                    id: "UnifiedModelPicker.gpt51Codex",
                    defaultMessage: "GPT-5.1 Codex"
                },
                "custom-openai-slot-1": {
                    id: "UnifiedModelPicker.eapOpenaiSlot1",
                    defaultMessage: "unconfigured-openai-slot-1"
                },
                "custom-openai-slot-2": {
                    id: "UnifiedModelPicker.eapOpenaiSlot2",
                    defaultMessage: "unconfigured-openai-slot-2"
                },
                "custom-openai-slot-3": {
                    id: "UnifiedModelPicker.eapOpenaiSlot3",
                    defaultMessage: "unconfigured-openai-slot-3"
                },
                "custom-openai-slot-4": {
                    id: "UnifiedModelPicker.eapOpenaiSlot4",
                    defaultMessage: "unconfigured-openai-slot-4"
                },
                "custom-openai-slot-5": {
                    id: "UnifiedModelPicker.eapOpenaiSlot5",
                    defaultMessage: "unconfigured-openai-slot-5"
                },
                "custom-anthropic-slot-1": {
                    id: "UnifiedModelPicker.eapAnthropicSlot1",
                    defaultMessage: "unconfigured-anthropic-slot-1"
                },
                "custom-anthropic-slot-2": {
                    id: "UnifiedModelPicker.eapAnthropicSlot2",
                    defaultMessage: "unconfigured-anthropic-slot-2"
                },
                "custom-anthropic-slot-3": {
                    id: "UnifiedModelPicker.eapAnthropicSlot3",
                    defaultMessage: "unconfigured-anthropic-slot-3"
                },
                "custom-anthropic-slot-4": {
                    id: "UnifiedModelPicker.eapAnthropicSlot4",
                    defaultMessage: "unconfigured-anthropic-slot-4"
                },
                "custom-anthropic-slot-5": {
                    id: "UnifiedModelPicker.eapAnthropicSlot5",
                    defaultMessage: "unconfigured-anthropic-slot-5"
                },
                fastSection: {
                    id: "UnifiedModelPicker.fastSection",
                    defaultMessage: "Fast (Workspace context, dev only)"
                },
                agentModelSection: {
                    id: "UnifiedModelPicker.agentModelSection",
                    defaultMessage: "Choose a model"
                },
                intelligentSection: {
                    id: "UnifiedModelPicker.intelligentSection",
                    defaultMessage: "Intelligent (Workspace context, dev only)"
                },
                agentIntelligentSection: {
                    id: "UnifiedModelPicker.agentIntelligentSection",
                    defaultMessage: "Intelligent models"
                }
            });

            function d(e, t) {
                return (0, i(722371).O)(s, e) ? t.formatMessage(s[e]) : e
            }
        },
        336399: (e, t, i) => {
            i.d(t, {
                R: () => a
            }), i(581454);

            function a(e) {
                let {
                    config: t,
                    agentModelConfig: a,
                    intl: o
                } = e, n = (0, i(109939).tz)(), r = (0, i(533992).v3)(), l = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceIdStore), s = (0, i(909212).i7)(), d = (0, i(83208).X)("agent_model_picker"), c = s && d, u = o ? ? n;
                return (0, i(682985).K8)(() => {
                    if (!l || !i(295206).P.getData(r, {
                            spaceId: l
                        })) return {
                        modelFamily: void 0,
                        modelName: void 0,
                        modelColor: void 0
                    };
                    if ("workflow" === t.type && null != a && a.type) {
                        let e = i(295206).P.getModelMessage(r, l, a.type),
                            t = i(295206).P.getModelFamily(r, l, a.type);
                        return {
                            modelFamily: t,
                            modelName: e ? ? (c && (0, i(722371).O)(i(229820).Js, a.type) ? u.formatMessage(i(229820).Js[a.type]) : u.formatMessage(i(385728).D.notionAIAutomatic)),
                            modelColor: (0, i(229820).G2)(t)
                        }
                    }
                    if ("council-chat" === t.type && t.members.length > 0) {
                        let e = {
                            anthropic: "Opus",
                            openai: "GPT",
                            gemini: "Gemini"
                        };
                        return {
                            modelFamily: void 0,
                            modelName: t.members.map(t => e[t.modelFamily] ? ? t.displayName).join(" + "),
                            modelColor: void 0
                        }
                    }
                    let e = function(e) {
                            if ("markdown-chat" === e.type) return e.model
                        }(t),
                        o = e ? i(295206).P.getModelMessage(r, l, e) : void 0,
                        n = e ? i(295206).P.getModelFamily(r, l, e) : void 0;
                    return {
                        modelFamily: n,
                        modelName: o ? ? u.formatMessage(i(385728).D.notionAIAutomatic),
                        modelColor: (0, i(229820).G2)(n)
                    }
                }, [a, t, r, u, c, l], {
                    equalityFn: i(381453).n4
                })
            }
        },
        433170: (e, t, i) => {
            i.d(t, {
                G: () => a
            });
            let a = (0, i(104509).xh)("aiFace", {
                default: {
                    loader: () => i.e(89256).then(i.bind(i, 273344))
                },
                small: {
                    loader: () => i.e(89256).then(i.bind(i, 652134))
                },
                fill: {
                    loader: () => i.e(89256).then(i.bind(i, 396826))
                },
                fillSmall: {
                    loader: () => i.e(89256).then(i.bind(i, 93641))
                }
            }, ["ai", "artificial", "intelligence", "sparkle", "technology", "nosy"])
        },
        437225: (e, t, i) => {
            i.d(t, {
                H: () => o
            }), i(296540);
            var a = i(474848);

            function o(e) {
                let {
                    modelFamily: t,
                    defaultNoAiFace: o
                } = e;
                switch (t) {
                    case "anthropic":
                        return (0, a.jsx)(i(708966).Q, {
                            iconGroup: i(449685).j,
                            variantName: "default",
                            style: {
                                width: 16,
                                height: 16
                            }
                        });
                    case "openai":
                        return (0, a.jsx)(i(708966).Q, {
                            iconGroup: i(392241).P,
                            variantName: "default",
                            style: {
                                width: 16,
                                height: 16
                            }
                        });
                    case "gemini":
                        return (0, a.jsx)(i(708966).Q, {
                            iconGroup: i(765875).t,
                            variantName: "default",
                            style: {
                                width: 16,
                                height: 16
                            }
                        });
                    default:
                        return o ? null : (0, a.jsx)(i(708966).Q, {
                            iconGroup: i(433170).G,
                            variantName: "default",
                            colorVariant: "primary",
                            style: {
                                width: 16,
                                height: 16
                            }
                        })
                }
            }
        },
        476081: (e, t, i) => {
            i.d(t, {
                l: () => a
            });
            async function a(e) {
                var t;
                let {
                    environment: a,
                    blockStore: o,
                    rect: n,
                    property_id: r,
                    from: l
                } = e;
                if (i(332190).A.hasContent()) return void(0, i(58931)._y)({
                    environment: a,
                    reason: "starting_new"
                });
                let s = i(496704).K.getRect(o);
                if (!s) return;
                let d = new(i(478597)).A(a, (0, i(226221).e)(o.pointer.spaceId)),
                    c = s.width,
                    u = s.height,
                    m = s.right - c;
                i(332190).A.setState({
                    open: !0,
                    rect: n || new DOMRect(m, s.top, c, u),
                    type: "block",
                    content: "comment",
                    blockStore: o,
                    blockId: o.id,
                    discussionInputStore: d,
                    property_id: r,
                    lastKnownBlockStore: o,
                    from: l
                }), (0, i(661767).V)({
                    element: null == (t = i(862921).A.UpdateSidebarCommentScroller) ? void 0 : t.getNode(),
                    environment: a,
                    options: {
                        top: 0,
                        behavior: "smooth"
                    }
                }), i(827862).A.setActiveWithSource("text_annotation"), await (0, i(745990).M)({
                    discussionInputStore: d,
                    environment: a
                }), i(65255).j4(a, {
                    from: l
                })
            }
        },
        476309: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => a,
                pencilLineFillSmallIcon: () => o
            }), i(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.91 3.09 12.44 9.86",
                    svg: (0, i(474848).jsx)("path", {
                        d: "m10.643 5.376.747-.747V4.61a.93.93 0 0 0-.059-1.243.93.93 0 0 0-1.307 0l-.695.694zm-6.858 6.858 6.473-6.473-1.314-1.314-6.478 6.468a1.2 1.2 0 0 0-.267.438l-.27.875-.003.008c-.084.314.206.652.549.534l.859-.266c.17-.047.32-.14.45-.27m9.816.716H4.624l1.5-1.5H13.6a.75.75 0 0 1 0 1.5"
                    })
                },
                o = (0, i(104509).wt)("pencilLineFillSmall", a, "fillSmall")
        },
        512342: (e, t, i) => {
            i.d(t, {
                LB: () => n,
                VT: () => a,
                vr: () => o
            });
            let a = (0, i(109939).YK)({
                    askAI: {
                        defaultMessage: "Ask AI",
                        id: "id.completions.askAI"
                    },
                    genericHelpMeWrite: {
                        defaultMessage: "{filter}",
                        id: "id.completions.genericHelpMeWrite"
                    },
                    summarize: {
                        defaultMessage: "Summarize",
                        id: "id.completions.summarize"
                    },
                    findActionItems: {
                        defaultMessage: "Find action items",
                        id: "id.completions.findActionItems"
                    },
                    autofillSummary: {
                        defaultMessage: "Summary",
                        id: "id.completions.autofillSummary"
                    },
                    autofillTranslate: {
                        defaultMessage: "Translate",
                        id: "id.completions.autofillTranslate"
                    },
                    autofillExtract: {
                        defaultMessage: "Key info",
                        id: "id.completions.autofillExtract"
                    },
                    autofillCustom: {
                        defaultMessage: "Custom autofill",
                        id: "id.completions.autofillCustom"
                    }
                }),
                o = {
                    text: {
                        summarize: {
                            name: a.autofillSummary,
                            svg: i(636434).P
                        },
                        translate: {
                            name: a.autofillTranslate,
                            svg: i(740902).textTranslateIcon
                        },
                        extract: {
                            name: a.autofillExtract,
                            svg: i(774458).n
                        },
                        custom: {
                            name: a.autofillCustom,
                            svg: i(312528).x
                        }
                    },
                    select: {
                        select: {
                            name: a.autofillCustom,
                            svg: i(312528).x
                        }
                    },
                    multi_select: {
                        select: {
                            name: a.autofillCustom,
                            svg: i(312528).x
                        }
                    }
                };

            function n(e) {
                let {
                    origin: t
                } = e;
                if (t instanceof i(970831).B) {
                    let e = i(240414).T.findNodeFromStore(t);
                    return e ? ("table" === t.getType() && (e = e.querySelector(`.${i(962817).rb}.notion-table-block`) ? ? e), e.getBoundingClientRect()) : void 0
                }
                return t instanceof HTMLElement ? t.getBoundingClientRect() : t
            }
        },
        573271: (e, t, i) => {
            i.d(t, {
                w: () => x
            });
            var a = i(296540);
            i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(823215), i(354520), i(581454);
            var o = i(474848);
            let n = (0, i(109939).YK)({
                    speed: {
                        id: "modelCardPopover.speed",
                        defaultMessage: "Speed"
                    },
                    intelligence: {
                        id: "modelCardPopover.intelligence",
                        defaultMessage: "Intelligence"
                    },
                    cost: {
                        id: "modelCardPopover.cost",
                        defaultMessage: "Cost"
                    },
                    freeMessage: {
                        id: "modelCardPopover.freeMessage",
                        defaultMessage: "Custom agents are currently free to try in beta. <a>Learn more</a>."
                    },
                    freeMessageDatabaseAgents: {
                        id: "modelCardPopover.freeMessageDatabaseAgents",
                        defaultMessage: "Database Agents are currently free to try in Beta. <a>Learn more</a>."
                    },
                    autoDescription: {
                        id: "modelCardPopover.autoDescription",
                        defaultMessage: "Automatically selects the best model for each task."
                    },
                    smallModelWarning: {
                        id: "modelCardPopover.openSourceWarning",
                        defaultMessage: "Be cautious when working with untrusted data, as smaller models may be more susceptible to prompt injection."
                    }
                }),
                r = {
                    popoverContent: {
                        width: 250,
                        paddingInlineStart: 14,
                        paddingInlineEnd: 20,
                        paddingBlock: 12,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8
                    },
                    attributeLabel: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        flexShrink: 0
                    },
                    coinIcon: {
                        color: i(632079).Tj.yellow.icon.accentPrimary
                    },
                    barFilled: {
                        width: 20,
                        height: 3,
                        borderRadius: 1.5,
                        backgroundColor: i(632079).Tj.icon.secondary
                    },
                    barEmpty: {
                        width: 20,
                        height: 3,
                        borderRadius: 1.5,
                        backgroundColor: i(632079).Tj.background.tertiary
                    },
                    footer: {
                        borderBlockStart: `1px solid ${i(632079).Tj.border.secondary}`,
                        paddingBlockStart: 10,
                        marginBlockStart: 2,
                        marginInlineStart: -14,
                        marginInlineEnd: -20,
                        paddingInlineStart: 14,
                        paddingInlineEnd: 20
                    },
                    learnMoreLink: {
                        color: "inherit",
                        textDecoration: "underline",
                        cursor: "pointer",
                        fontWeight: i(699422).Wy.medium
                    },
                    warningBanner: {
                        paddingBlockEnd: 10,
                        borderBlockEnd: `1px solid ${i(632079).Tj.border.secondary}`,
                        marginBlockEnd: 2,
                        marginInlineStart: -14,
                        marginInlineEnd: -20,
                        paddingInlineStart: 14,
                        paddingInlineEnd: 20
                    }
                },
                l = {
                    current: void 0
                };

            function s(e) {
                (void 0 === e || l.current === e) && (l.current = void 0)
            }

            function d(e) {
                let {
                    children: t,
                    ...n
                } = e, [r, d] = (0, a.useState)(!1), u = (0, a.useRef)(void 0), m = (0, a.useRef)(null), p = (0, a.useRef)(null), g = (0, a.useCallback)(() => {
                    void 0 !== u.current && (clearTimeout(u.current), u.current = void 0)
                }, []), f = (0, a.useCallback)(() => {
                    g(), d(!1), s(f)
                }, [g]), h = (0, a.useCallback)(() => {
                    l.current && l.current !== f && l.current(), l.current = f, g(), d(!0)
                }, [g, f]), _ = (0, a.useCallback)(() => {
                    g(), u.current = setTimeout(() => {
                        var e, t;
                        u.current = void 0, null != (e = m.current) && e.matches(":hover") || null != (t = p.current) && t.matches(":hover") || (d(!1), s())
                    }, 150)
                }, [g]);
                return (0, a.useEffect)(() => {
                    if (r) return document.addEventListener("mousemove", e), () => {
                        document.removeEventListener("mousemove", e)
                    };

                    function e(e) {
                        let t = m.current,
                            i = p.current;
                        t && i && (function(e) {
                            let {
                                px: t,
                                py: i,
                                triggerRect: a,
                                popoverRect: o
                            } = e;
                            if (o.right <= a.left) {
                                let e = a.left - o.right;
                                if (e <= 0 || t > a.left || t < o.right) return !1;
                                let n = (a.left - t) / e,
                                    r = a.top + n * (o.top - a.top),
                                    l = a.bottom + n * (o.bottom - a.bottom);
                                return i >= r && i <= l
                            }
                            let n = o.left - a.right;
                            if (n <= 0 || t < a.right || t > o.left) return !1;
                            let r = (t - a.right) / n,
                                l = a.top + r * (o.top - a.top),
                                s = a.bottom + r * (o.bottom - a.bottom);
                            return i >= l && i <= s
                        }({
                            px: e.clientX,
                            py: e.clientY,
                            triggerRect: t.getBoundingClientRect(),
                            popoverRect: i.getBoundingClientRect()
                        }) ? g() : _())
                    }
                }, [r, g, _]), (0, a.useEffect)(() => () => {
                    g(), s(f)
                }, [g, f]), (0, o.jsx)(i(182718).zD, {
                    disableMouseCapture: !0,
                    preventCaptureEsc: !0,
                    preventScaleTransition: !0,
                    preventOpacityTransition: !0,
                    originGap: 4,
                    open: r,
                    popupType: i(182718).nl.Popup,
                    alignmentToOrigin: "start",
                    placementToOrigin: "right",
                    trapFocus: !1,
                    content: () => (0, o.jsx)("div", {
                        ref: p,
                        onMouseEnter: h,
                        onMouseLeave: _,
                        onFocus: h,
                        onBlur: _,
                        children: (0, o.jsx)(c, {
                            content: n
                        })
                    }),
                    children: (0, o.jsx)("div", {
                        ref: m,
                        onMouseEnter: h,
                        onMouseLeave: _,
                        onFocus: h,
                        onBlur: _,
                        children: t
                    })
                })
            }

            function c({
                content: e
            }) {
                return (0, o.jsx)("div", {
                    style: r.popoverContent,
                    children: "attributes" === e.type ? (0, o.jsx)(u, {
                        modelCardAttributes: e.modelCardAttributes,
                        showSmallOrOpenModelWarning: e.showSmallOrOpenModelWarning,
                        isDatabaseAgent: e.isDatabaseAgent
                    }) : (0, o.jsx)(i(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        children: e.description
                    })
                })
            }

            function u({
                modelCardAttributes: e,
                showSmallOrOpenModelWarning: t,
                isDatabaseAgent: a
            }) {
                let l = (0, i(909212).Mm)(),
                    s = (0, i(83208).X)("database_agent_rebrand"),
                    d = a && !s ? n.freeMessageDatabaseAgents : n.freeMessage,
                    c = a ? (0, i(442564).x)("guides.databaseAgentPricing") : (0, i(442564).x)("guides.customAgentPricing");
                return (0, o.jsxs)(o.Fragment, {
                    children: [t ? (0, o.jsx)("div", {
                        style: r.warningBanner,
                        children: (0, o.jsx)(i(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            children: (0, o.jsx)(i(109939).sA, { ...n.smallModelWarning
                            })
                        })
                    }) : void 0, (0, o.jsx)(m, {
                        label: (0, o.jsx)(i(109939).sA, { ...n.speed
                        }),
                        value: e.speed
                    }), (0, o.jsx)(m, {
                        label: (0, o.jsx)(i(109939).sA, { ...n.intelligence
                        }),
                        value: e.intelligence
                    }), (0, o.jsx)(m, {
                        label: (0, o.jsxs)("span", {
                            style: r.attributeLabel,
                            children: [(0, o.jsx)(i(109939).sA, { ...n.cost
                            }), (0, o.jsx)("span", {
                                style: r.coinIcon,
                                children: (0, o.jsx)(i(16275).I, {
                                    icon: i(225206).y,
                                    size: "xs"
                                })
                            })]
                        }),
                        value: e.cost
                    }), l ? (0, o.jsx)("div", {
                        style: r.footer,
                        children: (0, o.jsx)(i(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            children: (0, o.jsx)(i(109939).sA, { ...d,
                                values: {
                                    a: e => (0, o.jsx)("a", {
                                        href: c,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: r.learnMoreLink,
                                        children: e
                                    })
                                }
                            })
                        })
                    }) : void 0]
                })
            }

            function m({
                label: e,
                value: t
            }) {
                return (0, o.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [(0, o.jsx)(i(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "secondary",
                        children: e
                    }), (0, o.jsx)(i(4458).fI, {
                        gap: 4,
                        alignItems: "center",
                        children: Array.from({
                            length: 5
                        }, (e, i) => (0, o.jsx)("div", {
                            style: i < t ? r.barFilled : r.barEmpty
                        }, i))
                    })]
                })
            }
            let p = (0, i(109939).YK)({
                save: {
                    id: "modelPicker.slotEdit.save",
                    defaultMessage: "Save"
                },
                editLabel: {
                    id: "modelPicker.slotEdit.editLabel",
                    defaultMessage: "Edit slot name"
                },
                inputPlaceholder: {
                    id: "modelPicker.slotEdit.inputPlaceholder",
                    defaultMessage: "Enter model slug"
                }
            });

            function g({
                menuItemProps: e,
                slotModel: t,
                modelFamily: n,
                title: r,
                isChecked: l,
                isDisabled: s,
                beta: d,
                spaceStore: c,
                environment: u
            }) {
                var m;
                let [f, h] = (0, a.useState)(!1), [_, k] = (0, a.useState)(""), [M, y] = (0, a.useState)(!1), v = (0, i(109939).tz)(), b = (0, i(682985).K8)(() => {
                    var e;
                    return (null == (e = c.getModel()) ? void 0 : e.getModelSlotVendorNameMapping()) ? ? {}
                }, [c]), x = (0, a.useCallback)(() => {
                    h(!0), k(b[t] ? ? "")
                }, [t, b]), w = (0, a.useCallback)(() => {
                    h(!1), k("")
                }, []), P = (0, a.useCallback)(() => {
                    let e = _.trim() || void 0,
                        a = b[t],
                        o = { ...b
                        };
                    if (void 0 === e ? delete o[t] : o[t] = e, e !== a) {
                        let {
                            serverCommitResult: e
                        } = (0, i(377796).createAndCommit)({
                            userAction: "ModelPicker.updateModelSlotOverride",
                            environment: u,
                            cellTarget: {
                                spaceWithId: c.id
                            },
                            canUndo: !1,
                            perform: e => {
                                (0, i(818116).R)(c, e, {
                                    ai_model_slot_vendor_name_mapping: o
                                })
                            }
                        });
                        e.then(() => {
                            i(295206).P.resetData(u, {
                                spaceId: c.id
                            })
                        })
                    }
                    w()
                }, [w, _, u, t, b, c]), A = (0, a.useCallback)(e => {
                    k(e.target.value)
                }, []), C = (0, a.useCallback)(e => {
                    e.preventDefault(), P()
                }, [P]);
                if (f) return (0, o.jsx)(i(310324).Ay, {
                    ref: e.ref,
                    onMouseEnter: e.onMouseEnter,
                    left: (0, o.jsx)(i(437225).H, {
                        modelFamily: n
                    }),
                    value: _,
                    placeholder: v.formatMessage(p.inputPlaceholder),
                    onChange: A,
                    onSubmit: C,
                    onBlur: w,
                    focusInitial: !0,
                    selectAll: !0,
                    right: (0, o.jsx)(i(988022).p, {
                        size: "sm",
                        onMouseDown: e => e.preventDefault(),
                        onClick: P,
                        children: (0, o.jsx)(i(111010).D, {
                            styleKey: "bodySmMedium",
                            children: v.formatMessage(p.save)
                        })
                    })
                });
                let S = (null == (m = b[t]) ? void 0 : m.trim()) || r;
                return (0, o.jsx)(i(95582).A, { ...e,
                    icon: (0, o.jsx)(i(437225).H, {
                        modelFamily: n
                    }),
                    isChecked: l && !e.focused,
                    title: (0, o.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        gap: 6,
                        children: [(0, o.jsx)(i(111010).D, {
                            styleKey: "bodyRegular",
                            children: S
                        }), d ? (0, o.jsx)(i(18274).A, {}) : void 0]
                    }),
                    disabled: s,
                    disabledFeedback: s,
                    right: (0, o.jsx)(i(369064).N, {
                        capture: M,
                        debugName: "SlotModelMenuItemEdit",
                        onEnter: x,
                        children: (0, o.jsx)(i(374533).A, {
                            size: "xs",
                            icon: i(476309).pencilLineFillSmallIcon,
                            disallowTabbing: !e.focused,
                            onClick: e => {
                                e.stopPropagation(), x()
                            },
                            onFocus: () => y(!0),
                            onBlur: () => y(!1),
                            ariaLabel: v.formatMessage(p.editLabel)
                        })
                    })
                })
            }
            let f = {
                    paddingInline: 8,
                    paddingBlock: 6
                },
                h = {
                    height: 28,
                    borderRadius: 4
                },
                _ = {
                    display: "flex",
                    alignItems: "center",
                    gap: 2
                },
                k = ["anthropic-haiku-4.5", "gingerbread"],
                M = (0, i(109939).YK)({
                    sectionTitle: {
                        id: "modelMenuHelpers.councilChat.sectionTitle",
                        defaultMessage: "Multi-model"
                    },
                    opusAndGpt: {
                        id: "modelMenuHelpers.councilChat.opusAndGpt",
                        defaultMessage: "Opus + GPT"
                    },
                    opusAndGemini: {
                        id: "modelMenuHelpers.councilChat.opusAndGemini",
                        defaultMessage: "Opus + Gemini"
                    },
                    gptAndGemini: {
                        id: "modelMenuHelpers.councilChat.gptAndGemini",
                        defaultMessage: "GPT + Gemini"
                    },
                    opusGptAndGemini: {
                        id: "modelMenuHelpers.councilChat.opusGptAndGemini",
                        defaultMessage: "Opus + GPT + Gemini"
                    }
                }),
                y = [{
                    key: "council-opus-gpt",
                    members: [i(19631)._V, i(19631).wB],
                    label: M.opusAndGpt
                }, {
                    key: "council-opus-gemini",
                    members: [i(19631)._V, i(19631).dK],
                    label: M.opusAndGemini
                }, {
                    key: "council-gpt-gemini",
                    members: [i(19631).wB, i(19631).dK],
                    label: M.gptAndGemini
                }, {
                    key: "council-opus-gpt-gemini",
                    members: [i(19631)._V, i(19631).wB, i(19631).dK],
                    label: M.opusGptAndGemini
                }];

            function v({
                menuItemProps: e,
                dropdownConfig: t,
                environment: a,
                spaceId: r,
                config: l,
                agentModelConfig: s,
                showModelCardPopover: c,
                isDatabaseAgent: u,
                spaceStore: m
            }) {
                let {
                    modelFamily: p,
                    modelCardAttributes: f
                } = (0, i(682985).K8)(() => {
                    var e;
                    return {
                        modelFamily: "default" !== t.askMode ? i(295206).P.getModelFamily(a, r, t.askMode) : void 0,
                        modelCardAttributes: c && "default" !== t.askMode ? null == (e = i(295206).P.getModelEntry(a, r, t.askMode)) ? void 0 : e.modelCardAttributes : void 0
                    }
                }, [t.askMode, a, r, c]), h = t.isDisabled ? ? !1;
                if ("default" !== t.askMode && (0, i(722371).Xk)(i(129593).CP, t.askMode)) return (0, o.jsx)(g, {
                    menuItemProps: e,
                    slotModel: t.askMode,
                    modelFamily: p,
                    title: t.title,
                    isChecked: b(l, t, s),
                    isDisabled: h,
                    beta: t.beta,
                    spaceStore: m,
                    environment: a
                });
                let _ = (0, o.jsx)(i(51831).m, {
                    disableTooltip: !h,
                    content: () => (0, o.jsx)(i(109939).sA, { ...i(352120).$.modelProviderDown
                    }),
                    children: a => (0, o.jsx)(i(95582).A, { ...(0, i(63390).A)(e, a),
                        icon: (0, o.jsx)(i(437225).H, {
                            modelFamily: p
                        }),
                        isChecked: b(l, t, s),
                        title: (0, o.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            children: [(0, o.jsx)(i(111010).D, {
                                styleKey: "bodyRegular",
                                children: t.title
                            }), t.beta ? (0, o.jsx)(i(18274).A, {}) : void 0]
                        }),
                        disabled: h,
                        disabledFeedback: h
                    })
                });
                return f ? (0, o.jsx)(d, {
                    type: "attributes",
                    modelCardAttributes: f,
                    showSmallOrOpenModelWarning: "mystery" === p || (0, i(722371).Xk)(k, t.askMode),
                    isDatabaseAgent: u,
                    children: _
                }) : c && "default" === t.askMode ? (0, o.jsx)(d, {
                    type: "description",
                    description: (0, o.jsx)(i(109939).sA, { ...n.autoDescription
                    }),
                    children: _
                }) : _
            }

            function b(e, t, i) {
                if (e.type !== t.config.type) return !1;
                if ("markdown-chat" === e.type && "markdown-chat" === t.config.type) return e.model === t.config.model;
                if ("workflow" === e.type)
                    if ("default" === t.askMode) return (null == i ? void 0 : i.type) === void 0;
                    else return (null == i ? void 0 : i.type) === t.askMode;
                return !1
            }

            function x(e) {
                let {
                    aiChatFeatureController: t,
                    buttonPopupParent: n,
                    config: r,
                    environment: l,
                    inputMode: s,
                    threadMode: d,
                    onChangeNextConfig: c,
                    spaceStore: u,
                    inferenceInfo: m,
                    showModelCardPopover: p = !1,
                    isDatabaseAgent: g
                } = e, k = (0, i(109939).tz)(), b = (0, i(909212).i7)(), x = (0, i(83208).X)("agent_model_picker"), w = (0, a.useMemo)(() => (0, i(220800).kD)(r), [r]), P = "custom_agent" === t.aiChatType || "custom_agent_activity" === t.aiChatType || "custom_agent_preview" === t.aiChatType ? "custom_agent" : "workflow";
                return (0, i(682985).K8)(() => {
                    if (!u) return [];
                    let e = (0, i(317606)._y)({
                        intl: k,
                        isAgentEnabled: b,
                        environment: l,
                        spaceId: u.id,
                        hideWorkspaceSectionTitle: !0,
                        workflowMode: P
                    });
                    return function(e) {
                        let {
                            askDropdownConfigSections: t,
                            buttonPopupParent: a,
                            config: n,
                            environment: r,
                            supportsConfigTypeChange: l,
                            intl: s,
                            onChangeNextConfig: d,
                            spaceStore: c,
                            showDebugAgentModelPicker: u,
                            agentModelConfig: m,
                            inferenceInfo: p,
                            showModelCardPopover: g,
                            isDatabaseAgent: k,
                            supportsCouncilChat: b = !1
                        } = e, x = c.id, w = e => {
                            let t = e.items;
                            if (l || (t = t.filter(e => e.config.type === n.type)), 0 === t.length) return;
                            let a = t.map(e => ({
                                    key: e.askMode,
                                    render: t => (0, o.jsx)(v, {
                                        menuItemProps: t,
                                        dropdownConfig: e,
                                        environment: r,
                                        spaceId: x,
                                        config: n,
                                        agentModelConfig: m,
                                        showModelCardPopover: g,
                                        isDatabaseAgent: k,
                                        spaceStore: c
                                    }),
                                    action: () => {
                                        (0, i(104310).u)({
                                            event: {
                                                eventName: "clicked_ai_chat_mode",
                                                eventProperties: {
                                                    mode: e.config.type,
                                                    model: e.askMode,
                                                    ai_session_id: p.aiSessionId,
                                                    ai_inference_id: p.aiDraftInferenceId
                                                }
                                            }
                                        });
                                        let t = e.config;
                                        "default" === e.askMode ? "workflow" === t.type ? (d({ ...n,
                                            model: void 0,
                                            modelFromUser: !1,
                                            type: "workflow"
                                        }), (0, i(432155).Oq)(x, {
                                            model: void 0
                                        })) : "search" === t.type && d((0, i(862451).getDefaultNewThreadConfigFromUserPreference)({
                                            environment: r,
                                            spaceId: x
                                        })) : "markdown-chat" === t.type ? d({ ...n,
                                            model: t.model,
                                            type: t.type
                                        }) : "workflow" === t.type && void 0 !== t.model && (d({ ...n,
                                            model: t.model,
                                            modelFromUser: t.modelFromUser,
                                            type: t.type
                                        }), (0, i(432155).Oq)(x, {
                                            model: t.model
                                        }))
                                    }
                                })),
                                u = e.isLoading ? [...a, {
                                    key: "loading",
                                    render: () => (0, o.jsx)("div", {
                                        style: f,
                                        children: (0, o.jsx)(i(795830).P, {
                                            style: h
                                        })
                                    }),
                                    action: () => {}
                                }] : a;
                            return {
                                key: e.id,
                                render: t => (0, o.jsx)(i(844565).A, { ...t,
                                    title: e.sectionTitle ? s.formatMessage(e.sectionTitle) : void 0
                                }),
                                items: u
                            }
                        }, P = t.filter(e => "markdown-chat" !== e.configType).map(w).filter(i(722371).O9), A = t.filter(e => "markdown-chat" === e.configType).map(w).filter(i(722371).O9), C = [...P];
                        if (u && "council-chat" !== n.type) {
                            let e = c.getModel();
                            if (!e) return C;
                            let t = i(295206).P.getData(r, {
                                    spaceId: x
                                }),
                                l = t ? new Set(t.map(e => e.model)) : void 0,
                                u = void 0 !== l,
                                p = (0, i(317606).BU)(u ? i(229820).AH.filter(e => !(null != l && l.has(e))) : i(229820).AH, r, x),
                                g = (0, i(317606).BU)(u ? i(229820).B9.filter(e => !(null != l && l.has(e))) : i(229820).B9, r, x),
                                f = e => e.filter(e => !i(229820).pk.includes(e)),
                                h = t => t.map(t => {
                                    let l = i(295206).P.getModelFamily(r, x, t);
                                    return {
                                        key: t,
                                        render: e => (0, o.jsx)(i(95582).A, { ...e,
                                            icon: (0, o.jsx)(i(437225).H, {
                                                modelFamily: l
                                            }),
                                            title: s.formatMessage(i(229820).Js[t]),
                                            isChecked: (null == m ? void 0 : m.type) === t
                                        }),
                                        action: () => {
                                            d({ ...n,
                                                type: "workflow",
                                                model: t,
                                                modelFromUser: !0
                                            }), (0, i(432155).Oq)(e.id, {
                                                model: t
                                            }), a.close()
                                        }
                                    }
                                }),
                                _ = f(p);
                            _.length > 0 && C.push({
                                key: "agent-fast",
                                render: e => (0, o.jsx)(i(844565).A, { ...e,
                                    title: (0, o.jsx)(i(109939).sA, { ...i(229820).Js.fastSection
                                    })
                                }),
                                items: h(_)
                            });
                            let k = f(g);
                            k.length > 0 && C.push({
                                key: "agent-intelligent",
                                render: e => (0, o.jsx)(i(844565).A, { ...e,
                                    title: (0, o.jsx)(i(109939).sA, { ...i(229820).Js.intelligentSection
                                    })
                                }),
                                items: h(k)
                            })
                        }
                        if (C.push(...A), b) {
                            let e = y.map(e => {
                                let t = function(e, t) {
                                    if ("council-chat" !== e.type || e.members.length !== t.length) return !1;
                                    let i = new Set(e.members.map(e => e.memberId));
                                    return t.every(e => i.has(e.memberId))
                                }(n, e.members);
                                return {
                                    key: e.key,
                                    render: a => (0, o.jsx)(i(95582).A, { ...a,
                                        icon: (0, o.jsx)("div", {
                                            style: _,
                                            children: e.members.map(e => (0, o.jsx)(i(437225).H, {
                                                modelFamily: e.modelFamily
                                            }, e.memberId))
                                        }),
                                        isChecked: t,
                                        title: s.formatMessage(e.label)
                                    }),
                                    action: () => {
                                        if ((0, i(104310).u)({
                                                event: {
                                                    eventName: "clicked_ai_chat_mode",
                                                    eventProperties: {
                                                        mode: "council-chat",
                                                        model: e.members[0].model,
                                                        ai_session_id: p.aiSessionId,
                                                        ai_inference_id: p.aiDraftInferenceId
                                                    }
                                                }
                                            }), t) d((0, i(180139).bz)("search"));
                                        else {
                                            let t = (0, i(180139).bz)("council-chat");
                                            if ("council-chat" !== t.type) return;
                                            d({ ...t,
                                                members: e.members
                                            })
                                        }
                                    }
                                }
                            });
                            C.push({
                                key: "council-chat",
                                render: e => (0, o.jsx)(i(844565).A, { ...e,
                                    title: (0, o.jsx)(i(109939).sA, { ...M.sectionTitle
                                    })
                                }),
                                items: e
                            })
                        }
                        return C
                    }({
                        askDropdownConfigSections: e,
                        buttonPopupParent: n,
                        config: r,
                        environment: l,
                        inferenceInfo: m,
                        supportsConfigTypeChange: t.supportsConfigTypeChanges({
                            mode: s,
                            threadMode: d
                        }),
                        intl: k,
                        onChangeNextConfig: c,
                        spaceStore: u,
                        showDebugAgentModelPicker: b && x,
                        agentModelConfig: w,
                        showModelCardPopover: p,
                        isDatabaseAgent: g,
                        supportsCouncilChat: t.supportsCouncilChat
                    })
                }, [w, x, t, n, r, l, s, d, k, b, c, u, m, P, p, g])
            }
        },
        575422: (e, t, i) => {
            i.d(t, {
                m: () => o
            });
            let a = (0, i(109939).YK)({
                untitledAgent: {
                    id: "workflow.emptyWorkflowTitle",
                    defaultMessage: "Untitled agent"
                }
            });

            function o(e, t, i) {
                var o;
                return {
                    name: e.getName() || i || t.formatMessage(a.untitledAgent),
                    icon: e.getRawIcon() || "",
                    isLite: (null == (o = e.getData()) ? void 0 : o.isLite) ? ? !1
                }
            }
        },
        607372: (e, t, i) => {
            i.d(t, {
                Mc: () => o,
                NM: () => a,
                Nf: () => r,
                dx: () => n
            }), i(16280), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(672577), i(737550);
            let a = new Set(["sites_custom_hostnames_add_on_monthly_usd_4", "sites_custom_hostnames_add_on_yearly_usd_36"]),
                o = ["ai_add_on_employee_discount_monthly", "ai_add_on_employee_discount_yearly"],
                n = ["ai_add_on_standard_sales_assisted", "ai_add_on_standard_sales_assisted_eur", "ai_add_on_standard_sales_assisted_gbp", "ai_add_on_standard_sales_assisted_jpy", "ai_add_on_standard_sales_assisted_krw", "ai_add_on_employee_discount_monthly", "ai_add_on_employee_discount_yearly", "ai_add_on_marketing_discount_monthly", "ai_add_on_marketing_discount_yearly", "sites_custom_hostnames_add_on_sales_assisted_gbp", "sites_custom_hostnames_add_on_sales_assisted_usd", "sites_custom_hostnames_add_on_sales_assisted_eur", "sites_custom_hostnames_add_on_sales_assisted_jpy", "sites_custom_hostnames_add_on_sales_assisted_krw", "ai_add_on_standard_trial_monthly_usd", "ai_add_on_standard_trial_yearly_usd", "ai_add_on_standard_trial_monthly_eur", "ai_add_on_standard_trial_yearly_eur", "ai_add_on_standard_trial_monthly_gbp", "ai_add_on_standard_trial_yearly_gbp", "ai_add_on_standard_trial_monthly_jpy", "ai_add_on_standard_trial_yearly_jpy", "ai_add_on_standard_trial_monthly_krw", "ai_add_on_standard_trial_yearly_krw", "free_ai_credit_pack_100_monthly", "ai_add_on_standard_monthly_10", "ai_add_on_standard_monthly_eur", "ai_add_on_standard_monthly_gbp", "ai_add_on_standard_monthly_jpy", "ai_add_on_standard_monthly_krw", "ai_add_on_standard_yearly_96", "ai_add_on_standard_yearly_eur", "ai_add_on_standard_yearly_gbp", "ai_add_on_standard_yearly_jpy", "ai_add_on_standard_yearly_krw", "sites_custom_hostnames_add_on_monthly_usd", "sites_custom_hostnames_add_on_yearly_usd", "sites_custom_hostnames_add_on_monthly_usd_4", "sites_custom_hostnames_add_on_yearly_usd_36", "sites_custom_hostnames_add_on_monthly_eur", "sites_custom_hostnames_add_on_yearly_eur", "sites_custom_hostnames_add_on_monthly_gbp", "sites_custom_hostnames_add_on_yearly_gbp", "sites_custom_hostnames_add_on_monthly_jpy", "sites_custom_hostnames_add_on_yearly_jpy", "sites_custom_hostnames_add_on_monthly_krw", "sites_custom_hostnames_add_on_yearly_krw", "ai_credit_pack_100_monthly_usd_revised", "ai_credit_pack_100_monthly_eur", "ai_credit_pack_100_monthly_gbp", "ai_credit_pack_100_monthly_jpy", "ai_credit_pack_100_monthly_krw"];

            function r(e) {
                return e === i(101787)._D_
            }
        },
        651790: (e, t, i) => {
            i.r(t), i.d(t, {
                AgentIcon: () => n,
                DefaultAgentIcon: () => l
            });
            var a = i(296540),
                o = i(474848);

            function n(e) {
                let {
                    agentIcon: t,
                    workflowStore: n,
                    size: r,
                    animated: l = !1
                } = e, s = (0, i(83208).X)("animated_custom_agent_faces"), d = (0, a.useMemo)(() => (0, i(514827).D)({
                    workflowStore: n,
                    workflowIcon: t,
                    size: r,
                    animated: l && s
                }), [t, n, r, l, s]);
                return (0, o.jsx)(i(569553).B6, {
                    icon: d,
                    iconRecordCategory: "workflow",
                    isEmptyPage: !1,
                    size: r,
                    disabled: !0
                })
            }
            let r = {
                cursor: "default"
            };

            function l(e) {
                let t = (0, a.useCallback)(() => {
                    if (e.size < 22) return "xsmall";
                    if (e.size < 28) return "avatar";
                    if (e.size < 36) return "small";
                    if (e.size < 42) return "medium";
                    if (e.size < 48) return "medium_plus";
                    else if (e.size < 50) return "medium_large";
                    else if (e.size < 94) return "large";
                    else return "xlarge"
                }, [e.size]);
                return (0, o.jsx)(i(971375).x, {
                    variant: t(),
                    style: r
                })
            }
        },
        661044: (e, t, i) => {
            function a(e, t = !0) {
                t && function(e, t) {
                    if ((0, i(730994).Ku)(e), ("assistantCompletionPopup" === t.type || "agentCompletionPopup" === t.type) && ("results" === t.stage || "initialPrompt" === t.stage) && ("textSelection" === t.context.type || "cursor" === t.context.type)) {
                        let a = t.context.textSelection;
                        i(374176).default.afterNextFlush(() => {
                            (0, i(726923).setMultiSelection)({
                                multiSelection: a
                            }),
                            function(e) {
                                let {
                                    multiSelection: t,
                                    environment: a
                                } = e;
                                if (void 0 === t.start || void 0 === t.end || !Number.isFinite(t.start.index) || !Number.isFinite(t.end.index)) return;
                                let o = i(521595).n.findNodeFromStore(t.start.store),
                                    n = i(521595).n.findNodeFromStore(t.end.store);
                                if (!o || !n) return;
                                let r = (0, i(536614).vA)(o, t.start.index),
                                    l = (0, i(536614).vA)(n, t.end.index),
                                    s = document.createRange();
                                s.setStart(r.container, r.offset), s.setEnd(l.container, l.offset), i(239134).set(s, a.device)
                            }({
                                multiSelection: a,
                                environment: e
                            })
                        })
                    }
                }(e, i(304636).default.state), i(304636).default.setState({
                    type: "closed"
                })
            }
            async function o(e) {
                let {
                    environment: t,
                    from: a,
                    forceAgentWriter: o
                } = e, {
                    context: n,
                    prefilledValue: r,
                    sessionId: l
                } = e, {
                    assistantDependency: s
                } = await Promise.resolve().then(i.bind(i, 310639)), d = await s.load();
                if (!await d.assistantMenuActions.closeAssistantRightHandSideMenu({
                        environment: t
                    })) return;
                let c = {
                    type: "closed"
                };
                if ("closed" === i(304636).default.state.type && (n || (n = (0, i(420459).G4)()), n))
                    if (o || (0, i(828294).a)("agent_writer")) c = {
                        type: "agentCompletionPopup",
                        stage: "initialPrompt",
                        context: n,
                        from: a,
                        prefilledValue: e.prefilledTextValue ? ? (0, i(247438).x9d)(r ? ? ""),
                        pendingSkill: e.agentPrebuiltPromptType,
                        autoSubmit: e.autoSubmit,
                        onAccept: e.onAccept,
                        acceptButtonTooltipOverride: e.acceptButtonTooltipOverride
                    };
                    else {
                        var u;
                        r || (r = ""), l || (l = (0, i(818963).gC)()), c = {
                            type: "assistantCompletionPopup",
                            stage: "initialPrompt",
                            context: n,
                            from: a,
                            prefilledValue: r,
                            sessionId: l,
                            loading: !1,
                            hasErrored: !1
                        };
                        let e = (0, i(974410).f)(null == (u = n) ? void 0 : u.currentPage);
                        e && t.api.callApi({
                            eventName: "publishAiSession",
                            environment: t,
                            data: {
                                inference_type: "writer",
                                spaceId: e.id,
                                id: l,
                                metadata: {
                                    from: a
                                }
                            }
                        })
                    }
                i(304636).default.setState(c),
                    function(e) {
                        let {
                            environment: t,
                            promptForAnalytics: a
                        } = e, {
                            state: o
                        } = i(304636).default;
                        if ("assistantCompletionPopup" === o.type && "results" !== o.stage) {
                            i(218744).default.checkGate({
                                gateName: "mobile_assistant_prevent_clear_selection"
                            }) || (0, i(525779).clear)({
                                environment: t
                            });
                            let e = o.sessionId,
                                n = i(838448).default.getSessionContext(e);
                            i(942806).trackAICompletionPopupOpen(t, {
                                session_id: o.sessionId,
                                prompt_key: (null == a ? void 0 : a.key) ? ? "unknown",
                                from: o.from,
                                sessionContext: n
                            }), (0, i(259413).V)({
                                dismissed: !1,
                                environment: t,
                                trackCreateBlock: i(549960).vH
                            })
                        }
                    }(e)
            }

            function n(e) {
                let {
                    environment: t,
                    prefilledValue: a,
                    from: n
                } = e, r = (0, i(420459).gu)();
                r && o({
                    environment: t,
                    from: n ? ? "page_menu",
                    sessionId: i(92513).JW(),
                    context: r,
                    prefilledValue: a,
                    promptForAnalytics: void 0
                })
            }
            i.r(t), i.d(t, {
                closeInitialPromptAndEndSession: () => a,
                openHelpMeWriteGenericPopup: () => n,
                toggleInitialPrompt: () => o
            })
        },
        765875: (e, t, i) => {
            i.d(t, {
                t: () => a
            });
            let a = (0, i(104509).xh)("googleGemini", {
                default: {
                    loader: () => i.e(19365).then(i.bind(i, 447405))
                }
            })
        },
        813152: (e, t, i) => {
            i.d(t, {
                J: () => n
            });
            var a = i(296540),
                o = i(474848);

            function n(e) {
                let {
                    buttonPopupParent: t,
                    extensionPopupButtonEvents: n,
                    sections: r,
                    menuType: l
                } = e, s = (0, a.useCallback)(() => {
                    t.close()
                }, [t]);
                return (0, o.jsx)(i(747369).A, { ...n,
                    menuType: l,
                    width: l === i(649476).gu.Popup ? 300 : void 0,
                    hideMobileTopbar: !0,
                    children: (0, o.jsx)(i(558045).A, {
                        type: i(558045).O.Vertical,
                        initialFocus: void 0,
                        sections: r,
                        onAccept: s
                    })
                })
            }
        },
        813524: (e, t, i) => {
            i.r(t), i.d(t, {
                exclamationMarkCircleFillSmallIcon: () => o,
                iconDefinition: () => a
            }), i(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.94 12.11 12.1",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M8 1.95a6.05 6.05 0 1 0 0 12.1 6.05 6.05 0 0 0 0-12.1m-.1 3a.55.55 0 0 1 .55.55V8a.55.55 0 0 1-1.1 0V5.5a.55.55 0 0 1 .55-.55m0 6a.65.65 0 1 1 0-1.3.65.65 0 0 1 0 1.3"
                    })
                },
                o = (0, i(104509).wt)("exclamationMarkCircleFillSmall", a, "fillSmall")
        },
        942806: (e, t, i) => {
            function a(e, t) {
                let {
                    user_comment: a,
                    ...o
                } = t;
                (0, i(104310).u)({
                    event: {
                        eventName: "ai_action",
                        eventProperties: o
                    }
                })
            }

            function o(e, t, a) {
                let o = {
                    site: "client",
                    ...a
                };
                (0, i(195857).DO_NOT_USE_trackLegacy)(t, o)
            }

            function n(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "ai_favorite_action",
                        eventProperties: t
                    }
                })
            }

            function r(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "ai_autofill_action",
                        eventProperties: t
                    }
                })
            }

            function l(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "ai_autofill_settings_action",
                        eventProperties: t
                    }
                })
            }

            function s(e, t) {
                if (i(886556).z.isXMLAssistantEnabled()) {
                    var a;
                    let o = (null == (a = t.sessionContext) ? void 0 : a.evaluatorFromStoreState.getTranscript()) ? ? [];
                    i(310639).assistantDependency.load().then(({
                        assistantAnalyticsActions: i
                    }) => {
                        i.trackAssistantOpened(e, {
                            from: t.from,
                            sessionId: t.session_id,
                            isReminder: !1,
                            reminderType: void 0,
                            startTimestamp: Date.now(),
                            transcript: o,
                            hasQuery: !1,
                            searchSessionId: void 0
                        })
                    })
                } else(0, i(104310).u)({
                    event: {
                        eventName: "ai_completion_popup_open",
                        eventProperties: {
                            session_id: t.session_id,
                            prompt_key: t.prompt_key,
                            from: t.from
                        }
                    }
                })
            }

            function d(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "ai_completion_popup_close",
                        eventProperties: t
                    }
                })
            }

            function c(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "ai_assistant_error",
                        eventProperties: t
                    }
                })
            }
            i.r(t), i.d(t, {
                trackAIAction: () => a,
                trackAIAssistantEngineError: () => c,
                trackAICompletionPopupClose: () => d,
                trackAICompletionPopupOpen: () => s,
                trackAIFavoriteAction: () => n,
                trackAiAutofillAction: () => r,
                trackAiAutofillSettingsAction: () => l,
                trackUserFlow: () => o
            })
        },
        971375: (e, t, i) => {
            i.d(t, {
                o: () => n,
                x: () => o
            }), i(296540);
            var a = i(474848);

            function o(e) {
                let {
                    variant: t,
                    imgSource: o,
                    tintColor: r,
                    faceStyle: l,
                    shadowVariant: s = "strong",
                    style: d,
                    ...c
                } = e, u = (0, i(960253).I)(() => {
                    let e = (0, i(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: i(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === s && {
                                boxShadow: e >= 90 ? i(632079).Tj.shadowMDThickerOutline : i(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === s && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? i(632079).Tj.shadowSMThickerOutline : i(632079).Tj.shadow.outline.md
                            },
                            overflow: "hidden",
                            ...d
                        }
                    }
                }, [t, s, d]);
                return (0, a.jsx)("div", { ...c,
                    children: (0, a.jsx)("div", {
                        style: u.faceImgWrap,
                        children: (0, a.jsx)(n, {
                            imgSource: o,
                            variant: t,
                            tintColor: r,
                            style: l
                        })
                    })
                })
            }

            function n(e) {
                let {
                    imgSource: t,
                    variant: o,
                    tintColor: n,
                    style: r,
                    alt: l,
                    ...s
                } = e, d = (0, i(445283).N)(o), c = t ? ? i(200424), u = l ? ? "Notion AI face", m = (0, i(960253).I)(() => ({
                    faceImg: {
                        height: d,
                        width: d,
                        transform: "scaleX(var(--direction, 1))",
                        ...r
                    },
                    tintedFace: {
                        height: d,
                        width: d,
                        transform: "scaleX(var(--direction, 1))",
                        backgroundColor: n,
                        WebkitMaskImage: `url(${c})`,
                        maskImage: `url(${c})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        ...r
                    }
                }), [d, r, n, c]);
                return void 0 !== n ? (0, a.jsx)("div", {
                    style: m.tintedFace,
                    role: "img",
                    "aria-label": u
                }) : (0, a.jsx)("img", { ...s,
                    style: m.faceImg,
                    src: c,
                    alt: u
                })
            }
        }
    }
]);