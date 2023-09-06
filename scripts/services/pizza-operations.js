import makeNetworkCall from "./api-client.js";
import { URL } from "../utils/config.js";
import Pizza from "../models/pizza-model.js";

const pizzaOPerations = {
  pizzas :[],
  searchPizza(pizzaid){
    const pizzaObject = this.pizzas.find((pizza)=>pizza.id==pizzaid);
    pizzaObject.isAddedInCart=true;
  },
  async getPizzas() {
    // api client - object(pizza)
    const data = await makeNetworkCall(URL);
    // data map to model(Conversion)
    const pizzaJSON = data["Vegetarian"];
    const pizzas = pizzaJSON.map((singlePizza) => {
      const pizzaObject = new Pizza(
        singlePizza?.id,
        singlePizza?.name,
        singlePizza?.price,
        singlePizza?.assets?.product_details_page[0]?.url,
        singlePizza?.menu_description
      );
      return pizzaObject;
    });
    this.pizzas = pizzas;
    return pizzas;
    // return model
  }
  
}
// export async function getPizzas() {
// 
  // api client - object(pizza)
//   const data = await makeNetworkCall(URL);
//   // data map to model(Conversion)
//   const pizzaJSON = data["Vegetarian"];
//   const pizzas = pizzaJSON.map((singlePizza) => {
//     const pizzaObject = new Pizza(
//       singlePizza?.id,
//       singlePizza?.name,
//       singlePizza?.price,
//       singlePizza?.assets?.product_details_page[0]?.url,
//       singlePizza?.menu_description
//     );
//     return pizzaObject;
//   });
//   return pizzas;
//   // return model
// }
export default pizzaOPerations;