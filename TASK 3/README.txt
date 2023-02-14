In order to successfuly load my website you'll need to follow the following steps:

1. Copy the URL when inside the 'TASK 3' folder in git hub ("https://github.com/shaptal/Tal_Shapira/tree/main/TASK%203")

2. Paste the URL in the following website in order to download the entire folder: https://download-directory.github.io/

3. Unzip the folder

4. Open 'index/index.js' in VS code

5. Open the Terminal and change directory to the unzipped folder (if not working try changing path name to one without numbers or spaces)

6. When inside the folders directory type "npm i" and press enter

7. After installation if finnished type "node index/index.js" and press enter

8. By this point you should get the following message (in the terminal): "Server is running on port: 3000"

9. In your web browser search for the following URL: "localhost:3000/homePage"

Site info:

The site is about getting live Weather data from any specified city in the world. The data includes weather flight warnings according to the weather conditions.

My project does not include an SQL DB. All the data is taken from an external API by OpenWeather.com (confirmed by naama).

In order to search for the data you'll need to navigate to the "Live Weather" tab in the nav bar or press the "Live Weather" button in the homepage.

then, type any city name in the search box tnd hit enter to show the search results. the data and warnings will be displayed in the same screed for easy use and in order to give optimal UX (another data page was considered and was found unnecessary after talking to Naama).

There are 3 pages to the website:

Homepage: display's the company's vision and a button that takes the user to the search tab.

Live Weather: Displays the search box as well as the weather data and warnings (after the search).

Error page: When typing any URL that is a part of the localhost:3000 but is not one of last 2 mentioned pages there will be an Error page displaying THE error. try typing "localhost:3000/something".

All pages include responsive web design and an active nav bar (company logo leads to the homepage as well).


Website's functionalities:

- responsive web design in all pages.
- active nav bar in all pages (including inactive).
- animation in the Error page.
- automatic re-direction to the error page when in an un-extisting page in the website.
- search input required in order to search.
- if the input is not found there will be an alternative text
- "loading..." will be shown while data is loaded.
- search time and date will be displayed under the searchbox at all time.
- beteeen 18:00 and 06:00 localtime the background image will change to a more evening appropriate image. 
- weather warnings:
    1. will be displayed under several weather conditions.
    2. its possible to have multiple warnings at the same time.
    3. if there is a warning the text color will change.
    4. new search will automaticly clear the previous warnings.

