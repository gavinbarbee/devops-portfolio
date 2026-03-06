from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return """
    <h1>Hello from CI/CD Pipeline</h1>
    <p>This Python + Flask app was automatically built & deployed via GitHub Actions.</p>
    <p>Built by Gavin Barbee – March 2026</p>
    <p>Targeting junior DevOps / Cloud roles at Lockheed-level companies</p>
    <p>Running on port 3000 (or env PORT)</p>
    """

if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=port, debug=True)