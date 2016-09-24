
			</div>
			<?php function auto_copyright($year = 'auto'){ ?>
			<?php if(intval($year) == 'auto'){ $year = date('Y'); } ?>
			<?php if(intval($year) == date('Y')){ echo intval($year); } ?>
			<?php if(intval($year) < date('Y')){ echo intval($year) . ' - ' . date('Y'); } ?>
			<?php if(intval($year) > date('Y')){ echo date('Y'); } ?>
			<?php } ?>
 			<footer>
				<div class="container">
					<div class="row">
						<div class="col-xs-12 col-md-6">
							&copy; <?php auto_copyright('2010'); ?> All Rights Reserved - True Recreation
						</div>
						<div class="col-xs-12 col-md-6">
							<a href="https://goo.gl/maps/m3szAZsMxCm" target="_blank">20177 Charlanne Dr. Redding, CA</a> | <a href="tel:+15307681074">(530)768-1074</a> | <a href="mailto:info@truerecreation.com">info@truerecreation.com</a>
						</div>
				</div>
			</footer> 
		<script src="js/global-scripts-tail.js"></script>
	</body>
</html>
