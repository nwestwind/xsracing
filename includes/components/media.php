 
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<h1>Media</h1>					 
				</div>
				<div class="col-sm-12">

					<div class="grid">
						<?php
							$imgdir = 'img/gallery/'; //Pick your folder
							$allowed_types = array('png','jpg','jpeg','gif','bmp'); //Allowed types of files
							 
							$dimg = opendir($imgdir);//Open directory
							while($imgfile = readdir($dimg)) {

								if ( in_array(strtolower(substr($imgfile,-3)), $allowed_types ) OR in_array(strtolower(substr($imgfile,-4)),$allowed_types) ) {								
									/*If the file is an image add it to the array*/
									$a_img[] = $imgfile;
								}
							}
							// echo "<div>";

							$totimg = count($a_img);  //The total count of all the images
								//Echo out the images and their paths..
								
								for($x=0; $x < $totimg; $x++){
									echo "<div class='grid-item' data-src='" . $imgdir . $a_img[$x] . "' style='background-image:url(" . $imgdir . $a_img[$x] . ");'></div>\n";
								}
								//<img src='img/placeholder.gif' data-src='" . $imgdir . $a_img[$x] . "'>
							// echo "</div>";
						?>
					</div>
				</div>
			</div>
		</div>
