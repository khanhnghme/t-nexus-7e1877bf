(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [67542], {
        9668: (e, t, r) => {
            "use strict";
            r.d(t, {
                S: () => i
            }), r(16280), r(944114), r(898992), r(672577);
            var a = () => r(668230);
            class i extends a().o {
                type = "custom";
                displayName = "Custom";
                requiresUserAuth = !1;
                featureGate = "custom_ai_connectors";
                category = "vector";
                parentOrganization = null;
                fileTypes = [];
                qnaIngestionAIAppId = r(281708).pL;
                urlRegex = /^custom:\/\/.+/;
                getTitle(e) {
                    return "Custom connector result"
                }
                getText(e) {
                    return ""
                }
                getSearchResultXMLTagName() {
                    return "custom-result"
                }
                addSearchResultToXML(e, t) {
                    if ("custom" !== e.type) throw Error(`Expected custom result, got result.type=${e.type}`);
                    let r = t.find(t => "custom-result" === t.tagName && t.attributes.id === e.id);
                    r || (r = {
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.id,
                            title: e.title,
                            "last-edited-datetime": e.lastEdited
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    }, t.push(r))
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("custom-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "custom",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        }
                    }
                }
            }
        },
        82188: (e, t, r) => {
            "use strict";
            r.d(t, {
                d: () => i
            }), r(16280), r(944114), r(581454);
            var a = () => r(668230);
            class i extends a().o {
                type = "slack";
                displayName = "Slack";
                requiresUserAuth = !0;
                featureGate = "slack_v2_ai_connector";
                category = "vector";
                parentOrganization = null;
                fileTypes = ["message"];
                qnaIngestionAIAppId = "1031cb6c-4935-4cc1-9c08-c9a4ecaae323";
                urlRegex = /https:\/\/(?<workspace>[\w-]+(?:\.[\w-]+)?)\.slack\.com\/archives\/(?<channel>[^\/]+)(\/p(?<timestamp>\d+)(\?thread_ts=(?<thread_ts>\d+\.\d+)&cid=(?<cid>[^\/]+))?)?/;
                getTitle(e) {
                    if ("slack" !== e.type) throw Error(`Expected slack resource, got resource.type=${e.type}`);
                    return e.channel
                }
                getText(e) {
                    if ("slack" !== e.type) throw Error(`Expected slack resource, got resource.type=${e.type}`);
                    return `<mentioned-slack type="${e.type}" channel="${e.channel}" timestamp="${e.timestamp}">
${e.messages.map(e=>`<message user="${e.user.name}">${e.text}</message>`).join("\n")}
</mentioned-slack>`
                }
                buildSearchResult(e) {
                    let {
                        result: t,
                        baseAttributes: r,
                        mappedIdOrUrlForResultID: a
                    } = e;
                    if ("slack" !== t.type) return super.buildSearchResult(e);
                    if (t.messages && t.messages.length > 0) {
                        let e = t.messages.map(e => {
                            let t = a({
                                type: "slack",
                                id: e.messageId
                            });
                            return {
                                type: "element",
                                tagName: "message",
                                attributes: { ..."mapped_as_url" === t.status ? {
                                        url: t.url
                                    } : {},
                                    ..."mapped_as_int" === t.status ? {
                                        id: t.id
                                    } : {},
                                    user: e.user,
                                    "last-updated": e.lastEdited
                                },
                                children: [{
                                    type: "text",
                                    value: e.text
                                }]
                            }
                        });
                        return {
                            attributes: { ...r,
                                ...t.channel ? {
                                    channel: t.channel
                                } : {}
                            },
                            children: [{
                                type: "element",
                                tagName: "messages",
                                attributes: {},
                                children: e
                            }]
                        }
                    }
                    return {
                        attributes: { ...r,
                            ...t.channel ? {
                                channel: t.channel
                            } : {}
                        },
                        children: [{
                            type: "text",
                            value: t.text
                        }]
                    }
                }
                buildAgentSearchResultFromSearchEffectResult(e) {
                    return {
                        searchSourceType: "slack",
                        id: e.id,
                        title: e.title,
                        channel: e.path,
                        text: e.snippet,
                        lastEdited: e.lastEdited
                    }
                }
                getSearchResultXMLTagName() {
                    return "slack-thread"
                }
                addSearchResultToXML(e, t) {
                    if ("slack" !== e.type) throw Error(`Expected slack result, got result.type=${e.type}`);
                    t.push({
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.id,
                            channel: e.channel ? ? "",
                            "last-edited-datetime": e.lastEdited
                        },
                        children: e.messages.map(e => ({
                            type: "element",
                            tagName: "slack-message",
                            attributes: {
                                id: e.messageId,
                                "last-edited-datetime": e.lastEdited,
                                user: e.user
                            },
                            children: [{
                                type: "text",
                                value: e.text
                            }]
                        }))
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if (t.tagName !== this.getSearchResultXMLTagName()) return t;
                    let o = a.mapKeyToCounter({
                        type: "slack-message",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        },
                        children: t.children.map(e => {
                            let t = a.mapKeyToCounter({
                                type: "slack-message",
                                key: (0, r(281708).V9)(e.attributes.id)
                            });
                            return i[e.attributes.id] = t, { ...e,
                                attributes: { ...e.attributes,
                                    id: t
                                }
                            }
                        })
                    }
                }
            }
        },
        140030: (e, t, r) => {
            "use strict";

            function a(e) {
                let t = e.startsWith("user://") ? e.slice(7) : e,
                    r = t.lastIndexOf("/");
                if (-1 !== r) {
                    let e = t.slice(r + 1);
                    if (e.includes("@")) return {
                        userIdPart: t.slice(0, r),
                        email: e
                    }
                }
                return {
                    userIdPart: t,
                    email: void 0
                }
            }

            function i(e) {
                if (e) {
                    if ((0, r(4962).uj)(e)) return e;
                    if ((0, r(4962).c_)(e)) return (0, r(4962).np)(e)
                }
            }

            function o(e) {
                let t = i(e);
                if (!t) throw new(r(520026)).Yv("Invalid UUID: {id}", {
                    variables: {
                        id: e
                    }
                });
                return t
            }

            function n(e, t) {
                let a = e.toString();
                if ("notion.so" === e.hostname) {
                    let e = new URL(a);
                    e.hostname = "www.notion.so", a = e.toString()
                }
                let [i] = (0, r(132702).Jq)({
                    url: a,
                    isMobile: !1,
                    baseUrl: t.baseUrl,
                    publicDomainName: t.publicDomainName,
                    protocol: void 0,
                    currentUrl: void 0,
                    requestedOnAlternateDomain: (0, r(386883).L)(t.baseUrl)
                });
                return i
            }
            r.d(t, {
                nm: () => s,
                Xh: () => _,
                GP: () => C,
                F: () => h,
                Ts: () => y,
                $e: () => I,
                ne: () => u,
                CM: () => d,
                w8: () => b,
                Q2: () => l,
                dw: () => $,
                K2: () => f,
                dE: () => g,
                TE: () => E,
                Mg: () => w,
                OR: () => N,
                ID: () => k,
                cy: () => x,
                X1: () => T
            }), r(16280), r(898992), r(354520), r(581454), r(964979), r(814603), r(147566), r(198721);
            let s = {
                pageOrCollectionViewBlock: {
                    type: "pageOrCollectionViewBlock",
                    parseUri: e => {
                        if (!e.startsWith("page")) return Error(`Invalid page or collection view block URL, must start with "page": ${e}`);
                        let t = e.split("://")[1].split("/"),
                            r = i(t[0]),
                            a = t[1];
                        return r ? {
                            type: "pageOrCollectionViewBlock",
                            id: r,
                            blockId: a
                        } : Error(`Invalid page or collection view block URL: ${e}`)
                    },
                    getUri: ({
                        id: e,
                        blockId: t,
                        baseUrl: r
                    }) => l({
                        baseUrl: r,
                        pageId: e,
                        blockId: t
                    }),
                    parseUrlToUri: (e, t) => {
                        try {
                            let {
                                pageOrBlockId: r,
                                blockId: a
                            } = N(e.toString(), t);
                            if (r) return `pageOrCollectionViewBlock://${r}${a?`/${a}`:""}`
                        } catch (t) {
                            return new(r(520026)).Yv("Invalid page or collection view block URL: {url}", {
                                variables: {
                                    url: e
                                },
                                cause: t
                            })
                        }
                        return new(r(520026)).Yv("Invalid page or collection view block URL: {url}", {
                            variables: {
                                url: e
                            }
                        })
                    }
                },
                collection: {
                    type: "collection",
                    parseUri: e => {
                        let t = i(e.split("collection://")[1]);
                        return t ? {
                            type: "collection",
                            collectionId: t
                        } : Error(`Invalid collection URL: {{${e}}}`)
                    },
                    getUri: ({
                        collectionId: e
                    }) => d(e),
                    parseUrlToUri: (e, t) => {
                        let a = n("string" == typeof e ? new URL(e) : e, t);
                        return "collection" !== a.name ? new(r(520026)).Yv("Invalid collection URL: {url}", {
                            variables: {
                                url: e
                            }
                        }) : d(a.collectionId)
                    }
                },
                collectionProperty: {
                    type: "collectionProperty",
                    parseUri: e => {
                        let t = e.split("collectionProperty://")[1].split("/"),
                            r = i(t[0]),
                            a = c(t[1]);
                        return r && a ? {
                            type: "collectionProperty",
                            collectionId: r,
                            propertyId: a
                        } : Error(`Invalid collection property URL: ${e}`)
                    },
                    getUri: ({
                        collectionId: e,
                        propertyId: t
                    }) => u(e, t)
                },
                formulaResult: {
                    type: "formulaResult",
                    parseUri: e => {
                        let t = e.split("formulaResult://")[1].split("/"),
                            r = i(t[0]),
                            a = i(t[1]),
                            o = c(t[2]);
                        return r && a && o ? {
                            type: "formulaResult",
                            collectionId: r,
                            pageId: a,
                            propertyId: o
                        } : Error(`Invalid formula result URL: ${e}`)
                    },
                    getUri: ({
                        collectionId: e,
                        pageId: t,
                        propertyId: r
                    }) => (function(e) {
                        let {
                            collectionId: t,
                            pageId: r,
                            propertyId: a
                        } = e, i = p(a);
                        return `formulaResult://${t}/${r}/${i}`
                    })({
                        collectionId: e,
                        pageId: t,
                        propertyId: r
                    })
                },
                formulaCode: {
                    type: "formulaCode",
                    parseUri: e => {
                        let t = e.split("formulaCode://")[1].split("/"),
                            r = i(t[0]),
                            a = c(t[1]);
                        return r && a ? {
                            type: "formulaCode",
                            collectionId: r,
                            propertyId: a
                        } : Error(`Invalid formula code URL: ${e}`)
                    },
                    getUri: ({
                        collectionId: e,
                        propertyId: t
                    }) => (function(e) {
                        let {
                            collectionId: t,
                            propertyId: r
                        } = e, a = p(r);
                        return `formulaCode://${t}/${a}`
                    })({
                        collectionId: e,
                        propertyId: t
                    })
                },
                collectionPropertyOption: {
                    type: "collectionPropertyOption",
                    parseUri: e => {
                        let t = e.split("collectionPropertyOption://")[1].split("/"),
                            r = i(t[0]),
                            a = c(t[1]),
                            o = c(t[2]);
                        return r && a && o ? {
                            type: "collectionPropertyOption",
                            collectionId: r,
                            propertyId: a,
                            optionId: o
                        } : Error(`Invalid collection property option URL: ${e}`)
                    },
                    getUri: ({
                        collectionId: e,
                        propertyId: t,
                        optionId: r
                    }) => (function({
                        collectionId: e,
                        propertyId: t,
                        optionId: r
                    }) {
                        let a = p(t),
                            i = p(r);
                        return `collectionPropertyOption://${e}/${a}/${i}`
                    })({
                        collectionId: e,
                        propertyId: t,
                        optionId: r
                    })
                },
                discussion: {
                    type: "discussion",
                    parseUri: e => {
                        let t = e.split("discussion://")[1].split("/");
                        if (1 === t.length) {
                            let r = i(t[0]);
                            return r ? {
                                type: "discussion",
                                discussionId: r
                            } : Error(`Invalid discussion URL: ${e}`)
                        }
                        if (2 === t.length) {
                            let [r, a] = t.map(i);
                            return r && a ? {
                                type: "discussion",
                                pageId: r,
                                discussionId: a
                            } : Error(`Invalid discussion URL: ${e}`)
                        }
                        if (3 === t.length) {
                            let [r, a, n] = t.map(i);
                            return r && a && n ? {
                                type: "discussion",
                                pageId: o(r),
                                blockId: o(a),
                                discussionId: o(n)
                            } : Error(`Invalid discussion URL: ${e}`)
                        }
                        return Error(`Invalid discussion URL: ${e}`)
                    },
                    getUri: ({
                        discussionId: e,
                        pageId: t,
                        blockId: r
                    }) => (function(e) {
                        let {
                            discussionId: t,
                            pageId: r,
                            blockId: a
                        } = e;
                        return r && a ? `discussion://${r}/${a}/${t}` : r ? `discussion://${r}/${t}` : `discussion://${t}`
                    })({
                        discussionId: e,
                        pageId: t,
                        blockId: r
                    }),
                    getUrl: ({
                        discussionId: e,
                        pageId: t,
                        blockId: a,
                        baseUrl: i
                    }) => (0, r(234310).A)({
                        discussionId: e,
                        pageId: t,
                        scrollToBlockId: a !== t ? a : void 0,
                        baseUrl: i,
                        pageVisitSource: r(254656).y8.AIChat,
                        addPagePrefix: (0, r(386883).L)(i)
                    })
                },
                pageDiscussions: {
                    type: "pageDiscussions",
                    parseUri: e => {
                        let t = e.split("pageDiscussions://")[1];
                        return t ? {
                            type: "pageDiscussions",
                            pageId: o(t)
                        } : Error(`Invalid page discussions URL: ${e}`)
                    },
                    getUri: ({
                        pageId: e
                    }) => {
                        var t;
                        return t = e, `pageDiscussions://${t}`
                    }
                },
                integration: {
                    type: "integration",
                    parseUri: e => {
                        let t = e.split("integration://")[1].split("/");
                        if (3 === t.length) {
                            let [a, i, n] = t;
                            if (!a || !i || !(0, r(635270).Hf)(i) || !n) throw new(r(520026)).Yv("Invalid integration URL: {{{uri}}}", {
                                variables: {
                                    uri: e
                                }
                            });
                            return {
                                type: "integration",
                                moduleType: i,
                                spaceId: o(a),
                                moduleRecordId: o(n)
                            }
                        }
                        if (4 === t.length) {
                            let [a, i, n, s] = t;
                            if (!a || !i || !n || !(0, r(635270).Hf)(n) || !s) throw new(r(520026)).Yv("Invalid integration URL: {{{uri}}}", {
                                variables: {
                                    uri: e
                                }
                            });
                            return {
                                type: "integration",
                                workflowId: o(i),
                                moduleId: s && "undefined" !== s ? o(s) : void 0,
                                moduleType: n,
                                spaceId: o(a)
                            }
                        }
                        throw new(r(520026)).Yv("Invalid integration URL: {{{uri}}}", {
                            variables: {
                                uri: e
                            }
                        })
                    },
                    getUri: function(e) {
                        if ("workflowId" in e) {
                            let {
                                workflowId: t,
                                moduleId: r,
                                moduleType: a,
                                spaceId: i
                            } = e;
                            return `integration://${i}/${t}/${a}/${r}`
                        } {
                            let {
                                moduleType: t,
                                spaceId: r,
                                moduleRecordId: a
                            } = e;
                            return `integration://${r}/${t}/${a}`
                        }
                    }
                },
                view: {
                    type: "view",
                    parseUri: e => {
                        let t = e.split("view://")[1].split("/")[0];
                        return t ? {
                            type: "view",
                            collectionViewId: t
                        } : Error(`Invalid view URL: ${e}`)
                    },
                    getUri: ({
                        collectionViewId: e
                    }) => m(e),
                    parseUrlToUri: (e, t) => {
                        let a = n("string" == typeof e ? new URL(e) : e, t);
                        return "page" === a.name && a.collectionViewId ? m(a.collectionViewId) : new(r(520026)).Yv("Invalid view URL: {url}", {
                            variables: {
                                url: e
                            }
                        })
                    }
                },
                trigger: {
                    type: "trigger",
                    parseUri: e => {
                        let t = e.split("trigger://")[1].split("/"),
                            r = t[0],
                            a = t[1],
                            i = t[2];
                        return r && a && i ? {
                            type: "trigger",
                            workflowId: o(a),
                            spaceId: o(r),
                            triggerId: i
                        } : Error(`Invalid trigger URL: ${e}`)
                    },
                    getUri: function(e) {
                        let {
                            workflowId: t,
                            spaceId: r,
                            triggerId: a
                        } = e;
                        return `trigger://${r}/${t}/${a}`
                    }
                },
                script: {
                    type: "script",
                    parseUri: e => {
                        let t = e.split("script://")[1].split("/"),
                            r = t[0],
                            a = t[1],
                            i = t[2];
                        return r && a && i ? {
                            type: "script",
                            workflowId: o(a),
                            spaceId: o(r),
                            scriptId: i
                        } : Error(`Invalid script URL: ${e}`)
                    },
                    getUri: function(e) {
                        let {
                            workflowId: t,
                            spaceId: r,
                            scriptId: a
                        } = e;
                        return `script://${r}/${t}/${a}`
                    }
                },
                agent: {
                    type: "agent",
                    parseUri: e => {
                        let t = e.split("agent://")[1].split("/"),
                            a = t[0],
                            i = t[1];
                        return a && i ? {
                            type: "agent",
                            spaceId: o(a),
                            workflowId: o(i)
                        } : new(r(520026)).Yv("Invalid agent URL: {uri}", {
                            variables: {
                                uri: e
                            }
                        })
                    },
                    getUri: ({
                        workflowId: e,
                        spaceId: t
                    }) => h({
                        workflowId: e,
                        spaceId: t
                    })
                },
                worker: {
                    type: "worker",
                    parseUri: e => {
                        let t = e.split("worker://")[1].split("/"),
                            r = t[0],
                            a = t[1];
                        return r && a ? {
                            type: "worker",
                            spaceId: o(r),
                            workerId: a
                        } : Error(`Invalid worker URL: ${e}`)
                    },
                    getUri: ({
                        spaceId: e,
                        workerId: t
                    }) => (function(e) {
                        let {
                            spaceId: t,
                            workerId: r
                        } = e;
                        return `worker://${t}/${r}`
                    })({
                        spaceId: e,
                        workerId: t
                    })
                },
                thread: {
                    type: "thread",
                    parseUri: e => {
                        let t = e.split("thread://")[1];
                        if (!t) return Error(`Invalid thread URL: ${e}`);
                        let r = t.split("/"),
                            a = r[0],
                            i = r[1];
                        return a && i ? {
                            type: "thread",
                            spaceId: o(a),
                            threadId: o(i)
                        } : Error(`Invalid thread URL: ${e}`)
                    },
                    getUri: ({
                        threadId: e,
                        spaceId: t
                    }) => (function(e) {
                        let {
                            threadId: t,
                            spaceId: r
                        } = e;
                        return `thread://${r}/${t}`
                    })({
                        threadId: e,
                        spaceId: t
                    })
                },
                user: {
                    type: "user",
                    parseUri: e => {
                        try {
                            let {
                                email: t
                            } = a(e), i = function(e, {
                                isMocked: t = !1
                            } = {}) {
                                let {
                                    userIdPart: i
                                } = a(e);
                                if ((0, r(4962).uj)(i) && !t) return i;
                                try {
                                    let e = (0, r(180825).AF)({
                                        prefix: "notion_user",
                                        id: i
                                    });
                                    if ((0, r(4962).uj)(e)) return e
                                } catch (e) {}
                                let o = (0, r(180825).AF)({
                                    prefix: "user",
                                    id: i
                                });
                                if ((0, r(4962).uj)(o)) return o;
                                if (t) return i;
                                throw new(r(520026)).Yv('{userIdString} is not a valid user ID. While the ID is correctly prefixed with "user://", the rest of the ID is NOT a valid UUID.', {
                                    variables: {
                                        userIdString: e
                                    }
                                })
                            }(e);
                            return {
                                type: "user",
                                userId: i,
                                email: t
                            }
                        } catch (e) {
                            if (e instanceof Error) return e;
                            throw e
                        }
                    },
                    getUri: g
                },
                teamspace: {
                    type: "teamspace",
                    parseUri: e => {
                        let t = i(e.split("teamspace://")[1]);
                        return t ? {
                            type: "teamspace",
                            teamId: t
                        } : Error(`Invalid teamspace URL: {{${e}}}`)
                    },
                    getUri: function(e) {
                        let {
                            teamId: t
                        } = e;
                        return `teamspace://${t}`
                    }
                },
                file: {
                    type: "file",
                    parseUri: e => {
                        let t = e.split("file://")[1];
                        if (!t) return Error(`Invalid file URL: ${e}`);
                        let {
                            source: r,
                            permissionRecord: a
                        } = JSON.parse(decodeURIComponent(t));
                        return {
                            type: "file",
                            source: r,
                            permissionRecord: a
                        }
                    },
                    getUri: b
                },
                citation: {
                    type: "citation",
                    parseUri: e => {
                        let t = e.split("citation://")[1];
                        if (!t) return Error(`Invalid citation URL: ${e}`);
                        let {
                            recordType: r,
                            url: a,
                            spaceId: i,
                            id: o
                        } = JSON.parse(decodeURIComponent(t));
                        return {
                            type: "citation",
                            recordType: r,
                            url: a,
                            spaceId: i,
                            id: o
                        }
                    },
                    getUri: y
                },
                snapshot: {
                    type: "snapshot",
                    parseUri: e => {
                        var t;
                        let r = null == (t = e.split("snapshot://")[1]) ? void 0 : t.split("/");
                        if (!r || 2 !== r.length) return Error(`Invalid snapshot URL: ${e}`);
                        let [a, i] = r;
                        return a && i ? {
                            type: "snapshot",
                            pageOrDatabaseId: o(a),
                            timestamp: i
                        } : Error(`Invalid snapshot URL: ${e}`)
                    },
                    parseUrlToUri: (e, t) => {
                        let a = n("string" == typeof e ? new URL(e) : e, t);
                        return "page" === a.name && a.blockId && a.snapshotTimestamp ? `snapshot://${a.blockId}/${a.snapshotTimestamp}` : new(r(520026)).Yv("Invalid snapshot URL: {url}", {
                            variables: {
                                url: e
                            }
                        })
                    },
                    getUri: ({
                        pageOrDatabaseId: e,
                        timestamp: t,
                        baseUrl: r
                    }) => f({
                        pageOrDatabaseId: e,
                        timestamp: t,
                        baseUrl: r
                    })
                },
                notification: {
                    type: "notification",
                    parseUri: e => {
                        let t = e.split("notification://")[1];
                        return t ? {
                            type: "notification",
                            notificationId: t
                        } : Error(`Invalid notification URL: ${e}`)
                    },
                    getUri: ({
                        notificationId: e
                    }) => `notification://${e}`
                },
                ...r(402459).A2
            };

            function l(e) {
                let {
                    baseUrl: t,
                    pageId: a,
                    blockId: i
                } = e;
                return `${t}/${(0,r(4962).Xw)(a)}${i?`#${(0,r(4962).Xw)(i)}`:""}`
            }

            function d(e) {
                return `collection://${e}`
            }

            function u(e, t) {
                let r = p(t);
                return `collectionProperty://${e}/${r}`
            }

            function p(e) {
                return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
            }

            function c(e) {
                return atob(e.replace(/-/g, "+").replace(/_/g, "/"))
            }

            function m(e) {
                return `view://${e}`
            }

            function h(e) {
                let {
                    workflowId: t,
                    spaceId: r
                } = e;
                return `agent://${r}/${t}`
            }

            function g(e) {
                let {
                    userId: t,
                    email: r
                } = e;
                return r ? `user://${t}/${r}` : `user://${t}`
            }

            function b(e) {
                let {
                    source: t,
                    permissionRecord: r
                } = e;
                return `file://${encodeURIComponent(JSON.stringify({source:t,permissionRecord:r}))}`
            }

            function y(e) {
                return `citation://${encodeURIComponent(JSON.stringify(e))}`
            }

            function f(e) {
                let {
                    pageOrDatabaseId: t,
                    timestamp: a,
                    baseUrl: i
                } = e;
                return `${l({baseUrl:i,pageId:t,blockId:void 0})}?${r(737869).lr}=${a}`
            }

            function v(e) {
                return e.startsWith("{{") && e.endsWith("}}") ? e.slice(2, -2) : e
            }

            function k(e) {
                let t = v(e),
                    a = t.split("://")[0];
                if (!(0, r(936868).Wh)(a))
                    if (t.startsWith("CREATE-")) throw new(r(520026)).Yv("CREATE-* placeholder URLs must be resolved to actual IDs before parsing. Found: {{{processedUri}}}", {
                        variables: {
                            processedUri: t
                        }
                    });
                    else throw new(r(520026)).Yv("Invalid agent URL: {{{processedUri}}}", {
                        variables: {
                            processedUri: t
                        }
                    });
                let i = s[a].parseUri(t);
                if (i instanceof Error) throw i;
                return i
            }

            function w(e, t) {
                let a, i, o = v(e),
                    n = o.split("://")[0];
                if ((0, r(936868).Wh)(n)) return k(o);
                if (o.startsWith("//")) a = `https:${o}`;
                else if (o.startsWith("/")) a = `${t.baseUrl}${o}`;
                else if (o.includes("://")) a = o;
                else if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(o)) a = o;
                else {
                    if (!(0, r(247438).ctx)(o)) throw new(r(520026)).Yv("Unable to load the URL: {url} is not a valid URL and cannot be viewed.", {
                        variables: {
                            url: e
                        }
                    });
                    a = `https://${o}`
                }
                try {
                    i = new URL(a)
                } catch (e) {
                    throw new(r(520026)).Yv("Invalid agent URL - Failed to parse as URL: {{{urlWithProtocol}}}", {
                        variables: {
                            urlWithProtocol: a
                        }
                    })
                }
                for (let e of r(936868).od) {
                    var l;
                    let r = s[e],
                        a = null == (l = r.parseUrlToUri) ? void 0 : l.call(r, i, t);
                    if ("string" == typeof a) {
                        if (a.startsWith("https://")) {
                            let e = r.parseUri(a);
                            if (e instanceof Error) throw e;
                            return e
                        }
                        return k(a)
                    }
                }
                if (!(0, r(758654).AY)(a)) throw new(r(520026)).Yv("Cannot view non-web URL: {url}", {
                    variables: {
                        url: e
                    }
                });
                return {
                    type: "webpage",
                    url: a
                }
            }

            function T(e, t) {
                try {
                    return w(e, t)
                } catch (e) {
                    return
                }
            }

            function x(e) {
                try {
                    return k(e)
                } catch (e) {
                    return
                }
            }

            function N(e, t) {
                let a, i = v(e);
                try {
                    a = n(new URL(i), t)
                } catch (t) {
                    throw new(r(520026)).Yv("Invalid agent URL - Failed to parse as URL: {urlStr}", {
                        variables: {
                            urlStr: e
                        }
                    })
                }
                if ("page" !== a.name || !a.blockId) throw new(r(520026)).Yv("Invalid Notion page or app URL: {urlStr}", {
                    variables: {
                        urlStr: e
                    }
                });
                return {
                    pageOrBlockId: a.blockId,
                    blockId: a.scrollToBlockId
                }
            }

            function I(e) {
                let t = k(e);
                if ("collection" !== t.type) throw new(r(520026)).Yv("Invalid data source URL: {{{url}}}", {
                    variables: {
                        url: e
                    }
                });
                return t.collectionId
            }

            function _() {
                let e;
                return RegExp((e = [...(0, r(936868).QB)(), 'https?://[^\\s)\\]"}\\\\|]+'], `(${e.join("|")})`), "g")
            }

            function $(e) {
                var t;
                let {
                    type: a
                } = e;
                switch (a) {
                    case "database":
                    case "page":
                    case "meeting-note":
                    case "pageOrCollectionViewBlock":
                        return {
                            table: r(682956).ev,
                            id: e.id
                        };
                    case "agent":
                    case "trigger":
                    case "script":
                        return {
                            table: r(43296).C,
                            id: e.workflowId,
                            spaceId: e.spaceId
                        };
                    case "collection":
                    case "collectionProperty":
                    case "formulaCode":
                    case "collectionPropertyOption":
                        return {
                            table: r(46241).V,
                            id: e.collectionId
                        };
                    case "formulaResult":
                        return {
                            table: r(682956).ev,
                            id: e.pageId
                        };
                    case "integration":
                        if ("workflowId" in e) return {
                            table: r(43296).C,
                            id: e.workflowId,
                            spaceId: e.spaceId
                        };
                        if ("moduleRecordId" in e) return {
                            table: r(272920).y,
                            id: e.moduleRecordId,
                            spaceId: e.spaceId
                        };
                        (0, r(722371).HB)(e);
                        break;
                    case "view":
                        return {
                            table: r(682956).ev,
                            id: e.collectionViewId
                        };
                    case "user":
                        return {
                            table: r(514214).oo,
                            id: e.userId
                        };
                    case "teamspace":
                    case "slackUser":
                    case "slackChannel":
                    case "slackMessage":
                    case "webpage":
                    case "universal-object":
                    case "agent-system-documentation":
                    case "worker":
                    case "notification":
                        return;
                    case "thread":
                        return {
                            table: r(298085).T,
                            id: e.threadId,
                            spaceId: e.spaceId
                        };
                    case "file":
                        if ("attachmentStep" in e && (null == (t = e.attachmentStep.permissionRecord) ? void 0 : t.table) === "block") return e.attachmentStep.permissionRecord;
                        return;
                    case "discussion":
                        return {
                            id: e.discussionId,
                            table: r(609277).$Y
                        };
                    case "pageDiscussions":
                        return {
                            id: e.pageId,
                            table: r(682956).ev
                        };
                    case "citation":
                        return {
                            id: e.id,
                            table: "block",
                            spaceId: e.spaceId
                        };
                    case "snapshot":
                        return {
                            id: e.pageOrDatabaseId,
                            table: r(682956).ev
                        };
                    default:
                        (0, r(722371).HB)(a)
                }
            }

            function E(e, t) {
                let a, i = r(159523).I6(e, "url"),
                    o = i.length;
                for (; o--;) {
                    let r = T((a = i[o]).href, t),
                        n = r ? function(e) {
                            if ("slackChannel" === e.type || "slackMessage" === e.type || "slackUser" === e.type) return s[e.type].getUri(e)
                        }(r) : void 0;
                    "string" == typeof n && (e = e.slice(0, a.start) + n + e.slice(a.end))
                }
                return e
            }
            let R = (0, r(936868).QB)(),
                M = RegExp(`(${R.join("|")})`, "gi");

            function C(e) {
                return e.includes("://") ? Array.from(e.matchAll(M)).map(e => ({
                    href: e[0],
                    value: e[0],
                    start: e.index,
                    end: e.index + e[0].length
                })) : []
            }
        },
        141334: (e, t, r) => {
            "use strict";
            r.d(t, {
                h: () => i
            }), r(16280), r(944114);
            var a = () => r(668230);
            class i extends a().o {
                type = "jira";
                displayName = "Jira";
                requiresUserAuth = !1;
                featureGate = "jira_qna_ingestion_v2";
                category = "vector";
                parentOrganization = null;
                fileTypes = ["issue"];
                qnaIngestionAIAppId = "c1f230b1-6635-4ab0-a3f5-f7eb105a87c3";
                urlRegex = r(281708).t_;
                getTitle(e) {
                    if ("jira-issue" !== e.type) throw Error(`Expected jira-issue resource, got resource.type=${e.type}`);
                    return e.title
                }
                getText(e) {
                    if ("jira-issue" !== e.type) throw Error(`Expected jira-issue resource, got resource.type=${e.type}`);
                    return `<mentioned-jira type="${e.type}" title="${e.title}">
${e.text}
</mentioned-jira>`
                }
                getSearchResultXMLTagName() {
                    return "jira-result"
                }
                addSearchResultToXML(e, t) {
                    if ("jira" !== e.type) throw Error(`Expected jira result, got result.type=${e.type}`);
                    t.push({
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.id,
                            title: e.title,
                            "last-edited-datetime": e.lastEdited,
                            project: e.path
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("jira-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "jira",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        }
                    }
                }
            }
        },
        148420: (e, t, r) => {
            "use strict";
            r.d(t, {
                QK: () => i
            }), r(898992), r(672577), r(430670), r(581454), r(969475).array(r(969475).string());
            let a = ["auto_increment_id", "formula", "location", "rollup", "created_by", "last_edited_by", "last_visited_time", "button", "verification"];

            function i(e) {
                return !!(0, r(722371).Xk)(a, e)
            }
        },
        180736: (e, t, r) => {
            "use strict";
            r.d(t, {
                Et: () => function e(t) {
                    var o;
                    let {
                        inlineNodesAllowed: n,
                        textAllowed: s,
                        parentTagName: l,
                        mapCounterToKey: d
                    } = t, u = [...n], p = [];
                    for (let [t, i] of (0, a().WP)((o = {
                            mapCounterToKey: d
                        }, (0, a().s8)(r(418672)._S, (t, a) => (function(t, a) {
                            let i = r(418672)._S[t],
                                {
                                    mapCounterToKey: o
                                } = a;
                            return r(860936).p.mapResult((0, r(863025).U5)(t), a => {
                                let n = (0, r(863025).ke)({
                                    inputAttributes: a.attributes,
                                    definitions: i.attributes,
                                    tagName: t,
                                    mapCounterToKey: o
                                });
                                if (r(300441).Q.isFail(n)) return n;
                                let s = a.children ? ? [];
                                i.text || (s = s.filter(e => !(0, r(427485).A)(e)));
                                let l = (0, r(860936).$d)(r(860936).p.manyTill(e({
                                    inlineNodesAllowed: i.inline,
                                    textAllowed: i.text,
                                    parentTagName: t,
                                    mapCounterToKey: o
                                }), r(860936).p.eof()), s);
                                if (r(300441).Q.isFail(l)) return l;
                                let d = l.value;
                                return {
                                    value: {
                                        type: "inline",
                                        tagName: t,
                                        attributes: n.value,
                                        children: d
                                    }
                                }
                            })
                        })(a, o)))))(0, a().Xk)(u, t) && p.push(i);
                    return r(860936).p.choice([...p, ...s ? [i] : [], r(860936).p.fail(e => e.length > 0 ? new(r(932082)).RR({
                        tagName: l,
                        unexpectedNode: e[0]
                    }) : Error("No inline or text node"))])
                }
            }), r(16280), r(944114), r(898992), r(354520);
            var a = () => r(722371);
            r(581454);
            let i = r(860936).p.map(r(863025).W6, e => ({
                type: "text",
                value: e.value
            }))
        },
        223393: (e, t, r) => {
            "use strict";
            r.d(t, {
                U: () => n
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            let a = new Set(["123", "accessibility", "activity", "add", "airplane", "alarm", "alert", "alien", "alien-pixel", "ambulance", "anchor", "apple", "apron", "aquarius", "arch-bridge", "archery", "archive", "aries", "arrivals", "arrow-circle-down", "arrow-down", "arrow-down-basic", "arrow-down-line", "arrow-left", "arrow-left-basic", "arrow-left-line", "arrow-northeast", "arrow-northwest", "arrow-right", "arrow-right-basic", "arrow-right-line", "arrow-southeast", "arrow-southwest", "arrow-turn-left", "arrow-turn-right", "arrow-up", "arrow-up-basic", "arrow-up-line", "arrows-horizontal", "arrows-swap-horizontally", "arrows-swap-vertically", "arrows-vertical", "art", "asterisk", "atm", "attachment", "avocado", "baby", "baby-bottle", "backpack", "backward", "badge", "bag", "baggage-claim", "balloon", "banana", "barcode", "barricade", "baseball", "baseball-cap", "basketball", "bathtub", "bathtub-shower", "battery", "battery-charged", "battery-charging", "bed", "bee", "beer", "beer-bottle", "bell", "bell-notification", "bell-off", "belt", "bicycle", "bikini", "binoculars", "blood-pressure", "bluetooth", "boarding-pass", "boat", "bomb", "bone", "book", "book-closed", "bookmark", "bookmark-outline", "boombox", "boot", "bounce", "bowl", "bowl-food", "bowling", "bra", "brain", "branch", "branch-create", "branch-fork", "branch-merge", "bread", "briefcase", "brightness-high", "broccoli", "broom", "broom-and-dustpan", "browser-stop", "bug", "bugle", "bullseye", "bunk-bed", "burger", "burst", "bus", "bus-double-decker", "bus-metro", "butterfly", "button", "cactus", "cafe", "cake", "calculator", "calendar", "calendar-day", "calendar-month", "calendar-week", "camera", "camera-off", "camera-roll", "camera-roll-portrait", "camping-tent", "camping-trailer", "cancer", "candy", "capricorn", "car", "card", "card-club", "card-diamond", "card-heart", "card-spade", "cards", "carrot", "cash", "cash-register", "cassette", "castle", "castle-japanese", "cat", "categories", "cd", "cellular", "chair", "champagne", "champagne-bottle", "chart", "chart-alternate", "chart-area", "chart-donut", "chart-line", "chart-mixed", "chart-pie", "chat", "chat-user", "check", "checklist", "checkmark", "checkmark-line", "checkmark-square", "chemistry", "cherries", "chess-bishop", "chess-king", "chess-knight", "chess-pawn", "chess-queen", "chess-rook", "chevrons-vertical", "chicken", "child", "chili-pepper", "christmas-tree", "church", "cigarette", "circle", "circle-alternate", "circle-arrows-horizontal", "circle-arrows-vertical", "circle-dashed", "circle-dot", "circle-five-eighths", "circle-four-eighths", "circle-one-eighth", "circle-remove", "circle-seven-eighths", "circle-six-eighths", "circle-three-eighths", "circle-two-eighths", "city", "clarinet", "clear", "clipping", "clock", "clock-alternate", "close", "clothes-button", "clothes-iron", "cloud", "cloud-no", "cloud-off", "cloud-yes", "cloudy", "clover", "clover-four-leaf", "coaster", "coat", "cocktail", "code", "code-scan", "coffee", "coffee-maker", "color-palette", "color-picker", "color-swatch", "column", "comb", "command-line", "comment", "compass", "compose", "compressed-document", "computer", "computer-chip", "conceal", "condense", "confetti-ball", "confetti-party-popper", "conifer-tree", "connecting-flight", "construction-crane", "contrast", "conversation", "copy", "corn", "couch", "cow", "crab", "crayon", "create", "credit-card", "crop", "crutch", "cupcake", "currency", "currency-coin", "cursor", "cursor-button", "cursor-click", "customs", "cut", "dairy", "daisy", "dance", "darks", "dashboard", "database", "defibrillator", "delete", "delivery-truck", "dental", "departures", "dependency", "description", "dialogue", "die1", "die2", "die3", "die4", "die5", "die6", "dining", "directional-sign", "directional-sign-left", "directional-sign-right", "directions", "dish-soap", "dna", "do-not-disturb", "document", "dog", "donkey", "download", "downward", "drafts", "dress", "drink", "duck", "duster", "ear", "ear-hearing-aid", "earthquake", "egg", "eject", "electric-guitar", "electric-plug", "elephant", "elevator", "emoji", "emoji-angry", "emoji-big-sad", "emoji-disappointed", "emoji-grinning", "emoji-grinning-smiling-eyes", "emoji-heart-eyes", "emoji-neutral", "emoji-sad", "emoji-smiling-eyes", "emoji-sunglasses", "emoji-surprised", "emoji-winking", "error", "escalator", "exclamation-mark", "exclamation-mark-double", "exit", "expand", "extension", "fabric-swatch", "facial-tissues", "factory", "fan-deck", "feather", "feed", "filtered", "fire", "fire-extinguisher", "fire-truck", "fireworks", "first-aid", "first-aid-kit", "fish", "flag", "flag-checkered", "flag-pennant", "flag-swallowtail", "flash", "flashlight", "flatware", "fleur-de-lis", "flood", "fog", "folder", "follow", "following", "font", "food-and-drink", "football", "forest-fire", "fork", "fork-and-knife", "formula", "forward", "fragile", "friends", "frying-pan", "fuel", "game-pawn", "garlic", "gavel", "gear", "gears", "gem", "gemini", "geography", "ghost", "gift", "git", "glasses", "globe", "golf", "government", "gradebook", "graduate", "grapes", "grave", "grid", "grid-dense", "grid-wide", "grid-wide-six", "grocery", "groups", "guitar", "gym", "hail", "hair-care", "hairdryer", "hammer", "hanafuda", "hand", "handbag", "hanger", "hare", "hashtag", "headphones", "headset", "heart", "heart-box-bow", "heart-outline", "heart-rate", "heart-rate-monitor", "heartbroken", "helicopter", "helm", "help-alternate", "hexagon", "hexagon-alternate", "hexagon-dashed", "hexagon-five-sixths", "hexagon-four-sixths", "hexagon-one-sixth", "hexagon-three-sixths", "hexagon-two-sixths", "highball", "history", "home", "hot-air-balloon", "hourglass", "hurricane", "ice-skate", "immigration", "inbox", "infinity", "info-alternate", "inline-skate", "invitation", "iterate", "jack-o-lantern", "jar", "judicial-scales", "junk", "key", "key-antique", "keyboard", "keyboard-alternate", "keypad", "kind", "kite", "knife", "knife-kitchen", "language", "laptop", "laundry-basket", "laundry-detergent", "laundry-dryer", "laundry-washer", "layers", "leaf", "leaf-monstera", "lemon", "leo", "libra", "library", "light-bulb", "lights", "link", "lipstick", "list", "list-indent", "litter-disposal", "location", "lock", "lock-keyhole", "log-in", "log-out", "long-bone", "long-sleeve-shirt", "looped-square", "lost-and-found", "lounge", "luggage", "luggage-cart", "lungs", "magic-wand", "magnet", "mahjong", "mail", "makeup-brush", "mandir", "map", "map-pin", "map-pin-alternate", "mathematics", "meat", "medication", "meeting", "megaphone", "menorah", "menstrual-pad", "merge", "metronome", "microphone", "microphone-off", "microscope", "microwave", "midtones", "mirror", "mobile", "monorail", "moon", "mop", "mop-and-bucket", "more", "mosque", "motorcycle", "mountains", "mouth", "move", "move-document", "movie", "movie-camera", "movie-clapboard", "movie-clapboard-play", "mushroom", "music", "music-album", "music-artist", "navigation", "necktie", "network", "new-alert", "new-badge", "new-document", "new-folder", "news", "no", "no-entry", "note-eighth", "note-half", "note-quarter", "note-sixteenth", "note-sixteenth-beamed", "note-whole", "notification", "notion", "numero", "nut", "octagon", "official-document", "onion", "orange", "orbit", "ornament", "oven", "package", "paifang", "paint-brush", "paint-brush-wide", "paint-bucket", "paint-roller", "palm-tree", "pants", "paper-towels", "parking", "parking-no", "partly-cloudy-day", "partly-cloudy-night", "passport", "paste", "peace", "peanut", "pear", "pen", "pencil", "pentagon", "pentagon-alternate", "pentagon-dashed", "pentagon-four-fifths", "pentagon-one-fifth", "pentagon-three-fifths", "pentagon-two-fifths", "people", "perfume", "person-feminine", "person-masculine", "phone", "phone-call", "phone-end-call", "phone-speaker", "photo-landscape", "piano", "pig", "pill", "pin", "pisces", "pitcher", "pizza", "plate-food", "playback-fast-forward", "playback-next", "playback-pause", "playback-play", "playback-play-button", "playback-previous", "playback-rewind", "playback-stop", "playlist", "plus", "poo", "postage-stamp", "postcard", "pot", "potted-plant", "poultry", "power", "pram", "pregnancy-test", "pretzel", "preview", "print", "priority-high", "priority-low", "priority-mid", "private", "profile", "promoted", "public", "pull-request", "pump", "pump-bottle", "push-pin", "puzzle", "question-mark", "radio", "rain", "rainbow", "receipt", "redirect", "redo", "reference", "refresh", "refresh-reverse", "refrigerator", "remove", "rename", "reorder", "repeat", "reply", "reply-all", "report", "ringed-planet", "robot", "rocket", "roller-skate", "row", "rubber-stamp", "ruler", "run", "safety-pin", "sagittarius", "sailboat", "sandwich", "save", "scarf", "school", "science", "scooter", "scorpio", "screwdriver", "script", "scrub-brush", "search", "seed", "send", "send-to", "server", "service-counter", "set-square", "share", "sharing", "sheep", "shell", "shield", "shirt", "shoe", "shogi", "shop", "shopping-bag", "shopping-basket", "shopping-cart", "shorts", "shovel-and-pail", "shower", "shuffle", "sign-in", "sign-out", "signature-document", "sink", "skateboard", "skip-backward", "skip-forward", "skirt", "skull", "skull-profile", "sleet", "slide", "sliders-horizontal", "sliders-vertical", "slideshow", "slideshow-play", "smoking", "smoking-no", "snake", "snare-drum", "snippet", "snorkel", "snowflake", "soap", "soccer", "sock", "soda-bottle", "soft-serve", "soy", "spider", "sponge", "spoon", "spray-bottle", "square", "square-alternate", "square-circle", "square-dashed", "square-one-fourth", "square-three-fourths", "square-two-fourths", "squeeze-tube", "stairs", "star", "star-half", "star-of-life", "star-outline", "stars", "steering-wheel", "stethoscope", "sticker", "stomach", "stopwatch", "storm", "stovetop", "strawberry", "stroller", "subtask", "subtitles", "suit", "suit-club", "suit-diamond", "suit-heart", "suit-spade", "suitcase", "sun", "sunglasses", "sunrise", "sunscreen", "sunset", "suspension-bridge", "swap-horizontally", "swap-vertically", "sword", "symbol", "synagogue", "sync", "sync-reverse", "syringe", "t-square", "table", "tablet", "tabs", "tabs-user", "tag", "takeout-box", "tampon", "target", "taurus", "taxi", "teapot", "telephone", "telescope", "temperature-cool", "temperature-warm", "temple", "theatre", "thinking", "thought", "thought-alert", "thought-dialogue", "throat", "thumbs-down", "thumbs-up", "ticket", "ticket-admission", "timeline", "toaster", "toilet", "toilet-paper", "token", "tooth", "torii", "tornado", "tortoise", "towel", "traffic-cone", "traffic-light", "train", "train-high-speed", "train-light-rail", "train-magnetic-levitation", "train-metro", "transfers", "translate", "tree", "triangle", "triangle-alternate", "triangle-dashed", "triangle-one-third", "triangle-two-thirds", "trophy", "tropical-cocktail", "truck", "trumpet", "tshirt", "tulip", "tulip-name-tag", "tumbler", "tv", "umbrella", "underwear", "undo", "unfollow", "unlock", "unlock-keyhole", "upload", "upload-document", "upload-folder", "upward", "user", "user-circle", "user-circle-dashed", "user-circle-filled", "username", "vacuum-cleaner", "verified", "video-camera", "video-camera-off", "video-game", "video-game-classic", "video-game-joystick", "videotape", "view", "view-off", "vinyl-record", "violin", "virgo", "vitruvian-man", "voicemail", "volcano", "volume-high", "volume-off", "walk", "wall", "warning", "watch-analog", "water", "whale", "wheat", "wheelchair", "wheelchair-access", "wheelchair-motorized", "whistle", "wifi", "wind", "window", "wine", "wine-bottle", "wrapping-paper", "wrench", "yin-yang", "zoom-in", "zoom-out"]),
                i = ["gray", "lightgray", "brown", "yellow", "orange", "green", "blue", "purple", "pink", "red"];
            RegExp(`^/icons/(.+)_(${i.join("|")})\\.svg$`);
            let o = RegExp(`^icons/(.+)_(${i.join("|")})$`);

            function n(e) {
                return e ? function(e) {
                    let t = o.exec(e);
                    if (!t) return;
                    let [, r, i] = t;
                    return a.has(r) ? `/icons/${r}_${i}.svg` : void 0
                }(e) ? ? e : e
            }
        },
        224587: (e, t, r) => {
            "use strict";
            r.d(t, {
                U: () => o,
                v: () => i
            });
            let a = Object.freeze({
                slack: new(r(82188)).d,
                asana: new(r(369056)).v,
                discord: new(r(603524)).Z,
                box: new(r(649084)).m,
                github: new(r(784732)).o,
                gmail: new(r(475544)).X,
                "google-calendar": new(r(732820)).O,
                "google-drive": new(r(659348)).s,
                jira: new(r(141334)).h,
                linear: new(r(312763))._,
                "microsoft-teams": new(r(632462)).R,
                "notion-calendar": new(r(731020)).M,
                "notion-mail": new(r(896758)).V,
                salesforce: new(r(691676)).Y,
                sharepoint: new(r(427092)).u,
                outlook: new(r(308284)).S,
                confluence: new(r(320322)).H,
                custom: new(r(9668)).S
            });

            function i(e) {
                return a[e]
            }

            function o(e) {
                for (let t of Object.values(a))
                    if (t.getSearchResultXMLTagName() === e) return t
            }
        },
        236242: (e, t, r) => {
            "use strict";

            function a(e) {
                return "element" === e.type
            }

            function i(e, t = !1, a = 0, o = !1) {
                let n = "";
                if (t) {
                    n += "\n";
                    for (let e = 0; e < a; e++) n += "	"
                }
                if ("text" === e.type) n += o ? r(381453).ih(e.value) : e.value;
                else {
                    for (let [t, r] of (n += `<${e.tagName}`, Object.entries(e.attributes || {}))) n += ` ${t}="${r}"`;
                    if (e.children && e.children.length > 0) {
                        for (let r of (n += ">", e.children)) n += i(r, t, a + 1, o);
                        if (t) {
                            n += "\n";
                            for (let e = 0; e < a; e++) n += "	"
                        }
                        n += `</${e.tagName}>`
                    } else n += "/>"
                }
                return n
            }

            function o(e) {
                return e.map(e => i(e)).join("")
            }

            function n(e, t = !1, a) {
                let i = (0, r(736192).parse)(e, a);
                return r(381453).oE(i.childNodes.map(e => (function e(t, a = !1) {
                    if (t && "object" == typeof t && "nodeType" in t) {
                        if (t.nodeType === r(736192).NodeType.TEXT_NODE) {
                            if (!("textContent" in t) || "string" != typeof t.textContent) return;
                            return {
                                type: "text",
                                value: a ? r(381453).x4(t.textContent) : t.textContent
                            }
                        } else if (t.nodeType === r(736192).NodeType.ELEMENT_NODE) {
                            if (!("tagName" in t) || "string" != typeof t.tagName) return;
                            let i = t.attributes,
                                o = t.childNodes;
                            return {
                                type: "element",
                                tagName: t.tagName.toLowerCase(),
                                attributes: i || {},
                                children: r(381453).oE(null == o ? void 0 : o.map(t => e(t, a))) || []
                            }
                        }
                    }
                })(e, t)))
            }
            r.d(t, {
                BD: () => n,
                PJ: () => o,
                UB: () => a,
                _o: () => i
            }), r(581454), r(736192)
        },
        242634: () => {},
        308284: (e, t, r) => {
            "use strict";
            r.d(t, {
                S: () => i
            }), r(16280), r(944114), r(898992), r(672577), r(581454);
            var a = () => r(668230);
            class i extends a().o {
                type = "outlook";
                displayName = "Outlook";
                requiresUserAuth = !1;
                featureGate = "outlook_ai_connector";
                category = "vectorless";
                parentOrganization = "Microsoft";
                fileTypes = [];
                qnaIngestionAIAppId = "5f7ef930-12b9-452b-8eb9-a385e84b7aa6";
                urlRegex = /^outlook:\/\/.+/;
                getTitle(e) {
                    throw Error("OutlookDriver.getTitle() is not implemented")
                }
                getText(e) {
                    throw Error("OutlookDriver.getText() is not implemented")
                }
                getSearchResultXMLTagName() {
                    return "outlook-result"
                }
                addSearchResultToXML(e, t) {
                    if ("outlook" !== e.type) throw Error(`Expected outlook result, got result.type=${e.type}`);
                    let r = t.find(t => "outlook-result" === t.tagName && t.attributes.id === e.pageId);
                    r || (r = {
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.pageId,
                            title: e.title
                        },
                        children: []
                    }, t.push(r)), r.children.push({
                        type: "element",
                        tagName: "email",
                        attributes: {
                            id: e.id,
                            title: e.title,
                            "last-edited-datetime": e.lastEdited
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("outlook-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "outlook",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        },
                        children: t.children.map(e => {
                            let t = a.mapKeyToCounter({
                                type: "outlook",
                                key: (0, r(281708).V9)(e.attributes.id)
                            });
                            return i[e.attributes.id] = t, { ...e,
                                attributes: { ...e.attributes,
                                    id: t
                                }
                            }
                        })
                    }
                }
            }
        },
        312763: (e, t, r) => {
            "use strict";
            r.d(t, {
                _: () => i
            }), r(16280), r(944114);
            var a = () => r(668230);
            class i extends a().o {
                type = "linear";
                displayName = "Linear";
                requiresUserAuth = !0;
                featureGate = "linear_ai_connector";
                category = "vector";
                parentOrganization = null;
                fileTypes = ["issue"];
                qnaIngestionAIAppId = "1fa8e9a2-3b4c-5d6e-7f8a-9b0c1d2e3f4a";
                urlRegex = /https:\/\/linear\.app\/(?<orgKey>[^/]+)\/issue\/(?<issueKey>[A-Z0-9]+-\d+).*?/;
                getTitle(e) {
                    if ("linear-issue" !== e.type) throw Error(`Expected linear-issue resource, got resource.type=${e.type}`);
                    return e.title
                }
                getText(e) {
                    if ("linear-issue" !== e.type) throw Error(`Expected linear-issue resource, got resource.type=${e.type}`);
                    return `<mentioned-linear type="${e.type}" title="${e.title}">
${e.text}
</mentioned-linear>`
                }
                buildSearchResult(e) {
                    let {
                        result: t,
                        baseAttributes: r
                    } = e;
                    return "linear" !== t.type ? super.buildSearchResult(e) : {
                        attributes: { ...r,
                            ...t.name ? {
                                name: t.name
                            } : {}
                        },
                        children: [{
                            type: "text",
                            value: t.text
                        }]
                    }
                }
                getSearchResultXMLTagName() {
                    return "linear-result"
                }
                addSearchResultToXML(e, t) {
                    if ("linear" !== e.type) throw Error(`Expected linear result, got result.type=${e.type}`);
                    t.push({
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.id,
                            title: e.title,
                            name: e.name,
                            "last-edited-datetime": e.lastEdited
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("linear-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "linear",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        }
                    }
                }
            }
        },
        320322: (e, t, r) => {
            "use strict";
            r.d(t, {
                H: () => i
            }), r(16280), r(944114);
            var a = () => r(668230);
            class i extends a().o {
                type = "confluence";
                displayName = "Confluence";
                requiresUserAuth = !0;
                featureGate = "confluence_qna";
                category = "vector";
                parentOrganization = null;
                fileTypes = ["document"];
                qnaIngestionAIAppId = r(281708).Sp;
                urlRegex = /https:\/\/[^/]+\.atlassian\.net\/wiki\/pages\/viewpage\.action\?pageId=([A-Za-z0-9]+)/;
                getTitle(e) {
                    if ("confluence-page" !== e.type) throw Error(`Expected confluence-page resource, got resource.type=${e.type}`);
                    return e.title
                }
                getText(e) {
                    if ("confluence-page" !== e.type) throw Error(`Expected confluence-page resource, got resource.type=${e.type}`);
                    return `<mentioned-confluence type="${e.type}" title="${e.title}" page-id="${e.pageId}">
${e.blocks.join("\n")}
</mentioned-confluence>`
                }
                getSearchResultXMLTagName() {
                    return "confluence-result"
                }
                addSearchResultToXML(e, t) {
                    if ("confluence" !== e.type) throw Error(`Expected confluence result, got result.type=${e.type}`);
                    t.push({
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.id,
                            title: e.title,
                            "last-edited-datetime": e.lastEdited
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("confluence-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "confluence",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        }
                    }
                }
            }
        },
        325637: (e, t, r) => {
            "use strict";

            function a(e) {
                return "instructions" === e.type
            }

            function i(e) {
                return "observation" === e.type && "error" === e.observationType
            }

            function o(e) {
                return "observation" === e.type && "search" === e.observationType
            }

            function n(e) {
                let t = Error(e.value);
                return e.stack && (t.stack = e.stack), t
            }

            function s(e) {
                return "assistant" === e.type
            }

            function l(e) {
                return "human" === e.type
            }

            function d(e) {
                return "observation" === e.type && "attachment" === e.observationType
            }

            function u(e) {
                let t = (0, r(236242).BD)(e.value.summary.value)[0];
                if (!t || "element" !== t.type) return "invalid summary node";
                let a = e.value.pages.flatMap(e => (0, r(236242).BD)(e.value)),
                    i = { ...t,
                        children: [...t.children ? ? [], ...a]
                    };
                return (0, r(236242)._o)(i)
            }
            r.d(t, {
                XO: () => i,
                aR: () => n,
                b1: () => s,
                h7: () => o,
                kO: () => d,
                ox: () => l,
                wc: () => a,
                y8: () => u
            }), r(16280), r(898992), r(672577), r(430670)
        },
        344572: (e, t, r) => {
            "use strict";

            function a(e) {
                return (0, r(722371).s8)(r(418672).U4, (t, a) => (function(e, t) {
                    let a = r(418672).U4[e],
                        {
                            mapCounterToKey: i
                        } = t;
                    return r(860936).p.mapResult((0, r(863025).U5)(e), t => {
                        let o = (0, r(863025).ke)({
                            inputAttributes: t.attributes,
                            definitions: { ...a.attributes,
                                name: {
                                    required: !0,
                                    values: !0
                                },
                                description: {
                                    required: !1,
                                    values: !0
                                }
                            },
                            tagName: e,
                            mapCounterToKey: i
                        });
                        if (r(300441).Q.isFail(o)) return o;
                        let n = (0, r(860936).$d)(r(860936).p.manyTill((0, r(180736).Et)({
                            inlineNodesAllowed: a.inline,
                            textAllowed: !1,
                            parentTagName: e,
                            mapCounterToKey: i
                        }), r(860936).p.eof()), t.children ? ? []);
                        if (r(300441).Q.isFail(n)) return n;
                        let s = n.value;
                        return {
                            value: {
                                type: "schema",
                                tagName: e,
                                attributes: o.value,
                                children: s
                            }
                        }
                    })
                })(a, e))
            }
            r.d(t, {
                D: () => a
            })
        },
        369056: (e, t, r) => {
            "use strict";
            r.d(t, {
                v: () => i
            }), r(16280), r(944114);
            var a = () => r(668230);
            class i extends a().o {
                type = "asana";
                displayName = "Asana";
                requiresUserAuth = !0;
                featureGate = "asana_qna";
                category = "vector";
                parentOrganization = null;
                fileTypes = ["task", "project"];
                qnaIngestionAIAppId = "4f25cc1a-6b2e-4e94-a67b-8e4d7f2c9abc";
                urlRegex = /https:\/\/app\.asana\.com\/\d+\/(?<workspaceId>\d+)\/project\/(?<projectId>\d+)\/task\/(?<taskId>\d+)/;
                getTitle(e) {
                    if ("asana" !== e.type) throw Error(`Expected asana resource, got resource.type=${e.type}`);
                    return e.title
                }
                getText(e) {
                    if ("asana" !== e.type) throw Error(`Expected asana resource, got resource.type=${e.type}`);
                    return `<mentioned-asana type="${e.type}" title="${e.title}">
${e.blocks.join("\n")}
</mentioned-asana>`
                }
                buildSearchResult(e) {
                    let {
                        result: t,
                        baseAttributes: r
                    } = e;
                    return "asana" !== t.type ? super.buildSearchResult(e) : {
                        attributes: { ...r,
                            entity: t.entity,
                            ...t.taskId ? {
                                entityId: t.taskId
                            } : {},
                            ...t.assignee ? {
                                assignee: t.assignee
                            } : {},
                            ..."task" === t.entity ? {
                                project: t.project
                            } : {},
                            team: t.team,
                            workspace: t.workspace
                        },
                        children: [{
                            type: "text",
                            value: t.text
                        }]
                    }
                }
                getSearchResultXMLTagName() {
                    return "asana-result"
                }
                addSearchResultToXML(e, t) {
                    if ("asana" !== e.type) throw Error(`Expected asana result, got result.type=${e.type}`);
                    t.push({
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.id,
                            title: e.title,
                            project: e.project,
                            assignee: e.assignee,
                            workspace: e.workspace,
                            entity: e.entity,
                            "last-edited-datetime": e.lastEdited,
                            "task-id": e.taskId
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("asana-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "asana",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        }
                    }
                }
            }
        },
        418672: (e, t, r) => {
            "use strict";
            r.d(t, {
                BP: () => o,
                Bt: () => n,
                F6: () => s,
                GU: () => u,
                HV: () => M,
                P8: () => i,
                RD: () => v,
                U4: () => c,
                Y1: () => $,
                _S: () => d,
                aL: () => E,
                ew: () => N,
                g5: () => C,
                gc: () => R,
                qI: () => l,
                sA: () => T,
                sW: () => x,
                sk: () => g,
                wn: () => I,
                z5: () => _
            }), r(581454);
            var a = r.n(r(625473));
            let i = {
                    default: "default",
                    gray: "gray",
                    brown: "brown",
                    orange: "orange",
                    yellow: "yellow",
                    teal: "green",
                    blue: "blue",
                    purple: "purple",
                    pink: "pink",
                    red: "red",
                    default_background: "default-background",
                    gray_background: "gray-background",
                    brown_background: "brown-background",
                    orange_background: "orange-background",
                    yellow_background: "yellow-background",
                    teal_background: "green-background",
                    blue_background: "blue-background",
                    purple_background: "purple-background",
                    pink_background: "pink-background",
                    red_background: "red-background"
                },
                o = Object.fromEntries(Object.entries(i).map(([e, t]) => [t, e])),
                n = Object.values(i),
                s = ["mention-page", "mention-database", "mention-person", "mention-assistant", "mention-date", "mention-datetime", "mention-date-range", "mention-datetime-range", "mention-link"],
                l = ["b", "i", "code", "s", "u", "a", "h", "e", ...s],
                d = {
                    b: {
                        attributes: {},
                        inline: l,
                        text: !0,
                        isToken: !1
                    },
                    i: {
                        attributes: {},
                        inline: l,
                        text: !0,
                        isToken: !1
                    },
                    code: {
                        attributes: {},
                        inline: l,
                        text: !0,
                        isToken: !1
                    },
                    s: {
                        attributes: {},
                        inline: l,
                        text: !0,
                        isToken: !1
                    },
                    u: {
                        attributes: {},
                        inline: l,
                        text: !0,
                        isToken: !1
                    },
                    a: {
                        attributes: {
                            href: {
                                required: !0,
                                values: !0,
                                description: "link URL. Do not link to any URLs that are not already in the current context.",
                                mappingMode: "href_counter"
                            },
                            type: {
                                required: !1,
                                values: r(281708).PI,
                                description: "universal source type"
                            },
                            "external-id": {
                                required: !1,
                                values: !0,
                                description: "ID for loadable external resource",
                                mappingMode: "external_id_counter"
                            }
                        },
                        inline: l,
                        text: !0,
                        isToken: !1
                    },
                    h: {
                        attributes: {
                            color: {
                                required: !0,
                                values: n,
                                description: "text color"
                            }
                        },
                        inline: l,
                        text: !0,
                        isToken: !1
                    },
                    e: {
                        attributes: {
                            equation: {
                                required: !0,
                                values: !0,
                                description: "LaTeX equation string"
                            }
                        },
                        inline: [],
                        text: !0,
                        isToken: !0
                    },
                    "mention-page": {
                        attributes: {
                            "page-id": {
                                required: !0,
                                values: !0,
                                description: "ID of page",
                                mappingMode: "block_counter"
                            }
                        },
                        inline: [],
                        text: !0,
                        isToken: !0
                    },
                    "mention-link": {
                        attributes: {
                            href: {
                                required: !0,
                                values: !0,
                                description: "link URL. Do not link to any URLs that are not already in the current context."
                            },
                            title: {
                                required: !1,
                                values: !0,
                                description: "Linked page title"
                            },
                            icon_url: {
                                required: !1,
                                values: !0,
                                description: "Favicon. Do not edit this field."
                            },
                            description: {
                                required: !1,
                                values: !0,
                                description: "Linked page description. Do not edit this field."
                            }
                        },
                        inline: [],
                        text: !0,
                        isToken: !0
                    },
                    "mention-database": {
                        attributes: {
                            "database-id": {
                                required: !0,
                                values: !0,
                                description: "ID of database",
                                mappingMode: "collection_counter"
                            }
                        },
                        inline: [],
                        text: !0,
                        isToken: !0
                    },
                    "mention-data-source": {
                        attributes: {
                            "data-source-id": {
                                required: !0,
                                values: !0,
                                description: "ID of database",
                                mappingMode: "collection_counter"
                            }
                        },
                        inline: [],
                        text: !0,
                        isToken: !0
                    },
                    "mention-person": {
                        attributes: {
                            "person-id": {
                                required: !0,
                                values: !0,
                                description: "ID of person",
                                mappingMode: "person_counter"
                            },
                            "person-name": {
                                required: !1,
                                values: !0,
                                description: "Name of person"
                            }
                        },
                        inline: [],
                        text: !0,
                        isToken: !0
                    },
                    "find-person": {
                        attributes: {
                            name: {
                                required: !0,
                                values: !0,
                                description: "Name of person"
                            }
                        },
                        inline: [],
                        text: !0,
                        isToken: !0
                    },
                    "mention-assistant": {
                        attributes: {},
                        inline: [],
                        text: !0,
                        isToken: !0
                    },
                    "mention-date": {
                        attributes: {
                            date: {
                                required: !0,
                                values: !0,
                                description: "Date in ISO 8601 (YYYY-MM-DD) format"
                            }
                        },
                        inline: [],
                        text: !1,
                        isToken: !1
                    },
                    "mention-datetime": {
                        attributes: {
                            date: {
                                required: !0,
                                values: !0,
                                description: "Date in ISO 8601 (YYYY-MM-DD) format"
                            },
                            time: {
                                required: !0,
                                values: !0,
                                description: "Time in ISO 8601 (HH:MM) format"
                            }
                        },
                        inline: [],
                        text: !1,
                        isToken: !1
                    },
                    "mention-date-range": {
                        attributes: {
                            "start-date": {
                                required: !0,
                                values: !0,
                                description: "Start date in ISO 8601 (YYYY-MM-DD) format"
                            },
                            "end-date": {
                                required: !0,
                                values: !0,
                                description: "End date in ISO 8601 (YYYY-MM-DD) format"
                            }
                        },
                        inline: [],
                        text: !1,
                        isToken: !1
                    },
                    "mention-datetime-range": {
                        attributes: {
                            "start-date": {
                                required: !0,
                                values: !0,
                                description: "Start date in ISO 8601 (YYYY-MM-DD) format"
                            },
                            "end-date": {
                                required: !0,
                                values: !0,
                                description: "End date in ISO 8601 (YYYY-MM-DD) format"
                            },
                            "start-time": {
                                required: !0,
                                values: !0,
                                description: "Start time in ISO 8601 (HH:MM) format"
                            },
                            "end-time": {
                                required: !0,
                                values: !0,
                                description: "End time in ISO 8601 (HH:MM) format"
                            }
                        },
                        inline: [],
                        text: !1,
                        isToken: !1
                    },
                    option: {
                        attributes: {
                            option: {
                                values: !0,
                                description: "Option name",
                                required: !0
                            }
                        },
                        inline: [],
                        text: !1,
                        isToken: !1
                    },
                    "option-category": {
                        attributes: {
                            category: {
                                values: !0,
                                description: "Status category",
                                required: !0
                            }
                        },
                        inline: [],
                        text: !1,
                        isToken: !1
                    },
                    "schema-option": {
                        attributes: {
                            option: {
                                values: !0,
                                description: "Option name",
                                required: !0
                            }
                        },
                        inline: [],
                        text: !1,
                        isToken: !1
                    },
                    "schema-option-category": {
                        attributes: {
                            category: {
                                values: !0,
                                description: "Status category",
                                required: !0
                            }
                        },
                        inline: ["schema-option"],
                        text: !1,
                        isToken: !1
                    }
                },
                u = {
                    "property-title": {
                        text: !0,
                        inline: s,
                        attributes: {}
                    },
                    "property-text": {
                        text: !0,
                        inline: l,
                        attributes: {}
                    },
                    "property-url": {
                        text: !0,
                        inline: [],
                        attributes: {}
                    },
                    "property-email": {
                        text: !0,
                        inline: [],
                        attributes: {}
                    },
                    "property-phone-number": {
                        text: !0,
                        inline: [],
                        attributes: {}
                    },
                    "property-person": {
                        text: !1,
                        inline: ["mention-person", "find-person"],
                        attributes: {}
                    },
                    "property-date": {
                        text: !1,
                        inline: ["mention-date", "mention-date-range", "mention-datetime", "mention-datetime-range"],
                        attributes: {}
                    },
                    "property-created-time": {
                        text: !1,
                        inline: ["mention-date", "mention-datetime"],
                        attributes: {}
                    },
                    "property-last-edited-time": {
                        text: !1,
                        inline: ["mention-date", "mention-datetime"],
                        attributes: {}
                    },
                    "property-created-by": {
                        text: !1,
                        inline: ["mention-person"],
                        attributes: {}
                    },
                    "property-last-edited-by": {
                        text: !1,
                        inline: ["mention-person"],
                        attributes: {}
                    },
                    "property-checkbox": {
                        text: !1,
                        inline: [],
                        attributes: {
                            checked: {
                                values: ["true", "false"],
                                description: 'checked state, either "true" or "false"',
                                required: !0
                            }
                        }
                    },
                    "property-select": {
                        text: !1,
                        inline: ["option"],
                        attributes: {}
                    },
                    "property-multi-select": {
                        text: !1,
                        inline: ["option"],
                        attributes: {}
                    },
                    "property-relation": {
                        text: !1,
                        inline: ["mention-page"],
                        attributes: {
                            "database-id": {
                                values: !0,
                                description: "The database ID the relation points to",
                                required: !1,
                                mappingMode: "collection_counter"
                            }
                        }
                    },
                    "property-status": {
                        text: !1,
                        inline: ["option"],
                        attributes: {}
                    },
                    "property-number": {
                        text: !1,
                        inline: [],
                        attributes: {
                            number: {
                                values: !0,
                                description: "value",
                                required: !1
                            }
                        }
                    }
                },
                p = (0, r(722371).objectKeys)(u),
                c = {
                    "schema-property-title": {
                        propertyTagName: "property-title",
                        inline: [],
                        attributes: {}
                    },
                    "schema-property-text": {
                        propertyTagName: "property-text",
                        inline: [],
                        attributes: {}
                    },
                    "schema-property-url": {
                        propertyTagName: "property-url",
                        inline: [],
                        attributes: {}
                    },
                    "schema-property-email": {
                        propertyTagName: "property-email",
                        inline: [],
                        attributes: {}
                    },
                    "schema-property-phone-number": {
                        propertyTagName: "property-phone-number",
                        inline: [],
                        attributes: {}
                    },
                    "schema-property-person": {
                        propertyTagName: "property-person",
                        inline: [],
                        attributes: {
                            limit: {
                                values: ["1", "Infinity"],
                                description: "The number of options that can be added",
                                required: !0
                            }
                        }
                    },
                    "schema-property-date": {
                        propertyTagName: "property-date",
                        inline: [],
                        attributes: {}
                    },
                    "schema-property-created-time": {
                        propertyTagName: "property-created-time",
                        inline: [],
                        attributes: {}
                    },
                    "schema-property-last-edited-time": {
                        propertyTagName: "property-last-edited-time",
                        inline: [],
                        attributes: {}
                    },
                    "schema-property-created-by": {
                        propertyTagName: "property-created-by",
                        inline: [],
                        attributes: {}
                    },
                    "schema-property-last-edited-by": {
                        propertyTagName: "property-last-edited-by",
                        inline: [],
                        attributes: {}
                    },
                    "schema-property-checkbox": {
                        propertyTagName: "property-checkbox",
                        inline: [],
                        attributes: {}
                    },
                    "schema-property-select": {
                        propertyTagName: "property-select",
                        inline: ["schema-option"],
                        attributes: {}
                    },
                    "schema-property-multi-select": {
                        propertyTagName: "property-multi-select",
                        inline: ["schema-option"],
                        attributes: {}
                    },
                    "schema-property-relation": {
                        propertyTagName: "property-relation",
                        inline: ["mention-page"],
                        attributes: {
                            limit: {
                                values: ["1", "Infinity"],
                                description: "The number of options that can be added",
                                required: !0
                            },
                            "database-id": {
                                values: !0,
                                description: "The database ID the relation points to",
                                required: !0,
                                mappingMode: "collection_counter"
                            },
                            "synced-property-name": {
                                required: !1,
                                values: !0,
                                description: "The symmetric relation property name in the database this relation points to"
                            }
                        }
                    },
                    "schema-property-status": {
                        propertyTagName: "property-status",
                        inline: ["schema-option-category"],
                        attributes: {}
                    },
                    "schema-property-number": {
                        propertyTagName: "property-number",
                        inline: [],
                        attributes: {
                            format: {
                                values: !0,
                                description: "Number format",
                                required: !1
                            }
                        }
                    }
                },
                m = ["Count all"],
                h = ["Count values", "Count unique values", "Count empty", "Count not empty", "Percent empty", "Percent not empty", "Show unique values"],
                g = {
                    "Count all": "count",
                    "Count values": "count_values",
                    "Count unique values": "unique",
                    "Count empty": "empty",
                    "Count not empty": "not_empty",
                    "Percent empty": "percent_empty",
                    "Percent not empty": "percent_not_empty",
                    "Show unique values": "show_unique",
                    "Count checked": "checked",
                    "Count unchecked": "unchecked",
                    "Percent checked": "percent_checked",
                    "Percent unchecked": "percent_unchecked",
                    "Count per group": "count_per_group",
                    "Percent per group": "percent_per_group",
                    Sum: "sum",
                    Average: "average",
                    Median: "median",
                    Min: "min",
                    Max: "max",
                    Range: "range",
                    "Earliest date": "earliest_date",
                    "Latest date": "latest_date",
                    "Date range": "date_range"
                },
                b = {
                    basic: [...m, ...h],
                    date: [...m, ...h, "Earliest date", "Latest date", "Date range"],
                    status: [...m, ...h, "Count per group", "Percent per group"],
                    number: [...m, ...h, "Sum", "Average", "Median", "Min", "Max", "Range"],
                    checkbox: [...m, "Count checked", "Count unchecked", "Percent checked", "Percent unchecked"]
                };

            function y(e) {
                return `the name of the ${e} property being aggregated`
            }

            function f(e) {
                return `the method of aggregation for the ${e} property`
            }
            let v = {
                    "aggregation-property-title": {
                        attributes: {
                            name: {
                                required: !0,
                                values: !0,
                                description: y("title")
                            },
                            aggregation: {
                                values: b.basic,
                                required: !0,
                                description: f("title")
                            }
                        }
                    },
                    "aggregation-property-text": {
                        attributes: {
                            name: {
                                required: !0,
                                values: !0,
                                description: y("text")
                            },
                            aggregation: {
                                values: b.basic,
                                required: !0,
                                description: f("text")
                            }
                        }
                    },
                    "aggregation-property-url": {
                        attributes: {
                            name: {
                                required: !0,
                                values: !0,
                                description: y("url")
                            },
                            aggregation: {
                                values: b.basic,
                                required: !0,
                                description: f("url")
                            }
                        }
                    },
                    "aggregation-property-email": {
                        attributes: {
                            name: {
                                required: !0,
                                values: !0,
                                description: y("email")
                            },
                            aggregation: {
                                values: b.basic,
                                required: !0,
                                description: f("email")
                            }
                        }
                    },
                    "aggregation-property-phone-number": {
                        attributes: {
                            name: {
                                required: !0,
                                values: !0,
                                description: y("phone_number")
                            },
                            aggregation: {
                                values: b.basic,
                                required: !0,
                                description: f("phone_number")
                            }
                        }
                    },
                    "aggregation-property-date": {
                        attributes: {
                            name: {
                                values: !0,
                                required: !0,
                                description: y("date")
                            },
                            aggregation: {
                                values: b.date,
                                required: !0,
                                description: f("date")
                            }
                        }
                    },
                    "aggregation-property-created-time": {
                        attributes: {
                            name: {
                                values: !0,
                                required: !0,
                                description: y("created-time")
                            },
                            aggregation: {
                                values: b.date,
                                required: !0,
                                description: f("created-time")
                            }
                        }
                    },
                    "aggregation-property-last-edited-time": {
                        attributes: {
                            name: {
                                values: !0,
                                required: !0,
                                description: y("last-edited-time")
                            },
                            aggregation: {
                                values: b.date,
                                required: !0,
                                description: f("last-edited-time")
                            }
                        }
                    },
                    "aggregation-property-person": {
                        attributes: {
                            name: {
                                values: !0,
                                required: !0,
                                description: y("person")
                            },
                            aggregation: {
                                values: b.basic,
                                required: !0,
                                description: f("person")
                            }
                        }
                    },
                    "aggregation-property-created-by": {
                        attributes: {
                            name: {
                                values: !0,
                                required: !0,
                                description: y("created-by")
                            },
                            aggregation: {
                                values: b.basic,
                                required: !0,
                                description: f("created-by")
                            }
                        }
                    },
                    "aggregation-property-last-edited-by": {
                        attributes: {
                            name: {
                                values: !0,
                                required: !0,
                                description: y("last-edited-by")
                            },
                            aggregation: {
                                values: b.basic,
                                required: !0,
                                description: f("last-edited-by")
                            }
                        }
                    },
                    "aggregation-property-checkbox": {
                        attributes: {
                            name: {
                                values: !0,
                                required: !0,
                                description: y("checkbox")
                            },
                            aggregation: {
                                values: b.checkbox,
                                required: !0,
                                description: f("checkbox")
                            }
                        }
                    },
                    "aggregation-property-select": {
                        attributes: {
                            name: {
                                values: !0,
                                required: !0,
                                description: y("select")
                            },
                            aggregation: {
                                values: b.basic,
                                required: !0,
                                description: f("select")
                            }
                        }
                    },
                    "aggregation-property-multi-select": {
                        attributes: {
                            name: {
                                values: !0,
                                required: !0,
                                description: y("multi-select")
                            },
                            aggregation: {
                                values: b.basic,
                                required: !0,
                                description: f("multi-select")
                            }
                        }
                    },
                    "aggregation-property-relation": {
                        attributes: {
                            name: {
                                values: !0,
                                required: !0,
                                description: y("relation")
                            },
                            aggregation: {
                                values: b.basic,
                                required: !0,
                                description: f("relation")
                            }
                        }
                    },
                    "aggregation-property-number": {
                        attributes: {
                            name: {
                                values: !0,
                                required: !0,
                                description: y("number")
                            },
                            aggregation: {
                                values: b.number,
                                required: !0,
                                description: f("number")
                            }
                        }
                    },
                    "aggregation-property-status": {
                        attributes: {
                            name: {
                                values: !0,
                                required: !0,
                                description: y("status")
                            },
                            aggregation: {
                                values: b.status,
                                required: !0,
                                description: f("status")
                            },
                            group: {
                                values: !0,
                                required: !0,
                                description: "then name of the status group being aggregated when aggregation is 'Count per group' or 'Percent per group'. For other aggregations, just provide any group name."
                            }
                        }
                    }
                },
                k = ["hr", "h1", "h2", "h3", "database", "math-block", "code-block", "child-page", "link-page", "child-database", "link-database", "database-views", "text", "page", "synced-block", "synced-block-reference", "uli", "oli", "toggle", "quote", "callout", "todo", "columns", "table", "unknown-block"],
                w = {
                    required: !1,
                    values: n,
                    description: "color for the block"
                },
                T = {
                    hr: {
                        title: !1,
                        content: [],
                        attributes: {},
                        properties: [],
                        schemas: []
                    },
                    h1: {
                        title: !0,
                        content: [],
                        attributes: {
                            color: w
                        },
                        properties: [],
                        schemas: []
                    },
                    h2: {
                        title: !0,
                        content: [],
                        attributes: {
                            color: w
                        },
                        properties: [],
                        schemas: []
                    },
                    h3: {
                        title: !0,
                        content: [],
                        attributes: {
                            color: w
                        },
                        properties: [],
                        schemas: []
                    },
                    h4: {
                        title: !0,
                        content: [],
                        attributes: {
                            color: w
                        },
                        properties: [],
                        schemas: []
                    },
                    database: {
                        title: !1,
                        content: [],
                        attributes: {},
                        properties: ["property-title"],
                        schemas: p
                    },
                    "math-block": {
                        title: !0,
                        content: [],
                        attributes: {},
                        properties: [],
                        schemas: []
                    },
                    "code-block": {
                        title: !0,
                        content: [],
                        attributes: {
                            language: {
                                required: !1,
                                values: r(656974).yz,
                                description: "language of code"
                            }
                        },
                        properties: [],
                        schemas: []
                    },
                    "child-page": {
                        title: !1,
                        content: [],
                        attributes: {
                            "page-id": {
                                required: !0,
                                values: !0,
                                description: "ID of page, to be used in <load>",
                                mappingMode: "block_counter"
                            },
                            "database-id": {
                                required: !1,
                                values: !0,
                                description: "The ID of the database this page is within, if there is one",
                                mappingMode: "collection_counter"
                            },
                            "has-content": {
                                required: !1,
                                values: ["true", "false"],
                                description: '"true" if the page has content, "false" otherwise'
                            }
                        },
                        properties: p,
                        schemas: []
                    },
                    "link-page": {
                        title: !1,
                        content: [],
                        attributes: {
                            "page-id": {
                                required: !0,
                                values: !0,
                                description: "ID of page, to be used in <load>",
                                mappingMode: "block_counter"
                            },
                            "database-id": {
                                required: !1,
                                values: !0,
                                description: "The ID of the database this page is within, if there is one",
                                mappingMode: "collection_counter"
                            }
                        },
                        properties: p,
                        schemas: []
                    },
                    "child-database": {
                        title: !1,
                        content: [],
                        attributes: {
                            "database-id": {
                                required: !0,
                                values: !0,
                                description: "ID of database. Make sure to use the value of this attribute as the id in query-database.",
                                mappingMode: "block_counter"
                            }
                        },
                        properties: ["property-title"],
                        schemas: p
                    },
                    "database-views": {
                        title: !1,
                        content: [],
                        attributes: {},
                        properties: ["property-title"],
                        schemas: p
                    },
                    "link-database": {
                        title: !1,
                        content: [],
                        attributes: {
                            "database-id": {
                                required: !0,
                                values: !0,
                                description: "ID of database",
                                mappingMode: "collection_counter"
                            }
                        },
                        properties: ["property-title"],
                        schemas: p
                    },
                    text: {
                        title: !0,
                        content: k,
                        attributes: {
                            color: w
                        },
                        properties: [],
                        schemas: []
                    },
                    page: {
                        title: !1,
                        content: k,
                        attributes: {
                            "database-id": {
                                required: !1,
                                values: !0,
                                description: "ID of the database this page belongs to. Use this to look up the schema for the page",
                                mappingMode: "collection_counter"
                            },
                            "page-font": {
                                required: !1,
                                values: ["default", "serif", "mono"],
                                description: "Font used for the page"
                            },
                            "page-width": {
                                required: !1,
                                values: ["default", "full-width"],
                                description: "Width of the page"
                            },
                            "page-font-size": {
                                required: !1,
                                values: ["default", "small"],
                                description: "Font size for the page"
                            }
                        },
                        properties: p,
                        schemas: []
                    },
                    uli: {
                        title: !0,
                        content: k,
                        attributes: {
                            color: w
                        },
                        properties: [],
                        schemas: []
                    },
                    oli: {
                        title: !0,
                        content: k,
                        attributes: {
                            color: w,
                            index: {
                                required: !1,
                                values: !0,
                                description: "Specify a custom index for the list item"
                            }
                        },
                        properties: [],
                        schemas: []
                    },
                    toggle: {
                        title: !0,
                        content: k,
                        attributes: {
                            color: w,
                            size: {
                                required: !1,
                                values: ["h1", "h2", "h3", "h4"],
                                description: "size of the toggle header, if the toggle is a header"
                            }
                        },
                        properties: [],
                        schemas: []
                    },
                    quote: {
                        title: !0,
                        content: k,
                        attributes: {
                            color: w
                        },
                        properties: [],
                        schemas: []
                    },
                    todo: {
                        title: !0,
                        content: k,
                        attributes: {
                            checked: {
                                required: !0,
                                values: ["true", "false"],
                                description: 'checked state, either "true" or "false"'
                            },
                            color: w
                        },
                        properties: [],
                        schemas: []
                    },
                    callout: {
                        title: !0,
                        content: k,
                        attributes: {
                            color: w
                        },
                        properties: [],
                        schemas: []
                    },
                    "synced-block": {
                        title: !1,
                        content: k,
                        attributes: {},
                        properties: [],
                        schemas: []
                    },
                    "synced-block-reference": {
                        title: !1,
                        content: k,
                        attributes: {
                            "synced-block-id": {
                                required: !0,
                                values: !0,
                                description: "The ID of the <synced-block> node that this references",
                                mappingMode: "block_counter"
                            }
                        },
                        properties: [],
                        schemas: []
                    },
                    columns: {
                        title: !1,
                        content: ["column"],
                        attributes: {},
                        properties: [],
                        schemas: []
                    },
                    column: {
                        title: !1,
                        content: k,
                        attributes: {},
                        properties: [],
                        schemas: []
                    },
                    table: {
                        title: !1,
                        content: ["tr"],
                        attributes: {
                            "header-row": {
                                required: !1,
                                values: ["true", "false"],
                                description: 'whether first <tr> is row header, either "true" or "false"'
                            },
                            "header-column": {
                                required: !1,
                                values: ["true", "false"],
                                description: 'whether first <td> in every <tr> is column header, either "true" or "false"'
                            }
                        },
                        properties: [],
                        schemas: ["property-text"]
                    },
                    tr: {
                        title: !1,
                        content: [],
                        attributes: {},
                        properties: ["property-text"],
                        schemas: []
                    },
                    "ai-block": {
                        title: !0,
                        content: k,
                        attributes: {},
                        properties: ["property-text"],
                        schemas: []
                    },
                    transcript: {
                        title: !0,
                        content: k,
                        attributes: {},
                        properties: [],
                        schemas: []
                    },
                    "unknown-block": {
                        title: !0,
                        content: k,
                        attributes: {
                            type: {
                                required: !1,
                                values: Object.values(r(955630).xd),
                                description: "the type of the unknown block"
                            }
                        },
                        properties: [],
                        schemas: []
                    }
                },
                x = Object.freeze((0, r(722371).objectKeys)({
                    text: !0,
                    toggle: !0,
                    quote: !0,
                    callout: !0,
                    uli: !0,
                    oli: !0,
                    todo: !0,
                    h1: !0,
                    h2: !0,
                    h3: !0,
                    h4: !0
                }));

            function N(e) {
                return e
            }

            function I(e) {
                return e
            }

            function _(e) {
                return e
            }

            function $() {
                return r(92513).JW()
            }

            function E(e) {
                return (0, r(4962).gB)(a()(e))
            }

            function R(e) {
                return "collectionView" === e.type
            }
            let M = "search-notion-help";

            function C(e) {
                return "synced-block-reference" === e || "ai-block" === e || "database-views" === e || "transcript" === e || "h4" === e
            }
        },
        427092: (e, t, r) => {
            "use strict";
            r.d(t, {
                u: () => i
            }), r(16280), r(944114);
            var a = () => r(668230);
            class i extends a().o {
                type = "sharepoint";
                displayName = "SharePoint";
                requiresUserAuth = !1;
                featureGate = "sharepoint_qna";
                category = "vector";
                parentOrganization = "Microsoft";
                fileTypes = ["document", "spreadsheets", "presentation", "pdf"];
                qnaIngestionAIAppId = "07351274-83bb-4118-9f5b-9d75f0453999";
                urlRegex = /https:\/\/(?<site>[^.]+)\.sharepoint\.com\/(:(?<fileType>[pwx]):\/r\/)?(?:sites|personal)\/(?<driveName>[^\/]+)\/.*[?&]sourcedoc=(?:%7B|\{)(?<sourceDocId>[0-9A-Fa-f-]+)(?:%7D|\})/;
                getTitle(e) {
                    if ("sharepoint" !== e.type) throw Error(`Expected sharepoint resource, got resource.type=${e.type}`);
                    return e.title
                }
                getText(e) {
                    if ("sharepoint" !== e.type) throw Error(`Expected sharepoint resource, got resource.type=${e.type}`);
                    return `<mentioned-sharepoint type="${e.type}" title="${e.title}" timestamp="${e.timestamp}">
${e.blocks.join("\n")}
</mentioned-sharepoint>`
                }
                buildSearchResult(e) {
                    let {
                        result: t,
                        baseAttributes: r
                    } = e;
                    return "sharepoint" !== t.type ? super.buildSearchResult(e) : {
                        attributes: { ...r,
                            ...t.fileType ? {
                                "file-type": t.fileType
                            } : {}
                        },
                        children: [{
                            type: "text",
                            value: t.text
                        }]
                    }
                }
                getSearchResultXMLTagName() {
                    return "sharepoint-result"
                }
                addSearchResultToXML(e, t) {
                    if ("sharepoint" !== e.type) throw Error(`Expected sharepoint result, got result.type=${e.type}`);
                    t.push({
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.id,
                            title: e.title,
                            "last-edited-datetime": e.lastEdited,
                            ...e.fileType ? {
                                "file-type": e.fileType
                            } : {}
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("sharepoint-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "sharepoint",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        }
                    }
                }
            }
        },
        427485: (e, t, r) => {
            "use strict";

            function a(e) {
                return "text" === e.type && !e.value.trim()
            }
            r.d(t, {
                A: () => a
            })
        },
        444700: (e, t, r) => {
            "use strict";
            r.d(t, {
                MJ: () => m,
                Mw: () => p,
                Pm: () => u,
                WF: () => g,
                dR: () => y,
                e_: () => d,
                rf: () => b,
                sX: () => h,
                tm: () => c,
                vb: () => k
            }), r(16280), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(823215), r(354520), r(672577), r(430670), r(803949), r(581454);
            var a = () => r(722371),
                i = () => r(758654),
                o = () => r(682956),
                n = () => r(514214),
                s = () => r(247438),
                l = () => r(418672);

            function d(e) {
                let t, r = e.replace(/<[^>]+$/, "").replace(/<[^>]+\/$/, ""),
                    a = [],
                    i = /<\/?([a-zA-Z0-9_-]+)(?:\s[^>]*)?>/g,
                    o = r;
                for (; t = i.exec(o);) {
                    let e = t[1],
                        r = t[0];
                    r.startsWith("</") ? a.length > 0 && a[a.length - 1] === e && a.pop() : r.endsWith("/>") || a.push(e)
                }
                for (; a.length;) o += `</${a.pop()}>`;
                return o
            }

            function u(e, t = !1) {
                return e.replace(/[<>]/g, e => {
                    switch (e) {
                        case "<":
                            return "&lt;";
                        case ">":
                            return "&gt;";
                        case '"':
                            return t ? "&quot;" : e;
                        case "'":
                            return t ? "&apos;" : e;
                        case "&":
                            return t ? "&amp;" : e;
                        default:
                            throw Error(`Invalid match: "${e}"`)
                    }
                })
            }

            function p(e) {
                return e.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
            }

            function c(e) {
                return e.replace(/<(code|code-block)(?:\s([^>]*))?>([\s\S]*?)<\/\1>/g, (e, t, r, a) => {
                    let i = a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;"),
                        o = r ? ` ${r}` : "";
                    return `<${t}${o}>${i}</${t}>`
                })
            }

            function m(e) {
                let t, r = [],
                    i = [...e];
                for (; t = i.pop();) {
                    if ("collection" === t.type) {
                        for (let e of Object.values(t.schemas))
                            if ("schema-property-relation" === e.tagName) {
                                let t = e.attributes["database-id"];
                                r.push(t)
                            }
                    }
                    if ("child-page" === t.tagName) {
                        for (let e of Object.values(t.properties))
                            if ("property-relation" === e.tagName) {
                                let t = e.attributes["database-id"];
                                (0, a().O9)(t) && r.push(t)
                            }
                    } else if ("child-database" === t.tagName || "database" === t.tagName) {
                        for (let e of Object.values(t.schemas))
                            if ("schema-property-relation" === e.tagName) {
                                let t = e.attributes["database-id"];
                                r.push(t)
                            }
                    } else if (t.children)
                        for (let e of t.children)(0, l().gc)(e) || i.push(e)
                }
                return r
            }

            function h(e) {
                let t, r = [],
                    a = [e];
                for (; t = a.pop();) {
                    if ("synced-block-reference" === t.tagName) {
                        if (!t.attributes["synced-block-id"]) throw Error("Synced block reference missing synced-block-id");
                        r.push(t.attributes["synced-block-id"])
                    }
                    if (t.children)
                        for (let e of t.children)(0, l().gc)(e) || a.push(e)
                }
                return r
            }

            function g(e) {
                let t = e.getTranscript().filter(r(325637).h7),
                    a = e.state.getIdMapper();
                return t.flatMap(e => {
                    let t = (0, r(236242).BD)(e.value)[0];
                    return (null == t ? void 0 : t.type) === "element" && "search-results" === t.tagName && t.children ? r(381453).oE(t.children.map(e => {
                        var t;
                        if ("element" === e.type && "page" === e.tagName && null != (t = e.attributes) && t.id) return r(300441).Q.unwrap(a.mapCounterToKeyInMode(e.attributes.id, "block_counter"))
                    })) : []
                })
            }
            async function b(e) {
                let {
                    value: t,
                    loadRecordModel: r
                } = e, a = (0, s().RQ)(t), l = "";
                for (let e of a) {
                    let t = e[0],
                        a = (0, s().uPN)(e);
                    for (let d of (t === s().Sj || (0, s().GiG)(e) || (l += t), a)) {
                        if ((0, s().rie)(d)) {
                            let e = (0, s().NcG)(d),
                                t = await r({
                                    table: n().oo,
                                    id: e
                                });
                            l += null == t ? void 0 : t.getName()
                        }
                        if ((0, s().qsB)(d)) l += (0, s().YhW)(d);
                        else if ((0, s().sh$)(d)) {
                            let e = (0, s().cQR)(d),
                                t = i().qg(e);
                            l += ` ${t.hostname||""}${t.pathname||""} `
                        } else if ((0, s().gir)(d)) l += (0, s().U35)(d);
                        else if ((0, s().jIt)(d)) {
                            let e = (0, s().v55)(d),
                                t = await r({
                                    table: o().ev,
                                    id: e
                                });
                            l += (0, s().k4p)(null == t ? void 0 : t.getNonCollectionProperty("title"))
                        }
                    }
                }
                return l
            }

            function y(e) {
                let {
                    pageIds: t,
                    evaluator: a,
                    loadInlineDatabases: i
                } = e, o = Array.from(a.state.getLoadedDatabaseIds()), n = r(381453).sb(t.flatMap(e => {
                    let t = a.state.getBlockFromBlockIdMap(e);
                    if (t && "database-views" === t.tagName) {
                        let e = t.children.find(e => "database-view" === e.tagName);
                        if (e && e.attributes["database-id"]) return [e.attributes["database-id"]]
                    }
                    let r = new Set,
                        o = 3 * !!i;
                    return ! function e(t, r) {
                        if (r(t), "block" === t.type) {
                            if (t.text)
                                for (let a of t.text) e(a, r);
                            if (t.children)
                                for (let a of t.children) e(a, r)
                        } else if ("inline" === t.type) {
                            if (t.children)
                                for (let a of t.children) e(a, r)
                        } else if ("property" === t.type && t.children)
                            for (let a of t.children) e(a, r)
                    }(t, e => {
                        if (!(r.size >= o) && "database-view" === e.tagName) {
                            let t = e.attributes["database-id"];
                            t && r.add(t)
                        }
                    }), [...r]
                }));
                return r(381453).R9(n, o)
            }
            r(381453).Bj(() => [...r(988184).Eo, ...Object.keys(l().sA), ...Object.keys(l()._S), ...Object.keys(l().GU), ...Object.keys(l().U4), ...Object.keys(l().RD)]);
            let f = "dateRangeFilter";

            function v(e, t) {
                if (!(0, a().O)(e, t)) return !0;
                let r = e[t];
                if (!r || Array.isArray(r) && 0 === r.length) return !0;
                if (t === f && void 0 !== e[f]) {
                    let t = e[f];
                    return void 0 === t.startDate && void 0 === t.endDate
                }
                return !1
            }

            function k(e, t) {
                return Array.from(new Set([...(0, a().objectKeys)(e), ...(0, a().objectKeys)(t)])).every(i => !!(v(e, i) && v(t, i)) || !!((0, a().O)(e, i) && (0, a().O)(t, i)) && r(381453).n4(e[i], t[i]))
            }
        },
        460743: (e, t, r) => {
            "use strict";
            r.d(t, {
                _A: () => u,
                nt: () => d
            }), r(16280), r(944114), r(898992), r(354520), r(672577), r(430670), r(803949), r(581454), r(908872), r(737550);
            var a = r.n(r(755373)),
                i = () => r(722371),
                o = () => r(281708),
                n = () => r(224587),
                s = () => r(683053),
                l = () => r(418672);

            function d(e) {
                let {
                    searchResults: t,
                    state: r
                } = e;
                for (let e of t) {
                    let t = s().tD.parseAssistantHref(e.id);
                    if ("slack" === e.type) e.messages.forEach((t, i) => {
                        let n = s().tD.parseAssistantHref(t.messageId);
                        if (!n || "slack" !== n.type) throw Error(`HREF (${t.messageId}) could not be parsed as a Slack message result`);
                        if (0 === i && n.threadTs) {
                            let t = (0, o().V9)(`slack://?${a().stringify({base_url:n.baseUrl,channel_id:n.channelId,message_id:n.threadTs,thread_ts:n.threadTs})}`);
                            r.setUniversalResultPayload(t, {
                                type: "slack",
                                href: t,
                                threadHref: t,
                                title: e.title,
                                text: e.text,
                                user: "",
                                lastEdited: e.lastEdited,
                                domain: n.domain,
                                baseUrl: n.baseUrl,
                                channelId: n.channelId,
                                messageId: n.threadTs,
                                threadTs: n.threadTs,
                                threadMessages: e.messages.map(e => e.messageId)
                            })
                        }
                        r.setUniversalResultPayload((0, o().V9)(t.messageId), {
                            type: "slack",
                            href: t.messageId,
                            threadHref: t.threadId,
                            title: e.title,
                            text: t.text,
                            user: t.user,
                            lastEdited: t.lastEdited,
                            domain: n.domain,
                            baseUrl: n.baseUrl,
                            channelId: n.channelId,
                            messageId: n.messageId,
                            threadTs: n.threadTs,
                            threadMessages: e.messages.map(e => e.messageId)
                        })
                    });
                    else if ("helpdoc" === e.type) {
                        if (!t || "helpdoc" !== t.type) throw Error(`HREF (${e.id}) could not be parsed as a helpdoc result`);
                        let a = {
                            type: "helpdoc",
                            href: e.id,
                            title: e.title,
                            text: e.text,
                            lastEdited: e.lastEdited,
                            url: t.url
                        };
                        r.setUniversalResultPayload((0, o().h5)(e.id), a)
                    } else if ("helpdoc-section" === e.type) {
                        if (!t || "helpdoc-section" !== t.type) throw Error(`HREF (${e.id}) could not be parsed as a helpdoc-section result`);
                        let a = {
                            type: "helpdoc-section",
                            href: e.id,
                            parentPageHref: t.parentPageHref,
                            title: e.title,
                            text: e.text,
                            lastEdited: e.lastEdited,
                            url: t.url
                        };
                        r.setUniversalResultPayload(t.href, a);
                        let i = s().tD.parseAssistantHref(t.parentPageHref);
                        if ((null == i ? void 0 : i.type) === "helpdoc") r.setUniversalResultPayload(t.parentPageHref, { ...a,
                            type: "helpdoc",
                            href: t.parentPageHref,
                            title: e.path,
                            text: "",
                            lastEdited: e.lastEdited,
                            url: i.url
                        });
                        else throw Error(`HREF (${e.id}) could not be parsed as a helpdoc-section result because its parent page could not be parsed as a helpdoc`)
                    } else if ("webpage" === e.type) {
                        if (!t || "webpage" !== t.type) throw Error(`HREF (${e.id}) could not be parsed as a webpage result`);
                        let a = {
                            type: "webpage",
                            href: e.id,
                            title: e.title,
                            text: e.text,
                            lastEdited: e.lastEdited,
                            url: t.url
                        };
                        r.setUniversalResultPayload((0, o().RW)(e.id), a)
                    } else if ("gmail" === e.type) {
                        if (!t || "gmail" !== t.type) throw Error(`HREF (${e.id}) could not be parsed as a gmail result`);
                        let a = (0, o().V9)(`gmail://?url=${encodeURIComponent(`https://mail.google.com/mail/?authuser=${e.emailAddress}#all/${e.pageId}`)}`),
                            i = {
                                type: "gmail",
                                href: e.id,
                                threadHref: a,
                                title: e.title,
                                text: e.text,
                                lastEdited: e.lastEdited,
                                url: t.url
                            };
                        r.setUniversalResultPayload(t.href, i);
                        let n = s().tD.parseAssistantHref(a);
                        if ((null == n ? void 0 : n.type) === "gmail") r.setUniversalResultPayload(a, { ...i,
                            type: "gmail",
                            href: a,
                            title: e.path,
                            text: e.text,
                            lastEdited: e.lastEdited,
                            url: n.url,
                            threadHref: a
                        });
                        else throw Error(`HREF (${e.id}) could not be parsed as a gmail result because its thread URL ${a} could not be parsed as gmail href`)
                    } else if ("notion-mail" === e.type) {
                        if (!t || "notion-mail" !== t.type) throw Error(`HREF (${e.id}) could not be parsed as a notion-mail result`);
                        let a = (0, o().V9)(`notion-mail://?url=${encodeURIComponent(`https://notion.so/mail/${e.pageId}`)}`),
                            i = {
                                type: "notion-mail",
                                href: e.id,
                                threadHref: a,
                                title: e.title,
                                text: e.text,
                                lastEdited: e.lastEdited,
                                url: t.url
                            };
                        r.setUniversalResultPayload(t.href, i);
                        let n = s().tD.parseAssistantHref(a);
                        if ((null == n ? void 0 : n.type) === "notion-mail") r.setUniversalResultPayload(a, { ...i,
                            type: "notion-mail",
                            href: a,
                            title: e.path,
                            text: e.text,
                            lastEdited: e.lastEdited,
                            url: n.url,
                            threadHref: a
                        });
                        else throw Error(`HREF (${e.id}) could not be parsed as a gmail result because its thread URL ${a} could not be parsed as gmail href`)
                    } else if ("outlook" === e.type) {
                        if (!t || "outlook" !== t.type) throw Error(`HREF (${e.id}) could not be parsed as a outlook result`);
                        let a = (0, o().V9)(`outlook://?url=${encodeURIComponent("https://outlook.live.com/mail/0/")}`),
                            i = {
                                type: "outlook",
                                href: e.id,
                                threadHref: a,
                                title: e.title,
                                text: e.text,
                                lastEdited: e.lastEdited,
                                url: t.url
                            };
                        r.setUniversalResultPayload(t.href, i);
                        let n = s().tD.parseAssistantHref(a);
                        if ((null == n ? void 0 : n.type) === "outlook") r.setUniversalResultPayload(a, { ...i,
                            type: "outlook",
                            href: a,
                            title: e.title,
                            text: e.text,
                            lastEdited: e.lastEdited,
                            url: n.url,
                            threadHref: a
                        });
                        else throw Error(`HREF (${e.id}) could not be parsed as a outlook result because its thread URL ${a} could not be parsed as outlook href`)
                    } else if ("microsoft-teams" === e.type) {
                        if (!t || "microsoft-teams" !== t.type) throw Error(`HREF (${e.id}) could not be parsed as a microsoftTeams result`);
                        e.messages.forEach((t, i) => {
                            let n = s().tD.parseAssistantHref(t.messageId);
                            if (!n || "microsoft-teams" !== n.type) throw Error(`HREF (${t.messageId}) could not be parsed as a Slack message result`);
                            if (0 === i && n.threadTs) {
                                let t = {
                                        url: n.url,
                                        channel_id: n.channelId,
                                        message_id: n.threadTs,
                                        thread_ts: n.threadTs,
                                        message_type: n.messageType
                                    },
                                    i = (0, o().V9)(`microsoftTeams://?${a().stringify(t)}`);
                                r.setUniversalResultPayload(i, {
                                    type: "microsoft-teams",
                                    href: i,
                                    threadHref: i,
                                    title: e.title,
                                    text: e.text,
                                    user: "",
                                    lastEdited: e.lastEdited,
                                    url: n.url,
                                    channelId: n.channelId,
                                    messageId: n.threadTs,
                                    threadTs: n.threadTs,
                                    messageType: n.messageType,
                                    threadMessages: e.messages.map(e => e.messageId)
                                })
                            }
                            r.setUniversalResultPayload((0, o().V9)(t.messageId), {
                                type: "microsoft-teams",
                                href: t.messageId,
                                threadHref: t.threadId,
                                title: e.title,
                                text: t.text,
                                user: t.user,
                                lastEdited: t.lastEdited,
                                url: n.url,
                                channelId: n.channelId,
                                messageId: n.messageId,
                                threadTs: n.threadTs,
                                messageType: n.messageType,
                                threadMessages: e.messages.map(e => e.messageId)
                            })
                        })
                    } else if ((0, o().SC)(e.type)) {
                        if (!t || t.type !== e.type) throw Error(`HREF (${e.id}) could not be parsed as a ${e.type} result`);
                        let a = {
                            type: e.type,
                            href: (0, o().V9)(e.id),
                            title: e.title,
                            text: e.text,
                            lastEdited: e.lastEdited,
                            url: t.url,
                            iconUrl: "iconUrl" in e ? e.iconUrl : void 0
                        };
                        r.setUniversalResultPayload((0, o().V9)(e.id), a)
                    } else if ("page" === e.type) {
                        let t = {
                            type: "page",
                            id: e.id,
                            highlight: e.highlight,
                            title: e.title,
                            text: e.text,
                            lastEdited: e.lastEdited
                        };
                        r.setUniversalResultPayload((0, l().ew)(e.id), t)
                    } else {
                        if ("block" === e.type || "properties" === e.type) continue;
                        (0, i().HB)(e.type)
                    }
                }
            }

            function u(e) {
                let {
                    searchResults: t,
                    systemMessages: a,
                    evaluationId: s,
                    scope: l
                } = e, d = !1, u = t.filter(e => "block" === e.type || "properties" === e.type).reduce((e, t) => {
                    let r = e.find(e => e.pageId === t.pageId);
                    return r ? (r.blocks.push(t), e) : [...e, {
                        pageId: t.pageId,
                        title: t.title,
                        path: t.path,
                        lastEdited: t.lastEdited,
                        blocks: [t]
                    }]
                }, []).map(e => {
                    var t;
                    let r, a;
                    return e.blocks.some(e => e.isPrivate) && (d = !0), {
                        type: "element",
                        tagName: "page",
                        attributes: {
                            id: e.pageId,
                            title: e.title,
                            ...e.path && {
                                path: e.path
                            },
                            "last-edited-datetime": e.lastEdited
                        },
                        children: (t = e.blocks, r = ["numbered_list", "bulleted_list", "text"], a = [], t.reduce((e, o, n) => {
                            let s, l = o.blockType,
                                d = [...e],
                                u = (0, i().Xk)(r, l),
                                c = u && a.length > 0 && o.text.length < 750 && (s = a, o.spanIndex - s[0].spanIndex <= 5 && o.spanIndex - s[0].spanIndex >= 0);
                            return a.length > 0 && (!c || a.length > 10) && (1 === a.length ? d.push(a[0]) : d.push(p(a)), a = []), u && 0 === a.length && o.text.length < 500 || c ? (a.push(o), n === t.length - 1 && (d.push(p(a)), a = [])) : d.push(o), d
                        }, [])).map(e => ({
                            type: "element",
                            tagName: "block",
                            attributes: {
                                id: e.id
                            },
                            children: [{
                                type: "text",
                                value: e.text
                            }]
                        }))
                    }
                }), c = t.filter(e => !!("page" === e.type || "helpdoc" === e.type || "helpdoc-section" === e.type || "webpage" === e.type || (0, o().SC)(e.type)) || "block" !== e.type && "properties" !== e.type && (0, i().HB)(e.type)), m = [];
                for (let e of c) {
                    let {
                        id: t,
                        title: r,
                        text: a,
                        lastEdited: i
                    } = e;
                    if (e.isPrivate && (d = !0), "helpdoc" === e.type) m.push({
                        type: "element",
                        tagName: "helpdoc",
                        attributes: {
                            id: t,
                            title: r,
                            "last-edited-datetime": i
                        },
                        children: [{
                            type: "element",
                            tagName: "helpdoc-section",
                            attributes: {
                                id: t,
                                title: r
                            },
                            children: [{
                                type: "text",
                                value: a
                            }]
                        }]
                    });
                    else if ("helpdoc-section" === e.type) {
                        let o = m.find(t => "helpdoc" === t.tagName && t.attributes.id === e.pageId);
                        o || (o = {
                            type: "element",
                            tagName: "helpdoc",
                            attributes: {
                                id: e.pageId,
                                title: e.path,
                                "last-edited-datetime": i
                            },
                            children: []
                        }, m.push(o)), o.children.push({
                            type: "element",
                            tagName: "helpdoc-section",
                            attributes: {
                                id: t,
                                title: r
                            },
                            children: [{
                                type: "text",
                                value: a
                            }]
                        })
                    } else if ("google-drive" === e.type) m.push({
                        type: "element",
                        tagName: "google-drive-result",
                        attributes: {
                            id: t,
                            title: r,
                            "last-edited-datetime": i,
                            ...e.fileType && {
                                "file-type": e.fileType
                            }
                        },
                        children: [{
                            type: "text",
                            value: a
                        }]
                    });
                    else if ("webpage" === e.type) m.push({
                        type: "element",
                        tagName: "webpage",
                        attributes: {
                            id: t,
                            title: r,
                            "updated-datetime": i
                        },
                        children: [{
                            type: "text",
                            value: a
                        }]
                    });
                    else if ("github" === e.type) {
                        let o = void 0 === i || i.toLowerCase().includes("invalid");
                        m.push({
                            type: "element",
                            tagName: "github-result",
                            attributes: {
                                id: t,
                                title: r,
                                ...e.authorName && {
                                    "author-username": e.authorName
                                },
                                ...e.statusTag && {
                                    status: e.statusTag
                                },
                                "repo-name": e.githubRepoName,
                                ...e.path && {
                                    path: e.path
                                },
                                ...!o && {
                                    "last-edited-datetime": i
                                },
                                ...e.fileType && {
                                    "file-type": e.fileType
                                }
                            },
                            children: [{
                                type: "text",
                                value: a
                            }]
                        })
                    } else if ("notion-mail" === e.type) {
                        let i = m.find(t => "notion-mail-result" === t.tagName && t.attributes.id === e.pageId);
                        i || (i = {
                            type: "element",
                            tagName: "notion-mail-result",
                            attributes: {
                                id: e.pageId,
                                title: e.title
                            },
                            children: []
                        }, m.push(i)), i.children.push({
                            type: "element",
                            tagName: "email",
                            attributes: {
                                id: t,
                                title: r
                            },
                            children: [{
                                type: "text",
                                value: a
                            }]
                        })
                    } else if ("outlook" === e.type) {
                        let i = m.find(t => "outlook-result" === t.tagName && t.attributes.id === e.pageId);
                        i || (i = {
                            type: "element",
                            tagName: "outlook-result",
                            attributes: {
                                id: e.pageId,
                                title: e.title
                            },
                            children: []
                        }, m.push(i)), i.children.push({
                            type: "element",
                            tagName: "email",
                            attributes: {
                                id: t,
                                title: r
                            },
                            children: [{
                                type: "text",
                                value: a
                            }]
                        })
                    } else "page" === e.type ? m.push({
                        type: "element",
                        tagName: "page-result",
                        attributes: {
                            id: t,
                            title: r,
                            path: e.path,
                            "last-edited-datetime": i,
                            "author-name": e.authorName ? ? ""
                        },
                        children: [{
                            type: "text",
                            value: a
                        }]
                    }) : "notion-calendar" === e.type ? m.push({
                        type: "element",
                        tagName: "notion-calendar-result",
                        attributes: {
                            id: t,
                            title: r
                        },
                        children: [{
                            type: "text",
                            value: a
                        }]
                    }) : (0, n().v)(e.type).addSearchResultToXML(e, m)
                }
                let h = {},
                    g = r(381453).hS(t.flatMap(e => {
                        let {
                            id: t,
                            pageId: r,
                            type: a
                        } = e;
                        if (t && r && (h[t] = {
                                deIdentifiedId: r,
                                type: a
                            }), "block" === e.type || "properties" === e.type) {
                            let t = u.find(t => t.attributes.id === e.pageId);
                            return t ? [t] : []
                        }
                        if ("page" === e.type || "helpdoc" === e.type || "webpage" === e.type || "helpdoc-section" === e.type || (0, o().SC)(e.type)) {
                            let t = m.find(t => t.attributes.id === e.id || t.children.some(t => "attributes" in t && t.attributes.id === e.id));
                            return t ? [t] : []
                        }(0, i().HB)(e.type)
                    }), "attributes.id");
                return {
                    type: "observation",
                    observationType: "search",
                    value: {
                        type: "element",
                        resultType: "universal",
                        tagName: "search-results",
                        attributes: {
                            "current-results": g.length.toString()
                        },
                        children: g
                    },
                    containsNonSpaceSharedResults: d,
                    systemMessages: a,
                    idToDeIdentifiedIds: h,
                    evaluationId: s,
                    scope: l
                }
            }

            function p(e) {
                let t = e[0];
                return {
                    type: "block",
                    id: t.id,
                    text: e.map(e => e.text).join("\n"),
                    path: t.path,
                    isPrivate: t.isPrivate,
                    pageId: t.pageId,
                    title: t.title,
                    lastEdited: t.lastEdited,
                    blockType: t.blockType,
                    spanIndex: t.spanIndex
                }
            }
        },
        471242: (e, t, r) => {
            "use strict";

            function a(e) {
                return (0, r(722371).s8)(r(418672).GU, (t, a) => (function(e, t) {
                    let a = r(418672).GU[e],
                        {
                            mapCounterToKey: i
                        } = t;
                    return r(860936).p.mapResult((0, r(863025).U5)(e), t => {
                        let o = (0, r(863025).ke)({
                            inputAttributes: t.attributes,
                            definitions: { ...a.attributes,
                                name: {
                                    required: !0,
                                    values: !0
                                }
                            },
                            tagName: e,
                            mapCounterToKey: i
                        });
                        if (r(300441).Q.isFail(o)) return o;
                        let n = t.children ? ? [];
                        a.text || (n = n.filter(e => !(0, r(427485).A)(e)));
                        let s = (0, r(860936).$d)(r(860936).p.manyTill((0, r(180736).Et)({
                            inlineNodesAllowed: a.inline,
                            textAllowed: a.text,
                            parentTagName: e,
                            mapCounterToKey: i
                        }), r(860936).p.eof()), n);
                        if (r(300441).Q.isFail(s)) return s;
                        let l = s.value;
                        return {
                            value: {
                                type: "property",
                                tagName: e,
                                attributes: o.value,
                                children: l
                            }
                        }
                    })
                })(a, e))
            }

            function i(e) {
                return r(860936).p.choice([...Object.values(a(e)), r(860936).p.fail(e => new(r(932082)).yc({
                    nodeType: "property",
                    unexpectedNode: e[0]
                }))])
            }
            r.d(t, {
                Q: () => i,
                x: () => a
            }), r(898992), r(354520)
        },
        475544: (e, t, r) => {
            "use strict";
            r.d(t, {
                X: () => i
            }), r(16280), r(944114), r(898992), r(672577), r(581454);
            var a = () => r(668230);
            class i extends a().o {
                type = "gmail";
                displayName = "Gmail";
                requiresUserAuth = !1;
                featureGate = "gmail_ai_connector";
                category = "vectorless";
                parentOrganization = "Google";
                fileTypes = [];
                qnaIngestionAIAppId = "1724f2a1-f543-43a7-82af-8a0f85bda112";
                urlRegex = r(281708).J0;
                getTitle(e) {
                    if ("gmail" !== e.type) throw Error(`Expected gmail resource, got resource.type=${e.type}`);
                    return e.subject
                }
                getText(e) {
                    if ("gmail" !== e.type) throw Error(`Expected gmail resource, got resource.type=${e.type}`);
                    let t = e.messages.map(e => {
                        let t = new Date(e.timestamp).toLocaleString();
                        return `<mentioned-gmail-message user="${e.user.name}" timestamp="${t}">
${e.text}
</mentioned-gmail-message>`
                    }).join("\n\n");
                    return `<mentioned-gmail-thread subject="${e.subject}" thread-id="${e.threadId}">
${t}
</mentioned-gmail-thread>`
                }
                getSearchResultXMLTagName() {
                    return "gmail-result"
                }
                addSearchResultToXML(e, t) {
                    if ("gmail" !== e.type) throw Error(`Expected gmail result, got result.type=${e.type}`);
                    let r = t.find(t => "gmail-result" === t.tagName && t.attributes.id === e.pageId);
                    r || (r = {
                        type: "element",
                        tagName: "gmail-result",
                        attributes: {
                            id: e.pageId,
                            title: e.title
                        },
                        children: []
                    }, t.push(r)), r.children.push({
                        type: "element",
                        tagName: "email",
                        attributes: {
                            id: e.id,
                            title: e.title,
                            "last-edited-datetime": e.lastEdited
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("gmail-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "gmail",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        },
                        children: t.children.map(e => {
                            let t = a.mapKeyToCounter({
                                type: "gmail",
                                key: (0, r(281708).V9)(e.attributes.id)
                            });
                            return i[e.attributes.id] = t, { ...e,
                                attributes: { ...e.attributes,
                                    id: t
                                }
                            }
                        })
                    }
                }
            }
        },
        603524: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => i
            }), r(16280), r(944114), r(581454);
            var a = () => r(668230);
            class i extends a().o {
                type = "discord";
                displayName = "Discord";
                requiresUserAuth = !1;
                featureGate = "discord_qna";
                category = "vector";
                parentOrganization = null;
                fileTypes = ["message"];
                qnaIngestionAIAppId = "3be7eae2-8e47-47e0-aaa8-634e192caab2";
                urlRegex = /https:\/\/discord\.com\/channels\/(?<guildId>\d+)\/(?<channelId>\d+)\/(?<messageId>\d+)/;
                getTitle(e) {
                    if ("discord" !== e.type) throw Error(`Expected discord resource, got resource.type=${e.type}`);
                    return e.channel
                }
                getText(e) {
                    if ("discord" !== e.type) throw Error(`Expected discord resource, got resource.type=${e.type}`);
                    return `<mentioned-discord type="${e.type}" channel="${e.channel}" timestamp="${e.timestamp}">
${e.messages.map(e=>`<message user="${e.user.name}">${e.text}</message>`).join("\n")}
</mentioned-discord>`
                }
                getSearchResultXMLTagName() {
                    return "discord-result"
                }
                addSearchResultToXML(e, t) {
                    if ("discord" !== e.type) throw Error(`Expected discord result, got result.type=${e.type}`);
                    t.push({
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.id,
                            title: e.title,
                            "channel-name": e.title,
                            "last-edited-datetime": e.lastEdited,
                            ...e.messageType && {
                                "message-type": e.messageType
                            }
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("discord-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "discord-message",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        }
                    }
                }
            }
        },
        632462: (e, t, r) => {
            "use strict";
            r.d(t, {
                R: () => i
            }), r(16280), r(944114), r(581454);
            var a = () => r(668230);
            class i extends a().o {
                type = "microsoft-teams";
                displayName = "Microsoft Teams";
                requiresUserAuth = !1;
                featureGate = "microsoft_teams_qna";
                category = "vector";
                parentOrganization = "Microsoft";
                fileTypes = ["message"];
                qnaIngestionAIAppId = "c91548d4-25d0-44a2-ab2e-19f6f0b11d96";
                urlRegex = /https:\/\/teams\.microsoft\.com\/l\/message\/(?<channelId>[^\/?&]+)\/(?<timestamp>\d+)\?[^#]*?(tenantId=(?<tenantId>[0-9a-fA-F-]{36}))?(?:\S*)?/;
                getTitle(e) {
                    if ("microsoft-teams" !== e.type) throw Error(`Expected microsoft-teams resource, got resource.type=${e.type}`);
                    return e.channel
                }
                getText(e) {
                    if ("microsoft-teams" !== e.type) throw Error(`Expected microsoft-teams resource, got resource.type=${e.type}`);
                    return `<mentioned-microsoft-teams type="${e.type}" channel="${e.channel}" timestamp="${e.timestamp}">
${e.messages.map(e=>`<message user="${e.user.name}">${e.text}</message>`).join("\n")}
</mentioned-microsoft-teams>`
                }
                buildSearchResult(e) {
                    let {
                        result: t,
                        baseAttributes: r,
                        mappedIdOrUrlForResultID: a
                    } = e;
                    if ("microsoft-teams" !== t.type) return super.buildSearchResult(e);
                    if (t.messages && t.messages.length > 0) {
                        let e = t.messages.map(e => {
                            let t = a({
                                type: "microsoft-teams",
                                id: e.messageId
                            });
                            return {
                                type: "element",
                                tagName: "message",
                                attributes: { ..."mapped_as_url" === t.status ? {
                                        url: t.url
                                    } : {},
                                    ..."mapped_as_int" === t.status ? {
                                        id: t.id
                                    } : {},
                                    user: e.user,
                                    "last-updated": e.lastEdited
                                },
                                children: [{
                                    type: "text",
                                    value: e.text
                                }]
                            }
                        });
                        return {
                            attributes: { ...r,
                                ...t.channel ? {
                                    channel: t.channel
                                } : {}
                            },
                            children: [{
                                type: "element",
                                tagName: "messages",
                                attributes: {},
                                children: e
                            }]
                        }
                    }
                    return {
                        attributes: { ...r,
                            ...t.channel ? {
                                channel: t.channel
                            } : {}
                        },
                        children: [{
                            type: "text",
                            value: t.text
                        }]
                    }
                }
                getSearchResultXMLTagName() {
                    return "microsoft-teams-thread"
                }
                addSearchResultToXML(e, t) {
                    if ("microsoft-teams" !== e.type) throw Error(`Expected microsoft-teams result, got result.type=${e.type}`);
                    t.push({
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.id,
                            channel: e.channel ? ? "",
                            "last-edited-datetime": e.lastEdited
                        },
                        children: e.messages.map(e => ({
                            type: "element",
                            tagName: "microsoft-teams-message",
                            attributes: {
                                id: e.messageId,
                                "last-edited-datetime": e.lastEdited,
                                user: e.user
                            },
                            children: [{
                                type: "text",
                                value: e.text
                            }]
                        }))
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if (t.tagName !== this.getSearchResultXMLTagName()) return t;
                    let o = a.mapKeyToCounter({
                        type: "microsoft-teams-message",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        },
                        children: t.children.map(e => {
                            let t = a.mapKeyToCounter({
                                type: "microsoft-teams-message",
                                key: (0, r(281708).V9)(e.attributes.id)
                            });
                            return i[e.attributes.id] = t, { ...e,
                                attributes: { ...e.attributes,
                                    id: t
                                }
                            }
                        })
                    }
                }
            }
        },
        649084: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => i
            }), r(16280), r(944114);
            var a = () => r(668230);
            class i extends a().o {
                type = "box";
                displayName = "Box";
                requiresUserAuth = !1;
                featureGate = "box_qna";
                category = "vector";
                parentOrganization = null;
                fileTypes = ["record"];
                qnaIngestionAIAppId = "0115dd18-531d-4c72-8f5c-179426fbdbae";
                urlRegex = /https:\/\/app\.box\.com\/file\/(\d+)/;
                getTitle(e) {
                    if ("box-file" !== e.type) throw Error(`Expected box-file resource, got resource.type=${e.type}`);
                    return e.title
                }
                getText(e) {
                    if ("box-file" !== e.type) throw Error(`Expected box-file resource, got resource.type=${e.type}`);
                    return `<mentioned-box type="${e.type}" title="${e.title}" file-id="${e.fileId}">
${e.blocks.join("\n")}
</mentioned-box>`
                }
                getSearchResultXMLTagName() {
                    return "box-result"
                }
                addSearchResultToXML(e, t) {
                    if ("box" !== e.type) throw Error(`Expected box result, got result.type=${e.type}`);
                    t.push({
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.id,
                            title: e.title,
                            "last-edited-datetime": e.lastEdited,
                            ...e.fileType ? {
                                "file-type": e.fileType
                            } : {}
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("box-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "box",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        }
                    }
                }
            }
        },
        659348: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => i
            }), r(16280), r(944114);
            var a = () => r(668230);
            class i extends a().o {
                type = "google-drive";
                displayName = "Google Drive";
                requiresUserAuth = !1;
                featureGate = "google_drive_qna_ingestion";
                category = "vectorless";
                parentOrganization = "Google";
                fileTypes = [];
                qnaIngestionAIAppId = "3d40fc68-9393-4aed-8c7e-5db1b8cdb71b";
                urlRegex = /^google-drive:\/\/.+/;
                getTitle(e) {
                    throw Error("GoogleDriveDriver.getTitle() is not implemented")
                }
                getText(e) {
                    throw Error("GoogleDriveDriver.getText() is not implemented")
                }
                getTranscriptAttributes(e) {
                    return {}
                }
                buildSearchResult(e) {
                    let {
                        result: t,
                        baseAttributes: r
                    } = e;
                    return "google-drive" !== t.type ? super.buildSearchResult(e) : {
                        attributes: { ...r,
                            "file-type": t.fileType ? ? ""
                        },
                        children: [{
                            type: "text",
                            value: t.text
                        }]
                    }
                }
                getSearchResultXMLTagName() {
                    return "google-drive-result"
                }
                addSearchResultToXML(e, t) {
                    if ("google-drive" !== e.type) throw Error(`Expected google-drive result, got result.type=${e.type}`);
                    let r = {
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.id,
                            title: e.title,
                            "last-edited-datetime": e.lastEdited,
                            "file-type": e.fileType
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    };
                    t.push(r)
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("google-drive-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "google-drive",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        }
                    }
                }
            }
        },
        668230: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => a
            });
            class a {
                buildSearchResult(e) {
                    let {
                        result: t,
                        baseAttributes: r
                    } = e;
                    return {
                        attributes: r,
                        children: [{
                            type: "text",
                            value: t.text
                        }]
                    }
                }
                buildCitationInfo(e) {
                    let {
                        searchResult: t,
                        searchResultUnmappedId: a,
                        searchResultWithExtraInfo: i,
                        number: o
                    } = e, n = r(683053).tD.parseAssistantHref(a);
                    if (!n) return;
                    let s = t.text,
                        l = t.title;
                    return "webpage" === n.type && (i.url = n.url), {
                        searchResultWithExtraInfo: i,
                        citationType: "universal_search",
                        target: this.type,
                        href: a,
                        title: l,
                        text: s,
                        number: o,
                        ...n
                    }
                }
                buildAgentSearchResultFromSearchEffectResult(e) {
                    return "slack" === e.type ? {
                        searchSourceType: "slack",
                        id: e.id,
                        title: e.title,
                        channel: e.path,
                        text: e.snippet,
                        lastEdited: e.lastEdited
                    } : "gmail" === e.type ? {
                        searchSourceType: "gmail",
                        id: e.id,
                        title: e.title,
                        path: e.path,
                        lastEdited: e.lastEdited
                    } : "salesforce" === e.type ? {
                        searchSourceType: "salesforce",
                        id: e.id,
                        title: e.title,
                        path: e.path,
                        lastEdited: e.lastEdited,
                        objectType: ""
                    } : {
                        searchSourceType: e.type,
                        id: e.id,
                        title: e.title,
                        path: e.path,
                        lastEdited: e.lastEdited
                    }
                }
            }
        },
        683053: (e, t, r) => {
            "use strict";
            r.d(t, {
                D4: () => s,
                V6: () => l,
                tD: () => d
            }), r(16280), r(944114), r(581454);
            var a = r.n(r(625473)),
                i = () => r(758654),
                o = () => r(247438);
            let n = /^\d+$/;

            function s(e) {
                return !!n.test(e)
            }
            class l extends Error {
                constructor(e) {
                    super(`Tried to use an ID that doesn't exist: ${e}`)
                }
            }
            class d {
                counter = 0;
                keyToCounterMap = new Map;
                counterToKeyMap = new Map;
                generateSerializedKey(e) {
                    return a()(e)
                }
                constructor(e) {
                    if (e) {
                        const t = [];
                        for (const {
                                key: r,
                                counter: a
                            } of e.keyMap) this.keyToCounterMap.set(this.generateSerializedKey(r), a), this.counterToKeyMap.set(a, r), t.push(parseInt(a));
                        const a = (0, r(763230).T9)(t);
                        this.counter = "number" == typeof a ? a + 1 : 0
                    }
                }
                serialize() {
                    return {
                        keyMap: Array.from(this.counterToKeyMap.entries()).map(([e, t]) => ({
                            key: r(381453).mg(t),
                            counter: e
                        }))
                    }
                }
                inheritFrom(e) {
                    for (let [t, r] of e.keyToCounterMap.entries()) this.keyToCounterMap.set(t, r);
                    for (let [t, r] of e.counterToKeyMap.entries()) this.counterToKeyMap.set(t, r)
                }
                mapKeyToCounter(e) {
                    let t = this.generateSerializedKey(e);
                    if (!this.keyToCounterMap.has(t)) {
                        let r = this.counter.toString();
                        this.keyToCounterMap.set(t, r), this.counterToKeyMap.set(r, e), this.counter++
                    }
                    return this.keyToCounterMap.get(t)
                }
                mapNodeKeyToCounter(e) {
                    if ("block" === e.type) {
                        let t = { ...e
                        };
                        t.attributes = this.mapNodeAttributesKeyToCounter(e.attributes), t.text = e.text.map(e => this.mapNodeKeyToCounter(e));
                        let r = e.children.map(e => {
                            let r = this.mapNodeKeyToCounter(e);
                            return r.parent = t, r
                        });
                        t.children = r;
                        let a = {};
                        for (let [e, r] of Object.entries(t.properties)) a[e] = this.mapNodeKeyToCounter(r);
                        t.properties = a;
                        let i = {};
                        for (let [e, r] of Object.entries(t.schemas)) i[e] = this.mapNodeKeyToCounter(r);
                        return t.schemas = i, t.schemaId = this.mapKeyToCounter({
                            key: e.schemaId,
                            type: "block"
                        }), t
                    }
                    if ("property" === e.type || "schema" === e.type || "inline" === e.type) {
                        let t = { ...e
                        };
                        return t.attributes = this.mapNodeAttributesKeyToCounter(t.attributes), t.children = t.children.map(e => this.mapNodeKeyToCounter(e)), t
                    }
                    if ("instructions" === e.type) {
                        let t = { ...e
                        };
                        return t.children = t.children.map(e => this.mapNodeKeyToCounter(e)), t
                    }
                    if ("text" === e.type) return { ...e
                    };
                    if ("collection" === e.type) {
                        let t = { ...e,
                                schemaId: this.mapKeyToCounter({
                                    type: "block",
                                    key: e.schemaId
                                }),
                                attributes: { ...e.attributes,
                                    id: this.mapKeyToCounter({
                                        type: "collection",
                                        key: e.attributes.id
                                    })
                                }
                            },
                            r = Object.fromEntries(Object.entries(t.properties).map(([e, t]) => [e, this.mapNodeKeyToCounter(t)]));
                        t.properties = r;
                        let a = Object.fromEntries(Object.entries(t.schemas).map(([e, t]) => [e, this.mapNodeKeyToCounter(t)]));
                        return t.schemas = a, t
                    } else if ("collectionView" === e.type) return { ...e,
                        schemaId: this.mapKeyToCounter({
                            type: "block",
                            key: e.schemaId
                        }),
                        attributes: { ...e.attributes,
                            id: this.mapKeyToCounter({
                                type: "collection-view",
                                key: e.attributes.id
                            }),
                            "database-id": this.mapKeyToCounter({
                                type: "collection",
                                key: e.attributes["database-id"]
                            })
                        }
                    };
                    else if ("slackMessages" === e.type) return { ...e,
                        attributes: { ...e.attributes,
                            id: this.mapKeyToCounter({
                                type: "universal",
                                key: e.attributes.id
                            })
                        }
                    };
                    else if ("microsoftTeamsMessages" === e.type) return { ...e,
                        attributes: { ...e.attributes,
                            id: this.mapKeyToCounter({
                                type: "universal",
                                key: e.attributes.id
                            })
                        }
                    };
                    else if ("attachment" === e.type) return { ...e,
                        attributes: { ...e.attributes,
                            id: this.mapKeyToCounter({
                                type: "attachment",
                                key: e.attributes.id,
                                attachmentType: e.attributes.attachmentType
                            })
                        }
                    };
                    else throw Error(`Unknown node type ${e}`)
                }
                static attributesToMap = {
                    id: !0,
                    "page-id": !0,
                    "database-id": !0,
                    "data-source-id": !0,
                    "person-id": !0,
                    "person-name": !1,
                    href: !0,
                    category: !1,
                    option: !1,
                    format: !1,
                    number: !1,
                    date: !1,
                    time: !1,
                    "start-date": !1,
                    "start-time": !1,
                    "end-date": !1,
                    "end-time": !1,
                    "synced-property-name": !1,
                    "synced-block-id": !0,
                    "external-id": !0,
                    index: !1,
                    title: !1,
                    icon_url: !1,
                    description: !1,
                    name: !1,
                    equation: !1
                };
                mapNodeAttributesKeyToCounter(e) {
                    if (!e) return e;
                    let t = { ...e
                    };
                    for (let [e, r] of Object.entries(d.attributesToMap)) {
                        if (!r) continue;
                        let a = t[e];
                        if (a)
                            if ("href" === e) {
                                let r, n = i().qg(a),
                                    s = i().Jf({
                                        str: n.href,
                                        allowNoProtocol: !0
                                    });
                                s && (r = o().lXo({
                                    url: s,
                                    baseUrl: n.protocol ? `${n.protocol}//${n.host}` : `https://${n.host??"www.notion.so"}`,
                                    publicDomainName: n.host ? ? "www.notion.so"
                                })), r ? t[e] = this.mapKeyToCounter({
                                    type: "block",
                                    key: r
                                }) : t[e] = a
                            } else "person-id" === e ? t[e] = this.mapKeyToCounter({
                                type: "person",
                                key: a
                            }) : "database-id" === e || "data-source-id" === e ? t[e] = this.mapKeyToCounter({
                                type: "collection",
                                key: a
                            }) : t[e] = this.mapKeyToCounter({
                                type: "block",
                                key: a
                            })
                    }
                    return t
                }
                doesIdMapperContainMappedKey(e) {
                    return this.counterToKeyMap.has(e)
                }
                doesIdMapperContainKey(e) {
                    return this.keyToCounterMap.has(this.generateSerializedKey(e))
                }
                getIdForMappedKeyIfExists(e) {
                    let t = this.counterToKeyMap.get(e);
                    return null == t ? void 0 : t.key
                }
                mapCounterToKey(e) {
                    let t = this.counterToKeyMap.get(e);
                    if (!t) throw new l(e);
                    return t
                }
                mapAssistantContextCounterToKey(e) {
                    let {
                        "instructions-page-id": t,
                        "current-page-id": r,
                        "current-person-id": a,
                        "current-background-page-id": i,
                        ...o
                    } = e;
                    return { ...o,
                        ...e["instructions-page-id"] ? {
                            "instructions-page-id": this.mapCounterToKeyInModeOrThrow(e["instructions-page-id"], "block_counter")
                        } : {},
                        ...e["current-page-id"] ? {
                            "current-page-id": this.mapCounterToKeyInModeOrThrow(e["current-page-id"], "block_counter")
                        } : {},
                        ...e["current-background-page-id"] ? {
                            "current-background-page-id": this.mapCounterToKeyInModeOrThrow(e["current-background-page-id"], "block_counter")
                        } : {},
                        ...e["current-thread-id"] ? {
                            "current-thread-id": this.mapCounterToKeyInModeOrThrow(e["current-thread-id"], "thread_counter")
                        } : {},
                        ...e["current-person-id"] ? {
                            "current-person-id": this.mapCounterToKeyInModeOrThrow(e["current-person-id"], "person_counter")
                        } : {}
                    }
                }
                mapAssistantContextKeyToCounter(e) {
                    let {
                        "instructions-page-id": t,
                        "current-page-id": a,
                        "current-person-id": i,
                        "current-background-page-id": o,
                        ...n
                    } = e;
                    return { ...n,
                        ...e["instructions-page-id"] ? {
                            "instructions-page-id": this.mapKeyToCounter({
                                type: "block",
                                key: e["instructions-page-id"]
                            })
                        } : {},
                        ...e["current-page-id"] ? {
                            "current-page-id": this.mapKeyToCounter({
                                type: "block",
                                key: e["current-page-id"]
                            })
                        } : {},
                        ...e["current-background-page-id"] ? {
                            "current-background-page-id": this.mapKeyToCounter({
                                type: "block",
                                key: e["current-background-page-id"]
                            })
                        } : {},
                        ...e["current-thread-id"] ? {
                            "current-thread-id": this.mapKeyToCounter({
                                type: "slack-thread",
                                key: (0, r(281708).V9)(e["current-thread-id"])
                            })
                        } : {},
                        ...e["current-person-id"] ? {
                            "current-person-id": this.mapKeyToCounter({
                                type: "person",
                                key: e["current-person-id"]
                            })
                        } : {}
                    }
                }
                mapAssistantSelectionKeyToCounter(e) {
                    return "block" === e.type ? {
                        type: "block",
                        blockIds: e.blockIds.map(e => this.mapKeyToCounter({
                            type: "block",
                            key: e
                        }))
                    } : "text" === e.type ? {
                        type: "text",
                        start: { ...e.start,
                            blockId: this.mapKeyToCounter({
                                type: "block",
                                key: e.start.blockId
                            })
                        },
                        end: { ...e.end,
                            blockId: this.mapKeyToCounter({
                                type: "block",
                                key: e.end.blockId
                            })
                        }
                    } : void(0, r(722371).HB)(e)
                }
                mapCounterToKeyInModeOrThrow = (e, t, a) => r(300441).Q.unwrap(this.mapCounterToKeyInMode(e, t, a));
                mapCounterToKeyInMode = (e, t, r) => d.mapCounterToKeyInMode(this, e, t, r);
                static parseAssistantHref = r(932956).f9;
                static mapCounterToKeyInMode(e, t, a, i) {
                    if ("block_counter" === a || "person_counter" === a || "thread_counter" === a || "collection_counter" === a || "collection_view_counter" === a || "query_database_result_counter" === a || "external_id_counter" === a || "attachment_id_counter" === a) {
                        let o, n = (0, r(300441).j)(() => e.mapCounterToKey(t));
                        if (r(300441).Q.isFail(n)) return n;
                        let s = n.value;
                        return ("block_counter" === a ? o = "block" : "person_counter" === a ? o = "person" : "thread_counter" === a ? o = "slack-thread" : "collection_counter" === a ? o = "collection" : "collection_view_counter" === a ? o = "collection-view" : "query_database_result_counter" === a ? o = "query-database-result" : "external_id_counter" === a ? o = "universal" : "attachment_id_counter" === a ? o = "attachment" : (0, r(722371).HB)(a), s.type !== o) ? {
                            error: new(r(932082)).xU({
                                receivedIdType: s.type,
                                expectedIdType: o,
                                tagNameForErrorMessage: i,
                                idValueForErrorMessage: t
                            })
                        } : {
                            value: s.key
                        }
                    }
                    if ("href_counter" === a) {
                        let a = d.getMappedTypeFromCounterIfExists(t, e);
                        return "query-database-result" === a ? {
                            error: new(r(932082)).xU({
                                receivedIdType: a,
                                expectedIdType: "href",
                                tagNameForErrorMessage: i,
                                idValueForErrorMessage: t
                            })
                        } : {
                            value: d.mapHrefCounterToUrl(e, t)
                        }
                    }(0, r(722371).HB)(a)
                }
                getTypeKeyFromCounter(e) {
                    return d.getMappedTypeFromCounterIfExists(e, this)
                }
                static getMappedTypeFromCounterIfExists(e, t) {
                    let r;
                    try {
                        r = t.mapCounterToKey(e)
                    } catch (e) {
                        if (e instanceof l) return;
                        throw e
                    }
                    return r.type
                }
                static blockKeyToHref(e) {
                    return `/${e.key.split("/")[0].replaceAll("-","")}`
                }
                static blockIdToHref(e) {
                    return `/${e.split("/")[0].replaceAll("-","")}`
                }
                static databaseQueryHrefToDatabaseQueryResultsId = r(932956).uP;
                static blockHrefToAssistantBlockId = r(932956).Gp;
                static mapHrefCounterToUrl(e, t) {
                    let a;
                    try {
                        a = e.mapCounterToKey(t)
                    } catch (e) {
                        if (e instanceof l) return t;
                        throw e
                    }
                    if ("block" === a.type) return d.blockKeyToHref(a);
                    if ("url" === a.type || "slack-message" === a.type || "slack-thread" === a.type || "webpage" === a.type || "helpdoc" === a.type || "helpdoc-section" === a.type || "microsoft-teams-message" === a.type || "microsoft-teams-thread" === a.type || "discord-message" === a.type || (0, r(281708).SC)(a.type)) return a.key;
                    if ("collection" === a.type || "collection-view" === a.type || "person" === a.type) return r(281708).Py;
                    if ("query-database-result" === a.type || "skill" === a.type) throw Error(`Invalid URL type: ${a.type}`);
                    if ("universal" === a.type || "attachment" === a.type) return a.key;
                    (0, r(722371).HB)(a.type)
                }
                removeKey(e) {
                    let t = this.generateSerializedKey(e),
                        r = this.keyToCounterMap.get(t);
                    if (r) return this.keyToCounterMap.delete(t), this.counterToKeyMap.delete(r), r
                }
                setCounterValueForKey(e, t) {
                    let r = this.generateSerializedKey(e);
                    this.keyToCounterMap.set(r, t), this.counterToKeyMap.set(t, e)
                }
                utilitiesForTests = {
                    removeKey: this.removeKey.bind(this),
                    setCounterValueForKey: this.setCounterValueForKey.bind(this)
                }
            }
        },
        691676: (e, t, r) => {
            "use strict";
            r.d(t, {
                Y: () => i
            }), r(16280), r(944114);
            var a = () => r(668230);
            class i extends a().o {
                type = "salesforce";
                displayName = "Salesforce";
                requiresUserAuth = !0;
                featureGate = "salesforce_qna";
                category = "vector";
                parentOrganization = null;
                fileTypes = ["record"];
                qnaIngestionAIAppId = "7115dd18-531d-4c72-8f5c-279426fbdbae";
                urlRegex = /https:\/\/(?<instanceUrl>[^/]+)\.(?:lightning\.force|my\.salesforce)\.com\/lightning\/r\/(?<objectType>[^/]+)\/(?<recordId>[a-zA-Z0-9]{15,18})\/view/;
                getTitle(e) {
                    if ("salesforce-record" !== e.type) throw Error(`Expected salesforce-record resource, got resource.type=${e.type}`);
                    return `${e.objectType} | ${e.recordId}`
                }
                getText(e) {
                    if ("salesforce-record" !== e.type) throw Error(`Expected salesforce-record resource, got resource.type=${e.type}`);
                    return `<mentioned-salesforce-record type="${e.type}" object-type="${e.objectType}" record-id="${e.recordId}" title="${e.title}">
${e.blocks.join("\n")}
</mentioned-salesforce-record>`
                }
                getSearchResultXMLTagName() {
                    return "salesforce-result"
                }
                addSearchResultToXML(e, t) {
                    if ("salesforce" !== e.type) throw Error(`Expected salesforce result, got result.type=${e.type}`);
                    t.push({
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.id,
                            title: e.title,
                            "last-edited-datetime": e.lastEdited,
                            ...e.objectType ? {
                                "object-type": e.objectType
                            } : {}
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    })
                }
                buildAgentSearchResultFromSearchEffectResult(e) {
                    return {
                        searchSourceType: "salesforce",
                        id: e.id,
                        title: e.title,
                        path: e.path,
                        lastEdited: e.lastEdited,
                        objectType: ""
                    }
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("salesforce-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "salesforce",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        }
                    }
                }
            }
        },
        710559: (e, t, r) => {
            "use strict";
            r.d(t, {
                dK: () => o,
                sD: () => n,
                uS: () => i
            }), r(16280), r(944114), r(898992), r(430670), r(803949);
            var a = () => r(722371);
            let i = "\x3c!--<selection>--\x3e",
                o = "\x3c!--</selection>--\x3e";

            function n(e) {
                let {
                    node: t,
                    selection: n,
                    onlyAllowPropertyTypes: s,
                    namespace: l
                } = e;
                return (function e(t) {
                    let {
                        node: n,
                        selection: s,
                        path: l,
                        onlyAllowPropertyTypes: d,
                        namespace: u
                    } = t;
                    if (l.includes(n)) throw Error("Circular reference detected!");
                    let p = [...l, n],
                        c = [];
                    if ("text" === n.type)
                        for (let e of n.value) c.push(e);
                    else {
                        let t = "";
                        for (let [e, r] of (t += `<${n.tagName}`, Object.entries(n.attributes || {}))) void 0 !== r && (t += ` ${e}="${r}"`);
                        let l = `</${n.tagName}>`;
                        if ("block" === n.type) {
                            let m = "block" === n.type && (null == s ? void 0 : s.type) === "block" && s.blockIds[0] === n.attributes.id,
                                h = "block" === n.type && (null == s ? void 0 : s.type) === "block" && s.blockIds[s.blockIds.length - 1] === n.attributes.id,
                                g = "block" === n.type && (null == s ? void 0 : s.type) === "text" && (s.start.blockId === n.attributes.id || s.end.blockId === n.attributes.id);
                            if (m && c.push(i), 0 !== n.text.length || 0 !== Object.values(n.properties).length || 0 !== Object.values(n.schemas).length || 0 !== n.children.length || g) {
                                let m, h;
                                c.push(`${t}>`);
                                let g = [];
                                if (n.text)
                                    for (let t of n.text)
                                        for (let r of e({
                                                node: t,
                                                selection: s,
                                                path: p,
                                                onlyAllowPropertyTypes: d,
                                                namespace: u
                                            })) g.push(r);
                                (null == s ? void 0 : s.type) === "text" && s.start.blockId === n.attributes.id && (m = s.start.index), (null == s ? void 0 : s.type) === "text" && s.end.blockId === n.attributes.id && (h = s.end.index);
                                for (let e = 0; e < g.length; e++) {
                                    let t = g[e],
                                        r = "";
                                    (0, a().O9)(s) && e === m && (r += i), (0, a().O9)(s) && e === h && (r += o), r += t, c.push(r)
                                }
                                if ((0, a().O9)(s) && m === g.length && c.push(i), (0, a().O9)(s) && h === g.length && c.push(o), "end_to_end" !== u && "tr" === n.tagName) r(381453).Ul(Object.values(n.properties), e => Number(e.attributes.name)).forEach((t, r) => {
                                    let a = n.parent && "table" === n.parent.tagName ? n.parent : void 0,
                                        i = a && a.attributes["header-row"],
                                        o = a && "table" === a.tagName && a.attributes["header-column"],
                                        l = a && 0 === a.children.indexOf(n),
                                        m = i && 0 === r || o && l ? "th" : "td";
                                    c.push(`<${m}>`), c.push(...t.children.flatMap(t => e({
                                        node: t,
                                        selection: s,
                                        path: p,
                                        onlyAllowPropertyTypes: d,
                                        namespace: u
                                    }))), c.push(`</${m}>`)
                                });
                                else
                                    for (let t of function(e) {
                                            let {
                                                tagName: t,
                                                properties: r
                                            } = e;
                                            if ("tr" === t) return r;
                                            let a = [];
                                            for (let e of r) {
                                                var i;
                                                let r = "property-checkbox" !== (i = e).tagName && ("property-number" === i.tagName ? !i.attributes.number : 0 === i.children.length),
                                                    o = "page" === t;
                                                ("property-title" === e.tagName || !r || o && a.length < 20) && a.push(e)
                                            }
                                            return a
                                        }({
                                            tagName: n.tagName,
                                            properties: Object.values(n.properties)
                                        }))(!d || d.includes(t.tagName)) && c.push(...e({
                                        node: t,
                                        selection: s,
                                        path: p,
                                        onlyAllowPropertyTypes: d,
                                        namespace: u
                                    }));
                                for (let t of Object.values(n.schemas)) c.push(...e({
                                    node: t,
                                    selection: s,
                                    path: p,
                                    onlyAllowPropertyTypes: d,
                                    namespace: u
                                }));
                                if (n.children)
                                    for (let t of n.children)
                                        for (let r of e({
                                                node: t,
                                                selection: s,
                                                path: p,
                                                onlyAllowPropertyTypes: d,
                                                namespace: u
                                            })) c.push(r);
                                c.push(l)
                            } else c.push(`${t}/>`);
                            (0, a().O9)(s) && h && c.push(o)
                        } else if ("collection" === n.type) {
                            for (let r of (c.push(`${t}>`), Object.values(n.properties)))(!d || d.includes(r.tagName)) && c.push(...e({
                                node: r,
                                selection: s,
                                path: p,
                                onlyAllowPropertyTypes: d,
                                namespace: u
                            }));
                            for (let t of Object.values(n.schemas)) c.push(...e({
                                node: t,
                                selection: s,
                                path: p,
                                onlyAllowPropertyTypes: d,
                                namespace: u
                            }));
                            c.push(l)
                        } else {
                            function m(e) {
                                return "collection" === e.type || "collectionView" === e.type
                            }
                            if (m(n) || 0 === n.children.length) c.push(`${t}/>`);
                            else {
                                let i = [];
                                if (!m(n) && n.children)
                                    for (let t of n.children)
                                        for (let r of e({
                                                node: t,
                                                selection: s,
                                                path: p,
                                                onlyAllowPropertyTypes: d,
                                                namespace: u
                                            })) i.push(r);
                                if (i.length <= 1 || (0, a().O)(r(418672)._S, n.tagName) && r(418672)._S[n.tagName].isToken) c.push(`${t}>${i.join("")}${l}`);
                                else
                                    for (let e = 0; e < i.length; e++) {
                                        let r = i[e];
                                        0 === e ? c.push(`${t}>${r}`) : e === i.length - 1 ? c.push(r + l) : c.push(r)
                                    }
                            }
                        }
                    }
                    return c
                })({
                    node: t,
                    selection: n,
                    path: [],
                    onlyAllowPropertyTypes: s,
                    namespace: l
                }).join("")
            }
        },
        731020: (e, t, r) => {
            "use strict";
            r.d(t, {
                M: () => i
            }), r(16280), r(944114);
            var a = () => r(668230);
            class i extends a().o {
                type = "notion-calendar";
                displayName = "Notion Calendar";
                requiresUserAuth = !1;
                featureGate = "notion_calendar_ai_connector";
                category = "vectorless";
                parentOrganization = null;
                fileTypes = [];
                qnaIngestionAIAppId = "471f22ca-eb03-4629-99e5-2c4b82c78bb0";
                urlRegex = /^notion-calendar:\/\/.+/;
                getTitle(e) {
                    throw Error("NotionCalendarDriver.getTitle() is not implemented")
                }
                getText(e) {
                    throw Error("NotionCalendarDriver.getText() is not implemented")
                }
                getTranscriptAttributes(e) {
                    return {}
                }
                getSearchResultXMLTagName() {
                    return "notion-calendar-result"
                }
                addSearchResultToXML(e, t) {
                    if ("notion-calendar" !== e.type) throw Error(`Expected notion-calendar result, got result.type=${e.type}`);
                    t.push({
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.id,
                            title: e.title
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("notion-calendar-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "notion-calendar",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        }
                    }
                }
            }
        },
        732820: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => i
            }), r(16280), r(944114);
            var a = () => r(668230);
            class i extends a().o {
                type = "google-calendar";
                displayName = "Google Calendar";
                requiresUserAuth = !1;
                featureGate = "google_calendar_ai_connector";
                category = "vectorless";
                parentOrganization = "Google";
                fileTypes = [];
                qnaIngestionAIAppId = "57bdd966-95fa-4586-ab89-c76454713dd0";
                urlRegex = /https:\/\/(?:www\.)?google\.com\/calendar\/event\?eid=[^&]+/;
                getTitle(e) {
                    throw Error("GoogleCalendarDriver.getTitle() is not implemented")
                }
                getText(e) {
                    throw Error("GoogleCalendarDriver.getText() is not implemented")
                }
                getSearchResultXMLTagName() {
                    return "google-calendar-result"
                }
                addSearchResultToXML(e, t) {
                    if ("google-calendar" !== e.type) throw Error(`Expected google-calendar result, got result.type=${e.type}`);
                    t.push({
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.id,
                            title: e.title
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("google-calendar-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "google-calendar",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o,
                            title: t.attributes.title
                        }
                    }
                }
            }
        },
        741696: (e, t, r) => {
            "use strict";

            function a(e) {
                return e.replace(/<think>[\s\S]*?<\/think>/g, "").trim()
            }

            function i(e) {
                return e.replace(/<lang[\s\S]*?\/?>/g, "").trim()
            }

            function o(e) {
                return e.replaceAll(r(710559).uS, "").replaceAll(r(710559).dK, "")
            }

            function n(e) {
                let t, {
                        tagName: r,
                        inputString: a
                    } = e,
                    i = RegExp(`<${r}(?:\\s+[^>]*)?>([\\s\\S]*?)</${r}>`, "g"),
                    o = [];
                for (; null !== (t = i.exec(a));) o.push(t[1]);
                return o.join("\n")
            }

            function s(e) {
                return (0, r(722371).Xk)(r(418672).F6, e.tagName)
            }

            function l(e) {
                return (0, r(722371).Xk)(r(418672).qI, e.tagName)
            }
            r.d(t, {
                A0: () => a,
                Ld: () => s,
                Os: () => function e(t) {
                    let r = [];
                    for (let a of t.children) "collectionView" !== a.type && (r.push(a), r.push(...e(a)));
                    return r
                },
                SH: () => i,
                ag: () => l,
                c9: () => n,
                rk: () => o
            }), r(944114), r(898992), r(354520), r(581454)
        },
        784732: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => i
            }), r(16280), r(944114), r(898992), r(672577);
            var a = () => r(668230);
            class i extends a().o {
                type = "github";
                displayName = "GitHub";
                requiresUserAuth = !0;
                featureGate = "ai_connector_unification_github";
                category = "vector";
                parentOrganization = null;
                fileTypes = ["code", "pull-request", "issue"];
                qnaIngestionAIAppId = "86ac6e3c-8ca9-4aab-9a25-fea9a0a1af57";
                urlRegex = /^github:\/\/.+/;
                getTitle(e) {
                    if ("github" === e.type) return e.title || "";
                    if ("githubCode" === e.type) return e.codePath || "";
                    throw Error(`Expected github or githubCode resource, got resource.type=${e.type}`)
                }
                getText(e) {
                    if ("github" === e.type) {
                        var t;
                        return (null == (t = e.blocks) ? void 0 : t.join("\n")) || ""
                    }
                    if ("githubCode" === e.type) return e.content || "";
                    throw Error(`Expected github or githubCode resource, got resource.type=${e.type}`)
                }
                getTranscriptAttributes(e) {
                    if ("github" !== e.type) throw Error(`Expected github result, got result.type=${e.type}`);
                    return {
                        "file-type": e.fileType,
                        author: e.authorName,
                        status: e.statusTag,
                        "repo-name": e.githubRepoName,
                        path: e.path
                    }
                }
                buildSearchResult(e) {
                    let {
                        result: t,
                        baseAttributes: r
                    } = e;
                    return "github" !== t.type ? super.buildSearchResult(e) : {
                        attributes: { ...r,
                            "file-type": t.fileType ? ? "",
                            ...t.authorName ? {
                                "author-name": t.authorName
                            } : {},
                            ...t.path.length > 0 ? {
                                path: t.path
                            } : {},
                            ...t.statusTag ? {
                                status: t.statusTag
                            } : {},
                            ...t.githubRepoName ? {
                                "repo-name": t.githubRepoName
                            } : {}
                        },
                        children: [{
                            type: "text",
                            value: t.text
                        }]
                    }
                }
                getSearchResultXMLTagName() {
                    return "github-result"
                }
                addSearchResultToXML(e, t) {
                    if ("github" !== e.type) throw Error(`Expected github result, got result.type=${e.type}`);
                    let r = t.find(t => "github-result" === t.tagName && t.attributes.id === e.pageId);
                    r || (r = {
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.pageId,
                            title: e.title,
                            "file-type": e.fileType,
                            author: e.authorName,
                            status: e.statusTag,
                            "repo-name": e.githubRepoName
                        },
                        children: []
                    }, t.push(r)), r.children.push({
                        type: "text",
                        value: e.text
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("github-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "github",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        }
                    }
                }
            }
        },
        791890: (e, t, r) => {
            "use strict";

            function a(e) {
                return r(860936).p.map((0, r(863025).RB)({
                    tagName: "move",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "block_counter"
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "move",
                    tagName: "move",
                    attributes: e,
                    children: []
                }))
            }

            function i(e) {
                return r(860936).p.map((0, r(863025).RB)({
                    tagName: "move",
                    attributeDefinitions: {
                        id: {
                            required: !0,
                            values: !0,
                            mappingMode: "block_counter"
                        },
                        name: {
                            required: !0,
                            values: !0
                        }
                    },
                    mapCounterToKey: e.mapCounterToKey
                }), ({
                    attributes: e
                }) => ({
                    type: "move",
                    tagName: "move",
                    attributes: e,
                    children: []
                }))
            }
            r.d(t, {
                M: () => i,
                Y: () => a
            }), r(581454)
        },
        860936: (e, t, r) => {
            "use strict";
            r.d(t, {
                $d: () => o,
                AZ: () => n,
                p: () => l
            }), r(16280), r(944114), r(581454);
            var a = () => r(381453);
            class i extends Error {
                constructor(e) {
                    super(e)
                }
            }

            function o(e, t) {
                let [, r] = e(Array.isArray(t) ? t : [t]);
                return r.status ? {
                    value: r.value
                } : {
                    error: r.error
                }
            }

            function n(e, t) {
                let a = o(e, t);
                if (r(300441).Q.isFail(a)) throw a.error;
                return a.value
            }
            let s = Symbol("ManyTillEndSentinel"),
                l = {
                    try: e => t => {
                        let [r, a] = e(t);
                        return a.status ? [r, a] : [t, a]
                    },
                    any: () => e => e.length > 0 ? [e.slice(1), {
                        status: !0,
                        value: e[0]
                    }] : [
                        [], {
                            status: !1,
                            error: new i("Reached end of input")
                        }
                    ],
                    eof: e => t => 0 === t.length ? [
                        [], {
                            status: !0,
                            value: void 0
                        }
                    ] : [t, {
                        status: !1,
                        error: (null == e ? void 0 : e(t[0])) ? ? new i("Expected end of input")
                    }],
                    map: (e, t) => r => {
                        let [a, i] = e(r);
                        return [a, i.status ? {
                            status: !0,
                            value: t(i.value)
                        } : i]
                    },
                    mapResult: (e, t) => a => {
                        let [i, o] = l.map(e, t)(a);
                        return o.status ? r(300441).Q.isFail(o.value) ? [i, {
                            status: !1,
                            error: o.value.error
                        }] : [i, {
                            status: !0,
                            value: o.value.value
                        }] : [i, o]
                    },
                    andThen: (e, t) => r => {
                        let [a, i] = e(r);
                        return i.status ? t(i.value)(a) : [a, i]
                    },
                    sequence: function(e) {
                        return t => {
                            let r = [];
                            for (let a of e) {
                                let [e, i] = a(t);
                                if (!i.status) return [e, i];
                                r.push(i.value), t = e
                            }
                            return [t, {
                                status: !0,
                                value: r
                            }]
                        }
                    },
                    satisfy: function(e) {
                        return l.try(t => {
                            let [r, a] = l.any()(t);
                            return a.status && !e(a.value) ? [r, {
                                status: !1,
                                error: new i("Failed predicate")
                            }] : [r, a]
                        })
                    },
                    filter: function(e, t) {
                        return l.try(r => {
                            let [a, o] = e(r);
                            return [a, o.status ? t(o.value) ? o : {
                                status: !1,
                                error: new i("Failed predicate")
                            } : o]
                        })
                    },
                    literal: e => l.describe(l.satisfy(t => a().n4(t, e)), () => new i(`Expected: ${JSON.stringify(e)}.`)),
                    describe: (e, t) => r => {
                        let [a, i] = e(r);
                        return [a, i.status ? i : {
                            status: !1,
                            error: t()
                        }]
                    },
                    constant: e => t => [t, {
                        status: !0,
                        value: e
                    }],
                    choice: e => 0 === e.length ? l.fail(() => new i("No parsers to choose from")) : t => {
                        let r = e[0](t);
                        for (let i of e.slice(1)) {
                            let [e, o] = r;
                            if (o.status || !a().n4(e, t)) break;
                            r = i(t)
                        }
                        return r
                    },
                    fail: e => t => [t, {
                        status: !1,
                        error: e(t)
                    }],
                    many: e => t => {
                        let r = [];
                        for (;;) {
                            let [a, i] = l.try(e)(t);
                            if (!i.status) return [a, {
                                status: !0,
                                value: r
                            }];
                            r.push(i.value), t = a
                        }
                    },
                    manyTill: (e, t) => r => {
                        let a = [];
                        for (;;) {
                            let [i, o] = l.choice([l.map(t, () => s), l.try(e)])(r);
                            if (!o.status) return [i, o];
                            if (o.value === s) return [i, {
                                status: !0,
                                value: a
                            }];
                            a.push(o.value), r = i
                        }
                    },
                    many1: e => l.map(l.sequence([e, l.many(e)]), ([e, t]) => [e, ...t]),
                    sepBy: (e, t) => l.choice([l.sepBy1(e, t), l.constant([])]),
                    sepBy1: (e, t) => l.andThen(e, r => l.map(l.many(l.map(l.sequence([t, e]), ([, e]) => e)), e => [r, ...e])),
                    lazy: e => l.andThen(l.constant(void 0), e),
                    lookAhead: e => t => [t, e(t)[1]]
                }
        },
        863025: (e, t, r) => {
            "use strict";
            r.d(t, {
                RB: () => g,
                U5: () => l,
                W6: () => d,
                ke: () => p,
                nx: () => m,
                t7: () => c,
                x3: () => h
            }), r(16280), r(18107), r(944114), r(898992), r(354520), r(672577), r(581454);
            var a = () => r(300441),
                i = () => r(722371),
                o = () => r(932082),
                n = () => r(683053);
            let s = r(860936).p.satisfy(e => "element" === e.type);

            function l(e) {
                return r(860936).p.describe(r(860936).p.filter(s, t => t.tagName === e), () => new(o()).gJ(e))
            }
            let d = r(860936).p.satisfy(e => "text" === e.type),
                u = r(860936).p.satisfy(e => "text" === e.type && "" === e.value.trim());

            function p(e) {
                let {
                    inputAttributes: t = {},
                    definitions: s,
                    tagName: l,
                    validateRequiredAttributes: d = !0,
                    mapCounterToKey: u
                } = e, p = Object.keys(t), c = Object.keys(s), m = r(381453).R9(p, c);
                if (m.length > 0) return {
                    error: new(o()).LN({
                        attributeNames: m,
                        tagName: l
                    })
                };
                if (d) {
                    for (let [e, t] of Object.entries(s))
                        if (t.required && !p.includes(e)) return {
                            error: new(o()).HQ({
                                attributeName: e,
                                tagName: l
                            })
                        }
                }
                let h = r(381453).o8(t);
                for (let [e, r] of Object.entries(t)) {
                    let t = s[e];
                    if ((0, i().O9)(t.mappingMode)) {
                        if ("href_counter" !== t.mappingMode && !(0, n().D4)(r)) return {
                            error: new(o()).qW(e, r)
                        };
                        if ((0, i().O9)(u) && "href_counter" === t.mappingMode) {
                            let t;
                            for (let o of ["href_counter", "query_database_result_counter"])
                                if (t = n().tD.mapCounterToKeyInMode({
                                        mapCounterToKey: u
                                    }, r, o, l), a().Q.isSuccess(t)) {
                                    h[e] = function(e) {
                                        let {
                                            prefixMappingMode: t,
                                            baseHref: r
                                        } = e;
                                        return "query_database_result_counter" === t ? `query_database_result_counter:/${n().tD.blockIdToHref(r)}` : "href_counter" === t ? r : void(0, i().HB)(t)
                                    }({
                                        prefixMappingMode: o,
                                        baseHref: t.value
                                    });
                                    break
                                }
                            if (a().Q.isFail(t)) return {
                                error: new(o()).wL("unmapped_id", t.error.message, t.error)
                            }
                        } else if ((0, i().O9)(u)) {
                            let i = n().tD.mapCounterToKeyInMode({
                                mapCounterToKey: u
                            }, r, t.mappingMode, l);
                            if (a().Q.isFail(i)) return {
                                error: new(o()).wL("unmapped_id", i.error.message, i.error)
                            };
                            h[e] = i.value
                        }
                    }
                    if (!0 !== t.values && !t.values.includes(r)) return {
                        error: new(o()).GW({
                            attributeName: e,
                            receivedValue: r,
                            tagName: l
                        })
                    }
                }
                return {
                    value: h
                }
            }

            function c(e, t) {
                if (0 === e.length) throw Error("Must provide at least 1 label and type guard");
                let r = [...e],
                    a = [
                        []
                    ];
                for (let o of t) {
                    let [t, n] = r[0];
                    if (!n(o)) {
                        for (; r.length > 0;) {
                            r.shift();
                            let e = r[0];
                            if (a.push([]), e && e[1](o)) break
                        }
                        if (0 === r.length) {
                            var i;
                            let r = null == (i = e.find(([, e]) => e(o))) ? void 0 : i[0];
                            if (!r) throw Error(`Item did not match any type guards: ${JSON.stringify(o)}`);
                            return {
                                error: {
                                    incorrectLabel: r,
                                    lastLabel: t
                                }
                            }
                        }
                    }
                    a.at(-1).push(o)
                }
                for (; a.length < e.length;) a.push([]);
                return {
                    value: a
                }
            }

            function m(e, t, a) {
                let {
                    allowUnmatchedText: i = !1
                } = a ? ? {}, n = r(860936).p.manyTill(r(860936).p.choice([...t, ...i ? [r(860936).p.map(u, e => void 0)] : [], r(860936).p.fail(t => new(o()).RR({
                    tagName: e,
                    unexpectedNode: t[0]
                }))]), r(860936).p.eof());
                return r(860936).p.map(n, e => r(381453).oE(e))
            }

            function h(e) {
                return e.children && e.children.length > 0 ? {
                    error: new(o()).RR({
                        tagName: e.tagName,
                        unexpectedNode: e.children[0]
                    })
                } : {
                    value: void 0
                }
            }

            function g(e) {
                let {
                    tagName: t,
                    attributeDefinitions: i,
                    mapCounterToKey: o
                } = e;
                return r(860936).p.mapResult(l(t), e => {
                    let r = p({
                        tagName: t,
                        inputAttributes: e.attributes,
                        definitions: i,
                        mapCounterToKey: o
                    });
                    if (a().Q.isFail(r)) return r;
                    let n = h(e);
                    return a().Q.isFail(n) ? n : {
                        value: {
                            attributes: r.value
                        }
                    }
                })
            }
        },
        886508: (e, t, r) => {
            "use strict";
            r.d(t, {
                V8: () => u,
                st: () => d,
                vj: () => p,
                zQ: () => o
            }), r(18107), r(944114), r(967357), r(898992), r(823215), r(354520), r(581454), r(737550);
            var a = () => r(932082);

            function i(e) {
                return r(860936).p.mapResult((0, r(863025).U5)("tr"), t => {
                    var a;
                    let i = (0, r(863025).ke)({
                        inputAttributes: t.attributes,
                        definitions: {
                            id: {
                                required: !1,
                                values: !0,
                                mappingMode: "block_counter"
                            }
                        },
                        tagName: t.tagName,
                        validateRequiredAttributes: !1,
                        mapCounterToKey: e.mapCounterToKey
                    });
                    if (r(300441).Q.isFail(i)) return i;
                    let o = n(e, t.tagName, i.value);
                    if (r(300441).Q.isFail(o)) return o;
                    let s = o.value,
                        l = (0, r(860936).$d)((0, r(863025).nx)(t.tagName, [r(860936).p.mapResult(r(860936).p.choice([(0, r(863025).U5)("th"), (0, r(863025).U5)("td")]), t => {
                            let a = (0, r(860936).$d)((0, r(863025).nx)(t.tagName, [(0, r(180736).Et)({
                                inlineNodesAllowed: r(418672).qI,
                                textAllowed: !0,
                                parentTagName: t.tagName,
                                mapCounterToKey: e.mapCounterToKey
                            })]), t.children ? ? []);
                            return r(300441).Q.isFail(a) ? a : {
                                value: {
                                    text: a.value,
                                    isHeader: "th" === t.tagName
                                }
                            }
                        })]), t.children ? ? []);
                    return r(300441).Q.isFail(l) ? l : {
                        value: {
                            node: {
                                tagName: "tr",
                                type: "block",
                                attributes: {
                                    id: s
                                },
                                persisted: e.persisted,
                                text: [],
                                children: [],
                                properties: Object.fromEntries(l.value.map((e, t) => {
                                    let r = (t + 1).toString();
                                    return [r, {
                                        tagName: "property-text",
                                        type: "property",
                                        attributes: {
                                            name: r
                                        },
                                        children: e.text
                                    }]
                                })),
                                schemas: {},
                                hasUncited: !1
                            },
                            allChildrenAreHeaders: l.value.every(e => e.isHeader),
                            firstChildIsHeader: !!(null == (a = l.value.at(0)) ? void 0 : a.isHeader)
                        }
                    }
                })
            }

            function o(e) {
                return "unknown-block" === e
            }

            function n(e, t, r) {
                return e.persisted ? r.id ? {
                    value: r.id
                } : {
                    error: new(a()).oN
                } : o(t) ? r.id ? {
                    value: r.id
                } : {
                    error: new(a()).N8
                } : r.id ? {
                    error: new(a()).oS
                } : {
                    value: e.allocateIdFn()
                }
            }

            function s(e) {
                let t = (0, r(722371).s8)(r(418672).sA, (o, s) => {
                    let u = function(e, t, i) {
                        let o = r(418672).sA[e],
                            {
                                allowMove: s,
                                allowUncited: u,
                                persisted: p,
                                mapCounterToKey: c
                            } = t,
                            m = (0, r(863025).U5)(e);
                        return "page" === e && (m = r(860936).p.choice([m, (0, r(863025).U5)("instructions-page")])), r(860936).p.mapResult(m, m => {
                            let h = (0, r(863025).ke)({
                                inputAttributes: m.attributes,
                                definitions: { ...o.attributes,
                                    id: {
                                        required: !1,
                                        values: !0,
                                        mappingMode: "block_counter"
                                    }
                                },
                                tagName: e,
                                validateRequiredAttributes: !1,
                                mapCounterToKey: c
                            });
                            if (r(300441).Q.isFail(h)) return h;
                            if ("synced-block-reference" === e && !p && m.children && m.children.length > 0) return {
                                error: new(a()).w5
                            };
                            let g = n(t, e, h.value);
                            if (r(300441).Q.isFail(g)) return g;
                            let b = g.value,
                                y = [];
                            o.title && y.push((0, r(180736).Et)({
                                inlineNodesAllowed: r(418672).qI,
                                textAllowed: !0,
                                parentTagName: e,
                                mapCounterToKey: c
                            }));
                            let f = o.schemas.map(e => `schema-${e}`),
                                v = (0, r(344572).D)({
                                    mapCounterToKey: c
                                });
                            y.push(...(0, r(722371).WP)(v).filter(([e]) => f.includes(e)).map(([, e]) => e)), y.push(s ? (0, r(791890).Y)({
                                mapCounterToKey: c
                            }) : l), u && y.push(d());
                            let k = [...o.properties];
                            for (let e of (y.push(...(0, r(722371).WP)((0, r(471242).x)({
                                    mapCounterToKey: c
                                })).filter(([e]) => (0, r(722371).Xk)(k, e)).map(([, e]) => e)), o.content)) y.push(i(e));
                            let w = (0, r(860936).$d)((0, r(863025).nx)(e, y), m.children ? ? []);
                            if (r(300441).Q.isFail(w)) return w;
                            let T = w.value.some(e => "uncited" === e.type),
                                x = w.value.filter(e => "uncited" !== e.type),
                                N = (0, r(863025).t7)([
                                    ["inline or text node", function(e) {
                                        return "text" === e.type || "inline" === e.type
                                    }],
                                    ["property node", function(e) {
                                        return "property" === e.type
                                    }],
                                    ["schema node", function(e) {
                                        return "schema" === e.type
                                    }],
                                    ["block node", function(e) {
                                        return "block" === e.type || "move" === e.type
                                    }]
                                ], x);
                            if (r(300441).Q.isFail(N)) return {
                                error: new(a()).SX({
                                    foundNodeType: N.error.incorrectLabel,
                                    incorrectlyAfterType: N.error.lastLabel
                                })
                            };
                            let [I, _, $, E] = N.value;
                            if ("tr" === e) {
                                for (let e of _)
                                    if (!/^-?\d+$/.test(e.attributes.name)) return {
                                        error: new(a()).dO
                                    }
                            }
                            return {
                                value: {
                                    type: "block",
                                    tagName: e,
                                    attributes: { ...h.value,
                                        id: b
                                    },
                                    persisted: p,
                                    text: I,
                                    children: E,
                                    properties: Object.fromEntries(_.map(e => [e.attributes.name, e])),
                                    schemas: Object.fromEntries($.map(e => [e.attributes.name, e])),
                                    hasUncited: T
                                }
                            }
                        })
                    }(s, e, e => t[e]);
                    if ("table" === s) return r(860936).p.choice([r(860936).p.try(u), r(860936).p.mapResult((0, r(863025).U5)("table"), t => {
                        let a = (0, r(863025).ke)({
                            inputAttributes: t.attributes,
                            definitions: {
                                id: {
                                    required: !1,
                                    values: !0,
                                    mappingMode: "block_counter"
                                }
                            },
                            tagName: t.tagName,
                            validateRequiredAttributes: !1,
                            mapCounterToKey: e.mapCounterToKey
                        });
                        if (r(300441).Q.isFail(a)) return a;
                        let o = n(e, t.tagName, a.value);
                        if (r(300441).Q.isFail(o)) return o;
                        let s = o.value,
                            l = (0, r(860936).$d)((0, r(863025).nx)(t.tagName, [i(e)]), t.children ? ? []);
                        if (r(300441).Q.isFail(l)) return l;
                        let d = Math.max(...l.value.map(e => Object.keys(e.node.properties).length)),
                            u = l.value.map(e => {
                                let t = Object.keys(e.node.properties).length;
                                return t < d ? { ...e.node,
                                    properties: Object.fromEntries([...Object.entries(e.node.properties), ...r(381453).y1(t, d).map(e => {
                                        let t = (e + 1).toString();
                                        return [t, {
                                            tagName: "property-text",
                                            type: "property",
                                            attributes: {
                                                name: t
                                            },
                                            children: []
                                        }]
                                    })])
                                } : e.node
                            }),
                            p = l.value.length > 0 && l.value.every(e => e.firstChildIsHeader),
                            c = l.value.length > 0 && l.value[0].allChildrenAreHeaders;
                        return {
                            value: {
                                tagName: "table",
                                type: "block",
                                attributes: {
                                    id: s,
                                    ...p ? {
                                        "header-row": "true"
                                    } : {},
                                    ...c ? {
                                        "header-column": "true"
                                    } : {}
                                },
                                persisted: e.persisted,
                                text: [],
                                children: u,
                                properties: {},
                                schemas: {},
                                hasUncited: !1
                            }
                        }
                    })]);
                    return "tr" === s ? r(860936).p.choice([r(860936).p.try(u), r(860936).p.map(i(e), e => e.node)]) : u
                });
                return t
            }
            let l = r(860936).p.mapResult((0, r(863025).U5)("move"), () => ({
                error: new(a()).Qv
            }));

            function d() {
                return r(860936).p.mapResult((0, r(863025).U5)("uncited"), e => ({
                    value: {
                        type: "uncited"
                    }
                }))
            }

            function u(e) {
                return r(860936).p.choice([...Object.values(s(e)), ...e.allowMove ? [] : [l], r(860936).p.fail(e => new(a()).yc({
                    nodeType: "block",
                    unexpectedNode: e[0]
                }))])
            }

            function p(e) {
                return r(860936).p.choice([...Object.values(s(e)), (0, r(791890).Y)({
                    mapCounterToKey: e.persisted ? void 0 : e.mapCounterToKey
                }), r(860936).p.fail(e => new(a()).yc({
                    nodeType: "block",
                    unexpectedNode: e[0]
                }))])
            }
        },
        896758: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => i
            }), r(16280), r(944114), r(898992), r(672577), r(581454);
            var a = () => r(668230);
            class i extends a().o {
                type = "notion-mail";
                displayName = "Notion Mail";
                requiresUserAuth = !1;
                featureGate = "notion_mail_connector";
                category = "vectorless";
                parentOrganization = null;
                fileTypes = [];
                qnaIngestionAIAppId = "86ac6e3c-8ca9-4aab-9a25-fea9a0a1af57";
                urlRegex = r(281708).xx;
                getTitle(e) {
                    if ("notion-mail" !== e.type) throw Error(`Expected notion-mail resource, got resource.type=${e.type}`);
                    return e.subject
                }
                getText(e) {
                    if ("notion-mail" !== e.type) throw Error(`Expected notion-mail resource, got resource.type=${e.type}`);
                    let t = e.messages.map(e => {
                        let t = new Date(e.timestamp).toLocaleString();
                        return `<mentioned-notion-mail-message user="${e.user.name}" timestamp="${t}">
${e.text}
</mentioned-notion-mail-message>`
                    }).join("\n\n");
                    return `<mentioned-notion-mail-thread subject="${e.subject}" thread-id="${e.threadId}">
${t}
</mentioned-notion-mail-thread>`
                }
                getTranscriptAttributes(e) {
                    return {}
                }
                getSearchResultXMLTagName() {
                    return "notion-mail-result"
                }
                addSearchResultToXML(e, t) {
                    if ("notion-mail" !== e.type) throw Error(`Expected notion-mail result, got result.type=${e.type}`);
                    let r = t.find(t => "notion-mail-result" === t.tagName && t.attributes.id === e.pageId);
                    r || (r = {
                        type: "element",
                        tagName: this.getSearchResultXMLTagName(),
                        attributes: {
                            id: e.pageId,
                            title: e.title
                        },
                        children: []
                    }, t.push(r)), r.children.push({
                        type: "element",
                        tagName: "email",
                        attributes: {
                            id: e.id,
                            title: e.title,
                            "last-edited-datetime": e.lastEdited
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    })
                }
                mapObservationResultNode(e) {
                    let {
                        node: t,
                        idMapper: a,
                        idToCounter: i
                    } = e;
                    if ("notion-mail-result" !== t.tagName) return t;
                    let o = a.mapKeyToCounter({
                        type: "notion-mail",
                        key: (0, r(281708).V9)(t.attributes.id)
                    });
                    return i[t.attributes.id] = o, { ...t,
                        attributes: { ...t.attributes,
                            id: o
                        },
                        children: t.children.map(e => {
                            let t = a.mapKeyToCounter({
                                type: "notion-mail",
                                key: (0, r(281708).V9)(e.attributes.id)
                            });
                            return i[e.attributes.id] = t, { ...e,
                                attributes: { ...e.attributes,
                                    id: t
                                }
                            }
                        })
                    }
                }
            }
        },
        932082: (e, t, r) => {
            "use strict";
            r.d(t, {
                GW: () => s,
                HQ: () => n,
                LN: () => o,
                N8: () => f,
                QT: () => _,
                Qv: () => w,
                RR: () => l,
                S2: () => I,
                SX: () => m,
                TP: () => x,
                Te: () => a,
                Uc: () => T,
                af: () => E,
                dO: () => h,
                gJ: () => d,
                kT: () => $,
                nD: () => k,
                oN: () => b,
                oS: () => y,
                qW: () => p,
                u7: () => N,
                w5: () => g,
                wL: () => i,
                xU: () => c,
                yc: () => u,
                yd: () => v
            }), r(16280), r(581454);
            class a extends Error {
                constructor(e, t, r) {
                    super(t), this.type = e, this.cause = r
                }
                getMetadata() {}
            }
            class i extends a {}
            class o extends i {
                constructor(e) {
                    let t = 1 === e.attributeNames.length ? `Unexpected attribute for <${e.tagName}> tag: ${e.attributeNames[0]}` : `Unexpected attributes for <${e.tagName}> tag: ${e.attributeNames.join(", ")}`;
                    e.attributeNames.includes("key") && (t += `

The key attribute is not needed. You should omit it.`), super("unexpected_attributes", t)
                }
            }
            class n extends i {
                constructor(e) {
                    super("missing_attribute", `The <${e.tagName}> tag is missing a ${e.attributeName} attribute. It should be specified as <${e.tagName} ${e.attributeName}="...">`)
                }
            }
            class s extends i {
                constructor(e) {
                    super("bad_attribute", `Attempted to set attribute ${e.attributeName} on a <${e.tagName}> tag to a value that is not allowed: ${e.receivedValue}`)
                }
            }
            class l extends i {
                tagName;
                unexpectedNode;
                constructor(e) {
                    let t;
                    const {
                        tagName: r,
                        unexpectedNode: a
                    } = e;
                    t = a ? "text" === a.type ? `Plain text, whitespace, or newlines are not allowed inside a <${r}> tag. Make sure not to include any extra whitespace or newlines in your XML.` : `A <${a.tagName}> tag is not allowed inside a <${r}> tag` : `Encountered an invalid child inside a <${r}> tag.`, "set-title" === r || "set-property" === r ? t += `
Only inline elements and text are allowed inside <${r}>` : "insert-before" === r || "insert-after" === r || "insert-inside" === r || "chat" === r ? (t += `
Only block elements are allowed inside <${r}>`, "chat" === r && (t += `
When using <chat>, remember to wrap text in <text> tags.`)) : "create" === r && (t += `
When using <create>, remember to wrap in a <page> tag.`), super("disallowed_child", t), this.tagName = r, this.unexpectedNode = a
                }
            }
            class d extends i {
                constructor(e) {
                    super("expected_tag_name", `Expected a <${e}> tag`)
                }
            }
            class u extends i {
                constructor(e) {
                    let t;
                    (0, r(722371).O9)(e.unexpectedNode) ? "text" === e.unexpectedNode.type ? t = `Text is not supported as a child for a ${e.nodeType} node` : "element" === e.unexpectedNode.type ? t = `Unsupported ${e.nodeType} tag name: ${e.unexpectedNode.tagName}` : (0, r(722371).HB)(e.unexpectedNode): t = `Unexpected value for a ${e.nodeType} node`, super("unsupported_node", t)
                }
            }
            class p extends i {
                constructor(e, t) {
                    super("unmapped_id", `Expected counter ID for attribute ${e}, instead received ${t}`)
                }
            }
            class c extends i {
                constructor(e) {
                    const {
                        expectedIdType: t,
                        receivedIdType: r,
                        tagNameForErrorMessage: a,
                        idValueForErrorMessage: i
                    } = e;
                    super("unexpected_id_type", a ? `Expected ID ${i} in <${a}> to be of type '${t}', instead received ID of type '${r}'` : `Expected ID ${i} to be of type '${t}', instead received ID of type '${r}'`)
                }
            }
            class m extends i {
                constructor(e) {
                    super("out_of_order_node", `Encountered a ${e.foundNodeType} after a ${e.incorrectlyAfterType}. You should ensure that any ${e.foundNodeType}s come before ${e.incorrectlyAfterType}s.`)
                }
            }
            class h extends i {
                constructor() {
                    super("table_row_property_name", "Inside tr, the property-text name attribute must be a string which is an integer counter, starting from 1.")
                }
            }
            class g extends i {
                constructor() {
                    super("synced_block_invalid_children", "Cannot include content when writing a <synced-block-reference> tag")
                }
            }
            class b extends i {
                constructor() {
                    super("must_provide_id", "Block node is missing an id attribute")
                }
            }
            class y extends i {
                constructor() {
                    super("cannot_provide_id", "When creating new blocks, do not provide an id attribute.")
                }
            }
            class f extends i {
                constructor() {
                    super("must_provide_unknown_block_id", "When referencing unknown blocks, you must provide an id.")
                }
            }
            class v extends i {
                constructor() {
                    super("cannot_append_to_multiple_properties", "Cannot append to multiple properties. Use multiple calls to <insert-inside> instead.")
                }
            }
            class k extends i {
                constructor() {
                    super("cannot_remove_from_multiple_properties", "Cannot remove from multiple properties. Use multiple calls to <delete> instead.")
                }
            }
            class w extends i {
                constructor() {
                    super("move_disallowed", "A <move> tag is not allowed in this context")
                }
            }
            class T extends i {
                constructor() {
                    super("set_attribute_without_key", "<set-attribute> is missing an attribute to set")
                }
            }
            class x extends i {
                constructor(e) {
                    super("unknown_api", `Unexpected API: ${e}. Make sure to use only the supported XML APIs, and ensure you are using this API in the right context.`)
                }
            }
            class N extends a {
                constructor(e, t) {
                    super("load_page_as_xml_failed", t), this.pageId = e
                }
                getMetadata() {
                    return {
                        pageId: this.pageId
                    }
                }
            }
            class I extends a {
                constructor(e, t) {
                    super("load_database_as_xml_failed", t), this.databaseId = e
                }
                getMetadata() {
                    return {
                        databaseId: this.databaseId
                    }
                }
            }
            class _ extends I {
                constructor(e, t) {
                    super("load_database_as_xml_missing_block", t), this.databaseId = e
                }
            }
            class $ extends a {
                constructor() {
                    super("illegal_replace_page", 'When calling <replace> on a page, you must provide a <page> tag as the single child, like this: <replace start="..." end="..."><page>...</page></replace>.')
                }
            }
            class E extends a {
                constructor() {
                    super("out_of_order_replace", "When calling <replace>, the start of the range must be AFTER the end of the range.")
                }
            }
        },
        936868: (e, t, r) => {
            "use strict";
            r.d(t, {
                QB: () => n,
                Wh: () => s,
                od: () => o
            }), r(898992), r(354520), r(581454);
            let a = ["snapshot", "notification", "pageOrCollectionViewBlock", "view", "collection", "discussion", "collectionProperty", "formulaResult", "formulaCode", "collectionPropertyOption", "pageDiscussions", "discussion", "integration", "trigger", "script", "user", "teamspace", "agent", "worker", "thread", "citation"],
                i = "file",
                o = [...a, i, ...r(402459).y1];

            function n() {
                return [...a.map(e => `${e}://[\\w\\-\\_\\/]+(@[\\w\\-\\.]+)?`), ...r(402459).y1.map(e => `${e}://[\\w\\/\\-\\.]+[\\w]`), `${i}:\\/\\/%7B[^}]+%7D`, "citation:\\/\\/%7B[^}]+%7D", 'microsoftTeams:\\/\\/[^\\s)\\]"}\\\\|]+', ...r(281708).fl.filter(e => "microsoft-teams" !== e).map(e => `${e}:\\/\\/[^\\s)\\]"}\\\\|]+`)]
            }

            function s(e) {
                for (let t of o)
                    if (e === t) return !0;
                return !1
            }
        },
        988184: (e, t, r) => {
            "use strict";
            r.d(t, {
                Mz: () => s,
                Yf: () => l,
                TE: () => Y,
                fw: () => d,
                W6: () => c,
                vr: () => p,
                vt: () => z,
                et: () => u,
                AR: () => Q,
                N: () => b,
                p$: () => eg,
                Eo: () => v,
                WH: () => P,
                nc: () => K,
                mK: () => F,
                yK: () => y,
                XD: () => h,
                Hh: () => A,
                WM: () => q,
                cW: () => M,
                qY: () => w,
                UQ: () => _,
                xR: () => $,
                C1: () => I,
                FO: () => E,
                Dp: () => R,
                b8: () => U,
                wu: () => T,
                _r: () => C,
                iL: () => S,
                TM: () => N,
                uz: () => x,
                Yh: () => m,
                By: () => k,
                ZL: () => en,
                zY: () => f,
                __: () => g,
                $P: () => j,
                lo: () => L,
                Bq: () => X,
                oq: () => W,
                UO: () => V,
                D6: () => H,
                F1: () => eh
            }), r(16280), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(430670), r(803949), r(581454);
            var a = () => r(722371),
                i = () => r(281708),
                o = () => r(932082),
                n = () => r(418672);
            let s = 16,
                l = 20;

            function d(e) {
                var t;
                let r = e.children ? ? [];
                return {
                    type: "block",
                    tagName: e.tagName,
                    parent: null == (t = e.parent) ? void 0 : t.attributes.id,
                    attributes: { ...e.attributes
                    },
                    children: "database-views" === e.tagName ? e.children : r.map(e => e.attributes.id),
                    text: e.text,
                    properties: e.properties,
                    schemas: e.schemas,
                    schemaId: e.schemaId,
                    persisted: e.persisted
                }
            }

            function u(e) {
                let t = new Map;
                for (let [i, o] of Object.entries(e))
                    for (let e of o.children) {
                        var r, a;
                        "string" == typeof e ? t.set(e, i) : null != (r = e.attributes) && r.id && t.set(null == (a = e.attributes) ? void 0 : a.id, i)
                    }
                return t
            }

            function p(e) {
                let t, {
                        node: i,
                        getBlockById: o,
                        alreadyConvertedBlocks: n = new Map,
                        childIdToParentIdMap: s,
                        assistantLoggingData: l
                    } = e,
                    d = n.get(i.attributes.id);
                if (d) return d;
                if (i.parent && "object" == typeof i.parent) t = i.parent;
                else {
                    let e;
                    if (e = i.parent && "string" == typeof i.parent ? i.parent : null == s ? void 0 : s.get(i.attributes.id)) {
                        let a = o(e);
                        if (a) t = p({
                            node: a,
                            getBlockById: o,
                            alreadyConvertedBlocks: n,
                            childIdToParentIdMap: s
                        });
                        else {
                            l && function(e, t) {
                                let {
                                    spaceId: a,
                                    userId: i,
                                    sessionId: o
                                } = e, {
                                    parentTagType: n,
                                    parentId: s
                                } = t;
                                r(773352).log({
                                    level: "debug",
                                    from: "convertAssistantBlockToBlockNode",
                                    type: "parentNotFound",
                                    data: {
                                        userId: i,
                                        spaceId: a,
                                        sessionId: o,
                                        miscDataToConvertToString: {
                                            parentTagType: n,
                                            parentId: s
                                        }
                                    }
                                })
                            }(l, {
                                parentTagType: i.tagName,
                                parentId: i.attributes.id
                            });
                            return
                        }
                    }
                }
                t && n.set(t.attributes.id, t);
                let u = {
                    type: i.type,
                    tagName: i.tagName,
                    parent: t,
                    attributes: { ...i.attributes
                    },
                    text: i.text,
                    properties: i.properties,
                    schemas: i.schemas,
                    children: [],
                    persisted: i.persisted,
                    schemaId: i.schemaId
                };
                return n.set(u.attributes.id, u), u.children = i.children.map(e => {
                    if ("string" == typeof e) {
                        let t = o(e);
                        if (!t) {
                            if ("database-views" === i.tagName) return;
                            l && function(e, t) {
                                let {
                                    spaceId: a,
                                    userId: i,
                                    sessionId: o
                                } = e, {
                                    parentTagType: n,
                                    parentId: s,
                                    childBlockId: l
                                } = t;
                                r(773352).log({
                                    level: "debug",
                                    from: "convertAssistantBlockToBlockNode",
                                    type: "childNotFound",
                                    data: {
                                        userId: i,
                                        spaceId: a,
                                        sessionId: o,
                                        miscDataToConvertToString: {
                                            parentTagType: n,
                                            childBlockId: l,
                                            parentId: s
                                        }
                                    }
                                })
                            }(l, {
                                parentTagType: i.tagName,
                                parentId: i.attributes.id,
                                childBlockId: e
                            });
                            return
                        }
                        return p({
                            node: t,
                            getBlockById: o,
                            alreadyConvertedBlocks: n,
                            childIdToParentIdMap: s,
                            assistantLoggingData: l
                        })
                    }
                    return e
                }).filter(a().O9), u
            }

            function c(e) {
                let {
                    node: t,
                    blockIdMap: r,
                    childIdToParentIdMap: a,
                    alreadyConvertedBlocks: i,
                    assistantLoggingData: o
                } = e;
                return p({
                    node: t,
                    getBlockById: e => r instanceof Map ? r.get(e) : r[e],
                    childIdToParentIdMap: a,
                    alreadyConvertedBlocks: i,
                    assistantLoggingData: o
                })
            }
            let m = {
                "load-page": T,
                search: j,
                "search-people": D,
                "load-database": w,
                load: A,
                "search-databases": L,
                "load-slack": N,
                "load-attachment": q,
                "load-web-page": x,
                "load-google-drive": I,
                "load-github": _,
                "load-github-code": $,
                "load-jira": E,
                "load-linear": R,
                "load-box": M,
                "load-salesforce": C,
                "load-microsoft-teams": U,
                "load-sharepoint": S
            };

            function h(e) {
                return e.tagName in m
            }

            function g(e, t) {
                if ("load-page" === e.tagName || "search" === e.tagName || "search-people" === e.tagName || "load-database" === e.tagName || "search-databases" === e.tagName || "load-slack" === e.tagName || "load-attachment" === e.tagName || "load-web-page" === e.tagName || "load-google-drive" === e.tagName || "load-github" === e.tagName || "load-github-code" === e.tagName || "load-jira" === e.tagName || "load-linear" === e.tagName || "load-box" === e.tagName || "load-salesforce" === e.tagName || "load-microsoft-teams" === e.tagName || "load-sharepoint" === e.tagName) return m[e.tagName]({
                    observationNode: e,
                    state: t
                });
                (0, a().HB)(e)
            }
            let b = {
                "insert-before": K,
                "insert-after": P,
                "insert-inside": F,
                delete: function(e) {
                    let {
                        state: t,
                        effectNode: r
                    } = e, i = r.attributes.id;
                    if ("property" === r.deleteType) {
                        let e = t.getBlockFromBlockIdMap(i);
                        if ("child-page" !== e.tagName) throw new(o()).Te("delete_property_on_non_database_child_page", "Cannot call delete on a non-database child-page.");
                        let [n] = r.children;
                        switch (n.tagName) {
                            case "property-relation":
                                ! function({
                                    parentBlock: e,
                                    relationPropertyName: t,
                                    relationPropertyUpdates: r,
                                    state: a
                                }) {
                                    var i;
                                    let n = new Set(ec({
                                            propertyChild: r,
                                            parentBlock: e,
                                            propertyName: t,
                                            action: "delete",
                                            state: a
                                        })),
                                        s = e.properties[t];
                                    if ("property-relation" !== s.tagName) throw new(o()).Te("invalid_relation_property_child", "Invalid property child when setting relation");
                                    let l = s.children.filter(e => {
                                            let t = e.attributes["page-id"];
                                            return !n.has(t)
                                        }),
                                        d = { ...s,
                                            children: l
                                        };
                                    e.properties[t] = d, a.addOperation({
                                        command: "setBlockProperty",
                                        blockNode: e,
                                        parentBlockId: null == (i = e.parent) ? void 0 : i.attributes.id,
                                        property: d
                                    }, void 0)
                                }({
                                    parentBlock: e,
                                    relationPropertyName: n.attributes.name,
                                    relationPropertyUpdates: n,
                                    state: t
                                });
                                break;
                            case "property-person":
                                ea({
                                    parentBlock: e,
                                    personPropertyUpdate: n,
                                    state: t,
                                    action: "delete"
                                });
                                break;
                            case "property-multi-select":
                                ei({
                                    parentBlock: e,
                                    multiSelectPropertyName: n.attributes.name,
                                    multiSelectPropertyUpdates: n,
                                    state: t,
                                    action: "delete"
                                });
                                break;
                            default:
                                (0, a().HB)(n)
                        }
                    } else "block" === r.deleteType ? en({
                        remove: [t.getBlockFromBlockIdMap(i)],
                        state: t
                    }) : "table-column" === r.deleteType ? Q({
                        state: t,
                        effectNode: r
                    }) : (0, a().HB)(r)
                },
                "set-title": H,
                "set-attribute": X,
                "set-tag-name": V,
                "set-property": W,
                chat: Y,
                "chat-md": function(e) {
                    let t, {
                            state: r,
                            effectNode: a
                        } = e,
                        i = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"],
                        o = a.text,
                        n = /\[([0-9])\]/g,
                        s = 1;
                    for (; null !== (t = n.exec(a.text));) o = o.replace(t[0], `[${i[s]}](${r.getIdMapper().mapCounterToKey(t[1]).key.replaceAll("-","")})`), s++;
                    r.chatMd(o)
                },
                "persist-blocks": function(e) {
                    let {
                        state: t,
                        effectNode: r,
                        useCrdt: a
                    } = e;
                    for (let e of Z({
                            parent: void 0,
                            children: r.children,
                            state: t
                        })) ee({
                        block: e,
                        state: t,
                        useCrdt: a
                    })
                },
                create: z,
                "related-content": () => []
            };

            function y(e) {
                return e.tagName in b
            }

            function f(e, t, r) {
                return "chat" === e.tagName ? b[e.tagName]({
                    effectNode: e,
                    state: t,
                    useCrdt: void 0
                }) : "insert-after" === e.tagName ? b[e.tagName]({
                    effectNode: e,
                    state: t,
                    useCrdt: r
                }) : "delete" === e.tagName ? b[e.tagName]({
                    effectNode: e,
                    state: t,
                    useCrdt: void 0
                }) : "insert-before" === e.tagName || "insert-inside" === e.tagName || "persist-blocks" === e.tagName || "create" === e.tagName ? b[e.tagName]({
                    effectNode: e,
                    state: t,
                    useCrdt: r
                }) : "set-attribute" === e.tagName ? b[e.tagName]({
                    effectNode: e,
                    state: t,
                    useCrdt: void 0
                }) : "set-property" === e.tagName ? b[e.tagName]({
                    effectNode: e,
                    state: t,
                    useCrdt: r
                }) : "set-tag-name" === e.tagName ? b[e.tagName]({
                    effectNode: e,
                    state: t,
                    useCrdt: void 0
                }) : "set-title" === e.tagName ? b[e.tagName]({
                    effectNode: e,
                    state: t,
                    useCrdt: r
                }) : "chat-md" === e.tagName || "related-content" === e.tagName ? b[e.tagName]({
                    effectNode: e,
                    state: t,
                    useCrdt: void 0
                }) : void(0, a().HB)(e)
            }
            let v = ["load-database", "load-page", "load", "search", "search-people", "chat", "create", "search-databases", "load-slack", "insert-before", "insert-after", "insert-inside", "delete", "set-title", "set-attribute", "set-tag-name", "set-property", "replace", "create-page", "replace"],
                k = {
                    search: 3,
                    "search-people": 3,
                    load: 10,
                    "load-page": 10,
                    "load-database": 10,
                    "search-databases": 3
                };
            async function w(e) {
                let {
                    state: t,
                    observationNode: a
                } = e, {
                    attributes: {
                        id: i
                    }
                } = a, {
                    databaseNode: o,
                    relatedNodes: n
                } = await t.loadDatabase(i);
                t.markDatabaseAsLoaded(i), t.addCollectionToCollectionIdMap(i, o), t.setSchemaIdMapForSchema(o.schemaId, o.schemas);
                let s = [];
                for (let {
                        node: e,
                        shouldShowObservation: r
                    } of n) t.markDatabaseAsLoaded(e.attributes.id), t.setSchemaIdMapForSchema(e.schemaId, e.schemas), t.addCollectionToCollectionIdMap(e.attributes.id, e), r && s.push(e);
                return r(381453).hS([o, ...s], e => e.attributes.id).map(e => "block" === e.type ? {
                    type: "observation",
                    observationType: "page",
                    pageId: e.attributes.id,
                    value: e
                } : {
                    type: "observation",
                    observationType: "database",
                    databaseId: e.attributes.id,
                    value: e
                })
            }
            async function T(e) {
                let {
                    state: t,
                    observationNode: a
                } = e, {
                    id: i
                } = a.attributes, {
                    pageBlockNode: o,
                    relatedNodes: n,
                    relatedDatabaseNodes: s,
                    isNonSpaceShared: l
                } = await t.loadPage(i);
                t.markPageAsLoaded(i), G(t, o);
                let d = [];
                for (let {
                        node: e,
                        shouldShowObservation: r
                    } of n) "block" === e.type && (G(t, e), r && d.push(e));
                for (let e of s ? ? []) {
                    let r = e.node;
                    t.addCollectionToCollectionIdMap(r.attributes.id, r), t.setSchemaIdMapForSchema(r.schemaId, r.schemas)
                }
                return r(381453).hS([o, ...d], e => e.attributes.id).map(e => ({
                    type: "observation",
                    observationType: "page",
                    pageId: e.attributes.id,
                    value: e,
                    isNonSpaceShared: l
                }))
            }
            async function x(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    id: a
                } = r.attributes, i = await t.loadWebPage(a);
                t.markUniversalIdAsLoaded(a);
                let o = {
                    type: "observation",
                    observationType: "webpage",
                    value: {
                        tagName: "webpage",
                        type: "webpage",
                        attributes: {
                            id: a,
                            title: i.AssistantWebpageSearchResult.title,
                            "updated-datetime": i.AssistantWebpageSearchResult.lastEdited
                        },
                        children: [{
                            type: "text",
                            value: i.AssistantWebpageSearchResult.text
                        }]
                    }
                };
                return J(t, o.value), [o]
            }
            async function N(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    id: a
                } = r.attributes;
                try {
                    let e = (await t.loadSlack(a)).slackMessage;
                    t.markUniversalIdAsLoaded(a);
                    let r = {
                        type: "slackMessages",
                        tagName: "slack-messages",
                        attributes: {
                            id: a,
                            channel: e.channel
                        },
                        children: e.messages.map(e => ({
                            type: "slackMessage",
                            tagName: "message",
                            attributes: {
                                user: e.user.name
                            },
                            value: e.text
                        }))
                    };
                    return J(t, r), [{
                        type: "observation",
                        observationType: "slack",
                        value: r
                    }]
                } catch (e) {
                    return [{
                        type: "observation",
                        observationType: "slack",
                        value: {
                            type: "slackMessages",
                            tagName: "slack-messages",
                            attributes: {
                                id: a,
                                channel: "unable to load"
                            },
                            children: []
                        }
                    }]
                }
            }
            async function I(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    id: a
                } = r.attributes;
                try {
                    let e = (await t.loadGoogleDrive(a)).googleDriveContent;
                    t.markUniversalIdAsLoaded(a);
                    let r = {
                        type: "googleDrive",
                        tagName: "google-drive",
                        attributes: {
                            id: (0, i().V9)(e.fileId),
                            fileType: e.fileType,
                            title: e.title
                        },
                        children: e.blocks.map(e => ({
                            type: "googleDriveBlock",
                            tagName: "google-drive-block",
                            value: e
                        }))
                    };
                    return J(t, r), [{
                        type: "observation",
                        observationType: "googleDrive",
                        value: r
                    }]
                } catch (e) {
                    return [{
                        type: "observation",
                        observationType: "googleDrive",
                        value: {
                            type: "googleDrive",
                            tagName: "google-drive",
                            attributes: {
                                id: a,
                                title: "unable to load",
                                fileType: "unable to load"
                            },
                            children: []
                        }
                    }]
                }
            }
            async function _(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    id: a
                } = r.attributes;
                try {
                    let e = (await t.loadGithub(a)).githubContent;
                    t.markUniversalIdAsLoaded(a);
                    let r = {
                        type: "github",
                        tagName: "github",
                        attributes: {
                            id: (0, i().V9)(e.prNumber),
                            orgName: e.orgName,
                            repoName: e.repoName,
                            title: e.title
                        },
                        children: e.blocks.map(e => ({
                            type: "githubBlock",
                            tagName: "github-block",
                            value: e
                        }))
                    };
                    return J(t, r), [{
                        type: "observation",
                        observationType: "github",
                        value: r
                    }]
                } catch (e) {
                    return [{
                        type: "observation",
                        observationType: "github",
                        value: {
                            type: "github",
                            tagName: "github",
                            attributes: {
                                id: a,
                                title: "unable to load",
                                repoName: "unable to load",
                                orgName: "unable to load"
                            },
                            children: []
                        }
                    }]
                }
            }
            async function $(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    id: a
                } = r.attributes;
                try {
                    let e = (await t.loadGithubCode(a)).githubCodeContent;
                    t.markUniversalIdAsLoaded(a);
                    let r = {
                        type: "githubCode",
                        tagName: "github-code",
                        attributes: {
                            id: (0, i().V9)(e.codePath),
                            ...e
                        }
                    };
                    return J(t, r), [{
                        type: "observation",
                        observationType: "githubCode",
                        value: r
                    }]
                } catch (e) {
                    return [{
                        type: "observation",
                        observationType: "github",
                        value: {
                            type: "github",
                            tagName: "github",
                            attributes: {
                                id: a,
                                title: "unable to load",
                                repoName: "unable to load",
                                orgName: "unable to load"
                            },
                            children: []
                        }
                    }]
                }
            }
            async function E(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    id: a
                } = r.attributes;
                try {
                    let e = (await t.loadJira(a)).jiraContent;
                    t.markUniversalIdAsLoaded(a);
                    let r = {
                        type: "jira",
                        tagName: "jira",
                        attributes: {
                            id: a,
                            title: e.title
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    };
                    return J(t, r), [{
                        type: "observation",
                        observationType: "jira",
                        value: r
                    }]
                } catch (e) {
                    return [{
                        type: "observation",
                        observationType: "jira",
                        value: {
                            type: "jira",
                            tagName: "jira",
                            attributes: {
                                id: a,
                                title: "unable to load"
                            },
                            children: [{
                                type: "text",
                                value: ""
                            }]
                        }
                    }]
                }
            }
            async function R(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    id: a
                } = r.attributes;
                try {
                    let e = (await t.loadLinear(a)).linearContent;
                    t.markUniversalIdAsLoaded(a);
                    let r = {
                        type: "linear",
                        tagName: "linear",
                        attributes: {
                            id: a,
                            title: e.title,
                            name: e.title,
                            "linear-organization-id": "",
                            assignee: "",
                            creator: "",
                            project: "",
                            cycle: "",
                            "due-date": "",
                            team: ""
                        },
                        children: [{
                            type: "text",
                            value: e.text
                        }]
                    };
                    return J(t, r), [{
                        type: "observation",
                        observationType: "linear",
                        value: r
                    }]
                } catch (e) {
                    return [{
                        type: "observation",
                        observationType: "linear",
                        value: {
                            type: "linear",
                            tagName: "linear",
                            attributes: {
                                id: a,
                                title: "unable to load",
                                name: "unable to load",
                                "linear-organization-id": "",
                                assignee: "",
                                creator: "",
                                project: "",
                                cycle: "",
                                "due-date": "",
                                team: ""
                            },
                            children: [{
                                type: "text",
                                value: ""
                            }]
                        }
                    }]
                }
            }
            async function M(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    id: a
                } = r.attributes;
                try {
                    let e = (await t.loadBox(a)).boxContent;
                    t.markUniversalIdAsLoaded(a);
                    let r = {
                        type: "box",
                        tagName: "box",
                        attributes: {
                            id: a,
                            title: e.title,
                            name: e.title,
                            "file-id": e.fileId
                        },
                        children: [{
                            type: "text",
                            value: e.blocks.join("\n")
                        }]
                    };
                    return J(t, r), [{
                        type: "observation",
                        observationType: "box",
                        value: r
                    }]
                } catch (e) {
                    return [{
                        type: "observation",
                        observationType: "box",
                        value: {
                            type: "box",
                            tagName: "box",
                            attributes: {
                                id: a,
                                title: "unable to load",
                                name: "unable to load",
                                "file-id": ""
                            },
                            children: [{
                                type: "text",
                                value: ""
                            }]
                        }
                    }]
                }
            }
            async function C(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    id: a
                } = r.attributes;
                try {
                    let e = (await t.loadSalesforce(a)).salesforceContent;
                    t.markUniversalIdAsLoaded(a);
                    let r = {
                        type: "salesforce",
                        tagName: "salesforce",
                        attributes: {
                            id: a,
                            title: e.title,
                            recordId: e.recordId,
                            objectType: e.objectType
                        },
                        children: [{
                            type: "text",
                            value: e.blocks.join("\n")
                        }]
                    };
                    return J(t, r), [{
                        type: "observation",
                        observationType: "salesforce",
                        value: r
                    }]
                } catch (e) {
                    return [{
                        type: "observation",
                        observationType: "salesforce",
                        value: {
                            type: "salesforce",
                            tagName: "salesforce",
                            attributes: {
                                id: a,
                                title: "unable to load",
                                recordId: "unable to load",
                                objectType: "unable to load"
                            },
                            children: [{
                                type: "text",
                                value: ""
                            }]
                        }
                    }]
                }
            }
            async function U(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    id: a
                } = r.attributes;
                try {
                    let e = (await t.loadMicrosoftTeams(a)).microsoftTeamsContent;
                    t.markUniversalIdAsLoaded(a);
                    let r = {
                        type: "microsoftTeamsMessages",
                        tagName: "microsoft-teams-messages",
                        attributes: {
                            id: a,
                            channel: e.channel
                        },
                        children: e.messages.map(e => ({
                            type: "microsoftTeamsMessage",
                            tagName: "microsoft-teams-message",
                            attributes: {
                                user: e.user.name
                            },
                            value: e.text
                        }))
                    };
                    return J(t, r), [{
                        type: "observation",
                        observationType: "microsoft-teams",
                        value: r
                    }]
                } catch (e) {
                    return [{
                        type: "observation",
                        observationType: "microsoft-teams",
                        value: {
                            type: "microsoftTeamsMessages",
                            tagName: "microsoft-teams-messages",
                            attributes: {
                                id: a,
                                channel: "unable to load"
                            },
                            children: []
                        }
                    }]
                }
            }
            async function S(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    id: a
                } = r.attributes;
                try {
                    let e = (await t.loadSharepoint(a)).sharepointContent;
                    t.markUniversalIdAsLoaded(a);
                    let r = {
                        type: "sharepoint",
                        tagName: "sharepoint",
                        attributes: {
                            id: (0, i().V9)(e.driveItemId),
                            fileType: e.fileType,
                            title: e.title
                        },
                        children: e.blocks.map(e => ({
                            type: "sharepointBlock",
                            tagName: "sharepoint-block",
                            value: e
                        }))
                    };
                    return J(t, r), [{
                        type: "observation",
                        observationType: "sharepoint",
                        value: r
                    }]
                } catch (e) {
                    return [{
                        type: "observation",
                        observationType: "sharepoint",
                        value: {
                            type: "sharepoint",
                            tagName: "sharepoint",
                            attributes: {
                                id: a,
                                title: "unable to load",
                                fileType: "unable to load"
                            },
                            children: []
                        }
                    }]
                }
            }
            async function q(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    id: i
                } = r.attributes;
                if ("pdf" === r.attributes.attachmentType) return t.markAttachmentAsLoaded(i), O({
                    state: t,
                    observationNode: r
                });
                (0, a().HB)(r.attributes.attachmentType)
            }
            async function O(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    id: a
                } = r.attributes, {
                    pdfContent: i
                } = await t.loadPdf(a);
                return [{
                    type: "observation",
                    observationType: "attachment",
                    value: {
                        type: "attachment",
                        tagName: "attachment",
                        attributes: {
                            id: a,
                            attachmentType: "pdf"
                        },
                        children: i.textContent.map(e => ({
                            type: "attachmentContent",
                            tagName: "attachment-content",
                            attributes: {
                                assistantAttachmentContentId: (0, n().Y1)()
                            },
                            value: e
                        }))
                    }
                }]
            }

            function A(e) {
                let {
                    observationNode: t,
                    state: r
                } = e;
                return "load-page" === t.tagName ? T({
                    state: r,
                    observationNode: t
                }) : "load-database" === t.tagName ? w({
                    state: r,
                    observationNode: t
                }) : "load-slack" === t.tagName ? N({
                    state: r,
                    observationNode: t
                }) : "load-google-drive" === t.tagName ? I({
                    state: r,
                    observationNode: t
                }) : "load-github" === t.tagName ? _({
                    state: r,
                    observationNode: t
                }) : "load-github-code" === t.tagName ? $({
                    state: r,
                    observationNode: t
                }) : "load-attachment" === t.tagName ? q({
                    state: r,
                    observationNode: t
                }) : "load-web-page" === t.tagName ? x({
                    state: r,
                    observationNode: t
                }) : "load-jira" === t.tagName ? E({
                    state: r,
                    observationNode: t
                }) : "load-microsoft-teams" === t.tagName ? U({
                    state: r,
                    observationNode: t
                }) : "load-sharepoint" === t.tagName ? S({
                    state: r,
                    observationNode: t
                }) : "load-linear" === t.tagName ? R({
                    state: r,
                    observationNode: t
                }) : "load-box" === t.tagName ? M({
                    state: r,
                    observationNode: t
                }) : "load-salesforce" === t.tagName ? C({
                    state: r,
                    observationNode: t
                }) : void(0, a().HB)(t)
            }
            async function j(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    question: a,
                    keywords: i,
                    lookback: o
                } = r.attributes;
                return await B({
                    state: t,
                    query: {
                        question: a,
                        keywords: i,
                        lookback: o,
                        questionIntl: r.attributes["question-intl"],
                        database: r.attributes.database,
                        channel: r.attributes.channel,
                        sourcePreference: r.attributes.source,
                        sort: r.attributes.sort,
                        fileType: r.attributes["file-type"],
                        contributor: r.attributes.contributor,
                        repo: r.attributes.repo,
                        maybeNotionHelp: "true" === r.attributes[n().HV]
                    }
                })
            }
            async function B(e) {
                let {
                    state: t,
                    query: a
                } = e, i = await t.search(a);
                return (0, r(460743).nt)({
                    searchResults: i.searchResults,
                    state: t
                }), [(0, r(460743)._A)(i)]
            }
            async function L(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    results: a,
                    total: i
                } = await t.searchDatabases(r.attributes.search), o = a.map(e => {
                    let {
                        id: t,
                        title: r
                    } = e;
                    return {
                        type: "collection",
                        tagName: "database",
                        parent: e.parentId,
                        attributes: {
                            id: t,
                            title: r
                        },
                        persisted: !0,
                        schemaId: e.parentId,
                        schemas: {},
                        properties: {}
                    }
                }), n = {
                    type: "element",
                    tagName: "search-databases-results",
                    attributes: {
                        "current-results": a.length.toString(),
                        "total-results": i.toString()
                    },
                    children: o
                };
                return t.appendNewSearchDatabasesResult(o), [{
                    type: "observation",
                    observationType: "searchDatabases",
                    value: n
                }]
            }
            async function D(e) {
                let {
                    state: t,
                    observationNode: r
                } = e, {
                    search: a
                } = r.attributes, i = await t.searchPeople(a), o = {
                    type: "element",
                    tagName: "search-people-results",
                    attributes: {
                        "current-results": Math.min(6, i.results.length).toString(),
                        "total-results": i.total.toString()
                    },
                    children: i.results.slice(0, 6).map(e => {
                        let {
                            id: t,
                            name: r,
                            email: a
                        } = e;
                        return {
                            type: "element",
                            tagName: "person",
                            attributes: {
                                "person-id": t
                            },
                            children: [{
                                type: "element",
                                tagName: "property-text",
                                attributes: {
                                    name: "Name"
                                },
                                children: [{
                                    type: "text",
                                    value: r
                                }]
                            }, {
                                type: "element",
                                tagName: "property-email",
                                attributes: {
                                    name: "Email"
                                },
                                children: [{
                                    type: "text",
                                    value: a
                                }]
                            }]
                        }
                    })
                };
                return t.appendNewSearchPeopleResult(i.results), [{
                    type: "observation",
                    observationType: "searchPeople",
                    value: o
                }]
            }

            function K(e) {
                let {
                    state: t,
                    effectNode: r,
                    useCrdt: i
                } = e, {
                    id: n
                } = r.attributes, s = t.getBlockFromBlockIdMap(n), l = t.getIdMapper().mapKeyToCounter({
                    type: "block",
                    key: n
                });
                if ("page" === s.tagName && "block" === r.insertType) {
                    let e = s.children[0];
                    return e ? void K({
                        state: t,
                        effectNode: {
                            type: "effect",
                            tagName: "insert-before",
                            insertType: "block",
                            attributes: {
                                id: e.attributes.id
                            },
                            children: r.children
                        },
                        useCrdt: i
                    }) : void F({
                        state: t,
                        effectNode: {
                            type: "effect",
                            tagName: "insert-inside",
                            insertType: "block",
                            attributes: {
                                id: s.attributes.id
                            },
                            children: r.children
                        },
                        useCrdt: i
                    })
                }
                if (!s.parent) throw new(o()).Te("block_has_no_parent", `Cannot <insert-before> block with id ${l} because it has no parent.`);
                if ("block" === r.insertType) {
                    let e = s.parent,
                        a = e.children.findIndex(e => e.attributes.id === s.attributes.id),
                        n = Z({
                            parent: e,
                            children: r.children,
                            state: t
                        });
                    if (a < 0) throw new(o()).Te("block_not_found", `Cannot <insert-before> block with id ${l} as it no longer exists. Do not reference block with id ${l}.`);
                    let {
                        parentForOperation: d
                    } = er({
                        parent: e,
                        index: a,
                        insert: n,
                        state: t,
                        useCrdt: i
                    });
                    for (let e of n) t.addOperation({
                        command: "insertBlockBefore",
                        parentId: d.attributes.id,
                        insertBlockNode: e,
                        beforeId: s.attributes.id
                    }, void 0), "page" === e.tagName && (t.markPageAsLoaded(e.attributes.id), t.setBlockIdMapForBlock(e.attributes.id, e))
                } else if ("table" === r.insertType) {
                    let {
                        name: e
                    } = r.attributes;
                    if ("table" !== s.tagName) throw new(o()).Te("insert_before_name_not_on_table", `Cannot <insert-before> block with id ${l} with name attribute only works on tables.`);
                    let a = Number(e);
                    if (!Number.isInteger(a) || a < 1) throw new(o()).Te("insert_before_invalid_column_index", `Invalid column index: ${a}.`);
                    for (let t of s.children)
                        if (!t.properties[e]) throw new(o()).Te("insert_before_property_does_not_exist", `Property ${e} does not exist on table row.`);
                    eo({
                        tableBlockNode: s,
                        children: r.children,
                        atZeroBasedIndex: a - 1,
                        state: t
                    })
                } else(0, a().HB)(r)
            }

            function P(e) {
                let {
                    state: t,
                    effectNode: r,
                    useCrdt: i
                } = e, {
                    id: n
                } = r.attributes, s = t.getIdMapper().mapKeyToCounter({
                    type: "block",
                    key: n
                }), l = t.getBlockFromBlockIdMap(n);
                if ("page" === l.tagName && "block" === r.insertType) {
                    let e = l.children[0];
                    return e ? void K({
                        state: t,
                        effectNode: {
                            type: "effect",
                            tagName: "insert-before",
                            insertType: "block",
                            attributes: {
                                id: e.attributes.id
                            },
                            children: r.children
                        },
                        useCrdt: i
                    }) : void F({
                        state: t,
                        effectNode: {
                            type: "effect",
                            tagName: "insert-inside",
                            insertType: "block",
                            attributes: {
                                id: l.attributes.id
                            },
                            children: r.children
                        },
                        useCrdt: i
                    })
                }
                if (!l.parent) throw new(o()).Te("block_not_found", `Cannot <insert-after> block with id ${s} as it no longer exists. Do not reference block with id ${s}.`);
                if ("block" === r.insertType) {
                    let e = l.parent,
                        a = e.children.findIndex(e => e.attributes.id === l.attributes.id),
                        n = Z({
                            parent: e,
                            children: r.children,
                            state: t
                        });
                    if (a < 0) throw new(o()).Te("block_not_found", `Cannot <insert-after> block with id ${s} as it no longer exists. Do not reference block with id ${s}.`);
                    let {
                        parentForOperation: d
                    } = er({
                        parent: e,
                        index: a + 1,
                        insert: n,
                        state: t,
                        useCrdt: i
                    });
                    for (let e of [...n].reverse()) t.addOperation({
                        command: "insertBlockAfter",
                        parentId: d.attributes.id,
                        insertBlockNode: e,
                        afterId: l.attributes.id
                    }, void 0), "page" === e.tagName && (t.markPageAsLoaded(e.attributes.id), t.setBlockIdMapForBlock(e.attributes.id, e))
                } else if ("table" === r.insertType) {
                    let {
                        name: e
                    } = r.attributes;
                    if ("table" !== l.tagName) throw new(o()).Te("insert_after_name_not_on_table", `Cannot <insert-after> block with id ${s} using name attribute as this only works on tables.`);
                    let a = Number(e);
                    if (!Number.isInteger(a) || a < 1) throw new(o()).Te("insert_after_invalid_column_index", `Invalid column index: ${a}.`);
                    for (let t of l.children)
                        if (!t.properties[e]) throw new(o()).Te("insert_after_property_does_not_exist", `Property ${e} does not exist on table row.`);
                    eo({
                        tableBlockNode: l,
                        children: r.children,
                        atZeroBasedIndex: a,
                        state: t
                    })
                } else(0, a().HB)(r)
            }

            function F(e) {
                let {
                    state: t,
                    effectNode: r,
                    useCrdt: i
                } = e;
                if ("block" === r.insertType) {
                    let e = r.attributes.id,
                        a = t.getBlockFromBlockIdMap(e),
                        o = Z({
                            parent: a,
                            children: r.children,
                            state: t
                        }),
                        n = a.children.length,
                        {
                            parentForOperation: s
                        } = er({
                            parent: a,
                            index: n,
                            insert: o,
                            state: t,
                            useCrdt: i
                        });
                    for (let e of o) t.addOperation({
                        command: "insertBlockAfter",
                        parentId: s.attributes.id,
                        insertBlockNode: e
                    }, void 0), "page" === e.tagName && (t.markPageAsLoaded(e.attributes.id), t.setBlockIdMapForBlock(e.attributes.id, e))
                } else if ("blockIntoDatabase" === r.insertType) {
                    let e = r.attributes.id,
                        a = t.getCollectionFromCollectionIdMap(e);
                    if (!a) throw Error(`No database to insert block ${r.attributes.id}`);
                    for (let e of Z({
                            parent: void 0,
                            children: r.children,
                            state: t,
                            databaseSchemaId: a.schemaId
                        })) ee({
                        block: e,
                        state: t,
                        databaseSchemaId: a.schemaId,
                        collectionId: a.attributes.id,
                        useCrdt: i
                    }), t.addOperation({
                        command: "setBlockParent",
                        parentId: a.schemaId,
                        blockNode: e,
                        collectionId: a.attributes.id
                    }, void 0), t.markPageAsLoaded(e.attributes.id), t.setBlockIdMapForBlock(e.attributes.id, e)
                } else if ("property" === r.insertType) {
                    let e = r.attributes.id,
                        i = t.getBlockFromBlockIdMap(e);
                    if ("child-page" !== i.tagName && "page" !== i.tagName) throw new(o()).Te("append_properties_to_page_only", "You can only append to properties on a page object.");
                    let n = r.children[0];
                    switch (n.tagName) {
                        case "property-relation":
                            ! function(e) {
                                var t;
                                let {
                                    parentBlock: r,
                                    relationPropertyName: i,
                                    relationPropertyUpdates: n,
                                    state: s
                                } = e, l = ec({
                                    propertyChild: n,
                                    parentBlock: r,
                                    propertyName: i,
                                    action: "append",
                                    state: s
                                }), d = (0, a().O)(r.properties, i) ? r.properties[i] : void 0;
                                if ((null == d ? void 0 : d.tagName) !== "property-relation") throw new(o()).Te("invalid_relation_property_child", "Invalid property child when setting relation");
                                for (let e of l) {
                                    let t = {
                                        type: "inline",
                                        tagName: "mention-page",
                                        attributes: {
                                            "page-id": e
                                        },
                                        children: []
                                    };
                                    d.children.push(t)
                                }
                                s.addOperation({
                                    command: "setBlockProperty",
                                    blockNode: r,
                                    parentBlockId: null == (t = r.parent) ? void 0 : t.attributes.id,
                                    property: d
                                }, void 0)
                            }({
                                parentBlock: i,
                                relationPropertyName: n.attributes.name,
                                relationPropertyUpdates: n,
                                state: t
                            });
                            break;
                        case "property-person":
                            ea({
                                parentBlock: i,
                                personPropertyUpdate: n,
                                state: t,
                                action: "append"
                            });
                            break;
                        case "property-multi-select":
                            ei({
                                parentBlock: i,
                                multiSelectPropertyName: n.attributes.name,
                                multiSelectPropertyUpdates: n,
                                state: t,
                                action: "append"
                            });
                            break;
                        default:
                            throw new(o()).Te("invald_child_tag_for_insert_inside", "Invalid child tag for insert-inside")
                    }
                } else(0, a().HB)(r)
            }

            function H(e) {
                let {
                    state: t,
                    effectNode: a,
                    useCrdt: i
                } = e, s = a.attributes.id, l = t.getBlockFromBlockIdMap(s), d = t.getIdMapper().mapKeyToCounter({
                    type: "block",
                    key: s
                });
                if (!n().sA[l.tagName].title && "page" !== l.tagName) throw new(o()).Te("block_does_not_allow_title", `Block with id ${d} is a <${l.tagName}>, which does not allow title.`);
                let u = a.children;
                r(381453).n4(l.text, u) || (t.addOperation({
                    command: "setBlockText",
                    blockNode: l,
                    text: u
                }, i), l.text = u)
            }

            function X(e) {
                let {
                    state: t,
                    effectNode: r
                } = e, {
                    id: a,
                    attributes: i
                } = r, s = t.getBlockFromBlockIdMap(a), l = Object.fromEntries(Object.entries(n().sA[s.tagName].attributes).map(([e, {
                    values: t
                }]) => [e, t]));
                for (let {
                        key: e,
                        value: r
                    } of i) {
                    let i = l[e];
                    if (!i) throw new(o()).Te("attempted_to_set_invalid_attribute", `Attempted to set an attribute on ID ${t.getIdMapper().mapKeyToCounter({type:"block",key:a})} that is not allowed: ${e}.`);
                    if (!0 !== i && !i.includes(r)) throw new(o()).Te("attempted_to_set_invalid_attribute_value", `Attempted to set attribute on ID ${t.getIdMapper().mapKeyToCounter({type:"block",key:a})} ${e} to value that is not allowed: ${r}.`);
                    t.addOperation({
                        command: "setBlockAttribute",
                        blockNode: s,
                        attribute: e,
                        value: r
                    }, void 0), s.attributes[e] = r
                }
            }

            function V(e) {
                let {
                    state: t,
                    effectNode: r
                } = e, {
                    id: a,
                    newTagName: i
                } = r.attributes, o = t.getBlockFromBlockIdMap(a);
                o.tagName = i, t.addOperation({
                    command: "setBlockTagName",
                    blockNode: o,
                    tagName: i
                }, void 0)
            }

            function Y({
                state: e,
                effectNode: t
            }) {
                let {
                    actionButtons: a,
                    children: i,
                    uncited: o
                } = t, n = Z({
                    parent: void 0,
                    children: i,
                    state: e
                }), s = n.map(e => e.attributes.id), l = [...n, ...n.flatMap(e => (0, r(741696).Os)(e))].map(e => ({
                    command: "createBlock",
                    blockNode: e
                }));
                e.chat({
                    blockIds: s,
                    operations: l,
                    actionButtons: a,
                    uncited: o
                })
            }

            function z(e) {
                let {
                    state: t,
                    effectNode: r,
                    useCrdt: a
                } = e, i = Z({
                    parent: void 0,
                    children: r.children,
                    state: t
                });
                if (1 !== i.length) throw new(o()).Te("create_effect_no_children", "<create> must have a single page block.");
                for (let e of i) {
                    if ("page" !== e.tagName) throw new(o()).Te("create_effect_must_have_page", "<create> must have a single page block.");
                    ee({
                        block: e,
                        state: t,
                        useCrdt: a
                    }), t.addOperation({
                        command: "addBlockToPage",
                        blockNode: e
                    }, void 0), t.markPageAsLoaded(e.attributes.id)
                }
            }

            function Q(e) {
                let {
                    state: t,
                    effectNode: r
                } = e, a = r.attributes.id, i = t.getBlockFromBlockIdMap(a);
                if ("table" !== i.tagName) throw new(o()).Te("delete_name_not_on_table", "<delete> with name attribute can only be used on <table> blocks.");
                let n = r.attributes.name,
                    s = Number(n);
                for (let e of i.children) {
                    let t = e.properties;
                    if (1 === Object.keys(t).length) throw new(o()).Te("cannot_delete_last_property", `Cannot delete property ${n} from row because it is the last property.`);
                    if (!t[n]) throw new(o()).Te("cannot_delete_nonexistent_property", `Cannot delete property ${n} from row because it does not exist.`);
                    delete t[n];
                    let r = s;
                    for (; t[r + 1];) t[r + 1].attributes.name = r.toString(), r++
                }
                t.addOperation({
                    command: "removeTableColumn",
                    blockNode: i,
                    columnIndex: s - 1
                }, void 0)
            }

            function W(e) {
                let {
                    state: t,
                    effectNode: r
                } = e, i = r.attributes.id;
                for (let e of r.children) {
                    let r = t.getBlockFromBlockIdMap(i),
                        s = e.attributes.name;
                    if ("tr" !== r.tagName) {
                        let n = function(e) {
                            let {
                                block: t,
                                property: r
                            } = e, i = r.attributes.name;
                            if ((0, a().O)(t.properties, i)) return t.properties[i];
                            if ("property-title" === r.tagName)
                                for (let e of (0, a().objectKeys)(t.properties)) {
                                    let r = t.properties[e];
                                    if ("property-title" === r.tagName) return r
                                }
                        }({
                            block: r,
                            property: e
                        });
                        if (!n) {
                            let e = `Cannot set property '${s}' on block with id=${t.getIdMapper().mapKeyToCounter({type:"block",key:i})}.`;
                            throw Object.keys(r.properties).length > 0 ? e += ` These are properties that can be set: ${Object.keys(r.properties).join(",")}` : e += " When setting the property of a page inside a database, you may need to <load> first.", new(o()).Te("cannot_set_property_on_block", e)
                        }
                        if (n.tagName !== e.tagName) throw new(o()).Te("cannot_set_property_to_different_type", `Attempted to set a property to a different tag name: ${n.tagName} -> ${e.tagName}.`)
                    }
                    if ("property-relation" === e.tagName) ! function(e) {
                        var t;
                        let {
                            block: r,
                            propertyName: a,
                            state: i,
                            newPropertyValue: o
                        } = e;
                        ec({
                            propertyChild: o,
                            parentBlock: r,
                            propertyName: a,
                            state: i,
                            action: "overwrite"
                        }), r.properties[a] = o, i.addOperation({
                            command: "setBlockProperty",
                            blockNode: r,
                            parentBlockId: null == (t = r.parent) ? void 0 : t.attributes.id,
                            property: o
                        }, void 0)
                    }({
                        block: r,
                        propertyName: s,
                        state: t,
                        newPropertyValue: e
                    });
                    else {
                        var n;
                        "property-select" === e.tagName || "property-multi-select" === e.tagName || "property-status" === e.tagName ? ep({
                            newPropertyValue: e,
                            parentBlock: r,
                            propertyName: s,
                            state: t
                        }) : "property-number" === e.tagName ? function(e) {
                            let {
                                newPropertyValue: t
                            } = e;
                            if (t.attributes.number && !es.test(t.attributes.number)) throw new(o()).Te("invalid_number_format", "Invalid value for number property")
                        }({
                            newPropertyValue: e
                        }) : "property-date" === e.tagName && function(e) {
                            let {
                                newPropertyValue: t
                            } = e;
                            if (0 === t.children.length) return;
                            if (t.children.length > 1) throw new(o()).Te("invalid_date_format", "Invalid value for date property. Expected only 1 child.");
                            let [r] = t.children;
                            if ("mention-date" === r.tagName) eu({
                                date: r.attributes.date
                            });
                            else if ("mention-datetime" === r.tagName) eu({
                                date: r.attributes.date,
                                time: r.attributes.time
                            });
                            else if ("mention-date-range" === r.tagName) {
                                let e = eu({
                                        date: r.attributes["start-date"]
                                    }),
                                    t = eu({
                                        date: r.attributes["end-date"]
                                    });
                                if (e.valueOf() > t.valueOf()) throw new(o()).Te("invalid_date_range", "Invalid date range: start must be before end")
                            } else if ("mention-datetime-range" === r.tagName) {
                                let e = eu({
                                        date: r.attributes["start-date"],
                                        time: r.attributes["start-time"]
                                    }),
                                    t = eu({
                                        date: r.attributes["end-date"],
                                        time: r.attributes["end-time"]
                                    });
                                if (e.valueOf() > t.valueOf()) throw new(o()).Te("invalid_date_range", "Invalid date range: start must be before end")
                            } else(0, a().HB)(r)
                        }({
                            newPropertyValue: e
                        }), r.properties[s] = e, t.addOperation({
                            command: "setBlockProperty",
                            blockNode: r,
                            parentBlockId: null == (n = r.parent) ? void 0 : n.attributes.id,
                            property: e
                        }, void 0)
                    }
                }
            }

            function G(e, t) {
                let r, a = [t],
                    i = new Set;
                for (; r = a.pop();) i.has(r.attributes.id) || (e.setSchemaIdMapForSchemaIfNotExists(r.schemaId, r.schemas), e.setBlockIdMapForBlock(r.attributes.id, r), "database-views" !== r.tagName && a.push(...r.children), i.add(r.attributes.id))
            }

            function J(e, t) {
                e.setUniversalIdMapForUniversalNode(t.attributes.id, t)
            }

            function Z(e) {
                let {
                    state: t,
                    children: a,
                    databaseSchemaId: i,
                    parent: n
                } = e;
                return a.map(e => (function e(t) {
                    let {
                        state: a,
                        parsedBlock: i,
                        parent: n,
                        databaseSchemaId: s
                    } = t;
                    if ("move" === i.type) {
                        let e = a.getBlockFromBlockIdMap(i.attributes.id);
                        if (!n) throw new(o()).Te("cannot_move_block_without_parent", "Parentless move node");
                        return ! function(e) {
                            let {
                                move: t,
                                state: r,
                                moveToParent: a
                            } = e;
                            for (let e of t) {
                                let t = r.getBlockFromBlockIdMap(e.attributes.id),
                                    i = r.getIdMapper().mapKeyToCounter({
                                        type: "block",
                                        key: t.attributes.id
                                    });
                                if (!e.parent) throw new(o()).Te("cannot_move_block_without_parent", `Cannot move block without parent on block with id=${i}.`);
                                r.addOperation({
                                    command: "moveBlock",
                                    parentId: a.attributes.id,
                                    oldParentId: e.parent.attributes.id,
                                    blockNode: e
                                }, void 0);
                                let n = et({
                                    parent: e.parent,
                                    state: r
                                }).children.findIndex(t => t.attributes.id === e.attributes.id);
                                if (n < 0) throw new(o()).Te("cannot_move_block_without_parent", `Cannot move block without parent on block with id=${i}.`);
                                e.parent.children.splice(n, 1), e.parent = a
                            }
                        }({
                            move: [e],
                            state: a,
                            moveToParent: n
                        }), e
                    }
                    if (a.doesBlockIdMapHaveBlock(i.attributes.id) && !(0, r(886508).zQ)(i.tagName)) return a.getBlockFromBlockIdMap(i.attributes.id);
                    let l = em({
                        parsedBlock: i,
                        persisted: !1,
                        parent: n,
                        databaseSchemaId: s
                    });
                    for (let t of i.children) l.children.push(e({
                        state: a,
                        parsedBlock: t,
                        parent: l,
                        databaseSchemaId: s
                    }));
                    return a.setBlockIdMapForBlock(l.attributes.id, l), a.setSchemaIdMapForSchema(l.schemaId, l.schemas), l
                })({
                    state: t,
                    parsedBlock: e,
                    parent: n,
                    databaseSchemaId: i
                }))
            }

            function ee(e) {
                let {
                    block: t,
                    state: r,
                    databaseSchemaId: a,
                    collectionId: i,
                    useCrdt: o
                } = e;
                if (!t.persisted && "database-views" !== t.tagName)
                    for (let e of (a && i ? r.addOperation({
                            command: "createBlock",
                            blockNode: t,
                            databaseSchemaId: a,
                            collectionId: i
                        }, o) : r.addOperation({
                            command: "createBlock",
                            blockNode: t
                        }, o), t.persisted = !0, t.children)) ee({
                        block: e,
                        state: r,
                        useCrdt: o
                    })
            }

            function et(e) {
                let {
                    parent: t,
                    state: r
                } = e;
                if ("synced-block-reference" !== t.tagName) return t;
                if (!t.attributes["synced-block-id"]) throw new(o()).Te("invalid_synced_block_reference", "Synced block reference missing synced-block-id!");
                return r.getBlockFromBlockIdMap(t.attributes["synced-block-id"])
            }

            function er(e) {
                let {
                    parent: t,
                    index: r,
                    insert: a,
                    state: i,
                    useCrdt: s
                } = e, l = Array.isArray(a) ? a : [a], d = et({
                    parent: t,
                    state: i
                }), u = n().sA[d.tagName].content;
                for (let e of l.map(e => e.tagName))
                    if (!u.includes(e)) {
                        if ("child-page" === t.tagName) throw new(o()).Te("invalid_insert", `You attempted to insert a ${e} inside a child-page, which is invalid. You may have wanted to insert this ${e} in a database instead.`);
                        throw new(o()).Te("invalid_insert", `You attempted to insert a ${e} inside ${t.tagName}. ${u.length>0?`${t.tagName} allows only children of type ${u.join(", ")}`:`${t.tagName} is not allowed children of any type.`}`)
                    }
                for (let e = l.length - 1; e >= 0; e--) {
                    let t = l[e];
                    if ("block" !== t.type) throw new(o()).Te("cannot_insert_non_block_node", "Cannot insert a non-block node.");
                    t.parent = d, d.children.splice(r, 0, t), ee({
                        block: t,
                        state: i,
                        useCrdt: s
                    })
                }
                return {
                    parentForOperation: d
                }
            }

            function ea(e) {
                var t;
                let {
                    parentBlock: i,
                    personPropertyUpdate: n,
                    state: s,
                    action: l
                } = e, d = n.attributes.name, u = (0, a().O)(i.properties, d) ? i.properties[d] : void 0;
                if ((null == u ? void 0 : u.tagName) !== "property-person") throw new(o()).Te("invalid_person_property_child", "Invalid property child when appending to person property");
                let p = function(e) {
                        let {
                            propertyChild: t,
                            parentBlock: i,
                            propertyName: n,
                            state: s,
                            action: l
                        } = e, d = t.children.filter(e => "mention-person" === e.tagName).map(e => e.attributes["person-id"]), u = s.getSchemaFromSchemaIdMapIfExists(i.schemaId);
                        if (!u) throw new(o()).Te("schema_not_found", `Database ${i.schemaId} was not found. You may need to use load-database to load it first.`);
                        if (!(0, a().O)(u, n)) throw new(o()).Te("cannot_update_nonexistent_property", "Invalid schema for person property");
                        let p = u[n];
                        if ("schema-property-person" !== p.tagName) throw new(o()).Te("invalid_schema_for_person_property", "Invalid property schema for property person");
                        let c = p.attributes.limit;
                        switch (l) {
                            case "overwrite":
                                if (d.length > 1 && "1" === c) throw new(o()).Te("cannot_set_too_many_people_for_person_property", "Tried to set too many people for person property with limit 1");
                                return d;
                            case "append":
                                {
                                    let e = i.properties[n].children.filter(e => "mention-person" === e.tagName).map(e => e.attributes["person-id"]),
                                        t = r(381453).sb([...d, ...e]);
                                    if (t.length > 1 && "1" === c) throw new(o()).Te("cannot_set_too_many_people_for_person_property", "Tried to set too many people for person property with limit 1");
                                    return t
                                }
                            case "delete":
                                {
                                    let e = i.properties[n].children.filter(e => "mention-person" === e.tagName).map(e => e.attributes["person-id"]);
                                    return r(381453).R9(e, d)
                                }
                            default:
                                (0, a().HB)(l)
                        }
                    }({
                        propertyChild: n,
                        parentBlock: i,
                        propertyName: d,
                        state: s,
                        action: l
                    }),
                    c = [];
                for (let e of p) {
                    let t = {
                        type: "inline",
                        tagName: "mention-person",
                        attributes: {
                            "person-id": e,
                            "person-name": void 0
                        },
                        children: []
                    };
                    c.push(t)
                }
                u.children = c, s.addOperation({
                    command: "setBlockProperty",
                    blockNode: i,
                    parentBlockId: null == (t = i.parent) ? void 0 : t.attributes.id,
                    property: u
                }, void 0)
            }

            function ei({
                parentBlock: e,
                multiSelectPropertyName: t,
                multiSelectPropertyUpdates: n,
                state: s,
                action: l
            }) {
                var d;
                let u = function(e) {
                        let {
                            propertyChild: t,
                            parentBlock: i,
                            propertyName: n,
                            action: s
                        } = e, l = t.children.map(e => e.attributes.option);
                        switch (s) {
                            case "overwrite":
                                return l;
                            case "append":
                                {
                                    if (!(0, a().O)(i.properties, n)) throw new(o()).Te("cannot_append_to_nonexistent_property", `"${n}" missing from properties`);
                                    let e = i.properties[n].children.map(e => e.attributes.option);
                                    return r(381453).sb([...l, ...e])
                                }
                            case "delete":
                                {
                                    if (!(0, a().O)(i.properties, n)) throw new(o()).Te("cannot_delete_from_nonexistent_property", `"${n}" missing from properties`);
                                    let e = i.properties[n].children.map(e => e.attributes.option);
                                    return r(381453).R9(e, l)
                                }
                            default:
                                (0, a().HB)(s)
                        }
                    }({
                        propertyChild: n,
                        parentBlock: e,
                        propertyName: t,
                        action: l
                    }),
                    p = [];
                for (let e of u) {
                    let t = {
                        type: "inline",
                        tagName: "option",
                        attributes: {
                            option: (0, i().V9)(e)
                        },
                        children: []
                    };
                    p.push(t)
                }
                let c = (0, a().O)(e.properties, t) ? e.properties[t] : void 0;
                if ((null == c ? void 0 : c.tagName) !== "property-multi-select") throw new(o()).Te("invalid_multi_select_property_child", "Invalid property child when updating multi-select");
                c.children = p, ep({
                    state: s,
                    propertyName: t,
                    newPropertyValue: c,
                    parentBlock: e
                }), s.addOperation({
                    command: "setBlockProperty",
                    blockNode: e,
                    parentBlockId: null == (d = e.parent) ? void 0 : d.attributes.id,
                    property: c
                }, void 0)
            }

            function eo(e) {
                let {
                    tableBlockNode: t,
                    children: r,
                    atZeroBasedIndex: i,
                    state: s
                } = e, l = i + 1, d = [];
                for (let e of r) {
                    if ("move" === e.type) {
                        let r = e.attributes.name;
                        if (!r) throw new(o()).Te("move_inside_insert_requires_name_attribute", "<move> inside <insert-X> with name attribute requires name attribute.");
                        for (let e of t.children) {
                            if ((0, n().gc)(e)) throw Error(`Invalid table operation for block node: ${e.tagName}`);
                            let t = e.properties;
                            if (!(0, a().O)(t, r)) throw new(o()).Te("move_inside_insert_property_does_not_exist", `Property ${r} does not exist on table row.`)
                        }
                        if (d.includes(r)) throw new(o()).Te("cannot_move_property_more_than_once", `Cannot move property ${r} more than once.`);
                        d.push(r)
                    } else if ("schema" === e.type) {
                        if (e.attributes.name !== l.toString()) throw new(o()).Te("insert_inside_insert_requires_properties_in_order", "<insert-X> with name attribute requires properties to be in order.")
                    } else(0, a().HB)(e);
                    l++
                }
                for (let e of t.children) {
                    if ((0, n().gc)(e)) throw Error(`Invalid table operation for block node: ${e.tagName}`);
                    let t = Object.values(e.properties).filter(e => !d.includes(e.attributes.name)).sort((e, t) => Number(e.attributes.name) - Number(t.attributes.name)),
                        s = t.map(e => Number(e.attributes.name)),
                        l = s.indexOf(Math.max(...s.filter(e => e < i + 1))) + 1,
                        u = Object.fromEntries([...t.slice(0, l), ...r.map(t => {
                            if ("move" === t.type)
                                if ((0, a().O)(e.properties, t.attributes.name)) return e.properties[t.attributes.name];
                                else throw new(o()).Te("property_missing_in_table_row", `"${t.attributes.name}" was missing in table row node properties`);
                            if ("schema" === t.type) return {
                                type: "property",
                                tagName: "property-text",
                                attributes: {
                                    name: t.attributes.name
                                },
                                children: []
                            };
                            (0, a().HB)(t)
                        }), ...t.slice(l)].map((e, t) => {
                            let r = t + 1;
                            return [r, { ...e,
                                attributes: { ...e.attributes,
                                    name: r.toString()
                                }
                            }]
                        }));
                    e.properties = u
                }
                s.addOperation({
                    command: "insertOrMoveTableColumns",
                    blockNode: t,
                    atIndex: i,
                    insertOrMoves: r
                }, void 0)
            }

            function en(e) {
                let {
                    remove: t,
                    state: r
                } = e;
                for (let e of t) {
                    if (!e.parent) throw new(o()).Te("cannot_remove_block_without_parent", `Cannot remove block with id=${r.getIdMapper().mapKeyToCounter({type:"block",key:e.attributes.id})} because it has no parent.`);
                    let t = et({
                        parent: e.parent,
                        state: r
                    });
                    if ("child-page" === e.tagName && "database-views" === e.parent.tagName) r.addOperation({
                        command: "removeBlock",
                        parentId: t.attributes.id,
                        removeBlockNode: e
                    }, void 0);
                    else {
                        let a = t.children.findIndex(t => t.attributes.id === e.attributes.id);
                        if (a < 0) throw new(o()).Te("cannot_remove_block_without_parent", `Cannot remove block with id=${r.getIdMapper().mapKeyToCounter({type:"block",key:e.attributes.id})} because it has no parent.`);
                        r.addOperation({
                            command: "removeBlock",
                            parentId: t.attributes.id,
                            removeBlockNode: e
                        }, void 0), e.parent.children.splice(a, 1)
                    }
                }
            }
            let es = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/,
                el = /\d{4}-\d{2}-\d{2}/,
                ed = /\d{2}:\d{2}/;

            function eu(e) {
                let t, {
                    date: a,
                    time: i
                } = e;
                if (!el.test(a)) throw new(o()).Te("invalid_date_format", "Invalid date for date property: incorrect format");
                if (i && !ed.test(i)) throw new(o()).Te("invalid_time_format", "Invalid time for date property: incorrect format");
                let n = e.timeZone ? {
                    zone: e.timeZone
                } : void 0;
                if (!(t = i ? r(906745).DateTime.fromFormat(`${a}T${i}`, "yyyy-MM-dd'T'HH:mm", n) : r(906745).DateTime.fromFormat(`${a}`, "yyyy-MM-dd")).isValid) throw new(o()).Te("invalid_date_format", "Invalid date for date property");
                return t
            }

            function ep(e) {
                let {
                    newPropertyValue: t,
                    parentBlock: r,
                    propertyName: a,
                    state: i
                } = e, n = i.getSchemaFromSchemaIdMapIfExists(r.schemaId);
                if (!n) throw new(o()).Te("schema_not_found", `Database ${r.schemaId} was not found. You may need to use load-database to load it first.`);
                let s = n[a];
                if (!s || s.tagName !== `schema-${t.tagName}`) throw new(o()).Te("invalid_schema_for_property", "Invalid schema for block. You may need to use load-database to load the database schema first.");
                let l = new Set;
                for (let e of s.children)
                    if ("schema-option" === e.tagName && l.add(e.attributes.option), "schema-option-category" === e.tagName)
                        for (let t of e.children) l.add(t.attributes.option);
                for (let e of t.children)
                    if (!l.has(e.attributes.option)) throw new(o()).Te("invalid_option_value", `Invalid option value: ${e.attributes.option}`);
                if ("property-multi-select" !== t.tagName && t.children.length > 1) throw new(o()).Te("invalid_option_value", "Invalid option value: limited to 1 option")
            }

            function ec(e) {
                let {
                    propertyChild: t,
                    parentBlock: r,
                    propertyName: i,
                    state: n,
                    action: s
                } = e, l = n.getSchemaFromSchemaIdMapIfExists(r.schemaId);
                if (!l) throw new(o()).Te("schema_not_found", `Database ${r.schemaId} was not found. You may need to use load-database to load it first.`);
                let d = t.children.map(e => e.attributes["page-id"]);
                if ("page" !== r.tagName && "child-page" !== r.tagName) throw new(o()).Te("cannot_set_relation_property_on_non_page", "Attempted to set relation property on a block that isn't a page");
                let u = r.properties[i];
                if (!u) throw new(o()).Te("cannot_set_relation_property_on_nonexistent_property", `There is no relation property named ${i}`);
                if ("property-relation" !== u.tagName) throw new(o()).Te("cannot_set_relation_property_on_non_relation_property", `The ${i} property is not a relation`);
                let p = u.attributes["database-id"];
                if (!p) throw new(o()).Te("cannot_set_relation_property_on_nonexistent_database", "Attempted to set relation property on a page that's not in a database");
                let c = l[i];
                if (!c || "schema-property-relation" !== c.tagName) throw new(o()).Te("invalid_schema_for_property", "Invalid schema for block");
                let m = n.getCollectionFromCollectionIdMap(p);
                if ((null == m ? void 0 : m.tagName) !== "database") throw new(o()).Te("ivalid_database_id_for_relation_property", "Invalid database id for relation property");
                let h = n.getPageIdToBlockIdMap();
                for (let e of d) {
                    let t = h.get(e);
                    if (!t) throw new(o()).Te("invalid_page_id_for_mention", `Invalid page id: ${e}`);
                    if (n.getBlockFromBlockIdMap(t).schemaId !== m.schemaId) throw new(o()).Te("invalid_page_id_for_relation", "Invalid page id for relation")
                }
                switch (s) {
                    case "overwrite":
                        if ("1" === c.attributes.limit && d.length > 1) throw new(o()).Te("cannot_set_too_many_pages_for_relation_property", "Too many mentioned page ids for a relation field with limit 1");
                        return d;
                    case "append":
                        {
                            let e = r.properties[i];
                            if ("property-relation" !== e.tagName) throw new(o()).Te("invalid_relation_property_child", "Invalid property child when setting relation");
                            let t = new Set(e.children.map(e => e.attributes["page-id"]));
                            if (d.forEach(t.add, t), t.size > 1 && "1" === c.attributes.limit) throw new(o()).Te("cannot_set_too_many_pages_for_relation_property", `Too many mentioned page ids for a relation field with limit ${c.attributes.limit}`);
                            return d
                        }
                    case "delete":
                        {
                            let e = r.properties[i];
                            if ("property-relation" !== e.tagName) throw new(o()).Te("invalid_relation_property_child", "Invalid property child when setting relation");
                            let t = new Set(e.children.map(e => e.attributes["page-id"]));
                            for (let e of d)
                                if (!t.has(e)) throw new(o()).Te("cannot_delete_page_id_not_in_relation", "Attempting to delete pageId not contained in relation.");
                            return d
                        }
                    default:
                        (0, a().HB)(s)
                }
            }

            function em(e) {
                let {
                    parsedBlock: t,
                    persisted: r,
                    parent: a,
                    databaseSchemaId: i
                } = e;
                return (0, n().g5)(t.tagName), {
                    tagName: t.tagName,
                    type: "block",
                    persisted: r,
                    attributes: t.attributes,
                    text: t.text,
                    properties: t.properties,
                    schemas: t.schemas,
                    children: [],
                    parent: a,
                    schemaId: i ? ? t.attributes.id
                }
            }

            function eh(e) {
                let {
                    node: t,
                    mapCounterToKey: a
                } = e;
                return function e(t, r) {
                    let a = em({
                        parsedBlock: t,
                        parent: r,
                        persisted: !0,
                        databaseSchemaId: void 0
                    });
                    for (let r of t.children) {
                        if ("move" === r.type) throw new(o()).Te("unexpected_move_node", "Unexpected move node");
                        a.children.push(e(r, a))
                    }
                    return a
                }((0, r(860936).AZ)((0, r(886508).V8)({
                    allowMove: !1,
                    allowUncited: !0,
                    persisted: !0,
                    mapCounterToKey: a
                }), t), void 0)
            }
            let eg = {
                version: 16,
                context: {
                    mode: "shared",
                    "available-commands": v
                },
                selection: void 0,
                loadedPageIds: [],
                schemaIdMap: {},
                peopleIdMap: {},
                blockIdMap: {},
                idMapper: {
                    keyMap: []
                },
                collectionIdMap: {},
                loadedDatabaseIds: [],
                loadedUniversalIds: [],
                universalIdMap: {},
                universalSearchResultPayloadMap: {},
                loadedAttachmentIds: []
            }
        }
    }
]);