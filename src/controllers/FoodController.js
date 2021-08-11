const foodList = require('../data/foodList.json');
const { normalizeString } = require('../helpers/string.helper');

class Food {
  static getFoodList() {
    return foodList;
  }

  static getFoodById(foodId) {
    return foodList.filter((food) => food.id.toString() === foodId.toString());
  }

  static findFoodByName(req) {
    const { name } = req.query;
    return foodList.filter((food) =>
      normalizeString(food.description).includes(normalizeString(name))
    );
  }

  static getFoodByCategoryId(categoryId) {
    return foodList.filter(
      (food) => food.category_id.toString() === categoryId.toString()
    );
  }
}

module.exports = Food;
