goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.is_client = day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *   ```cljs
 *   (r/create-element "div" #js{:className "foo"}
 *  "Hi " (r/as-element [:strong "world!"])
 *   ```
 * 
 *   which is equivalent to
 * 
 *   ```cljs
 *   [:div.foo "Hi" [:strong "world!"]]
 *   ```
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$create_element(var_args){
var G__49346 = arguments.length;
switch (G__49346) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___49578 = arguments.length;
var i__5770__auto___49579 = (0);
while(true){
if((i__5770__auto___49579 < len__5769__auto___49578)){
args_arr__5794__auto__.push((arguments[i__5770__auto___49579]));

var G__49580 = (i__5770__auto___49579 + (1));
i__5770__auto___49579 = G__49580;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((3)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5795__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props,child);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_(props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0))].join(''),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(module$node_modules$react$index.createElement,type,props,child,children);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$lang$applyTo = (function (seq49342){
var G__49343 = cljs.core.first(seq49342);
var seq49342__$1 = cljs.core.next(seq49342);
var G__49344 = cljs.core.first(seq49342__$1);
var seq49342__$2 = cljs.core.next(seq49342__$1);
var G__49345 = cljs.core.first(seq49342__$2);
var seq49342__$3 = cljs.core.next(seq49342__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49343,G__49344,G__49345,seq49342__$3);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_element.cljs$lang$maxFixedArity = (3));

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$as_element(var_args){
var G__49394 = arguments.length;
switch (G__49394) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$1 = (function (form){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.protocols.as_element(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_,form);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$core$IFn$_invoke$arity$2 = (function (form,compiler){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.protocols.as_element(compiler,form);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.as_element.cljs$lang$maxFixedArity = 2);

/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.adapt_react_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template.adapt_react_class(c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$reactify_component(var_args){
var G__49406 = arguments.length;
switch (G__49406) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1 = (function (c){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2(c,day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2 = (function (c,compiler){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reactify_component(c,compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.reactify_component.cljs$lang$maxFixedArity = 2);

/**
 * Creates JS class based on provided Clojure map, for example:
 * 
 *   ```cljs
 *   {;; Constructor
 * :constructor (fn [this props])
 * :get-initial-state (fn [this])
 * ;; Static methods
 * :get-derived-state-from-props (fn [props state] partial-state)
 * :get-derived-state-from-error (fn [error] partial-state)
 * ;; Methods
 * :get-snapshot-before-update (fn [this old-argv new-argv] snapshot)
 * :should-component-update (fn [this old-argv new-argv])
 * :component-did-mount (fn [this])
 * :component-did-update (fn [this old-argv old-state snapshot])
 * :component-will-unmount (fn [this])
 * :component-did-catch (fn [this error info])
 * :reagent-render (fn [args....])
 * ;; Or alternatively:
 * :render (fn [this])
 * ;; Deprecated methods:
 * :UNSAFE_component-will-receive-props (fn [this new-argv])
 * :UNSAFE_component-will-update (fn [this new-argv new-state])
 * :UNSAFE_component-will-mount (fn [this])}
 *   ```
 * 
 *   Everything is optional, except either :reagent-render or :render.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in snake-case or camelCase.
 * 
 *   State can be initialized using constructor, which matches React.Component class,
 *   or using getInitialState which matches old React createClass function and is
 *   now implemented by Reagent for compatibility.
 * 
 *   State can usually be anything, e.g. Cljs object. But if using getDerivedState
 *   methods, the state has to be plain JS object as React implementation uses
 *   Object.assign to merge partial state into the current state.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$create_class(var_args){
var G__49415 = arguments.length;
switch (G__49415) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.create_class(spec,day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$2 = (function (spec,compiler){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.create_class(spec,compiler);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_class.cljs$lang$maxFixedArity = 2);

/**
 * Returns the current React component (a.k.a `this`) in a component
 *   function.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.current_component = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$current_component(){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state_atom = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$state_atom(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.state_atom(this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to `(deref (r/state-atom this))`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$state(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state_atom(this$));
});
/**
 * Set state of a component.
 *   Equivalent to `(reset! (state-atom this) new-state)`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.replace_state = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$replace_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state_atom(this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to `(swap! (state-atom this) merge new-state)`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.set_state = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$set_state(this$,new_state){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0))].join(''),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.state_atom(this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$force_update(var_args){
var G__49433 = arguments.length;
switch (G__49433) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2(this$,false);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.flush_BANG_();

day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.force_update(this$,deep);

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.flush_after_render();
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.force_update.cljs$lang$maxFixedArity = 2);

/**
 * Returns the props passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.props = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$props(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.get_props(this$);
});
/**
 * Returns the children passed to a component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.children = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$children(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.get_children(this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.argv = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$argv(this$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0))].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.component.get_argv(this$);
});
/**
 * Function which normalizes and combines class values to a string
 * 
 *   Reagent allows classes to be defined as:
 *   - Strings
 *   - Named objects (Symbols or Keywords)
 *   - Collections of previous types
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$class_names(var_args){
var G__49454 = arguments.length;
switch (G__49454) {
case 0:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___49611 = arguments.length;
var i__5770__auto___49612 = (0);
while(true){
if((i__5770__auto___49612 < len__5769__auto___49611)){
args_arr__5794__auto__.push((arguments[i__5770__auto___49612]));

var G__49613 = (i__5770__auto___49612 + (1));
i__5770__auto___49612 = G__49613;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(class$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$2 = (function (class1,class2){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(class1,class2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (class1,class2,others){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.class_names,class1,class2,others);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$lang$applyTo = (function (seq49447){
var G__49448 = cljs.core.first(seq49447);
var seq49447__$1 = cljs.core.next(seq49447);
var G__49449 = cljs.core.first(seq49447__$1);
var seq49447__$2 = cljs.core.next(seq49447__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49448,G__49449,seq49447__$2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.class_names.cljs$lang$maxFixedArity = (2));

/**
 * Utility function that merges some maps, handling `:class` and `:style`.
 * 
 *   The :class value is always normalized (using `class-names`) even if no
 *   merging is done.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$merge_props(var_args){
var G__49471 = arguments.length;
switch (G__49471) {
case 0:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___49615 = arguments.length;
var i__5770__auto___49616 = (0);
while(true){
if((i__5770__auto___49616 < len__5769__auto___49615)){
args_arr__5794__auto__.push((arguments[i__5770__auto___49616]));

var G__49618 = (i__5770__auto___49616 + (1));
i__5770__auto___49616 = G__49618;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$0();
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (defaults){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$1(defaults);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (defaults,props){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.merge_props.cljs$core$IFn$_invoke$arity$2(defaults,props);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (defaults,props,others){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.merge_props,defaults,props,others);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$lang$applyTo = (function (seq49468){
var G__49469 = cljs.core.first(seq49468);
var seq49468__$1 = cljs.core.next(seq49468);
var G__49470 = cljs.core.first(seq49468__$1);
var seq49468__$2 = cljs.core.next(seq49468__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49469,G__49470,seq49468__$2);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.merge_props.cljs$lang$maxFixedArity = (2));

/**
 * Render dirty components immediately.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.flush = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$flush(){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.flush();
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$atom(var_args){
var G__49490 = arguments.length;
switch (G__49490) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___49621 = arguments.length;
var i__5770__auto___49622 = (0);
while(true){
if((i__5770__auto___49622 < len__5769__auto___49621)){
args_arr__5794__auto__.push((arguments[i__5770__auto___49622]));

var G__49623 = (i__5770__auto___49622 + (1));
i__5770__auto___49622 = G__49623;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.atom,x,rest);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$lang$applyTo = (function (seq49488){
var G__49489 = cljs.core.first(seq49488);
var seq49488__$1 = cljs.core.next(seq49488);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49489,seq49488__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.atom.cljs$lang$maxFixedArity = (1));

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, `@(track foo bar)` will produce the same result
 *   as `(foo bar)`, but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49628 = arguments.length;
var i__5770__auto___49629 = (0);
while(true){
if((i__5770__auto___49629 < len__5769__auto___49628)){
args__5775__auto__.push((arguments[i__5770__auto___49629]));

var G__49630 = (i__5770__auto___49629 + (1));
i__5770__auto___49629 = G__49630;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.make_track(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track.cljs$lang$applyTo = (function (seq49492){
var G__49493 = cljs.core.first(seq49492);
var seq49492__$1 = cljs.core.next(seq49492);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49493,seq49492__$1);
}));

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$track_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49632 = arguments.length;
var i__5770__auto___49633 = (0);
while(true){
if((i__5770__auto___49633 < len__5769__auto___49632)){
args__5775__auto__.push((arguments[i__5770__auto___49633]));

var G__49634 = (i__5770__auto___49633 + (1));
i__5770__auto___49633 = G__49634;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.make_track_BANG_(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq49500){
var G__49501 = cljs.core.first(seq49500);
var seq49500__$1 = cljs.core.next(seq49500);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49501,seq49500__$1);
}));

/**
 * Stop the result of track! from updating.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$dispose_BANG_(x){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.dispose_BANG_(x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   ```cljs
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 *   ```
 * 
 *   Probably useful only for passing to child components.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$wrap(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49635 = arguments.length;
var i__5770__auto___49636 = (0);
while(true){
if((i__5770__auto___49636 < len__5769__auto___49635)){
args__5775__auto__.push((arguments[i__5770__auto___49636]));

var G__49637 = (i__5770__auto___49636 + (1));
i__5770__auto___49636 = G__49637;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_(reset_fn)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reset_fn], 0))].join(''),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.make_wrapper(value,reset_fn,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.wrap.cljs$lang$applyTo = (function (seq49511){
var G__49512 = cljs.core.first(seq49511);
var seq49511__$1 = cljs.core.next(seq49511);
var G__49513 = cljs.core.first(seq49511__$1);
var seq49511__$2 = cljs.core.next(seq49511__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49512,G__49513,seq49511__$2);
}));

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 * 
 *   ```cljs
 *   (let [c (cursor ra [:nested :content])]
 *  ... @c ;; equivalent to (get-in @ra [:nested :content])
 *  ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *  ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *  )
 *   ```
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *   ```cljs
 *   (defn set-get
 *  ([k] (get-in @state k))
 *  ([k v] (swap! state assoc-in k v)))
 *   ```
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   `(cursor state [:foo])` and `(cursor set-get [:foo])`.
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.cursor = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$cursor(src,path){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.ratom.cursor(src,path);
});
/**
 * Swaps the value of a to be `(apply f current-value-of-atom args)`.
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$rswap_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49638 = arguments.length;
var i__5770__auto___49639 = (0);
while(true){
if((i__5770__auto___49639 < len__5769__auto___49638)){
args__5775__auto__.push((arguments[i__5770__auto___49639]));

var G__49640 = (i__5770__auto___49639 + (1));
i__5770__auto___49639 = G__49640;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__5045__auto__ = a.rswapfs;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (a.rswapfs = []);
}
})().push((function (p1__49521_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__49521_SHARP_,args);
}));
} else {
(a.rswapping = true);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (state){
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,state,args);
while(true){
var temp__5806__auto__ = (function (){var G__49535 = a;
var G__49535__$1 = (((G__49535 == null))?null:G__49535.rswapfs);
if((G__49535__$1 == null)){
return null;
} else {
return G__49535__$1.shift();
}
})();
if((temp__5806__auto__ == null)){
return s;
} else {
var sf = temp__5806__auto__;
var G__49641 = (sf.cljs$core$IFn$_invoke$arity$1 ? sf.cljs$core$IFn$_invoke$arity$1(s) : sf.call(null,s));
s = G__49641;
continue;
}
break;
}
}));
}finally {(a.rswapping = false);
}}

return null;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq49522){
var G__49523 = cljs.core.first(seq49522);
var seq49522__$1 = cljs.core.next(seq49522);
var G__49524 = cljs.core.first(seq49522__$1);
var seq49522__$2 = cljs.core.next(seq49522__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49523,G__49524,seq49522__$2);
}));

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.next_tick = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$next_tick(f){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.do_before_flush(f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.after_render = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$after_render(f){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.batching.do_after_render(f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$partial(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49651 = arguments.length;
var i__5770__auto___49652 = (0);
while(true){
if((i__5770__auto___49652 < len__5769__auto___49651)){
args__5775__auto__.push((arguments[i__5770__auto___49652]));

var G__49653 = (i__5770__auto___49652 + (1));
i__5770__auto___49652 = G__49653;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.util.make_partial_fn(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.partial.cljs$lang$applyTo = (function (seq49538){
var G__49539 = cljs.core.first(seq49538);
var seq49538__$1 = cljs.core.next(seq49538);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49539,seq49538__$1);
}));

/**
 * Creates Compiler object with given `opts`,
 *   this can be passed to `render`, `as-element` and other functions to control
 *   how they turn the Reagent-style Hiccup into React components and elements.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.create_compiler = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$create_compiler(opts){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template.create_compiler(opts);
});
/**
 * Globally sets the Compiler object used by `render`, `as-element` and other
 *   calls by default, when no `compiler` parameter is provided.
 * 
 *   Use `nil` value to restore the original default compiler.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.set_default_compiler_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$set_default_compiler_BANG_(compiler){
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template.set_default_compiler_BANG_((((compiler == null))?day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.impl.template.class_compiler:compiler));
});
day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render = (function day8$re_frame_10x$inlined_deps$reagent$v1v2v0$reagent$core$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___49662 = arguments.length;
var i__5770__auto___49663 = (0);
while(true){
if((i__5770__auto___49663 < len__5769__auto___49662)){
args__5775__auto__.push((arguments[i__5770__auto___49663]));

var G__49664 = (i__5770__auto___49663 + (1));
i__5770__auto___49663 = G__49664;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render.cljs$core$IFn$_invoke$arity$variadic = (function (_){
throw (new Error("Reagent.core/render function was moved to day8.re-frame-10x.inlined-deps.reagent.v1v2v0.reagent.dom namespace in Reagent v1.0."));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.render.cljs$lang$applyTo = (function (seq49544){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49544));
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v2v0.reagent.core.js.map
