import NAME_FIELD from '@salesforce/schema/User.Name';
import Id from '@salesforce/user/Id';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';
const fields = [NAME_FIELD];
export default class Selector extends LightningElement {
  selectedProductId;
  handleProductSelected(evt) {
    this.selectedProductId = evt.detail;
  }
  userId = Id;
  @wire(getRecord, { recordId: '$userId', fields })
  user;
  get name() {
    return getFieldValue(this.user.data, NAME_FIELD);
  }
}