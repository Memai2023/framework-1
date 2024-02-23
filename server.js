const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const queryData = parsedUrl.query;
    console.dir(queryData);
    console.dir(parsedUrl);
    const color = queryData.color || "none"; //none för att det inte ska bli undefined
    const hobbies = queryData.hobbies || "none";
    console.log(color);

    if (parsedUrl.pathname === "/" || parsedUrl.pathname === "/index.html") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                res.writeHead(404, {"Content-type":"text/html"});
                res.end("404 page is not found");
            } else {

                if (color === "yellow") {
                    svgImage = `<?xml version="1.0" encoding="utf-8"?>
                    <!-- Generator: Adobe Illustrator 28.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve">
                    <style type="text/css">
                        .st0{fill:#FFF200;stroke:#000000;stroke-miterlimit:10;}
                    </style>
                    <polygon class="st0" points="276.52,246.5 176.99,224.16 102.16,293.49 92.65,191.93 3.58,142.19 97.24,101.75 117.02,1.68 
                        184.42,78.25 285.71,66.14 233.71,153.91 "/>
                    </svg>`;
                } else if (color === "red") {
                    svgImage = `<?xml version="1.0" encoding="utf-8"?>
                    <!-- Generator: Adobe Illustrator 28.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve">
                    <style type="text/css">
                        .st0{fill:#E52325;stroke:#000000;stroke-miterlimit:10;}
                    </style>
                    <path class="st0" d="M149.49,272.59L43.24,158.56C-19.99,90.03,93.48-14.66,156.71,53.86c74.57-69.48,180.82,44.55,106.25,114.03
                        L149.49,272.59z"/>
                    </svg>`;
                } else if (color === "green") {
                    svgImage = `<?xml version="1.0" encoding="utf-8"?>
                    <!-- Generator: Adobe Illustrator 28.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve">
                    <style type="text/css">
                        .st0{fill:#ADD580;stroke:#000000;stroke-miterlimit:10;}
                        .st1{stroke:#000000;stroke-miterlimit:10;}
                        .st2{fill:none;stroke:#000000;stroke-miterlimit:10;}
                        .st3{fill:#FFF200;stroke:#000000;stroke-miterlimit:10;}
                        .st4{fill:#F9ED32;stroke:#000000;stroke-miterlimit:10;}
                    </style>
                    <path class="st0" d="M161,144l95.97-19.14c-8.3-51.5-48.95-89.36-95.97-89.36c-53.49,0-97.5,48.98-97.5,108.5
                        s44.01,108.5,97.5,108.5s97.5-48.98,97.5-108.5H161z"/>
                    <circle class="st1" cx="113" cy="100" r="1.5"/>
                    <circle class="st1" cx="175" cy="98" r="2.5"/>
                    <circle class="st1" cx="231.5" cy="93.5" r="2"/>
                    <line class="st2" x1="103.5" y1="54.5" x2="82.5" y2="39.5"/>
                    <line class="st2" x1="206.5" y1="46.5" x2="223.5" y2="28.5"/>
                    <line class="st2" x1="103.5" y1="54.5" x2="104.5" y2="55.5"/>
                    <line class="st2" x1="206.5" y1="46.5" x2="204.5" y2="46.5"/>
                    <circle class="st3" cx="77" cy="33" r="8.5"/>
                    <ellipse class="st4" cx="229.5" cy="25.5" rx="6" ry="7"/>
                    </svg>`;
                } else {
                    svgImage = `<?xml version="1.0" encoding="utf-8"?>
                    <!-- Generator: Adobe Illustrator 28.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 151.72 217.3" style="enable-background:new 0 0 151.72 217.3;" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M60.71,150.06c0.08-8.38,1.02-15.46,2.81-21.24c1.79-5.78,4.62-11.07,8.48-15.87c3.87-4.8,8.93-9.93,15.2-15.38
                                c2.93-2.52,5.72-4.98,8.36-7.39c2.64-2.4,5.02-4.9,7.14-7.51c2.12-2.6,3.78-5.49,5-8.67s1.83-6.75,1.83-10.74
                                c0-5.29-1.28-10.03-3.85-14.22c-2.56-4.19-6.29-7.53-11.17-10.01c-4.88-2.48-10.82-3.72-17.82-3.72c-8.63,0-15.85,1.73-21.67,5.19
                                c-5.82,3.46-10.21,8.18-13.18,14.16c-2.97,5.98-4.58,12.76-4.82,20.32H13.47c0.24-10.09,2.62-19.73,7.14-28.93
                                c4.52-9.2,11.39-16.7,20.63-22.52c9.24-5.82,21.06-8.73,35.46-8.73c11.88,0,22.1,2.12,30.64,6.35
                                c8.54,4.23,15.12,9.97,19.71,17.21c4.6,7.24,6.9,15.38,6.9,24.41c0,6.76-1.08,12.63-3.23,17.64c-2.16,5-5.01,9.48-8.54,13.43
                                c-3.54,3.95-7.43,7.67-11.66,11.17c-3.58,2.93-6.78,5.66-9.58,8.18c-2.81,2.52-5.23,4.84-7.26,6.96
                                c-2.04,2.12-3.71,4.03-5.01,5.74c-2.28,3.17-3.84,6.61-4.7,10.31c-0.85,3.7-1.36,8.32-1.53,13.86H60.71z M58.03,204.02v-27.47
                                h27.22v27.47H58.03z"/>
                        </g>
                    </g>
                    </svg>`;
                }
                const openTag =  `<div class="svg-container">`;
                const closeTag = `</div>`;
                const replaceString = openTag + svgImage + closeTag;
                let modifiedData = data.toString("utf-8");

                modifiedData = modifiedData.replace(new RegExp(openTag + "(.*?)" + closeTag, "s"), (match, content) => replaceString);

                res.writeHead(200, {"content-type":"text-html"});
                res.write(modifiedData);
                res.end();
            }
        });

    } else if (parsedUrl.pathname === "/about.html") {
        res.writeHead(200, {"Content-type":"text/html"});
        res.write(`<style>
        * {
            box-sizing: border-box;
        }
        html {
            height: 100vh;
        }
        body {
            background-color: #EEF0F2;
            display: flex;
            flex-direction: column;
            font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            height: 100%;
            margin: 0;
        }
        header {
            background-color: #534B52;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
            font-weight: bold;
        }
        ul {
            display: flex;
            justify-content: space-evenly;
            list-style-type: none;
        }
        li a {
            color: #EEF0F2;
            text-decoration: none;
        }
        li a:hover {
            color: #BD1E1E;
        }
        .main-content {
            align-items: center;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            margin: 58px 58px;
        }
        footer {
            background-color: #534B52;
            color: #EEF0F2;
            text-align: center;
        }
    </style>
        <header>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="hobbies.html">Hobbies</a></li>
                    <li><a href="notebook.html">Notebook</a></li>
                </ul>
            </nav>
        </header>
        <section class="main-content">
            <h1>About Marias first Node server!</h1>
            <p>This is a html made in res.write. Since I like it to look good, the css file is included in.</p>
        </section>
        <footer>
            <p>Node Server assignment by Maria Hendricks</p>
        </footer>`);
        res.end();
    
    } else if (parsedUrl.pathname === "/hobbies.html") {
        fs.readFile("hobbies.html", (err, data) => {
            if (err) {
                res.writeHead(404, {"Content-type":"text/html"});
                res.end("404 page is not found");
            } else {

                if (hobbies === "music") {
                    svgImage = `<?xml version="1.0" encoding="utf-8"?>
                    <!-- Generator: Adobe Illustrator 28.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 198 268" style="enable-background:new 0 0 198 268;" xml:space="preserve">
                    <style type="text/css">
                        .st0{fill:#1B1919;stroke:#000000;stroke-miterlimit:10;}
                        .st1{fill:#3D90A3;stroke:#000000;stroke-miterlimit:10;}
                    </style>
                    <ellipse transform="matrix(0.9307 -0.3659 0.3659 0.9307 -72.2592 49.7)" class="st0" cx="95" cy="215.5" rx="45.5" ry="23"/>
                    <path class="st1" d="M137.5,200.5l-82-168c5.17-4.98,13.13-4.73,20.28-4c10.23,1.05,20.64,1.68,30.73-0.27s19.96-6.73,26.29-14.84
                        c6.49,11.32,12.06,23.17,16.63,35.4c0.37,0.98,0.73,2.01,0.61,3.04c-0.1,0.8-0.48,1.53-0.86,2.24c-1.75,3.21-3.8,6.34-6.66,8.61
                        c-5.9,4.7-14.24,4.99-21.61,3.41c-7.37-1.59-14.31-4.8-21.67-6.44c-9.62-2.14-19.85-1.5-29.13,1.83"/>
                    </svg>`;
                } else if (hobbies === "painting") {
                    svgImage = `<?xml version="1.0" encoding="utf-8"?>
                    <!-- Generator: Adobe Illustrator 28.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 244 204" style="enable-background:new 0 0 244 204;" xml:space="preserve">
                    <style type="text/css">
                        .st0{fill:#FCB017;stroke:#000000;stroke-miterlimit:10;}
                        .st1{fill:#7C5661;stroke:#000000;stroke-miterlimit:10;}
                        .st2{fill:none;stroke:#000000;stroke-miterlimit:10;}
                        .st3{fill:#47A2DA;stroke:#000000;stroke-miterlimit:10;}
                        .st4{fill:#6BBD45;stroke:#000000;stroke-miterlimit:10;}
                        .st5{fill:#ED1E27;stroke:#000000;stroke-miterlimit:10;}
                    </style>
                    <rect x="63.91" y="77.2" transform="matrix(0.6788 -0.7344 0.7344 0.6788 -8.1814 144.6941)" class="st0" width="194.77" height="9"/>
                    <path class="st1" d="M91.57,150.11c-4.15-0.14-8.58,0.49-11.78,3.14c-1.88,1.56-3.18,3.69-4.39,5.81
                        c-3.38,5.95-6.27,12.18-8.64,18.59c11.93-1.07,23.35-7.03,31.06-16.19c0.69-0.82,1.36-1.69,1.63-2.72c0.27-1.03,0.03-2.27-0.84-2.89
                        "/>
                    <path class="st2" d="M178.93,54.87c-4.75-7.3-13.52-11.2-22.18-12.1c-8.66-0.9-17.37,0.8-25.9,2.54
                        c-17.48,3.58-35.01,7.42-51.59,14.01S46.95,75.4,35.2,88.83c-5.86,6.7-10.64,14.27-15.18,21.93c-5.35,9.02-10.45,18.33-13.26,28.44
                        c-2.81,10.11-3.18,21.19,0.81,30.89c5.21,12.67,17.34,21.56,30.4,25.71c13.06,4.15,27.06,4.13,40.74,3.21
                        c43.81-2.93,86.58-14.56,128.28-28.29c12.35-4.07,26.26-9.93,29.99-22.39c3.33-11.11-3.02-22.6-9.33-32.33
                        c-12.35-19.06-25.6-37.67-41.51-53.88"/>
                    <path class="st3" d="M74.13,109.56c3.59-0.77,7.51-1.5,10.78,0.18c3.12,1.6,4.86,5.1,5.45,8.56c0.52,3.07,0.29,6.27-0.68,9.23
                        c-1.46,4.48-4.52,8.29-8.01,11.46c-7.6,6.92-18.63,11.24-28.28,7.72c-3.14-1.15-5.95-3.05-8.48-5.24c-3.23-2.81-6.2-6.55-6.1-10.83
                        c0.2-8.48,4.87-12.37,12.02-14.97C58.4,112.93,66.29,111.24,74.13,109.56z"/>
                    <path class="st4" d="M128.79,73.58c1.8,0.07,3.65,0.22,5.26,1.01c3.14,1.54,4.73,5.66,3.44,8.92c-1.62,4.1-6.47,5.7-10.73,6.81
                        c-5.72,1.49-11.44,2.98-17.16,4.47c-2.61,0.68-5.23,1.36-7.91,1.66c-3.07,0.34-6.48,0.05-8.75-2.05c-2.5-2.32-2.85-6.32-1.57-9.47
                        C96.03,73.46,118.82,73.18,128.79,73.58z"/>
                    <path class="st5" d="M172.12,121.4c4.82-0.13,9.75,0.3,14.16,2.26s8.22,5.66,9.41,10.33c1.32,5.14-0.74,10.73-4.32,14.66
                        c-3.57,3.92-8.47,6.4-13.47,8.19c-11.3,4.05-23.45,5.01-35.45,5.28c-4.62,0.1-9.59,0.01-13.33-2.71c-1.93-1.4-3.37-3.41-4.22-5.64
                        c-4.14-10.86,5.59-16.87,13.21-21.7C148.32,125.59,160,121.73,172.12,121.4z"/>
                    </svg>`;
                } else {
                    svgImage = `<?xml version="1.0" encoding="utf-8"?>
                    <!-- Generator: Adobe Illustrator 28.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 151.72 217.3" style="enable-background:new 0 0 151.72 217.3;" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M60.71,150.06c0.08-8.38,1.02-15.46,2.81-21.24c1.79-5.78,4.62-11.07,8.48-15.87c3.87-4.8,8.93-9.93,15.2-15.38
                                c2.93-2.52,5.72-4.98,8.36-7.39c2.64-2.4,5.02-4.9,7.14-7.51c2.12-2.6,3.78-5.49,5-8.67s1.83-6.75,1.83-10.74
                                c0-5.29-1.28-10.03-3.85-14.22c-2.56-4.19-6.29-7.53-11.17-10.01c-4.88-2.48-10.82-3.72-17.82-3.72c-8.63,0-15.85,1.73-21.67,5.19
                                c-5.82,3.46-10.21,8.18-13.18,14.16c-2.97,5.98-4.58,12.76-4.82,20.32H13.47c0.24-10.09,2.62-19.73,7.14-28.93
                                c4.52-9.2,11.39-16.7,20.63-22.52c9.24-5.82,21.06-8.73,35.46-8.73c11.88,0,22.1,2.12,30.64,6.35
                                c8.54,4.23,15.12,9.97,19.71,17.21c4.6,7.24,6.9,15.38,6.9,24.41c0,6.76-1.08,12.63-3.23,17.64c-2.16,5-5.01,9.48-8.54,13.43
                                c-3.54,3.95-7.43,7.67-11.66,11.17c-3.58,2.93-6.78,5.66-9.58,8.18c-2.81,2.52-5.23,4.84-7.26,6.96
                                c-2.04,2.12-3.71,4.03-5.01,5.74c-2.28,3.17-3.84,6.61-4.7,10.31c-0.85,3.7-1.36,8.32-1.53,13.86H60.71z M58.03,204.02v-27.47
                                h27.22v27.47H58.03z"/>
                        </g>
                    </g>
                    </svg>`;
                }
                const openTag = `<div class="svg-container">`;
                const closeTag = `</div>`;
                const replaceString = openTag + svgImage + closeTag;
                let modifiedData = data.toString("utf-8");

                modifiedData = modifiedData.replace(new RegExp(openTag + "(.*?)" + closeTag, "s"), (match, content) => replaceString);

                res.writeHead(200, {"content-type":"text-html"});
                res.write(modifiedData);
                res.end();
            }
        });         
    } else if (parsedUrl.pathname === "/notebook.html") {
        res.writeHead(200, {"Content-type":"text/html"});
        res.write(`<style>
        * {
            box-sizing: border-box;
        }
        html {
            height: 100vh;
        }
        body {
            background-color: #EEF0F2;
            display: flex;
            flex-direction: column;
            font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            height: 100%;
            margin: 0;
        }
        header {
            background-color: #534B52;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
            font-weight: bold;
        }
        ul {
            display: flex;
            justify-content: space-evenly;
            list-style-type: none;
        }
        li a {
            color: #EEF0F2;
            text-decoration: none;
        }
        li a:hover {
            color: #BD1E1E;
        }
        .main-content {
            align-items: center;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            margin: 58px 58px;
        }
        footer {
            background-color: #534B52;
            color: #EEF0F2;
            text-align: center;
        }
    </style>
        <header>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="hobbies.html">Hobbies</a></li>
                    <li><a href="notebook.html">Notebook</a></li>
                </ul>
            </nav>
        </header>
        <section class="main-content">
            <h1>About Marias notebook!</h1>
            <p>This is a html made in res.write. Since I like it to look good, the css file is included in.</p>
            <br>
            <p>I've not yet learned how to render images or include external css file. By including the svg in the code, which also was made by me I could manage a quick fix solution to make my pages look a bit nicer. Even though the code it self looks a bit messy.</p>
        </section>
        <footer>
            <p>Node Server assignment by Maria Hendricks</p>
        </footer>`);
        res.end();
    } else {
        res.writeHead(404, {"Content-type":"text/html"});
        res.end("404 could not find the page");
    }
}).listen(3030, () => console.log("Server is listening to port 3030"));