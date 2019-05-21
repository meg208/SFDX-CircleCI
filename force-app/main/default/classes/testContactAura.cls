@isTest
public class testContactAura {
@isTest
    public static void testcontact(){
        List<Contact> cl=new List<Contact>();
        for (Integer count = 0; count < 50; count++) {
         Contact c=new Contact();
         c.Lastname='Jack'+count; 
         c.Phone ='00000000'+count;
            cl.add(c);
    }
        insert cl;
        Test.startTest();
        ContactAura.get10COntacts();
        Test.stopTest();
         Contact cc = [select phone from Contact LIMIT 1];
        System.assertEquals ( Integer.valueOf(cc.phone) ,00000000);
    }
}