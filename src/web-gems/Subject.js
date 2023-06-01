export class Subject {
  constructor() {
    this.subscribers = [];
  }

  subscribe(callback) {
    this.subscribers.push(callback);

    // Return a function to unsubscribe from the BehaviorSubject
    return () => {
      const index = this.subscribers.indexOf(callback);
      if (index !== -1) {
        this.subscribers.splice(index, 1);
      }
    };
  }

  next(value) {
    this.value = value;
    // Notify all subscribers with the new value
    this.subscribers.forEach(callback => callback(value));
  }
}
