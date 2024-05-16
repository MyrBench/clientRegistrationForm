import { LightningElement, api } from 'lwc';

export default class ClientPersonalDetails extends LightningElement {

    @api firstName = '';
    @api lastName = '';
    @api salutation = '';
    @api birthdate = '';
    salutationsList = [
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Ms.', value: 'Ms.' },
        { label: 'Mrs.', value: 'Mrs.' },
       
    ];

    get salutationOptions() {
        return this.salutationsList;
    }
    handlePersconalDetailsChangeName(event) {
        const fieldValue = event.detail;
        // if (fieldName === 'birthdate') {
        //     this.birthdate = fieldValue;
        // } else {
        //     this[fieldName] = fieldValue;
        // }
        this.firstName = fieldValue.firstName;
        this.lastName = fieldValue.lastName;
        this.salutation = fieldValue.salutation;
        const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            salutation: this.salutation
        };
        const dataChangeEvent = new CustomEvent('datachange', { detail: data });
        this.dispatchEvent(dataChangeEvent);
    }
    handlePersconalDetailsChangeDate(event) {
        const fieldValue = event.detail.value;
        this.birthdate = fieldValue;
        const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            salutation: this.salutation,
            birthdate: this.birthdate
        };
        const dataChangeEvent = new CustomEvent('datachange', { detail: data });
        this.dispatchEvent(dataChangeEvent);
    }
    
}

