After exporting SVG, open in a text editor and, right after the viewBox, add:
```
preserveAspectRatio="xMidYMin slice"
```

For example: 
```
<svg id="All" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5418 2671" preserveAspectRatio="xMidYMin slice">
```

This styles the SVG to ensure that it is centered and top-aligned in the site banner. This is required since the "object-fit" and "object-position" CSS styles won't apply to an SVG object.
