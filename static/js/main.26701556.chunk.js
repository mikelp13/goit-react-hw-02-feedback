(this.webpackJsonphw2=this.webpackJsonphw2||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n(6),i=n.n(s),r=n(4),o=n(2),l=n(7),j=n(8),b=n(11),u=n(10),d=n(9),h=n.n(d),O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsx)("button",{className:h.a.btn,type:"button",name:e,onClick:n,children:e},e)}))})},x=function(e){var t=e.message;return Object(c.jsx)("p",{children:t})},p=n(5),f=n.n(p),v=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{className:f.a.section,children:[Object(c.jsx)("h2",{className:f.a.title,children:t}),n]})},k=function(e){var t=e.good,n=e.neutral,a=e.bad,s=e.total,i=e.positivePercentage;return Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Good: ",Object(c.jsx)("span",{children:t})]}),Object(c.jsxs)("li",{children:["Neutral: ",Object(c.jsx)("span",{children:n})]}),Object(c.jsxs)("li",{children:["Bad: ",Object(c.jsx)("span",{children:a})]}),Object(c.jsxs)("li",{children:["Total: ",Object(c.jsx)("span",{children:s()})]}),Object(c.jsxs)("li",{children:["Positive feedback: ",Object(c.jsxs)("span",{children:[i(),"%"]})]})]})},g=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return t&&Math.round(t/n*100)},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,{title:"Please leave feedback",children:Object(c.jsx)(O,{options:Object.keys(this.state),onLeaveFeedback:this.handleFeedback})}),Object(c.jsx)(v,{title:"Statistic",children:this.countTotalFeedback()?Object(c.jsx)(k,Object(r.a)(Object(r.a)({},this.state),{},{total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage})):Object(c.jsx)(x,{message:"No feedback given"})})]})}}]),n}(a.Component);n(17);i.a.render(Object(c.jsx)(g,{}),document.querySelector("#root"))},5:function(e,t,n){e.exports={section:"Section_section__23czj",title:"Section_title__zS5gl"}},9:function(e,t,n){e.exports={btn:"FeedbackOptions_btn__1ylhT"}}},[[18,1,2]]]);
//# sourceMappingURL=main.26701556.chunk.js.map