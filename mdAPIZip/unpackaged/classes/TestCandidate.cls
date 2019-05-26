@isTest
public class TestCandidate {
    @isTest
    public static void testCandidate(){
        Candidate__c c= new Candidate__c();
        c.Last_Name__c='venkat';
        c.Email__c='venkat@gmail.com';
        c.SSN__c=2;
        insert c;
     CreateCandidateRecord.createRecord(c) ;       
    }

}