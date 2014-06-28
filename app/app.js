(function () {

    var app = angular.module('sampleApp', ['ngRoute']);
    
    app.config(function ($routeProvider){
        $routeProvider
        .when('/',
              {
                  templateUrl: 'app/views/dashboard/index.html'
              })
        .when('/ledger/new/',
              {
                  templateUrl: 'app/views/ledger/createNew.html'
              })
        .when('/ledger/all/',
              {
                  templateUrl: 'app/views/ledger/all.html'
              })
        .when('/transactions/payment/',
              {
                  templateUrl: 'app/views/transactions/payment.html'
              })
        .when('/transactions/receipt/',
              {
                  templateUrl: 'app/views/transactions/receipt.html'
              })
        .when('/transactions/sales/',
              {
                  templateUrl: 'app/views/transactions/sales.html'
              })
        .when('/transactions/purchase/',
              {
                  templateUrl: 'app/views/transactions/purchase.html'
              })

        .when('/transactions/bank/',
              {
                  templateUrl: 'app/views/transactions/bank.html'
              })
        .when('/transactions/journal/',
              {
                  templateUrl: 'app/views/transactions/journal.html'
              })
        .when('/vouchers/payment/',
              {
                  templateUrl: 'app/views/vouchers/payment.html'
              })
        .when('/vouchers/receipt/',
              {
                  templateUrl: 'app/views/vouchers/receipt.html'
              })
        .when('/vouchers/sales/',
              {
                  templateUrl: 'app/views/vouchers/sales.html'
              })
        .when('/vouchers/purchase/',
              {
                  templateUrl: 'app/views/vouchers/purchase.html'
              })
        .when('/vouchers/bank/',
              {
                  templateUrl: 'app/views/vouchers/bank.html'
              })
        .when('/vouchers/journal/',
              {
                  templateUrl: 'app/views/vouchers/journal.html'
              })
        .when('/reports/trialbalance/',
              {
                  templateUrl: 'app/views/reports/trialbalance.html'
              })
        .when('/reports/balancesheet/',
              {
                  templateUrl: 'app/views/reports/balancesheet.html'
              })
        .when('/reports/pandl',
              {
                  templateUrl: 'app/views/reports/pandl.html'
              })
        .when('/orders',
              {
                  templateUrl: 'app/views/AllOrders.html'
              })
        .when('/book/new',
              {
                  templateUrl: 'app/views/book/new.html'
              })
        .when('/book/select',
              {
                  templateUrl: 'app/views/book/select.html'
              })
        .otherwise({ redirectTo: '/'});
    });

}());
