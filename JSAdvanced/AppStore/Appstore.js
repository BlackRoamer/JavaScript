class App {
	constructor(appName, appDescription, appVersion, appRating) {
		if (appName.length > 1 && appName.length < 24) {
			this._name = appName;
		} else {
			throw new Error('Invalid name');
		}
		if (typeof appDescription === 'string') {
			this._description = appDescription;
		} else {
			throw new Error('Invalid description');
		}
		if (+appVersion > 0) {
			this._version = appVersion;
		} else {
			throw new Error('Invalid version');
		}
		if (+appRating >= 1 && +appRating <= 10) {
			this._rating = appRating;
		} else {
			throw new Error('Invalid rating');
		}
	}

	get name() {
		return this._name;
	}
	get description() {
		return this._description;
	}
	get version() {
		return this._version;
	}
	get rating() {
		return this._rating;
	}
	set name(name) {
		if (name.length > 1 && name.length < 24) {
			this._name = name;
		} else {
			throw new Error('Invalid name');
		}
	}

	set description(description) {
		if (typeof description === 'string') {
			this._description = description;
		} else {
			throw new Error('Invalid description');
		}
	}

	set version(version) {
		if (+version > 0) {
			this._version = version;
		} else {
			throw new Error('Invalid version');
		}
	}

	set rating(rating) {
		if (+rating >= 1 && +rating <= 10) {
			this._rating = rating;
		} else {
			throw new Error('Invalid rating');
		}
	}

	releaseOverloaded(version) {
		if (parseInt(version)) {
			if (+version > this._version) {
				this._version = +version;
			} else {
				throw new Error('New version must be bigger');
			}
		} else {
			throw new Error('version must be a number')
		}
	}

	release(options) {
		if (typeof options === 'string') {
			this.releaseOverloaded(options);
			return;
		} else {
			if (options.version === 'undefined') {
				throw new Error('version is missing');
			} else if (+options.version <= this._version) {
				throw new Error('New version must be bigger');
			} else if (!(!!(+options.version))) {
				throw new Error('The version must be a number');
			} else {
				this._version = +options.version;
			}
			if (options.description !== 'undefined') {
				if (typeof description === 'string') {
					this._description = description;
				} else {
					console.log(this._description);
					throw new Error('Invalid description');
				}
			}
			if (options.rating !== 'undefined') {
				if (+rating >= 1 && +rating <= 10) {
					this._rating = rating;
				} else {
					throw new Error('Invalid rating');
				}
			}
		}
	}
}

class Store extends App {
	constructor(storeName, storeDescription, storeVersion, storeRating) {
		super(storeName, storeDescription, storeVersion, storeRating);
		this._apps = [];
	}

	get apps() {
		return this._apps;
	}

	uploadApp(app) {
		if (!(app.constructor.name === 'App')) {
			throw new Error('Invalid app type')
		}
		if (this._apps.some(x => (x.name === app.name))) {

			for (let i = 0, len = this._apps.length; i < len; i += 1) {
				// console.log(this._apps[i].name);
				if (this._apps[i].name === app.name) {

					if (this._apps[i].version > app.version) {
						// console.log(this._apps[i].name + ' ' + this._apps[i].version + ' ' + app.version);
						throw new Error('The new version must be bigger');
					}
					this._apps[i].description = app.description;
					this._apps[i].rating = app.rating;
					this._apps[i].version = app.version;
				}
			}
		} else {
			this._apps.push(app);
		}
		return this;
	}

	takedownApp(name) {
		if (this._apps.some(x => (x.name === name))) {
			for (let i = 0, len = this._apps.length; i < len; i += 1) {
				if (this._apps[i].name === name) {

					this._apps.splice(i, 1);
				}
			}
		} else {
			throw new Error("This name doesn't exist");
		}
		return this;
	}
	search(pattern) {
		let sortedApps = this._apps.filter(x => (x.name.toLowerCase() === pattern.toLowerCase()))
			.sort(function(a, b) {
				if (a.name > b.name) {
					return 1;
				}
				if (a.name < b.name) {
					return -1;
				}
				return 0;
			});
		return sortedApps;
	}
	listMostRecentApps(count) {
		count = count || 10;
		if (+count <= 0) {
			throw new Error('Count must be positive number');
		}
		let reversedResult = this._apps;
		return reversedResult.reverse().splice(0, count);
	}
}

function createDevice(hostname, apps) {
	if (arguments.length !== 2) {
		throw new Error('Invalid arguments');
	}
	if (!Array.isArray(apps)) {
		throw new Array('Apps must be array');
	}
	if (typeof hostname !== 'string') {
		throw new Error('Invalid hostname');
	}
	if (!apps.every(x => ((x.constructor.name === 'App')))) {
		throw new Error('Invalid app');
	}
	class Device {
		constructor(name) {
			if (hostname.length > 0 && hostname.length < 33) {
				this._name = hostname;
			} else {
				throw new Error('Invalid hostname length');
			}
			this._deviceApps = [];
		}

		search(pattern) {
			let sortedApps = apps.filter(x => (x.name.toLowerCase() === pattern.toLowerCase()))
				.sort(function(a, b) {
					if (a.name > b.name) {
						return 1;
					} else if (a.name < b.name) {
						return -1;
					}
					return 0;
				});
			return sortedApps;
		}

		install(name) {
			if (this._deviceApps.some(x => (x.name === name))) {
				return;
			}
			if (!apps.some(x => (x.name === name))) {
				throw new Error('No app with this name');
			}
			for (let i = 0, len = apps.length; i < len; i += 1) {
				if (apps[i].name === name) {
					this._deviceApps.push(apps[i]);
					return;
				}
			}
			return this;
		}
		uninstall(name) {
			if (!this._deviceApps.some(x => (x.name === name))) {
				throw new Error('No installed app with this name');
			}
			for (let i = 0, len = this._deviceApps.length; i < len; i += 1) {
				if (this._deviceApps[i].name === name) {
					this._deviceApps.splice(i, 1);
					return;
				}
			}
			return this;
		}
		listInstalled() {
			let sortedApps = this._deviceApps.sort(function(a, b) {
				if (a.name > b.name) {
					return 1;
				}
				if (a.name < b.name) {
					return -1;
				}
				return 0;

			});

			return sortedApps;
		}
	}
	return new Device(this);
}