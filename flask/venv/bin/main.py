from flask import Flask,request,render_template
import os
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/generate')
def generate():
    rawText=request.args.get("rawText")
    try:
        return {'summary': rawText}
    except Exception:
        return {'error':500}
