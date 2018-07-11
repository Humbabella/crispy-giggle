game = {
	
	dresses: [],
	
	dress_container: function create_container () {
		var c = {
			html: document.getElementById('dress_container'),
			drag_over: function (e) {
				e.preventDefault();
			},
			drop_on: function () {
				if (game.current_dress) {
					c.html.appendChild(game.current_dress.html);
					game.current_dress.set_position(false);
					game.current_dress = false;
				}
			}
		}
		
		c.html.addEventListener('dragover', c.drag_over);
		c.html.addEventListener('drop', c.drop_on);
		
		return c;
	} (),
		
	doll: function create_doll () {
		var d = {
			html: document.getElementById('doll'),
			drag_over: function (e) {
				e.preventDefault();
			},
			drop_on: function () {
				if (game.current_dress) {
					d.html.appendChild(game.current_dress.html);
					game.current_dress.set_position(true);
					game.current_dress = false;
				}
			}
		}
		
		d.html.addEventListener('dragover', d.drag_over);
		d.html.addEventListener('drop', d.drop_on);
		
		return d;
	} (),
	

	new_dress: function create_dress (args) {
		var d = {
			html: HL.new_html('div', game.dress_container.html, 'dress'),
			type: args.type,
			image: args.image,
			height: args.height,
			width: args.width,
			top: args.top,
			left: args.left,
			set_position: function (v) {
				if (v) {
					d.html.style.top = d.top + 'px';
					d.html.style.left = d.left + 'px';
					d.html.style.display = 'block';
					d.html.style.position = 'absolute';
				} else {
					d.html.style.top = '';
					d.html.style.left = '';
					d.html.style.display = 'inline-block';
					d.html.style.position = 'relative';
				}
			},
			drag: function (e) {
				game.current_dress = d;
			}
		}
		
		d.html.draggable = 'true';
		d.html.style.backgroundImage = 'url("images/' + d.image + '")';
		d.html.style.height = args.height + 'px';
		d.html.style.width = args.width + 'px';
		d.html.addEventListener('dragstart', d.drag);
		
		game.dresses.push(d);
	}
	
	

}

game.new_dress({image: 'dress1.png', height: 127, width: 106, top: 190, left: 90, type: 'body'});
game.new_dress({image: 'dress2.png', height: 167, width: 93, top: 211, left: 94, type: 'body'});
