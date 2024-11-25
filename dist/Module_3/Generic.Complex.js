"use strict";
{
    // Generic Repository Class
    class Repository {
        constructor() {
            this.items = [];
        }
        // Add an item to the repository
        addItem(item) {
            this.items.push(item);
        }
        // Get all items
        getAllItems() {
            return this.items;
        }
        // Find an item by ID
        findById(id) {
            return this.items.find(item => item.id === id);
        }
        // Remove an item by ID
        removeById(id) {
            this.items = this.items.filter(item => item.id !== id);
        }
    }
    // Create a repository for User objects
    const userRepository = new Repository();
    // Add users
    userRepository.addItem({ id: 1, name: "Alice", age: 25 });
    userRepository.addItem({ id: 2, name: "Bob", age: 30 });
    userRepository.addItem({ id: 3, name: "Mark Toni", age: 55 });
    // Find a user by ID
    const user = userRepository.findById(1);
    console.log(user); // Output: { id: 1, name: "Alice", age: 25 }
    // Remove a user by ID
    userRepository.removeById(2);
    console.log(userRepository.getAllItems()); // Output: [{ id: 1, name: "Alice", age: 25 }]
}
