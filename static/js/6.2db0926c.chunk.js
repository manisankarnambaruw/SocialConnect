(this["webpackJsonpsocial-connections"]=this["webpackJsonpsocial-connections"]||[]).push([[6],{1672:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}n.r(t),n.d(t,"default",(function(){return k}));var c=n(0),r=n(1677),o=n(1679),i=n(2253),l=n(2250),u=n(1747),s=n(1748),d=n(85),b=n(1703),m=n(86),j=n(7),h=n(36),f=n(12),O=n(84),p=n(1750),g=n(1712),x=n(2);function v(){var e=Object(b.a)(),t=e.connections,n=e.relations,a=e.addRelation,i=e.relationTypes,h=e.deleteRelation,v=Object(j.i)().peopleId,y=Object(c.useState)([]),S=Object(O.a)(y,2),C=S[0],N=S[1],k=Object(c.useState)(!1),w=Object(O.a)(k,2),I=w[0],R=w[1],P=Object(c.useState)([]),F=Object(O.a)(P,2),q=F[0],A=F[1],T=Object(s.a)({initialValues:{peopleId:v,connectedPeopleId:"",relationType:""},onSubmit:function(e,t){Object(d.c)(e).then((function(c){n.some((function(t){return t.peopleId===Number(v)&&t.connectedPeopleId===Number(e.connectedPeopleId)}))||(a(Object(f.a)(Object(f.a)({},c),{},{peopleId:Number(v)})),t.setSubmitting(!1),m.b.success("Successfully Added"),t.resetForm(),R(!1))}))},validationSchema:u.c().shape({connectedPeopleId:u.b().required("Required"),relationType:u.d().required("Required")})});return Object(c.useEffect)((function(){N(n.reduce((function(e,n){var a=t.find((function(e){return e.id===n.connectedPeopleId&&n.peopleId===Number(v)||Number(v)===n.connectedPeopleId&&e.id===n.peopleId}));return a&&e.push(a),e}),[]))}),[t,v,n]),Object(c.useEffect)((function(){A([])}),[v,I]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(r.a,{attached:"top",children:Object(x.jsx)(r.a.Item,{header:!0,children:"Relations"})}),Object(x.jsx)(o.a,{attached:"bottom",children:I?Object(x.jsxs)(l.a,{onSubmit:T.handleSubmit,children:[Object(x.jsx)(l.a.Dropdown,{fluid:!0,search:!0,selection:!0,label:"Connection",name:"connectedPeopleId",value:T.values.connectedPeopleId,options:t.filter((function(e){return!C.map((function(e){return e.id})).includes(e.id)&&e.id!==Number(v)})).map((function(e){return{value:e.id,text:"".concat(e.firstName," ").concat(e.lastName)}})),onChange:function(e,t){var n=t.name,a=t.value;return T.handleChange({target:{name:n,value:a}})},error:T.errors.connectedPeopleId}),Object(x.jsx)(l.a.Dropdown,{fluid:!0,search:!0,selection:!0,label:"Relationship",name:"relationType",value:T.values.relationType,options:i,onChange:function(e,t){var n=t.name,a=t.value;return T.handleChange({target:{name:n,value:a}})},error:T.errors.relationType}),Object(x.jsx)(g.a,{color:"orange",type:"button",onClick:function(){T.resetForm(),R(!1)},children:"Back"}),Object(x.jsx)(g.a,{color:"green",type:"submit",loading:T.isSubmitting,disabled:T.isSubmitting||!Object(d.b)(T.errors),disabledContent:!0,children:"Submit"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p.a,{rows:C,minHeight:350,onSelectionChange:function(e){return A("boolean"===typeof e?C.map((function(e){return Number(e.id)})):Object.keys(e).map((function(e){return Number(e)})))}}),Object(x.jsx)(g.a,{color:"instagram",disabled:!("new"!==v&&Number(v)),onClick:function(){return R(!0)},content:"Create a Person",children:"Add"}),Object(x.jsx)(g.a,{color:"youtube",disabled:!("new"!==v&&Number(v)&&q.length),onClick:function(){return function(){try{h(q,Number(v)),A([])}catch(e){console.log(e),m.b.error("Unable to delete")}}()},content:"new"!==v&&Number(v)?"Select a relation":"Create a Person",children:"Delete"})]})})]})}var y=n(1728),S=[{name:"text",header:"Type",maxWidth:100,defaultFlex:2},{name:"value",header:"code",minWidth:50,defaultFlex:1}];function C(e){var t=e.rows,n=e.onSelectionChange,a=e.minHeight;return Object(x.jsx)(y.a,{idProperty:"value",columns:S,minHeight:a,rows:t,onSelectionChange:function(e){var t=e.selected;return n(t)},checkboxColumn:!0,checkboxOnlyRowSelect:!0})}function N(){var e=Object(b.a)(),t=e.relationTypes,n=e.addRelationType,a=e.deleteRelationType,i=Object(c.useState)(!1),j=Object(O.a)(i,2),h=j[0],f=j[1],p=Object(c.useState)([]),v=Object(O.a)(p,2),y=v[0],S=v[1],N=Object(s.a)({initialValues:{value:"",text:""},onSubmit:function(e,t){Object(d.c)(e).then((function(e){n(e.value,e.text),t.setSubmitting(!1),m.b.success("Successfully Added"),t.resetForm(),f(!1)}))},validationSchema:u.c().shape({value:u.d().required("Required").min(2,"More than 2 characters").max(4,"Must not exceed 4 characters").test("unique",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,a=n.path,c=n.createError,r=t.map((function(e){return e.value}));return(Array.isArray(r)?!r.includes(e):r!==e)||c({path:a,message:"Already in use"})})),text:u.d().required("Required").min(2,"More than 2 characters").max(10,"Must not exceed 10 characters")})});return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(r.a,{attached:"top",children:Object(x.jsx)(r.a.Item,{header:!0,children:"Relationship Types"})}),Object(x.jsx)(o.a,{attached:"bottom",children:h?Object(x.jsxs)(l.a,{onSubmit:N.handleSubmit,children:[Object(x.jsx)(l.a.Input,{fluid:!0,label:"Relation Name",name:"text",value:N.values.text,onChange:N.handleChange,error:N.errors.text,autoComplete:"off"}),Object(x.jsx)(l.a.Input,{fluid:!0,label:"Code",name:"value",value:N.values.value,onChange:function(e){var t=e.target,n=t.name,a=t.value;return N.handleChange({target:{name:n,value:a?a.toUpperCase():""}})},error:N.errors.value,autoComplete:"off"}),Object(x.jsx)(g.a,{color:"orange",type:"button",onClick:function(){N.resetForm(),f(!1)},children:"Back"}),Object(x.jsx)(g.a,{color:"green",type:"submit",loading:N.isSubmitting,disabled:N.isSubmitting||!Object(d.b)(N.errors),disabledContent:!0,children:"Submit"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{rows:t,minHeight:250,onSelectionChange:function(e){return S("boolean"===typeof e?t.map((function(e){return e.value})):Object.keys(e).map((function(e){return e})))}}),Object(x.jsx)(g.a,{color:"instagram",onClick:function(){return f(!0)},children:"Add"}),Object(x.jsx)(g.a,{color:"youtube",disabled:!y.length,onClick:function(){return function(){try{a(y),S([])}catch(e){console.log(e),m.b.error("Unable to delete")}}()},content:"Select a relation type",children:"Delete"})]})})]})}function k(){var e=Object(b.a)(),t=e.addConnection,n=e.updateConnection,f=e.connections,O=Object(j.i)().peopleId,p=Object(j.g)(),y=Object(s.a)({initialValues:{firstName:"",lastName:"",id:Number(O)||"new"},onSubmit:function(e,a){Object(d.c)(e).then((function(c){var r={};"new"===e.id?(r=t(c),a.setFieldValue("id",r.id),a.setSubmitting(!1),p.push("/add/".concat(r.id)),m.b.success("Successfully Added")):(n(c),a.setSubmitting(!1),m.b.success("Successfully Updated"))}))},validationSchema:u.c().shape({firstName:u.d().required("Required").matches(/^[aA-zZ\s]+$/,"Only alphabets"),lastName:u.d().required("Required").matches(/^[aA-zZ\s]+$/,"Only alphabets")})}),S=y.setValues,C=a(y,["setValues"]);return Object(c.useEffect)((function(){O&&"undefined"!==O&&"null"!==O||p.goBack(),S(f.find((function(e){return e.id===Number(O)}))||{firstName:"",lastName:"",id:Number(O)||"new"})}),[O,f]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(r.a,{attached:"top",children:Object(x.jsx)(r.a.Item,{header:!0,children:"Person And Relations"})}),Object(x.jsx)(o.a,{attached:"bottom",children:Object(x.jsx)(i.a,{children:Object(x.jsxs)(i.a.Row,{children:[Object(x.jsx)(i.a.Column,{computer:8,tablet:8,mobile:16,largeScreen:8,children:Object(x.jsxs)(l.a,{onSubmit:C.handleSubmit,children:[Object(x.jsx)(l.a.Input,{label:"First Name",name:"firstName",value:C.values.firstName,onChange:C.handleChange,error:C.errors.firstName,autoComplete:"off"}),Object(x.jsx)(l.a.Input,{label:"Last Name",name:"lastName",value:C.values.lastName,onChange:C.handleChange,error:C.errors.lastName,autoComplete:"off"}),Object(x.jsx)(g.a,{color:"orange",type:"button",as:h.b,to:"/",children:"Back"}),Object(x.jsx)(g.a,{color:"green",type:"submit",loading:C.isSubmitting,disabled:C.isSubmitting||!Object(d.b)(C.errors),style:{marginBottom:20},disabledContent:!0,children:"Submit"})]})}),Object(x.jsx)(i.a.Column,{computer:8,tablet:8,mobile:16,largeScreen:8,children:Object(x.jsx)(v,{})})]})})}),Object(x.jsx)(i.a,{children:Object(x.jsx)(i.a.Row,{children:Object(x.jsx)(i.a.Column,{computer:8,tablet:16,children:Object(x.jsx)(N,{})})})})]})}},1703:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0),c=n(87);function r(){return Object(a.useContext)(c.a)}},1712:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(12),c=n(2251),r=n(2249),o=n(2);function i(e){var t={as:e.as,to:e.to,onClick:e.onClick},n={color:e.color,className:e.disabled?"disabled-button".concat(e.className?" "+e.className:""):e.className,style:e.style,type:e.type},i=e.disabled?n:Object(a.a)(Object(a.a)({},n),t),l=Object(o.jsx)(c.a,Object(a.a)(Object(a.a)({},i),{},{children:e.children}));return e.disabled?Object(o.jsx)(r.a,{disabled:e.disabledContent,content:e.content,trigger:l}):l}},1728:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a,c=n(21),r=n(1775),o=n.n(r),i=n(22),l=n(2),u=Object(i.a)(o.a)(a||(a=Object(c.a)(["\n  margin-bottom: 1rem;\n"])));function s(e){var t=e.idProperty,n=e.columns,a=e.rows,c=e.minHeight,r=e.checkboxColumn,o=e.checkboxOnlyRowSelect,i=e.onSelectionChange;return Object(l.jsx)(u,{idProperty:t,columns:n,dataSource:a,style:{minHeight:c},pagination:!0,limit:40,checkboxColumn:r,checkboxOnlyRowSelect:o,onSelectionChange:function(e){i&&i(e)}})}},1750:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(1728),c=n(2),r=[{name:"id",header:"ID",minWidth:60,defaultFlex:.4},{name:"fullName",header:"Name",minWidth:50,defaultFlex:3,render:function(e){var t=e.data;return"".concat(t.firstName," ").concat(t.lastName)}}];function o(e){var t=e.rows,n=e.minHeight,o=e.onSelectionChange;return Object(c.jsx)(a.a,{idProperty:"id",minHeight:n,columns:r,rows:t,checkboxColumn:!0,checkboxOnlyRowSelect:!0,onSelectionChange:function(e){var t=e.selected;return o(t)}})}}}]);
//# sourceMappingURL=6.2db0926c.chunk.js.map