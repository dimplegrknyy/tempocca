// Define the structure of RequestStoreEntry with a generic type T
interface RequestStoreEntry<T> {
  id: number;
  data: T;
  timestamp: Date;
}

// Create a map with number as key and RequestStoreEntry as value
const requestStore: Map<number, RequestStoreEntry<any>> = new Map();

// Example of setting an entry in the map
requestStore.set(1, { id: 1, data: "Some data", timestamp: new Date() });

// Example of getting an entry from the map
const entry = requestStore.get(1);
console.log(entry);
