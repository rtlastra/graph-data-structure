function t(n){return t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},t(n)}function n(t,r){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},n(t,r)}function r(t,e,o){return r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct.bind():function(t,r,e){var o=[null];o.push.apply(o,r);var u=new(Function.bind.apply(t,o));return e&&n(u,e.prototype),u},r.apply(null,arguments)}function e(o){var u="function"==typeof Map?new Map:void 0;return e=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==u){if(u.has(e))return u.get(e);u.set(e,o)}function o(){return r(e,arguments,t(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),n(o,e)},e(o)}var o=/*#__PURE__*/function(t){var r,e;function o(n){var r;return r=t.call(this,n)||this,Object.setPrototypeOf(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(r),o.prototype),r}return e=t,(r=o).prototype=Object.create(e.prototype),r.prototype.constructor=r,n(r,e),o}(/*#__PURE__*/e(Error));function u(t){var n={addNode:u,removeNode:function(t){return Object.keys(r).forEach(function(n){r[n].forEach(function(r){r===t&&p(n,r)})}),delete r[t],n},nodes:i,adjacent:c,addEdge:h,removeEdge:p,hasEdge:function(t,n){return c(t).includes(n)},setEdgeWeight:a,getEdgeWeight:s,indegree:function(t){var n=0;function e(r){r===t&&n++}return Object.keys(r).forEach(function(t){r[t].forEach(e)}),n},outdegree:function(t){return t in r?r[t].length:0},depthFirstSearch:l,hasCycle:function(){try{return l(void 0,!0,!0),!1}catch(t){if(t instanceof o)return!0;throw t}},lowestCommonAncestors:function(t,n){var r=[],e=[];return function t(o,u){return!!o[u]||(o[u]=!0,r.push(u),u==n?(e.push(u),!1):c(u).every(function(n){return t(o,n)}))}({},t)&&function t(n,o){n[o]||(n[o]=!0,r.indexOf(o)>=0?e.push(o):0==e.length&&c(o).forEach(function(r){t(n,r)}))}({},n),e},topologicalSort:function(t,n){return void 0===n&&(n=!0),l(t,n,!0).reverse()},shortestPath:function(t,n){var r={},e={},o={};return function(){(function(){if(i().forEach(function(t){r[t]=Infinity}),Infinity!==r[t])throw new Error("Source node is not in the graph");if(Infinity!==r[n])throw new Error("Destination node is not in the graph");r[t]=0})(),i().forEach(function(t){o[t]=!0});for(var u=function(){var t,n,u=(n=Infinity,Object.keys(o).forEach(function(e){r[e]<n&&(n=r[e],t=e)}),void 0===t?(o={},null):(delete o[t],t));if(null===u)return{v:void 0};c(u).forEach(function(t){!function(t,n){var o=s(t,n);r[n]>r[t]+o&&(r[n]=r[t]+o,e[n]=t)}(u,t)})};0!==Object.keys(o).length;){var f=u();if("object"==typeof f)return f.v}}(),function(){for(var r=[],o=0,u=n;e[u];)r.push(u),o+=s(e[u],u),u=e[u];if(u!==t)throw new Error("No path found");return r.push(u),r.reverse(),r.weight=o,r}()},serialize:function(){var t={nodes:i().map(function(t){return{id:t}}),links:[]};return t.nodes.forEach(function(n){var r=n.id;c(r).forEach(function(n){t.links.push({source:r,target:n,weight:s(r,n)})})}),t},deserialize:d},r={},e={};function u(t){return r[t]=c(t),n}function i(){var t={};return Object.keys(r).forEach(function(n){t[n]=!0,r[n].forEach(function(n){t[n]=!0})}),Object.keys(t)}function c(t){return r[t]||[]}function f(t,n){return t+"|"+n}function a(t,r,o){return e[f(t,r)]=o,n}function s(t,n){var r=e[f(t,n)];return void 0===r?1:r}function h(t,r,e){return u(t),u(r),c(t).push(r),void 0!==e&&a(t,r,e),n}function p(t,e){return r[t]&&(r[t]=c(t).filter(function(t){return t!==e})),n}function l(t,n,r){void 0===n&&(n=!0),void 0===r&&(r=!1),t||(t=i()),"boolean"!=typeof n&&(n=!0);var e={},u={},f=[];function a(t){if(u[t]&&r)throw new o("Cycle found");e[t]||(e[t]=!0,u[t]=!0,c(t).forEach(a),u[t]=!1,f.push(t))}return n?t.forEach(a):(t.forEach(function(t){e[t]=!0}),t.forEach(function(t){c(t).forEach(a)})),f}function d(t){return t.nodes.forEach(function(t){u(t.id)}),t.links.forEach(function(t){h(t.source,t.target,t.weight)}),n}return t&&d(t),n}exports.CycleError=o,exports.Graph=u,exports.default=u;
//# sourceMappingURL=index.cjs.map