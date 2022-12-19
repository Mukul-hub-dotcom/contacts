import axios from 'axios'
export class ContactService{
    static serverURL='https://json-files.onrender.com/'

    static getAllContacts(){
        let dataURL=`${this.serverURL}/contacts`;
        return axios.get(dataURL)
    }

    static getContact(contactId){
        let dataURL=`${this.serverURL}/contacts/${contactId}`;
        return axios.get(dataURL)
    }

    static getGroupName(contact){
        let groupId=contact.groupId
        let dataURL=`${this.serverURL}/groups/${groupId}`;
        return axios.get(dataURL)

    }
    static getGroup(){
        
        let dataURL=`${this.serverURL}/groups`;
        return axios.get(dataURL)

    }

    static createContact(contact){
        let dataURL=`${this.serverURL}/contacts`;
        return axios.post(dataURL,contact)

    }



    static deleteContact(contactId){
         let dataURL=`${this.serverURL}/contacts/${contactId}`;
         return axios.delete(dataURL)

    }

    static updateContact(contact,contactId){
        let dataURL=`${this.serverURL}/contacts/${contactId}`;
         return axios.put(dataURL, contact)

    }




}