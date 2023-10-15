<?php
/*
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

/**
 * The "guideCategories" collection of methods.
 * Typical usage is:
 *  <code>
 *   $youtubeService = new Google_Service_YouTube(...);
 *   $guideCategories = $youtubeService->guideCategories;
 *  </code>
 */
class Google_Service_YouTube_Resource_GuideCategories extends Google_Service_Resource
{
  /**
   * Returns a list of categories that can be associated with YouTube channels.
   * (guideCategories.listGuideCategories)
   *
   * @param string $part The part parameter specifies the guideCategory resource
   * properties that the API response will include. Set the parameter value to
   * snippet.
   * @param array $optParams Optional parameters.
   *
   * @opt_param string hl The hl parameter specifies the language that will be
   * used for text values in the API response.
   * @opt_param string id The id parameter specifies a comma-separated list of the
   * YouTube channel category ID(s) for the resource(s) that are being retrieved.
   * In a guideCategory resource, the id property specifies the YouTube channel
   * category ID.
   * @opt_param string regionCode The regionCode parameter instructs the API to
   * return the list of guide categories available in the specified country. The
   * parameter value is an ISO 3166-1 alpha-2 country code.
   * @return Google_Service_YouTube_GuideCategoryListResponse
   */
  public function listGuideCategories($part, $optParams = array())
  {
    $params = array('part' => $part);
    $params = array_merge($params, $optParams);
    return $this->call('list', array($params), "Google_Service_YouTube_GuideCategoryListResponse");
  }
}
