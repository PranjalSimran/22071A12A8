(window.webpackJsonp = window.webpackJsonp || []).push([
    [35], {
        1040: function(e, t, n) {
            "use strict";
            n.r(t);
            var d = n(6),
                l = n(1),
                r = n.n(l),
                m = n(33),
                o = n(306),
                c = d.componentFactory.create({
                    props: {
                        widgetIndex: r.a.ofType().default(0),
                        settings: r.a.ofType().required,
                        isEnabledAnimation: r.a.ofType().default(!1)
                    },
                    render(e) {
                        var t;
                        return e(m.jb, {
                            class: "banner banner-t2 banner-t2-v15",
                            attrs: {
                                settings: this.settings
                            }
                        }, [e("div", {
                            class: "kmb-widget-container-fluid"
                        }, [e("div", {
                            class: "kmb-widget-content-info kmb-widget-full-content-center text-center"
                        }, [e("div", {
                            class: "kmb-widget-row"
                        }, [null === (t = this.settings.items) || void 0 === t ? void 0 : t.map(((t, n) => e("div", {
                            class: "md-w-1-2 w-full kmb-widget-col",
                            key: t.ket
                        }, [e(m.d, {
                            attrs: {
                                settings: this.settings,
                                image: t.image,
                                imageResize: t.imageResize,
                                classNames: "kmb-widget-hidden-bg-image kmb-widget-bg-image-with-overlay kmb-widget-bg-image-with-blur"
                            },
                            class: "kmb-widget-banner-item kmb-widget-bg-image-group-with-bg-overlay h-full"
                        }, [e("div", {
                            class: "kmb-banner-widget-item-container flex items-center justify-center flex-col flex-wrap kmb-widget-banner-content-item bg-center w-full"
                        }, [e("div", {
                            class: "kmb-sm-widget-container"
                        }, [e(o.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: t,
                                isEnabledAnimation: this.isEnabledAnimation,
                                isSecondaryButton: !1
                            },
                            class: "w-full"
                        })])])])])))])])])])
                    }
                });
            t.default = c
        },
        1041: function(e, t, n) {
            "use strict";
            n.r(t);
            var d = n(6),
                l = n(1),
                r = n.n(l),
                m = n(33),
                o = n(306),
                c = d.componentFactory.create({
                    props: {
                        widgetIndex: r.a.ofType().default(0),
                        settings: r.a.ofType().required,
                        isEnabledAnimation: r.a.ofType().default(!1)
                    },
                    render(e) {
                        var t;
                        return e(m.jb, {
                            class: "banner banner-t2 banner-t2-v16",
                            attrs: {
                                settings: this.settings
                            }
                        }, [e("div", {
                            class: "kmb-widget-container-fluid kmb-widget-container-fluid-frame"
                        }, [e("div", {
                            class: "kmb-widget-content-info kmb-widget-full-content-center text-center"
                        }, [e("div", {
                            class: "kmb-xl-widget-row py-20"
                        }, [null === (t = this.settings.items) || void 0 === t ? void 0 : t.map(((t, n) => e("div", {
                            class: "md-w-1-2 w-full kmb-widget-xl-col",
                            key: t.key || n
                        }, [e(m.d, {
                            attrs: {
                                settings: this.settings,
                                image: t.image,
                                imageResize: t.imageResize,
                                classNames: "kmb-widget-hidden-bg-image kmb-widget-bg-image-with-overlay kmb-widget-bg-image-with-blur"
                            },
                            class: "kmb-widget-banner-item kmb-widget-bg-image-group-with-bg-overlay h-full"
                        }, [e("div", {
                            class: "kmb-widget-banner-content-item kmb-banner-widget-item-container flex items-center flex-wrap flex-col justify-center bg-center w-full"
                        }, [e("div", {
                            class: "kmb-sm-widget-container"
                        }, [e(o.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: t,
                                isEnabledAnimation: this.isEnabledAnimation,
                                isSecondaryButton: !1
                            },
                            class: "w-full"
                        })])])])])))])])])])
                    }
                });
            t.default = c
        },
        1044: function(e, t, n) {
            "use strict";
            n.r(t);
            var d = n(6),
                l = n(1),
                r = n.n(l),
                m = n(33),
                o = n(306),
                c = d.componentFactory.create({
                    props: {
                        widgetIndex: r.a.ofType().default(0),
                        settings: r.a.ofType().required,
                        isEnabledAnimation: r.a.ofType().default(!1)
                    },
                    render(e) {
                        var t;
                        return e(m.jb, {
                            class: "banner banner-type-t2 banner-t2-v19",
                            attrs: {
                                settings: this.settings
                            }
                        }, [e("div", {
                            class: "kmb-widget-container-fluid"
                        }, [e("div", {
                            class: "kmb-widget-content-info kmb-text-center"
                        }, [null === (t = this.settings.items) || void 0 === t ? void 0 : t.map(((t, n) => {
                            var d;
                            return e(m.d, {
                                key: t.key || n,
                                attrs: {
                                    image: t.image,
                                    settings: this.settings,
                                    imageResize: null === (d = this.settings) || void 0 === d ? void 0 : d.imageResize,
                                    classNames: "kmb-widget-hidden-bg-image kmb-widget-bg-image-with-overlay kmb-widget-bg-image-with-blur"
                                },
                                class: "kmb-widget-banner-item kmb-widget-bg-image-group-with-bg-overlay h-full"
                            }, [e("div", {
                                class: "kmb-widget-container kmb-banner-widget-item-container"
                            }, [e("div", {
                                class: "lg-w-1-2 md-w-3-4 w-full mr-auto"
                            }, [e(o.a, {
                                attrs: {
                                    widgetIndex: this.widgetIndex,
                                    settings: t,
                                    isEnabledAnimation: this.isEnabledAnimation,
                                    isSecondaryButton: !1
                                },
                                class: "kmb-widget-info-left"
                            })])])])
                        }))])])])
                    }
                });
            t.default = c
        },
        1048: function(e, t, n) {
            "use strict";
            n.r(t);
            var d = n(6),
                l = n(1),
                r = n.n(l),
                m = n(7),
                o = n.n(m),
                c = n(33),
                w = n(306),
                h = d.componentFactory.create({
                    props: {
                        widgetIndex: r.a.ofType().default(0),
                        settings: r.a.ofType().required,
                        isEnabledAnimation: r.a.ofType().default(!1)
                    },
                    render(e) {
                        var t;
                        return e(c.jb, {
                            class: "banner banner-t2 banner-t2-v5",
                            attrs: {
                                settings: this.settings
                            }
                        }, [e("div", {
                            class: "kmb-widget-container-fluid kmb-widget-container-row"
                        }, [e("div", {
                            class: "kmb-widget-content-info text-center"
                        }, [e("div", {
                            class: "kmb-widget-row"
                        }, [this.settings.items && this.settings.items[0] && e("div", {
                            class: "md-w-1-2 w-full md-pr-4 kmb-widget-banner-col"
                        }, [e(c.d, {
                            attrs: {
                                settings: this.settings,
                                image: this.settings.items[0].image,
                                imageResize: this.settings.items[0].imageResize,
                                classNames: "kmb-widget-hidden-bg-image kmb-widget-bg-image-with-overlay kmb-widget-bg-image-with-blur"
                            },
                            class: "kmb-widget-banner-item kmb-widget-bg-image-group-with-bg-overlay h-full"
                        }, [e("div", {
                            class: "kmb-banner-widget-item-container kmb-xs-widget-container w-full"
                        }, [e(w.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: this.settings.items[0],
                                isEnabledAnimation: this.isEnabledAnimation,
                                isSecondaryButton: !1,
                                isSimplyTitle: !0
                            }
                        })])])]), e("div", {
                            class: "md-w-1-2 w-full md-pl-4 kmb-widget-banner-col"
                        }, [null === (t = this.settings.items) || void 0 === t ? void 0 : t.slice(1, this.settings.itemsCount).map(((t, n) => e(c.d, {
                            key: t.key || n,
                            attrs: {
                                image: t.image,
                                settings: this.settings,
                                imageResize: t.imageResize,
                                classNames: "kmb-widget-hidden-bg-image kmb-widget-bg-image-with-overlay kmb-widget-bg-image-with-blur"
                            },
                            class: o()("kmb-widget-banner-item kmb-widget-bg-image-group-with-bg-overlay", {
                                "kmb-widget-col-group": 0 == n
                            })
                        }, [e("div", {
                            class: "kmb-banner-widget-item-container kmb-xs-widget-container w-full"
                        }, [e(w.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: t,
                                isEnabledAnimation: this.isEnabledAnimation,
                                isSecondaryButton: !1,
                                isSimplyTitle: !0
                            }
                        })])])))])])])])])
                    }
                });
            t.default = h
        },
        1050: function(e, t, n) {
            "use strict";
            n.r(t);
            var d = n(6),
                l = n(1),
                r = n.n(l),
                m = n(7),
                o = n.n(m),
                c = n(33),
                w = n(306),
                h = d.componentFactory.create({
                    props: {
                        widgetIndex: r.a.ofType().default(0),
                        settings: r.a.ofType().required,
                        isEnabledAnimation: r.a.ofType().default(!1)
                    },
                    render(e) {
                        var t;
                        return e(c.jb, {
                            class: "banner banner-t2 banner-t2-v7",
                            attrs: {
                                settings: this.settings
                            }
                        }, [e("div", {
                            class: "kmb-widget-container-fluid"
                        }, [e("div", {
                            class: "kmb-widget-content-info text-center"
                        }, [e("div", {
                            class: "kmb-widget-row-mx-0 "
                        }, [e("div", {
                            class: "md-w-1-2 w-full md-pr-4 kmb-widget-banner-col"
                        }, [null === (t = this.settings.items) || void 0 === t ? void 0 : t.slice(0, this.settings.items.length - 1).map(((t, n) => e(c.d, {
                            attrs: {
                                settings: this.settings,
                                image: t.image,
                                imageResize: t.imageResize,
                                classNames: "kmb-widget-hidden-bg-image kmb-widget-bg-image-with-overlay kmb-widget-bg-image-with-blur"
                            },
                            class: o()("kmb-widget-banner-item kmb-widget-bg-image-group-with-bg-overlay", {
                                "kmb-widget-col-group": 0 == n
                            })
                        }, [e("div", {
                            class: "kmb-banner-widget-item-container kmb-widget-banner-content-item kmb-xs-widget-container w-full"
                        }, [e(w.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: t,
                                isEnabledAnimation: this.isEnabledAnimation,
                                isSimplyTitle: !0,
                                isSecondaryButton: !1
                            }
                        })])])))]), this.settings.items && this.settings.items[this.settings.items.length - 1] && e("div", {
                            class: "md-w-1-2 w-full md-pl-4 kmb-widget-banner-col"
                        }, [e(c.d, {
                            attrs: {
                                settings: this.settings,
                                image: this.settings.items[this.settings.items.length - 1].image,
                                imageResize: this.settings.items[this.settings.items.length - 1].imageResize,
                                classNames: "kmb-widget-hidden-bg-image kmb-widget-bg-image-with-overlay kmb-widget-bg-image-with-blur"
                            },
                            class: "kmb-widget-banner-item kmb-widget-bg-image-group-with-bg-overlay h-full"
                        }, [e("div", {
                            class: "kmb-widget-banner-content-item kmb-banner-widget-item-container kmb-xs-widget-container w-full"
                        }, [e(w.a, {
                            attrs: {
                                widgetIndex: this.widgetIndex,
                                settings: this.settings.items[this.settings.items.length - 1],
                                isEnabledAnimation: this.isEnabledAnimation,
                                isSimplyTitle: !0,
                                isSecondaryButton: !1
                            }
                        })])])])])])])])
                    }
                });
            t.default = h
        },
        306: function(e, t, n) {
            "use strict";
            var d = n(6),
                l = n(1),
                r = n.n(l),
                m = n(0),
                o = n(33),
                c = d.componentFactory.create({
                    name: "BannerItem",
                    props: {
                        settings: r.a.ofAny().required,
                        widgetIndex: r.a.ofType().required,
                        isEnabledAnimation: r.a.ofType().default(!1),
                        isSecondaryButton: r.a.ofType().default(!0),
                        isEnabledDescription: r.a.ofType().default(!0),
                        isSimplyTitle: r.a.ofType().default(!1)
                    },
                    computed: {
                        isEnabledContent() {
                            var {
                                title: title,
                                description: e,
                                primaryButton: t,
                                secondaryButton: n
                            } = null == this ? void 0 : this.settings;
                            return (null == title ? void 0 : title.isEnabled) || (null == e ? void 0 : e.isEnabled) || (null == t ? void 0 : t.isEnabled) || (null == n ? void 0 : n.isEnabled)
                        }
                    },
                    methods: {
                        renderTitle(e) {
                            return this.isSimplyTitle ? e(o.U, {
                                attrs: {
                                    value: this.settings.title
                                },
                                class: "kmb-banner-simply-title"
                            }) : e(o.fb, {
                                attrs: {
                                    value: this.settings.title,
                                    widgetIndex: this.widgetIndex,
                                    isEnabledDivider: !1
                                },
                                class: "kmb-banner-title"
                            })
                        }
                    },
                    render(e) {
                        var t, n, d, l;
                        if (this.isEnabledContent) return e("div", {
                            class: "kmb-widget-banner-content kmb-widget-banner-content-bg py-6 md-py-10 md-px-6 w-full"
                        }, [e(o.n, {
                            attrs: {
                                settings: this.settings,
                                isEnabledAnimation: this.isEnabledAnimation
                            }
                        }, [this.renderTitle(e), this.isEnabledDescription && e(o.q, {
                            attrs: {
                                value: this.settings.description
                            },
                            class: "kmb-banner-description"
                        }), e(o.i, {
                            attrs: {
                                isEnabled: (null === (t = this.settings.primaryButton) || void 0 === t ? void 0 : t.isEnabled) || (null === (n = this.settings.secondaryButton) || void 0 === n ? void 0 : n.isEnabled)
                            },
                            class: "kmb-widget-btn-group-center"
                        }, [e(o.h, {
                            attrs: {
                                value: this.settings.primaryButton,
                                isEnabled: null === (d = this.settings.primaryButton) || void 0 === d ? void 0 : d.isEnabled,
                                elementType: m.Ld.Primary
                            }
                        }), this.isSecondaryButton && e(o.h, {
                            attrs: {
                                value: this.settings.secondaryButton,
                                isEnabled: null === (l = this.settings.secondaryButton) || void 0 === l ? void 0 : l.isEnabled,
                                elementType: m.Ld.Secondary,
                                classNames: "kmb-widget-secondary-btn"
                            }
                        })])])])
                    }
                });
            t.a = c
        }
    }
]);