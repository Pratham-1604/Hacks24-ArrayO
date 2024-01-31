from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import spacy

app = Flask(__name__)
CORS(app)


class InteriorDesignChatBot:
    def __init__(self):
        self.nlp = spacy.load("en_core_web_md")
        self.keywords = [
            {
                "words": ["modern", "contemporary", "sleek", "clean"],
                "styles": ["Modern"],
            },
            {
                "words": ["traditional", "classic", "warm", "cozy"],
                "styles": ["Traditional"],
            },
            {
                "words": ["minimalist", "simple", "minimal", "uncluttered"],
                "styles": ["Minimalist"],
            },
            {
                "words": ["eclectic", "vibrant", "colorful", "unique"],
                "styles": ["Eclectic"],
            },
            {
                "words": ["modern", "contemporary", "sleek", "clean"],
                "styles": ["Modern"],
            },
            {
                "words": ["traditional", "classic", "warm", "cozy"],
                "styles": ["Traditional"],
            },
            {
                "words": ["minimalist", "simple", "minimal", "uncluttered"],
                "styles": ["Minimalist"],
            },
            {
                "words": ["eclectic", "vibrant", "colorful", "unique"],
                "styles": ["Eclectic"],
            },
            {
                "words": ["cozy", "warm", "comfortable", "inviting"],
                "styles": ["Traditional", "Eclectic"],
            },
            {
                "words": ["clean", "sleek", "organized", "efficient"],
                "styles": ["Modern", "Minimalist"],
            },
            {
                "words": ["vintage", "retro", "antique", "nostalgic"],
                "styles": ["Eclectic", "Traditional"],
            },
            {
                "words": ["bright", "airy", "spacious", "light"],
                "styles": ["Modern", "Minimalist"],
            },
            {"words": ["rustic", "natural", "earthy", "wooden"], "styles": ["Rustic"]},
            {
                "words": ["luxurious", "opulent", "elegant", "plush"],
                "styles": ["Luxury"],
            },
            {"words": ["industrial", "urban", "edgy", "raw"], "styles": ["Industrial"]},
            {
                "words": ["bohemian", "free-spirited", "artsy", "colorful"],
                "styles": ["Bohemian"],
            },
            {
                "words": ["futuristic", "innovative", "tech-inspired", "modern"],
                "styles": ["Futuristic"],
            },
            {
                "words": ["vibrant", "colorful", "lively", "bold"],
                "styles": ["Eclectic"],
            },
            {"words": ["serene", "calm", "relaxing", "tranquil"], "styles": ["Zen"]},
            {
                "words": ["playful", "whimsical", "fun", "cheerful"],
                "styles": ["Playful"],
            },
            {
                "words": ["contemporary", "sophisticated", "chic", "elegant"],
                "styles": ["Contemporary"],
            }
            # Add more styles and associated keywords as needed
        ]

    def calculate_similarity(self, input_words, keyword_words):
        input_embedding = self.nlp(" ".join(input_words))
        keyword_embedding = self.nlp(" ".join(keyword_words))
        similarity = input_embedding.similarity(keyword_embedding)
        return similarity

    def extract_keywords(self, user_input):
        user_doc = self.nlp(user_input.lower())
        user_keywords = [
            token.text
            for token in user_doc
            if token.text
            in {word for kw_set in self.keywords for word in kw_set["words"]}
        ]
        return user_keywords

    def recommend_style(self, user_input):
        user_words = [token.text for token in self.nlp(user_input.lower())]
        print(user_words)
        max_similarity = 0
        recommended_styles = []

        for keyword_set in self.keywords:
            similarity = self.calculate_similarity(user_words, keyword_set["words"])

            if similarity > max_similarity:
                max_similarity = similarity
                recommended_styles = keyword_set["styles"]

        user_keywords = self.extract_keywords(user_input)

        if recommended_styles:
            return user_keywords + recommended_styles
        else:
            return ""


# Create an instance of the chatbot
chatbot = InteriorDesignChatBot()


# Define a route for the API
@app.route("/recommend_style", methods=["POST"])
def recommend_style_api():
    data = request.get_json()
    user_input = ""
    for i in data:
        user_input += data[i]
    print(user_input)
    recommendation = chatbot.recommend_style(user_input)
    return jsonify({"recommendation": recommendation})


@app.route("/get_gltf", methods=["GET"])
def get_gltf():
    # Path to your GLTF file
    gltf_file_path = "3dmodels/scene.gltf"

    # Read the contents of the GLTF file
    with open(gltf_file_path, "r") as file:
        gltf_contents = file.read()

    # Set the appropriate MIME type for GLTF files
    response = app.response_class(
        response=gltf_contents, status=200, mimetype="model/gltf+json"
    )


    return response


# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
