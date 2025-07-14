# EmbersApi.WalletsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiWalletsAddressStateGet**](WalletsApi.md#apiWalletsAddressStateGet) | **GET** /api/wallets/{address}/state | 
[**apiWalletsTransferPreparePost**](WalletsApi.md#apiWalletsTransferPreparePost) | **POST** /api/wallets/transfer/prepare | 
[**apiWalletsTransferSendPost**](WalletsApi.md#apiWalletsTransferSendPost) | **POST** /api/wallets/transfer/send | 

<a name="apiWalletsAddressStateGet"></a>
# **apiWalletsAddressStateGet**
> WalletStateAndHistory apiWalletsAddressStateGet(address)



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.WalletsApi();
let address = "address_example"; // String | 

apiInstance.apiWalletsAddressStateGet(address, (error, data, response) => {
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

[**WalletStateAndHistory**](WalletStateAndHistory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="apiWalletsTransferPreparePost"></a>
# **apiWalletsTransferPreparePost**
> TransferResp apiWalletsTransferPreparePost(body)



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.WalletsApi();
let body = new EmbersApi.TransferReq(); // TransferReq | 

apiInstance.apiWalletsTransferPreparePost(body, (error, data, response) => {
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
 **body** | [**TransferReq**](TransferReq.md)|  | 

### Return type

[**TransferResp**](TransferResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; charset=utf-8
 - **Accept**: application/json; charset=utf-8

<a name="apiWalletsTransferSendPost"></a>
# **apiWalletsTransferSendPost**
> apiWalletsTransferSendPost(body)



### Example
```javascript
import {EmbersApi} from 'embers_api';

let apiInstance = new EmbersApi.WalletsApi();
let body = new EmbersApi.SignedContract(); // SignedContract | 

apiInstance.apiWalletsTransferSendPost(body, (error, data, response) => {
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

