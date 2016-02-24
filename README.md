#### A simple app-drawer for Bootstrap `navbars`

app-drawer works within a Bootstrap `navbar` control.

To implement app-drawer:

- Ensure that your page includes references to app-drawer.js and app-drawer.css, bootstrap.css and bootstrap.js, as well as a recent version of jQuery (>1.9.1).
 
- Create a new `li` element inside of the `nav navbar-nav` `ul` that will trigger the AppDrawer to open/close.
  - 
	```html
	<li>
	  <a href="#" class="app-drawer-launcher app-drawer">
	    App Menu 
	      <span class="glyphicon glyphicon-circle-arrow-right pull-right" id="menu-arrow"></span>
	 	  <span class="caret" id="menu-caret"></span>
	  </a>
	</li>
	
 	```
     
- Create the AppDrawer body *outside* of the `navbar-collapse collapse` and `navbar-header` sections, but *inside* the main `navbar` section.
  - 
  	```html
  	<div class="navbar navbar-fixed-top navbar-default">
	  	<div class="navbar-header">
	      <!--default bootstrap layout-->
	    </div>
	    <div class="navbar-collapse collapse">
	      <ul class="nav navbar-nav">
	        <!--Menu items, including the li created above-->
	      </ul>
	    </div>
	    
	    <div class="app-drawer" id="my-app-drawer">
	      <!--Optional 'close' button in top corner of app-drawer-->
	      <div id="close-app-drawer"> 
	        <button class="close">
	          <span class="glyphicon" id="close-app-drawer-btn"></span>
	        </button>
	      </div>
	
	      <!--Optional row header/app category separator-->
	      <div class="rowHeader">
	        <span title="Row Header" class="strike">
	          <b>Row One</b>
	        </span>
	      </div>
	
	      <!--Repeat this formatting for each of your apps/links-->
	      <div class="appButton" id="app1">
	        <a href="#" title="" class="tile-link">
	          <img src="..." height="75" width="75">
	          <span class="centered">App Title</span>
	        </a>
	      </div>
	    </div>
  	</div>
	    
  	```

- Call the `appDrawer()` function on your AppDrawer.
   - 
   	 ```JavaScript
     <script type="text/javascript">
        $('#my-app-drawer').appDrawer();
     </script>
     
     ```

That's it! 
