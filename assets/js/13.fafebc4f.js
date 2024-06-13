(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{401:function(_,v,t){_.exports=t.p+"assets/img/tcp-head.9551c388.png"},402:function(_,v,t){_.exports=t.p+"assets/img/tcp-three-way.21884a0d.jpg"},403:function(_,v,t){_.exports=t.p+"assets/img/tcp-four-way.da6c9f48.jpg"},404:function(_,v,t){_.exports=t.p+"assets/img/tcp-congestion-control.670396d2.png"},512:function(_,v,t){"use strict";t.r(v);var e=t(45),s=Object(e.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"传输层-tcp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#传输层-tcp"}},[_._v("#")]),_._v(" 传输层（TCP）")]),_._v(" "),e("p",[_._v("传输层位于应用层和网络层中间，是分层网络体系结构中的重要部分。")]),_._v(" "),e("p",[_._v("传输层协议为运行在不同主机上的应用进程之间提供了"),e("strong",[_._v("逻辑通信")]),_._v("。从应用程序的角度来看，通过逻辑通信，运行不同进程的主机好像之间相连一样。应用进程使用传输层提供的逻辑通信功能彼此发送报文，而无需考虑这些报文的物理基础设施的细节。")]),_._v(" "),e("p",[_._v("因特网中的传输层协议主要有两种，TCP 和 UDP。其中：")]),_._v(" "),e("ul",[e("li",[_._v("UDP（User Data Protocol） 是不可靠，无连接的服务，适用于传输大量数据，可靠性要求高的场合。")]),_._v(" "),e("li",[_._v("TCP（Transmission Control Protocol）是可靠，面向连接的服务，适用于一次只传送少量数据，或者对可靠性要求不高的应用环境。")])]),_._v(" "),e("h3",{attrs:{id:"多路复用与多路分解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多路复用与多路分解"}},[_._v("#")]),_._v(" 多路复用与多路分解")]),_._v(" "),e("p",[_._v("一个主机里可以有很多个套接字（socket）。当主机接受到达的传输层报文段时，它需要将报文段定向到适当的套接字。为此目的，每个传输层报文段上具有几个字段。")]),_._v(" "),e("p",[_._v("在接收端，传输层检查这些字段，标志出接受套接字，进而将报文段定向到该套接字。将运输层报文段中的数据交付到正确的套接字的工作称为"),e("strong",[_._v("多路分解")]),_._v("（multiplexing）。")]),_._v(" "),e("p",[_._v("另一方面，源主机从不同套接字中收集数据块，并为每个数据块封装上首部信息（这将在以后用于分解）从而生成报文段，然后将报文段传递到网络层，这些工作被称为"),e("strong",[_._v("多路复用")]),_._v("（multiplexing）。")]),_._v(" "),e("p",[_._v("一个UDP套接字是由一个二元组进行标识的，该二元组包含一个"),e("strong",[_._v("目的IP地址")]),_._v("和一个"),e("strong",[_._v("目的端口号")]),_._v("。因此，如果两个UDP报文段有不同的源IP地址和/或端口号，但具有相同的目的IP地址和目的端口号，那么这两个报文段将通过相同的目的套接字被定向到相同的目的进程。")]),_._v(" "),e("h2",{attrs:{id:"tcp-报文段结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-报文段结构"}},[_._v("#")]),_._v(" TCP 报文段结构")]),_._v(" "),e("p",[_._v("TCP报文段的头部结构如下图所示\n"),e("img",{attrs:{src:t(401),alt:"tcp-head"}}),_._v("\n其中各字段含义如下")]),_._v(" "),e("p",[e("strong",[_._v("Source Port (16 bit)")]),_._v("：发送方的端口")]),_._v(" "),e("p",[e("strong",[_._v("Destination Port (16 bit)")]),_._v("：接收方的端口")]),_._v(" "),e("p",[e("strong",[_._v("Sequence Number (32 bit)")])]),_._v(" "),e("p",[_._v("当 SYN 设为1时，此报文段是初始报文段（三次握手中的前两次），此时 Sequence Number 表示的是初始序列号(此时该报文段内没有实际内容，回复方需要将"),e("code",[_._v("Acknowledge Number")]),_._v("设为"),e("code",[_._v("sequence number + 1")]),_._v("）。")]),_._v(" "),e("p",[_._v("当 SYN 设为0时，此报文段是数据报文段，此时 Sequence Number 表示的是该报文段数据中"),e("strong",[_._v("第一个字节")]),_._v("的序列号。")]),_._v(" "),e("p",[e("strong",[_._v("Acknowledge Number (32 bit)")])]),_._v(" "),e("p",[_._v("当 ACK 设为1时，表示 Acknowledge Number 字段是有意义的。此时该字段表示的是发送者已经收到了 "),e("code",[_._v("acknowledge number - 1")]),_._v("的所有数据，期待的下一个序列号就是 "),e("code",[_._v("akknowledge number")]),_._v("。")]),_._v(" "),e("p",[e("strong",[_._v("Data Offset (4 bit)")])]),_._v(" "),e("p",[_._v("表示TCP头部的大小（用 32-bit word 单位表示）。TCP头部的最小大小是5个word（20字节），最大是15个word（60字节），因此下面的 Options 最大是40字节。")]),_._v(" "),e("p",[e("strong",[_._v("Reserved (3 bit)")]),_._v("：保留字段，应置0")]),_._v(" "),e("p",[e("strong",[_._v("Flags (9 bit)")])]),_._v(" "),e("p",[_._v("此字段包含9个flag，分别如下：")]),_._v(" "),e("ul",[e("li",[_._v("NS: ECN-nonce，隐藏保护。")]),_._v(" "),e("li",[_._v("CWR: Congestion Window Reduced（CWR）置为1时，表示发送方已经收到过一个带有 ECE 位的 TCP报文段，并且已经回应了拥塞控制机制。")]),_._v(" "),e("li",[_._v("ECE：ECN-Echo 有两层含义：当 SYN 置为1时，将ECE置为1表示发送方支持ECN机制；当 SYN 不是1时，此字段表示网络拥塞的指示。")]),_._v(" "),e("li",[_._v("URG：置为1时，表示 Urgent pointer field 是有意义的。")]),_._v(" "),e("li",[_._v("ACK：表示 Acknowledge Number 是有意义的。除了三次握手中的第一次（也就是客户端发送的第一个请求）以外，其余所有TCP报文段应该将此位置为1.")]),_._v(" "),e("li",[_._v("PSH：置为1时，表示接收方应该立即将数据交给上层应用。")]),_._v(" "),e("li",[_._v("RST：置为1时，表示需要重置连接。")]),_._v(" "),e("li",[_._v("SYN：Synchronize sequence numbers。用于建立TCP连接，只有终端发送的第一个TCP数据包（也就是三次握手中的前两次）需要将此位置为1.")]),_._v(" "),e("li",[_._v("FIN：用于结束TCP连接。某一端发送带有FIN位的报文段时，表明该端已经发送了所有的数据包，没有需要再发的报文段了。")])]),_._v(" "),e("p",[e("strong",[_._v("Window Size (16 bit)")])]),_._v(" "),e("p",[_._v("用来表示接收窗口的大小，表示发送方期望收到的数据大小（用于流量控制和窗口缩放）")]),_._v(" "),e("p",[e("strong",[_._v("Checksum (16bit)")]),_._v(": 用来校验数据段有没有出错。")]),_._v(" "),e("p",[e("strong",[_._v("Urgent Pointer (16 bit)")])]),_._v(" "),e("p",[_._v("当 URG 置为1时，表示紧急数据存在，此指针表示紧急数据的最后一个字节。当紧急数据存在并且给出指向紧急数据尾的指针时，TCP 必须通知接收端的上层应用。")]),_._v(" "),e("p",[e("strong",[_._v("Options")]),_._v("：暂略，详情见"),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Transmission_Control_Protocol",target:"_blank",rel:"noopener noreferrer"}},[_._v("维基百科"),e("OutboundLink")],1)]),_._v(" "),e("h2",{attrs:{id:"tcp-连接管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-连接管理"}},[_._v("#")]),_._v(" TCP 连接管理")]),_._v(" "),e("p",[_._v("TCP 建立连接：三次握手。如下图所示\n"),e("img",{attrs:{src:t(402),alt:"tcp-three-way"}})]),_._v(" "),e("ul",[e("li",[_._v("第一步：客户端首先像服务器端发送一个特殊的 TCP 报文段，该报文段不包含应用层数据，首部的标志位SYN 置为1，因此这个特殊报文段被称为 SYN 报文段。客户端会在该报文段中随机加入一个初始序号（client_isn），并将其放在 Sequence Number 字段中。")]),_._v(" "),e("li",[_._v("第二步：当服务器收到客户端发送的第一条 SYN 报文段后，会向客户端发送允许连接的报文段。该报文段中也不包含应用层数据，其首部包含三个重要信息。首先，SYN比特被置为1.其次，该TCP报文段中首部的Acknowledge Number 被置为 "),e("code",[_._v("client_isn + 1")]),_._v("。最后，服务器选择子集的初始序列号 server_isn，并将其置于 Sequence Number 字段中。该报文段的含义可以理解为：我收到了你发起建立连接的 SYN 分组，该分组带有初始序号 client_isn。我同意建立该连接，我自己的初始序号是 server_isn。该允许连接的报文段有时被称为 SYNACK 报文段。")]),_._v(" "),e("li",[_._v("第三步：客户端在收到 SYNACK 报文段后，再次向主机发送报文段，这最后一个报文段对服务器允许连接的报文段进行了确认，将首部中的 Acknowledge Number 置为 "),e("code",[_._v("server_isn + 1")]),_._v("。此时因为连接已经建立了，所以该报文段中的 SYN 比特被置为0。这个报文段中是可以携带数据的。")])]),_._v(" "),e("p",[_._v("整个过程中对应的 TCP 状态如下：")]),_._v(" "),e("ul",[e("li",[_._v("CLOSED：初始状态，表示TCP连接是”关闭着的”或”未打开的”")]),_._v(" "),e("li",[_._v("LISTEN：表示服务器端的某个SOCKET处于监听状态，可以接受客户端的连接")]),_._v(" "),e("li",[_._v("SYN_RCVD：表示服务器接收到了来自客户端请求连接的SYN报文。这个状态是在服务端的，但是它是一个中间状态，很短暂，平常我们用netstat或ss的时候，不太容易看到这种状态，但是遇到SYN flood之类的SYN攻击时，会出现大量的这种状态，即收不到三次握手最后一个客户端发来的ACK，所以一直是这个状态，不会转换到ESTABLISHED")]),_._v(" "),e("li",[_._v("SYN_SENT：这个状态与 SYN_RCVD 状态相呼应，它是 TCP 连接客户端的状态，当客户端 SOCKET 执行connect()进行连接时，它首先发送 SYN 报文，然后随即进入到 SYN_SENT 状态，并等待服务端的SYN和ACK，该状态表示客户端的SYN已发送")]),_._v(" "),e("li",[_._v("ESTABLISHED：表示TCP连接已经成功建立，开始传输数据")])]),_._v(" "),e("p",[_._v("以上就是三次握手的五种 TCP 状态，单从客户端服务端角度来区分的话，CLOSED 和 ESTABLISHED 会在客户端和服务端都出现，而 LISTEN 和 SYN_RCVD 通常是出现在服务端，SYN_SENT 出现在客户端。但通常在服务器和客户端并不是绝对的，比如 Nginx 的服务器中，Nginx 通常作为 web 代理服务器，它既是服务端，也是客户端，所以在查询统计 TCP 状态的时候，最好通过匹配端口来区分是客户端的还是服务端的，来更精确的定位问题。")]),_._v(" "),e("p",[_._v("TCP 终止连接：四次挥手。如下图所示\n"),e("img",{attrs:{src:t(403),alt:"tcp-four-way"}})]),_._v(" "),e("p",[_._v("参与一条TCP的两个进程中的任何一个都能终止 TCP 连接。当连接结束后，主机中的“资源”（即缓存和变量）将被释放。例如，客户打算关闭连接：")]),_._v(" "),e("ul",[e("li",[_._v("客户TCP向服务器进程发送一个特殊的 TCP 报文段。该报文段的标志位 FIN 被设为1（表示客户端该发的数据都发完了）.")]),_._v(" "),e("li",[_._v("服务器收到该报文段后，会像客户端发送一个确认报文段，表示已经接收到所有数据。")]),_._v(" "),e("li",[_._v("然后，服务器发送它自己的终止报文段，其 FIN 比特被置为1（表示服务器该发的数据都发送完了）")]),_._v(" "),e("li",[_._v("最后，客户对服务器的终止报文段进行确认。\n此时客户端会进入 TIME_WAIT 阶段。假定确认报文段丢失，TIME_WAIT 状态使 TCP 客户重传最后的确认报文（TIME_WAIT 状态典型时间是 30s，1min 或者 2min）。经过等待后，连接正式关闭，客户端所有资源将被释放。")])]),_._v(" "),e("p",[_._v("整个过程中对应的 TCP 状态如下：")]),_._v(" "),e("ul",[e("li",[_._v("FIN_WAIT_1：这个状态在实际工作中很少能看到，当客户端想要主动关闭连接时，它会向服务端发送 FIN 报文，此时 TCP 状态就进入到 FIN_WAIT_1 的状态，而当服务端 ACK，确认关闭后，则客户端进入到 FIN_WAIT_2 的状态，也就是只有在没有收到服务端 ACK 的情况下，FIN_WAIT_1状态才能看到。然而长时间收不到 ACK，通常会在默认超时时间 60s(由内核参数 tcp_fin_timeout 控制)后，直接进入 CLOSED 状态")]),_._v(" "),e("li",[_._v("FIN_WAIT_2：这个状态相比较常见，也是需要注意的一个状态，FIN_WAIT_1 在接收到服务端 ACK 之后就进入到 FIN_WAIT_2 的状态，然后等待服务端发送 FIN，所以在收到对端 FIN 之前，TCP 都会处于FIN_WAIT_2 的状态，也就是，在主动断开的一端发现大量的 FIN_WAIT_2 状态时，需要注意，可能是网络不稳定或程序中忘记调用连接关闭，FIN_WAIT_2 也有超时时间，也是由内核参数 tcp_fin_timeout 控制，当FIN_WAIT_2状态超时后，连接直接销毁")]),_._v(" "),e("li",[_._v("CLOSE_WAIT：表示正在等待关闭，该状态只在被动端出现，即当主动断开的一端调用 "),e("code",[_._v("close()")]),_._v(" 后发送FIN报文给被动端，被动端必然会回应一个 ACK(这是由 TCP 协议层决定的)，这个时候，TCP 连接状态就进入到 CLOSE_WAIT")]),_._v(" "),e("li",[_._v("LAST_ACK：当被动关闭的一方在发送 FIN 报文后，等待对方的 ACK 报文的时候，就处于 LAST_ACK 的状态，当收到对方的 ACK 之后，就进入到 CLOSED 状态了\nTIME_WAIT：该状态是最常见的状态，主动方在收到对方FIN后，就由FIN_WAIT_2状态进入到TIME_WAIT状态")]),_._v(" "),e("li",[_._v("CLOSING：这个状态是一个比较特殊的状态，也比较少见，正常情况下不会出现，但是当双方同时都作为主动的一方，调用 close() 关闭连接的时候，两边都进入FIN_WAIT_1 的状态，此时期望收到的是ACK包，进入 FIN_WAIT_2 的状态，但是却先收到了对方的FIN包，这个时候，就会进入到 CLOSING 的状态，然后给对方一个ACK，接收到 ACK 后直接进入到 CLOSED 状态。")])]),_._v(" "),e("h2",{attrs:{id:"tcp的流量控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp的流量控制"}},[_._v("#")]),_._v(" TCP的流量控制")]),_._v(" "),e("p",[_._v("一条TCP连接的每一侧主机都为该连接设置了接收缓存。当该TCP连接收到正确、按序的字节后，它就将数据放入接收缓存。相关联的应用程序会从该缓存中读取数据，但不一定是数据刚一到达就立即读取。所以如果某一应用程序读取数据相对较慢，而发送方发送得太多太快，发送的数据就很容易使该连接的接收缓存溢出。")]),_._v(" "),e("p",[_._v("为了消除发送方使接收方缓存溢出的可能性，TCP 为它的应用程序提供了流量控制服务（flow-control service）。")]),_._v(" "),e("blockquote",[e("p",[_._v("注意，这里需要与下面的拥塞控制区分开来，拥塞控制指的是TCP发送方因为IP网络的拥塞而被遏制。")])]),_._v(" "),e("p",[_._v("TCP 通过让发送方维护一个称为接收窗口（receive window）的变量来提供流量控制。接收窗口用于给发送方一个指示——该接收方还有多少可用的缓存空间。因为 TCP 是全双工通信，再连接两端的发送方都各自维护一个接受窗口。（也就是前面提到的 TCP头部字段中的 Window Size 字段）。")]),_._v(" "),e("h2",{attrs:{id:"tcp的拥塞控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp的拥塞控制"}},[_._v("#")]),_._v(" TCP的拥塞控制")]),_._v(" "),e("p",[_._v("上面也提到过，拥塞控制指的是TCP发送方因为IP网络的拥塞而被遏制发送速率。我们把拥塞窗口用 cwnd 进行表示，而前面提到的流量控制中的接受窗口用 rwnd 进行表示。由于需要考虑拥塞控制和流量控制两个方面，因此 TCP 真正的发送窗口是 min(cwnd, rwnd).")]),_._v(" "),e("p",[_._v("TCP 使用如下指导性原则来进行拥塞控制：")]),_._v(" "),e("ol",[e("li",[_._v("一个丢失的报文段意味着拥塞，因此当丢失报文段时应该降低发送方的速率。")]),_._v(" "),e("li",[_._v("一个确认报文段指示该网络正在向接收方交付发送方的报文段，因此，当对先前未确认报文段的确认到达时，能够增加发送方的速率。")]),_._v(" "),e("li",[_._v("带宽探测。TCP发送方的行为类似于要求越来越多糖果的孩子，直到最后告诉它“不行”，孩子就会后退一点，然后过一会儿再次提出请求。注意在网络中没有明显的拥塞状态信息，因此确认报文和丢包事件充当了隐式信号。")])]),_._v(" "),e("p",[_._v("TCP的拥塞控制算法主要包括三个部分：慢启动、拥塞避免、快速恢复。其流程大致如下图所示：\n"),e("img",{attrs:{src:t(404),alt:"tcp-congestion-control"}})]),_._v(" "),e("h3",{attrs:{id:"慢启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#慢启动"}},[_._v("#")]),_._v(" 慢启动")]),_._v(" "),e("p",[_._v("当 TCP 连接开始时，首先进入慢启动状态。此时拥塞窗口（Congestion window，简称 cwnd）的值通常初始化为1个 MSS（Maximum Segment Size，即指 TCP 层所能接受的最大报文长度，注意这里只包括数据部分，不包括选项部分），并且每当传输的报文段首次被确认，就将  cwnd 再增加一个 MSS。")]),_._v(" "),e("p",[_._v("在这个阶段，cwnd 其实是以指数级增长的。举个例子，TCP 向网络发送第一个报文段并等待一个确认。当该确认到达时，TCP 发送方将拥塞窗口增加一个MSS，并发送出两个最大长度的报文段。这两个报文段被确认后，则发送方对每个确认报文段将拥塞窗口增加一个MSS，这也使得拥塞窗口变为四个MSS，并这样下去，每过一个RTT，发送速率就翻倍。因此，TCP发送速率起始慢，但是在慢启动阶段以指数级增长。")]),_._v(" "),e("p",[_._v("那么何时结束这种指数增长呢？慢启动对这个问题提供了3种答案。")]),_._v(" "),e("ol",[e("li",[_._v("如果发生一个由超时指示的丢包时间（即拥塞），TCP 发送方将 cwnd 设置为 1 并重新开始慢启动过程。此时它还会将 ssthresh（慢启动的阈值）设置为当前 cwnd 的一半。")]),_._v(" "),e("li",[_._v("慢启动结束的第二种方式时直接与 ssthresh 相关联。当 cwnd 到达或超过 ssthresh 时，将结束慢启动状态，并进入 拥塞避免 阶段。")]),_._v(" "),e("li",[_._v("如果检测到3个冗余的ACK（此时 TCP 认为丢包的可能性较大。之所以说是较大，是因为乱序也有可能导致冗余ACK），这时 TCP 会执行 快速重传并进入快速恢复阶段，后面将详细讨论。")])]),_._v(" "),e("h3",{attrs:{id:"拥塞避免"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拥塞避免"}},[_._v("#")]),_._v(" 拥塞避免")]),_._v(" "),e("p",[_._v("上面也提到过，拥塞控制指的是TCP发送方因为IP网络的拥塞而被遏制发送速率。我们把拥塞窗口用 cwnd 进行表示，而前面提到的流量控制中的接受窗口用 rwnd 进行表示。由于需要考虑拥塞控制和流量控制两个方面，因此 TCP 真正的发送窗口是 min(cwnd, rwnd).")]),_._v(" "),e("p",[_._v("进入拥塞避免阶段时，cwnd 的值大约是上次遇到拥塞时的一半，这也说明距离拥塞可能并不遥远了。因此，这时 TCP 无法每过一个 RTT 再将 cwnd 的值翻番，而是采用了一种较为保守的方法，每个 RTT 只将 cwnd 的值增加一个 MSS。\n这种情况下，cwnd 以线性速度进行增长。")]),_._v(" "),e("p",[_._v("那么何时应当结束拥塞避免的线性增长（每 RTT 1MSS）呢？这里有两种情况：")]),_._v(" "),e("ol",[e("li",[_._v("当出现超时时，TCP 的拥塞避免算法行为 与慢启动时 相同，将 ssthread 设为 cwnd 的一半，然后将 cwnd 设为1个MSS，重新开始慢启动过程。")]),_._v(" "),e("li",[_._v("当检测到3个冗余的 ACK（此时 TCP 认为出现丢包的可能性较大），TCP 会立即重传丢失的报文段TCP（也称为 快速重传），然后将 ssthread 设为当前 cwnd 的一半，然后将 cwnd 设置为此时的 ssthresh（或者ssthresh + 3MSS），接下来进入快速恢复状态。（具体会在下面讲）")])]),_._v(" "),e("h3",{attrs:{id:"快速重传与快速恢复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速重传与快速恢复"}},[_._v("#")]),_._v(" 快速重传与快速恢复")]),_._v(" "),e("p",[_._v("首先，如上面所说，当检测到3个冗余的 ACK（此时 TCP 认为出现丢包的可能性较大），TCP 会立即重传丢失的报文段TCP（这就被称为 快速重传）。")]),_._v(" "),e("p",[_._v("快速恢复算法一般与快速重传同时使用。快速恢复算法是认为，你还有3个 Duplicated Acks，说明网络也不那么糟糕，所以没有必要像超时那么反应强烈，并不需要重新回到慢启动进行，这样可能降低效率。")]),_._v(" "),e("p",[_._v("所以会做如下工作：")]),_._v(" "),e("ol",[e("li",[_._v("ssthresh = cwnd / 2. （即 ssthresh 设为当前 cwnd 的一半）。")]),_._v(" "),e("li",[_._v("cwnd = ssthresh （或 ssthresh + 3MSS）。")])]),_._v(" "),e("p",[_._v("然后启动快速恢复算法：对于引起 TCP 进入快速恢复状态的缺失报文段，对收到的每个冗余的 ACK，cwnd 的值增加一个MSS。")]),_._v(" "),e("p",[_._v("此时有两种结束快速恢复的情况：")]),_._v(" "),e("ol",[e("li",[_._v("当对丢失报文段的第一个 ACK 到达时，TCP 将 cwnd 降低至 ssthresh，然后进入拥塞避免状态。")]),_._v(" "),e("li",[_._v("当出现超时后，与上面执行相同的操作，将 ssthresh 设置为 cwnd 的一半，将 cwnd 设置为1，重新进入慢启动状态。")])]),_._v(" "),e("h2",{attrs:{id:"dns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[_._v("#")]),_._v(" DNS")]),_._v(" "),e("p",[_._v("DNS 同时占用 UDP 和 TCP 端口的 53，这种单个应用协议同时使用两种传输协议的情况在 TCP/IP 栈也算是个另类。下面看看 DNS 分别在什么情况使用这两种协议。")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("DNS 区域传输的时候使用 TCP 协议")]),_._v("。辅域名服务器会定时（一般3小时）向主域名服务器进行查询以便了解数据是否有变动。如有变动，会执行一次区域传送，进行数据同步。区域传送使用 TCP 而不是 UDP，因为数据同步传送的数据量比一个请求应答的数据量要多得多，而且 TCP 可以保证数据的可靠性。")]),_._v(" "),e("li",[e("strong",[_._v("域名解析时使用 UDP 协议")]),_._v("。客户端向 DNS 服务器查询域名，一般返回的内容都不超过 512 字节，用 UDP 传输即可。不用经过三次握手，这样 DNS 服务器负载更低，响应更快。理论上说，客户端也可以指定向 DNS 服务器查询时用TCP，但事实上，很多 DNS 服务器进行配置的时候，仅支持 UDP 查询包。")])]),_._v(" "),e("h2",{attrs:{id:"面试常问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试常问"}},[_._v("#")]),_._v(" 面试常问")]),_._v(" "),e("p",[_._v("Q: 为什么 TCP 在连接的时候是三次握手，关闭的时候却是四次挥手？")]),_._v(" "),e("p",[_._v("A：因为在连接时，Server端收到 SYN 连接请求报文后，可以直接发送 SYN+ACK 报文，一个报文段既起到确认上一个请求报文的作用，也起到请求发送数据的作用。但是在关闭时，当 Server端收到FIN报文后，很可能不会立即关闭发送通道（因为它可能有报文还没有发送完），因此只能先回复一个 ACK 报文，告诉 client “你发的 FIN 报文我收到了”。只有等 Server 端所有的报文都发送完了，才会接着发送 FIN 报文，因此不能一起发送，故需要四次挥手。")]),_._v(" "),e("p",[_._v("Q：为什么关闭连接时，在四次握手后，发起端还需要经历 TIME_WAIT 状态 才能真正关闭？")]),_._v(" "),e("p",[_._v("A：虽然在理想情况下，四个报文都发送完毕后，就可以直接进入 CLOSE 状态了。但是我们必须假定网络是不可靠的，有可能最后一个 ACK 报文丢失。所以 TIME_WAIT 状态就是用来重发可能丢失的 ACK 报文。在 Client 发送完 ACK 后，该 ACK 可能丢失。此时 Server 端没有收到 ACK，会不断重复发送 FIN 报文。所以 Client 必须有一个 TIME_WAIT 状态，例如 2MSL 的时间。如果在该时间内再次收到 FIN 报文，那么 Client 会重新发送 ACK 并再次等待 2MSL。（所谓的 MSL 就是指一个数据报文在网络中存活的最长时间。2MSL 就是一个发送和一个回复所需要的最长时间。如果直到 2MSL，客户端都没有再次收到 FIN，那么 Client 推断 ACK 已经被成功接收，于是可以 CLOSE 连接了。")])])}),[],!1,null,null,null);v.default=s.exports}}]);