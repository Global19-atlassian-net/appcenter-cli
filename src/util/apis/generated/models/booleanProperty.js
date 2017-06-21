/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the BooleanProperty class.
 * @constructor
 * Boolean property.
 *
 * @member {boolean} value Boolean property value.
 * 
 */
function BooleanProperty() {
  BooleanProperty['super_'].call(this);
}

util.inherits(BooleanProperty, models['CustomProperty']);

/**
 * Defines the metadata of BooleanProperty
 *
 * @returns {object} metadata of BooleanProperty
 *
 */
BooleanProperty.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'boolean',
    type: {
      name: 'Composite',
      className: 'BooleanProperty',
      modelProperties: {
        name: {
          required: true,
          serializedName: 'name',
          constraints: {
            MaxLength: 128,
            Pattern: '^[a-zA-Z][a-zA-Z0-9\-_]*$'
          },
          type: {
            name: 'String'
          }
        },
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        value: {
          required: true,
          serializedName: 'value',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = BooleanProperty;