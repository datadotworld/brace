ace.define("ace/mode/sparql_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
var oop = acequire("../lib/oop");
var lang = acequire("../lib/lang");
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var SPARQLHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used
    var keywords = "abs|add|all|as|asc|ask|avg|base|bind|bnode|bound|by|ceil|clear|coalesce|concat|construct|contains|copy|count|create|datatype|day|default|delete|desc|describe|distinct|drop|exists|filter|floor|from|graph|group|having|hours|if|in|insert|into|iri|isblank|isiri|isliteral|isnumeric|isuri|lang|langmatches|lcase|limit|load|max|md5|min|minus|minutes|month|move|named|not|now|offset|optional|order|prefix|rand|reduced|regex|replace|round|sameterm|sample|seconds|select|separator|service|sha1|sha256|sha384|sha512|silent|str|strafter|strbefore|strdt|strends|strlang|strlen|strstarts|struuid|substr|sum|timezone|to|tz|ucase|undef|union|uri|using|uuid|values|where|with|year"
    var keywordMapper = this.createKeywordMapper({
        "variable.language":
           keywords + "|" + keywords.toUpperCase(),
        "keyword":
          "",
        "constant.language":
          "",
        "support.function":
          "",
        "constant.language.boolean": "true|false"
    }, "identifier");

    var identifierRe = "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*\\b";

        this.$rules = {
            start: [{
                include: "#uris"
            }, {
                include: "#comments",
            }, {
                include: "#strings"
            }, {
                include: "#string-language-suffixes"
            }, {
                include: "#string-datatype-suffixes"
            }, {
                include: "#xml-schema-types"
            }, {
                include: "#rdf-schema-types"
            }, {
                include: "#owl-types"
            }, {
                include: "#prefix-types"
            }, {
                include: "#variables"
            }, {
                include: "#logic-operators"
            }, {
                include: "#boolean-literal"
            }, {
                include: "#punctuation-operators"
            },
            {
                token : keywordMapper,
                regex : identifierRe
            }],
            "#boolean-literal": [{
                token: "constant.language.boolean.sparql",
                regex: /true|false/
            }],
            "#comments": [{
                token: [
                    "punctuation.definition.comment.sparql",
                    "comment.line.hash.sparql"
                ],
                regex: /(\s?#)(.*$)/
            }],
            "#uris": [{
                token: ["punctuation.sparql.keyword", "type.string.datatype.url.variable.sparql", "punctuation.sparql.keyword"],
                regex : /\s?(<)(.*)(>)\s?/
            }],
            "#logic-operators": [{
                token: "keyword.operator.logical.sparql",
                regex: /\|\||&&|=|!=|<|>|<=|>=|(?:^|!?\s)IN(?:!?\s|$)|(?:^|!?\s)NOT(?:!?\s|$)|-|\+|\*|\/|\!/
            }],
            "#owl-types": [{
                token: "support.type.datatype.owl.sparql",
                regex: /owl:[a-zA-Z]+/
            }],
            "#prefix-types": [{
                token: "support.type.datatype.prefix.sparql",
                regex: /\s[a-zA-Z0-9]*:\s+/
            }],
            "#punctuation-operators": [{
                token: "keyword.operator.punctuation.sparql",
                regex: /;|,|\.|\(|\)|\{|\}|\|/
            }],
            "#rdf-schema-types": [{
                token: "support.type.datatype.rdf.schema.sparql",
                regex: /rdfs?:[a-zA-Z]+|(?:^|\s)a(?:\s|$)/
            }],
            "#relative-urls": [{
                token: "string.quoted.other.relative.url.sparql",
                regex: /</,
                push: [{
                    token: "string.quoted.other.relative.url.sparql",
                    regex: />/,
                    next: "pop"
                }, {
                    defaultToken: "string.quoted.other.relative.url.sparql"
                }]
            }],
            "#string-datatype-suffixes": [{
                token: "keyword.operator.datatype.suffix.sparql",
                regex: /\^\^/
            }],
            "#string-language-suffixes": [{
                token: [
                    "keyword.operator.language.suffix.sparql",
                    "constant.language.suffix.sparql"
                ],
                regex: /(?!")(@)([a-z]+(?:\-[a-z0-9]+)*)/
            }],
            "#strings": [{
                token: "string.quoted.triple.sparql",
                regex: /"""/,
                push: [{
                    token: "string.quoted.triple.sparql",
                    regex: /"""/,
                    next: "pop"
                }, {
                    defaultToken: "string.quoted.triple.sparql"
                }]
            }, {
                token: "string.quoted.double.sparql",
                regex: /"/,
                push: [{
                    token: "string.quoted.double.sparql",
                    regex: /"/,
                    next: "pop"
                }, {
                    token: "invalid.string.newline",
                    regex: /$/
                }, {
                    token: "constant.character.escape.sparql",
                    regex: /\\./
                }, {
                    defaultToken: "string.quoted.double.sparql"
                }]
            }],
            "#variables": [{
                token: "variable.other.sparql",
                regex: /(?:\?|\$)[-_a-zA-Z0-9]+/
            }],
            "#xml-schema-types": [{
                token: "support.type.datatype.schema.sparql",
                regex: /xsd?:[a-z][a-zA-Z]+/
            }]
        }

        this.normalizeRules();
    };

    oop.inherits(SPARQLHighlightRules, TextHighlightRules);
    exports.SPARQLHighlightRules = SPARQLHighlightRules;
});

ace.define("ace/mode/sparql",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sparql_highlight_rules","ace/range"], function(acequire, exports, module) {
var oop = acequire("../lib/oop");
var TextMode = acequire("./text").Mode;
var SPARQLHighlightRules = acequire("./sparql_highlight_rules").SPARQLHighlightRules;
var Range = acequire("../range").Range;

var Mode = function() {
    this.HighlightRules = SPARQLHighlightRules;
};

oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = "--";

    this.$id = "ace/mode/sparql";
}).call(Mode.prototype);

exports.Mode = Mode;

});
