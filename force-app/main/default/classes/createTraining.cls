public with sharing class createTraining {
    @AuraEnabled
    public static void createRecord(Training__c training) {
      try{
            
            if(training != null){
                insert training;
            }
            
        } catch (Exception ex){
            System.debug(ex);
        }
        
    }    
}