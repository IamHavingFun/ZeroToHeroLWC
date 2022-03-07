public with sharing class OpportunityController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(){
        return [SELECT StageName FROM Opportunity];
    }
}
