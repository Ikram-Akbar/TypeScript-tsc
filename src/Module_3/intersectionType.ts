type CanWalk = {
    walk: () => void;
};

type CanSwim = {
    swim: () => void;
};

// Intersection type combining two abilities
type Amphibian = CanWalk & CanSwim;

const frog: Amphibian = {
    walk: () => console.log("The frog is walking."),
    swim: () => console.log("The frog is swimming."),
};

frog.walk(); // Output: The frog is walking.
frog.swim(); // Output: The frog is swimming.
