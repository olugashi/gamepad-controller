type EventHandler = (...args: any[]) => Promise<void> | void;

class EventBus {
  private handlers: { [event: string]: EventHandler[] } = {};

  on(event: string, handler: EventHandler) {
    if (!this.handlers[event]) {
      this.handlers[event] = [];
    }
    this.handlers[event].push(handler);
  }

  off(event: string, handler: EventHandler) {
    if (!this.handlers[event]) return;
    this.handlers[event] = this.handlers[event].filter(h => h !== handler);
  }

  async emit(event: string, ...args: any[]) {
    if (!this.handlers[event]) return;
    for (const handler of this.handlers[event]) {
      await handler(...args);
    }
  }
}

export default new EventBus();
