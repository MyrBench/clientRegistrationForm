import { LightningElement, api } from 'lwc';

export default class ClientRegistrationPreview extends LightningElement {
    @api firstName = '';
    @api lastName = '';
    @api salutation = '';
    @api birthdate = '';
    @api country = '';
    @api phone = '';
}