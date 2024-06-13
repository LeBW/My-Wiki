(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{562:function(t,a,r){"use strict";r.r(a);var _=r(45),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"微服务架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构"}},[t._v("#")]),t._v(" 微服务架构")]),t._v(" "),r("p",[t._v("微服务是一种分布式系统解决方案，推动细粒度服务的使用，这些服务协同工作，且每个服务都有自己的生命周期。")]),t._v(" "),r("h2",{attrs:{id:"什么是微服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是微服务"}},[t._v("#")]),t._v(" 什么是微服务")]),t._v(" "),r("p",[t._v("微服务就是一些协同工作的小而自治的服务。它强调的是 很小，专注于做好一件事。")]),t._v(" "),r("p",[t._v("内聚性是指将相关代码放在一起，在考虑使用微服务的时候，内聚性这一概念很重要。")]),t._v(" "),r("p",[t._v("Robert C. Martin 有一个对 单一职责原则 的论述：“把因相同原因而变化的东西聚合在一起，而把不同原因而变化的东西分离开来。”该论述很好地强调了内聚性这一概念。")]),t._v(" "),r("p",[t._v("微服务将这个理念应用到独立的服务上。根据业务边界来确定服务边界，这样就很容易确定某个功能代码应该放在哪里。而且由于该服务专注于某个边界以内，因此可以很好地避免由于代码库过大衍生出的很多相关问题。")]),t._v(" "),r("h2",{attrs:{id:"使用微服务的好处"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用微服务的好处"}},[t._v("#")]),t._v(" 使用微服务的好处")]),t._v(" "),r("p",[t._v("微服务有很多不同好处，其中很多好处也适用于任何一个分布式系统。但相对于分布式系统或者面向服务架构而言，微服务要略胜一筹，他会把这些好处推到极致。")]),t._v(" "),r("h3",{attrs:{id:"_1-技术异构性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-技术异构性"}},[t._v("#")]),t._v(" 1. 技术异构性")]),t._v(" "),r("p",[t._v("可以在不同的服务中使用最适合该服务的技术。")]),t._v(" "),r("h3",{attrs:{id:"_2-弹性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-弹性"}},[t._v("#")]),t._v(" 2. 弹性")]),t._v(" "),r("p",[t._v("弹性工程系的关键概念是 舱壁。如果系统中的一个组件不可用了，但并没有导致级联故障，那么系统的其他组件还可以正常运行。服务边界就是一个很显然的舱壁。对于单体应用，如果服务不可用，那么所有功能都不可用。虽然我们可以通过将同样的实例运行在不同的机器上来降低功能完全不可用的概率，微服务系统本很就能很好地处理服务不可用和功能降级的问题。")]),t._v(" "),r("h3",{attrs:{id:"_3-扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-扩展"}},[t._v("#")]),t._v(" 3. 扩展")]),t._v(" "),r("p",[t._v("单体应用只能作为一个整体进行扩展。即使系统中只用一小部分存在性能问题，也需要对整个服务进行扩展。而对于微服务架构，我们可以只对需要扩展的服务进行扩展。")]),t._v(" "),r("h3",{attrs:{id:"_4-简化部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-简化部署"}},[t._v("#")]),t._v(" 4. 简化部署")]),t._v(" "),r("p",[t._v("在几百万行的单体应用中，即使修改了一行代码，也要对整个应用进行重新部署才能发布该变更。这种部署的影响很大，风险很高，因此相关人员不敢轻易做部署。在微服务架构中，各个服务的部署是独立的，这样可以更快地对特定部分的代码进行部署。如果真的出了问题，也只会影响一个服务，并且容易快速回滚。")]),t._v(" "),r("h3",{attrs:{id:"_5-与组织结构相匹配"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-与组织结构相匹配"}},[t._v("#")]),t._v(" 5. 与组织结构相匹配")]),t._v(" "),r("p",[t._v("微服务架构可以很好地将架构与组织结构相匹配，避免出现过大的代码库，从而获得理想的团队大小和生产力。")]),t._v(" "),r("h3",{attrs:{id:"_6-可组合型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-可组合型"}},[t._v("#")]),t._v(" 6. 可组合型")]),t._v(" "),r("p",[t._v("分布式系统和面向服务架构声称的主要好处是易于重用已有功能。而在微服务架构中，根据不同的目的，人们可以通过不同的方式使用同一个功能。在现代社会中，我们需要考虑的应用程序种类繁多，包括Web，原生应用，移动端Web，平板应用，可穿戴设备等，针对每一种应用场景我们都可以考虑如何对已有功能进行组合来实现这些应用。")]),t._v(" "),r("p",[t._v("在微服务架构中，系统会开放很多接口供外部使用，所以我们可以使用不同的方式。组合不同的API构建应用；而相对而言，单体应用程序只能提供一个非常粗粒度的接口供外部使用。")]),t._v(" "),r("h3",{attrs:{id:"_7-对可替代性的优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-对可替代性的优化"}},[t._v("#")]),t._v(" 7. 对可替代性的优化")]),t._v(" "),r("p",[t._v("对于大众性组织而言，很可能存在庞大而丑陋的遗留系统。这些系统无人敢碰，却对公司的运营至关重要。这些系统之所以没有被取代的原因很简单：工作量很大，并且风险很高。")]),t._v(" "),r("p",[t._v("当使用微服务架构时，重新实现某一个服务或者是删除该服务都是相对可操作的。使用微服务架构的团队可以在需要时轻易重写服务，或者删除不再使用的服务。。")]),t._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),r("p",[t._v("《微服务设计》 Sam Newman著，崔力强 张骏 译，2016")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://martinfowler.com/articles/microservices.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microservices"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);