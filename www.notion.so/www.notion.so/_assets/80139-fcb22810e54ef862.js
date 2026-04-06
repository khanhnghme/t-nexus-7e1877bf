"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [80139], {
        19631: (e, t, a) => {
            a.d(t, {
                _V: () => i,
                dK: () => r,
                wB: () => n
            });
            let i = {
                    memberId: "avocado-froyo-medium",
                    model: "avocado-froyo-medium",
                    displayName: "Claude Opus 4.6",
                    modelFamily: "anthropic"
                },
                n = {
                    memberId: "oval-kumquat-medium",
                    model: "oval-kumquat-medium",
                    displayName: "GPT-5.4",
                    modelFamily: "openai"
                },
                r = {
                    memberId: "gateau-roule",
                    model: "gateau-roule",
                    displayName: "Gemini 3 Pro",
                    modelFamily: "gemini"
                }
        },
        180139: (e, t, a) => {
            a.d(t, {
                iC: () => j,
                cZ: () => S,
                Lj: () => i,
                lA: () => w,
                dL: () => k,
                qr: () => d,
                $_: () => f,
                Ke: () => _,
                RD: () => b,
                hx: () => r,
                _z: () => m,
                PM: () => T,
                sx: () => g,
                jx: () => h,
                tX: () => v,
                vW: () => l,
                s8: () => F,
                bz: () => c,
                d7: () => N,
                x3: () => u,
                tT: () => x,
                c9: () => y,
                rL: () => o
            }), a(16280), a(898992), a(354520);
            let i = "personal-agent",
                n = {
                    search: {
                        type: "search",
                        scopeForNextSearch: {
                            type: "everything"
                        },
                        filtersForNextSearch: a(585464).NH,
                        searchSessionId: void 0,
                        useWebSearch: !1
                    },
                    researcher: {
                        type: "researcher",
                        searchScope: {
                            type: "everything"
                        },
                        useWebSearch: !0
                    },
                    "setup-generator": {
                        type: "setup-generator"
                    },
                    workflow: {
                        type: "workflow"
                    },
                    "markdown-chat": {
                        type: "markdown-chat",
                        model: "openai-gpt-4.1"
                    },
                    "fast-researcher": {
                        type: "fast-researcher"
                    },
                    "council-chat": {
                        type: "council-chat",
                        members: [a(19631)._V, a(19631).wB]
                    }
                },
                r = ["search", "researcher", "setup-generator", "workflow", "markdown-chat", "fast-researcher", "council-chat"].map(e => n[e]);

            function c(e) {
                return n[e]
            }
            let l = {
                    maxIterations: 8,
                    multiturnIterations: 1,
                    thinkingTokens: 1024,
                    filterToSpaceSharedResults: !1,
                    sectionReportWriting: !1
                },
                s = ["search", "researcher", "setup-generator"];

            function o(e) {
                return !!(0, a(722371).Xk)(s, e) || "markdown-chat" === e || "workflow" === e
            }
            let p = ["workflow", "setup-generator", "fast-researcher"],
                m = ["markdown-chat", "search", "researcher", "workflow", "setup-generator"];

            function u(e) {
                return "markdown-chat" === e.type || "search-chat" === e.type || "agent-inference" === e.type
            }
            r.filter(e => m.includes(e.type)), [...r.filter(e => p.includes(e.type))];
            let d = "__other__",
                f = "__other__:";

            function y(e) {
                return void 0 !== e && "string" != typeof e
            }

            function x(e) {
                return !!(0, a(722371).Xk)(a(264895).Sz, e)
            }

            function h(e) {
                var t, i, n, r;
                let {
                    uploadedFileData: c,
                    id: l
                } = e;
                if ("application/pdf" === c.contentType) return {
                    id: l,
                    type: "attachment",
                    fileUrl: c.originalFileUrl,
                    fileName: c.fileName,
                    contentType: c.contentType,
                    base64EncodedFileUrl: c.base64EncodedFileUrl,
                    permissionRecord: c.permissionRecord,
                    metadata: { ...c.metadata ? ? {},
                        attachmentSource : c.attachmentSource,
                        guardrail : (null == (t = c.metadata) ? void 0 : t.guardrail) ? ? {
                            attachmentRisk: "skipped"
                        }
                    }
                };
                if ("text/csv" === c.contentType) return {
                    id: l,
                    type: "attachment",
                    fileUrl: c.originalFileUrl,
                    fileName: c.fileName,
                    contentType: c.contentType,
                    permissionRecord: c.permissionRecord,
                    metadata: { ...c.metadata ? ? {},
                        attachmentSource : c.attachmentSource,
                        guardrail : (null == (i = c.metadata) ? void 0 : i.guardrail) ? ? {
                            attachmentRisk: "skipped"
                        }
                    }
                };
                if (x(c.contentType)) return {
                    id: l,
                    type: "attachment",
                    fileUrl: c.originalFileUrl,
                    fileName: c.fileName,
                    contentType: c.contentType,
                    permissionRecord: c.permissionRecord,
                    metadata: { ...c.metadata ? ? {},
                        attachmentSource : c.attachmentSource,
                        guardrail : (null == (n = c.metadata) ? void 0 : n.guardrail) ? ? {
                            attachmentRisk: "skipped"
                        }
                    }
                };
                if ((0, a(264895).X5)(c.contentType)) return {
                    id: l,
                    type: "attachment",
                    fileUrl: c.originalFileUrl,
                    fileName: c.fileName,
                    contentType: c.contentType,
                    permissionRecord: c.permissionRecord,
                    metadata: { ...c.metadata ? ? {},
                        attachmentSource : c.attachmentSource,
                        guardrail : (null == (r = c.metadata) ? void 0 : r.guardrail) ? ? {
                            attachmentRisk: "skipped"
                        }
                    }
                };
                (0, a(722371).HB)(c.contentType)
            }

            function g(e) {
                return {
                    id: e.id,
                    type: "computer-file",
                    fileUrl: e.fileUrl,
                    fileName: e.fileName,
                    contentType: e.contentType,
                    metadata: {
                        fileSize: e.fileSize,
                        attachmentSource: e.attachmentSource ? ? "user_upload"
                    }
                }
            }

            function T(e, t) {
                return "application/pdf" === e.contentType ? {
                    originalFileUrl: e.fileUrl,
                    fileName: e.fileName,
                    contentType: "application/pdf",
                    base64EncodedFileUrl: "",
                    assistantSessionId: t,
                    attachmentSource: "unknown"
                } : "text/csv" === e.contentType ? {
                    originalFileUrl: e.fileUrl,
                    fileName: e.fileName,
                    contentType: "text/csv",
                    assistantSessionId: t,
                    attachmentSource: "unknown"
                } : {
                    originalFileUrl: e.fileUrl,
                    fileName: e.fileName,
                    contentType: e.contentType,
                    assistantSessionId: t,
                    attachmentSource: "unknown"
                }
            }

            function v(e) {
                let {
                    result: t,
                    attachmentSource: i,
                    fileName: n,
                    originalFileUrl: r,
                    threadId: c
                } = e;
                return "application/pdf" === t.contentType ? {
                    fileName: n,
                    originalFileUrl: r,
                    base64EncodedFileUrl: "",
                    attachmentSource: i,
                    contentType: t.contentType,
                    assistantSessionId: c,
                    metadata: t.stepMetadata
                } : "text/csv" === t.contentType ? {
                    originalFileUrl: r,
                    fileName: n,
                    contentType: t.contentType,
                    attachmentSource: i,
                    assistantSessionId: c,
                    metadata: t.stepMetadata
                } : x(t.contentType) || (0, a(264895).X5)(t.contentType) ? {
                    originalFileUrl: r,
                    fileName: n,
                    attachmentSource: i,
                    contentType: t.contentType,
                    assistantSessionId: c,
                    metadata: t.stepMetadata
                } : void(0, a(722371).HB)(t.contentType)
            }[...a(281708).fl];
            let k = "searchAgent",
                b = "unifiedFindAgent",
                w = "readingAgent",
                _ = "taskAgent",
                j = "databaseAgent",
                S = "databaseBulkReadContentAgent",
                F = {
                    originalOutput: [],
                    feedback: "",
                    testTitle: "",
                    inputSummary: "",
                    promptFeedback: "",
                    testInstructions: "",
                    originalOutputPassesTest: !1,
                    originalOutputTestResults: [],
                    correctedOutputs: [],
                    verified: !1,
                    isOptional: !1
                },
                N = ["Eval", "Prompt"]
        },
        264895: (e, t, a) => {
            a.d(t, {
                CE: () => u,
                F0: () => m,
                Mf: () => n,
                QV: () => p,
                Sz: () => r,
                X5: () => l,
                f4: () => o,
                gD: () => i
            }), a(16280), a(944114), a(898992), a(672577), a(581454);
            let i = 100,
                n = 0x1400000,
                r = ["image/png", "image/jpeg", "image/gif", "image/webp", "image/heic"],
                c = ["text/plain", "text/markdown", "text/html", "text/xml", "text/css", "text/yaml", "text/x-python", "text/x-ruby", "text/x-go", "text/x-rust", "text/x-java-source", "text/x-c", "text/x-c++src", "text/x-shellscript", "application/javascript", "application/typescript", "application/json"];

            function l(e) {
                return !!(0, a(722371).Xk)(c, e)
            }
            let s = {
                txt: "text/plain",
                log: "text/plain",
                md: "text/markdown",
                markdown: "text/markdown",
                html: "text/html",
                htm: "text/html",
                xml: "text/xml",
                css: "text/css",
                yaml: "text/yaml",
                yml: "text/yaml",
                py: "text/x-python",
                rb: "text/x-ruby",
                go: "text/x-go",
                rs: "text/x-rust",
                java: "text/x-java-source",
                c: "text/x-c",
                h: "text/x-c",
                cpp: "text/x-c++src",
                hpp: "text/x-c++src",
                cc: "text/x-c++src",
                sh: "text/x-shellscript",
                bash: "text/x-shellscript",
                zsh: "text/x-shellscript",
                js: "application/javascript",
                jsx: "application/javascript",
                mjs: "application/javascript",
                ts: "application/typescript",
                tsx: "application/typescript",
                json: "application/json",
                patch: "text/plain"
            };
            Object.keys(s);
            let o = ["application/pdf", "text/csv", "image/png", "image/jpeg", "image/gif", "image/webp", "image/heic"];

            function p(e) {
                let t = function(e) {
                    let {
                        enableHeicSupport: t,
                        enableTextFileUpload: a
                    } = e ? ? {}, i = o.filter(e => "image/heic" !== e || !!t);
                    return a && i.push(...c), i
                }(e);
                return null != e && e.enableTextFileUpload ? [...t, ...Object.keys(s).map(e => `.${e}`)].join(", ") : t.join(", ")
            }

            function m(e, t) {
                let a = e.toLowerCase();
                if (a.includes("png")) return {
                    value: {
                        mimeType: "image/png",
                        extension: ".png"
                    }
                };
                if (a.includes("pdf")) return {
                    value: {
                        mimeType: "application/pdf",
                        extension: ".pdf"
                    }
                };
                if (a.includes("csv")) return {
                    value: {
                        mimeType: "text/csv",
                        extension: ".csv"
                    }
                };
                if (a.includes("jpeg") || a.includes("jpg")) return {
                    value: {
                        mimeType: "image/jpeg",
                        extension: ".jpeg"
                    }
                };
                if (a.includes("gif")) return {
                    value: {
                        mimeType: "image/gif",
                        extension: ".gif"
                    }
                };
                else if (a.includes("webp")) return {
                    value: {
                        mimeType: "image/webp",
                        extension: ".webp"
                    }
                };
                else if (a.includes("heic")) return {
                    value: {
                        mimeType: "image/heic",
                        extension: ".heic"
                    }
                };
                if (null != t && t.enableTextFileUpload) {
                    if (l(a)) {
                        let e = Object.keys(s).find(e => s[e] === a);
                        if (e) return {
                            value: {
                                mimeType: a,
                                extension: `.${e}`
                            }
                        }
                    }
                    let e = a.replace(/^\./, ""),
                        t = s[e];
                    if (t) return {
                        value: {
                            mimeType: t,
                            extension: `.${e}`
                        }
                    }
                }
                return {
                    error: Error("Invalid file type")
                }
            }

            function u(e) {
                if ("application/json" === e) return "assistant_json_filesize_bytes";
                if (l(e)) return "assistant_text_filesize_bytes";
                switch (e) {
                    case "application/pdf":
                        return "assistant_pdf_filesize_bytes";
                    case "text/csv":
                        return "assistant_csv_filesize_bytes";
                    case "image/png":
                    case "image/jpeg":
                    case "image/gif":
                    case "image/webp":
                    case "image/heic":
                        return "assistant_image_filesize_bytes";
                    default:
                        return "assistant_text_filesize_bytes"
                }
            }
            o.join(", ")
        },
        585464: (e, t, a) => {
            a.d(t, {
                NH: () => n,
                Wy: () => i
            });
            let i = {
                    type: "everything"
                },
                n = {
                    dateRangeFilter: {
                        startDate: void 0,
                        endDate: void 0
                    },
                    createdByFilter: [],
                    excludeCreatedByFilter: [],
                    titleOnlyFilter: !1,
                    ancestorsFilter: [],
                    teamspacesFilter: []
                }
        }
    }
]);