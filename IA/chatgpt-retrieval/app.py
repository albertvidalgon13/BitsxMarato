from gpt_index import SimpleDirectoryReader, GPTListIndex, GPTSimpleVectorIndex, LLMPredictor, PromptHelper
from langchain.chat_models import ChatOpenAI
from flask import Flask, request, jsonify
from flask_cors import CORS
import gradio as gr
import sys
import os

import constants

os.environ["OPENAI_API_KEY"] = constants.APIKEY

app = Flask(__name__)
CORS(app)

def construct_index(directory_path):
  max_input_size = 4096
  num_outputs = 512
  max_chunk_overlap = 20
  chunk_size_limit = 600

  prompt_helper = PromptHelper(max_input_size, num_outputs, max_chunk_overlap, chunk_size_limit=chunk_size_limit)
  llm_predictor = LLMPredictor(llm=ChatOpenAI(temperature=0.7, model_name="gpt-3.5-turbo", max_tokens=num_outputs))
  documents = SimpleDirectoryReader(directory_path).load_data()
  index = GPTSimpleVectorIndex(documents, llm_predictor=llm_predictor, prompt_helper=prompt_helper)
  index.save_to_disk('index.json')
  
  return index

def chatbot(input_text):
  index = GPTSimpleVectorIndex.load_from_disk('index.json')
  response = index.query(input_text, response_mode="compact")
  return response

index = construct_index("docs")

@app.route('/api/ask', methods=['POST'])
def api_ask():
    global query
    if request.method == 'POST':
        data = request.get_json()
        query = data.get('question', None)
        if query is None:
            return jsonify({'error': 'Missing question in request'})
        response = chatbot(query)
        answer = response.response
        return jsonify({'source_file_path': "Trusted info", 'answer': answer})
    else:
        return jsonify({'error': 'Invalid request method'})

if __name__ == '__main__':
    chat_history = []
    app.run(host='0.0.0.0', port=5000)
