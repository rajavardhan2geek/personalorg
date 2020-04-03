import { LightningElement,track } from 'lwc';

export default class Re_areaconversionCmp extends LightningElement {


    measuredunittype ="gajam";
   
    @track 
    convertedmeasure;
    @track measuredunit =1;
 ;
    @track convertedtext;
    constructor(){
        super();
       
    }
    get areainputstr(){
        return "Enter Area in "+this.measuredunittype;
    }
    get measuredunits() {
        return [
            { label: 'Feet', value: 'ft' },
            { label: 'Gajam/Yard', value: 'gajam' },
            { label: 'Gunta', value: 'gunta' },
            { label: 'Cent', value: 'cent' },
            { label: 'Acre', value: 'acre' },
            { label: 'Hectare', value: 'hectare' },
        ];
    }
    onChgUnitType(event){
        this.measuredunittype =event.detail.value;
        if(this.measuredunittype=='ft'){
            this.convertedtext = this.measuredunit+' ft is equal to '+ this.measuredunit *12 +' inches'
        }
        else if(this.measuredunittype=='gajam' || this.measuredunittype=='yard'){

            this.convertedtext = this.measuredunit+' yard/gajam is equal to '+(this.measuredunit * 9)+' sq.ft \n'
                                    +((this.measuredunit  *900) / 43560) +' cents';
        }
        else if(this.measuredunittype=='gunta'){

            this.convertedtext = this.measuredunit+' guntas is equal to '+(this.measuredunit * 1089)+' sq.ft'
                       + ' \n    '+this.measuredunit * 121 +'sq. yards /sq.gajam '
                       + ' \n    '+ (this.measuredunit *1089*100) /43560 +' cents';
        }
        else if(this.measuredunittype=='acre'){
            
            this.convertedtext = this.measuredunit+' acre is equal to '+(this.measuredunit * 43560)+' sq.ft'
                              + ' \n    '+(this.measuredunit * 43560) /9+' sq.yards or sq.gajam '
                              + ' \n    '+this.measuredunit * 100 +' cents';
        }
        else if(this.measuredunittype=='cent'){
            this.convertedunittype='ft'
            this.convertedmeasure=this.measuredunit * 435.60 ;
            this.convertedtext = this.measuredunit+' cents is equal to '+this.measuredunit * 435.60 +' sqft'
                              + ' \n  \t'+this.measuredunit * 48.4 +' sq.yards or sq.gajam ';
       
        }
    
    } 
  
    onConversion(event){
        this.measuredunit =event.detail.value;
        if(this.measuredunittype=='ft'){
            this.convertedtext = this.measuredunit+' ft is equal to '+ this.measuredunit *12 +' inches'
        }
        else if(this.measuredunittype=='gajam' || this.measuredunittype=='yard'){

            this.convertedtext = this.measuredunit+' yard/gajam is equal to '+(this.measuredunit * 9)+' sq.ft \n'
                                    +(this.measuredunit *900  / 43560) +' cents';
        }
        else if(this.measuredunittype=='gunta'){

            this.convertedtext = this.measuredunit+' guntas is equal to '+(this.measuredunit * 1089)+' sq.ft'
                       + ' \n    '+this.measuredunit * 121 +'sq. yards /sq.gajam '
                       + ' \n    '+ (this.measuredunit *1089*100) /43560 +' cents';
        }
        else if(this.measuredunittype=='acre'){
            
            this.convertedtext = this.measuredunit+' acre is equal to '+(this.measuredunit * 43560)+' sq.ft'
                              + ' \n    '+(this.measuredunit * 43560) /9+' sq.yards or sq.gajam '
                              + ' \n    '+this.measuredunit * 100 +' cents';
        }
        else if(this.measuredunittype=='cent'){
            this.convertedunittype='ft'
            this.convertedmeasure=this.measuredunit * 435.60 ;
            this.convertedtext = this.measuredunit+' cents is equal to '+this.measuredunit * 435.60 +' sqft'
                              + ' \n  \t'+this.measuredunit * 48.4 +' sq.yards or sq.gajam ';
       
        }
    }
}