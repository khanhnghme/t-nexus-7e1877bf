"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [54280], {
        180825: (e, r, t) => {
            function a(e) {
                if (e.prefix.includes("://")) throw new(t(520026)).xL('Prefix {prefix} cannot include a "{separator}"', {
                    variables: {
                        prefix: e.prefix,
                        separator: "://"
                    }
                });
                let r = `${e.prefix}://`;
                return e.id.startsWith(r) ? e.id : `${r}${e.id}`
            }

            function n(e) {
                let {
                    prefix: r,
                    id: a,
                    originModule: n
                } = e, s = `${r}-`;
                if (a.startsWith(s)) return a.slice(s.length);
                let i = `${r}://`;
                if (!a.startsWith(i)) {
                    let e = a.split("://")[0],
                        s = a.includes("://") ? ` Instead it appears to be a ${e} id.` : ` It appears to be malformed and without the ${r} prefix.`,
                        i = n ? ` Ensure that the id comes from the ${n} module.` : "";
                    throw new(t(520026)).Yv("Id {id} is not a {prefix} id.{appearsToBeMessage}{moduleMessage}", {
                        variables: {
                            id: a,
                            prefix: r,
                            appearsToBeMessage: s,
                            moduleMessage: i
                        }
                    })
                }
                return a.slice(i.length)
            }
            t.d(r, {
                $q: () => a,
                AF: () => n
            })
        },
        402459: (e, r, t) => {
            t.d(r, {
                A2: () => k,
                HL: () => g,
                NL: () => m,
                UT: () => y,
                XT: () => E,
                YK: () => w,
                ZI: () => h,
                ph: () => c,
                y1: () => i
            }), t(16280), t(814603), t(147566), t(198721);
            let a = "slackChannel",
                n = "slackMessage",
                s = "slackUser",
                i = [n, a, s];

            function l(e) {
                return (0, t(180825).$q)({
                    id: e,
                    prefix: s
                })
            }

            function o(e) {
                return e.handle ? `${e.workspaceHost}/${e.userId}/${e.handle}` : `${e.workspaceHost}/${e.userId}`
            }

            function c(e) {
                return (0, t(722371).zR)(e, s)
            }

            function u(e) {
                return (0, t(180825).$q)({
                    id: e,
                    prefix: n
                })
            }

            function p(e) {
                return `${e.workspaceHost}/${e.channelId}/${b(e.messageTs)}/${b(e.threadTs)}`
            }

            function h(e) {
                return (0, t(722371).zR)(e, n)
            }

            function d(e) {
                return (0, t(180825).$q)({
                    id: e,
                    prefix: a
                })
            }

            function f(e) {
                return `${e.workspaceHost}/${e.channelId}`
            }

            function g(e) {
                return !!e && (0, t(722371).zR)(e, a)
            }
            let k = {
                slackUser: {
                    type: "slackUser",
                    getUri: e => {
                        let r = x(e.workspaceHost),
                            t = $({
                                userId: e.userId,
                                workspaceHost: r
                            });
                        return t || l(o({
                            userId: e.userId,
                            workspaceHost: r,
                            handle: e.handle
                        }))
                    },
                    getUrl: e => (function(e) {
                        let {
                            userId: r,
                            workspaceHost: t
                        } = e, a = $({
                            userId: r,
                            workspaceHost: t
                        });
                        return a || new URL(`/team/${r}`, `https://${t}`).toString()
                    })(e),
                    parseUri: e => {
                        var r, a;
                        if (E(e)) {
                            let n = null == (r = (a = k.slackUser).parseUrlToUri) ? void 0 : r.call(a, e, {
                                baseUrl: "",
                                publicDomainName: ""
                            });
                            return "string" == typeof n ? k.slackUser.parseUri(n) : new(t(520026)).Yv("Invalid Slack user URI (URL): {uri}", {
                                variables: {
                                    uri: e
                                },
                                cause: n
                            })
                        }
                        if (!c(e)) return new(t(520026)).Yv("Invalid Slack user URI: {uri}", {
                            variables: {
                                uri: e
                            }
                        });
                        let n = function(e) {
                            let r = e.split("/");
                            if (2 !== r.length && 3 !== r.length) return Error(`Invalid user ID: ${e}`); {
                                let [e, t, a] = r, n = $({
                                    userId: t,
                                    workspaceHost: e
                                });
                                return n || {
                                    userId: t,
                                    workspaceHost: e,
                                    handle: a
                                }
                            }
                        }((0, t(180825).AF)({
                            prefix: s,
                            id: e,
                            originModule: "slack"
                        }));
                        return n instanceof Error ? new(t(520026)).Yv("Invalid Slack user URI: {uri}", {
                            variables: {
                                uri: e
                            },
                            cause: n
                        }) : {
                            type: "slackUser",
                            userId: n.userId,
                            workspaceHost: n.workspaceHost,
                            handle: n.handle
                        }
                    },
                    parseUrlToUri: (e, r) => {
                        if (c(e.toString())) return e.toString();
                        let a = function(e, r, t) {
                            let a;
                            try {
                                a = new URL(e)
                            } catch (r) {
                                return Error(`Error in parseSlackUserUrlToUri: Invalid Slack user URL: ${e}. Expected format: https://workspace.slack.com/team/U0123456789`, {
                                    cause: r
                                })
                            }
                            let {
                                host: n,
                                pathname: s
                            } = a, i = s.match(/^\/team\/(?<userId>[UW][\w-]+)$/);
                            if (null === i) return Error(`Error in parseSlackUserUrlToUri: Invalid Slack user URL: ${e}. Expected format: https://workspace.slack.com/team/U0123456789 or https://workspace.slack.com/team/W0123456789`);
                            let {
                                userId: c
                            } = i.groups ? ? {}, u = o({
                                userId: c,
                                workspaceHost: R({
                                    incomingHost: n,
                                    preferredWorkspaceUrl: t
                                })
                            });
                            return r ? l(u) : u
                        }(e.toString(), !0, r.slackWorkspaceUrl);
                        return a instanceof Error ? new(t(520026)).Yv("Invalid Slack user URL: {url}", {
                            variables: {
                                url: e
                            },
                            cause: a
                        }) : a
                    }
                },
                slackMessage: {
                    type: "slackMessage",
                    getUri: e => {
                        let r = x(e.workspaceHost),
                            t = $({
                                channelId: e.channelId,
                                messageTs: e.messageTs,
                                threadTs: e.threadTs,
                                workspaceHost: r
                            });
                        return t || u(p({
                            channelId: e.channelId,
                            messageTs: e.messageTs,
                            threadTs: e.threadTs,
                            workspaceHost: r
                        }))
                    },
                    getUrl: e => (function(e) {
                        let {
                            workspaceHost: r,
                            channelId: t,
                            messageTs: a,
                            threadTs: n
                        } = e, s = $({
                            channelId: t,
                            messageTs: a,
                            threadTs: n,
                            workspaceHost: r
                        });
                        if (s) return s;
                        let i = S(r),
                            l = new URL(`/archives/${t}/p${a.replace(".","")}`, i);
                        return n && n !== a && (l.searchParams.set("cid", t), l.searchParams.set("thread_ts", b(n))), l.toString()
                    })(e),
                    parseUri: e => {
                        var r, a;
                        if (E(e)) {
                            let n = null == (r = (a = k.slackMessage).parseUrlToUri) ? void 0 : r.call(a, e, {
                                baseUrl: "",
                                publicDomainName: ""
                            });
                            return "string" == typeof n ? k.slackMessage.parseUri(n) : new(t(520026)).Yv("Invalid Slack message URI (URL): {uri}", {
                                variables: {
                                    uri: e
                                },
                                cause: n
                            })
                        }
                        if (!h(e)) return new(t(520026)).Yv("Invalid Slack message URI: {uri}", {
                            variables: {
                                uri: e
                            }
                        });
                        let s = function(e) {
                            let r = e.split("/");
                            if (4 !== r.length) return Error(`Invalid message ID: ${e}`); {
                                let [e, t] = r, [, , a, n] = r, s = $({
                                    channelId: t,
                                    messageTs: a = b(a),
                                    threadTs: n = b(n),
                                    workspaceHost: e
                                });
                                return s || {
                                    channelId: t,
                                    messageTs: a,
                                    threadTs: n,
                                    workspaceHost: e
                                }
                            }
                        }((0, t(180825).AF)({
                            id: e,
                            originModule: "slack",
                            prefix: n
                        }));
                        return s instanceof Error ? new(t(520026)).Yv("Invalid Slack message URI: {uri}", {
                            variables: {
                                uri: e
                            },
                            cause: s
                        }) : {
                            type: "slackMessage",
                            channelId: s.channelId,
                            messageTs: s.messageTs,
                            threadTs: s.threadTs,
                            workspaceHost: s.workspaceHost
                        }
                    },
                    parseUrlToUri: (e, r) => {
                        if (h(e.toString())) return e.toString();
                        let a = function(e, r, t) {
                            let a;
                            try {
                                a = new URL(e)
                            } catch (r) {
                                return Error(`Error in parseSlackMessageUrlToId: Invalid Slack message URL: ${e}. Expected format: https://workspace.slack.com/archives/C0123ABCDEF/p9876543210987654 or https://workspace.slack.com/archives/C0123ABCDEF/p9876543210987654?thread_ts=12345`, {
                                    cause: r
                                })
                            }
                            let {
                                host: n,
                                pathname: s,
                                searchParams: i
                            } = a, l = s.match(/^\/archives\/(?<channelId>[\w-]+)\/p(?<messageTimestamp>[\d]+)$/);
                            if (null === l) return Error(`Error in parseSlackMessageUrlToId: Invalid Slack message URL: ${e}. Expected format: https://workspace.slack.com/archives/C0123ABCDEF/p9876543210987654 or https://workspace.slack.com/archives/C0123ABCDEF/p9876543210987654?thread_ts=12345`);
                            let {
                                channelId: o,
                                messageTimestamp: c
                            } = l.groups ? ? {}, h = i.get("thread_ts") ? ? void 0, d = p({
                                channelId: o,
                                threadTs: h || c,
                                messageTs: c,
                                workspaceHost: R({
                                    incomingHost: n,
                                    preferredWorkspaceUrl: t
                                })
                            });
                            return r ? u(d) : d
                        }(e.toString(), !0, r.slackWorkspaceUrl);
                        return a instanceof Error ? new(t(520026)).Yv("Invalid Slack message URL: {url}", {
                            variables: {
                                url: e
                            },
                            cause: a
                        }) : a
                    }
                },
                slackChannel: {
                    type: "slackChannel",
                    getUri: e => {
                        let r = x(e.workspaceHost),
                            t = $({
                                channelId: e.channelId,
                                workspaceHost: r
                            });
                        return t || d(f({
                            channelId: e.channelId,
                            workspaceHost: r
                        }))
                    },
                    getUrl: e => (function(e) {
                        let {
                            channelId: r,
                            workspaceHost: t
                        } = e, a = $({
                            channelId: r,
                            workspaceHost: t
                        });
                        return a || new URL(`/archives/${r}`, S(t)).toString()
                    })({
                        channelId: e.channelId,
                        workspaceHost: e.workspaceHost
                    }),
                    parseUri: e => {
                        var r, n;
                        if (E(e)) {
                            let a = null == (r = (n = k.slackChannel).parseUrlToUri) ? void 0 : r.call(n, e, {
                                baseUrl: "",
                                publicDomainName: ""
                            });
                            return "string" == typeof a ? k.slackChannel.parseUri(a) : new(t(520026)).Yv("Invalid Slack channel URI (URL): {uri}", {
                                variables: {
                                    uri: e
                                },
                                cause: a
                            })
                        }
                        if (!g(e)) return new(t(520026)).Yv("Invalid Slack channel URI: {uri}", {
                            variables: {
                                uri: e
                            }
                        });
                        let s = (0, t(180825).AF)({
                            prefix: a,
                            id: e,
                            originModule: "slack"
                        });
                        if (!s.includes("/")) return new(t(520026)).Yv("Invalid Slack channel URI: {uri}. Legacy format without workspaceHost is not supported. Expected format: slackChannel://workspaceHost/channelId", {
                            variables: {
                                uri: e
                            }
                        });
                        let i = function(e) {
                            let r = e.split("/");
                            if (2 !== r.length) return Error(`Invalid channel URI: ${e}`); {
                                let [e, t] = r, a = $({
                                    channelId: t,
                                    workspaceHost: e
                                });
                                return a || {
                                    channelId: t,
                                    workspaceHost: e
                                }
                            }
                        }(s);
                        return i instanceof Error ? new(t(520026)).Yv("Invalid Slack channel URI: {uri}", {
                            variables: {
                                uri: e
                            },
                            cause: i
                        }) : {
                            type: "slackChannel",
                            channelId: i.channelId,
                            workspaceHost: i.workspaceHost
                        }
                    },
                    parseUrlToUri: (e, r) => {
                        if (g(e.toString())) return e.toString();
                        let a = function(e, r, t) {
                            let a;
                            try {
                                a = new URL(e)
                            } catch (r) {
                                return Error(`Error in parseSlackChannelUrlToUri: Invalid Slack channel URL: ${e}. Expected format: https://workspace.slack.com/archives/C0123456789`, {
                                    cause: r
                                })
                            }
                            let {
                                host: n,
                                pathname: s
                            } = a, i = s.match(/^(\/)?\/archives\/(?<channelId>[\w-]+)(\/|(?:\/p[\d]+))?$/);
                            if (null === i) return Error(`Error in parseSlackChannelUrlToUri: Invalid Slack channel URL: ${e}. Expected format: https://workspace.slack.com/archives/C0123456789`);
                            let {
                                channelId: l
                            } = i.groups ? ? {}, o = f({
                                channelId: l,
                                workspaceHost: R({
                                    incomingHost: n,
                                    preferredWorkspaceUrl: t
                                })
                            });
                            return r ? d(o) : o
                        }(e.toString(), !0, r.slackWorkspaceUrl);
                        return a instanceof Error ? new(t(520026)).Yv("Invalid Slack channel URL: {url}", {
                            variables: {
                                url: e
                            },
                            cause: a
                        }) : a
                    }
                }
            };

            function m(e) {
                return /^C[A-Z0-9]+$/.test(e)
            }

            function v(e) {
                return /^D[A-Z0-9]+$/.test(e)
            }

            function U(e) {
                return /^G[A-Z0-9]+$/.test(e)
            }

            function I(e) {
                return /^[0-9]{10}\.[0-9]+$/.test(e)
            }

            function w(e) {
                return "*" === e || "public:*" === e || "users:*" === e
            }

            function $(e) {
                let {
                    channelId: r,
                    messageTs: a,
                    threadTs: n,
                    userId: s,
                    workspaceHost: i
                } = e;
                return i && !E((0, t(722371).zR)(i, "https://") ? i : `https://${i}`) ? Error(`Invalid workspace URL: ${i}`) : !r || m(r) || v(r) || U(r) ? a && !I(a) ? Error(`Invalid message timestamp: ${a}`) : n && !I(n) ? Error(`Invalid thread timestamp: ${n}`) : s && !/^[UW][\w]+$/.test(s) ? Error(`Invalid user ID: ${s}`) : void 0 : Error(`Invalid channel ID: ${r}`)
            }

            function E(e) {
                try {
                    let r = new URL(e);
                    return "https:" === r.protocol && r.hostname.toLowerCase().endsWith("slack.com")
                } catch {
                    return !1
                }
            }

            function b(e) {
                return e.includes(".") || e.length < 16 ? e : `${e.slice(0,10)}.${e.slice(10)}`
            }

            function S(e) {
                let r = e;
                return (0, t(722371).zR)(e, "https://") || (r = `https://${e}`), r
            }

            function x(e) {
                return new URL(S(e)).host
            }

            function T(e) {
                return e.endsWith(".enterprise.slack.com") ? e.slice(0, -21) : e.endsWith(".slack.com") ? e.slice(0, -10) : void 0
            }

            function R(e) {
                let r, {
                    incomingHost: t,
                    preferredWorkspaceUrl: a
                } = e;
                if (!a) return t;
                try {
                    r = x(a)
                } catch {
                    return t
                }
                let n = T(t),
                    s = T(r);
                return n && n === s ? r : t
            }

            function y(e, r) {
                if (g(e)) return e;
                if (E(e)) {
                    var t, a;
                    let r = null == (t = (a = k.slackChannel).parseUrlToUri) ? void 0 : t.call(a, e, {
                        baseUrl: "",
                        publicDomainName: ""
                    });
                    if ("string" == typeof r) return r
                }
                if (r && (m(e) || v(e) || U(e))) {
                    let t = k.slackChannel.getUri({
                        channelId: e,
                        workspaceHost: r
                    });
                    if ("string" == typeof t) return t
                }
                return e
            }
        },
        520026: (e, r, t) => {
            t.d(r, {
                Yv: () => a,
                xL: () => n
            }), t(16280), t(944114), t(581454), t(898992), t(354520), t(672577), t(430670);
            class a extends Error {
                interpolatedMessage;
                logContext;
                extra;
                variables;
                temporaryErrorDetails;
                userVisible = !0;
                errorCode;
                errorData;
                constructor(e, r) {
                    super(e, {
                        cause: null == r ? void 0 : r.cause
                    }), Object.setPrototypeOf(this, a.prototype), this.name = "AgentError", this.interpolatedMessage = function(e, r) {
                        return r ? e.replace(/\{(\w+)\}/g, (t, n) => {
                            if (!(n in r)) throw Error(`Missing template variable '${n}' in template: ${e}`);
                            let s = r[n];
                            return s instanceof a ? s.interpolatedMessage : s instanceof Error ? s.message : "object" == typeof s && null !== s && "message" in s && "string" == typeof s.message ? s.message : String(s)
                        }) : e
                    }(e, null == r ? void 0 : r.variables), this.logContext = null == r ? void 0 : r.additionalLogContext, this.extra = null == r ? void 0 : r.extra, this.variables = null == r ? void 0 : r.variables, this.temporaryErrorDetails = null == r ? void 0 : r.temporaryErrorDetails, this.userVisible = (null == r ? void 0 : r.userVisible) ? ? !0, this.errorCode = null == r ? void 0 : r.errorCode, this.errorData = null == r ? void 0 : r.errorData, Error.captureStackTrace && Error.captureStackTrace(this, a)
                }
                getErrorForLogging() {
                    let e = this.logContext ? `${this.logContext} ${this.message}` : this.message,
                        r = new(t(101787)).Umn(e);
                    if (this.stack) {
                        let e = this.stack.split("\n"),
                            t = [];
                        for (let r = e.length - 1; r >= 0; r--) {
                            let a = e[r];
                            if (a.match(/^\s+at\s/)) t.unshift(a);
                            else if (t.length > 0) break
                        }
                        t.length > 0 ? r.stack = [this.message, ...t].join("\n") : r.stack = this.message
                    }
                    return this.extra && (r.data = this.extra), this.cause && (r.cause = this.cause), r
                }
                sentryExtra() {
                    let e = {
                        name: this.name,
                        category: "error",
                        level: "error",
                        extra: this.extra
                    };
                    return this.cause && (this.cause instanceof Error ? e.cause = {
                        name: this.cause.name,
                        message: this.cause.message,
                        stack: this.cause.stack
                    } : e.cause = String(this.cause)), e
                }
                static isAgentError(e) {
                    return e instanceof a
                }
            }
            class n extends a {
                constructor(e, r) {
                    super(e, r), Object.setPrototypeOf(this, n.prototype), this.name = "AgentSystemError"
                }
            }
            t(695216).TD
        },
        635270: (e, r, t) => {
            function a(e) {
                let {
                    transcript: r
                } = e, {
                    activeIntegrationPointers: a
                } = n(r);
                if (0 === a.length) return [];
                let s = (0, t(897011).YO)({
                    transcript: r
                });
                return a.map(e => {
                    let r = s.getModel(e);
                    if (!r) throw new(t(520026)).xL("Module not found: {module}", {
                        variables: {
                            module: e.toString()
                        }
                    });
                    if ("workflow" === r.getParentTable() && "mcpServer" === r.getModuleType()) return;
                    let a = r.toModuleValue();
                    if (!a) throw new(t(520026)).xL("Module value not found: {module}", {
                        variables: {
                            module: e.toString()
                        }
                    });
                    return a
                }).filter(t(722371).O9)
            }

            function n(e) {
                let r = e.findLastIndex(e => "agent-integration" === e.type);
                if (r > -1) {
                    let t = e[r];
                    if ("agent-integration" !== t.type) throw Error(`Expected step to be an agent integration step but was ${t.type}`);
                    return {
                        activeIntegrationPointers: t.activeRecordPointers ? ? [],
                        inactiveIntegrationPointers: t.inactiveRecordPointers ? ? []
                    }
                }
                return {
                    activeIntegrationPointers: [],
                    inactiveIntegrationPointers: []
                }
            }

            function s(e) {
                return !!("string" == typeof e && (0, t(722371).Xk)(t(957042).zP, e))
            }

            function i(e) {
                return e
            }

            function l(e, r) {
                return r ? { ...e,
                    permissions: r
                } : e
            }
            t.d(r, {
                Hf: () => s,
                It: () => n,
                OT: () => a,
                my: () => l,
                yC: () => i
            }), t(16280), t(813451), t(898992), t(354520), t(581454)
        }
    }
]);