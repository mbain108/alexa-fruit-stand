const instructions = require('../src/instructions')

/* This script exists to output Custom Slot Types
 * as part of the Alexa interaction model
 */
for (var key in instructions.items) {
  if (key) {
    console.log(key)
  }
}
