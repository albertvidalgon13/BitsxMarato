FROM python:3.11-slim

WORKDIR /app

COPY . /app

RUN pip install openai==0.28 gpt_index==0.4.24 langchain==0.0.118 PyPDF2 PyCryptodome gradio

EXPOSE 5000

CMD [ "python", "app.py" ]