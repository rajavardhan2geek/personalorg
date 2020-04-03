import { LightningElement,wire,track } from './node_modules/lwc';
import  getOpportunities from './node_modules/@salesforce/apex/OpportunityController.getOpportunities'; 
import  {refreshApex} from './node_modules/@salesforce/apex'; 
export default class ITRFormApp extends LightningElement {

@wire(getOpportunities) opportunityList;
@track columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Account', fieldName: 'AccountId' },
    { label: 'StageName', fieldName: 'StageName' },
];


handlerefresh(){

    return refreshApex(this.opportunityList);

}

}