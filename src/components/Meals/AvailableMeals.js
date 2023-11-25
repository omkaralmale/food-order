import Card from "../UI/Card";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
const DUMMY_MEALS = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description:
      "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
    price: 12.99,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    description:
      "Tender chicken cooked in a creamy tomato-based sauce with Indian spices.",
    price: 14.5,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Caesar Salad",
    description:
      "Fresh romaine lettuce, parmesan cheese, croutons, and Caesar dressing.",
    price: 8.99,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Beef Burger",
    description:
      "Juicy beef patty with lettuce, tomato, onion, and special sauce in a sesame seed bun.",
    price: 10.49,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Vegetable Stir-Fry",
    description:
      "Assorted vegetables sautéed with soy sauce and garlic, served with steamed rice.",
    price: 9.99,
    rating: 4.0,
  },
  {
    id: 6,
    name: "Margherita Pizza",
    description:
      "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.",
    price: 11.5,
    rating: 4.7,
  },
  {
    id: 7,
    name: "Grilled Salmon",
    description:
      "Fresh salmon fillet grilled to perfection, served with lemon butter sauce.",
    price: 16.75,
    rating: 4.9,
  },
  {
    id: 8,
    name: "Mushroom Risotto",
    description:
      "Creamy risotto cooked with mushrooms, onions, white wine, and parmesan cheese.",
    price: 13.25,
    rating: 4.4,
  },
  {
    id: 9,
    name: "Taco Platter",
    description:
      "Assorted tacos with choice of fillings, served with salsa and guacamole.",
    price: 12.99,
    rating: 4.3,
  },
  {
    id: 10,
    name: "Pasta Primavera",
    description:
      "Pasta tossed with seasonal vegetables in a light cream sauce.",
    price: 10.99,
    rating: 4.1,
  },
  {
    id: 11,
    name: "BBQ Ribs",
    description:
      "Slow-cooked pork ribs basted in tangy barbecue sauce, served with coleslaw.",
    price: 18.99,
    rating: 4.6,
  },
  {
    id: 12,
    name: "Shrimp Scampi",
    description:
      "Tender shrimp sautéed in garlic butter and white wine, served over pasta.",
    price: 15.99,
    rating: 4.7,
  },
  {
    id: 13,
    name: "Veggie Burger",
    description:
      "Grilled vegetable patty with lettuce, tomato, and avocado in a whole grain bun.",
    price: 11.25,
    rating: 4.2,
  },
  {
    id: 14,
    name: "Sushi Combo",
    description:
      "Assorted sushi rolls with fresh fish, rice, and seaweed, served with soy sauce.",
    price: 20.5,
    rating: 4.8,
  },
  {
    id: 15,
    name: "Chicken Caesar Wrap",
    description:
      "Grilled chicken, romaine lettuce, parmesan cheese, and Caesar dressing in a wrap.",
    price: 9.75,
    rating: 4.0,
  },
  {
    id: 16,
    name: "Lemon Herb Roast Chicken",
    description:
      "Roast chicken marinated in lemon, garlic, and herbs, served with roasted vegetables.",
    price: 14.99,
    rating: 4.5,
  },
  {
    id: 17,
    name: "Eggplant Parmesan",
    description:
      "Breaded eggplant slices baked with marinara sauce and melted cheese.",
    price: 12.25,
    rating: 4.3,
  },
  {
    id: 18,
    name: "Beef Fajitas",
    description:
      "Sizzling beef strips with bell peppers and onions, served with tortillas and toppings.",
    price: 16.5,
    rating: 4.6,
  },
  {
    id: 19,
    name: "Caprese Salad",
    description:
      "Fresh tomatoes, mozzarella cheese, basil, olive oil, and balsamic glaze.",
    price: 7.99,
    rating: 4.4,
  },
  {
    id: 20,
    name: "Pineapple Fried Rice",
    description:
      "Fried rice with pineapple, shrimp, vegetables, and soy sauce.",
    price: 11.5,
    rating: 4.1,
  },
  // Add more items as needed...
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      rating={meal.rating}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
