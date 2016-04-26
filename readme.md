# Spinner
Add `cs.spinner` to your module's list of dependencies Rewrite of `cs.loading` Example: ```
#!html
<spinner spin:on="vm.spinner">
  <div class="loading-animation"></div> </spinner> <button ng-disabled="vm.spinner.isSpinning()"></button> ``` ```
#!javascript
vm.spinner = new Spinner(); vm.spinner.watch($http.get("/api/avengers"))
  .then(function(data) {
    // ...
  });
```
