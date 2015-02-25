<md-dialog aria-label="Mango (Fruit)">
<md-content>
<md-subheader class="md-sticky-no-effect">Add Candidate</md-subheader>
<form class="form" ng-submit="addContent()">

<div class="form-group">
<label>Candidate</label>
<input type="text" class="form-control" placeholder="name" ng-model="newContent.candidate">
</div>

<div class="form-group">
<label>Email</label>
<input type="email" class="form-control" placeholder="email" ng-model="newContent.email">
</div>

<div class="form-group">
<label>Phone Number</label>
<input type="text" class="form-control bfh-phone" data-country="US" ng-model="newContent.phone_number">
</div>

<div class="form-group">
<label>Major</label>
<input type="text" class="form-control" placeholder="major" ng-model="newContent.major">
</div>

<div class="form-group">
<label>GPA</label>
<select class="select">
<option value="GPA" selected></option>
<option>2.0</option>
<option>2.1</option>
<option>2.2</option>
<option>2.3</option>
<option>2.4</option>
<option>2.5</option>
<option>2.6</option>
<option>2.7</option>
<option>2.8</option>
<option>2.9</option>
<option>3.0</option>
<option>3.1</option>
<option>3.2</option>
<option>3.3</option>
<option>3.4</option>
<option>3.5</option>
<option>3.6</option>
<option>3.7</option>
<option>3.8</option>
<option>3.9</option>
<option>4.0</option>
</select>
<label>School</label>
<select class="select">
<option value="School" selected></option>
<option>BYU</option>
<option>BYU-I</option>
<option>USU</option>
<option>Utah</option>
<option>UVU</option>
<option>WSU</option>
</select>
<label>Internship</label>
<select class="select">
<option value="School" selected></option>
<option>Business Analyst</option>
<option>Business Intel/Database</option>
<option>Interactive Design/UX</option>
<option>Infra/Networking</option>
<option>Product Management</option>
<option>Project Management</option>
<option>Quality Assurance</option>
<option>Security Analyst</option>
<option>Software Development</option>
<option>Web Development</option>
</select>
</div>

<div class="form-group">
<label>Body</label>
<textarea type=text" class="form-control" placeholder="body" ng-model="newContent.body"></textarea>