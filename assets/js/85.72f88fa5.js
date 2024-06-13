(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{537:function(t,a,v){"use strict";v.r(a);var _=v(45),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"文件操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文件操作"}},[t._v("#")]),t._v(" 文件操作")]),t._v(" "),v("h2",{attrs:{id:"文件打开"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文件打开"}},[t._v("#")]),t._v(" 文件打开")]),t._v(" "),v("p",[v("code",[t._v("FILE *fp = fopen(const char *path, const char *mode);")])]),t._v(" "),v("ul",[v("li",[t._v("path: 文件路径")]),t._v(" "),v("li",[t._v("mode：文件打开方式\n"),v("ul",[v("li",[t._v("r: 文本文件，只读")]),t._v(" "),v("li",[t._v("r+: 文本文件，读+写")]),t._v(" "),v("li",[t._v("w: 文本文件，写（会清空所有内容）")]),t._v(" "),v("li",[t._v("w+：文本文件，读+写（会清空所有内容）")]),t._v(" "),v("li",[t._v("a: 文本文件，尾部添加内容。")]),t._v(" "),v("li",[t._v("a+: 文本文件，尾部添加内容+读。")]),t._v(" "),v("li",[t._v("所有模式可添加'b'，代表二进制形式读取文件。")])])])]),t._v(" "),v("h2",{attrs:{id:"文件读写"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文件读写"}},[t._v("#")]),t._v(" 文件读写")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("int fgetc(FILE *stream) 读取下一个字符，结尾时返回EOF")])]),t._v(" "),v("li",[v("code",[t._v("getchar() = getc(stdin)")])]),t._v(" "),v("li",[v("code",[t._v("char *fgets(char *s, int size, FILE *stream)")]),t._v(" "),v("ul",[v("li",[t._v("从stream中读取最多（size-1）个字符，并存入s中。读取过程会在以下两种情况后提前结束：\n"),v("ul",[v("li",[t._v("遇见EOF文件结尾")]),t._v(" "),v("li",[t._v("遇见换行符（换行符也会被读入）")])])]),t._v(" "),v("li",[t._v("然后会在s的下一位自动添加'\\0'作为字符串结束符。")])])]),t._v(" "),v("li",[v("code",[t._v("int fscanf(FILE *stream, const char *format, …)")]),t._v(" "),v("ul",[v("li",[t._v("与scanf类似，从stream中读取字符，直到遇到空格、回车等结束。")]),t._v(" "),v("li",[t._v("注意空格，回车等不会被读入，而是直接替换成'\\0'，代表字符串的结束。")])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);