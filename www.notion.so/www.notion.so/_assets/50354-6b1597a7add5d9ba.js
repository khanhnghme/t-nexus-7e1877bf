"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [50354], {
        83723: (e, t, r) => {
            r.r(t), r.d(t, {
                AudioRecorder: () => h,
                MEDIA_STREAM_CHANGE_EVENT: () => m,
                PcmRecorder: () => p
            }), r(16280), r(944114), r(816573), r(878100), r(177936), r(748140), r(821903), r(491134), r(128845), r(237467), r(444732), r(979577), r(898992), r(823215), r(672577), r(430670), r(803949), r(581454);
            var a = () => r(104310);
            class i {
                _inputSampleRate;
                _outputSampleRate;
                constructor(e, t) {
                    this._inputSampleRate = e, this._outputSampleRate = t
                }
                downsample(e) {
                    return this.downSampleAudioFrame(e, this._inputSampleRate, this._outputSampleRate)
                }
                downSampleAudioFrame(e, t, r) {
                    if (r === t || r > t) return e;
                    let a = t / r,
                        i = Math.round(e.length / a),
                        o = new Float32Array(i),
                        n = 0,
                        s = 0;
                    for (; s < i;) {
                        let t = Math.round((s + 1) * a),
                            r = 0,
                            i = 0;
                        for (; n < t && n < e.length;) r += e[n++], i++;
                        o[s++] = r / i
                    }
                    return o
                }
            }
            var o = () => r(773352),
                n = () => r(416607),
                s = () => r(975162),
                l = () => r(228327),
                d = () => r(580022),
                u = () => r(154642),
                c = () => r(607825);
            r(814603), r(147566), r(198721);
            let m = "ms_change";
            class h {
                static meetingNotesCache = (0, r(716893).bB)();
                _mediaStreams;
                _emitter;
                recorder;
                onDataReceived;
                onStop;
                environment;
                startController;
                audioBuffer = [];
                currentStreamId = null;
                sampleRate;
                includeSystemAudio;
                splitBySource;
                enableMicrophoneEchoCancellation;
                saveAudioFileMetadata;
                constructor(e) {
                    this._emitter = (0, r(827380).A)(), this.recorder = new p, this.onDataReceived = e.onDataReceived, this.onStop = e.onStop, this.includeSystemAudio = e.includeSystemAudio, this.splitBySource = e.splitBySource ? ? !1, this.enableMicrophoneEchoCancellation = e.enableMicrophoneEchoCancellation ? ? !1, this.environment = e.environment, this.sampleRate = e.sampleRate ? ? 16e3, this.saveAudioFileMetadata = e.saveAudioFileMetadata
                }
                setOnDataReceived(e) {
                    this.onDataReceived = e
                }
                get emitter() {
                    return this._emitter
                }
                get isStoringLocalAudio() {
                    return void 0 !== this.saveAudioFileMetadata && void 0 !== h.meetingNotesCache
                }
                set mediaStreams(e) {
                    if (this._mediaStreams)
                        for (let e of this._mediaStreams)
                            for (let t of e.getTracks()) t.stop();
                    for (let t of e ? ? [])
                        for (let e of t.getTracks()) e.addEventListener("ended", async () => {
                            t.getTracks().every(e => "ended" === e.readyState) && "denied" === (await u().Ay.checkPermissions(this.includeSystemAudio)).audio && this.stop({
                                triggerOnStop: !0,
                                error: new(l()).d1("Audio permission denied")
                            })
                        });
                    for (let r of e ? ? []) {
                        var t;
                        let e = null == r || null == (t = r.getAudioTracks()[0]) ? void 0 : t.getSettings();
                        d().A.setState(c().X8.state.find(t => t.deviceId === (null == e ? void 0 : e.deviceId)))
                    }
                    this._mediaStreams = e, this._emitter.emit(m)
                }
                get mediaStreams() {
                    return this._mediaStreams
                }
                getPreferredOrDefaultDevice() {
                    let e = r(844561).d.state,
                        t = c().X8.state;
                    return (null == t ? void 0 : t.find(t => t.deviceId === (null == e ? void 0 : e.deviceId))) ? ? (null == t ? void 0 : t.find(t => t.label === (null == e ? void 0 : e.label))) ? ? t[0]
                }
                async start() {
                    if (void 0 === this.startController || this.startController.signal.aborted) {
                        var e;
                        this.startController = new AbortController;
                        let t = this.startController.signal;
                        if (null === this.currentStreamId) {
                            this.currentStreamId = (0, r(92513).JW)().slice(-4);
                            try {
                                h.meetingNotesCache && void 0 !== this.saveAudioFileMetadata && await h.meetingNotesCache.trimCache(9)
                            } catch (e) {
                                o().log({
                                    level: "error",
                                    from: "audioRecorderHelpers",
                                    type: "trimCacheError",
                                    error: (0, n().convertErrorToLog)(e)
                                })
                            }
                        }
                        this.audioBuffer = [];
                        let i = this.getPreferredOrDefaultDevice(),
                            d = r(844561).d.state,
                            u = i ? null != d && d.deviceId && i.deviceId === d.deviceId ? "preferred" : null != d && d.label && i.label === d.label ? "preferred_label_match" : "first_available" : "browser_default",
                            m = (0, r(601821).E)(),
                            p = async e => {
                                let t = performance.now();
                                this.environment.device.isBrowser && (0, a().u)({
                                    event: {
                                        eventName: "ai_meeting_notes_permission_requested",
                                        eventProperties: {
                                            permission_type: "microphone"
                                        }
                                    }
                                });
                                let r = 0;
                                for (; !e.aborted && r < 5;) {
                                    r++;
                                    let e = Date.now();
                                    try {
                                        let n = {
                                            deviceId: i ? {
                                                exact: i.deviceId
                                            } : void 0,
                                            echoCancellation: !1,
                                            noiseSuppression: !1,
                                            autoGainControl: !1,
                                            channelCount: 1
                                        };
                                        this.enableMicrophoneEchoCancellation && Reflect.set(n, "echoCancellation", "all");
                                        let s = await m.getUserMedia({
                                                audio: n
                                            }),
                                            l = Date.now() - e;
                                        this.environment.device.isBrowser && (0, a().u)({
                                            event: {
                                                eventName: "ai_meeting_notes_permission_result",
                                                eventProperties: {
                                                    permission_type: "microphone",
                                                    result: "granted",
                                                    elapsed_ms_since_request: l,
                                                    likely_user_was_prompted: l >= 600
                                                }
                                            }
                                        });
                                        let d = s.getAudioTracks()[0],
                                            h = null == d ? void 0 : d.getSettings();
                                        return o().log({
                                            level: "info",
                                            from: "audioRecorderHelpers",
                                            type: "getUserMediaSuccess",
                                            data: {
                                                miscDataToConvertToString: {
                                                    attemptElapsedMs: l,
                                                    attempt: r,
                                                    requestedDeviceId: null == i ? void 0 : i.deviceId,
                                                    requestedDeviceLabel: null == i ? void 0 : i.label,
                                                    requestedDeviceGroupId: null == i ? void 0 : i.groupId,
                                                    deviceSelectionMethod: u,
                                                    acquiredDeviceId: null == h ? void 0 : h.deviceId,
                                                    acquiredGroupId: null == h ? void 0 : h.groupId,
                                                    acquiredSampleRate: null == h ? void 0 : h.sampleRate,
                                                    acquiredChannelCount: null == h ? void 0 : h.channelCount,
                                                    acquiredAutoGainControl: null == h ? void 0 : h.autoGainControl,
                                                    acquiredEchoCancellation: null == h ? void 0 : h.echoCancellation,
                                                    acquiredNoiseSuppression: null == h ? void 0 : h.noiseSuppression,
                                                    trackReadyState: null == d ? void 0 : d.readyState,
                                                    trackMuted: null == d ? void 0 : d.muted,
                                                    trackEnabled: null == d ? void 0 : d.enabled,
                                                    trackLabel: null == d ? void 0 : d.label,
                                                    availableInputDeviceCount: c().X8.state.length
                                                }
                                            }
                                        }), {
                                            stream: s,
                                            elapsedMs: performance.now() - t,
                                            attemptCount: r
                                        }
                                    } catch (t) {
                                        if (o().log({
                                                level: "error",
                                                from: "audioRecorderHelpers",
                                                type: "getUserMediaFailed",
                                                error: (0, n().convertErrorToLog)(t),
                                                data: {
                                                    miscDataToConvertToString: {
                                                        attempt: r,
                                                        requestedDeviceId: null == i ? void 0 : i.deviceId,
                                                        requestedDeviceLabel: null == i ? void 0 : i.label,
                                                        deviceSelectionMethod: u,
                                                        availableInputDeviceCount: c().X8.state.length,
                                                        errorName: t instanceof Error ? t.name : "unknown"
                                                    }
                                                }
                                            }), t instanceof Error) {
                                            let r = "NotAllowedError" === t.name || "NotFoundError" === t.name || "OverconstrainedError" === t.name;
                                            if (this.environment.device.isBrowser) {
                                                let r = Date.now() - e,
                                                    i = "NotAllowedError" === t.name ? "denied" : "NotFoundError" === t.name || "OverconstrainedError" === t.name ? "no_devices" : "unknown_error";
                                                (0, a().u)({
                                                    event: {
                                                        eventName: "ai_meeting_notes_permission_result",
                                                        eventProperties: {
                                                            permission_type: "microphone",
                                                            result: i,
                                                            elapsed_ms_since_request: r,
                                                            likely_user_was_prompted: r >= 300
                                                        }
                                                    }
                                                })
                                            }
                                            if (r) throw t
                                        }
                                        await (0, s().wR)(500)
                                    }
                                }
                                throw new(l()).Tn
                            },
                            v = async e => {
                                if (!this.includeSystemAudio) return;
                                let t = performance.now();
                                o().log({
                                    level: "info",
                                    from: "audioRecorderHelpers",
                                    type: "getDisplayMediaAttempt",
                                    data: {
                                        miscDataToConvertToString: {
                                            includeSystemAudio: this.includeSystemAudio
                                        }
                                    }
                                });
                                let r = 0;
                                for (; !e.aborted && r < 5;) {
                                    r++;
                                    let e = performance.now();
                                    try {
                                        let a = await m.getDisplayMedia({
                                                video: !1,
                                                audio: !0,
                                                systemAudio: this.includeSystemAudio ? "include" : void 0
                                            }),
                                            i = performance.now() - e;
                                        for (let e of (o().log({
                                                level: "info",
                                                from: "audioRecorderHelpers",
                                                type: "getDisplayMediaSuccess",
                                                data: {
                                                    miscDataToConvertToString: {
                                                        attemptElapsedMs: i,
                                                        attempt: r
                                                    }
                                                }
                                            }), a.getVideoTracks())) a.removeTrack(e), e.stop();
                                        return {
                                            stream: a,
                                            elapsedMs: performance.now() - t,
                                            attemptCount: r
                                        }
                                    } catch (e) {
                                        if (o().log({
                                                level: "error",
                                                from: "audioRecorderHelpers",
                                                type: "getDisplayMediaFailed",
                                                error: (0, n().convertErrorToLog)(e),
                                                data: {
                                                    miscDataToConvertToString: {
                                                        includeSystemAudio: this.includeSystemAudio,
                                                        attempt: r
                                                    }
                                                }
                                            }), e instanceof Error && "NotReadableError" === e.name) throw new(l()).$W;
                                        await (0, s().wR)(500)
                                    }
                                }
                                throw new(l()).Tn
                            },
                            f = async e => {
                                let [t, r] = await Promise.allSettled([p(e), v(e)]), a = e => {
                                    if ("fulfilled" === e.status && e.value)
                                        for (let t of e.value.stream.getTracks()) t.stop()
                                };
                                if ("rejected" === t.status) throw a(r), o().log({
                                    level: "error",
                                    from: "audioRecorderHelpers",
                                    type: "acquireMediaStreamsMicFailed",
                                    error: (0, n().convertErrorToLog)(t.reason),
                                    data: {
                                        miscDataToConvertToString: {
                                            systemAudioStatus: r.status
                                        }
                                    }
                                }), t.reason;
                                if (this.includeSystemAudio && "rejected" === r.status) throw a(t), o().log({
                                    level: "error",
                                    from: "audioRecorderHelpers",
                                    type: "acquireMediaStreamsSystemAudioFailed",
                                    error: (0, n().convertErrorToLog)(r.reason),
                                    data: {
                                        miscDataToConvertToString: {
                                            micStreamElapsedMs: t.value.elapsedMs
                                        }
                                    }
                                }), r.reason;
                                return {
                                    micResult: t.value,
                                    systemAudioResult: "fulfilled" === r.status ? r.value : void 0
                                }
                            },
                            g = Math.max(r(218744).default.getConfigKey("meeting_notes_media_acquisition_config", "timeoutMs"), 1e4),
                            S = performance.now(),
                            y = new AbortController,
                            A = f(y.signal),
                            C = await (0, s().nQ)(g, A);
                        if (C.timeout) throw y.abort(), A.then(({
                            micResult: e,
                            systemAudioResult: t
                        }) => {
                            let r = performance.now() - S;
                            for (let a of (o().log({
                                    level: "info",
                                    from: "audioRecorderHelpers",
                                    type: "acquireMediaStreamsSuccessAfterTimeout",
                                    data: {
                                        miscDataToConvertToString: {
                                            totalElapsedMs: r,
                                            micStreamElapsedMs: e.elapsedMs,
                                            micStreamAttemptCount: e.attemptCount,
                                            systemAudioStreamElapsedMs: null == t ? void 0 : t.elapsedMs,
                                            systemAudioStreamAttemptCount: null == t ? void 0 : t.attemptCount
                                        }
                                    }
                                }), e.stream.getTracks())) a.stop();
                            if (t)
                                for (let e of t.stream.getTracks()) e.stop()
                        }).catch(() => {}), o().log({
                            level: "warning",
                            from: "audioRecorderHelpers",
                            type: "acquireMediaStreamsTimeout",
                            data: {
                                miscDataToConvertToString: {
                                    timeoutMs: g,
                                    elapsedMs: performance.now() - S
                                }
                            }
                        }), new(l()).Tn;
                        let {
                            micResult: w,
                            systemAudioResult: M
                        } = C.result, T = w.stream.getAudioTracks()[0], b = null == T ? void 0 : T.getSettings(), D = null == M ? void 0 : M.stream.getAudioTracks(), _ = null == D || null == (e = D[0]) ? void 0 : e.getSettings();
                        o().log({
                            level: "info",
                            from: "audioRecorderHelpers",
                            type: "acquireMediaStreamsSuccess",
                            data: {
                                miscDataToConvertToString: {
                                    totalElapsedMs: performance.now() - S,
                                    micStreamElapsedMs: w.elapsedMs,
                                    systemAudioStreamElapsedMs: null == M ? void 0 : M.elapsedMs,
                                    includeSystemAudio: this.includeSystemAudio,
                                    micDeviceLabel: null == T ? void 0 : T.label,
                                    micDeviceId: null == b ? void 0 : b.deviceId,
                                    micSampleRate: null == b ? void 0 : b.sampleRate,
                                    systemAudioTrackCount: null == D ? void 0 : D.length,
                                    systemAudioSampleRate: null == _ ? void 0 : _.sampleRate
                                }
                            }
                        });
                        let R = w.stream,
                            E = null == M ? void 0 : M.stream;
                        if (await c().Ay.updateMediaDevices(), E ? this.mediaStreams = [R, E] : this.mediaStreams = [R], t.aborted) {
                            for (let e of this.mediaStreams ? ? [])
                                for (let t of e.getTracks()) t.stop();
                            return
                        }
                        let k = void 0 !== this.saveAudioFileMetadata && this.splitBySource;
                        if (await this.recorder.record({
                                mediaStreams: this.mediaStreams ? ? [],
                                onDataReceived: (e, r) => {
                                    t.aborted || (void 0 === this.saveAudioFileMetadata || k || this.appendToLocalAudioBuffer(e), this.onDataReceived(e, r))
                                },
                                onArchiveDataReceived: k ? e => {
                                    t.aborted || this.appendToLocalAudioBuffer(e)
                                } : void 0,
                                desiredSampleRate: this.sampleRate,
                                splitBySource: this.splitBySource
                            }), t.aborted) {
                            this.recorder.releaseMediaResources(), this.mediaStreams = void 0;
                            return
                        }
                        r(844561).d.addListener(this.handleDeviceChange), c().X8.addListener(this.handleDeviceChange)
                    }
                }
                appendToLocalAudioBuffer(e) {
                    this.audioBuffer.push(...e), this.maybeWriteAudioBufferToOPFS({
                        forceWrite: !1
                    })
                }
                maybeWriteAudioBufferToOPFS(e) {
                    let t = 10 * this.sampleRate;
                    if (void 0 !== this.saveAudioFileMetadata && (e.forceWrite || this.audioBuffer.length > t) && h.meetingNotesCache && this.environment.currentUser.id && this.currentStreamId) {
                        var a;
                        let {
                            blockStore: e
                        } = this.saveAudioFileMetadata, t = e.id, i = null == (a = (0, r(869708).y1)(e, "transcript")) ? void 0 : a.id;
                        if (void 0 === i) return;
                        h.meetingNotesCache.write((0, r(480534).G9)({
                            userId: this.environment.currentUser.id,
                            blockId: t,
                            transcriptTabId: i,
                            recordingId: this.currentStreamId,
                            fileType: "PCM_F32_16000_MONO"
                        }), new Float32Array(this.audioBuffer).buffer).catch(e => {
                            o().log({
                                level: "error",
                                from: "audioRecorderHelpers",
                                type: "writeToOPFSFailed",
                                error: (0, n().convertErrorToLog)(e),
                                data: {
                                    miscDataToConvertToString: {
                                        rootBlockId: t
                                    }
                                }
                            })
                        }), this.audioBuffer = []
                    }
                }
                stop(e) {
                    let {
                        error: t,
                        triggerOnStop: a = !0,
                        triggerFlushToOPFS: i = !1
                    } = e || {};
                    if (void 0 !== this.startController && !this.startController.signal.aborted) {
                        if (this.handleDeviceChangeDebounced.cancel(), this.startController.abort(), this.recorder.releaseMediaResources(), this.mediaStreams = void 0, (a || i) && this.maybeWriteAudioBufferToOPFS({
                                forceWrite: !0
                            }), a) {
                            var o;
                            this.currentStreamId = null, null == (o = this.onStop) || o.call(this, t)
                        }
                        r(844561).d.removeListener(this.handleDeviceChange), c().X8.removeListener(this.handleDeviceChange)
                    }
                }
                deviceChangeEventCount = 0;
                handleDeviceChangeImpl = async () => {
                    var e;
                    let t = this.deviceChangeEventCount;
                    this.deviceChangeEventCount = 0;
                    let a = null == (e = this.mediaStreams) || null == (e = e.flatMap(e => e.getAudioTracks())) || null == (e = e.map(e => e.getSettings())) ? void 0 : e.find(e => void 0 !== e),
                        i = this.getPreferredOrDefaultDevice(),
                        s = null == a ? void 0 : a.deviceId,
                        l = null == a ? void 0 : a.groupId,
                        d = null == i ? void 0 : i.deviceId,
                        u = null == i ? void 0 : i.groupId;
                    if (!a || i && (d !== s || u !== l)) {
                        o().log({
                            level: "info",
                            from: "audioRecorderHelpers",
                            type: "handleDeviceChange",
                            data: {
                                miscDataToConvertToString: {
                                    previousDeviceId: s,
                                    previousGroupId: l,
                                    newDeviceId: d,
                                    newGroupId: u,
                                    coalescedEventCount: t
                                }
                            }
                        }), this.stop({
                            triggerOnStop: !1,
                            triggerFlushToOPFS: !0
                        });
                        try {
                            await this.start(), o().log({
                                level: "info",
                                from: "audioRecorderHelpers",
                                type: "handleDeviceChangeRestartSuccess",
                                data: {
                                    miscDataToConvertToString: {
                                        newDeviceId: d,
                                        coalescedEventCount: t
                                    }
                                }
                            })
                        } catch (e) {
                            o().log({
                                level: "error",
                                from: "audioRecorderHelpers",
                                type: "handleDeviceChangeRestartFailed",
                                error: (0, n().convertErrorToLog)(e),
                                data: {
                                    miscDataToConvertToString: {
                                        newDeviceId: d,
                                        coalescedEventCount: t
                                    }
                                }
                            }), this.destroy((0, r(161179).A)(e))
                        }
                    }
                };
                handleDeviceChangeDebounced = (0, r(381453).sg)(() => {
                    this.handleDeviceChangeImpl()
                }, 2 * r(695216).TD, {
                    trailing: !0
                });
                handleDeviceChange = () => {
                    this.deviceChangeEventCount++, this.handleDeviceChangeDebounced()
                };
                destroy(e) {
                    this.handleDeviceChangeDebounced.cancel(), r(844561).d.removeListener(this.handleDeviceChange), c().X8.removeListener(this.handleDeviceChange), this.stop({
                        triggerOnStop: !0,
                        error: e
                    })
                }
            }
            class p {
                _audioWorkletNodes;
                _sourceNodes;
                _audioContext;
                set sourceNodes(e) {
                    this._sourceNodes && this._sourceNodes.forEach(e => e.disconnect()), this._sourceNodes = e
                }
                set audioWorkletNodes(e) {
                    this._audioWorkletNodes && this._audioWorkletNodes.forEach(e => e.disconnect()), this._audioWorkletNodes = e
                }
                set audioContext(e) {
                    this._audioContext && this._audioContext.close(), this._audioContext = e
                }
                get audioContext() {
                    return this._audioContext
                }
                async record(e) {
                    let {
                        mediaStreams: t,
                        onDataReceived: a,
                        onArchiveDataReceived: o,
                        desiredSampleRate: n,
                        splitBySource: s = !1
                    } = e;
                    if (this.releaseMediaResources(), this.audioContext = (0, r(601821).G)(n), this.audioContext.audioWorklet) try {
                        let e, l, d = new i(this.audioContext.sampleRate, n),
                            u = this.audioContext,
                            c = t.map(e => u.createMediaStreamSource(e));
                        await this.audioContext.audioWorklet.addModule(new URL(r(172136), r.b));
                        let m = e => t => {
                                let r = t.data;
                                if (r instanceof Float32Array) {
                                    let t = d.downsample(r);
                                    e(t)
                                }
                            },
                            h = s ? [...c.map((e, t) => {
                                let r = new AudioWorkletNode(u, "pcm-processor"),
                                    i = 0 === t ? "microphone" : "system_audio";
                                return r.port.onmessage = m(e => a(e, i)), e.connect(r), r
                            }), ...o ? [((e = new AudioWorkletNode(u, "pcm-processor")).port.onmessage = m(o), c.forEach(t => t.connect(e)), e)] : []] : [((l = new AudioWorkletNode(u, "pcm-processor")).port.onmessage = m(e => a(e)), c.forEach(e => e.connect(l)), l)];
                        this._audioWorkletNodes = h, this._sourceNodes = c
                    } catch {
                        console.info("unable to create worklet"), this.releaseMediaResources()
                    } else this.releaseMediaResources()
                }
                releaseMediaResources() {
                    this.sourceNodes = void 0, this.audioWorkletNodes = void 0, this.audioContext = void 0
                }
            }
        },
        154642: (e, t, r) => {
            r.d(t, {
                Ay: () => u,
                Kj: () => s
            }), r(16280);
            var a = () => r(546605);

            function i(e) {
                for (let t of e.getTracks()) t.stop()
            }
            async function o() {
                if (!window.isSecureContext) return r(347971).wv;
                try {
                    let e = (0, r(601821).E)(),
                        t = await e.getUserMedia({
                            video: !1,
                            audio: !0
                        });
                    return i(t), r(347971).a3
                } catch (t) {
                    let {
                        displayDictationPermissionSnackbar: e
                    } = await Promise.all([r.e(9773), r.e(55373), r.e(36192), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(5721), r.e(57688), r.e(64696), r.e(87971), r.e(79349), r.e(76135), r.e(61842), r.e(71136), r.e(86102), r.e(4902)]).then(r.bind(r, 164093));
                    if (t instanceof Error) switch (t.name) {
                        case r(347971).nY:
                            return e(r(347971).JS), r(347971).JS;
                        case r(347971).V9:
                        case r(347971).mL:
                            return e(r(347971).rP), r(347971).rP
                    }
                    return e(r(347971).JC), r(347971).JC
                }
            }
            let n = (0, r(381453).nF)(o, 1e3);
            async function s() {
                if (!window.isSecureContext) return r(347971).wv;
                try {
                    let e = (0, r(601821).E)(),
                        t = await e.getDisplayMedia({
                            video: !1,
                            audio: !0,
                            systemAudio: "include"
                        });
                    return i(t), r(347971).a3
                } catch (e) {
                    return r(773352).log({
                        level: "error",
                        from: "checkScreenRecordingPermissionsByTesting",
                        error: (0, r(416607).convertErrorToLog)(e),
                        type: "checkScreenRecordingPermissionsByTestingUnableToCaptureSystemAudio"
                    }), r(347971).JC
                }
            }
            let l = (0, r(381453).nF)(s, 1e3);
            class d extends a().Store {
                async checkPermissions(e) {
                    let t = await n(),
                        a = e ? await l() : r(347971).wg;
                    return this.setState({ ...this.state,
                        audio: t,
                        screenRecording: a
                    }), {
                        audio: t,
                        screenRecording: a
                    }
                }
                getHasAttemptedScreenRecordingPermissions() {
                    return this.state.hasAttemptedScreenRecordingPermissions
                }
                setHasAttemptedScreenRecordingPermissions(e) {
                    this.setState({ ...this.state,
                        hasAttemptedScreenRecordingPermissions: e
                    })
                }
                getInitialState() {
                    let e = window.isSecureContext ? r(347971).wg : r(347971).wv;
                    return {
                        audio: e,
                        screenRecording: e,
                        hasAttemptedScreenRecordingPermissions: void 0
                    }
                }
            }
            let u = new d
        },
        172136: (e, t, r) => {
            e.exports = r.p + "f777cc7996a6bfbe.js"
        },
        228327: (e, t, r) => {
            r.d(t, {
                $W: () => o,
                Dg: () => d,
                E6: () => u,
                Rv: () => l,
                Tn: () => n,
                XG: () => s,
                d1: () => i,
                eY: () => c
            });
            var a = () => r(101787);
            class i extends a().WXf {
                constructor(e) {
                    super({
                        level: "error",
                        status: 500,
                        name: "DictationAudioRecorderFailedError",
                        message: e || "Audio recorder failed",
                        retryable: !1
                    })
                }
            }
            a().WXf;
            class o extends a().WXf {
                constructor() {
                    super({
                        level: "error",
                        status: 500,
                        name: "DictationSystemAudioHardwareError",
                        message: "System audio hardware error",
                        retryable: !1
                    })
                }
            }
            class n extends a().WXf {
                constructor() {
                    super({
                        level: "error",
                        status: 500,
                        name: "DictationStartTimeoutError",
                        message: "Dictation start timeout",
                        retryable: !0
                    })
                }
            }
            class s extends a().WXf {
                constructor(e) {
                    super({
                        level: "error",
                        status: 429,
                        name: "DictationRateLimitError",
                        message: e || "Rate limit exceeded",
                        retryable: !1
                    })
                }
            }
            class l extends a().WXf {
                constructor(e) {
                    super({
                        level: "error",
                        status: 403,
                        name: "DictationForbiddenError",
                        message: e || "Access forbidden",
                        retryable: !1
                    })
                }
            }
            class d extends a().WXf {
                constructor(e) {
                    super({
                        level: "error",
                        status: 403,
                        name: "DictationUpgradeRequiredError",
                        message: e || "Workspace upgrade required",
                        retryable: !1
                    })
                }
            }
            class u extends a().WXf {
                constructor(e, t) {
                    super({
                        level: "error",
                        status: t && (0, r(654070).Mh)(t) ? t : 500,
                        name: "DictationOpenAIError",
                        message: e,
                        retryable: !0
                    })
                }
            }
            class c extends a().WXf {
                constructor(e) {
                    super({
                        level: "error",
                        status: 400,
                        name: "DictationMissingUserOrSpaceError",
                        message: e || "Missing user or space information",
                        retryable: !1
                    })
                }
            }
        },
        417044: (e, t, r) => {
            r.d(t, {
                p: () => i
            }), r(581454);
            var a = r(296540);

            function i(e) {
                let {
                    isEnabled: t,
                    numBars: r,
                    barHeights: i,
                    setBarHeights: o
                } = e, n = (0, a.useRef)(null);
                (0, a.useEffect)(() => {
                    if (n.current && cancelAnimationFrame(n.current), !t) return;
                    i.length !== r && o(Array(r).fill(3));
                    let e = {
                            lastFrameTime: Date.now(),
                            isSpeaking: !0,
                            speakingBlendFactor: 1,
                            nextStateChangeTime: Date.now() + 3e3 + 3e3 * Math.random(),
                            lastStateChangeTime: Date.now(),
                            activityLevel: .8 + .4 * Math.random(),
                            currentHeights: Array(r).fill(3)
                        },
                        a = {
                            phase: Array(r).fill(0).map(() => Math.random() * Math.PI * 2),
                            freq: Array(r).fill(0).map(() => .85 + .3 * Math.random()),
                            amp: Array(r).fill(0).map(() => .8 + .4 * Math.random())
                        },
                        s = {
                            slow: .6 + .15 * Math.random(),
                            medium: .9 + .2 * Math.random(),
                            fast: 2.8 + 1.2 * Math.random()
                        },
                        l = () => {
                            let t = Date.now(),
                                i = Math.min(.05, (t - e.lastFrameTime) / 1e3);
                            if (e.lastFrameTime = t, t > e.nextStateChangeTime) {
                                e.isSpeaking ? e.isSpeaking = Math.random() > .85 : e.isSpeaking = !0, e.lastStateChangeTime = t;
                                let r = e.isSpeaking ? 1400 : 200,
                                    a = r + Math.random() * ((e.isSpeaking ? 3800 : 500) - r);
                                e.nextStateChangeTime = t + a, e.isSpeaking && (e.activityLevel = .9 + .6 * Math.random())
                            }
                            let d = e.isSpeaking ? e.speakingBlendFactor : Math.max(.35, .45 * e.speakingBlendFactor),
                                u = e.isSpeaking ? 1 : .4,
                                c = e.isSpeaking ? 5 : 4.5;
                            Math.abs(e.speakingBlendFactor - u) > .01 ? e.speakingBlendFactor < u ? e.speakingBlendFactor = Math.min(u, e.speakingBlendFactor + i * c) : e.speakingBlendFactor = Math.max(u, e.speakingBlendFactor - i * c) : e.speakingBlendFactor = u;
                            let m = .25 * Math.sin(6e-4 * t) + .85,
                                h = e.activityLevel * m,
                                p = Math.max(0, .7 * Math.sin(.001 * t) + .3),
                                v = p > .55 && d > .5,
                                f = v ? 1 + (p - .55) * .8 : 1;
                            o(Array(r).fill(0).map((o, n) => {
                                let l = Math.pow(1 - 2 * Math.abs(n / (r - 1) - .5), .5),
                                    u = .006 * t,
                                    c = 3 + (Math.sin(u * a.freq[n] + a.phase[n]) * a.amp[n] + .5 * Math.sin(2.2 * u * a.freq[(n + 3) % r] + a.phase[(n + 2) % r]) + .3 * Math.sin(u * s.fast * a.freq[(n + 1) % r] + a.phase[(n + 5) % r]) + 1.2) * (v ? 6 : 5.5) * l * (.7 + .45 * Math.sin(u * s.slow + .1 * n) + .35 * Math.sin(u * s.medium + a.phase[n])) * (d * h * f),
                                    m = Math.min(1, i * (c > e.currentHeights[n] ? 25 : 16));
                                return e.currentHeights[n] = e.currentHeights[n] * (1 - m) + c * m, Math.max(3, Math.min(15, e.currentHeights[n]))
                            })), n.current = requestAnimationFrame(l)
                        };
                    return n.current = requestAnimationFrame(l), () => {
                        n.current && cancelAnimationFrame(n.current)
                    }
                }, [t, r, i.length, o])
            }
        },
        580022: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            var a = () => r(546605);
            class i extends a().Store {
                constructor() {
                    super()
                }
                getInitialState() {}
            }
            let o = new i
        },
        601821: (e, t, r) => {
            function a() {
                let e = navigator.mediaDevices;
                if (e instanceof MediaDevices) return e;
                throw Error("Media devices unavailable in current context.")
            }

            function i(e) {
                let t = window.AudioContext || window.webkitAudioContext || !1;
                if (t) {
                    var r;
                    return new t({ ...(null == (r = navigator) || null == (r = r.mediaDevices) ? void 0 : r.getSupportedConstraints().sampleRate) && {
                            sampleRate: e
                        }
                    })
                }
                throw Error("Browser does not support Web Audio API (AudioContext is not available).")
            }
            r.d(t, {
                E: () => a,
                G: () => i
            }), r(16280)
        },
        607825: (e, t, r) => {
            r.d(t, {
                Ay: () => d,
                X8: () => s,
                dc: () => l
            }), r(944114), r(898992), r(354520), r(672577), r(908872);
            var a = () => r(546605);
            async function i() {
                let e = (0, r(601821).E)();
                return (await e.enumerateDevices()).reduce((e, t) => {
                    if (t.kind && t.label && t.deviceId && t.groupId) switch (t.kind) {
                        case "videoinput":
                            e.videoInput.push(t);
                            break;
                        case "audioinput":
                            e.audioInput.push(t);
                            break;
                        case "audiooutput":
                            e.audioOutput.push(t)
                    }
                    return e
                }, {
                    videoInput: [],
                    audioInput: [],
                    audioOutput: []
                })
            }
            class o extends a().Store {
                async updateMediaDevices() {
                    try {
                        let e = await i();
                        this.setState(e)
                    } catch {}
                }
                constructor() {
                    super();
                    try {
                        (0, r(601821).E)().addEventListener("devicechange", () => {
                            this.updateMediaDevices()
                        })
                    } catch {}
                    r(154642).Ay.addListener(() => {
                        this.updateMediaDevices()
                    })
                }
                getInitialState() {
                    return {
                        videoInput: [],
                        audioInput: [],
                        audioOutput: []
                    }
                }
            }
            let n = new o,
                s = new(r(345426)).ComputedStore(() => {
                    var e, t;
                    return (null == (e = n.state) || null == (e = e.audioInput) || null == (t = e.filter) ? void 0 : t.call(e, e => null == e ? void 0 : e.label)) ? ? []
                }, {
                    debugName: "AudioInputDevicesStore"
                }),
                l = new(r(345426)).ComputedStore(() => {
                    var e;
                    let t = r(580022).A.state,
                        a = null == (e = r(844561).d.state) ? void 0 : e.label,
                        i = s.state.find(e => e.label === a);
                    return t || i || s.state[0]
                }, {
                    debugName: "SelectedAudioInputDeviceStore"
                }),
                d = n
        },
        650354: (e, t, r) => {
            r.d(t, {
                t: () => l
            }), r(944114), r(816573), r(878100), r(177936), r(748140), r(821903), r(491134), r(128845), r(237467), r(444732), r(979577), r(898992), r(803949), r(581454), r(908872);
            var a = r(296540),
                i = () => r(552923);
            class o extends i().u {
                constructor() {
                    super({
                        getInitialState: () => void 0,
                        effect: () => (this.setState((0, r(601821).G)(24e3)), () => {
                            this.setState(void 0)
                        }),
                        debugName: "SharedAudioContextStore"
                    })
                }
                getInitialState() {}
                setState(e) {
                    this.instanceState && this.instanceState.close(), super.setState(e)
                }
            }
            let n = new o;
            var s = r(474848);

            function l(e) {
                let {
                    fillWidth: t = !1,
                    forceRender: i = !1,
                    fakeSoundwave: o = !1,
                    rootBlockId: l,
                    barColor: d,
                    audioRecorder: u,
                    isAudioActive: c
                } = e, {
                    isIOS: m,
                    isMac: h
                } = (0, r(533992).Y0)(), p = (0, r(682985).K8)(() => {
                    if (!r(986939).A.isMobile) return;
                    let e = r(218744).default.getConfigKey("mobile_dictation_visualizer", "lowshelf_filter_gain");
                    if (m) {
                        var t;
                        let a = null == (t = r(580022).A.state) ? void 0 : t.label;
                        if ((0, r(722371).O9)(a) && "iPhone Microphone" !== a) return;
                        return e + 6
                    }
                    return e
                }, [m]), v = (r(986939).A.isMobile, 50), f = r(986939).A.isMobile ? 14e3 : 7e3, g = (0, a.useMemo)(() => (function(e = 50, t = 7e3) {
                    let r = (e + t) / 2;
                    return {
                        frequencyRangeMin: e,
                        frequencyRangeMax: t,
                        frequencyLowerQuarter: (e + r) / 2,
                        frequencyUpperQuarter: (r + t) / 2
                    }
                })(v, f), [v, f]), S = (0, r(682985).K8)(() => void 0 !== u ? !1 !== c : void 0 !== r(585823).Ay.state.rootBlock && void 0 !== l && r(585823).Ay.state.rootBlock.id === l, [u, c, l]), y = (0, r(682985).K8)(() => r(585823).Ay.state.audioRecorder, []), A = u ? ? y, C = (0, r(682985).O$)(n), w = (0, a.useRef)(null), M = (0, a.useRef)(void 0), [T, b] = (0, a.useState)(void 0), [D, _] = (0, a.useState)(8), [R, E] = (0, a.useState)([]);
                (0, r(417044).p)({
                    isEnabled: o,
                    numBars: D,
                    barHeights: R,
                    setBarHeights: E
                });
                let k = (0, a.useCallback)(() => {
                    if (t && (void 0 !== A || i || o) && w.current) {
                        let e = Math.max(1, Math.floor(w.current.clientWidth / 6.9));
                        _(e), E(t => t.length === e ? t : Array(e).fill(3))
                    }
                }, [t, A, i, o, 3, 3.9]);
                (0, r(729787).tK)(w, e => {
                    void 0 !== M.current && cancelAnimationFrame(M.current), M.current = requestAnimationFrame(() => {
                        M.current = void 0, b(e.width)
                    })
                }), (0, a.useEffect)(() => () => {
                    void 0 !== M.current && cancelAnimationFrame(M.current)
                }, []), (0, a.useEffect)(() => {
                    void 0 !== T && k()
                }, [T, k]), (0, a.useEffect)(() => {
                    if ((!i || o) && (S || void 0 === A)) {
                        if (void 0 !== A && void 0 !== C && !o) {
                            let e = new AbortController,
                                t = e.signal,
                                a = () => {
                                    let {
                                        mediaStreams: e
                                    } = A;
                                    if (e && e.length > 0) {
                                        let a = C.createChannelMerger(e.length),
                                            i = C.createAnalyser();
                                        i.fftSize = 2048;
                                        let o = e.map(t => {
                                            let i = [],
                                                o = C.createMediaStreamSource(t);
                                            if (i.push(o), (0, r(722371).O9)(p)) {
                                                let t = C.createGain();
                                                t.gain.setValueAtTime(p / e.length, C.currentTime), i.push(t)
                                            } else {
                                                var n;
                                                let e = null == (n = t.getAudioTracks().pop()) ? void 0 : n.label;
                                                if (h && e && e.includes("Built-in")) {
                                                    let e = C.createGain();
                                                    e.gain.setValueAtTime(6, C.currentTime), i.push(e)
                                                }
                                            }
                                            let s = C.createBiquadFilter();
                                            s.type = "highpass", s.frequency.setValueAtTime(g.frequencyLowerQuarter, C.currentTime), i.push(s);
                                            let l = C.createBiquadFilter();
                                            return l.type = "lowpass", l.frequency.setValueAtTime(g.frequencyUpperQuarter, C.currentTime), i.push(l), i.push(a), i
                                        });
                                        a.connect(i), o.forEach(e => {
                                            for (let t = 0; t < e.length - 1; t++) e[t].connect(e[t + 1])
                                        });
                                        let n = () => {
                                            o.forEach(e => {
                                                e.forEach(e => e.disconnect())
                                            }), a.disconnect(), i.disconnect()
                                        };
                                        C.resume();
                                        let s = new Uint8Array(i.frequencyBinCount),
                                            l = () => {
                                                if (t.aborted) return void n();
                                                i.getByteFrequencyData(s);
                                                let e = C.sampleRate / 2 / i.frequencyBinCount,
                                                    r = Math.round(g.frequencyRangeMin / e),
                                                    a = Math.round(g.frequencyRangeMax / e),
                                                    o = s.slice(r, a + 1),
                                                    d = Math.floor(o.length / D),
                                                    u = [];
                                                for (let e = 0; e < D; e++) {
                                                    let t = o.slice(e * d, e < D - 1 ? (e + 1) * d : o.length + 1),
                                                        r = Math.max(3, Math.min(12, t.reduce((e, t) => e + t, 0) / t.length / 3));
                                                    u.push(r)
                                                }
                                                E(u), requestAnimationFrame(l)
                                            },
                                            d = requestAnimationFrame(l);
                                        return () => {
                                            cancelAnimationFrame(d), n()
                                        }
                                    }
                                },
                                i = a(),
                                o = () => {
                                    "function" == typeof i && i(), i = a()
                                };
                            return A.emitter.on(r(83723).MEDIA_STREAM_CHANGE_EVENT, o), () => {
                                A.emitter.off(r(83723).MEDIA_STREAM_CHANGE_EVENT, o), "function" == typeof i && i(), e.abort()
                            }
                        }
                    } else E(Array(D).fill(3))
                }, [A, D, C, i, p, g, o, S, h]);
                let I = (0, r(960253).I)(() => ({
                    barStyle: {
                        flexShrink: 0,
                        bottom: "0",
                        width: "3px",
                        backgroundColor: d ? ? r(632079).Tj.icon.tertiary,
                        borderRadius: t ? "4px" : "1px"
                    }
                }), [3, t, d]);
                return (0, s.jsx)("div", {
                    ref: w,
                    style: {
                        height: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        gap: 3.9,
                        flex: t ? 1 : void 0
                    },
                    children: R.map((e, t) => (0, s.jsx)("div", {
                        style: { ...I.barStyle,
                            height: `${e}px`
                        }
                    }, t))
                })
            }
        },
        844561: (e, t, r) => {
            r.d(t, {
                d: () => a
            });
            let a = new(r(245541)).R({
                key: "preferred_audio_input_device",
                namespace: r(274919).cd,
                important: !0,
                trackingType: "preference"
            })
        }
    }
]);