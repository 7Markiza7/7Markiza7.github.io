from flask import Flask, render_template, g
import sqlite3
import base

app = Flask(__name__)

# настройки приложения
app.config['DATABASE'] = "static/db/clothings.db"
app.secret_key = "asdf1234"

# подключение к бд
def connect_db():
    con = sqlite3.connect(app.config['DATABASE'])
    con.row_factory = sqlite3.Row
    return con
# проверка подключения
def get_connect():
    if not hasattr(g, 'link_db'):
        g.link_db = connect_db()
    return g.link_db

navMenu = [
    {"link":"/index", "name":"Главная"},
    {"link":"/clothes", "name":"Товары"},
    {"link":"/contacts", "name":"Контакты"}
]

@app.route("/index")
@app.route("/")
def index():
    return render_template("index.html", menu=navMenu)

@app.route("/clothes")
def clothes():
    con = get_connect()
    b = base.ProductDB(con)
    return render_template("clothes.html", menu=navMenu, cards=b.getAllProduct())
@app.route("/contacts")
def contacts():
    return render_template("contacts.html", menu=navMenu)

@app.route("/card/<int:value>")
def card(value):
    con = get_connect()
    b = base.ProductDB(con)
    card = b.getProduct(value)
    return render_template("card.html", name=card["name"], img=card["img"], short=card["short_descr"], full=card["full_descr"], menu=navMenu)

# разрыв подключения
@app.teardown_appcontext
def close_connect(error):
    if hasattr(g, 'link_db'):
        g.link_db.close()

if __name__ == "__main__":
    app.run()