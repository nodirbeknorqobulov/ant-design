"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5793],{235793:function(se,x,t){t.r(x);var R=t(805574),h=t.n(R),K=t(168400),M=t.n(K),P=t(667294),o=t(639389),ae=t.n(o),S=t(8824),Z=t(533130),N=t(739838),b=t(614137),d=t(106750),F=t(185209),Y=t(844183),g=t(933253),k=t(11739),J=t(181632),_=t(647759),z=t(693967),G=t.n(z),Q=t(727484),m=t.n(Q),X=t(49313),j=t(302559),L=t(438199),H=t(833494),e=t(785893),T,W,A,V=S.Z._InternalPanelDoNotUseOrYouWillBeFired,$=Z.Z._InternalPanelDoNotUseOrYouWillBeFired,w=N.Z._InternalPanelDoNotUseOrYouWillBeFired,C=b.Z._InternalPanelDoNotUseOrYouWillBeFired,q="Ant Design 5.0 use CSS-in-JS technology to provide dynamic & mix theme ability. And which use component level CSS-in-JS solution get your application a better performance.",ee="Ant Design 5.0 \u4F7F\u7528 CSS-in-JS \u6280\u672F\u4EE5\u63D0\u4F9B\u52A8\u6001\u4E0E\u6DF7\u5408\u4E3B\u9898\u7684\u80FD\u529B\u3002\u4E0E\u6B64\u540C\u65F6\uFF0C\u6211\u4EEC\u4F7F\u7528\u7EC4\u4EF6\u7EA7\u522B\u7684 CSS-in-JS \u89E3\u51B3\u65B9\u6848\uFF0C\u8BA9\u4F60\u7684\u5E94\u7528\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\u3002",B={cn:{yesterday:"\u6628\u5929",lastWeek:"\u4E0A\u5468",lastMonth:"\u4E0A\u6708",lastYear:"\u53BB\u5E74",new:"\u65B0\u589E",update:"\u66F4\u65B0",sampleContent:ee,inProgress:"\u8FDB\u884C\u4E2D",success:"\u6210\u529F",taskFailed:"\u4EFB\u52A1\u5931\u8D25",tour:"\u6F2B\u6E38\u5BFC\u89C8\u5E2E\u52A9\u7528\u6237\u5BF9\u65B0\u52A0\u7684\u529F\u80FD\u8FDB\u884C\u5FEB\u901F\u4E86\u89E3"},en:{yesterday:"Yesterday",lastWeek:"Last Week",lastMonth:"Last Month",lastYear:"Last Year",new:"New",update:"Update",sampleContent:q,inProgress:"In Progress",success:"Success",taskFailed:"Task Failed",tour:"A quick guide for new come user about how to use app."}},I=function(){var s=(0,X.Z)();return(0,_.kc)(function(v){var l=v.token,u=(0,H.EI)(),c=u.carousel;return{card:(0,_.iv)(T||(T=M()([`
        border-radius: `,`px;
        border: 1px solid `,`;
        background: `,`;
        padding: `,`px;
        flex: none;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        > * {
          flex: none;
        }
      `])),l.borderRadius,s?l.colorBorder:"transparent",s?l.colorBgContainer:"#f5f8ff",l.paddingXL),cardCircle:(0,_.iv)(W||(W=M()([`
        position: absolute;
        width: 120px;
        height: 120px;
        background: #1677ff;
        border-radius: 50%;
        filter: blur(40px);
        opacity: 0.1;
      `]))),mobileCard:(0,_.iv)(A||(A=M()([`
        height: 395px;
      `]))),carousel:c}})()},U=function(s){var v=s.title,l=s.node,u=s.type,c=s.index,n=u==="new"?"processing":"warning",y=(0,j.Z)(B),E=h()(y,1),O=E[0],a=u==="new"?O.new:O.update,i=I(),r=i.styles,D=(0,P.useContext)(L.Z),p=D.isMobile,ne=(0,_.Fg)();return(0,e.jsxs)("div",{className:G()(r.card,p&&r.mobileCard),children:[(0,e.jsx)("div",{className:r.cardCircle,style:{right:c%2*-20-20,bottom:c%3*-40-20}}),(0,e.jsxs)(d.Z,{align:"center",gap:"small",children:[(0,e.jsx)(F.Z.Title,{level:4,style:{fontWeight:"normal",margin:0},children:v}),(0,e.jsx)(Y.Z,{color:n,children:a})]}),(0,e.jsx)("div",{style:{marginTop:ne.paddingLG,flex:"auto",display:"flex",alignItems:"center",justifyContent:"center"},children:l})]})},te=function(){var s=(0,_.Fg)(),v=I(),l=v.styles,u=(0,j.Z)(B),c=h()(u,1),n=c[0],y=(0,P.useContext)(L.Z),E=y.isMobile,O=P.useMemo(function(){return[{title:"Modal",type:"update",node:(0,e.jsx)(V,{title:"Ant Design 5.0",width:300,children:n.sampleContent})},{title:"DatePicker",type:"update",node:(0,e.jsx)($,{value:m()("2022-11-18 14:00:00"),showToday:!1,presets:E?[]:[{label:n.yesterday,value:m()().add(-1,"d")},{label:n.lastWeek,value:m()().add(-7,"d")},{label:n.lastMonth,value:m()().add(-1,"month")},{label:n.lastYear,value:m()().add(-1,"year")}]})},{title:"Progress",type:"update",node:(0,e.jsxs)(d.Z,{gap:"small",vertical:!0,children:[(0,e.jsxs)(d.Z,{gap:"small",align:"center",children:[(0,e.jsx)(g.Z,{type:"circle",trailColor:"#e6f4ff",percent:60,size:14}),n.inProgress]}),(0,e.jsxs)(d.Z,{gap:"small",align:"center",children:[(0,e.jsx)(g.Z,{type:"circle",percent:100,size:14}),n.success]}),(0,e.jsxs)(d.Z,{gap:"small",align:"center",children:[(0,e.jsx)(g.Z,{type:"circle",status:"exception",percent:88,size:14}),n.taskFailed]})]})},{title:"Tour",type:"new",node:(0,e.jsx)(w,{title:"Ant Design 5.0",description:n.tour,style:{width:E?"auto":350},current:3,total:9})},{title:"FloatButton",type:"new",node:(0,e.jsxs)(d.Z,{align:"center",gap:"large",children:[(0,e.jsx)(C,{shape:"square",items:[{icon:(0,e.jsx)(o.QuestionCircleOutlined,{})},{icon:(0,e.jsx)(o.CustomerServiceOutlined,{})},{icon:(0,e.jsx)(o.SyncOutlined,{})}]}),(0,e.jsx)(C,{backTop:!0}),(0,e.jsx)(C,{items:[{icon:(0,e.jsx)(o.QuestionCircleOutlined,{})},{icon:(0,e.jsx)(o.CustomerServiceOutlined,{})},{icon:(0,e.jsx)(o.SyncOutlined,{})}]})]})},{title:"Alert",type:"update",node:(0,e.jsx)(k.Z,{style:{width:400},message:"Ant Design 5.0",description:n.sampleContent,closable:!0})}]},[E]);return E?(0,e.jsx)("div",{style:{margin:"0 16px"},children:(0,e.jsx)(J.Z,{className:l.carousel,children:O.map(function(a,i){var r=a.title,D=a.node,p=a.type;return(0,e.jsx)(U,{title:r,node:D,type:p,index:i},i)})})}):(0,e.jsx)("div",{style:{width:"100%",overflow:"hidden",display:"flex",justifyContent:"center"},children:(0,e.jsx)("div",{style:{display:"flex",alignItems:"stretch",columnGap:s.paddingLG},children:O.map(function(a,i){var r=a.title,D=a.node,p=a.type;return(0,e.jsx)(U,{title:r,node:D,type:p,index:i},i)})})})};x.default=te}}]);
