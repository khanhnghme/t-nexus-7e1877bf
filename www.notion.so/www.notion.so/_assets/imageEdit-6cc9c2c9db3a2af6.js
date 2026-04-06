"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [81074], {
        256606: (e, t, i) => {
            i.d(t, {
                b: () => n,
                oU: () => a
            });
            let a = {
                    "1:1": {
                        width: 1,
                        height: 1
                    },
                    "5:4": {
                        width: 5,
                        height: 4
                    },
                    "4:3": {
                        width: 4,
                        height: 3
                    },
                    "7:5": {
                        width: 7,
                        height: 5
                    },
                    "3:2": {
                        width: 3,
                        height: 2
                    },
                    "5:3": {
                        width: 5,
                        height: 3
                    },
                    "16:9": {
                        width: 16,
                        height: 9
                    }
                },
                n = {
                    crop: {
                        unit: "%",
                        x: 0,
                        y: 0,
                        width: 100,
                        height: 100
                    },
                    mask: "None"
                }
        },
        681212: (e, t, i) => {
            i.r(t), i.d(t, {
                ImageEditModal: () => F,
                imageEditActions: () => a,
                makeAspectCrop: () => u
            });
            var a = {};
            i.r(a), i.d(a, {
                MIN_CROP_SIZE: () => n,
                cropAndUploadImage: () => r,
                uploadCroppedImage: () => h
            }), i(16280);
            let n = 100,
                o = (0, i(109939).YK)({
                    cropError: {
                        id: "imageEditActions.cropError.message",
                        defaultMessage: "Failed to crop image."
                    }
                });
            async function r(e) {
                let {
                    store: t,
                    environment: a,
                    proxiedOriginalUrl: n
                } = e;
                i(836257).A.setStatusDrawing(t.id);
                let r = await s({
                    store: t,
                    proxiedOriginalUrl: n
                });
                i(836257).A.setStatusUploading(t.id, r.toDataURL());
                let d = r.width / r.height,
                    l = i(205999).A.getWidth((0, i(447036).cq)(t)) ? ? i(939438).Xc,
                    c = l / d;
                if (c > i(939438).q3) {
                    let e = c / i(939438).q3;
                    l /= e, c /= e
                }
                return h({
                    canvas: r,
                    store: t,
                    environment: a,
                    newBlockWidth: l,
                    newBlockHeight: c,
                    onUploadComplete: e => i(836257).A.setStatusCompleted(t.id, e),
                    onUploadError: () => {
                        i(836257).A.setStatusError(t.id), i(647095).f1(i(962299).A.formatMessage(o.cropError))
                    }
                })
            }
            async function s(e) {
                let {
                    store: t,
                    proxiedOriginalUrl: a
                } = e, n = document.createElement("canvas"), o = n.getContext("2d");
                if (!o) throw Error("drawEditsToCanvas: missing 2d context");
                let r = i(836257).A.getMetadataByBlockId(t.id);
                if (!r) throw Error("attempted to crop without setting ImageEditStore first");
                let s = function(e) {
                        let t = document.createElement("canvas"),
                            i = t.getContext("2d");
                        if (!i) throw Error("drawInitialCanvas: missing 2d context");
                        let a = Math.min(2e3, e.naturalWidth),
                            n = a / e.naturalWidth,
                            o = e.naturalHeight * n;
                        return t.width = a, t.height = o, i.drawImage(e, 0, 0, a, o), t
                    }(await new Promise((e, t) => {
                        let i = new Image;
                        i.crossOrigin = "anonymous", i.onload = () => e(i), i.onerror = () => {
                            t()
                        }, i.src = a
                    })),
                    {
                        crop: h,
                        mask: d
                    } = r;
                return s = function(e, t) {
                    let i = document.createElement("canvas"),
                        a = i.getContext("2d");
                    if (!a) throw Error("applyCropToCanvas: missing 2d context");
                    let n = e.width * t.x / 100,
                        o = e.height * t.y / 100,
                        r = e.width * t.width / 100,
                        s = e.height * t.height / 100;
                    return i.width = r, i.height = s, a.drawImage(e, -n, -o), i
                }(s, h), "Circle" === d && (s = function(e) {
                    let t = document.createElement("canvas"),
                        i = t.getContext("2d");
                    if (!i) throw Error("applyCircleMaskToCanvas: missing 2d context");
                    return t.width = e.width, t.height = e.height, i.drawImage(e, 0, 0), i.globalCompositeOperation = "destination-in", i.fillStyle = "#000", i.beginPath(), i.arc(.5 * e.width, .5 * e.height, .5 * e.width, 0, 2 * Math.PI), i.fill(), t
                }(s)), n.style.width = `${s.width}px`, n.style.height = `${s.height}px`, n.width = s.width, n.height = s.height, o.drawImage(s, 0, 0, s.width, s.height), n
            }
            async function h(e) {
                let {
                    environment: t,
                    canvas: a,
                    store: n,
                    newBlockWidth: o,
                    newBlockHeight: r
                } = e, s = "image/png", h = new File([await new Promise((e, t) => {
                    a.toBlob(i => {
                        i ? e(i) : t()
                    }, s, 1)
                })], `${i(92513).JW()}.png`, {
                    type: s
                });
                i(385475).QM({
                    environment: t,
                    file: h,
                    bucket: "secure",
                    record: n.pointer,
                    isFileBlock: !0,
                    reportRichUploadMetrics: !0,
                    onComplete: a => {
                        var s;
                        let h = n.getOriginalImageSource(),
                            d = i(836257).A.getMetadataByBlockId(n.id);
                        if (!d) throw Error("Missing edit metadata on format update!");
                        if (!h) throw Error("Missing original image source on format update!");
                        let l = n.getSpaceId();
                        (0, i(377796).createAndCommit)({
                            userAction: "embedBlockActions.uploadEditedImage",
                            environment: t,
                            canUndo: !0,
                            cellTarget: l ? {
                                spaceWithId: l
                            } : void 0,
                            perform: e => {
                                (0, i(715144).z)({
                                    stores: [n],
                                    update: {
                                        display_source: a,
                                        original_source: h,
                                        image_edit_metadata: d,
                                        block_width: o,
                                        block_height: r,
                                        block_aspect_ratio: r / o
                                    },
                                    transaction: e
                                }), (0, i(173157).z)({
                                    store: n.getPropertiesStore(),
                                    data: {
                                        source: i(247438).x9d(a)
                                    },
                                    transaction: e
                                })
                            }
                        }), null == (s = e.onUploadComplete) || s.call(e, a)
                    },
                    onError: t => {
                        var i;
                        null == (i = e.onUploadError) || i.call(e)
                    }
                })
            }
            var d = i(296540),
                l = Object.defineProperty,
                c = (e, t, i) => {
                    let a;
                    return (a = "symbol" != typeof t ? t + "" : t) in e ? l(e, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: i
                    }) : e[a] = i
                };
            let p = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    unit: "px"
                },
                g = (e, t, i) => Math.min(Math.max(e, t), i),
                w = (e, t) => e === t || e.width === t.width && e.height === t.height && e.x === t.x && e.y === t.y && e.unit === t.unit;

            function u(e, t, i, a) {
                let n = x(e, i, a);
                return e.width && (n.height = n.width / t), e.height && (n.width = n.height * t), n.y + n.height > a && (n.height = a - n.y, n.width = n.height * t), n.x + n.width > i && (n.width = i - n.x, n.height = n.width / t), "%" === e.unit ? m(n, i, a) : n
            }

            function m(e, t, i) {
                return "%" === e.unit ? { ...p,
                    ...e,
                    unit: "%"
                } : {
                    unit: "%",
                    x: e.x ? e.x / t * 100 : 0,
                    y: e.y ? e.y / i * 100 : 0,
                    width: e.width ? e.width / t * 100 : 0,
                    height: e.height ? e.height / i * 100 : 0
                }
            }

            function x(e, t, i) {
                return e.unit ? "px" === e.unit ? { ...p,
                    ...e,
                    unit: "px"
                } : {
                    unit: "px",
                    x: e.x ? e.x * t / 100 : 0,
                    y: e.y ? e.y * i / 100 : 0,
                    width: e.width ? e.width * t / 100 : 0,
                    height: e.height ? e.height * i / 100 : 0
                } : { ...p,
                    ...e,
                    unit: "px"
                }
            }

            function v(e, t, i, a, n, o = 0, r = 0, s = a, h = n) {
                let d = { ...e
                    },
                    l = Math.min(o, a),
                    c = Math.min(r, n),
                    p = Math.min(s, a),
                    g = Math.min(h, n);
                t && (t > 1 ? (c = (l = r ? r * t : l) / t, p = s * t) : (l = (c = o ? o / t : c) * t, g = h / t)), d.y < 0 && (d.height = Math.max(d.height + d.y, c), d.y = 0), d.x < 0 && (d.width = Math.max(d.width + d.x, l), d.x = 0);
                let w = a - (d.x + d.width);
                w < 0 && (d.x = Math.min(d.x, a - l), d.width += w);
                let u = n - (d.y + d.height);
                if (u < 0 && (d.y = Math.min(d.y, n - c), d.height += u), d.width < l && (("sw" === i || "nw" == i) && (d.x -= l - d.width), d.width = l), d.height < c && (("nw" === i || "ne" == i) && (d.y -= c - d.height), d.height = c), d.width > p && (("sw" === i || "nw" == i) && (d.x -= p - d.width), d.width = p), d.height > g && (("nw" === i || "ne" == i) && (d.y -= g - d.height), d.height = g), t) {
                    let e = d.width / d.height;
                    if (e < t) {
                        let e = Math.max(d.width / t, c);
                        ("nw" === i || "ne" == i) && (d.y -= e - d.height), d.height = e
                    } else if (e > t) {
                        let e = Math.max(d.height * t, l);
                        ("sw" === i || "nw" == i) && (d.x -= e - d.width), d.width = e
                    }
                }
                return d
            }
            let y = {
                    capture: !0,
                    passive: !1
                },
                f = 0,
                C = class e extends d.PureComponent {
                    constructor() {
                        super(...arguments), c(this, "docMoveBound", !1), c(this, "mouseDownOnCrop", !1), c(this, "dragStarted", !1), c(this, "evData", {
                            startClientX: 0,
                            startClientY: 0,
                            startCropX: 0,
                            startCropY: 0,
                            clientX: 0,
                            clientY: 0,
                            isResize: !0
                        }), c(this, "componentRef", (0, d.createRef)()), c(this, "mediaRef", (0, d.createRef)()), c(this, "resizeObserver"), c(this, "initChangeCalled", !1), c(this, "instanceId", `rc-${f++}`), c(this, "state", {
                            cropIsActive: !1,
                            newCropIsBeingDrawn: !1
                        }), c(this, "onCropPointerDown", e => {
                            let {
                                crop: t,
                                disabled: i
                            } = this.props, a = this.getBox();
                            if (!t) return;
                            let n = x(t, a.width, a.height);
                            if (i) return;
                            e.cancelable && e.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({
                                preventScroll: !0
                            });
                            let o = e.target.dataset.ord,
                                r = e.clientX,
                                s = e.clientY,
                                h = n.x,
                                d = n.y;
                            if (o) {
                                let t = e.clientX - a.x,
                                    i = e.clientY - a.y,
                                    l = 0,
                                    c = 0;
                                "ne" === o || "e" == o ? (l = t - (n.x + n.width), c = i - n.y, h = n.x, d = n.y + n.height) : "se" === o || "s" === o ? (l = t - (n.x + n.width), c = i - (n.y + n.height), h = n.x, d = n.y) : "sw" === o || "w" == o ? (l = t - n.x, c = i - (n.y + n.height), h = n.x + n.width, d = n.y) : ("nw" === o || "n" == o) && (l = t - n.x, c = i - n.y, h = n.x + n.width, d = n.y + n.height), r = h + a.x + l, s = d + a.y + c
                            }
                            this.evData = {
                                startClientX: r,
                                startClientY: s,
                                startCropX: h,
                                startCropY: d,
                                clientX: e.clientX,
                                clientY: e.clientY,
                                isResize: !!o,
                                ord: o
                            }, this.mouseDownOnCrop = !0, this.setState({
                                cropIsActive: !0
                            })
                        }), c(this, "onComponentPointerDown", e => {
                            let {
                                crop: t,
                                disabled: i,
                                locked: a,
                                keepSelection: n,
                                onChange: o
                            } = this.props, r = this.getBox();
                            if (i || a || n && t) return;
                            e.cancelable && e.preventDefault(), this.bindDocMove(), this.componentRef.current.focus({
                                preventScroll: !0
                            });
                            let s = e.clientX - r.x,
                                h = e.clientY - r.y,
                                d = {
                                    unit: "px",
                                    x: s,
                                    y: h,
                                    width: 0,
                                    height: 0
                                };
                            this.evData = {
                                startClientX: e.clientX,
                                startClientY: e.clientY,
                                startCropX: s,
                                startCropY: h,
                                clientX: e.clientX,
                                clientY: e.clientY,
                                isResize: !0
                            }, this.mouseDownOnCrop = !0, o(x(d, r.width, r.height), m(d, r.width, r.height)), this.setState({
                                cropIsActive: !0,
                                newCropIsBeingDrawn: !0
                            })
                        }), c(this, "onDocPointerMove", e => {
                            let t, {
                                    crop: i,
                                    disabled: a,
                                    onChange: n,
                                    onDragStart: o
                                } = this.props,
                                r = this.getBox();
                            if (a || !i || !this.mouseDownOnCrop) return;
                            e.cancelable && e.preventDefault(), this.dragStarted || (this.dragStarted = !0, o && o(e));
                            let {
                                evData: s
                            } = this;
                            s.clientX = e.clientX, s.clientY = e.clientY, w(i, t = s.isResize ? this.resizeCrop() : this.dragCrop()) || n(x(t, r.width, r.height), m(t, r.width, r.height))
                        }), c(this, "onComponentKeyDown", t => {
                            let {
                                crop: i,
                                disabled: a,
                                onChange: n,
                                onComplete: o
                            } = this.props;
                            if (a) return;
                            let r = t.key,
                                s = !1;
                            if (!i) return;
                            let h = this.getBox(),
                                d = this.makePixelCrop(h),
                                l = (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) ? e.nudgeStepLarge : t.shiftKey ? e.nudgeStepMedium : e.nudgeStep;
                            if ("ArrowLeft" === r ? (d.x -= l, s = !0) : "ArrowRight" === r ? (d.x += l, s = !0) : "ArrowUp" === r ? (d.y -= l, s = !0) : "ArrowDown" === r && (d.y += l, s = !0), s) {
                                t.cancelable && t.preventDefault(), d.x = g(d.x, 0, h.width - d.width), d.y = g(d.y, 0, h.height - d.height);
                                let e = x(d, h.width, h.height),
                                    i = m(d, h.width, h.height);
                                n(e, i), o && o(e, i)
                            }
                        }), c(this, "onHandlerKeyDown", (t, i) => {
                            var a, n;
                            let o, {
                                    aspect: r = 0,
                                    crop: s,
                                    disabled: h,
                                    minWidth: d = 0,
                                    minHeight: l = 0,
                                    maxWidth: c,
                                    maxHeight: p,
                                    onChange: g,
                                    onComplete: u
                                } = this.props,
                                y = this.getBox();
                            if (h || !s || "ArrowUp" !== t.key && "ArrowDown" !== t.key && "ArrowLeft" !== t.key && "ArrowRight" !== t.key) return;
                            t.stopPropagation(), t.preventDefault();
                            let f = (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey) ? e.nudgeStepLarge : t.shiftKey ? e.nudgeStepMedium : e.nudgeStep,
                                C = v((a = x(s, y.width, y.height), n = t.key, o = { ...a
                                }, "ArrowLeft" === n ? "nw" === i ? (o.x -= f, o.y -= f, o.width += f, o.height += f) : "w" === i ? (o.x -= f, o.width += f) : "sw" === i ? (o.x -= f, o.width += f, o.height += f) : "ne" === i ? (o.y += f, o.width -= f, o.height -= f) : "e" === i ? o.width -= f : "se" === i && (o.width -= f, o.height -= f) : "ArrowRight" === n && ("nw" === i ? (o.x += f, o.y += f, o.width -= f, o.height -= f) : "w" === i ? (o.x += f, o.width -= f) : "sw" === i ? (o.x += f, o.width -= f, o.height -= f) : "ne" === i ? (o.y -= f, o.width += f, o.height += f) : "e" === i ? o.width += f : "se" === i && (o.width += f, o.height += f)), "ArrowUp" === n ? "nw" === i ? (o.x -= f, o.y -= f, o.width += f, o.height += f) : "n" === i ? (o.y -= f, o.height += f) : "ne" === i ? (o.y -= f, o.width += f, o.height += f) : "sw" === i ? (o.x += f, o.width -= f, o.height -= f) : "s" === i ? o.height -= f : "se" === i && (o.width -= f, o.height -= f) : "ArrowDown" === n && ("nw" === i ? (o.x += f, o.y += f, o.width -= f, o.height -= f) : "n" === i ? (o.y += f, o.height -= f) : "ne" === i ? (o.y += f, o.width -= f, o.height -= f) : "sw" === i ? (o.x -= f, o.width += f, o.height += f) : "s" === i ? o.height += f : "se" === i && (o.width += f, o.height += f)), o), r, i, y.width, y.height, d, l, c, p);
                            if (!w(s, C)) {
                                let e = m(C, y.width, y.height);
                                g(C, e), u && u(C, e)
                            }
                        }), c(this, "onDocPointerDone", e => {
                            let {
                                crop: t,
                                disabled: i,
                                onComplete: a,
                                onDragEnd: n
                            } = this.props, o = this.getBox();
                            this.unbindDocMove(), !(i || !t) && this.mouseDownOnCrop && (this.mouseDownOnCrop = !1, this.dragStarted = !1, n && n(e), a && a(x(t, o.width, o.height), m(t, o.width, o.height)), this.setState({
                                cropIsActive: !1,
                                newCropIsBeingDrawn: !1
                            }))
                        }), c(this, "onDragFocus", () => {
                            var e;
                            null == (e = this.componentRef.current) || e.scrollTo(0, 0)
                        })
                    }
                    get document() {
                        return document
                    }
                    getBox() {
                        let e = this.mediaRef.current;
                        if (!e) return {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        let {
                            x: t,
                            y: i,
                            width: a,
                            height: n
                        } = e.getBoundingClientRect();
                        return {
                            x: t,
                            y: i,
                            width: a,
                            height: n
                        }
                    }
                    componentDidUpdate(e) {
                        let {
                            crop: t,
                            onComplete: i
                        } = this.props;
                        if (i && !e.crop && t) {
                            let {
                                width: e,
                                height: a
                            } = this.getBox();
                            e && a && i(x(t, e, a), m(t, e, a))
                        }
                    }
                    componentWillUnmount() {
                        this.resizeObserver && this.resizeObserver.disconnect(), this.unbindDocMove()
                    }
                    bindDocMove() {
                        this.docMoveBound || (this.document.addEventListener("pointermove", this.onDocPointerMove, y), this.document.addEventListener("pointerup", this.onDocPointerDone, y), this.document.addEventListener("pointercancel", this.onDocPointerDone, y), this.docMoveBound = !0)
                    }
                    unbindDocMove() {
                        this.docMoveBound && (this.document.removeEventListener("pointermove", this.onDocPointerMove, y), this.document.removeEventListener("pointerup", this.onDocPointerDone, y), this.document.removeEventListener("pointercancel", this.onDocPointerDone, y), this.docMoveBound = !1)
                    }
                    getCropStyle() {
                        let {
                            crop: e
                        } = this.props;
                        if (e) return {
                            top: `${e.y}${e.unit}`,
                            left: `${e.x}${e.unit}`,
                            width: `${e.width}${e.unit}`,
                            height: `${e.height}${e.unit}`
                        }
                    }
                    dragCrop() {
                        let {
                            evData: e
                        } = this, t = this.getBox(), i = this.makePixelCrop(t), a = e.clientX - e.startClientX, n = e.clientY - e.startClientY;
                        return i.x = g(e.startCropX + a, 0, t.width - i.width), i.y = g(e.startCropY + n, 0, t.height - i.height), i
                    }
                    getPointRegion(e, t, i, a) {
                        let n, {
                                evData: o
                            } = this,
                            r = o.clientX - e.x,
                            s = o.clientY - e.y;
                        return n = a && t ? "nw" === t || "n" === t || "ne" === t : s < o.startCropY, (i && t ? "nw" === t || "w" === t || "sw" === t : r < o.startCropX) ? n ? "nw" : "sw" : n ? "ne" : "se"
                    }
                    resolveMinDimensions(e, t, i = 0, a = 0) {
                        let n = Math.min(i, e.width),
                            o = Math.min(a, e.height);
                        return t && (n || o) ? t > 1 ? n ? [n, n / t] : [o * t, o] : o ? [o * t, o] : [n, n / t] : [n, o]
                    }
                    resizeCrop() {
                        let {
                            evData: t
                        } = this, {
                            aspect: i = 0,
                            maxWidth: a,
                            maxHeight: n
                        } = this.props, o = this.getBox(), [r, s] = this.resolveMinDimensions(o, i, this.props.minWidth, this.props.minHeight), h = this.makePixelCrop(o), d = this.getPointRegion(o, t.ord, r, s), l = t.ord || d, c = t.clientX - t.startClientX, p = t.clientY - t.startClientY;
                        (r && "nw" === l || "w" === l || "sw" === l) && (c = Math.min(c, -r)), (s && "nw" === l || "n" === l || "ne" === l) && (p = Math.min(p, -s));
                        let w = {
                            unit: "px",
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        "ne" === d ? (w.x = t.startCropX, w.width = c, i ? w.height = w.width / i : w.height = Math.abs(p), w.y = t.startCropY - w.height) : "se" === d ? (w.x = t.startCropX, w.y = t.startCropY, w.width = c, i ? w.height = w.width / i : w.height = p) : "sw" === d ? (w.x = t.startCropX + c, w.y = t.startCropY, w.width = Math.abs(c), i ? w.height = w.width / i : w.height = p) : "nw" === d && (w.x = t.startCropX + c, w.width = Math.abs(c), i ? (w.height = w.width / i, w.y = t.startCropY - w.height) : (w.height = Math.abs(p), w.y = t.startCropY + p));
                        let u = v(w, i, d, o.width, o.height, r, s, a, n);
                        return i || e.xyOrds.indexOf(l) > -1 ? h = u : e.xOrds.indexOf(l) > -1 ? (h.x = u.x, h.width = u.width) : e.yOrds.indexOf(l) > -1 && (h.y = u.y, h.height = u.height), h.x = g(h.x, 0, o.width - h.width), h.y = g(h.y, 0, o.height - h.height), h
                    }
                    renderCropSelection() {
                        let {
                            ariaLabels: t = e.defaultProps.ariaLabels,
                            disabled: i,
                            locked: a,
                            renderSelectionAddon: n,
                            ruleOfThirds: o,
                            crop: r
                        } = this.props, s = this.getCropStyle();
                        if (r) return d.createElement("div", {
                            style: s,
                            className: "ReactCrop__crop-selection",
                            onPointerDown: this.onCropPointerDown,
                            "aria-label": t.cropArea,
                            tabIndex: 0,
                            onKeyDown: this.onComponentKeyDown,
                            role: "group"
                        }, !i && !a && d.createElement("div", {
                            className: "ReactCrop__drag-elements",
                            onFocus: this.onDragFocus
                        }, d.createElement("div", {
                            className: "ReactCrop__drag-bar ord-n",
                            "data-ord": "n"
                        }), d.createElement("div", {
                            className: "ReactCrop__drag-bar ord-e",
                            "data-ord": "e"
                        }), d.createElement("div", {
                            className: "ReactCrop__drag-bar ord-s",
                            "data-ord": "s"
                        }), d.createElement("div", {
                            className: "ReactCrop__drag-bar ord-w",
                            "data-ord": "w"
                        }), d.createElement("div", {
                            className: "ReactCrop__drag-handle ord-nw",
                            "data-ord": "nw",
                            tabIndex: 0,
                            "aria-label": t.nwDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "nw"),
                            role: "button"
                        }), d.createElement("div", {
                            className: "ReactCrop__drag-handle ord-n",
                            "data-ord": "n",
                            tabIndex: 0,
                            "aria-label": t.nDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "n"),
                            role: "button"
                        }), d.createElement("div", {
                            className: "ReactCrop__drag-handle ord-ne",
                            "data-ord": "ne",
                            tabIndex: 0,
                            "aria-label": t.neDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "ne"),
                            role: "button"
                        }), d.createElement("div", {
                            className: "ReactCrop__drag-handle ord-e",
                            "data-ord": "e",
                            tabIndex: 0,
                            "aria-label": t.eDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "e"),
                            role: "button"
                        }), d.createElement("div", {
                            className: "ReactCrop__drag-handle ord-se",
                            "data-ord": "se",
                            tabIndex: 0,
                            "aria-label": t.seDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "se"),
                            role: "button"
                        }), d.createElement("div", {
                            className: "ReactCrop__drag-handle ord-s",
                            "data-ord": "s",
                            tabIndex: 0,
                            "aria-label": t.sDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "s"),
                            role: "button"
                        }), d.createElement("div", {
                            className: "ReactCrop__drag-handle ord-sw",
                            "data-ord": "sw",
                            tabIndex: 0,
                            "aria-label": t.swDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "sw"),
                            role: "button"
                        }), d.createElement("div", {
                            className: "ReactCrop__drag-handle ord-w",
                            "data-ord": "w",
                            tabIndex: 0,
                            "aria-label": t.wDragHandle,
                            onKeyDown: e => this.onHandlerKeyDown(e, "w"),
                            role: "button"
                        })), n && d.createElement("div", {
                            className: "ReactCrop__selection-addon",
                            onPointerDown: e => e.stopPropagation()
                        }, n(this.state)), o && d.createElement(d.Fragment, null, d.createElement("div", {
                            className: "ReactCrop__rule-of-thirds-hz"
                        }), d.createElement("div", {
                            className: "ReactCrop__rule-of-thirds-vt"
                        })))
                    }
                    makePixelCrop(e) {
                        return x({ ...p,
                            ...this.props.crop || {}
                        }, e.width, e.height)
                    }
                    render() {
                        let {
                            aspect: e,
                            children: t,
                            circularCrop: i,
                            className: a,
                            crop: n,
                            disabled: o,
                            locked: r,
                            style: s,
                            ruleOfThirds: h
                        } = this.props, {
                            cropIsActive: l,
                            newCropIsBeingDrawn: c
                        } = this.state, p = n ? this.renderCropSelection() : null, g = ((...e) => e.filter(e => e && "string" == typeof e).join(" "))("ReactCrop", a, l && "ReactCrop--active", o && "ReactCrop--disabled", r && "ReactCrop--locked", c && "ReactCrop--new-crop", n && e && "ReactCrop--fixed-aspect", n && i && "ReactCrop--circular-crop", n && h && "ReactCrop--rule-of-thirds", !this.dragStarted && n && !n.width && !n.height && "ReactCrop--invisible-crop", i && "ReactCrop--no-animate");
                        return d.createElement("div", {
                            ref: this.componentRef,
                            className: g,
                            style: s
                        }, d.createElement("div", {
                            ref: this.mediaRef,
                            className: "ReactCrop__child-wrapper",
                            onPointerDown: this.onComponentPointerDown
                        }, t), n ? d.createElement("svg", {
                            className: "ReactCrop__crop-mask",
                            width: "100%",
                            height: "100%"
                        }, d.createElement("defs", null, d.createElement("mask", {
                            id: `hole-${this.instanceId}`
                        }, d.createElement("rect", {
                            width: "100%",
                            height: "100%",
                            fill: "white"
                        }), i ? d.createElement("ellipse", {
                            cx: `${n.x+n.width/2}${n.unit}`,
                            cy: `${n.y+n.height/2}${n.unit}`,
                            rx: `${n.width/2}${n.unit}`,
                            ry: `${n.height/2}${n.unit}`,
                            fill: "black"
                        }) : d.createElement("rect", {
                            x: `${n.x}${n.unit}`,
                            y: `${n.y}${n.unit}`,
                            width: `${n.width}${n.unit}`,
                            height: `${n.height}${n.unit}`,
                            fill: "black"
                        }))), d.createElement("rect", {
                            fill: "black",
                            fillOpacity: .5,
                            width: "100%",
                            height: "100%",
                            mask: `url(#hole-${this.instanceId})`
                        })) : void 0, p)
                    }
                };
            c(C, "xOrds", ["e", "w"]), c(C, "yOrds", ["n", "s"]), c(C, "xyOrds", ["nw", "ne", "se", "sw"]), c(C, "nudgeStep", 1), c(C, "nudgeStepMedium", 10), c(C, "nudgeStepLarge", 100), c(C, "defaultProps", {
                ariaLabels: {
                    cropArea: "Use the arrow keys to move the crop selection area",
                    nwDragHandle: "Use the arrow keys to move the north west drag handle to change the crop selection area",
                    nDragHandle: "Use the up and down arrow keys to move the north drag handle to change the crop selection area",
                    neDragHandle: "Use the arrow keys to move the north east drag handle to change the crop selection area",
                    eDragHandle: "Use the up and down arrow keys to move the east drag handle to change the crop selection area",
                    seDragHandle: "Use the arrow keys to move the south east drag handle to change the crop selection area",
                    sDragHandle: "Use the up and down arrow keys to move the south drag handle to change the crop selection area",
                    swDragHandle: "Use the arrow keys to move the south west drag handle to change the crop selection area",
                    wDragHandle: "Use the up and down arrow keys to move the west drag handle to change the crop selection area"
                }
            });
            var b = i(474848);
            let A = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.62 1.62 16.25 16.26",
                    svg: (0, b.jsx)("path", {
                        d: "M8 1.625a6.375 6.375 0 0 1 6.092 4.5h1.658c1.174 0 2.125.951 2.125 2.125v7.5a2.125 2.125 0 0 1-2.125 2.125h-7.5a2.125 2.125 0 0 1-2.125-2.125v-1.658A6.375 6.375 0 0 1 8 1.625m.25 5.75a.875.875 0 0 0-.875.875v7.5c0 .483.392.875.875.875h7.5a.875.875 0 0 0 .875-.875v-7.5a.875.875 0 0 0-.875-.875zM8 2.875a5.125 5.125 0 0 0-1.875 9.895V8.25c0-1.174.951-2.125 2.125-2.125h4.52A5.13 5.13 0 0 0 8 2.875"
                    })
                },
                M = (0, i(104509).wt)("squareOnCircle", A, "default"),
                D = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.62 1.62 16.38 16.38",
                    svg: (0, b.jsxs)(b.Fragment, {
                        children: [(0, b.jsx)("path", {
                            d: "M16 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                        }), (0, b.jsx)("path", {
                            d: "M8 1.625a6.37 6.37 0 0 1 5.484 3.125H8A3.25 3.25 0 0 0 4.75 8v5.483A6.375 6.375 0 0 1 8 1.625"
                        })]
                    })
                },
                k = (0, i(104509).wt)("squareOnCircleFill", D, "fill");
            i(898992), i(354520), i(581454);
            let S = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 15.25 11.75",
                    svg: (0, b.jsx)("path", {
                        d: "M15.5 4.125c1.174 0 2.125.951 2.125 2.125v7.5a2.125 2.125 0 0 1-2.125 2.125h-11a2.125 2.125 0 0 1-2.125-2.125v-7.5c0-1.174.951-2.125 2.125-2.125zm-11 1.25a.875.875 0 0 0-.875.875v7.5c0 .483.392.875.875.875h11a.875.875 0 0 0 .875-.875v-7.5a.875.875 0 0 0-.875-.875z"
                    })
                },
                E = (0, i(104509).wt)("rectangle", S, "default"),
                I = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 15.25 11.75",
                    svg: (0, b.jsx)("path", {
                        d: "M15.5 4.125c1.174 0 2.125.951 2.125 2.125v7.5a2.125 2.125 0 0 1-2.125 2.125h-11a2.125 2.125 0 0 1-2.125-2.125v-7.5c0-1.174.951-2.125 2.125-2.125zm-2.753 2.714a.626.626 0 0 0-.858.215L9.335 11.31 7.899 9.635a.625.625 0 0 0-.949.813l2 2.334a.625.625 0 0 0 1.01-.086l3-5a.625.625 0 0 0-.213-.857"
                    })
                },
                j = (0, i(104509).wt)("rectangleCheckFill", I, "fill"),
                R = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.12 2.37 11.75 15.25",
                    svg: (0, b.jsx)("path", {
                        d: "M15.875 15.5a2.125 2.125 0 0 1-2.125 2.125h-7.5A2.125 2.125 0 0 1 4.125 15.5v-11c0-1.174.951-2.125 2.125-2.125h7.5c1.174 0 2.125.951 2.125 2.125zm-1.25-11a.875.875 0 0 0-.875-.875h-7.5a.875.875 0 0 0-.875.875v11c0 .483.392.875.875.875h7.5a.875.875 0 0 0 .875-.875z"
                    })
                },
                _ = (0, i(104509).wt)("rectangleTall", R, "default"),
                B = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.12 2.37 11.75 15.25",
                    svg: (0, b.jsx)("path", {
                        d: "M13.75 2.375c1.174 0 2.125.951 2.125 2.125v11a2.125 2.125 0 0 1-2.125 2.125h-7.5A2.125 2.125 0 0 1 4.125 15.5v-11c0-1.174.951-2.125 2.125-2.125zm-1.003 4.749a.626.626 0 0 0-.858.215l-2.554 4.256L7.899 9.92a.625.625 0 0 0-.949.813l2 2.333a.626.626 0 0 0 1.01-.085l3-5a.625.625 0 0 0-.213-.857"
                    })
                },
                L = (0, i(104509).wt)("rectangleTallCheckFill", B, "fill"),
                P = {
                    transform: "translate(5px, 0px)"
                },
                H = {
                    width: 16,
                    height: 16
                };

            function O(e) {
                let t = (0, i(109939).tz)(),
                    {
                        aspectRatio: a,
                        flipped: n,
                        rowIsSelected: o
                    } = e,
                    r = (0, d.useMemo)(() => o && n ? L : _, [n, o]),
                    s = (0, d.useMemo)(() => o ? n ? E : j : E, [n, o]);
                return (0, b.jsxs)("div", {
                    style: P,
                    children: [(0, b.jsx)(i(374533).A, {
                        icon: r,
                        iconStyle: H,
                        ariaLabel: t.formatMessage({
                            id: "imageEdit.aspectRatio.portrait",
                            defaultMessage: "Portrait"
                        }),
                        onClick: () => i(823304).A.setFixedAspectRatio(a, !0)
                    }), (0, b.jsx)(i(374533).A, {
                        icon: s,
                        iconStyle: H,
                        ariaLabel: t.formatMessage({
                            id: "imageEdit.aspectRatio.landscape",
                            defaultMessage: "Landscape"
                        }),
                        onClick: () => i(823304).A.setFixedAspectRatio(a, !1)
                    })]
                })
            }
            let $ = function() {
                    let e = (0, i(682985).K8)(() => {
                            if (i(823304).A.state.open) return i(823304).A.state.fixedAspectSelection
                        }, []),
                        t = (0, i(682985).K8)(() => !!i(823304).A.state.open && i(823304).A.state.aspectSelectionFlipped, []),
                        a = (0, i(83208).X)("image_cropping_aspect_ratios"),
                        [n, o] = (0, d.useState)();
                    return (0, b.jsxs)(b.Fragment, {
                        children: [(0, b.jsx)(i(95582).A, {
                            focused: !1,
                            onClick: () => i(823304).A.setFixedAspectRatio("1:1", !1),
                            title: "Square",
                            isChecked: "1:1" === e
                        }, "1:1 aspect ratio"), a ? Object.keys(i(256606).oU).filter(e => "1:1" !== e).map(a => {
                            var r, s;
                            let {
                                width: h,
                                height: d
                            } = i(256606).oU[a], l = (r = h, s = d, t ? `${s}:${r}` : `${r}:${s}`), c = e === a, p = n === a, g = p ? (0, b.jsx)(O, {
                                aspectRatio: a,
                                flipped: t,
                                rowIsSelected: c
                            }) : void 0;
                            return (0, b.jsx)(i(95582).A, {
                                focused: !1,
                                onMouseEnter: () => o(a),
                                onMouseLeave: () => o(void 0),
                                onClick: () => i(823304).A.setFixedAspectRatio(a, t),
                                title: l,
                                isChecked: c && !p,
                                right: g
                            }, l)
                        }) : void 0]
                    })
                },
                K = {
                    button: {
                        display: "flex",
                        gap: 2,
                        color: i(632079).Tj.icon.secondary
                    },
                    divider: {
                        color: i(632079).Tj.border.secondary,
                        opacity: .2
                    }
                },
                z = function(e) {
                    let t = (0, i(682985).K8)(() => {
                            var e;
                            return null == (e = i(823304).A.getEditMetadata()) ? void 0 : e.mask
                        }, []),
                        a = (0, i(682985).K8)(() => i(823304).A.state.open && i(823304).A.state.fixedAspectSelection, []),
                        n = "None" === t && void 0 === a,
                        o = (0, d.useMemo)(() => (0, b.jsx)(i(16275).I, {
                            icon: n ? M : k,
                            colorPalette: n ? void 0 : "blue",
                            colorVariant: n ? void 0 : "accentPrimary"
                        }), [n]);
                    return (0, b.jsx)(i(656252).A, {
                        alignmentToOrigin: "start",
                        popupType: i(656252).z.Popup,
                        content: () => (0, b.jsx)(i(747369).A, {
                            menuType: i(649476).gu.Popup,
                            children: (0, b.jsxs)(i(844565).A, {
                                children: [(0, b.jsx)(i(95582).A, {
                                    focused: !1,
                                    onClick: () => i(823304).A.setMask("None"),
                                    title: "Freeform",
                                    isChecked: n
                                }, "free-mask"), (0, b.jsx)("hr", {
                                    style: K.divider
                                }), (0, b.jsx)(i(95582).A, {
                                    focused: !1,
                                    onClick: () => i(823304).A.setMask("Circle"),
                                    title: "Circle",
                                    isChecked: "Circle" === t
                                }, "circle-mask"), (0, b.jsx)($, {})]
                            })
                        }),
                        children: ({
                            onClick: e
                        }) => (0, b.jsxs)(i(406910).p, {
                            onClick: e,
                            style: K.button,
                            children: [o, (0, b.jsx)(i(16275).I, {
                                icon: i(595453).arrowChevronSingleDownSmallIcon,
                                size: "sm"
                            })]
                        })
                    })
                },
                Y = i(632079).Tj.white,
                X = {
                    toolbar: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        background: i(632079).Tj.background.elevated,
                        borderBottom: `1px solid ${i(632079).Tj.border.secondary}`,
                        padding: "12px"
                    },
                    buttonGroup: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: "5px"
                    },
                    title: {
                        position: "absolute",
                        marginInlineStart: "auto",
                        marginInlineEnd: "auto",
                        insetInlineStart: 0,
                        insetInlineEnd: 0,
                        textAlign: "center",
                        width: "fit-content",
                        fontWeight: i(699422).Wy.regular
                    },
                    modalInnerStyle: {
                        borderRadius: "12px"
                    },
                    container: {
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    cropWindow: {
                        padding: "30px",
                        background: i(632079).Tj.background.secondary,
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center"
                    },
                    image: {
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                    },
                    loadingSpinnerOverlay: {
                        zIndex: 999,
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: i(632079).Tj.overlaySmokescreen
                    }
                };

            function F(e) {
                let t = (0, i(109939).tz)(),
                    a = (0, i(533992).v3)(),
                    o = (0, i(109939).YK)({
                        image: {
                            id: "imageEditModal.image.altText",
                            defaultMessage: "Original image to edit"
                        }
                    }),
                    r = (0, i(682985).O$)(i(823304).A),
                    s = (0, i(682985).K8)(() => i(823304).A.getIsImageLoaded(), []),
                    h = (0, i(682985).K8)(() => i(823304).A.getEditMetadata(), []),
                    [l, c] = (0, d.useState)(),
                    [p, g] = (0, d.useState)(),
                    w = l ? l.width < 300 : void 0,
                    u = (0, d.useRef)(null),
                    m = function(e) {
                        let {
                            isImageLoaded: t,
                            outerContainerSize: a,
                            innerContainerSize: n
                        } = e;
                        return (0, i(960253).I)(() => ({
                            modal: {
                                display: "flex",
                                visibility: t ? "visible" : "hidden"
                            },
                            outerImageContainer: { ...a,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                transition: "all 0.2s ease-out",
                                position: "relative",
                                overflow: "hidden"
                            },
                            innerImageContainer: {
                                maxWidth: "70vw",
                                maxHeight: "75vh",
                                position: n ? "absolute" : void 0,
                                ...n
                            },
                            loadingSpinner: {
                                display: t ? "none" : "block"
                            }
                        }), [t, a, n])
                    }({
                        isImageLoaded: s,
                        outerContainerSize: l,
                        innerContainerSize: p
                    });
                (0, d.useEffect)(() => {
                    if (document.documentElement.style.setProperty("--crop-mask-color", Y), document.documentElement.style.setProperty("--crop-mask-opacity", "0.5"), p) {
                        let e = p.width < n || p.height < n;
                        document.documentElement.style.setProperty("--cardinal-handle-visibility", e ? "hidden" : "visible")
                    }
                }, [p]);
                let x = (0, d.useCallback)(e => {
                    c(e), g(e)
                }, []);
                (0, d.useLayoutEffect)(() => {
                    s && !l && u.current && x(T(u.current))
                }, [s, l, x]);
                let v = (0, d.useCallback)(() => {
                    u.current && x(T(u.current))
                }, [x]);
                (0, d.useEffect)(() => (window.addEventListener("resize", v), () => window.removeEventListener("resize", v)), [v]);
                let y = (0, d.useCallback)(() => {
                    c(void 0), g(void 0)
                }, []);
                return ((0, d.useEffect)(() => {
                    r.open || y()
                }, [y, r.open]), r.open) ? (0, b.jsxs)("div", {
                    children: [(0, b.jsx)(i(114596).O, {
                        open: r.open && !s,
                        children: (0, b.jsx)("div", {
                            style: X.loadingSpinnerOverlay,
                            children: (0, b.jsx)(i(517334).k, {
                                style: m.loadingSpinner,
                                onDarkBackground: !0,
                                size: 32
                            })
                        })
                    }), (0, b.jsx)(i(556809).a, {
                        style: m.modal,
                        innerStyle: X.modalInnerStyle,
                        open: r.open,
                        onDismiss: U,
                        children: (0, b.jsx)("div", {
                            style: X.container,
                            children: (0, b.jsx)(i(738251).A, {
                                width: window.innerWidth,
                                url: r.originalSource,
                                render: (e, s) => (0, b.jsxs)(b.Fragment, {
                                    children: [(0, b.jsx)(N, {
                                        hideTitle: w,
                                        onSave: () => {
                                            var e;
                                            r.open && (e = {
                                                editMetadata: h,
                                                store: r.blockStore,
                                                environment: a
                                            }, i(836257).A.setStatusPending(e.store.id, e.editMetadata), (0, i(884940).EH)(e.store, e.environment), i(823304).A.setSaveButtonLoading(!0), setTimeout(() => {
                                                i(823304).A.closeModal()
                                            }, 750))
                                        },
                                        onClose: () => {
                                            U()
                                        }
                                    }), (0, b.jsx)("div", {
                                        style: X.cropWindow,
                                        children: (0, b.jsx)(C, {
                                            onChange: (e, t) => {
                                                i(823304).A.setCrop(t)
                                            },
                                            crop: h.crop,
                                            minHeight: n,
                                            minWidth: n,
                                            keepSelection: !0,
                                            aspect: r.open && r.cropAspect,
                                            circularCrop: (null == h ? void 0 : h.mask) === "Circle",
                                            children: (0, b.jsx)("div", {
                                                style: m.outerImageContainer,
                                                children: (0, b.jsx)("div", {
                                                    style: m.innerImageContainer,
                                                    children: (0, b.jsx)("img", {
                                                        ref: u,
                                                        src: s,
                                                        alt: t.formatMessage(o.image),
                                                        onLoad: () => {
                                                            var e;
                                                            i(823304).A.setIsImageLoaded(u), null == (e = document.querySelector(".ReactCrop__crop-mask")) || e.setAttribute("height", "100%")
                                                        },
                                                        style: X.image
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                }),
                                isAuthenticated: !0,
                                permissionRecord: r.blockStore.pointer
                            })
                        })
                    })]
                }) : null
            }

            function N(e) {
                let {
                    onSave: t,
                    onClose: a,
                    hideTitle: n
                } = e, o = (0, i(682985).K8)(() => i(823304).A.state.open && i(823304).A.state.saveButtonLoading, []);
                return (0, b.jsxs)("div", {
                    style: X.toolbar,
                    children: [(0, b.jsx)(z, {}), n ? void 0 : (0, b.jsx)("div", {
                        style: X.title,
                        children: (0, b.jsx)(i(109939).sA, {
                            id: "imageEditModal.title",
                            defaultMessage: "Crop image"
                        })
                    }), (0, b.jsxs)("div", {
                        style: X.buttonGroup,
                        children: [(0, b.jsx)(i(988022).p, {
                            onClick: a,
                            colorPalette: "gray",
                            children: (0, b.jsx)(i(109939).sA, {
                                id: "imageEditModal.cancelButton.label",
                                defaultMessage: "Cancel"
                            })
                        }), (0, b.jsx)(i(912946).A, {
                            colorPalette: "blue",
                            onClick: t,
                            isLoading: o,
                            children: (0, b.jsx)(i(109939).sA, {
                                id: "imageEditModal.saveButton.label",
                                defaultMessage: "Save"
                            })
                        })]
                    })]
                })
            }

            function U() {
                i(823304).A.closeModal()
            }

            function T(e) {
                let t = e.naturalWidth / e.naturalHeight,
                    i = e.height * t,
                    a = e.height;
                return i > e.width && (i = e.width, a = e.width / t), {
                    width: i,
                    height: a
                }
            }
        },
        766970: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => a,
                xMarkFillIcon: () => n
            }), i(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                n = (0, i(104509).wt)("xMarkFill", a, "fill")
        },
        823304: (e, t, i) => {
            i.d(t, {
                A: () => r
            });
            var a = () => i(546605);
            let n = {
                open: !0,
                isImageLoaded: !1,
                saveButtonLoading: !1,
                imageRef: void 0,
                fixedAspectSelection: void 0,
                aspectSelectionFlipped: !1,
                outerContainerSize: void 0,
                innerContainerSize: void 0
            };
            class o extends a().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                openModal(e) {
                    let {
                        originalSource: t,
                        blockStore: a
                    } = e, o = "uploading" === i(836257).A.getStatus(a.id) && i(836257).A.getMetadataByBlockId(a.id) || { ...i(256606).b,
                        ...a.getImageEditMetadata()
                    };
                    this.setState({ ...n,
                        blockStore: a,
                        originalSource: t,
                        editMetadata: o,
                        cropAspect: "Circle" === o.mask ? 1 : void 0
                    })
                }
                setSaveButtonLoading(e) {
                    this.state.open && this.setState({ ...this.state,
                        saveButtonLoading: e
                    })
                }
                closeModal(e) {
                    var t;
                    null == e || null == (t = e.onClose) || t.call(e), this.setState({
                        open: !1
                    })
                }
                getEditMetadata() {
                    return this.state.open && this.state.editMetadata || i(256606).b
                }
                getIsImageLoaded() {
                    return !!this.state.open && this.state.isImageLoaded
                }
                setIsImageLoaded(e) {
                    this.state.open && this.setState({ ...this.state,
                        isImageLoaded: !0,
                        imageRef: e
                    })
                }
                setCrop(e) {
                    if (this.state.open) {
                        let t = { ...this.state.editMetadata,
                            crop: e
                        };
                        this.setState({ ...this.state,
                            editMetadata: t
                        })
                    }
                }
                setMask(e) {
                    if (this.state.open) switch (this.setState({ ...this.state,
                        fixedAspectSelection: void 0,
                        aspectSelectionFlipped: !1
                    }), e) {
                        case "None":
                            this.setFreeform();
                            return;
                        case "Circle":
                            this.setCircleMask();
                            return;
                        default:
                            (0, i(722371).HB)(e)
                    }
                }
                async setFixedAspectRatio(e, t) {
                    if (!this.state.open) return;
                    let {
                        width: a,
                        height: n
                    } = i(256606).oU[e], o = t ? n / a : a / n, r = this.state.editMetadata, s = await this.getAspectCrop(r, o);
                    s && this.setState({ ...this.state,
                        cropAspect: o,
                        editMetadata: { ...r,
                            crop: s,
                            mask: "None"
                        },
                        fixedAspectSelection: e,
                        aspectSelectionFlipped: t
                    })
                }
                setFreeform() {
                    if (!this.state.open) return;
                    let e = this.state.editMetadata;
                    this.setState({ ...this.state,
                        cropAspect: void 0,
                        editMetadata: { ...e,
                            mask: "None"
                        }
                    })
                }
                async setCircleMask() {
                    if (!this.state.open) return;
                    let e = this.state.editMetadata,
                        t = await this.getAspectCrop(e, 1);
                    t && this.setState({ ...this.state,
                        cropAspect: 1,
                        editMetadata: {
                            crop: t,
                            mask: "Circle"
                        }
                    })
                }
                async getAspectCrop(e, t) {
                    if (this.state.open) {
                        var a;
                        let n = null == (a = this.state.imageRef) ? void 0 : a.current,
                            o = null == e ? void 0 : e.crop;
                        if (!n || !o) return;
                        let {
                            makeAspectCrop: r
                        } = await i(610128).h.load();
                        return r(o, t, n.width, n.height)
                    }
                }
                resetCrop() {
                    this.state.open && (this.setCrop(i(256606).b.crop), this.setMask(i(256606).b.mask))
                }
            }
            let r = new o
        },
        884940: (e, t, i) => {
            i.d(t, {
                AS: () => n,
                EH: () => o
            });
            let a = ["png", "jpg", "jpeg", "webp", "heic", "heif"];

            function n(e) {
                if (!e) return !1;
                let t = i(728601).QC(e);
                if (!t) return !1;
                let n = i(728601)._J(e),
                    o = a.includes(t.toLowerCase());
                return n && o
            }
            async function o(e, t) {
                let a = e.getOriginalImageSource();
                if ((0, i(148337).o9)(a), !a) return;
                let n = await (0, i(783826).L)({
                        url: a,
                        isAuthenticated: !0,
                        permissionRecord: e.pointer
                    }, t),
                    {
                        imageEditActions: o
                    } = await i(610128).h.load();
                return o.cropAndUploadImage({
                    store: e,
                    environment: t,
                    proxiedOriginalUrl: n
                })
            }
        }
    }
]);