// Generated Thu May  1 12:40:44 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/i18n/datetimesymbols.d.ts" />
/// <reference path="../../goog/date/datelike.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/date/date.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/i18n/timezone.d.ts" />
/// <reference path="../../goog/i18n/datetimeformat.d.ts" />

declare module goog.date.relative {

    /**
     * Enumeration used to identify time units internally.
     * @enum {number}
     */
    enum Unit { MINUTES, HOURS, DAYS } 

    /**
     * @typedef {function(number, boolean, goog.date.relative.Unit): string}
     */
    interface TimeDeltaFormatter {
        (number, boolean, goog.date.relative.Unit): string
    }

    /**
     * Handles formatting of time deltas.
     * @private {goog.date.relative.TimeDeltaFormatter}
     */
    var formatTimeDelta_: any /*missing*/;

    /**
     * Sets a different formatting function for time deltas ("3 days ago").
     * While its visibility is public, this function is Closure-internal and should
     * not be used in application code.
     * @param {goog.date.relative.TimeDeltaFormatter} formatter The function to use
     *     for formatting time deltas (i.e. relative times).
     */
    function setTimeDeltaFormatter(formatter: goog.date.relative.TimeDeltaFormatter): void;

    /**
     * Accepts a timestamp in milliseconds and outputs a relative time in the form
     * of "1 hour ago", "1 day ago", "in 1 hour", "in 2 days" etc.  If the date
     * delta is over 2 weeks, then the output string will be empty.
     * @param {number} dateMs Date in milliseconds.
     * @return {string} The formatted date.
     */
    function format(dateMs: number): string;

    /**
     * Accepts a timestamp in milliseconds and outputs a relative time in the form
     * of "1 hour ago", "1 day ago".  All future times will be returned as 0 minutes
     * ago.
     *
     * This is provided for compatibility with users of the previous incarnation of
     * the above {@see #format} method who relied on it protecting against
     * future dates.
     *
     * @param {number} dateMs Date in milliseconds.
     * @return {string} The formatted date.
     */
    function formatPast(dateMs: number): string;

    /**
     * Accepts a timestamp in milliseconds and outputs a relative day. i.e. "Today",
     * "Yesterday", "Tomorrow", or "Sept 15".
     *
     * @param {number} dateMs Date in milliseconds.
     * @param {function(!Date):string=} opt_formatter Formatter for the date.
     *     Defaults to form 'MMM dd'.
     * @return {string} The formatted date.
     */
    function formatDay(dateMs: number, opt_formatter?: (_0: Date) => string): string;

    /**
     * Formats a date, adding the relative date in parenthesis.  If the date is less
     * than 24 hours then the time will be printed, otherwise the full-date will be
     * used.  Examples:
     *   2:20 PM (1 minute ago)
     *   Monday, February 27, 2009 (4 days ago)
     *   Tuesday, March 20, 2005    // Too long ago for a relative date.
     *
     * @param {Date|goog.date.DateTime} date A date object.
     * @param {string=} opt_shortTimeMsg An optional short time message can be
     *     provided if available, so that it's not recalculated in this function.
     * @param {string=} opt_fullDateMsg An optional date message can be
     *     provided if available, so that it's not recalculated in this function.
     * @return {string} The date string in the above form.
     */
    function getDateString(date: any /*Date|goog.date.DateTime*/, opt_shortTimeMsg?: string, opt_fullDateMsg?: string): string;

    /**
     * Formats a date, adding the relative date in parenthesis.   Functions the same
     * as #getDateString but ensures that the date is always seen to be in the past.
     * If the date is in the future, it will be shown as 0 minutes ago.
     *
     * This is provided for compatibility with users of the previous incarnation of
     * the above {@see #getDateString} method who relied on it protecting against
     * future dates.
     *
     * @param {Date|goog.date.DateTime} date A date object.
     * @param {string=} opt_shortTimeMsg An optional short time message can be
     *     provided if available, so that it's not recalculated in this function.
     * @param {string=} opt_fullDateMsg An optional date message can be
     *     provided if available, so that it's not recalculated in this function.
     * @return {string} The date string in the above form.
     */
    function getPastDateString(date: any /*Date|goog.date.DateTime*/, opt_shortTimeMsg?: string, opt_fullDateMsg?: string): string;
}

