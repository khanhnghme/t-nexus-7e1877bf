"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [55394], {
        388379: (i, e, t) => {
            t.r(e), t.d(e, {
                default: () => o
            }), t(296540);
            var n = t(474848);
            let o = function() {
                let {
                    isTablet: i
                } = (0, t(533992).Y0)(), e = (0, t(682985).O$)(t(588466).A), o = (0, t(83208).X)("mobile_icon_picker_bottom_sheet");
                return (0, n.jsx)(t(182718).zD, {
                    popupType: t(986939).A.isMobile ? o ? t(423291).n.BottomSheet : t(423291).n.SlideUp : t(423291).n.Popup,
                    bottomSheetInitialState: i ? "full" : "half",
                    open: e.isActive,
                    ariaLabel: e.isActive ? e.title : void 0,
                    originRect: e.isActive ? e.originRect : void 0,
                    originGap: e.isActive ? e.originGap : void 0,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "center",
                    preventScaleTransition: !0,
                    onDismiss: a,
                    content: () => {
                        if (e.isActive) return (0, n.jsx)(t(369064).N, {
                            debugName: "MediaMenu",
                            capture: !0,
                            onUp: t(763230).D_,
                            onDown: t(763230).D_,
                            children: (0, n.jsx)(t(333680).Ay, { ...e,
                                onCancel: a
                            })
                        })
                    },
                    trapFocus: !0
                })
            };

            function a() {
                t(874443).I()
            }
        }
    }
]);