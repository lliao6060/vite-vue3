import { mockXHR, mockRequest } from 'remockjs';
import api from '../../mock/mockApi';

mockXHR({
  timeout: 1500,
});

export default function mockClient() {
  //test
  mockRequest('get', '/api/test-data', api.mockDatas['testData']);
  mockRequest('get', '/api/test-data2', api.mockDatas['testData2']);
}
