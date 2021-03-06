/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DeleteErrorModel5.
 */
class DeleteErrorModel5 {
  /**
   * Create a DeleteErrorModel5.
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeleteErrorModel5
   *
   * @returns {object} metadata of DeleteErrorModel5
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeleteErrorModel',
      type: {
        name: 'Composite',
        className: 'DeleteErrorModel5',
        modelProperties: {
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeleteErrorModel5;
