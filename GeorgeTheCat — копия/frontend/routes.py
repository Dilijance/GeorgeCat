from frontend import app
from flask import render_template, request, jsonify, session, redirect, url_for
from frontend.llama import final_result


@app.route('/')
def home():
    return render_template("home.html")

@app.route('/chat', methods=['GET','POST'])
def chat_page():
    if request.method == 'POST':
        data = request.get_json()
        data = final_result(data['sentence'])
        print(data['result'])
        return jsonify({"message": data['result'] })
    else:  
        return render_template('chat.html')