FROM python:3.12

WORKDIR /usr/src/AI

COPY requirements.txt ./

RUN pip install langchain openai chromadb tiktoken unstructured flask flask-cors

COPY . .

EXPOSE 5000

CMD ["python", "chatgpt.py"]
