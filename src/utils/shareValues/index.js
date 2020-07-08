let store= []

export default class ShareValues {

  static setStore(_store) {
    store = _store
  }

	static getStore() {
		return store
	}
}
