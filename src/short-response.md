# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded. 

As a quick guide, check the following before submitting:
- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming?

Provide a code snippet to illustrate _encapsulation_.

## Response 1

**Encapsulation** is when you put data and functionality in an `object`, while it stops you from accessing some of its **properties**. It helps to keep the code clean and also prevents code outside of the `object` from effecting internal data.

```js
class Car {
  #mileage = 0;

  drive(miles) {
    this.#mileage += miles;
  }
  
  miles() {
    return this.#mileage;
  }
}
const myCar = new Car();
myCar.drive(100);
myCar.miles();
```

---

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
	constructor() {
		this.count = 0;
	}
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

In `Javascript` `classes`, the `this` keyword allows us to refer to the specific **instance** of an `object`. So we can use this in **properties** and **methods**, and it allows **methods** to easily access or change an **instances** properties.

In the code snippet above the `this` keyword is referring to each specific **instance** of the `Counter` `class`. So for example the `counterA` instance will be referred as `this` when the **instance** is created and when its **methods** are **invoked**. The same also goes for `counterB` and any other **instances** created.

---

## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

**Polymorphism** is when we can have two or more different `classes` and they have the same **method** but the **method** has different functionality for each `class`. This makes it easier for different `classes` to have different functionality but be **invoked** in the same way.

```js
class Vehicle {
    constructor(owner, name, year) {
        this.owner = owner;
        this.name = name;
        this.year = year;
    }

    getDetails() {
        return `This is ${this.owner}'s ${this.year} ${this.name}`;
    }

    rev() {
        return "Vroom Vroom";
    }
}

class motorCycle extends Vehicle {
    constructor(owner, name, year, engine) {
        super(owner, name, year);
        this.engine = engine;
    }

    getDetails() {
        return `${this.super.getDetails}, with a ${this.engine}.`
    }
}

class Car extends Vehicle {
    constructor(owner, name, year, engine) {
        super(owner, name, year);
        this.engine = engine;
    }
    getDetails() {
        return `${this.super.getDetails}, with a ${this.engine}.`
    }
    honk() {
        return 'beep beep';
    }
}

const myVehicle = new Vehicle (Mark, Toyota Yaris, 2014);
const myMotorCycle = new motorCycle(Ish, Yamaha, 2014, V4)
console.log(myVehicle.getDetails()) // Prints This is Mark's 2014 Toyota Yaris
console.log(myMotorCycle.getDetails()) // Prints This is Ish's 2014 Yamaha with a V4.
```

---

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4

I would first create a `class` called `Pet`, this `class` would have the **properties** `name`, `energy`, and `happiness` and a **method** `sleep`. Then I would add the following `classes` `Cat`, `Dog`, and `Bird`. I would have all of those `classes` `extend` the `Pet` `class` so it can **inherit** all of `Pet`s **properties** and its **method**. Then I would have the other three `classes` have their own unique **methods**  `Cat` having `hunt`, `Dog` having `chase` and `Bird` having `fly`. 

**Inheritance** really optimizes this for us because it allows us to not have to rewrite each **property** and **method** for each `class`, and instead makes it more organized and easier to add more functionality to it.
