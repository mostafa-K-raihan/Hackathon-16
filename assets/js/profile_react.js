var Profile = React.createClass({
	render: function() {
		var image = baseurl;
		var profileUrl = baseurl +"index.php/ArtistProfile/";
		var removeUrl = baseurl+"index.php/Api_controller/removeFollower";
		var unfollow = "Unfollow";
		var location = $("#location").text();
		return(
			<div className="profile">
				<table id="profileTable">
					<tr>
						<td className="profileTd">
							<img src={image+this.props.llocation} />
						</td>
						<td className="profileTd" id="profilename">
							<h4>
								<strong><a href={profileUrl+this.props.username}>{this.props.Name}</a></strong>
							</h4>
						</td>
						<td className="profileTd" id="profileform">
						     <form id="changeInfoForm" name="changeInfoForm" action={removeUrl} method="POST">
				             <input type="hidden" name="username" value={this.props.id}></input>
				              <input type="hidden" name="location" value={location}></input>
				             <button id="submit" className="unfollow">{unfollow}</button>          
					        </form>
						</td>
					</tr>
				</table>
			</div>
		);
	}
});

var FollowingList = React.createClass({

	getInitialState: function() {
		return ({
			profileList: [],
			loading: false
		});
	},

	loadProductsOfAlbum: function() {
	
		var load_img = baseurl + "assets/img/loading.gif";

		this.setState({
			profileList: <img className="center-block loading" src={load_img}/>,
			loading: true
		});
		$.ajax({
			url:baseurl+'index.php/Api_controller/getFollowingList',
			method: "POST",
			data: {
				username: $("#userName").text()
			},
			dataType: 'json',
			success: function(result) {
            			tempProfileList = [];
            			for (var i=0;i<result.length;i++) {
							tempProfileList.push(<Profile Name={result[i]['artistName']} id={result[i]['artistId']} email={result[i]['artistEmail']} llocation={result[i]['artistLocation']} username={result[i]['artistUsername']}/>);
						}
						this.setState ({
            				profileList: tempProfileList,
            				loading: false
            			});
            		}.bind(this),
            error: function() {
            			this.setState ({
	            			loading: false
	            		});
            			console.log("Song load error!");
            		}.bind(this)
    	});
	},

	componentWillMount: function() {
		this.loadProductsOfAlbum();
	},

	render: function() {
		return(
			<div>
				{this.state.profileList}
			</div>
		);
	}
});
$(document).ready(function(){
	React.render(<FollowingList />, document.getElementById('moreSong'));
});
