public with sharing class MapControllerLwc {
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccounts(){
       return [SELECT Id, Name, description, BillingStreet, 
       BillingCountry, BillingCity, BillingState,
       BillingPostalCode FROM Account ORDER BY Name LIMIT 10];
   }
}
