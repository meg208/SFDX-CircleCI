({
	create : function(component, event, helper) {
		console.log('Create record');
        
        //getting the candidate information
        var Training = component.get("v.Training");
        
        //Validation
        if($A.util.isEmpty(Training.Triner_Name__c) || $A.util.isUndefined(Training.Triner_Name__c)){
            alert('Training Name is Required');
            return;
        }            
        if($A.util.isEmpty(Training.Trining_Name__c) || $A.util.isUndefined(Training.Trining_Name__c)){
            alert('Trining Name is Rqquired');
            return;
        }
        if($A.util.isEmpty(Training.Fee__c) || $A.util.isUndefined(Training.Fee__c)){
            alert('Fee is Required');
            return;
        }
       
        //Calling the Apex Function
        var action = component.get("c.createRecord");
        
        //Setting the Apex Parameter
        action.setParams({
            Training : Training
        });
        
        //Setting the Callback
        action.setCallback(this,function(a){
            //get the response state
            var state = a.getState();
            
            //check if result is successfull
            if(state == "SUCCESS"){
                //Reset Form
                var newTraining = {'sobjectType': 'Training__c',
                                    'Triner_Name__c': '',
                                    'Trining_Name__c': '',
                                    'Fee__c': ''
                                    
                                   };
                //resetting the Values in the form
                component.set("v.Training",newTraining);
                alert('Record is Created Successfully');
            } else if(state == "ERROR"){
                alert('Error in calling server side action');
            }
        });
        
		//adds the server-side action to the queue        
        $A.enqueueAction(action);

	}
})