var Song = React.createClass({

	render: function() {
		var by = ["Voice"];
		for(var i=0;i<this.props.artistList.length;i++) {
			by.push(i==0 ? <strong> {this.props.artistList[i]['artistName']}</strong> : <strong>, {this.props.artistList[i]['artistName']}</strong>);
		}
		by.push(<br/>);
		var ratingDiv = [];
		var rating = !this.props.rating ? 0 : this.props.rating;
		var golden_img = baseurl + "assets/img/golden_star.png";
		var gray_img = baseurl + "assets/img/gray_star.png";
		var commonIcon = baseurl + "assets/img/commonIcon.png";
		var productUrl = baseurl + "index.php/Product/";
		for (i=0;i<rating;i++) {
			ratingDiv.push(<img src={golden_img} />);
		}
		if (i!=0) {
        	for (;i<5;i++) {
				ratingDiv.push(<img src={gray_img} />);
			}
        }
		return(
			<div className="product">
				<table>
					<tr>
						<td>
							<img src={commonIcon} />
						</td>
						<td><small>
							<h5><strong><a href={productUrl+this.props.songId}>{this.props.songName}</a></strong></h5>
							<div className="rating">
								{ratingDiv}
							</div>
							<div className="clear"></div>
							Genre <strong>{this.props.genre} </strong><br/>
							{by}
						</small></td>
					</tr>
				</table>
			</div>
		);
	}
});

var SongList = React.createClass({

	getInitialState: function() {
		return ({
			productList: [],
			loading: false
		});
	},

	loadProductsOfAlbum: function(album) {
	
		var load_img = baseurl + "assets/img/loading.gif";

		this.setState({
			productList: <img className="center-block loading" src={load_img}/>,
			loading: true
		});
		$.ajax({
			url: album ? baseurl+'index.php/Api_controller/getProductFromAlbum' : baseurl+'index.php/Api_controller/getProductFromSameAlbum',

			method: "POST",
			data: {
				id: $("#productId").text()
			},
			dataType: 'json',
			success: function(result) {
            			tempProductList = [];
            			tempProductList.push(<h3><strong>Songs from {$("#moreSongAlbum").text()}</strong></h3>);
            			for (var i=0;i<result.length;i++) {
							tempProductList.push(<Song songId={result[i]['productId']} songName={result[i]['productName']} genre={result[i]['genre']} artistList={result[i]['artistList']} rating={result[i]['rating']}/>);
						}
						this.setState ({
            				productList: tempProductList,
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
		if ($("#isAlbum").text() === "1") {
			this.loadProductsOfAlbum(true);
		}
		else if ($("#albumId").text() != "0") {
			this.loadProductsOfAlbum(false);
		}
	},

	render: function() {
		return(
			<div>
				{this.state.productList}
			</div>
		);
	}
});

var Comment = React.createClass({

	render: function() {
		var ratingDiv = [];
		var rating = !this.props.rating ? 0 : this.props.rating;
		var golden_img = baseurl + "assets/img/golden_star.png";
		var gray_img = baseurl + "assets/img/gray_star.png";
		for (i=0;i<rating;i++) {
			ratingDiv.push(<img src={golden_img} />);
		}
		if (i!=0) {
        	for (;i<5;i++) {
				ratingDiv.push(<img src={gray_img} />);
			}
        }
		return(
			<div className="comment">
				<h5><strong>{this.props.userName}</strong></h5>
				<div className="rating">
					{ratingDiv}
				</div><br/>
				<small>
					"
					{this.props.commentText}
					"<br/><br/>
					{this.props.ago}
				</small>
			</div>
		);
	}
});

var CommentList = React.createClass({

	getInitialState: function() {
		return ({
			commentList: [],
			loading: false
		});
	},

	loadComments: function() {

		var load_img = baseurl + "assets/img/loading.gif";
		
		this.setState({
			commentList: <img className="center-block loading" src={load_img}/>,
			loading: true
		});
		$.ajax({
			url: baseurl+'index.php/Api_controller/getComment',
			method: "POST",
			data: {
				id: $("#productId").text(),
				page: 1
			},
			dataType: 'json',
			success: function(result) {
            			tempCommentList = [];
            			tempCommentList.push(<h3><strong>Comments on {$("#productName").text()}</strong></h3>);
            			if (result.length == 0) {
            				tempCommentList.push("No comment to show");
            			}
            			for (var i=0;i<result.length;i++) {
            				var ago = result[i]['ago'];
							if (ago <= 0) {
								ago = '0 minute ago';
							}
							else if (ago <= 1) {
								ago = '1 minute ago';
							}
							else if (ago <= 90) {
								ago = ago + ' minutes ago';
							}
							else if (ago < 4320) {
								ago = Math.round(ago/60) + ' hours ago';
							}
							else if (ago < 525600) {
								ago = Math.round(ago/1440) + ' days ago';
							}
							else if (Math.round(ago/525600) <= 1) {
								ago = Math.round(ago/525600) + ' year ago';
							}
							else {
								ago = Math.round(ago/525600) + ' years ago';
							}
							tempCommentList.push(<Comment userName={result[i]['userName']} commentText={result[i]['commentText']} rating={result[i]['rating']} ago={ago}/>);
						}
						tempCommentList.push(<div className="clear"></div>);
						this.setState ({
            				commentList: tempCommentList,
            				loading: false
            			});
            		}.bind(this),
            error: function() {
            			this.setState ({
	            			loading: false
	            		});
            			console.log("Comment load error!");
            		}.bind(this)
    	});
	},

	componentWillMount: function() {
		this.loadComments();
	},

	render: function() {		
		return(
			<div>
				{this.state.commentList}
			</div>
		);
	}
});

$(document).ready(function(){
	React.render(<CommentList />, document.getElementById('commentSection'));
    React.render(<SongList />, document.getElementById('moreSongs'));
});
