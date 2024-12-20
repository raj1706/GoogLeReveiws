from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/reviews', methods=['GET'])
def get_reviews():
    reviews = [
        {"author_name": "John Doe", "text": "Great service!", "rating": 5},
        {"author_name": "Jane Smith", "text": "Average experience.", "rating": 3},
    ]
    return jsonify({"reviews": reviews})

if __name__ == "__main__":
    app.run(port=5000)
