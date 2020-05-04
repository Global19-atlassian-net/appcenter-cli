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
 * Class representing a Email.
 */
class Email {
  /**
   * Create a Email.
   * @property {string} email Email used for cancel delete with x-authz-bypass
   * headers
   */
  constructor() {
  }

  /**
   * Defines the metadata of Email
   *
   * @returns {object} metadata of Email
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'email',
      type: {
        name: 'Composite',
        className: 'Email',
        modelProperties: {
          email: {
            required: true,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Email;