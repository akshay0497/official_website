import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import api from '../../api/axios';
import { MSREANA} from '../../types/api';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure, } from '../slices/postsSlice';


function* fetchData(type: any, endpoint: string) {
  try {
    const response: AxiosResponse<MSREANA[]> = yield call(api.get, endpoint);
    yield put(fetchDataSuccess({ type, data: response?.data }));
  } catch (error: any) {
    yield put(
      fetchDataFailure({
        message: error.message || 'Failed to fetch',
        status: error.response?.status,
      })
    );
  }
}

function* fetchRequirementAnalysis() {
  yield fetchData('requirementAnalysis', 'RequirementAnalysis/GetRequirementAnalysis');
}

function* fetchAcceptanceTesting() {
  yield fetchData('acceptanceTesting', 'AcceptanceTesting/GetAcceptanceTesting');
}

function* fetchProjectProposal() {
  yield fetchData('projectProposal', 'ProjectProposal/GetProjectProposal');
}

function* fetchProjectDesign() {
  yield fetchData('projectDesign', 'ProjectDesign/GetProjectDesign');
}

function* fetchProjectDevelopment() {
  yield fetchData('projectDevelopment', 'ProjectDevelopment/GetProjectDevelopment');
}

function* fetchInstallation() {
  yield fetchData('installation', 'Installation/GetInstallation');
}

function* fetchLibraryAutomationSystem() {
  yield fetchData('libraryautomationsystem', 'LibraryAutomationSystem/GetLibraryAutomationSystem');
}

function* fetchCampusERPManagement() {
  yield fetchData('campsys', 'CampusERPManagement/GetCampusERPManagement');
}

function* fetchAndroidApps() {
  yield fetchData('androidapps', 'AndroidApps/GetAndroidApps');
}

function* fetchECommerceDevelopment() {
  yield fetchData('ecommerce', 'ECommerceDevelopment/GetECommerceDevelopment');
}

function* fetchESecure() {
  yield fetchData('esecure', 'ESecure/GetESecure');
}

function* fetchFileTrackingSystem() {
  yield fetchData('filetracking', 'FileTrackingSystem/GetFileTrackingSystem');
}

function* fetchBeOurPartner() {
  yield fetchData('ourclient', 'OurClient/GetOurClient');
}

function* fetchCompanyProfile() {
  yield fetchData('companyprofile', 'CompanyProfile/GetCompanyProfile');
}

export function* postsSaga() {
  yield takeLatest(fetchDataRequest.type, fetchRequirementAnalysis);
  yield takeLatest(fetchDataRequest.type, fetchAcceptanceTesting);
  yield takeLatest(fetchDataRequest.type, fetchProjectProposal);
  yield takeLatest(fetchDataRequest.type, fetchProjectDesign);
  yield takeLatest(fetchDataRequest.type, fetchProjectDevelopment);
  yield takeLatest(fetchDataRequest.type, fetchInstallation);
  yield takeLatest(fetchDataRequest.type, fetchLibraryAutomationSystem);
  yield takeLatest(fetchDataRequest.type, fetchCampusERPManagement);
  yield takeLatest(fetchDataRequest.type, fetchAndroidApps);
  yield takeLatest(fetchDataRequest.type, fetchECommerceDevelopment);
  yield takeLatest(fetchDataRequest.type, fetchESecure);
  yield takeLatest(fetchDataRequest.type, fetchFileTrackingSystem);
  yield takeLatest(fetchDataRequest.type, fetchBeOurPartner);
  yield takeLatest(fetchDataRequest.type, fetchCompanyProfile);
}
