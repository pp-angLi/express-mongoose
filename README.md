# express-mongoose
一次express+mongoose的小开发

记录:
1.首先是安装express的脚手架  npm install -g express-generator
# 


2.接着express -e (项目名), -e的意思是用.ejs模板(在e.js模板当中, ajax+jquery交互好像是进行不了的, 当初在这里花费了不少时间)
# 

3.然后下载mongodb, 这个网上好多教程就不用提醒自己了吧
然后在mongodb的根目录下(能看到bin文件夹的目录, 就叫做根目录吧), 创建一个新的文件夹(这个文件夹可是mongodb的地址)
# 

4.在express脚手架生成的项目中, 根目录下的app.js<br>
var index = require('./routes/index');<br>
var users = require('./routes/users');<br>
    .<br>
app.use('/', index);<br>
app.use('/users', users);<br> 

这四句,加上routes文件夹下的users.js index.js文件 
就可以通过localhost:3000/ 和 localhost:3000/users 访问得到,
而访问到的文件是routes下的index.js | users.js配置的.ejs模板即

(从 routes/index.js截取 一段代码)<br>
`router.get('/', function(req, res, next) {`<br>
  `res.render('index', { title: 'Express' });`<br>
`});`<br>
他的意思是访问接口'/' 的时候显示的是 views文件夹下的index.ejs模板, 并向该模板传递 title:'Express'这个数据 

(从views/index.ejs截取 一段代码)<br>
    `<h1><%= title %></h1> `<br>
    `<p>Welcome to <%= title %></p>`<br>
刚从routes/index.js传递过来的title可以这样引用

`<% code %>`用于执行其中javascript代码.<br>
`<%= code %>`会对code进行html转义. <br>
`<%- code %>`将不会进行转义这一行代码不会执行，像是被注释了一样，然后显示原来的html。也不会影响整个页面的执行<br>

`总的来说, 页面的显示是从app.js(例如访问的是localhost:3000/)开始的 --> routes/index.js --> views/index.ejs`
# 

5.然后安装各种模块, 首先要在项目根目录打开gitBash `npm install`<br>
接着`npm install mongoose`//安装mongoose模块
# 
6.在routes下的每个.js文件下都加入<br>
`var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/blog', {useMongoClient: true});

var userSchema = new mongoose.Schema({
    username: String,
    email: String
})

var model = mongoose.model('user', userSchema);`<br>
以上是导入mongoose的代码, connect('')下的27017是mongoose的默认端口号, /blog 则是一开始的我给数据库起的文件夹名字, <br>
mongoose.Schema按照我的理解就是创建一个表
# 
7.项目基本搭好了, 一些存入, 取出数据库的操作可以结合mongoose的官方文档和自己写的代码再慢慢回想,<br>
值得注意的是`npm start`之前, 要打开数据库`./mongod --dbpath ../blog/`
# 
8.总的来说, 只是给自己一个备忘录, 也希望能被刚好刷到这里的人提供一些小小的帮助,<br>
在开头说过, .ejs是无法使用ajax+jquery交互的, 但是可以将app.js文件下的14 15行<br>
`app.set('views', path.join(__dirname, 'views'));`<br>
`app.set('view engine', 'ejs');`<br>
改为<br>
`app.set('views', path.join(__dirname, 'views'));`<br>
`app.engine('html', ejs.__express);`<br>
`app.set('view engine', 'html');`<br>
(补:要在头顶引入var ejs = require('ejs');!!)<br>
就可以将views文件夹下的.ejs模板 改成用.html作为模板, 同时也可以用ajax+jquery交互了!
