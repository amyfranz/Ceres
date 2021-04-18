const Chat = [

    {id: 1, message: [
			{text: "Hi, how are you doing today?", next_id: 2, type: "text"}
			], source: "ceres"}, 
			
    {id: 2, message: [
			{text: "Are you excited to learn sustainability?", next_id: 3, type: "text"}
			], source: "ceres"},

    {id: 3, message: [
			{text: "https://media0.giphy.com/media/xUPJPB7DuFNoa8mqqY/giphy.gif", next_id: 4, type: "gif"},
			{text: "https://media.giphy.com/media/ibk5Xzh5lF9xhQQQED/source.gif", next_id: 4, type: "gif"},
			{text: "https://media.giphy.com/media/11sBLVxNs7v6WA/source.gif", next_id: 4, type: "gif"},
			{text: "https://media.giphy.com/media/3o6UB3VhArvomJHtdK/source.gif", next_id: 5, type: "gif"},
			{text: "https://media.giphy.com/media/dILrAu24mU729pxPYN/giphy.gif", next_id: 6, type: "gif"},
			{text: "https://media.giphy.com/media/efekFtYIAq2cipAWH1/source.gif", next_id: 6, type: "gif"},
			{text: "https://media.giphy.com/media/9xijGdDIMovchalhxN/source.gif", next_id: 7, type: "gif"},
			{text: "https://media.giphy.com/media/l2JhtKtDWYNKdRpoA/giphy.gif", next_id: 8, type: "gif"},
			{text: "https://media.giphy.com/media/3o6gDWzmAzrpi5DQU8/giphy.gif", next_id: 8, type: "gif"},
			], source: "user"},

    {id: 4, message: [
			{text: "https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/source.gif", next_id: 9, type: "gif"},
			], source: "ceres"},

    {id: 5, message: [
			{text: "https://media.giphy.com/media/kdLBCDOV5vfwqbO81g/giphy.gif", next_id: 9, type: "gif"},
			], source: "ceres"},

    {id: 6, message: [
			{text: "https://media.giphy.com/media/xT5LMEcHRXKXpIHCCI/source.gif", next_id: 9, type: "gif"},
			], source: "ceres"},

    {id: 7, message: [
			{text: "https://media.giphy.com/media/Oe1ihPAdxHleCm4fAp/source.gif", next_id: 9, type: "gif"},
			], source: "ceres"},

    {id: 8, message: [
			{text: "https://media.giphy.com/media/kEdBEtNgSD36ufdgJr/giphy.gif", next_id: 9, type: "gif"},
			], source: "ceres"},

		{id: 9, message: [
			{text: "Let's find out more about what you can do to help!", next_id: 10, type: "text"},
			], source: "ceres"},

		{id: 10, message: [
			{text: "First we need to ask a few questions about you 🤓", next_id: 11, type: "text"},
			], source: "ceres"},
		
		{id: 11, message: [
			{text: "Cool", next_id: 12, type: "text"},
			], source: "user"},
		
		{id: 12, message: [
			{text: "What is your name?", next_id: 13, type: "text"},
			], source: "ceres"},

		{id: 13, message: [
			{next_id: 14, type: "question", var_type: "name"},
			], source: "user"},
		
		{id: 14, message: [
			{text: `Hi #{name}!`, next_id: 15, type: "text"},
			], source: "ceres"},

		{id: 15, message: [
			{text: `What gender do you identify as?`, next_id: 16, type: "text"},
			], source: "ceres"},
		
		{id: 16, message: [
			{text: `Male`, next_id: 17, type: "text", var_type: "gender"}, 
			{text: `Female`, next_id: 17, type: "text", var_type: "gender"}, 
			{text: `Non-binary`, next_id: 17, type: "text", var_type: "gender"},
			{text: `Other`, next_id: 17, type: "text", var_type: "gender"},
			], source: "user"},
		
		{id: 17, message: [
			{text: `What is your age?`, next_id: 18, type: "text"},
			], source: "ceres"},
		
		{id: 18, message: [
			{text: `0-17`, next_id: 19, type: "text", var_type: "age"}, 
			{text: `18-25`, next_id: 19, type: "text", var_type: "age"}, 
			{text: `26-35`, next_id: 19, type: "text", var_type: "age"},
			{text: `36-45`, next_id: 19, type: "text", var_type: "age"},
			], source: "user"},

		{id: 19, message: [
			{text: `https://media.giphy.com/media/3o7abKhOpu0NwenH3O/source.gif`, next_id: 20, type: "gif"},
			], source: "ceres"},

		{id: 20, message: [
			{text: `What is your diet like?`, next_id: 21, type: "text"},
			], source: "ceres"},
		
		{id: 21, message: [
			{text: `No diet specification`, next_id: 22, type: "text", var_type: "diet"}, 
			{text: `Vegetarian`, next_id: 23, type: "text", var_type: "diet"}, 
			{text: `Vegan`, next_id: 24, type: "text", var_type: "diet"},
			{text: `Pescatarian`, next_id: 23, type: "text", var_type: "diet"},
			{text: `White meat`, next_id: 23, type: "text", var_type: "diet"},
			{text: `Other`, next_id: 23, type: "text", var_type: "diet"},
			], source: "user"},
		
		{id: 22, message: [
			{text: `Nice. Sounds delicious`, next_id: 25, type: "text"}, 
			], source: "ceres"},
		
		{id: 23, message: [
			{text: `Nice choice for the environment!`, next_id: 25, type: "text"}, 
			], source: "ceres"},
		
		{id: 24, message: [
			{text: `Great choice for the environment!`, next_id: 25, type: "text"},
			], source: "ceres"},

		{id: 25, message: [
			{text: `Where do you live?`, next_id: 26, type: "text"},
		], source: "ceres"},

		{id: 26, message: [
			{ next_id: 27, type: "question", var_type: "location"},
		], source: "user"},

		{id: 27, message: [
			{text: `Do you live in an apartment or house?`, next_id: 28, type: "text"},
		], source: "ceres"},

		{id: 28, message: [
			{text: `House`, next_id: 29, type: "text", var_type: "house_type"}, 
			{text: `Apartment`, next_id: 29, type: "text", var_type: "house_type"}, 
			{text: `Other`, next_id: 29, type: "text", var_type: "house_type"},
		], source: "user"},

		{id: 29, message: [
			{text: `https://media.giphy.com/media/f6PvtI3nkIQrTTzbSd/source.gif`, next_id: 30, type: "gif"},
		], source: "ceres"},

		{id: 30, message: [
			{text: `That's interesting. Here are some related questions.`, next_id: 31, type: "text"},
		], source: "ceres"},

		{id: 31, message: [
			{text: `How many people do you live with?`, next_id: 32, type: "text"},
		], source: "ceres"},

		{id: 32, message: [
			{text: `Just myself`, next_id: 33, type: "text", var_type: "num_of_people"},
			{text: `1 `, next_id: 33, type: "text", var_type: "num_of_people"},
			{text: `2-3`, next_id: 33, type: "text", var_type: "num_of_people"},
			{text: `3+`, next_id: 33, type: "text", var_type: "num_of_people"},
		], source: "user"},

		{id: 33, message: [
			{text: `https://media.giphy.com/media/xT9IgsAZTS0OKXWIQo/giphy.gif`, next_id: 34, type: "gif"},
		], source: "ceres"},

		{id: 34, message: [
			{text: `Does your home have a garden or balcony or rooftop?`, next_id: 35, type: "text"},
		], source: "ceres"},
	
		{id: 35, message: [
			{text: `Yes`, next_id: 36, type: "text", var_type: "has_outdoor_area"},
			{text: `No`, next_id: 36, type: "text", var_type: "has_outdoor_area"},
		], source: "user"},
	
		{id: 36, message: [
			{text: `https://media.giphy.com/media/a0KBCGQDHKidO/source.gif`, next_id: 37, type: "gif"},
		], source: "ceres"},
	
		{id: 37, message: [
			{text: `Do you rent or own the property?`, next_id: 38, type: "text"},
		], source: "ceres"},

		{id: 38, message: [
			{text: `Rent`, next_id: 39, type: "text", var_type: "rent_or_own"},
			{text: `Own`, next_id: 39, type: "text", var_type: "rent_or_own"},
			{text: `Other`, next_id: 39, type: "text", var_type: "rent_or_own"},
		], source: "user"},

		{id: 39, message: [
			{text: `What is your profession`, next_id: 40, type: "text"},
		], source: "ceres"},

		{id: 40, message: [
			{text: `Professional`, next_id: 41, type: "text", var_type: "profession"},
			{text: `Self-employed`, next_id: 42, type: "text", var_type: "profession"},
			{text: `Retired`, next_id: 43, type: "text", var_type: "profession"},
			{text: `Student`, next_id: 44, type: "text", var_type: "profession"},
			{text: `Unemployed`, next_id: 45, type: "text", var_type: "profession"},
			{text: `Other`, next_id: 45, type: "text", var_type: "profession"},
		], source: "user"},

		{id: 41, message: [
			{text: `https://media.giphy.com/media/W6ijtBmn4RImWFmfM1/giphy.gif`, next_id: 45, type: "gif"},
		], source: "ceres"},

		{id: 42, message: [
			{text: `https://media.giphy.com/media/ukQrIwbpqxykODGDTa/source.gif`, next_id: 45, type: "gif"},
		], source: "ceres"},

		{id: 43, message: [
			{text: `https://media.giphy.com/media/4YWtPeEME4Lz2feppl/source.gif`, next_id: 45, type: "gif"},
		], source: "ceres"},

		{id: 44, message: [
			{text: `https://media.giphy.com/media/l2Je66zG6mAAZxgqI/source.gif`, next_id: 45, type: "gif"},
		], source: "ceres"},

		{id: 45, message: [
			{text: `Where do you work?`, next_id: 46, type: "text"},
		], source: "ceres"},

		{id: 46, message: [
			{next_id: 47, type: "question", var_type: "work_location"},
		], source: "user"},

		{id: 47, message: [
			{text: `Do you have children?`, next_id: 48, type: "text"},
		], source: "ceres"},

		{id: 48, message: [
			{text: `Yes`, next_id: 49, type: "text", var_type: "has_children"},
			{text: `No`, next_id: 49, type: "text", var_type: "has_children"},
		], source: "user"},

		{id: 49, message: [
			{text: `Do you have pets?`, next_id: 50, type: "text"},
		], source: "ceres"},

		{id: 50, message: [
			{text: `Yes`, next_id: 51, type: "text", var_type: "has_pets"},
			{text: `No`, next_id: 53, type: "text", var_type: "has_pets"},
		], source: "user"},

		{id: 51, message: [
			{text: `Awwww cute! I love animals :D`, next_id: 52, type: "text"},
		], source: "ceres"},

		{id: 52, message: [
			{text: `https://media.giphy.com/media/YTvUf0ih3dl28/source.gif`, next_id: 54, type: "gif"},
		], source: "ceres"},

		{id: 53, message: [
			{text: `https://media.giphy.com/media/xT1XGGfuIQuKyHzibS/source.gif`, next_id: 54, type: "gif"},
		], source: "ceres"},

		{id: 54, message: [
			{text: `How active are you?`, next_id: 55, type: "text"},
		], source: "ceres"},

		{id: 55, message: [
			{text: `3+ times a week`, next_id: 56, type: "text", var_type: "exercise_amount"},
			{text: `1-2 times a week`, next_id: 57, type: "text", var_type: "exercise_amount"},
			{text: `fortnight`, next_id: 58, type: "text", var_type: "exercise_amount"},
			{text: `What is exercise.....`, next_id: 59, type: "text", var_type: "exercise_amount"},
		], source: "user"},

		{id: 56, message: [
			{text: `https://media.giphy.com/media/9GimADqtnpAPe/source.gif`, next_id: 60, type: "gif"},
		], source: "ceres"},

		{id: 57, message: [
			{text: `https://media.giphy.com/media/1oImYxg0TMmKwQW12N/giphy.gif`, next_id: 60, type: "gif"},
		], source: "ceres"},

		{id: 58, message: [
			{text: `https://media.giphy.com/media/oShObTfbg3S5G/source.gif`, next_id: 60, type: "gif"},
		], source: "ceres"},

		{id: 59, message: [
			{text: `https://media.giphy.com/media/rInIhIS9AYCrojSh3v/source.gif`, next_id: 60, type: "gif"},
		], source: "ceres"},

		{id: 60, message: [
			{text: `Do you prefer going out or staying in more on your time off?`, next_id: 61, type: "text"},
		], source: "ceres"},

		{id: 61, message: [
			{text: `Going out`, next_id: 62, type: "text", var_type: "going_out"},
			{text: `Staying in`, next_id: 62, type: "text", var_type: "going_out"},
			{text: `A bit of both`, next_id: 62, type: "text", var_type: "going_out"},
		], source: "user"},

		{id: 62, message: [
			{text: `Thanks so much for completing the questionaire!`, next_id: 63, type: "text"},
		], source: "ceres"},

		{id: 63, message: [
			{text: `We can't wait to show you how you have a more sustainable life style.`, next_id: 64, type: "text"},
		], source: "ceres"},

		{id: 64, message: [
			{text: `What area would you like to learn about to become more sustainable?`, next_id: 65, type: "text"},
		], source: "ceres"},
		
		{id: 65, message: [
			{text: `Clothing`, next_id: 101, type: "text"},
			{text: `Hygiene`, next_id: 124, type: "text"},
			{text: `Travel`, next_id: 131, type: "text"},
			{text: `Tech`, next_id: 147, type: "text"},
			{text: `Diet`, next_id: 158, type: "text"},
		], source: "user"},

		{id: 66, message: [
			{text: `It was great chatting and we are sad to see you go!`, next_id: 67, type: "text"},
		], source: "ceres"},

		{id: 67, message: [
			{text: `We hope you start implementing some of these ideas to become more sustainable`, next_id: 1, type: "text"},
		], source: "ceres"},

		{id: 101, message: [
			{text: "https://media.giphy.com/media/MEgGD8bV72hfq/giphy.gif", next_id: 102, type: "gif"},
			], source: "ceres"},

      {id: 102, message: [
			{text: "My favourite", next_id: 103 ,type: "text"},
			], source: "ceres"},

      {id: 103, message: [
			{text: "One of the best ways to be more sustainable with clothing is getting outfits second hand", next_id: 104, type: "text"},
			], source: "ceres"},	

      {id: 104, message: [
			{text: "There are so many second hand stores and charity shops in your area or you can even buy upcycled clothes", next_id: 105 ,type: "text"},
      ], source: "ceres"},	

      {id: 105, message: [
			{text: "Show me 2nd hand stores near me", next_id: 106, type: "text"},{text: "What are some of my local merchents.", next_id: 106, type: "text"}, {text: "Give me another tip", next_id: 106, type: "text"}, {text: "Show different areas to improve my sustainability", next_id: 65, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 106, message: [
			{text: "Did you know you can even buy recycled clothes, which were completely different things before?", next_id: 107 ,type: "text"},
			], source: "ceres"},

      {id: 107, message: [
			{text: "You could even wear jeans out of plastic bags!", next_id: 108 ,type: "text"}, 
			], source: "ceres"},
    	
			{id: 108, message: [
			{text: "Show me some brand that makes recycled clothing", next_id: 109, type: "text"},{text: "Let me hear some more tips", next_id: 109 ,type: "text"},{text: "Give me another tip", next_id: 106, type: "text"}, {text: "Show different areas to improve my sustainability", next_id: 65, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},
			
      {id: 109, message: [
			{text: "Donating your old clothes is a great way to help charities and stop your clothes from going in the bin", next_id: 110 ,type: "text"},
			], source: "ceres"},
			
			{id: 110, message: [
			{text: "Grab a glass of your favourite drink and spend an afternoon decluttering your closet", next_id: 111, type: "text"},
			], source: "ceres"},

      {id: 111, message: [
			{text: "https://media.giphy.com/media/10pVtJi0VzADHa/giphy.gif", next_id: 112 ,type: "gif"},
			], source: "ceres"},

      {id: 112, message: [
			{text: "Plus it also clears up your closet for more clothes", next_id: 113 ,type: "text"},
			], source: "ceres"},

      {id: 113, message: [
			{text: "Show me some clothing drop offs", next_id: 114 ,type: "text"},{text: "Some more tips please", next_id: 114 ,type: "text"},{text: "Show different areas to improve my sustainability", next_id: 65, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 114, message: [
			{text: "Swap out your fast fashion closet for long lasting high quality things", next_id: 115 ,type: "text"},
			], source: "ceres"},

      {id: 115, message: [
			{text: "It may be more expensive but you will be having some key pieces and saving more in the long run", next_id: 116 , type: "text"},
			], source: "ceres"},

      {id: 116, message: [
			{text: "Teach me more about fashion", next_id: 117 ,type: "text"}, {text: "What are some tips about finding the right clothes?", next_id: 117, type: "text"},{text:"Lets move on to the next tip", next_id: 117, type: "text"},{text: "Show different areas to improve my sustainability", next_id: 65, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 117, message: [
			{text: "It is simple as don't buy as often", next_id: 118 ,type: "text"},
			], source: "ceres"},

      {id: 118, message: [
			{text: "Do you really need that second pair of black jeans?", next_id: 119 ,type: "text"},
			], source: "ceres"},

			{id: 119, message: [
			{text: "Take some time to think about what you need to get before buying it", next_id: 120 ,type: "text"},
			], source: "ceres"},

      {id: 120, message: [
			{text: "Swap clothes you don't like for clothes you do or...", next_id: 121 ,type: "text"},
			], source: "ceres"},

      {id: 121, message: [
			{text: "sell you old clothes. You can do this on apps like Vinted", next_id: 113 ,type: "text"},
			], source: "ceres"},

      {id: 121, message: [
			{text: "https://media.giphy.com/media/LOtRAcvd81lM8gcxRn/giphy.gif", next_id: 122, type: "gif"},
			], source: "ceres"},

      {id: 122, message: [
			{text: "Show me some apps", next_id: 123 ,type: "text"},{text:"lets move on to the next tip", next_id: 123 ,type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 123, message: [
			{text: "Lastly make sure that you know the brands that you buy from, how the clothes are made and that it is fair and sustainable. Remember local is better", next_id: 64, type: "text"},
			], source: "ceres"},

      //start of hygiene
      {id: 124, message: [
			{text: "Buy sustainable things such as toothbrush and face cloths", next_id: 125 ,type: "text"},
			], source: "ceres"},
			
      {id: 125, message: [
			{text: "Try taking short showers to save some water or you could try taking cold showers", next_id: 126 ,type: "text"},
			], source: "ceres"},

      {id: 126, message: [
			{text: "Don't leave the water running when you brush your teeth", next_id: 127 ,type: "text"},
			], source: "ceres"},

      {id: 127, message: [
			{text: "You could wash your clothes less often so that you do a bulk wash", next_id: 128 ,type: "text"},
			], source: "ceres"},

      {id: 128, message: [
			{text: "You could stop using dangerous products that harm the environment or animals", next_id: 129, type: "text"},
			], source: "ceres"},

      {id: 129, message: [
			{text: "You could use reusable bottles for makeup or even perfume!", next_id: 130 ,type: "text"},
			], source: "ceres"},

    	{id: 130, message: [
			{text: "https://media.giphy.com/media/OYCKVR1SmdyHOLWTJL/giphy-downsized.gif", next_id: 64 ,type: "gif"},
			], source: "ceres"},

      {id: 131, message: [
			{text: "Why not walk to your work? 6000 steps is the recommended daily!", next_id: 132, type: "text"},
			], source: "ceres"},

      // two options below
      {id: 132, message: [
			{text: "Show me how long it takes to get to work if I walk", next_id: 134 ,type: "text"},{text:"lets move on to the next tip", next_id: 134, type: "text"}, {text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 133, message: [
			{text: "I am not a fan of this idea", next_id: 134, type: "gif"},
			], source: "ceres"},
			
      {id: 134, message: [
			{text: "Cycling to work is a fun alternative especially if you are looking your boost your fitness level", next_id: 135, type: "text"},
			], source: "ceres"},

// two options below
      {id: 135, message: [
				{text: "How many minutes would it take?", next_id: 137, type: "text"}, {text:"let's move on to the next tip", next_id: 137, type:"text"}, {text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 136, message: [
			{text: "I don't want to cycle", next_id: 137, type: "gif"},
			], source: "user"},

      {id: 137, message: [
			{text: "Try taking the public transport to work", next_id: 138 ,type: "text"},
			], source: "ceres"},

      {id: 138, message: [
			{text: "How long would it take me on a good day?", next_id: 139 ,type: "text"},{text:"lets move on to the next tip", next_id: 139 ,type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 139, message: [
			{text: "Electric cars are up and coming. Why not join the trend early?", next_id: 140, type: "text"},
			], source: "ceres"},

      {id: 140, message: [
			{text: "What are the most popular electric cars", next_id: 141, type: "text"},{text:"lets move on to the next tip", next_id: 141 ,type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 141, message: [
			{text: "Carpooling is a great way to cut carbon and help your community", next_id: 142, type: "text"},
			], source: "ceres"},

      {id: 142, message: [
			{text: "Reduce your airmiles. Travelling is fun but have you rediscovered nearby cities", next_id: 143 ,type: "text"},
			], source: "ceres"},

      {id: 143, message: [
			{text: "What are the best things in my city to see?", next_id: 144 ,type: "text"},{text:"lets move on to the next tip", next_id: 144, type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 144, message: [
			{text: "What are the best things in my neighourbouring cities?", next_id: 145, type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 145, message: [
			{text: "Stairs are better than elevators. Every step counts!", next_id: 146, type: "text"},
			], source: "ceres"},

      {id: 146, message: [
			{text: "https://media.giphy.com/media/VLNpDSXesv9NS/giphy.gif", next_id: 64 ,type: "gif"},
			], source: "ceres"},

      {id: 147, message: [
			{text: "Going for the latest phone  every year might be quite expensive. Have you thought about keeping it for longer", next_id: 148 ,type: "text"},
			], source: "ceres"},

      {id: 148, message: [
			{text: "You can also get phones from trade shops which tend to be cheaper", next_id: 149 ,type: "text"},
			], source: "ceres"},

      {id: 149, message: [
			{text: "Show trade shop near me please", next_id: 150 ,type: "text"},{text:"lets move on to the next tip", next_id: 150, type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 150, message: [
			{text: "Some phones are built to last. Others are not. Have you check if your phone is", next_id: 151 ,type: "text"},
			], source: "ceres"},

      {id: 151, message: [
			{text: "Show me a site that will tell me this", next_id: 152,  type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 152, message: [
			{text: "Try repairing your phone instead of buying a new one" , next_id: 153 ,type: "text"},
			], source: "ceres"},

      {id: 153, message: [
			{text: "https://media.giphy.com/media/xT0BKpkZFc8A1YFO3C/giphy.gif", next_id: 154 ,type: "gif"},
			], source: "ceres"},

      {id: 154, message: [
			{text: "Show me some repair shops", next_id: 155 ,type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 155, message: [
			{text: "Invest in good emerging techonolgy", next_id: 156 ,type: "text"},
			], source: "ceres"},

      {id: 156, message: [
			{text: "Can you show me some companies please?", next_id: 157, type: "text"},{text: "Next tip please", next_id: 157 ,type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 157, message: [
			{text: "Return phone to a manufacturer or  sell it in a trade shop", next_id: 64 ,type: "text"},
			], source: "ceres"},
      
			//diet
      {id: 158, message: [
			{text: "Have you tried going vegan", next_id: 159 ,type: "text"},
			], source: "ceres"},

      {id: 159, message: [
			{text: "Show me some vegan shops to help me on my journey", next_id: 160 ,type: "text"}, {text: "Can I have some more tips please", next_id: 160, type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 160, message: [
			{text: "If that is too hard then you could always try going vegan for one day a week", next_id: 161 ,type: "text"},
			], source: "ceres"},

      {id: 161, message: [
			{text: "That sounds easier. Can you show me some recipes?", next_id: 162, type: "text"},{text: "I would also love some more tips", next_id: 162 ,type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 162, message: [
			{text: "You could also grow your own herbs , fruits or veg indoors", next_id: 163 ,type: "text"},
			], source: "ceres"},

      {id: 163, message: [
			{text: "What are the nearby shops where I can get the seeds?", next_id: 164, type: "text"},{text: "Next tip please", next_id: 164 ,type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 164, message: [
			{text: "How do I grow them?", next_id: 165, type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Next tip please", next_id: 165, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 165, message: [
			{text: "Shop at your farmer's market to support local business", next_id: 166, type: "text"},
			], source: "ceres"},

      {id: 166, message: [
			{text: "Where is my nearest farmer's market?", next_id: 167, type: "text"},{text: "Next tip please", next_id: 167, type: "text"}, {text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 167, message: [
			{text: "Happy shopping!. Another tip is to buy the exact amount of food.", next_id: 168, type: "text"},
			], source: "ceres"},

      {id: 168, message: [
			{text: "I am not good at guessing the amount. Are there other ways to reduce the amount of waste?", next_id: 169 ,type: "text"},{text: "Next tip please", next_id: 169, type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 169, message: [
			{text: "You have probably heard of zero waste. If not we have a link to the guide.", next_id: 170, type: "text"},
			], source: "ceres"},

      {id: 170, message: [
			{text: "The easiest guide to zero waste", next_id: 171 ,type: "text"}, {text: "More tips please", next_id: 171 ,type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},

      {id: 171, message: [
			{text: "Eat seasonal food", next_id: 172 ,type: "text"},
			], source: "ceres"},

      {id: 172, message: [
			{text: "What are seasonal food right now?", next_id: 64, type: "text"},{text: "Any more  tip?", next_id: 64 ,type: "text"},{text: "Show different areas to improve my sustainability", next_id: 64, type: "text"}, {text: "Bye for now!", next_id: 66, type: "text"},
			], source: "user"},
      // { id: 173, message: [
      //   {text: "Ford",next_id:141, link:"https://www.ford.co.uk/shop/research/hybrid-electric/all-electric", img:"https://tse4.mm.bing.net/th?id=OIP.YfgHECMuR211iSPSktER6gHaEK&pid=Api" ,type:"link"}, ],
      //   source: "ceres"
      // },
]

export default Chat;