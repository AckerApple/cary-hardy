export class BehaviorSubject extends Subject {
  constructor(initialValue) {
    super()
    this.value = initialValue;
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    // Call the callback immediately with the current value
    callback(this.value);

    // Return a function to unsubscribe from the BehaviorSubject
    return () => {
      const index = this.subscribers.indexOf(callback);
      if (index !== -1) {
        this.subscribers.splice(index, 1);
      }
    };
  }
}
