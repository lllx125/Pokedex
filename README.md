# Welcome to Lixing's Pokedex

If you don't want to download, check out:
Video demonstrating all the details of this app: https://youtu.be/PztWWJH8pS4
Video explaining all the codes: https://youtu.be/6Na3JBsylmk

# How to Run

1. Download or clone the entire file
2. Open terminal, cd to the file pokedex, and run the code **'npm run dev'**.
3. There will be a link on the terminal that looks like "http://localhost:xxxx/", copy that link to your browser
4. Open a new terminal, cd to the file pokedex, and run the code **'npx json-server --watch src/database/account.json'**. That sets up the database
5. Since it is slow to download data from API, the pokedex only loads 50 pokemons by default. If you want to load more, open 'App.tsx' and change 'total' on line 26 to the number of pokemons you want (max 1306).

# Account

1. Click 'sign in' on the upper left
2. Click 'sign up'
3. Enter your user name and password
4. Click create account,
5. Once it saids 'You have successfully created an account', you may go back to sign in page and log in with your username and password
6. Once your are logged in, click log out in home page to log out.

# Pokedex

1. Click on pokemon images to see their detail information
2. type their name or part of their name in the search bar on the upper right to filter pokemons
