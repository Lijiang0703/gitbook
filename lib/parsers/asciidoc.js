'use strict';

var _require = require('markup-it'),
    State = _require.State;

var AsciidoctorJS = require('asciidoctor.js');
var asciidoc = require('markup-it/lib/asciidoc');

var asciidocjs = AsciidoctorJS();

var FILE_EXTENSIONS = ['.adoc', '.asciidoc'];

/**
 * Render a document as text.
 * @param  {Document} document
 * @return {String} text
 */
function toText(document) {
    var state = State.create(asciidoc);
    return state.serializeDocument(document);
}

/**
 * Parse asciidoc into a document.
 * @param  {String} text
 * @return {Document} document
 */
function toDocument(text) {
    var state = State.create(asciidoc);
    return state.deserializeToDocument(text);
}

/**
 * Render asciidoc to HTML.
 * @param  {String} text
 * @return {String} html
 */
function toHTML(text) {
    return asciidocjs.convert(text, {
        attributes: 'showtitle'
    });
}

/**
 * Prepare a document for parsing
 * @param  {String} text
 * @return {String} text
 */
function prepare(text) {
    return text;
}

/**
 * Render asciidoc to inline HTML.
 * @param  {String} text
 * @return {String} html
 */
function toInlineHTML(text) {
    return asciidocjs.convert(text, {
        doctype: 'inline',
        attributes: 'showtitle'
    });
}

module.exports = {
    name: 'asciidoc',
    FILE_EXTENSIONS: FILE_EXTENSIONS,
    prepare: prepare,
    toDocument: toDocument,
    toText: toText,
    toHTML: toHTML,
    toInlineHTML: toInlineHTML
};
//# sourceMappingURL=asciidoc.js.map