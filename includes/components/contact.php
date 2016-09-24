
		<div class="container">
			<div class="row">
				 
				<div class="contact-form col-sm-6 col-sm-push-5 col-md-push-6">
					<h2>Contact Us</h2>
					<form >
						<div class="col-sm-6">
							<div class="form-group">
								<label for="exampleInputEmail1">Name *</label>
								<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Name *" required>
							</div>
						</div>
						<div class="col-sm-6"> 
							<div class="form-group">
								<label for="exampleInputEmail1">Email *</label>
								<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email *" required>
							</div>
						</div>
						<div class="col-sm-12">
							<div class="form-group">
								<label for="exampleInputPassword1">Message</label>
								<textarea name="" class="form-control" placeholder="Questions? Comments? We'd love to hear it."></textarea>
							</div>
						</div>
						<div class="col-sm-8">
							<div class="checkbox">
								<label>
									<input type="checkbox" checked> Sign me up for email updates
								</label>
							</div>
						</div>
						<div class="col-sm-4">
							<button type="submit" class="btn btn-primary">Submit</button>
						</div>
						
					</form>
				</div>
			</div>
		</div>
	
	<div class="map" id="map">
	<!-- <img src="https://maps.googleapis.com/maps/api/staticmap?center=40.5451343,-122.3011967&amp;zoom=16&amp;size=1600x1080&amp;maptype=roadmap&amp;markers=color:blue%7Clabel:S%740.5449468,-122.2985252&amp;key=AIzaSyD1AWYjwu2lMTp16k62J7_HkGlEKNJuWL0"> -->
		<!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.8476470513724!2d-122.30550968460022!3d40.54495497935038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d2eb2cd796c607%3A0xf3e6f854cb2ee33a!2s20177+Charlanne+Dr%2C+Redding%2C+CA+96002!5e0!3m2!1sen!2sus!4v1448944820724" frameborder="0" style="border:0" allowfullscreen></iframe> -->
	</div>
	<script type="text/javascript">
		var map;
			function initMap() {
				map = new google.maps.Map(document.getElementById('map'), {
				center: {
					lat: 40.5449839,
					lng: -122.301759
				},
				scrollwheel: false,
				zoomControl: false,
				scaleControl: false,
				zoom: 17,
				disableDefaultUI: true,
				draggable: false,
				scrollwheel: false,
				panControl: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP 
			});
			var myLatLng = {lat: 40.54483, lng: -122.303334};
			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: '20177 Charlanne Dr. Redding, CA 96002'
			});

			var getCen = map.getCenter();

			google.maps.event.addDomListener(window, 'resize', function() {
				map.setCenter(getCen);
				console.log('maps resize');
			});
		}
		
    </script>
    <script async defer  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1AWYjwu2lMTp16k62J7_HkGlEKNJuWL0&amp;callback=initMap">
    </script>
