// Generated Thu May  1 16:39:42 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/dom/selection.d.ts" />
/// <reference path="../../../goog/editor/focus.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/ui/component.d.ts" />
/// <reference path="../../../goog/editor/defines.d.ts" />
/// <reference path="../../../goog/useragent/product.d.ts" />
/// <reference path="../../../goog/useragent/product_isversion.d.ts" />
/// <reference path="../../../goog/editor/browserfeature.d.ts" />
/// <reference path="../../../goog/editor/style.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../../goog/dom/iter.d.ts" />
/// <reference path="../../../goog/editor/node.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/dom/savedrange.d.ts" />
/// <reference path="../../../goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../../goog/dom/abstractrange.d.ts" />
/// <reference path="../../../goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../goog/string/stringbuffer.d.ts" />
/// <reference path="../../../goog/dom/browserrange/abstractrange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/w3crange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/webkitrange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/ierange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/geckorange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/operarange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/browserrange.d.ts" />
/// <reference path="../../../goog/dom/textrange.d.ts" />
/// <reference path="../../../goog/dom/abstractmultirange.d.ts" />
/// <reference path="../../../goog/dom/controlrange.d.ts" />
/// <reference path="../../../goog/dom/multirange.d.ts" />
/// <reference path="../../../goog/dom/range.d.ts" />
/// <reference path="../../../goog/editor/range.d.ts" />
/// <reference path="../../../goog/uri/utils.d.ts" />
/// <reference path="../../../goog/editor/command.d.ts" />
/// <reference path="../../../goog/editor/link.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../goog/ui/buttonside.d.ts" />
/// <reference path="../../../goog/ui/buttonrenderer.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/ui/nativebuttonrenderer.d.ts" />
/// <reference path="../../../goog/ui/registry.d.ts" />
/// <reference path="../../../goog/events/keyhandler.d.ts" />
/// <reference path="../../../goog/ui/decorate.d.ts" />
/// <reference path="../../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../../goog/ui/control.d.ts" />
/// <reference path="../../../goog/ui/button.d.ts" />
/// <reference path="../../../goog/ui/tabrenderer.d.ts" />
/// <reference path="../../../goog/ui/tab.d.ts" />
/// <reference path="../../../goog/ui/containerrenderer.d.ts" />
/// <reference path="../../../goog/ui/tabbarrenderer.d.ts" />
/// <reference path="../../../goog/ui/container.d.ts" />
/// <reference path="../../../goog/ui/tabbar.d.ts" />
/// <reference path="../../../goog/ui/editor/tabpane.d.ts" />
/// <reference path="../../../goog/ui/cssnames.d.ts" />
/// <reference path="../../../goog/ui/flatbuttonrenderer.d.ts" />
/// <reference path="../../../goog/ui/linkbuttonrenderer.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/events/inputhandler.d.ts" />
/// <reference path="../../../goog/ui/editor/messages.d.ts" />
/// <reference path="../../../goog/style/bidi.d.ts" />
/// <reference path="../../../goog/fx/dragger.d.ts" />
/// <reference path="../../../goog/i18n/bidi.d.ts" />
/// <reference path="../../../goog/string/typedstring.d.ts" />
/// <reference path="../../../goog/string/const.d.ts" />
/// <reference path="../../../goog/html/safeurl.d.ts" />
/// <reference path="../../../goog/dom/tags.d.ts" />
/// <reference path="../../../goog/html/safestyle.d.ts" />
/// <reference path="../../../goog/html/safehtml.d.ts" />
/// <reference path="../../../goog/dom/safe.d.ts" />
/// <reference path="../../../goog/fx/transition.d.ts" />
/// <reference path="../../../goog/ui/popupbase.d.ts" />
/// <reference path="../../../goog/dom/iframe.d.ts" />
/// <reference path="../../../goog/events/focushandler.d.ts" />
/// <reference path="../../../goog/ui/modalpopup.d.ts" />
/// <reference path="../../../goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../../goog/html/legacyconversions.d.ts" />
/// <reference path="../../../goog/ui/dialog.d.ts" />
/// <reference path="../../../goog/ui/editor/abstractdialog.d.ts" />
/// <reference path="../../../goog/window/window.d.ts" />
/// <reference path="../../../goog/ui/editor/linkdialog.d.ts" />
/// <reference path="../../../goog/editor/icontent.d.ts" />
/// <reference path="../../../goog/editor/plugin.d.ts" />
/// <reference path="../../../goog/async/delay.d.ts" />
/// <reference path="../../../goog/editor/field.d.ts" />
/// <reference path="../../../goog/editor/plugins/abstractdialogplugin.d.ts" />

declare module goog.editor.plugins {

    /**
     * A plugin that opens the link dialog.
     * @constructor
     * @extends {goog.editor.plugins.AbstractDialogPlugin}
     */
    class LinkDialogPlugin extends goog.editor.plugins.AbstractDialogPlugin {
        /**
         * A plugin that opens the link dialog.
         * @constructor
         * @extends {goog.editor.plugins.AbstractDialogPlugin}
         */
        constructor();
    
        /**
         * Link object that the dialog is editing.
         * @type {goog.editor.Link}
         * @protected
         */
        currentLink_: goog.editor.Link;
    
        /**
         * Tells the plugin whether to block URLs with schemes not in the whitelist.
         * If blocking is enabled, this plugin will stop the 'Test Link' popup
         * window from being created. Blocking doesn't affect link creation--if the
         * user clicks the 'OK' button with an unsafe URL, the link will still be
         * created as normal.
         * @param {boolean} blockOpeningUnsafeSchemes Whether to block non-whitelisted
         *     schemes.
         */
        setBlockOpeningUnsafeSchemes(blockOpeningUnsafeSchemes: boolean): void;
    
        /**
         * Sets a whitelist of allowed URL schemes that are safe to open.
         * Schemes should all be in lowercase. If the plugin is set to block opening
         * unsafe schemes, user-entered URLs will be converted to lowercase and checked
         * against this list. The whitelist has no effect if blocking is not enabled.
         * @param {Array.<string>} schemes String array of URL schemes to allow (http,
         *     https, etc.).
         */
        setSafeToOpenSchemes(schemes: string[]): void;
    
        /**
         * Tells the dialog to show a checkbox where the user can choose to have the
         * link open in a new window.
         * @param {boolean} startChecked Whether to check the checkbox the first
         *     time the dialog is shown. Subesquent times the checkbox will remember its
         *     previous state.
         */
        showOpenLinkInNewWindow(startChecked: boolean): void;
    
        /**
         * Tells the dialog to show a checkbox where the user can choose to have
         * 'rel=nofollow' attribute added to the link.
         */
        showRelNoFollow(): void;
    
        /**
         * Returns whether the"open link in new window" checkbox was checked last time
         * the dialog was closed.
         * @return {boolean} Whether the"open link in new window" checkbox was checked
         *     last time the dialog was closed.
         */
        getOpenLinkInNewWindowCheckedState(): boolean;
    
        /**
         * Tells the plugin to stop leaking the page's url via the referrer header when
         * the "test this link" link is clicked. When the user clicks on a link, the
         * browser makes a request for the link url, passing the url of the current page
         * in the request headers. If the user wants the current url to be kept secret
         * (e.g. an unpublished document), the owner of the url that was clicked will
         * see the secret url in the request headers, and it will no longer be a secret.
         * Calling this method will not send a referrer header in the request, just as
         * if the user had opened a blank window and typed the url in themselves.
         */
        stopReferrerLeaks(): void;
    
        /**
         * Sets the warning message to show to users about including email addresses on
         * public web pages.
         * @param {string} emailWarning Warning message to show users about including
         *     email addresses on the web.
         */
        setEmailWarning(emailWarning: string): void;
    
        /**
         * @return {goog.events.EventHandler.<T>} The event handler.
         * @protected
         * @this T
         * @template T
         */
        getEventHandler<T>(): goog.events.EventHandler<T>;
    
        /**
         * @return {goog.editor.Link} The link being edited.
         * @protected
         */
        getCurrentLink(): goog.editor.Link;
    
        /**
         * Handles the OK event from the dialog by updating the link in the field.
         * @param {goog.ui.editor.LinkDialog.OkEvent} e OK event object.
         * @protected
         */
        handleOk(e: goog.ui.editor.LinkDialog.OkEvent): void;
    
        /**
         * Handles the BeforeTestLink event fired when the 'test' link is clicked.
         * @param {goog.ui.editor.LinkDialog.BeforeTestLinkEvent} e BeforeTestLink event
         *     object.
         * @protected
         */
        handleBeforeTestLink(e: goog.ui.editor.LinkDialog.BeforeTestLinkEvent): void;
    
        /**
         * Checks whether the plugin should open the given url in a new window.
         * @param {string} url The url to check.
         * @return {boolean} If the plugin should open the given url in a new window.
         * @protected
         */
        shouldOpenUrl(url: string): boolean;
    }
}
