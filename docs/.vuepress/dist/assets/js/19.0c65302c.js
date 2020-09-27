(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{210:function(s,t,a){"use strict";a.r(t);var e=a(0),l=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" Mysql")]),s._v(" "),a("h2",{attrs:{id:"mysql和sqlite区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql和sqlite区别","aria-hidden":"true"}},[s._v("#")]),s._v(" Mysql和SQLite区别")]),s._v(" "),a("ul",[a("li",[s._v("SQLITE功能简约，小型化，追求最大磁盘效率")]),s._v(" "),a("li",[s._v("MYSQL功能全面，综合化，追求最大并发效率。\n如果只是单机上用的，数据量不是很大，需要方便移植或者需要频繁读/写磁盘文件的话，就用SQLite比较合适；如果是要满足多用户同时访问，或者是网站访问量比较大是使用MYSQL比较合适。")])]),s._v(" "),a("h2",{attrs:{id:"mysql-远程访问问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-远程访问问题","aria-hidden":"true"}},[s._v("#")]),s._v(" Mysql 远程访问问题")]),s._v(" "),a("ol",[a("li",[s._v("设置 "),a("code",[s._v("bind_address")]),s._v("。")])]),s._v(" "),a("p",[s._v("首先要确保 "),a("code",[s._v("[mysqld]")]),s._v("中"),a("code",[s._v("bind_address")]),s._v(" 参数设置为 "),a("code",[s._v("0.0.0.0")]),s._v("（或者直接注释掉这一行）。")]),s._v(" "),a("p",[s._v("在 Ubuntu 16.04 + Mysql 5.7 搭配中，该参数的配置位于 "),a("code",[s._v("/etc/mysql/mysql.conf.d/mysqld.cnf")]),s._v("中。")]),s._v(" "),a("p",[s._v("检查这一步做好的方法就是通过 "),a("code",[s._v("netstat -tunlp | grep mysql")]),s._v(" 的方式来确认 "),a("code",[s._v("mysqld")]),s._v(" 进程绑定的地址是 "),a("code",[s._v("0.0.0.0")]),s._v(" 而不是 "),a("code",[s._v("127.0.0.1")]),s._v("。")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("设置用户权限。")])]),s._v(" "),a("p",[s._v("首先我们可以查看当前数据库中用户在不同IP地址下的访问情况。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> use mysql;\nDatabase changed\nmysql> select host, user from user;\n+-----------+------------------+\n| host      | user             |\n+-----------+------------------+\n| localhost | debian-sys-maint |\n| localhost | mysql.session    |\n| localhost | mysql.sys        |\n| localhost | root             |\n+-----------+------------------+\n")])])]),a("p",[s._v("以上信息说明，对于 root 用户，现在只能在 localhost 下访问。")]),s._v(" "),a("p",[s._v("现在假设我们要对 root 用户赋予所有所有IP下的访问权限，则可以在 Mysql 中运行以下命令")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password';\n")])])]),a("p",[s._v("接下来我们再通过以上命令查看用户的访问情况")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> select host,user from user;\n+-----------+------------------+\n| host      | user             |\n+-----------+------------------+\n| %         | root             |\n| localhost | debian-sys-maint |\n| localhost | mysql.session    |\n| localhost | mysql.sys        |\n| localhost | root             |\n+-----------+------------------+\n")])])]),a("p",[s._v("证明 root 用户 已经可以在外部所有IP下进行访问了。")])])},[],!1,null,null,null);t.default=l.exports}}]);