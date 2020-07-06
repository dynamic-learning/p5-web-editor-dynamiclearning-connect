class DL {
  constructor() {
    this.port = null;
    this.onLoad = null;
    this.registerMessageChannel();
  }

  registerMessageChannel() {
    onmessage = (e) => {
      if (e.data.action === "initialLoadToIframe") {
        if (!this.port) {
          this.port = e.ports[0];
          this.load(this.onLoad);
        }
      } else if (e.data.action === "loadToIframe") {
        if (this.onLoad) {
          this.onLoad(e.data.payload);
        }
      }
    };
  }

  save(payload) {
    this.port.postMessage({
      action: "saveToDL",
      payload,
    });
  }

  load(fn) {
    this.onLoad = fn;
    if (!this.port) {
      return;
    }
    this.port.postMessage({
      action: "loadToIframe",
    });
  }
}
