public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry from Account LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountTypeType(String type){
        return [SELECT Id, Name, Type from Account where Type=:type LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey){
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, Type, Industry FROM Account WHERE Name LIKE :key LIMIT 5];
    }

}
