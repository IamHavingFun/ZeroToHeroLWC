public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry from Account LIMIT 5];
    }
}
