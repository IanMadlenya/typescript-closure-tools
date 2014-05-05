// Generated Mon May  5 15:36:35 PDT 2014

/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />

declare module goog.ui {

    /**
     * TabPane widget. All children already inside the tab pane container element
     * will be be converted to tabs. Each tab is represented by a goog.ui.TabPane.
     * TabPage object. Further pages can be constructed either from an existing
     * container or created from scratch.
     *
     * @param {Element} el Container element to create the tab pane out of.
     * @param {goog.ui.TabPane.TabLocation=} opt_tabLocation Location of the tabs
     *     in relation to the content container. Default is top.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {boolean=} opt_useMouseDown Whether to use MOUSEDOWN instead of CLICK
     *     for tab changes.
     * @extends {goog.events.EventTarget}
     * @constructor
     * @see ../demos/tabpane.html
     * @deprecated Use goog.ui.TabBar instead.
     */
    class TabPane extends goog.events.EventTarget {
        /**
         * TabPane widget. All children already inside the tab pane container element
         * will be be converted to tabs. Each tab is represented by a goog.ui.TabPane.
         * TabPage object. Further pages can be constructed either from an existing
         * container or created from scratch.
         *
         * @param {Element} el Container element to create the tab pane out of.
         * @param {goog.ui.TabPane.TabLocation=} opt_tabLocation Location of the tabs
         *     in relation to the content container. Default is top.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {boolean=} opt_useMouseDown Whether to use MOUSEDOWN instead of CLICK
         *     for tab changes.
         * @extends {goog.events.EventTarget}
         * @constructor
         * @see ../demos/tabpane.html
         * @deprecated Use goog.ui.TabBar instead.
         */
        constructor(el: Element, opt_tabLocation?: goog.ui.TabPane.TabLocation, opt_domHelper?: goog.dom.DomHelper, opt_useMouseDown?: boolean);
    
        /**
         * Adds a page to the tab pane.
         *
         * @param {goog.ui.TabPane.TabPage} page Tab page to add.
         * @param {number=} opt_index Zero based index to insert tab at. Inserted at the
         *                           end if not specified.
         */
        addPage(page: goog.ui.TabPane.TabPage, opt_index?: number): void;
    
        /**
         * Removes the specified page from the tab pane.
         *
         * @param {goog.ui.TabPane.TabPage|number} page Reference to tab page or zero
         *     based index.
         */
        removePage(page: any /*goog.ui.TabPane.TabPage|number*/): void;
    
        /**
         * Gets the tab page by zero based index.
         *
         * @param {number} index Index of page to return.
         * @return {goog.ui.TabPane.TabPage?} page The tab page.
         */
        getPage(index: number): goog.ui.TabPane.TabPage;
    
        /**
         * Sets the selected tab page by object reference.
         *
         * @param {goog.ui.TabPane.TabPage} page Tab page to select.
         */
        setSelectedPage(page: goog.ui.TabPane.TabPage): void;
    
        /**
         * Sets the selected tab page by zero based index.
         *
         * @param {number} index Index of page to select.
         */
        setSelectedIndex(index: number): void;
    
        /**
         * @return {number} The index for the selected tab page or -1 if no page is
         *     selected.
         */
        getSelectedIndex(): number;
    
        /**
         * @return {goog.ui.TabPane.TabPage?} The selected tab page.
         */
        getSelectedPage(): goog.ui.TabPane.TabPage;
    
        /**
         * @return {Element} The element that contains the tab pages.
         */
        getContentElement(): Element;
    
        /**
         * @return {Element} The main element for the tabpane.
         */
        getElement(): Element;
    }

    /**
     * Object representing a tab pane page changed event.
     *
     * @param {string} type Event type.
     * @param {goog.ui.TabPane} target Tab widget initiating event.
     * @param {goog.ui.TabPane.TabPage} page Selected page in tab pane.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class TabPaneEvent extends goog.events.Event {
        /**
         * Object representing a tab pane page changed event.
         *
         * @param {string} type Event type.
         * @param {goog.ui.TabPane} target Tab widget initiating event.
         * @param {goog.ui.TabPane.TabPage} page Selected page in tab pane.
         * @extends {goog.events.Event}
         * @constructor
         * @final
         */
        constructor(type: string, target: goog.ui.TabPane, page: goog.ui.TabPane.TabPage);
    }
}

declare module goog.ui.TabPane {

    /**
     * Object representing an individual tab pane.
     *
     * @param {Element=} opt_el Container element to create the pane out of.
     * @param {(Element|string)=} opt_title Pane title or element to use as the
     *     title. If not specified the first element in the container is used as
     *     the title.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper
     * The first parameter can be omitted.
     * @constructor
     */
    class TabPage {
        /**
         * Object representing an individual tab pane.
         *
         * @param {Element=} opt_el Container element to create the pane out of.
         * @param {(Element|string)=} opt_title Pane title or element to use as the
         *     title. If not specified the first element in the container is used as
         *     the title.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper
         * The first parameter can be omitted.
         * @constructor
         */
        constructor(opt_el?: Element, opt_title?: any /*Element|string*/, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {string} The title for tab page.
         */
        getTitle(): string;
    
        /**
         * Sets title for tab page.
         *
         * @param {string} title Title for tab page.
         */
        setTitle(title: string): void;
    
        /**
         * @return {Element} The title element.
         */
        getTitleElement(): Element;
    
        /**
         * @return {Element} The content element.
         */
        getContentElement(): Element;
    
        /**
         * @return {?number} The index of page in tab pane.
         */
        getIndex(): number;
    
        /**
         * @return {goog.ui.TabPane?} The parent tab pane for page.
         */
        getParent(): goog.ui.TabPane;
    
        /**
         * Selects page in the associated tab pane.
         */
        select(): void;
    
        /**
         * Sets the enabled state.
         *
         * @param {boolean} enabled Enabled state.
         */
        setEnabled(enabled: boolean): void;
    
        /**
         * Returns if the page is enabled.
         * @return {boolean} Whether the page is enabled or not.
         */
        isEnabled(): boolean;
    }

    /**
     * Constants for event names
     *
     * @type {Object}
     */
    var Events: Object;

    /**
     * Enum for representing the location of the tabs in relation to the content.
     *
     * @enum {number}
     */
    enum TabLocation { TOP, BOTTOM, LEFT, RIGHT } 
}

