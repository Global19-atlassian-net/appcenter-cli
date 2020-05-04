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
 * Class representing a AzureSubscriptionToAppData.
 */
class AzureSubscriptionToAppData {
  /**
   * Create a AzureSubscriptionToAppData.
   * @property {uuid} subscriptionId The azure subscription id
   */
  constructor() {
  }

  /**
   * Defines the metadata of AzureSubscriptionToAppData
   *
   * @returns {object} metadata of AzureSubscriptionToAppData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'azure_subscription_to_app_data',
      type: {
        name: 'Composite',
        className: 'AzureSubscriptionToAppData',
        modelProperties: {
          subscriptionId: {
            required: true,
            serializedName: 'subscription_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureSubscriptionToAppData;