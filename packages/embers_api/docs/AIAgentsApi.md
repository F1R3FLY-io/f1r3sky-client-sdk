# EmbersApi.AIAgentsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAiAgentsAddressGet**](AIAgentsApi.md#apiAiAgentsAddressGet) | **GET** /api/ai-agents/{address} | 
[**apiAiAgentsAddressIdVersionDeployPreparePost**](AIAgentsApi.md#apiAiAgentsAddressIdVersionDeployPreparePost) | **POST** /api/ai-agents/{address}/{id}/{version}/deploy/prepare | 
[**apiAiAgentsAddressIdVersionDeploySendPost**](AIAgentsApi.md#apiAiAgentsAddressIdVersionDeploySendPost) | **POST** /api/ai-agents/{address}/{id}/{version}/deploy/send | 
[**apiAiAgentsAddressIdVersionGet**](AIAgentsApi.md#apiAiAgentsAddressIdVersionGet) | **GET** /api/ai-agents/{address}/{id}/{version} | 
[**apiAiAgentsAddressIdVersionsGet**](AIAgentsApi.md#apiAiAgentsAddressIdVersionsGet) | **GET** /api/ai-agents/{address}/{id}/versions | 
[**apiAiAgentsCreatePreparePost**](AIAgentsApi.md#apiAiAgentsCreatePreparePost) | **POST** /api/ai-agents/create/prepare | 
[**apiAiAgentsCreateSendPost**](AIAgentsApi.md#apiAiAgentsCreateSendPost) | **POST** /api/ai-agents/create/send | 
[**apiAiAgentsIdSavePreparePost**](AIAgentsApi.md#apiAiAgentsIdSavePreparePost) | **POST** /api/ai-agents/{id}/save/prepare | 
[**apiAiAgentsIdSaveSendPost**](AIAgentsApi.md#apiAiAgentsIdSaveSendPost) | **POST** /api/ai-agents/{id}/save/send | 
[**apiAiAgentsTestDeployPreparePost**](AIAgentsApi.md#apiAiAgentsTestDeployPreparePost) | **POST** /api/ai-agents/test/deploy/prepare | 
[**apiAiAgentsTestDeploySendPost**](AIAgentsApi.md#apiAiAgentsTestDeploySendPost) | **POST** /api/ai-agents/test/deploy/send | 
[**apiAiAgentsTestWalletPost**](AIAgentsApi.md#apiAiAgentsTestWalletPost) | **POST** /api/ai-agents/test/wallet | 

<a name="apiAiAgentsAddressGet"></a>
# **apiAiAgentsAddressGet**
> Agents apiAiAgentsAddressGet(address)



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.AIAgentsApi();
let address = "address_example"; // String | 

apiInstance.apiAiAgentsAddressGet(address, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**|  | 

### Return type

[**Agents**](Agents.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="apiAiAgentsAddressIdVersionDeployPreparePost"></a>
# **apiAiAgentsAddressIdVersionDeployPreparePost**
> DeployAgentResp apiAiAgentsAddressIdVersionDeployPreparePost(address, id, version)



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.AIAgentsApi();
let address = "address_example"; // String | 
let id = "id_example"; // String | 
let version = "version_example"; // String | 

apiInstance.apiAiAgentsAddressIdVersionDeployPreparePost(address, id, version, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**|  | 
 **id** | **String**|  | 
 **version** | **String**|  | 

### Return type

[**DeployAgentResp**](DeployAgentResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="apiAiAgentsAddressIdVersionDeploySendPost"></a>
# **apiAiAgentsAddressIdVersionDeploySendPost**
> apiAiAgentsAddressIdVersionDeploySendPost(body, address, id, version)



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.AIAgentsApi();
let body = new EmbersApi.SignedContract(); // SignedContract | 
let address = "address_example"; // String | 
let id = "id_example"; // String | 
let version = "version_example"; // String | 

apiInstance.apiAiAgentsAddressIdVersionDeploySendPost(body, address, id, version, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SignedContract**](SignedContract.md)|  | 
 **address** | **String**|  | 
 **id** | **String**|  | 
 **version** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; charset=utf-8
 - **Accept**: Not defined

<a name="apiAiAgentsAddressIdVersionGet"></a>
# **apiAiAgentsAddressIdVersionGet**
> Agent apiAiAgentsAddressIdVersionGet(address, id, version)



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.AIAgentsApi();
let address = "address_example"; // String | 
let id = "id_example"; // String | 
let version = "version_example"; // String | 

apiInstance.apiAiAgentsAddressIdVersionGet(address, id, version, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**|  | 
 **id** | **String**|  | 
 **version** | **String**|  | 

### Return type

[**Agent**](Agent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="apiAiAgentsAddressIdVersionsGet"></a>
# **apiAiAgentsAddressIdVersionsGet**
> Agents apiAiAgentsAddressIdVersionsGet(address, id)



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.AIAgentsApi();
let address = "address_example"; // String | 
let id = "id_example"; // String | 

apiInstance.apiAiAgentsAddressIdVersionsGet(address, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Agents**](Agents.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="apiAiAgentsCreatePreparePost"></a>
# **apiAiAgentsCreatePreparePost**
> CreateAgentResp apiAiAgentsCreatePreparePost(body)



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.AIAgentsApi();
let body = new EmbersApi.CreateAgentReq(); // CreateAgentReq | 

apiInstance.apiAiAgentsCreatePreparePost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAgentReq**](CreateAgentReq.md)|  | 

### Return type

[**CreateAgentResp**](CreateAgentResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; charset=utf-8
 - **Accept**: application/json; charset=utf-8

<a name="apiAiAgentsCreateSendPost"></a>
# **apiAiAgentsCreateSendPost**
> apiAiAgentsCreateSendPost(body)



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.AIAgentsApi();
let body = new EmbersApi.SignedContract(); // SignedContract | 

apiInstance.apiAiAgentsCreateSendPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SignedContract**](SignedContract.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; charset=utf-8
 - **Accept**: Not defined

<a name="apiAiAgentsIdSavePreparePost"></a>
# **apiAiAgentsIdSavePreparePost**
> SaveAgentResp apiAiAgentsIdSavePreparePost(body, id)



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.AIAgentsApi();
let body = new EmbersApi.CreateAgentReq(); // CreateAgentReq | 
let id = "id_example"; // String | 

apiInstance.apiAiAgentsIdSavePreparePost(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAgentReq**](CreateAgentReq.md)|  | 
 **id** | **String**|  | 

### Return type

[**SaveAgentResp**](SaveAgentResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; charset=utf-8
 - **Accept**: application/json; charset=utf-8

<a name="apiAiAgentsIdSaveSendPost"></a>
# **apiAiAgentsIdSaveSendPost**
> apiAiAgentsIdSaveSendPost(body, id)



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.AIAgentsApi();
let body = new EmbersApi.SignedContract(); // SignedContract | 
let id = "id_example"; // String | 

apiInstance.apiAiAgentsIdSaveSendPost(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SignedContract**](SignedContract.md)|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; charset=utf-8
 - **Accept**: Not defined

<a name="apiAiAgentsTestDeployPreparePost"></a>
# **apiAiAgentsTestDeployPreparePost**
> DeployTestResp apiAiAgentsTestDeployPreparePost(body)



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.AIAgentsApi();
let body = new EmbersApi.DeployTestReq(); // DeployTestReq | 

apiInstance.apiAiAgentsTestDeployPreparePost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeployTestReq**](DeployTestReq.md)|  | 

### Return type

[**DeployTestResp**](DeployTestResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; charset=utf-8
 - **Accept**: application/json; charset=utf-8

<a name="apiAiAgentsTestDeploySendPost"></a>
# **apiAiAgentsTestDeploySendPost**
> DeploySignedTestResp apiAiAgentsTestDeploySendPost(body)



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.AIAgentsApi();
let body = new EmbersApi.DeploySignedTestReq(); // DeploySignedTestReq | 

apiInstance.apiAiAgentsTestDeploySendPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DeploySignedTestReq**](DeploySignedTestReq.md)|  | 

### Return type

[**DeploySignedTestResp**](DeploySignedTestResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; charset=utf-8
 - **Accept**: application/json; charset=utf-8

<a name="apiAiAgentsTestWalletPost"></a>
# **apiAiAgentsTestWalletPost**
> CreateTestwalletResp apiAiAgentsTestWalletPost()



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.AIAgentsApi();
apiInstance.apiAiAgentsTestWalletPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CreateTestwalletResp**](CreateTestwalletResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

