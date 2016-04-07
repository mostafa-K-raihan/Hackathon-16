<html lang="en">
  <div id="signInModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
            <h3 class="modal-title">Report A Violence</h3>
        </div>
        <div class="modal-body">
            <form action='<? echo base_url("index.php/Api_controller/signIn"); ?>' method="POST">
                <strong>District:</strong>
                </br>
                <input type="text" name="albumName" list="albumname">
                <datalist id="albumname">
                    <option>Dhaka</option>
                    <option >Bandarban District</option>
                    <option>Chittagong</option>
                    <option>Brahmanbaria District</option>
                    <option>Chandpur District </option>
                    <option>Comilla District</option>
                </datalist>
                <br>
                <strong>Area:</strong>
                </br>
                <input type="text" name="albumName" list="albumname">
                <datalist id="albumname">
                    <option>Mirpur</option>
                    <option>Polashi</option>
                    <option>Khilgone</option>
                    <option>Polton</option>
                    <option>Jinjira</option>
                </datalist>
                </br>
                <strong>Location:</strong>
                </br>
                <input type="text" name="albumName" list="albumname">
                <datalist id="albumname">
                    <option>Mirpur 10</option>
                    <option>Mirpur 3</option>
                    <option>Mirpur 2</option>
                    <option>Mirpur 1</option>
                    <option>Mirpur 11</option>
                </datalist>
                </br>
                <fieldset class="form-group">
                  <label for="albumName">Category</label>
                  </br>
                  <input type="text" name="albumName" list="albumname">
                  <datalist id="albumname">
                      <option>Sexual violence</option>
                      <option>Sexual assault</option>
                      <option>Rape</option>
                      <option>Eve teasing</option>
                      <option>Domestic violence</option>
                  </datalist>
                </fieldset>
                </br>
                <fieldset class="form-group">
                  <label for="exampleTextarea">Description</label>
                  <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                </fieldset>
                <input type="submit" value="Submit" class="modalSubmit"></input>
            </form>
        </div>
        </div>
      </div>
  </div>
   <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active sidebarLink"><a href="#">Home <span class="sr-only">(current)</span></a></li>
            <li class="sidebarLink"><a href="">statistics</a></li>
            <li class="sidebarLink"><a href="">Find Path</a></li>
            <li><a href="#signInModal" data-toggle="modal" data-target="#signInModal">Report</a></li>
            <li class="sidebarLink"> <a href="">Blog</a></li>
          </ul>
        </div>
      </div>
  </div>
</html>
