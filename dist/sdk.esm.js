import { passThroughInterceptor, mergeHeaders, HttpClient, createRequestBuilderFactory, ApiError } from '@apimatic/core';
export { AbortError, ApiError, ArgumentsValidationError, FileWrapper, ResponseValidationError, cloneFileWrapper, isFileWrapper } from '@apimatic/core';
import { object, boolean, array, string, stringEnum, unknown, number, lazy, optional } from '@apimatic/schema';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var customHeaderAuthenticationProvider = function customHeaderAuthenticationProvider(_ref) {
  var authorization = _ref.authorization;
  return function (requiresAuth) {
    if (!requiresAuth) {
      return passThroughInterceptor;
    }

    return function (request, options, next) {
      var _request$headers;

      var customHeaderParams = {
        'Authorization': authorization
      };
      mergeHeaders((_request$headers = request.headers) != null ? _request$headers : {}, customHeaderParams);
      return next(request, options);
    };
  };
};

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

/** Environments available for API */
var Environment;

(function (Environment) {
  Environment["Production"] = "production";
})(Environment || (Environment = {}));

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
/** Default values for the configuration parameters of the client. */

var DEFAULT_CONFIGURATION = {
  timeout: 0,
  environment: Environment.Production,
  authorization: 'TODO Authorization value'
};

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var XmlSerialization = /*#__PURE__*/function () {
  function XmlSerialization() {}

  var _proto = XmlSerialization.prototype;

  _proto.xmlSerialize = function xmlSerialize(_rootName, _value) {
    throw new Error('XML serialization is not available.');
  };

  _proto.xmlDeserialize = function xmlDeserialize(_rootName, _xmlString) {
    throw new Error('XML deserialization is not available.');
  };

  return XmlSerialization;
}();

var USER_AGENT = 'APIMATIC 3.0';
var Client = /*#__PURE__*/function () {
  function Client(config) {
    var _this = this;

    this._config = _extends({}, DEFAULT_CONFIGURATION, config);
    this._requestBuilderFactory = createRequestHandlerFactory(function (server) {
      return getBaseUri(server, _this._config);
    }, customHeaderAuthenticationProvider(this._config), new HttpClient({
      timeout: this._config.timeout,
      clientConfigOverrides: this._config.unstable_httpClientOptions
    }), [withErrorHandlers, withUserAgent, withAuthenticationByDefault], new XmlSerialization());
  }

  var _proto = Client.prototype;

  _proto.getRequestBuilderFactory = function getRequestBuilderFactory() {
    return this._requestBuilderFactory;
  }
  /**
   * Clone this client and override given configuration options
   */
  ;

  _proto.withConfiguration = function withConfiguration(config) {
    return new Client(_extends({}, this._config, config));
  };

  return Client;
}();

function createHttpClientAdapter(client) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(request, requestOptions) {
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return client.executeRequest(request, requestOptions);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
}

function getBaseUri(server, config) {
  if (server === void 0) {
    server = 'default';
  }

  if (config.environment === Environment.Production) {
    if (server === 'default') {
      return 'https://apimaticio-test.azurewebsites.net/api';
    }
  }

  throw new Error('Could not get Base URL. Invalid environment or server.');
}

function createRequestHandlerFactory(baseUrlProvider, authProvider, httpClient, addons, xmlSerializer) {
  var requestBuilderFactory = createRequestBuilderFactory(createHttpClientAdapter(httpClient), baseUrlProvider, ApiError, authProvider, xmlSerializer);
  return tap.apply(void 0, [requestBuilderFactory].concat(addons));
}

function tap(requestBuilderFactory) {
  for (var _len = arguments.length, callback = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    callback[_key - 1] = arguments[_key];
  }

  return function () {
    var requestBuilder = requestBuilderFactory.apply(void 0, arguments);
    callback.forEach(function (c) {
      return c(requestBuilder);
    });
    return requestBuilder;
  };
}

function withErrorHandlers(rb) {
  rb.defaultToError(ApiError);
}

function withUserAgent(rb) {
  rb.header('user-agent', USER_AGENT);
}

function withAuthenticationByDefault(rb) {
  rb.authenticate(true);
}

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var apiValidationSummarySchema = /*#__PURE__*/object({
  success: ['success', /*#__PURE__*/boolean()],
  errors: ['errors', /*#__PURE__*/array( /*#__PURE__*/string())],
  warnings: ['warnings', /*#__PURE__*/array( /*#__PURE__*/string())],
  messages: ['messages', /*#__PURE__*/array( /*#__PURE__*/string())]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

/** Base class for all controllers */
var BaseController = function BaseController(client) {
  this.createRequest = client.getRequestBuilderFactory();
};

var APIValidationExternalApisController = /*#__PURE__*/function (_BaseController) {
  _inheritsLoose(APIValidationExternalApisController, _BaseController);

  function APIValidationExternalApisController() {
    return _BaseController.apply(this, arguments) || this;
  }

  var _proto = APIValidationExternalApisController.prototype;

  /**
   * Validate an API by uploading the API specification file.
   *
   * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
   * validating the API using this endpoint. When specifying Metadata, the uploaded file will be a zip
   * file containing the API specification file and the `APIMATIC-META` json file.
   *
   * @param file        The API specification file.<br>The type of the specification file should be any
   *                                   of the [supported formats](https://docs.apimatic.io/api-transformer/overview-
   *                                   transformer#supported-input-formats).
   * @return Response from the API call
   */
  _proto.validateAPIViaFile =
  /*#__PURE__*/
  function () {
    var _validateAPIViaFile = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(file, requestOptions) {
      var req;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST', '/validation/validate-via-file');
              req.baseUrl('default');
              req.header('ContentType', 'multipart/form-data');
              req.formData({
                file: file
              });
              return _context.abrupt("return", req.callAsJson(apiValidationSummarySchema, requestOptions));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function validateAPIViaFile(_x, _x2) {
      return _validateAPIViaFile.apply(this, arguments);
    }

    return validateAPIViaFile;
  }()
  /**
   * Validate an API by providing the URL of the API specification file.
   *
   * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
   * validating the API using this endpoint. When specifying Metadata, the URL provided will be that of a
   * zip file containing the API specification file and the `APIMATIC-META` json file.
   *
   * @param descriptionUrl The URL for the API specification file.<br><br>**Note:** This URL should be
   *                                 publicly accessible.
   * @return Response from the API call
   */
  ;

  _proto.validateAPIViaURL =
  /*#__PURE__*/
  function () {
    var _validateAPIViaURL = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(descriptionUrl, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('GET', '/validation/validate-via-url');
              req.baseUrl('default');
              mapped = req.prepareArgs({
                descriptionUrl: [descriptionUrl, string()]
              });
              req.query('descriptionUrl', mapped.descriptionUrl);
              return _context2.abrupt("return", req.callAsJson(apiValidationSummarySchema, requestOptions));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function validateAPIViaURL(_x3, _x4) {
      return _validateAPIViaURL.apply(this, arguments);
    }

    return validateAPIViaURL;
  }();

  return APIValidationExternalApisController;
}(BaseController);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var docsValidationSummarySchema = /*#__PURE__*/object({
  success: ['success', /*#__PURE__*/boolean()],
  errors: ['errors', /*#__PURE__*/array( /*#__PURE__*/string())],
  warnings: ['warnings', /*#__PURE__*/array( /*#__PURE__*/string())],
  messages: ['messages', /*#__PURE__*/array( /*#__PURE__*/string())]
});

var _templateObject, _templateObject2;
var APIValidationImportedApisController = /*#__PURE__*/function (_BaseController) {
  _inheritsLoose(APIValidationImportedApisController, _BaseController);

  function APIValidationImportedApisController() {
    return _BaseController.apply(this, arguments) || this;
  }

  var _proto = APIValidationImportedApisController.prototype;

  /**
   * Validate an API using the [APIMatic Validator](https://docs.apimatic.io/generate-sdks/overview-
   * sdks#step-2-api-validation).
   *
   * @param apiEntityId   The ID of the API Entity to perform validation for.
   * @return Response from the API call
   */
  _proto.validateAPI =
  /*#__PURE__*/
  function () {
    var _validateAPI = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(apiEntityId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('GET');
              req.baseUrl('default');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()]
              });
              req.appendTemplatePath(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["/api-entities/", "/api-validation-summary"])), mapped.apiEntityId);
              return _context.abrupt("return", req.callAsJson(apiValidationSummarySchema, requestOptions));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function validateAPI(_x, _x2) {
      return _validateAPI.apply(this, arguments);
    }

    return validateAPI;
  }()
  /**
   * Validate an API for documentation generation. This process validates the API for missing examples or
   * missing descriptions.
   *
   * @param apiEntityId   The ID of the API Entity to perform validation for.
   * @return Response from the API call
   */
  ;

  _proto.validateAPIForDocs =
  /*#__PURE__*/
  function () {
    var _validateAPIForDocs = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(apiEntityId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('GET');
              req.baseUrl('default');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()]
              });
              req.appendTemplatePath(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["/api-entities/", "/docs-validation-summary"])), mapped.apiEntityId);
              return _context2.abrupt("return", req.callAsJson(docsValidationSummarySchema, requestOptions));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function validateAPIForDocs(_x3, _x4) {
      return _validateAPIForDocs.apply(this, arguments);
    }

    return validateAPIForDocs;
  }();

  return APIValidationImportedApisController;
}(BaseController);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
/**
 * Enum for Accept
 */

var Accept;

(function (Accept) {
  Accept["EnumApplicationjson"] = "application/json";
})(Accept || (Accept = {}));
/**
 * Schema for Accept
 */


var acceptSchema = /*#__PURE__*/stringEnum(Accept);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
/**
 * Enum for Accept2
 */

var Accept2;

(function (Accept2) {
  Accept2["EnumApplicationvndapimaticapiEntityfullv1json"] = "application/vnd.apimatic.apiEntity.full.v1+json";
})(Accept2 || (Accept2 = {}));
/**
 * Schema for Accept2
 */


var accept2Schema = /*#__PURE__*/stringEnum(Accept2);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var authenticationSchema = /*#__PURE__*/object({
  id: ['id', /*#__PURE__*/string()],
  authType: ['authType', /*#__PURE__*/string()],
  scopes: ['scopes', /*#__PURE__*/array( /*#__PURE__*/string())],
  parameters: ['parameters', /*#__PURE__*/array( /*#__PURE__*/string())],
  authScopes: ['authScopes', /*#__PURE__*/array( /*#__PURE__*/string())],
  authGrantTypes: ['authGrantTypes', /*#__PURE__*/array( /*#__PURE__*/string())],
  paramFormats: ['paramFormats', /*#__PURE__*/unknown()]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var codeGenSettingsSchema = /*#__PURE__*/object({
  isAsync: ['isAsync', /*#__PURE__*/boolean()],
  useHttpMethodPrefix: ['useHttpMethodPrefix', /*#__PURE__*/boolean()],
  useModelPrefix: ['useModelPrefix', /*#__PURE__*/boolean()],
  useEnumPrefix: ['useEnumPrefix', /*#__PURE__*/boolean()],
  useConstructorsForConfig: ['useConstructorsForConfig', /*#__PURE__*/boolean()],
  useCommonSdkLibrary: ['useCommonSdkLibrary', /*#__PURE__*/boolean()],
  generateInterfaces: ['generateInterfaces', /*#__PURE__*/boolean()],
  generateAppveyorConfig: ['generateAppveyorConfig', /*#__PURE__*/boolean()],
  generateCircleConfig: ['generateCircleConfig', /*#__PURE__*/boolean()],
  generateJenkinsConfig: ['generateJenkinsConfig', /*#__PURE__*/boolean()],
  generateTravisConfig: ['generateTravisConfig', /*#__PURE__*/boolean()],
  androidUseAppManifest: ['androidUseAppManifest', /*#__PURE__*/boolean()],
  iosUseAppInfoPlist: ['iosUseAppInfoPlist', /*#__PURE__*/boolean()],
  iosGenerateCoreData: ['iosGenerateCoreData', /*#__PURE__*/boolean()],
  runscopeEnabled: ['runscopeEnabled', /*#__PURE__*/boolean()],
  collapseParamsToArray: ['collapseParamsToArray', /*#__PURE__*/boolean()],
  preserveParameterOrder: ['preserveParameterOrder', /*#__PURE__*/boolean()],
  appendContentHeaders: ['appendContentHeaders', /*#__PURE__*/boolean()],
  modelSerializationIsJSON: ['modelSerializationIsJSON', /*#__PURE__*/boolean()],
  nullify404: ['nullify404', /*#__PURE__*/boolean()],
  validateRequiredParameters: ['validateRequiredParameters', /*#__PURE__*/boolean()],
  enableAdditionalModelProperties: ['enableAdditionalModelProperties', /*#__PURE__*/boolean()],
  javaUsePropertiesConfig: ['javaUsePropertiesConfig', /*#__PURE__*/boolean()],
  useControllerPrefix: ['useControllerPrefix', /*#__PURE__*/boolean()],
  useExceptionPrefix: ['useExceptionPrefix', /*#__PURE__*/boolean()],
  parameterArrayFormat: ['parameterArrayFormat', /*#__PURE__*/string()],
  objCHttpClient: ['objCHttpClient', /*#__PURE__*/string()],
  cSharpHttpClient: ['cSharpHttpClient', /*#__PURE__*/string()],
  androidHttpClient: ['androidHttpClient', /*#__PURE__*/string()],
  nodeHttpClient: ['nodeHttpClient', /*#__PURE__*/string()],
  phpHttpClient: ['phpHttpClient', /*#__PURE__*/string()],
  bodySerialization: ['bodySerialization', /*#__PURE__*/number()],
  arraySerialization: ['arraySerialization', /*#__PURE__*/string()],
  timeout: ['timeout', /*#__PURE__*/number()],
  enableLogging: ['enableLogging', /*#__PURE__*/boolean()],
  enableHttpCache: ['enableHttpCache', /*#__PURE__*/boolean()],
  retries: ['retries', /*#__PURE__*/number()],
  retryInterval: ['retryInterval', /*#__PURE__*/number()],
  generateAdvancedDocs: ['generateAdvancedDocs', /*#__PURE__*/boolean()],
  storeTimezoneInformation: ['storeTimezoneInformation', /*#__PURE__*/boolean()],
  enablePhpComposerVersionString: ['enablePhpComposerVersionString', /*#__PURE__*/boolean()],
  securityProtocols: ['securityProtocols', /*#__PURE__*/array( /*#__PURE__*/string())],
  underscoreNumbers: ['underscoreNumbers', /*#__PURE__*/boolean()],
  useSingletonPattern: ['useSingletonPattern', /*#__PURE__*/boolean()],
  disableLinting: ['disableLinting', /*#__PURE__*/boolean()],
  allowSkippingSSLCertVerification: ['allowSkippingSSLCertVerification', /*#__PURE__*/boolean()],
  applyCustomizations: ['applyCustomizations', /*#__PURE__*/array( /*#__PURE__*/string())],
  doNotSplitWords: ['doNotSplitWords', /*#__PURE__*/array( /*#__PURE__*/string())],
  sortResources: ['sortResources', /*#__PURE__*/boolean()],
  enableGlobalUserAgent: ['enableGlobalUserAgent', /*#__PURE__*/boolean()]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var endpointsGroupSchema = /*#__PURE__*/object({
  name: ['name', /*#__PURE__*/string()],
  description: ['description', /*#__PURE__*/string()]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var importValidationSummarySchema = /*#__PURE__*/object({
  success: ['success', /*#__PURE__*/boolean()],
  errors: ['errors', /*#__PURE__*/array( /*#__PURE__*/string())],
  warnings: ['warnings', /*#__PURE__*/array( /*#__PURE__*/string())],
  messages: ['messages', /*#__PURE__*/array( /*#__PURE__*/string())]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var metaDataSchema = /*#__PURE__*/object({
  importValidationSummary: ['importValidationSummary', /*#__PURE__*/lazy(function () {
    return importValidationSummarySchema;
  })],
  apiValidationSummary: ['apiValidationSummary', /*#__PURE__*/lazy(function () {
    return apiValidationSummarySchema;
  })],
  docsValidationSummary: ['docsValidationSummary', /*#__PURE__*/lazy(function () {
    return docsValidationSummarySchema;
  })]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var serverSchema = /*#__PURE__*/object({
  id: ['id', /*#__PURE__*/string()],
  name: ['name', /*#__PURE__*/string()],
  url: ['url', /*#__PURE__*/string()]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var environmentSchema = /*#__PURE__*/object({
  id: ['id', /*#__PURE__*/string()],
  name: ['name', /*#__PURE__*/string()],
  servers: ['servers', /*#__PURE__*/array( /*#__PURE__*/lazy(function () {
    return serverSchema;
  }))]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var attributesSchema = /*#__PURE__*/object({
  id: ['id', /*#__PURE__*/string()]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var parameterSchema = /*#__PURE__*/object({
  optional: ['optional', /*#__PURE__*/boolean()],
  type: ['type', /*#__PURE__*/string()],
  constant: ['constant', /*#__PURE__*/boolean()],
  isArray: ['isArray', /*#__PURE__*/boolean()],
  isStream: ['isStream', /*#__PURE__*/boolean()],
  isAttribute: ['isAttribute', /*#__PURE__*/boolean()],
  isMap: ['isMap', /*#__PURE__*/boolean()],
  attributes: ['attributes', /*#__PURE__*/lazy(function () {
    return attributesSchema;
  })],
  nullable: ['nullable', /*#__PURE__*/boolean()],
  id: ['id', /*#__PURE__*/string()],
  name: ['name', /*#__PURE__*/string()],
  description: ['description', /*#__PURE__*/string()],
  defaultValue: ['defaultValue', /*#__PURE__*/string()],
  paramFormat: ['ParamFormat', /*#__PURE__*/string()]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var serverConfigurationSchema = /*#__PURE__*/object({
  id: ['id', /*#__PURE__*/string()],
  defaultEnvironment: ['defaultEnvironment', /*#__PURE__*/string()],
  defaultServer: ['defaultServer', /*#__PURE__*/string()],
  environments: ['environments', /*#__PURE__*/array( /*#__PURE__*/lazy(function () {
    return environmentSchema;
  }))],
  parameters: ['parameters', /*#__PURE__*/array( /*#__PURE__*/lazy(function () {
    return parameterSchema;
  }))]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var testGenSettingsSchema = /*#__PURE__*/object({
  precisionDelta: ['precisionDelta', /*#__PURE__*/number()],
  testTimeout: ['testTimeout', /*#__PURE__*/number()],
  configuration: ['configuration', /*#__PURE__*/array( /*#__PURE__*/string())]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var apiEntitySchema = /*#__PURE__*/object({
  id: ['id', /*#__PURE__*/string()],
  encryptedId: ['encryptedId', /*#__PURE__*/string()],
  apiKey: ['apiKey', /*#__PURE__*/string()],
  apiGroupId: ['apiGroupId', /*#__PURE__*/string()],
  imageUri: ['imageUri', /*#__PURE__*/string()],
  creationDate: ['creationDate', /*#__PURE__*/string()],
  mPublic: ['public', /*#__PURE__*/boolean()],
  name: ['name', /*#__PURE__*/string()],
  description: ['description', /*#__PURE__*/string()],
  version: ['version', /*#__PURE__*/string()],
  additionalHeaders: ['additionalHeaders', /*#__PURE__*/array( /*#__PURE__*/string())],
  authentication: ['authentication', /*#__PURE__*/lazy(function () {
    return authenticationSchema;
  })],
  codeGenSettings: ['codeGenSettings', /*#__PURE__*/lazy(function () {
    return codeGenSettingsSchema;
  })],
  testGenSettings: ['testGenSettings', /*#__PURE__*/lazy(function () {
    return testGenSettingsSchema;
  })],
  errors: ['errors', /*#__PURE__*/array( /*#__PURE__*/string())],
  serverConfiguration: ['serverConfiguration', /*#__PURE__*/lazy(function () {
    return serverConfigurationSchema;
  })],
  endpointsGroup: ['endpointsGroup', /*#__PURE__*/optional( /*#__PURE__*/array( /*#__PURE__*/lazy(function () {
    return endpointsGroupSchema;
  })))],
  metaData: ['metaData', /*#__PURE__*/array( /*#__PURE__*/lazy(function () {
    return metaDataSchema;
  }))]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
/**
 * Enum for ExportFormats
 */

var ExportFormats;

(function (ExportFormats) {
  ExportFormats["APIMATIC"] = "APIMATIC";
  ExportFormats["WADL2009"] = "WADL2009";
  ExportFormats["WSDL"] = "WSDL";
  ExportFormats["SWAGGER10"] = "Swagger10";
  ExportFormats["SWAGGER20"] = "Swagger20";
  ExportFormats["SWAGGERYAML"] = "SwaggerYaml";
  ExportFormats["OAS3"] = "OpenApi3Json";
  ExportFormats["OPENAPI3YAML"] = "OpenApi3Yaml";
  ExportFormats["APIBLUEPRINT"] = "APIBluePrint";
  ExportFormats["RAML"] = "RAML";
  ExportFormats["RAML10"] = "RAML10";
  ExportFormats["POSTMAN10"] = "Postman10";
  ExportFormats["POSTMAN20"] = "Postman20";
  ExportFormats["GRAPHQLSCHEMA"] = "GraphQlSchema";
})(ExportFormats || (ExportFormats = {}));
/**
 * Schema for ExportFormats
 */


var exportFormatsSchema = /*#__PURE__*/stringEnum(ExportFormats);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var importApiVersionViaUrlRequestSchema = /*#__PURE__*/object({
  versionOverride: ['version_override', /*#__PURE__*/string()],
  url: ['url', /*#__PURE__*/string()]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var importApiViaUrlRequestSchema = /*#__PURE__*/object({
  url: ['url', /*#__PURE__*/string()]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var inplaceImportApiViaUrlRequestSchema = /*#__PURE__*/object({
  url: ['url', /*#__PURE__*/string()]
});

var _templateObject$1, _templateObject2$1, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var ApisManagementController = /*#__PURE__*/function (_BaseController) {
  _inheritsLoose(ApisManagementController, _BaseController);

  function ApisManagementController() {
    return _BaseController.apply(this, arguments) || this;
  }

  var _proto = ApisManagementController.prototype;

  /**
   * Import an API into the APIMatic Dashboard by uploading the API specification file.
   *
   * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
   * importing the API using this endpoint. When specifying Metadata, the uploaded file will be a zip
   * file containing the API specification file and the `APIMATIC-META` json file.
   *
   * @param file        The API specification file.<br>The type of the specification file should be any
   *                                   of the [supported formats](https://docs.apimatic.io/api-transformer/overview-
   *                                   transformer#supported-input-formats).
   * @return Response from the API call
   */
  _proto.importAPIViaFile =
  /*#__PURE__*/
  function () {
    var _importAPIViaFile = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(file, requestOptions) {
      var req;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST', '/api-entities/import-via-file');
              req.header('ContentType', 'multipart/form-data');
              req.formData({
                file: file
              });
              return _context.abrupt("return", req.callAsJson(apiEntitySchema, requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function importAPIViaFile(_x, _x2) {
      return _importAPIViaFile.apply(this, arguments);
    }

    return importAPIViaFile;
  }()
  /**
   * Import an API into the APIMatic Dashboard by providing the URL of the API specification file.
   *
   * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
   * importing the API using this endpoint. When specifying Metadata, the URL provided will be that of a
   * zip file containing the API specification file and the `APIMATIC-META` json file.
   *
   * @param body         Request Body
   * @return Response from the API call
   */
  ;

  _proto.importAPIViaURL =
  /*#__PURE__*/
  function () {
    var _importAPIViaURL = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/api-entities/import-via-url');
              mapped = req.prepareArgs({
                body: [body, importApiViaUrlRequestSchema]
              });
              req.header('Content-Type', 'application/vnd.apimatic.apiEntityUrlImportDto.v1+json');
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(apiEntitySchema, requestOptions));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function importAPIViaURL(_x3, _x4) {
      return _importAPIViaURL.apply(this, arguments);
    }

    return importAPIViaURL;
  }()
  /**
   * Import a new version for an API, against an existing API Group, by uploading the API specification
   * file.
   *
   * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
   * importing the API version using this endpoint. When specifying Metadata, the uploaded file will be a
   * zip file containing the API specification file and the `APIMATIC-META` json file.
   *
   * @param apiGroupId       The ID of the API Group for which to import a new API version.
   * @param accept
   * @param versionOverride  The version number with which the new API version will be imported. This
   *                                        version number will override the version specified in the API specification
   *                                        file.<br>APIMatic recommends versioning the API with the [versioning
   *                                        scheme](https://docs.apimatic.io/define-apis/basic-settings/#version)
   *                                        documented in the docs.
   * @param file             The API specification file.<br>The type of the specification file should
   *                                        be any of the [supported formats](https://docs.apimatic.io/api-
   *                                        transformer/overview-transformer#supported-input-formats).
   * @return Response from the API call
   */
  ;

  _proto.importNewAPIVersionViaFile =
  /*#__PURE__*/
  function () {
    var _importNewAPIVersionViaFile = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(apiGroupId, accept, versionOverride, file, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                apiGroupId: [apiGroupId, string()],
                accept: [accept, acceptSchema],
                versionOverride: [versionOverride, string()]
              });
              req.header('Accept', mapped.accept);
              req.header('Content-Type', 'multipart/form-data');
              req.formData({
                version_override: mapped.versionOverride,
                file: file
              });
              req.appendTemplatePath(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["/api-groups/", "/api-entities/import-via-file"])), mapped.apiGroupId);
              return _context3.abrupt("return", req.callAsJson(apiEntitySchema, requestOptions));

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function importNewAPIVersionViaFile(_x5, _x6, _x7, _x8, _x9) {
      return _importNewAPIVersionViaFile.apply(this, arguments);
    }

    return importNewAPIVersionViaFile;
  }()
  /**
   * Import a new version for an API, against an existing API Group, by providing the URL of the API
   * specification file.
   *
   * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
   * importing the API version using this endpoint. When specifying Metadata, the URL provided will be
   * that of a zip file containing the API specification file and the `APIMATIC-META` json file.
   *
   * @param apiGroupId   The ID of the API Group for which to import a new API
   *                                                             version.
   * @param accept
   * @param body         Request Body
   * @return Response from the API call
   */
  ;

  _proto.importNewAPIVersionViaURL =
  /*#__PURE__*/
  function () {
    var _importNewAPIVersionViaURL = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(apiGroupId, accept, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                apiGroupId: [apiGroupId, string()],
                accept: [accept, acceptSchema],
                body: [body, importApiVersionViaUrlRequestSchema]
              });
              req.header('Accept', mapped.accept);
              req.header('Content-Type', 'application/vnd.apimatic.apiGroupApiEntityUrlImportDto.v1+json');
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["/api-groups/", "/api-entities/import-via-url"])), mapped.apiGroupId);
              return _context4.abrupt("return", req.callAsJson(apiEntitySchema, requestOptions));

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function importNewAPIVersionViaURL(_x10, _x11, _x12, _x13) {
      return _importNewAPIVersionViaURL.apply(this, arguments);
    }

    return importNewAPIVersionViaURL;
  }()
  /**
   * Replace an API version of an API Group, by uploading the API specification file that will replace
   * the current version.
   *
   * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
   * importing the API version using this endpoint. When specifying Metadata, the uploaded file will be a
   * zip file containing the API specification file and the `APIMATIC-META` json file.
   *
   * @param apiEntityId   The ID of the API Entity to replace.
   * @param accept
   * @param file          The API specification file.<br>The type of the specification file should be
   *                                     any of the [supported formats](https://docs.apimatic.io/api-
   *                                     transformer/overview-transformer#supported-input-formats).
   * @return Response from the API call
   */
  ;

  _proto.inplaceAPIImportViaFile =
  /*#__PURE__*/
  function () {
    var _inplaceAPIImportViaFile = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(apiEntityId, accept, file, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()],
                accept: [accept, accept2Schema]
              });
              req.header('Accept', mapped.accept);
              req.header('Content-Type', 'multipart/form-data');
              req.formData({
                file: file
              });
              req.appendTemplatePath(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["/api-entities/", "/import-via-file"])), mapped.apiEntityId);
              return _context5.abrupt("return", req.call(requestOptions));

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function inplaceAPIImportViaFile(_x14, _x15, _x16, _x17) {
      return _inplaceAPIImportViaFile.apply(this, arguments);
    }

    return inplaceAPIImportViaFile;
  }()
  /**
   * Replace an API version of an API Group, by providing the URL of the API specification file that will
   * replace the current version.
   *
   * You can also specify [API Metadata](https://docs.apimatic.io/manage-apis/apimatic-metadata) while
   * importing the API version using this endpoint. When specifying Metadata, the URL provided will be
   * that of a zip file containing the API specification file and the `APIMATIC-META` json file.
   *
   * @param apiEntityId   The ID of the API Entity to replace.
   * @param body          Request Body
   * @return Response from the API call
   */
  ;

  _proto.inplaceAPIImportViaURL =
  /*#__PURE__*/
  function () {
    var _inplaceAPIImportViaURL = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(apiEntityId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()],
                body: [body, inplaceImportApiViaUrlRequestSchema]
              });
              req.header('Content-Type', 'application/vnd.apimatic.apiEntityUrlImportDto.v1+json');
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["/api-entities/", "/import-via-url"])), mapped.apiEntityId);
              return _context6.abrupt("return", req.call(requestOptions));

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function inplaceAPIImportViaURL(_x18, _x19, _x20) {
      return _inplaceAPIImportViaURL.apply(this, arguments);
    }

    return inplaceAPIImportViaURL;
  }()
  /**
   * Fetch an API Entity.
   *
   * @param apiEntityId   The ID of the API Entity to fetch.
   * @return Response from the API call
   */
  ;

  _proto.fetchAPIEntity =
  /*#__PURE__*/
  function () {
    var _fetchAPIEntity = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(apiEntityId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()]
              });
              req.appendTemplatePath(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["/api-entities/", ""])), mapped.apiEntityId);
              return _context7.abrupt("return", req.callAsJson(apiEntitySchema, requestOptions));

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function fetchAPIEntity(_x21, _x22) {
      return _fetchAPIEntity.apply(this, arguments);
    }

    return fetchAPIEntity;
  }()
  /**
   * Download the API Specification file for a an API Version in any of the API Specification formats
   * supported by APIMatic.
   *
   * @param apiEntityId   The ID of the API Entity to download.
   * @param format        The format in which to download the API.<br>The format can be any of the
   *                                       [supported formats](https://docs.apimatic.io/api-transformer/overview-
   *                                       transformer#supported-input-formats).
   * @return Response from the API call
   */
  ;

  _proto.downloadAPISpecification =
  /*#__PURE__*/
  function () {
    var _downloadAPISpecification = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee8(apiEntityId, format, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()],
                format: [format, exportFormatsSchema]
              });
              req.query('format', mapped.format);
              req.appendTemplatePath(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["/api-entities/", "/api-description"])), mapped.apiEntityId);
              return _context8.abrupt("return", req.callAsStream(requestOptions));

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function downloadAPISpecification(_x23, _x24, _x25) {
      return _downloadAPISpecification.apply(this, arguments);
    }

    return downloadAPISpecification;
  }();

  return ApisManagementController;
}(BaseController);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
/**
 * Enum for Platforms
 */

var Platforms;

(function (Platforms) {
  Platforms["CSNETSTANDARDLIB"] = "CS_NET_STANDARD_LIB";
  Platforms["JAVAECLIPSEJRELIB"] = "JAVA_ECLIPSE_JRE_LIB";
  Platforms["PHPGENERICLIBV2"] = "PHP_GENERIC_LIB";
  Platforms["PYTHONGENERICLIB"] = "PYTHON_GENERIC_LIB";
  Platforms["RUBYGENERICLIB"] = "RUBY_GENERIC_LIB";
  Platforms["TSGENERICLIB"] = "TS_GENERIC_LIB";
})(Platforms || (Platforms = {}));
/**
 * Schema for Platforms
 */


var platformsSchema = /*#__PURE__*/stringEnum(Platforms);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var generateSdkViaUrlRequestSchema = /*#__PURE__*/object({
  url: ['url', /*#__PURE__*/string()],
  template: ['template', platformsSchema]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var userCodeGenerationSchema = /*#__PURE__*/object({
  id: ['id', /*#__PURE__*/string()],
  template: ['template', platformsSchema],
  generatedFile: ['generatedFile', /*#__PURE__*/string()],
  generatedOn: ['generatedOn', /*#__PURE__*/string()],
  hashCode: ['hashCode', /*#__PURE__*/string()],
  codeGenerationSource: ['codeGenerationSource', /*#__PURE__*/string()],
  codeGenVersion: ['codeGenVersion', /*#__PURE__*/string()],
  success: ['success', /*#__PURE__*/boolean()],
  userId: ['userId', /*#__PURE__*/string()],
  inputFile: ['inputFile', /*#__PURE__*/string()]
});

var _templateObject$2, _templateObject2$2, _templateObject3$1, _templateObject4$1;
var CodeGenerationExternalApisController = /*#__PURE__*/function (_BaseController) {
  _inheritsLoose(CodeGenerationExternalApisController, _BaseController);

  function CodeGenerationExternalApisController() {
    return _BaseController.apply(this, arguments) || this;
  }

  var _proto = CodeGenerationExternalApisController.prototype;

  /**
   * Generate an SDK for an API by by uploading the API specification file.
   *
   * This endpoint generates and then uploads the generated SDK to APIMatic's cloud storage. An ID for
   * the generation performed is returned as part of the response.
   *
   * This endpoint does not import an API into APIMatic.
   *
   * @param file         The API specification file.<br>The type of the specification file should be
   *                                    any of the [supported formats](https://docs.apimatic.io/api-
   *                                    transformer/overview-transformer#supported-input-formats).
   * @param template     The structure contains platforms that APIMatic CodeGen can generate SDKs and
   *                                    Docs in.
   * @return Response from the API call
   */
  _proto.generateSDKViaFile =
  /*#__PURE__*/
  function () {
    var _generateSDKViaFile = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(file, template, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST', '/code-generations/generate-via-file');
              mapped = req.prepareArgs({
                template: [template, platformsSchema]
              });
              req.header('Content-Type', 'multipart/form-data');
              req.formData({
                file: file,
                template: mapped.template
              });
              return _context.abrupt("return", req.callAsJson(userCodeGenerationSchema, requestOptions));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function generateSDKViaFile(_x, _x2, _x3) {
      return _generateSDKViaFile.apply(this, arguments);
    }

    return generateSDKViaFile;
  }()
  /**
   * Generate an SDK for an API by providing the URL of the API specification file.
   *
   * This endpoint generates and then uploads the generated SDK to APIMatic's cloud storage. An ID for
   * the generation performed is returned as part of the response.
   *
   * This endpoint does not import an API into APIMatic.
   *
   * @param body         Request Body
   * @return Response from the API call
   */
  ;

  _proto.generateSDKViaURL =
  /*#__PURE__*/
  function () {
    var _generateSDKViaURL = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/code-generations/generate-via-url');
              mapped = req.prepareArgs({
                body: [body, generateSdkViaUrlRequestSchema]
              });
              req.header('Content-Type', 'application/vnd.apimatic.userCodeGenerationDto.v1+json');
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(userCodeGenerationSchema, requestOptions));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function generateSDKViaURL(_x4, _x5) {
      return _generateSDKViaURL.apply(this, arguments);
    }

    return generateSDKViaURL;
  }()
  /**
   * Download the SDK generated via the Generate SDK endpoints.
   *
   * @param codegenId  The ID of code generation received in the response of the [Generate SDK Via
   *                             File](https://www.apimatic.io/api-docs-
   *                             preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-
   *                             external-apis/generate-sdk-via-file) or [Generate SDK Via URL ](https://www.apimatic.
   *                             io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-
   *                             generation-external-apis/generate-sdk-via-url) calls.
   * @return Response from the API call
   */
  ;

  _proto.downloadSDK =
  /*#__PURE__*/
  function () {
    var _downloadSDK = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(codegenId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                codegenId: [codegenId, string()]
              });
              req.appendTemplatePath(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["/code-generations/", "/generated-sdk"])), mapped.codegenId);
              return _context3.abrupt("return", req.callAsStream(requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function downloadSDK(_x6, _x7) {
      return _downloadSDK.apply(this, arguments);
    }

    return downloadSDK;
  }()
  /**
   * Get a list of all SDK generations performed with external APIs via the Generate SDK endpoints.
   *
   * @return Response from the API call
   */
  ;

  _proto.listAllCodeGenerations =
  /*#__PURE__*/
  function () {
    var _listAllCodeGenerations = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(requestOptions) {
      var req;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('GET', '/code-generations');
              return _context4.abrupt("return", req.callAsJson(array(userCodeGenerationSchema), requestOptions));

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function listAllCodeGenerations(_x8) {
      return _listAllCodeGenerations.apply(this, arguments);
    }

    return listAllCodeGenerations;
  }()
  /**
   * Download the API Specification file used as input for a specific SDK generation performed via the
   * Generate SDK endpoints.
   *
   * @param codegenId  The ID of the code generation to download the API specification for. The code
   *                             generation ID is received in the response of the [Generate SDK Via File](https://www.
   *                             apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                             endpoints/code-generation-external-apis/generate-sdk-via-file) or [Generate SDK Via
   *                             URL ](https://www.apimatic.io/api-docs-
   *                             preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-
   *                             external-apis/generate-sdk-via-url) calls
   * @return Response from the API call
   */
  ;

  _proto.downloadInputFile =
  /*#__PURE__*/
  function () {
    var _downloadInputFile = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(codegenId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                codegenId: [codegenId, string()]
              });
              req.appendTemplatePath(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteralLoose(["/code-generations/", "/input-file"])), mapped.codegenId);
              return _context5.abrupt("return", req.callAsStream(requestOptions));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function downloadInputFile(_x9, _x10) {
      return _downloadInputFile.apply(this, arguments);
    }

    return downloadInputFile;
  }()
  /**
   * Get details on an SDK generation performed for an external API via the Generate SDK endpoints.
   *
   * @param codegenId  The ID of the code generation to fetch. The code generation ID is received in the
   *                             response of the [Generate SDK Via File](https://www.apimatic.io/api-docs-
   *                             preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-
   *                             external-apis/generate-sdk-via-file) or [Generate SDK Via URL ](https://www.apimatic.
   *                             io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-
   *                             generation-external-apis/generate-sdk-via-url) calls.
   * @return Response from the API call
   */
  ;

  _proto.getACodeGeneration =
  /*#__PURE__*/
  function () {
    var _getACodeGeneration = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(codegenId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                codegenId: [codegenId, string()]
              });
              req.appendTemplatePath(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["/code-generations/", ""])), mapped.codegenId);
              return _context6.abrupt("return", req.callAsJson(userCodeGenerationSchema, requestOptions));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function getACodeGeneration(_x11, _x12) {
      return _getACodeGeneration.apply(this, arguments);
    }

    return getACodeGeneration;
  }()
  /**
   * Delete an SDK generation performed for an API via the Generate SDK endpoints.
   *
   * @param codegenId  The ID of the code generation to delete. The code generation ID is received in the
   *                             response of the [Generate SDK Via File](https://www.apimatic.io/api-docs-
   *                             preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-generation-
   *                             external-apis/generate-sdk-via-file) or [Generate SDK Via URL ](https://www.apimatic.
   *                             io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-
   *                             generation-external-apis/generate-sdk-via-url) calls.
   * @return Response from the API call
   */
  ;

  _proto.deleteCodeGeneration1 =
  /*#__PURE__*/
  function () {
    var _deleteCodeGeneration = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(codegenId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                codegenId: [codegenId, string()]
              });
              req.appendTemplatePath(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["/code-generations/", ""])), mapped.codegenId);
              return _context7.abrupt("return", req.call(requestOptions));

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function deleteCodeGeneration1(_x13, _x14) {
      return _deleteCodeGeneration.apply(this, arguments);
    }

    return deleteCodeGeneration1;
  }();

  return CodeGenerationExternalApisController;
}(BaseController);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var aPIEntityCodeGenerationSchema = /*#__PURE__*/object({
  id: ['id', /*#__PURE__*/string()],
  template: ['template', platformsSchema],
  generatedFile: ['generatedFile', /*#__PURE__*/string()],
  generatedOn: ['generatedOn', /*#__PURE__*/string()],
  hashCode: ['hashCode', /*#__PURE__*/string()],
  codeGenerationSource: ['codeGenerationSource', /*#__PURE__*/string()],
  codeGenVersion: ['codeGenVersion', /*#__PURE__*/string()],
  success: ['success', /*#__PURE__*/boolean()],
  apiEntityId: ['apiEntityId', /*#__PURE__*/string()]
});

var _templateObject$3, _templateObject2$3, _templateObject3$2, _templateObject4$2, _templateObject5$1;
var CodeGenerationImportedApisController = /*#__PURE__*/function (_BaseController) {
  _inheritsLoose(CodeGenerationImportedApisController, _BaseController);

  function CodeGenerationImportedApisController() {
    return _BaseController.apply(this, arguments) || this;
  }

  var _proto = CodeGenerationImportedApisController.prototype;

  /**
   * Generate an SDK for an API Version.
   *
   * This endpoint generates and then uploads the generated SDK to APIMatic's cloud storage. An ID for
   * the generation performed is returned as part of the response.
   *
   * @param apiEntityId   The ID of the API Entity to generate the SDK for.
   * @param template      The structure contains platforms that APIMatic CodeGen can generate SDKs and
   *                                   Docs in.
   * @return Response from the API call
   */
  _proto.generateSDK =
  /*#__PURE__*/
  function () {
    var _generateSDK = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(apiEntityId, template, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()],
                template: [template, platformsSchema]
              });
              req.header('Content-Type', 'application/x-www-form-urlencoded');
              req.form({
                template: mapped.template
              });
              req.appendTemplatePath(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["/api-entities/", "/code-generations/generate"])), mapped.apiEntityId);
              return _context.abrupt("return", req.callAsJson(aPIEntityCodeGenerationSchema, requestOptions));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function generateSDK(_x, _x2, _x3) {
      return _generateSDK.apply(this, arguments);
    }

    return generateSDK;
  }()
  /**
   * Download the SDK generated via the Generate SDK endpoint.
   *
   * @param apiEntityId   The ID of the API Entity for which the SDK was generated.
   * @param codegenId     The ID of code generation received in the response of the [SDK generation
   *                                call](https://www.apimatic.io/api-docs-
   *                                preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-
   *                                generation-imported-apis/generate-sdk).
   * @return Response from the API call
   */
  ;

  _proto.downloadSDK =
  /*#__PURE__*/
  function () {
    var _downloadSDK = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(apiEntityId, codegenId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()],
                codegenId: [codegenId, string()]
              });
              req.appendTemplatePath(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteralLoose(["/api-entities/", "/code-generations/", "/generated-sdk"])), mapped.apiEntityId, mapped.codegenId);
              return _context2.abrupt("return", req.callAsStream(requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function downloadSDK(_x4, _x5, _x6) {
      return _downloadSDK.apply(this, arguments);
    }

    return downloadSDK;
  }()
  /**
   * Get a list of all SDK generations done against an API Version via the Generate SDK endpoint.
   *
   * @param apiEntityId   The ID of the API Entity for which to list code generations.
   * @return Response from the API call
   */
  ;

  _proto.listAllCodeGenerations =
  /*#__PURE__*/
  function () {
    var _listAllCodeGenerations = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(apiEntityId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()]
              });
              req.appendTemplatePath(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteralLoose(["/api-entities/", "/code-generations"])), mapped.apiEntityId);
              return _context3.abrupt("return", req.callAsJson(array(aPIEntityCodeGenerationSchema), requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function listAllCodeGenerations(_x7, _x8) {
      return _listAllCodeGenerations.apply(this, arguments);
    }

    return listAllCodeGenerations;
  }()
  /**
   * Get details on an SDK generation performed via the Generate SDK endpoint.
   *
   * @param apiEntityId   The ID of the API Entity to fetch the code generation for.
   * @param codegenId     The ID of the code generation to fetch. The code generation ID is received in the
   *                                response of the [SDK generation call](https://www.apimatic.io/api-docs-
   *                                preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-
   *                                generation-imported-apis/generate-sdk).
   * @return Response from the API call
   */
  ;

  _proto.getACodeGeneration =
  /*#__PURE__*/
  function () {
    var _getACodeGeneration = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(apiEntityId, codegenId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()],
                codegenId: [codegenId, string()]
              });
              req.appendTemplatePath(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteralLoose(["/api-entities/", "/code-generations/", ""])), mapped.apiEntityId, mapped.codegenId);
              return _context4.abrupt("return", req.callAsJson(aPIEntityCodeGenerationSchema, requestOptions));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getACodeGeneration(_x9, _x10, _x11) {
      return _getACodeGeneration.apply(this, arguments);
    }

    return getACodeGeneration;
  }()
  /**
   * Delete an SDK generation performed for an API Version via the Generate SDK endpoint.
   *
   * @param apiEntityId   The ID of the API Entity to delete the code generation for.
   * @param codegenId     The ID of the code generation to delete. The code generation ID is received in the
   *                                response of the [SDK generation call](https://www.apimatic.io/api-docs-
   *                                preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-endpoints/code-
   *                                generation-imported-apis/generate-sdk).
   * @return Response from the API call
   */
  ;

  _proto.deleteCodeGeneration =
  /*#__PURE__*/
  function () {
    var _deleteCodeGeneration = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(apiEntityId, codegenId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()],
                codegenId: [codegenId, string()]
              });
              req.appendTemplatePath(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteralLoose(["/api-entities/", "/code-generations/", ""])), mapped.apiEntityId, mapped.codegenId);
              return _context5.abrupt("return", req.call(requestOptions));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function deleteCodeGeneration(_x12, _x13, _x14) {
      return _deleteCodeGeneration.apply(this, arguments);
    }

    return deleteCodeGeneration;
  }();

  return CodeGenerationImportedApisController;
}(BaseController);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
/**
 * Enum for Accept3
 */

var Accept3;

(function (Accept3) {
  Accept3["EnumApplicationzip"] = "application/zip";
})(Accept3 || (Accept3 = {}));
/**
 * Schema for Accept3
 */


var accept3Schema = /*#__PURE__*/stringEnum(Accept3);

var _templateObject$4, _templateObject2$4, _templateObject3$3, _templateObject4$3;
var DocsPortalManagementController = /*#__PURE__*/function (_BaseController) {
  _inheritsLoose(DocsPortalManagementController, _BaseController);

  function DocsPortalManagementController() {
    return _BaseController.apply(this, arguments) || this;
  }

  var _proto = DocsPortalManagementController.prototype;

  /**
   * Publish artifacts for a Hosted Portal.
   *
   * This endpoint regenerates all the artifacts for a hosted portal and uploads them to APIMatic's cloud
   * storage, from where the Portal fetches them. These artifacts include:
   *
   * 1. SDKs
   * 2. Docs
   * 3. API Specification files
   *
   * Call this endpoint to update your Hosted Portal after you update an API Entity via any of the Import
   * API Endpoints.
   *
   * __**Note: If you have an embedded portal against the same API Entity, artifacts for that portal will
   * get updated as well.**__
   *
   * @param apiEntityId   The ID of the API Entity to update the portal artifacts for.
   * @return Response from the API call
   */
  _proto.publishHostedPortal =
  /*#__PURE__*/
  function () {
    var _publishHostedPortal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(apiEntityId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()]
              });
              req.appendTemplatePath(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["/api-entities/", "/hosted-portal"])), mapped.apiEntityId);
              return _context.abrupt("return", req.call(requestOptions));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function publishHostedPortal(_x, _x2) {
      return _publishHostedPortal.apply(this, arguments);
    }

    return publishHostedPortal;
  }()
  /**
   * Publish artifacts for an Embedded Portal and get the Portal Embed script.
   *
   * This endpoint regenerates all the artifacts for an embedded portal and uploads them to APIMatic's
   * cloud storage, from where the Portal fetches them. These artifacts include:
   *
   * 1. SDKs
   * 2. Docs
   * 3. API Specification files
   *
   * Call this endpoint to update your Embedded Portal after you update an API Entity via any of the
   * Import API Endpoints. This endpoint returns the Portal Embed script in the response.
   *
   * __**Note: If you have a hosted portal against the same API Entity, artifacts for that portal will
   * get updated as well.**__
   *
   * @param apiEntityId   The ID of the API Entity to update the portal artifacts for.
   * @return Response from the API call
   */
  ;

  _proto.publishEmbeddedPortal =
  /*#__PURE__*/
  function () {
    var _publishEmbeddedPortal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(apiEntityId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()]
              });
              req.appendTemplatePath(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteralLoose(["/api-entities/", "/embedded-portal"])), mapped.apiEntityId);
              return _context2.abrupt("return", req.call(requestOptions));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function publishEmbeddedPortal(_x3, _x4) {
      return _publishEmbeddedPortal.apply(this, arguments);
    }

    return publishEmbeddedPortal;
  }()
  /**
   * Generate an On-premise Documentation Portal for an API Entity. This endpoint generates all artifacts
   * for the Portal and packages them together into a zip file along with the required HTML, CSS and JS
   * files. The generated artifacts include:
   *
   * 1. SDKs
   * 2. Docs
   * 3. API Specification files
   *
   * The endpoint returns a zip file that contains a static Site and can be hosted on any Web Server.
   *
   * @param apiEntityId   The ID of the API Entity to generate the Portal for.
   * @param accept        Example: application/zip
   * @return Response from the API call
   */
  ;

  _proto.generateOnPremPortalViaAPIEntity =
  /*#__PURE__*/
  function () {
    var _generateOnPremPortalViaAPIEntity = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(apiEntityId, accept, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()],
                accept: [accept, accept3Schema]
              });
              req.header('Accept', mapped.accept);
              req.appendTemplatePath(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteralLoose(["/api-entities/", "/on-prem-portal"])), mapped.apiEntityId);
              return _context3.abrupt("return", req.call(requestOptions));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function generateOnPremPortalViaAPIEntity(_x5, _x6, _x7) {
      return _generateOnPremPortalViaAPIEntity.apply(this, arguments);
    }

    return generateOnPremPortalViaAPIEntity;
  }()
  /**
   * Generate an On-premise Documentation Portal by uploading a Portal Build Input. This endpoint
   * generates all artifacts for the Portal and packages them together into a zip file along with the
   * required HTML, CSS and JS files. The generated artifacts include:
   *
   * 1. SDKs
   * 2. Docs
   * 3. API Specification files
   *
   * The endpoint returns a zip file that contains a static Site and can be hosted on any Web Server.
   *
   * @param file        The input file to the Portal Generator. Must contain the build file.
   * @return Response from the API call
   */
  ;

  _proto.generateOnPremPortalViaBuildInput =
  /*#__PURE__*/
  function () {
    var _generateOnPremPortalViaBuildInput = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(file, requestOptions) {
      var req;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('POST', '/portal');
              req.header('ContentType', 'multipart/form-data');
              req.formData({
                file: file
              });
              return _context4.abrupt("return", req.callAsStream(requestOptions));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function generateOnPremPortalViaBuildInput(_x8, _x9) {
      return _generateOnPremPortalViaBuildInput.apply(this, arguments);
    }

    return generateOnPremPortalViaBuildInput;
  }()
  /**
   * Unpublish a Hosted or Embedded Portal published for an API Entity. Calling this endpoint deletes all
   * the published artifacts for a Portal from APIMatic's cloud storage.
   *
   * In case of a Hosted Portal, to completely remove the Portal, this endpoint needs to be called
   * against all API versions that the Portal hosts.
   *
   * In case of an Embedded Portal, to completely remove the Portal, the user needs to manually remove
   * the Portal Embed script from the embedding site.
   *
   * @param apiEntityId   The ID of the API Entity to unpublish the Portal artifacts for.
   * @return Response from the API call
   */
  ;

  _proto.unpublishPortal =
  /*#__PURE__*/
  function () {
    var _unpublishPortal = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(apiEntityId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()]
              });
              req.appendTemplatePath(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteralLoose(["/api-entities/", "/portal"])), mapped.apiEntityId);
              return _context5.abrupt("return", req.call(requestOptions));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function unpublishPortal(_x10, _x11) {
      return _unpublishPortal.apply(this, arguments);
    }

    return unpublishPortal;
  }();

  return DocsPortalManagementController;
}(BaseController);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
/**
 * Enum for Id
 */

var Id;

(function (Id) {
  Id["Enum5dcd2b5893c3e31a206f30c4"] = "5dcd2b5893c3e31a206f30c4";
})(Id || (Id = {}));
/**
 * Schema for Id
 */


var idSchema = /*#__PURE__*/stringEnum(Id);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
/**
 * Enum for Link
 */

var Link;

(function (Link) {
  Link["EnumHttpswwwnugetorgpackagesmyPackage111"] = "https://www.nuget.org/packages/myPackage/1.1.1";
})(Link || (Link = {}));
/**
 * Schema for Link
 */


var linkSchema = /*#__PURE__*/stringEnum(Link);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var cSNETSTANDARDLIBSchema = /*#__PURE__*/object({
  id: ['id', /*#__PURE__*/optional(idSchema)],
  packageRepository: ['packageRepository', /*#__PURE__*/string()],
  packageName: ['packageName', /*#__PURE__*/string()],
  version: ['version', /*#__PURE__*/string()],
  additionalDeploymentInformation: ['additionalDeploymentInformation', /*#__PURE__*/unknown()],
  link: ['link', /*#__PURE__*/optional(linkSchema)]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var templatesPackageDeploymentInformationSchema = /*#__PURE__*/object({
  cSNETSTANDARDLIB: ['CS_NET_STANDARD_LIB', /*#__PURE__*/lazy(function () {
    return cSNETSTANDARDLIBSchema;
  })]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var packageDeploymentInformationSchema = /*#__PURE__*/object({
  id: ['id', /*#__PURE__*/string()],
  templatesPackageDeploymentInformation: ['templatesPackageDeploymentInformation', /*#__PURE__*/lazy(function () {
    return templatesPackageDeploymentInformationSchema;
  })]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var authorIdentifiersSchema = /*#__PURE__*/object({
  email: ['Email', /*#__PURE__*/string()],
  userName: ['UserName', /*#__PURE__*/string()]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var publishedPackageSchema = /*#__PURE__*/object({
  id: ['id', /*#__PURE__*/string()],
  createdOn: ['createdOn', /*#__PURE__*/string()],
  apiEntityId: ['apiEntityId', /*#__PURE__*/string()],
  packageRepository: ['packageRepository', /*#__PURE__*/string()],
  template: ['template', /*#__PURE__*/string()],
  packageName: ['packageName', /*#__PURE__*/string()],
  version: ['version', /*#__PURE__*/string()],
  additionalDeploymentInformation: ['additionalDeploymentInformation', /*#__PURE__*/unknown()],
  authorIdentifiers: ['authorIdentifiers', /*#__PURE__*/lazy(function () {
    return authorIdentifiersSchema;
  })],
  link: ['link', /*#__PURE__*/string()]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
/**
 * Enum for PackageRepositories
 */

var PackageRepositories;

(function (PackageRepositories) {
  PackageRepositories["Npm"] = "Npm";
  PackageRepositories["PyPI"] = "PyPI";
  PackageRepositories["RubyGems"] = "RubyGems";
})(PackageRepositories || (PackageRepositories = {}));
/**
 * Schema for PackageRepositories
 */


var packageRepositoriesSchema = /*#__PURE__*/stringEnum(PackageRepositories);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var publishPackageInputSchema = /*#__PURE__*/object({
  packageRepository: ['packageRepository', packageRepositoriesSchema],
  template: ['template', platformsSchema],
  packageName: ['packageName', /*#__PURE__*/string()],
  version: ['version', /*#__PURE__*/string()],
  additionalDeploymentInformation: ['additionalDeploymentInformation', /*#__PURE__*/unknown()]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var updateTemplatesPackageDeploymentInformationSchema = /*#__PURE__*/object({
  cSNETSTANDARDLIB: ['CS_NET_STANDARD_LIB', /*#__PURE__*/lazy(function () {
    return cSNETSTANDARDLIBSchema;
  })]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var updatePackageDeploymentInformationSchema = /*#__PURE__*/object({
  templatesPackageDeploymentInformation: ['templatesPackageDeploymentInformation', /*#__PURE__*/lazy(function () {
    return updateTemplatesPackageDeploymentInformationSchema;
  })]
});

var _templateObject$5, _templateObject2$5, _templateObject3$4, _templateObject4$4, _templateObject5$2;
var PackageDeploymentController = /*#__PURE__*/function (_BaseController) {
  _inheritsLoose(PackageDeploymentController, _BaseController);

  function PackageDeploymentController() {
    return _BaseController.apply(this, arguments) || this;
  }

  var _proto = PackageDeploymentController.prototype;

  /**
   * Update  Package Deployment Information for an API Entity. To find out more on how to publish a
   * package visit: [Adding Packages to Portal](https://docs.apimatic.io/developer-experience-
   * portal/adding%20packages%20to%20portal/)
   *
   * To find out more about publishing packages visit: [Publish Packages](https://docs.apimatic.
   * io/developer-experience-portal/adding%20packages%20to%20portal/)
   *
   * @param apiEntityId   Unique API Entity Identifier
   * @param body          Package Deployment Information to be updated.
   *                                                                   This comprises of the Platform Template, the
   *                                                                   Repository Name and Version.
   * @return Response from the API call
   */
  _proto.updatePackageDeploymentInformation =
  /*#__PURE__*/
  function () {
    var _updatePackageDeploymentInformation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(apiEntityId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('PUT');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()],
                body: [body, updatePackageDeploymentInformationSchema]
              });
              req.header('Content-Type', 'application/json');
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteralLoose(["/api-entities/", "/docs/package-deployment-information"])), mapped.apiEntityId);
              return _context.abrupt("return", req.call(requestOptions));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function updatePackageDeploymentInformation(_x, _x2, _x3) {
      return _updatePackageDeploymentInformation.apply(this, arguments);
    }

    return updatePackageDeploymentInformation;
  }()
  /**
   * Query Package deployment details added for an API Entity.
   * To find out more about adding packages to portal: [Adding Packages to Portal](https://docs.apimatic.
   * io/developer-experience-portal/adding%20packages%20to%20portal/)
   *
   * @param apiEntityId   Unique API Entity identifier
   * @return Response from the API call
   */
  ;

  _proto.packageDeploymentInformation =
  /*#__PURE__*/
  function () {
    var _packageDeploymentInformation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(apiEntityId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('GET');
              req.baseUrl('default');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()]
              });
              req.appendTemplatePath(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteralLoose(["/api-entities/", "/docs/package-deployment-information"])), mapped.apiEntityId);
              return _context2.abrupt("return", req.callAsJson(packageDeploymentInformationSchema, requestOptions));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function packageDeploymentInformation(_x4, _x5) {
      return _packageDeploymentInformation.apply(this, arguments);
    }

    return packageDeploymentInformation;
  }()
  /**
   * Returns logs for all packages published for the API.
   *
   * @param apiEntityId   Unique API Identifier
   * @return Response from the API call
   */
  ;

  _proto.getPublishedPackagesForAPI =
  /*#__PURE__*/
  function () {
    var _getPublishedPackagesForAPI = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(apiEntityId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()]
              });
              req.appendTemplatePath(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteralLoose(["/api-entities/", "/published-packages"])), mapped.apiEntityId);
              return _context3.abrupt("return", req.callAsJson(array(publishedPackageSchema), requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getPublishedPackagesForAPI(_x6, _x7) {
      return _getPublishedPackagesForAPI.apply(this, arguments);
    }

    return getPublishedPackagesForAPI;
  }()
  /**
   * Publish a new package for API by specifying package name and version number.
   *
   * To publish packages using this API, you will first need to add package repository credentials to
   * your APIMatic account.
   * Check out the [docs](https://docs.apimatic.io/advanced/publishing-a-package/) for a guide on adding
   * package repository credentials
   *
   * @param apiEntityId   Unique API Identifier
   * @param body
   * @return Response from the API call
   */
  ;

  _proto.publishAPackageForAPI =
  /*#__PURE__*/
  function () {
    var _publishAPackageForAPI = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(apiEntityId, body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('POST');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()],
                body: [body, publishPackageInputSchema]
              });
              req.header('Content-Type', 'application/json');
              req.json(mapped.body);
              req.appendTemplatePath(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteralLoose(["/api-entities/", "/published-packages/"])), mapped.apiEntityId);
              return _context4.abrupt("return", req.callAsJson(publishedPackageSchema, requestOptions));

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function publishAPackageForAPI(_x8, _x9, _x10) {
      return _publishAPackageForAPI.apply(this, arguments);
    }

    return publishAPackageForAPI;
  }()
  /**
   * Pull details for a certain published package by specifying Published Package Id.
   *
   * @param apiEntityId          Unique API Identifier
   * @param publishedPackageId   Unique Published Package Identifier
   * @return Response from the API call
   */
  ;

  _proto.getAPublishedPackage =
  /*#__PURE__*/
  function () {
    var _getAPublishedPackage = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(apiEntityId, publishedPackageId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('GET');
              req.baseUrl('default');
              mapped = req.prepareArgs({
                apiEntityId: [apiEntityId, string()],
                publishedPackageId: [publishedPackageId, string()]
              });
              req.appendTemplatePath(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteralLoose(["/api/api-entities/", "/published-packages/", ""])), mapped.apiEntityId, mapped.publishedPackageId);
              return _context5.abrupt("return", req.callAsJson(publishedPackageSchema, requestOptions));

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getAPublishedPackage(_x11, _x12, _x13) {
      return _getAPublishedPackage.apply(this, arguments);
    }

    return getAPublishedPackage;
  }();

  return PackageDeploymentController;
}(BaseController);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var transformationSchema = /*#__PURE__*/object({
  id: ['id', /*#__PURE__*/string()],
  transformedOn: ['transformedOn', /*#__PURE__*/string()],
  userId: ['userId', /*#__PURE__*/string()],
  inputtedFile: ['inputtedFile', /*#__PURE__*/string()],
  generatedFile: ['generatedFile', /*#__PURE__*/string()],
  exportFormat: ['exportFormat', /*#__PURE__*/string()],
  transformationSource: ['transformationSource', /*#__PURE__*/string()],
  transformationInput: ['transformationInput', /*#__PURE__*/string()],
  codeGenVersion: ['codeGenVersion', /*#__PURE__*/string()],
  success: ['success', /*#__PURE__*/boolean()],
  importSummary: ['importSummary', /*#__PURE__*/optional( /*#__PURE__*/lazy(function () {
    return apiValidationSummarySchema;
  }))],
  apiValidationSummary: ['apiValidationSummary', /*#__PURE__*/optional( /*#__PURE__*/lazy(function () {
    return apiValidationSummarySchema;
  }))]
});

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
var transformViaUrlRequestSchema = /*#__PURE__*/object({
  url: ['url', /*#__PURE__*/string()],
  exportFormat: ['export_format', exportFormatsSchema]
});

var _templateObject$6, _templateObject2$6, _templateObject3$5, _templateObject4$5;
var TransformationController = /*#__PURE__*/function (_BaseController) {
  _inheritsLoose(TransformationController, _BaseController);

  function TransformationController() {
    return _BaseController.apply(this, arguments) || this;
  }

  var _proto = TransformationController.prototype;

  /**
   * Transform an API into any of the supported API specification formats by uploading the API
   * specification file.
   *
   * This endpoint transforms and then uploads the transformed API specification to APIMatic's cloud
   * storage. An ID for the transformation performed is returned as part of the response.
   *
   * @param file          The API specification file.<br>The type of the specification file should be
   *                                       any of the [supported formats](https://docs.apimatic.io/api-
   *                                       transformer/overview-transformer#supported-input-formats).
   * @param exportFormat  The structure contains API specification formats that Transformer can
   *                                       convert to.
   * @return Response from the API call
   */
  _proto.transformViaFile =
  /*#__PURE__*/
  function () {
    var _transformViaFile = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee(file, exportFormat, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST', '/transformations/transform-via-file');
              mapped = req.prepareArgs({
                exportFormat: [exportFormat, exportFormatsSchema]
              });
              req.header('ContentType', 'multipart/form-data');
              req.formData({
                file: file,
                export_format: mapped.exportFormat
              });
              return _context.abrupt("return", req.callAsJson(transformationSchema, requestOptions));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function transformViaFile(_x, _x2, _x3) {
      return _transformViaFile.apply(this, arguments);
    }

    return transformViaFile;
  }()
  /**
   * Transform an API into any of the supported API specification formats by providing the URL of the API
   * specification file.
   *
   * This endpoint transforms and then uploads the transformed API specification to APIMatic's cloud
   * storage. An ID for the transformation performed is returned as part of the response.
   *
   * @param body         Request Body
   * @return Response from the API call
   */
  ;

  _proto.transformViaURL =
  /*#__PURE__*/
  function () {
    var _transformViaURL = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(body, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/transformations/transform-via-url');
              mapped = req.prepareArgs({
                body: [body, transformViaUrlRequestSchema]
              });
              req.header('Content-Type', 'application/vnd.apimatic.urlTransformDto.v1+json');
              req.json(mapped.body);
              return _context2.abrupt("return", req.callAsJson(transformationSchema, requestOptions));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function transformViaURL(_x4, _x5) {
      return _transformViaURL.apply(this, arguments);
    }

    return transformViaURL;
  }()
  /**
   * Download the transformed API specification file transformed via the Transformation endpoints.
   *
   * @param transformationId  The ID of transformation received in the response of the [Transform Via File
   *                                    ](https://www.apimatic.io/api-docs-
   *                                    preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-file) or [Transform Via URL  ](https:
   *                                    //www.apimatic.io/api-docs-
   *                                    preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-url) calls.
   * @return Response from the API call
   */
  ;

  _proto.downloadTransformedFile =
  /*#__PURE__*/
  function () {
    var _downloadTransformedFile = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3(transformationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                transformationId: [transformationId, string()]
              });
              req.appendTemplatePath(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteralLoose(["/transformations/", "/converted-file"])), mapped.transformationId);
              return _context3.abrupt("return", req.callAsStream(requestOptions));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function downloadTransformedFile(_x6, _x7) {
      return _downloadTransformedFile.apply(this, arguments);
    }

    return downloadTransformedFile;
  }()
  /**
   * Download the API Specification file used as input for a particular Transformation performed via the
   * Transformation endpoints.
   *
   * @param transformationId  The ID of the transformation to download the API specification for. The
   *                                    transformation ID is received in the response of the [Transform Via File
   *                                    ](https://www.apimatic.io/api-docs-
   *                                    preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-file) or [Transform Via URL](https://www.
   *                                    apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-url) calls.
   * @return Response from the API call
   */
  ;

  _proto.downloadInputFile =
  /*#__PURE__*/
  function () {
    var _downloadInputFile = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4(transformationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                transformationId: [transformationId, string()]
              });
              req.appendTemplatePath(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteralLoose(["/transformations/", "/input-file"])), mapped.transformationId);
              return _context4.abrupt("return", req.callAsStream(requestOptions));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function downloadInputFile(_x8, _x9) {
      return _downloadInputFile.apply(this, arguments);
    }

    return downloadInputFile;
  }()
  /**
   * Get a list of all API transformations performed.
   *
   * @return Response from the API call
   */
  ;

  _proto.listAllTransformations =
  /*#__PURE__*/
  function () {
    var _listAllTransformations = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee5(requestOptions) {
      var req;
      return runtime_1.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('GET', '/transformations');
              return _context5.abrupt("return", req.callAsJson(array(transformationSchema), requestOptions));

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function listAllTransformations(_x10) {
      return _listAllTransformations.apply(this, arguments);
    }

    return listAllTransformations;
  }()
  /**
   * Get details on a particular Transformation performed via the Transformation endpoints.
   *
   * @param transformationId  The ID of the transformation to fetch. The transformation ID is received in
   *                                    the response of the [Transform Via File ](https://www.apimatic.io/api-docs-
   *                                    preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-file) or [Transform Via URL  ](https:
   *                                    //www.apimatic.io/api-docs-
   *                                    preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-url) calls.
   * @return Response from the API call
   */
  ;

  _proto.getATransformation =
  /*#__PURE__*/
  function () {
    var _getATransformation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee6(transformationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              req = this.createRequest('GET');
              mapped = req.prepareArgs({
                transformationId: [transformationId, string()]
              });
              req.appendTemplatePath(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteralLoose(["/transformations/", ""])), mapped.transformationId);
              return _context6.abrupt("return", req.callAsJson(transformationSchema, requestOptions));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function getATransformation(_x11, _x12) {
      return _getATransformation.apply(this, arguments);
    }

    return getATransformation;
  }()
  /**
   * Delete a particular Transformation performed for an API via the Transformation endpoints.
   *
   * @param transformationId  The ID of the transformation to delete. The transformation ID is received in
   *                                    the response of the [Transform Via File ](https://www.apimatic.io/api-docs-
   *                                    preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-file) or [Transform Via URL](https://www.
   *                                    apimatic.io/api-docs-preview/dashboard/60eea3b7a73395c3052d961b/v/3_0#/http/api-
   *                                    endpoints/transformation/transform-via-url) calls.
   * @return Response from the API call
   */
  ;

  _proto.deleteTransformation =
  /*#__PURE__*/
  function () {
    var _deleteTransformation = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee7(transformationId, requestOptions) {
      var req, mapped;
      return runtime_1.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              req = this.createRequest('DELETE');
              mapped = req.prepareArgs({
                transformationId: [transformationId, string()]
              });
              req.appendTemplatePath(_templateObject4$5 || (_templateObject4$5 = _taggedTemplateLiteralLoose(["/transformations/", ""])), mapped.transformationId);
              return _context7.abrupt("return", req.call(requestOptions));

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function deleteTransformation(_x13, _x14) {
      return _deleteTransformation.apply(this, arguments);
    }

    return deleteTransformation;
  }();

  return TransformationController;
}(BaseController);

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
/**
 * Enum for ContentType
 */

var ContentType;

(function (ContentType) {
  ContentType["EnumMultipartformdata"] = "multipart/form-data";
})(ContentType || (ContentType = {}));

/**
 * Apimatic APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */
/**
 * Enum for ImplementationType
 */

var ImplementationType;

(function (ImplementationType) {
  ImplementationType["Structure"] = "Structure";
  ImplementationType["Enumeration"] = "Enumeration";
  ImplementationType["Exception"] = "Exception";
})(ImplementationType || (ImplementationType = {}));

export { APIValidationExternalApisController, APIValidationImportedApisController, Accept, Accept2, Accept3, ApisManagementController, Client, CodeGenerationExternalApisController, CodeGenerationImportedApisController, ContentType, DEFAULT_CONFIGURATION, DocsPortalManagementController, Environment, ExportFormats, Id, ImplementationType, Link, PackageDeploymentController, PackageRepositories, Platforms, TransformationController };
//# sourceMappingURL=sdk.esm.js.map
