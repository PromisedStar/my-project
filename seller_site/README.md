- [Task of seller-site](https://github.com/yumenoshingo/seller-site/issues?q=is%3Aissue+is%3Aopen+sort%3Acreated-asc)  

- Project Documents Folder [HERE](https://github.com/yumenoshingo/ecsitepj)
 
## RULE  
You need to make TEST CODE!  
You need to add English Comment!  

## FLOW
1. You can make branch "feature-xxxxxxxxx"  from dev-branch.  Then Work.
2. You can make pull request to dev-branch.
3. Reviewer reviews pull-request, then merge to dev-branch.
4. Reviewer deploys dev-branch to DEV-env.
5. Reviewer merge dev-branch to master, after Testing.
6. Reviewer deploys master to Production.
## ENV  
- Seller-site *DEV-env* this will become prod.  
[https://creator.arigance.com/](https://creator.arigance.com/)  
PHP7.4, Laravel8, Bootstrap.  
You can use Vue2, but reviewer hopes less vue.js...  

- Buyer-site *DEV-env*  
[https://dev.arigance.com/](https://dev.arigance.com/)    

- Buyer-site *PROD-env* We are using it for Teaser site (Promotion) Now   
[https://arigance.com/](https://arigance.com/)  

- Database Difinition  
[https://github.com/yumenoshingo/seller-site/blob/main/DatabaseDefinition.md](https://github.com/yumenoshingo/seller-site/blob/main/DatabaseDefinition.md)  

### Cloud  
- Account Management : Firebase Auth   [https://firebase.google.com/docs/auth/web/firebaseui](https://firebase.google.com/docs/auth/web/firebaseui)  
- Purchase : Stripe ( & record it to Firebase Database )   [https://stripe.com/docs](https://stripe.com/docs)  
- DB : Cloud Firestore  [https://firebase.google.com/docs/firestore](https://firebase.google.com/docs/firestore)  
- Storage for Thumbnail : GCP storage  [https://cloud.google.com/storage/docs](https://cloud.google.com/storage/docs)  
- Log : GCP StackdriverLogging  [https://cloud.google.com/logging/docs](https://cloud.google.com/logging/docs)  


## Deployment
hands.

```
$ clone / fetch  
$ cp .env.example .env  
$ chmod storage/logs and bootstrap/cache  

// for SELLER site. for buyer-site, use /var/html/buyer-site/storage
$ sudo chcon -R -t httpd_sys_rw_content_t /var/www/html/seller-site/storage  

// CentOS
$ sudo chown apache:apache app artisan bootstrap config database public resources routes storage tests -R

$ composer install
$ php artisan cache:clear  
$ php artisan key:generate   
  
```  
