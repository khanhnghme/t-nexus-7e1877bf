"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [99223], {
        6873: (e, t, r) => {
            r.d(t, {
                x: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).Pnc,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getInviteLinkCode() {
                    return this.v("invite_link_code")
                }
                getInviterUserId() {
                    return this.v("inviter_user_id")
                }
                getInviterUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getInviterUserPointer()
                }
                getInviterUserStore() {
                    let e = this.getInviterUserPointer(),
                        t = this.k("inviter_user_id");
                    return e && this.getRecordStore(t, e)
                }
                getChannel() {
                    return this.v("channel")
                }
            }
            class n extends s {
                static keyName = "SpaceInviteLinkStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        18647: (e, t, r) => {
            r.d(t, {
                V: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).hVd,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getTranscript() {
                    return this.getTranscriptStore().getValue() ? ? []
                }
                getTranscriptStore() {
                    return this.k("transcript")
                }
                getData() {
                    return this.getDataStore().getValue()
                }
                getDataStore() {
                    return this.k("data")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedBy() {
                    return this.v("created_by")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
            }
            class n extends s {
                static keyName = "InferenceTranscriptStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        38595: (e, t, r) => {
            r.d(t, {
                l: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).jvi,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getNavigableBlockId() {
                    return this.v("navigable_block_id")
                }
                getNavigableBlockPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getNavigableBlockPointer()
                }
                getNavigableBlockStore() {
                    let e = this.getNavigableBlockPointer(),
                        t = this.k("navigable_block_id");
                    return e && this.getRecordStore(t, e)
                }
                getFollowing() {
                    return this.v("following")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getFollowSettings() {
                    return this.getFollowSettingsStore().getValue()
                }
                getFollowSettingsStore() {
                    return this.k("follow_settings")
                }
            }
            class n extends s {
                static keyName = "FollowStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                isExplicitlySubscribedToFeed() {
                    var e;
                    let t = null == (e = this.getFollowSettings()) ? void 0 : e.feed_setting;
                    if (void 0 !== t) return "subscribed" === t
                }
                isExplicitlyUnsubscribedToFeed() {
                    var e;
                    let t = null == (e = this.getFollowSettings()) ? void 0 : e.feed_setting;
                    if (void 0 !== t) return "unsubscribed" === t
                }
            }
        },
        48922: (e, t, r) => {
            r.d(t, {
                y: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).uqU,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getListingId() {
                    return this.v("listing_id")
                }
                getListingPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getListingPointer()
                }
                getListingStore() {
                    let e = this.getListingPointer(),
                        t = this.k("listing_id");
                    return e && this.getRecordStore(t, e)
                }
                getCustomerId() {
                    return this.v("customer_id")
                }
                getCustomerPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCustomerPointer()
                }
                getCustomerStore() {
                    let e = this.getCustomerPointer(),
                        t = this.k("customer_id");
                    return e && this.getRecordStore(t, e)
                }
                getSellerId() {
                    return this.v("seller_id")
                }
                getDestinationTable() {
                    return this.v("destination_table")
                }
                getDestinationId() {
                    return this.v("destination_id")
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getStripePaymentIntentId() {
                    return this.v("stripe_payment_intent_id")
                }
                getProductPrice() {
                    return this.v("product_price")
                }
                getTotalPrice() {
                    return this.v("total_price")
                }
                getType() {
                    return this.v("type")
                }
                getStatus() {
                    return this.v("status")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getUpdatedTime() {
                    return this.v("updated_time")
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
            }
            class n extends s {
                static keyName = "MarketplaceAcquisitionStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        49682: (e, t, r) => {
            r.d(t, {
                L: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).JrB,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getIntegrationId() {
                    return this.v("integration_id")
                }
                getIntegrationPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getIntegrationPointer()
                }
                getIntegrationStore() {
                    let e = this.getIntegrationPointer(),
                        t = this.k("integration_id");
                    return e && this.getRecordStore(t, e)
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getLastUpdateTime() {
                    return this.v("last_update_time")
                }
                getAdminOnly() {
                    return this.v("admin_only")
                }
                getMcpConfig() {
                    return this.getMcpConfigStore().getValue()
                }
                getMcpConfigStore() {
                    return this.k("mcp_config")
                }
            }
            class n extends s {
                static keyName = "IntegrationManagementPermissionsStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        59521: (e, t, r) => {
            r.d(t, {
                b: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).$On,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getBannerType() {
                    return this.v("banner_type")
                }
                getBannerKey() {
                    return this.v("banner_key")
                }
                getAudience() {
                    return this.v("audience")
                }
                getBannerText() {
                    return this.v("banner_text")
                }
                getActiveAt() {
                    return this.v("active_at")
                }
                getExpiredAt() {
                    return this.v("expired_at")
                }
            }
            class n extends s {
                static keyName = "SubscriptionBannerStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        62148: (e, t, r) => {
            r.d(t, {
                g: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).u2Y,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getBotId() {
                    return this.v("bot_id")
                }
                getBotPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getBotPointer()
                }
                getBotStore() {
                    let e = this.getBotPointer(),
                        t = this.k("bot_id");
                    return e && this.getRecordStore(t, e)
                }
                getWebhookUrl() {
                    return this.v("webhook_url")
                }
                getWebhookSecret() {
                    return this.v("webhook_secret")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getApiVersion() {
                    return this.v("api_version")
                }
                getHealth() {
                    return this.getHealthStore().getValue()
                }
                getHealthStore() {
                    return this.k("health")
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getWebhookCustomization() {
                    return this.getWebhookCustomizationStore().getValue()
                }
                getWebhookCustomizationStore() {
                    return this.k("webhook_customization")
                }
            }
            class n extends s {
                static keyName = "WebhookSubscriptionStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        76763: (e, t, r) => {
            r.d(t, {
                n: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).TLv,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getEdgeType() {
                    return this.v("edge_type")
                }
                getSourceTable() {
                    return this.v("source_table")
                }
                getSourceId() {
                    return this.v("source_id")
                }
                getSourcePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSourcePointer()
                }
                getSourceStore() {
                    let e = this.getSourcePointer(),
                        t = this.k("source_id");
                    return e && this.getRecordStore(t, e)
                }
                getTargetTable() {
                    return this.v("target_table")
                }
                getTargetId() {
                    return this.v("target_id")
                }
                getTargetPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getTargetPointer()
                }
                getTargetStore() {
                    let e = this.getTargetPointer(),
                        t = this.k("target_id");
                    return e && this.getRecordStore(t, e)
                }
                getAlive() {
                    return this.v("alive")
                }
                getOrderKey() {
                    return this.v("order_key")
                }
                getMetadata() {
                    return this.getMetadataStore().getValue()
                }
                getMetadataStore() {
                    return this.k("metadata")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getUpdatedAt() {
                    return this.v("updated_at")
                }
            }
            class n extends s {
                static keyName = "EdgeStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        77479: (e, t, r) => {
            r.d(t, {
                d: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).rco,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getLocale() {
                    return this.v("locale")
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
            }
            class n extends s {
                static keyName = "MarketplaceProfileContentStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        97746: (e, t, r) => {
            r.d(t, {
                K: () => n
            }), r(16280), r(898992), r(354520), r(672577), r(581454);
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).gS6,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getRawModules() {
                    return this.getRawModulesStore().getValue()
                }
                getRawModulesStore() {
                    return this.k("modules")
                }
                getBlockChildren() {
                    return this.getBlockChildrenStore().getValue() ? ? []
                }
                getBlockChildrenStore() {
                    return this.k("blocks")
                }
                getBlockChildrenPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getBlockChildrenPointers()) ? ? []
                }
                getBlockChildrenStores() {
                    let e = this.getBlockChildrenStore();
                    return this.getRecordStoreArray(e, this.getBlockChildrenPointers())
                }
            }
            class n extends s {
                static keyName = "LayoutStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getCollectionSchema() {
                    let e = this.getCollectionModel();
                    if (e) return e.getNormalizedSchema(this.getRecordModel);
                    let t = this.getPublicPageData();
                    if (t && t.collectionId) {
                        let e = {
                                table: r(832375).VlP,
                                id: t.collectionId
                            },
                            i = this.getRecordStore(this, e);
                        if (i) return i.getSchema()
                    }
                }
                getCollectionFormat() {
                    let e = this.getCollectionModel();
                    if (e) return e.getFormat();
                    let t = this.getPublicPageData();
                    if (t && t.collectionId) {
                        let e = {
                                table: r(832375).VlP,
                                id: t.collectionId
                            },
                            i = this.getRecordStore(this, e);
                        if (i) return i.getFormat()
                    }
                }
                getCollectionModel() {
                    let e = this.getParentPointer();
                    if (e) {
                        if (e.table === r(832375).evP) {
                            let t = this.getRecordStore(this, e),
                                i = null == t ? void 0 : t.getParentPointer();
                            if (!t || !t.isDefined() || !i || i.table !== r(832375).Gy1) throw Error("Form block not loaded");
                            let s = this.getRecordStore(this, i),
                                n = null == s ? void 0 : s.getCollectionStore();
                            if (!s) throw Error("Form block parent not found");
                            return null == n ? void 0 : n.getModel()
                        } else if (e.table === r(832375).VlP) {
                            let t = this.getRecordStore(this, e),
                                r = null == t ? void 0 : t.getModel();
                            if (!r) throw Error("Collection model not found");
                            return r
                        }
                    }
                }
                getPreviousViewsMainCollectionViewBlockPointer() {
                    var e;
                    return null == (e = this.getModel()) || null == (e = e.getFormat()) ? void 0 : e.previousViewsMainCollectionViewBlockPointer
                }
                getFormat() {
                    var e;
                    let t = this.getModel();
                    return t ? t.getFormat() : null == (e = this.getPublicPageData()) ? void 0 : e.layoutFormat
                }
                getPublicPageData() {
                    if (this.inMemoryRecordCache !== this.environment.defaultRecordCache.inMemoryRecordCache) return;
                    let {
                        publicPageData: e
                    } = r(686494).A.state;
                    if (e && e.layoutId === this.id) return e
                }
                getRawModules() {
                    var e;
                    let t = this.getModel();
                    return t ? t.getRawModules() : null == (e = this.getPublicPageData()) ? void 0 : e.layoutModules
                }
                getDashboardModules() {
                    return (0, r(249596).M)(this.getRawModules())
                }
                getDashboardModulesStore() {
                    return this.getRawModulesStore().k("dashboard_layout_schema")
                }
                getViewsModuleCollectionViewBlockStore() {
                    let e = this.getRawModules();
                    if (!e) return;
                    let t = (0, r(886178).c7)(e, r(11287).y6);
                    if (!t || !(0, r(11287).y6)(t)) return;
                    let i = this.getRecordStore(this, t.collection_view_block_pointer);
                    if (i.isType("collection_view")) return i
                }
                getModulesForSchema(e) {
                    var t;
                    let i = this.getRawModules(),
                        s = this.getCollectionFormat(),
                        n = null == (t = this.getViewsModuleCollectionViewBlockStore()) ? void 0 : t.getModel(),
                        o = this.getRawFormQuestionModelsFromFormLayout(),
                        a = (0, r(641560).fx)({
                            rawModulesByArea: i,
                            relatedRecordData: {
                                collectionSchema: e,
                                collectionFormat: s,
                                viewsModuleCollectionViewBlock: n,
                                formQuestionModels: o,
                                getRecordModel: this.getRecordModel
                            },
                            normalizationOptions: {}
                        });
                    return (0, r(381453).n4)(a, r(641560).sd) && this.isReady() && !this.isDefined() ? (0, r(200394).xN)({
                        collectionSchema: e
                    }) : a
                }
                modulesByAreaStore;
                getModules(e) {
                    return null != e && e.collectionSchema ? this.getModulesForSchema(null == e ? void 0 : e.collectionSchema) : (this.modulesByAreaStore || (this.modulesByAreaStore = new(r(345426)).ComputedStore(() => {
                        let e = this.getCollectionSchema();
                        return this.getModulesForSchema(e)
                    }, {
                        debugName: "LayoutStore.getModules"
                    })), this.modulesByAreaStore.state)
                }
                getModuleById(e) {
                    if (!this.getModel()) {
                        if (!this.isReady() || this.isReady() && !this.isDefined()) return;
                        throw Error("Layout model not found")
                    }
                    let t = this.getModules(),
                        i = (0, r(886178).ku)(t, t => t.id === e);
                    if (!(i && (0, r(11287).cn)(i))) return i
                }
                getModuleByType(e) {
                    let t = this.getModules(),
                        i = (0, r(886178).ku)(t, t => t.type === e);
                    if (i && this.isModuleType(i, e)) return i
                }
                isModuleType(e, t) {
                    return e.type === t
                }
                getRawPageModuleAreaById(e) {
                    let t = this.getModules(),
                        i = (0, r(886178).JO)(t, t => t.id === e);
                    return null == i ? void 0 : i.area
                }
                firstModuleOfType(e) {
                    let t = this.getModules();
                    return (0, r(363300).Q)(t).find(t => t.type === e)
                }
                getRawModuleById(e) {
                    var t;
                    return null == (t = this.getModel()) ? void 0 : t.getRawModuleById(e)
                }
                getLayoutType() {
                    let e = this.getModel();
                    if (e) return e.getLayoutType()
                }
                isTabbedPageLayout() {
                    let e = this.getModel();
                    return !!e && e.isTabbedPageLayout()
                }
                getNormalizedFormQuestionStoresForFormLayout(e) {
                    let t = this.getModules({
                            collectionSchema: e.collectionSchema
                        }),
                        i = [...t.form_layout_schema, ...Object.values(t.form_conditional_modules || {})].filter(e => "formQuestion" === e.type);
                    return null == i ? void 0 : i.map(e => {
                        if ("formQuestion" !== e.type) throw Error("Must be form question");
                        return r(680802).c.createChildStore(this, {
                            table: "form_question",
                            id: e.formQuestionId,
                            spaceId: this.getSpaceId() ? ? ""
                        })
                    })
                }
                getRawFormQuestionModelsFromFormLayout() {
                    var e, t;
                    if (!this.getModel()) return;
                    let i = [...(null == (e = this.getRawModules()) ? void 0 : e.form_layout_schema) || [], ...Object.values((null == (t = this.getRawModules()) ? void 0 : t.form_conditional_modules) || {})].filter(e => "formQuestion" === e.type);
                    return (null == i ? void 0 : i.map(e => {
                        if ("formQuestion" !== e.type) throw Error("Must be form question");
                        return r(680802).c.createChildStore(this, {
                            table: "form_question",
                            id: e.formQuestionId,
                            spaceId: this.getSpaceId() ? ? ""
                        })
                    })).map(e => e.getModel())
                }
            }
        },
        131513: (e, t, r) => {
            r.d(t, {
                P: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).F7u,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getType() {
                    return this.v("type")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getDomainId() {
                    return this.v("domain_id")
                }
                getDomainPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDomainPointer()
                }
                getDomainStore() {
                    let e = this.getDomainPointer(),
                        t = this.k("domain_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getFaviconUrl() {
                    return this.v("favicon_url")
                }
                getPreviewImageUrl() {
                    return this.v("preview_image_url")
                }
                getHeader() {
                    return this.getHeaderStore().getValue()
                }
                getHeaderStore() {
                    return this.k("header")
                }
                getGoogleAnalyticsId() {
                    return this.v("google_analytics_id")
                }
                isSearchEngineIndexingEnabled() {
                    return this.v("is_search_engine_indexing_enabled") ? ? !1
                }
                getSettings() {
                    return this.getSettingsStore().getValue()
                }
                getSettingsStore() {
                    return this.k("settings")
                }
                getNumberLikes() {
                    return this.v("number_likes")
                }
            }
            class n extends s {
                static keyName = "SiteStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getSiteUserStore() {
                    var e;
                    let t = null == (e = this.getSettings()) ? void 0 : e.siteUserId;
                    if (t) return r(807825).L.createChildStore(this, {
                        id: t,
                        table: r(832375).oo9
                    })
                }
            }
        },
        142566: (e, t, r) => {
            r.d(t, {
                s: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).uTm,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getModuleType() {
                    return this.v("module_type")
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getName() {
                    return this.v("name")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getPermission() {
                    return this.getPermissionStore().getValue()
                }
                getPermissionStore() {
                    return this.k("permission")
                }
                getScopes() {
                    return this.getScopesStore().getValue() ? ? []
                }
                getScopesStore() {
                    return this.k("scopes")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getWorkflowExternalConnectionId() {
                    return this.v("workflow_external_connection_id")
                }
                getWorkflowExternalConnectionPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getWorkflowExternalConnectionPointer()
                }
                getWorkflowExternalConnectionStore() {
                    let e = this.getWorkflowExternalConnectionPointer(),
                        t = this.k("workflow_external_connection_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class n extends s {
                static keyName = "WorkflowExternalScopedConnectionStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                isPersonalPermission() {
                    var e;
                    return (null == (e = this.getPermission()) ? void 0 : e.type) === "personal"
                }
                isSpacePermission() {
                    var e;
                    return (null == (e = this.getPermission()) ? void 0 : e.type) === "space"
                }
            }
        },
        148493: (e, t, r) => {
            r.d(t, {
                J: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).bEu,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getNotionUserId() {
                    return this.v("notion_user_id")
                }
                getNotionUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getNotionUserPointer()
                }
                getNotionUserStore() {
                    let e = this.getNotionUserPointer(),
                        t = this.k("notion_user_id");
                    return e && this.getRecordStore(t, e)
                }
                getNotionSpaceId() {
                    return this.v("notion_space_id")
                }
                getNotionSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getNotionSpacePointer()
                }
                getNotionSpaceStore() {
                    let e = this.getNotionSpacePointer(),
                        t = this.k("notion_space_id");
                    return e && this.getRecordStore(t, e)
                }
                getDiscordUserId() {
                    return this.v("discord_user_id")
                }
                getDiscordServerId() {
                    return this.v("discord_server_id")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getUpdatedAt() {
                    return this.v("updated_at")
                }
            }
            class n extends s {
                static keyName = "ServerIntegrationsDiscordUserMappingStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        154998: (e, t, r) => {
            r.d(t, {
                U: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).ueJ,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getContentfulId() {
                    return this.v("contentful_id")
                }
                getIntegrationId() {
                    return this.v("integration_id")
                }
                getCreatorId() {
                    return this.v("creator_id")
                }
                getTags() {
                    return this.getTagsStore().getValue() ? ? []
                }
                getTagsStore() {
                    return this.k("tags")
                }
                getName() {
                    return this.v("name")
                }
                getSlug() {
                    return this.v("slug")
                }
                getLocale() {
                    return this.v("locale")
                }
                getInfo() {
                    return this.getInfoStore().getValue()
                }
                getInfoStore() {
                    return this.k("info")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getLastUpdatedAt() {
                    return this.v("last_updated_at")
                }
            }
            class n extends s {
                static keyName = "IntegrationListingStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        157521: (e, t, r) => {
            r.d(t, {
                J: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).HZ4,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
                getStatus() {
                    return this.v("status")
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getLocale() {
                    return this.v("locale")
                }
                getProfileId() {
                    return this.v("profile_id")
                }
                getProfilePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getProfilePointer()
                }
                getProfileStore() {
                    let e = this.getProfilePointer(),
                        t = this.k("profile_id");
                    return e && this.getRecordStore(t, e)
                }
                getSourceWorkflowId() {
                    return this.v("source_workflow_id")
                }
                getSourceWorkflowSpaceId() {
                    return this.v("source_workflow_space_id")
                }
                getPublishedWorkflowId() {
                    return this.v("published_workflow_id")
                }
                getPublishedWorkflowSpaceId() {
                    return this.v("published_workflow_space_id")
                }
                getTitle() {
                    return this.v("title")
                }
                getSlug() {
                    return this.v("slug")
                }
                getTags() {
                    return this.getTagsStore().getValue() ? ? []
                }
                getTagsStore() {
                    return this.k("tags")
                }
            }
            class n extends s {
                static keyName = "MarketplaceCustomAgentVersionStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        159188: (e, t, r) => {
            r.d(t, {
                _: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).CxJ,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getPhysicalDeviceId() {
                    return this.v("physical_device_id")
                }
                getOfferCodeId() {
                    return this.v("offer_code_id")
                }
                getOfferCodePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getOfferCodePointer()
                }
                getOfferCodeStore() {
                    let e = this.getOfferCodePointer(),
                        t = this.k("offer_code_id");
                    return e && this.getRecordStore(t, e)
                }
                getOffer() {
                    return this.getOfferStore().getValue()
                }
                getOfferStore() {
                    return this.k("offer")
                }
                getEntrypoint() {
                    return this.v("entrypoint")
                }
                getStartDateMs() {
                    return this.v("start_date_ms")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getType() {
                    return this.v("type")
                }
                getEndDateMs() {
                    return this.v("end_date_ms")
                }
            }
            class n extends s {
                static keyName = "OfferStatusStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        167381: (e, t, r) => {
            r.d(t, {
                n: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).rkB,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getAlive() {
                    return this.v("alive")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getType() {
                    return this.v("type")
                }
                getData() {
                    return this.getDataStore().getValue()
                }
                getDataStore() {
                    return this.k("data")
                }
            }
            class n extends s {
                static keyName = "AssistantSessionStarterStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                isRecent() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getType()) === "recent"
                }
                isFavorite() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getType()) === "favorite"
                }
                getAssistantSessionStarterData() {
                    var e;
                    let t = null == (e = this.getModel()) ? void 0 : e.getData();
                    if (t) switch (t.type) {
                        case "human_step_only":
                            return {
                                type: "human_step_only",
                                initialHumanStep: t.initialHumanStep
                            };
                        case "skill_only":
                            return {
                                type: "skill_only",
                                skill: t.skill
                            };
                        case "skill_with_human_step":
                            return {
                                type: "skill_with_human_step",
                                initialHumanStep: t.initialHumanStep,
                                skill: t.skill
                            };
                        default:
                            (0, r(722371).HB)(t)
                    }
                }
            }
        },
        172960: (e, t, r) => {
            r.d(t, {
                U: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).Yj4,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getScopeTable() {
                    return this.v("scope_table")
                }
                getScopeId() {
                    return this.v("scope_id")
                }
                getScopePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getScopePointer()
                }
                getScopeStore() {
                    let e = this.getScopePointer(),
                        t = this.k("scope_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getRecordKey() {
                    return this.v("record_key")
                }
                getAlive() {
                    return this.v("alive")
                }
            }
            class n extends s {
                static keyName = "RecordKeyStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        174148: (e, t, r) => {
            r.d(t, {
                E: () => n
            }), r(18107), r(967357), r(898992), r(354520), r(672577), r(581454);
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).mHT,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getMessages() {
                    return this.getMessagesStore().getValue() ? ? []
                }
                getMessagesStore() {
                    return this.k("messages")
                }
                getMessagePointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getMessagePointers()) ? ? []
                }
                getMessageStores() {
                    let e = this.getMessagesStore();
                    return this.getRecordStoreArray(e, this.getMessagePointers())
                }
                getData() {
                    return this.getDataStore().getValue()
                }
                getDataStore() {
                    return this.k("data")
                }
                getPermissionItems() {
                    return this.getPermissionItemsStore().getValue() ? ? []
                }
                getPermissionItemsStore() {
                    return this.k("permissions")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getAlive() {
                    return this.v("alive")
                }
                getType() {
                    return this.v("type")
                }
                getCurrentInferenceId() {
                    return this.v("current_inference_id")
                }
                getCurrentInferenceLeaseExpiration() {
                    return this.v("current_inference_lease_expiration")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getUpdatedTime() {
                    return this.v("updated_time")
                }
                getUpdatedById() {
                    return this.v("updated_by_id")
                }
                getUpdatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUpdatedByPointer()
                }
                getUpdatedByStore() {
                    let e = this.getUpdatedByPointer(),
                        t = this.k("updated_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getUpdatedByTable() {
                    return this.v("updated_by_table")
                }
                getFileIds() {
                    return this.getFileIdsStore().getValue() ? ? []
                }
                getFileIdsStore() {
                    return this.k("file_ids")
                }
                getCreatedSource() {
                    return this.v("created_source")
                }
            }
            class n extends s {
                static keyName = "ThreadStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getPermissionItems() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getPermissions()) ? ? []
                }
                getPermissionsStore() {
                    return this.k("permissions")
                }
                getTranscript() {
                    return this.getMessageStores().map(e => null == e ? void 0 : e.getStep()).filter(r(722371).O9)
                }
                getConfig() {
                    var e;
                    return null == (e = this.getTranscript().find(e => (null == e ? void 0 : e.type) === "config")) ? void 0 : e.value
                }
                getMessageStoreAt(e) {
                    return this.getMessageStores().at(e)
                }
                getStepStoreAt(e) {
                    var t;
                    return null == (t = this.getMessageStoreAt(e)) ? void 0 : t.getStepStore()
                }
                getMessageStoreById(e) {
                    return this.getMessageStores().find(t => (null == t ? void 0 : t.id) === e)
                }
                getStepStoreById(e) {
                    var t;
                    return null == (t = this.getMessageStoreById(e)) ? void 0 : t.getStepStore()
                }
                getIsInferenceLeaseActive() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isInferenceLeaseActive()) ? ? !1
                }
            }
        },
        183934: (e, t, r) => {
            r.d(t, {
                C: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).cf,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getName() {
                    return this.v("name")
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getUpdatedAt() {
                    return this.v("updated_at")
                }
                getUpdatedById() {
                    return this.v("updated_by_id")
                }
                getUpdatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUpdatedByPointer()
                }
                getUpdatedByStore() {
                    let e = this.getUpdatedByPointer(),
                        t = this.k("updated_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getUpdatedByTable() {
                    return this.v("updated_by_table")
                }
                getRedirectUris() {
                    return this.getRedirectUrisStore().getValue() ? ? []
                }
                getRedirectUrisStore() {
                    return this.k("redirect_uris")
                }
                getStatus() {
                    return this.v("status")
                }
                getInfo() {
                    return this.getInfoStore().getValue()
                }
                getInfoStore() {
                    return this.k("info")
                }
                getAlive() {
                    return this.v("alive")
                }
                getCapabilities() {
                    return this.getCapabilitiesStore().getValue()
                }
                getCapabilitiesStore() {
                    return this.k("capabilities")
                }
                getType() {
                    return this.v("type")
                }
                getListingStatus() {
                    return this.v("listing_status")
                }
                getPermissionItems() {
                    return this.getPermissionItemsStore().getValue() ? ? []
                }
                getPermissionItemsStore() {
                    return this.k("permissions")
                }
            }
            class n extends s {
                static keyName = "IntegrationStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                isInternalIntegration() {
                    return "internal" === this.getType()
                }
                isType(e) {
                    return this.getType() === e
                }
            }
        },
        185878: (e, t, r) => {
            r.d(t, {
                Q: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).MEb,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getContentfulId() {
                    return this.v("contentful_id")
                }
                getName() {
                    return this.v("name")
                }
                getSlug() {
                    return this.v("slug")
                }
                getLocale() {
                    return this.v("locale")
                }
                getDescription() {
                    return this.v("description")
                }
                getContentfulParentId() {
                    return this.v("contentful_parent_id")
                }
                getIcon() {
                    return this.getIconStore().getValue()
                }
                getIconStore() {
                    return this.k("icon")
                }
                getPublishedVersion() {
                    return this.v("published_version")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getLastUpdatedAt() {
                    return this.v("last_updated_at")
                }
                getLastSyncedAt() {
                    return this.v("last_synced_at")
                }
                getSubcategoryContentfulIds() {
                    return this.getSubcategoryContentfulIdsStore().getValue() ? ? []
                }
                getSubcategoryContentfulIdsStore() {
                    return this.k("subcategory_contentful_ids")
                }
                getFeaturedTemplateContentfulIds() {
                    return this.getFeaturedTemplateContentfulIdsStore().getValue() ? ? []
                }
                getFeaturedTemplateContentfulIdsStore() {
                    return this.k("featured_template_contentful_ids")
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
                getNumberOfTemplates() {
                    return this.v("number_of_templates")
                }
                getTemplateImage() {
                    return this.getTemplateImageStore().getValue()
                }
                getTemplateImageStore() {
                    return this.k("template_image")
                }
                getScore1() {
                    return this.v("score_1")
                }
                getScore2() {
                    return this.v("score_2")
                }
                getScore3() {
                    return this.v("score_3")
                }
                getScore4() {
                    return this.v("score_4")
                }
                getScore5() {
                    return this.v("score_5")
                }
                getSubcategoryContentfulIdsV2() {
                    return this.getSubcategoryContentfulIdsV2Store().getValue() ? ? []
                }
                getSubcategoryContentfulIdsV2Store() {
                    return this.k("subcategory_contentful_ids_v2")
                }
                getHideInWebGallery() {
                    return this.v("hide_in_web_gallery")
                }
                getShowInApp() {
                    return this.v("show_in_app")
                }
                getNumberOfTemplatesV2() {
                    return this.v("number_of_templates_v2")
                }
            }
            class n extends s {
                static keyName = "TemplateTagStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        186775: (e, t, r) => {
            r.d(t, {
                J: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).heE,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
                getListingId() {
                    return this.v("listing_id")
                }
                getListingPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getListingPointer()
                }
                getListingStore() {
                    let e = this.getListingPointer(),
                        t = this.k("listing_id");
                    return e && this.getRecordStore(t, e)
                }
                getDraftVersions() {
                    return this.getDraftVersionsStore().getValue()
                }
                getDraftVersionsStore() {
                    return this.k("draft_versions")
                }
                getPublishedVersions() {
                    return this.getPublishedVersionsStore().getValue()
                }
                getPublishedVersionsStore() {
                    return this.k("published_versions")
                }
                getPinned() {
                    return this.v("pinned")
                }
            }
            class n extends s {
                static keyName = "MarketplaceCustomAgentStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getDraftVersion(e) {
                    let t = (this.getDraftVersions() ? ? {})[e];
                    return t ? r(157521).J.createChildStore(this, {
                        table: r(832375).a8w,
                        id: t
                    }) : void 0
                }
                getPublishedVersion(e) {
                    let t = (this.getPublishedVersions() ? ? {})[e];
                    return t ? r(157521).J.createChildStore(this, {
                        table: r(832375).a8w,
                        id: t
                    }) : void 0
                }
            }
        },
        186982: (e, t, r) => {
            r.d(t, {
                E: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).AMn,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getFreeChartViewIds() {
                    return this.getFreeChartViewIdsStore().getValue() ? ? []
                }
                getFreeChartViewIdsStore() {
                    return this.k("free_chart_view_ids")
                }
                getFreeChartViewPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getFreeChartViewPointers()) ? ? []
                }
                getFreeChartViewStores() {
                    let e = this.getFreeChartViewIdsStore();
                    return this.getRecordStoreArray(e, this.getFreeChartViewPointers())
                }
            }
            class n extends s {
                static keyName = "FreeChartStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        202542: (e, t, r) => {
            r.d(t, {
                o: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).G2U,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getContentfulId() {
                    return this.v("contentful_id")
                }
                getTitle() {
                    return this.v("title")
                }
                getContents() {
                    return this.getContentsStore().getValue() ? ? []
                }
                getContentsStore() {
                    return this.k("contents")
                }
                getPublishedVersion() {
                    return this.v("published_version")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getLastUpdatedAt() {
                    return this.v("last_updated_at")
                }
                getLastSyncedAt() {
                    return this.v("last_synced_at")
                }
                getLocale() {
                    return this.v("locale")
                }
                getCategoryId() {
                    return this.v("category_id")
                }
                isEditorial() {
                    return this.v("is_editorial") ? ? !1
                }
                getEditorialAttributes() {
                    return this.getEditorialAttributesStore().getValue()
                }
                getEditorialAttributesStore() {
                    return this.k("editorial_attributes")
                }
            }
            class n extends s {
                static keyName = "TemplateContentGroupStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        207919: (e, t, r) => {
            r.d(t, {
                J: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).D5u,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getTitle() {
                    return this.v("title")
                }
                getAcquisitionId() {
                    return this.v("acquisition_id")
                }
                getAcquisitionPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getAcquisitionPointer()
                }
                getAcquisitionStore() {
                    let e = this.getAcquisitionPointer(),
                        t = this.k("acquisition_id");
                    return e && this.getRecordStore(t, e)
                }
                getRating() {
                    return this.v("rating")
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
                getSerializedContent() {
                    return this.getSerializedContentStore().getValue()
                }
                getSerializedContentStore() {
                    return this.k("serialized_content")
                }
                getSerializedCreatorResponse() {
                    return this.getSerializedCreatorResponseStore().getValue()
                }
                getSerializedCreatorResponseStore() {
                    return this.k("serialized_creator_response")
                }
                getStatus() {
                    return this.v("status")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getUpdatedTime() {
                    return this.v("updated_time")
                }
            }
            class n extends s {
                static keyName = "MarketplaceListingReviewStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        210952: (e, t, r) => {
            r.d(t, {
                Y: () => s,
                y: () => n
            }), r(16280);
            var i = () => r(359990);
            class s extends i().u {
                ModelClass;
                constructor(e) {
                    super(e.environment, e.pointer, e.options), this.ModelClass = e.ModelClass
                }
                lastValue;
                model;
                getModel() {
                    if (this.isDefined()) return this.model ? ? = new this.ModelClass(this.pointer, e => this.getKeyStore(e), () => {
                        let e = this.getValue() ? ? this.lastValue;
                        return this.lastValue = e, e
                    }), this.model
                }
                asRecordStore(e) {
                    var t;
                    if (e instanceof r(517013).pm) return e;
                    throw Error(`IPathModel is not a RecordStore: ${null==(t=e.constructor)?void 0:t.name}.`)
                }
            }
            class n extends s {
                static keyName = "ModelRecordStore";
                constructor(e, t, i) {
                    super({
                        ModelClass: (0, r(993189).aAq)(t.table),
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
            }
        },
        222142: (e, t, r) => {
            r.d(t, {
                M: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).ecG,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getContentfulId() {
                    return this.v("contentful_id")
                }
                getName() {
                    return this.v("name")
                }
                getSlug() {
                    return this.v("slug")
                }
                getAuthors() {
                    return this.getAuthorsStore().getValue() ? ? []
                }
                getAuthorsStore() {
                    return this.k("authors")
                }
                getLocale() {
                    return this.v("locale")
                }
                getTemplates() {
                    return this.getTemplatesStore().getValue() ? ? []
                }
                getTemplatesStore() {
                    return this.k("templates")
                }
                getDescription() {
                    return this.v("description")
                }
                getLongDescription() {
                    return this.v("long_description")
                }
                getCollectionBody() {
                    return this.getCollectionBodyStore().getValue()
                }
                getCollectionBodyStore() {
                    return this.k("collection_body")
                }
                getMetaTitle() {
                    return this.v("meta_title")
                }
                getMetaDescription() {
                    return this.v("meta_description")
                }
                getPublishedVersion() {
                    return this.v("published_version")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getLastUpdatedAt() {
                    return this.v("last_updated_at")
                }
                getLastSyncedAt() {
                    return this.v("last_synced_at")
                }
                getPublishedAt() {
                    return this.v("published_at")
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
                getDisplayInApp() {
                    return this.v("display_in_app")
                }
                getContents() {
                    return this.getContentsStore().getValue() ? ? []
                }
                getContentsStore() {
                    return this.k("contents")
                }
            }
            class n extends s {
                static keyName = "TemplateCollectionStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        229903: (e, t, r) => {
            r.d(t, {
                V: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).lJX,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getMembershipType() {
                    return this.v("membership_type")
                }
                getBillingExempt() {
                    return this.v("billing_exempt")
                }
                getExpirationTime() {
                    return this.v("expiration_time")
                }
                getInviteId() {
                    return this.v("invite_id")
                }
                getInvitePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getInvitePointer()
                }
                getInviteStore() {
                    let e = this.getInvitePointer(),
                        t = this.k("invite_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class n extends s {
                static keyName = "SpaceUserStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                isWorkspaceOwner() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.isWorkspaceOwner()
                }
                isPageGuest() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.isPageGuest()
                }
                isMember() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.isMember()
                }
                isRestrictedMember() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.isRestrictedMember()
                }
                canEditMembership() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.canEditMembership()) ? ? !1
                }
                getMembershipTypeAsRoleOrNone() {
                    let e = super.getMembershipType();
                    return e && (0, r(729052).MN)(e) ? (0, r(729052).C4)(e) : "none"
                }
            }
        },
        253680: (e, t, r) => {
            r.d(t, {
                G: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).qbs,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getRelationship() {
                    return this.v("relationship")
                }
                getRelatedContent() {
                    return this.getRelatedContentStore().getValue() ? ? []
                }
                getRelatedContentStore() {
                    return this.k("related_content")
                }
                getUpdatedTime() {
                    return this.v("updated_time")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class n extends s {
                static keyName = "RelatedContentStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        256577: (e, t, r) => {
            r.d(t, {
                V: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).DtE,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getStartTime() {
                    return this.v("start_time")
                }
                getTypeVersion() {
                    return this.v("type_version")
                }
                getBillingData() {
                    return this.getBillingDataStore().getValue()
                }
                getBillingDataStore() {
                    return this.k("billing_data")
                }
            }
            class n extends s {
                static keyName = "BillingDataHistoryEntryStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        258710: (e, t, r) => {
            r.d(t, {
                s: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).KMZ,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getContentfulId() {
                    return this.v("contentful_id")
                }
                getName() {
                    return this.v("name")
                }
                getSlug() {
                    return this.v("slug")
                }
                getLocale() {
                    return this.v("locale")
                }
                getDescription() {
                    return this.v("description")
                }
                getPrice() {
                    return this.v("price")
                }
                getAuthors() {
                    return this.getAuthorsStore().getValue() ? ? []
                }
                getAuthorsStore() {
                    return this.k("authors")
                }
                getMadeBy() {
                    return this.v("made_by")
                }
                getTags() {
                    return this.getTagsStore().getValue() ? ? []
                }
                getTagsStore() {
                    return this.k("tags")
                }
                getBody() {
                    return this.getBodyStore().getValue()
                }
                getBodyStore() {
                    return this.k("body")
                }
                getBlockId() {
                    return this.v("block_id")
                }
                getPublishedBlockId() {
                    return this.v("published_block_id")
                }
                getPublishedSpaceId() {
                    return this.v("published_space_id")
                }
                getPublishedSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getPublishedSpacePointer()
                }
                getPublishedSpaceStore() {
                    let e = this.getPublishedSpacePointer(),
                        t = this.k("published_space_id");
                    return e && this.getRecordStore(t, e)
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getLastUpdatedAt() {
                    return this.v("last_updated_at")
                }
                getPublishedVersion() {
                    return this.v("published_version")
                }
                getLastSyncedAt() {
                    return this.v("last_synced_at")
                }
                getAllTags() {
                    return this.getAllTagsStore().getValue() ? ? []
                }
                getAllTagsStore() {
                    return this.k("all_tags")
                }
                getNumberOfDuplicates() {
                    return this.v("number_of_duplicates")
                }
                getScore1() {
                    return this.v("score_1")
                }
                getScore2() {
                    return this.v("score_2")
                }
                getScore3() {
                    return this.v("score_3")
                }
                getScore4() {
                    return this.v("score_4")
                }
                getScore5() {
                    return this.v("score_5")
                }
                getScore6() {
                    return this.v("score_6")
                }
                getScore7() {
                    return this.v("score_7")
                }
                getScore8() {
                    return this.v("score_8")
                }
                getScore9() {
                    return this.v("score_9")
                }
                getScore10() {
                    return this.v("score_10")
                }
                getScore11() {
                    return this.v("score_11")
                }
                getScore12() {
                    return this.v("score_12")
                }
                getShowInGallery() {
                    return this.v("show_in_gallery")
                }
                getTemplateDraftId() {
                    return this.v("template_draft_id")
                }
                getTemplateDraftPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getTemplateDraftPointer()
                }
                getTemplateDraftStore() {
                    let e = this.getTemplateDraftPointer(),
                        t = this.k("template_draft_id");
                    return e && this.getRecordStore(t, e)
                }
                getTemplateDraftVersion() {
                    return this.v("template_draft_version")
                }
                getTagsV2() {
                    return this.getTagsV2Store().getValue() ? ? []
                }
                getTagsV2Store() {
                    return this.k("tags_v2")
                }
                getAllTagsV2() {
                    return this.getAllTagsV2Store().getValue() ? ? []
                }
                getAllTagsV2Store() {
                    return this.k("all_tags_v2")
                }
                getListingId() {
                    return this.v("listing_id")
                }
                getListingPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getListingPointer()
                }
                getListingStore() {
                    let e = this.getListingPointer(),
                        t = this.k("listing_id");
                    return e && this.getRecordStore(t, e)
                }
                isDefaultLocale() {
                    return this.v("is_default_locale") ? ? !1
                }
            }
            class n extends s {
                static keyName = "TemplateStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getTemplateImage() {
                    return this.getAttributesStore().getKeyStore("image").getValue()
                }
                getTemplateEmoji() {
                    return this.getAttributesStore().getKeyStore("emoji").getValue()
                }
                getTemplateIcon() {
                    return this.getAttributesStore().getKeyStore("icon").getValue()
                }
                getAppTemplateURI() {
                    return this.getAttributesStore().getKeyStore("app_template_uri").getValue()
                }
                getEmailRequirement() {
                    return this.getAttributesStore().getKeyStore("email_requirement").getValue()
                }
            }
        },
        260331: (e, t, r) => {
            r.d(t, {
                V: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).NMH,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getUrl() {
                    return this.v("url")
                }
                getType() {
                    return this.v("type")
                }
            }
            class n extends s {
                static keyName = "InternalDomainStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        264541: (e, t, r) => {
            r.d(t, {
                b: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).p7l,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getBotId() {
                    return this.v("bot_id")
                }
                getBotPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getBotPointer()
                }
                getBotStore() {
                    let e = this.getBotPointer(),
                        t = this.k("bot_id");
                    return e && this.getRecordStore(t, e)
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getMembershipType() {
                    return this.v("membership_type")
                }
                getBotParentTable() {
                    return this.v("bot_parent_table")
                }
                getBotParentId() {
                    return this.v("bot_parent_id")
                }
                getBotParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getBotParentPointer()
                }
                getBotParentStore() {
                    let e = this.getBotParentPointer(),
                        t = this.k("bot_parent_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class n extends s {
                static keyName = "SpaceBotStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                isWorkspaceOwner() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.isWorkspaceOwner()
                }
                isMember() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.isMember()
                }
            }
        },
        275791: (e, t, r) => {
            r.d(t, {
                b: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).Jws,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getFormData() {
                    return this.getFormDataStore().getValue()
                }
                getFormDataStore() {
                    return this.k("form_data")
                }
                getFormId() {
                    return this.v("form_id")
                }
                getFormPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getFormPointer()
                }
                getFormStore() {
                    let e = this.getFormPointer(),
                        t = this.k("form_id");
                    return e && this.getRecordStore(t, e)
                }
                getFormVersion() {
                    return this.v("form_version")
                }
                getUserProvidedEmail() {
                    return this.v("user_provided_email")
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getSecretKey() {
                    return this.v("secret_key")
                }
            }
            class n extends s {
                static keyName = "FormResponseSnapshotStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        291886: (e, t, r) => {
            r.d(t, {
                m: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).CgL,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpacePermissionGroupId() {
                    return this.v("space_permission_group_id")
                }
                getSpacePermissionGroupPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePermissionGroupPointer()
                }
                getSpacePermissionGroupStore() {
                    let e = this.getSpacePermissionGroupPointer(),
                        t = this.k("space_permission_group_id");
                    return e && this.getRecordStore(t, e)
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getRemovedAt() {
                    return this.v("removed_at")
                }
                getMembershipType() {
                    return this.v("membership_type")
                }
            }
            class n extends s {
                static keyName = "SpacePermissionGroupMemberStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        311279: (e, t, r) => {
            r.d(t, {
                v: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).VfI,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                isAllowed() {
                    return this.v("is_allowed") ? ? !1
                }
            }
            class n extends s {
                static keyName = "AiEmbeddingConfigStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        356912: (e, t, r) => {
            r.d(t, {
                m: () => a
            }), r(944114), r(898992), r(823215), r(672577), r(581454);
            var i = () => r(832375),
                s = () => r(517013),
                n = () => r(210952);
            class o extends n().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).qYF,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getName() {
                    return this.getNameStore().getValue()
                }
                getNameStore() {
                    return this.k("name")
                }
                getDescription() {
                    return this.getDescriptionStore().getValue()
                }
                getDescriptionStore() {
                    return this.k("description")
                }
                getRawIcon() {
                    return this.getIconStore().getValue()
                }
                getIconStore() {
                    return this.k("icon")
                }
                getCover() {
                    return this.getCoverStore().getValue()
                }
                getCoverStore() {
                    return this.k("cover")
                }
                getSchema() {
                    return this.getSchemaStore().getValue() ? ? r(891696).PL
                }
                getSchemaStore() {
                    return this.k("schema")
                }
                getAdditionalPropertyIds() {
                    return this.getAdditionalPropertyIdsStore().getValue() ? ? []
                }
                getAdditionalPropertyIdsStore() {
                    return this.k("additional_property_ids")
                }
                getAdditionalPropertyPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getAdditionalPropertyPointers()) ? ? []
                }
                getAdditionalPropertyStores() {
                    let e = this.getAdditionalPropertyIdsStore();
                    return this.getRecordStoreArray(e, this.getAdditionalPropertyPointers())
                }
                getAdditionalDeletedPropertyIds() {
                    return this.getAdditionalDeletedPropertyIdsStore().getValue() ? ? []
                }
                getAdditionalDeletedPropertyIdsStore() {
                    return this.k("additional_deleted_property_ids")
                }
                getAdditionalDeletedPropertyPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getAdditionalDeletedPropertyPointers()) ? ? []
                }
                getAdditionalDeletedPropertyStores() {
                    let e = this.getAdditionalDeletedPropertyIdsStore();
                    return this.getRecordStoreArray(e, this.getAdditionalDeletedPropertyPointers())
                }
                getFileIds() {
                    return this.getFileIdsStore().getValue() ? ? []
                }
                getFileIdsStore() {
                    return this.k("file_ids")
                }
                getTemplatePages() {
                    return this.getTemplatePagesStore().getValue() ? ? []
                }
                getTemplatePagesStore() {
                    return this.k("template_pages")
                }
                getTemplatePagePointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getTemplatePagePointers()) ? ? []
                }
                getTemplatePageStores() {
                    let e = this.getTemplatePagesStore();
                    return this.getRecordStoreArray(e, this.getTemplatePagePointers())
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getAlive() {
                    return this.v("alive")
                }
                getFormat() {
                    return this.getFormatStore().getValue() ? ? r(891696).PL
                }
                getFormatStore() {
                    return this.k("format")
                }
                getMigrated() {
                    return this.v("migrated")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getDeletedSchema() {
                    return this.getDeletedSchemaStore().getValue() ? ? r(891696).PL
                }
                getDeletedSchemaStore() {
                    return this.k("deleted_schema")
                }
                getPermissionItems() {
                    return this.getPermissionItemsStore().getValue() ? ? []
                }
                getPermissionItemsStore() {
                    return this.k("permissions")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getMovedToTrashTable() {
                    return this.v("moved_to_trash_table")
                }
                getMovedToTrashId() {
                    return this.v("moved_to_trash_id")
                }
                getMovedToTrashPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getMovedToTrashPointer()
                }
                getMovedToTrashStore() {
                    let e = this.getMovedToTrashPointer(),
                        t = this.k("moved_to_trash_id");
                    return e && this.getRecordStore(t, e)
                }
                getMovedToTrashTime() {
                    return this.v("moved_to_trash_time")
                }
                getDeletedFromTrashTime() {
                    return this.v("deleted_from_trash_time")
                }
                getDeletedFromTrashTable() {
                    return this.v("deleted_from_trash_table")
                }
                getDeletedFromTrashId() {
                    return this.v("deleted_from_trash_id")
                }
                getDeletedFromTrashPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDeletedFromTrashPointer()
                }
                getDeletedFromTrashStore() {
                    let e = this.getDeletedFromTrashPointer(),
                        t = this.k("deleted_from_trash_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class a extends o {
                static keyName = "CollectionStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                static CollectionNameStore = class extends s().pm {
                    static keyName = "CollectionNameStore";
                    constructor(e, t) {
                        super({
                            pointer: e.pointer,
                            environment: e.environment,
                            path: t,
                            recordStoreOptions: {
                                inMemoryRecordCache: e.inMemoryRecordCache,
                                userId: e.userId
                            }
                        }), this.collectionStore = e
                    }
                    getValue() {
                        return this.collectionStore.getName()
                    }
                };
                schemaStore;
                deletedSchemaStore;
                _aliveAutomationCountStore;
                getAliveAutomationCountStore() {
                    return this._aliveAutomationCountStore || (this._aliveAutomationCountStore = new(r(345426)).ComputedStore(() => {
                        let e = 0;
                        for (let t of this.getAutomationStores()) {
                            let r = t.getTriggerType();
                            ("event" === r || "recurrence" === r && !t.isRecurringSprintAutomation()) && t.getAlive() && (e += 1)
                        }
                        return e
                    }, {
                        debugName: "CollectionStore.aliveAutomationCount"
                    })), this._aliveAutomationCountStore
                }
                getSpaceId() {
                    return this.v("space_id") ? ? this.pointer.spaceId
                }
                isSyncedCollection() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.isSyncedCollection())
                }
                isSystemCollection() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.isSystemCollection())
                }
                isExternalSyncedCollection() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.isExternalSyncedCollection())
                }
                isExternallyImportedAndSyncedCollection() {
                    var e;
                    return !!(null == (e = this.getFormat()) ? void 0 : e.external_collection_type)
                }
                isPageTreeCollection() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.isPageTreeCollection())
                }
                getRootPagePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getRootPagePointer()
                }
                getDatabaseType() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDatabaseType()
                }
                getWorkflowTemplateId() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getWorkflowTemplateId()
                }
                getCopiedFromPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCopiedFromPointer()
                }
                getParentSpaceStore() {
                    var e;
                    return null == (e = this.getParentBlockStore()) ? void 0 : e.getParentSpaceStore()
                }
                getDeletedFromTrashAt() {
                    let e = (0, r(688502).nz)(this.pointer, this.getRecordModel);
                    if ((null == e ? void 0 : e.table) === i().evP) {
                        let t = e.getPermissionItems().find(r(642157).Ny);
                        return null == t ? void 0 : t.permanently_deleted_at
                    }
                }
                pathHasDeletedPermission() {
                    return (0, r(688502).Ou)(this.pointer, this.getRecordModel)
                }
                pathHasPurgedDeletedPermission() {
                    return (0, r(688502).Rp)(this.pointer, this.getRecordModel)
                }
                getSpaceShardedPointer() {
                    let e = this.getSpaceId();
                    return { ...this.pointer,
                        spaceId: e
                    }
                }
                static fromRecordStore(e) {
                    return e.getRecordStore(e, e.pointer)
                }
                getName() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getNormalizedName()
                }
                getNameStore() {
                    let e = ["name"];
                    return this.uiLocation.getOrCreateChild(s().pm.getUIChildStoreKey(this.pointer, a.CollectionNameStore.keyName, e), () => new a.CollectionNameStore(this, e).uiLocation).store
                }
                getIcon() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getRenderIcon({
                        integrations: (0, r(69499).LU)(this.getValue()) ? r(610463).A.integrations.state : void 0,
                        getRecordModel: this.getRecordModel
                    })
                }
                getSchema() {
                    return this.schemaStore || (this.schemaStore = new(r(345426)).ComputedStore(() => {
                        if (this.isDefined()) {
                            var e;
                            return (null == (e = this.getModel()) ? void 0 : e.getNormalizedSchema(this.getRecordModel)) ? ? {}
                        }
                        let t = this.getPublicPageData();
                        return null != t && t.collectionSchema ? t.collectionSchema : {}
                    }, {
                        debugName: "CollectionStore.getSchema",
                        equalityFn: r(218744).default.checkGate({
                            gateName: "collection_store_deep_equal_schema"
                        }) ? r(381453).n4 : void 0
                    })), this.schemaStore.state
                }
                getDeletedSchema() {
                    return this.deletedSchemaStore || (this.deletedSchemaStore = new(r(345426)).ComputedStore(() => {
                        if (this.isDefined()) {
                            var e;
                            return (null == (e = this.getModel()) ? void 0 : e.getNormalizedDeletedSchema(this.getRecordModel)) ? ? {}
                        }
                        return {}
                    }, {
                        debugName: "CollectionStore.getDeletedSchema"
                    })), this.deletedSchemaStore.state
                }
                getFormat() {
                    var e;
                    let t = null == (e = this.getModel()) ? void 0 : e.getFormat();
                    if (t) return t;
                    let r = this.getPublicPageData();
                    return null != r && r.collectionFormat ? r.collectionFormat : {}
                }
                getNormalizedPropertyGroups(e) {
                    let t = this.getModel();
                    if (t) return t.getNormalizedPropertyGroups(this.getRecordModel);
                    if (null != e && e.publicPageDataFallbackEnabled) {
                        let e = this.getPublicPageData();
                        if (null != e && e.collectionFormat && null != e && e.collectionSchema) return r(255155).Dm({
                            propertyGroups: e.collectionFormat.property_groups,
                            schema: e.collectionSchema
                        })
                    }
                }
                getParentBlockStore() {
                    let e = this.getParentStore();
                    if ((null == e ? void 0 : e.table) === i().evP) return e
                }
                getParentCollectionViewBlockStore() {
                    let e = this.getParentBlockStore();
                    return null != e && e.isCollectionView() ? e : void 0
                }
                getDefaultTemplatePageStore() {
                    let e = this.getFormat();
                    if (void 0 !== e.collection_default_template && "empty" !== e.collection_default_template) {
                        for (let t of this.getTemplatePageStores())
                            if (t.id === e.collection_default_template.template_page_id) return t
                    }
                }
                isPublishingEnabled() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isPublishingEnabled()) ? ? !1
                }
                getPropertyMapping() {
                    return this.getFormatStore().getKeyStore("app_uri_map").getValue()
                }
                getMappedProperty(e) {
                    var t;
                    return (null == (t = this.getPropertyMapping()) ? void 0 : t[e]) ? ? e
                }
                getCreatedByPointerOrBlockFallback() {
                    var e;
                    return this.getCreatedByPointer() ? ? (null == (e = this.getParentBlockStore()) ? void 0 : e.getCreatedByPointer())
                }
                getCreatedTimeOrBlockFallback() {
                    var e;
                    return this.getCreatedTime() || (null == (e = this.getParentBlockStore()) ? void 0 : e.getCreatedTime())
                }
                getLastEditedByPointerOrBlockFallback() {
                    var e;
                    return this.getLastEditedByPointer() ? ? (null == (e = this.getParentBlockStore()) ? void 0 : e.getLastEditedByPointer())
                }
                getLastEditedTimeOrBlockFallback() {
                    var e;
                    return this.getLastEditedTime() || (null == (e = this.getParentBlockStore()) ? void 0 : e.getLastEditedTime())
                }
                getPublicPageData() {
                    let {
                        publicPageData: e
                    } = r(686494).A.state;
                    if (e && e.collectionId === this.id) return e
                }
                getAutomationStores() {
                    var e;
                    return ((null == (e = this.getModel()) ? void 0 : e.getAutomationPointers()) ? ? []).map(e => this.getRecordStore(this, e))
                }
                getButtonPropertyAutomationStores() {
                    let e = this.getSchema(),
                        t = [];
                    for (let r of Object.values(e))
                        if ((null == r ? void 0 : r.type) === "button" && null != r && r.automation_id) {
                            let e = this.getRecordStore(this, {
                                id: r.automation_id,
                                spaceId: this.getSpaceId(),
                                table: i().yBS
                            });
                            t.push(e)
                        }
                    return t
                }
                getLayoutStore() {
                    let e, t = this.getModel();
                    if (t) e = t.getLayoutPointer();
                    else {
                        var r;
                        let t = null == (r = this.getPublicPageData()) ? void 0 : r.layoutId;
                        t && (e = {
                            table: i().zx0,
                            id: t,
                            spaceId: this.getSpaceId()
                        })
                    }
                    return e ? this.getRecordStore(this, e) : void 0
                }
                getRecordKeyStore() {
                    let e = this.getSpaceId();
                    if (e) {
                        let t = (0, r(288338).a)({
                            spaceId: e,
                            parentTable: "collection",
                            parentId: this.id
                        });
                        return r(172960).U.createChildStore(this, t)
                    }
                }
                isTypedCollection() {
                    return !!this.getFormatStore().getKeyStore("app_config_uri").getValue()
                }
                isTypedProperty(e) {
                    return void 0 !== r(333042).u9.derivePropertyUri(e, this.getPropertyMapping())
                }
                getNormalizedDependencyDateShiftingConfig() {
                    let e = this.getFormatStore().getKeyStore("dependency_date_shifting_config").getValue();
                    if (!(0, r(722371).O9)(e) || r(381453).oE([e.date_property, e.end_date_property]).every(e => {
                            let t = this.getSchemaStore().getKeyStore(e).getValue();
                            return (0, r(722371).O9)(t) && "date" === t.type
                        })) return e
                }
                isNonEditableState() {
                    let e = this.getParentBlockStore();
                    return !!(!e || e.isLocked() || e.pathIsDead() || !this.getAlive())
                }
                getRenderTitle(e) {
                    var t;
                    return null == (t = this.getModel()) ? void 0 : t.getRenderTitle({ ...e,
                        getRecordModel: this.getRecordModel
                    })
                }
                getPropertyPermissionItems() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getPropertyPermissionItems()) ? ? {
                        validItems: [],
                        invalidItems: []
                    }
                }
                pathIsDead() {
                    let e = (0, r(457915).g)(this);
                    return (0, r(114307).a)(e)
                }
                getDeletionStatus() {
                    return this.pathIsDead() ? this.pathHasDeletedPermission() ? "deleted_from_trash" : "in_trash" : "alive"
                }
            }
        },
        360851: (e, t, r) => {
            r.d(t, {
                N: () => n
            }), r(16280), r(898992), r(354520);
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).Bgh,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getData() {
                    return this.getDataStore().getValue()
                }
                getDataStore() {
                    return this.k("data")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getAlive() {
                    return this.v("alive")
                }
                getPermissionItems() {
                    return this.getPermissionItemsStore().getValue() ? ? []
                }
                getPermissionItemsStore() {
                    return this.k("permissions")
                }
                getMovedToTrashTable() {
                    return this.v("moved_to_trash_table")
                }
                getMovedToTrashId() {
                    return this.v("moved_to_trash_id")
                }
                getMovedToTrashPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getMovedToTrashPointer()
                }
                getMovedToTrashStore() {
                    let e = this.getMovedToTrashPointer(),
                        t = this.k("moved_to_trash_id");
                    return e && this.getRecordStore(t, e)
                }
                getMovedToTrashTime() {
                    return this.v("moved_to_trash_time")
                }
                getDeletedFromTrashTime() {
                    return this.v("deleted_from_trash_time")
                }
                getDeletedFromTrashTable() {
                    return this.v("deleted_from_trash_table")
                }
                getDeletedFromTrashId() {
                    return this.v("deleted_from_trash_id")
                }
                getDeletedFromTrashPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDeletedFromTrashPointer()
                }
                getDeletedFromTrashStore() {
                    let e = this.getDeletedFromTrashPointer(),
                        t = this.k("deleted_from_trash_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class n extends s {
                static keyName = "WorkflowStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                static messages = (0, r(109939).YK)({
                    emptyWorkflowTitle: {
                        id: "workflow.emptyWorkflowTitle",
                        defaultMessage: "Untitled agent"
                    }
                });
                getRenderTitle(e) {
                    var t;
                    let r = null == (t = this.getData()) ? void 0 : t.name;
                    return r || e.formatMessage(n.messages.emptyWorkflowTitle)
                }
                getPublishedArtifactStore() {
                    let e = this.k("data").getKeyValue("published_artifact_pointer"),
                        t = this.getSpaceId();
                    if (e && t) return r(509297).j.createChildStore(this, e)
                }
                hasBeenPublished() {
                    let e = this.getPublishedArtifactStore();
                    return !!(null == e ? void 0 : e.getData())
                }
                hasChanges(e) {
                    let t = this.getDraftData(),
                        i = this.getPublishedArtifactStore(),
                        s = null == i ? void 0 : i.getData(),
                        n = (0, r(886883).ap)(null == t ? void 0 : t.instructions) ? r(970831).B.createChildStore(this, t.instructions) : void 0,
                        {
                            hasChanged: o
                        } = (0, r(604789).x)({
                            oldWorkflow: s,
                            newWorkflow: t,
                            checkForNameChange: e,
                            oldWorkflowLastEditedTime: null == s ? void 0 : s.publishTime,
                            newWorkflowLastEditedTime: null == n ? void 0 : n.getLastEditedTime()
                        });
                    return !!t && (!i || !!i.isReady()) && (s ? o : !this.isNewUneditedUnpublishedWorkflow())
                }
                isNewUneditedUnpublishedWorkflow() {
                    let e = this.getDraftData(),
                        t = this.getPublishedArtifactStore(),
                        i = null == t ? void 0 : t.getData();
                    if (i || t && !t.isReady()) return !1;
                    let {
                        edits: s
                    } = (0, r(604789).x)({
                        oldWorkflow: i,
                        newWorkflow: e,
                        returnAllEditsEvenIfWorkflowMissing: !0
                    }), n = s.filter(e => "module_created" === e.type && "notion" !== e.module.type);
                    return 1 === s.length && 0 === n.length || 0 === s.length
                }
                isDuplicating() {
                    var e;
                    let t = null == (e = this.getDraftData()) ? void 0 : e.duplication_status;
                    return (null == t ? void 0 : t.type) === "duplicating"
                }
                getData() {
                    var e;
                    return { ...(null == (e = this.getPublishedArtifactStore()) ? void 0 : e.getData()) ? ? {},
                        name : this.getName(),
                        description : this.getDescription(),
                        icon: this.getRawIcon(),
                        isTemplate: this.getIsTemplate()
                    }
                }
                getDraftData() {
                    return this.getDraftDataStore().getValue()
                }
                getDraftDataStore() {
                    return this.k("data")
                }
                getName() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getName()
                }
                getDescription() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDescription()
                }
                getRawIcon() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getRawIcon()
                }
                getIcon() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getIcon()
                }
                getIsTemplate() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getIsTemplate()) ? ? !1
                }
                getNameWithDefault(e) {
                    var t;
                    return (null == (t = this.getModel()) ? void 0 : t.getNameWithDefault(e)) || (0, r(468765).g)(e)
                }
                getSpaceShardedPointer() {
                    let e = this.getSpaceId();
                    if (!e) throw Error("WorkflowStore does not have a spaceId");
                    return { ...this.pointer,
                        spaceId: e
                    }
                }
                canEdit() {
                    if (this.getParentTable() === r(832375).evP) {
                        let e = this.getParentStore();
                        return !!e && e.canEditCollection()
                    }
                    return super.canEdit()
                }
            }
        },
        366090: (e, t, r) => {
            r.d(t, {
                y: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).o0,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getDomain() {
                    return this.v("domain")
                }
                getVerificationCode() {
                    return this.v("verification_code")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getExpiresAt() {
                    return this.v("expires_at")
                }
                getVerifiedAt() {
                    return this.v("verified_at")
                }
                getAlive() {
                    return this.v("alive")
                }
                getType() {
                    return this.v("type")
                }
                getInfo() {
                    return this.getInfoStore().getValue()
                }
                getInfoStore() {
                    return this.k("info")
                }
            }
            class n extends s {
                static keyName = "DomainVerificationCodeStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        374903: (e, t, r) => {
            r.d(t, {
                n: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).dap,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getStartDate() {
                    return this.v("start_date")
                }
                getEndDate() {
                    return this.v("end_date")
                }
                getConvertedDate() {
                    return this.v("converted_date")
                }
                getCanceledDate() {
                    return this.v("canceled_date")
                }
                getOfferCampaign() {
                    return this.v("offer_campaign")
                }
                getAutoConvert() {
                    return this.v("auto_convert")
                }
                getItems() {
                    return this.getItemsStore().getValue() ? ? []
                }
                getItemsStore() {
                    return this.k("items")
                }
            }
            class n extends s {
                static keyName = "SyntheticTrialStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        394121: (e, t, r) => {
            r.d(t, {
                J: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).duj,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getCode() {
                    return this.v("code")
                }
                getCampaign() {
                    return this.v("campaign")
                }
                getStatus() {
                    return this.v("status")
                }
                getRedeemedBy() {
                    return this.getRedeemedByStore().getValue()
                }
                getRedeemedByStore() {
                    return this.k("redeemed_by")
                }
            }
            class n extends s {
                static keyName = "OfferCodeStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        398652: (e, t, r) => {
            r.d(t, {
                C: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).G1c,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getGroupId() {
                    return this.v("group_id")
                }
                getGroupPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getGroupPointer()
                }
                getGroupStore() {
                    let e = this.getGroupPointer(),
                        t = this.k("group_id");
                    return e && this.getRecordStore(t, e)
                }
                getName() {
                    return this.v("name")
                }
                getIcon() {
                    return this.v("icon")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getLastEditedAt() {
                    return this.v("last_edited_at") ? ? 0
                }
                getDeletedAt() {
                    return this.v("deleted_at")
                }
                getSettings() {
                    return this.getSettingsStore().getValue()
                }
                getSettingsStore() {
                    return this.k("settings")
                }
                getManagementType() {
                    return this.v("management_type")
                }
            }
            class n extends s {
                static keyName = "SpacePermissionGroupStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        403973: (e, t, r) => {
            r.d(t, {
                T: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).D7f,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getActivityId() {
                    return this.v("activity_id")
                }
                getActivityPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getActivityPointer()
                }
                getActivityStore() {
                    let e = this.getActivityPointer(),
                        t = this.k("activity_id");
                    return e && this.getRecordStore(t, e)
                }
                getType() {
                    return this.v("type")
                }
                getParentNotificationId() {
                    return this.v("parent_notification_id")
                }
                getParentNotificationPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentNotificationPointer()
                }
                getParentNotificationStore() {
                    let e = this.getParentNotificationPointer(),
                        t = this.k("parent_notification_id");
                    return e && this.getRecordStore(t, e)
                }
                getChildNotificationIds() {
                    return this.getChildNotificationIdsStore().getValue() ? ? []
                }
                getChildNotificationIdsStore() {
                    return this.k("child_notification_ids")
                }
                getChildNotificationPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getChildNotificationPointers()) ? ? []
                }
                getChildNotificationStores() {
                    let e = this.getChildNotificationIdsStore();
                    return this.getRecordStoreArray(e, this.getChildNotificationPointers())
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getReceived() {
                    return this.v("received")
                }
                getRead() {
                    return this.v("read")
                }
                getVisited() {
                    return this.v("visited")
                }
                getEmailed() {
                    return this.v("emailed")
                }
                getInvalid() {
                    return this.v("invalid")
                }
                getArchivedAt() {
                    return this.v("archived_at")
                }
                getChannel() {
                    return this.v("channel")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getNavigableBlockId() {
                    return this.v("navigable_block_id")
                }
                getNavigableBlockPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getNavigableBlockPointer()
                }
                getNavigableBlockStore() {
                    let e = this.getNavigableBlockPointer(),
                        t = this.k("navigable_block_id");
                    return e && this.getRecordStore(t, e)
                }
                getCollectionId() {
                    return this.v("collection_id")
                }
                getCollectionPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCollectionPointer()
                }
                getCollectionStore() {
                    let e = this.getCollectionPointer(),
                        t = this.k("collection_id");
                    return e && this.getRecordStore(t, e)
                }
                getDiscussionId() {
                    return this.v("discussion_id")
                }
                getDiscussionPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDiscussionPointer()
                }
                getDiscussionStore() {
                    let e = this.getDiscussionPointer(),
                        t = this.k("discussion_id");
                    return e && this.getRecordStore(t, e)
                }
                getEndTime() {
                    return this.v("end_time")
                }
            }
            class n extends s {
                static keyName = "NotificationStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                isGroupedNotification() {
                    let e = this.getType();
                    return !!(e && (0, r(105546).aF)(e))
                }
            }
        },
        411545: (e, t, r) => {
            r.d(t, {
                p: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).td7,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getData() {
                    return this.getDataStore().getValue()
                }
                getDataStore() {
                    return this.k("data")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
            }
            class n extends s {
                static keyName = "WorkflowTranscriptStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        427581: (e, t, r) => {
            r.d(t, {
                P: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).xm7,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getName() {
                    return this.v("name")
                }
                getUrl() {
                    return this.v("url")
                }
                getFileIds() {
                    return this.getFileIdsStore().getValue() ? ? []
                }
                getFileIdsStore() {
                    return this.k("file_ids")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getAlive() {
                    return this.v("alive")
                }
            }
            class n extends s {
                static keyName = "CustomEmojiStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                canEdit() {
                    var e;
                    return !!(this.environment.currentUser.id === this.getCreatedById() || (null == (e = this.getSpaceStore()) ? void 0 : e.canAdmin()))
                }
            }
        },
        438472: (e, t, r) => {
            r.d(t, {
                G: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).AeG,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSubmissionData() {
                    return this.getSubmissionDataStore().getValue()
                }
                getSubmissionDataStore() {
                    return this.k("submission_data")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
            }
            class n extends s {
                static keyName = "ContactSalesStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        447003: (e, t, r) => {
            r.d(t, {
                v: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).Hj5,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getType() {
                    return this.v("type")
                }
                getIntegrationId() {
                    return this.v("integration_id")
                }
                getIntegrationPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getIntegrationPointer()
                }
                getIntegrationStore() {
                    let e = this.getIntegrationPointer(),
                        t = this.k("integration_id");
                    return e && this.getRecordStore(t, e)
                }
                getCapabilities() {
                    return this.getCapabilitiesStore().getValue()
                }
                getCapabilitiesStore() {
                    return this.k("capabilities")
                }
                getPermissionMode() {
                    return this.v("permission_mode")
                }
                getName() {
                    return this.v("name")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getLastEditedAt() {
                    return this.v("last_edited_at") ? ? 0
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getAlive() {
                    return this.v("alive")
                }
                getSpaceId() {
                    return this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getIcon() {
                    return this.v("icon")
                }
                getWorkflowId() {
                    return this.v("workflow_id")
                }
                getWorkflowPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getWorkflowPointer()
                }
                getWorkflowStore() {
                    let e = this.getWorkflowPointer(),
                        t = this.k("workflow_id");
                    return e && this.getRecordStore(t, e)
                }
                getAdminBot() {
                    return this.v("admin_bot")
                }
            }
            class n extends s {
                static keyName = "BotStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getParentStore() {
                    var e;
                    let t = null == (e = this.getModel()) ? void 0 : e.getParentPointer(),
                        r = this.getKeyStore("parent_id");
                    return t && this.getRecordStore(r, t)
                }
                isInternalBot() {
                    var e;
                    let t = null == (e = this.getIntegrationStore()) ? void 0 : e.getType();
                    return !this.getIntegrationId() || "internal" === t
                }
                isWorkflowBot() {
                    return "workflow" === this.getType()
                }
                getDisplayName(e) {
                    var t;
                    return (null == (t = this.getModel()) ? void 0 : t.getDisplayName(e)) ? ? e.formatMessage(r(993189).HaY.messages.unnamedBot)
                }
                getDetail() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDetail()
                }
                getIntegrationManagementPermissions() {
                    let e = this.getIntegrationId();
                    return r(322103).bM.getPermissionForIntegration(e)
                }
                isIntegrationAdminOnly() {
                    return this.getIntegrationManagementPermissions().effectiveAdminOnly
                }
                userCanUpdateIntegrationPermissions() {
                    return this.getIntegrationManagementPermissions().userCanUpdatePermissions
                }
                userCanModifyIntegrationPageAccess() {
                    return this.getIntegrationManagementPermissions().userCanModifyPageAccess
                }
                isIntegrationManagementFeatureEnabled() {
                    return this.getIntegrationManagementPermissions().featureEnabled
                }
            }
        },
        460849: (e, t, r) => {
            r.d(t, {
                R: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).dTl,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getMembershipType() {
                    return this.v("membership_type")
                }
                getStatus() {
                    return this.v("status")
                }
                getInviteeId() {
                    return this.v("invitee_id")
                }
                getInviteePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getInviteePointer()
                }
                getInviteeStore() {
                    let e = this.getInviteePointer(),
                        t = this.k("invitee_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getCreatedBy() {
                    return this.v("created_by")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by");
                    return e && this.getRecordStore(t, e)
                }
                getCancelledAt() {
                    return this.v("cancelled_at")
                }
                getCancelledBy() {
                    return this.v("cancelled_by")
                }
                getCancelledByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCancelledByPointer()
                }
                getCancelledByStore() {
                    let e = this.getCancelledByPointer(),
                        t = this.k("cancelled_by");
                    return e && this.getRecordStore(t, e)
                }
                getRejectedAt() {
                    return this.v("rejected_at")
                }
                getAcceptedAt() {
                    return this.v("accepted_at")
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
            }
            class n extends s {
                static keyName = "MarketplaceProfileInvitationStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        464011: (e, t, r) => {
            r.d(t, {
                b: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).JRO,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getType() {
                    return this.v("type")
                }
                getConfig() {
                    return this.v("config")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getAlive() {
                    return this.v("alive")
                }
                getBlocks() {
                    return this.getBlocksStore().getValue() ? ? []
                }
                getBlocksStore() {
                    return this.k("blocks")
                }
                getBlockPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getBlockPointers()) ? ? []
                }
                getBlockStores() {
                    let e = this.getBlocksStore();
                    return this.getRecordStoreArray(e, this.getBlockPointers())
                }
            }
            class n extends s {
                static keyName = "AutomationActionStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                isType(e) {
                    return this.getType() === e
                }
                getConfigStore() {
                    return this.getKeyStore("config")
                }
                hasSort() {
                    let e = this.getConfigStore().getKeyStore("sort").getValue();
                    return e && e.length > 0
                }
                hasLimit() {
                    return (0, r(722371).O9)(this.getConfigStore().getKeyStore("limit").getValue())
                }
                hasConcern(e) {
                    let t = this.getType();
                    return !!t && (0, r(167869).nc)(t, e)
                }
                getOpenPageIn() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getOpenPageIn()) ? ? r(993189).RUD.DEFAULT_PEEK_MODE_FORMAT
                }
                getInsertionPoint() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getInsertionPoint()) ? ? r(993189).RUD.DEFAULT_INSERTION_POINT
                }
                getCollectionStore() {
                    let e = this.getConfig();
                    return null != e && e.collection ? r(356912).m.createChildStore(this, e.collection) : void 0
                }
                getTargetStore() {
                    return this.getConfigStore().getKeyStore("target")
                }
                getVariableTargetStore() {
                    let e = this.getTargetStore();
                    return "variable" === e.getKeyStore("type").getValue() ? e : void 0
                }
                getCollectionTargetStore() {
                    let e = this.getTargetStore();
                    return "collection" === e.getKeyStore("type").getValue() ? e : void 0
                }
                getIndex() {
                    var e;
                    return Math.max(0, ((null == (e = this.getParentStore()) ? void 0 : e.getActionIds()) ? ? []).indexOf(this.id))
                }
            }
        },
        501023: (e, t, r) => {
            r.d(t, {
                l: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).ZZC,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getPromptBlockId() {
                    return this.v("prompt_block_id")
                }
                getPromptBlockPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getPromptBlockPointer()
                }
                getPromptBlockStore() {
                    let e = this.getPromptBlockPointer(),
                        t = this.k("prompt_block_id");
                    return e && this.getRecordStore(t, e)
                }
                getUsageCount() {
                    return this.v("usage_count")
                }
                getLastUsedTime() {
                    return this.v("last_used_time")
                }
                getMetadata() {
                    return this.getMetadataStore().getValue()
                }
                getMetadataStore() {
                    return this.k("metadata")
                }
            }
            class n extends s {
                static keyName = "PromptUsageStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        509297: (e, t, r) => {
            r.d(t, {
                j: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).b$X,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getType() {
                    return this.v("type")
                }
                getData() {
                    return this.getDataStore().getValue()
                }
                getDataStore() {
                    return this.k("data")
                }
            }
            class n extends s {
                static keyName = "WorkflowArtifactStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getDataStore() {
                    return this.getKeyStore("data")
                }
                isType(e) {
                    return this.getType() === e
                }
            }
        },
        516117: (e, t, r) => {
            r.d(t, {
                Z: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).p9n,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getBadgeId() {
                    return this.v("badge_id")
                }
                getBadgePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getBadgePointer()
                }
                getBadgeStore() {
                    let e = this.getBadgePointer(),
                        t = this.k("badge_id");
                    return e && this.getRecordStore(t, e)
                }
                getAssigneeTable() {
                    return this.v("assignee_table")
                }
                getAssigneeId() {
                    return this.v("assignee_id")
                }
                getAssigneePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getAssigneePointer()
                }
                getAssigneeStore() {
                    let e = this.getAssigneePointer(),
                        t = this.k("assignee_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getLastUpdatedAt() {
                    return this.v("last_updated_at")
                }
                getLastSyncedAt() {
                    return this.v("last_synced_at")
                }
            }
            class n extends s {
                static keyName = "MarketplaceBadgeAssignmentStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        519219: (e, t, r) => {
            r.d(t, {
                j: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).jup,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getText() {
                    return this.getTextStore().getValue()
                }
                getTextStore() {
                    return this.k("text")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getAlive() {
                    return this.v("alive")
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getContent() {
                    return this.getContentStore().getValue() ? ? []
                }
                getContentStore() {
                    return this.k("content")
                }
                getContentPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getContentPointers()) ? ? []
                }
                getContentStores() {
                    let e = this.getContentStore();
                    return this.getRecordStoreArray(e, this.getContentPointers())
                }
                getReactions() {
                    return this.getReactionsStore().getValue() ? ? []
                }
                getReactionsStore() {
                    return this.k("reactions")
                }
                getReactionPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getReactionPointers()) ? ? []
                }
                getReactionStores() {
                    let e = this.getReactionsStore();
                    return this.getRecordStoreArray(e, this.getReactionPointers())
                }
                getDisplayName() {
                    return this.getDisplayNameStore().getValue()
                }
                getDisplayNameStore() {
                    return this.k("display_name")
                }
            }
            class n extends s {
                static keyName = "CommentStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                static truncateDisplayName({
                    intl: e,
                    formattedName: t
                }) {
                    let i = (0, r(581896).l)(e, t, 35);
                    if (i) {
                        let e = i.toString();
                        return e.length > 35 ? e.slice(0, e.length - 4) + "…)" : e
                    }
                    return t
                }
                static resolveDisplayName({
                    displayNameData: e,
                    authorStore: t,
                    intl: i
                }) {
                    switch (null == e ? void 0 : e.type) {
                        case "custom":
                            return e.custom.name;
                        case "user":
                            if (t instanceof r(447003).v) {
                                let e = t.getCreatedByStore();
                                if (e instanceof r(807825).L) return e.getDisplayName(i)
                            }
                            return;
                        case "agent":
                        case "integration":
                        case "default":
                        case void 0:
                            return t.getDisplayName(i);
                        default:
                            return (0, r(722371).HB)(e)
                    }
                }
                getParentBlockStore() {
                    let e = this.getParentStore(),
                        t = null == e ? void 0 : e.getParentStore();
                    if ((null == t ? void 0 : t.table) === r(832375).evP) return t
                }
                getSpaceIdFromValue() {
                    return this.v("space_id")
                }
                resolveAuthorDisplayName({
                    intl: e,
                    defaultDisplayName: t
                }) {
                    let r = this.getCreatedByStore();
                    if (!r) return;
                    let i = this.getModel();
                    if (!i) return r.getDisplayName(e);
                    let s = i.getDisplayName() ? ? {
                            type: "default"
                        },
                        o = n.resolveDisplayName({
                            displayNameData: s,
                            authorStore: r,
                            intl: e
                        }) ? ? t;
                    if (o === t) return t;
                    let a = e.formatMessage({
                        defaultMessage: "{customName} (via {integrationName})",
                        id: "shared.textHelpers.authorDisplayNameWithAttribution"
                    }, {
                        customName: o,
                        integrationName: t
                    });
                    return n.truncateDisplayName({
                        intl: e,
                        formattedName: a
                    })
                }
            }
        },
        545922: (e, t, r) => {
            r.d(t, {
                G: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).A7Q,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSettings() {
                    return this.getSettingsStore().getValue()
                }
                getSettingsStore() {
                    return this.k("settings")
                }
            }
            class n extends s {
                static keyName = "UserSettingsStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getRegionalFormatSettings() {
                    return this.getSettingsStore().getKeyStore("regional_format_settings").getValue()
                }
                hasUserPinnedToOutliner(e) {
                    let {
                        spaceId: t,
                        type: r
                    } = e;
                    return !!this.getSettingsStore().getKeyStore("sidebar_outliner_settings").getKeyStore(t).getKeyStore(r).getKeyStore("has_pinned").getValue()
                }
                shouldUseDefaultRegionalFormatting() {
                    let e = this.getRegionalFormatSettings(),
                        t = null == e ? void 0 : e.use_default_region_settings;
                    return void 0 === t || t
                }
                hasDismissedIntegrationPopup(e) {
                    let {
                        integrationId: t
                    } = e;
                    return !!this.getSettingsStore().getKeyStore("dismissed_link_preview_integration_popup").getKeyStore(t).getValue()
                }
                getNicknameStore() {
                    return this.getSettingsStore().getKeyStore("nickname")
                }
                getNickname() {
                    return this.getNicknameStore().getValue()
                }
                getAllPreferredCollections(e) {
                    return this.getSettingsStore().getKeyStore("lastUsedDatabases").getKeyStore(e).getValue() ? ? []
                }
                getPreferredCollectionsOfType(e, t) {
                    return this.getSettingsStore().getKeyStore("lastUsedTypedCollections").getKeyStore(e).getKeyStore(t).getValue() ? ? []
                }
                getPersona() {
                    return this.getSettingsStore().getKeyStore("persona").getValue()
                }
                getUseCases() {
                    return this.getSettingsStore().getKeyStore("use_cases").getValue()
                }
                getPersonalHomeTipsSettings() {
                    let e = this.getSettingsStore().getKeyStore("personal_home_tips_settings").getValue();
                    return {
                        progress_data: (null == e ? void 0 : e.progress_data) ? ? {},
                        hide_completed: !!(null == e ? void 0 : e.hide_completed)
                    }
                }
                getPersonalHomeNewUserChecklistSettings() {
                    let e = this.getSettingsStore().getKeyStore("personal_home_new_user_checklist_settings").getValue();
                    return {
                        progress_data: (null == e ? void 0 : e.progress_data) ? ? {},
                        finished_timestamp_data: (null == e ? void 0 : e.finished_timestamp_data) ? ? {},
                        showed_home_topbar_tooltip: !!(null == e ? void 0 : e.showed_home_topbar_tooltip)
                    }
                }
                hasClickedNewMapButton() {
                    return null != this.getSettingsStore().getKeyStore("map_view_new_button_clicked_at").getValue()
                }
                hasClickedCollectionPropertyReminderButton() {
                    return null != this.getSettingsStore().getKeyStore("collection_property_reminder_button_clicked_at").getValue()
                }
                hasClickedConditionalColorButton() {
                    return null != this.getSettingsStore().getKeyStore("collection_conditional_color_button_clicked_at").getValue()
                }
            }
        },
        547131: (e, t, r) => {
            r.d(t, {
                p: () => n
            }), r(16280), r(898992), r(354520), r(430670), r(581454);
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).jmg,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getType() {
                    return this.v("type")
                }
                getName() {
                    return this.v("name")
                }
                getPageSort() {
                    return this.getPageSortStore().getValue() ? ? []
                }
                getPageSortStore() {
                    return this.k("page_sort")
                }
                getAlive() {
                    return this.v("alive")
                }
                getFormat() {
                    return this.getFormatStore().getValue() ? ? {}
                }
                getFormatStore() {
                    return this.k("format")
                }
                getRawQuery() {
                    return this.getQueryStore().getValue()
                }
                getQueryStore() {
                    return this.k("query2")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class n extends s {
                static keyName = "CollectionViewStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getUnlistedStatus() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getUnlistedStatus()) ? ? void 0
                }
                getCollectionStore() {
                    if ("dashboard" === this.getType()) return;
                    let e = this.getFormatStore().getKeyStore("collection_pointer").getValue(),
                        t = this.getParentId(),
                        i = this.getParentTable(),
                        s = this.getFormatStore().k("collection_view_source").getValue();
                    if (s && (0, r(213832).TR)(s)) {
                        let e, t = this.environment.idCreator.getSpaceIdCreatorSync(this.getSpaceId());
                        if ((0, r(42260).gF)(s.type)) {
                            if (!this.environment.currentUser.id) throw Error(`${s.type} requires an authenticated user`);
                            e = (0, r(42260).Ah)(s.type, this.environment.currentUser.id, t)
                        } else e = (0, r(42260).L4)(s.type, t);
                        return r(356912).m.createChildStore(this, {
                            table: r(832375).VlP,
                            id: e,
                            spaceId: this.getSpaceId()
                        })
                    }
                    if (!(s && (0, r(213832).q7)(s))) {
                        if (e) return r(356912).m.createChildStore(this, e);
                        if (t && i === r(832375).evP) return r(970831).B.createChildStore(this, {
                            table: r(832375).evP,
                            id: t
                        }).DANGEROUSLY_INCORRECT_getCollectionStore()
                    }
                }
                getSpaceId() {
                    return (0, r(226221).e)(super.getSpaceId())
                }
                getSpaceShardedPointer() {
                    let e = this.getSpaceId();
                    return { ...this.pointer,
                        spaceId: e
                    }
                }
                getAppConfigUri() {
                    return this.getFormatStore().getKeyStore("app_config_uri").getValue()
                }
                getPropertyFormatsStore(e) {
                    return this.getFormatStore().getKeyStore(e)
                }
                getPropertyFiltersStore() {
                    return this.getFormatStore().getKeyStore("property_filters")
                }
                getParentBlockStore() {
                    let e = this.getParentPointer();
                    if ((null == e ? void 0 : e.table) === r(832375).evP) return r(970831).B.createChildStore(this, e)
                }
                isSyncedCollection() {
                    var e;
                    return null == (e = this.getCollectionStore()) ? void 0 : e.isSyncedCollection()
                }
                getCollectionSource() {
                    let e = this.getFormat();
                    if (null != e && e.collection_view_source) return null == e ? void 0 : e.collection_view_source;
                    let t = this.getCollectionStore();
                    if (t) {
                        let e = t.getSpaceId();
                        return {
                            type: "collection",
                            id: t.id,
                            spaceId: e
                        }
                    }
                }
                getTableFrozenColumnIndex(e, t) {
                    if (this.environment.device.isPhone || "table" !== this.getType()) return;
                    let r = t.table_frozen_column_index,
                        i = this.getTableMaxFrozenColumnIndex(e, t);
                    return void 0 === r || r < -1 || void 0 === i ? -1 : Math.min(r, i)
                }
                getTableMaxFrozenColumnIndex(e, t) {
                    var r;
                    let i = null == (r = t.table_properties) ? void 0 : r.filter(e => e.visible);
                    if (!i) return;
                    let s = 0,
                        n = -1;
                    for (let t = 0; t < i.length; t++) {
                        let r = i[t];
                        if ((null == r ? void 0 : r.width) !== void 0 && (s += r.width), void 0 !== e && s > e - 100) break;
                        n = t
                    }
                    return n
                }
                getNormalizedFormat(e) {
                    var t;
                    return null == (t = this.getModel()) ? void 0 : t.getNormalizedFormat(e)
                }
                shouldShowPageIcon() {
                    return !!(this.getFormatStore().getKeyStore("show_page_icon").getValue() ? ? !0)
                }
                getChartConfig() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getChartConfig()
                }
                isAxisChartStore(e) {
                    let t = e.getValue();
                    return void 0 !== t && (0, r(828660).m8)(t)
                }
                getAxisChartFormatStore() {
                    let e = this.getFormatStore().getKeyStore("chart_config");
                    if (this.isAxisChartStore(e)) return e.getKeyStore("chartFormat")
                }
                isNonPlaceholderChartStore(e) {
                    let t = e.getValue();
                    return void 0 !== t && "placeholder" !== t.type
                }
                getChartFormatStore() {
                    let e = this.getFormatStore().getKeyStore("chart_config");
                    if (this.isNonPlaceholderChartStore(e)) return e.getKeyStore("chartFormat")
                }
                getChartType() {
                    var e;
                    return null == (e = this.getModel()) || null == (e = e.getChartConfig()) ? void 0 : e.type
                }
                getChartPlaceholderType() {
                    let e = this.getChartConfig();
                    return (null == e ? void 0 : e.type) === "placeholder" ? e.placeHolderType : void 0
                }
                getFormBlockStore() {
                    let e = this.getFormat().form_block_pointer;
                    if (e) return r(970831).B.createChildStore(this, e)
                }
                getFormId() {
                    var e;
                    return null == (e = this.getFormat().form_block_pointer) ? void 0 : e.id
                }
                getCardLayoutMode() {
                    var e;
                    return (null == (e = this.getFormat().card_layout) ? void 0 : e.mode) ? ? r(565546).WH
                }
                getDashboardLayoutStore() {
                    let e = this.getFormat().dashboard_layout_pointer;
                    if (e) return r(97746).K.createChildStore(this, e)
                }
                isDashboardWidget() {
                    let e = this.getParentStore(),
                        t = null == e ? void 0 : e.getParentStore();
                    return (null == e ? void 0 : e.table) === r(832375).zx0 && (null == t ? void 0 : t.table) === r(832375).Gy1 && (null == t ? void 0 : t.getType()) === "dashboard"
                }
                getDashboardWidgetBlockStore() {
                    var e;
                    return null == (e = this.getParentDashboardViewStoreOfWidget()) ? void 0 : e.getParentBlockStore()
                }
                getParentDashboardViewStoreOfWidget() {
                    let e = this.getParentStore(),
                        t = null == e ? void 0 : e.getParentStore();
                    if ((null == e ? void 0 : e.table) === r(832375).zx0 && (null == t ? void 0 : t.table) === r(832375).Gy1 && "dashboard" === t.getType()) return t
                }
                getDashboardWidgetViewStores() {
                    let e = this.getDashboardLayoutStore();
                    if (!e) return [];
                    let t = this.getSpaceId();
                    return e.getDashboardModules().flatMap(e => e.modules.map(({
                        collection_view_id: e
                    }) => {
                        let i = (0, r(17520).Q)({
                            spaceId: t,
                            collectionViewId: e
                        });
                        return n.createChildStore(this, i)
                    }))
                }
                getDashboardCollectionStores() {
                    var e;
                    return ((null == (e = this.getModel()) ? void 0 : e.getDashboardCollectionPointers(this.getRecordModel)) ? ? []).map(e => r(356912).m.createChildStore(this, e))
                }
            }
        },
        551498: (e, t, r) => {
            r.d(t, {
                U: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189)._FP,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getTextInstanceId() {
                    return this.v("text_instance_id")
                }
                getSearchLabel() {
                    return this.v("search_label")
                }
                getBlockId() {
                    return this.v("block_id")
                }
                getBlockPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getBlockPointer()
                }
                getBlockStore() {
                    let e = this.getBlockPointer(),
                        t = this.k("block_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class n extends s {
                static keyName = "TextSliceBlockMappingStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        562063: (e, t, r) => {
            r.d(t, {
                t: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).r_N,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getCode() {
                    return this.v("code")
                }
                getDiscount() {
                    return this.getDiscountStore().getValue()
                }
                getDiscountStore() {
                    return this.k("discount")
                }
                getEligibleListingIds() {
                    return this.getEligibleListingIdsStore().getValue() ? ? []
                }
                getEligibleListingIdsStore() {
                    return this.k("eligible_listing_ids")
                }
                getEligibleListingPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getEligibleListingPointers()) ? ? []
                }
                getEligibleListingStores() {
                    let e = this.getEligibleListingIdsStore();
                    return this.getRecordStoreArray(e, this.getEligibleListingPointers())
                }
                getCouponUsage() {
                    return this.getCouponUsageStore().getValue()
                }
                getCouponUsageStore() {
                    return this.k("coupon_usage")
                }
                getStartTime() {
                    return this.v("start_time")
                }
                getEndTime() {
                    return this.v("end_time")
                }
                getActive() {
                    return this.v("active")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getUpdatedTime() {
                    return this.v("updated_time")
                }
                getDeletedTime() {
                    return this.v("deleted_time")
                }
                getCreatedBy() {
                    return this.v("created_by")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by");
                    return e && this.getRecordStore(t, e)
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getApplyToAll() {
                    return this.v("apply_to_all")
                }
            }
            class n extends s {
                static keyName = "MarketplaceCouponStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        568729: (e, t, r) => {
            r.d(t, {
                r: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).J$1,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getUpdatedAt() {
                    return this.v("updated_at")
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getReferringId() {
                    return this.v("referring_id")
                }
                getEnrolled() {
                    return this.v("enrolled")
                }
                getEmail() {
                    return this.v("email")
                }
                getPosition() {
                    return this.v("position")
                }
                getInviteCode() {
                    return this.v("invite_code")
                }
                getSpaceId() {
                    return this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getQnaPriority() {
                    return this.v("qna_priority")
                }
            }
            class n extends s {
                static keyName = "AiWaitlistStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        575499: (e, t, r) => {
            r.d(t, {
                x: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).Tgq,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getTeamId() {
                    return this.v("team_id")
                }
                getTeamPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getTeamPointer()
                }
                getTeamStore() {
                    let e = this.getTeamPointer(),
                        t = this.k("team_id");
                    return e && this.getRecordStore(t, e)
                }
                getNavigableBlockId() {
                    return this.v("navigable_block_id")
                }
                getNavigableBlockPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getNavigableBlockPointer()
                }
                getNavigableBlockStore() {
                    let e = this.getNavigableBlockPointer(),
                        t = this.k("navigable_block_id");
                    return e && this.getRecordStore(t, e)
                }
                getCollectionId() {
                    return this.v("collection_id")
                }
                getCollectionPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCollectionPointer()
                }
                getCollectionStore() {
                    let e = this.getCollectionPointer(),
                        t = this.k("collection_id");
                    return e && this.getRecordStore(t, e)
                }
                getMentionedUserId() {
                    return this.v("mentioned_user_id")
                }
                getMentionedUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getMentionedUserPointer()
                }
                getMentionedUserStore() {
                    let e = this.getMentionedUserPointer(),
                        t = this.k("mentioned_user_id");
                    return e && this.getRecordStore(t, e)
                }
                getMentionedBlockId() {
                    return this.v("mentioned_block_id")
                }
                getMentionedBlockPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getMentionedBlockPointer()
                }
                getMentionedBlockStore() {
                    let e = this.getMentionedBlockPointer(),
                        t = this.k("mentioned_block_id");
                    return e && this.getRecordStore(t, e)
                }
                getMentionedProperty() {
                    return this.v("mentioned_property")
                }
                getTopLevelBlockId() {
                    return this.v("top_level_block_id")
                }
                getCollectionRowId() {
                    return this.v("collection_row_id")
                }
                getCollectionRowPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCollectionRowPointer()
                }
                getCollectionRowStore() {
                    let e = this.getCollectionRowPointer(),
                        t = this.k("collection_row_id");
                    return e && this.getRecordStore(t, e)
                }
                getDiscussionId() {
                    return this.v("discussion_id")
                }
                getDiscussionPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDiscussionPointer()
                }
                getDiscussionStore() {
                    let e = this.getDiscussionPointer(),
                        t = this.k("discussion_id");
                    return e && this.getRecordStore(t, e)
                }
                getInvitedUserId() {
                    return this.v("invited_user_id")
                }
                getInvitedUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getInvitedUserPointer()
                }
                getInvitedUserStore() {
                    let e = this.getInvitedUserPointer(),
                        t = this.k("invited_user_id");
                    return e && this.getRecordStore(t, e)
                }
                getCollectionPropertyId() {
                    return this.v("collection_property_id")
                }
                getCollectionViewId() {
                    return this.v("collection_view_id")
                }
                getCollectionViewPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCollectionViewPointer()
                }
                getCollectionViewStore() {
                    let e = this.getCollectionViewPointer(),
                        t = this.k("collection_view_id");
                    return e && this.getRecordStore(t, e)
                }
                getReminderBlockId() {
                    return this.v("reminder_block_id")
                }
                getReminderBlockPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getReminderBlockPointer()
                }
                getReminderBlockStore() {
                    let e = this.getReminderBlockPointer(),
                        t = this.k("reminder_block_id");
                    return e && this.getRecordStore(t, e)
                }
                getReminderProperty() {
                    return this.v("reminder_property")
                }
                getPermissionGroupId() {
                    return this.v("permission_group_id")
                }
                getAccessRequestId() {
                    return this.v("access_request_id")
                }
                getAccessRequestPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getAccessRequestPointer()
                }
                getAccessRequestStore() {
                    let e = this.getAccessRequestPointer(),
                        t = this.k("access_request_id");
                    return e && this.getRecordStore(t, e)
                }
                getMentionedGroupId() {
                    return this.v("mentioned_group_id")
                }
                getMentionedTeamId() {
                    return this.v("mentioned_team_id")
                }
                getMentionedTeamPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getMentionedTeamPointer()
                }
                getMentionedTeamStore() {
                    let e = this.getMentionedTeamPointer(),
                        t = this.k("mentioned_team_id");
                    return e && this.getRecordStore(t, e)
                }
                getContainsImportantPropertyUpdatesOnly() {
                    return this.v("contains_important_property_updates_only")
                }
                getAccessRequestType() {
                    return this.v("access_request_type")
                }
                getIndex() {
                    return this.v("index")
                }
                getStartTime() {
                    return this.v("start_time")
                }
                getEndTime() {
                    return this.v("end_time")
                }
                getInvalid() {
                    return this.v("invalid")
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getShardId() {
                    return this.v("shard_id")
                }
                getContextId() {
                    return this.v("context_id")
                }
                getInLog() {
                    return this.v("in_log")
                }
                getType() {
                    return this.v("type")
                }
                getEdits() {
                    return this.getEditsStore().getValue() ? ? []
                }
                getEditsStore() {
                    return this.k("edits")
                }
            }
            class n extends s {
                static keyName = "ActivityStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getStandardizedMentionedPropertyURI() {
                    let e = this.getCollectionStore(),
                        t = this.getMentionedProperty();
                    return e && t ? r(333042).u9.derivePropertyUri(t, null == e ? void 0 : e.getPropertyMapping()) : this.getMentionedProperty()
                }
            }
        },
        580555: (e, t, r) => {
            r.d(t, {
                H: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).lse,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastSeenAt() {
                    return this.v("last_seen_at")
                }
                getSubscriptionState() {
                    return this.v("subscription_state")
                }
            }
            class n extends s {
                static keyName = "UserSeenRecordStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        581068: (e, t, r) => {
            r.d(t, {
                c: () => n
            }), r(18107), r(967357);
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).m4n,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getResolved() {
                    return this.v("resolved")
                }
                getComments() {
                    return this.getCommentsStore().getValue() ? ? []
                }
                getCommentsStore() {
                    return this.k("comments")
                }
                getCommentPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getCommentPointers()) ? ? []
                }
                getCommentStores() {
                    let e = this.getCommentsStore();
                    return this.getRecordStoreArray(e, this.getCommentPointers())
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getReactions() {
                    return this.getReactionsStore().getValue() ? ? []
                }
                getReactionsStore() {
                    return this.k("reactions")
                }
                getReactionPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getReactionPointers()) ? ? []
                }
                getReactionStores() {
                    let e = this.getReactionsStore();
                    return this.getRecordStoreArray(e, this.getReactionPointers())
                }
                getPropertyId() {
                    return this.v("property_id")
                }
                getType() {
                    return this.v("type")
                }
            }
            class n extends s {
                static keyName = "DiscussionStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                isSuggestionDiscussion() {
                    return "suggestion" === this.getType()
                }
                isDefaultDiscussion() {
                    return "default" === this.getType()
                }
                getContext() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getPersistedContext()
                }
                getSuggestModifiedBlockIds() {
                    let e = this.getModel();
                    if (null != e && e.isSuggestionDiscussion()) return e.getSuggestModifiedBlockIds()
                }
                getRawContextStore() {
                    return this.k("context")
                }
                getSuggestionSnapshotStore() {
                    var e;
                    return null == (e = this.getSuggestionRawContextStore()) ? void 0 : e.k("snapshot")
                }
                getSuggestionRawContextStore() {
                    if (this.isSuggestionDiscussion()) return this.k("context")
                }
                getSplitFrom() {
                    var e;
                    return null == (e = this.getSuggestionRawContextStore()) ? void 0 : e.k("splitFrom").getValue()
                }
                getUserSeenRecordStore(e) {
                    let t = e ? ? this.userId;
                    if (t) return r(580555).H.createChildStore(this, {
                        id: (0, r(198936).e9)({
                            parent_id: this.id,
                            parent_table: this.table,
                            user_id: t
                        }),
                        table: r(832375).WQd,
                        spaceId: this.pointer.spaceId
                    })
                }
                commentStoresSortedByCreatedTime;
                getCommentStoresSortedByCreatedTime() {
                    return this.commentStoresSortedByCreatedTime || (this.commentStoresSortedByCreatedTime = new(r(345426)).ComputedStore(() => [...this.getCommentStores()].sort(r(9959).a), {
                        debugName: "DiscussionStore.getCommentStoresSortedByCreatedTime"
                    })), this.commentStoresSortedByCreatedTime.state
                }
                getFirstComment() {
                    return this.getCommentStoresSortedByCreatedTime().at(0)
                }
                getLastComment() {
                    return this.getCommentStoresSortedByCreatedTime().at(-1)
                }
            }
        },
        588083: (e, t, r) => {
            r.d(t, {
                r: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).jdJ,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getDomainName() {
                    return this.v("domain_name")
                }
                getDomainType() {
                    return this.v("domain_type")
                }
                getDomainStatus() {
                    return this.v("domain_status")
                }
                isDefault() {
                    return this.v("is_default") ? ? !1
                }
                isAutogenerated() {
                    return this.v("is_autogenerated") ? ? !1
                }
                getPublicHomePage() {
                    return this.v("public_home_page")
                }
                getPublicHomePagePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getPublicHomePagePointer()
                }
                getPublicHomePageStore() {
                    let e = this.getPublicHomePagePointer(),
                        t = this.k("public_home_page");
                    return e && this.getRecordStore(t, e)
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
            }
            class n extends s {
                static keyName = "PublicDomainStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        603160: (e, t, r) => {
            r.d(t, {
                s: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).KMJ,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getStripeConnectedAccountId() {
                    return this.v("stripe_connected_account_id")
                }
                getStripeConnectOnboardingPhase() {
                    return this.v("stripe_connect_onboarding_phase")
                }
                getWebhookConfig() {
                    return this.getWebhookConfigStore().getValue()
                }
                getWebhookConfigStore() {
                    return this.k("webhook_config")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getUpdatedTime() {
                    return this.v("updated_time")
                }
            }
            class n extends s {
                static keyName = "MarketplaceSellerStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        615018: (e, t, r) => {
            r.d(t, {
                c: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).cbU,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getAlive() {
                    return this.v("alive")
                }
                getPromptType() {
                    return this.v("prompt_type")
                }
                getMetadata() {
                    return this.getMetadataStore().getValue()
                }
                getMetadataStore() {
                    return this.k("metadata")
                }
            }
            class n extends s {
                static keyName = "PromptStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        646139: (e, t, r) => {
            r.d(t, {
                P: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).HYT,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getAlive() {
                    return this.v("alive")
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getData() {
                    return this.getDataStore().getValue()
                }
                getDataStore() {
                    return this.k("data")
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getModuleType() {
                    return this.v("module_type")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getPermissionItems() {
                    return this.getPermissionItemsStore().getValue() ? ? []
                }
                getPermissionItemsStore() {
                    return this.k("permissions")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class n extends s {
                static keyName = "WorkflowModuleStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getModuleId() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getModuleId()
                }
                toModuleValue() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.toModuleValue()
                }
            }
        },
        671268: (e, t, r) => {
            r.d(t, {
                U: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).WI6,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getOrganizationId() {
                    return this.v("organization_id")
                }
                getOrganizationPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getOrganizationPointer()
                }
                getOrganizationStore() {
                    let e = this.getOrganizationPointer(),
                        t = this.k("organization_id");
                    return e && this.getRecordStore(t, e)
                }
                getSpaceId() {
                    return this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getType() {
                    return this.v("type")
                }
                getStatus() {
                    return this.v("status")
                }
                getPreviousRequestId() {
                    return this.v("previous_request_id")
                }
                getPreviousRequestPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getPreviousRequestPointer()
                }
                getPreviousRequestStore() {
                    let e = this.getPreviousRequestPointer(),
                        t = this.k("previous_request_id");
                    return e && this.getRecordStore(t, e)
                }
                getProperties() {
                    return this.getPropertiesStore().getValue()
                }
                getPropertiesStore() {
                    return this.k("properties")
                }
                getRequestedById() {
                    return this.v("requested_by_id")
                }
                getRequestedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getRequestedByPointer()
                }
                getRequestedByStore() {
                    let e = this.getRequestedByPointer(),
                        t = this.k("requested_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getRequestedByTable() {
                    return this.v("requested_by_table")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
            }
            class n extends s {
                static keyName = "OrganizationRequestStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        672373: (e, t, r) => {
            r.d(t, {
                R: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).xlu,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getCredentialId() {
                    return this.getCredentialIdStore().getValue()
                }
                getCredentialIdStore() {
                    return this.k("credential_id")
                }
                getPublicKey() {
                    return this.getPublicKeyStore().getValue()
                }
                getPublicKeyStore() {
                    return this.k("public_key")
                }
                getAuthenticatorName() {
                    return this.v("authenticator_name")
                }
                getSignatureCount() {
                    return this.v("signature_count")
                }
                getAaguid() {
                    return this.v("aaguid")
                }
                getAuthenticatorAttestationType() {
                    return this.v("authenticator_attestation_type")
                }
                getTransports() {
                    return this.getTransportsStore().getValue() ? ? []
                }
                getTransportsStore() {
                    return this.k("transports")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getUpdatedAt() {
                    return this.v("updated_at")
                }
                getLastUsedAt() {
                    return this.v("last_used_at")
                }
                getAuthenticatorSignature() {
                    return this.v("authenticator_signature")
                }
                getRpId() {
                    return this.v("rp_id")
                }
            }
            class n extends s {
                static keyName = "PasskeyAuthenticatorStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        676322: (e, t, r) => {
            r.d(t, {
                k: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).mz2,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getContentfulId() {
                    return this.v("contentful_id")
                }
                getName() {
                    return this.v("name")
                }
                getUsername() {
                    return this.v("username")
                }
                isTemplateCreator() {
                    return this.v("is_template_creator") ? ? !1
                }
                getUserId() {
                    return this.v("user_id")
                }
                isFeaturedCreator() {
                    return this.v("is_featured_creator") ? ? !1
                }
                isCertifiedConsultant() {
                    return this.v("is_certified_consultant") ? ? !1
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
                getPublishedVersion() {
                    return this.v("published_version")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getLastUpdatedAt() {
                    return this.v("last_updated_at")
                }
                getLastSyncedAt() {
                    return this.v("last_synced_at")
                }
                getNumberOfTemplates() {
                    return this.v("number_of_templates")
                }
                getTemplateImage() {
                    return this.getTemplateImageStore().getValue()
                }
                getTemplateImageStore() {
                    return this.k("template_image")
                }
                getTags() {
                    return this.getTagsStore().getValue() ? ? []
                }
                getTagsStore() {
                    return this.k("tags")
                }
                getNumberOfDuplicates() {
                    return this.v("number_of_duplicates")
                }
                getScore1() {
                    return this.v("score_1")
                }
                getScore2() {
                    return this.v("score_2")
                }
                getScore3() {
                    return this.v("score_3")
                }
                getScore4() {
                    return this.v("score_4")
                }
                getScore5() {
                    return this.v("score_5")
                }
                getStripeConnectedAccountId() {
                    return this.v("stripe_connected_account_id")
                }
                getStripeConnectOnboardingPhase() {
                    return this.v("stripe_connect_onboarding_phase")
                }
                getStatus() {
                    return this.v("status")
                }
                isTechnologyPartner() {
                    return this.v("is_technology_partner") ? ? !1
                }
                getSellerOnboardingStatus() {
                    return this.v("seller_onboarding_status")
                }
            }
            class n extends s {
                static keyName = "TemplateCreatorStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getCreatorAvatarWithProtocol() {
                    var e;
                    let t = null == (e = this.getAttributes()) || null == (e = e.image) ? void 0 : e.url;
                    if (t) return (0, r(232837).NU)(t)
                }
            }
        },
        680802: (e, t, r) => {
            r.d(t, {
                c: () => o
            });
            var i = () => r(517013),
                s = () => r(210952);
            class n extends s().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).QrB,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getAlive() {
                    return this.v("alive")
                }
                getConfig() {
                    return this.getConfigStore().getValue()
                }
                getConfigStore() {
                    return this.k("config")
                }
            }
            class o extends n {
                static keyName = "FormQuestionStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                static FormQuestionNameStore = class extends i().pm {
                    static keyName = "FormQuestionNameStore";
                    constructor(e, t) {
                        super({
                            environment: e.environment,
                            pointer: e.pointer,
                            path: t,
                            recordStoreOptions: {
                                userId: e.userId,
                                inMemoryRecordCache: e.inMemoryRecordCache
                            }
                        }), this.formQuestionStore = e
                    }
                    getValue() {
                        var e;
                        return null == (e = this.formQuestionStore.getModel()) ? void 0 : e.getConfig().name
                    }
                };
                static FormQuestionDescriptionStore = class extends i().pm {
                    static keyName = "FormQuestionDescriptionStore";
                    constructor(e, t) {
                        super({
                            environment: e.environment,
                            pointer: e.pointer,
                            path: t,
                            recordStoreOptions: {
                                userId: e.userId,
                                inMemoryRecordCache: e.inMemoryRecordCache
                            }
                        }), this.formQuestionStore = e
                    }
                    getValue() {
                        var e;
                        return (null == (e = this.formQuestionStore.getModel()) ? void 0 : e.getConfig().description) ? ? []
                    }
                };
                shouldSyncQuestionNameToPropertyName() {
                    var e;
                    let t = null == (e = this.getModel()) ? void 0 : e.getConfig().shouldSyncQuestionNameToPropertyName;
                    return void 0 !== t && t
                }
                getPropertyTypeSpecificConfig(e) {
                    var t;
                    if (this.isDefined()) return null == (t = this.getConfig()) || null == (t = t.propertyTypeSpecificConfig) ? void 0 : t[e]
                }
                isRequired() {
                    var e;
                    return (null == (e = this.getConfig()) ? void 0 : e.required) ? ? !1
                }
                getNameStore() {
                    let e = ["config", "name"];
                    return this.uiLocation.getOrCreateChild(i().pm.getUIChildStoreKey(this.pointer, o.FormQuestionNameStore.keyName, e), () => new o.FormQuestionNameStore(this, e).uiLocation).store
                }
                getDescriptionStore() {
                    let e = ["config", "description"];
                    return this.uiLocation.getOrCreateChild(i().pm.getUIChildStoreKey(this.pointer, o.FormQuestionDescriptionStore.keyName, e), () => new o.FormQuestionDescriptionStore(this, e).uiLocation).store
                }
                getPropertyId() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getConfig().propertyId
                }
            }
        },
        681651: (e, t, r) => {
            let i;

            function s(e) {
                return i || (i = {
                    [r(832375).Oa6]: r(761229).v,
                    [r(832375).kzt]: r(575499).x,
                    [r(832375).eBi]: r(210952).y,
                    [r(832375).jft]: r(210952).y,
                    [r(832375).KNP]: r(210952).y,
                    [r(832375).l1b]: r(210952).y,
                    [r(832375).Wdc]: r(311279).v,
                    [r(832375).y$R]: r(568729).r,
                    [r(832375).Wuo]: r(210952).y,
                    [r(832375).cKY]: r(210952).y,
                    [r(832375).TFd]: r(922014).g,
                    [r(832375).Nm7]: r(812280).E,
                    [r(832375).YVp]: r(167381).n,
                    [r(832375).yBS]: r(698405).d,
                    [r(832375).SC1]: r(464011).b,
                    [r(832375).OfD]: r(210952).y,
                    [r(832375).Ok8]: r(210952).y,
                    [r(832375).kf7]: r(210952).y,
                    [r(832375).k$w]: r(256577).V,
                    [r(832375).hrX]: r(210952).y,
                    [r(832375).evP]: r(970831).B,
                    [r(832375).ukB]: r(881331).d,
                    [r(832375).H3H]: r(210952).y,
                    [r(832375).GPl]: r(447003).v,
                    [r(832375).qPS]: r(210952).y,
                    [r(832375).hGr]: r(210952).y,
                    [r(832375).qmW]: r(712193).Z,
                    [r(832375).VlP]: r(356912).m,
                    [r(832375).BiG]: r(768202).K,
                    [r(832375).Gy1]: r(547131).p,
                    [r(832375).SNf]: r(519219).j,
                    [r(832375)._0W]: r(210952).y,
                    [r(832375).rqL]: r(438472).G,
                    [r(832375).$XM]: r(210952).y,
                    [r(832375).eUD]: r(210952).y,
                    [r(832375).e4Z]: r(427581).P,
                    [r(832375).$2J]: r(210952).y,
                    [r(832375).r1d]: r(210952).y,
                    [r(832375).$YH]: r(581068).c,
                    [r(832375).HxG]: r(366090).y,
                    [r(832375).m2N]: r(210952).y,
                    [r(832375).ITT]: r(76763).n,
                    [r(832375).$kK]: r(210952).y,
                    [r(832375).vjA]: r(210952).y,
                    [r(832375).XHn]: r(210952).y,
                    [r(832375).gEh]: r(210952).y,
                    [r(832375).adQ]: r(210952).y,
                    [r(832375).AsL]: r(210952).y,
                    [r(832375).hWt]: r(210952).y,
                    [r(832375).Klg]: r(210952).y,
                    [r(832375).$MF]: r(210952).y,
                    [r(832375).HBA]: r(210952).y,
                    [r(832375).PsW]: r(210952).y,
                    [r(832375).rGg]: r(210952).y,
                    [r(832375).DHr]: r(210952).y,
                    [r(832375).kMj]: r(210952).y,
                    [r(832375).jsQ]: r(210952).y,
                    [r(832375).OjI]: r(210952).y,
                    [r(832375).T2]: r(210952).y,
                    [r(832375).Cy3]: r(38595).l,
                    [r(832375).lo9]: r(680802).c,
                    [r(832375).iEO]: r(275791).b,
                    [r(832375).joQ]: r(186982).E,
                    [r(832375).W8A]: r(210952).y,
                    [r(832375).hyq]: r(210952).y,
                    [r(832375).hxQ]: r(210952).y,
                    [r(832375).Wnz]: r(210952).y,
                    [r(832375).$$c]: r(210952).y,
                    [r(832375).yDO]: r(18647).V,
                    [r(832375).Lij]: r(183934).C,
                    [r(832375).bhs]: r(154998).U,
                    [r(832375).SBl]: r(49682).L,
                    [r(832375).Q4N]: r(210952).y,
                    [r(832375).bnG]: r(210952).y,
                    [r(832375).CEK]: r(260331).V,
                    [r(832375).Yxt]: r(210952).y,
                    [r(832375).Yxw]: r(210952).y,
                    [r(832375).aFA]: r(840415).x,
                    [r(832375).zx0]: r(97746).K,
                    [r(832375).PXw]: r(889e3).q,
                    [r(832375).dPx]: r(210952).y,
                    [r(832375).ozN]: r(210952).y,
                    [r(832375).nYQ]: r(210952).y,
                    [r(832375).IF6]: r(210952).y,
                    [r(832375).HtE]: r(48922).y,
                    [r(832375).jvE]: r(727974).y,
                    [r(832375).uLb]: r(516117).Z,
                    [r(832375).QOF]: r(562063).t,
                    [r(832375).KcW]: r(210952).y,
                    [r(832375).pEW]: r(210952).y,
                    [r(832375).yAZ]: r(186775).J,
                    [r(832375).a8w]: r(157521).J,
                    [r(832375).KqJ]: r(818869).z,
                    [r(832375)._ig]: r(912977).f,
                    [r(832375).ULG]: r(711043).$,
                    [r(832375).UNl]: r(207919).J,
                    [r(832375).EgT]: r(210952).y,
                    [r(832375).ziV]: r(210952).y,
                    [r(832375).V1v]: r(841912).S,
                    [r(832375).qtq]: r(77479).d,
                    [r(832375).qrH]: r(460849).R,
                    [r(832375).lMK]: r(793322).G,
                    [r(832375).enP]: r(854359).H,
                    [r(832375).XXy]: r(603160).s,
                    [r(832375).J6M]: r(794154).c,
                    [r(832375).OCn]: r(834617).h,
                    [r(832375).SS3]: r(210952).y,
                    [r(832375).es0]: r(210952).y,
                    [r(832375).Sd1]: r(210952).y,
                    [r(832375).MOG]: r(210952).y,
                    [r(832375)._pz]: r(403973).T,
                    [r(832375).oo9]: r(807825).L,
                    [r(832375).wl6]: r(210952).y,
                    [r(832375).mEg]: r(394121).J,
                    [r(832375).pkG]: r(159188)._,
                    [r(832375).y75]: r(822621).V,
                    [r(832375).rfw]: r(818392).O,
                    [r(832375).GY9]: r(210952).y,
                    [r(832375).vbv]: r(671268).U,
                    [r(832375).MRl]: r(210952).y,
                    [r(832375).ouC]: r(800217).P,
                    [r(832375).F9f]: r(726570)._,
                    [r(832375).eV7]: r(672373).R,
                    [r(832375).KWb]: r(210952).y,
                    [r(832375).Z4m]: r(746326).s,
                    [r(832375).dod]: r(615018).c,
                    [r(832375).qNb]: r(501023).l,
                    [r(832375)._6L]: r(588083).r,
                    [r(832375).AvP]: r(210952).y,
                    [r(832375).ez7]: r(868249).L,
                    [r(832375).sNL]: r(793177).f,
                    [r(832375).Fub]: r(172960).U,
                    [r(832375).iPf]: r(210952).y,
                    [r(832375).Ws0]: r(210952).y,
                    [r(832375).bwd]: r(253680).G,
                    [r(832375)._71]: r(210952).y,
                    [r(832375).Xiz]: r(757148).o,
                    [r(832375).Xh]: r(210952).y,
                    [r(832375).GFx]: r(148493).J,
                    [r(832375).Ghx]: r(210952).y,
                    [r(832375).kW7]: r(210952).y,
                    [r(832375).nsO]: r(210952).y,
                    [r(832375).mlj]: r(210952).y,
                    [r(832375).sLR]: r(210952).y,
                    [r(832375).H53]: r(210952).y,
                    [r(832375).eqd]: r(210952).y,
                    [r(832375).G4T]: r(210952).y,
                    [r(832375).oJm]: r(210952).y,
                    [r(832375).Q$N]: r(210952).y,
                    [r(832375).Crh]: r(712241).L,
                    [r(832375).ZPG]: r(931672).E,
                    [r(832375).ojG]: r(210952).y,
                    [r(832375).EuC]: r(131513).P,
                    [r(832375).VY8]: r(690382).i,
                    [r(832375).Kq7]: r(210952).y,
                    [r(832375).Xwe]: r(210952).y,
                    [r(832375).NXh]: r(695906).SpaceStore,
                    [r(832375).iiK]: r(210952).y,
                    [r(832375).SMn]: r(210952).y,
                    [r(832375).DWi]: r(210952).y,
                    [r(832375).m3J]: r(264541).b,
                    [r(832375).aSp]: r(210952).y,
                    [r(832375).j0B]: r(210952).y,
                    [r(832375).$RT]: r(210952).y,
                    [r(832375).Jmj]: r(210952).y,
                    [r(832375).qcA]: r(6873).x,
                    [r(832375).gDn]: r(210952).y,
                    [r(832375).naB]: r(398652).C,
                    [r(832375).f3c]: r(291886).m,
                    [r(832375).JrE]: r(210952).y,
                    [r(832375).aJN]: r(229903).V,
                    [r(832375).sB_]: r(210952).y,
                    [r(832375).PcJ]: r(210952).y,
                    [r(832375).mu7]: r(994797).SpaceViewStore,
                    [r(832375).oNS]: r(210952).y,
                    [r(832375).ytf]: r(59521).b,
                    [r(832375).IeV]: r(210952).y,
                    [r(832375).RWv]: r(210952).y,
                    [r(832375).JAq]: r(210952).y,
                    [r(832375).yiT]: r(374903).n,
                    [r(832375).yKj]: r(681735).h,
                    [r(832375).XXO]: r(258710).s,
                    [r(832375).bf7]: r(222142).M,
                    [r(832375).vnT]: r(202542).o,
                    [r(832375).Hik]: r(676322).k,
                    [r(832375)._FR]: r(686831).x,
                    [r(832375).hRD]: r(185878).Q,
                    [r(832375).R$c]: r(210952).y,
                    [r(832375).HAA]: r(551498).U,
                    [r(832375).Toz]: r(174148).E,
                    [r(832375).mSw]: r(915045).X,
                    [r(832375).wI1]: r(210952).y,
                    [r(832375).IvX]: r(210952).y,
                    [r(832375).A3P]: r(902573).L,
                    [r(832375).GUg]: r(210952).y,
                    [r(832375).B7B]: r(210952).y,
                    [r(832375).yvd]: r(210952).y,
                    [r(832375).gDt]: r(210952).y,
                    [r(832375).S6u]: r(210952).y,
                    [r(832375)._0B]: r(210952).y,
                    [r(832375).rNM]: r(210952).y,
                    [r(832375).CsX]: r(210952).y,
                    [r(832375).bJl]: r(210952).y,
                    [r(832375).GDR]: r(736309).d,
                    [r(832375).WQd]: r(580555).H,
                    [r(832375).pVl]: r(210952).y,
                    [r(832375).xMx]: r(545922).G,
                    [r(832375).TFg]: r(62148).g,
                    [r(832375).C0E]: r(360851).N,
                    [r(832375).U6v]: r(509297).j,
                    [r(832375).QRx]: r(849697).t,
                    [r(832375).lyl]: r(210952).y,
                    [r(832375).NkI]: r(210952).y,
                    [r(832375).tEp]: r(142566).s,
                    [r(832375).yMG]: r(646139).P,
                    [r(832375).yHj]: r(736567).h,
                    [r(832375).PuY]: r(210952).y,
                    [r(832375).EcF]: r(411545).p,
                    [r(832375).ef6]: r(210952).y
                }), i[e]
            }
            r.d(t, {
                h: () => s
            })
        },
        681735: (e, t, r) => {
            r.d(t, {
                h: () => o
            }), r(898992), r(823215), r(672577);
            var i = () => r(422280),
                s = () => r(210952);
            class n extends s().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).dCz,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getName() {
                    return this.v("name")
                }
                getDescription() {
                    return this.v("description")
                }
                getRawIcon() {
                    return this.v("icon")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getArchivedBy() {
                    return this.v("archived_by")
                }
                getArchivedAt() {
                    return this.v("archived_at")
                }
                getTeamPages() {
                    return this.getTeamPagesStore().getValue() ? ? []
                }
                getTeamPagesStore() {
                    return this.k("team_pages")
                }
                getTeamPagePointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getTeamPagePointers()) ? ? []
                }
                getTeamPageStores() {
                    let e = this.getTeamPagesStore();
                    return this.getRecordStoreArray(e, this.getTeamPagePointers())
                }
                getTeamPageId() {
                    return this.v("team_page_id")
                }
                getTeamPagePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getTeamPagePointer()
                }
                getTeamPageStore() {
                    let e = this.getTeamPagePointer(),
                        t = this.k("team_page_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getSettings() {
                    return this.getSettingsStore().getValue()
                }
                getSettingsStore() {
                    return this.k("settings")
                }
                isDefault() {
                    return this.v("is_default") ? ? !1
                }
                getPermissionItems() {
                    return this.getPermissionItemsStore().getValue() ? ? []
                }
                getPermissionItemsStore() {
                    return this.k("permissions")
                }
                getRawMembership() {
                    return this.getRawMembershipStore().getValue() ? ? []
                }
                getRawMembershipStore() {
                    return this.k("membership")
                }
            }
            class o extends n {
                static keyName = "TeamStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getSpacePermission() {
                    var e;
                    return null == (e = this.getPermissionItems()) ? void 0 : e.find(r(642157).Lg)
                }
                getSpacePermissionRole() {
                    var e;
                    return (null == (e = this.getSpacePermission()) ? void 0 : e.role) ? ? "none"
                }
                getTeamPermission() {
                    let e = this.getPermissionItems();
                    if (e) {
                        for (let t of e)
                            if ((0, i().O1)(t, this.id)) return t
                    }
                }
                getTeamOwnerPermission() {
                    let e = this.getPermissionItems();
                    if (e) {
                        for (let t of e)
                            if ((0, i().Jt)(t, this.id)) return t
                    }
                }
                getTeamGuestsPermission() {
                    let e = this.getPermissionItems();
                    if (e) {
                        for (let t of e)
                            if ((0, i().E)(t, this.id)) return t
                    }
                }
                getTeamAccessLevel() {
                    let e = this.getSettings();
                    return e ? (0, i().MA)(e) : "private"
                }
                hasFullAccess() {
                    return "editor" === this.getRole()
                }
                allowsUserToPost() {
                    let e = this.getRole(),
                        t = "read_and_write" === e && this.teamPermissionAllowsMembersToPost();
                    return "membership_admin" === e || "editor" === e || t
                }
                teamPermissionAllowsMembersToPost() {
                    var e;
                    return (0, r(642157).p2)((null == (e = this.getTeamPermission()) ? void 0 : e.role) ? ? "none")
                }
                canAddOrRemoveTopLevelPages() {
                    var e;
                    if (this.hasFullAccess()) return !0;
                    if (this.getDisableTeamPageEdits() || !this.canEdit()) return !1;
                    let t = (null == (e = this.getTeamPermission()) ? void 0 : e.role) ? ? "none";
                    return (0, r(642157).p2)(t)
                }
                hasIcon() {
                    return !!this.getIcon()
                }
                getIcon() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getIcon()
                }
                getDisablePublicAccess() {
                    return !!this.getSetting("disable_public_access")
                }
                getDisableExport() {
                    return !!this.getSetting("disable_export")
                }
                getDisableGuests() {
                    return !!this.getSetting("disable_guests")
                }
                getDisableTeamPageEdits() {
                    return !!this.getSetting("disable_team_page_edits")
                }
                getDisableRestrictedMembers() {
                    return r(218744).default.checkGate({
                        gateName: "teamspaces_disable_restricted_members_setting"
                    }) && !!this.getSetting("disable_restricted_members")
                }
                areTeamPageStoresReady() {
                    return this.isDefined() && this.getTeamPageStores().every(e => e.isReady())
                }
                isArchived() {
                    return !!this.getArchivedBy()
                }
                getSetting(e) {
                    return this.getSettingsStore().getKeyStore(e).getValue()
                }
            }
        },
        686831: (e, t, r) => {
            r.d(t, {
                x: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).t5h,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getContentfulId() {
                    return this.v("contentful_id")
                }
                getName() {
                    return this.v("name")
                }
                getSlug() {
                    return this.v("slug")
                }
                getLocale() {
                    return this.v("locale")
                }
                getDescription() {
                    return this.v("description")
                }
                getPrice() {
                    return this.v("price")
                }
                getAuthors() {
                    return this.getAuthorsStore().getValue() ? ? []
                }
                getAuthorsStore() {
                    return this.k("authors")
                }
                getMadeBy() {
                    return this.v("made_by")
                }
                getTags() {
                    return this.getTagsStore().getValue() ? ? []
                }
                getTagsStore() {
                    return this.k("tags")
                }
                getBlockId() {
                    return this.v("block_id")
                }
                getPublishedBlockId() {
                    return this.v("published_block_id")
                }
                getPublishedSpaceId() {
                    return this.v("published_space_id")
                }
                getPublishedSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getPublishedSpacePointer()
                }
                getPublishedSpaceStore() {
                    let e = this.getPublishedSpacePointer(),
                        t = this.k("published_space_id");
                    return e && this.getRecordStore(t, e)
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getLastUpdatedAt() {
                    return this.v("last_updated_at")
                }
                getPublishedVersion() {
                    return this.v("published_version")
                }
                getStatus() {
                    return this.v("status")
                }
                getDraftAttributes() {
                    return this.getDraftAttributesStore().getValue()
                }
                getDraftAttributesStore() {
                    return this.k("draft_attributes")
                }
            }
            class n extends s {
                static keyName = "TemplateDraftStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getTemplatePublicUrl() {
                    return this.getAttributesStore().getKeyStore("public_site_url").getValue()
                }
                getPurchaseUrl() {
                    return this.getAttributesStore().getKeyStore("purchase_url").getValue()
                }
                getTemplateEmoji() {
                    return this.getAttributesStore().getKeyStore("emoji").getValue()
                }
                getLongDescription() {
                    let e = this.getAttributesStore().getKeyStore("serialized_body").getValue();
                    if (!e) return "";
                    try {
                        var t;
                        return (null == (t = JSON.parse(e)) || null == (t = t.content) || null == (t = t[0]) || null == (t = t.content) || null == (t = t[0]) ? void 0 : t.value) || ""
                    } catch (e) {
                        return ""
                    }
                }
                getMobileScreenshots() {
                    return this.getAttributesStore().getKeyStore("mobile_screenshots").getValue()
                }
                getScreenshots() {
                    return this.getAttributesStore().getKeyStore("screenshots").getValue()
                }
                getVideos() {
                    return this.getAttributesStore().getKeyStore("videos").getValue()
                }
                getCoverImage() {
                    return this.getAttributesStore().getKeyStore("image").getValue()
                }
                getRejectReason() {
                    return this.getDraftAttributesStore().getKeyStore("reject_reason").getValue()
                }
                getCustomRejectReason() {
                    return this.getDraftAttributesStore().getKeyStore("custom_reject_reason").getValue()
                }
                getRestrictRedistribution() {
                    return this.getAttributesStore().getKeyStore("restrict_redistribution").getValue()
                }
                getEmailRequirement() {
                    return this.getAttributesStore().getKeyStore("email_requirement").getValue()
                }
                getCheckoutEnabled() {
                    return this.getAttributesStore().getKeyStore("checkout_enabled").getValue()
                }
            }
        },
        690382: (e, t, r) => {
            r.d(t, {
                i: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).GYY,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getTeamName() {
                    return this.v("team_name")
                }
                getChannel() {
                    return this.v("channel")
                }
                getChannelId() {
                    return this.v("channel_id")
                }
                getConfigurationUrl() {
                    return this.v("configuration_url")
                }
                getWebhookUrl() {
                    return this.v("webhook_url")
                }
                getEnabled() {
                    return this.v("enabled")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getChannelLocale() {
                    return this.v("channel_locale")
                }
            }
            class n extends s {
                static keyName = "SlackIntegrationStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        695906: (e, t, r) => {
            r.r(t), r.d(t, {
                SpaceStore: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).ckR,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.id
                }
                getName() {
                    return this.v("name")
                }
                getEmailDomains() {
                    return this.getEmailDomainsStore().getValue() ? ? []
                }
                getEmailDomainsStore() {
                    return this.k("email_domains")
                }
                getPages() {
                    return this.getPagesStore().getValue() ? ? []
                }
                getPagesStore() {
                    return this.k("pages")
                }
                getPagePointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getPagePointers()) ? ? []
                }
                getPageStores() {
                    let e = this.getPagesStore();
                    return this.getRecordStoreArray(e, this.getPagePointers())
                }
                getRawIcon() {
                    return this.getIconStore().getValue()
                }
                getIconStore() {
                    return this.k("icon")
                }
                getDisableMoveToSpace() {
                    return this.v("disable_move_to_space") ? ? !1
                }
                getDisableSpacePageEdits() {
                    return this.v("disable_space_page_edits") ? ? !1
                }
                getDisablePublicAccessRequests() {
                    return this.v("disable_public_access_requests") ? ? !1
                }
                getDisableTeamCreation() {
                    return this.v("disable_team_creation") ? ? !1
                }
                getBetaEnabled() {
                    return this.v("beta_enabled")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getDeletedBy() {
                    return this.v("deleted_by")
                }
                getDeletedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDeletedByPointer()
                }
                getDeletedByStore() {
                    let e = this.getDeletedByPointer(),
                        t = this.k("deleted_by");
                    return e && this.getRecordStore(t, e)
                }
                getPermanentlyDeletedTime() {
                    return this.v("permanently_deleted_time")
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getAdminDisablePublicAccess() {
                    return this.v("admin_disable_public_access")
                }
                getSpacePages() {
                    return this.getSpacePagesStore().getValue() ? ? []
                }
                getSpacePagesStore() {
                    return this.k("space_pages")
                }
                getInviteLinkEnabled() {
                    return this.v("invite_link_enabled")
                }
                getPlanType() {
                    return this.v("plan_type")
                }
                getSubscriptionTier() {
                    return this.v("subscription_tier") ? ? "free"
                }
                getInitialUseCases() {
                    return this.getInitialUseCasesStore().getValue() ? ? []
                }
                getInitialUseCasesStore() {
                    return this.k("initial_use_cases")
                }
                getPublicHomePage() {
                    return this.v("public_home_page")
                }
                getBotSettings() {
                    return this.getBotSettingsStore().getValue()
                }
                getBotSettingsStore() {
                    return this.k("bot_settings")
                }
                getSettings() {
                    return this.getSettingsStore().getValue() ? ? {}
                }
                getSettingsStore() {
                    return this.k("settings")
                }
                getOverdueSubscription() {
                    return this.getOverdueSubscriptionStore().getValue()
                }
                getOverdueSubscriptionStore() {
                    return this.k("overdue_subscription")
                }
                getDisablePublicAccess() {
                    return this.v("disable_public_access") ? ? !1
                }
                getDisableGuests() {
                    return this.v("disable_guests") ? ? !1
                }
                getDisableExport() {
                    return this.v("disable_export") ? ? !1
                }
                getShortId() {
                    return this.v("short_id")
                }
                getShortIdStr() {
                    return this.v("short_id_str")
                }
                getReferralId() {
                    return this.v("referral_id")
                }
                getReferralPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getReferralPointer()
                }
                getReferralStore() {
                    let e = this.getReferralPointer(),
                        t = this.k("referral_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class n extends s {
                static keyName = "SpaceStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                isTeamsEnabled() {
                    var e, t;
                    let i = null == (e = this.getModel()) ? void 0 : e.isTeamsEnabled();
                    return (0, r(722371).O9)(i) ? i : !!(null == (t = this.getPublicSpaceData()) ? void 0 : t.isTeamsEnabled)
                }
                getDisableMembershipRequests() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.getDisableMembershipRequests())
                }
                getDisableExternalMembershipRequests() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.getDisableExternalMembershipRequests())
                }
                getDisableMemberUpgradeRequests() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.getDisableMemberUpgradeRequests())
                }
                getDisableGuestMembershipRequests() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.getDisableGuestMembershipRequests())
                }
                getDisallowWebhookAutomationAction() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.getSetting("disallow_webhook_automation_action"))
                }
                getIntegrationRestrictions() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getBotSettingsStore().k("integration_restrictions").getValue()
                }
                getSetting(e) {
                    var t;
                    return null == (t = this.getModel()) ? void 0 : t.getSetting(e)
                }
                getMcpUrlAllowlistEnabled() {
                    return !!this.getSetting("restrict_mcp_urls_to_allowlist")
                }
                getAllowedMcpServerUrls() {
                    return this.getSetting("allowed_mcp_server_urls") ? ? []
                }
                getInternalIntegrationCreationPolicy() {
                    return this.getSetting("internal_integration_creation_policy") ? ? "workspace_owners_only"
                }
                getZeroRetentionEnabled() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.getZeroRetentionEnabled())
                }
                getHIPAACompliancyData() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getHIPAACompliancyData()
                }
                isAiEnabledOnSpace() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.isAiEnabledOnSpace())
                }
                isAiImageGenerationEnabledOnSpace() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.isAiImageGenerationEnabledOnSpace())
                }
                getCrdtStatus() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getCrdtStatus()) ? ? "migrating"
                }
                isCrdtEnabledOnSpace() {
                    let e = this.getCrdtStatus();
                    return "on" === e || "migrating" === e
                }
                getRestrictedStateForSpace() {
                    let e = this.getPublicSpaceData(),
                        t = null == e ? void 0 : e.restrictedState;
                    if (t && !(0, r(381453).Im)(t)) return t
                }
                getSpaceSurveyData() {
                    return this.getKeyStore("settings").getKeyStore("space_survey_data").getValue()
                }
                getPublicSpaceData() {
                    return r(949830).A.getData(this.environment, {
                        spaceId: this.id,
                        userId: this.environment.currentUser.id
                    }) || void 0
                }
                getIcon() {
                    let e = this.getModel();
                    if (e) return e.getIcon();
                    let t = this.getPublicSpaceData();
                    if (null != t && t.icon) return {
                        pointer: this.pointer,
                        icon: t.icon
                    }
                }
                getEditDomain() {
                    let e = this.getPublicSpaceData();
                    if (!(null != e && e.domainIsAutogenerated)) return null == e ? void 0 : e.domain
                }
                getPublicHomePage() {
                    var e;
                    return null == (e = this.getPublicSpaceData()) ? void 0 : e.publicHomePage
                }
                getPublicContentDomain() {
                    var e;
                    return null == (e = this.getPublicSpaceData()) ? void 0 : e.domain
                }
                getDisablePublicAccess() {
                    var e;
                    return this.k("disable_public_access").getValue() ? ? (null == (e = this.getPublicSpaceData()) ? void 0 : e.disablePublicAccess) ? ? !1
                }
                getDisableGuests() {
                    var e;
                    return this.k("disable_guests").getValue() ? ? (null == (e = this.getPublicSpaceData()) ? void 0 : e.disableGuests) ? ? !1
                }
                getDisableTeamGuests() {
                    return !!this.getSettingsStore().getKeyStore("disable_team_guests").getValue()
                }
                getDisableExport() {
                    var e;
                    return this.k("disable_export").getValue() ? ? (null == (e = this.getPublicSpaceData()) ? void 0 : e.disableExport) ? ? !1
                }
                getDisableMoveToSpace() {
                    var e;
                    return this.k("disable_move_to_space").getValue() ? ? (null == (e = this.getPublicSpaceData()) ? void 0 : e.disableMoveToSpace) ? ? !1
                }
                getDisableGuestWithPrivatePages() {
                    var e;
                    return (null == (e = this.getPublicSpaceData()) ? void 0 : e.disableGuestWithPrivatePages) ? ? !0
                }
                getInAppMessageEligibility() {
                    var e;
                    return null == (e = this.getPublicSpaceData()) ? void 0 : e.inAppMessageEligibility
                }
                getPlanType() {
                    let e = super.getPlanType(),
                        t = this.getPublicSpaceData(),
                        r = t && "none" !== t.role ? t.planType : void 0;
                    return e || r
                }
                getOverdueSubscription() {
                    return this.getKeyStore("overdue_subscription").getValue()
                }
                getEnableGuestInviteRequest() {
                    var e;
                    return this.getSetting("enable_guest_invite_requests") ? ? (null == (e = this.getPublicSpaceData()) ? void 0 : e.enableGuestInviteRequest) ? ? !1
                }
                getPublicDomainIds() {
                    var e;
                    return (null == (e = this.getPublicSpaceData()) ? void 0 : e.publicDomainIds) || []
                }
                getPublicDomains() {
                    var e;
                    return (null == (e = this.getPublicSpaceData()) ? void 0 : e.publicDomains) || []
                }
                getFreezeSettings() {
                    return this.getSettingsStore().getKeyValue("freeze")
                }
                getSpaceIdCreator() {
                    return this.environment.idCreator.getSpaceIdCreatorSync(this.id)
                }
            }
        },
        698405: (e, t, r) => {
            r.d(t, {
                d: () => o
            }), r(16280), r(898992), r(672577), r(737550);
            var i = () => r(489676),
                s = () => r(210952);
            class n extends s().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).XNB,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getTrigger() {
                    return this.v("trigger")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getAlive() {
                    return this.v("alive")
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getStatus() {
                    return this.v("status")
                }
                getActionIds() {
                    return this.getActionIdsStore().getValue() ? ? []
                }
                getActionIdsStore() {
                    return this.k("action_ids")
                }
                getActionPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getActionPointers()) ? ? []
                }
                getActionStores() {
                    let e = this.getActionIdsStore();
                    return this.getRecordStoreArray(e, this.getActionPointers())
                }
                getRunAt() {
                    return this.v("run_at")
                }
                getProperties() {
                    return this.getPropertiesStore().getValue()
                }
                getPropertiesStore() {
                    return this.k("properties")
                }
                getCopiedFrom() {
                    return this.v("copied_from_pointer")
                }
                getCopiedFromPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCopiedFrom()
                }
                getCopiedFromStore() {
                    let e = this.getCopiedFromPointer(),
                        t = this.k("copied_from_pointer");
                    return e && this.getRecordStore(t, e)
                }
                getLastExecutedTime() {
                    return this.v("last_executed_time")
                }
                getLastFailedTime() {
                    return this.v("last_failed_time")
                }
                getLastFailedReason() {
                    return this.getLastFailedReasonStore().getValue()
                }
                getLastFailedReasonStore() {
                    return this.k("last_failed_reason")
                }
            }
            class o extends n {
                static keyName = "AutomationStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getRecurrence() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getRecurrence()
                }
                isActive() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isActive()) || !1
                }
                isTriggerType(e) {
                    var t;
                    return (null == (t = this.getModel()) ? void 0 : t.getTriggerType()) === e
                }
                verifyTriggerType(e) {
                    var t;
                    if ((null == (t = this.getModel()) ? void 0 : t.getTriggerType()) !== e) throw Error(`Expected trigger type ${e}`)
                }
                getTriggerType() {
                    var e;
                    return null == (e = this.getTriggerStore()) ? void 0 : e.getKeyStore("type").getValue()
                }
                isRecurringSprintAutomation() {
                    return !!this.isTriggerType("recurrence") && this.getActionStores().some(e => e.isType("complete_sprint"))
                }
                getTriggerStore() {
                    return this.getKeyStore("trigger")
                }
                getMinimumFieldsForPermissions() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getMinimumFieldsForPermissions()
                }
                getParentBlockStore() {
                    let e = this.getParentPointer();
                    if ((null == e ? void 0 : e.table) === r(832375).evP) return r(970831).B.createChildStore(this, e)
                }
                getNameStore() {
                    return this.getPropertiesStore().getKeyStore("name")
                }
                getName() {
                    return this.getNameStore().getValue()
                }
                getIconStore() {
                    return this.getPropertiesStore().getKeyStore("icon")
                }
                hasAnyActions() {
                    return this.isDefined() && this.getActionIds().length > 0
                }
                getEventConfiguration() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getEventConfiguration()
                }
                getOwnerStore() {
                    let e = this.getCreatedByPointer();
                    return (null == e ? void 0 : e.table) === r(832375).oo9 ? r(807825).L.createChildStore(this, e) : (null == e ? void 0 : e.table) === r(832375).GPl ? r(447003).v.createChildStore(this, e) : void 0
                }
                getNameWithDefault(e) {
                    var t;
                    return (null == (t = this.getModel()) ? void 0 : t.getNameWithDefault(this.getRecordModel, e)) ? ? (0, r(658746).PK)(e)
                }
                findActionStoreById(e) {
                    return this.getActionStores().find(t => t.id === e)
                }
                isCompleteSprintAutomation() {
                    let e = this.getModel();
                    return (0, r(722371).O9)(e) && e.isCompleteSprintAutomation({
                        getRecordModel: this.getRecordModel
                    })
                }
                getDeprecatedActionFormUrl() {
                    for (let e of this.getActionStores()) {
                        let t = e.getType(),
                            r = t && i().Q[t];
                        if (r) return r
                    }
                }
                renderName(e) {
                    let t = this.getRole();
                    return (0, r(722371).O9)(t) && (0, r(642157).Tt)(t) ? this.getAlive() ? this.getNameWithDefault(e) : e.formatMessage(r(658746).VS.automationDeletedName) : e.formatMessage(r(658746).VS.automationPrivateName)
                }
                getButtonEffect() {
                    return this.getPropertiesStore().getKeyStore("button_effect").getValue()
                }
            }
        },
        711043: (e, t, r) => {
            r.d(t, {
                $: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).rXi,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getProductTable() {
                    return this.v("product_table")
                }
                getProductId() {
                    return this.v("product_id")
                }
                getCreatorId() {
                    return this.v("creator_id")
                }
                getPrice() {
                    return this.v("price")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getCheckoutEnabled() {
                    return this.v("checkout_enabled")
                }
                getRatingsAttributes() {
                    return this.getRatingsAttributesStore().getValue()
                }
                getRatingsAttributesStore() {
                    return this.k("ratings_attributes")
                }
                getInstallationCount() {
                    return this.v("installation_count")
                }
            }
            class n extends s {
                static keyName = "MarketplaceListingStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        712193: (e, t, r) => {
            r.d(t, {
                Z: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).tW2,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getName() {
                    return this.v("name")
                }
                getDescription() {
                    return this.v("description")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class n extends s {
                static keyName = "ChannelStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getTeamId() {
                    return this.getParentId()
                }
            }
        },
        712241: (e, t, r) => {
            r.d(t, {
                L: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).BtN,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getSectionType() {
                    return this.v("section_type")
                }
                getProperties() {
                    return this.getPropertiesStore().getValue()
                }
                getPropertiesStore() {
                    return this.k("properties")
                }
                getAlive() {
                    return this.v("alive")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
            }
            class n extends s {
                static keyName = "SidebarSectionStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                static fromSpaceViewStore(e, t, i) {
                    let s = null == t ? void 0 : t.getUserId();
                    if (e && t && s) return n.createChildStore(t, (0, r(190566).A7)({
                        spaceIdCreator: e,
                        userId: s,
                        sectionType: i
                    }))
                }
                static fromSpaceStore(e) {
                    let {
                        spaceIdCreator: t,
                        spaceStore: i,
                        sectionType: s
                    } = e, o = null == i ? void 0 : i.userId;
                    if (t && i && o) return n.createChildStore(i, (0, r(190566).A7)({
                        spaceIdCreator: t,
                        userId: o,
                        sectionType: s
                    }))
                }
                isHidden() {
                    var e;
                    let t = "myMeetings" === this.getSectionType();
                    return (null == (e = this.getProperties()) ? void 0 : e.hidden) ? ? t
                }
            }
        },
        726570: (e, t, r) => {
            r.d(t, {
                _: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).WvP,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getVisitedAt() {
                    return this.v("visited_at")
                }
                getTotalVisits() {
                    return this.v("total_visits")
                }
                getDecayedVisitScore() {
                    return this.v("decayed_visit_score")
                }
                getDecayedVisitScoreUpdatedAt() {
                    return this.v("decayed_visit_score_updated_at")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getWasUnlisted() {
                    return this.v("was_unlisted")
                }
                getType() {
                    return this.v("type")
                }
            }
            class n extends s {
                static keyName = "PageVisitStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        727974: (e, t, r) => {
            r.d(t, {
                y: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).iij,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getType() {
                    return this.v("type")
                }
                getName() {
                    return this.v("name")
                }
                getSlug() {
                    return this.v("slug")
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
                getSupportedTables() {
                    return this.getSupportedTablesStore().getValue() ? ? []
                }
                getSupportedTablesStore() {
                    return this.k("supported_tables")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getLastUpdatedAt() {
                    return this.v("last_updated_at")
                }
                getLastSyncedAt() {
                    return this.v("last_synced_at")
                }
            }
            class n extends s {
                static keyName = "MarketplaceBadgeStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        736309: (e, t, r) => {
            r.d(t, {
                d: () => n
            }), r(898992), r(354520), r(581454);
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).$2h,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getLeftSpaces() {
                    return this.getLeftSpacesStore().getValue() ? ? []
                }
                getLeftSpacesStore() {
                    return this.k("left_spaces")
                }
                getLeftSpacePointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getLeftSpacePointers()) ? ? []
                }
                getLeftSpaceStores() {
                    let e = this.getLeftSpacesStore();
                    return this.getRecordStoreArray(e, this.getLeftSpacePointers())
                }
                getDeletedEmail() {
                    return this.v("deleted_email")
                }
            }
            class n extends s {
                static keyName = "UserRootStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getSpaceViewPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getSpaceViewPointers()) ? ? []
                }
                getSpaceViewsStore() {
                    return this.getKeyStore("space_views")
                }
                getSpaceViewPointersStore() {
                    return this.getKeyStore("space_view_pointers")
                }
                getSpaceViewStores() {
                    return this.getRecordStoreArray(this, this.getSpaceViewPointers())
                }
                getAdminSpacePointers() {
                    return r(381453).oE(r(381453).sb(this.getSpaceViewStores().map(e => {
                        let t = e.getRole();
                        return t && r(642157).Km(t) && e.getSpacePointer()
                    })))
                }
                getAdminSpaceIds() {
                    return this.getAdminSpacePointers().map(({
                        id: e
                    }) => e)
                }
                getAdminSpaceStores() {
                    return this.getRecordStoreArray(this, this.getAdminSpacePointers()).filter(e => {
                        let t = e.getRole();
                        return t && r(642157).Km(t)
                    })
                }
            }
        },
        736567: (e, t, r) => {
            r.d(t, {
                h: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).zO_,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getAlive() {
                    return this.v("alive")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getBlockId() {
                    return this.v("block_id")
                }
                getBlockPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getBlockPointer()
                }
                getBlockStore() {
                    let e = this.getBlockPointer(),
                        t = this.k("block_id");
                    return e && this.getRecordStore(t, e)
                }
                getPropertyId() {
                    return this.v("property_id")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
            }
            class n extends s {
                static keyName = "WorkflowPropertyEditAttributionStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        746326: (e, t, r) => {
            r.d(t, {
                s: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).M1C,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getOptedInAt() {
                    return this.v("opted_in_at")
                }
                getOptedInById() {
                    return this.v("opted_in_by_id")
                }
                getOptedInByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getOptedInByPointer()
                }
                getOptedInByStore() {
                    let e = this.getOptedInByPointer(),
                        t = this.k("opted_in_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getOptedInByTable() {
                    return this.v("opted_in_by_table")
                }
                getMetadata() {
                    return this.getMetadataStore().getValue()
                }
                getMetadataStore() {
                    return this.k("metadata")
                }
            }
            class n extends s {
                static keyName = "PlusLockWaitlistStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        757148: (e, t, r) => {
            r.d(t, {
                o: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).YFw,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getEventType() {
                    return this.v("event_type")
                }
                getPayload() {
                    return this.getPayloadStore().getValue()
                }
                getPayloadStore() {
                    return this.k("payload")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getStatus() {
                    return this.v("status")
                }
                getAppName() {
                    return this.v("app_name")
                }
                getRecurrence() {
                    return this.getRecurrenceStore().getValue()
                }
                getRecurrenceStore() {
                    return this.k("recurrence")
                }
                getDeterministicId() {
                    return this.v("deterministic_id")
                }
                getMaxScheduleAheadTime() {
                    return this.v("max_schedule_ahead_time")
                }
                getNextRunTime() {
                    return this.v("next_run_time")
                }
                getFlexibleWindowInMinutes() {
                    return this.v("flexible_window_in_minutes")
                }
                getDisableForMigration() {
                    return this.v("disable_for_migration") ? ? !1
                }
            }
            class n extends s {
                static keyName = "ScheduleForEventStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        761229: (e, t, r) => {
            r.d(t, {
                v: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).TYW,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getGrantedTime() {
                    return this.v("granted_time")
                }
                getGrantedByTable() {
                    return this.v("granted_by_table")
                }
                getGrantedById() {
                    return this.v("granted_by_id")
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
                getType() {
                    return this.v("type")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getForActorTable() {
                    return this.v("for_actor_table")
                }
                getForActorId() {
                    return this.v("for_actor_id")
                }
                getResolvedTime() {
                    return this.v("resolved_time")
                }
                getResolvedByTable() {
                    return this.v("resolved_by_table")
                }
                getResolvedById() {
                    return this.v("resolved_by_id")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getMessage() {
                    return this.v("message")
                }
                getStatus() {
                    return this.v("status")
                }
            }
            class n extends s {
                static keyName = "AccessRequestStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                isResolvedSpaceMembershipRequest() {
                    let e = this.getStatus();
                    return "approved" === e || "rejected" === e
                }
                isResolvedTeamMembershipRequest() {
                    let e = this.getStatus();
                    return "approved" === e || "rejected" === e
                }
                getResolvedByPointer(e) {
                    var t;
                    return null == (t = this.getModel()) ? void 0 : t.getResolvedByPointer(e)
                }
            }
        },
        768202: (e, t, r) => {
            r.d(t, {
                K: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).aQf,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getAlive() {
                    return this.v("alive")
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getPropertyShortId() {
                    return this.v("property_short_id")
                }
                getPropertySchema() {
                    return this.getPropertySchemaStore().getValue()
                }
                getPropertySchemaStore() {
                    return this.k("property_schema")
                }
                getPermissionItems() {
                    return this.getPermissionItemsStore().getValue()
                }
                getPermissionItemsStore() {
                    return this.k("permissions")
                }
            }
            class n extends s {
                static keyName = "CollectionPropertySchemaStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        793177: (e, t, r) => {
            r.d(t, {
                f: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).tMO,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getNextValue() {
                    return this.v("next_value")
                }
                getAlive() {
                    return this.v("alive")
                }
            }
            class n extends s {
                static keyName = "RecordCounterStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        793322: (e, t, r) => {
            r.d(t, {
                G: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189)._6l,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getProfileId() {
                    return this.v("profile_id")
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getMembershipType() {
                    return this.v("membership_type")
                }
                getSalesforceId() {
                    return this.v("salesforce_id")
                }
            }
            class n extends s {
                static keyName = "MarketplaceProfileMemberStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        794154: (e, t, r) => {
            r.d(t, {
                c: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).EtT,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getCreatorId() {
                    return this.v("creator_id")
                }
                getCreatorPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatorPointer()
                }
                getCreatorStore() {
                    let e = this.getCreatorPointer(),
                        t = this.k("creator_id");
                    return e && this.getRecordStore(t, e)
                }
                getListingId() {
                    return this.v("listing_id")
                }
                getListingPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getListingPointer()
                }
                getListingStore() {
                    let e = this.getListingPointer(),
                        t = this.k("listing_id");
                    return e && this.getRecordStore(t, e)
                }
                getName() {
                    return this.v("name")
                }
                getSlug() {
                    return this.v("slug")
                }
                getLocales() {
                    return this.getLocalesStore().getValue() ? ? []
                }
                getLocalesStore() {
                    return this.k("locales")
                }
                getBookingStatus() {
                    return this.v("booking_status")
                }
                getPriceRangeStart() {
                    return this.v("price_range_start")
                }
                getPriceRangeEnd() {
                    return this.v("price_range_end")
                }
                getCurrency() {
                    return this.v("currency")
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getUpdatedTime() {
                    return this.v("updated_time")
                }
            }
            class n extends s {
                static keyName = "MarketplaceServiceStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        800217: (e, t, r) => {
            r.d(t, {
                P: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).$cf,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getExitedAt() {
                    return this.v("exited_at")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class n extends s {
                static keyName = "PageExitStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        807825: (e, t, r) => {
            r.d(t, {
                L: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).Fvx,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getEmail() {
                    return this.v("email")
                }
                getProfilePhoto() {
                    return this.v("profile_photo")
                }
                getOnboardingCompleted() {
                    return this.v("onboarding_completed")
                }
                getMobileOnboardingCompleted() {
                    return this.v("mobile_onboarding_completed")
                }
                getClipperOnboardingCompleted() {
                    return this.v("clipper_onboarding_completed")
                }
                getReverify() {
                    return this.v("reverify")
                }
                getAdmin() {
                    return this.v("admin")
                }
                isBanned() {
                    return this.v("is_banned") ? ? !1
                }
                getPreferredRole() {
                    return this.v("preferred_role")
                }
                getSudoModeSpaceIds() {
                    return this.getSudoModeSpaceIdsStore().getValue() ? ? []
                }
                getSudoModeSpaceIdsStore() {
                    return this.k("sudo_mode_space_ids")
                }
                getSudoModeSpacePointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getSudoModeSpacePointers()) ? ? []
                }
                getSudoModeSpaceStores() {
                    let e = this.getSudoModeSpaceIdsStore();
                    return this.getRecordStoreArray(e, this.getSudoModeSpacePointers())
                }
                getSuspendedTime() {
                    return this.v("suspended_time")
                }
                getDeletedTime() {
                    return this.v("deleted_time")
                }
                getDeletedById() {
                    return this.v("deleted_by_id")
                }
                getDeletedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDeletedByPointer()
                }
                getDeletedByStore() {
                    let e = this.getDeletedByPointer(),
                        t = this.k("deleted_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getDeletedByTable() {
                    return this.v("deleted_by_table")
                }
            }
            class n extends s {
                static keyName = "UserStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getFullName(e) {
                    var t;
                    return null == (t = this.getModel()) ? void 0 : t.getFullName(e)
                }
                getSearchName(e) {
                    var t;
                    return (null == (t = this.getModel()) ? void 0 : t.getSearchName(e)) ? ? ""
                }
                getIsSuspended() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.getIsSuspended())
                }
                getIsDeleted() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.getIsDeleted())
                }
                getDisplayName(e, t) {
                    var i;
                    return (null == (i = this.getModel()) ? void 0 : i.getDisplayName(e, t)) ? ? e.formatMessage(r(993189).Fvx.messages.anonymousPlaceholder)
                }
                getName() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getName()
                }
                getIcon() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getIcon()
                }
                getDetail() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDetail()
                }
            }
        },
        812280: (e, t, r) => {
            r.d(t, {
                E: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).GO9,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getProperties() {
                    return this.getPropertiesStore().getValue()
                }
                getPropertiesStore() {
                    return this.k("properties")
                }
            }
            class n extends s {
                static keyName = "AssistantChatStepStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                dangerouslyGetUnmigratedStorageStep() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.dangerouslyGetUnmigratedStorageStep()
                }
            }
        },
        818392: (e, t, r) => {
            r.d(t, {
                O: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).c91,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getAlive() {
                    return this.v("alive")
                }
                getIntegrationId() {
                    return this.v("integration_id")
                }
                getIntegrationPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getIntegrationPointer()
                }
                getIntegrationStore() {
                    let e = this.getIntegrationPointer(),
                        t = this.k("integration_id");
                    return e && this.getRecordStore(t, e)
                }
                getScopes() {
                    return this.getScopesStore().getValue() ? ? []
                }
                getScopesStore() {
                    return this.k("scopes")
                }
                getName() {
                    return this.v("name")
                }
            }
            class n extends s {
                static keyName = "OrganizationBotStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getDisplayName(e) {
                    var t;
                    return (null == (t = this.getModel()) ? void 0 : t.getDisplayName(e)) ? ? e.formatMessage(r(993189).c91.messages.unnamedBot)
                }
                getDetail() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDetail()
                }
            }
        },
        818869: (e, t, r) => {
            r.d(t, {
                z: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).h8r,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getAcquirerTable() {
                    return this.v("acquirer_table")
                }
                getAcquirerId() {
                    return this.v("acquirer_id")
                }
                getStripeCustomerId() {
                    return this.v("stripe_customer_id")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
            }
            class n extends s {
                static keyName = "MarketplaceCustomerStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        822621: (e, t, r) => {
            r.d(t, {
                V: () => n
            }), r(898992), r(354520), r(581454);
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).n8v,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getRoles() {
                    return this.getRolesStore().getValue() ? ? []
                }
                getRolesStore() {
                    return this.k("roles")
                }
                getName() {
                    return this.v("name")
                }
                getAlive() {
                    return this.v("alive")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getDefaultSpaceSettings() {
                    return this.getDefaultSpaceSettingsStore().getValue()
                }
                getDefaultSpaceSettingsStore() {
                    return this.k("default_space_settings")
                }
                getEmailDomains() {
                    return this.getEmailDomainsStore().getValue() ? ? []
                }
                getEmailDomainsStore() {
                    return this.k("email_domains")
                }
                getManagedUserSettings() {
                    return this.getManagedUserSettingsStore().getValue()
                }
                getManagedUserSettingsStore() {
                    return this.k("managed_user_settings")
                }
                getSamlProvisioningSpaceId() {
                    return this.v("saml_provisioning_space_id")
                }
                getSamlProvisioningSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSamlProvisioningSpacePointer()
                }
                getSamlProvisioningSpaceStore() {
                    let e = this.getSamlProvisioningSpacePointer(),
                        t = this.k("saml_provisioning_space_id");
                    return e && this.getRecordStore(t, e)
                }
                getRawIcon() {
                    return this.v("icon")
                }
                getOnboardingStatus() {
                    return this.v("onboarding_status")
                }
            }
            class n extends s {
                static keyName = "OrganizationStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getIcon() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getIcon()
                }
                getSettingValue(e) {
                    var t;
                    return null == (t = this.getModel()) ? void 0 : t.getSettingValue(e)
                }
                getDisableGuests() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSettingValue("disable_guests")
                }
                getDisablePublicAccess() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSettingValue("disable_public_access")
                }
                getIntegrationRestrictions() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSettingValue("integration_restrictions")
                }
                getDisablePageAnalytics() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSettingValue("disable_page_analytics")
                }
                getEnableAiFeature() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSettingValue("enable_ai_feature")
                }
                getDisableExport() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSettingValue("disable_export")
                }
                getDisableMoveToSpace() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSettingValue("disable_move_to_space")
                }
                getDisableMembershipRequests() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSettingValue("disable_membership_requests")
                }
                getDisableGuestMembershipRequests() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSettingValue("disable_guest_membership_requests")
                }
                getDisableExternalMembershipRequests() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSettingValue("disable_external_membership_requests")
                }
                getDisableGuestCanCreatePrivatePages() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSettingValue("disable_guest_can_create_private_pages")
                }
                getEnableGuestInviteRequest() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSettingValue("enable_guest_invite_requests")
                }
                getDisallowWebhookAutomationAction() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSettingValue("disallow_webhook_automation_action")
                }
                getOwnerIds() {
                    var e;
                    return ((null == (e = this.getModel()) ? void 0 : e.getRoles().filter(e => (0, r(319252).vb)(e.role))) ? ? []).map(e => e.id)
                }
                isUserLastOwner(e) {
                    var t;
                    return (null == (t = this.getModel()) ? void 0 : t.isUserLastOwner(e)) ? ? !0
                }
            }
        },
        834617: (e, t, r) => {
            r.d(t, {
                h: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).bir,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getCreatorId() {
                    return this.v("creator_id")
                }
                getCreatorPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatorPointer()
                }
                getCreatorStore() {
                    let e = this.getCreatorPointer(),
                        t = this.k("creator_id");
                    return e && this.getRecordStore(t, e)
                }
                getServiceId() {
                    return this.v("service_id")
                }
                getServicePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getServicePointer()
                }
                getServiceStore() {
                    let e = this.getServicePointer(),
                        t = this.k("service_id");
                    return e && this.getRecordStore(t, e)
                }
                getLocale() {
                    return this.v("locale")
                }
                getPriceRangeStart() {
                    return this.v("price_range_start")
                }
                getPriceRangeEnd() {
                    return this.v("price_range_end")
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
                getDomain() {
                    return this.v("domain")
                }
                getDestinationId() {
                    return this.v("destination_id")
                }
                getDestinationPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDestinationPointer()
                }
                getDestinationStore() {
                    let e = this.getDestinationPointer(),
                        t = this.k("destination_id");
                    return e && this.getRecordStore(t, e)
                }
                getDestinationTable() {
                    return this.v("destination_table")
                }
                getSellerResolvedTime() {
                    return this.v("seller_resolved_time")
                }
                getSellerStatus() {
                    return this.v("seller_status")
                }
                getCustomerResolvedTime() {
                    return this.v("customer_resolved_time")
                }
                getCustomerStatus() {
                    return this.v("customer_status")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getUpdatedTime() {
                    return this.v("updated_time")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getProjectStatus() {
                    return this.v("project_status")
                }
                getProjectResolvedTime() {
                    return this.v("project_resolved_time")
                }
                getProjectResolvedBy() {
                    return this.v("project_resolved_by")
                }
                getProjectResolvedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getProjectResolvedByPointer()
                }
                getProjectResolvedByStore() {
                    let e = this.getProjectResolvedByPointer(),
                        t = this.k("project_resolved_by");
                    return e && this.getRecordStore(t, e)
                }
                getOwnerId() {
                    return this.v("owner_id")
                }
                getOwnerPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getOwnerPointer()
                }
                getOwnerStore() {
                    let e = this.getOwnerPointer(),
                        t = this.k("owner_id");
                    return e && this.getRecordStore(t, e)
                }
                getProjectStatusV2() {
                    return this.v("project_status_v2")
                }
                getCustomerId() {
                    return this.v("customer_id")
                }
                getCustomerPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCustomerPointer()
                }
                getCustomerStore() {
                    let e = this.getCustomerPointer(),
                        t = this.k("customer_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class n extends s {
                static keyName = "MarketplaceServiceRequestStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        840415: (e, t, r) => {
            r.d(t, {
                x: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).RF2,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getName() {
                    return this.v("name")
                }
                getEnabled() {
                    return this.v("enabled")
                }
                getIpRestrictionType() {
                    return this.v("ip_restriction_type")
                }
                getIpAddresses() {
                    return this.getIpAddressesStore().getValue() ? ? []
                }
                getIpAddressesStore() {
                    return this.k("ip_addresses")
                }
                getOrganizationId() {
                    return this.v("organization_id")
                }
                getOrganizationPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getOrganizationPointer()
                }
                getOrganizationStore() {
                    let e = this.getOrganizationPointer(),
                        t = this.k("organization_id");
                    return e && this.getRecordStore(t, e)
                }
                getAlive() {
                    return this.v("alive")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
            }
            class n extends s {
                static keyName = "IPRestrictionStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        841912: (e, t, r) => {
            r.d(t, {
                S: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).sc6,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getContentfulId() {
                    return this.v("contentful_id")
                }
                getUsername() {
                    return this.v("username")
                }
                getName() {
                    return this.v("name")
                }
                getLocales() {
                    return this.getLocalesStore().getValue() ? ? []
                }
                getLocalesStore() {
                    return this.k("locales")
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
                getStatus() {
                    return this.v("status")
                }
                getTemplateCreatorStatus() {
                    return this.v("template_creator_status")
                }
                getConsultantStatus() {
                    return this.v("consultant_status")
                }
                getSellerOnboardingStatus() {
                    return this.v("seller_onboarding_status")
                }
                getStripeConnectOnboardingPhase() {
                    return this.v("stripe_connect_onboarding_phase")
                }
                getStripeConnectedAccountId() {
                    return this.v("stripe_connected_account_id")
                }
                getSalesforceId() {
                    return this.v("salesforce_id")
                }
                getNumberOfTemplates() {
                    return this.v("number_of_templates")
                }
                getNumberOfDuplicates() {
                    return this.v("number_of_duplicates")
                }
                getScore1() {
                    return this.v("score_1")
                }
                getScore2() {
                    return this.v("score_2")
                }
                getScore3() {
                    return this.v("score_3")
                }
                getScore4() {
                    return this.v("score_4")
                }
                getScore5() {
                    return this.v("score_5")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getLastUpdatedAt() {
                    return this.v("last_updated_at")
                }
                getLastSyncedAt() {
                    return this.v("last_synced_at")
                }
                getAgents() {
                    return this.getAgentsStore().getValue() ? ? []
                }
                getAgentsStore() {
                    return this.k("agents")
                }
                getAgentPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getAgentPointers()) ? ? []
                }
                getAgentStores() {
                    let e = this.getAgentsStore();
                    return this.getRecordStoreArray(e, this.getAgentPointers())
                }
            }
            class n extends s {
                static keyName = "MarketplaceProfileStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        849697: (e, t, r) => {
            r.d(t, {
                t: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).Lt_,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getDedupKey() {
                    return this.v("dedup_key")
                }
                getData() {
                    return this.getDataStore().getValue()
                }
                getDataStore() {
                    return this.k("data")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getGroupId() {
                    return this.v("group_id")
                }
                getUserActions() {
                    return this.getUserActionsStore().getValue()
                }
                getUserActionsStore() {
                    return this.k("user_actions")
                }
            }
            class n extends s {
                static keyName = "WorkflowAutomationRunStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getFinishedAt() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getFinishedAt()
                }
                getStatus() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getStatus()
                }
                getTriggerId() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getTriggerId()
                }
                runIsComplete() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.runIsComplete()) ? ? !1
                }
                getDequeueAfter() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDequeueAfter()
                }
            }
        },
        854359: (e, t, r) => {
            r.d(t, {
                H: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).Rdo,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getRequesterTable() {
                    return this.v("requester_table")
                }
                getRequesterId() {
                    return this.v("requester_id")
                }
                getAcquisitionId() {
                    return this.v("acquisition_id")
                }
                getAcquisitionPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getAcquisitionPointer()
                }
                getAcquisitionStore() {
                    let e = this.getAcquisitionPointer(),
                        t = this.k("acquisition_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getUpdatedTime() {
                    return this.v("updated_time")
                }
                getStatus() {
                    return this.v("status")
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
            }
            class n extends s {
                static keyName = "MarketplaceRefundStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        868249: (e, t, r) => {
            r.d(t, {
                L: () => n
            }), r(898992), r(354520);
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).x9y,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getIcon() {
                    return this.v("icon")
                }
                getActors() {
                    return this.getActorsStore().getValue() ? ? []
                }
                getActorsStore() {
                    return this.k("actors")
                }
                getActorPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getActors()) ? ? []
                }
                getActorStores() {
                    let e = this.getActorsStore();
                    return this.getRecordStoreArray(e, this.getActorPointers())
                }
            }
            class n extends s {
                static keyName = "ReactionStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                static getUserVisibleReactions(e) {
                    return e && e.isDefined() ? e.getReactionStores().filter(e => e.isDefined() && e.getActors().length > 0) : []
                }
            }
        },
        881331: (e, t, r) => {
            r.d(t, {
                d: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).$bR,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getPropertyShortId() {
                    return this.v("property_short_id")
                }
                getPropertyValue() {
                    return this.getPropertyValueStore().getValue()
                }
                getPropertyValueStore() {
                    return this.k("property_value")
                }
            }
            class n extends s {
                static keyName = "BlockPropertyValueStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        889e3: (e, t, r) => {
            r.d(t, {
                q: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).sS_,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getName() {
                    return this.v("name")
                }
                getDescription() {
                    return this.v("description")
                }
                getRawIcon() {
                    return this.v("icon")
                }
                getStatus() {
                    return this.v("status")
                }
                getStartDate() {
                    return this.v("start_date")
                }
                getEndDate() {
                    return this.v("end_date")
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getUserInteractionType() {
                    return this.getUserInteractionTypeStore().getValue() ? ? []
                }
                getUserInteractionTypeStore() {
                    return this.k("user_interaction_type")
                }
                getOwnerTable() {
                    return this.v("owner_table")
                }
                getOwnerId() {
                    return this.v("owner_id")
                }
                getOwnerPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getOwnerPointer()
                }
                getOwnerStore() {
                    let e = this.getOwnerPointer(),
                        t = this.k("owner_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class n extends s {
                static keyName = "LegalHoldStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getIcon() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getIcon()
                }
            }
        },
        902573: (e, t, r) => {
            r.d(t, {
                L: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).xCq,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getEmailDomain() {
                    return this.v("email_domain")
                }
                getDomainLinkSharingEnabled() {
                    return this.v("domain_link_sharing_enabled")
                }
                getJoinSpaceMethod() {
                    return this.v("join_space_method")
                }
                getRequestMembershipCustomizationRedirectUrl() {
                    return this.v("request_membership_customization_redirect_url")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
            }
            class n extends s {
                static keyName = "TrustedDomainStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        912977: (e, t, r) => {
            r.d(t, {
                f: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).bfQ,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getDestinationTable() {
                    return this.v("destination_table")
                }
                getDestinationId() {
                    return this.v("destination_id")
                }
                getActorTable() {
                    return this.v("actor_table")
                }
                getActorId() {
                    return this.v("actor_id")
                }
                getAcquisitionId() {
                    return this.v("acquisition_id")
                }
                getAcquisitionPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getAcquisitionPointer()
                }
                getAcquisitionStore() {
                    let e = this.getAcquisitionPointer(),
                        t = this.k("acquisition_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getStatus() {
                    return this.v("status")
                }
                getAttributes() {
                    return this.getAttributesStore().getValue()
                }
                getAttributesStore() {
                    return this.k("attributes")
                }
            }
            class n extends s {
                static keyName = "MarketplaceInstallationStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        915045: (e, t, r) => {
            r.d(t, {
                X: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).FaE,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getStep() {
                    return this.getStepStore().getValue()
                }
                getStepStore() {
                    return this.k("step")
                }
                getData() {
                    return this.getDataStore().getValue()
                }
                getDataStore() {
                    return this.k("data")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
            }
            class n extends s {
                static keyName = "ThreadMessageStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getThreadOperationStores() {
                    var e;
                    let t = this.getStepStore();
                    if (!(0, r(721153).P)(t.getValue())) return [];
                    let i = t.getKeyStore("threadOperations");
                    return Array.from({
                        length: (null == (e = i.getKeyStore("length")) ? void 0 : e.getValue()) ? ? 0
                    }, (e, t) => i.getKeyStore(t))
                }
            }
        },
        922014: (e, t, r) => {
            r.d(t, {
                g: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189)._1z,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getType() {
                    return this.v("type")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getParentExternalId() {
                    return this.v("parent_external_id")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getAlive() {
                    return this.v("alive")
                }
                getChatStepId() {
                    return this.v("chat_step_id")
                }
                getChatStepPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getChatStepPointer()
                }
                getChatStepStore() {
                    let e = this.getChatStepPointer(),
                        t = this.k("chat_step_id");
                    return e && this.getRecordStore(t, e)
                }
                getProperties() {
                    return this.getPropertiesStore().getValue()
                }
                getPropertiesStore() {
                    return this.k("properties")
                }
                getFileIds() {
                    return this.getFileIdsStore().getValue() ? ? []
                }
                getFileIdsStore() {
                    return this.k("file_ids")
                }
            }
            class n extends s {
                static keyName = "AssistantChatSessionStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                static messages = (0, r(109939).YK)({
                    chatTranscriptUntitledMessage: {
                        id: "AssistantChatSessionStore.noTitleMessage",
                        defaultMessage: "New AI chat"
                    }
                });
                getTitleOrFallback({
                    intl: e,
                    fallback: t
                }) {
                    var r;
                    return (null == (r = this.getModel()) || null == (r = r.getSummary()) ? void 0 : r.text) ? ? t ? ? e.formatMessage(n.messages.chatTranscriptUntitledMessage)
                }
                getImageIfExists() {
                    var e;
                    let t = null == (e = this.getModel()) || null == (e = e.getIcon()) ? void 0 : e.icon_with_record;
                    if (t) return t
                }
            }
        },
        931672: (e, t, r) => {
            r.d(t, {
                E: () => n
            });
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).Kr7,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getUserId() {
                    return this.v("user_id")
                }
                getUserPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getUserPointer()
                }
                getUserStore() {
                    let e = this.getUserPointer(),
                        t = this.k("user_id");
                    return e && this.getRecordStore(t, e)
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getItemId() {
                    return this.v("item_id")
                }
                getItemPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getItemPointer()
                }
                getItemStore() {
                    let e = this.getItemPointer(),
                        t = this.k("item_id");
                    return e && this.getRecordStore(t, e)
                }
                getItemTable() {
                    return this.v("item_table")
                }
                getFractionalIndex() {
                    return this.v("fractional_index")
                }
                getProperties() {
                    return this.getPropertiesStore().getValue()
                }
                getPropertiesStore() {
                    return this.k("properties")
                }
                getAlive() {
                    return this.v("alive")
                }
                getCreatedAt() {
                    return this.v("created_at") ? ? 0
                }
            }
            class n extends s {
                static keyName = "SidebarSectionItemStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
            }
        },
        970831: (e, t, r) => {
            r.d(t, {
                B: () => o
            }), r(16280), r(18107), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(967357), r(898992), r(354520), r(672577), r(581454), r(908872), r(737550);
            var i = () => r(517013),
                s = () => r(210952);
            class n extends s().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).LnD,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getType() {
                    return this.v("type")
                }
                getProperties(e) {
                    return this.getPropertiesStore().getValue() ? ? {}
                }
                getPropertiesStore() {
                    return this.k("properties")
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getPermissionItems() {
                    return this.getPermissionItemsStore().getValue() ? ? []
                }
                getPermissionItemsStore() {
                    return this.k("permissions")
                }
                getContentIds() {
                    return this.getContentStore().getValue() ? ? []
                }
                getContentStore() {
                    return this.k("content")
                }
                getContentPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getContentPointers()) ? ? []
                }
                getContentStores() {
                    let e = this.getContentStore();
                    return this.getRecordStoreArray(e, this.getContentPointers())
                }
                getNonContentChildren() {
                    return this.getNonContentChildrenStore().getValue() ? ? []
                }
                getNonContentChildrenStore() {
                    return this.k("non_content_children")
                }
                getNonContentChildrenPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getNonContentChildrenPointers()) ? ? []
                }
                getNonContentChildrenStores() {
                    let e = this.getNonContentChildrenStore();
                    return this.getRecordStoreArray(e, this.getNonContentChildrenPointers())
                }
                getDiscussions() {
                    return this.getDiscussionsStore().getValue() ? ? []
                }
                getDiscussionsStore() {
                    return this.k("discussions")
                }
                getDiscussionPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getDiscussionPointers()) ? ? []
                }
                getDiscussionStores() {
                    let e = this.getDiscussionsStore();
                    return this.getRecordStoreArray(e, this.getDiscussionPointers())
                }
                getCollectionViewIds() {
                    return this.getCollectionViewsStore().getValue() ? ? []
                }
                getCollectionViewsStore() {
                    return this.k("view_ids")
                }
                getCollectionViewPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getCollectionViewPointers()) ? ? []
                }
                getCollectionViewStores() {
                    let e = this.getCollectionViewsStore();
                    return this.getRecordStoreArray(e, this.getCollectionViewPointers())
                }
                getAdditionalPropertyIds() {
                    return this.getAdditionalPropertyIdsStore().getValue() ? ? []
                }
                getAdditionalPropertyIdsStore() {
                    return this.k("additional_property_ids")
                }
                getAdditionalPropertyPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getAdditionalPropertyPointers()) ? ? []
                }
                getAdditionalPropertyStores() {
                    let e = this.getAdditionalPropertyIdsStore();
                    return this.getRecordStoreArray(e, this.getAdditionalPropertyPointers())
                }
                getCreatedTime() {
                    return this.v("created_time") ? ? 0
                }
                getLastEditedTime() {
                    return this.v("last_edited_time") ? ? 0
                }
                getFileIds() {
                    return this.getFileIdsStore().getValue() ? ? []
                }
                getFileIdsStore() {
                    return this.k("file_ids")
                }
                getIgnoreBlockCount() {
                    return this.v("ignore_block_count")
                }
                isTemplate() {
                    return this.v("is_template") ? ? !1
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getAlive() {
                    return this.v("alive")
                }
                getMoved() {
                    return this.getMovedStore().getValue()
                }
                getMovedStore() {
                    return this.k("moved")
                }
                getFormat() {
                    return this.getFormatStore().getValue() ? ? {}
                }
                getFormatStore() {
                    return this.k("format")
                }
                getCreatedBy() {
                    return this.v("created_by")
                }
                getLastEditedBy() {
                    return this.v("last_edited_by")
                }
                getCreatedByTable() {
                    return this.v("created_by_table")
                }
                getCreatedById() {
                    return this.v("created_by_id")
                }
                getCreatedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCreatedByPointer()
                }
                getCreatedByStore() {
                    let e = this.getCreatedByPointer(),
                        t = this.k("created_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getLastEditedByTable() {
                    return this.v("last_edited_by_table")
                }
                getLastEditedById() {
                    return this.v("last_edited_by_id")
                }
                getLastEditedByPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLastEditedByPointer()
                }
                getLastEditedByStore() {
                    let e = this.getLastEditedByPointer(),
                        t = this.k("last_edited_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getContentClassification() {
                    return this.v("content_classification")
                }
                getMovedToTrashTable() {
                    return this.v("moved_to_trash_table")
                }
                getMovedToTrashId() {
                    return this.v("moved_to_trash_id")
                }
                getMovedToTrashPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getMovedToTrashPointer()
                }
                getMovedToTrashStore() {
                    let e = this.getMovedToTrashPointer(),
                        t = this.k("moved_to_trash_id");
                    return e && this.getRecordStore(t, e)
                }
                getMovedToTrashTime() {
                    return this.v("moved_to_trash_time")
                }
                getDeletedFromTrashTime() {
                    return this.v("deleted_from_trash_time")
                }
                getDeletedFromTrashTable() {
                    return this.v("deleted_from_trash_table")
                }
                getDeletedFromTrashId() {
                    return this.v("deleted_from_trash_id")
                }
                getDeletedFromTrashPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getDeletedFromTrashPointer()
                }
                getDeletedFromTrashStore() {
                    let e = this.getDeletedFromTrashPointer(),
                        t = this.k("deleted_from_trash_id");
                    return e && this.getRecordStore(t, e)
                }
                getArchivedByIdWithoutTakingParentsIntoAccount() {
                    return this.v("archived_by_id")
                }
                getArchivedByIdWithoutTakingParentsIntoAccountPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getArchivedByIdWithoutTakingParentsIntoAccountPointer()
                }
                getArchivedByIdWithoutTakingParentsIntoAccountStore() {
                    let e = this.getArchivedByIdWithoutTakingParentsIntoAccountPointer(),
                        t = this.k("archived_by_id");
                    return e && this.getRecordStore(t, e)
                }
                getArchivedByTableWithoutTakingParentsIntoAccount() {
                    return this.v("archived_by_table")
                }
                getArchivedTimeWithoutTakingParentsIntoAccount() {
                    return this.v("archived_time")
                }
                getCrdtData() {
                    return this.getCrdtDataStore().getValue()
                }
                getCrdtDataStore() {
                    return this.k("crdt_data")
                }
                getCrdtFormatVersion() {
                    return this.v("crdt_format_version")
                }
            }
            class o extends n {
                static keyName = "BlockStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                static fromRecordStore(e) {
                    return o.createChildStore(e, e.pointer)
                }
                static BlockPropertyStore = class extends i().pm {
                    static keyName = "BlockPropertyStore";
                    constructor(e, t, r) {
                        super({
                            environment: e.environment,
                            pointer: e.pointer,
                            path: r,
                            recordStoreOptions: {
                                userId: e.userId,
                                inMemoryRecordCache: e.inMemoryRecordCache
                            }
                        }), this.blockStore = e, this.propertyId = t
                    }
                    getValue() {
                        return this.blockStore.getPropertyValue(this.propertyId)
                    }
                };
                getSpaceId() {
                    return (0, r(226221).e)(super.getSpaceId())
                }
                getParentPointer() {
                    let e = super.getParentPointer();
                    if (null != e && e.table && null != e && e.id) return e
                }
                getCopiedFromPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCopiedFromPointer()
                }
                DANGEROUSLY_INCORRECT_getCollectionPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.DANGEROUSLY_INCORRECT_getCollectionPointer()
                }
                getCollectionPointers() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCollectionPointers()
                }
                hasSingleSourceAndNoLinkedCollections() {
                    var e;
                    return !!(null == (e = this.getModel()) ? void 0 : e.getCollectionPointerIfSingleSource(this.getRecordModel))
                }
                hasSingleOwnedCollection() {
                    var e;
                    return (null == (e = this.getOwnedCollectionStores()) ? void 0 : e.length) === 1
                }
                hasMultipleOwnedCollections() {
                    var e;
                    return (null == (e = this.getOwnedCollectionStores()) ? void 0 : e.length) > 1
                }
                hasMultipleOwnedOrLinkedCollections() {
                    return this.getOwnedAndLinkedCollectionStores().length > 1
                }
                hasAnySyncedCollection() {
                    return this.getOwnedAndLinkedCollectionStores().some(e => e.isExternallyImportedAndSyncedCollection())
                }
                getCollectionPointerIfSingleSource() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getCollectionPointerIfSingleSource(this.getRecordModel)
                }
                getCollectionStoreIfSingleSource() {
                    let e = this.getCollectionPointerIfSingleSource();
                    return e && this.getRecordStore(this, e)
                }
                canAddCollectionView(e) {
                    return this.getCollectionViewIds().length + (e ? ? 1) <= r(801230).L
                }
                canAddCollection() {
                    return this.getOwnedCollectionStores().length < r(801230).A ? this.canAddCollectionView() ? {
                        canAddView: !0
                    } : {
                        canAddView: !1,
                        reason: "tooManyViews"
                    } : {
                        canAddView: !1,
                        reason: "tooManyCollections"
                    }
                }
                isType(e) {
                    var t;
                    return (null == (t = this.getModel()) ? void 0 : t.isType(e)) ? ? !1
                }
                isPageBlock() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isPageBlock()) ? ? !1
                }
                isTranscriptionBlock() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isTranscriptionBlock()) ? ? !1
                }
                isNavigableBlock() {
                    var e;
                    return !!(this.isType(r(955630).BJ) && null != (e = this.getModel()) && e.isNavigableBlock())
                }
                isCopyIndicator() {
                    return this.isType("copy_indicator")
                }
                isLoadedNonCopyIndicator() {
                    return this.isDefined() && !this.isCopyIndicator()
                }
                DANGEROUSLY_INCORRECT_getCollectionStore() {
                    var e;
                    let t = null == (e = this.getCollectionPointers()) ? void 0 : e[0];
                    return t && this.getRecordStore(this, t)
                }
                getCollectionStores() {
                    let e = this.getCollectionPointers();
                    if (e) return e.reduce((e, t) => {
                        let r = this.getRecordStore(this, t);
                        return r.isReady() && (!r.isDefined() || r.pathIsDead()) || e.push(r), e
                    }, [])
                }
                getOwnedCollectionStores() {
                    var e;
                    return (null == (e = this.getCollectionStores()) ? void 0 : e.filter(e => e.getParentId() === this.id)) ? ? []
                }
                getOwnedTypedCollectionStores() {
                    return this.getOwnedCollectionStores().filter(e => void 0 !== e.getDatabaseType())
                }
                getLinkedCollectionStores() {
                    var e;
                    return ((null == (e = this.getModel()) ? void 0 : e.getAllLinkedAndSourceCollectionPointers(this.getRecordModel).linkedCollectionPointers) ? ? []).map(e => this.getRecordStore(this, e)).filter(r(722371).O9) ? ? []
                }
                getOwnedAndLinkedCollectionStores() {
                    return Array.from(new Set([...this.getOwnedCollectionStores(), ...this.getLinkedCollectionStores()]))
                }
                pathIsAccessibleAndAlive() {
                    let e = (0, r(457915).g)(this);
                    return (0, r(447773).y)(e)
                }
                getClosestNonAliveAncestor() {
                    let e = (0, r(457915).g)(this);
                    return (0, r(114208).z)(e)
                }
                pathIsDead() {
                    let e = (0, r(457915).g)(this);
                    return (0, r(114307).a)(e)
                }
                pathHasDeletedPermission() {
                    return (0, r(688502).Ou)(this.pointer, this.getRecordModel)
                }
                pathHasPurgedDeletedPermission() {
                    return (0, r(688502).Rp)(this.pointer, this.getRecordModel)
                }
                getClosestMovedBlock() {
                    let e = (0, r(457915).g)(this);
                    return (0, r(397321).u)(e)
                }
                isTopLevelWorkspacePage(e) {
                    var t;
                    return null == (t = this.getModel()) ? void 0 : t.isTopLevelWorkspacePage(e)
                }
                isRestricted() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isRestricted()) ? ? !1
                }
                getRenderableContentIds() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getRenderableContentIds()) ? ? []
                }
                getRenderableContentStores() {
                    var e;
                    let t = this.getContentStore();
                    return this.getRecordStoreArray(t, (null == (e = this.getModel()) ? void 0 : e.getRenderableContentPointers()) ? ? [])
                }
                isEmptyPage() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isEmptyPage()) ? ? !1
                }
                isEmptyTextBlock() {
                    return !!(this.getType() === r(955630).xd.text && this.isEmptyTitle() && !this.hasContent())
                }
                getDictationRoleModel() {
                    let e = this.getType();
                    return e && (0, r(955630).oh)(e) ? e : r(955630).xd.text
                }
                isDictatableBlock() {
                    let e = this.getType();
                    return !!(e && (0, r(955630).ls)(e))
                }
                isAiFollowupEligibleBlock() {
                    let e = this.getType();
                    return !!(e && (0, r(955630).Fb)(e))
                }
                isEmptyDictatableBlock() {
                    return this.isDictatableBlock() && this.isEmptyTitle()
                }
                isEmptyEditableBlock() {
                    let e = this.getType(),
                        t = this.getFormat();
                    return !!(e && (0, r(955630).Db)(e, t) && this.isEmptyTitle() && !this.hasContent())
                }
                isEmptyTitle() {
                    return 0 === this.getTitleValue().length
                }
                getContentLength() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getContentLength()) ? ? 0
                }
                hasContent() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.hasContent()) ? ? !1
                }
                getAliasTargetStore() {
                    var e;
                    let t = null == (e = this.getModel()) ? void 0 : e.getAliasTargetPointer();
                    return t && this.getRecordStore(this, t)
                }
                getTransclusionReferenceTargetStore() {
                    var e;
                    let t = null == (e = this.getModel()) ? void 0 : e.getTransclusionReferenceTargetPointer();
                    return t && this.getRecordStore(this, t)
                }
                isTransclusionType() {
                    let e = this.getType();
                    return !!(e && (0, r(955630).Mp)(e))
                }
                isInsideTransclusion() {
                    return !!this.findRecordStoreUIAncestor(e => e instanceof o && e.isTransclusionType()).ancestor
                }
                getNumberOfDuplicateBlocksAncestors() {
                    return (0, r(457915).g)(this).reduce((e, t) => t instanceof r(464011).b && t.isType("duplicate_blocks") ? e + 1 : e, 0)
                }
                isCalloutType() {
                    return this.getType() === r(955630).xd.callout
                }
                isCalloutV2() {
                    return this.isCalloutType() && 2 === this.getFormat().callout_version
                }
                isDirectlyWithinCalloutV2Block() {
                    let e = this.getParentStore();
                    return e instanceof o && e.isCalloutV2()
                }
                isFirstBlockInCalloutV2Block() {
                    let e = this.getParentStore();
                    return !!(e instanceof o && e.isCalloutV2()) && e.getContentIds()[0] === this.id
                }
                isTabInTabBlock() {
                    if (!this.isType(r(955630).xd.text)) return !1;
                    let e = this.getParentStore();
                    return e instanceof o && e.isType(r(955630).xd.tab)
                }
                isInsideAiBlock() {
                    return !!this.findRecordStoreUIAncestor(e => e instanceof o && "ai_block" === e.getType()).ancestor
                }
                isDirectChildOfAiBlock() {
                    var e;
                    return (null == (e = this.getParentBlockStore()) ? void 0 : e.getType()) === r(955630).xd.aiBlock
                }
                isQuoteBlockChild() {
                    var e;
                    return (null == (e = this.getParentBlockStore()) ? void 0 : e.getType()) === r(955630).xd.quote
                }
                isWorkflowPage() {
                    return this.getType() === r(955630).xd.workflow
                }
                getTitleStore() {
                    let e = this.getRecordModel(this.pointer),
                        t = e && e.getRenderFormatPointer(this.getRecordModel);
                    if (t) {
                        if (t.table === r(832375).evP)
                            if (t.id === this.id) return this.getBlockTitleStore();
                            else return o.createChildStore(this, t).getBlockTitleStore();
                        else if (t.table === r(832375).VlP) return r(356912).m.createChildStore(this, t).getNameStore()
                    }
                }
                getBlockTitleStore() {
                    return this.getPropertyStore("title")
                }
                getCaptionStore() {
                    return this.getPropertyStore("caption")
                }
                getTitleValue() {
                    let e = this.getTitleStore();
                    return e && e.getValue() || []
                }
                getNonCollectionProperty(e) {
                    var t;
                    return null == (t = this.getModel()) ? void 0 : t.getNonCollectionProperty(e)
                }
                isChecked() {
                    return (0, r(896216).w)(this.getNonCollectionProperty("checked"))
                }
                getPropertyStore(e) {
                    let t = this.getAssociatedCollectionStore(),
                        r = null != t && t.isTypedProperty(e) ? t.getMappedProperty(e) : e;
                    return this.getRawPropertyStore(r)
                }
                getRawPropertyStore(e) {
                    let t = ["properties", e];
                    return this.uiLocation.getOrCreateChild(i().pm.getUIChildStoreKey(this.pointer, o.BlockPropertyStore.keyName, t), () => new o.BlockPropertyStore(this, e, t).uiLocation).store
                }
                getProperties() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getProperties(this.getRecordModel)) ? ? {}
                }
                getPropertyValue(e) {
                    let t = this.getModel();
                    return t && t.getProperty(e, this.getRecordModel)
                }
                getColumnRatio() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getColumnRatio()) ? ? 1
                }
                recordStoreParentDiffersFromPersistedParent() {
                    if (this.isDefined()) {
                        let e = this.getParentId(),
                            t = this.getRecordStoreUIParent();
                        if (t) return e !== t.id
                    }
                    return !1
                }
                isInsideTemplate() {
                    return !!this.isTemplate() || !!(0, r(457915).g)(this).find(e => e instanceof o && e.isTemplate())
                }
                getNearestAncestorTemplateStore() {
                    return (0, r(457915).g)(this).find(e => !!(e instanceof o && e.isTemplate()))
                }
                isInsideFactoryOrDuplicateBlocksAction(e = !0) {
                    return this.getType() === r(955630).xd.factory ? e : (0, r(457915).g)(this).some(e => e instanceof o && e.getType() === r(955630).xd.factory || e instanceof r(464011).b && e.isType("duplicate_blocks"))
                }
                isAssociatedCollectionAPageTree() {
                    var e;
                    return (null == (e = this.getAssociatedCollectionStore()) ? void 0 : e.isPageTreeCollection()) ? ? !1
                }
                isImmediateColumnChild() {
                    let e = this.getRecordStoreUIAncestor(2);
                    return !!e && !!e.getType && e.getType() === r(955630).xd.column
                }
                isTopLevel() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isTopLevel()) ? ? !1
                }
                isTopLevelTeamPage() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isTopLevelTeamPage()) ? ? !1
                }
                getParentBlockStore(e) {
                    let t = this.getParentStore();
                    if ((null == t ? void 0 : t.table) === r(832375).evP) return null != e && e.ignoreSyncedBlocks && t.isTransclusionType() ? t.getParentBlockStore(e) : t
                }
                getBlockDepth() {
                    let e, t = 0,
                        r = this;
                    for (;;) {
                        var i;
                        if (!(e = null == (i = r) ? void 0 : i.getParentBlockStore()) || (t++, e.isPageBlock())) break;
                        r = e
                    }
                    return t
                }
                getNextBlockStore(e) {
                    let t = this.getParentBlockStore();
                    if (t) {
                        let r = t.getContentIds(),
                            i = r.findIndex(e => e === this.id);
                        if (null != e && e.ignoreSyncedBlocks && t.isTransclusionType() && i === r.length - 1) return t.getNextBlockStore(e);
                        if (-1 !== i) {
                            let s = r[i + 1];
                            if (s) {
                                let r = this.getRecordStore(t, {
                                    table: "block",
                                    id: s,
                                    spaceId: this.getSpaceId()
                                });
                                if (null != e && e.ignoreSyncedBlocks && r.isTransclusionType()) {
                                    let e = r.getContentIds().at(0);
                                    if (e) return this.getRecordStore(r, {
                                        table: "block",
                                        id: e,
                                        spaceId: this.getSpaceId()
                                    })
                                }
                                return r
                            }
                        }
                    }
                }
                getPreviousBlockStore(e) {
                    let t = this.getParentBlockStore();
                    if (t) {
                        let r = t.getContentIds(),
                            i = r.findIndex(e => e === this.id);
                        if (null != e && e.ignoreSyncedBlocks && t.isTransclusionType() && 0 === i) return t.getPreviousBlockStore(e);
                        if (-1 !== i) {
                            let s = r[i - 1];
                            if (s) {
                                let r = this.getRecordStore(t, {
                                    table: "block",
                                    id: s,
                                    spaceId: this.getSpaceId()
                                });
                                if (null != e && e.ignoreSyncedBlocks && r.isTransclusionType()) {
                                    let e = r.getContentIds().at(-1);
                                    if (e) return this.getRecordStore(r, {
                                        table: "block",
                                        id: e,
                                        spaceId: this.getSpaceId()
                                    })
                                }
                                return r
                            }
                        }
                    }
                }
                isFirstChildInParentBlock() {
                    let e = this.getParentStore();
                    return e instanceof o && e.getContentIds()[0] === this.id
                }
                isLastChildInParentBlock() {
                    let e = this.getParentStore();
                    return e instanceof o && e.getContentIds().at(-1) === this.id
                }
                getHighestContentBlockUIAncestor() {
                    let e = this.findRecordStoreUIAncestors(e => e instanceof o && (0, r(955630).IU)(e.getType(), e.getFormat())),
                        t = e[e.length - 1];
                    if (t instanceof o) return t
                }
                getAssociatedCollectionStore() {
                    let e = this.getModel();
                    if (!e) return;
                    let t = (0, r(975908).zN)({
                        block: e,
                        getRecordModel: this.getRecordModel
                    });
                    return t ? r(356912).m.createChildStore(this, r(993189).Bj6.fromCollection(t).pointer) : this.getCollectionFromPublicPageData()
                }
                getAssociatedLayoutStore() {
                    var e;
                    return null == (e = this.getAssociatedCollectionStore()) ? void 0 : e.getLayoutStore()
                }
                getCollectionFromPublicPageData() {
                    let {
                        publicPageData: e
                    } = r(686494).A.state;
                    if (e && (null == e ? void 0 : e.pageId) === this.id && e.collectionId) return r(356912).m.createChildStore(this, {
                        table: r(832375).VlP,
                        id: e.collectionId
                    })
                }
                getAssociatedCollectionTemplateStores() {
                    let e = this.getAssociatedCollectionStore();
                    if (e) return e.getTemplatePageStores()
                }
                getParentSpaceStore() {
                    let e = this.getParentStore();
                    if ((null == e ? void 0 : e.table) === r(832375).NXh) return e
                }
                getAssociatedCollectionId() {
                    var e;
                    return null == (e = this.getAssociatedCollectionStore()) ? void 0 : e.id
                }
                getSchema() {
                    let e = this.getAssociatedCollectionStore();
                    return e ? e.getSchema() : (0, r(511791).RX)(r(962299).A.getIntl())
                }
                isFullWidth() {
                    var e, t;
                    let i = this.getType();
                    if (i && (0, r(955630).Af)(i, this.getFormat())) return !0;
                    let s = null == (e = this.getModel()) ? void 0 : e.getFormatValue("page_full_width");
                    return void 0 === s ? (null == (t = this.getAssociatedLayoutStore()) || null == (t = t.getFormat()) ? void 0 : t.page_full_width) ? ? !1 : s
                }
                hasError() {
                    return !!this.getFormat().error && (this.isExternalObjectInstanceBlockStore() || this.isExternalObjectInstancePageBlockStore() || this.isExternalCollectionBlockStore())
                }
                getUserPermissionForId(e) {
                    var t;
                    return null == (t = this.getModel()) ? void 0 : t.getUserPermissionForId(e)
                }
                hasSitePublicPermission() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.hasSitePublicPermission()) ? ? !1
                }
                getPublicPermission() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getPublicPermission()
                }
                hasSpacePermission() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.hasSpacePermission()) ? ? !1
                }
                hasGroupPermission() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.hasGroupPermission()) ? ? !1
                }
                hasTeamPermission() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.hasTeamPermission()) ? ? !1
                }
                getIcon() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getRenderIcon({
                        getRecordModel: this.getRecordModel,
                        integrations: this.getFormatStore().getKeyStore("uri").getValue() ? r(610463).A.integrations.state : void 0
                    })
                }
                getBlockIconStore() {
                    return (0, i()._y)(this, this.pointer, ["format", "page_icon"])
                }
                getIconStore() {
                    let e = this.getRecordModel(this.pointer);
                    if (!e) return;
                    let t = e.getRenderFormatPointer(this.getRecordModel);
                    if (t) {
                        if (t.table === r(832375).evP)
                            if (t.id === this.id) return this.getBlockIconStore();
                            else return o.createChildStore(this, t).getBlockIconStore();
                        else if (t.table === r(832375).VlP) return r(356912).m.createChildStore(this, t).getIconStore()
                    }
                }
                getCover() {
                    let e = this.getRecordModel(this.pointer);
                    if ((null == e ? void 0 : e.getType()) === r(955630).xd.personalHomePage) return;
                    let t = r(218744).default.checkGate({
                        gateName: "workflows_container_cover_photo"
                    });
                    return e && e.getRenderCover(this.getRecordModel, t)
                }
                getBlockCoverStore() {
                    return (0, i()._y)(this, this.pointer, ["format", "page_cover"])
                }
                getCoverStore() {
                    let e = this.getRecordModel(this.pointer);
                    if (r(218744).default.checkGate({
                            gateName: "workflows_container_cover_photo"
                        })) return this.getBlockCoverStore();
                    let t = e && e.getRenderFormatPointer(this.getRecordModel);
                    if (t) {
                        if (t.table === r(832375).evP)
                            if (t.id === this.id) return this.getBlockCoverStore();
                            else return o.createChildStore(this, t).getBlockCoverStore();
                        else if (t.table === r(832375).VlP) return r(356912).m.createChildStore(this, t).getCoverStore()
                    }
                }
                getNavigableBlockStore(e) {
                    let t = (0, r(73396).D)(this, () => !0, this.isNavigableBlock() && null != e && e.skipCurrent ? 1 : 0);
                    if (!(t instanceof r(681735).h)) return t
                }
                isNavigableAncestorLocked() {
                    let e = (0, r(73396).D)(this, e => e.id !== this.id && !(e instanceof r(681735).h));
                    return !!e && !(e instanceof r(681735).h) && e.isLocked()
                }
                isNavigableBlockLocked() {
                    var e;
                    return (null == (e = this.getNavigableBlockStore()) ? void 0 : e.isLocked()) ? ? !1
                }
                isLocked() {
                    return !r(996050).$.isTemporarilyUnlocked({
                        userId: this.userId,
                        blockId: this.id
                    }) && this.isLockedForAllUsers()
                }
                isLockedForAllUsers() {
                    var e;
                    return !!(null != (e = this.getModel()) && e.isLocked())
                }
                isArchived() {
                    return (0, r(688502).F$)(this.pointer, this.getRecordModel)
                }
                isNavigableAncestorExternallyImportedPage() {
                    let e = (0, r(73396).D)(this, e => e.id !== this.id);
                    if (e && !(e instanceof r(681735).h)) {
                        let t = e.getParentStore();
                        if ((null == t ? void 0 : t.table) === r(832375).VlP) {
                            let e = t.getFormat();
                            if (null != e && e.external_collection_type) return !0
                        }
                    }
                    return !1
                }
                getNavigableAncestorFormat() {
                    let e = (0, r(73396).D)(this, e => e.id !== this.id);
                    return !e || e instanceof r(681735).h ? {} : e.getFormat()
                }
                isRootOrDirectChild() {
                    if (this.isTopLevel()) return !0;
                    let e = this.getParentStore();
                    if ((null == e ? void 0 : e.table) === "collection" || (null == e ? void 0 : e.table) === "layout") return !0;
                    let t = this.getParentBlockStore();
                    return !!("page" === (null == t ? void 0 : t.getType()) || null != t && t.isCollectionViewPageWithContent())
                }
                getParentCollectionIdUpToTwoLevels() {
                    if (this.isInsideCollection()) return this.getAssociatedCollectionId();
                    let e = this.getParentBlockStore();
                    if (null != e && e.isInsideCollection()) return e.getAssociatedCollectionId()
                }
                isSystemBlock() {
                    return void 0 !== this.getSystemBlockTypeStore().getValue()
                }
                isPersonalHomePage() {
                    return !!this.isType("personal_home_page") && this.getType() === r(955630).xd.personalHomePage
                }
                isPersonProfile() {
                    return "person_profile_main" === this.getSystemBlockTypeStore().getValue()
                }
                isPeopleCollectionViewPage() {
                    return "people_collection_view_page" === this.getSystemBlockTypeStore().getValue()
                }
                getPersonProfileUserId() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getPersonProfileUserId()
                }
                getPersonProfileUserStore() {
                    let e = this.getPersonProfileUserId(),
                        t = this.getSpaceStore();
                    if (e && t) return r(807825).L.createChildStore(t, {
                        table: r(832375).oo9,
                        id: e
                    })
                }
                isTeamPage() {
                    return "team_page" === this.getSystemBlockTypeStore().getValue()
                }
                isTeamPost() {
                    let e = this.getAssociatedCollectionStore();
                    if (!(null != e && e.isPublishingEnabled())) return !1;
                    let t = (0, r(297311).U)(e);
                    return e.id === (null == t ? void 0 : t.id)
                }
                isTeamPostCollectionBlock() {
                    if (!this.isType("collection_view_page")) return !1;
                    let e = (0, r(297311).U)(this);
                    return this.id === (null == e ? void 0 : e.id)
                }
                isInCollectionWithPublishingEnabled() {
                    var e;
                    return (null == (e = this.getAssociatedCollectionStore()) ? void 0 : e.isPublishingEnabled()) ? ? !1
                }
                isDraft() {
                    var e;
                    return this.isInCollectionWithPublishingEnabled() && (null == (e = this.getModel()) ? void 0 : e.getDraftStatus()) === "draft"
                }
                isPublishedDraft() {
                    var e;
                    return this.isInCollectionWithPublishingEnabled() && (null == (e = this.getModel()) ? void 0 : e.getDraftStatus()) !== "draft"
                }
                getPageStatus() {
                    return this.pathIsDead() ? this.pathHasDeletedPermission() ? "deleted_from_trash" : "in_trash" : "alive"
                }
                getLayoutPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getLayoutPointer()
                }
                isFormBlock() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isFormBlock()) || !1
                }
                getFormConfig() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getFormConfig()
                }
                getFormConfigStore() {
                    var e;
                    return null == (e = this.getFormatStore()) ? void 0 : e.getKeyStore("form_config")
                }
                getIsFormClosed() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getIsFormClosed()) || !1
                }
                getIsFormPublic() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getIsFormPublic()) || !1
                }
                getFormBlockParentCollectionViewStore() {
                    if (!this.isFormBlock()) return;
                    let e = this.getParentStore();
                    if ((null == e ? void 0 : e.table) === r(832375).Gy1) return e
                }
                getFormBlockParentBlockStore() {
                    var e;
                    return null == (e = this.getFormBlockParentCollectionViewStore()) ? void 0 : e.getParentBlockStore()
                }
                getIsFormAnonymousSubmissionEnabled() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getIsFormAnonymousSubmissionEnabled()) || !1
                }
                getFormSubmissionPermissions() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getFormSubmissionPermissions()
                }
                getFormSubmissionTemplate() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getFormSubmissionTemplate()
                }
                getAllowViewResponse() {
                    var e;
                    return (null == (e = this.getFormConfig()) ? void 0 : e.allow_view_response) ? ? !0
                }
                getAllowEmailResponse() {
                    var e;
                    return (null == (e = this.getFormConfig()) ? void 0 : e.allow_email_response) ? ? !0
                }
                getLanguage() {
                    let e = r(561872).L3(this.getPropertyValue("language"), r(511791).h5);
                    return (0, r(656974).$Y)(e)
                }
                isInlineCollectionView() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isInlineCollectionView()) ? ? !1
                }
                isLinkedCollectionView() {
                    return !!this.isCollectionView() && (!this.getCollectionStores() || 0 === this.getOwnedCollectionStores().length)
                }
                isCollectionView() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isCollectionView()) ? ? !1
                }
                isInsideCollection() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isInsideCollection()) ? ? !1
                }
                isTypedCollectionViewBlock() {
                    let e = this.getCollectionStoreIfSingleSource();
                    return !!(e && e.isDefined() && e.isTypedCollection())
                }
                isCollectionViewPageWithContent() {
                    let e = this.getType(),
                        t = this.getFormat();
                    return !!e && (0, r(955630).Af)(e, t)
                }
                getLinkedViewCollectionBlockStores() {
                    let e = new Set,
                        t = [];
                    for (let r of this.getCollectionViewStores()) {
                        let i = r.getCollectionStore();
                        if (i && !e.has(i.id)) {
                            e.add(i.id);
                            let r = i.getParentBlockStore();
                            r && t.push(r)
                        }
                    }
                    return t
                }
                getCollectionViewSourceDescriptionStore() {
                    var e;
                    let t = null == (e = this.getCollectionStores()) ? void 0 : e[0];
                    if (t) return t.getDescriptionStore()
                }
                getFirstFormIdInCollectionViewBlock() {
                    for (let e of this.getCollectionViewStores())
                        if (e.getFormId()) return e.getFormId()
                }
                getFollowStore() {
                    let {
                        id: e
                    } = this.environment.currentUser;
                    if (e) {
                        var t;
                        let r = null == (t = this.getModel()) ? void 0 : t.getFollowPointerForUser(e);
                        return r && this.getRecordStore(this, r)
                    }
                }
                getFollowSettingsKey() {
                    let e = this.getFollowStore(),
                        t = null == e ? void 0 : e.getModel();
                    return null != t && t.isFollowingAllPropertyUpdates() ? "all" : null != t && t.isFollowingAllComments() && null != t && t.isFollowingImportantPropertyUpdatesOnly() ? "important" : null != t && t.isFollowingAllComments() && !(null != t && t.isFollowingImportantPropertyUpdatesOnly()) ? "comments" : "none"
                }
                getFeedSetting() {
                    var e;
                    let t = this.getFollowStore();
                    return null == t || null == (e = t.getModel()) ? void 0 : e.getFeedSetting()
                }
                getExternalObjectSubInstanceStores() {
                    var e;
                    let t = null == (e = this.getModel()) ? void 0 : e.getExternalObjectSubInstancePointers();
                    return this.getRecordStoreArray(this, t)
                }
                isExternalObjectInstanceBlockStore() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isExternalObjectInstanceType()) ? ? !1
                }
                isExternalObjectInstancePageBlockStore() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isExternalObjectInstancePageType()) ? ? !1
                }
                isExternalCollectionBlockStore() {
                    let e = this.getCollectionStoreIfSingleSource();
                    return !!e && r(565546).LH(e.getFormat())
                }
                getSyncedUri() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSyncedUri()
                }
                getAutomationId() {
                    var e;
                    return null == (e = this.getModel()) || null == (e = e.getAutomationPointer()) ? void 0 : e.id
                }
                getAutomationPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getAutomationPointer()
                }
                getAutomationStore() {
                    var e;
                    let t = null == (e = this.getModel()) ? void 0 : e.getAutomationPointer();
                    return t && this.getRecordStore(this, t)
                }
                getSpaceShardedPointer() {
                    let e = this.getSpaceId();
                    return { ...this.pointer,
                        spaceId: e
                    }
                }
                getDrawingStore() {
                    return this.getFormatStore().getKeyStore("drawing_value")
                }
                getSystemBlockTypeStore() {
                    return this.getFormatStore().getKeyStore("system_block_type")
                }
                getVersion() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getVersion()
                }
                isCrdtEnabled() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isCrdtEnabled()) ? ? !1
                }
                getSerializedTextSliceTreeStore() {
                    return this.getCrdtDataStore().getKeyStore("title")
                }
                cachedBlockTitleTextSliceTree = void 0;
                getReadOnlyBlockTitleTextSliceTree() {
                    let e = this.getVersion();
                    if (this.cachedBlockTitleTextSliceTree && this.cachedBlockTitleTextSliceTree.version === e) return this.cachedBlockTitleTextSliceTree.textSliceTree;
                    this.cachedBlockTitleTextSliceTree && (this.cachedBlockTitleTextSliceTree = void 0);
                    let t = this.getBlockTitleTextSliceTree();
                    return t && void 0 !== e && (this.cachedBlockTitleTextSliceTree = {
                        textSliceTree: t,
                        version: e
                    }), t
                }
                getBlockTitleTextSliceTree() {
                    if (this.cachedBlockTitleTextSliceTree && this.cachedBlockTitleTextSliceTree.version === this.getVersion()) {
                        let e = this.cachedBlockTitleTextSliceTree.textSliceTree;
                        return this.cachedBlockTitleTextSliceTree = void 0, e
                    }
                    this.cachedBlockTitleTextSliceTree && (this.cachedBlockTitleTextSliceTree = void 0);
                    let e = this.getSerializedTextSliceTreeStore().getValue();
                    if (e) return (0, r(266858).r)(e, ({
                        value: e,
                        textInstanceId: t
                    }) => new(r(354514)).W(e, t), r(727114).t)
                }
                static FORM_DESCRIPTION_STORE_PATH = ["format", "form_config", "description"];
                getFormDescriptionStore() {
                    if ("form" !== this.getType()) throw Error("Cannot get a form description store if the block is not a form");
                    return this.uiLocation.getOrCreateChild(i().pm.getUIChildStoreKey(this.pointer, o.FormDescriptionStore.keyName, o.FORM_DESCRIPTION_STORE_PATH), () => new o.FormDescriptionStore(this, o.FORM_DESCRIPTION_STORE_PATH).uiLocation).store
                }
                static FormDescriptionStore = class extends i().pm {
                    static keyName = "FormDescriptionStore";
                    constructor(e, t) {
                        super({
                            pointer: e.pointer,
                            environment: e.environment,
                            path: t,
                            recordStoreOptions: {
                                inMemoryRecordCache: e.inMemoryRecordCache,
                                userId: e.userId
                            }
                        }), this.blockStore = e
                    }
                    getValue() {
                        var e;
                        return null == (e = this.blockStore.getFormConfig()) ? void 0 : e.description
                    }
                };
                static FastRenderBlockStore = class extends o {
                    cachedTitleValue;
                    cachedIcon;
                    constructor(e, t, r) {
                        super(e.environment, e.pointer, e.recordStoreOptions), this.cachedTitleValue = t, this.cachedIcon = r
                    }
                    getTitleValue() {
                        return this.isDefined() ? super.getTitleValue() : this.cachedTitleValue
                    }
                    getIcon() {
                        return this.isDefined() ? super.getIcon() : void 0 === this.cachedIcon ? void 0 : {
                            pointer: this.pointer,
                            icon: this.cachedIcon
                        }
                    }
                };
                createFastRenderBlockStore(e, t) {
                    return new o.FastRenderBlockStore(this, e, t)
                }
                getInlineSuggestionDiscussionIds(e) {
                    var t;
                    return (null == (t = this.getModel()) ? void 0 : t.getInlineSuggestionDiscussionIds(e)) ? ? []
                }
                getInsertSuggestion() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getInsertSuggestion()
                }
                getRemoveSuggestion() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getRemoveSuggestion()
                }
                getAddLineBreakSuggestion() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getAddLineBreakSuggestion()
                }
                getRemoveLineBreakSuggestion() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getRemoveLineBreakSuggestion()
                }
                hasLineBreakSuggestion() {
                    return !!(this.getAddLineBreakSuggestion() || this.getRemoveLineBreakSuggestion())
                }
                getAllBlockSuggestions() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getAllBlockSuggestions()) ? ? []
                }
                getImageEditMetadata() {
                    return this.getFormatStore().getKeyStore("image_edit_metadata").getValue()
                }
                getImageHyperlink() {
                    return this.getFormatStore().getKeyStore("image_hyperlink").getValue()
                }
                getDisplaySource() {
                    return this.getFormatStore().getKeyStore("display_source").getValue()
                }
                getOriginalImageSource() {
                    let e = this.getFormatStore().getKeyStore("original_source").getValue();
                    if (e) return e;
                    let t = this.getFormatStore().getKeyStore("display_source").getValue();
                    if (t) return t;
                    let i = (0, r(247438).q4_)(this.getPropertyValue("source"));
                    if (i) return i
                }
                getSuggestionsStore() {
                    return this.k("format").k("suggestions")
                }
                getSiteId() {
                    return this.getFormatStore().getKeyStore("site_id").getValue()
                }
                getSiteStore() {
                    let e = this.getSiteId();
                    if (e) return r(131513).P.createChildStore(this, {
                        id: e,
                        table: r(832375).EuC,
                        spaceId: this.getSpaceId()
                    })
                }
                getDeletedFromTrashAt() {
                    let e = (0, r(688502).nz)(this.pointer, this.getRecordModel);
                    if ((null == e ? void 0 : e.table) === r(832375).evP) {
                        let t = e.getPermissionItems().find(r(642157).Ny);
                        return null == t ? void 0 : t.permanently_deleted_at
                    }
                }
                getSlug() {
                    return this.getFormatStore().getKeyStore("slug").getValue()
                }
                getPermissionsParentPointer() {
                    let e = this.getParentPointer();
                    if (void 0 !== e) return this.getParentStore(), e
                }
                getRenderTitleWithPlaceholder(e) {
                    var t;
                    return (this.getRenderTitle(e) || (null == (t = this.getModel()) ? void 0 : t.getRenderTitleWithPlaceholder({ ...e,
                        getRecordModel: this.getRecordModel
                    }))) ? ? e.intl.formatMessage(r(993189).zgg.messages.untitled)
                }
                getRenderTitle(e) {
                    var t;
                    return this.isWorkflowPage() ? this.getRenderTitleForWorkflowPage(e.intl) : null == (t = this.getModel()) ? void 0 : t.getRenderTitle({ ...e,
                        getRecordModel: this.getRecordModel
                    })
                }
                getRenderTitleForWorkflowPage(e) {
                    var t;
                    let i = null == (t = this.getFormat()) ? void 0 : t.workflow_id,
                        s = i ? r(360851).N.createChildStore(this, {
                            table: r(832375).C0E,
                            id: i,
                            spaceId: this.getSpaceId()
                        }) : void 0;
                    return (null == s ? void 0 : s.getRenderTitle(e)) ? ? e.formatMessage(r(360851).N.messages.emptyWorkflowTitle)
                }
                isPlaceholderWorkflowTemplateBlock() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.isPlaceholderWorkflowTemplateBlock()) ? ? !1
                }
                getAIBlockConfig() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getAIBlockConfig()
                }
                autoGenerateOnTemplateDuplication() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.autoGenerateOnTemplateDuplication()) ? ? !1
                }
                isGenerating() {
                    var e;
                    return (null == (e = this.getAIBlockConfig()) ? void 0 : e.isGenerating) ? ? !1
                }
                getWorkflowStore() {
                    var e;
                    let t = null == (e = this.getModel()) ? void 0 : e.getWorkflowId();
                    if (t) return this.getRecordStore(this, {
                        table: r(832375).C0E,
                        id: t,
                        spaceId: this.getSpaceId()
                    })
                }
                getTopLevelAncestorBlockStore() {
                    return (0, r(457915).g)(this).find(e => e instanceof o && e.getParentTable() !== r(832375).evP)
                }
                isLibraryBlock() {
                    return !!r(218744).default.checkGate({
                        gateName: "sidebar_library"
                    }) && "library_collection_view_page" === this.getSystemBlockTypeStore().getValue()
                }
                isInLibraryBlock() {
                    let e = this.getRecordStoreUIRoot();
                    return e instanceof o && e.isLibraryBlock()
                }
                getPromptStore() {
                    let e = this.getSpaceId();
                    if (e) return r(615018).c.createChildStore(this, {
                        table: r(832375).dod,
                        id: (0, r(986339).yW)(this.id),
                        spaceId: e
                    })
                }
                isAiSkill() {
                    let e = this.getPromptStore();
                    return !!(null != e && e.isDefined()) && !0 === e.getAlive() && "skill" === e.getPromptType()
                }
                isAiInstruction() {
                    let e = this.getPromptStore();
                    return !!(null != e && e.isDefined()) && !0 === e.getAlive() && "instruction" === e.getPromptType()
                }
                getSpaceIdFromValue() {
                    return this.v("space_id")
                }
            }
        },
        994797: (e, t, r) => {
            r.r(t), r.d(t, {
                SpaceViewStore: () => n
            }), r(898992), r(354520);
            var i = () => r(210952);
            class s extends i().Y {
                constructor(e, t, i) {
                    super({
                        ModelClass: r(993189).NSR,
                        environment: e,
                        pointer: t,
                        options: i
                    })
                }
                getModel() {
                    return super.getModel()
                }
                isDefined() {
                    return !!super.isDefined()
                }
                getSpaceId() {
                    return this.pointer.spaceId ? ? this.v("space_id")
                }
                getSpacePointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getSpacePointer()
                }
                getSpaceStore() {
                    let e = this.getSpacePointer(),
                        t = this.k("space_id");
                    return e && this.getRecordStore(t, e)
                }
                getBookmarkedPageIds() {
                    return this.getBookmarkedPagesStore().getValue() ? ? []
                }
                getBookmarkedPagesStore() {
                    return this.k("bookmarked_pages")
                }
                getBookmarkedPagePointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getBookmarkedPagePointers()) ? ? []
                }
                getBookmarkedPageStores() {
                    let e = this.getBookmarkedPagesStore();
                    return this.getRecordStoreArray(e, this.getBookmarkedPagePointers())
                }
                getSharedPageIds() {
                    return this.getSharedPagesStore().getValue() ? ? []
                }
                getSharedPagesStore() {
                    return this.k("shared_pages")
                }
                getSharedPagePointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getSharedPagePointers()) ? ? []
                }
                getSharedPageStores() {
                    let e = this.getSharedPagesStore();
                    return this.getRecordStoreArray(e, this.getSharedPagePointers())
                }
                getSharedPagesManualSortIds() {
                    return this.getSharedPagesManualSortStore().getValue() ? ? []
                }
                getSharedPagesManualSortStore() {
                    return this.k("shared_pages_manual_sort")
                }
                getSharedPagesManualSortPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getSharedPagesManualSortPointers()) ? ? []
                }
                getSharedPagesManualSortStores() {
                    let e = this.getSharedPagesManualSortStore();
                    return this.getRecordStoreArray(e, this.getSharedPagesManualSortPointers())
                }
                getVisitedTemplateIds() {
                    return this.getVisitedTemplatesStore().getValue() ? ? []
                }
                getVisitedTemplatesStore() {
                    return this.k("visited_templates")
                }
                getVisitedTemplatePointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getVisitedTemplatePointers()) ? ? []
                }
                getVisitedTemplateStores() {
                    let e = this.getVisitedTemplatesStore();
                    return this.getRecordStoreArray(e, this.getVisitedTemplatePointers())
                }
                getSidebarHiddenTemplateIds() {
                    return this.getSidebarHiddenTemplatesStore().getValue() ? ? []
                }
                getSidebarHiddenTemplatesStore() {
                    return this.k("sidebar_hidden_templates")
                }
                getSidebarOrder() {
                    return this.getSidebarOrderStore().getValue() ? ? []
                }
                getSidebarOrderStore() {
                    return this.k("sidebar_order")
                }
                getNotifyMobile() {
                    return this.v("notify_mobile")
                }
                getNotifyDesktop() {
                    return this.v("notify_desktop")
                }
                getNotifyEmail() {
                    return this.v("notify_email")
                }
                getNotifyEmailAlways() {
                    return this.v("notify_email_always")
                }
                getCreatedGettingStarted() {
                    return this.v("created_getting_started")
                }
                getParentId() {
                    return this.v("parent_id")
                }
                getParentPointer() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getParentPointer()
                }
                getParentStore() {
                    let e = this.getParentPointer(),
                        t = this.k("parent_id");
                    return e && this.getRecordStore(t, e)
                }
                getParentTable() {
                    return this.v("parent_table")
                }
                getAlive() {
                    return this.v("alive")
                }
                getCreatedOnboardingTemplates() {
                    return this.v("created_onboarding_templates")
                }
                getPrivatePageIds() {
                    return this.getPrivatePagesStore().getValue() ? ? []
                }
                getPrivatePagesStore() {
                    return this.k("private_pages")
                }
                getPrivatePagePointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getPrivatePagePointers()) ? ? []
                }
                getPrivatePageStores() {
                    let e = this.getPrivatePagesStore();
                    return this.getRecordStoreArray(e, this.getPrivatePagePointers())
                }
                getJoined() {
                    return this.v("joined")
                }
                getJoinedTeams() {
                    return this.getJoinedTeamsStore().getValue() ? ? []
                }
                getJoinedTeamsStore() {
                    return this.k("joined_teams")
                }
                getJoinedTeamPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getJoinedTeamPointers()) ? ? []
                }
                getJoinedTeamStores() {
                    let e = this.getJoinedTeamsStore();
                    return this.getRecordStoreArray(e, this.getJoinedTeamPointers())
                }
                getSettings() {
                    return this.getSettingsStore().getValue()
                }
                getSettingsStore() {
                    return this.k("settings")
                }
                getAiSuggestions() {
                    return this.getAiSuggestionsStore().getValue()
                }
                getAiSuggestionsStore() {
                    return this.k("ai_suggestions")
                }
                getAssistantSessionStarterIds() {
                    return this.getAssistantSessionStartersStore().getValue() ? ? []
                }
                getAssistantSessionStartersStore() {
                    return this.k("assistant_session_starters")
                }
                getAssistantSessionStarterPointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getAssistantSessionStarterPointers()) ? ? []
                }
                getAssistantSessionStarterStores() {
                    let e = this.getAssistantSessionStartersStore();
                    return this.getRecordStoreArray(e, this.getAssistantSessionStarterPointers())
                }
                getFirstJoinedSpaceTime() {
                    return this.v("first_joined_space_time")
                }
                getPublicShareLinkPages() {
                    return this.getPublicShareLinkPagesStore().getValue() ? ? []
                }
                getPublicShareLinkPagesStore() {
                    return this.k("public_share_link_pages")
                }
                getPublicShareLinkPagePointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getPublicShareLinkPagePointers()) ? ? []
                }
                getPublicShareLinkPageStores() {
                    let e = this.getPublicShareLinkPagesStore();
                    return this.getRecordStoreArray(e, this.getPublicShareLinkPagePointers())
                }
                getGuestExperience() {
                    return this.v("guest_experience")
                }
                getTrustedDomainPages() {
                    return this.getTrustedDomainPagesStore().getValue() ? ? []
                }
                getTrustedDomainPagesStore() {
                    return this.k("trusted_domain_pages")
                }
                getTrustedDomainPagePointers() {
                    var e;
                    return (null == (e = this.getModel()) ? void 0 : e.getTrustedDomainPagePointers()) ? ? []
                }
                getTrustedDomainPageStores() {
                    let e = this.getTrustedDomainPagesStore();
                    return this.getRecordStoreArray(e, this.getTrustedDomainPagePointers())
                }
                getMarkedDeadTime() {
                    return this.v("marked_dead_time")
                }
                getLastKnownMembershipType() {
                    return this.v("last_known_membership_type")
                }
            }
            class n extends s {
                static keyName = "SpaceViewStore";
                static createChildStore(e, t) {
                    return (0, r(626099).H)(e, t, this)
                }
                getSpaceId() {
                    return (0, r(226221).e)(super.getSpaceId())
                }
                getSpaceShardedPointer() {
                    return { ...this.pointer,
                        spaceId: this.getSpaceId()
                    }
                }
                getUserRootParentId() {
                    return this.getParentId()
                }
                getUserId() {
                    let e = this.getParentId();
                    if (e) return e
                }
                getBookmarkedPages() {
                    return this.getBookmarkedPageStores().filter(e => e.isNavigableBlock() && !e.isArchived())
                }
                getPinnedSharedPages() {
                    var e;
                    return null == (e = this.getSharedPageStores()) ? void 0 : e.filter(e => e.isNavigableBlock())
                }
                getSharedPages() {
                    var e;
                    return (null == (e = super.getSharedPageStores()) ? void 0 : e.filter(e => e.isNavigableBlock())) ? ? []
                }
                getOnAppStartStore() {
                    return this.getSettingsStore().getKeyStore("on_app_start")
                }
                getNotifyEmailDigest() {
                    var e;
                    return (null == (e = this.getSettings()) ? void 0 : e.notify_email_digest) ? ? !1
                }
                isAiMeetingNotesAudioProcessDetectionMonitoringEnabled() {
                    var e;
                    let t = null == (e = this.getSettings()) ? void 0 : e.disable_ai_meeting_notes_audio_process_detection_monitoring;
                    return void 0 === t || !t
                }
                isAiMeetingNotesAudioProcessDetectionNotificationEnabled() {
                    var e;
                    let t = null == (e = this.getSettings()) ? void 0 : e.disable_ai_meeting_notes_audio_process_detection_notification;
                    return void 0 === t ? !r(218744).default.checkGate({
                        gateName: "workspace_turn_off_meeting_push_notification_by_default_enabled"
                    }) : !t
                }
                isAiMeetingNotesUpcomingMeetingNotificationEnabled() {
                    var e;
                    let t = null == (e = this.getSettings()) ? void 0 : e.disable_ai_meeting_notes_upcoming_meeting_notification;
                    return void 0 === t ? !r(218744).default.checkGate({
                        gateName: "workspace_turn_off_meeting_push_notification_by_default_enabled"
                    }) : !t
                }
                getDisabledInAppMeetingActivityStages() {
                    var e;
                    return (null == (e = this.getSettings()) ? void 0 : e.disabled_in_app_meeting_activity_stages) ? ? {}
                }
                getHomeEnabledFeatures() {
                    var e;
                    return null == (e = this.getModel()) ? void 0 : e.getHomeEnabledFeatures()
                }
                getPersonalHomeSettings() {
                    var e;
                    return null == (e = this.getSettingsStore()) ? void 0 : e.getKeyStore("personal_home").getValue()
                }
                getLibrarySettings() {
                    var e;
                    return null == (e = this.getSettingsStore()) ? void 0 : e.getKeyStore("library").getValue()
                }
                getSelectedCalendarBotId() {
                    return this.getHomeCalendarConfigStore().getKeyStore("selected_calendar_bot_id").getValue()
                }
                getHomeCalendarConfigStore() {
                    return this.getSettingsStore().getKeyStore("personal_home").getKeyStore("calendar")
                }
                getHomeCalendarVisibilityConfig(e) {
                    return this.getHomeCalendarConfigStore().getKeyStore("shownCalendars").getKeyStore(e).getValue()
                }
                getCalendarVisibilityStore({
                    botId: e,
                    calendarId: t,
                    accountId: r
                }) {
                    return this.getHomeCalendarConfigStore().getKeyStore("shownCalendars").getKeyStore(e).getKeyStore("calendarVisibility").getKeyStore(r).getKeyStore(t)
                }
                getHomeCalendarConfig() {
                    return this.getHomeCalendarConfigStore().getValue()
                }
                getHomeCalendarFilter(e) {
                    return this.getHomeCalendarConfigStore().getKeyStore("event_filters").getKeyStore(e).getValue()
                }
                getUpcomingMeetingsSettingsStore() {
                    return this.getSettingsStore().getKeyStore("upcoming_meetings_settings")
                }
                getUpcomingMeetingsEventFilter(e) {
                    return this.getUpcomingMeetingsSettingsStore().getKeyStore("event_filters").getKeyStore(e).getValue()
                }
                getUserSurveyData() {
                    var e;
                    return null == (e = this.getSettings()) ? void 0 : e.user_survey_data
                }
                getSidebarSectionMenuConfig() {
                    var e;
                    return null == (e = this.getSettings()) ? void 0 : e.sidebar_section_menu
                }
                getNotionAppsSettingsStore() {
                    return this.getSettingsStore().getKeyStore("notion_apps")
                }
                getNotionAppsOrder() {
                    return this.getNotionAppsSettingsStore().getKeyStore("order").getValue() ? ? r(485890).g9
                }
                getNotionAppsOrderStore() {
                    return this.getNotionAppsSettingsStore().getKeyStore("order")
                }
                getNotionAppsHidden() {
                    return this.getNotionAppsSettingsStore().getKeyStore("hidden").getValue() ? ? !1
                }
                getNotionAppsHiddenStore() {
                    return this.getNotionAppsSettingsStore().getKeyStore("hidden")
                }
                getSharedPagesStore() {
                    return r(986939).A.isMobile ? super.getSharedPagesStore() : this.getSharedPagesManualSortStore()
                }
                getSharedPagePointers() {
                    return r(986939).A.isMobile ? super.getSharedPagePointers() : this.getSharedPagesManualSortPointers()
                }
                getSidebarSectionMenuPropertiesToSync(e) {
                    var t;
                    return null == (t = this.getModel()) ? void 0 : t.getSidebarSectionMenuPropertiesToSync(e)
                }
                getSidebarSectionMenuConfigStore(e, t) {
                    return this.getSettingsStore().getKeyStore("sidebar_section_menu").getKeyStore(e).getKeyStore(t)
                }
            }
        }
    }
]);