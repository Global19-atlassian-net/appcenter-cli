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
 * The Node version
 *
 */
class ListToolsetsOKResponseNodeItem {
  /**
   * Create a ListToolsetsOKResponseNodeItem.
   * @property {string} [name] The version name
   * @property {boolean} [current] If the Node version is default for AppCenter
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListToolsetsOKResponseNodeItem
   *
   * @returns {object} metadata of ListToolsetsOKResponseNodeItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListToolsetsOKResponse_nodeItem',
      type: {
        name: 'Composite',
        className: 'ListToolsetsOKResponseNodeItem',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          current: {
            required: false,
            serializedName: 'current',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ListToolsetsOKResponseNodeItem;
