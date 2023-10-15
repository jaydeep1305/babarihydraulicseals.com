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

class Google_Service_Safebrowsing_FindFullHashesRequest extends Google_Collection
{
  protected $collection_key = 'clientStates';
  protected $apiClientType = 'Google_Service_Safebrowsing_ClientInfo';
  protected $apiClientDataType = '';
  protected $clientType = 'Google_Service_Safebrowsing_ClientInfo';
  protected $clientDataType = '';
  public $clientStates;
  protected $threatInfoType = 'Google_Service_Safebrowsing_ThreatInfo';
  protected $threatInfoDataType = '';

  /**
   * @param Google_Service_Safebrowsing_ClientInfo
   */
  public function setApiClient(Google_Service_Safebrowsing_ClientInfo $apiClient)
  {
    $this->apiClient = $apiClient;
  }
  /**
   * @return Google_Service_Safebrowsing_ClientInfo
   */
  public function getApiClient()
  {
    return $this->apiClient;
  }
  /**
   * @param Google_Service_Safebrowsing_ClientInfo
   */
  public function setClient(Google_Service_Safebrowsing_ClientInfo $client)
  {
    $this->client = $client;
  }
  /**
   * @return Google_Service_Safebrowsing_ClientInfo
   */
  public function getClient()
  {
    return $this->client;
  }
  public function setClientStates($clientStates)
  {
    $this->clientStates = $clientStates;
  }
  public function getClientStates()
  {
    return $this->clientStates;
  }
  /**
   * @param Google_Service_Safebrowsing_ThreatInfo
   */
  public function setThreatInfo(Google_Service_Safebrowsing_ThreatInfo $threatInfo)
  {
    $this->threatInfo = $threatInfo;
  }
  /**
   * @return Google_Service_Safebrowsing_ThreatInfo
   */
  public function getThreatInfo()
  {
    return $this->threatInfo;
  }
}
