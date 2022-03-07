public with sharing class CsvController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, Phone, AnnualRevenue, Industry from Account];
    }
}
