### ejs is used instead of react.js for templating. 
### in the backend, devloper can pass data to frontend via ejs varialble and render them.

### Ex:
<p>
<u>Back end</u> <br>
<br>
app.get('/', async(req, res) => { <br>
    const DBdata = await Recipe.find({}); <br>
    res.render('home', {DBdata}); <br>
});


<u>HTML snippet</u>
<br>
<div>
<% for(let data of DBdata) { %>
        <div class="card" style="width: 18rem;">
             class="card-img-top" alt="food defaults image">
            <div class="card-body">
            <h5 class="card-title"> <%= data.title %> </h5>
            <p class="card-text"> <%= data.description %> </p>
            <a href="/<%= data._id%>" class="btn btn-primary">Read more</a>
            </div>
        </div>
    <% } %>
</div>

EJS Documentation: https://ejs.co/
</p>

### npm i ejs
### npm i ejs-mate

### to run the application: nodemon app.js