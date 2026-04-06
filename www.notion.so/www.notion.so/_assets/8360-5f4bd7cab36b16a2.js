"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [8360], {
        42340: (t, e) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.assign = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (null == t) throw TypeError("Cannot convert undefined or null to object");
                for (var i = Object(t), r = 0; r < e.length; r++) {
                    var o = e[r];
                    if (null != o)
                        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s])
                }
                return i
            }
        },
        74054: function(t, e, n) {
            var i = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(n(42340)),
                o = "<br/>";
            e.QuillDeltaToHtmlConverter = function() {
                function t(t, e) {
                    var n;
                    this.rawDeltaOps = [], this.callbacks = {}, this.options = r.assign({
                        paragraphTag: "p",
                        encodeHtml: !0,
                        classPrefix: "ql",
                        inlineStyles: !1,
                        multiLineBlockquote: !0,
                        multiLineHeader: !0,
                        multiLineCodeblock: !0,
                        multiLineParagraph: !0,
                        multiLineCustomBlock: !0,
                        allowBackgroundClasses: !1,
                        linkTarget: "_blank"
                    }, e, {
                        orderedListTag: "ol",
                        bulletListTag: "ul",
                        listItemTag: "li"
                    }), n = this.options.inlineStyles ? "object" == typeof this.options.inlineStyles ? this.options.inlineStyles : {} : void 0, this.converterOptions = {
                        encodeHtml: this.options.encodeHtml,
                        classPrefix: this.options.classPrefix,
                        inlineStyles: n,
                        listItemTag: this.options.listItemTag,
                        paragraphTag: this.options.paragraphTag,
                        linkRel: this.options.linkRel,
                        linkTarget: this.options.linkTarget,
                        allowBackgroundClasses: this.options.allowBackgroundClasses,
                        customTag: this.options.customTag,
                        customTagAttributes: this.options.customTagAttributes,
                        customCssClasses: this.options.customCssClasses,
                        customCssStyles: this.options.customCssStyles
                    }, this.rawDeltaOps = t
                }
                return t.prototype._getListTag = function(t) {
                    return t.isOrderedList() ? this.options.orderedListTag + "" : t.isBulletList() || t.isCheckedList() || t.isUncheckedList() ? this.options.bulletListTag + "" : ""
                }, t.prototype.getGroupedOps = function() {
                    var t = n(441044).InsertOpsConverter.convert(this.rawDeltaOps, this.options),
                        e = n(864750).Grouper.pairOpsWithTheirBlock(t),
                        i = n(864750).Grouper.groupConsecutiveSameStyleBlocks(e, {
                            blockquotes: !!this.options.multiLineBlockquote,
                            header: !!this.options.multiLineHeader,
                            codeBlocks: !!this.options.multiLineCodeblock,
                            customBlocks: !!this.options.multiLineCustomBlock
                        }),
                        r = n(864750).Grouper.reduceConsecutiveSameStyleBlocksToOne(i);
                    return r = new(n(607296)).TableGrouper().group(r), new(n(944909)).ListNester().nest(r)
                }, t.prototype.convert = function() {
                    var t = this;
                    return this.getGroupedOps().map(function(e) {
                        if (e instanceof n(987949).ListGroup) return t._renderWithCallbacks(n(527056).GroupType.List, e, function() {
                            return t._renderList(e)
                        });
                        if (e instanceof n(987949).TableGroup) return t._renderWithCallbacks(n(527056).GroupType.Table, e, function() {
                            return t._renderTable(e)
                        });
                        if (e instanceof n(987949).BlockGroup) return t._renderWithCallbacks(n(527056).GroupType.Block, e, function() {
                            return t._renderBlock(e.op, e.ops)
                        });
                        if (e instanceof n(987949).BlotBlock) return t._renderCustom(e.op, null);
                        if (e instanceof n(987949).VideoItem) return t._renderWithCallbacks(n(527056).GroupType.Video, e, function() {
                            return new(n(516008)).OpToHtmlConverter(e.op, t.converterOptions).getHtml()
                        });
                        else return t._renderWithCallbacks(n(527056).GroupType.InlineGroup, e, function() {
                            return t._renderInlines(e.ops, !0)
                        })
                    }).join("")
                }, t.prototype._renderWithCallbacks = function(t, e, n) {
                    var i = "",
                        r = this.callbacks.beforeRender_cb;
                    (i = "function" == typeof r ? r.apply(null, [t, e]) : "") || (i = n());
                    var o = this.callbacks.afterRender_cb;
                    return "function" == typeof o ? o.apply(null, [t, i]) : i
                }, t.prototype._renderList = function(t) {
                    var e = this,
                        i = t.items[0];
                    return n(784814).makeStartTag(this._getListTag(i.item.op)) + t.items.map(function(t) {
                        return e._renderListItem(t)
                    }).join("") + n(784814).makeEndTag(this._getListTag(i.item.op))
                }, t.prototype._renderListItem = function(t) {
                    t.item.op.attributes.indent = 0;
                    var e = new(n(516008)).OpToHtmlConverter(t.item.op, this.converterOptions).getHtmlParts(),
                        i = this._renderInlines(t.item.ops, !1);
                    return e.openingTag + i + (t.innerList ? this._renderList(t.innerList) : "") + e.closingTag
                }, t.prototype._renderTable = function(t) {
                    var e = this;
                    return n(784814).makeStartTag("table") + n(784814).makeStartTag("tbody") + t.rows.map(function(t) {
                        return e._renderTableRow(t)
                    }).join("") + n(784814).makeEndTag("tbody") + n(784814).makeEndTag("table")
                }, t.prototype._renderTableRow = function(t) {
                    var e = this;
                    return n(784814).makeStartTag("tr") + t.cells.map(function(t) {
                        return e._renderTableCell(t)
                    }).join("") + n(784814).makeEndTag("tr")
                }, t.prototype._renderTableCell = function(t) {
                    var e = new(n(516008)).OpToHtmlConverter(t.item.op, this.converterOptions).getHtmlParts(),
                        i = this._renderInlines(t.item.ops, !1);
                    return n(784814).makeStartTag("td", {
                        key: "data-row",
                        value: t.item.op.attributes.table
                    }) + e.openingTag + i + e.closingTag + n(784814).makeEndTag("td")
                }, t.prototype._renderBlock = function(t, e) {
                    var i = this,
                        r = new(n(516008)).OpToHtmlConverter(t, this.converterOptions).getHtmlParts();
                    if (t.isCodeBlock()) return r.openingTag + n(784814).encodeHtml(e.map(function(e) {
                        return e.isCustomEmbed() ? i._renderCustom(e, t) : e.insert.value
                    }).join("")) + r.closingTag;
                    var s = e.map(function(e) {
                        return i._renderInline(e, t)
                    }).join("");
                    return r.openingTag + (s || o) + r.closingTag
                }, t.prototype._renderInlines = function(t, e) {
                    var i = this;
                    void 0 === e && (e = !0);
                    var r = t.length - 1,
                        s = t.map(function(t, e) {
                            return e > 0 && e === r && t.isJustNewline() ? "" : i._renderInline(t, null)
                        }).join("");
                    if (!e) return s;
                    var a = n(784814).makeStartTag(this.options.paragraphTag),
                        u = n(784814).makeEndTag(this.options.paragraphTag);
                    return s === o || this.options.multiLineParagraph ? a + s + u : a + s.split(o).map(function(t) {
                        return "" === t ? o : t
                    }).join(u + a) + u
                }, t.prototype._renderInline = function(t, e) {
                    return t.isCustomEmbed() ? this._renderCustom(t, e) : new(n(516008)).OpToHtmlConverter(t, this.converterOptions).getHtml().replace(/\n/g, o)
                }, t.prototype._renderCustom = function(t, e) {
                    var n = this.callbacks.renderCustomOp_cb;
                    return "function" == typeof n ? n.apply(null, [t, e]) : ""
                }, t.prototype.beforeRender = function(t) {
                    "function" == typeof t && (this.callbacks.beforeRender_cb = t)
                }, t.prototype.afterRender = function(t) {
                    "function" == typeof t && (this.callbacks.afterRender_cb = t)
                }, t.prototype.renderCustomWith = function(t) {
                    this.callbacks.renderCustomOp_cb = t
                }, t
            }()
        },
        208360: (t, e, n) => {
            e.Ss = n(74054).QuillDeltaToHtmlConverter, n(516008).OpToHtmlConverter, n(987949).InlineGroup, n(987949).VideoItem, n(987949).BlockGroup, n(987949).ListGroup, n(987949).ListItem, n(987949).BlotBlock, n(713769).DeltaInsertOp, n(733592).InsertDataQuill, n(733592).InsertDataCustom, n(527056).NewLine, n(527056).ListType, n(527056).ScriptType, n(527056).DirectionType, n(527056).AlignType, n(527056).DataType, n(527056).GroupType
        },
        270094: (t, e) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.preferSecond = function(t) {
                return 0 === t.length ? null : t.length >= 2 ? t[1] : t[0]
            }, e.flatten = function t(e) {
                return e.reduce(function(e, n) {
                    return e.concat(Array.isArray(n) ? t(n) : n)
                }, [])
            }, e.find = function(t, e) {
                if (Array.prototype.find) return Array.prototype.find.call(t, e);
                for (var n = 0; n < t.length; n++)
                    if (e(t[n])) return t[n]
            }, e.groupConsecutiveElementsWhile = function(t, e) {
                for (var n, i = [], r = 0; r < t.length; r++) n = t[r], r > 0 && e(n, t[r - 1]) ? i[i.length - 1].push(n) : i.push([n]);
                return i.map(function(t) {
                    return 1 === t.length ? t[0] : t
                })
            }, e.sliceFromReverseWhile = function(t, e, n) {
                for (var i = {
                        elements: [],
                        sliceStartsAt: -1
                    }, r = e; r >= 0 && n(t[r]); r--) i.sliceStartsAt = r, i.elements.unshift(t[r]);
                return i
            }, e.intersperse = function(t, e) {
                return t.reduce(function(n, i, r) {
                    return n.push(i), r < t.length - 1 && n.push(e), n
                }, [])
            }
        },
        392954: (t, e) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.sanitize = function(t) {
                var e = t;
                return (e = e.replace(/^\s*/gm, ""), /^((https?|s?ftp|file|blob|mailto|tel):|#|\/|data:image\/)/.test(e)) ? e : "unsafe:" + e
            }
        },
        441044: (t, e, n) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = () => n(713769),
                r = () => n(668697);
            e.InsertOpsConverter = function() {
                function t() {}
                return t.convert = function(e, o) {
                    if (!Array.isArray(e)) return [];
                    for (var s, a, u = [].concat.apply([], e.map(n(447303).InsertOpDenormalizer.denormalize)), l = [], c = 0; c < u.length; c++) {
                        var p = u[c];
                        p.insert && (s = t.convertInsertVal(p.insert, o)) && (a = r().OpAttributeSanitizer.sanitize(p.attributes, o), l.push(new(i()).DeltaInsertOp(s, a)))
                    }
                    return l
                }, t.convertInsertVal = function(t, e) {
                    if ("string" == typeof t) return new(n(733592)).InsertDataQuill(n(527056).DataType.Text, t);
                    if (!t || "object" != typeof t) return null;
                    var i = Object.keys(t);
                    return i.length ? n(527056).DataType.Image in t ? new(n(733592)).InsertDataQuill(n(527056).DataType.Image, n(540251).OpLinkSanitizer.sanitize(t[n(527056).DataType.Image] + "", e)) : n(527056).DataType.Video in t ? new(n(733592)).InsertDataQuill(n(527056).DataType.Video, n(540251).OpLinkSanitizer.sanitize(t[n(527056).DataType.Video] + "", e)) : n(527056).DataType.Formula in t ? new(n(733592)).InsertDataQuill(n(527056).DataType.Formula, t[n(527056).DataType.Formula]) : new(n(733592)).InsertDataCustom(i[0], t[i[0]]) : null
                }, t
            }()
        },
        447303: function(t, e, n) {
            var i = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(n(485858)),
                o = i(n(42340));
            e.InsertOpDenormalizer = function() {
                function t() {}
                return t.denormalize = function(t) {
                    if (!t || "object" != typeof t) return [];
                    if ("object" == typeof t.insert || t.insert === n(527056).NewLine) return [t];
                    var e = r.tokenizeWithNewLines(t.insert + "");
                    if (1 === e.length) return [t];
                    var i = o.assign({}, t, {
                        insert: n(527056).NewLine
                    });
                    return e.map(function(e) {
                        return e === n(527056).NewLine ? i : o.assign({}, t, {
                            insert: e
                        })
                    })
                }, t
            }()
        },
        485858: (t, e) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.tokenizeWithNewLines = function(t) {
                if ("\n" === t) return [t];
                var e = t.split("\n");
                if (1 === e.length) return e;
                var n = e.length - 1;
                return e.reduce(function(t, e, i) {
                    return i !== n ? "" !== e ? t = t.concat(e, "\n") : t.push("\n") : "" !== e && t.push(e), t
                }, [])
            }
        },
        516008: function(t, e, n) {
            var i = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = () => n(784814),
                o = i(n(42340)),
                s = i(n(270094)),
                a = {
                    serif: "font-family: Georgia, Times New Roman, serif",
                    monospace: "font-family: Monaco, Courier New, monospace"
                };
            e.DEFAULT_INLINE_STYLES = {
                font: function(t) {
                    return a[t] || "font-family:" + t
                },
                size: {
                    small: "font-size: 0.75em",
                    large: "font-size: 1.5em",
                    huge: "font-size: 2.5em"
                },
                indent: function(t, e) {
                    var n = 3 * parseInt(t, 10);
                    return "padding-" + ("rtl" === e.attributes.direction ? "right" : "left") + ":" + n + "em"
                },
                direction: function(t, e) {
                    return "rtl" === t ? "direction:rtl" + (e.attributes.align ? "" : "; text-align:inherit") : void 0
                }
            };
            var u = function() {
                function t(t, e) {
                    this.op = t, this.options = o.assign({}, {
                        classPrefix: "ql",
                        inlineStyles: void 0,
                        encodeHtml: !0,
                        listItemTag: "li",
                        paragraphTag: "p"
                    }, e)
                }
                return t.prototype.prefixClass = function(t) {
                    return this.options.classPrefix ? this.options.classPrefix + "-" + t : t + ""
                }, t.prototype.getHtml = function() {
                    var t = this.getHtmlParts();
                    return t.openingTag + t.content + t.closingTag
                }, t.prototype.getHtmlParts = function() {
                    var t = this;
                    if (this.op.isJustNewline() && !this.op.isContainerBlock()) return {
                        openingTag: "",
                        closingTag: "",
                        content: n(527056).NewLine
                    };
                    var e = this.getTags(),
                        i = this.getTagAttributes();
                    !e.length && i.length && e.push("span");
                    for (var o = [], s = [], a = function(e) {
                            return "img" === e && !!t.op.attributes.link
                        }, u = 0; u < e.length; u++) {
                        var l = e[u];
                        a(l) && o.push(r().makeStartTag("a", this.getLinkAttrs())), o.push(r().makeStartTag(l, i)), s.push("img" === l ? "" : r().makeEndTag(l)), a(l) && s.push(r().makeEndTag("a")), i = []
                    }
                    return s.reverse(), {
                        openingTag: o.join(""),
                        content: this.getContent(),
                        closingTag: s.join("")
                    }
                }, t.prototype.getContent = function() {
                    if (this.op.isContainerBlock()) return "";
                    if (this.op.isMentions()) return this.op.insert.value;
                    var t = this.op.isFormula() || this.op.isText() ? this.op.insert.value : "";
                    return this.options.encodeHtml && r().encodeHtml(t) || t
                }, t.prototype.getCssClasses = function() {
                    var t = this.op.attributes;
                    if (this.options.inlineStyles) return [];
                    var e = ["indent", "align", "direction", "font", "size"];
                    return this.options.allowBackgroundClasses && e.push("background"), (this.getCustomCssClasses() || []).concat(e.filter(function(e) {
                        return !!t[e]
                    }).filter(function(e) {
                        return "background" !== e || n(668697).OpAttributeSanitizer.IsValidColorLiteral(t[e])
                    }).map(function(e) {
                        return e + "-" + t[e]
                    }).concat(this.op.isFormula() ? "formula" : []).concat(this.op.isVideo() ? "video" : []).concat(this.op.isImage() ? "image" : []).map(this.prefixClass.bind(this)))
                }, t.prototype.getCssStyles = function() {
                    var t = this,
                        n = this.op.attributes,
                        i = [
                            ["color"]
                        ];
                    return (this.options.inlineStyles || !this.options.allowBackgroundClasses) && i.push(["background", "background-color"]), this.options.inlineStyles && (i = i.concat([
                        ["indent"],
                        ["align", "text-align"],
                        ["direction"],
                        ["font", "font-family"],
                        ["size"]
                    ])), (this.getCustomCssStyles() || []).concat(i.filter(function(t) {
                        return !!n[t[0]]
                    }).map(function(i) {
                        var r = i[0],
                            o = n[r],
                            a = t.options.inlineStyles && t.options.inlineStyles[r] || e.DEFAULT_INLINE_STYLES[r];
                        return "object" == typeof a ? a[o] : "function" == typeof a ? a(o, t.op) : s.preferSecond(i) + ":" + o
                    })).filter(function(t) {
                        return void 0 !== t
                    })
                }, t.prototype.getTagAttributes = function() {
                    if (this.op.attributes.code && !this.op.isLink()) return [];
                    var t = this.makeAttr.bind(this),
                        e = this.getCustomTagAttributes(),
                        n = e ? Object.keys(this.getCustomTagAttributes()).map(function(n) {
                            return t(n, e[n])
                        }) : [],
                        i = this.getCssClasses(),
                        r = i.length ? n.concat([t("class", i.join(" "))]) : n;
                    if (this.op.isImage()) return this.op.attributes.width && (r = r.concat(t("width", this.op.attributes.width))), r.concat(t("src", this.op.insert.value));
                    if (this.op.isACheckList()) return r.concat(t("data-checked", this.op.isCheckedList() ? "true" : "false"));
                    if (this.op.isFormula()) return r;
                    if (this.op.isVideo()) return r.concat(t("frameborder", "0"), t("allowfullscreen", "true"), t("src", this.op.insert.value));
                    if (this.op.isMentions()) {
                        var o = this.op.attributes.mention;
                        return o.class && (r = r.concat(t("class", o.class))), r = o["end-point"] && o.slug ? r.concat(t("href", o["end-point"] + "/" + o.slug)) : r.concat(t("href", "about:blank")), o.target && (r = r.concat(t("target", o.target))), r
                    }
                    var s = this.getCssStyles();
                    return (s.length && r.push(t("style", s.join(";"))), this.op.isCodeBlock() && "string" == typeof this.op.attributes["code-block"]) ? r.concat(t("data-language", this.op.attributes["code-block"])) : (this.op.isContainerBlock() || this.op.isLink() && (r = r.concat(this.getLinkAttrs())), r)
                }, t.prototype.makeAttr = function(t, e) {
                    return {
                        key: t,
                        value: e
                    }
                }, t.prototype.getLinkAttrs = function() {
                    var t = n(668697).OpAttributeSanitizer.isValidTarget(this.options.linkTarget || "") ? this.options.linkTarget : void 0,
                        e = n(668697).OpAttributeSanitizer.IsValidRel(this.options.linkRel || "") ? this.options.linkRel : void 0,
                        i = this.op.attributes.target || t,
                        r = this.op.attributes.rel || e;
                    return [].concat(this.makeAttr("href", this.op.attributes.link)).concat(i ? this.makeAttr("target", i) : []).concat(r ? this.makeAttr("rel", r) : [])
                }, t.prototype.getCustomTag = function(t) {
                    if (this.options.customTag && "function" == typeof this.options.customTag) return this.options.customTag.apply(null, [t, this.op])
                }, t.prototype.getCustomTagAttributes = function() {
                    if (this.options.customTagAttributes && "function" == typeof this.options.customTagAttributes) return this.options.customTagAttributes.apply(null, [this.op])
                }, t.prototype.getCustomCssClasses = function() {
                    if (this.options.customCssClasses && "function" == typeof this.options.customCssClasses) {
                        var t = this.options.customCssClasses.apply(null, [this.op]);
                        if (t) return Array.isArray(t) ? t : [t]
                    }
                }, t.prototype.getCustomCssStyles = function() {
                    if (this.options.customCssStyles && "function" == typeof this.options.customCssStyles) {
                        var t = this.options.customCssStyles.apply(null, [this.op]);
                        if (t) return Array.isArray(t) ? t : [t]
                    }
                }, t.prototype.getTags = function() {
                    var t = this,
                        e = this.op.attributes;
                    if (!this.op.isText()) return [this.op.isVideo() ? "iframe" : this.op.isImage() ? "img" : "span"];
                    for (var i = this.options.paragraphTag || "p", r = [
                            ["blockquote"],
                            ["code-block", "pre"],
                            ["list", this.options.listItemTag],
                            ["header"],
                            ["align", i],
                            ["direction", i],
                            ["indent", i]
                        ], o = 0; o < r.length; o++) {
                        var a = r[o],
                            u = a[0];
                        if (e[u]) {
                            var l = this.getCustomTag(u);
                            return l ? [l] : "header" === u ? ["h" + e[u]] : [s.preferSecond(a)]
                        }
                    }
                    if (this.op.isCustomTextBlock()) {
                        var l = this.getCustomTag("renderAsBlock");
                        return l ? [l] : [i]
                    }
                    var c = Object.keys(e).reduce(function(e, n) {
                            var i = t.getCustomTag(n);
                            return i && (e[n] = i), e
                        }, {}),
                        p = [
                            ["link", "a"],
                            ["mentions", "a"],
                            ["script"],
                            ["bold", "strong"],
                            ["italic", "em"],
                            ["strike", "s"],
                            ["underline", "u"],
                            ["code"]
                        ];
                    return p.filter(function(t) {
                        return !!e[t[0]]
                    }).concat(Object.keys(c).filter(function(t) {
                        return !p.some(function(e) {
                            return e[0] == t
                        })
                    }).map(function(t) {
                        return [t, c[t]]
                    })).map(function(t) {
                        return c[t[0]] ? c[t[0]] : "script" === t[0] ? e[t[0]] === n(527056).ScriptType.Sub ? "sub" : "sup" : s.preferSecond(t)
                    })
                }, t
            }();
            e.OpToHtmlConverter = u
        },
        527056: (t, e) => {
            var n, i, r, o, s, a, u, l, c, p, f;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.NewLine = "\n", (u = n || (n = {})).Ordered = "ordered", u.Bullet = "bullet", u.Checked = "checked", u.Unchecked = "unchecked", e.ListType = n, (l = i || (i = {})).Sub = "sub", l.Super = "super", e.ScriptType = i, (r || (r = {})).Rtl = "rtl", e.DirectionType = r, (c = o || (o = {})).Left = "left", c.Center = "center", c.Right = "right", c.Justify = "justify", e.AlignType = o, (p = s || (s = {})).Image = "image", p.Video = "video", p.Formula = "formula", p.Text = "text", e.DataType = s, (f = a || (a = {})).Block = "block", f.InlineGroup = "inline-group", f.List = "list", f.Video = "video", f.Table = "table", e.GroupType = a
        },
        540251: function(t, e, n) {
            var i = this && this.__importStar || function(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(n(392954));
            e.OpLinkSanitizer = function() {
                function t() {}
                return t.sanitize = function(t, e) {
                    var i = function() {};
                    e && "function" == typeof e.urlSanitizer && (i = e.urlSanitizer);
                    var o = i(t);
                    return "string" == typeof o ? o : n(784814).encodeLink(r.sanitize(t))
                }, t
            }()
        },
        607296: (t, e, n) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.TableGrouper = function() {
                function t() {}
                return t.prototype.group = function(t) {
                    return this.convertTableBlocksToTableGroups(t)
                }, t.prototype.convertTableBlocksToTableGroups = function(t) {
                    var e = this;
                    return n(270094).groupConsecutiveElementsWhile(t, function(t, e) {
                        return t instanceof n(987949).BlockGroup && e instanceof n(987949).BlockGroup && t.op.isTable() && e.op.isTable()
                    }).map(function(t) {
                        return Array.isArray(t) ? new(n(987949)).TableGroup(e.convertTableBlocksToTableRows(t)) : t instanceof n(987949).BlockGroup && t.op.isTable() ? new(n(987949)).TableGroup([new(n(987949)).TableRow([new(n(987949)).TableCell(t)])]) : t
                    })
                }, t.prototype.convertTableBlocksToTableRows = function(t) {
                    return n(270094).groupConsecutiveElementsWhile(t, function(t, e) {
                        return t instanceof n(987949).BlockGroup && e instanceof n(987949).BlockGroup && t.op.isTable() && e.op.isTable() && t.op.isSameTableRowAs(e.op)
                    }).map(function(t) {
                        return new(n(987949)).TableRow(Array.isArray(t) ? t.map(function(t) {
                            return new(n(987949)).TableCell(t)
                        }) : [new(n(987949)).TableCell(t)])
                    })
                }, t
            }()
        },
        668697: (t, e, n) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.OpAttributeSanitizer = function() {
                function t() {}
                return t.sanitize = function(e, i) {
                    var r = {};
                    if (!e || "object" != typeof e) return r;
                    var o = ["bold", "italic", "underline", "strike", "code", "blockquote", "code-block", "renderAsBlock"],
                        s = ["background", "color"],
                        a = e.font,
                        u = e.size,
                        l = e.link,
                        c = e.script,
                        p = e.list,
                        f = e.header,
                        h = e.align,
                        d = e.direction,
                        m = e.indent,
                        g = e.mentions,
                        y = e.mention,
                        b = e.width,
                        k = e.target,
                        T = e.rel,
                        v = e["code-block"],
                        C = o.concat(s, ["font", "size", "link", "script", "list", "header", "align", "direction", "indent", "mentions", "mention", "width", "target", "rel", "code-block"]);
                    return o.forEach(function(t) {
                        var n = e[t];
                        n && (r[t] = !!n)
                    }), s.forEach(function(n) {
                        var i = e[n];
                        i && (t.IsValidHexColor(i + "") || t.IsValidColorLiteral(i + "") || t.IsValidRGBColor(i + "")) && (r[n] = i)
                    }), a && t.IsValidFontName(a + "") && (r.font = a), u && t.IsValidSize(u + "") && (r.size = u), b && t.IsValidWidth(b + "") && (r.width = b), l && (r.link = n(540251).OpLinkSanitizer.sanitize(l + "", i)), k && t.isValidTarget(k) && (r.target = k), T && t.IsValidRel(T) && (r.rel = T), v && (t.IsValidLang(v) ? r["code-block"] = v : r["code-block"] = !!v), (c === n(527056).ScriptType.Sub || n(527056).ScriptType.Super === c) && (r.script = c), (p === n(527056).ListType.Bullet || p === n(527056).ListType.Ordered || p === n(527056).ListType.Checked || p === n(527056).ListType.Unchecked) && (r.list = p), Number(f) && (r.header = Math.min(Number(f), 6)), n(270094).find([n(527056).AlignType.Center, n(527056).AlignType.Right, n(527056).AlignType.Justify, n(527056).AlignType.Left], function(t) {
                        return t === h
                    }) && (r.align = h), d === n(527056).DirectionType.Rtl && (r.direction = d), m && Number(m) && (r.indent = Math.min(Number(m), 30)), g && y && Object.keys(n(719188).MentionSanitizer.sanitize(y, i)).length > 0 && (r.mentions = !!g, r.mention = y), Object.keys(e).reduce(function(t, n) {
                        return -1 === C.indexOf(n) && (t[n] = e[n]), t
                    }, r)
                }, t.IsValidHexColor = function(t) {
                    return !!t.match(/^#([0-9A-F]{6}|[0-9A-F]{3})$/i)
                }, t.IsValidColorLiteral = function(t) {
                    return !!t.match(/^[a-z]{1,50}$/i)
                }, t.IsValidRGBColor = function(t) {
                    return !!t.match(/^rgb\(((0|25[0-5]|2[0-4]\d|1\d\d|0?\d?\d),\s*){2}(0|25[0-5]|2[0-4]\d|1\d\d|0?\d?\d)\)$/i)
                }, t.IsValidFontName = function(t) {
                    return !!t.match(/^[a-z\s0-9\- ]{1,30}$/i)
                }, t.IsValidSize = function(t) {
                    return !!t.match(/^[a-z0-9\-]{1,20}$/i)
                }, t.IsValidWidth = function(t) {
                    return !!t.match(/^[0-9]*(px|em|%)?$/)
                }, t.isValidTarget = function(t) {
                    return !!t.match(/^[_a-zA-Z0-9\-]{1,50}$/)
                }, t.IsValidRel = function(t) {
                    return !!t.match(/^[a-zA-Z\s\-]{1,250}$/i)
                }, t.IsValidLang = function(t) {
                    return "boolean" == typeof t || !!t.match(/^[a-zA-Z\s\-\\\/\+]{1,50}$/i)
                }, t
            }()
        },
        713769: function(t, e, n) {
            var i = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(n(908142));
            e.DeltaInsertOp = function() {
                function t(t, e) {
                    "string" == typeof t && (t = new(n(733592)).InsertDataQuill(n(527056).DataType.Text, t + "")), this.insert = t, this.attributes = e || {}
                }
                return t.createNewLineOp = function() {
                    return new t(n(527056).NewLine)
                }, t.prototype.isContainerBlock = function() {
                    return this.isBlockquote() || this.isList() || this.isTable() || this.isCodeBlock() || this.isHeader() || this.isBlockAttribute() || this.isCustomTextBlock()
                }, t.prototype.isBlockAttribute = function() {
                    var t = this.attributes;
                    return !!(t.align || t.direction || t.indent)
                }, t.prototype.isBlockquote = function() {
                    return !!this.attributes.blockquote
                }, t.prototype.isHeader = function() {
                    return !!this.attributes.header
                }, t.prototype.isTable = function() {
                    return !!this.attributes.table
                }, t.prototype.isSameHeaderAs = function(t) {
                    return t.attributes.header === this.attributes.header && this.isHeader()
                }, t.prototype.hasSameAdiAs = function(t) {
                    return this.attributes.align === t.attributes.align && this.attributes.direction === t.attributes.direction && this.attributes.indent === t.attributes.indent
                }, t.prototype.hasSameIndentationAs = function(t) {
                    return this.attributes.indent === t.attributes.indent
                }, t.prototype.hasSameAttr = function(t) {
                    return r.default(this.attributes, t.attributes)
                }, t.prototype.hasHigherIndentThan = function(t) {
                    return (Number(this.attributes.indent) || 0) > (Number(t.attributes.indent) || 0)
                }, t.prototype.isInline = function() {
                    return !(this.isContainerBlock() || this.isVideo() || this.isCustomEmbedBlock())
                }, t.prototype.isCodeBlock = function() {
                    return !!this.attributes["code-block"]
                }, t.prototype.hasSameLangAs = function(t) {
                    return this.attributes["code-block"] === t.attributes["code-block"]
                }, t.prototype.isJustNewline = function() {
                    return this.insert.value === n(527056).NewLine
                }, t.prototype.isList = function() {
                    return this.isOrderedList() || this.isBulletList() || this.isCheckedList() || this.isUncheckedList()
                }, t.prototype.isOrderedList = function() {
                    return this.attributes.list === n(527056).ListType.Ordered
                }, t.prototype.isBulletList = function() {
                    return this.attributes.list === n(527056).ListType.Bullet
                }, t.prototype.isCheckedList = function() {
                    return this.attributes.list === n(527056).ListType.Checked
                }, t.prototype.isUncheckedList = function() {
                    return this.attributes.list === n(527056).ListType.Unchecked
                }, t.prototype.isACheckList = function() {
                    return this.attributes.list == n(527056).ListType.Unchecked || this.attributes.list === n(527056).ListType.Checked
                }, t.prototype.isSameListAs = function(t) {
                    return !!t.attributes.list && (this.attributes.list === t.attributes.list || t.isACheckList() && this.isACheckList())
                }, t.prototype.isSameTableRowAs = function(t) {
                    return !!t.isTable() && this.isTable() && this.attributes.table === t.attributes.table
                }, t.prototype.isText = function() {
                    return this.insert.type === n(527056).DataType.Text
                }, t.prototype.isImage = function() {
                    return this.insert.type === n(527056).DataType.Image
                }, t.prototype.isFormula = function() {
                    return this.insert.type === n(527056).DataType.Formula
                }, t.prototype.isVideo = function() {
                    return this.insert.type === n(527056).DataType.Video
                }, t.prototype.isLink = function() {
                    return this.isText() && !!this.attributes.link
                }, t.prototype.isCustomEmbed = function() {
                    return this.insert instanceof n(733592).InsertDataCustom
                }, t.prototype.isCustomEmbedBlock = function() {
                    return this.isCustomEmbed() && !!this.attributes.renderAsBlock
                }, t.prototype.isCustomTextBlock = function() {
                    return this.isText() && !!this.attributes.renderAsBlock
                }, t.prototype.isMentions = function() {
                    return this.isText() && !!this.attributes.mentions
                }, t
            }()
        },
        719188: (t, e, n) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MentionSanitizer = function() {
                function t() {}
                return t.sanitize = function(e, i) {
                    var r = {};
                    return e && "object" == typeof e && (e.class && t.IsValidClass(e.class) && (r.class = e.class), e.id && t.IsValidId(e.id) && (r.id = e.id), t.IsValidTarget(e.target + "") && (r.target = e.target), e.avatar && (r.avatar = n(540251).OpLinkSanitizer.sanitize(e.avatar + "", i)), e["end-point"] && (r["end-point"] = n(540251).OpLinkSanitizer.sanitize(e["end-point"] + "", i)), e.slug && (r.slug = e.slug + "")), r
                }, t.IsValidClass = function(t) {
                    return !!t.match(/^[a-zA-Z0-9_\-]{1,500}$/i)
                }, t.IsValidId = function(t) {
                    return !!t.match(/^[a-zA-Z0-9_\-\:\.]{1,500}$/i)
                }, t.IsValidTarget = function(t) {
                    return ["_self", "_blank", "_parent", "_top"].indexOf(t) > -1
                }, t
            }()
        },
        733592: (t, e) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.InsertDataQuill = function(t, e) {
                this.type = t, this.value = e
            }, e.InsertDataCustom = function(t, e) {
                this.type = t, this.value = e
            }
        },
        784814: (t, e) => {
            var n, i;

            function r(t) {
                return o(n.Html).reduce(a, t)
            }

            function o(t) {
                var e = [
                    ["&", "&amp;"],
                    ["<", "&lt;"],
                    [">", "&gt;"],
                    ['"', "&quot;"],
                    ["'", "&#x27;"],
                    ["\\/", "&#x2F;"],
                    ["\\(", "&#40;"],
                    ["\\)", "&#41;"]
                ];
                return t === n.Html ? e.filter(function(t) {
                    var e = t[0];
                    return t[1], -1 === e.indexOf("(") && -1 === e.indexOf(")")
                }) : e.filter(function(t) {
                    var e = t[0];
                    return t[1], -1 === e.indexOf("/")
                })
            }

            function s(t, e) {
                return t.replace(RegExp(e[0], "g"), e[1])
            }

            function a(t, e) {
                return t.replace(RegExp(e[1], "g"), e[0].replace("\\", ""))
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), (i = n || (n = {}))[i.Html = 0] = "Html", i[i.Url = 1] = "Url", e.makeStartTag = function(t, e) {
                if (void 0 === e && (e = void 0), !t) return "";
                var n = "";
                e && (n = [].concat(e).map(function(t) {
                    return t.key + (t.value ? '="' + t.value + '"' : "")
                }).join(" "));
                var i = ">";
                return ("img" === t || "br" === t) && (i = "/>"), n ? "<" + t + " " + n + i : "<" + t + i
            }, e.makeEndTag = function(t) {
                return void 0 === t && (t = ""), t && "</" + t + ">" || ""
            }, e.decodeHtml = r, e.encodeHtml = function(t, e) {
                return void 0 === e && (e = !0), e && (t = r(t)), o(n.Html).reduce(s, t)
            }, e.encodeLink = function(t) {
                var e = o(n.Url),
                    i = e.reduce(a, t);
                return e.reduce(s, i)
            }
        },
        864750: (t, e, n) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = () => n(270094),
                r = () => n(987949);
            e.Grouper = function() {
                function t() {}
                return t.pairOpsWithTheirBlock = function(t) {
                    for (var e, n = [], o = function(t) {
                            return !(t.isJustNewline() || t.isCustomEmbedBlock() || t.isVideo() || t.isContainerBlock())
                        }, s = function(t) {
                            return t.isInline()
                        }, a = t.length - 1, u = a; u >= 0; u--) {
                        var l = t[u];
                        l.isVideo() ? n.push(new(r()).VideoItem(l)) : l.isCustomEmbedBlock() ? n.push(new(r()).BlotBlock(l)) : (l.isContainerBlock() ? (e = i().sliceFromReverseWhile(t, u - 1, o), n.push(new(r()).BlockGroup(l, e.elements))) : (e = i().sliceFromReverseWhile(t, u - 1, s), n.push(new(r()).InlineGroup(e.elements.concat(l)))), u = e.sliceStartsAt > -1 ? e.sliceStartsAt : u)
                    }
                    return n.reverse(), n
                }, t.groupConsecutiveSameStyleBlocks = function(e, n) {
                    return void 0 === n && (n = {
                        header: !0,
                        codeBlocks: !0,
                        blockquotes: !0,
                        customBlocks: !0
                    }), i().groupConsecutiveElementsWhile(e, function(e, i) {
                        return e instanceof r().BlockGroup && i instanceof r().BlockGroup && (n.codeBlocks && t.areBothCodeblocksWithSameLang(e, i) || n.blockquotes && t.areBothBlockquotesWithSameAdi(e, i) || n.header && t.areBothSameHeadersWithSameAdi(e, i) || n.customBlocks && t.areBothCustomBlockWithSameAttr(e, i))
                    })
                }, t.reduceConsecutiveSameStyleBlocksToOne = function(t) {
                    var e = n(713769).DeltaInsertOp.createNewLineOp();
                    return t.map(function(t) {
                        if (!Array.isArray(t)) return t instanceof r().BlockGroup && !t.ops.length && t.ops.push(e), t;
                        var n = t.length - 1;
                        return t[0].ops = i().flatten(t.map(function(t, i) {
                            return t.ops.length ? t.ops.concat(i < n ? [e] : []) : [e]
                        })), t[0]
                    })
                }, t.areBothCodeblocksWithSameLang = function(t, e) {
                    return t.op.isCodeBlock() && e.op.isCodeBlock() && t.op.hasSameLangAs(e.op)
                }, t.areBothSameHeadersWithSameAdi = function(t, e) {
                    return t.op.isSameHeaderAs(e.op) && t.op.hasSameAdiAs(e.op)
                }, t.areBothBlockquotesWithSameAdi = function(t, e) {
                    return t.op.isBlockquote() && e.op.isBlockquote() && t.op.hasSameAdiAs(e.op)
                }, t.areBothCustomBlockWithSameAttr = function(t, e) {
                    return t.op.isCustomTextBlock() && e.op.isCustomTextBlock() && t.op.hasSameAttr(e.op)
                }, t
            }()
        },
        944909: (t, e, n) => {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.ListNester = function() {
                function t() {}
                return t.prototype.nest = function(t) {
                    var e = this,
                        i = this.convertListBlocksToListGroups(t),
                        r = this.groupConsecutiveListGroups(i),
                        o = n(270094).flatten(r.map(function(t) {
                            return Array.isArray(t) ? e.nestListSection(t) : t
                        }));
                    return n(270094).groupConsecutiveElementsWhile(o, function(t, e) {
                        return !!(t instanceof n(987949).ListGroup && e instanceof n(987949).ListGroup) && t.items[0].item.op.isSameListAs(e.items[0].item.op)
                    }).map(function(t) {
                        if (!Array.isArray(t)) return t;
                        var e = t.map(function(t) {
                            return t.items
                        });
                        return new(n(987949)).ListGroup(n(270094).flatten(e))
                    })
                }, t.prototype.convertListBlocksToListGroups = function(t) {
                    return n(270094).groupConsecutiveElementsWhile(t, function(t, e) {
                        return t instanceof n(987949).BlockGroup && e instanceof n(987949).BlockGroup && t.op.isList() && e.op.isList() && t.op.isSameListAs(e.op) && t.op.hasSameIndentationAs(e.op)
                    }).map(function(t) {
                        return Array.isArray(t) ? new(n(987949)).ListGroup(t.map(function(t) {
                            return new(n(987949)).ListItem(t)
                        })) : t instanceof n(987949).BlockGroup && t.op.isList() ? new(n(987949)).ListGroup([new(n(987949)).ListItem(t)]) : t
                    })
                }, t.prototype.groupConsecutiveListGroups = function(t) {
                    return n(270094).groupConsecutiveElementsWhile(t, function(t, e) {
                        return t instanceof n(987949).ListGroup && e instanceof n(987949).ListGroup
                    })
                }, t.prototype.nestListSection = function(t) {
                    var e = this,
                        n = this.groupByIndent(t);
                    return Object.keys(n).map(Number).sort().reverse().forEach(function(i) {
                        n[i].forEach(function(n) {
                            var i = t.indexOf(n);
                            e.placeUnderParent(n, t.slice(0, i)) && t.splice(i, 1)
                        })
                    }), t
                }, t.prototype.groupByIndent = function(t) {
                    return t.reduce(function(t, e) {
                        var n = e.items[0].item.op.attributes.indent;
                        return n && (t[n] = t[n] || [], t[n].push(e)), t
                    }, {})
                }, t.prototype.placeUnderParent = function(t, e) {
                    for (var n = e.length - 1; n >= 0; n--) {
                        var i = e[n];
                        if (t.items[0].item.op.hasHigherIndentThan(i.items[0].item.op)) {
                            var r = i.items[i.items.length - 1];
                            return r.innerList ? r.innerList.items = r.innerList.items.concat(t.items) : r.innerList = t, !0
                        }
                    }
                    return !1
                }, t
            }()
        },
        987949: function(t, e) {
            var n, i = this && this.__extends || (n = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            });
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.InlineGroup = function(t) {
                this.ops = t
            };
            var r = function(t) {
                this.op = t
            };
            e.VideoItem = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e
            }(r), e.BlotBlock = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e
            }(r), e.BlockGroup = function(t, e) {
                this.op = t, this.ops = e
            }, e.ListGroup = function(t) {
                this.items = t
            }, e.ListItem = function(t, e) {
                void 0 === e && (e = null), this.item = t, this.innerList = e
            }, e.TableGroup = function(t) {
                this.rows = t
            }, e.TableRow = function(t) {
                this.cells = t
            }, e.TableCell = function(t) {
                this.item = t
            }
        }
    }
]);