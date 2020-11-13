import os
from flask import Flask, jsonify
import pymysql
import json
from contextlib import contextmanager

#=======================conexão mysql=========================#

#cursor = db.cursor()
#cursor.execute("SELECT VERSION()")
#data = cursor.fetchone()

@contextmanager
def servidor():
    try:
        db = pymysql.connect("localhost", "root", "", "servidor")
        cursor = db.cursor()
        yield cursor

    except Exception as e: 
        print(e)
    finally:
        cursor.close()
        db.close()
        
#========================Fim da conexão=======================#

app = Flask(__name__)


@app.route('/')
def hello_world():
    with servidor() as s:
        s.execute("SELECT * FROM PESSOA")
        resultado = s.fetchall()
        return jsonify(resultado)

@app.route('/arley')
def teste():
    return 'teste'


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8000)))
