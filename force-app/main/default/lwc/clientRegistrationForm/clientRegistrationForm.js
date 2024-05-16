import { LightningElement, track } from 'lwc';

export default class ClientRegistrationForm extends LightningElement {

    @track currentStep = 1;
    // ce que l'on va envoyé en step3 pour le composent clientRegistrationPreview
    @track personalDetails = {
        firstName: '',
        lastName: '',
        salutation: '',
        birthdate: ''
    };

    @track countryAndPhone = {
        country:'',
        phone:''
    };

    @track isSaved = false;

    // Methode qui met a jour les informations saisie dans composant clientPersonalDetail en step 1 
    

    handlePersonalDetailsChange(event) {

        const data = event.detail;
        this.personalDetails = {
            firstName: data.firstName,
            lastName: data.lastName,
            salutation: data.salutation,
            birthdate: data.birthdate
        };
       
        this.emitDataToPreview();
    }
     // Methode qui met a jour les informations saisie dans composant clientCountryAndPhone en step 2
     handleCountryAndPhoneChange(event) {
        const data = event.detail;
        this.countryAndPhone = {
            country: data.countrySelected,
            phone: data.phone
        };
        this.emitDataToPreview();
    }

    handleNextStep() {
        if (this.currentStep < 3) {
            this.currentStep += 1;
        }
        }

     handleBackStep() {
            if (this.currentStep > 1 && this.currentStep <= 3) {
                this.currentStep -= 1;
            }
     }
    handleSave() {
    this.isSaved = true;
    this.currentStep=0;

    }   
    handleNew(){
    // Réinitialiser le formulaire
    this.isSaved = false;    
    this.currentStep = 1;
    this.personalDetails = {
        firstName: '',
        lastName: '',
        salutation: '',
        birthdate: ''
    };
    this.countryAndPhone = {
        country:'IL',
        phone:''
    }; 

    } 
    get currentStepEqualToOne() {
        return this.currentStep === 1;
    }
    get currentStepEqualToTwo() {
        return this.currentStep === 2;
    }
    get currentStepEqualToThree() {
        return this.currentStep === 3;
    }

    get displayNext() {
        return !(this.currentStep == 3 || this.isSaved);
    }
    get displayBack(){
        return !(this.currentStep ==1 || this.isSaved);
    }
    emitDataToPreview() {
        const data = {
            firstName: this.personalDetails.firstName,
            lastName: this.personalDetails.lastName,
            salutation: this.personalDetails.salutation,
            birthdate: this.personalDetails.birthdate,
            country: this.countryAndPhone.country,
            phone: this.countryAndPhone.phone
        };
        const event = new CustomEvent('datachange', { detail: data });
        this.dispatchEvent(event);
    }
}