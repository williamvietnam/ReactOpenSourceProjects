### Source code
###### HTML
````
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
        crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div>
        <!-- Tab items -->
        <div class="tabs">
            <div class="tab-item active">
                <i class="tab-icon fas fa-code"></i>
                React
            </div>
            <div class="tab-item">
                <i class="tab-icon fas fa-cog"></i>
                Angular
            </div>
            <div class="tab-item">
                <i class="tab-icon fas fa-plus-circle"></i>
                Ember
            </div>
            <div class="tab-item">
                <i class="tab-icon fas fa-pen-nib"></i>
                Vue.JS
            </div>
            <div class="line"></div>
        </div>

        <!-- Tab content -->
        <div class="tab-content">
            <div class="tab-pane active">
                <h2>React</h2>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your
                    application, and React will efficiently update and render just the right components when your data
                    changes.</p>
            </div>
            <div class="tab-pane">
                <h2>Angular</h2>
                <p>Angular is an application design framework and development platform for creating efficient and
                    sophisticated single-page apps.</p>
            </div>
            <div class="tab-pane">
                <h2>Ember</h2>
                <p>Ember.js is a productive, battle-tested JavaScript framework for building modern web applications. It
                    includes everything you need to build rich UIs that work on any device.</p>
            </div>
            <div class="tab-pane">
                <h2>Vue.js</h2>
                <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike
                    other
                    monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. </p>
            </div>
        </div>
    </div>
    <script src="./app.js"></script>
</body>

</html>
````
<br></br>__________________________________________________________________________________________________<br></br>
###### CSS
````
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    font-family: "Poppins", sans-serif;
  }
  body > div {
    margin: 5% auto 0;
    max-width: 720px;
  }
  .tabs {
    display: flex;
    position: relative;
  }
  .tabs .line {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 6px;
    border-radius: 15px;
    background-color: #c23564;
    transition: all 0.2s ease;
  }
  .tab-item {
    min-width: 80px;
    padding: 16px 20px 11px 20px;
    font-size: 20px;
    text-align: center;
    color: #c23564;
    background-color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 5px solid transparent;
    opacity: 0.6;
    cursor: pointer;
    transition: all 0.5s ease;
  }
  .tab-icon {
    font-size: 24px;
    width: 32px;
    position: relative;
    top: 2px;
  }
  .tab-item:hover {
    opacity: 1;
    background-color: rgba(194, 53, 100, 0.05);
    border-color: rgba(194, 53, 100, 0.1);
  }
  .tab-item.active {
    opacity: 1;
  }
  .tab-content {
    padding: 28px 0;
  }
  .tab-pane {
    color: #333;
    display: none;
  }
  .tab-pane.active {
    display: block;
  }
  .tab-pane h2 {
    font-size: 24px;
    margin-bottom: 8px;
  }
  
````
<br></br>__________________________________________________________________________________________________<br></br>
###### JAVASCRIPT
````
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
````