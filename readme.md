
Add a way to show the scrollbar in the tab list:

1) Open the `/opt/vivaldi/resources/vivaldi/bundle.js` file
2) Find the following string:
```
flexDirection:t,width:a
```
3) Add 20000 or any other value:
```
flexDirection:t,width:a+20000
```
4) Import the `vivaldi_ui.css` file
5) Add the following string to `browser.html`:
```
<script src="vivaldi_ui.js"></script>
```
6) Copy the `vivaldi_ui.js` file to the `/opt/vivaldi/resources/vivaldi` folder.
7) Restart the browser to see the changes!




Tips for debugging Vivaldi:

Run Vivaldi with the debugging port:
```
vivaldi --remote-debugging-port=32167
```

Open `localhost:32167`, find the window and use the dev tools to hack Vivaldi!
