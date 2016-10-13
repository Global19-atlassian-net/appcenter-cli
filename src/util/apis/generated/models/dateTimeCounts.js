/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DateTimeCounts class.
 * @constructor
 * @member {string} [datetime] the ISO 8601 datetime
 * 
 * @member {number} [count] count of the object
 * 
 */
function DateTimeCounts() {
}

/**
 * Defines the metadata of DateTimeCounts
 *
 * @returns {object} metadata of DateTimeCounts
 *
 */
DateTimeCounts.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DateTimeCounts',
    type: {
      name: 'Composite',
      className: 'DateTimeCounts',
      modelProperties: {
        datetime: {
          required: false,
          serializedName: 'datetime',
          type: {
            name: 'String'
          }
        },
        count: {
          required: false,
          serializedName: 'count',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = DateTimeCounts;