"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [45213], {
        421814: (e, t, i) => {
            function n(e) {
                let t = e.type;
                return "audio" === t ? "audio" : "bulleted_list" === t ? "bulleted_list" : "callout" === t ? "callout" : "code" === t ? "code" : "collection_view" === t || "collection_view_page" === t ? "database" : "column" === t ? "column" : "column_list" === t ? "column_list" : "divider" === t ? "divider" : "equation" === t ? "equation" : "file" === t ? "file" : "header" === t ? "h1" : "sub_header" === t ? "h2" : "sub_sub_header" === t ? "h3" : "header_4" === t ? "h4" : "image" === t ? "image" : "numbered_list" === t ? "numbered_list" : "page" === t ? "page" : "pdf" === t ? "pdf" : "quote" === t ? "quote" : "table" === t ? "table" : "table_of_contents" === t ? "table_of_contents" : "table_row" === t ? "table_row" : "tab" === t ? "tab" : "text" === t ? "text" : "to_do" === t ? "to_do" : "toggle" === t ? "toggle" : "video" === t ? "video" : "transcription" === t ? "transcription" : "transclusion_container" === t ? "synced_block" : "transclusion_reference" === t ? "synced_block_reference" : "mail" === t ? "mail" : "ai_block" === t || "drawing" === t || "abstract" === t || "alias" === t || "bookmark" === t || "breadcrumb" === t || "button" === t || "codepen" === t || "copy_indicator" === t || "deepnote" === t || "drive" === t || "embed" === t || "excalidraw" === t || "external_object_instance" === t || "external_object_instance_page" === t || "factory" === t || "factory_task" === t || "figma" === t || "framer" === t || "gist" === t || "hex" === t || "invision" === t || "link_to_collection" === t || "link_to_page" === t || "loom" === t || "maps" === t || "miro" === t || "mixpanel" === t || "personal_home_page" === t || "home_shortcuts" === t || "replit" === t || "sketch" === t || "slide" === t || "tweet" === t || "typeform" === t || "whimsical" === t || "form" === t || "post" === t || "workflow" === t || "temporary_ui" === t || "edit_reference" === t || "custom" === t ? "unknown" : void(0, i(722371).HB)(t)
            }

            function l(e) {
                if ("text" === e.type) return "text";
                if ("to_do" === e.type) return "to_do";
                if ("bulleted_list" === e.type) return "bulleted_list";
                if ("numbered_list" === e.type) return "numbered_list";
                if ("toggle" === e.type) return "toggle";
                else if ("column" === e.type) return "column";
                else if ("column_list" === e.type) return "column_list";
                else if ("callout" === e.type) return "callout";
                else if ("quote" === e.type) return "quote";
                else if ("h1" === e.type) return "header";
                else if ("h2" === e.type) return "sub_header";
                else if ("h3" === e.type) return "sub_sub_header";
                else if ("h4" === e.type) return "header_4";
                else if ("page" === e.type) return "page";
                else if ("database" === e.type) return "collection_view";
                else if ("equation" === e.type) return "equation";
                else if ("audio" === e.type) return "audio";
                else if ("image" === e.type) return "image";
                else if ("file" === e.type) return "file";
                else if ("divider" === e.type) return "divider";
                else if ("pdf" === e.type) return "pdf";
                else if ("table_of_contents" === e.type) return "table_of_contents";
                else if ("code" === e.type) return "code";
                else if ("table" === e.type) return "table";
                else if ("table_row" === e.type) return "table_row";
                else if ("tab" === e.type) return "tab";
                else if ("video" === e.type) return "video";
                else if ("transcription" === e.type) return "transcription";
                else if ("synced_block" === e.type) return "transclusion_container";
                else if ("synced_block_reference" === e.type) return "transclusion_reference";
                else if ("edit_reference" === e.type) return "edit_reference";
                else if ("meeting_time_suggestions" === e.type) return "temporary_ui";
                else if ("mail" === e.type) return "mail";
                else if ("unknown" === e.type) throw Error(`Unknown block type: ${e}`);
                else(0, i(722371).HB)(e)
            }

            function o(e) {
                return !i(728601)._J(e) && (e.startsWith("https://") || e.startsWith("http://"))
            }
            i.d(t, {
                CU: () => l,
                FS: () => o,
                yr: () => n
            }), i(16280)
        },
        512402: (e, t, i) => {
            i.d(t, {
                TF: () => f,
                qI: () => o
            }), i(944114), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(898992), i(803949), i(581454);
            let n = /([\\*~`$[\]<>{}|^])/g,
                l = /^Transcript omitted\. Use the view tool with the meeting note url(?:\s*\(.*\))?\s*to view this transcript\.$/;

            function o(e) {
                return l.test(e)
            }

            function r(e) {
                return e.replace(n, "\\$1")
            }
            let a = "<user-selection>",
                d = "</user-selection>";

            function c(e) {
                let {
                    text: t,
                    selectionStartIndices: i,
                    selectionEndIndices: n,
                    collapsedCursorIndices: l,
                    escapeChars: o
                } = e, c = e.currentIndex, s = "";
                for (let e = 0; e < t.length; e++) {
                    null != n && n.has(c) && (s += d), null != l && l.has(c) && (s += a, s += d), null != i && i.has(c) && (s += a);
                    let u = t[e];
                    s += o ? r(u) : u, c++
                }
                return {
                    result: s,
                    newIndex: c
                }
            }

            function s(e, t) {
                let i = [],
                    n = [];
                return e.strike && !t.strike && i.push("~~"), e.bold && !t.bold && i.push("**"), e.italic && !t.italic && i.push("*"), !e.bold && t.bold && n.push("**"), !e.italic && t.italic && n.push("*"), !e.strike && t.strike && n.push("~~"), {
                    close: i,
                    open: n
                }
            }

            function u(e) {
                let t = e.annotations ? ? {};
                return !t.href && !t.code && !t.color && !t.underline && (!t.discussionUrls || 0 === t.discussionUrls.length)
            }

            function p(e) {
                let {
                    elems: t,
                    selectionStartIndices: i,
                    selectionEndIndices: n,
                    collapsedCursorIndices: l
                } = e, o = "", p = {}, f = 0, h = () => {
                    null != l && l.has(f) ? (o += a, o += d) : (null != n && n.has(f) && (o += d), null != i && i.has(f) && (o += a))
                };
                for (let e of t) {
                    let t = function(e) {
                            if ("string" != typeof e && "annotated" === e.type && u(e)) {
                                var t, i, n;
                                return {
                                    bold: !!(null == (t = e.annotations) ? void 0 : t.bold),
                                    italic: !!(null == (i = e.annotations) ? void 0 : i.italic),
                                    strike: !!(null == (n = e.annotations) ? void 0 : n.strikethrough)
                                }
                            }
                            return "string" != typeof e && "mention" === e.type && e.annotations && (e.annotations.bold || e.annotations.italic || e.annotations.strikethrough) ? {
                                bold: !!e.annotations.bold,
                                italic: !!e.annotations.italic,
                                strike: !!e.annotations.strikethrough
                            } : {}
                        }(e),
                        {
                            close: a,
                            open: d
                        } = s(p, t);
                    if (o += a.join("") + d.join(""), "string" == typeof e) {
                        let t = c({
                            text: e,
                            currentIndex: f,
                            selectionStartIndices: i,
                            selectionEndIndices: n,
                            collapsedCursorIndices: l,
                            escapeChars: !0
                        });
                        o += t.result.replace(/\n/g, "<br>"), f = t.newIndex
                    } else if ("annotated" === e.type && u(e)) {
                        let r = c({
                            text: e.text,
                            currentIndex: f,
                            selectionStartIndices: i,
                            selectionEndIndices: n,
                            collapsedCursorIndices: l,
                            escapeChars: !0
                        });
                        o += r.result.replace(/\n/g, "<br>"), f = r.newIndex, p = t;
                        continue
                    } else switch (e.type) {
                        case "annotated":
                            {
                                let {
                                    result: t,
                                    newIndex: r
                                } = function(e, t = {}, i = 0, n, l, o) {
                                    let r = c({
                                            text: e,
                                            currentIndex: i,
                                            selectionStartIndices: n,
                                            selectionEndIndices: l,
                                            collapsedCursorIndices: o,
                                            escapeChars: !t.code
                                        }),
                                        a = t.code ? r.result.replace(/`/g, "\\`") : r.result;
                                    a = a.replace(/\n/g, "<br>"), t.code && (a = `\`${a}\``), t.strikethrough && (a = `~~${a}~~`), t.bold && t.italic ? a = `***${a}***` : (t.bold && (a = `**${a}**`), t.italic && (a = `*${a}*`)), t.href && (a = `[${a}](${t.href})`);
                                    let d = [];
                                    return t.color && d.push(`color="${t.color}"`), t.underline && d.push('underline="true"'), t.discussionUrls && t.discussionUrls.length > 0 && d.push(`discussion-urls="${t.discussionUrls.join(",")}"`), d.length > 0 && (a = `<span ${d.join(" ")}>${a}</span>`), {
                                        result: a,
                                        newIndex: r.newIndex
                                    }
                                }(e.text, e.annotations, f, i, n, l);o += t,
                                f = r;
                                break
                            }
                        case "equation":
                            h(), o += `$\`${e.equation.trim()}\`$`;
                            break;
                        case "mention":
                            h(), o += function(e) {
                                let {
                                    mention: t
                                } = e, i = t => {
                                    let i = e.annotations ? ? {};
                                    if (!i.color && !i.underline && (!i.discussionUrls || 0 === i.discussionUrls.length)) return t;
                                    let n = [];
                                    return i.color && n.push(`color="${i.color}"`), i.underline && n.push('underline="true"'), i.discussionUrls && i.discussionUrls.length > 0 && n.push(`discussion-urls="${i.discussionUrls.join(",")}"`), `<span ${n.join(" ")}>${t}</span>`
                                };
                                switch (t.type) {
                                    case "user":
                                        return i(void 0 === t.name ? `<mention-user url="${t.url}"/>` : `<mention-user url="${t.url}">${r(t.name)}</mention-user>`);
                                    case "page":
                                        return i(void 0 === t.title ? `<mention-page url="${t.url}"/>` : `<mention-page url="${t.url}">${r(t.title)}</mention-page>`);
                                    case "database":
                                        return i(void 0 === t.title ? `<mention-database url="${t.url}"/>` : `<mention-database url="${t.url}">${r(t.title)}</mention-database>`);
                                    case "data-source":
                                        return i(void 0 === t.title ? `<mention-data-source url="${t.url}"/>` : `<mention-data-source url="${t.url}">${r(t.title)}</mention-data-source>`);
                                    case "agent":
                                        return i(void 0 === t.name ? `<mention-agent url="${t.url}"/>` : `<mention-agent url="${t.url}">${r(t.name)}</mention-agent>`);
                                    case "date":
                                        return i(`<mention-date start="${t.start}"${t.startTime?` startTime="${t.startTime}"`:""}${t.end?` end="${t.end}"`:""}${t.endTime?` endTime="${t.endTime}"`:""}${t.timeZone?` timeZone="${t.timeZone}"`:""}/>`);
                                    case "custom_emoji":
                                        return i(`:${t.name}:`)
                                }
                            }(e), f++;
                            break;
                        case "citation":
                            h(), o += `[^${e.href}]`, f++
                    }
                    p = t
                }
                return o += s(p, {}).close.join(""), h(), o
            }

            function f({
                blocks: e,
                omitUnknownBlocks: t = !1,
                skipTranscriptionTranscript: n = !0,
                selectedBlockIds: l,
                textSelection: o,
                textSelections: r
            }) {
                let s = function(e, t) {
                        let n = (null == t ? void 0 : t.omitUnknownBlocks) ? ? !1,
                            l = (null == t ? void 0 : t.addCitations) ? ? !1,
                            o = (null == t ? void 0 : t.skipTranscriptionTranscript) ? ? !1,
                            r = null != t && t.selectedBlockIds ? new Set(t.selectedBlockIds) : void 0,
                            s = function(e) {
                                let {
                                    textSelection: t,
                                    textSelections: i
                                } = e, n = i ? ? (t ? [t] : void 0);
                                if (!n || 0 === n.length) return;
                                let l = new Map,
                                    o = new Map,
                                    r = new Map,
                                    a = new Set;
                                for (let e of n) {
                                    let t = e.start,
                                        i = e.end;
                                    t.pointer.id === i.pointer.id && t.index > i.index && (t = e.end, i = e.start);
                                    let n = [t.pointer.id, t.pointer.spaceId ? ? "", t.index, i.pointer.id, i.pointer.spaceId ? ? "", i.index].join(":");
                                    if (a.has(n)) continue;
                                    if (a.add(n), t.pointer.id === i.pointer.id && t.index === i.index) {
                                        let e = r.get(t.pointer.id) ? ? new Set;
                                        e.add(t.index), r.set(t.pointer.id, e);
                                        continue
                                    }
                                    let d = l.get(t.pointer.id) ? ? new Set;
                                    d.add(t.index), l.set(t.pointer.id, d);
                                    let c = o.get(i.pointer.id) ? ? new Set;
                                    c.add(i.index), o.set(i.pointer.id, c)
                                }
                                return {
                                    startIndicesByBlockId: l,
                                    endIndicesByBlockId: o,
                                    collapsedCursorIndicesByBlockId: r
                                }
                            }({
                                textSelection: null == t ? void 0 : t.textSelection,
                                textSelections: null == t ? void 0 : t.textSelections
                            }),
                            u = [],
                            f = 0,
                            m = 1,
                            g = e => {
                                let t = 0;
                                if (e.children)
                                    for (let i of e.children) t += i.content.split("\n").length, t += g(i), "cells" in i && i.cells && (t += i.cells.length);
                                return t
                            };
                        for (let t = 0; t < e.length; t++) {
                            let y = e[t],
                                b = e[t - 1],
                                $ = (null == b ? void 0 : b.type) === "numbered_list",
                                _ = function e(t, n, l = 0, o = 1, r, s = !1, u = !1, f, m) {
                                    var g, y, b, $, _, v;
                                    let k = "	".repeat(n),
                                        w = e => f && f.has(t.id) ? `${a}${e}${d}` : e,
                                        T = null == m ? void 0 : m.startIndicesByBlockId.get(t.id),
                                        I = null == m ? void 0 : m.endIndicesByBlockId.get(t.id),
                                        x = null == m ? void 0 : m.collapsedCursorIndicesByBlockId.get(t.id),
                                        D = e => {
                                            if (0 === e.length) {
                                                let e = "";
                                                return null != I && I.has(0) && (e += d), null != x && x.has(0) && (e += a + d), null != T && T.has(0) && (e += a), e
                                            }
                                            return p({
                                                elems: e,
                                                selectionStartIndices: T,
                                                selectionEndIndices: I,
                                                collapsedCursorIndices: x
                                            })
                                        },
                                        E = e => "children" in e && Array.isArray(e.children) ? e.children : void 0,
                                        C = e => {
                                            let t = e.content.split("\n").length;
                                            if (e.children)
                                                for (let i of e.children) t += C(i);
                                            return t
                                        },
                                        L = (t, i, n) => {
                                            let l = [],
                                                o = i + 1,
                                                a = 0,
                                                d = e(t[0], n + 1, 0, o, r, s, u, f, m);
                                            l.push(d), "numbered_list" === t[0].type && (a = 1);
                                            for (let i = 1; i < t.length; i++) {
                                                var c;
                                                o += C(d);
                                                let p = t[i],
                                                    h = (null == (c = t[i - 1]) ? void 0 : c.type) === "numbered_list",
                                                    g = "numbered_list" === p.type && h ? a : 0,
                                                    y = e(p, n + 1, g, o, r, s, u, f, m);
                                                l.push(y), d = y, "numbered_list" === p.type ? a++ : a = 0
                                            }
                                            return l
                                        };
                                    switch (t.type) {
                                        case "text":
                                            {
                                                let e = "";
                                                if (t.text && 0 !== t.text.length) e = `${k}${D(t.text)}${h(t.color)}`,
                                                t.citationData && (e += ` [^{{${(0,i(140030).Ts)({id:t.id,recordType:t.citationData.type,url:t.citationData.url,spaceId:t.citationData.spaceId})}}}]`);
                                                else {
                                                    let t = "";
                                                    null != I && I.has(0) && (t += d), null != x && x.has(0) && (t += a, t += d), null != T && T.has(0) && (t += a), e = `${k}<empty-block/>${t}`
                                                }
                                                let l = E(t);
                                                return {
                                                    content: w(e),
                                                    lineNumber: o,
                                                    children: l ? L(l, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "h1":
                                        case "h2":
                                        case "h3":
                                        case "h4":
                                            {
                                                let e = "h1" === t.type ? "#" : "h2" === t.type ? "##" : "h3" === t.type ? "###" : "####";
                                                if (t.toggleable) {
                                                    let l = D(t.text || []),
                                                        r = ['toggle="true"'];
                                                    t.color && r.push(`color="${t.color}"`);
                                                    let a = ` {${r.join(" ")}}`,
                                                        d = `${k}${e}${l?` ${l}`:""}${a}`;
                                                    t.citationData && (d += ` [^{{${(0,i(140030).Ts)({id:t.id,recordType:t.citationData.type,url:t.citationData.url,spaceId:t.citationData.spaceId})}}}]`);
                                                    let c = E(t);
                                                    return {
                                                        content: w(d),
                                                        lineNumber: o,
                                                        children: c ? L(c, o, n) : void 0,
                                                        id: t.id
                                                    }
                                                }
                                                let l = E(t),
                                                    r = D(t.text || []),
                                                    a = `${k}${e}${r?` ${r}`:""}${h(t.color)}`;
                                                return t.citationData && (a += ` [^{{${(0,i(140030).Ts)({id:t.id,recordType:t.citationData.type,url:t.citationData.url,spaceId:t.citationData.spaceId})}}}]`),
                                                {
                                                    content: w(a),
                                                    lineNumber: o,
                                                    children: l ? L(l, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "toggle":
                                            {
                                                let e = D(t.text ? ? []),
                                                    l = t.color ? ` color="${t.color}"` : "",
                                                    r = `${k}<details${l}>`;e && (r += `
${k}<summary>${e}</summary>`),
                                                r += `
${k}</details>`,
                                                t.citationData && (r += ` [^{{${(0,i(140030).Ts)({id:t.id,recordType:t.citationData.type,url:t.citationData.url,spaceId:t.citationData.spaceId})}}}]`);
                                                let a = E(t);
                                                return {
                                                    content: w(r),
                                                    lineNumber: o,
                                                    children: a ? L(a, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "callout":
                                            {
                                                let e = t.color ? ` color="${t.color}"` : "",
                                                    l = t.icon ? ` icon="${t.icon}"` : "",
                                                    r = `${k}<callout${l}${e}>`;t.text && (r += `
${k}	${D(t.text)}`),
                                                r += "\n</callout>",
                                                t.citationData && (r += ` [^{{${(0,i(140030).Ts)({id:t.id,recordType:t.citationData.type,url:t.citationData.url,spaceId:t.citationData.spaceId})}}}]`);
                                                let a = E(t);
                                                return {
                                                    content: w(r),
                                                    lineNumber: o,
                                                    children: a ? L(a, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "to_do":
                                            {
                                                let e = t.checked ? "[x]" : "[ ]",
                                                    l = D(t.text ? ? []),
                                                    r = `${k}- ${e}${l?` ${l}`:""}${h(t.color)}`;t.citationData && (r += ` [^{{${(0,i(140030).Ts)({id:t.id,recordType:t.citationData.type,url:t.citationData.url,spaceId:t.citationData.spaceId})}}}]`);
                                                let a = E(t);
                                                return {
                                                    content: w(r),
                                                    lineNumber: o,
                                                    children: a ? L(a, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "bulleted_list":
                                            {
                                                let e = D(t.text ? ? []),
                                                    l = `${k}-${e?` ${e}`:""}${h(t.color)}`;t.citationData && (l += ` [^{{${(0,i(140030).Ts)({id:t.id,recordType:t.citationData.type,url:t.citationData.url,spaceId:t.citationData.spaceId})}}}]`);
                                                let r = E(t);
                                                return {
                                                    content: w(l),
                                                    lineNumber: o,
                                                    children: r ? L(r, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "numbered_list":
                                            {
                                                let e = D(t.text ? ? []),
                                                    r = `${k}${l+1}.${e?` ${e}`:""}${h(t.color)}`;t.citationData && (r += ` [^{{${(0,i(140030).Ts)({id:t.id,recordType:t.citationData.type,url:t.citationData.url,spaceId:t.citationData.spaceId})}}}]`);
                                                let a = E(t);
                                                return {
                                                    content: w(r),
                                                    lineNumber: o,
                                                    children: a ? L(a, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "quote":
                                            {
                                                let e = D(t.text || []),
                                                    l = `${k}>${e?` ${e}`:""}${h(t.color)}`;t.citationData && (l += ` [^{{${(0,i(140030).Ts)({id:t.id,recordType:t.citationData.type,url:t.citationData.url,spaceId:t.citationData.spaceId})}}}]`);
                                                let r = E(t);
                                                return {
                                                    content: w(l),
                                                    lineNumber: o,
                                                    children: r ? L(r, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "divider":
                                            {
                                                let e = E(t);
                                                return {
                                                    content: w(`${k}---`),
                                                    lineNumber: o,
                                                    children: e ? L(e, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "code":
                                            {
                                                let e = null == (g = t.language) ? void 0 : g.toLowerCase(),
                                                    l = c({
                                                        text: ($ = t.text) && 0 !== $.length ? $.map(e => {
                                                            if ("string" == typeof e) return e;
                                                            switch (e.type) {
                                                                case "annotated":
                                                                    return e.text;
                                                                case "equation":
                                                                    return e.equation;
                                                                case "mention":
                                                                    {
                                                                        let t = e.mention;
                                                                        if ("name" in t && t.name) return t.name;
                                                                        if ("title" in t && t.title) return t.title;
                                                                        return ""
                                                                    }
                                                                case "citation":
                                                                    return "";
                                                                default:
                                                                    (0, i(722371).HB)(e)
                                                            }
                                                        }).join("") : "",
                                                        currentIndex: 0,
                                                        selectionStartIndices: T,
                                                        selectionEndIndices: I,
                                                        collapsedCursorIndices: x,
                                                        escapeChars: !1
                                                    }).result,
                                                    r = `${k}\`\`\`${e||""}
${l}
${k}\`\`\``,
                                                    a = E(t);
                                                return {
                                                    content: w(r),
                                                    lineNumber: o,
                                                    children: a ? L(a, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "equation":
                                            {
                                                let e = c({
                                                        text: t.text && "string" == typeof t.text[0] ? t.text[0] : "",
                                                        currentIndex: 0,
                                                        selectionStartIndices: T,
                                                        selectionEndIndices: I,
                                                        collapsedCursorIndices: x,
                                                        escapeChars: !1
                                                    }).result,
                                                    l = `${k}$$
${k}${e}
${k}$$${h(t.color)}`;t.citationData && (l += ` [^{{${(0,i(140030).Ts)({id:t.id,recordType:t.citationData.type,url:t.citationData.url,spaceId:t.citationData.spaceId})}}}]`);
                                                let r = E(t);
                                                return {
                                                    content: w(l),
                                                    lineNumber: o,
                                                    children: r ? L(r, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "table":
                                            return function(e, t, i, n) {
                                                let l, o, r, a = t => n && n.has(e.id) ? `<user-selection>${t}</user-selection>` : t;
                                                if (!e.rows || 0 === e.rows.length) return {
                                                    content: a(`${t}<table>
${t}</table>`),
                                                    lineNumber: i,
                                                    children: void 0,
                                                    id: e.id
                                                };
                                                let {
                                                    attrsStr: d,
                                                    colgroupContent: c,
                                                    renderCell: s
                                                } = (l = [], void 0 !== e.fitPageWidth && l.push(`fit-page-width="${e.fitPageWidth}"`), void 0 !== e.headerRow && l.push(`header-row="${e.headerRow}"`), void 0 !== e.headerColumn && l.push(`header-column="${e.headerColumn}"`), o = l.length > 0 ? ` ${l.join(" ")}` : "", r = "", e.columnStyles && e.columnStyles.length > 0 && (r = `
${t}<colgroup>`, e.columnStyles.forEach(e => {
                                                    let i = e.color ? ` color="${e.color}"` : "",
                                                        n = e.width ? ` width="${e.width}"` : "";
                                                    r += `
${t}<col${i}${n}>`
                                                }), r += `
${t}</colgroup>`), {
                                                    attrsStr: o,
                                                    colgroupContent: r,
                                                    renderCell: e => {
                                                        let t = e.color ? ` color="${e.color}"` : "",
                                                            i = p({
                                                                elems: e.text || []
                                                            });
                                                        return `<td${t}>${i}</td>`
                                                    }
                                                }), u = `${t}<table${d}>`;
                                                u += c, u += `
${t}</table>`;
                                                let f = [],
                                                    h = i + 1;
                                                return e.rows.forEach(e => {
                                                    let t = e.color ? ` color="${e.color}"` : "",
                                                        i = `<tr${t}>
</tr>`,
                                                        n = [],
                                                        l = h + 1;
                                                    e.cells.forEach(e => {
                                                        let t = s(e);
                                                        n.push({
                                                            content: t,
                                                            lineNumber: l
                                                        }), l++
                                                    }), f.push({
                                                        id: e.id,
                                                        content: i,
                                                        lineNumber: h,
                                                        cells: n
                                                    }), h += n.length + 2
                                                }), {
                                                    content: a(u),
                                                    lineNumber: i,
                                                    children: f,
                                                    id: e.id
                                                }
                                            }(t, k, o, f);
                                        case "column_list":
                                            {
                                                let e = `${k}<columns>
</columns>`,
                                                    i = E(t);
                                                return {
                                                    content: w(e),
                                                    lineNumber: o,
                                                    children: i ? L(i, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "column":
                                            {
                                                let e = `${k}<column>
</column>`,
                                                    i = E(t);
                                                return {
                                                    content: w(e),
                                                    lineNumber: o,
                                                    children: i ? L(i, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "tab":
                                            {
                                                let e = `${k}<tabs>
</tabs>`,
                                                    l = E(t);
                                                if (!l || 0 === l.length) return {
                                                    content: w(e),
                                                    lineNumber: o,
                                                    children: void 0,
                                                    id: t.id
                                                };
                                                let r = (e, t, n) => {
                                                        var l, o;
                                                        let r = "	".repeat(t),
                                                            c = "text" in e ? e.text : void 0,
                                                            s = c ? ((e, t) => {
                                                                let i = null == m ? void 0 : m.startIndicesByBlockId.get(e),
                                                                    n = null == m ? void 0 : m.endIndicesByBlockId.get(e);
                                                                if (0 === t.length) {
                                                                    let e = "";
                                                                    return null != n && n.has(0) && (e += d), null != i && i.has(0) && (e += a), e
                                                                }
                                                                return p({
                                                                    elems: t,
                                                                    selectionStartIndices: i,
                                                                    selectionEndIndices: n
                                                                })
                                                            })(e.id, c) : "",
                                                            u = "color" in e ? e.color : void 0,
                                                            g = `${r}<tab>`;
                                                        if (void 0 !== c) {
                                                            let t = `${r}	${s}${h(u)}`;
                                                            "citationData" in e && e.citationData && (t += ` [^{{${(0,i(140030).Ts)({id:e.id,recordType:e.citationData.type,url:e.citationData.url,spaceId:e.citationData.spaceId})}}}]`), g += `
${t}`
                                                        }
                                                        g += `
${r}</tab>`;
                                                        let y = +(void 0 !== c),
                                                            b = "children" in e && e.children ? L(e.children, n + y, t) : void 0;
                                                        return {
                                                            content: (l = e.id, o = g, f && f.has(l) ? `${a}${o}${d}` : o),
                                                            lineNumber: n,
                                                            children: b,
                                                            id: e.id
                                                        }
                                                    },
                                                    c = [],
                                                    s = o + 1;
                                                for (let e of l) {
                                                    let t = r(e, n + 1, s);
                                                    c.push(t), s += C(t)
                                                }
                                                return {
                                                    content: w(e),
                                                    lineNumber: o,
                                                    children: c,
                                                    id: t.id
                                                }
                                            }
                                        case "synced_block":
                                            {
                                                let e = `${k}<synced_block${t.url?` url="${t.url}"`:""}>
</synced_block>`;t.citationData && (e += ` [^{{${(0,i(140030).Ts)({id:t.id,recordType:t.citationData.type,url:t.citationData.url,spaceId:t.citationData.spaceId})}}}]`);
                                                let l = E(t);
                                                return {
                                                    content: w(e),
                                                    lineNumber: o,
                                                    children: l ? L(l, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "synced_block_reference":
                                            {
                                                let e = `${k}<synced_block_reference url="${t.originalUrl}">
</synced_block_reference>`;t.citationData && (e += ` [^{{${(0,i(140030).Ts)({id:t.id,recordType:t.citationData.type,url:t.citationData.url,spaceId:t.citationData.spaceId})}}}]`);
                                                let l = E(t);
                                                return {
                                                    content: w(e),
                                                    lineNumber: o,
                                                    children: l ? L(l, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "page":
                                            {
                                                let e = `${k}${(v=t,`<page url="${v.url}"${v.deleted?" deleted":""}${v.color?` color="${v.color}"`:""}>${p({elems:v.text||[]})}</page>`)}`,
                                                    i = E(t);
                                                return {
                                                    content: w(e),
                                                    lineNumber: o,
                                                    children: i ? L(i, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "database":
                                            {
                                                let e = `${k}${function(e){let t=[];return e.url&&t.push(`url="${e.url}"`),t.push(`inline="${!0===e.inline}"`),e.deleted&&t.push("deleted"),e.icon&&t.push(`icon="${e.icon}"`),e.dataSourceUrl&&t.push(`data-source-url="${e.dataSourceUrl}"`),e.color&&t.push(`color="${e.color}"`),`<database ${t.join(" ")}>${p({elems:e.text||[]})}</database>`}(t)}`,
                                                    i = E(t);
                                                return {
                                                    content: w(e),
                                                    lineNumber: o,
                                                    children: i ? L(i, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "audio":
                                        case "image":
                                        case "video":
                                        case "file":
                                        case "pdf":
                                            {
                                                let e = `${k}${function(e){let t=p({elems:e.text||[]}),i=e.source||"";if("image"===e.type){let n=e.color?` {
                                                    color = "${e.color}"
                                                }
                                                `:"";return`![$ {
                                                    t
                                                }]($ {
                                                    i
                                                }) $ {
                                                    n
                                                }
                                                `}let n=`
                                                src = "${i}"
                                                `,l=e.color?`
                                                color = "${e.color}"
                                                `:"";return` < $ {
                                                    e.type
                                                }
                                                $ {
                                                    n
                                                }
                                                $ {
                                                    l
                                                } > $ {
                                                    t
                                                } < /${e.type}>`}(t)}`;t.citationData&&(e+=` [^{{${(0,i(140030).Ts)({id:t.id,recordType:t.citationData.type,url:t.citationData.url,spaceId:t.citationData.spaceId})}}}]`);let l=E(t);return{content:w(e),lineNumber:o,children:l?L(l,o,n):void 0,id:t.id}}case"mail":{let e=`${k}<mail>`;null!=(y=t.text)&&y.length&&(e+=`
                                                $ {
                                                    k
                                                }
                                                $ {
                                                    D(t.text)
                                                }
                                                `,o+=1),e+=`
                                                $ {
                                                    k
                                                } < /mail>`;let i=E(t);return{content:w(e),lineNumber:o,children:i?L(i,o,n):void 0,id:t.id}}case"transcription":{let e=t.attendeeIds&&t.attendeeIds.length>0?` attendees="${t.attendeeIds.map(e=>`user:/ / $ {
                                                    e
                                                }
                                                `).join(",")}"`: "",
                                                l = u && t.url ? ` readOnlyViewMeetingNoteUrl="${t.url}"` : "",
                                                r = `${k}<meeting-notes${e}${l}>`;t.citationData && (r += ` [^{{${(0,i(140030).Ts)({id:t.id,recordType:t.citationData.type,url:t.citationData.url,spaceId:t.citationData.spaceId})}}}]`);
                                                let a = o;null != (b = t.text) && b.length && (r += `
${k}	${D(t.text)}`, o += 1),
                                                r += `
</meeting-notes>`;
                                                let d = t.summary ? E(t.summary) : void 0,
                                                    c = t.transcript ? E(t.transcript) : void 0,
                                                    s = t.notes ? E(t.notes) : void 0,
                                                    p = [],
                                                    f = o + 1;
                                                if (t.summary && d) {
                                                    let e = {
                                                        id: t.summary.id,
                                                        content: `${k}	<summary>
</summary>`,
                                                        lineNumber: f,
                                                        children: L(d, f, n + 1)
                                                    };
                                                    p.push(e), f += C(e)
                                                }
                                                if (t.notes) {
                                                    let e = {
                                                        id: t.notes.id,
                                                        content: `${k}	<notes>
</notes>`,
                                                        lineNumber: f,
                                                        children: s && s.length > 0 ? L(s, f, n + 1) : void 0
                                                    };
                                                    p.push(e), f += C(e)
                                                }
                                                if (t.transcript && c)
                                                    if (u) {
                                                        let e, i = {
                                                            id: t.transcript.id,
                                                            content: `${k}	<transcript>
${k}		${(e=(_=t.url)?` (${_})`:"",`Transcript omitted. Use the view tool with the meeting note url${e} to view this transcript.`)}
${k}	</transcript>`,
                                                            lineNumber: f,
                                                            children: void 0
                                                        };
                                                        p.push(i), f += C(i)
                                                    } else {
                                                        let e = {
                                                            id: t.transcript.id,
                                                            content: `${k}	<transcript>
</transcript>`,
                                                            lineNumber: f,
                                                            children: L(c, f, n + 1)
                                                        };
                                                        p.push(e), f += C(e)
                                                    }
                                                return {
                                                    content: w(r),
                                                    lineNumber: a,
                                                    children: p,
                                                    id: t.id
                                                }
                                            }
                                        case "table_of_contents":
                                            {
                                                let e = `${k}<table_of_contents${t.color?` color="${t.color}"`:""}/>`,
                                                    i = E(t);
                                                return {
                                                    content: w(e),
                                                    lineNumber: o,
                                                    children: i ? L(i, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        case "unknown":
                                            {
                                                if (r) return {
                                                    content: w(""),
                                                    lineNumber: o,
                                                    children: void 0,
                                                    id: t.id
                                                };
                                                let e = `${k}<unknown url="${t.url}"${t.alt?` alt="${t.alt}"`:""}/>`,
                                                    i = E(t);
                                                return {
                                                    content: w(e),
                                                    lineNumber: o,
                                                    children: i ? L(i, o, n) : void 0,
                                                    id: t.id
                                                }
                                            }
                                        default:
                                            let N = E(t);
                                            return {
                                                content: w(`${k}/* unsupported ${t.type} */`),
                                                lineNumber: o,
                                                children: N ? L(N, o, n) : void 0,
                                                id: t.id
                                            }
                                    }
                                }(y, 0, "numbered_list" === y.type && $ ? f : 0, m, n, l, o, r, s);
                            m += _.content.split("\n").length, _.children && (m += g(_)), u.push(_), "numbered_list" !== y.type ? f = 0 : f++
                        }
                        return u
                    }(e, {
                        omitUnknownBlocks: t,
                        skipTranscriptionTranscript: n,
                        selectedBlockIds: l,
                        textSelection: o,
                        textSelections: r
                    }),
                    u = new Map;
                for (let e of s) {
                    let t = function(e) {
                        let t = [];
                        for (let i of e) ! function e(i, n = 0) {
                            let l;
                            if (i) {
                                if (i.content)
                                    if (l = function(e) {
                                            let t = e.content.trim();
                                            if (t.startsWith("```")) return;
                                            if (t.startsWith(":::")) return "fenced-div";
                                            let i = t.replace(/`[^`]*`/g, "");
                                            if (i.includes("<synced_block_reference")) return "synced_block_reference";
                                            if (i.includes("<synced_block")) return "synced_block";
                                            if (i.includes("<callout")) return "callout";
                                            if (i.includes("<meeting-notes")) return "meeting-notes";
                                            if (i.includes("<tabs")) return "tabs";
                                            else if (i.includes("<columns")) return "columns";
                                            else if (i.includes("<column")) return "column";
                                            else if (i.includes("<details")) return "details";
                                            else if (i.includes("<summary")) return "summary";
                                            else if (i.includes("<notes")) return "notes";
                                            else if (i.includes("<transcript")) return "transcript";
                                            else if (i.includes("<table>") || i.includes("<table ")) return "table";
                                            else if (i.includes("<tr")) return "tr";
                                            else if (/<tab(\s|>)/.test(i)) return "tab"
                                        }(i)) {
                                        let e = i.content.split("\n"),
                                            n = e[0];
                                        if (t.push(n), e.length > 2)
                                            for (let i = 1; i < e.length - 1; i++) t.push(e[i]);
                                        if ("tr" === l && "cells" in i && i.cells)
                                            for (let e of i.cells) t.push(e.content)
                                    } else t.push(i.content);
                                if (i.children && i.children.length > 0)
                                    for (let t of i.children) e(t, n + 1);
                                if (l) {
                                    var o, r;
                                    let e = "	".repeat(n);
                                    t.push((o = l, r = e, "fenced-div" === o ? `${r}:::` : `${"tr"===o?"":r}</${o}>`))
                                }
                            }
                        }(i);
                        return t.join("\n")
                    }([e]);
                    u.set(e.id, t)
                }
                return s.map(e => {
                    let t = u.get(e.id) || "";
                    return {
                        id: e.id,
                        content: t
                    }
                })
            }

            function h(e) {
                return e ? ` {color="${e}"}` : ""
            }
        },
        745213: (e, t, i) => {
            i.d(t, {
                _5: () => f
            }), i(16280), i(944114), i(898992), i(354520), i(430670), i(581454), i(737550);
            var n = () => i(722371),
                l = () => i(993189),
                o = () => i(682956),
                r = () => i(247438),
                a = () => i(857636),
                d = () => i(140030),
                c = () => i(514214),
                s = () => i(43296);

            function u(e) {
                let {
                    title: t,
                    baseUrl: u,
                    recordMap: p,
                    parseAnnotationsAsMentions: f = !0,
                    skipUrlNormalization: h = !1,
                    renderPropertyMentionsAsTemplateVars: m = !1
                } = e, g = [], y = e.intl || (0, i(599412).wW)();
                for (let e of (0, r().RQ)(t)) {
                    let t = h ? (0, r().N8A)(e) : (0, d().TE)((0, r().N8A)(e), {
                            baseUrl: u,
                            publicDomainName: ""
                        }),
                        i = (0, r().uPN)(e),
                        $ = function(e) {
                            let t = {};
                            for (let i of e)
                                if ((0, r().dRK)(i)) t.bold = !0;
                                else if ((0, r().WWk)(i)) t.italic = !0;
                            else if ((0, r().EgN)(i)) t.strikethrough = !0;
                            else if ((0, r().cyx)(i)) t.underline = !0;
                            else if ((0, r().rlz)(i)) t.code = !0;
                            else if ((0, r().YuY)(i)) t.color = (0, a().f9)((0, r().uIc)(i));
                            else if ((0, r().sh$)(i)) {
                                let e = (0, r().cQR)(i);
                                e && (t.href = (0, d().TE)(e, {
                                    baseUrl: "",
                                    publicDomainName: ""
                                }))
                            } else if ((0, r().iQL)(i)) {
                                let e = (0, r().Orm)(i),
                                    n = `discussion://${e}`;
                                t.discussionUrls = [...t.discussionUrls ? ? [], n]
                            }
                            return Object.keys(t).length > 0 ? t : void 0
                        }(i);
                    if ((0, r().qXl)(e)) {
                        let e = (0, r().snh)(i);
                        if (e) {
                            let t = (0, r().NcG)(e),
                                i = null == p ? void 0 : p.getModel({
                                    table: c().oo,
                                    id: t
                                }),
                                n = null == i ? void 0 : i.getEmail();
                            g.push({
                                type: "mention",
                                mention: {
                                    type: "user",
                                    url: (0, d().dE)({
                                        userId: t,
                                        email: n
                                    }),
                                    name: null == i ? void 0 : i.getDisplayName(y, !0)
                                },
                                ...$ && {
                                    annotations: $
                                }
                            });
                            continue
                        }
                        let t = (0, r().Sev)(i);
                        if (t) {
                            var b;
                            let e = (0, r().v55)(t);
                            g.push({
                                type: "mention",
                                mention: {
                                    type: "page",
                                    url: (0, d().Q2)({
                                        baseUrl: u,
                                        pageId: e
                                    }),
                                    title: null == p || null == (b = p.getModel({
                                        table: o().ev,
                                        id: e
                                    })) ? void 0 : b.getRenderTitle({
                                        getRecordModel: l().b4_.fromRecordMap(p),
                                        intl: y,
                                        userTimeZone: "UTC"
                                    })
                                },
                                ...$ && {
                                    annotations: $
                                }
                            });
                            continue
                        }
                        let a = (0, r().c_)(i);
                        if (a) {
                            let e = (0, r().vjW)(a),
                                t = null == p ? void 0 : p.getModel({
                                    table: "bot",
                                    id: e
                                }),
                                i = null == t ? void 0 : t.getWorkflowId(),
                                n = null == t ? void 0 : t.getSpaceId();
                            if (i && n) {
                                let e = (0, d().F)({
                                        workflowId: i,
                                        spaceId: n
                                    }),
                                    l = null == p ? void 0 : p.getModel({
                                        table: s().C,
                                        id: i,
                                        spaceId: n
                                    });
                                g.push({
                                    type: "mention",
                                    mention: {
                                        type: "agent",
                                        url: e,
                                        name: (null == l ? void 0 : l.getName()) ? ? (null == t ? void 0 : t.getName())
                                    },
                                    ...$ && {
                                        annotations: $
                                    }
                                });
                                continue
                            }
                        }
                        let f = (0, r().$CJ)(i);
                        if (f) {
                            let e = (0, r().K7D)(f),
                                t = (() => {
                                    switch (e.type) {
                                        case "date":
                                            return {
                                                type: "date",
                                                start: e.start_date
                                            };
                                        case "daterange":
                                            return {
                                                type: "date",
                                                start: e.start_date,
                                                end: e.end_date
                                            };
                                        case "datetime":
                                            return {
                                                type: "date",
                                                start: e.start_date,
                                                startTime: e.start_time,
                                                timeZone: e.time_zone
                                            };
                                        case "datetimerange":
                                            return {
                                                type: "date",
                                                start: e.start_date,
                                                end: e.end_date,
                                                startTime: e.start_time,
                                                endTime: e.end_time,
                                                timeZone: e.time_zone
                                            };
                                        default:
                                            (0, n().HB)(e)
                                    }
                                })();
                            g.push({
                                type: "mention",
                                mention: t,
                                ...$ && {
                                    annotations: $
                                }
                            });
                            continue
                        }
                        let h = (0, r().G6d)(i);
                        if (h && p) {
                            let e = (0, r().qS0)(h);
                            if (e) {
                                let t = p.getModel(e);
                                if (t) {
                                    g.push({
                                        type: "mention",
                                        mention: {
                                            type: "custom_emoji",
                                            name: t.getName()
                                        },
                                        ...$ && {
                                            annotations: $
                                        }
                                    });
                                    continue
                                }
                            }
                        }
                        let _ = (0, r().lqY)(i);
                        if (_) {
                            let e = (0, r().q1R)(_),
                                t = {
                                    type: "annotated",
                                    text: e.title ? ? e.href,
                                    annotations: { ...$ ? ? {},
                                        href : e.href
                                    }
                                };
                            g.push(t);
                            continue
                        }
                        let v = (0, r().MzR)(i);
                        if (v) {
                            let e = (0, r()._tF)(v),
                                t = p.getModel({
                                    table: o().ev,
                                    id: e.id
                                }),
                                i = null == t ? void 0 : t.getFormat().original_url;
                            if (i) {
                                g.push({
                                    type: "annotated",
                                    text: i,
                                    annotations: { ...$ ? ? {},
                                        href : i
                                    }
                                });
                                continue
                            }
                        }
                        let k = (0, r()._Vv)(i);
                        if (k) {
                            let e = (0, r().FLg)(k);
                            if (e) {
                                if ("everyone" === e.mentionType) {
                                    g.push("@everyone");
                                    continue
                                } else if ("teamspace" === e.mentionType) {
                                    if (p) {
                                        let e = (0, r().KGg)(k);
                                        if (e) {
                                            let t = p.getModel(e);
                                            if (t) {
                                                g.push(`@${t.getName()}`);
                                                continue
                                            }
                                        }
                                    }
                                    g.push(`@[Team:${e.teamId}]`);
                                    continue
                                }
                            }
                        }
                        let w = (0, r().g2K)(i);
                        if (w) {
                            let e = (0, r().NpB)(w);
                            g.push({
                                type: "citation",
                                href: e.href,
                                ...$ && {
                                    annotations: $
                                }
                            });
                            continue
                        }
                        let T = (0, r().dHc)(i);
                        if (T) {
                            let e = (0, r().TSJ)(T),
                                t = (0, d().CM)(e.id);
                            g.push({
                                type: "mention",
                                mention: {
                                    type: "data-source",
                                    url: t
                                }
                            });
                            continue
                        }
                        let I = (0, r().TVE)(i);
                        if (I) {
                            let e = (0, r().GCe)(I);
                            if ((0, r().QkK)(e)) {
                                let t = (0, r().MaE)(e);
                                if (t) {
                                    if (m && e.name) {
                                        let t = `{{property:${e.name}}}`;
                                        $ ? g.push({
                                            type: "annotated",
                                            text: t,
                                            annotations: $
                                        }) : g.push(t);
                                        continue
                                    }
                                    let i = (0, d().ne)(t.collectionId, t.propertyId);
                                    g.push({
                                        type: "mention",
                                        mention: {
                                            type: "data-source",
                                            url: i,
                                            title: e.name
                                        },
                                        ...$ && {
                                            annotations: $
                                        }
                                    });
                                    continue
                                }
                            }
                        }
                    } else if ((0, r().GiG)(e)) {
                        let e = (0, r().j1D)(i);
                        if (e) {
                            g.push({
                                type: "equation",
                                equation: (0, r().U35)(e),
                                ...$ && {
                                    annotations: $
                                }
                            });
                            continue
                        }
                        throw Error("Equation token without equation annotation")
                    } else if ($) {
                        let i = (0, r().So_)(e);
                        if (p && i && f) {
                            let e = function(e) {
                                let t, {
                                    url: i,
                                    baseUrl: n,
                                    recordMap: l,
                                    agentAnnotations: r
                                } = e;
                                try {
                                    t = (0, d().Mg)(i, {
                                        baseUrl: n,
                                        publicDomainName: ""
                                    })
                                } catch (e) {
                                    return
                                }
                                if ("pageOrCollectionViewBlock" !== t.type) return;
                                let a = l.getModel({
                                    table: o().ev,
                                    id: t.id
                                });
                                if (!a) return;
                                let c = (0, d().Q2)({
                                    baseUrl: n,
                                    pageId: a.id
                                });
                                return {
                                    type: "mention",
                                    mention: {
                                        type: a.isCollectionView() ? "database" : "page",
                                        url: c
                                    },
                                    ...r && {
                                        annotations: r
                                    }
                                }
                            }({
                                url: i,
                                baseUrl: u,
                                recordMap: p,
                                agentAnnotations: $
                            });
                            if (e) {
                                g.push(e);
                                continue
                            }
                        }
                        g.push({
                            type: "annotated",
                            text: t,
                            annotations: $
                        })
                    } else g.push(t)
                }
                return g.length > 0 ? g : void 0
            }

            function p(e) {
                var t, n, c, s, f;
                let {
                    blockId: h,
                    recordMap: m,
                    spaceId: g,
                    baseUrl: y,
                    pageId: b,
                    intl: $,
                    navigablePageId: _,
                    addCitationData: v = !1,
                    parseAnnotationsAsMentions: k = !0,
                    renderPropertyMentionsAsTemplateVars: w
                } = e, T = m.getModel({
                    table: o().ev,
                    id: h,
                    spaceId: g
                });
                if (!T || !T.getType()) {
                    let e = (0, d().Q2)({
                        baseUrl: y,
                        pageId: b,
                        blockId: h
                    });
                    return {
                        type: "unknown",
                        id: h,
                        url: e
                    }
                }
                let I = (0, i(955630).$I)(T.type),
                    x = I ? (0, d().Q2)({
                        baseUrl: y,
                        pageId: T.id
                    }) : (0, d().Q2)({
                        baseUrl: y,
                        pageId: _ ? ? b,
                        blockId: h
                    }),
                    D = l().b4_.fromRecordMap(m),
                    E = T.getRenderTitleTextValue({
                        getRecordModel: D
                    }),
                    C = u({
                        title: E || [],
                        baseUrl: y,
                        recordMap: m,
                        intl: $,
                        parseAnnotationsAsMentions: k,
                        renderPropertyMentionsAsTemplateVars: w
                    }),
                    L = () => {
                        let e = (T.getContentIds() || []).map(e => p({
                            blockId: e,
                            recordMap: m,
                            spaceId: g,
                            baseUrl: y,
                            pageId: I ? T.id : b,
                            intl: $,
                            navigablePageId: _,
                            addCitationData: v,
                            parseAnnotationsAsMentions: k,
                            renderPropertyMentionsAsTemplateVars: w
                        }));
                        return e.length > 0 ? e : void 0
                    },
                    N = (0, a().f9)(T.getFormat().block_color),
                    A = (0, i(421814).yr)(T);
                if ("unknown" === A) return {
                    type: "unknown",
                    id: h,
                    url: x,
                    alt: T.type,
                    lastEditedAt: T.getLastEditedTime()
                };
                if ("callout" === A) return {
                    type: "callout",
                    id: h,
                    children: L(),
                    text: C,
                    icon: T.getFormat().page_icon,
                    color: N,
                    lastEditedAt: T.getLastEditedTime(),
                    citationData: v ? {
                        url: x,
                        id: h,
                        spaceId: g,
                        type: "block"
                    } : void 0
                };
                if ("database" === A) {
                    let e, n = !C && $ ? [T.getEmptyTitlePlaceholder({
                            getRecordModel: D,
                            intl: $,
                            userTimeZone: (0, i(714350).P)()
                        })] : void 0,
                        l = null == (t = T.getRenderIcon({
                            getRecordModel: D
                        })) ? void 0 : t.icon;
                    if (T.isCollectionView()) {
                        let t = T.DANGEROUSLY_INCORRECT_getCollectionPointer();
                        t && (e = (0, d().CM)(t.id))
                    }
                    let r = !(0, i(688502)._n)({
                        table: o().ev,
                        id: h,
                        spaceId: g
                    }, D) || T.isCollectionView() && T.getCollectionPointers().some(e => !(0, i(688502)._n)(e, D));
                    return {
                        type: "database",
                        id: h,
                        url: x,
                        text: C ? ? n,
                        inline: "collection_view" === T.type,
                        icon: l,
                        color: N,
                        deleted: !!r || void 0,
                        ...e ? {
                            dataSourceUrl: e
                        } : {},
                        lastEditedAt: T.getLastEditedTime()
                    }
                }
                if ("to_do" === A) return {
                    type: "to_do",
                    id: h,
                    text: C,
                    children: L(),
                    checked: i(381453).n4(T.getNonCollectionProperty("checked"), [
                        ["Yes"]
                    ]),
                    color: N,
                    lastEditedAt: T.getLastEditedTime(),
                    citationData: v ? {
                        url: x,
                        id: h,
                        spaceId: g,
                        type: "block"
                    } : void 0
                };
                if ("code" === A) {
                    if (!T.isType("code")) throw Error(`agentBlockType was 'code', but block type was '${T.type}'`);
                    let e = T.getLanguage().name.toLowerCase();
                    return {
                        type: "code",
                        id: h,
                        text: u({
                            title: E || [],
                            baseUrl: y,
                            recordMap: m,
                            intl: $,
                            parseAnnotationsAsMentions: k,
                            skipUrlNormalization: !0
                        }),
                        language: (0, i(656974).Ll)(e) ? i(656974).nD[e] : void 0,
                        lastEditedAt: T.getLastEditedTime()
                    }
                }
                if ("numbered_list" === A) return {
                    type: "numbered_list",
                    id: h,
                    text: C,
                    children: L(),
                    color: N,
                    list_format: T.getFormat().list_format,
                    lastEditedAt: T.getLastEditedTime(),
                    citationData: v ? {
                        url: x,
                        id: h,
                        spaceId: g,
                        type: "block"
                    } : void 0
                };
                else if ("table" === A) return function(e) {
                    let {
                        block: t,
                        recordMap: n,
                        spaceId: r,
                        baseUrl: d
                    } = e;
                    if ("table" !== t.type) throw Error("Only table block can be rendered as agent table block");
                    let c = t.getFormat(),
                        s = c.table_block_column_order || [],
                        p = [],
                        f = i(381453).oE((t.getContentIds() || []).map(e => {
                            let t = n.getModel({
                                table: o().ev,
                                id: e,
                                spaceId: r
                            });
                            if (!t) return void p.push(e);
                            let i = l().b4_.constant(void 0);
                            if ("table_row" !== t.type || !t.getProperties(i)) return;
                            let c = t.getProperties(i),
                                f = t.getFormat(),
                                h = {
                                    type: "table_row",
                                    cells: s.map(e => {
                                        var t;
                                        let i = u({
                                                title: c[e] || [],
                                                baseUrl: d,
                                                recordMap: n
                                            }) || [],
                                            l = null == (t = f.cell_format) || null == (t = t[e]) ? void 0 : t.color,
                                            o = {
                                                text: i
                                            };
                                        return l && (o.color = (0, a().f9)(l)), o
                                    }),
                                    id: e
                                };
                            null != f && f.block_color && (h.color = (0, a().f9)(f.block_color));
                            let m = null == t ? void 0 : t.getLastEditedTime();
                            return void 0 !== m && (h.lastEditedAt = m), h
                        })),
                        h = s.map(e => {
                            var t;
                            let i = null == (t = c.table_block_column_format) ? void 0 : t[e];
                            return {
                                color: null != i && i.color ? (0, a().f9)(i.color) : void 0,
                                width: null == i ? void 0 : i.width
                            }
                        }),
                        m = h.some(e => void 0 !== e.color || void 0 !== e.width);
                    return {
                        type: "table",
                        id: t.id,
                        rows: f,
                        ...m && {
                            columnStyles: h
                        },
                        fitPageWidth: c.block_full_width,
                        headerRow: c.table_block_column_header,
                        headerColumn: c.table_block_row_header,
                        ...p.length > 0 && {
                            unknownRowIds: p
                        }
                    }
                }({
                    block: T,
                    recordMap: m,
                    spaceId: g,
                    baseUrl: y,
                    pageId: b
                });
                else if ("audio" === A || "video" === A || "file" === A || "image" === A || "pdf" === A) {
                    let e, t = (0, r().q4_)(T.getNonCollectionProperty("source"));
                    if (t) {
                        if ((0, i(421814).FS)(t)) e = t;
                        else if (!t.startsWith("data:")) {
                            let l = null == (n = T.getFormat()) ? void 0 : n.copied_from_pointer,
                                r = (null == l ? void 0 : l.table) === i(298085).T ? l : {
                                    table: o().ev,
                                    id: T.id,
                                    spaceId: g
                                };
                            e = (0, d().w8)({
                                source: t,
                                permissionRecord: r
                            })
                        }
                    }
                    return {
                        type: A,
                        id: h,
                        text: u({
                            title: T.getNonCollectionProperty("caption") || [],
                            baseUrl: y,
                            recordMap: m
                        }) ? ? void 0,
                        ...e && {
                            source: e
                        },
                        lastEditedAt: T.getLastEditedTime(),
                        citationData: v ? {
                            url: x,
                            id: h,
                            spaceId: g,
                            type: "block"
                        } : void 0
                    }
                } else if ("h1" === A || "h2" === A || "h3" === A || "h4" === A) return {
                    type: A,
                    id: h,
                    text: C,
                    toggleable: T.getFormat().toggleable || void 0,
                    children: L(),
                    color: N,
                    lastEditedAt: T.getLastEditedTime(),
                    citationData: v ? {
                        url: x,
                        id: h,
                        spaceId: g,
                        type: "block"
                    } : void 0
                };
                else if ("table_row" === A) return {
                    type: "unknown",
                    id: h,
                    url: x
                };
                else if ("synced_block" === A) return {
                    type: "synced_block",
                    id: h,
                    url: x,
                    children: L(),
                    lastEditedAt: T.getLastEditedTime(),
                    citationData: v ? {
                        url: x,
                        id: h,
                        spaceId: g,
                        type: "block"
                    } : void 0
                };
                else if ("synced_block_reference" === A) {
                    let e, t = null == (c = T.getFormat().transclusion_reference_pointer) ? void 0 : c.id,
                        n = x;
                    if (t) {
                        let l = m.getModel({
                                table: o().ev,
                                id: t,
                                spaceId: g
                            }),
                            r = {
                                table: o().ev,
                                id: t,
                                spaceId: g
                            },
                            a = (0, i(688502).Yn)(r, D),
                            c = (0, i(688502).yb)(a),
                            s = (null == c ? void 0 : c.id) ? ? b;
                        n = (0, d().Q2)({
                            baseUrl: y,
                            pageId: s,
                            blockId: t
                        }), l && (e = (e = (l.getContentIds() || []).map(e => p({
                            blockId: e,
                            recordMap: m,
                            spaceId: g,
                            baseUrl: y,
                            pageId: s,
                            intl: $,
                            addCitationData: v
                        }))).length > 0 ? e : void 0)
                    }
                    return {
                        type: "synced_block_reference",
                        id: h,
                        ...e ? {
                            children: e
                        } : {},
                        originalUrl: n,
                        lastEditedAt: T.getLastEditedTime(),
                        ...v ? {
                            citationData: {
                                url: x,
                                id: h,
                                spaceId: g,
                                type: "block"
                            }
                        } : {}
                    }
                } else if ("transcription" === A) {
                    let e = T.getFormat(),
                        t = e.transcription_summary_id,
                        i = e.transcription_notes_id,
                        n = e.transcription_transcript_id,
                        r = null == (s = e.transcription_calendar_event) ? void 0 : s.attendeeIds,
                        a = e => {
                            if (!e) return;
                            let t = m.getModel({
                                    table: o().ev,
                                    id: e,
                                    spaceId: g
                                }),
                                i = (null == t ? void 0 : t.getContentIds()) || [];
                            if (0 !== i.length) return i.map(e => p({
                                blockId: e,
                                recordMap: m,
                                spaceId: g,
                                baseUrl: y,
                                pageId: b,
                                intl: $,
                                addCitationData: v
                            }))
                        },
                        d = t ? a(t) : void 0,
                        c = i ? a(i) : void 0,
                        f = n ? a(n) : void 0,
                        _ = T.getRenderTitleTextValue({
                            getRecordModel: l().b4_.fromRecordMap(m)
                        }),
                        k = null != _ && _.length ? u({
                            title: _,
                            baseUrl: y,
                            recordMap: m
                        }) : void 0;
                    return {
                        type: "transcription",
                        id: h,
                        ...k ? {
                            text: k
                        } : {},
                        summary: t ? {
                            type: "text",
                            id: t,
                            children: d
                        } : void 0,
                        notes: i ? {
                            type: "text",
                            id: i,
                            children: c
                        } : void 0,
                        transcript: n ? {
                            type: "text",
                            id: n,
                            children: f
                        } : void 0,
                        ...r && r.length > 0 ? {
                            attendeeIds: r
                        } : {},
                        url: x,
                        lastEditedAt: T.getLastEditedTime(),
                        citationData: v ? {
                            url: x,
                            id: h,
                            spaceId: g,
                            type: "block"
                        } : void 0
                    }
                } else if ("text" === A) return {
                    type: "text",
                    id: h,
                    text: C,
                    children: L(),
                    color: N,
                    lastEditedAt: T.getLastEditedTime(),
                    citationData: v ? {
                        url: x,
                        id: h,
                        spaceId: g,
                        type: "block"
                    } : void 0
                };
                else if ("bulleted_list" === A) return {
                    type: "bulleted_list",
                    id: h,
                    text: C,
                    children: L(),
                    color: N,
                    lastEditedAt: T.getLastEditedTime(),
                    citationData: v ? {
                        url: x,
                        id: h,
                        spaceId: g,
                        type: "block"
                    } : void 0
                };
                else if ("toggle" === A) return {
                    type: "toggle",
                    id: h,
                    text: C,
                    children: L(),
                    color: N,
                    lastEditedAt: T.getLastEditedTime(),
                    citationData: v ? {
                        url: x,
                        id: h,
                        spaceId: g,
                        type: "block"
                    } : void 0
                };
                else if ("column" === A) return {
                    type: "column",
                    id: h,
                    text: C,
                    children: L(),
                    lastEditedAt: T.getLastEditedTime()
                };
                else if ("column_list" === A) return {
                    type: "column_list",
                    id: h,
                    text: C,
                    children: L(),
                    lastEditedAt: T.getLastEditedTime()
                };
                else if ("tab" === A) return {
                    type: "tab",
                    id: h,
                    children: L(),
                    lastEditedAt: T.getLastEditedTime()
                };
                else if ("quote" === A) return {
                    type: "quote",
                    id: h,
                    text: C,
                    children: L(),
                    color: N,
                    lastEditedAt: T.getLastEditedTime(),
                    citationData: v ? {
                        url: x,
                        id: h,
                        spaceId: g,
                        type: "block"
                    } : void 0
                };
                else if ("page" === A) {
                    let e = !(0, i(688502)._n)({
                        table: o().ev,
                        id: h,
                        spaceId: g
                    }, D);
                    return {
                        type: "page",
                        id: h,
                        url: x,
                        text: C,
                        color: N,
                        deleted: !!e || void 0,
                        lastEditedAt: T.getLastEditedTime()
                    }
                } else {
                    if ("equation" === A) return {
                        type: "equation",
                        id: h,
                        text: u({
                            title: E || [],
                            baseUrl: y,
                            recordMap: m,
                            intl: $,
                            parseAnnotationsAsMentions: k,
                            skipUrlNormalization: !0
                        }),
                        color: N,
                        lastEditedAt: T.getLastEditedTime(),
                        citationData: v ? {
                            url: x,
                            id: h,
                            spaceId: g,
                            type: "block"
                        } : void 0
                    };
                    if ("divider" === A) return {
                        type: "divider",
                        id: h,
                        lastEditedAt: T.getLastEditedTime()
                    };
                    if ("table_of_contents" === A) return {
                        type: "table_of_contents",
                        id: h,
                        color: N,
                        lastEditedAt: T.getLastEditedTime()
                    };
                    if ("mail" !== A) return A;
                    let e = T.getNonCollectionProperty("searchable_text"),
                        t = null == e || null == (f = e[0]) ? void 0 : f[0];
                    return {
                        type: "mail",
                        id: h,
                        text: t ? [t] : C,
                        children: L(),
                        lastEditedAt: T.getLastEditedTime()
                    }
                }
            }

            function f(e) {
                let {
                    pageId: t,
                    recordMap: n,
                    spaceId: l,
                    baseUrl: r,
                    intl: a,
                    navigablePageId: d,
                    addCitationData: c = !1,
                    parseAnnotationsAsMentions: s = !0,
                    includeRootBlock: u = !1,
                    renderPropertyMentionsAsTemplateVars: f
                } = e, h = n.getModel({
                    table: o().ev,
                    id: t,
                    spaceId: l
                });
                if (!h) throw new(i(520026)).xL("Page not found in record map: {pageId}", {
                    variables: {
                        pageId: t
                    }
                });
                let m = {
                    recordMap: n,
                    spaceId: l,
                    baseUrl: r,
                    pageId: h.id,
                    intl: a,
                    navigablePageId: d,
                    addCitationData: c,
                    parseAnnotationsAsMentions: s,
                    renderPropertyMentionsAsTemplateVars: f
                };
                return u ? [p({ ...m,
                    blockId: t
                })] : h.getContentIds().map(e => p({ ...m,
                    blockId: e
                }))
            }
            i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698)
        },
        857636: (e, t, i) => {
            i.d(t, {
                Ah: () => o,
                Er: () => a,
                Fi: () => l,
                f9: () => r
            });
            let n = {
                gray: "gray",
                brown: "brown",
                orange: "orange",
                yellow: "yellow",
                green: "teal",
                blue: "blue",
                purple: "purple",
                pink: "pink",
                red: "red",
                gray_bg: "gray_background",
                brown_bg: "brown_background",
                orange_bg: "orange_background",
                yellow_bg: "yellow_background",
                green_bg: "teal_background",
                blue_bg: "blue_background",
                purple_bg: "purple_background",
                pink_bg: "pink_background",
                red_bg: "red_background"
            };

            function l(e) {
                for (let t of (0, i(722371).objectKeys)(n))
                    if (t === e) return !0;
                return !1
            }

            function o(e) {
                if (e) return n[e]
            }

            function r(e) {
                if (e) {
                    for (let [t, i] of Object.entries(n))
                        if (i === e) return t
                }
            }

            function a(e) {
                return "image" === e.type || "pdf" === e.type || "file" === e.type || "audio" === e.type || "video" === e.type ? (e.type, !0) : (e.type, !1)
            }
        }
    }
]);