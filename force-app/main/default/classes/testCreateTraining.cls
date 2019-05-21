@isTest
public with sharing class testCreateTraining {
    @isTest
    public static void TestTraining(){
        Training__c t=new Training__c();
        t.Triner_Name__c='Arjun';
        t.Trining_Name__c='Salesforce';
        t.Fee__c=100;
        insert t;
        createTraining.createRecord(t);
            }
}
