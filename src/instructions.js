const pluralize = require('pluralize')

const instructions = {
  // Refrigerated items
  'apples': 'apples can be stored at room temperature for one week, but should be refrigerated to keep longer',
  'apricots': 'apricots should be refrigerated',
  'figs': 'figs should be refrigerated',
  'blackberries': 'blackberries should be refrigerated',
  'blueberries': 'blueberries should be refrigerated',
  'cherries': 'cherries should be refrigerated',
  'grapes': 'grapes should be refrigerated',
  'raspberries': 'raspberries should be refrigerated',
  'strawberries': 'strawberries should be refrigerated',
  'artichokes': 'artichokes should be refrigerated',
  'asparagus': 'asparagus should be stored in the refrigerator',
  'lima beans': 'lima beans should be stored in the refrigerator',
  'beets': 'beets should be stored in the refrigerator',
  'endives': 'endives should be stored in the refrigerator',
  'broccoli': 'broccoli should be stored in the refrigerator',
  'brussels sprouts': 'brussels sprouts should be stored in the refrigerator',
  'cabbages': 'cabbage should be stored in the refrigerator',
  'carrots': 'carrots should be stored in the refrigerator',
  'cauliflowers': 'cauliflower should be stored in the refrigerator',
  'celerys': 'celery should be stored in the refrigerator',
  'cut fruit': 'cut fruit should be refrigerated',
  'cut vegetables': 'cut vegetables should be refrigerated',
  'green onion': 'green onions should be refrigerated',
  'leafy vegetables': 'leafy vegetables should be refrigerated',
  'leeks': 'leeks should be refrigerated',
  'lettuce': 'lettuce should be refrigerated',
  'mushrooms': 'mushrooms should be refrigerated',
  'peas': 'peas should be refrigerated',
  'radishes': 'radishes should be refrigerated',
  'spinach': 'spinach should be refrigerated',
  'sprouts': 'sprouts should be refrigerated',
  'summer squashes': 'summer squashes should be refrigerated',
  'sweet corn': 'sweet corn should be refrigerated',
  'herbs': 'except for basil, most herbs should be refrigerated',
  'kale': 'kale should be refrigerated in a plastic bag, don\'t wash until ready to use',

  // Ripen, then refrigerate
  'avocados': 'avocados should be ripened at room temperature, then refrigerated',
  'cantaloupes': 'cantaloupe should be stored at room temperature until ripe, then refrigerated. To freeze, cut the melon and place in airtight container or heavy-duty freezer bags.',
  'kiwifruit': 'kiwifruit should be ripened at room temperature, then refrigerated',
  'kiwis': 'kiwi should be ripened at room temperature, then refrigerated',
  'nectarines': 'nectarines should be ripened at room temperature, then refrigerated',
  'peaches': 'peaches should be ripened at room temperature, then refrigerated',
  'pears': 'pears should be ripened at room temperature, then refrigerated',
  'plums': 'plums should be ripened at room temperature, then refrigerated',
  'plumcots': 'plumcots should be ripened at room temperature, then refrigerated',

  // Store at room temperature
  'bananas': 'bananas should be stored at room temperature',
  'grapefruit': 'grapefruit should be stored at room temperature',
  'lemons': 'lemons should be stored at room temperature',
  'limes': 'limes should be stored at room temperature',
  'mandarins': 'mandarins should be stored at room temperature',
  'mangoes': 'mangoes should be stored at room temperature',
  'melons': 'melons should be stored at room temperature',
  'clementines': 'clementines can be stored for a few days at room temperature, but will last 1 to 2 weeks refrigerated',
  'tangerines': 'tangerines can be stored for a few days at room temperature, but will last 1 to 2 weeks refrigerated',
  'oranges': 'oranges can be stored for a few days at room temperature, but will last 1 to 2 weeks refrigerated',
  'papayas': 'papayas should be stored at room temperature',
  'persimmons': 'persimmons should be stored at room temperature',
  'pineapples': 'pineapple should be stored at room temperature',
  'plantains': 'plantains should be stored at room temperature',
  'pomegranates': 'pomegranates should be stored at room temperature',
  'watermelons': 'watermelons should be stored at room temperature',

  'basil': 'basil should be stored at room temperature. for best results, store in water',
  'cucumbers': 'cucumbers should be stored at room temperature. cucumbers can be kept in the refrigerator if consumed within 1 to 3 days',
  'eggplants': 'eggplant should be stored at room temperature. eggplant can be kept in the refrigerator if consumed within 1 to 3 days',
  'peppers': 'peppers should be stored at room temperature. peppers can be kept in the refrigerator if consumed within 1 to 3 days',
  'onions': 'onions should be stored in a well ventilated area in the pantry',
  'garlic': 'garlic should be stored in a well ventilated area in the pantry',
  'potatoes': 'potatoes should be stored in a well ventilated area in the pantry.  protect potatoes from light to avoid greening.',
  'sweet potatoes': 'sweet potatoes should be stored in a well ventilated area in the pantry',
  'yams': 'yams should be stored in a well ventilated area in the pantry. Do not refrigerate yams, as doing so can alter their taste and flavor during cooking.',

  'pumpkins': 'pumpkins should be stored at room temperature',
  'ginger': 'ginger should be stored at room temperature',
  'jicama': 'jicama should be stored at room temperature',
  'tomatoes': 'tomatoes should be stored at room temperature',
  'winter squash': 'winter squashes should be stored at room temperature'
}

module.exports = {
  /* find returns instructions for a given item
  * @param {string} itemName - item to check for instructions
  * @returns {string} string containing speech text
  */
  find: function (itemName) {
    return instructions[itemName] || instructions[pluralize(itemName)]
  },
  items: instructions
}
