let apikey = 'a3f020d64f994115a2fcadf7e30d9e04'


$.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&number=24`, {'query': ''}, function (response) {
	let output = ''
	console.log(response)
	for (let recipe of response.results) {
		output += `<div class="col-md-3 css col-12 mb-3">
			<div class="card">
				<img src="${recipe.image}" class="card-img-top" alt="${recipe.title} image">
				<div class="card-body">
					<h5 class="card-title">${recipe.title}</h5>
					<div class="text-start">
						<button class="btn btn-primary see-product" data-bs-toggle="modal" data-bs-target="#product-details" data-id="${recipe.id}">See Details</button>
					</div>
				</div>
			</div>
		</div>`
	}

	$('.recipe').html(output)

			$('.see-product').on('click', function () {
			let id = $(this).attr('data-id')

			$.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apikey}`, function (response) {
				console.log(response)
				$('.modal-title').html(response.title)

				$('.slider').html(`
				<div class="carousel-item active">
					<img src="${response.image}" class="d-block w-100">
				</div>`)
				$('.other-info').html(`<h3 class=other><strong>Recipe Instructions</strong></h3><p>${response.instructions}</p>
					<hr>
					<span><strong>Source Name:</strong>${'  ' + response.sourceName}</span>
					<hr>
					<p><strong>Source URL:</strong>${'  ' + response.sourceURL}</p>
					<hr>
					<p><strong>Diets:</strong>${'  ' + response.diets}</p>
					<hr>
					<p><strong> Vegan:</strong> ${(response.vegan == 0? '<span class="badge rounded-pill text-bg-warning">Yes</span>' : '<span class="badge rounded-pill text-bg-warning">No</span>')}<p>
					`)


			})
		})
})

$('.search-btn').on('click', function () {
	let query = $('.query').val()

	$.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&number=24`, {'query': query}, function (response) {
		let output = ''
		console.log(response)
		for (let recipe of response.results) {
			output += `<div class="col-md-3 css col-12 mb-3">
				<div class="card">
					<img src="${recipe.image}" class="card-img-top" alt="${recipe.title} image">
					<div class="card-body">
						<h5 class="card-title">${recipe.title}</h5>
						<div class="text-start">
							<button class="btn btn-primary see-product" data-bs-toggle="modal" data-bs-target="#product-details" data-id="${recipe.id}">See Details</button>
						</div>
					</div>
				</div>
			</div>`
		}

		$('.recipe').html(output)

		$('.see-product').on('click', function () {
			let id = $(this).attr('data-id')

			$.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apikey}`, function (response) {
				console.log(response)
				$('.modal-title').html(response.title)

				$('.slider').html(`
				<div class="carousel-item active">
					<img src="${response.image}" class="d-block w-100">
				</div>`)
				$('.other-info').html(`<h3 class=other><strong>Recipe Instructions</strong></h3><p>${response.instructions}</p>
					<hr>
					<span><strong>Source Name:</strong>${'  ' + response.sourceName}</span>
					<hr>
					<p><strong>Source URL:</strong>${'  ' + response.sourceURL}</p>
					<hr>
					<p><strong>Diets:</strong>${'  ' + response.diets}</p>
					<hr>
					<p><strong> Vegan:</strong> ${(response.vegan == 0? '<span class="badge rounded-pill text-bg-warning">Yes</span>' : '<span class="badge rounded-pill text-bg-warning">No</span>')}<p>
					`)


			})
		})
	})
})


$('.search-btn1').on('click', function(){
	let query1 = $('.query1').val()

	$.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&number=24`, {'query': query1}, function (response) {
		let output = ''
		console.log(response)
		for (let recipe of response.results) {
			output += `<div class="col-md-3 col-12 css mb-3">
				<div class="card">
					<img src="${recipe.image}" class="card-img-top" alt="${recipe.title} image">
					<div class="card-body">
						<h5 class="card-title">${recipe.title}</h5>
						<div class="text-start">
							<button class="btn btn-primary see-product" data-bs-toggle="modal" data-bs-target="#product-details" data-id="${recipe.id}">See Details</button>
						</div>
					</div>
				</div>
			</div>`
		}

		$('.recipe').html(output)

		$('.see-product').on('click', function () {
			let id = $(this).attr('data-id')

			$.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apikey}`, function (response) {
				console.log(response)
				$('.modal-title').html(response.title)

				$('.slider').html(`
				<div class="carousel-item active">
					<img src="${response.image}" class="d-block w-100">
				</div>`)
				$('.other-info').html(`<h3 class=other><strong>Recipe Instructions</strong></h3><p>${response.instructions}</p>
					<hr>
					<span><strong>Source Name:</strong>${'  ' + response.sourceName}</span>
					<hr>
					<p><strong>Source URL:</strong>${'  ' + response.sourceURL}</p>
					<hr>
					<p><strong>Diets:</strong>${'  ' + response.diets}</p>
					<hr>
					<p><strong> Vegan:</strong> ${(response.vegan == 0? '<span class="badge rounded-pill text-bg-warning">Yes</span>' : '<span class="badge rounded-pill text-bg-warning">No</span>')}<p>
					`)


			})
		})
	})
})






