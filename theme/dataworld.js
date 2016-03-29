ace.define("ace/theme/dataworld",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-dataworld";
exports.cssText = "\
.ace-dataworld .ace_gutter {\
background: #e8e8e8;\
color: #333\
}\
.ace-dataworld .ace_print-margin {\
width: 1px;\
background: #e8e8e8\
}\
.ace-dataworld {\
background-color: #FFFFFF;\
color: #000000\
}\
.ace-dataworld .ace_cursor {\
color: #000000\
}\
.ace-dataworld .ace_marker-layer .ace_selection {\
background: #B5D5FF\
}\
.ace-dataworld.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #FFFFFF;\
}\
.ace-dataworld .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174)\
}\
.ace-dataworld .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #BFBFBF\
}\
.ace-dataworld .ace_marker-layer .ace_active-line {\
background: rgba(0, 0, 0, 0.071)\
}\
.ace-dataworld .ace_gutter-active-line {\
background-color: rgba(0, 0, 0, 0.071)\
}\
.ace-dataworld .ace_marker-layer .ace_selected-word {\
border: 1px solid #B5D5FF\
}\
.ace-dataworld .ace_constant.ace_language,\
.ace-dataworld .ace_keyword,\
.ace-dataworld .ace_meta,\
.ace-dataworld .ace_variable.ace_language {\
color: #C800A4\
}\
.ace-dataworld .ace_invisible {\
color: #BFBFBF\
}\
.ace-dataworld .ace_constant.ace_character,\
.ace-dataworld .ace_constant.ace_other {\
color: #275A5E\
}\
.ace-dataworld .ace_constant.ace_numeric {\
color: #3A00DC\
}\
.ace-dataworld .ace_entity.ace_other.ace_attribute-name,\
.ace-dataworld .ace_support.ace_constant,\
.ace-dataworld .ace_support.ace_function {\
color: #450084\
}\
.ace-dataworld .ace_fold {\
background-color: #C800A4;\
border-color: #000000\
}\
.ace-dataworld .ace_entity.ace_name.ace_tag,\
.ace-dataworld .ace_support.ace_class,\
.ace-dataworld .ace_support.ace_type {\
color: #790EAD\
}\
.ace-dataworld .ace_storage {\
color: #C900A4\
}\
.ace-dataworld .ace_string {\
color: #DF0002\
}\
.ace-dataworld .ace_comment {\
color: #839083\
}\
.ace-dataworld .ace_variable{\
color: green\
}\
.ace-dataworld .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==) right repeat-y\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
