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
 * Class representing a DatabaseMetricsLatencyMetricsWriteLatencyMetricsMetricValuesItem.
 */
class DatabaseMetricsLatencyMetricsWriteLatencyMetricsMetricValuesItem {
  /**
   * Create a DatabaseMetricsLatencyMetricsWriteLatencyMetricsMetricValuesItem.
   * @property {date} [timestamp]
   * @property {number} [average]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DatabaseMetricsLatencyMetricsWriteLatencyMetricsMetricValuesItem
   *
   * @returns {object} metadata of DatabaseMetricsLatencyMetricsWriteLatencyMetricsMetricValuesItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DatabaseMetrics_latencyMetrics_writeLatencyMetrics_metricValuesItem',
      type: {
        name: 'Composite',
        className: 'DatabaseMetricsLatencyMetricsWriteLatencyMetricsMetricValuesItem',
        modelProperties: {
          timestamp: {
            required: false,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          },
          average: {
            required: false,
            serializedName: 'average',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = DatabaseMetricsLatencyMetricsWriteLatencyMetricsMetricValuesItem;