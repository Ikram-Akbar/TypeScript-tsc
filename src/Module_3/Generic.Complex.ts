{


    // Define a generic interface with constraints
    interface Identifiable {
        id: number;
    }

    // Generic Repository Class
    class Repository<T extends Identifiable> {
        private items: T[] = [];

        // Add an item to the repository
        addItem(item: T): void {
            this.items.push(item);
        }

        // Get all items
        getAllItems(): T[] {
            return this.items;
        }

        // Find an item by ID
        findById(id: number): T | undefined {
            return this.items.find(item => item.id === id);
        }

        // Remove an item by ID
        removeById(id: number): void {
            this.items = this.items.filter(item => item.id !== id);
        }
    }

    // Define a type that extends Identifiable
    interface User extends Identifiable {
        name: string;
        age: number;
    }

    // Create a repository for User objects
    const userRepository = new Repository<User>();

    // Add users
    userRepository.addItem({ id: 1, name: "Alice", age: 25 });
    userRepository.addItem({ id: 2, name: "Bob", age: 30 });

    // Find a user by ID
    const user = userRepository.findById(1);
    console.log(user); // Output: { id: 1, name: "Alice", age: 25 }

    // Remove a user by ID
    userRepository.removeById(2);
    console.log(userRepository.getAllItems()); // Output: [{ id: 1, name: "Alice", age: 25 }]




}