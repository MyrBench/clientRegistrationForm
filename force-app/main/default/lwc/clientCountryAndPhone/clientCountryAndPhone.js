import { LightningElement, api , track} from 'lwc';

export default class ClientCountryAndPhone extends LightningElement {
    @api country = 'IL';
    
    @api phone='';

    selectedCountry;

    countryOptions = [
        { label: 'United States', value: 'US' },
        { label: 'Israel', value: 'IL' },
        { label: 'France', value: 'FR' },
    ];
connectedCallback(){
    debugger;
    console.log('this.country>>> '+this.country)
}
    
    get getCountryOptions() {
        return this.countryOptions;
    }

    handleCountryChange(event) {
        this.country = event.detail.value;
        const data = {
            countrySelected: this.country,
        };
        const dataChangeEvent = new CustomEvent('datachange', { detail: data });
        this.dispatchEvent(dataChangeEvent);
    }
    handlePhoneChange(event){
        this.phone = event.detail.value;
        const data = {
            countrySelected: this.country,
            phone: this.phone,
        };
        const dataChangeEvent = new CustomEvent('datachange', { detail: data });
        this.dispatchEvent(dataChangeEvent);
    }
}