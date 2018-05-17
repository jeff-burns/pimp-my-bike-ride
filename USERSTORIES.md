	Epic: As a user, I want a landing page   https://wireframe.cc/DQKs0G
	
	        As a user, I want to see the name of the app 'Biking Weather' to be displayed prominently
	            * Add a navbar to the top the top of the page
	            * Style the navbar with bootstrap
	            * Add a logo (a bike and the sun) to the top left of the navbar https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4676996.jpg
	
	        As a user, I want to see a description of how the app works
	            * Add a hero image (shot of the bike trail on a nice day vs. a bad day)
                    good day https://static1.squarespace.com/static/5235cb72e4b01ae2ba612744/t/560983a6e4b05fae0fcc7cad/1443464118554/
                    bad day https://ak9.picdn.net/shutterstock/videos/33084019/thumb/1.jpg
	            * Add a description to center of page - Put in your route and time to start, the app will give you the weather at 3 places and times along your route (beginning, middlish, and end) - it can also send you an alert 12 hours or so before the time you plan on leaving if it's a certain temperature and sunny or not
	
	        As a user, I want a link that will take me to the application page  https://wireframe.cc/9UtQNI 
	            * Add the input bars for route
	            * Add the input bars for time to begin

			As a user, I want to get the weather from specific route locations at the specific times I will be there 
			Weather Underground API Key 2b572770b27d6c40
			what the api request to get an exact zipcode http://api.wunderground.com/api/2b572770b27d6c40/conditions/q/CO/Denver/80202.json
_________________
			approximate time of start and end of ride
			 	do 2 things with this
					1. find the forecast for those 2 times and corresponding places
					2. alert 10 - 12 hours before leave time

				extras about time
					start time might be now or within the next hour, so use the current-conditions url, if not use the hourly forecast url

					need to figure out good way to alert and set up an input for the times and the alert time

					if total time is longer than an hour, maybe add midpoint/time weather

					maybe allow multiple endpoints?


			either add metric to all or get rid of it on all


			figure way to either add the city and state to the end of route OR use a check box to add them to it?
				OR take city state optionally
				OR even take an address and figure all that out for them and possibly figure length of route time for the end route time
	

			add icons to the weather results?


			add gmaps to the route section and use that to pick the zipcodes
				eventually use the coordinates, so it can be used in the mountains too


			CSS/HTML
				fix structure of cards

				make nav burger work

				present results nicer

				allow space for maps

				make it all responsive

				possibly wireframe and start over with materialize?			
