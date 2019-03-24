(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/novaLogo.362d7fee.png"},19:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(14),l=a.n(r),i=(a(25),a(3)),c=a(4),o=a(6),m=a(5),u=a(7),h=a(36),d=a(34),E=a(33),p=a(17),g=Object(p.a)(),b=(a(26),a(10)),f=a.n(b),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).redirectPhishing=function(){a.props.history.push("/phishingStats")},a.redirectUSB=function(){a.props.history.push("/usbStats")},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"welcomeText"},s.a.createElement("strong",null,s.a.createElement("i",null,"Villanova Cyber Security Project"))),s.a.createElement("br",null),s.a.createElement("div",{className:"centerImage"},s.a.createElement("img",{className:"novaLogo",alt:"Nova Logo",src:f.a})),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("p",{className:"homePageText"},"Welcome to Villanova Universitys Cyber Security Test.  This is a test conducted by John Persichilli, Kevin Calhoun, Jared Rymsza, and Matt O'Connell designed to compare the students at Villanova's knowledge of cyber saftey to that of the general population.",s.a.createElement("br",null),"Please refrain from plugging any device that is not yours into your computer or submitting usernames on passwords on unsecure websites. ",s.a.createElement("br",null),'Click on the "View Phishig Stats" button to view the success rate of the phishing scam. ',s.a.createElement("br",null),'Click on the "View USB Stats" button to view the success rate of the USB attacks.',s.a.createElement("br",null))),s.a.createElement("div",{className:"mainPageButtons"},s.a.createElement("button",{className:"mainOptionButton",onClick:function(){return e.redirectPhishing()}},"View Phishing Stats"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{className:"mainOptionButton",onClick:function(){return e.redirectUSB()}},"View USB Stats"),s.a.createElement("br",null),s.a.createElement("br",null)),s.a.createElement("div",null,s.a.createElement("p",null,"*Disclaimer: No personal information is stored during this survey.")))}}]),t}(n.Component),N=a(35),w=(a(27),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).redirectPhishing=function(){a.props.history.push("/phishingStats")},a.redirectUSB=function(){a.props.history.push("/usbStats")},a.redirectHome=function(){a.props.history.push("/")},a.state={settingOpen:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-expand-lg"},s.a.createElement("img",{className:"navbarLogo novaIcon",src:f.a,alt:"novaNavbarLogo",onClick:function(){return e.redirectHome()}}),s.a.createElement("div",{className:"homeButtons"},s.a.createElement("button",{className:"navbarButtons",onClick:function(){return e.redirectHome()}},"Home"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{className:"navbarButtons",onClick:function(){return e.redirectPhishing()}},"View Phishing Stats"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{className:"navbarButtons",onClick:function(){return e.redirectUSB()}},"View USB Stats"),s.a.createElement("br",null),s.a.createElement("br",null))))}}]),t}(n.Component)),y=Object(N.a)(w),S=(a(31),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this))).redirectPhishing=function(){a.props.history.push("/phishingStats")},a.redirectUSB=function(){a.props.history.push("/usbStats")},a.getNumViews=function(){fetch("/usbStats",{method:"GET"}).then(function(e){return console.log(e),e.json()}).then(function(e){console.log(e),a.setState({pageViews:e.views})})},a.updateNumViews=function(){var e=JSON.stringify({views:a.state.pageViews});console.log("Input data:"+e);fetch("/usbStats",{method:"POST",headers:new Headers,body:JSON.stringify({views:a.state.pageViews})}).then(function(e){e.json()})},a.componentDidMount=function(){a.getNumViews(),a.updateNumViews(),console.log("Page Views:"+a.state.pageViews)},a.state={pageViews:0,numberOfDrives:52},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(y,null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"welcomeText"},s.a.createElement("strong",null,s.a.createElement("i",null,"USB Stats"))),s.a.createElement("br",null),s.a.createElement("div",{className:"centerImage"},s.a.createElement("img",{className:"novaLogo",alt:"Nova Logo",src:f.a})),s.a.createElement("div",null,s.a.createElement("p",{className:"homePageText"},"You have failed Villanova Universitys Cyber Security Test.  This is a test conducted by John Persichilli, Kevin Calhoun, Jared Rymsza, and Matt O'Connell designed to compare the students at Villanova's knowledge of cyber saftey to that of the general population.",s.a.createElement("br",null),"Please refrain from plugging any device that is not yours into your computer such as the flash drive you previously found.  Below are the statistics for the USB attack.")),s.a.createElement("table",{className:"formatStatsTable"},s.a.createElement("tbody",null,s.a.createElement("tr",{className:"headerCol"},s.a.createElement("th",{className:"listHeadings col1Width"}),s.a.createElement("th",{className:"listHeadings col2Width"},"Number of Students")),s.a.createElement("tr",{key:"1",className:"formatStatsRow"},s.a.createElement("td",{className:"listNames"},"USB Drives Plugged in and ran:"),s.a.createElement("td",{className:"listOther"},this.state.pageViews)),s.a.createElement("tr",{key:"2",className:"formatStatsRow"},s.a.createElement("td",{className:"listNames"},"USB Drives Left Out:"),s.a.createElement("td",{className:"listOther"},this.state.numberOfDrives)),s.a.createElement("tr",{key:"3",className:"formatStatsRow"},s.a.createElement("td",{className:"listNames"},"Percent:"),s.a.createElement("td",{className:"listOther"},(this.state.pageViews/this.state.numberOfDrives*100).toFixed(2),"%")))),s.a.createElement("br",null),s.a.createElement("div",{className:"seperatePar"},s.a.createElement("p",null,"*Disclaimer: No personal information is stored during this survey."))))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this))).redirectPhishing=function(){a.props.history.push("/phishingStats")},a.redirectUSB=function(){a.props.history.push("/usbStats")},a.state={pageViews:0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(y,null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"welcomeText"},s.a.createElement("strong",null,s.a.createElement("i",null,"Phishing Stats"))),s.a.createElement("br",null),s.a.createElement("div",{className:"centerImage"},s.a.createElement("img",{className:"novaLogo",alt:"Nova Logo",src:f.a})),s.a.createElement("br",null),s.a.createElement("table",{className:"formatStatsTable"},s.a.createElement("tbody",null,s.a.createElement("tr",{className:"headerCol"},s.a.createElement("th",{className:"listHeadings col1Width"}),s.a.createElement("th",{className:"listHeadings col2Width"},"Number of Students")),s.a.createElement("tr",{key:"1",className:"formatStatsRow"},s.a.createElement("td",{className:"listNames"},"Phising Emails sent out:"),s.a.createElement("td",{className:"listOther"},"52")),s.a.createElement("tr",{key:"4",className:"formatStatsRow"},s.a.createElement("td",{className:"listNames"},"Phishing Emails Opened:"),s.a.createElement("td",{className:"listOther"},"54")),s.a.createElement("tr",{key:"2",className:"formatStatsRow"},s.a.createElement("td",{className:"listNames"},"Phishing Emails Submitted Data:"),s.a.createElement("td",{className:"listOther"},"54")),s.a.createElement("tr",{key:"3",className:"formatStatsRow"},s.a.createElement("td",{className:"listNames"},"Percent:"),s.a.createElement("td",{className:"listOther"},"35%")))),s.a.createElement("br",null),s.a.createElement("div",{className:"seperatePar"},s.a.createElement("p",null,"*Disclaimer: No personal information is stored during this survey."))))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this))).redirectPhishing=function(){a.props.history.push("/phishingStats")},a.redirectUSB=function(){a.props.history.push("/usbStats")},a.getNumViews=function(){fetch("/usbStats",{method:"GET"}).then(function(e){return console.log(e),e.json()}).then(function(e){console.log(e),a.setState({pageViews:e.views})})},a.resetViews=function(){a.setState({reset:!0});var e=JSON.stringify({views:a.state.pageViews});console.log("Input data:"+e);fetch("/usbStats",{method:"DELETE",headers:new Headers,body:JSON.stringify({views:a.state.pageViews})}).then(function(e){e.json()})},a.componentDidMount=function(){a.getNumViews(),console.log("Page Views:"+a.state.pageViews)},a.printResetMessage=function(){if(1==a.state.reset)return s.a.createElement("div",null,s.a.createElement("p",{className:"homePageText"},"Successfully reset the number of views from ",a.state.pageViews," to 0."))},a.state={pageViews:0,reset:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(y,null),s.a.createElement("div",{className:"container"},s.a.createElement("br",null),s.a.createElement("div",{className:"mainPageButtons"},s.a.createElement("button",{className:"mainOptionButton",onClick:function(){return e.resetViews()}},"Reset Number of Views"),s.a.createElement("br",null),s.a.createElement("br",null)),this.printResetMessage(),s.a.createElement("div",{className:"seperatePar"},s.a.createElement("p",null,"*Disclaimer: No personal information is stored during this survey."))))}}]),t}(n.Component),V=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,{history:g},s.a.createElement(d.a,null,s.a.createElement(E.a,{exact:!0,path:"/",component:v}),s.a.createElement(E.a,{exact:!0,path:"/USBStats",component:S}),s.a.createElement(E.a,{exact:!0,path:"/phishingStats",component:O}),s.a.createElement(E.a,{exact:!0,path:"/admin",component:j})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.6349545a.chunk.js.map