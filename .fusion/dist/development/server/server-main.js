if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('E:\Apps\dice\node_modules\source-map-support\source-map-support.js').install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "4d2dd89e272010aa91d4";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (typeof dep === "undefined") hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (typeof dep === "undefined") hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fusion-cli/build/client-chunk-bundle-url-map-loader.js!./":
/*!*****************************************************************************!*\
  !*** ./node_modules/fusion-cli/build/client-chunk-bundle-url-map-loader.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = new Map(
    [["main",[["es5","client-main.js"]]],["vendor",[["es5","client-vendor.js"]]]].map(entry => { //[number, Map<string,string>]
      entry[1] = new Map(
        entry[1].map(group => {
          group[1] = __webpack_require__.p + group[1];
          return group;
        })
      );
      return entry;
    })
  );

/***/ }),

/***/ "./node_modules/fusion-cli/build/i18n-manifest-instrumentation-loader.js!./":
/*!*******************************************************************************!*\
  !*** ./node_modules/fusion-cli/build/i18n-manifest-instrumentation-loader.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/fusion-cli/build/server-error.js":
/*!*******************************************************!*\
  !*** ./node_modules/fusion-cli/build/server-error.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
const React = __webpack_require__(/*! react */ "react");

const RedBox = __webpack_require__(/*! redbox-react */ "redbox-react").RedBoxError;

const ReactDOMServer = __webpack_require__(/*! react-dom/server */ "react-dom/server");

function renderError(error
/*: any */
= {}) {
  const content = ['<!DOCTYPE html><html><head><title>Server error</title></head><body>'];
  let displayError;

  if (error instanceof Error) {
    displayError = error;
  } else if (typeof error === 'string') {
    displayError = new Error(error);
  } else {
    displayError = new Error(error.message);
    displayError.stack = error.stack;
    displayError.name = error.name;
  }

  const errorComponent = ReactDOMServer.renderToString(React.createElement(RedBox, {
    error: displayError
  }));
  content.push(errorComponent);
  content.push('</body></html>');
  return content.join('');
}

module.exports.renderError = renderError;

/***/ }),

/***/ "./node_modules/fusion-cli/build/sync-chunk-ids-loader.js!./":
/*!****************************************************************!*\
  !*** ./node_modules/fusion-cli/build/sync-chunk-ids-loader.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ["vendor","main"];

/***/ }),

/***/ "./node_modules/fusion-cli/entries/server-entry.js":
/*!*********************************************************!*\
  !*** ./node_modules/fusion-cli/entries/server-entry.js ***!
  \*********************************************************/
/*! exports provided: start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins_assets_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins/assets-plugin */ "./node_modules/fusion-cli/plugins/assets-plugin.js");
/* harmony import */ var _plugins_assets_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins_assets_plugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _plugins_context_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugins/context-plugin */ "./node_modules/fusion-cli/plugins/context-plugin.js");
/* harmony import */ var _plugins_context_plugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_plugins_context_plugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plugins_server_error_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugins/server-error-plugin */ "./node_modules/fusion-cli/plugins/server-error-plugin.js");
/* harmony import */ var _plugins_server_error_plugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_plugins_server_error_plugin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/strip-prefix.js */ "./node_modules/fusion-cli/lib/strip-prefix.js");
/* harmony import */ var _lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER__ */ "./node_modules/fusion-cli/build/i18n-manifest-instrumentation-loader.js!./");
/* harmony import */ var _SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_6__);
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */





 // $FlowFixMe

 // eslint-disable-line

const {
  prefix,
  webpackPublicPath
} = Object(fusion_core__WEBPACK_IMPORTED_MODULE_1__["getEnv"])();
let AssetsPlugin;
/*
Webpack has a configuration option called `publicPath`, which determines the
base path for all assets within an application

The property can be set at runtime by assigning to a magic
global variable called `__webpack_public_path__`.

We set this value at runtime because its value depends on the
`ROUTE_PREFIX` and `CDN_URL` environment variables.

Webpack compiles the `__webpack_public_path__ = ...` assignment expression
into `__webpack_require__.p = ...` and uses it for HMR manifest requests
*/
// $FlowFixMe

__webpack_require__.p = webpackPublicPath + '/'; // eslint-disable-line
// The shared entry must be imported after setting __webpack_public_path__.
// We use a require as imports are hoisted and would be run before setting __webpack_public_path__.
// $FlowFixMe

const main = __webpack_require__(/*! __FRAMEWORK_SHARED_ENTRY__ */ "./src/main.js"); // eslint-disable-line import/no-unresolved, import/no-extraneous-dependencies


let server = null;
const state = {
  serve: null
};
const initialize = main ? main.default || main : () => {
  throw new Error('App should export a function');
};
async function start({
  port,
  dir = '.'
  /*: any */

}) {
  AssetsPlugin = _plugins_assets_plugin__WEBPACK_IMPORTED_MODULE_2___default()(dir); // TODO(#21): support https.createServer(credentials, listener);

  server = http__WEBPACK_IMPORTED_MODULE_0___default.a.createServer();
  await reload();
  server.on('request', (req, res) => {
    if (prefix) _lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_5___default()(req, prefix); // $FlowFixMe

    state.serve(req, res).catch(e => {
      // $FlowFixMe
      state.app.onerror(e);
    });
  });
  return new Promise(resolve => {
    server && server.listen(port, () => {
      resolve(server);
    });
  });
}

async function reload() {
  const app = await initialize();
  reverseRegister(app, AssetsPlugin);
  reverseRegister(app, _plugins_context_plugin__WEBPACK_IMPORTED_MODULE_3___default.a);

  if (server) {
    app.register(fusion_core__WEBPACK_IMPORTED_MODULE_1__["HttpServerToken"],
    /*#__PURE__*/
    Object(fusion_core__WEBPACK_IMPORTED_MODULE_1__["createPlugin"])({
      provides: () => server
    }));
  }

  if (true) {
    reverseRegister(app, _plugins_server_error_plugin__WEBPACK_IMPORTED_MODULE_4___default.a);
  }

  state.serve = app.callback(); // $FlowFixMe

  state.app = app;
}

function reverseRegister(app, token, plugin) {
  app.register(token, plugin);
  app.plugins.unshift(app.plugins.pop());
} // $FlowFixMe


if (true) {
  // $FlowFixMe
  module.hot.accept(/*! __FRAMEWORK_SHARED_ENTRY__ */ "./src/main.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (reload)(__WEBPACK_OUTDATED_DEPENDENCIES__); }); // $FlowFixMe

  module.hot.accept(/*! __SECRET_BUNDLE_MAP_LOADER__ */ "./node_modules/fusion-cli/build/client-chunk-bundle-url-map-loader.js!./", function() {  }); // $FlowFixMe

  module.hot.accept(/*! __SECRET_SYNC_CHUNK_IDS_LOADER__ */ "./node_modules/fusion-cli/build/sync-chunk-ids-loader.js!./", function() {  });
}

/***/ }),

/***/ "./node_modules/fusion-cli/get-compilation-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/fusion-cli/get-compilation-metadata.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */

/*
This is where webpack-related things should be defined
*/
// custom loaders: see build/compiler.js
// $FlowFixMe
const chunkUrlMap = __webpack_require__(/*! __SECRET_BUNDLE_MAP_LOADER__ */ "./node_modules/fusion-cli/build/client-chunk-bundle-url-map-loader.js!./"); // eslint-disable-line import/no-unresolved, import/no-extraneous-dependencies
// $FlowFixMe


const syncChunks = __webpack_require__(/*! __SECRET_SYNC_CHUNK_IDS_LOADER__ */ "./node_modules/fusion-cli/build/sync-chunk-ids-loader.js!./"); // eslint-disable-line import/no-unresolved, import/no-extraneous-dependencies


module.exports = () => {
  return {
    syncChunks,
    chunkUrlMap
  };
};

/***/ }),

/***/ "./node_modules/fusion-cli/lib/strip-prefix.js":
/*!*****************************************************!*\
  !*** ./node_modules/fusion-cli/lib/strip-prefix.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
module.exports = function stripPrefix(req
/*: any */
, prefix
/*: string */
) {
  if (req.url.indexOf(prefix) === 0) {
    req.url = req.url.slice(prefix.length);

    if (req.url === '') {
      req.url = '/';
    }
  }
};

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/assets-plugin.js":
/*!**********************************************************!*\
  !*** ./node_modules/fusion-cli/plugins/assets-plugin.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
const {
  createPlugin,
  getEnv
} = __webpack_require__(/*! fusion-core */ "fusion-core");

const path = __webpack_require__(/*! path */ "path");

const mount = __webpack_require__(/*! koa-mount */ "koa-mount");

const serve = __webpack_require__(/*! koa-static */ "koa-static");

module.exports = function (dir
/*: string */
) {
  return createPlugin({
    middleware: () => {
      const {
        baseAssetPath,
        env
      } = getEnv(); // setting defer here tells the `serve` middleware to `await next` first before
      // setting the response. This allows composition with user middleware

      return mount(baseAssetPath, serve(path.resolve(dir, `.fusion/dist/${env}/client`), {
        defer: true,
        setHeaders: res => {
          res.setHeader('Cache-Control', 'public, max-age=31536000');
          res.setHeader('Timing-Allow-Origin', '*');
        }
      }));
    }
  });
};

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/context-plugin.js":
/*!***********************************************************!*\
  !*** ./node_modules/fusion-cli/plugins/context-plugin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */

/*
This is where new ctx properties should be initialized
*/
const getCompilationMetaData = __webpack_require__(/*! ../get-compilation-metadata.js */ "./node_modules/fusion-cli/get-compilation-metadata.js");

const {
  createPlugin
} = __webpack_require__(/*! fusion-core */ "fusion-core");

module.exports = createPlugin({
  middleware: () => {
    const compilationMetaData = getCompilationMetaData();
    return function middleware(ctx, next) {
      // webpack-related things
      ctx.syncChunks = compilationMetaData.syncChunks;
      ctx.chunkUrlMap = compilationMetaData.chunkUrlMap;
      return next();
    };
  }
});

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/server-error-plugin.js":
/*!****************************************************************!*\
  !*** ./node_modules/fusion-cli/plugins/server-error-plugin.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */
const renderError = __webpack_require__(/*! ../build/server-error */ "./node_modules/fusion-cli/build/server-error.js").renderError;

const {
  createPlugin
} = __webpack_require__(/*! fusion-core */ "fusion-core");

module.exports = createPlugin({
  middleware: () => async function middleware(ctx, next) {
    try {
      await next();
    } catch (err) {
      ctx.status = err.statusCode || err.status || 500;
      ctx.body = renderError(err);
    }
  }
});

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!*****************************************!*\
  !*** (webpack)/hot/log-apply-result.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function (updatedModules, renewedModules) {
  var unacceptedModules = updatedModules.filter(function (moduleId) {
    return renewedModules && renewedModules.indexOf(moduleId) < 0;
  });

  var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

  if (unacceptedModules.length > 0) {
    log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
    unacceptedModules.forEach(function (moduleId) {
      log("warning", "[HMR]  - " + moduleId);
    });
  }

  if (!renewedModules || renewedModules.length === 0) {
    log("info", "[HMR] Nothing hot updated.");
  } else {
    log("info", "[HMR] Updated modules:");
    renewedModules.forEach(function (moduleId) {
      if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
        var parts = moduleId.split("!");
        log.groupCollapsed("info", "[HMR]  - " + parts.pop());
        log("info", "[HMR]  - " + moduleId);
        log.groupEnd("info");
      } else {
        log("info", "[HMR]  - " + moduleId);
      }
    });
    var numberIds = renewedModules.every(function (moduleId) {
      return typeof moduleId === "number";
    });
    if (numberIds) log("info", "[HMR] Consider using the NamedModulesPlugin for module names.");
  }
};

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!****************************!*\
  !*** (webpack)/hot/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
  var shouldLog = logLevel === "info" && level === "info" || ["info", "warning"].indexOf(logLevel) >= 0 && level === "warning" || ["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error";
  return shouldLog;
}

function logGroup(logFn) {
  return function (level, msg) {
    if (shouldLog(level)) {
      logFn(msg);
    }
  };
}

module.exports = function (level, msg) {
  if (shouldLog(level)) {
    if (level === "info") {
      console.log(msg);
    } else if (level === "warning") {
      console.warn(msg);
    } else if (level === "error") {
      console.error(msg);
    }
  }
};
/* eslint-disable node/no-unsupported-features/node-builtins */


var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);
module.exports.groupCollapsed = logGroup(groupCollapsed);
module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function (level) {
  logLevel = level;
};

/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?1000":
/*!**********************************!*\
  !*** (webpack)/hot/poll.js?1000 ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

/*globals __resourceQuery */
if (true) {
  var hotPollInterval = +__resourceQuery.substr(1) || 10 * 60 * 1000;

  var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

  var checkForUpdate = function checkForUpdate(fromUpdate) {
    if (module.hot.status() === "idle") {
      module.hot.check(true).then(function (updatedModules) {
        if (!updatedModules) {
          if (fromUpdate) log("info", "[HMR] Update applied.");
          return;
        }

        __webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);

        checkForUpdate(true);
      }).catch(function (err) {
        var status = module.hot.status();

        if (["abort", "fail"].indexOf(status) >= 0) {
          log("warning", "[HMR] Cannot apply update.");
          log("warning", "[HMR] " + (err.stack || err.message));
          log("warning", "[HMR] You need to restart the application!");
        } else {
          log("warning", "[HMR] Update failed: " + (err.stack || err.message));
        }
      });
    }
  };

  setInterval(checkForUpdate, hotPollInterval);
} else {}
/* WEBPACK VAR INJECTION */}.call(this, "?1000"))

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-react */ "fusion-react");
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "fusion-plugin-styletron-react");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root.js */ "./src/root.js");




/* harmony default export */ __webpack_exports__["default"] = (() => {
  const app = new fusion_react__WEBPACK_IMPORTED_MODULE_0___default.a(_root_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  app.register(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2___default.a);
  app.register(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default.a);
  return app;
});

/***/ }),

/***/ "./src/pages/home.jsx":
/*!****************************!*\
  !*** ./src/pages/home.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "handleChange", event => {
      this.setState(prev => {
        prev[event.target.name] = event.target.value;
        return prev;
      });
    });

    _defineProperty(this, "computeOutcomes", () => {
      const outcomeKeys = [];

      const outcomes = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce([0, 1, 2, 3, 4, 5], (outcomeMap, statRank) => {
        const rolls = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d1 => {
          return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d2 => {
            return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d3 => {
              return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d4 => {
                return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map([1, 2, 3, 4, 5, 6], d5 => {
                  let whitePool;
                  let blackPool;

                  switch (statRank) {
                    case 0:
                      blackPool = [d1, d2, d3, d4, d5];
                      whitePool = [];
                      break;

                    case 1:
                      blackPool = [d1, d2, d3, d4];
                      whitePool = [d5];
                      break;

                    case 2:
                      blackPool = [d1, d2, d3];
                      whitePool = [d4, d5];
                      break;

                    case 3:
                      blackPool = [d1, d2];
                      whitePool = [d3, d4, d5];
                      break;

                    case 4:
                      blackPool = [d1];
                      whitePool = [d2, d3, d4, d5];
                      break;

                    case 5:
                      blackPool = [];
                      whitePool = [d1, d2, d3, d4, d5];
                      break;
                  }

                  const whiteOutcome = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(whitePool, (sum, die) => {
                    if (die <= this.state.white.failRange) {
                      sum -= parseInt(this.state.white.failWeight);
                    } else if (die >= 7 - this.state.white.successRange) {
                      sum += parseInt(this.state.white.successWeight);
                    }

                    return sum;
                  }, 0);

                  const blackOutcome = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(blackPool, (sum, die) => {
                    if (die <= this.state.black.failRange) {
                      sum -= parseInt(this.state.black.failWeight);
                    } else if (die >= 7 - this.state.black.successRange) {
                      sum += parseInt(this.state.black.successWeight);
                    }

                    return sum;
                  }, 0);

                  const total = blackOutcome + whiteOutcome;

                  if (!outcomeKeys.includes(total)) {
                    outcomeKeys.push(total);
                  }

                  return total;
                });
              });
            });
          });
        });

        outcomeMap[statRank] = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.flattenDeep(rolls), (sorting, roll) => {
          if (sorting.hasOwnProperty(roll)) {
            sorting[roll] += 1;
          } else {
            sorting[roll] = 1;
          }

          return sorting;
        }, {});
        return outcomeMap;
      }, {}); // outcomeKeys = order 


      return {
        outcomeKeys,
        outcomes
      };
    });

    this.state = {
      black: {
        '1': -1,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 1
      },
      white: {
        '1': -1,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 2
      }
    };
  }

  render() {
    const {
      outcomeKeys,
      outcomes
    } = this.computeOutcomes();

    const totalSuccess = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(outcomes, (total, p) => {
      if (p.outcome > 0) {
        total += p.chance;
      }

      return total;
    }, 0);

    const totalFailure = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.reduce(outcomes, (total, p) => {
      if (p.outcome < 0) {
        total += p.chance;
      }

      return total;
    }, 0);

    const displayOutcomes = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(outcomes, (o, i) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: i
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, o.outcome), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, o.chance.toFixed(2), "%"));
    });

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
      integrity: "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",
      crossOrigin: "anonymous"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      style: {
        paddingTop: 20
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Black:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "black.1",
      value: this.state.black['1'],
      onChange: this.handleChange,
      min: -5,
      max: -1
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "black.2",
      value: this.state.black['2'],
      onChange: this.handleChange,
      min: -5,
      max: 0
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "black.3",
      value: this.state.black['3'],
      onChange: this.handleChange,
      min: -2,
      max: 2
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "black.4",
      value: this.state.black['4'],
      onChange: this.handleChange,
      min: 2,
      max: 2
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "black.5",
      value: this.state.black['5'],
      onChange: this.handleChange,
      min: 0,
      max: 5
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "black.6",
      value: this.state.black['6'],
      onChange: this.handleChange,
      min: 1,
      max: 5
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "6"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "White: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "white.1",
      value: this.state.white['1'],
      onChange: this.handleChange,
      min: -5,
      max: -1
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "white.2",
      value: this.state.white['2'],
      onChange: this.handleChange,
      min: -5,
      max: 0
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "white.3",
      value: this.state.white['3'],
      onChange: this.handleChange,
      min: -2,
      max: 2
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "white.4",
      value: this.state.white['4'],
      onChange: this.handleChange,
      min: 2,
      max: 2
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "white.5",
      value: this.state.white['5'],
      onChange: this.handleChange,
      min: 0,
      max: 5
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "white.6",
      value: this.state.white['6'],
      onChange: this.handleChange,
      min: 1,
      max: 5
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "9"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      sm: "12"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "table table-striped"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      colSpan: 6
    }, "Stat Rank")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Outcome"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "5"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, displayOutcomes))))))));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/pageNotFound.js":
/*!***********************************!*\
  !*** ./src/pages/pageNotFound.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__);



const PageNotFound = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["NotFound"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "404"));

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ "./src/root.js":
/*!*********************!*\
  !*** ./src/root.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_home_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home.jsx */ "./src/pages/home.jsx");
/* harmony import */ var _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pageNotFound.js */ "./src/pages/pageNotFound.js");




const root = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/",
  component: _pages_home_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  component: _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_3__["default"]
}));
/* harmony default export */ __webpack_exports__["default"] = (root);

/***/ }),

/***/ 0:
/*!******************************************************************************************!*\
  !*** multi (webpack)/hot/poll.js?1000 ./node_modules/fusion-cli/entries/server-entry.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\Apps\dice\node_modules\webpack\hot\poll.js?1000 */"./node_modules/webpack/hot/poll.js?1000");
module.exports = __webpack_require__(/*! E:\Apps\dice\node_modules\fusion-cli\entries\server-entry.js */"./node_modules/fusion-cli/entries/server-entry.js");


/***/ }),

/***/ "fusion-core":
/*!****************************************************************************!*\
  !*** external "E:\\Apps\\dice\\node_modules\\fusion-core\\dist\\index.js" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("E:\\Apps\\dice\\node_modules\\fusion-core\\dist\\index.js");

/***/ }),

/***/ "fusion-plugin-react-router":
/*!*******************************************************************************************!*\
  !*** external "E:\\Apps\\dice\\node_modules\\fusion-plugin-react-router\\dist\\index.js" ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("E:\\Apps\\dice\\node_modules\\fusion-plugin-react-router\\dist\\index.js");

/***/ }),

/***/ "fusion-plugin-styletron-react":
/*!**********************************************************************************************!*\
  !*** external "E:\\Apps\\dice\\node_modules\\fusion-plugin-styletron-react\\dist\\index.js" ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("E:\\Apps\\dice\\node_modules\\fusion-plugin-styletron-react\\dist\\index.js");

/***/ }),

/***/ "fusion-react":
/*!*****************************************************************************!*\
  !*** external "E:\\Apps\\dice\\node_modules\\fusion-react\\dist\\index.js" ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("E:\\Apps\\dice\\node_modules\\fusion-react\\dist\\index.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "koa-mount":
/*!********************************************************************!*\
  !*** external "E:\\Apps\\dice\\node_modules\\koa-mount\\index.js" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("E:\\Apps\\dice\\node_modules\\koa-mount\\index.js");

/***/ }),

/***/ "koa-static":
/*!*********************************************************************!*\
  !*** external "E:\\Apps\\dice\\node_modules\\koa-static\\index.js" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("E:\\Apps\\dice\\node_modules\\koa-static\\index.js");

/***/ }),

/***/ "lodash":
/*!******************************************************************!*\
  !*** external "E:\\Apps\\dice\\node_modules\\lodash\\lodash.js" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("E:\\Apps\\dice\\node_modules\\lodash\\lodash.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!****************************************************************!*\
  !*** external "E:\\Apps\\dice\\node_modules\\react\\index.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("E:\\Apps\\dice\\node_modules\\react\\index.js");

/***/ }),

/***/ "react-dom/server":
/*!*********************************************************************!*\
  !*** external "E:\\Apps\\dice\\node_modules\\react-dom\\server.js" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("E:\\Apps\\dice\\node_modules\\react-dom\\server.js");

/***/ }),

/***/ "reactstrap":
/*!************************************************************************************!*\
  !*** external "E:\\Apps\\dice\\node_modules\\reactstrap\\dist\\reactstrap.cjs.js" ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("E:\\Apps\\dice\\node_modules\\reactstrap\\dist\\reactstrap.cjs.js");

/***/ }),

/***/ "redbox-react":
/*!****************************************************************************!*\
  !*** external "E:\\Apps\\dice\\node_modules\\redbox-react\\lib\\index.js" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("E:\\Apps\\dice\\node_modules\\redbox-react\\lib\\index.js");

/***/ })

/******/ });
//# sourceMappingURL=server-main.js.map