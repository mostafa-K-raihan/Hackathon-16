var Song = React.createClass({

	render: function() {
		var by = ["Voice "];
		by.push(<strong>{this.props.artistList}</strong>);
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

	loadProductsOfAlbum: function() {
	
		var load_img = baseurl + "assets/img/loading.gif";

		this.setState({
			productList: <img className="center-block loading" src={load_img}/>,
			loading: true
		});
		$.ajax({
			url:baseurl+'index.php/Api_controller/getSong',
			method: "POST",
			data: {
				username: $("#artistUserName").text()
			},
			dataType: 'json',
			success: function(result) {
            			tempProductList = [];
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
		this.loadProductsOfAlbum();
	},

	render: function() {
		return(
			<div>
				{this.state.productList}
			</div>
		);
	}
});
$(document).ready(function(){
	React.render(<SongList />, document.getElementById('moreSongs'));
});
